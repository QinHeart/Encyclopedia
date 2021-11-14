### 位置

1. 行内式（强烈不推荐）
```
<a href="javascript:alert('hello');">点我一下</a>
<div onclick="alert('hello')">点我</div>
```

2. 内嵌式
```
<script>
	alert('hello');
</script>
```

3. 外链式
把代码写在一个.js文件中
```
<script src=""></script>
```


### 变量
var num = 100;
var str = "String";


### 输出
```
alert();
console.log();
document.write();
```

### 数据

检测数据类型 --> typeof

基本数据类型
	数值 --> nmuber
	字符串 --> String
	空类型 -->  null --> object
			   		undefined --> undefined


引用数据类型

```

```



#### 类型转换

转数值

1. Number()
2. parseInt() --> 只能解析到整数
3. parseFloat --> 能解析到小数部分

转字符串

1. String();
2. toString(); --> .toString();

转 boolean

1. Boolean(); --> .Boolean();
2. false:0 NaN ' ' undefined null;

### 函数

```
functino fn(){ }
fn();
```

#### 递归

一个函数调用了自身，并设置了结束条件

### 对象数据类型

object

```
var obj = {}

增 对象名.键 = 值 or 对象名['键'] = 值
删 delete （同上）
改 （同上）
查 （同上）
[] 中书写的是字符串格式
```

### 数组
索引包前不包后
```
var array = [];
array[0] = 100;
console.log(array);
console.log(array[0]);

array.length --> 数组长度
	array.length = number --> 修改数组长度
	
// 数组遍历
var arr_1 = [100, 200, 400, 124, 461, 545];
for (var i = 1; i < arr_1.length; i++) {
	console.log(arr_1[i]);
}
```

#### 冒泡排序

#### 数组常用方法
1. push() 数组最后添加/删除数据
2. pop() 
3. unshift() 数组前面添加/删除数据
4. shift()
5. reserve() 反转数组
6. splice(start,num,insert) 删除、添加数据
7. sort() 排序
   - var res = arr_2.sort( function (a,b) {return a-b}); 升序
   - var res = arr_2.sort( function (a,b) {return b-a}); 降序
8. join() 连接符
9. contact() 拼接数组
10. slice(start,end) 截取数组
11. indexOf() 查找数据在数组中的索引位置
12. foreach( function (item,index,arr) { 每一项，索引，原始数组 } )  遍历数组
13. map( function (item,index,arr) { return item*10} )  映射数组
14. filter( function (item,index,arr) { return item>100} )  过滤数组
15. every( function (item,index,arr) { return item>100} )  判断数组
16. some( function (item,index,arr) { return item>100} )  是否存在满足条件

#### 字符串常用方法
1. charAt( index ) 获取索引对应符串
2. toLowerCase() 转换小写 | toUpperCase() 转化大写
3. replace(换下内容,换上内容) 只能换一个
4. trim() 去除字符串首尾的空格
5. split( 分隔符 ) 按照分隔符把字符串切成数组
6. substr( start,number)  截取字符串
7. substring(start,end)   截取字符串
8. slice(start,end)   截取字符串

#### 数字常用方法
1. Math.random() 获取0~1随机小数
2. Math.round(number) 四舍五入
3. Math.ceil(number) 向上取整 | Math.floor(number) 向上取整
4. Math.pow(底数，指数) 
5. Math.sqrt(number) 算数平方根
6. Math.abs(number) 绝对值 
7. Math.max(number) 最大值 | Math.min(number) 最小值
8. Math.PI 得到一个近似 Π的值

#### 时间常用方法
var time = new Date();
	var time = new Date(2021,11,4,10,32,10);
获取
	1. 时间对象.getFullYear() | .getMonth() | .getDate() | .gethours() | .getMinutes() | .getSeconds() | .getDay | .getTime
	设置
	方法同上

