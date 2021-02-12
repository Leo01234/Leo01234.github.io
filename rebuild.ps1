Get-ChildItem -Path .\github-pages\ -Exclude .git | Remove-Item
hugo --config config.github.toml
Get-ChildItem -Path .\gitee-pages\ -Exclude .git | Remove-Item
hugo --config config.gitee.toml