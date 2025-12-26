### Gossip Protocol

Gossip protocol is generally used in micro service architecture or distributed system to share the details along other peers.

In gossip protocol, one node select some nodes randomly from it's cluster and send it's info to them(push), and every node does the same , with time node1 info spreads to all nodes, gossip protcol has eventual consistency.