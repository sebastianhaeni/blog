(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"0mN4":function(e,t,i){"use strict";i("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"1akD":function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAQCAwUG/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAbZ74prepXHmswe2E//EABsQAQACAwEBAAAAAAAAAAAAAAIBAwAREgQh/9oACAEBAAEFApj5JZXOLXMR1ZrHc03azPmc2U//xAAXEQEAAwAAAAAAAAAAAAAAAAAQATFB/9oACAEDAQE/AYow/8QAFhEAAwAAAAAAAAAAAAAAAAAAARAx/9oACAECAQE/ATUav//EAB4QAAEDBAMAAAAAAAAAAAAAAAEAAhEQEiExMlGR/9oACAEBAAY/AlzkdUygM+0uJ1pBzTBhBztr/8QAGxAAAwADAQEAAAAAAAAAAAAAAAERITFBYVH/2gAIAQEAAT8hljh6FBr1FsYlk3r1kCU7oYVcnhwoNqcI5V8P/9oADAMBAAIAAwAAABDPF8H/xAAWEQEBAQAAAAAAAAAAAAAAAAABEDH/2gAIAQMBAT8QIpYan//EABcRAAMBAAAAAAAAAAAAAAAAAAEQETH/2gAIAQIBAT8QMxFgv//EABwQAQACAwADAAAAAAAAAAAAAAEAESExQVFxsf/aAAgBAQABPxBXVZQaulauFstpyLTJqCoAqj3ZRAbmxJDPfkyRlI1jA9SOYS4XXPEyKpFFDTP/2Q==","width":50,"height":50,"src":"/blog/static/b4ad523f144d7d9048b92d580ba7b53d/99438/profile-pic.jpg","srcSet":"/blog/static/b4ad523f144d7d9048b92d580ba7b53d/99438/profile-pic.jpg 1x,\\n/blog/static/b4ad523f144d7d9048b92d580ba7b53d/aba1d/profile-pic.jpg 1.5x,\\n/blog/static/b4ad523f144d7d9048b92d580ba7b53d/b315d/profile-pic.jpg 2x"}}},"site":{"siteMetadata":{"author":{"name":"Sebastian Häni","summary":"who lives, studies and works Zurich building useful things."}}}}}')},"4M6O":function(e,t,i){"use strict";i("rE2o"),i("ioFf"),i("RW0V"),i("rGqo"),i("yt8O"),i("Btvt"),i("XfO3"),i("T39b");var a=i("TqRt");t.__esModule=!0,t.insertScript=function(e,t,i){var a=window.document.createElement("script");return a.async=!0,a.src=e,a.id=t,i.appendChild(a),a},t.removeScript=function(e,t){var i=window.document.getElementById(e);i&&t.removeChild(i)},t.debounce=function(e,t,i){var a;return function(){var n=this,r=arguments,s=function(){a=null,i||e.apply(n,r)},o=i&&!a;window.clearTimeout(a),a=setTimeout(s,t),o&&e.apply(n,r)}},t.isReactElement=r,t.shallowComparison=function(e,t){var i=new Set(Object.keys(e),Object.keys(t)),a=Array.isArray(i),n=0;for(i=a?i:i[Symbol.iterator]();;){var s;if(a){if(n>=i.length)break;s=i[n++]}else{if((n=i.next()).done)break;s=n.value}var o=s;if(e[o]!==t[o]&&!r(e[o]))return!0}return!1};var n=a(i("q1tI"));function r(e){return!!n.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return n.default.isValidElement(e)}))}},"6Gk8":function(e,t,i){"use strict";i("f3/d"),i("0mN4");var a=i("1akD"),n=i("q1tI"),r=i.n(n),s=i("9eSz"),o=i.n(s),d=i("p3AD");t.a=function(){var e=a.data,t=e.site.siteMetadata.author;return r.a.createElement("div",{style:{display:"flex",marginBottom:Object(d.a)(2.5)}},r.a.createElement(o.a,{fixed:e.avatar.childImageSharp.fixed,alt:t.name,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),r.a.createElement("p",null,"Written by ",r.a.createElement("strong",null,t.name)," ",t.summary," ",r.a.createElement("a",{href:"https://sebastianhaeni.ch",rel:"noopener noreferrer",target:"_blank"},"You can find his social links on his personal website.")))}},"9eSz":function(e,t,i){"use strict";i("rGqo"),i("yt8O"),i("Btvt"),i("XfO3"),i("EK0E"),i("INYr"),i("0mN4");var a=i("TqRt");t.__esModule=!0,t.default=void 0;var n,r=a(i("PJYZ")),s=a(i("VbXa")),o=a(i("8OQS")),d=a(i("pVnL")),l=a(i("q1tI")),u=a(i("17x9")),c=function(e){var t=(0,d.default)({},e),i=t.resolutions,a=t.sizes,n=t.critical;return i&&(t.fixed=i,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,i=e.fixed;return g(t||i).src},g=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var i=e.findIndex((function(e){return void 0===e.media}));if(-1!==i)return e[i]}return e[0]},A=Object.create({}),h=function(e){var t=c(e),i=p(t);return A[i]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,y=b&&window.IntersectionObserver,v=new WeakMap;function w(e){return e.map((function(e){var t=e.src,i=e.srcSet,a=e.srcSetWebp,n=e.media,r=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},a&&l.default.createElement("source",{type:"image/webp",media:n,srcSet:a,sizes:r}),l.default.createElement("source",{media:n,srcSet:i,sizes:r}))}))}function S(e){var t=[],i=[];return e.forEach((function(e){return(e.media?t:i).push(e)})),[].concat(t,i)}function E(e){return e.map((function(e){var t=e.src,i=e.media,a=e.tracedSVG;return l.default.createElement("source",{key:t,media:i,srcSet:a})}))}function I(e){return e.map((function(e){var t=e.src,i=e.media,a=e.base64;return l.default.createElement("source",{key:t,media:i,srcSet:a})}))}function k(e,t){var i=e.srcSet,a=e.srcSetWebp,n=e.media,r=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?a:i)+'" '+(r?'sizes="'+r+'" ':"")+"/>"}var R=function(e,t){var i=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return i&&(i.observe(e),v.set(e,t)),function(){i.unobserve(e),v.delete(e)}},j=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',i=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?k(e,!0):"")+k(e)})).join("")+"<img "+l+s+o+i+a+t+r+n+d+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},C=l.default.forwardRef((function(e,t){var i=e.src,a=e.imageVariants,n=e.generateSources,r=e.spreadProps,s=e.ariaHidden,o=l.default.createElement(x,(0,d.default)({ref:t,src:i},r,{ariaHidden:s}));return a.length>1?l.default.createElement("picture",null,n(a),o):o})),x=l.default.forwardRef((function(e,t){var i=e.sizes,a=e.srcSet,n=e.src,r=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":p,sizes:i,srcSet:a,src:n},g,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))}));x.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var q=function(e){function t(t){var i;(i=e.call(this,t)||this).seenBefore=b&&h(t),i.isCritical="eager"===t.loading||t.critical,i.addNoScript=!(i.isCritical&&!t.fadeIn),i.useIOSupport=!m&&y&&!i.isCritical&&!i.seenBefore;var a=i.isCritical||b&&(m||!i.useIOSupport);return i.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!i.seenBefore&&t.fadeIn},i.imageRef=l.default.createRef(),i.placeholderRef=t.placeholderRef||l.default.createRef(),i.handleImageLoaded=i.handleImageLoaded.bind((0,r.default)(i)),i.handleRef=i.handleRef.bind((0,r.default)(i)),i}(0,s.default)(t,e);var i=t.prototype;return i.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},i.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},i.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},i.handleImageLoaded=function(){var e,t,i;e=this.props,t=c(e),i=p(t),A[i]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},i.render=function(){var e=c(this.props),t=e.title,i=e.alt,a=e.className,n=e.style,r=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,A=e.fluid,h=e.fixed,m=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,v=e.itemProp,S=e.loading,k=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,q=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,d.default)({opacity:R?1:0,transition:q?"opacity "+b+"ms":"none"},o),Q="boolean"==typeof m?"lightgray":m,_={transitionDelay:b+"ms"},B=(0,d.default)({opacity:this.state.imgLoaded?0:1},q&&_,{},o,{},f),D={title:t,alt:this.state.isVisible?"":i,style:B,className:p,itemProp:v};if(A){var L=A,T=g(A);return l.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},l.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),Q&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:Q,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},q&&_)}),T.base64&&l.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:D,imageVariants:L,generateSources:I}),T.tracedSVG&&l.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:D,imageVariants:L,generateSources:E}),this.state.isVisible&&l.default.createElement("picture",null,w(L),l.default.createElement(x,{alt:i,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:S,draggable:k})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,d.default)({alt:i,title:t,loading:S},T,{imageVariants:L}))}}))}if(h){var N=h,M=g(h),V=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},r);return"inherit"===r.display&&delete V.display,l.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:V,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},Q&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:Q,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},q&&_)}),M.base64&&l.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:D,imageVariants:N,generateSources:I}),M.tracedSVG&&l.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:D,imageVariants:N,generateSources:E}),this.state.isVisible&&l.default.createElement("picture",null,w(N),l.default.createElement(x,{alt:i,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:S,draggable:k})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,d.default)({alt:i,title:t,loading:S},M,{imageVariants:N}))}}))}return null},t}(l.default.Component);q.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),Q=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});q.propTypes={resolutions:O,sizes:Q,fixed:u.default.oneOfType([O,u.default.arrayOf(O)]),fluid:u.default.oneOfType([Q,u.default.arrayOf(Q)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var _=q;t.default=_},EK0E:function(e,t,i){"use strict";var a,n=i("dyZX"),r=i("CkkT")(0),s=i("KroJ"),o=i("Z6vF"),d=i("czNK"),l=i("ZD67"),u=i("0/R4"),c=i("s5qY"),f=i("s5qY"),p=!n.ActiveXObject&&"ActiveXObject"in n,g=o.getWeak,A=Object.isExtensible,h=l.ufstore,m=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},b={get:function(e){if(u(e)){var t=g(e);return!0===t?h(c(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return l.def(c(this,"WeakMap"),e,t)}},y=e.exports=i("4LiD")("WeakMap",m,b,l,!0,!0);f&&p&&(d((a=l.getConstructor(m,"WeakMap")).prototype,b),o.NEED=!0,r(["delete","has","get","set"],(function(e){var t=y.prototype,i=t[e];s(t,e,(function(t,n){if(u(t)&&!A(t)){this._f||(this._f=new a);var r=this._f[e](t,n);return"set"==e?this:r}return i.call(this,t,n)}))})))},INYr:function(e,t,i){"use strict";var a=i("XKFU"),n=i("CkkT")(6),r="findIndex",s=!0;r in[]&&Array(1)[r]((function(){s=!1})),a(a.P+a.F*s,"Array",{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),i("nGyu")(r)},OGtf:function(e,t,i){var a=i("XKFU"),n=i("eeVq"),r=i("vhPU"),s=/"/g,o=function(e,t,i,a){var n=String(r(e)),o="<"+t;return""!==i&&(o+=" "+i+'="'+String(a).replace(s,"&quot;")+'"'),o+">"+n+"</"+t+">"};e.exports=function(e,t){var i={};i[e]=t(o),a(a.P+a.F*n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",i)}},ORnI:function(e,t,i){"use strict";var a=i("TqRt");t.__esModule=!0,t.default=void 0;var n=a(i("VUT9"));t.Disqus=n.default;var r=a(i("qASQ"));t.CommentCount=r.default;var s=n.default;t.default=s},VUT9:function(e,t,i){"use strict";var a=i("TqRt");t.__esModule=!0,t.default=void 0;var n=a(i("pVnL")),r=a(i("8OQS")),s=a(i("VbXa")),o=a(i("q1tI")),d=a(i("17x9")),l=i("4M6O"),u=function(e){function t(t){var i;return(i=e.call(this,t)||this).shortname="blog-of-sebastian-hani",t.config?i.config=t.config:i.config={identifier:t.identifier,url:t.url,title:t.title},i}(0,s.default)(t,e);var i=t.prototype;return i.componentDidMount=function(){"undefined"!=typeof window&&window.document&&this.shortname&&this.cleanInstance(),this.loadInstance()},i.shouldComponentUpdate=function(e){return this.props!==e&&(0,l.shallowComparison)(this.props,e)},i.componentDidUpdate=function(){this.loadInstance()},i.loadInstance=function(){if("undefined"!=typeof window&&window.document&&this.shortname){var e=this.config;window.disqus_config=function(){this.page.identifier=e.identifier,this.page.title=e.title,this.page.url=e.url},(0,l.insertScript)("https://"+this.shortname+".disqus.com/embed.js","disqus-embed-script",window.document.body)}},i.cleanInstance=function(){(0,l.removeScript)("disqus-embed-script",window.document.body),window&&window.DISQUS&&window.DISQUS.reset();try{delete window.DISQUS}catch(t){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild)},i.render=function(){var e=this.props,t=(e.config,(0,r.default)(e,["config"]));return o.default.createElement("div",(0,n.default)({id:"disqus_thread"},t,{__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:73},__self:this}))},t}(o.default.Component);t.default=u,u.propTypes={config:d.default.shape({identifier:d.default.string,title:d.default.string,url:d.default.string}),identifier:d.default.string,title:d.default.string,url:d.default.string}},ZD67:function(e,t,i){"use strict";var a=i("3Lyj"),n=i("Z6vF").getWeak,r=i("y3w9"),s=i("0/R4"),o=i("9gX7"),d=i("SlkY"),l=i("CkkT"),u=i("aagx"),c=i("s5qY"),f=l(5),p=l(6),g=0,A=function(e){return e._l||(e._l=new h)},h=function(){this.a=[]},m=function(e,t){return f(e.a,(function(e){return e[0]===t}))};h.prototype={get:function(e){var t=m(this,e);if(t)return t[1]},has:function(e){return!!m(this,e)},set:function(e,t){var i=m(this,e);i?i[1]=t:this.a.push([e,t])},delete:function(e){var t=p(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,i,r){var l=e((function(e,a){o(e,l,t,"_i"),e._t=t,e._i=g++,e._l=void 0,null!=a&&d(a,i,e[r],e)}));return a(l.prototype,{delete:function(e){if(!s(e))return!1;var i=n(e);return!0===i?A(c(this,t)).delete(e):i&&u(i,this._i)&&delete i[this._i]},has:function(e){if(!s(e))return!1;var i=n(e);return!0===i?A(c(this,t)).has(e):i&&u(i,this._i)}}),l},def:function(e,t,i){var a=n(r(t),!0);return!0===a?A(e).set(t,i):a[e._i]=i,e},ufstore:A}},"d+8V":function(e,t,i){"use strict";var a=i("q1tI"),n=i.n(a),r=i("N1om"),s=i.n(r),o=i("Wbzz"),d=function(e){return e.tags.map((function(e,t){return[t>0&&", ",n.a.createElement(o.Link,{key:s()(e),to:"/tags/"+s()(e)},e)]}))};d.defaultProps={tags:[]},t.a=d},jFb6:function(e,t,i){(function(t){i("91GP"),e.exports={pathPrefix:"/blog",siteMetadata:{title:"Blog of Sebastian Häni",author:{name:"Sebastian Häni",summary:"who lives, studies and works Zurich building useful things."},description:"A personal blog about things I am interested in.",siteUrl:"https://sebastianhaeni.github.com",social:{twitter:"sebastianhaeni"}},plugins:[{resolve:"gatsby-source-filesystem",options:{path:t+"/content/blog",name:"blog"}},{resolve:"gatsby-source-filesystem",options:{path:t+"/content/assets",name:"assets"}},{resolve:"gatsby-transformer-remark",options:{plugins:[{resolve:"gatsby-remark-images",options:{maxWidth:590}},{resolve:"gatsby-remark-responsive-iframe",options:{wrapperStyle:"margin-bottom: 1.0725rem"}},"gatsby-remark-prismjs","gatsby-remark-copy-linked-files","gatsby-remark-smartypants"]}},"gatsby-transformer-sharp","gatsby-plugin-sharp",{resolve:"gatsby-plugin-google-analytics",options:{trackingId:"UA-39972934-3"}},{resolve:"gatsby-plugin-feed",options:{query:"\n          {\n            site {\n              siteMetadata {\n                title\n                description\n                siteUrl\n                site_url: siteUrl\n              }\n            }\n          }\n        ",feeds:[{serialize:function(e){var t=e.query,i=t.site;return t.allMarkdownRemark.edges.map((function(e){return Object.assign({},e.node.frontmatter,{description:e.node.excerpt,date:e.node.frontmatter.date,url:i.siteMetadata.siteUrl+e.node.fields.slug,guid:i.siteMetadata.siteUrl+e.node.fields.slug,custom_elements:[{"content:encoded":e.node.html}]})}))},query:"\n              {\n                allMarkdownRemark(\n                  sort: { order: DESC, fields: [frontmatter___date] },\n                ) {\n                  edges {\n                    node {\n                      excerpt\n                      html\n                      fields { slug }\n                      frontmatter {\n                        title\n                        date\n                      }\n                    }\n                  }\n                }\n              }\n            ",output:"/rss.xml",title:"Your Site's RSS Feed"}]}},{resolve:"gatsby-plugin-manifest",options:{name:"Sebastian Häni Blog",short_name:"Sebastian Häni",start_url:"/",background_color:"#ffffff",theme_color:"#663399",display:"minimal-ui",icon:"content/assets/profile-pic.jpg"}},"gatsby-plugin-react-helmet",{resolve:"gatsby-plugin-typography",options:{pathToConfigModule:"src/utils/typography"}},{resolve:"gatsby-plugin-disqus",options:{shortname:"blog-of-sebastian-hani"}}]}}).call(this,"/")},qASQ:function(e,t,i){"use strict";var a=i("TqRt");t.__esModule=!0,t.default=void 0;var n=a(i("pVnL")),r=a(i("8OQS")),s=a(i("VbXa")),o=a(i("q1tI")),d=a(i("17x9")),l=i("4M6O"),u=(0,l.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),c=function(e){function t(t){var i;return(i=e.call(this,t)||this).shortname="blog-of-sebastian-hani",i}(0,s.default)(t,e);var i=t.prototype;return i.componentDidMount=function(){this.loadInstance()},i.shouldComponentUpdate=function(e){return this.props!==e&&(0,l.shallowComparison)(this.props,e)},i.componentDidUpdate=function(){this.loadInstance()},i.loadInstance=function(){window.document.getElementById("dsq-count-scr")?u():(0,l.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},i.cleanInstance=function(){(0,l.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},i.render=function(){var e=this.props,t=e.config,i=e.placeholder,a=(0,r.default)(e,["config","placeholder"]);return o.default.createElement("span",(0,n.default)({className:"disqus-comment-count","data-disqus-identifier":t.identifier,"data-disqus-url":t.url},a,{__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:49},__self:this}),i)},t}(o.default.Component);t.default=c,c.defaultProps={placeholder:"..."},c.propTypes={config:d.default.shape({identifier:d.default.string,title:d.default.string,url:d.default.string}),placeholder:d.default.string}}}]);
//# sourceMappingURL=cd7d5f864fc9e15ed8adef086269b0aeff617554-141bb7dbdeab7fd574f1.js.map