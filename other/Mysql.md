# 删库跑路

## 理论知识

* CRUD 增删改查

* DDL --> data definition language 数据库定义一语言 create drop alter show

* DML --> data manipulation language 数据库操纵语言 insert delete update select

* DCL --> data control language



瞬时 --> 放在内存中，程序结束，第二次运行就没有了
	老师：保存在文件里（谢文件）
瞬时状态 --> 持久性状态
	stu.txt

模型：层次模型、网状模型、关系型

关系型：1. 各管各的，都不影响；2. 能找到爹  。和谁都有关系，但好像又都不影响



## 安装 mysql

```
mysql -u root -p 以用户名、密码登陆 Mysql

\q quit退出服务

net stop/start Mysql57 开启服务

 mysqld --initialize-insecure --user=root --> 创建 data 文件夹
 PS C:\Program Files\MySQL\MySQL Server 5.7> mysqld --initialize-insecure --user=root
```



 ## 字符编码

GBK | UTF-8   

```
charset=gbk | utf8
alter database student charset=gbk;
```

windows可以用GBK，但在开发中一定要用utf8(windows控制台就是gbk)

```
查看字符编码
show variables like 'character_set_%';
修改
set character_set_client=gbk;
```



##  数据库定义

```
增
create database if not exists 'frank_school' charset=gbk;
create table if not exists teacher(
id int auto_increment primary key comment '主键id'
)engine=innodb;

删
drop database if exists frank_school;
drop table if exists teacher;

改
alter database charset=gbk;
alter table teacher add hobby varchar(50) first;
alter table teacher drop hobby;
alter table teacher modify hobby varchar(100);
alter table teacher rename to student;

查
show databases;
show create database frank_school;
```

#### 骚操作

``` 
create table if not exists teacher(
    id int auto_increment primary key comment '主键id',
        id name age 字段
        auto_increment 自动增长
        primary key 主键
        comment '注释'
    name varchar(30) not null,
        not null 不为空
    phone varchar(20)
    address varchar(100) default '暂时未知' comment '住址'
        default '默认值'
)engine=innodb; 数据库引擎
```



## 数据库操纵

```
use frank_school; 指定仓库
show tables; 看表
desc teacher; 查看表结构

增
insert into teacher(id,name,phone,address) values(1,'frank','12345678','ShangHai');

删
delete from teacher where age>30; 删除表中部分内容
truncate table teacher; 删除，再建一个新表

改
update teacher set name='frank' where id=1;
update teacher set address='ShangHai' where age>30;

查
select * from teacher;
select name,address from teacher;
```



## 数据类型

没有一个统一的标准，但应该符合业务的要求

```
int/tinyint/smallint unsigned >0

double(16,2) 16位长度，小数点后2位（四舍五入）

decimal(20,19) 整数与小数分开，不丢失精度

char() | varchar() 可变，会自动回收多余的

boolean 0/1

enum --> gender enum('man','woman','?');
	限制数据，存储为整数，也可以用整数调用 -->(1,2,3)
	
set --> hobby set('哲学','经济学','文学','IT');
		values('哲学,经济学,文学'); -->2的次方
		
datetime --> createdTime datetime
			 values('2020-04-05 15:30');
```



## 主键

不能重复，不能为空，可以被其他表引用

```
alter table table_name add primary key (name);
alter table table_name drop primary key;
```

### 复合主键

适合用于像id，昵称都不能重复的场景

### 唯一键

不能重复，可以为空

```
phone varchar(20) unique;
alter table table_name drop index unique_name;
```



## 注释

```
create table if not exists t_3 #单行注释，可直接写
create table if not exists t_1 -- 单行注释，输入符号后要加空g
```

```
create table if not existst t_2
/*
	多行注释
*/
```



## 数据库设计思维

1. 确保字段的原子性（每行不可再分）
2. 不能扯淡
3. 消除传递依赖（删掉不必要的字段）



