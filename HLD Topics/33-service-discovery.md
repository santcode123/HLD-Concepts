### Service discovery

why we needed service discovery
in modern server we dynamically add and remove the applicationn servers based on load that we we, that thing can be done containerized deployment(kubernates cloud). whenver new machines added their ip address changed so we need to keep track of them so that load balancer can route accordingly.

for that purpose we need service discovery seperate server that tells all servers info to load balancer, we can keep cache inside the load balancer as well to keep track of all servers info so that it can route the requests.

There are two types of service discovery

1. client side -> client calls service discovery and route the request to one of the instances
2. server side -> load balancer calls service discovery and route the request to one of the instances.

how to make service discovery fault tolerant: we can use raft based consensus algo in master, slave architecture


Issues:
issue 1: service discovery can be a single point of failure

solution: we can keep multile instance of service discover and sync there db in sync and also cache at application level

issue 2: how do we handle discovery of micro services

solution: micro service talks to service discovery and get all the instances and send the request.

