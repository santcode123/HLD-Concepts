#### Database indexing

##### Let's understand how data is being stored in disk
when we say that we are storing data in db it's nothing but storing data in disk storage(permanent storage), DBMS is responsible for managing data retrival and writing in disk. DBMS creates data pages in which we divide huge data in to chunks and store in the data block.

each data page has three components
1. header -> contains details like how much free space is availale, page number etc
2. data storage -> storage the actual data
3. offset -> contains a offset array which keeps the order of row based on clustered index

generally each page has size of 8kb(most of database has 8kb, but it can differe db to db)

##### Why we need indexing and how indexing is stored in the background

We need indexing for quick data retrival, if we need fast searching indexing one the idea to think, but indexing has it's own downfalls as well, like we can not blindly impose indexing on each columns since in the back of dbms we create B+ tree to maintain indexing so our storage(memory) consumption gonna increase so we should be clever enough to do tradeoff.

#### Types of indexing

1. clustered indexing
2. non clustered indexing

clustered indexing can be one per table, in one table we can have only one clustered indexing , based on that clustered index we maintain the order of offset array, indexing is maintained by b+ tree and each leaf node contains the reference of actuall page and data

we can have multiple non clustered indexing, like secondary , compsite index, for each index we maintain a b+ tree


##### How does search is fast when we implement indexing

suppose we have not implemented indexing on some column and wanted to search based on that column value so dbms goves through each page and load them in to the memory and check the condition so time complexity will be o(n) where n is number of records(rows data)
if we have indexing then with the help of b+  tree we can get exact page that we need to check we load that page only and find out the data.


Example

```
create table users(
    id INT PRIMARY KEY,
    name VARCHAR(100),
    age INT
)

create index user_age on users(age);
```