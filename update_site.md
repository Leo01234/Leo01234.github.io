## hugo版本
.\hugo.exe version
hugo v0.109.0-47b12b83e636224e5e601813ff3e6790c191e371+extended windows/amd64 BuildDate=2022-12-23T10:38:11Z VendorInfo=gohugoio

## 添加新文章
.\hugo.exe new post/***.md
.\hugo.exe new --kind post-bundle post/***
写完了git commit

## 更新gitpage
1. 删除docs文件夹
2. .\hugo --config config.github.toml
3. git commit
4. git push

## 更新ijkhly.online
1. 删除docs_ijkhly.online文件夹
2. .\hugo --config config.ijkhly.online.toml
3. 将docs_ijkhly.online里的内容复制过去（目标位置原先的内容清空）