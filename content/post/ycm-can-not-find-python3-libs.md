---
title: "YouCompleteMe插件编译ycm_core库时找不到python3的库"
date: 2020-01-21
lastmod: 2020-01-21
draft: false
tags: ["Vim", "插件", "YouCompleteMe"]
categories: ["学习", "Vim"]
---

在按照[Full Installation Guide](https://github.com/ycm-core/YouCompleteMe#full-installation-guide)安装YouCompleteMe时，输入命令
```bash
cmake -G "Unix Makefiles" -DUSE_SYSTEM_LIBCLANG=ON . ~/.vim/pack/YouCompleteMe/start/YouCompleteMe/third_party/ycmd/cpp
```
提示
```plaintext
Could NOT find PythonLibs (missing: PYTHON_LIBRARIES PYTHON_INCLUDE_DIRS)
  (Required is at least version "2.7")
```
添加`-DPYTHON_INCLUDE_DIR=/usr/include/python3.7 -DPYTHON_LIBRARY=/usr/lib/x86_64-linux-gnu/libpython3.7m.so`明确指定python3库后，收获如下神奇的提示信息：
```plaintext
You set USE_PYTHON2 to make CMake find python2 libs only, but CMake found
python3 libs instead.  Either don't set USE_PYTHON2 or install the
necessary python2 headers & libraries.
```
猜想可能是CMakeLists.txt中的问题，打开一看，果然
CMakeLists.txt的一部分：

```bash
# Note: build.py always explicitly sets this option, so the default used here
# rarely matters.
option( USE_PYTHON2 "If on, link to Python 2 instead of 3" ON )

if ( USE_PYTHON2 )
  find_package( PythonLibs 2.7 REQUIRED )

  if ( NOT PYTHONLIBS_VERSION_STRING VERSION_LESS "3.0.0" )
    message( FATAL_ERROR
      "You set USE_PYTHON2 to make CMake find python2 libs only, but CMake "
      "found python3 libs instead. Either don't set USE_PYTHON2 or install the "
      "necessary python2 headers & libraries." )
  endif()
else()
  set( Python_ADDITIONAL_VERSIONS 3.9 3.8 3.7 3.6 3.5 )
  find_package( PythonLibs 3.5 REQUIRED )  # 3.5 is ONLY the mininum
endif()
```

将上面的ON改为OFF，就一切正常啦^\_^，即可使用python3的库。