### BOM
> 操作浏览器
> browser object model
1. 获取浏览器可视窗口
	var w = window.innerWidth
	var h = window.innerHeight
	
2. 浏览器弹出层
	window.alert() 提示框
	window.confirm() 询问框
	window.promet() 输入框
	
3. 开启和关闭标签页
	开启：window.open('地址')
	关闭：window.close()
	```
	<button id="on">开启</button>
    <button id="off">关闭</button>
    
    <script>
        on.onclick = function(){
            window.open('https://www.bilibili.com/');
        }
        off.onclick = function(){
            window.close();
        }
    </script> 
	```
	
4. 浏览器常见事件
	window.onload = function(){} 资源加载完毕
	window.onresize = function(){} 可视尺寸改变
	window.onscroll = function(){} 滚动条位置改变
	```
	window.onresize = function(){
		console.log("窗口尺寸改变了");
	}
	```
	
5. 浏览器历史操作记录
	window.history.back() 回退页面
	window.history.forward() 前进页面

6. 浏览器卷去的尺寸
	卷去的高度
		document.documentElement.scrollTop || document.body.scrollTop
	卷去的宽度
		document.documentElement.scrollLeft || document.body.scrollLeft

7. 浏览器滚动到
	window.scrollTo(left,top) 滚动到
		left 浏览器卷去的宽度
		top 浏览器卷去的高度
	```
	go.click = function(){
		window.scrollTo({
			left:300,
			top:400,
			behavior:'smooth'
		})
	}
	```


### 定时器
setInterval(函数，时间) --> 每次执行的内容、毫秒
setTimeout(函数，时间)
```
setInterval( function( ){
	// 要执行的代码
},1000)

setInterval( function(){
	document.write("hello\r");
},1000)
```

#### 关闭定时器

clearInterval()
clearTimeout() --> 要关闭的定时器的返回值

> 不区分类型

### DOM
document object model --> 操作文档流
获取元素的方式：id、类名、标签名、选择器
```
// 根据 id 获取页面元素
var ele = document.getElementById('id名')
	querySelector('选择器')
	querySelectorAll('选择器')
var ele = document.getElementsByClassName('类名')
	ByTagName('标签名')
// 输出返回值
console.log(ele)
```

#### 操作 文本
获取> 元素.innerText
设置> 元素.innerText = "新内容"
```
<button id="on">关闭</button>
<label for="" id="test">wdsj</label>

on.onclick = function(){
	var text = test.innerText = "abcd";
}
```

#### 操作 超文本

> 用处不大

获取> 元素.innerHTML
设置> 元素.innerHTML = '新内容'

#### 操作元素属性
原生属性> 获取: 元素，属性名
		设置：元素.属性名 = '属性值'
自定义属性> 获取：元素.getAttribute('属性名')
		  设置：元素.setAttribute('属性名','属性值')
		  删除：元素.removeAttribute('属性名')
```
<button id="change">Test</button>
<label id="changeText">测试前</label>

var btnName = document.querySelector('button');
console.log( 'boxName.id = '+ btnName.id);
change.onclick = function(){
    changeText.innerText = "已点击";
    var box = change.id = 'over';
    console.log(btnName.id);
}
```

#### 行内元素
```
<button id="click">按钮</button>
<div style="background-color: aquamarine;height: 30px;width: 200px;">文本内容</div>

    <script>
        var box = document.querySelector('div');
        console.log(box);
        click.onclick = function(){
            box.style.backgroundColor = 'red';
            box.style.height = '200px';
        }
    </script>
```
> 非行内样式 --> window.getComputerStyle(bxo).height


### 交互
```
<button id="on">开启</button>
<button id="off">关闭</button>

// 开启按钮的点击事件
on.onclick = function(){}
```



### 表单验证
1. HTML表单验证
```
<input type="text" required="required">
```

```
<form action="demo_form.php" method="post">
	<input type="text" name="fname" required="required">
	<input type="submit" value="提交">
</form>
```

