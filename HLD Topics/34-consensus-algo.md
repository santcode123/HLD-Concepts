### Consensus Algorithm

Consensus means agreement on mutual decision, consensus algo is being used at many places, one of them is leader selection

### Leader selection using consensus algo

we have suppose n replicas of a server in which all data from leader is replicated asyncronously, whenever we read we can read from replicas, but when leader is down we need to select one of the slaves as leader and keep system available, usually leader use to send heartbeat to all it's replicas, and we keep some random timeout on each replicas, if they do not recieve any heartbeats from leader that node start vote from itself, can he become a leader. other replicas sends yes and no based on what is there status along with that node, if they are ahead then they gonna vote no. if any node has vote more than n/2 support that node will be selected as a leader.

one of the famous algo is raft that will be used across multiple places 

Note: we can implement quqrum based commit for better consistency