## 单表查询

```
select
select 'qwer';
select 2*6;
select 'qwer' as test;
笛卡尔积

dual 伪表
select 12*3 as deer from dual; == select 12*3 from dual;
这样查询依旧可以查到结果，因为dual是伪表，会自动构建字段

select * from teacher where age > 30; 条件筛选

select * from test where id=2;
select * from test where address in/not in('beijing','shanghai');

select * from test where age between 15 and 20;

insert into test values('4','kong',null);
select * from test where age is null;

聚合函数
select sum(chinese) from test;
sum
avg 平均值
max/min
count

like模糊查询
select * from test where name like '张%' 姓张的所有人
select * from test where name like '张_' 张后面一个字段

select * from test order by age asc/desc;

分组查询
select avg(age) as '年龄',gender as '性别' from info group by gender;
聚合函数，分组字段
group by 谁，就是根据谁分组

聚合 select group_concat(name),gender from student group

having，对查询后的结果进行筛选
select avg(age),gender from info broup by info having age>10;

limit 限制范围
select * from info limit 2,4 --> 从3开始，长度为4

distinct 去重
select distinct age from info;
select count(distinct age) from info;
```



## 多表查询

### 联合查询

```
select name from test union select age from info;
```


### 内连接

```
select name,score from student inner join score on student.id=score.id;
student和score是两张表，student.id和score.stuids是两张表共同的部分
筛选出两张表都存在的数据

left join 左连接，以左边表为基准，无公共字段的为null
right join
```

### 交叉连接

```
select * from t1 cross join t3;
```

### 自然连接

```
select * from t1 natural join t3;
两边公共的字段名，自然有自然左连接和自然右连接
无公共字段的自然连接返回笛卡儿积
```

### using

```
都是共同字段会返回null···
select * from t1 inner join t3 using(id);
```



## 子查询

```
select * from student where id in (select stuid from score where score>90);
```

```
select * from student where exists/not exists (select stuid from score where score>90);
```



到此为止，基础内容就算是结束了

---

# 进阶

## 视图

命名视图最好在加上前缀，方便在终端上识别

```
create view vw_stu as select name,phone from student;
```

视图算法,子查询有问题时使用

```
algorithm=TEMPATABLE
create algorithm=TEMPATABLE view vw_stu as select name,score from student inner join grade on student.id=grade.id
```



```
show table status where comment='view' \G
```



## 事务

```
start transaction --> 开启事务
commit --> 提交事务
```

只要 commit 就无法 rollback 

### 回滚

```
rollback;
savepoint point_name; --> 设置回滚点
rollback to point_name; --> 回滚到之前位置
```

### ACID

atomicity 原子性

consitency 一致性

isolation 隔离性

durability 持久性

## 索引

```
create index balabce_index on wallet(balabce); --> 普通索引
create unique index balance_index on wallet(balance); --> 唯一索引
drop index index_name;
```



语句结束 delimiter //

还原 delimiter ;



## 存储过程

```
create procedure proc()
begin
update wallet set money=money+100;
end //
```

调用存储过程

```
call proc();
```





## Number

抽奖

select * from student order by rand() limit 3;



## String

大小写 selelct ucase/lcase('fuck')



## 字段规范约束

- 字段名必须是小写字母，不能以数字开头，不能出现复数

- 不要因为大度浪费资源

```
is_vip unsigned tinyint 1
```

- 表示是与否一定要使用 unsigned tinyint 1

- 索引名
```
pk_xxx primary key
uk_xxx unique key
idx_xxx index key
```

- 所有的小数一律使用 decimal ,不允许使用 float/double

- 如果字符串很小，建议使用 char
- 必须有三个字段
```
id unsigned bigint auto_increment
creatime datatime 
```



## 索引规范

join 两边属性要求相同

## SQL开发约束

is null

不允许使用存储过程

外键和级联不允许使用

对数据操纵时先 select 看有无错误