(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/rRK":function(A,e,t){(function(e){var g;t("LagC"),t("rzGZ"),t("Dq+y"),t("8npG"),t("Ggvi"),t("E5k/"),t("m210"),t("4DPX"),g=function(A,e){return function(A){var e={};function t(g){if(e[g])return e[g].exports;var I=e[g]={i:g,l:!1,exports:{}};return A[g].call(I.exports,I,I.exports,t),I.l=!0,I.exports}return t.m=A,t.c=e,t.d=function(A,e,g){t.o(A,e)||Object.defineProperty(A,e,{enumerable:!0,get:g})},t.r=function(A){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},t.t=function(A,e){if(1&e&&(A=t(A)),8&e)return A;if(4&e&&"object"==typeof A&&A&&A.__esModule)return A;var g=Object.create(null);if(t.r(g),Object.defineProperty(g,"default",{enumerable:!0,value:A}),2&e&&"string"!=typeof A)for(var I in A)t.d(g,I,function(e){return A[e]}.bind(null,I));return g},t.n=function(A){var e=A&&A.__esModule?function(){return A.default}:function(){return A};return t.d(e,"a",e),e},t.o=function(A,e){return Object.prototype.hasOwnProperty.call(A,e)},t.p="",t(t.s=2)}([function(e,t){e.exports=A},function(A,t){A.exports=e},function(A,e,t){"use strict";t.r(e);var g=t(1),I=t.n(g),C=t(0),n=t.n(C);function o(A){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(A){return typeof A}:function(A){return A&&"function"==typeof Symbol&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A})(A)}function i(){return(i=Object.assign||function(A){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var g in t)Object.prototype.hasOwnProperty.call(t,g)&&(A[g]=t[g])}return A}).apply(this,arguments)}function r(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function a(A,e){for(var t=0;t<e.length;t++){var g=e[t];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(A,g.key,g)}}function l(A){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(A){return A.__proto__||Object.getPrototypeOf(A)})(A)}function c(A,e){return(c=Object.setPrototypeOf||function(A,e){return A.__proto__=e,A})(A,e)}function u(A){if(void 0===A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return A}var s=function(A){function e(A){var t,g,I;return function(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),g=this,(t=!(I=l(e).call(this,A))||"object"!==o(I)&&"function"!=typeof I?u(g):I).state={innerRatio:void 0,outerRatio:void 0},t.updateContainerRatio=t.updateContainerRatio.bind(u(u(t))),t.updateVideoRatio=t.updateVideoRatio.bind(u(u(t))),t.initEventListeners=t.initEventListeners.bind(u(u(t))),t.removeEventListeners=t.removeEventListeners.bind(u(u(t))),t}var t,g,C;return function(A,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");A.prototype=Object.create(e&&e.prototype,{constructor:{value:A,writable:!0,configurable:!0}}),e&&c(A,e)}(e,A),t=e,(g=[{key:"componentDidMount",value:function(){this.updateContainerRatio(),"function"==typeof this.props.onFallbackDidMount&&this.props.onFallbackDidMount(this.updateContainerRatio),this.props.remeasureOnWindowResize&&this.initEventListeners()}},{key:"componentWillReceiveProps",value:function(A){A.remeasureOnWindowResize!==this.props.remeasureOnWindowResize&&(A.remeasureOnWindowResize?this.initEventListeners():this.removeEventListeners())}},{key:"componentWillUnmount",value:function(){this.removeEventListeners(),"function"==typeof this.props.onFallbackWillUnmount&&this.props.onFallbackWillUnmount()}},{key:"updateContainerRatio",value:function(){if(this.containerRef){var A=this.containerRef.getBoundingClientRect(),e=A.width,t=A.height;this.setState({outerRatio:e/t})}}},{key:"updateVideoRatio",value:function(A,e){this.setState({innerRatio:A/e})}},{key:"initEventListeners",value:function(){window.addEventListener("resize",this.updateContainerRatio)}},{key:"removeEventListeners",value:function(){window.removeEventListener("resize",this.updateContainerRatio)}},{key:"render",value:function(){var A=this,e=this.state,t=e.innerRatio,g=e.outerRatio,C={width:t>g?"auto":"100%",height:t>g?"100%":"auto",position:"absolute",top:"-9999px",bottom:"-9999px",left:"-9999px",right:"-9999px",margin:"auto"},n=function(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},g=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(g=g.concat(Object.getOwnPropertySymbols(t).filter((function(A){return Object.getOwnPropertyDescriptor(t,A).enumerable})))),g.forEach((function(e){r(A,e,t[e])}))}return A}({width:"100%",height:"100%"},this.props.style,{position:"relative",overflow:"hidden"});return I.a.createElement("div",{style:n,ref:function(e){A.containerRef=e},className:this.props.className},I.a.createElement("video",i({onLoadedData:function(e){A.updateVideoRatio(e.target.videoWidth,e.target.videoHeight)},style:C},this.props.videoOptions)))}}])&&a(t.prototype,g),C&&a(t,C),e}(g.Component);s.propTypes={style:n.a.object,onFallbackDidMount:n.a.func,onFallbackWillUnmount:n.a.func,videoOptions:n.a.object,forceFallback:n.a.bool,remeasureOnWindowResize:n.a.bool,className:n.a.string};var p=s;function d(A){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(A){return typeof A}:function(A){return A&&"function"==typeof Symbol&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A})(A)}function f(){return(f=Object.assign||function(A){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var g in t)Object.prototype.hasOwnProperty.call(t,g)&&(A[g]=t[g])}return A}).apply(this,arguments)}function m(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function y(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")}function b(A,e){for(var t=0;t<e.length;t++){var g=e[t];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(A,g.key,g)}}function v(A,e){return!e||"object"!==d(e)&&"function"!=typeof e?function(A){if(void 0===A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return A}(A):e}function h(A){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(A){return A.__proto__||Object.getPrototypeOf(A)})(A)}function E(A,e){return(E=Object.setPrototypeOf||function(A,e){return A.__proto__=e,A})(A,e)}var R=function(A){function e(){return y(this,e),v(this,h(e).apply(this,arguments))}var t,g,C;return function(A,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");A.prototype=Object.create(e&&e.prototype,{constructor:{value:A,writable:!0,configurable:!0}}),e&&E(A,e)}(e,A),t=e,(g=[{key:"render",value:function(){var A=function(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},g=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(g=g.concat(Object.getOwnPropertySymbols(t).filter((function(A){return Object.getOwnPropertyDescriptor(t,A).enumerable})))),g.forEach((function(e){m(A,e,t[e])}))}return A}({width:"100%",height:"100%"},this.props.style,{objectFit:"cover"});return this.props.forceFallback||"undefined"!=typeof window&&/MSIE|Trident|Edge/.test(window.navigator.userAgent)?I.a.createElement(p,this.props):I.a.createElement("video",f({className:this.props.className,style:A},this.props.videoOptions))}}])&&b(t.prototype,g),C&&b(t,C),e}(g.Component);R.propTypes={forceFallback:n.a.bool,remeasureOnWindowResize:n.a.bool,onFallbackDidMount:n.a.func,onFallbackWillUnmount:n.a.func,videoOptions:n.a.object,style:n.a.object,className:n.a.string},R.defaultProps={forceFallback:!1,remeasureOnWindowResize:!1},e.default=R}])},A.exports=g(t("17x9"),t("q1tI"))}).call(this,t("yLpj"))},"3ksh":function(A,e,t){"use strict";t("E5k/");var g=t("q1tI"),I=t.n(g),C=t("/PMb"),n=t.n(C),o=t("kOA+"),i=t.n(o),r=t("zDcZ"),a=function(A){Object.assign({},A);return I.a.createElement("img",{src:n.a,style:{transform:"rotate(270deg)",width:"16px",height:"16px",marginBottom:"0"}})};e.a=function(A){var e=A.linkText,t=void 0===e?"Continue":e,g=A.to,C=void 0===g?"/":g,n=A.onClickHandler,o=void 0===n?null:n;return I.a.createElement("div",{onClick:o,style:{position:"absolute",right:"0",bottom:"0",width:"150px",height:"100px",display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",textAlign:"center",border:"0px solid red",zIndex:"10"}},null===o?I.a.createElement(i.a,{to:C,style:{display:"flex",flexDirection:"row",alignItems:"center",width:"200px",height:"50px",textDecoration:"none",color:r.a.palette.deminBlue.main,fontFamily:r.a.typography.fontFamily,fontWeight:"700"}},t," ",I.a.createElement(a,null)):I.a.createElement("a",{href:"#",style:{display:"flex",flexDirection:"row",alignItems:"center",width:"200px",height:"50px",textDecoration:"none",color:r.a.palette.deminBlue.main,fontFamily:r.a.typography.fontFamily,fontWeight:"700"}},t," ",I.a.createElement(a,null)))}},"5lfk":function(A,e,t){"use strict";var g=t("q1tI"),I=t.n(g),C=t("8uUf"),n=t("A0gv"),o=t.n(n),i=(t("zDcZ"),t("/rRK"),t("ZaYD"),t("Hhcu"),t("V33x"),t("vOnD")),r=t("MdcO"),a=t.n(r);i.default.div.withConfig({displayName:"ResponseVideo__PoppySitting02",componentId:"j6k7q5-0"})(["height:738px;width:570px;"]),I.a.forwardRef((function(A,e){var t=A.currentCaseStudySlideData,g=(t.isCorrectAnswer,t.animationVideoName,t.mainImage),n=I.a.useState(!1),i=n[0],r=n[1];function l(A){return o.a}l(),!!A.autoPlay&&A.autoPlay;return I.a.createElement("div",{className:"player-wrapper",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"flex-start",minHeight:"100vh",width:"100%",backgroundColor:"transparent"}},g?I.a.createElement(C.a,{imgName:g}):"",I.a.createElement("img",{src:a.a,alt:"",style:{opacity:i?0:1,width:"100%"}}),I.a.createElement("video",{autoPlay:!0,playsInline:!0,muted:!0,onLoadedData:function(){r(!0)},loop:!1,className:"react-player",width:"100%",height:"100%",style:{opacity:i?1:0,width:"100%"}},I.a.createElement("source",{src:l(),type:"video/mp4"})))}))},A0gv:function(A,e,t){A.exports=t.p+"static/VET-2020-001Questions_Dudley_Sitting-ccb9d5c575b9af63aa2e9322508c9874.mp4"},"C/KN":function(A,e,t){"use strict";var g=t("q1tI"),I=t.n(g),C=(t("8uUf"),t("cKdi")),n=(t("i98L"),t("a5sw")),o=(t("IBCv"),t("P/bV"),t("vOnD")),i=t("zDcZ"),r=t("itCy"),a=o.default.div.withConfig({displayName:"QuestionPosed__QuestionPoseHeader",componentId:"sc-1wiq9ob-0"})(["font-family:",";font-size:2.938rem;font-weight:600;font-stretch:normal;font-style:normal;line-height:1.15;letter-spacing:-0.47px;text-align:left;padding-bottom:1.5rem;color:",";"],i.a.overrides.MuiTypography.h1.fontFamily,i.a.palette.midnightBlue.main),l=o.default.div.withConfig({displayName:"QuestionPosed__QuestionPosedBody",componentId:"sc-1wiq9ob-1"})(["font-family:",";font-weight:400;font-size:0.75rem;letter-spacing:0.01rem;padding-left:3rem;"],i.a.typography.fontFamily);e.a=function(A){var e=A.currentCaseStudySlideData,t=(A.currentSlidePosition,A.onClickHandler),g=A.dogChoice,o=void 0===g?r.d.DUDLEY:g,i=e.questionText,c=e.additionalText,u=(e.videoText1,e.buttonLinks),s=(e.videoUrl1,e.videoThumbName1,{__html:Object(n.l)(i.processed?Object(n.k)(i.processed):i,o)}),p=c?{__html:Object(n.l)(Object(n.k)(c,o))}:{__html:""};return I.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"flex-start",minHeight:"100vh",width:"100%"}},I.a.createElement(a,{dangerouslySetInnerHTML:s}),I.a.createElement(l,{dangerouslySetInnerHTML:p}),I.a.createElement("div",{style:{paddingLeft:"2.8rem"}},void 0!==u&&u.length>0&&void 0!==u[0].title&&""!==u[0].title?I.a.createElement(C.a,{id:u[0].id?u[0].id:Object(n.g)(u[0].url),buttonText:u[0].title,to:u[0].url,onClickHandler:t}):"",void 0!==u&&u.length>1&&void 0!==u[1].title&&""!==u[1].title?I.a.createElement(C.a,{id:u[1].id?u[1].id:Object(n.g)(u[1].url),buttonText:u[1].title,to:u[1].url,onClickHandler:t}):"",void 0!==u&&u.length>2&&void 0!==u[2].title&&""!==u[2].title?I.a.createElement(C.a,{id:u[2].id?u[2].id:Object(n.g)(u[2].url),buttonText:u[2].title,to:u[2].url,onClickHandler:t}):"",void 0!==u&&u.length>3&&void 0!==u[3].title&&""!==u[3].title?I.a.createElement(C.a,{id:u[3].id?u[3].id:Object(n.g)(u[3].url),buttonText:u[3].title,to:u[3].url,onClickHandler:t}):"",void 0!==u&&u.length>4&&void 0!==u[4].title&&""!==u[4].title?I.a.createElement(C.a,{id:u[4].id?u[4].id:Object(n.g)(u[4].url),buttonText:u[4].title,to:u[4].url,onClickHandler:t}):"",void 0!==u&&u.length>5&&void 0!==u[5].title&&""!==u[5].title?I.a.createElement(C.a,{id:u[5].id?u[5].id:Object(n.g)(u[5].url),buttonText:u[5].title,to:u[5].url,onClickHandler:t}):""),I.a.createElement("div",{style:{width:"100%"}}," "))}},Hhcu:function(A,e,t){A.exports=t.p+"cdbd0724fc68766aa6289b11bf8b4d06.vtt"},ILeL:function(A,e,t){"use strict";t("E5k/");var g=t("q1tI"),I=t.n(g),C=t("/PMb"),n=t.n(C),o=t("kOA+"),i=t.n(o),r=t("zDcZ"),a=function(A){Object.assign({},A);return I.a.createElement("img",{src:n.a,style:{transform:"rotate(90deg)",width:"16px",height:"16px",marginBottom:"0"}})};e.a=function(A){var e,t=A.linkText,g=void 0===t?"Back":t,C=A.to,n=void 0===C?"/":C,o=A.onClickHandler,l=void 0===o?null:o;return I.a.createElement("div",{style:(e={position:"absolute",left:"10%",bottom:"0",width:"150px",height:"100px",display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",textAlign:"center",zIndex:"100",border:"0px solid red"},e.zIndex="10",e)},null===l?I.a.createElement(i.a,{to:n,style:{display:"flex",flexDirection:"row",alignItems:"center",width:"200px",height:"50px",textDecoration:"none",color:r.a.palette.deminBlue.main,fontFamily:r.a.typography.fontFamily,fontWeight:"700"}},I.a.createElement(a,null)," ",g):I.a.createElement("a",{href:"#",style:{display:"flex",flexDirection:"row",alignItems:"center",width:"200px",height:"50px",textDecoration:"none",color:r.a.palette.deminBlue.main,fontFamily:r.a.typography.fontFamily,fontWeight:"700"}},I.a.createElement(a,null)," ",g))}},MdcO:function(A,e){A.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QCgRXhpZgAATU0AKgAAAAgABQEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAAEyAAIAAAAUAAAAWodpAAQAAAABAAAAbgAAAAAAAABIAAAAAQAAAEgAAAABMjAyMDowNjoyNSAyMjozNDoyNgAAA6ABAAMAAAAB//8AAKACAAMAAAABAhQAAKADAAMAAAABAswAAAAAAAD/4Qs8aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjUuMCI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IjI3NzhYIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wNi0yNVQyMjozNDoyNiswMTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wNi0yNVQyMjozNDoyNiswMTowMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InByb2R1Y2VkIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZmZpbml0eSBQaG90byAoTWFyIDMxIDIwMjApIiBzdEV2dDp3aGVuPSIyMDIwLTA2LTI1VDIyOjM0OjI2KzAxOjAwIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/+0ALFBob3Rvc2hvcCAzLjAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/iAeRJQ0NfUFJPRklMRQABAQAAAdRsY21zBAAAAG1udHJSR0IgWFlaIAfkAAYAGQAVABgAAWFjc3BBUFBMAAAAAEFQUEwAAAAAAAAAAAAAAAAAAAAAAAD21gABAAAAANMtbGNtc3aSxy7WbCvBCeV8RCmhrAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACmRlc2MAAAD8AAAAJmNwcnQAAAEkAAAAI3d0cHQAAAFIAAAAFHJYWVoAAAFcAAAAFGdYWVoAAAFwAAAAFGJYWVoAAAGEAAAAFHJUUkMAAAGYAAAAEGNoYWQAAAGoAAAALGJUUkMAAAGYAAAAEGdUUkMAAAGYAAAAEG1sdWMAAAAAAAAAAQAAAAwAAAAAAAAACgAAABwAMgA3ADcAOABYAAB0ZXh0AAAAAENvcHlyaWdodCBBcHBsZSBJbmMuLCAyMDIwAABYWVogAAAAAAAA89gAAQAAAAEWCFhZWiAAAAAAAABrmQAAN0wAAAE+WFlaIAAAAAAAAGTAAAC7EAAAD4hYWVogAAAAAAAAJnwAAA2kAADCZ3BhcmEAAAAAAAAAAAAB9gRzZjMyAAAAAAABC7cAAAWW///zVwAABykAAP3X///7t////aYAAAPaAADA9v/bAEMAKBwe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"},V33x:function(A,e,t){A.exports=t.p+"96eadf4b9775fc13c07d3dea4f3736f2.vtt"},ZaYD:function(A,e,t){A.exports=t.p+"e3600c7d1348f8aa83c2120fd1c3a72b.vtt"},tzB8:function(A,e,t){"use strict";var g=t("q1tI"),I=t.n(g),C=(t("8uUf"),t("A0gv")),n=t.n(C),o=(t("zDcZ"),t("/rRK"),t("ZaYD"),t("Hhcu"),t("V33x"),t("vOnD")),i=(t("MdcO"),o.default.div.withConfig({displayName:"FixedSizeVideoWidget__PoppySitting02",componentId:"k6pmeb-0"})(["height:738px;width:570px;"]),I.a.forwardRef((function(A,e){var t=A.currentCaseStudySlideData,g=(t.isCorrectAnswer,t.animationVideoName,t.mainImage,I.a.useState(!1)),C=g[0],o=g[1];return I.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"flex-start",minHeight:"100vh",width:"100%",backgroundColor:"transparent"}},I.a.createElement("video",{autoPlay:!0,playsInline:!0,muted:!0,onLoadedData:function(){o(!0)},loop:!1,width:"100%",height:"560px",style:{opacity:C?1:0,width:"100%",height:"560px"}},I.a.createElement("source",{src:n.a,type:"video/mp4"})))})));e.a=i}}]);
//# sourceMappingURL=462b26e1e304ba4d24372cccc794024301126c2b-56aaaafa699dd7bcc32e.js.map