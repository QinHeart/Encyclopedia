# SQLServer
1. 以管理员身份运行（切记）
2. 快捷开启、关闭sqlserver服务
```
win + R + cmd
net stop/start mssqlserver
```
3. 报错
- 附加数据库失败，需要选中要附加的数据库所在的文件夹，属性，安全，将User权限全部打勾
- 不允许保存更改。您所做的更改要求删除并重新创建以下表。您对无法重新创建的标进行了更改或者启用了“阻止保存要求重新创建表的更改”选项。
	- 解决方法：工具-〉选项-〉左侧有个 设计器-〉表设计器和数据库设计器 -> 阻止保存要求重新创建表的更改(右侧) 把钩去掉即可。



# ASP.Net

> 右键将需要显示的页面设置为起始页

- 封装字段 CTRL + R + E



---
Button1.enable = false; 按钮禁用

- 复选
	
- 单选
	GroupName=" ";
- 超链接
	NavigateUrl=" ";
- request | reponse
> 使用 <% ··· > 在aspx中写后台代码

Reponse.Redirect("UK.html"); 重定向