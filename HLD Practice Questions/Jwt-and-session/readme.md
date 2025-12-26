### JWT (JSON WEB TOKEN) and session

In this article we will explain jwt and session based authorization.

authenticate: -> user enters user name and password to logged in , that processs is known authenticate
authorization: -> once user is logged in, to indentify that subsequent requests are also coming from same user who authenticated and we issued the permision to that user, we use authorization techniques to that the susequent requests are coming from logged in user only.


There are two techniques to achive above requirements

1. jwt
2. session based logged in

#### JWT

JWT is a token which has three part

header . payload . signature

header has information which jwt algo has been used in token
payload has user info, like which user and what role they have
signature is done by backend using private secret key


example for generating jwt token

```
const payload = {
    userId:123,
    role:"admin"
}
const token = jwt.sign(payload, secretKey, {expireIn: '15m'});

return res.json({token}); // client will receive the token in response
```

as we all know jwt token contains all the information and it's stateless authorization process, if someone steals the jwt tone then they can access our information to avoid such thing we keep jwt short lived like 5-10 minutes and maintain refresh token which will help to generate new token once old one is expired, we keep refresh token in redis so we can validate refresh token before issuing new jwt token , along with refresh token we keep user agent, ip address, revoededAt, createdAt and other information.

followup questions:
How do we handle logout:
approach one-> we can keep blacklisted jwt token list in redis and check black listed token before routing
 cons: defeat the purpose of stateless 

approach: remove refresh token from redis and once jwt is expired we will need to login again and there new jwt and refresh token will be granted. (or we can updated revoked property instead of deletion)

Security advice: keep refresh token in https cookies only.


#### Session based authorization
session based on authentication is stateful approach and stores session in backend

flow-> user login with username and password, we validated username and password using bcrypt password (we do not store raw password, we store hashed password, also while sening password and username to backend we do encryption but it's optional as htpps also does encryption) -> once validated we create sessionId using express-session or using some other library, and we store session id crossponding to that user id in database, and set session id on htpps cookies, when we get next api call from same browser and we get session id in cookies, backend verfify that session id and keeps many checks like we get session if from same browser or ip address that logged in (for more security as banking and all).
```
redis db
[session_id]: {
    userId:12,
    createdAt,
    upadatedAt,
    expiresAt,
    ipAddress,
    user-agent
    //etc
}
```

if you want to inforce only one logged in per user, we can store one more entry

[userId]: sessionId,

we check if have already have some session id crossponding to same user, if it does then we override old one or throw the error based on requirements

// whenever we get api call we updated the expireAt entry in session otherwise it might log out interupptedly.

How do we handle logout.

we remove entry from redis or update revokedat in session entry and clear cookies



#### When to choose JWT and session based logged in

based on application requirement we need to choose any approach, 

suppose we have very sensitive info in website and wanted to maintain high security like(banks) then we should choose session based logged, there we can log out immediatly where in jwt that seems little complex.

in other application which are not that sensitive and need stateless logged in approach which is easy in microsevice and distributed architeture.

we can use combination of jwt and session in same application.