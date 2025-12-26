#### How to generate unique id in distributed systems

How you will generate unique id in distributed systems

Naive solution:

approach 1: we can use inbuild uuid generator which will generate unique uuid

in node js we use below code to generate uuid

const crypto = require("crypto");

let uuid = crypto.randomUUID();

but problem with above approach is that it's not sortable by time, it's random.

approach 2: we do not recommend this approach until u do not know anything then only you recommend it

we keep one sql table in which we insert every row, and consider row id as distributed id, so whenever any service need unique id they call id generator service which uses database internally and return row id.

but problem with above approach is that it's not scalable after some time.

approach 3: we can keep a counter in redis node and increment with each request, but that become single point of failure, so to avoid single point of failures we need to keep replicas and increment counter there as well asyn manner. but will can not claim strong consistency here as we can see many pitfalls when leader goes down.


approach 4:(recommended approac): twitter snowflake 

[time stamp] | datacenter id | node id | sequence

timestamp: 41 bits
data center: 5 bit
node id: 5 bit \ 11111= 1+2+4+8+16 = 0-31 number so we can have 32 nodes in  one data center
sequence: 12 bit

code:

```
class Snowflake {
  private sequence = 0;
  private lastTimestamp = -1;

  constructor(
    private datacenterId: number,
    private machineId: number
  ) {}

  generate(): bigint {
    const timestamp = Date.now();

    if (timestamp === this.lastTimestamp) {
      this.sequence = (this.sequence + 1) & 0xfff;
      if (this.sequence === 0) {
        while (Date.now() <= this.lastTimestamp) {}
      }
    } else {
      this.sequence = 0;
    }

    this.lastTimestamp = timestamp;

    return (
      (BigInt(timestamp) << 22n) |
      (BigInt(this.datacenterId) << 17n) |
      (BigInt(this.machineId) << 12n) |
      BigInt(this.sequence)
    );
  }
}

```