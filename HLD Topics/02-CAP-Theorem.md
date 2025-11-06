### CAP Theorem(Consistency, Availability, Partition tolerance)

Introduction: This is used for system design architecture, before designing a system we should have better understanding of cap theorem, otherwise we might need to change the requirements accordimngly.

CAP therorem states that any system can prodivde any two from CAP, not all , so it's up to us in which area we want to trade off and why.


Consistency: system should be consistent in data , and never send the stale data, so every time we send request we get the same data irrespective of which DB server was being used



                                [Web server]
                                    |
                                    |
                              [Load balancer]
                              /            \ 
                            /                \
                    [DB Server A]          [DB server B]

Availability:  Suppose we have two db  node, if webserver send the request to any of them , they should respond, that is known availability, which means webserver can send the request to any of them.

Partition Tolerance: suppose we have partitioned the data base into two node, and both nodes are in sync, if due to internal fault for some time db node A and db node B commincations breaks so they will not be in sync anymore, so how to take this situation is know partition tolerance, we can not shut down our whole server due to connection down so we need to compromise in Consistency and Availabilty, in genrally we can not ignore Partition tolerance.


possible case
CAP: not possible, you can give an counter example to defend it.
CA -> Not a real case becasue we can not ignore partition tolerance bur
CP -> for example for banking systems they need data consistency so they will go with CP
AP -> for example for socila media data consistency does not matter that much, for them availability of db node matter because they need to handle many request in fraction of time, we can not ignore the availabilty of an node, then load on other nodes will increases.


