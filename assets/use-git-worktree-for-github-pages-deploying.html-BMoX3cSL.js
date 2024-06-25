import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as o,e as i}from"./app-B1a77N5c.js";const r="/assets/github-pages-deploy-BTw7JvXw.png",a={},c=i('<p>在<code>github</code>上部署<code>github pages</code>时，有两个选项：部署的内容所在的分支，和分支中的哪个文件夹。然而，分支可以选任意的分支，文件夹却只有两个选项：根目录(<code>/</code>)，或<code>/docs</code>文件夹。</p><figure><img src="'+r+'" alt="文件夹只有两个选项" tabindex="0" loading="lazy"><figcaption>文件夹只有两个选项</figcaption></figure><p>这就带来了几个问题：</p><ul><li>很多静态网站生成器（比如<code>hugo</code>）默认以<code>/public</code>文件夹为网站生成目录，此时就只能在配置中强行更改生成目录为<code>/docs</code></li><li><code>/docs</code>本身语义不明。有些项目将自身的说明文档放在<code>/docs</code>，并且有另外的展示<code>page</code>，此时就冲突了</li><li>最重要的一点，此时网站的源代码和生成的内容在同一个分支中，结构较为臃肿，不方便维护</li></ul><p>此时就可以用到<code>git</code>的<code>worktree</code>功能，将源代码和生成的内容放在两个不同的分支中。</p><h2 id="git-worktree" tabindex="-1"><a class="header-anchor" href="#git-worktree"><span>git worktree</span></a></h2><p>官方文档：</p><blockquote><p>描述：</p><p>管理多个<strong>附到同一个仓库的</strong>工作树(working tree)。</p><p>一个<code>git</code>仓库可以支持多个工作树，使你可以同时检出多个分支。<code>git worktree add</code>添加一个新的<strong>与此仓库关联的</strong>工作树。与使用<code>git init</code>或<code>git clone</code>创建的<code>主工作树</code>(main working tree)不同，这个新的工作树叫做<code>关联工作树</code>(linked working tree)。一个仓库有一个主工作树（如果不是裸的仓库），和零个或多个关联工作树。当你用完了关联工作树后，使用<code>git worktree remove</code>移除它。</p></blockquote><p><s>自己翻译的，若有问题。。。不对，我翻译的怎么可能有问题！😎</s></p><p>个人理解是，<code>git worktree add</code>后，在原仓库之外的其他目录创建了一个和原仓库几乎一模一样的仓库，在新的仓库里几乎可以做所有原仓库可以做的事。和重新<code>clone</code>一个原仓库不一样的是，在<em>新的仓库</em>里所做的改动会自动同步到原仓库中，整个过程都是在本地完成，不涉及到远端。其实仔细观察新的<code>worktree</code>的目录也可以发现，在这里<code>.git</code>不是目录，而是文件，里面只有一个到原仓库的链接。</p><p><code>git worktree</code>的具体语法参见<a href="https://git-scm.com/docs/git-worktree" target="_blank" rel="noopener noreferrer">官方文档</a>。</p><h2 id="用来部署-github-pages" tabindex="-1"><a class="header-anchor" href="#用来部署-github-pages"><span>用来部署 github pages</span></a></h2><p>这个功能是为同时检出多个分支设计的，而我们这里需要源代码和生成的网站同时存在不同的分支中，正好适合。</p><p>假设现在网站源代码在<code>git</code>仓库的<code>main</code>分支中。那么</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> worktree</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">到新的工作树的路</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">径</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这会在指定位置创建一个工作树，且在<code>main</code>分支的当前位置新建一个以<code>&lt;到新的工作树的路径&gt;的最后一级目录名</code>命名的分支（若原先没有的话），并在新的工作树中检出它。</p><p>这个<code>&lt;到新的工作树的路径&gt;</code>可以在原仓库目录外，也可以在原仓库目录内。不过如果在目录内的话需要在仓库的<code>.gitignore</code>文件里加上新工作树的目录。在这里，静态网站生成器通常将生成的内容放在同一目录下的文件夹内，就采用在目录内的方式。</p><p>现在，只需要</p><ol><li>和原来一样在新建的工作树的文件夹内生成网站（例：<code>hugo</code>命令）</li><li><code>cd</code>到此文件夹内</li><li><code>git add .</code>和<code>git commit</code></li></ol><p>这样就可以在两个分支上分别拥有源代码和生成的网站了。之后将两个分支都推送到<code>github</code>，设置里选择<em>拥有生成的网站的分支</em>进行部署。</p><h2 id="优点" tabindex="-1"><a class="header-anchor" href="#优点"><span>优点</span></a></h2><ul><li>源代码和生成的内容分开</li><li>生成的网站也拥有提交历史，可以回滚</li></ul><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><p><a href="https://musteresel.github.io/posts/2018/01/git-worktree-for-deploying.html" target="_blank" rel="noopener noreferrer">Using git worktree for deploying to GitHub Pages – musteresel&#39;s blog</a></p><p><a href="https://stackoverflow.com/questions/36782467/set-subdirectory-as-website-root-on-github-pages" target="_blank" rel="noopener noreferrer">git - Set subdirectory as website root on Github Pages - Stack Overflow</a></p><p><a href="https://gist.github.com/cobyism/4730490" target="_blank" rel="noopener noreferrer">Deploy to `gh-pages` from a `dist` folder on the master branch. Useful for use with [yeoman](http://yeoman.io).</a></p><p><a href="https://git-scm.com/docs/git-worktree" target="_blank" rel="noopener noreferrer">Git - git-worktree Documentation</a></p>',27),s=[c];function d(p,g){return t(),o("div",null,s)}const h=e(a,[["render",d],["__file","use-git-worktree-for-github-pages-deploying.html.vue"]]),u=JSON.parse('{"path":"/post/use-git-worktree-for-github-pages-deploying.html","title":"使用 git 的 worktree 功能部署 Github Pages","lang":"zh-CN","frontmatter":{"title":"使用 git 的 worktree 功能部署 Github Pages","date":"2021-02-16T08:33:42.000Z","category":["学习"],"tag":["git","worktree","github pages","gitee pages","hugo"],"description":"在github上部署github pages时，有两个选项：部署的内容所在的分支，和分支中的哪个文件夹。然而，分支可以选任意的分支，文件夹却只有两个选项：根目录(/)，或/docs文件夹。 文件夹只有两个选项文件夹只有两个选项 这就带来了几个问题： 很多静态网站生成器（比如hugo）默认以/public文件夹为网站生成目录，此时就只能在配置中强行更改生...","head":[["meta",{"property":"og:url","content":"https://leo01234.github.io/post/use-git-worktree-for-github-pages-deploying.html"}],["meta",{"property":"og:site_name","content":"Leo01234"}],["meta",{"property":"og:title","content":"使用 git 的 worktree 功能部署 Github Pages"}],["meta",{"property":"og:description","content":"在github上部署github pages时，有两个选项：部署的内容所在的分支，和分支中的哪个文件夹。然而，分支可以选任意的分支，文件夹却只有两个选项：根目录(/)，或/docs文件夹。 文件夹只有两个选项文件夹只有两个选项 这就带来了几个问题： 很多静态网站生成器（比如hugo）默认以/public文件夹为网站生成目录，此时就只能在配置中强行更改生..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-25T16:37:10.000Z"}],["meta",{"property":"article:author","content":"Leo01234"}],["meta",{"property":"article:tag","content":"git"}],["meta",{"property":"article:tag","content":"worktree"}],["meta",{"property":"article:tag","content":"github pages"}],["meta",{"property":"article:tag","content":"gitee pages"}],["meta",{"property":"article:tag","content":"hugo"}],["meta",{"property":"article:published_time","content":"2021-02-16T08:33:42.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-25T16:37:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用 git 的 worktree 功能部署 Github Pages\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-02-16T08:33:42.000Z\\",\\"dateModified\\":\\"2024-06-25T16:37:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Leo01234\\",\\"url\\":\\"https://leo01234.github.io\\",\\"email\\":\\"ijkhly@126.com\\"}]}"]]},"headers":[{"level":2,"title":"git worktree","slug":"git-worktree","link":"#git-worktree","children":[]},{"level":2,"title":"用来部署 github pages","slug":"用来部署-github-pages","link":"#用来部署-github-pages","children":[]},{"level":2,"title":"优点","slug":"优点","link":"#优点","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1718026609000,"updatedTime":1719333430000,"contributors":[{"name":"Leo01234","email":"40910694+Leo01234@users.noreply.github.com","commits":2}]},"readingTime":{"minutes":3.62,"words":1085},"filePathRelative":"post/use-git-worktree-for-github-pages-deploying.md","localizedDate":"2021年2月16日","excerpt":"<p>在<code>github</code>上部署<code>github pages</code>时，有两个选项：部署的内容所在的分支，和分支中的哪个文件夹。然而，分支可以选任意的分支，文件夹却只有两个选项：根目录(<code>/</code>)，或<code>/docs</code>文件夹。</p>\\n<figure><figcaption>文件夹只有两个选项</figcaption></figure>\\n<p>这就带来了几个问题：</p>\\n<ul>\\n<li>很多静态网站生成器（比如<code>hugo</code>）默认以<code>/public</code>文件夹为网站生成目录，此时就只能在配置中强行更改生成目录为<code>/docs</code></li>\\n<li><code>/docs</code>本身语义不明。有些项目将自身的说明文档放在<code>/docs</code>，并且有另外的展示<code>page</code>，此时就冲突了</li>\\n<li>最重要的一点，此时网站的源代码和生成的内容在同一个分支中，结构较为臃肿，不方便维护</li>\\n</ul>","autoDesc":true}');export{h as comp,u as data};
