### Database sharding

Problems in sharding that we will discuss in depth
1. how do we get data from cross sharding and how to optimize it
2. how do we handle cross shard transaction
3. how do we choose shard key

Introduction
When we have low user base we have only one data base and we keep everything within that database, or might have two database one for rdbms and one is for no sql, if user base increases slowly we can increase db server cpu and storage,ram etc but at some point we might realize that we need to think outside the vertical scaling.

Below are common reasons we might need sharding
1. data storage is increasing, if it's around 2-3 TB we can manage that in one server, but beyond that we need to thing in direction of sharding
2. if there are so many requests are coming , one server is unable to handle, which means we need to replicate the db server for read to reduce the load or need to shard the databse to reduce the load.


#### Strategies for sharding

Note: please note that most of the no sql databases support sharding internally you do not need to maintain any alo to do so, just you need to give shard key(column or combination columns) for sharding

in sql data bases sharing becomes little difficult i would say

1. range based sharding 
suppose we have divide user's in ranges like 0-10M shard 1, 10M-20M in shard 2,for that we can keep a mapping table where we can mention shards address based on user's id.

2. hash based sharding:
we choose some hash function and we give key to that hash function which evenly distrubutes the hash value amoung shards, in simple shard we need to take modulo of total number of shards, if we want to add one more shard then it will cause data movement from each shard which is not good point in perspective of availability so we need to think of consistent hashing where we keep shards on a ring and keep virtual nodes as well to distribute load more evenly, if we add or remove shards we just need to move data in one shard only.

Problems 

how do we handle cross shard queries:
if in some cases we need cross side queries we hit that queries to all shards and combine those results and give global result, but if we are having frequent cross shard queries then we need to rethink of shard key, becasue of wrong shard key we might face these kind of problems.

we can cache the result for sometime whenver we get same queries we do not need to hit all shards

Joins are difficult in cross shards, we should avoid cross shard joins, but still we need to take joins then we can de normalize the data or we keep one more db where we keep joins and that can be done asyncronously.

How do we hande cross shard transaction:
1. 2 phase commit: we have a coordinator who manages the transaction, we send the write to each shard and ask every shard whether they are ready for commit or not if we receive ok response from each shard(participant of transaction) then we trigger the commit to each shard(node). please think here single point of failures and how to mitigate those single point of failures

2. Saga Pattern: there are two types of saga pattern, most common is orchestration, in which one manager layer will manage the transactions, it uses messaging queues to publish events and each services listens to events and act accordingly.