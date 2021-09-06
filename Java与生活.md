



# Java
封装/继承/多态

## 快捷键
```
psvm | sout
格式化输出：soutv
格式化：ctrl + alt +l
补全：ctrl + alt + v
注释：/**
重命名：Shift + F6
```

# Java与生活
## 一带而过

### 初步认识

```
public class Test{
    public static void main(String args[]){
        System.out.println("Hello");
    }
}
```
* javac Test.java
* java Test
* class文件又称为字节码文件
* 常量 final

## 基本程序设计结构

### 常量

*   关键字final只能被赋值一次，常量名使用全大写

```
final int STUDENT = 20;
```

*   类常量  
位于main函数外部，可以被一个类的多个方法使用
```
punlic static final double MONEY = 4.56;
```

### 数学函数

1.平方根

```
double x = 3;
double y = Math.sqrt(x);
System.out.println(y);
```

2.   幂运算
```
double y = Math.pow(x,a)
==> y=x的a次幂
```

3.   常用数学函数
```
Math.sin/cos/tan/exp/log/log10
Math.PI(Π) | Math.E(e)
```

### 数据类型转换

```
double x = 9.997;
int y = (int) x; ==> y = 9

double x = 9.997;
int y = (int) Math.round(x);
```

### 三元运算符

```
x < y ? ture : false
```

### 字符串

1.子串
```
String s = greeting.substring(0,3);
```

2.拼接
```
String all = String.join("/","A","B","C","D");

String first = "ABCD";
String Second = first.substring(0,2) + "E";
```
3.String
```
String.trim() --> 忽略前后空白
```

4.检测字符串是否相等

```
s.equals(t) | true false
equalsIgnoreCase 忽略大小写

if (First.substring(0,2).equals("Hel")){
	System.out.println("true");
}
else{
	System.out.println("false");
}
```

4.构建字符串  
每次拼接字符串，都会产生一个新的string对象，耗时、浪费空间

```
StringBuilder builder = new StringBuilder();
builder.append();
builder.insert(int offest,String str);
String finalString = builder.toString();
---------->
StringBuilder builder =  new StringBuilder();
builder.append("111");
builder.append("222");
String finalString = builder.toString();
System.out.println("finalString = " + finalString);
```

5.输入
```
Scanner in = new Scanner(System.in);
System.out.println("what's you name");
String name = in.nextLine();
System.out.println("name = " + name);

nextInt | nextDouble
```

### 格式化

* 创建一个格式化字符串，不打印
```
String message = String.formet("Hello %s ,you age is %d",name,age);
```

* 打印时间
```
import java.util.Date;
System.out.printf("%tc",new Date());
System.out.printf("%tT",new Date());
```

### 控制流程

### 数组

```
int[] a = new int[100];
	a[0] = 1;
int[] b = {1, 2, 3, 4, 5,};
	System.out.println("b[0] = ",b[0]);
	

for(int i = 1;i<b.length;i++){
	System.out.println(b[i]);
}

foreach
    int[] b = {1, 2, 3, 4, 5,};
    for (int emment:b){
    System.out.println(emment);
    }
```

*   使用函数调用数组
```
printArray(array);

public static void printArray(int[] array){
	for(int e:array){
		System.out.println("e = " + e);
	}
}
```

* 排序
```
Arrays.sort(array;)
```

* 二叉树查找
```
int resultNum = Arrays.binarySearch(array,99);
System.out.println("resultNum = " + resultNum);
```

* 比较是否相等
```
int[] array_1 = {1,2,3,};
int[] array_2 = {1,2,3,};

boolean b = Arrays.equals(array_1,array_2);
System.out.println("e = " + e);
```

* 数组拷贝
```
int[] array = {1,2,3,4,5,};
int[] copyArray = Arrays.copyOf(array,array.length);
---
int[] copyArray= Arrays.copyOf(a)
```

### 方法的重载

允许方法名相同，参数个数或参数类型不同

## 特殊注释标记

1.   TODO（标记人，标记时间，预处理时间）
2.   FIXME 错误，不能工作（标记人，标记时间，预计处理时间）

