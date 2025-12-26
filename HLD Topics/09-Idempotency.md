#### Idempotency 
Defination: idemptecy is a term which states that multiple (duplicate requests) should not have any side effect on server, which means calling one api one time and multiple times has same result.

GET, DELETE, PUT are idempotent by nature, you can think and understand why there are idempotent
but post request is not idempotent by nature, so we need to think in our implementation do we need to make post idempotent reqest or not , in general we do not need to make it idempotent, but when we implement retry machanism we need to think of idemotency.

Example: suppose we are making a payment api, and in client side we have 3 retry machanism , and kept 3 seconds of timeout, one api gets timeout we retry again, but in some cases suppose api is still in progress in backend and client has retried same request again which will cause a side effect.

To avoid side effect we send idempotency key in request header and sever keeps idemptency key in cache before processing and gives some TTL, again we request we check the idempotent key in cache, if it does not exists we can process, if it exists then we check it's status and response , suppose status is processed the we return status code 200, along processed response. if status is still in progess we send 409 (duplicate request or conflict) so client can handle accordingly.
