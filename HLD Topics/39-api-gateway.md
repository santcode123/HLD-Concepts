### API Gateway



What is difference between availability zone, region and data center

In could based infrastructure, ccompanies setup their data center at multiple places, in one region (location) they have multiple physical places where machines are there, those section are called availability zone, each availability zone has their own electricity power, you can say that availability zones are data center.

Below are the list of functionality that api gateway provides\

1. we can add authorization at api gateway
2. we can call service discovery from api gateway
3. we can combine responses of different micro service response
4. we can do cache at gateway 
5. we can route the request to particular micro service based on end point.


// if every request goes through api gateway then it can be single point of failures right? think


Diagram                                                               |----> Load balancer--->multiple instances of service A
                                                                      |
                                |----------->  AZ1 -> [Api gateway] ->|
                                |                                     |----> Load balancer--->multiple instances of service B
client ---> DNS --> Region ->   |    
                                |
                                |
                                |                                     |----> Load balancer--->multiple instances of service A
                                |---------->  AZ2 -> [API gateway] -> |
                                                                      |
                                                                      |----> Load balancer--->multiple instances of service B 