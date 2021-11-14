# Javascript手册

## ECMA
### 简单输出
```
prompt()
console.log() | console.dir()
document.write()
var name = prompt('请输入您的姓名');
```
### 变量
变量一定要赋值

### 数据类型
```
typeof()
```


## DOM

### 获取元素
返回元素对象（集合）
```
.getElementById('');
.document.getElementsByTagName('');
.document.getElementsByClassName('');
通用
.querySelector('选择器'); 返回第一个元素对象
	.querySelectorAll('');
```
#### 特殊元素
```
1. body
	document.body;
2. html
	document.documentElement;
```
### 标签名
1. document --> document.getElementById('');
2. emment --> ul.getElementById(''); 必须要指名是哪一个元素对象

### 事件
事件源 
var btn = document.getElementById('');
事件类型
onclick
事件处理程序
btn.onclick = function(){};

#### 常见鼠标事件
onclick 点击
onmouseover/onmouseout 经过/离开
onfocus/onblur 获得焦点/失去焦点
onmousedown/onmousesetup 按下/弹起

### 操作元素
1. innerText、innerHTML 不识别/识别 HTML标签（优先）
2. src、href、id、alt、title
3. type、value、checked、seleccted、disabled(true/false)




## BOM
