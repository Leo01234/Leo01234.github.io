import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,e as a,o as s}from"./app-B2s0bUXU.js";const r={};function n(h,e){return s(),i("div",null,e[0]||(e[0]=[a(`<h2 id="_1-使用-orphan" tabindex="-1"><a class="header-anchor" href="#_1-使用-orphan"><span>1. 使用 <code>--orphan</code></span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> checkout</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --orphan</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [branch_name]</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> commit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -a</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>参考：<a href="https://stackoverflow.com/questions/12543055/how-to-push-new-branch-without-history" target="_blank" rel="noopener noreferrer">git - How to push new branch without history - Stack Overflow</a></p><h2 id="_2-从新仓库引入新分支" tabindex="-1"><a class="header-anchor" href="#_2-从新仓库引入新分支"><span>2. 从新仓库引入新分支</span></a></h2><p>先建立新仓库 <code>/path/to/unrelated</code>，有默认分支 <code>master</code></p><p>再回原仓库，</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /path/to/repo</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> fetch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /path/to/unrelated</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> master:unrelated-branch</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就有了 <code>unrelated-branch</code>，<code>/path/to/unrelated</code> 可以删除了</p><p>参考：<a href="https://stackoverflow.com/questions/1384325/in-git-is-there-a-simple-way-of-introducing-an-unrelated-branch-to-a-repository" target="_blank" rel="noopener noreferrer">In git, is there a simple way of introducing an unrelated branch to a repository? - Stack Overflow</a></p>`,9)]))}const p=t(r,[["render",n],["__file","create-a-new-branch-in-the-git-repository-that-is-completely-unrelated-to-other-commit-histories.html.vue"]]),c=JSON.parse('{"path":"/post/create-a-new-branch-in-the-git-repository-that-is-completely-unrelated-to-other-commit-histories.html","title":"git 仓库新建一个与其它提交历史完全无关的分支","lang":"zh-CN","frontmatter":{"title":"git 仓库新建一个与其它提交历史完全无关的分支","date":"2024-10-04T06:54:27.000Z","category":["学习"],"tag":["git","分支","提交"],"description":"1. 使用 --orphan 参考：git - How to push new branch without history - Stack Overflow 2. 从新仓库引入新分支 先建立新仓库 /path/to/unrelated，有默认分支 master 再回原仓库， 这样就有了 unrelated-branch，/path/to/unrela...","head":[["meta",{"property":"og:url","content":"https://leo01234.github.io/post/create-a-new-branch-in-the-git-repository-that-is-completely-unrelated-to-other-commit-histories.html"}],["meta",{"property":"og:site_name","content":"Leo01234"}],["meta",{"property":"og:title","content":"git 仓库新建一个与其它提交历史完全无关的分支"}],["meta",{"property":"og:description","content":"1. 使用 --orphan 参考：git - How to push new branch without history - Stack Overflow 2. 从新仓库引入新分支 先建立新仓库 /path/to/unrelated，有默认分支 master 再回原仓库， 这样就有了 unrelated-branch，/path/to/unrela..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-04T07:27:05.000Z"}],["meta",{"property":"article:tag","content":"git"}],["meta",{"property":"article:tag","content":"分支"}],["meta",{"property":"article:tag","content":"提交"}],["meta",{"property":"article:published_time","content":"2024-10-04T06:54:27.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-04T07:27:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"git 仓库新建一个与其它提交历史完全无关的分支\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-10-04T06:54:27.000Z\\",\\"dateModified\\":\\"2024-10-04T07:27:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Leo01234\\",\\"url\\":\\"https://leo01234.github.io\\",\\"email\\":\\"ijkhly@126.com\\"}]}"]]},"headers":[{"level":2,"title":"1. 使用 --orphan","slug":"_1-使用-orphan","link":"#_1-使用-orphan","children":[]},{"level":2,"title":"2. 从新仓库引入新分支","slug":"_2-从新仓库引入新分支","link":"#_2-从新仓库引入新分支","children":[]}],"git":{"createdTime":1728026825000,"updatedTime":1728026825000,"contributors":[{"name":"Leo01234","email":"40910694+Leo01234@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.79,"words":236},"filePathRelative":"post/create-a-new-branch-in-the-git-repository-that-is-completely-unrelated-to-other-commit-histories.md","localizedDate":"2024年10月4日","excerpt":"<h2>1. 使用 <code>--orphan</code></h2>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> checkout</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> --orphan</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> [branch_name]</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> commit</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -a</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{p as comp,c as data};