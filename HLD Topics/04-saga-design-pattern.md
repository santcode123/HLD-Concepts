#### Strangler , Saga and CQRS patterns for microservices

##### Strangler pattern:
 initially we generally start with monolithic architecture and slowly we move to micro services when we need to scale our systems, starngler pattern suggest to build some microservices and move the traffic to microservice, and increase if it looks stable otherwise move whole traffic to old monolithic if something goes wrong.

##### SAGA Pattern

Understand why we need saga pattern: while moving to microservice we can generally choose shared database or different database for each microservices.  we generally prefer seperate database due below problems with shared database

Disadvantage of shared database: 
 1. if suppose one service uses lot's of data and want to scale data base for that particular service we need to scale whole shared database which will cost more.
2. suppose i am changing something in one table in the shared data, want to make sure it will not impact other microservices logic.

Managing ACID properties are simple in the shared database, but difficult in the individual database and query joings are also difficult in the individual database.


Types of saga design pattern
1. cheoreography saga pattern: each microservices subscribe some events and publishes the event which can be subscibed by other 
micro service, there are some downfall of this, it can become more complex if we have tighly coupled micro services and can create circular dependencies.

2. orchestration saga pattern: there will be a central event manager that will take care of it