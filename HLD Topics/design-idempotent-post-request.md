### What is idempotent requests

1. the requests which does not have side effects due to duplication are called idempotent rquest
 delete, get, put all are idemptent request exxcept post, post might have side effects due to duplication of requests.

 there are two use case there we need to  make post request idempotent
 1. when request has been timeout from the client side and still processing on the backend side and client has retried the same request again.

 2. if two parallel same request came at the same (concurrency).

 for this we create a idempotent key at client side unique for each request, using idempotent key we decide the handling of the request, we keep a db there we store idk with it's status created or consumed, if it's created then duplicate request will return 409 (duplication code ) to the client (already processing the same requests).
 if idk status is consumed then return the result and do not create anything, return the things which was already created by the first request.

 we can keep the idempotency key and value in the redis cache for fast retrival.
 
  