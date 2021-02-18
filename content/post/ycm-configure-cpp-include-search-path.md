---
title: "YouCompleteMe配置C++ include 头文件的搜索路径"
date: 2020-01-22
lastmod: 2020-01-22
draft: false
tags: ["Vim", "插件", "YouCompleteMe"]
categories: ["学习", "计算机技术"]
---

安装完`YouCompleteMe`发现不能补全C++头文件，原来是没有配置`.ycm_extra_conf.py`。根据官方文档的说法，只需要将示例的配置文件改一改`flags`的值就可以了。可是`'-isystem'`后需要接include头文件的搜索路径,这个东西在哪找呢？
经过一番查找，得知`clang`在编译时加上`-v`选项可以显示头文件的搜索路径。此时就只需将其一项项按顺序写在`'-isystem'`的后面就行啦！

后来发现的同样的解决方法，以供参考：[https://superuser.com/questions/1472998/youcompleteme-not-parsing-include](https://superuser.com/questions/1472998/youcompleteme-not-parsing-include)

然而当`libstdc++`升级时可就惨了@\_@需要同时更改`.ycm_extra_conf.py`里的路径才行。
