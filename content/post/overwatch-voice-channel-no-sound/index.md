---
title: "守望先锋 语音频道没声音"
date: 2021-03-06T15:30:15+08:00
draft: false
tags: ["守望先锋", "语音", "没声音", "耳机", "麦克风", "隐私"]
categories: ["娱乐"]
---

守望玩了也有一阵子了，但是从来没有听到过其他人发的语音。有时会看到游戏左上角显示有声音图标，显然是有人在讲话，但却听不到任何声音。一直也没有去管这个问题，最近突然想解决一下。

## 游戏设置

看了一遍，也没有问题，如下图所示：

{{% figure src="options.png" title="声音选项" %}}

Group 和 team 的语音都是自动加入的。看来不是这里的问题。

## 系统麦克风隐私设置

在室友的帮助下，看到网上有人说和`系统麦克风隐私设置`有关。一开始我还不信，听不听得到语音和麦克风有什么关系？谁知道改过之后真就能听见语音了。。。

{{% figure src="microphone.png" title="系统麦克风隐私设置" %}}

如图，点`Change`按钮，使其变成`Microphone access for this device is on`。（图中是已经改过了的）

然后，重启游戏，就好了。

## 总结

个人理解是语音需要麦克风权限，游戏检测到系统没有打开麦克风权限，就不播放语音了。