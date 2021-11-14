### 文件名

```
style.scss
style.less
```

### 注释

```
// 单行注释 --> 不会被编译出来

/* 多行注释 */ --> 会被编译出来
```

### 方法

```
scss
@number : 123px;
.box{
	width:$number;height:@number;
}
------------------------------------------
less
$number : 123px;
.box{
	width:$number;height:$number;
}
```

