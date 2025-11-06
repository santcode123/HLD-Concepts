#### Rate limiter

why do we need rate limiter: to protect the system from ddos attack, ddos attacks are those attacks which hit the api from the some system and make our system busy so that it will not able to handle the actual users requests.


There are couple of algoriths that are being used for rate limiter implementation

1. token bucket: we have have fixed size bucket and has refilling interval, for each request we take one token from the bucket and proceed, if there are bucket token count is zero then we reject the in coming request (with 429 too many request code), we can config the size and interval duration from config file.

what is the problem with fix size token bucket: some times tarffic flactuates with hours  but this algo can not adapt it as this algo has fix refilling rate so in pick time some legitimate reqests can be rejected.

2. leaking bucket algo: in this algo requests will be process at certain rate and bucket has some fix size, we put all the incoming requests in that bucket and will be processed by the server, but this approach also can not handle sudden spike in requests by legitimate users. traffics will be constant on the server and will not increase the sudden.

3. fixed window count: we keep some counter for fixed size interval and we allow that many requests in that interval, the traffic can burst near to bountry of interval that we defined.

4. Sliding window log: we keep all the logs for the incoming request and validate whether we have number of logs more or not , if we have more logs in certain time then  we will reject the incoming request.

5. Sliding window counter Algorithm:  this algo is the combination of sliding window log and fix window counter, here we do not maintain the logs in the memory we just calculat the how many request has been filled in the current window.

6. 
