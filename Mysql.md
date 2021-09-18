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
ceeate table if not exists teacher(
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
create table if bot exists t_3 #单行注释，可直接写
create table if not exists t_1 -- 单行注释，输入符号后要加空g
```

```
create table if not existst t_2
/*
	多行注释
*/
```



## Code规范

1. 确保字段的原子性（每行不可再分）
2. 不能扯淡
3. 消除传递依赖（删掉不必要的字段）



## 详细

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
c
```

