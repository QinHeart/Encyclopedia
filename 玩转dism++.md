# 玩转dism++
> 制作人：孔庆宁	Email:kongqinheart@gmail.com
>
> 更多详细内容请参考[官方文档](http://www.chuyu.me/zh-Hans/Document.html?file=start.md)


### WinRE
​	跟WinPE几乎一样，只是WinRE更加侧重于系统修复，并且Vista以后系统自带WinRE，因此我们可以在WinRE做原本在WinPE里做的事情。

### 自定义规则
我们需要在Config目录新建一个Custom*.xml文件，以UTF-8或者Unicode编码保存，初始文件如下：

```
<Data>
  <CleanCollection4>
  <!--在此处编写垃圾清理规则-->
  </CleanCollection4>

  <SystemOptimization>
  <!--在此处编写系统优化规则-->
  </SystemOptimization>
</Data>
```

待编码完成后将xml文件压缩（不要修改文件名），为了减小体积，避免不必要的占用

#### 简易清理规则

```xml
<Data>
  <CleanCollection4>
    <Item Name="系统Logs目录">
      <Description>系统的日志目录，用于存放系统运行日志。</Description>
      <Group>临时文件</Group>
      <Scan>
        <Activate>
          <General RootPath="%SystemRoot%\Logs"/>
          <General RootPath="%SystemRoot%" Flags="File">
            <Query>*.log</Query>
            <!--排除WindowsUpdate.log-->
            <Excluded>WindowsUpdate.log</Excluded>
          </General>
        </Activate>
      </Scan>
    </Item>
  </CleanCollection4>
</Data>
```
* 相信聪明的你一定知道怎么使用了···

### 通用安装脚本

​	安装一款软件可以理解为先释放文件，然后写入注册表。因此理论上我们只要捕获这些操作，就可以将软件与系统进行原生整合，大大缩短系统的安装时间。

1.   下载[SutWizard](http://cdn.chuyu.me/SutWizard_1.0.0.2_7ba6e8933b4b8ab5c85d09d435a9f8585d2764e3.zip)

2.   启动StuWizard(快速模式)，过一段时间后，你将看到提示。这时进入第二阶段，安装你的应用程序。

3.   当程序提示说你可以安装应用后，双击你需要安装的应用程序。这里我们以VC 2008为例。操作过程中请勿关闭SutWizard！

4. 手动双击你需要的应用程序，然后让他安装完成。

5. 应用安装完成后会显示正在产生差异。稍等片刻……产生差异化文件

#### 优化差异数据

Data\Data.xml是规则文件，其中 IsInstallable 节点必须填写

```xml
<IsInstallable>
    <Applicable>
        <!--IsInstallable节点 用于判断此软件是否适用目标系统。请在此节点内输入检测条件。（必选）-->
        <!--目标系统必须是amd64体系-->
        <Arch>9</Arch>
        <!--系统版本必须是10.0.15063-->
        <OSVersion>10.0.15063</OSVersion>
    </Applicable>
</IsInstallable>
```
6. 打包，选择我已拥有差异目录

### 安装系统

>   ​	在RE模式中，Dism++可以格式化系统盘。如果需要全新安装系统，又不想使用PE，可以使用此模式。

>   ​	WinRE更加侧重于系统修复，并且Vista以后系统自带WinRE，因此我们可以在WinRE做原本在WinPE里做的事情。

1.   ISO安装
文件-释放映像，勾选添加引导，格式化
2.   ESD安装
文件-释放映像，勾选添加引导，格式化
3.   Compact安装（推荐）
文件-释放映像，勾选添加引导，格式化，Compact
4.   VIMBoot安装
文件-释放映像，勾选添加引导，格式化，VIMBoot

### 离线补丁

1.   解压 ISO
2.   文件-挂在映像，挂载路径必须存在
3.   打开路径-更新管理-扫描-选择性安装（更新缓存："Config\UpdateCache"）
4.   保存映像-覆盖保存-卸载映像



### 优化wim文件体积

​	由于保存映像会引入垃圾数据，增大文件体积。要得到最优体积，请点击 文件 - 打开映像文件。将处理的映像导出到`D:\Temp\Sources\install2.wim`，

然后把`D:\Temp\Sources\install2.wim`改名为`install.wim`。

