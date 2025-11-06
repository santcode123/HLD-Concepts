### Network Protocols

  Source: [StckOverflow ](https://stackoverflow.com/questions/5352397/how-to-understand-network-protocols)

  Youtube Source: [Youtube](https://www.youtube.com/watch?v=JwTiZ9ENquI&list=PL6W8uoQQ2c63W58rpNFDwdrBnq5G3EfT7&index=2)

  Geeksforgeeks: https://www.geeksforgeeks.org/open-systems-interconnection-model-osi/


  Introduction:

  Network protocols helps the to establish a connection between two systems and share the data with security.
  There are 7 layer's present in the network protocols, each layer has it's own work to be done before exchanging the data.

  1. Application layer
  2. presentation layer
  3. session layer
  4. Transport layer
  5. network layer
  6. Data link layer
  7. physical layer

  In this section we will cover only Application layer and Transport layer

  #### Application layer
    Application layer follow two protocols
    1. client server protocols (HTTP, FTP, SMTP, Websocket)
    2. peertopeer protocols (WebRTC)

client server protocols is client and server communication
websockets are generally used for two  way communication( used in live chat application)



#### Transport  and network layer

1. TCP/IP (used in normal api calls)
2. UDP/IP (used in live streaming, video call over meet or whatsapp call)

TCP/IP (transmission control protocols): it breaks the large data into small chunks and send to over network and aknowlegement is needed
UDP/ip( user datagram protocol):  this protocols does not require aknowlegement so generally it's fast comparetvely to tcp/ip

Note WebRTC uses UDP/IP transaport layer for communication.



### Difference between PUT vs POST 
Diff: inside the post api we can do validation and more, but inside the put we just create or update for given url request so we need to send enough data to server for put request to support upinsertion and create operations.

Put is idempotent but post is not idempotent by nature, multiple put request will end up creating one record only, we need to pass the id in the put requrest.
