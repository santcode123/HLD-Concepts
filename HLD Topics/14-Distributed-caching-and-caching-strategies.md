## Distributed Caching and Caching Strategies

Caching is the machanism in which we store most frquestly used data in the in memory instead of hard disk or database, while storing data in the cache we mention the TTL (time to live duration for each data).
Caching approach help for fast data read and help to reduce request latency. sometimes caching help to overcome fault tolerance in some cases based on implementation.

Note: we can access data from cache in 2-3 ms, where data base retrival can take 50ms


There are many Caching Strategies that we will discuss in this chapter.

Why one caching server is not enough
 in one cahcing server we can add only limited number of data so to scale it we need to have many cache server , for this appraoch we have cache client and cache client talk to collection of cache server, redirected by load balancer.


 ### Cache Aside 

 In this approach client send the request to server, load balancer redirect the request to one of the server based on load balancer algo, then web server send the read request to cache and check whether we have caching for that request or not ,if we have cache hit then send the response to client without fetching from the db, if we have cache miss then web server will fetch the latest data from the db and update the cache and send the response back to user. in this approach we have not handled the write then we might face data inconsistency.

 Advantage:
 good for heavy read request use cases.
 cache schema can be different than db schema

 DisAdvantage: 
 Data can be inconsistent if write are not handled properly , in case of write operation as well we need to update the cache.
 always first request will be cache miss 

 #### Read through Cache

 this is similar to Cache aside approach except here every thing happens on cache level, web server just send the read request to cache, then cache will check and if it is cache miss then fetch from db and update the cache and return to webserver.

 Disadvantage: it has similar advantage and disadvantage as cache aside except here cache schema should be same as of db schema.

#### Write around cache
In this approach we use cache aside or read through cache approach internally, but
we handle write operation to maintain data consistency, in the update/write operation
we directlt write in the db once db operation completed we mark cache dirty, so in next 
read request we check whether cache is dirty or not, if it's dirty we need to fetch
the latest data from db and update the cache and give the response go user.

 Advantage: we are able to maintain data consistency
 it's good for heavy read only ?? why please check ur self.

 DisAdvantage: if db operation failed then write/update operation gonna fail.

#### Write throgh cache 
We will write the data in the cache and then write the data in the db in the syncronous manner, this might increase the write 
request latency.

Advantages:  data consistency, first read will also encounter the cache hit, 
Disadvantages: write request ki latency will increase.

#### Write back (behand cache)
it's similar to write through cache approach except here we write the data asyncronous manner in the database.

Advantage: 
1. if db is down for short time then also we can take the request and write in the cache
2. read and write request will be having less latency.
3. good for heavy write operations

disadvantage: 
there is some rare case, if db is down for long time and cache Time to live(TAT) has been expired so data will be removed from
the cache and will not able to write once db is up, so for future request the data will be lost.

#### When we should propose caching
first we need to figure out the problems we are facing like, latency, or data base frequenct request for rarely changed resources then we need to think of caching, give cache aside strategies by default until interviewer asks specific strategies


Note: Thundering herd can happen if so many request misses the cache and hit directly the db, in different selection we will cover thundering herd problem



