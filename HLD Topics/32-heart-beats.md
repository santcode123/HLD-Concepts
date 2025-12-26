### What is heart beats

In distributed nodes we need to keep track of there heart beats, so that we can find out fault node as soon as possible and stop routing the requests to that node in future and send the alert to administrator fix the issue.

There are two types of techniques in which we measure heartbeats
1. pull technique
2. push technique

in pull techniques we have a centralized service which ask every server node about there health and keep time stamp along that, we decide the time interval in which we need to keep askig, if there are three consequtive no response from a node then we need to mask that node in active and send same information to load balancer which caches this thing at load balancer side as well, whenver load balancer receives the request then it re directs the request to heathcheckup service which return the all active nodes and their healths as well, load balancer decided and route the retuest to active node.

push techniques: in push techniques each node pushed the heartbeats to central service server and rest things remains the same.


issues: now we have single point of failure right?, how to overcome those issues.

first solution: we can keep a cache at load balancer side whenver health checkup server is down we can pick the active servers from cache which might contain inactive servers as well.

second solution: we should use gossip protocol, which has better fault tolerence but there might be a delay to inform that some node is down

Note: whenever we get a request to load balancer it will not call central service and ask for active nodes, because it can increase the latency so rather central service updated the list of active nodes in the load balancer periodically.