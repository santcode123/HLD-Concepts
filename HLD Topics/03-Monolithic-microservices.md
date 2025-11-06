#### Monolithic vs Microservices Architecture
    Source: https://www.youtube.com/watch?v=l1OCmsBnQ3g&list=PL6W8uoQQ2c63W58rpNFDwdrBnq5G3EfT7&index=4 

   Introduction: We will explain advantages and disadvantages of both architectures, and you decide which one you need to choose and why.

   1. DisAdvantages of Monolithic: In monolithic we have only one code base and everything is inside one codebase
     i. CI/CD process get harder and time consuming, and from developer perspective also code base becomes large and dev mode takes time and slow down the time consuming
     ii. code is very tightly couped so one change might other break functionality
     iii. suppose we have one app, that has sale, online store, payment support but people are using more the payment service and want to scale it , we will another server and we need to keep whole code there and space will be more, so we need to pay extra meony which is not required.


Microservices Architecture: 
In Microservices we break chunks of functionality in different code base and maintain seperatly, so each task can deployed and developed seperatly.

Advantages of Microservices: 
1. scalabilty: we can scale the services seperatly with less resources needed.
2. loos coupling: code will be not tightly couped.
3. Managmenet and developement get faster.

Disadvantages of microservices: 
1. Monitoring issue: difficult to debug if something breaks : suppose service1 -> service 2, service 2 sends different response due to some code changes in service 1, service 1 breaks but actually something wrong with service 2 code, so this includes some debug complexity and needs better understanding.

2. latency issue: if micro services are tighly couped with each other than response time can increase because any microservice need to communicate over the network and wait for response of dependented service, so make sure mirco services are not tighly coupled.

3. Transaction managment complexity: suppose one client request came that involves two services db and one service db transaction failed, and one service db got success, no we need to roll back success txn db as well to maintain ACID properties.



Microservices decomposition rules
 1. decomposition based on business 
 2. decomposition based on modules.

#### Strangler Pattern
This is machanigm to migrate the Monolithic codebase to micro services, there will be comntroller which will route all the requests to 
monolithic and microservice based on requiredments, gradully we will increase the percentage of routing the api to micro services with time.

#### Data Managment in Microservices
1. shared database: each services shares the common database and use it.
2. Seperate Database: Each services has their own database and and keep relevant data inside the db.

Disadvantages of shared database approach: 
1. we can not scale based on micro service level, need to scale whole db 
2. we want to change in db schema according to once mirco service then we need to take of other services depedency on that table.
3. Performace bottleneck: as all the services will use same database then some operations might take time because  a lot of request needs to be
handled by the db.

Advantages of shared Database approach: 
1. we can main ACID properties in one txn(easy)
2. join and read is easy

Advantages of individuals database approach:  
1. easy to scale based on services uses
2. we can change db schema with thing more about other services
3. we can use different database for different services (SQL, NoSQL, postgress).


#### SAGA Principle(Managing transaction in distributed systems)
1. choregraphy saga pattern: it is a event driven architecture, each services communicate via events, it becomes complex if we have so many
micro services which needs to communicate each other.
2. Orchestration: there will be central orchestrator that will be reposible for each transaction, every request will go through it and it decides 
when to rollback and commit the changes (compesate the txn).


#### CQRS Pattern(command Query resposiibilty segregation) ( used of fetching data from multiple tables presents in multiple dbs).
1. in this pattern one more db is created which contains all the microservices data and stay in sync whenver some changes happens in micro services
databases. this common db is used for read purpose.