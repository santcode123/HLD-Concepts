### Load balancer and different algorithms

Introduction: there are many types of load balancer like network load balancer, application level load balancer etc(OSI layers wala)

Load balancer takes the request and distributes the request amoung available servers, based on load balancer algorithm that we have implemented

1. Static Algorithms: in this algo load distribution will be static will not changes based on server capcity and on the live it can not be changed

2. Dynamic Algo: this opposite of static algos

#### Static Algorithms
i. Round Robin
ii. Weighted Round Robin

Round Robin:  Suppose there are two server S1 and S2, load balancer will distribute the load in round robin fashion starting from S1, then S2 then S1 ... keep it the same

Advantages: 
1. Simple to implement
2. evenly distributed

DisAdvantages: 
1. Can not distributed load based on server capacity, more capable server should get more request compare to less cabable server.

#### Weighted Round robin
In this algo we assign some weight to servers and send the request based on weight assigned to the server, suppose we have two servers S1 and S2, S1 has 2x capacity compare to S2, then S1 recieve the requests as follows
S1: req1, req2, req4, req5 ....
S2: req3, req6 ...

Advantages:
 we are able to distribute the load based on server weights

Disadvantage:
what if more heavy requests goes to less powered server, that might cause to the server to down.


#### Hash IP
in this approach, there will be a hash function that will calculate the hash value(server nuber) based on ip address, same ip addresss will go to same server.

Advantages:
same user's request will go to same server


Disadvantages: 
requests might not be evenly distributed

one server might get lot of request as we might be getting the request from proxy server(like CDN).


### Dynamic Algorithms
i. least connection
ii. weighted least connection

#### Least Connection:
the request will routed to the server which has least number of open TCP connection.

#### Weighted Least connection
in this approach we calculate the following value

pick the request the server which has least (Active no of TCP connection * TTFB), TTFB is the time taken between req and response.

