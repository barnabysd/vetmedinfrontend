(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{Bl7J:function(t,e,n){"use strict";var r=n("IRj2"),a=n("q1tI"),o=n.n(a),i=n("zyEs"),c=(n("LbRr"),n("8ypT"),n("zDcZ")),s=n("qKvR");e.a=function(t){var e=t.children,n=t.scrollablePage,a=void 0!==n&&n,u=t.backgroundColor,l=void 0===u?c.a.palette.background.lightBlue:u;r.data;return a&&{backgroundColor:l,minWidth:"100%"},Object(s.c)(o.a.Fragment,null,Object(s.c)(i.a,null,Object(s.c)("div",{className:"pageContainer"},Object(s.c)("main",null,e))))}},DrhF:function(t,e,n){var r=n("BjK0"),a=n("N+BI").onFreeze;n("939a")("freeze",(function(t){return function(e){return t&&r(e)?t(a(e)):e}}))},EH9Q:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Vetmedin","description":"website description","author":"@barnabysd"}}}}')},IRj2:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Vetmedin"}}}}')},aEjF:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return _}));var r=n("q1tI"),a=n.n(r),o=n("Wbzz"),i=n("vrFN"),c=n("Bl7J"),s=(n("6kNP"),n("8npG"),n("E5k/"),n("DrhF"),n("pJf4"),n("zLVn")),u=n("wx14"),l=n("JX7q"),d=n("dI71"),f=n("2mql"),h=n.n(f);function p(t,e){if(!t){var n=new Error("loadable: "+e);throw n.framesToPop=1,n.name="Invariant Violation",n}}var b=a.a.createContext();var v=function(t){return t};function m(t){var e=t.resolve,n=void 0===e?v:e,r=t.render,o=t.onLoad;function i(t,e){void 0===e&&(e={});var i=function(t){return"function"==typeof t?{requireAsync:t}:t}(t),c={};function f(t){return e.cacheKey?e.cacheKey(t):i.resolve?i.resolve(t):null}var h,v=function(t){function a(n){var r;return(r=t.call(this,n)||this).state={result:null,error:null,loading:!0,cacheKey:f(n)},r.promise=null,p(!n.__chunkExtractor||i.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),n.__chunkExtractor?(!1===e.ssr||(i.requireAsync(n).catch((function(){})),r.loadSync(),n.__chunkExtractor.addChunk(i.chunkName(n))),Object(l.a)(r)):(!1!==e.ssr&&i.isReady&&i.isReady(n)&&r.loadSync(),r)}Object(d.a)(a,t),a.getDerivedStateFromProps=function(t,e){var n=f(t);return Object(u.a)({},e,{cacheKey:n,loading:e.loading||e.cacheKey!==n})};var h=a.prototype;return h.componentDidMount=function(){this.mounted=!0,this.state.loading?this.loadAsync():this.state.error||this.triggerOnLoad()},h.componentDidUpdate=function(t,e){e.cacheKey!==this.state.cacheKey&&(this.promise=null,this.loadAsync())},h.componentWillUnmount=function(){this.mounted=!1},h.safeSetState=function(t,e){this.mounted&&this.setState(t,e)},h.triggerOnLoad=function(){var t=this;o&&setTimeout((function(){o(t.state.result,t.props)}))},h.loadSync=function(){if(this.state.loading)try{var t=i.requireSync(this.props),e=n(t,{Loadable:y});this.state.result=e,this.state.loading=!1}catch(r){this.state.error=r}},h.getCacheKey=function(){return f(this.props)||JSON.stringify(this.props)},h.getCache=function(){return c[this.getCacheKey()]},h.setCache=function(t){c[this.getCacheKey()]=t},h.loadAsync=function(){var t=this;if(!this.promise){var r=this.props,a=(r.__chunkExtractor,r.forwardedRef,Object(s.a)(r,["__chunkExtractor","forwardedRef"]));this.promise=i.requireAsync(a).then((function(r){var a=n(r,{Loadable:y});e.suspense&&t.setCache(a),t.safeSetState({result:n(r,{Loadable:y}),loading:!1},(function(){return t.triggerOnLoad()}))})).catch((function(e){t.safeSetState({error:e,loading:!1})}))}return this.promise},h.render=function(){var t=this.props,n=t.forwardedRef,a=t.fallback,o=(t.__chunkExtractor,Object(s.a)(t,["forwardedRef","fallback","__chunkExtractor"])),i=this.state,c=i.error,l=i.loading,d=i.result;if(e.suspense){var f=this.getCache();if(!f)throw this.loadAsync();return r({loading:!1,fallback:null,result:f,options:e,props:Object(u.a)({},o,{ref:n})})}if(c)throw c;var h=a||e.fallback||null;return l?h:r({loading:l,fallback:h,result:d,options:e,props:Object(u.a)({},o,{ref:n})})},a}(a.a.Component),m=(h=v,function(t){return a.a.createElement(b.Consumer,null,(function(e){return a.a.createElement(h,Object.assign({__chunkExtractor:e},t))}))}),y=a.a.forwardRef((function(t,e){return a.a.createElement(m,Object.assign({forwardedRef:e},t))}));return y.preload=function(t){i.requireAsync(t)},y.load=function(t){return i.requireAsync(t)},y}return{loadable:i,lazy:function(t,e){return i(t,Object(u.a)({},e,{suspense:!0}))}}}var y=m({resolve:function(t,e){var n=e.Loadable,r=t.__esModule?t.default:t.default||t;return h()(n,r,{preload:!0}),r},render:function(t){var e=t.result,n=t.props;return a.a.createElement(e,n)}}),g=y.loadable,w=y.lazy,k=m({onLoad:function(t,e){t&&e.forwardedRef&&("function"==typeof e.forwardedRef?e.forwardedRef(t):e.forwardedRef.current=t)},render:function(t){var e=t.result,n=t.loading,r=t.props;return!n&&r.children?r.children(e):null}}),O=k.loadable,j=k.lazy;var R=g;R.lib=O,w.lib=j;var S=R,E=n("qKvR");S((function(){return Promise.all([n.e(54),n.e(3),n.e(2),n.e(57)]).then(n.bind(null,"Pixl"))}));function _(){var t=r.useState(.5);t[0],t[1];return Object(E.c)(c.a,null,Object(E.c)(i.a,{title:"About"}),Object(E.c)("h1",null,"animation"),Object(E.c)(o.Link,{to:"/"},"Back to home"))}},vrFN:function(t,e,n){"use strict";var r=n("EH9Q"),a=(n("q1tI"),n("qhky")),o=n("qKvR");function i(t){var e=t.description,n=t.lang,i=t.meta,c=t.title,s=r.data.site,u=e||s.siteMetadata.description;return Object(o.c)(a.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(i)})}i.defaultProps={lang:"en",meta:[],description:""},e.a=i}}]);
//# sourceMappingURL=component---src-pages-framer-example-js-a8ad12808e8e62a7929c.js.map