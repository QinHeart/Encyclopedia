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
文档对象模型

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
4. element.style(行内样式) | element.className(类名样式操作) --> this.className = 'first second';
	- this.style.backgroundColor = 'purple'; --> 驼峰命名法
5. lis[i].style.backgroundPosition = '0 - '+ index + 'px';
6. 分层选取元素 -->  var imgs = document.querySelector('.box').querySelectorAll('image');

### 自定义元素属性
1. 获取元素值
    element.属性 获取属性值
    element.getAttribute('属性')

2. 修改元素值
    element.setAttribute('属性','值')
    element.removeAttribute('属性')

3. H5新增自定义属性
	data- 开头
	```
	<div data-insex="1"></div>
	```
	dataset是一个集合，存放了所有data属性
		element.dadaset.index(属性名)
		
### 节点操作
nodeType节点类型 nodeName节点名称 nodeValue节点值

其中，元素节点 nodeType = 1;属性节点 nodeType = 2;文本节点 nodeType = 3;(主要操作元素节点)

#### 父节点
子节点.parentNode
#### 子节点
父节点.childNodes (返回所有节点)
父节点.children (只返回元素节点)
	父节点.firstElementChild

> 父元素.children[0] 最实用
#### 兄弟节点
兄弟.nextElementSibling 兄弟.nextSibling
兄弟.previousSibling

#### 创建节点
```
document.createElement('tagName')
```
#### 添加节点
页面中添加元素：先创建，再添加
```
node.appendChild(child)
node.insertBefore(child,指定元素);
    var li = document.createElement('li');
    ul.appendChild(li);
    ul.insertBefore(li,ul.children[0]);
```
#### 删除节点
>  删除父节点的子节点

```
node.removeChild(child)
	ul.removeChild(ul.children[0])
	ul.removeChild(this.parentNode) 当前节点
```
阻止链接跳转
> href="javascript:;"
#### 复制节点
> node.cloneNode(true/false);
先复制，再粘贴
#### 清空节点
```

function fnDelete(){ 
    var elem = getElementById("elem_id");
    while(elem.hasChildNodes()) //当elem下还存在子节点时 循环继续
    {
    	elem.removeChild(elem.firstChild);
	}
}
```

```
for (var k in obj){
	k得到的是属性名
	obj[k]得到的是属性值
}
```
### DOM高级
#### 注册事件
1. 传统事件
eventTarget.onclick = function(){
		alert('error');
}
> 兼容性好，但注册的事件具有唯一性
2. 事件监听（W3C标准) --> eventTarget.addEventListener(type,listener[,useCapture])
- type:事件类型字符串，如click,mouseover,加引号
- listener:事件处理函数，类似于function
- useCarture:可选函数，是boolean类型，默认false
#### 元素解绑(删除事件)
- divs[0].onclick = null; 传统

- 考虑到后续需要解绑事件，可以以函数方式添加注册事件
```
  var box = document.querySelector(".box");
  function fn() {
    alert("success");
    box.removeEventListener("click", fn); --> 主流浏览器
    box.detachEvent('click',fn); --> IE浏览器
  }
  box.addEventListener("click", fn);
```

### DOM事件流
>事件传播的过程
>向水里仍石头，进入水面的的过程就是捕获阶段，之后就是冒泡阶段

1. 捕获阶段（从顶层依次向下传播）
2. 当前目标阶段
3. 冒泡阶段（从底层一层一层向外传播）

> 冒泡和捕获只能执行一个
>
> 实际开发中主要关注事件冒泡
```
var father = document.querySelector(".father");
var son = document.querySelector(".son");
// 开始绑定
father.addEventListener(
	"click",
	function () {
	alert("father");
}
	// true
);
son.addEventListener(
	"click",
	function () {
	alert("son");
}
	// true
);
```


### 事件对象
> event 就是一个事件对象，写在侦听函数小括号内，当形参来看
> 事件对象有了事件才会存在，不需要传递参数
```
div.onclick = function (event) {
  console.log(event);
  console.log(window.event) --> IE浏览器
};
```
#### 事件常见方法和属性
- e.target 返回触发事件的对象（点谁返回谁）
- this 返回绑定事件的对象（谁绑定返回谁）
- e.type 返回事件类型

- 阻止默认行为
	1. e.preventDefault();
	2. e,returnValue --> IE
	3. return false (无兼容性问题，但后面代码不执行，只限于传统注册方式)
	
