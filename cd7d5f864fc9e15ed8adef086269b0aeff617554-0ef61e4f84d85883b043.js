(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"0mN4":function(e,t,i){"use strict";i("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"4M6O":function(e,t,i){"use strict";i("RW0V"),i("rGqo"),i("yt8O"),i("Btvt"),i("XfO3"),i("T39b");var n=i("TqRt");t.__esModule=!0,t.insertScript=function(e,t,i){var n=window.document.createElement("script");return n.async=!0,n.src=e,n.id=t,i.appendChild(n),n},t.removeScript=function(e,t){var i=window.document.getElementById(e);i&&t.removeChild(i)},t.debounce=function(e,t,i){var n;return function(){var r=this,a=arguments,s=function(){n=null,i||e.apply(r,a)},o=i&&!n;window.clearTimeout(n),n=setTimeout(s,t),o&&e.apply(r,a)}},t.isReactElement=s,t.shallowComparison=function(e,t){var i,n=new Set(Object.keys(e).concat(Object.keys(t)));return 0!==(i=[]).concat.apply(i,(0,r.default)(n)).filter((function(i){return e[i]!==t[i]&&!s(e[i])})).length};var r=n(i("RIqP")),a=n(i("q1tI"));function s(e){return!!a.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return a.default.isValidElement(e)}))}},"6Gk8":function(e,t,i){"use strict";i("f3/d"),i("0mN4");var n=i("hxw3"),r=i("q1tI"),a=i.n(r),s=i("9eSz"),o=i.n(s),d=i("p3AD");t.a=function(){var e=n.data,t=e.site.siteMetadata.author;return a.a.createElement("div",{style:{display:"flex",marginBottom:Object(d.a)(2.5)}},a.a.createElement(o.a,{fixed:e.avatar.childImageSharp.fixed,alt:t.name,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),a.a.createElement("p",null,"Written by ",a.a.createElement("strong",null,t.name)," ",t.summary," ",a.a.createElement("a",{href:"https://sebastianhaeni.ch",rel:"noopener noreferrer",target:"_blank"},"You can find his social links on his personal website.")))}},"9eSz":function(e,t,i){"use strict";i("rGqo"),i("yt8O"),i("Btvt"),i("XfO3"),i("EK0E"),i("INYr"),i("0mN4");var n=i("TqRt");t.__esModule=!0,t.default=void 0;var r,a=n(i("PJYZ")),s=n(i("VbXa")),o=n(i("8OQS")),d=n(i("pVnL")),l=n(i("q1tI")),u=n(i("17x9")),c=function(e){var t=(0,d.default)({},e),i=t.resolutions,n=t.sizes,r=t.critical;return i&&(t.fixed=i,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,i=e.fixed;return g(t||i).src},g=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var i=e.findIndex((function(e){return void 0===e.media}));if(-1!==i)return e[i]}return e[0]},h=Object.create({}),m=function(e){var t=c(e),i=p(t);return h[i]||!1},A="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,y=b&&window.IntersectionObserver,v=new WeakMap;function w(e){return e.map((function(e){var t=e.src,i=e.srcSet,n=e.srcSetWebp,r=e.media,a=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},n&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:n,sizes:a}),l.default.createElement("source",{media:r,srcSet:i,sizes:a}))}))}function S(e){var t=[],i=[];return e.forEach((function(e){return(e.media?t:i).push(e)})),[].concat(t,i)}function E(e){return e.map((function(e){var t=e.src,i=e.media,n=e.tracedSVG;return l.default.createElement("source",{key:t,media:i,srcSet:n})}))}function I(e){return e.map((function(e){var t=e.src,i=e.media,n=e.base64;return l.default.createElement("source",{key:t,media:i,srcSet:n})}))}function x(e,t){var i=e.srcSet,n=e.srcSetWebp,r=e.media,a=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?n:i)+'" '+(a?'sizes="'+a+'" ':"")+"/>"}var C=function(e,t){var i=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return i&&(i.observe(e),v.set(e,t)),function(){i.unobserve(e),v.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',i=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",a=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?x(e,!0):"")+x(e)})).join("")+"<img "+l+s+o+i+n+t+a+r+d+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},k=l.default.forwardRef((function(e,t){var i=e.src,n=e.imageVariants,r=e.generateSources,a=e.spreadProps,s=e.ariaHidden,o=l.default.createElement(j,(0,d.default)({ref:t,src:i},a,{ariaHidden:s}));return n.length>1?l.default.createElement("picture",null,r(n),o):o})),j=l.default.forwardRef((function(e,t){var i=e.sizes,n=e.srcSet,r=e.src,a=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":p,sizes:i,srcSet:n,src:r},g,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))}));j.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var q=function(e){function t(t){var i;(i=e.call(this,t)||this).seenBefore=b&&m(t),i.isCritical="eager"===t.loading||t.critical,i.addNoScript=!(i.isCritical&&!t.fadeIn),i.useIOSupport=!A&&y&&!i.isCritical&&!i.seenBefore;var n=i.isCritical||b&&(A||!i.useIOSupport);return i.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!i.seenBefore&&t.fadeIn},i.imageRef=l.default.createRef(),i.placeholderRef=t.placeholderRef||l.default.createRef(),i.handleImageLoaded=i.handleImageLoaded.bind((0,a.default)(i)),i.handleRef=i.handleRef.bind((0,a.default)(i)),i}(0,s.default)(t,e);var i=t.prototype;return i.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},i.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},i.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=C(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},i.handleImageLoaded=function(){var e,t,i;e=this.props,t=c(e),i=p(t),h[i]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},i.render=function(){var e=c(this.props),t=e.title,i=e.alt,n=e.className,r=e.style,a=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,h=e.fluid,m=e.fixed,A=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,v=e.itemProp,S=e.loading,x=e.draggable,C=!1===this.state.fadeIn||this.state.imgLoaded,q=!0===this.state.fadeIn&&!this.state.imgCached,_=(0,d.default)({opacity:C?1:0,transition:q?"opacity "+b+"ms":"none"},o),O="boolean"==typeof A?"lightgray":A,D={transitionDelay:b+"ms"},B=(0,d.default)({opacity:this.state.imgLoaded?0:1},q&&D,o,f),Q={title:t,alt:this.state.isVisible?"":i,style:B,className:p,itemProp:v};if(h){var N=h,T=g(h);return l.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:T.maxWidth?T.maxWidth+"px":null,maxHeight:T.maxHeight?T.maxHeight+"px":null},a),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},l.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),O&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:O,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},q&&D)}),T.base64&&l.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:Q,imageVariants:N,generateSources:I}),T.tracedSVG&&l.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:Q,imageVariants:N,generateSources:E}),this.state.isVisible&&l.default.createElement("picture",null,w(N),l.default.createElement(j,{alt:i,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:_,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:S,draggable:x})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,d.default)({alt:i,title:t,loading:S},T,{imageVariants:N}))}}))}if(m){var L=m,M=g(m),V=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},a);return"inherit"===a.display&&delete V.display,l.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:V,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},O&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:O,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},q&&D)}),M.base64&&l.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:Q,imageVariants:L,generateSources:I}),M.tracedSVG&&l.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:Q,imageVariants:L,generateSources:E}),this.state.isVisible&&l.default.createElement("picture",null,w(L),l.default.createElement(j,{alt:i,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:_,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:S,draggable:x})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,d.default)({alt:i,title:t,loading:S},M,{imageVariants:L}))}}))}return null},t}(l.default.Component);q.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var _=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),O=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});q.propTypes={resolutions:_,sizes:O,fixed:u.default.oneOfType([_,u.default.arrayOf(_)]),fluid:u.default.oneOfType([O,u.default.arrayOf(O)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var D=q;t.default=D},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EK0E:function(e,t,i){"use strict";var n,r=i("dyZX"),a=i("CkkT")(0),s=i("KroJ"),o=i("Z6vF"),d=i("czNK"),l=i("ZD67"),u=i("0/R4"),c=i("s5qY"),f=i("s5qY"),p=!r.ActiveXObject&&"ActiveXObject"in r,g=o.getWeak,h=Object.isExtensible,m=l.ufstore,A=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},b={get:function(e){if(u(e)){var t=g(e);return!0===t?m(c(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return l.def(c(this,"WeakMap"),e,t)}},y=e.exports=i("4LiD")("WeakMap",A,b,l,!0,!0);f&&p&&(d((n=l.getConstructor(A,"WeakMap")).prototype,b),o.NEED=!0,a(["delete","has","get","set"],(function(e){var t=y.prototype,i=t[e];s(t,e,(function(t,r){if(u(t)&&!h(t)){this._f||(this._f=new n);var a=this._f[e](t,r);return"set"==e?this:a}return i.call(this,t,r)}))})))},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},INYr:function(e,t,i){"use strict";var n=i("XKFU"),r=i("CkkT")(6),a="findIndex",s=!0;a in[]&&Array(1)[a]((function(){s=!1})),n(n.P+n.F*s,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),i("nGyu")(a)},Ijbi:function(e,t,i){var n=i("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},OGtf:function(e,t,i){var n=i("XKFU"),r=i("eeVq"),a=i("vhPU"),s=/"/g,o=function(e,t,i,n){var r=String(a(e)),o="<"+t;return""!==i&&(o+=" "+i+'="'+String(n).replace(s,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var i={};i[e]=t(o),n(n.P+n.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",i)}},ORnI:function(e,t,i){"use strict";var n=i("TqRt");t.__esModule=!0,t.default=void 0;var r=n(i("VUT9"));t.Disqus=r.default;var a=n(i("qASQ"));t.CommentCount=a.default;var s=n(i("vAJ3"));t.CommentEmbed=s.default;var o=r.default;t.default=o},RIqP:function(e,t,i){var n=i("Ijbi"),r=i("EbDI"),a=i("ZhPi"),s=i("Bnag");e.exports=function(e){return n(e)||r(e)||a(e)||s()}},VUT9:function(e,t,i){"use strict";var n=i("TqRt");t.__esModule=!0,t.default=void 0;var r=n(i("pVnL")),a=n(i("8OQS")),s=n(i("VbXa")),o=n(i("q1tI")),d=n(i("17x9")),l=i("4M6O"),u=function(e){function t(t){var i;return(i=e.call(this,t)||this).shortname="blog-of-sebastian-hani",i}(0,s.default)(t,e);var i=t.prototype;return i.componentDidMount=function(){"undefined"!=typeof window&&this.shortname&&this.cleanInstance(),this.loadInstance()},i.shouldComponentUpdate=function(e){return this.props!==e&&(0,l.shallowComparison)(this.props,e)},i.componentDidUpdate=function(){this.loadInstance()},i.getDisqusConfig=function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,this.language=e.language}},i.loadInstance=function(){"undefined"!=typeof window&&window.DISQUS&&window.document.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.shortname,(0,l.insertScript)("https://"+this.shortname+".disqus.com/embed.js","disqus-embed-script",window.document.body))},i.cleanInstance=function(){(0,l.removeScript)("disqus-embed-script",window.document.body),window&&window.DISQUS&&window.DISQUS.reset();try{delete window.DISQUS}catch(t){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild)},i.render=function(){var e=this.props,t=(e.config,(0,a.default)(e,["config"]));return o.default.createElement("div",(0,r.default)({id:"disqus_thread"},t,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:76,columnNumber:7}}))},t}(o.default.Component);t.default=u,u.propTypes={config:d.default.shape({identifier:d.default.string,title:d.default.string,url:d.default.string,language:d.default.string,remoteAuthS3:d.default.string,apiKey:d.default.string})}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}},ZD67:function(e,t,i){"use strict";var n=i("3Lyj"),r=i("Z6vF").getWeak,a=i("y3w9"),s=i("0/R4"),o=i("9gX7"),d=i("SlkY"),l=i("CkkT"),u=i("aagx"),c=i("s5qY"),f=l(5),p=l(6),g=0,h=function(e){return e._l||(e._l=new m)},m=function(){this.a=[]},A=function(e,t){return f(e.a,(function(e){return e[0]===t}))};m.prototype={get:function(e){var t=A(this,e);if(t)return t[1]},has:function(e){return!!A(this,e)},set:function(e,t){var i=A(this,e);i?i[1]=t:this.a.push([e,t])},delete:function(e){var t=p(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,i,a){var l=e((function(e,n){o(e,l,t,"_i"),e._t=t,e._i=g++,e._l=void 0,null!=n&&d(n,i,e[a],e)}));return n(l.prototype,{delete:function(e){if(!s(e))return!1;var i=r(e);return!0===i?h(c(this,t)).delete(e):i&&u(i,this._i)&&delete i[this._i]},has:function(e){if(!s(e))return!1;var i=r(e);return!0===i?h(c(this,t)).has(e):i&&u(i,this._i)}}),l},def:function(e,t,i){var n=r(a(t),!0);return!0===n?h(e).set(t,i):n[e._i]=i,e},ufstore:h}},ZhPi:function(e,t,i){var n=i("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?n(e,t):void 0}}},"d+8V":function(e,t,i){"use strict";var n=i("q1tI"),r=i.n(n),a=i("N1om"),s=i.n(a),o=i("Wbzz"),d=function(e){return e.tags.map((function(e,t){return[t>0&&", ",r.a.createElement(o.Link,{key:s()(e),to:"/tags/"+s()(e)},e)]}))};d.defaultProps={tags:[]},t.a=d},hxw3:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAQCAwUG/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAbZ74prepXHmswe2E//EABsQAQACAwEBAAAAAAAAAAAAAAIBAwAREgQh/9oACAEBAAEFApj5JZXOLXMR1ZrHc03azPmc2U//xAAXEQEAAwAAAAAAAAAAAAAAAAAQATFB/9oACAEDAQE/AYow/8QAFhEAAwAAAAAAAAAAAAAAAAAAARAx/9oACAECAQE/ATUav//EAB4QAAEDBAMAAAAAAAAAAAAAAAEAAhEQEiExMlGR/9oACAEBAAY/AlzkdUygM+0uJ1pBzTBhBztr/8QAGxAAAwADAQEAAAAAAAAAAAAAAAERITFBYVH/2gAIAQEAAT8hljh6FBr1FsYlk3r1kCU7oYVcnhwoNqcI5V8P/9oADAMBAAIAAwAAABDPF8H/xAAWEQEBAQAAAAAAAAAAAAAAAAABEDH/2gAIAQMBAT8QIpYan//EABcRAAMBAAAAAAAAAAAAAAAAAAEQETH/2gAIAQIBAT8QMxFgv//EABwQAQACAwADAAAAAAAAAAAAAAEAESExQVFxsf/aAAgBAQABPxBXVZQaulauFstpyLTJqCoAqj3ZRAbmxJDPfkyRlI1jA9SOYS4XXPEyKpFFDTP/2Q==","width":50,"height":50,"src":"/blog/static/b4ad523f144d7d9048b92d580ba7b53d/99438/profile-pic.jpg","srcSet":"/blog/static/b4ad523f144d7d9048b92d580ba7b53d/99438/profile-pic.jpg 1x,\\n/blog/static/b4ad523f144d7d9048b92d580ba7b53d/aba1d/profile-pic.jpg 1.5x,\\n/blog/static/b4ad523f144d7d9048b92d580ba7b53d/b315d/profile-pic.jpg 2x"}}},"site":{"siteMetadata":{"author":{"name":"Sebastian Häni","summary":"who lives, studies and works in Zurich building useful things."}}}}}')},jFb6:function(e,t,i){(function(t){i("91GP"),e.exports={pathPrefix:"/blog",siteMetadata:{title:"Blog of Sebastian Häni",author:{name:"Sebastian Häni",summary:"who lives, studies and works in Zurich building useful things."},description:"A personal blog about things I am interested in.",siteUrl:"https://sebastianhaeni.github.com",social:{twitter:"sebastianhaeni"},googleSiteVerification:"8zORk751Im3yhCfNGm4aWV2E_DcmAWj_OdYKbXYrNsw"},plugins:[{resolve:"gatsby-source-filesystem",options:{path:t+"/content/blog",name:"blog"}},{resolve:"gatsby-source-filesystem",options:{path:t+"/content/assets",name:"assets"}},{resolve:"gatsby-transformer-remark",options:{plugins:[{resolve:"gatsby-remark-images",options:{maxWidth:590}},{resolve:"gatsby-remark-responsive-iframe",options:{wrapperStyle:"margin-bottom: 1.0725rem"}},"gatsby-remark-prismjs","gatsby-remark-copy-linked-files","gatsby-remark-smartypants","gatsby-remark-emoji-unicode"]}},"gatsby-transformer-sharp","gatsby-plugin-sharp",{resolve:"gatsby-plugin-google-analytics",options:{trackingId:"UA-39972934-3"}},{resolve:"gatsby-plugin-feed",options:{query:"\n          {\n            site {\n              siteMetadata {\n                title\n                description\n                siteUrl\n                site_url: siteUrl\n              }\n            }\n          }\n        ",feeds:[{serialize:function(e){var t=e.query,i=t.site;return t.allMarkdownRemark.edges.map((function(e){return Object.assign({},e.node.frontmatter,{description:e.node.excerpt,date:e.node.frontmatter.date,url:i.siteMetadata.siteUrl+e.node.fields.slug,guid:i.siteMetadata.siteUrl+e.node.fields.slug,custom_elements:[{"content:encoded":e.node.html}]})}))},query:"\n              {\n                allMarkdownRemark(\n                  sort: { order: DESC, fields: [frontmatter___date] },\n                ) {\n                  edges {\n                    node {\n                      excerpt\n                      html\n                      fields { slug }\n                      frontmatter {\n                        title\n                        date\n                      }\n                    }\n                  }\n                }\n              }\n            ",output:"/rss.xml",title:"Your Site's RSS Feed"}]}},{resolve:"gatsby-plugin-manifest",options:{name:"Sebastian Häni Blog",short_name:"Sebastian Häni",start_url:"/",background_color:"#ffffff",theme_color:"#663399",display:"minimal-ui",icon:"content/assets/profile-pic.jpg"}},"gatsby-plugin-react-helmet",{resolve:"gatsby-plugin-typography",options:{pathToConfigModule:"src/utils/typography"}},{resolve:"gatsby-plugin-disqus",options:{shortname:"blog-of-sebastian-hani"}}]}}).call(this,"/")},qASQ:function(e,t,i){"use strict";var n=i("TqRt");t.__esModule=!0,t.default=void 0;var r=n(i("pVnL")),a=n(i("8OQS")),s=n(i("VbXa")),o=n(i("q1tI")),d=n(i("17x9")),l=i("4M6O"),u=(0,l.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),c=function(e){function t(t){var i;return(i=e.call(this,t)||this).shortname="blog-of-sebastian-hani",i}(0,s.default)(t,e);var i=t.prototype;return i.componentDidMount=function(){this.loadInstance()},i.shouldComponentUpdate=function(e){return this.props!==e&&(0,l.shallowComparison)(this.props,e)},i.componentDidUpdate=function(){this.loadInstance()},i.loadInstance=function(){window.document.getElementById("dsq-count-scr")?u():(0,l.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},i.cleanInstance=function(){(0,l.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},i.render=function(){var e=this.props,t=e.config,i=e.placeholder,n=(0,a.default)(e,["config","placeholder"]);return o.default.createElement("span",(0,r.default)({className:"disqus-comment-count","data-disqus-identifier":t.identifier,"data-disqus-url":t.url},n,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:49,columnNumber:7}}),i)},t}(o.default.Component);t.default=c,c.defaultProps={placeholder:"..."},c.propTypes={config:d.default.shape({identifier:d.default.string,title:d.default.string,url:d.default.string}),placeholder:d.default.string}},vAJ3:function(e,t,i){"use strict";i("xfY5"),i("a1Th"),i("Btvt");var n=i("TqRt");t.__esModule=!0,t.default=void 0;var r=n(i("VbXa")),a=n(i("q1tI")),s=n(i("17x9")),o=function(e){function t(){return e.apply(this,arguments)||this}(0,r.default)(t,e);var i=t.prototype;return i.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},i.render=function(){return a.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentEmbed.jsx",lineNumber:17,columnNumber:13}})},t}(a.default.Component);t.default=o,o.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},o.propTypes={commentId:s.default.string.isRequired,width:s.default.number,height:s.default.number,showMedia:s.default.bool,showParentComment:s.default.bool}}}]);
//# sourceMappingURL=cd7d5f864fc9e15ed8adef086269b0aeff617554-0ef61e4f84d85883b043.js.map