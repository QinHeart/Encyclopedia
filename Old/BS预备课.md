# B/S预备课

## 1.软件架构

B/S架构 --> web程序

随着互联网的发展，趋势于将 B/S 向 C/S 发展

我们所有的东西都希望通过浏览器的方式使用，不依赖于其他任何第三方环境

## 2.开发 B/S 构架软件需要哪些人才？

前端、后端、测试、运维、产品经理（PM）、CTO 技术、构架师

## 3.前端准备

Vscode

Chrome

NodeJs

设置淘宝镜像命令：

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```
更新 npm:

```
npm install -g npm
```

yarm

(可选）如果你要安装它，前提是必须安装Nodejs

查看当前镜像源

```shell
config get registry
```

修改淘宝镜像

```shell
yarn config set registry https://registry.npm.taobao.org/
```

vscode插件:

Chinese、HTML CSS Support、HTML Snippets、Live Server、Material Icon Theme

## 4.前端预备

HTML 定义网站的内容的含义、结构

CSS 网页的表现和展示效果

Javascript 功能和行为

JS框架：

IQuery、Vue、React

CSS框架:

BootStrap、ELEUI、element

## 5.后端预备

```
中科大
https://mirrors.ustc.edu.cn/ubuntu/
阿里云
https://mirrors.aliyun.com/ubuntu/
```

## 6.Git（必学）

1.版本控制 保留一切历史，可以迅速让代码恢复到你想要的位置

2.协作开发

## 7.linux

### 安装 wmtools(Desktop)

找出安装包位置

```
ls
tar -zxvf VM
cd VM
sudo ./vmware-install.pl
```

### 基础配置

```
注：替换阿里云镜像源 http://mirrors.aliyun.com/ubuntu/
1.安装 net-tools -->sudo apt install net-tools
2.安装 ssh --> sudo apt install ssh
3.更新服务器 --> sudo apt --upgradable
sudo apt update
sudo apt upgrade
```

```
--> 还不确定有没有用
	sudo apt apdate
	sudo passwd root
	sudo apt-get install openssh-server
```

连接 SSH
```
ssh qinheart@192.168.31.225
```

### Git

git clone、git status、 git diff (j,k)

```
PS E:\Gitee\demo> git add -A
PS E:\Gitee\demo> git config --global user.email "kongqinheart@gmail.com"
PS E:\Gitee\demo> git config --global user.name "kongqn"
PS E:\Gitee\demo> git commit -a -m '第一次提交'
```



```
 ! [rejected]        master -> master (non-fast-forward)
error: failed to push some refs to 'https://gitee.com/kongqn/demo.git'
hint: Updates were rejected because the tip of your current branch is behind   
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.    
```

出现如上问题可能是因为 git 仓库中已经有了一些代码，不允许我们直接覆盖上去，此时我们有两个选择：

```
1. 强推，即利用强覆盖方式用你本地的代码替代git仓库内的内容:
	git push -f
2. 先把git的东西fetch到你本地然后merge后再push
    - git fetch
    - git merge
这2句命令等价于
	git pull（更新最新代码）
有时候remote有多个版本分支库，git pull需要指定开发版本的分支：
	git pull origin master
```



看完b/s预备课准备先从html/css/javascript入手，简单制作网页，然后mysql,linux，将网站上线
