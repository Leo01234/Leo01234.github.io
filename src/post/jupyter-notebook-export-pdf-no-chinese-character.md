---
title: Jupyter Notebook 导出 pdf 中文显示为空白的问题
# icon: circle-info
date: 2024-06-17T20:06:38+08:00
category:
  - 学习
tag:
  - Jupyter Notebook
  - 中文
  - 空白
  - LaTeX
  - pdf
# sticky: true
# star: true
# article: false
# timeline: false
# cover: /assets/images/cover3.jpg
---

使用 Jupyter Notebook 时，将 `.ipynb` 文件导出为 pdf，文件中中文都不显示。

解决办法是先导出为 LaTeX，生成 `.tex` 文件，在其中引入包的地方，也就是一堆 `\usepackage` 的地方，添加

```latex
\usepackage[UTF8]{ctex}
```

最后将 `.tex` 文件编译为 pdf 即可。

## 参考资料

[LaTeX中文不显示解决方法_latex为啥文字显示不出来-CSDN博客](https://blog.csdn.net/qq_40472064/article/details/105864226)

[解决MacOS中Jupyter Notebook通过Latex导出PDF中文无法显示的问题 - 路上](https://lushang.me/archives/221/)
