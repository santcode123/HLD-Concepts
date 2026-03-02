
## Sql fundamentals

#### Normalization
Normalization in rdbms is try to keep integrated data and reduce space required for data to stores, reduce data duplications etc

1-normal form: each cell of table is atomic, which means we can not keep multiple values in one cell

Example

studentName | subjects

Ravi  | math, science

After 1-form normalization

studentName | subjects

ravi | math
ravi | science

2-normal form
it states that table should be in first normal form and if we have composite key , then any non composite column should not dervied from partial composite columns

Example:

rollNo  class book price
1       A      yy  45
2       A      zz  67
1       B     yy  45


here in this example we have composite key (rollNo, class) but price depends on book only

after 2-nd normalization

rollNo  class book              book  price
1       A      yy     and       yy   45
2       A      zz               zz   67
1       B     yy  

3-normalization form

it should be in 2nd normal form and there should not be any transitive dependency, which means any non key attributes drived from another non key attributes

example

name  | age | category

santosh 27   adult
Joo  24  adult
kie   18  kid
loop  67  old

in  above exmaple category is drived from age column so it's not in 3rd normal form, after seperating category we can achieve 3rn normal form.


Note: we generally do  not choose composityte key, we keep unique constraint on them and incremental id is chosen as primary key



#### Choose correct data type

1. INT VS BIGINT => choose INT bigint, until u are sure that you are going to insert some records more than 2 billion where int might fail, like twitter snowflake can be stored in BIGINT only

2. VARCHAR vs TEXT => choose varchar over text, as varchar take less space compare to text, also we can define maximum length in varchar

3. float vs double => use double instead of float due to precision concerns

#### what is difference between composite and primary key

composite key the column or set of column which uniquely define each row and can be used as primary key, we can have more than one composite key but can not have more than one primary key.

#### Foreign key
the column which refers to other table primary key is know foreign key.

#### Soft delete vs hard delete
in soft delete we do not delete records from disk instantly, instead we keep a deleteDate column in which we enter the date, while fetching data we ignore such entries and we might done a cron job which can delete such entries if it's older than 30days or more.

in hard delete we immediatly delete records from the database (hard disk), very dangerous if not used carefully.

#### Audit columns: created_at, updated_at, deleted_at
always try to keep audit column for better debugging purpose


#### Indexing in sql

when we do

create index age_index on customers(age)

database internally uses B+ tree, and optimizes the searching.

if you want to seach based on two column then you can do indexing on both column and make sure higher carditnalty column should be first and also order matters when we do searching

create index age_index on customers(name, age)

if we have less cardinality we generally do not keep indexes on such columns

indexes are not always better choice keep, we need to know tradeoff as well, as if we write in database then we also need to update the b+ tree to maintain them so writes become slow because it has to update each b+ trees so in ready heavy db only we should think about indexing more.

in composite indexing left most rules are followed which means if we seach with left column then indexing still works

example:
I have defined indexing as: CREATE INDEX customer_index ON customers (name, age);

and searching as:
SELECT *
FROM customers
WHERE name = 'santosh';



#### How does joins works

left join, inner join, self join, right join,

by default innner join is applied

inner join: combine all the columns of both table when condition is met, we should have a common column on whcih we can take joins

left join: smiliar to left join , but if values is not matched in right table then it takes default value null

right join: reverse of left join

example

```
SELECT c.customer_id,
       c.name,
       o.order_id,
       o.amount
FROM customers c
LEFT JOIN orders o
    ON c.customer_id = o.customer_id;

```


#### Subquery

we can use subquery at many places and where it is being used it behaves diffently

Example

SELECT studentId, SUM(marks) AS total_marks
FROM students
GROUP BY studentId
HAVING SUM(marks) > 80;

SELECT emp_id, name, dept_id, salary
FROM employees e
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
    WHERE dept_id = e.dept_id
);


having condition runs for each group and pick marks from that group only.

where condition runs for each row


####  Constraints & Data Integrity

Example

CREATE TABLE students (
    student_id INT NOT NULL PRIMARY KEY,
    student_name VARCHAR(100) NOT NULL,
    father_name VARCHAR(100) NOT NULL,
    teacher_id INT NOT NULL,
    UNIQUE (student_name, father_name),
    FOREIGN KEY (teacher_id)
        REFERENCES TeacherTable(teacherId)
        ON DELETE CASCADE
);

we can appply cascade, restrict on foreign key delete, cascade let delete parent table entry if foreign key entry get deleted


 #### Pagination & Large Data Handling

 We can use offset and limit together for pagination but if we write data in between then it might change the page data
 so it's better we use cursor based pagination in which we keep createdAt column where we store time stamp, also client sends the cursor (date filter)

 select * from students 
 order by createdAt DESC
 where createdAt<custorDate
 offset(pageSize)


 we get data from above query and we store cusrorDate of last entry from the data received from above query

 then send it to client

 Note: if interviewr ask that what happens if there is timestamp collision then what you will do, we should send ther flag id , on which we can filter and continue our pagination.


 #### Some Sql cmds which important for solving problems

 alias: how does alias work for column name and tables

 select name as studentName from studens s join teachers t on s.teacherId = t.id;

 order by: used when we want to order fetched data based on some column values in ascending or desending orders

 example

 select * from students order by rollNumber ASC;

 Group by: it is used when we want to group the rows based on some column value, if you want to put the condition on each group you should use having clause

 select AVG(age) from students group by age having AVG(age)>50

 like clause:
 SELECT *
FROM table_name
WHERE column_name LIKE pattern;
NoteL % and _ are used for patterns

DISTINCT: it can be used when you want distinct values from the column


CONCAT: used to contact the string, if it;s not suppoted then better to use + or || in sql

SUBSTR or SUBTRSING: SUBSTR(columnName, startIndex, numberOfChar): startIndex strat from 1;


case: we use case expresssion when we want to add one more column while quering dynamically

Example:
SELECT CustomerName, Age,
CASE
    WHEN Age BETWEEN 15 AND 20 THEN 'Young'
    WHEN Age BETWEEN 21 AND 30 THEN 'Adult'
    ELSE 'old'
END AS AgeGroup
FROM Customer;



Window function: in sql we can define customized window and on that window we can apply any window function like ROW_NUMBER(), RANK(), SUM()

Exaxmple:

Select employeed_id, 
department_id,
SUM(salary) OVER (partition by department order by departmentid) as totalSalaryAmount
from employeeTable

what if we want to give rank to employee amoint department based on their salary

select employee_name,
employee_id
RANK() OVER(partition by department_id order by salary) as employeRank,
department_id,
department_name
from employeeTable



CTE in sql: cte table are temporary tables which are destroyed after query has been finished
```
WITH cte_name AS (
    -- Your subquery logic here
    SELECT column1, column2
    FROM table_name
    WHERE condition
)
-- Main query referencing the CTE
SELECT * 
FROM cte_name;
```

