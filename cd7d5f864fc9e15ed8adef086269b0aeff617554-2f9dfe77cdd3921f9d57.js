(self.webpackChunksebastianhaeni_blog=self.webpackChunksebastianhaeni_blog||[]).push([[84],{3204:function(e){"use strict";const t=/[\p{Lu}]/u,n=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,a=/([\p{Alpha}\p{N}_]|$)/u,o=/[_.\- ]+/,s=new RegExp("^"+o.source),i=new RegExp(o.source+a.source,"gu"),l=new RegExp("\\d+"+a.source,"gu"),u=(e,a)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(a={pascalCase:!1,preserveConsecutiveUppercase:!1,...a},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const o=!1===a.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(a.locale),u=!1===a.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(a.locale);if(1===e.length)return a.pascalCase?u(e):o(e);return e!==o(e)&&(e=((e,r,a)=>{let o=!1,s=!1,i=!1;for(let l=0;l<e.length;l++){const u=e[l];o&&t.test(u)?(e=e.slice(0,l)+"-"+e.slice(l),o=!1,i=s,s=!0,l++):s&&i&&n.test(u)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),i=s,s=!1,o=!0):(o=r(u)===u&&a(u)!==u,i=s,s=a(u)===u&&r(u)!==u)}return e})(e,o,u)),e=e.replace(s,""),e=a.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,o):o(e),a.pascalCase&&(e=u(e.charAt(0))+e.slice(1)),((e,t)=>(i.lastIndex=0,l.lastIndex=0,e.replace(i,((e,n)=>t(n))).replace(l,(e=>t(e)))))(e,u)};e.exports=u,e.exports.default=u},5928:function(e){e.exports={pathPrefix:"/blog",siteMetadata:{title:"Blog of Sebastian Häni",author:{name:"Sebastian Häni",summary:"who lives, studies and works in Zurich building useful things."},description:"A personal blog about things I am interested in.",siteUrl:"https://sebastianhaeni.github.com",social:{twitter:"sebastianhaeni"},googleSiteVerification:"8zORk751Im3yhCfNGm4aWV2E_DcmAWj_OdYKbXYrNsw"},plugins:[{resolve:"gatsby-source-filesystem",options:{path:"//content/blog",name:"blog"}},{resolve:"gatsby-source-filesystem",options:{path:"//content/assets",name:"assets"}},{resolve:"gatsby-transformer-remark",options:{plugins:[{resolve:"gatsby-remark-images",options:{maxWidth:590}},{resolve:"gatsby-remark-responsive-iframe",options:{wrapperStyle:"margin-bottom: 1.0725rem"}},"gatsby-remark-prismjs","gatsby-remark-copy-linked-files","gatsby-remark-smartypants","gatsby-remark-emoji-unicode","gatsby-remark-autolink-headers"]}},"gatsby-transformer-sharp","gatsby-plugin-image","gatsby-plugin-sharp",{resolve:"gatsby-plugin-google-gtag",options:{trackingIds:["G-GPRW5X1NBT"]}},{resolve:"gatsby-plugin-feed",options:{query:"\n          {\n            site {\n              siteMetadata {\n                title\n                description\n                siteUrl\n                site_url: siteUrl\n              }\n            }\n          }\n        ",feeds:[{serialize:e=>{let{query:{site:t,allMarkdownRemark:n}}=e;return n.edges.map((e=>Object.assign({},e.node.frontmatter,{description:e.node.excerpt,date:e.node.frontmatter.date,url:t.siteMetadata.siteUrl+e.node.fields.slug,guid:t.siteMetadata.siteUrl+e.node.fields.slug,custom_elements:[{"content:encoded":e.node.html}]})))},query:"{\n  allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {\n    edges {\n      node {\n        excerpt\n        html\n        fields {\n          slug\n        }\n        frontmatter {\n          title\n          date\n        }\n      }\n    }\n  }\n}",output:"/rss.xml",title:"Blog of Sebastian Häni"}]}},{resolve:"gatsby-plugin-manifest",options:{name:"Sebastian Häni Blog",short_name:"Sebastian Häni",start_url:"/",background_color:"#ffffff",theme_color:"#663399",display:"minimal-ui",icon:"content/assets/profile-pic.jpg"}},{resolve:"gatsby-plugin-typography",options:{pathToConfigModule:"src/utils/typography"}},{resolve:"gatsby-plugin-disqus",options:{shortname:"blog-of-sebastian-hani"}}]}},1254:function(e,t,n){"use strict";var r=n(4836);t.__esModule=!0,t.default=void 0;var a=r(n(434)),o=r(n(3212)),s=r(n(7867)),i=r(n(7294)),l=r(n(5697)),u=n(989),d=(0,u.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="blog-of-sebastian-hani",n}(0,s.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,u.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?d():(0,u.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,u.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var e=this.props,t=e.config,n=e.className,r=e.placeholder,s=(0,o.default)(e,["config","className","placeholder"]),l="disqus-comment-count"+(n?" "+n:"");return i.default.createElement("span",(0,a.default)({className:l,"data-disqus-identifier":t.identifier,"data-disqus-url":t.url},s),r)},t}(i.default.Component);t.default=c,c.defaultProps={placeholder:"..."},c.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string}),placeholder:l.default.string,className:l.default.string}},4294:function(e,t,n){"use strict";var r=n(4836);t.__esModule=!0,t.default=void 0;var a=r(n(434)),o=r(n(3212)),s=r(n(7867)),i=r(n(7294)),l=r(n(5697)),u=function(e){function t(){return e.apply(this,arguments)||this}(0,s.default)(t,e);var n=t.prototype;return n.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},n.render=function(){var e=this.props,t=(e.commentId,e.showMedia,e.showParentComment,(0,o.default)(e,["commentId","showMedia","showParentComment"]));return i.default.createElement("iframe",(0,a.default)({src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",title:"embedded-comment"},t))},t}(i.default.Component);t.default=u,u.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},u.propTypes={commentId:l.default.oneOfType([l.default.number,l.default.string]).isRequired,width:l.default.number,height:l.default.number,showMedia:l.default.bool,showParentComment:l.default.bool}},2605:function(e,t,n){"use strict";var r=n(4836);t.__esModule=!0,t.default=void 0;var a=r(n(434)),o=r(n(3212)),s=r(n(7867)),i=r(n(7294)),l=r(n(5697)),u=n(989),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="blog-of-sebastian-hani",n.embedUrl="https://"+n.shortname+".disqus.com/embed.js",n}(0,s.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,u.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.getDisqusConfig=function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,this.language=e.language}},n.loadInstance=function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById("dsq-embed-scr")?this.reloadInstance():(0,u.insertScript)(this.embedUrl,"dsq-embed-scr",window.document.body))},n.reloadInstance=function(){window&&window.DISQUS&&window.DISQUS.reset({reload:!0})},n.cleanInstance=function(){(0,u.removeScript)("dsq-embed-scr",window.document.body);try{delete window.DISQUS}catch(r){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);var t=window.document.querySelector('[id^="dsq-app"]');if(t){var n=window.document.getElementById(t.id);n.parentNode.removeChild(n)}},n.render=function(){var e=this.props,t=(e.config,(0,o.default)(e,["config"]));return i.default.createElement("div",(0,a.default)({id:"disqus_thread"},t))},t}(i.default.Component);t.default=d,d.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string,language:l.default.string,remoteAuthS3:l.default.string,apiKey:l.default.string}),className:l.default.string}},8200:function(e,t,n){"use strict";var r=n(4836);var a=r(n(2605));t.h$=a.default;var o=r(n(1254));t.dS=o.default,r(n(4294)).default,a.default},989:function(e,t,n){"use strict";var r=n(4836);t.__esModule=!0,t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r;return function(){for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];var i=this,l=n&&!r;window.clearTimeout(r),r=setTimeout((function(){r=null,n||e.apply(i,o)}),t),l&&e.apply(i,o)}},t.isReactElement=s,t.shallowComparison=function e(t,n){var r,o=new Set(Object.keys(t).concat(Object.keys(n))),i=(r=[]).concat.apply(r,(0,a.default)(o)).filter((function(r){if("object"==typeof t[r]){if(e(t[r],n[r]))return!0}else if(t[r]!==n[r]&&!s(t[r]))return!0;return!1}));return 0!==i.length};var a=r(n(861)),o=r(n(7294));function s(e){return!!o.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return o.default.isValidElement(e)}))}},8032:function(e,t,n){"use strict";n.d(t,{L:function(){return g},M:function(){return v},P:function(){return x},S:function(){return P},_:function(){return i},a:function(){return s},b:function(){return d},g:function(){return c},h:function(){return l}});var r=n(7294),a=(n(3204),n(5697)),o=n.n(a);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(a[n]=e[n]);return a}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function u(e,t,n){const r={};let a="gatsby-image-wrapper";return"fixed"===n?(r.width=e,r.height=t):"constrained"===n&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,n,r,a){return void 0===a&&(a={}),s({},n,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},a,{opacity:t?1:0})})}function c(e,t,n,r,a,o,i,l){const u={};o&&(u.backgroundColor=o,"fixed"===n?(u.width=r,u.height=a,u.backgroundColor=o,u.position="relative"):("constrained"===n||"fullWidth"===n)&&(u.position="absolute",u.top=0,u.left=0,u.bottom=0,u.right=0)),i&&(u.objectFit=i),l&&(u.objectPosition=l);const d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},u)});return d}const p=["children"],f=function(e){let{layout:t,width:n,height:a}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/n*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:n,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+a+"'%20width='"+n+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,n=i(e,p);return r.createElement(r.Fragment,null,r.createElement(f,s({},n)),t,null)},m=["src","srcSet","loading","alt","shouldLoad"],A=["fallback","sources","shouldLoad"],h=function(e){let{src:t,srcSet:n,loading:a,alt:o="",shouldLoad:l}=e,u=i(e,m);return r.createElement("img",s({},u,{decoding:"async",loading:a,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?n:void 0,"data-srcset":l?void 0:n,alt:o}))},b=function(e){let{fallback:t,sources:n=[],shouldLoad:a=!0}=e,o=i(e,A);const l=o.sizes||(null==t?void 0:t.sizes),u=r.createElement(h,s({},o,t,{sizes:l,shouldLoad:a}));return n.length?r.createElement("picture",null,n.map((e=>{let{media:t,srcSet:n,type:o}=e;return r.createElement("source",{key:t+"-"+o+"-"+n,type:o,media:t,srcSet:a?n:void 0,"data-srcset":a?void 0:n,sizes:l})})),u):u};var y;h.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},b.displayName="Picture",b.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};const w=["fallback"],x=function(e){let{fallback:t}=e,n=i(e,w);return t?r.createElement(b,s({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},n))};x.displayName="Placeholder",x.propTypes={fallback:a.string,sources:null==(y=b.propTypes)?void 0:y.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};const v=function(e){return r.createElement(r.Fragment,null,r.createElement(b,s({},e)),r.createElement("noscript",null,r.createElement(b,s({},e,{shouldLoad:!0}))))};v.displayName="MainImage",v.propTypes=b.propTypes;const E=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],C=e=>e.replace(/\n/g,""),I=function(e,t,n){for(var r=arguments.length,a=new Array(r>3?r-3:0),s=3;s<r;s++)a[s-3]=arguments[s];return e.alt||""===e.alt?o().string.apply(o(),[e,t,n].concat(a)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},j={image:o().object.isRequired,alt:I},k=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],N=["style","className"],_=new Set;let B,M;const D=function(e){let{as:t="div",image:a,style:o,backgroundColor:d,className:c,class:p,onStartLoad:f,onLoad:g,onError:m}=e,A=i(e,k);const{width:h,height:b,layout:y}=a,w=u(h,b,y),{style:x,className:v}=w,E=i(w,N),S=(0,r.useRef)(),C=(0,r.useMemo)((()=>JSON.stringify(a.images)),[a.images]);p&&(c=p);const I=function(e,t,n){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+n+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(y,h,b);return(0,r.useEffect)((()=>{B||(B=n.e(731).then(n.bind(n,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:n}=e;return M=t,{renderImageToString:t,swapPlaceholderImage:n}})));const e=S.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==f||f({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==f||f({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void _.add(C);if(M&&_.has(C))return;let t,r;return B.then((e=>{let{renderImageToString:n,swapPlaceholderImage:i}=e;S.current&&(S.current.innerHTML=n(s({isLoading:!0,isLoaded:_.has(C),image:a},A)),_.has(C)||(t=requestAnimationFrame((()=>{S.current&&(r=i(S.current,C,_,o,f,g,m))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[a]),(0,r.useLayoutEffect)((()=>{_.has(C)&&M&&(S.current.innerHTML=M(s({isLoading:_.has(C),isLoaded:_.has(C),image:a},A)),null==f||f({wasCached:!0}),null==g||g({wasCached:!0}))}),[a]),(0,r.createElement)(t,s({},E,{style:s({},x,o,{backgroundColor:d}),className:v+(c?" "+c:""),ref:S,dangerouslySetInnerHTML:{__html:I},suppressHydrationWarning:!0}))},O=(0,r.memo)((function(e){return e.image?(0,r.createElement)(D,e):null}));O.propTypes=j,O.displayName="GatsbyImage";const T=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function R(e){return function(t){let{src:n,__imageData:a,__error:o}=t,l=i(t,T);return o&&console.warn(o),a?r.createElement(e,s({image:a},l)):(console.warn("Image not loaded",n),null)}}const Q=R((function(e){let{as:t="div",className:n,class:a,style:o,image:l,loading:p="lazy",imgClassName:f,imgStyle:m,backgroundColor:A,objectFit:h,objectPosition:b}=e,y=i(e,E);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;a&&(n=a),m=s({objectFit:h,objectPosition:b,backgroundColor:A},m);const{width:w,height:I,layout:j,images:k,placeholder:N,backgroundColor:_}=l,B=u(w,I,j),{style:M,className:D}=B,O=i(B,S),T={fallback:void 0,sources:[]};return k.fallback&&(T.fallback=s({},k.fallback,{srcSet:k.fallback.srcSet?C(k.fallback.srcSet):void 0})),k.sources&&(T.sources=k.sources.map((e=>s({},e,{srcSet:C(e.srcSet)})))),r.createElement(t,s({},O,{style:s({},M,o,{backgroundColor:A}),className:D+(n?" "+n:"")}),r.createElement(g,{layout:j,width:w,height:I},r.createElement(x,s({},c(N,!1,j,w,I,_,h,b))),r.createElement(v,s({"data-gatsby-image-ssr":"",className:f},y,d("eager"===p,!1,T,p,m)))))})),L=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},q=new Set(["fixed","fullWidth","constrained"]),U={src:o().string.isRequired,alt:I,width:L,height:L,sizes:o().string,layout:e=>{if(void 0!==e.layout&&!q.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};Q.displayName="StaticImage",Q.propTypes=U;const P=R(O);P.displayName="StaticImage",P.propTypes=U},8771:function(e,t,n){"use strict";var r=n(7294),a=n(1883),o=n(8032),s=n(9175);t.Z=()=>{const e=(0,a.useStaticQuery)("3274528899"),{author:t}=e.site.siteMetadata;return r.createElement("div",{style:{display:"flex",marginBottom:(0,s.qZ)(2.5)}},r.createElement(o.S,{src:"../../content/assets/profile-pic.jpg",alt:t.name,placeholder:"blurred",layout:"fixed",width:50,height:50,style:{marginRight:(0,s.qZ)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"},__imageData:n(84)}),r.createElement("p",null,"Written by ",r.createElement("strong",null,t.name)," ",t.summary," ",r.createElement("a",{href:"https://sebastianhaeni.ch",rel:"noopener noreferrer",target:"_blank"},"You can find his social links on his personal website.")))}},5390:function(e,t,n){"use strict";var r=n(7294),a=n(1804),o=n.n(a),s=n(1883);const i=e=>{let{tags:t}=e;return t.map(((e,t)=>[t>0&&", ",r.createElement(s.Link,{key:o()(e),to:"/tags/"+o()(e)},e)]))};i.defaultProps={tags:[]},t.Z=i},9029:function(e){var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(t)||[]}},8674:function(e){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},5393:function(e,t,n){var r=n(2663),a=n(3816),o=n(8748),s=RegExp("['’]","g");e.exports=function(e){return function(t){return r(o(a(t).replace(s,"")),e,"")}}},9389:function(e,t,n){var r=n(8674)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=r},3157:function(e){var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return t.test(e)}},2757:function(e){var t="\\ud800-\\udfff",n="\\u2700-\\u27bf",r="a-z\\xdf-\\xf6\\xf8-\\xff",a="A-Z\\xc0-\\xd6\\xd8-\\xde",o="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",s="["+o+"]",i="\\d+",l="["+n+"]",u="["+r+"]",d="[^"+t+o+i+n+r+a+"]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",p="[\\ud800-\\udbff][\\udc00-\\udfff]",f="["+a+"]",g="(?:"+u+"|"+d+")",m="(?:"+f+"|"+d+")",A="(?:['’](?:d|ll|m|re|s|t|ve))?",h="(?:['’](?:D|LL|M|RE|S|T|VE))?",b="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",y="[\\ufe0e\\ufe0f]?",w=y+b+("(?:\\u200d(?:"+["[^"+t+"]",c,p].join("|")+")"+y+b+")*"),x="(?:"+[l,c,p].join("|")+")"+w,v=RegExp([f+"?"+u+"+"+A+"(?="+[s,f,"$"].join("|")+")",m+"+"+h+"(?="+[s,f+g,"$"].join("|")+")",f+"?"+g+"+"+A,f+"+"+h,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",i,x].join("|"),"g");e.exports=function(e){return e.match(v)||[]}},3816:function(e,t,n){var r=n(9389),a=n(9833),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,s=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=a(e))&&e.replace(o,r).replace(s,"")}},1804:function(e,t,n){var r=n(5393)((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=r},8748:function(e,t,n){var r=n(9029),a=n(3157),o=n(9833),s=n(2757);e.exports=function(e,t,n){return e=o(e),void 0===(t=n?void 0:t)?a(e)?s(e):r(e):e.match(t)||[]}},3897:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.__esModule=!0,e.exports.default=e.exports},3405:function(e,t,n){var r=n(3897);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.__esModule=!0,e.exports.default=e.exports},434:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},9498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},2281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},3212:function(e){e.exports=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,t,n){var r=n(3405),a=n(9498),o=n(6116),s=n(2281);e.exports=function(e){return r(e)||a(e)||o(e)||s()},e.exports.__esModule=!0,e.exports.default=e.exports},6116:function(e,t,n){var r=n(3897);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},84:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQDBQb/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABtnujmt1K48zoD2wn/8QAGxAAAgIDAQAAAAAAAAAAAAAAAQIDEQAEEiH/2gAIAQEAAQUCI8Kurc41UB1JWPK7O8rg6zmSH//EABcRAQADAAAAAAAAAAAAAAAAABABMUH/2gAIAQMBAT8BijD/xAAWEQADAAAAAAAAAAAAAAAAAAABEDH/2gAIAQIBAT8BNRq//8QAHhAAAQQBBQAAAAAAAAAAAAAAAQACESEQEjEyUZH/2gAIAQEABj8CXOR1i0BfuNRNhBzTBhBzt1//xAAbEAACAwEBAQAAAAAAAAAAAAAAAREhMWFBcf/aAAgBAQABPyGKtPJFBq1paMRXW86REobIYXWfDgx66VEOHwf/2gAMAwEAAgADAAAAEP8AGMH/xAAXEQEBAQEAAAAAAAAAAAAAAAABEBEx/9oACAEDAQE/ECaWHU//xAAXEQEBAQEAAAAAAAAAAAAAAAABEBEx/9oACAECAQE/EG4CcJ//xAAcEAEAAwACAwAAAAAAAAAAAAABABEhMUFRcbH/2gAIAQEAAT8QV1WIKXVtXMXgHRZgXxK8AWj2jcgvcF7EN7+TScqUVw9CXqAOI74mj6oooaZ//9k="},"images":{"fallback":{"src":"/blog/static/b4ad523f144d7d9048b92d580ba7b53d/6ac16/profile-pic.jpg","srcSet":"/blog/static/b4ad523f144d7d9048b92d580ba7b53d/6ac16/profile-pic.jpg 50w,\\n/blog/static/b4ad523f144d7d9048b92d580ba7b53d/e07e1/profile-pic.jpg 100w","sizes":"50px"},"sources":[{"srcSet":"/blog/static/b4ad523f144d7d9048b92d580ba7b53d/dbc4a/profile-pic.webp 50w,\\n/blog/static/b4ad523f144d7d9048b92d580ba7b53d/d8057/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=cd7d5f864fc9e15ed8adef086269b0aeff617554-2f9dfe77cdd3921f9d57.js.map