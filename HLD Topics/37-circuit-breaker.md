### Circuit breaker

Consider below scenario: suppose our application server is using three micro services A, B, C for different pupose, if micro service A is failing, so whenever we send request to service A, it takes time to replay(unit timeout). so we are blocking threading for each request going to service A, if we get more than 200 request and have thread upper limit 200, then we might queue other coming request which cause system slowness and failure due to once service down, other services are working , so to avoid such use cases we need to add circuit breaker for each micro service and should return error to client if micro service failures has exceeded the threshhold

Circuit breaker has three states, open, closed, half open, in the start it will be in closed state, once failure qpi count exceeds the threshhold limut then it goes to open state , after certain timeout circuit goes to half open state allow request to goes to service and check whethere it is still failng or not based on serive again it goes to open or closed state based on service response.


Note: some time people circuit beaker is proxy, but it's not, it is just a concept that can be implemented on proxy or application server it's our choice.


We impletment circuit breaker to avoid cascading failure.

Why we need circuit breaker in node js server: in node js we handle api call in async manner, and have only one thread, thread is never blocked in api call, but for each api call we some clouser which might increase memory consumption when many request are on server which can cause server crash.