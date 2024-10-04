---
title: PowerShell 脚本使 Windows 文件浏览器记住打开的路径
# icon: circle-info
date: 2024-10-04T12:19:41+08:00
category:
  - 学习
tag:
  - PowerShell
  - Windows 文件浏览器
  - 记住
  - 路径
# sticky: true
# star: true
# article: false # 是否将该文章添加至文章列表中
# timeline: false # 是否将该文章添加至时间线中
# cover: /assets/images/cover3.jpg

# navbar: false # 填入 false 会禁用导航栏
# sidebar: false # 填入 false 会禁用侧边栏
# index: false # 是否在侧边栏或目录中索引当前页面
---

## 核心脚本

::: tabs

@tab auto.ps1

可添加到开机自启动（使用后面的方法消除命令窗口）

```powershell
$sleep = 10 * 60
$objShell = New-Object -COMObject "Shell.Application"

foreach($line in Get-Content -Encoding utf8NoBOM -Path '.\Folder_paths.log') {
    $objShell.explore($line)
    Start-Sleep -Milliseconds 500
}
Start-Sleep $sleep

while($true){
    $processingTime = measure-command {
        $contentStr = @($objShell.Windows()).Document.Folder.Self.Path
        if($contentStr){
            Set-Content -Encoding utf8NoBOM -Path '.\Folder_paths.log' -Value $contentStr
        }
    }
    $newSleep = $sleep - $processingTime.totalSeconds
    if ($newSleep -lt 0){
        $newSleep = 0
    }
    Start-Sleep $newSleep
}
```

`.\Folder_paths.log` 为保存路径的文件

@tab save.ps1

手动保存当前打开着的路径

```powershell
$objShell = New-Object -COMObject "Shell.Application"
$contentStr = @($objShell.Windows()).Document.Folder.Self.Path
if($contentStr){
    Set-Content -Encoding utf8NoBOM -Path '.\Folder_paths.log' -Value $contentStr
}
```

@tab reopen.ps1

手动打开保存的路径

```powershell
$objShell = New-Object -COMObject "Shell.Application"
foreach($line in Get-Content -Encoding utf8NoBOM -Path '.\Folder_paths.log') {
    $objShell.explore($line)
    Start-Sleep -Milliseconds 500
}
```

:::

## 无窗口运行（不显示命令窗口）

::: tabs

@tab auto.js

```js
var wshShell = new ActiveXObject("WScript.Shell");
wshShell.Run('"pwsh.exe" -WindowStyle Hidden ".\\auto.ps1"', 0, false);
```

创建快捷方式，目标命令为 `wscript.exe .\auto.js`

@tab save.js

```js
var wshShell = new ActiveXObject("WScript.Shell");
wshShell.Run('"pwsh.exe" -WindowStyle Hidden ".\\save.ps1"', 0, false);
```

创建快捷方式，目标命令为 `wscript.exe .\save.js`

@tab reopen.js

```js
var wshShell = new ActiveXObject("WScript.Shell");
wshShell.Run('"pwsh.exe" -WindowStyle Hidden ".\\reopen.ps1"', 0, false);
```

创建快捷方式，目标命令为 `wscript.exe .\reopen.js`

:::

## 参考资料

[batch - How to get which folders are currently open in explorer? - Super User](https://superuser.com/questions/1699488/how-to-get-which-folders-are-currently-open-in-explorer)