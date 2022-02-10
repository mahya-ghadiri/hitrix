"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5718],{7980:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-616bd6e3",path:"/guide/services/amazon_s3.html",title:"Amazon S3",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"guide/services/amazon_s3.md",git:{updatedTime:1634291321e3,contributors:[{name:"Anton",email:"a.shumansky@gmail.com",commits:1}]}}},118:(n,s,a)=>{a.r(s),a.d(s,{default:()=>p});const e=(0,a(6252).uE)('<h1 id="amazon-s3" tabindex="-1"><a class="header-anchor" href="#amazon-s3" aria-hidden="true">#</a> Amazon S3</h1><p>This service is used for storing files into amazon s3</p><p>Register the service into your <code>main.go</code> file:</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>registry<span class="token punctuation">.</span><span class="token function">ServiceProviderAmazonS3</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">uint64</span><span class="token punctuation">{</span><span class="token string">&quot;products&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 1 is the bucket ID for database counter</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>and you should register the entity <code>S3BucketCounterEntity</code> into the ORM Also, you should put your credentials and other configs in <code>config/hitrix.yml</code></p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">amazon_s3</span><span class="token punctuation">:</span>\n  <span class="token key atrule">endpoint</span><span class="token punctuation">:</span> <span class="token string">&quot;https://somestorage.com&quot;</span> <span class="token comment"># set to &quot;&quot; if you&#39;re using https://s3.amazonaws.com</span>\n  <span class="token key atrule">access_key_id</span><span class="token punctuation">:</span> ENV<span class="token punctuation">[</span>S3_ACCESS_KEY_ID<span class="token punctuation">]</span>\n  <span class="token key atrule">secret_access_key</span><span class="token punctuation">:</span> ENV<span class="token punctuation">[</span>S3_SECRET_ACCESS_KEY_ID<span class="token punctuation">]</span>\n  <span class="token key atrule">disable_ssl</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n  <span class="token key atrule">region</span><span class="token punctuation">:</span> us<span class="token punctuation">-</span>east<span class="token punctuation">-</span><span class="token number">1</span>\n  <span class="token key atrule">url_prefix</span><span class="token punctuation">:</span> prefix\n  <span class="token key atrule">domain</span><span class="token punctuation">:</span> domain.com\n  <span class="token key atrule">buckets</span><span class="token punctuation">:</span> <span class="token comment"># Register your buckets here for each app mode</span>\n    <span class="token key atrule">products</span><span class="token punctuation">:</span> <span class="token comment"># bucket name</span>\n      <span class="token key atrule">prod</span><span class="token punctuation">:</span> bucket<span class="token punctuation">-</span>name\n      <span class="token key atrule">local</span><span class="token punctuation">:</span> bucket<span class="token punctuation">-</span>name<span class="token punctuation">-</span>local\n  <span class="token key atrule">public_urls</span><span class="token punctuation">:</span> <span class="token comment"># Register your public urls for the GetObjectCachedURL method</span>\n    <span class="token key atrule">product</span><span class="token punctuation">:</span> <span class="token comment"># bucket name</span>\n      <span class="token key atrule">prod</span><span class="token punctuation">:</span> <span class="token string">&quot;https://somesite.com/{{.StorageKey}}/&quot;</span> <span class="token comment"># Available variables are: .Environment, .BucketName, .CounterID, and, .StorageKey</span>\n      <span class="token key atrule">local</span><span class="token punctuation">:</span> <span class="token string">&quot;http://127.0.0.1/{{.Environment}}/{{.BucketName}}/{{.StorageKey}}/{{.CounterID}}&quot;</span> <span class="token comment"># Will output &quot;http://127.0.0.1/local/product/1.jpeg/1&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>Access the service:</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>service<span class="token punctuation">.</span><span class="token function">DI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">AmazonS3</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',8),t={},p=(0,a(3744).Z)(t,[["render",function(n,s){return e}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,e]of s)n[a]=e;return n}}}]);