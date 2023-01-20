# 具体做法：复制文件到.\layouts\partials\，在其中作修改

- ~~.\themes\even\layouts\partials\comments.html中gitalk创建时添加proxy参数（添加proxy...那一行）~~
        ~~proxy: 'https://cors-anywhere.ijkhly.workers.dev/?https://github.com/login/oauth/access_token'~~
        
- ~~.\themes\even\layouts\partials\head.html中 custom css 后面加上 font-awesome 的 css 引用~~
- ~~.\themes\even\layouts\partials\scripts.html中 custom js 后面加上 live2d-widget 的 js 引用~~
- .\themes\even\layouts\partials\post\copyright.html中去掉git提交hash显示