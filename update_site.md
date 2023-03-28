## 添加新文章
.\hugo.exe new post/***.md

## 更新gitpage
1. 删除docs文件夹
2. .\hugo --config config.github.toml
3. git commit
4. git push

## 更新ijkhly.online
1. 删除docs_ijkhly.online文件夹
2. .\hugo --config config.ijkhly.online.toml
3. 将docs_ijkhly.online里的内容复制过去（目标位置原先的内容清空）