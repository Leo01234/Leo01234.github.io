---
title: FFmpeg 常用命令（备忘）
# icon: circle-info
date: 2024-06-17T20:40:23+08:00
category:
  - 学习
tag:
  - FFmpeg
  - 命令
  - 视频
  - 音频
# sticky: true
star: true
# article: false
# timeline: false
# cover: /assets/images/cover3.jpg
---

## `.mkv` 转 `.mp4`

```powershell
ffmpeg -i .\inputVideo.mkv -c copy .\outputVideo.mp4
```

## 压缩视频文件大小

```powershell
# 下面的 -fs 参数用于控制文件大小，-fs 10M 就是让文件不要超过10M
ffmpeg -i .\inputVideo.mkv -fs 10M .\outputVideo.mp4
```

## 裁剪视频

流复制方式

```powershell
ffmpeg -i .\inputVideo.mp4 -ss 00:10:00.0 -to 00:20:00.0 -c copy .\outputVideo.mp4
```

| 选项 | 解释     |
| :--- | :------- |
| -ss  | 开始时间 |
| -to  | 结束时间 |
| -t   | 持续时间 |

参考：[FFmpeg教程-裁剪视频 - 简书](https://www.jianshu.com/p/9112980e7435)\
[使用FFmpeg实现精确剪切视频_ffmpeg视频无损精准剪切-CSDN博客](https://blog.csdn.net/yunxiaobaobei/article/details/106529585)

## codec

acodec 指 audio codec，vcodec 指 video codec

`-c copy` == `-acodec copy -vcodec copy`

`-c:a` == `-codec:a` == `-acodec`(deprecated)

`-c:v` == `-codec:v` == `-vcodec`(deprecated)

`-vn` 无视频，`-an` 无音频

参考：[What's the difference between "-acodec" and "-c" in FFMPEG - Super User](https://superuser.com/questions/1620426/whats-the-difference-between-acodec-and-c-in-ffmpeg)

## 参考资料

[【视频压制】通过FFmpeg快速转换视频格式、压缩文件大小 - 哔哩哔哩](https://www.bilibili.com/read/cv28892284/)
