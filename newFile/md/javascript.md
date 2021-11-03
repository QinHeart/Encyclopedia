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