## 快速入门

> ctrl + E/F 格式化代码

### 弹出窗口

1. 最简单的
```
MessageBox.Show("hello");
```
2. 消息框加上标题
```
MessageBox.Show("There are something wrong!","ERROR");
```
3. 添加“确定”和“取消”
```
if (MessageBox.Show("Delete this user?", "Confirm Message", MessageBoxButtons.OKCancel) == DialogResult.OK)
{
	//delete
}

MessageBoxIcon.Question // 添加图标
MessageBoxDefaultButton.Button2 // 改变默认焦点
MessageBoxOptions.RightAlign,true // 添加help按钮
MessageBoxOptions.RtlReading, @"/folder/file.htm" // 指定帮助文件路径
```

### 修改内容
```
this.Text = "这是一个应用程序";
this.laber1.Text = "hello";
```

### 设置位置
```
this.label1.SetBounds(100,100,200,50);
```

### 显示光标位置
```
private void Form1_MouseMove(object sender, MouseEventArgs e)
{
	this.label1.Text = e.X + "," + e.Y;
}
```

### 文本框同步
```
private void textBox1_TextChanged(object sender, EventArgs e)
{
	textBox2.Text = textBox1.Text;
}
```

### 背景颜色
```
this.BackColor = Color.FromArgb();
```

### 移动位置
```
this.label1.Left += 10;
```

### 显示当前时间
```
this.text = DateTime.Now.ToString();
```

### 计时器(timer)
```
interval 毫秒
enable = true;
```

### 随机数
```
Random rnd = new Random();
rnd.Next(255);
```

### 基本输入与输出
```
private void button1_Click(object sender, EventArgs e)
{
    double a = double.Parse(textBox1.Text);
    double result = Math.Sqrt(a);
    label1.Text = a + " 的平方根是 " + result.ToString();
}
```

### 字符串
```
@"abcd" --> 不需要 \n 进行转义
```

### 转义符
```
\r 回车
\n 换行
\b 退格
```

### 数据类型
1. 整数类型
```
有符号 --> short/int/long
无符号 --> byte/ushort/uint
字符类型 --> char
```
2. 实数类型
```
float --> 3.14F
double --> 3.14D
```
3. 十进制类型
```
decimal --> 120.50M
```
4. 布尔类型
```
boolean --> true/false(不能用0/1代替)
```
5. 类型转换
```
字符串转成数值 double/int.parse(s);
convert convert.ToInt32/ToDouble/ToDateTime(···);
```

### 运算符与表达式

> m=a>b?a:b;

```
int second = 2;
int third = 3;
if (second != null && third > second){
	Console.WriteLine("success");
}
else
{
	Console.WriteLine("default");
}
```

## 窗体应用程序
```
WindowsState 窗体大小
FormBorderStyle
```

---

## 控制台应用程序

> svm = static void Main

### 闪退
```
ctrl + F5
console.ReadKey();
```

### 输入输出
```
static void Main(string[] args)
{
    Console.WriteLine("please enter you passwd");
    String s = Console.ReadLine();
    Console.WriteLine(s);

    Console.ReadKey();
}
```



---

## 循环

### if

```平闰年
if (year % 4 == 0 && year % 100 != 0 || year % 100 == 0)
{
	Console.WriteLine("是闰年");
}
else
{
	Console.WriteLine("是平年");
}
```

### switch

```
String input = Console.ReadLine();
int num = int.Parse(input);
switch (num)
{
    case 1:
        Console.WriteLine("1");
        break;
    case 2:
        Console.WriteLine("2");
        break;
    case 3:
        Console.WriteLine("3");
        break;
    case 4:
        Console.WriteLine("4");
        break;
    case 5:
        Console.WriteLine("5");
        break;
    case 6:
        Console.WriteLine("6");
        break;
    case 7:
        Console.WriteLine("7");
        break;
    default:
        Console.WriteLine("0");
        break;
}
```



## 数组

 ```
 int[] a = {1,2,3};
 int[] a = new int[8];
 a.length;
 
 int[] ages = new int[10;
 foreach(int age in ages){
 ``````
 ```
int[,] a = { { 1, 2, 3 }, { 4, 5, 6 } };
Console.WriteLine(a.GetLength(1));
