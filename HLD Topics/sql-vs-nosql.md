#### When to choose sql vs no sql

#### SQL
SQL (Structured query language): used to query in the relational database managment.

Structure: we need to define the table and schema before using the db itself.

Nature: it's very difficult to keep sql db in different shards so it's centralized in the nature.

Scalability: Vertical sacling is very easy compare to horizontal scaling, 

Property: SQL follows ACID property.

  i. Atomacity, Consistency, Isolation, durability.

  #### No SQL (Non relation database).

Structure: does not follow proper schema, we can add anything as a value.
there four db type as listed below
   i. key-value: we can only search based on key, not based on value.
   ii. Documents db: any thing can be inserted in the documents db, example. mongodb.
   iii. Column wise db:
   iv. graph db: if data node has so many relations it's better to choose graph db , for example facebook uses graph db to keep connection datas in the db.

Nature: Distributed, it's easy to keep same db in different shards.

Property: does not follow ACID property, follows Base proprty

When to use SQL vs no sql

SQL: if we need some flexible query, before hand we do not know exact what we need to fetch, but as time goes we realise different combinatios of data.

NoSql: basic query supported, in advance we are aware what needs to be searched.

SQL: if there are so many relations in the data, many join is required.
NoSql: joins are very difficult

Sql: Data integrity is required, consistency is required.
NoSql: integrity might be disrupted.

Sql: sql does not support big data store and search something inside it.

NoSql: big data can be stored in different shards.

NoSql has better vertical scalability and availability and hight performance with low consistency.
