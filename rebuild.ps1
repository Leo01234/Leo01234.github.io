Get-ChildItem -Path .\github-pages\ -Exclude .git | Remove-Item -Recurse
hugo --config config.github.toml
Get-ChildItem -Path .\gitee-pages\ -Exclude .git | Remove-Item -Recurse
hugo --config config.gitee.toml