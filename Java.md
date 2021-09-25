# Java与生活

---

## 基本程序设计结构

### 变量与常量

变量一定要初始化

> int age = 0;

#### final

final 表示这个变量只能被赋值一次，无法再修改（常量名使用权大写）

> final double CM_PER_INCH  = 2.54;

类常量（在一个类的多个方法中使用）

> public static final double CM_PER_INCH = 2.54;



### 数学函数

> double x = 4; double y = Math.sqrt(x); 将y设置为x的平方根
>
> double y =  Math.pow(x,a); 将y设置为x的a次幂
>
> double x =  9.997; int nx = (int) Math.round(x);  四舍五入



### 数据类型转换

> double x = 9.997; int nx = (int) x;



### 三元运算符

> condition ? expression1 : expression2
>
> int x = 8; int y = 10; int z = x > y ? x : y ;



### 字符串

> Scanner in  =  new Scanner(System.in);
>
> int age = in.nextInt();

除此之外还有 nextLine | nextDouble ```



#### substring

从较大的字符串中提取子串

> String greeting = "Hello";
>
> String s = greeting.substring(0,3);



#### 拼接

> String one = "one"; String two = "two" + one;

#### join

> String all = String.join("/","S","M","A","B");

#### equal

> "Hello".equals(t)

不区分大小写

> "Hello".equalsIgnoreCase("hello")

空串与null

> str.length() != 0 && str != null ;

#### 构建字符串

> StringBuilder builder = new StringBuilder();
>
> builder.append("Hello");
>
> builder.insert(0,"stsrt");
>
> String completBuilder = builder.toString();

#### 输入与输出

> Scanner in = new Scanner(System.in);
>
> int age = in.nextInt(); 
>
> // next() | nextDouble | nextLine();

### 格式化

> %s 字符串
>
> %d 十进制
>
> %f 浮点数