- 阻止冒泡事件
	stopPropagation() 

### 事件委托
> 给父节点添加注册事件，然后利用冒泡原理影响每个事件，而不是每个子节点单独设立监听事件

### 常用鼠标事件
- mousemove 鼠标移动事件
1. 禁止鼠标右键菜单
	contextmenu 控制何时显示上下文菜单
	```
	document.addEventListenter('contextmenu',function(e){
		e.preventDefault();
	})
	```
2. 禁止鼠标选中
	selectstart
	
	```
	document.addEventListenter('selectstar',function(e){
		e.preventDefault();
	})
	```
3. 鼠标事件对象
	console.log(e.clientX | e.clientY) --> 可视区x,y坐标
	console.log(e.pageX | e.pageY) --> 在页面中的x,y坐标
	console.log(e.screenX | e.screenY) --> 相对于电脑屏幕x,y坐标

### 常用键盘事件
- onkeyup 按键松开
- onkeydown 按键按下 （持续） （不区分大小写）
- onkeypress 按键按下 (区分大小写) (不识别shift/ctrl/箭头)
> keydown -> keypress -> keyup
- 按键ASCII码 e.keyCode
> element.focus() 获得焦点
```
window.addEventListener("keydown", function(event) {
  const p = document.createElement("p");
  p.textContent = `KeyboardEvent: key='${event.key}' | code='${event.code}'`;
  document.getElementById("output").appendChild(p);
}, true);
```
```
console.log(`'${e.key}'`); 获取鼠标按键

typeof(e.key) 
```

## BOM
> 浏览器对象模型
> window，是浏览器的顶级对象(window > alert)

是浏览器厂商自己制定的，注意兼容性

#### 常见事件
1. 窗口加载事件
等到页面内容全部完毕才会触发该事件
```
// DOM加载完成后触发，不包含样式，图片，flash等
document.addEventListener("DOMContentLoaded",function(){···})
// 页面全部加载完成后触发
window.addEventListener("load",function(){···})
// 老版本
window.onload = function(){···}
```
2. 调整窗口大小事件
只要窗口大小发生变化，就会触发该事件
```
window.addEventListener('resize',function(){···})
window.onresize = function(){···}
```
- window.innerWidth 当前屏幕尺寸
3. 定时器
- setTimeout( )
```
setTimeout(调用函数,[延迟的毫秒数]) 1秒=1000毫秒，如果省略，默认为零
window.clearTimeout(timeoutID) 
window.setTimeout(调用函数,[延迟的毫秒数]) 
```

```
var time1 = Timeout(function(){},3000);
var time2 = Timeout(function(){},3000);
```
- setInterval( )

```
setInterval(回调函数,[间隔的毫秒数])
clearLnterval(timeoutID)

==> var timer = null;
	clearInterval(timer);
```

 倒计时效果/
this指向调用者

4. 执行机制
> JS是单线程
> HTML5提出web worker标准,允许JS创建多个线程,于是出现了同步和异步
- 同步:按顺序执行
- 异步:处理多个事件
先执行同步任务,再执行异步任务(回调函数)
同步任务执行完毕后再到任务队列中看有没有异步任务

5. location对象
- locatino.href 获取或设置整个URL
- location.host 返回主机域名
- location.port 返回端口号
- location.pathname 返回路径
- location.search 返回参数
- location.hash 返回片段 #后面内容，常见于链接/锚点
截取字符串 substr()
分割为数组 split('=') 根据等号分割为数组
- location.assign() 跳转页面(重定向)，记录历史
- location.replace() 替换当前页面，不记录历史
- lication.reload() 刷新，参数为true,则强制刷新

6. nagivator
- userAgent 用户浏览器信息

7. history 对象
- back() 后退
- forward() 前进
- go(参数) 参数为1，前进一个页面，参数为-1，后退一个页面

#### offset 元素偏移量
返回值不带单位
- element.offsetParent 返回带定位的父元素
- element.offsetTop | Left
- element.offsetWidth | Height 返回自身包括padding、边框、内容区宽高
> 获取元素值，用offest,改变元素值，用style

#### 鼠标移动坐标

1. 鼠标在页面中的坐标 e.pageX | e.pageY
2. 盒子在页面中的坐标 box.offsetLeft | box.offsetTop
3. 鼠标移动 mousemove

#### 拖拽弹窗

- mousedown | mousemove
