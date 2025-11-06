#### Consistent hashing

Introduction: we have seen horizontal sharding in db and load balancer will route the request based on hashing, we are using
moduler based hashing then it's if number of nodes are fixed, if we add or remove then we need to rebalance the data which can be very hactic, also data willl be unconsistent.  to solve such problems we can take advantages of consistent hashing which will rebalance (1/n%  of total keys) keys on average.

to make distribution more evenly distributed we need to add virtuals node and handle the requests accordingly.


Problems with normal moduler based hashing:
1. data inconsistency
3. data rebalancing is always equal to alll data from removed node, which can be expensive


