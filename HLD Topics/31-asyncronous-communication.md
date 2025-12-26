### Asyncronous communication

When we want to decouple micro services from each other and improve the latency we need to introduce asyncronous communicaation

we can use message brokers like rabbitmq or kafka for async communications.

i will give an example where we might think of async communication.
suppose we have a order microservice, notication service, and shipping service, when user order somthing we need to send confirmation mnortifcation and start shipping , but these are not necessary to be done in one trasnaction which can improve the latency of order api, once order id done we push a message to notification and shipping service in messaging queue, later both micro services will consume the message and act accordingly.

there are two types of messaging queues
1. p2p(point to point): in this we have only one consumer
2. topic(pub/subs): we can have more than one consumer to one topic, those consumber can process the message accordingly

follow up questions
1. how we put messaged in dead letter queue(DLQ) in topic based messaging
2. we need to do some hands on project to get better understanding in kafka or rabbit mq

