#### How to scale the server from zero to millions users

1. single server: in the starting we can start from single server and good with few users (Application and Database hosted in same server)

2. Seperation of Application and Database server: 
  i. Application server take care of business related logic
  ii. Database server will be responsible for data insert and retrival into DB.
  iii. each of them can be scaled independently 

3. Load balancing and Multiple Application server
   i. introduce the load balancer to distribute the incoming request to different application servers, which will reduce the 
   load to a particular application server and also if one server is down load balancercan route the request to other active servers
   ii. Load balancer adds a one layer of sercurity (ddos attack can be avoided if we add rate limiter).
   iii. load balance and application server talk through private ip address.
   
4. Database replication:
   i. we should replicate the database and should have master and slave db architecture.
   ii. master db is responsible for write operations and slave are generally used for read purpose
   iii. if master db failed then any slave can become master db and hanle the requests so that our service will be live.

5. caching: 
  i. utilize the caching layer to store frequently accessed data
  ii. reduces database load and improve the response time. (latency).
  iii. each entry has their (TTL) time to live expiry in cache.
  iv. before hitting the db , check the data in cache and then go to db.

6. CDN (content delivery Network): 
   i. uses a distributed  Network of server to cache the static resources like html page, images, video which do not change frequenctly.
   ii. whenver user try to access the website , nearest cdn will check for corresponding html , if cdn has that html will be returened to the 
   user.
   iii. in case of cache miss, cdn asks it's nearest cdn for the resources.


7. Multiple data centers
   i. distribute Application and db server to different data center based on geographical location.
   ii. reduces load to individul data center and improves the latency.

8. Messaging Queue:
  i. to complete async nature of task we can uitlize the message queue technology
  ii. Decouple main task and async tasks (like sending mail, notifications etc).
  iii. we can use kafka and RabbitMQ for messaging queue.
  there are many methods in rabbit queue to send message to subscribers
  a. direct: send the qeuue which has same bind key as routing key
  b. fanout: send to all queues
  c. topic: wild comparision, can send message to more than one queue

9. database scaling.
   i. vertical scaling: add more CPU and RAM to the existing server to handle more requests, but each physical server has their own limits so we
   can not scale it after certain peek point.
   ii. horizontal scaling: we add Multiple db server and use the sharding technology to distribute the data amoung the shards, but there will be some difficulties while doing join and all.

   if we want data from different shards we can put logic of merging shards data at application level.


   