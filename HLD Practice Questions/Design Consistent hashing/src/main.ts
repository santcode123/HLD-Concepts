const servers = ["S0", "S1", "S2", "S3", "S4", "S5"];
const ch = new ConsistentHashing(servers, 3);

console.log("UserA is assigned to:", ch.getServer("UserA"));
console.log("UserB is assigned to:", ch.getServer("UserB"));

ch.addServer("S6");
console.log("UserA is now assigned to:", ch.getServer("UserA"));

ch.removeServer("S2");
console.log("UserB is now assigned to:", ch.getServer("UserB"));
