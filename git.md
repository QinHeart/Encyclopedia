# Git
## 实用  
### 流程  
1. 工作目录中添加、修改文件
2. 所有文件放入暂存区 git add .
3. 暂存区文件提交到 git 仓库 git commit -m "注释"
4. push 到远程
#### git 文件的三种状态：  
1. modified 已修改
2. staged 已暂存
3. committed 已提交
### 新建仓库  
```
git init/clone
```
#### 查看当前文件状态  
```
git status
```
### 忽略文件  
* 主目录下建立 .gitignore  
* 忽略 # 开始的行
* *.html --> 忽略 .html 结尾的文件
* build/ --> 忽略 build 文件夹下所有文件
* ！filename --> 列外规则，不被忽略
* /file 忽略file以上文件
* file/忽略file下所有文件  
### 使用码云  
* 生成 ssh 密钥

```
ssh-keygen
```

* 配置 ssh 密钥
```
C:\Users\Administrator\.ssh\id_rsa.pub
```

* 许可证(GPL3.0)
```
开源是否可以随意转载，开源但不能随意商业使用，不能转载，···
```
### 快捷操作  
```
git inint/clone
git status 查看状态
git add .
git commit -m filename
git push
git reset 回退版本
git rm 删除工作区文件
git mv 移动或重命名工作区文件
```
### 日志
```
git log 查看历史提交记录
* git log --online 简洁模式
* git log --graph 拓扑图结构
git blame filename 列表形式查看指定文件历史修改记录
```
### Git分支  
```
git branch 查看分支 (-r远程)
git checkedout branchname 切换分支
git branch branchname 添加分支 (-b立即切换分支 -d删除分支)
git merge branchname 合并指定分区到当前分区
* 代码冲突只要进行筛选，重新提交即可
```
------日常使用已经够啦，以下为拓展内容------


## 理论为主
1.版本控制（保留一切历史，可以迅速让代码恢复到你想要的位置）  
2.协同开发  
## 安装配置
### 用户信息  
#### 用户名和电子邮箱  
```git
$ git config --global user.name "runoob"
$ git config --global user.email test@runoob.com
```
### 文本编辑器  
```git
$ git config --global core.editor emacs
```
### 差异分析工具  
```git
$ git config --global merge.tool vimdiff
```
### 配置信息  
#### 已有配置信息  
```
$ git config --list
$ git config --global --list
```
有时候会看到重复的变量名，那就说明它们来自不同的配置文件（比如 /etc/gitconfig 和 ~/.gitconfig），不过最终 Git 实际采用的是最后一个。
这些配置可以在 ~/.gitconfig 或 /etc/gitconfig 看到，如下所示：  
```angular2html
vim ~/.gitconfig 
```
#### 直接查看环境变量  
```
$ git config user.name
```
## 工作流程
1. 克隆 Git 资源作为工作目录。
2. 在克隆的资源上添加或修改文件。
3. 如果其他人修改了，你可以更新资源。
4. 在提交前查看修改。
5. 提交修改。
6. 在修改完成后，如果发现错误，可以撤回提交并再次修改并提交。
## Git基本操作  
#### 常用命令  
```
git clone、git push、git add
git commit、git checkout、git pull
```
#### 创建仓库  
```
git init 初始化仓库
git clone 下载项目
```
#### 提交与修改
```
git add 添加文件到仓库
git status 查看仓库当前状态，显示变更文件
git diff 比较文件不同（暂存区、工作区）
git commit 提交代码到本地暂存区
git reset 回退版本
git rm 删除工作区文件
git mv 移动或重命名工作区文件
```
#### 提交日志  
```
git log 查看历史提交记录
* git log --online 简洁模式
* git log --graph 拓扑图结构
git blame filename 列表形式查看指定文件历史修改记录
```
#### 远程命令
```
git remote 远程仓库操作
git fetch 从远程获取代码库
git pull 下载代码并合并
git push 上传远程代码并合并
```
## Git 分支管理  
* git branch 查看分支
* git branch branchname 创建分支
* git checkout branchname 切换分支
* git checkout -b branchname 创建并立即切换分支
* git branch -d branchname 删除分支
* git merge branchname 合并分支  
## Github  
* 目前最先进版本控制系统
* 每个人都拥有全部的代码  
## 实用  
### 流程  
1. 工作目录中添加、修改文件
2. 所有文件放入暂存区 git add .
3. 暂存区文件提交到 git 仓库 git commit -m "注释"
4. push 到远程
#### git 文件的三种状态：  
1. modified 已修改
2. staged 已暂存
3. committed 已提交
### 新建仓库  
#### 本地  
```
git init
```
#### 远程克隆  
```
git clone url
```
#### 查看当前文件状态  
```
git status
```
### 忽略文件  
* 主目录下建立 .gitignore  
* 忽略 # 开始的行
* *.html --> 忽略 .html 结尾的文件
* build/ --> 忽略 build 文件夹下所有文件
* ！filename --> 列外规则，不被忽略
* /file 忽略file以上文件
* file/忽略file下所有文件  
### 使用码云  
* 生成 ssh 密钥

```
ssh-keygen
```

* 配置 ssh 密钥
```
C:\Users\Administrator\.ssh\id_rsa.pub
```

* 许可证(GPL3.0)
```
开源是否可以随意转载，开源但不能随意商业使用，不能转载，···
```
### 快捷操作  
```
git inint/clone
git status 查看状态
git add .
git commit -m filename
git push
```
### Git分支  
```
git branch 查看分支 (-r远程)
git branch branchname 添加分支 (-b立即切换分支)
git merge branchname 合并指定分区到当前分区
* 代码冲突只要进行筛选，重新提交即可
```