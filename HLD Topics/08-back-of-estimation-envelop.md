#### Back of the envelope estimation

   Introduction:  in the estimation we do the rough calculation and find out the RAM, Servers and Db requirments so it's better to do
   rough  calculation before starting the system design iteself.

   Note: do not invest much time on the calculation part itself.


   |   zerros     |     traffic      | storage
 
   |   10^3       |   Thousand       | KB (kilo bytes) -> 1 bytes has 8 bits
 
   |  10^6        |  Millions        | MB (Mega bytes)

   |   10^9       |  billions        | GB (giga bytes)

   |   10^12      | trillion         | TB (tera bytes)




   Assumptions

   1 image has size =>  300kb
   1 char has  => 2 bytes

   What we need to estimate

   1. number of servers
   2. RAM (in cache memory)
   3. storage capcity(DB storage /  disk storage)
   4. trade off (CAP Theorem)

   Calculation Example : x million * y MB => xy * 10^12

   Question: we will do the estimation for facebook

##### Reference for how node js handle concurrency: https://stackoverflow.com/questions/34855352/how-in-general-does-node-js-handle-10-000-concurrent-requests

According to me node js can handle 1000 request per seconds if we are doing normal calculation in the business side so latency we will be low only, we we have heavy calculation like doing crytograpgy and image transaformation logic in the node server then latency of api call will be inceased as node js is single thread language so for more details you can go through above reference which explains everything in details only.

   1. Traffic estimation

    Suppose facebook has 1 billions userbase => 10^9

    daily active user is 25% of total user's => 250 millions => 250 * 10^6.

    read and write operations per user =  5 read + 2 write =>  7 requests per user

    daily request  = 7 * 250* 10^6 => around 18*10^8

    requests per seconds =  18 * 10^8/ 24*60*60 => around 18k requests per seconds.

    based on this you can decide how many server we will be needing here to scale it further.


    2. Storage Calculation
     
     Assume 1 user posts 2 post => 2* 250 char =  1000 bytes = 1kb

     2 post => 1kb
     
     daily active user post storage = 250 million *1kb = 250 GB

     suppose 10% of the users upload a image = 10% of 250 million * 300kb image size  = around 8TB


     suppose we need to store those post and image for next 5 years's
      
      Toatal storage required around = 4*10^27

      Now ask yourself how are you going to store it in DB and which db you gonna use and how many DB servers we need to handle this huge data



      RAM Estimation for caching

     Suppose for each user we want to cache latest 5 posts in the cache

     1 post =  500 bytes
     5 posts = 2500 bytes

     daily active users =  250 millions

     so daily storage needed for caching =  250 millions * 2500 bytes = around 750 GB

     suppose we can handle 75 GB RAM in one server node then we might need 10 server node to handle caching system.


    What is concurrency and parallelism  and differenciate them properly.

    Reference for parallelism and concurrency: https://medium.com/@itIsMadhavan/concurrency-vs-parallelism-a-brief-review-b337c8dac350

    