## OOP上半部分

*   属性(共性，特性)：类当中的变量和方法
*   成员变量：组成和构成了类，是类的重要组成部分
*   实例：活生生的事务，是唯一的
*   this --> 调用对象
```
public void sleep(){
	System.out.println(this.name + "狗名字");
}
```

### OOP封装

给一个用户能设置，能获取，但不能瞎改的（set get）

*   alt + insert --> 自动生成

### jar导入

```
https://mvnrepository.com/
```

*   Lombok无法使用
1. File/Settings/Build/Compiler/Annotation/Enable annotation process
2. Run/Build Project

### 构造方法
* 快捷键：alt + insert
```
public Dogs(){
}
public Dogs(int age, String name,  String variety) {
    this.age = age;
    this.name = name;
    this.variety = variety;
}

Dogs zhangDog = new Dogs(10,"Jerry","拉布拉多");
        System.out.println("zhangDog = " + zhangDog);
```


### 垃圾回收

```
System.gc();
```

### Static

*   静态变量 --> static

*   静态方法 --> 

```
public static void food(){
    System.out.println("所有的狗月底吃饭");
}
```

```
// 如何禁止修改 static 变量
public static String plotvoid(){
	return plot;
}

Dogs.plotvoid = "error";
```

### 单例设计模式

1. 创建一个 Cla 对象
```
private static Cla over = new Cla();
```

2.   让构造函数为 private , 防止类被格式化
```
private Cla(){
	
}
```

3.   获取唯一可用的对象
```
public static Cla getOver(){
	return over;
}
```

4.   调用唯一可用的对象
```
Cla wang = Cla.getOver();
```

## OOP下半部分
### 继承

```
public class Dogs extends Animal{
	
}
```

### 方法重载

```
alt + insert --> overwrite method
```

*   是它自己拥有的特性，不是从父类继承的

*   alt + insert 啃老啃到老

### final

*   最下层了，后面无人继承
*   遗产没人继承，也无法继承

```
public final class Dog extends Animal
```

*   不能被子类重写，我的遗产你可以用，但不能为所欲为

### 抽象类

*   ```
    public abstract class Animal {
    	// abstract 抽象类
    }
    ```

*   无法 new Animal
*   概括具体的类

### 抽象方法

不能有实际的意义
```
public abstract void braking();
```

#### why?

想象一下，动物叫声太多了

*   抽象方法在抽象类中

### 接口

```
// 接口
public interface Human {
    public void eat();
    public void run();
}
```

```
// 实现接口 --> implements
public class Chinese implements Human {
    public static void main(String[] args) {
        
    }

    @Override
    public void eat() {
        
    }

    @Override
    public void run() {

    }
}
```

*   抽象类成是对具体事物的吃抽象
*   接口是对动作、行为的抽象

*   Animal抽象类是对具体事物的抽象
*   Animal接口是对它的行为进行抽象

### 多态

```
// 花木兰替父从军，向上转型
public class Army {
    public static void main(String[] args) {
        HuaHu huaHu = new HuaMuLan();

        System.out.println(huaHu);
        
        HuaMuLan.fighting();
    }
}

// 打完仗了，要做回自己
HuaMuLan huaMuLan = (HuaMuLan) huaHu;
```



### 匿名内部类

```
// 匿名内部类 -- 1
Human human = new Human() {
	@Override
    public void eat() {
    	System.out.println("中国人吃中国菜");
	}

	@Override
        public void run() {
        
        }
};
human.eat();
```

```
// 匿名内部类 -- 2
new Human() {
    @Override
    public void eat() {
        System.out.println("中国人吃中国菜");
    }

    @Override
    public void run() {

    }
}.eat();
```

### Object

所有类的父类

# Java进阶




# Java核心技术

## 类

*   localDate

```
LocalDate time = LocalDate.now();
LocalDate birthday = LocalDate.of(1999,12,25);
int year = time.getYear();
int month = time.getMonthValue();
int day = time.getDayOfMonth();
```
