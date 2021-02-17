---
title: "Matlab中文编码问题"
date: 2020-03-23
lastmod: 2020-03-23
draft: false
tags: ["Matlab", "中文", "编码", "乱码"]
categories: ["学习", "Matlab"]
---

内置编辑器中文内容保存后再打开变为乱码/问号(?)
画图时中文标题显示为乱码/问号(?)

## 系统环境
- Matlab R2019b
- Windows 10
- 系统语言是英文

## 现象
1. 原本写的时候是这样：
   {{% figure src="editor-original-text.png" title="原来的样子" lightbox="true" %}}
   保存一下关闭`Matlab`再打开，唔！竟然变成了这样：
   {{% figure src="editor-question-marks-text.png" title="问号？？？" lightbox="true" %}}
   或是这样：
   {{% figure src="editor-bad-text.png" title="乱码？" lightbox="true" %}}

2. 使用plot函数画图，结果是这样：
   {{% figure src="plot-question-marks.png" title="又是问号？？？" lightbox="true" %}}
   或是这样：
   {{% figure src="plot-bad.png" title="乱码？" lightbox="true" %}}

3. 在`Matlab`命令窗口中输入命令`feature('locale')`，输出是这样：
   ```plaintext
   struct with fields:

               ctype: 'en_US.windows-1252'
             collate: 'en_US.windows-1252'
                time: 'en_US.windows-1252'
             numeric: 'en_US_POSIX.windows-1252'
            monetary: 'en_US.windows-1252'
            messages: 'en_US.windows-1252'
            encoding: 'windows-1252'
    terminalEncoding: 'GBK'
         jvmEncoding: 'Cp1252'
              status: 'MathWorks locale management system initialized.'
             warning: 'System locale setting, zh_CN, is different from user locale setting, en_US.'
   ```
   注意`windows-1252`编码。

{{% admonition info "info" %}}
如果你在`Matlab`内置编辑器中无法输入中文，或显示为方框，那应该是设置的字体不支持中文，与本文内容无关。
{{% /admonition %}}

## 解决办法
1. 找到你的`Matlab`的安装目录，可以通过右击`Matlab`图标，选择“打开文件夹位置”查看。在我这里是`C:\Program Files\MATLAB\R2019b\bin`。
2. 此目录下应该有一个`lcdata.xml`文件，和一个`lcdata_utf8.xml`文件。{{% figure src="files.png" title="" lightbox="true" %}}其中`lcdata.xml`是仅包含注释的空文件。
若只有`lcdata.xml`文件，应该是较早的`Matlab`版本，解决方法应该类似。
3. 备份一下`lcdata.xml`文件，如将其重命名为`lcdata.old.xml`。复制`lcdata_utf8.xml`并将其重命名为`lcdata.xml`。然后打开新的`lcdata.xml`进行修改。
4. 此时`lcdata.xml`大概是这个样子：
   {{% figure src="lcdata-look-like.png" title="下面还有很多行" lightbox="true" %}}
   找到这个：
   ```xml
   <encoding name="windows-1252" jvm_encoding="Cp1252">
       <encoding_alias name="1252"/>
   </encoding>
   ```
   将其删除。再找到这个：
   ```xml
   <encoding name="UTF-8">
       <encoding_alias name="utf8"/>
   </encoding>
   ```
   将其改成
   ```xml
   <encoding name="UTF-8">
       <encoding_alias name="utf8"/>
       <encoding_alias name="windows-1252"/>
       <encoding_alias name="1252"/>
   </encoding>
   ```
5. 重启`Matlab`，问题是不是都解决了呢？注意此时`feature('locale')`命令的输出：
   ```plaintext
   struct with fields:

               ctype: 'en_US.UTF-8'
             collate: 'en_US.UTF-8'
                time: 'en_US.UTF-8'
             numeric: 'en_US_POSIX.UTF-8'
            monetary: 'en_US.UTF-8'
            messages: 'en_US.UTF-8'
            encoding: 'UTF-8'
    terminalEncoding: 'GBK'
         jvmEncoding: 'UTF-8'
              status: 'MathWorks locale management system initialized.'
             warning: 'System locale setting, zh_CN, is different from user locale setting, en_US.'
   ```

## 原理
其实就是将`windows-1252`编码（不包含中文字符编码）原本的信息删除，并让`Matlab`误以为`windows-1252`是`UTF-8`（包含中文字符编码）的一个别称罢了！

## 延申
若是原先`feature('locale')`命令的结果中不是`windows-1252`编码，而是`GBK`或其他编码，可以类似处理。

## 参考资料
[Matlab如何以UTF-8编码保存？ - 知乎](https://www.zhihu.com/question/27933621)

[修改MATLAB的默认编码方式为UTF-8 - CSDN](https://blog.csdn.net/happyangry/article/details/86237693)

[英文操作系统，MATLAB编辑器保存与显示中文乱码的两种情况和解决方法 - CSDN](https://blog.csdn.net/xisat/article/details/86517380)

[matlab2018a 中文乱码问题（win10） - CSDN](https://blog.csdn.net/qq_34241498/article/details/90168924)

[How do I get my MATLAB editor to read UTF-8 characters? UTF-8 characters in blank squares in editors, but in the command window and workspace works fine. - MathWorks](https://ww2.mathworks.cn/matlabcentral/answers/280988-how-do-i-get-my-matlab-editor-to-read-utf-8-characters-utf-8-characters-in-blank-squares-in-editors)
