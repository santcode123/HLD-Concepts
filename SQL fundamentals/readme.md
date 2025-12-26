#### Below listed topics we will cover in this series

##### Date modeling and schema
You’ll be judged heavily on this in system design & backend interviews.

Must know

Normalization (1NF → 3NF) vs Denormalization

Choosing correct data types (INT vs BIGINT, VARCHAR vs TEXT)

Primary Key vs Composite Key

Surrogate keys (UUID, Snowflake ID) vs Natural keys

Foreign keys (when to use vs avoid)

Soft delete vs hard delete

Audit columns: created_at, updated_at, deleted_at

Handling multi-tenant data (tenant_id)

💡 Interview angle:
“How would you design a schema for Orders / Payments / Inventory?”

2️⃣ Indexing & Query Performance (CRITICAL)

This separates senior from mid-level.

Must know

B-Tree indexes (default)

Composite indexes (index order matters!)

Covering indexes

Unique vs non-unique index

Partial indexes

When indexes hurt performance

Cardinality & selectivity

Indexes for WHERE, JOIN, ORDER BY, GROUP BY

Practical skill

Reading EXPLAIN / EXPLAIN ANALYZE

Identifying full table scans

N+1 query problem

💡 Interview angle:
“Query is slow on a 50M row table — what will you do?”


3️⃣ Joins & Query Mastery

You must write correct + optimized queries.

Must know

INNER / LEFT / RIGHT / FULL joins

Self join

Cross join (and why it’s dangerous)

Join vs subquery (when which is better)

EXISTS vs IN

Anti-joins (NOT EXISTS)

Advanced

Join order optimization

Join on indexed columns


4️⃣ Transactions & Concurrency Control (VERY IMPORTANT)

Frequently asked in backend + system design interviews.

Must know

ACID properties

Transaction lifecycle (BEGIN, COMMIT, ROLLBACK)

Isolation levels:

READ UNCOMMITTED

READ COMMITTED

REPEATABLE READ

SERIALIZABLE

Phenomena:

Dirty read

Non-repeatable read

Phantom read

Locks

Row-level vs table-level locks

Shared vs exclusive locks

Deadlocks (how they happen, how DB resolves them)

💡 Interview angle:
“How do you prevent double booking / overselling?”


5️⃣ Constraints & Data Integrity

Senior engineers protect data at the DB level.

Must know

PRIMARY KEY

FOREIGN KEY

UNIQUE

CHECK

NOT NULL

ON DELETE CASCADE vs RESTRICT vs SET NULL

💡 Real world:
Why relying only on application-level validation is dangerous.

7️⃣ Pagination & Large Data Handling

Very practical backend topic.

Must know

Offset-based pagination (LIMIT + OFFSET)

Keyset / cursor-based pagination (preferred)

Problems with OFFSET pagination

Sorting consistency


8️⃣ Database Internals (Conceptual but Important)

You don’t implement DBs, but you must understand how they work.

Must know

How indexes work internally (B+ Tree basics)

Write-ahead logging (WAL)

MVCC (Postgres / MySQL InnoDB)

Buffer pool / cache

Why reads are faster than writes

Problems with auto-increment IDs in sharding


🔟 SQL Security & Safety

Often overlooked but senior-level expected.

Must know

SQL Injection (how prepared statements prevent it)

Least privilege principle

Avoiding SELECT *

Handling PII data

Encryption at rest vs in transit