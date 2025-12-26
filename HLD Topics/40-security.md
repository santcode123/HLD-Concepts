#### CSRF, XSS, CORS and SQL injection


##### csrf(cross sit resuest frogery):
When this attack can happen
 when we have session based loggedin process
 when we have samesite cookies none

Scenario: suppose you have logged in to bank.com website and in another tab you have opened some eveil.com(fishing website), 
in evil.com website there is button to see some image which internally calls your bank.com api to deduct amount, then server do not know whether resuest is sent from evil or not, server assumes it as valid user since browser adds cookies to same domain atomatically, and also cors protection does not work for form api's so we are under attack

code

evil website form


```
<form action="https://bank.com/deduct?amount=5000 & to=566565" method="post">
   <input value ={5352}>
</form>
```

How to get protected from csrf attacks
1. we need to use httpsOnly and secure in cookies (cookies will be sent over https only, which means all data will be encrypted, reduces risk of public wifi data stealing attacks)
2. use SameSite:lax or strict, which blocks sending cookies to the request which originated from different domain then bank.com
lax allows get request from different domain to access cookies but strict does not allow, you keep it based on your requirements. if samesite is not specified in the response header then browser set it to lax by default (chorme, dafari etc).
3. samesite lax does not fully protects the csrf attacks as we allow get request from different domain, so we need to generate csrf token from the server when user logged in, and send in the response, and we can store csrftoken in memory of frontend bros=wer like reduc , react context.

##### XSS attack(cross site scripting)
when we do not sanitize user input and save it in db directly and render those comments to someone else device when they open that website which legitimate but has xss valunerability so attacker can still the session cookies etc.

How to protect your website: always sanitize the user's fields and replace < and > by &lt  and &gt


#### Sql injection
if we have written sql code without proper typeorm or parameterized format that we are valunerable to sql injection, sql injection happpens when we directly use user input as value and put in the raw sql

solution: use parameterized queries or typeorm

example db.query(select* from users where userName=? and password=?, [a,b]);


#### CORS attack:
cors attacks can be done if it is misconfigured at server side, allowing every domain to access sensitive api's