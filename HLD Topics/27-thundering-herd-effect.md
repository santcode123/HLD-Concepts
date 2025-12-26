#### Thundering herd

Diagram: 

![Diagram](./images/thunder-herd.png)

What is thundering herd:
when we get so many requests at the same time, server will not able to process them quikly so it might take time to process and meantime client timeout the request and retry again that effect is known thundering herd effect

Below are use cases where it can happen
1. suppose we get so many requests from diffeent users at the same time.
2. suppose for a hot key we have missed the cache and all of the requests are hitting db server.


How to resolve thundering herd problem

Solution: we can add expontial delay to client side with jitter(random delay)

delay =  2^n + random jitter delay

if we keep simple expontial delay then also problem will not get resolved as at the same time retry will happen.


happy coding...