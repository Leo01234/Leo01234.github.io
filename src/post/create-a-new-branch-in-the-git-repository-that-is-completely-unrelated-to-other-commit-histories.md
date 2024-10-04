---
title: git 仓库新建一个与其它提交历史完全无关的分支
# icon: circle-info
date: 2024-10-04T14:54:27+08:00
category:
  - 学习
tag:
  - git
  - 分支
  - 提交
# sticky: true
# star: true
# article: false # 是否将该文章添加至文章列表中
# timeline: false # 是否将该文章添加至时间线中
# cover: /assets/images/cover3.jpg

# navbar: false # 填入 false 会禁用导航栏
# sidebar: false # 填入 false 会禁用侧边栏
# index: false # 是否在侧边栏或目录中索引当前页面
---

## 1. 使用 `--orphan`

```bash
git checkout --orphan [branch_name]
git commit -a
```

参考：[git - How to push new branch without history - Stack Overflow](https://stackoverflow.com/questions/12543055/how-to-push-new-branch-without-history)

## 2. 从新仓库引入新分支

先建立新仓库 `/path/to/unrelated`，有默认分支 `master`

再回原仓库，

```bash
cd /path/to/repo
git fetch /path/to/unrelated master:unrelated-branch
```

这样就有了 `unrelated-branch`，`/path/to/unrelated` 可以删除了

参考：[In git, is there a simple way of introducing an unrelated branch to a repository? - Stack Overflow](https://stackoverflow.com/questions/1384325/in-git-is-there-a-simple-way-of-introducing-an-unrelated-branch-to-a-repository)
