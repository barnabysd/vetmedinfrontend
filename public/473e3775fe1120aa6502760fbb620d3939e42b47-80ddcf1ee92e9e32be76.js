(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/rRK":function(e,t,n){(function(t){var o;o=function(e,t){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),i=n(0),a=n.n(i);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var y=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=f(t).call(this,e))||"object"!==u(r)&&"function"!=typeof r?d(o):r).state={innerRatio:void 0,outerRatio:void 0},n.updateContainerRatio=n.updateContainerRatio.bind(d(d(n))),n.updateVideoRatio=n.updateVideoRatio.bind(d(d(n))),n.initEventListeners=n.initEventListeners.bind(d(d(n))),n.removeEventListeners=n.removeEventListeners.bind(d(d(n))),n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){this.updateContainerRatio(),"function"==typeof this.props.onFallbackDidMount&&this.props.onFallbackDidMount(this.updateContainerRatio),this.props.remeasureOnWindowResize&&this.initEventListeners()}},{key:"componentWillReceiveProps",value:function(e){e.remeasureOnWindowResize!==this.props.remeasureOnWindowResize&&(e.remeasureOnWindowResize?this.initEventListeners():this.removeEventListeners())}},{key:"componentWillUnmount",value:function(){this.removeEventListeners(),"function"==typeof this.props.onFallbackWillUnmount&&this.props.onFallbackWillUnmount()}},{key:"updateContainerRatio",value:function(){if(this.containerRef){var e=this.containerRef.getBoundingClientRect(),t=e.width,n=e.height;this.setState({outerRatio:t/n})}}},{key:"updateVideoRatio",value:function(e,t){this.setState({innerRatio:e/t})}},{key:"initEventListeners",value:function(){window.addEventListener("resize",this.updateContainerRatio)}},{key:"removeEventListeners",value:function(){window.removeEventListener("resize",this.updateContainerRatio)}},{key:"render",value:function(){var e=this,t=this.state,n=t.innerRatio,o=t.outerRatio,i={width:n>o?"auto":"100%",height:n>o?"100%":"auto",position:"absolute",top:"-9999px",bottom:"-9999px",left:"-9999px",right:"-9999px",margin:"auto"},a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){s(e,t,n[t])}))}return e}({width:"100%",height:"100%"},this.props.style,{position:"relative",overflow:"hidden"});return r.a.createElement("div",{style:a,ref:function(t){e.containerRef=t},className:this.props.className},r.a.createElement("video",c({onLoadedData:function(t){e.updateVideoRatio(t.target.videoWidth,t.target.videoHeight)},style:i},this.props.videoOptions)))}}])&&l(n.prototype,o),i&&l(n,i),t}(o.Component);y.propTypes={style:a.a.object,onFallbackDidMount:a.a.func,onFallbackWillUnmount:a.a.func,videoOptions:a.a.object,forceFallback:a.a.bool,remeasureOnWindowResize:a.a.bool,className:a.a.string};var b=y;function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function w(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var R=function(e){function t(){return g(this,t),w(this,j(t).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){var e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){m(e,t,n[t])}))}return e}({width:"100%",height:"100%"},this.props.style,{objectFit:"cover"});return this.props.forceFallback||"undefined"!=typeof window&&/MSIE|Trident|Edge/.test(window.navigator.userAgent)?r.a.createElement(b,this.props):r.a.createElement("video",h({className:this.props.className,style:e},this.props.videoOptions))}}])&&O(n.prototype,o),i&&O(n,i),t}(o.Component);R.propTypes={forceFallback:a.a.bool,remeasureOnWindowResize:a.a.bool,onFallbackDidMount:a.a.func,onFallbackWillUnmount:a.a.func,videoOptions:a.a.object,style:a.a.object,className:a.a.string},R.defaultProps={forceFallback:!1,remeasureOnWindowResize:!1},t.default=R}])},e.exports=o(n("17x9"),n("q1tI"))}).call(this,n("eKGF"))},tzB8:function(e,t,n){"use strict";var o=n("q1tI"),r=n.n(o),i=(n("8uUf"),n("zDcZ"),n("/rRK")),a=n.n(i),u=n("vOnD").b.div.withConfig({displayName:"FixedSizeVideoWidget__FixedVideoHolder",componentId:"sc-1qyi1vr-0"})(["width:550px;height:550px;max-width:550px;max-height:550px;overflow:hidden;"]),c=r.a.forwardRef((function(e,t){var n=e.data.animationVideoName;console.log("props.animationVideoName",e.animationVideoName);var i=r.a.useState(!1);i[0],i[1];Object(o.useEffect)((function(){var e=document.getElementById("fixedSizeVideo"),t=setInterval((function(){if(e.readyState>=3){if(document.getElementById("videoContainer").style.opacity=1,void 0!==document.getElementById("videoPreloadImage"))document.getElementById("videoPreloadImage");clearInterval(t)}}),500);return function(){}}));var c=e.width?e.width:"100%",s=e.height?e.height:"100vh",l={id:"fixedSizeVideo",src:n,ref:t,poster:"https://dummyimage.com/600x400/d6f7fd/d6f7fd",autoPlay:!0};return r.a.createElement("div",{style:{position:"relative",display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"flex-start",minHeight:"100vh",width:c,backgroundColor:"transparent"}},r.a.createElement(u,{id:"videoContainer",style:{opacity:1,width:c,height:s}},r.a.createElement(a.a,{poster:"https://dummyimage.com/600x400/d6f7fd/d6f7fd",videoOptions:l})))}));t.a=c}}]);
//# sourceMappingURL=473e3775fe1120aa6502760fbb620d3939e42b47-80ddcf1ee92e9e32be76.js.map