(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/rRK":function(A,t,e){(function(t){var g;e("LagC"),e("rzGZ"),e("Dq+y"),e("8npG"),e("Ggvi"),e("E5k/"),e("m210"),e("4DPX"),g=function(A,t){return function(A){var t={};function e(g){if(t[g])return t[g].exports;var I=t[g]={i:g,l:!1,exports:{}};return A[g].call(I.exports,I,I.exports,e),I.l=!0,I.exports}return e.m=A,e.c=t,e.d=function(A,t,g){e.o(A,t)||Object.defineProperty(A,t,{enumerable:!0,get:g})},e.r=function(A){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},e.t=function(A,t){if(1&t&&(A=e(A)),8&t)return A;if(4&t&&"object"==typeof A&&A&&A.__esModule)return A;var g=Object.create(null);if(e.r(g),Object.defineProperty(g,"default",{enumerable:!0,value:A}),2&t&&"string"!=typeof A)for(var I in A)e.d(g,I,function(t){return A[t]}.bind(null,I));return g},e.n=function(A){var t=A&&A.__esModule?function(){return A.default}:function(){return A};return e.d(t,"a",t),t},e.o=function(A,t){return Object.prototype.hasOwnProperty.call(A,t)},e.p="",e(e.s=2)}([function(t,e){t.exports=A},function(A,e){A.exports=t},function(A,t,e){"use strict";e.r(t);var g=e(1),I=e.n(g),C=e(0),o=e.n(C);function n(A){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(A){return typeof A}:function(A){return A&&"function"==typeof Symbol&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A})(A)}function i(){return(i=Object.assign||function(A){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var g in e)Object.prototype.hasOwnProperty.call(e,g)&&(A[g]=e[g])}return A}).apply(this,arguments)}function r(A,t,e){return t in A?Object.defineProperty(A,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):A[t]=e,A}function a(A,t){for(var e=0;e<t.length;e++){var g=t[e];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(A,g.key,g)}}function c(A){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(A){return A.__proto__||Object.getPrototypeOf(A)})(A)}function l(A,t){return(l=Object.setPrototypeOf||function(A,t){return A.__proto__=t,A})(A,t)}function u(A){if(void 0===A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return A}var s=function(A){function t(A){var e,g,I;return function(A,t){if(!(A instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),g=this,(e=!(I=c(t).call(this,A))||"object"!==n(I)&&"function"!=typeof I?u(g):I).state={innerRatio:void 0,outerRatio:void 0},e.updateContainerRatio=e.updateContainerRatio.bind(u(u(e))),e.updateVideoRatio=e.updateVideoRatio.bind(u(u(e))),e.initEventListeners=e.initEventListeners.bind(u(u(e))),e.removeEventListeners=e.removeEventListeners.bind(u(u(e))),e}var e,g,C;return function(A,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");A.prototype=Object.create(t&&t.prototype,{constructor:{value:A,writable:!0,configurable:!0}}),t&&l(A,t)}(t,A),e=t,(g=[{key:"componentDidMount",value:function(){this.updateContainerRatio(),"function"==typeof this.props.onFallbackDidMount&&this.props.onFallbackDidMount(this.updateContainerRatio),this.props.remeasureOnWindowResize&&this.initEventListeners()}},{key:"componentWillReceiveProps",value:function(A){A.remeasureOnWindowResize!==this.props.remeasureOnWindowResize&&(A.remeasureOnWindowResize?this.initEventListeners():this.removeEventListeners())}},{key:"componentWillUnmount",value:function(){this.removeEventListeners(),"function"==typeof this.props.onFallbackWillUnmount&&this.props.onFallbackWillUnmount()}},{key:"updateContainerRatio",value:function(){if(this.containerRef){var A=this.containerRef.getBoundingClientRect(),t=A.width,e=A.height;this.setState({outerRatio:t/e})}}},{key:"updateVideoRatio",value:function(A,t){this.setState({innerRatio:A/t})}},{key:"initEventListeners",value:function(){window.addEventListener("resize",this.updateContainerRatio)}},{key:"removeEventListeners",value:function(){window.removeEventListener("resize",this.updateContainerRatio)}},{key:"render",value:function(){var A=this,t=this.state,e=t.innerRatio,g=t.outerRatio,C={width:e>g?"auto":"100%",height:e>g?"100%":"auto",position:"absolute",top:"-9999px",bottom:"-9999px",left:"-9999px",right:"-9999px",margin:"auto"},o=function(A){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},g=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(g=g.concat(Object.getOwnPropertySymbols(e).filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable})))),g.forEach((function(t){r(A,t,e[t])}))}return A}({width:"100%",height:"100%"},this.props.style,{position:"relative",overflow:"hidden"});return I.a.createElement("div",{style:o,ref:function(t){A.containerRef=t},className:this.props.className},I.a.createElement("video",i({onLoadedData:function(t){A.updateVideoRatio(t.target.videoWidth,t.target.videoHeight)},style:C},this.props.videoOptions)))}}])&&a(e.prototype,g),C&&a(e,C),t}(g.Component);s.propTypes={style:o.a.object,onFallbackDidMount:o.a.func,onFallbackWillUnmount:o.a.func,videoOptions:o.a.object,forceFallback:o.a.bool,remeasureOnWindowResize:o.a.bool,className:o.a.string};var p=s;function d(A){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(A){return typeof A}:function(A){return A&&"function"==typeof Symbol&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A})(A)}function f(){return(f=Object.assign||function(A){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var g in e)Object.prototype.hasOwnProperty.call(e,g)&&(A[g]=e[g])}return A}).apply(this,arguments)}function y(A,t,e){return t in A?Object.defineProperty(A,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):A[t]=e,A}function b(A,t){if(!(A instanceof t))throw new TypeError("Cannot call a class as a function")}function m(A,t){for(var e=0;e<t.length;e++){var g=t[e];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(A,g.key,g)}}function v(A,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(A){if(void 0===A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return A}(A):t}function h(A){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(A){return A.__proto__||Object.getPrototypeOf(A)})(A)}function R(A,t){return(R=Object.setPrototypeOf||function(A,t){return A.__proto__=t,A})(A,t)}var j=function(A){function t(){return b(this,t),v(this,h(t).apply(this,arguments))}var e,g,C;return function(A,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");A.prototype=Object.create(t&&t.prototype,{constructor:{value:A,writable:!0,configurable:!0}}),t&&R(A,t)}(t,A),e=t,(g=[{key:"render",value:function(){var A=function(A){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},g=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(g=g.concat(Object.getOwnPropertySymbols(e).filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable})))),g.forEach((function(t){y(A,t,e[t])}))}return A}({width:"100%",height:"100%"},this.props.style,{objectFit:"cover"});return this.props.forceFallback||"undefined"!=typeof window&&/MSIE|Trident|Edge/.test(window.navigator.userAgent)?I.a.createElement(p,this.props):I.a.createElement("video",f({className:this.props.className,style:A},this.props.videoOptions))}}])&&m(e.prototype,g),C&&m(e,C),t}(g.Component);j.propTypes={forceFallback:o.a.bool,remeasureOnWindowResize:o.a.bool,onFallbackDidMount:o.a.func,onFallbackWillUnmount:o.a.func,videoOptions:o.a.object,style:o.a.object,className:o.a.string},j.defaultProps={forceFallback:!1,remeasureOnWindowResize:!1},t.default=j}])},A.exports=g(e("17x9"),e("q1tI"))}).call(this,e("yLpj"))},"3ksh":function(A,t,e){"use strict";e("q1tI");var g=e("cbsx"),I=e.n(g),C=e("kOA+"),o=e.n(C),n=e("zDcZ"),i=e("qKvR");t.a=function(A){var t=A.linkText,e=void 0===t?"Continue":t,g=A.to,C=void 0===g?"/":g,r=A.onClickHandler,a=void 0===r?null:r;return Object(i.c)("div",{onClick:a,style:{position:"absolute",right:"0",bottom:"0",width:"150px",height:"100px",display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",textAlign:"center",border:"0px solid red",zIndex:"10"}},null===a?Object(i.c)(o.a,{to:C,style:{display:"flex",flexDirection:"row",alignItems:"center",width:"200px",height:"50px",textDecoration:"none",color:n.a.palette.deminBlue.main,fontFamily:n.a.typography.fontFamily,fontWeight:"700"}},e," ",Object(i.c)(I.a,null)):Object(i.c)("a",{href:"#",style:{display:"flex",flexDirection:"row",alignItems:"center",width:"200px",height:"50px",textDecoration:"none",color:n.a.palette.deminBlue.main,fontFamily:n.a.typography.fontFamily,fontWeight:"700"}},e," ",Object(i.c)(I.a,null)))}},"5lfk":function(A,t,e){"use strict";var g=e("q1tI"),I=e.n(g),C=e("8uUf"),o=e("A0gv"),n=e.n(o),i=(e("zDcZ"),e("/rRK"),e("ZaYD"),e("Hhcu"),e("V33x"),e("vOnD")),r=e("MdcO"),a=e.n(r),c=e("qKvR");i.default.div.withConfig({displayName:"ResponseVideo__PoppySitting02",componentId:"sc-4ac9t7-0"})(["height:738px;width:570px;"]),I.a.forwardRef((function(A,t){var e=A.currentCaseStudySlideData,g=(e.isCorrectAnswer,e.animationVideoName,e.mainImage),o=I.a.useState(!1),i=o[0],r=o[1];function l(A){return n.a}l(),!!A.autoPlay&&A.autoPlay;return Object(c.c)("div",{className:"player-wrapper",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"flex-start",minHeight:"100vh",width:"100%",backgroundColor:"transparent"}},g?Object(c.c)(C.a,{imgName:g}):"",Object(c.c)("img",{src:a.a,alt:"",style:{opacity:i?0:1,width:"100%"}}),Object(c.c)("video",{autoPlay:!0,playsInline:!0,muted:!0,onLoadedData:function(){r(!0)},loop:!1,className:"react-player",width:"100%",height:"100%",style:{opacity:i?1:0,width:"100%"}},Object(c.c)("source",{src:l(),type:"video/mp4"})))}))},"6wlY":function(A,t,e){},A0gv:function(A,t,e){A.exports=e.p+"static/VET-2020-001Questions_Dudley_Sitting-ccb9d5c575b9af63aa2e9322508c9874.mp4"},"C/KN":function(A,t,e){"use strict";e("q1tI"),e("8uUf"),e("nw0t");var g=e("cKdi"),I=(e("i98L"),e("a5sw")),C=(e("IBCv"),e("P/bV"),e("vOnD")),o=e("zDcZ"),n=e("itCy"),i=e("qKvR"),r=C.default.div.withConfig({displayName:"QuestionPosed__QuestionPoseHeader",componentId:"sc-18q8gp2-0"})(["font-family:",";font-size:2.938rem;font-weight:600;font-stretch:normal;font-style:normal;line-height:1.15;letter-spacing:-0.47px;text-align:left;padding-bottom:1.5rem;color:",";"],o.a.overrides.MuiTypography.h1.fontFamily,o.a.palette.midnightBlue.main),a=C.default.div.withConfig({displayName:"QuestionPosed__QuestionPosedBody",componentId:"sc-18q8gp2-1"})(["font-family:",";font-weight:400;font-size:0.75rem;letter-spacing:0.01rem;padding-left:3rem;"],o.a.typography.fontFamily);t.a=function(A){var t=A.currentCaseStudySlideData,e=(A.currentSlidePosition,A.onClickHandler),C=A.dogChoice,o=void 0===C?n.c.DUDLEY:C,c=t.questionText,l=t.additionalText,u=(t.videoText1,t.buttonLinks),s=(t.videoUrl1,t.videoThumbName1,{__html:Object(I.i)(c.processed?Object(I.h)(c.processed):c,o)}),p=l?{__html:Object(I.i)(Object(I.h)(l,o))}:{__html:""};return Object(i.c)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"flex-start",minHeight:"100vh",width:"100%"}},Object(i.c)(r,{dangerouslySetInnerHTML:s}),Object(i.c)(a,{dangerouslySetInnerHTML:p}),Object(i.c)("div",{style:{paddingLeft:"2.8rem"}},void 0!==u&&u.length>0&&void 0!==u[0].title&&""!==u[0].title?Object(i.c)(g.a,{id:u[0].id?u[0].id:"button0",buttonText:u[0].title,to:u[0].url,onClickHandler:e}):"",void 0!==u&&u.length>1&&void 0!==u[1].title&&""!==u[1].title?Object(i.c)(g.a,{id:u[1].id?u[1].id:"button1",buttonText:u[1].title,to:u[1].url,onClickHandler:e}):"",void 0!==u&&u.length>2&&void 0!==u[2].title&&""!==u[2].title?Object(i.c)(g.a,{id:u[2].id?u[2].id:"button2",buttonText:u[2].title,to:u[2].url,onClickHandler:e}):"",void 0!==u&&u.length>3&&void 0!==u[3].title&&""!==u[3].title?Object(i.c)(g.a,{id:u[3].id?u[3].id:"button3",buttonText:u[3].title,to:u[3].url,onClickHandler:e}):"",void 0!==u&&u.length>4&&void 0!==u[4].title&&""!==u[4].title?Object(i.c)(g.a,{id:u[4].id?u[4].id:"button4",buttonText:u[4].title,to:u[4].url,onClickHandler:e}):"",void 0!==u&&u.length>5&&void 0!==u[5].title&&""!==u[5].title?Object(i.c)(g.a,{id:u[5].id?u[5].id:"button5",buttonText:u[5].title,to:u[5].url,onClickHandler:e}):""),Object(i.c)("div",{style:{width:"100%"}}," "))}},Hhcu:function(A,t,e){A.exports=e.p+"cdbd0724fc68766aa6289b11bf8b4d06.vtt"},ILeL:function(A,t,e){"use strict";e("q1tI");var g=e("SLu4"),I=e.n(g),C=e("kOA+"),o=e.n(C),n=e("zDcZ"),i=e("qKvR");t.a=function(A){var t,e=A.linkText,g=void 0===e?"Back":e,C=A.to,r=void 0===C?"/":C,a=A.onClickHandler,c=void 0===a?null:a;return Object(i.c)("div",{style:(t={position:"absolute",left:"10%",bottom:"0",width:"150px",height:"100px",display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",textAlign:"center",zIndex:"100",border:"0px solid red"},t.zIndex="10",t)},null===c?Object(i.c)(o.a,{to:r,style:{display:"flex",flexDirection:"row",alignItems:"center",width:"200px",height:"50px",textDecoration:"none",color:n.a.palette.deminBlue.main,fontFamily:n.a.typography.fontFamily,fontWeight:"700"}},Object(i.c)(I.a,null)," ",g):Object(i.c)("a",{href:"#",style:{display:"flex",flexDirection:"row",alignItems:"center",width:"200px",height:"50px",textDecoration:"none",color:n.a.palette.deminBlue.main,fontFamily:n.a.typography.fontFamily,fontWeight:"700"}},Object(i.c)(I.a,null)," ",g))}},MdcO:function(A,t){A.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QCgRXhpZgAATU0AKgAAAAgABQEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAAEyAAIAAAAUAAAAWodpAAQAAAABAAAAbgAAAAAAAABIAAAAAQAAAEgAAAABMjAyMDowNjoyNSAyMjozNDoyNgAAA6ABAAMAAAAB//8AAKACAAMAAAABAhQAAKADAAMAAAABAswAAAAAAAD/4Qs8aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjUuMCI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IjI3NzhYIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wNi0yNVQyMjozNDoyNiswMTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wNi0yNVQyMjozNDoyNiswMTowMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InByb2R1Y2VkIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZmZpbml0eSBQaG90byAoTWFyIDMxIDIwMjApIiBzdEV2dDp3aGVuPSIyMDIwLTA2LTI1VDIyOjM0OjI2KzAxOjAwIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/+0ALFBob3Rvc2hvcCAzLjAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/iAeRJQ0NfUFJPRklMRQABAQAAAdRsY21zBAAAAG1udHJSR0IgWFlaIAfkAAYAGQAVABgAAWFjc3BBUFBMAAAAAEFQUEwAAAAAAAAAAAAAAAAAAAAAAAD21gABAAAAANMtbGNtc3aSxy7WbCvBCeV8RCmhrAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACmRlc2MAAAD8AAAAJmNwcnQAAAEkAAAAI3d0cHQAAAFIAAAAFHJYWVoAAAFcAAAAFGdYWVoAAAFwAAAAFGJYWVoAAAGEAAAAFHJUUkMAAAGYAAAAEGNoYWQAAAGoAAAALGJUUkMAAAGYAAAAEGdUUkMAAAGYAAAAEG1sdWMAAAAAAAAAAQAAAAwAAAAAAAAACgAAABwAMgA3ADcAOABYAAB0ZXh0AAAAAENvcHlyaWdodCBBcHBsZSBJbmMuLCAyMDIwAABYWVogAAAAAAAA89gAAQAAAAEWCFhZWiAAAAAAAABrmQAAN0wAAAE+WFlaIAAAAAAAAGTAAAC7EAAAD4hYWVogAAAAAAAAJnwAAA2kAADCZ3BhcmEAAAAAAAAAAAAB9gRzZjMyAAAAAAABC7cAAAWW///zVwAABykAAP3X///7t////aYAAAPaAADA9v/bAEMAKBweIx4ZKCMhIy0rKDA8ZEE8Nzc8e1hdSWSRgJmWj4CMiqC05sOgqtqtiozI/8va7vX///+bwf////r/5v3/+P/bAEMBKy0tPDU8dkFBdviljKX4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+P/AABEIAswCFAMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAYEAEBAQEBAAAAAAAAAAAAAAAAARESAv/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAXEQEBAQEAAAAAAAAAAAAAAAAAARES/9oADAMBAAIRAxEAPwD6oDTmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIACCKgKAgCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAqoAoioKIooAAAAAAAAAAAAAAAAAAAAAAAAAAioCAioACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKIoqqiooAAAAAAAAAAAAAAAAAAAAAAAAAAioCIqKgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKiiqqKigAAAAAAAAAAAAAAAAAAAAAAAAACKgIioqAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqKKqoqKAAAAAAAAAAAAAAAAAAAAAAAAAAIqAiKioACAAAAAAAAAAAAAAAICiAqiKIAAAAAAAAAAAAKiiqqKigAAAAAAAAAAAAAAAAAAAAAAAAACKgIioqAAgAAAAAAAKAqGIKC4gIJgJU01cXTWdXU1caEiqlURVZAAAAAAAAAAFRRVVFRQAAAAAAAAAAAAAAAAAAAAAAAAABFQERUVAAQAAAFBRFxFA0wVFRrABNXEZrVZq6mM1mtVms61IERYLY1GmYsajnVVFaZABAAAAAAAABUUVVRUUAAAAAAAAAAAAAAAAAAAAAAAAAARUBEVFQAEAAFBGpFAZakEE0axTU1NQa0Z00VUpqAlZraCs4sMUSkaRWo50VFaZABAAAAAAAABUUVVRUUAAAAAAAAAAAAAAAAAAAAAAAAAARUBEVFQBBFENFjQmms1uKampay2WpalrNoNaaxpoN6axpoN6azq6DQigigqUUGoxVAVgAAAAAAAAAAVFFVUVFAAAAAAAAAAAAAAAAAAAAAAAAAAEVARFRUQGbRF1NZtZvpGo6aa5dNSs1uOmpazprLZazaVmgaaiqigAqxFgNRpmNAoCpRUVYxQBpkAEAAAAAAAAFRRVVFRQAAAAAAAAAAAAAAAAAAAAAAAAABFQERUVErHqtVj0hGPVc7WvTnUrcjUrcrlG4y3HSVWYqKVFAZxcXFxUTDGsMBMWCgRpAFVARQGozVAaYABAAAAAAAABUUVVRUUAAAAAAAAAAAAAAAAAAAAAAAAAARUBEqpVRmufpuufpKsc/TFa9VztYrrI1GpXPWpUadJV1iVdBtWNWURtWZV0GhNNVFE00FE00GhFBVRWoxVEVpigAgAAAAAAAAqKKqoqKAAAAAAAAAAAAAAAAAAAAAAAAAAIqAjNaZqozXL061y9s1qOPquVrp7cfTNdovSz056So1jtPTU9OMqz0Mu09NSuMrUojtKuuUq6qOumueroN6uueroN6rMWA0sRQaisq1GKqoKxVAVAAAAAAAABUUVVRUUAAAAAAAAAAAAAAAAAAAAAAAAAARUBGa0zVRmuXp1rn6iVuPP7cvUej1HH1GK6yuNG75ZxGtRqVMBGpWpWFVl0lXXONQRvV1iNQGo1GY1AajUZi6DRrOmqjerK561K0xa6RWY1FZURRAAAAAAAABUUVVRUUAAAAAAAAAAAAAAAAAAAAAAAAAARUBGa0iozWLHSs2Isrj6jnfL0WMXymNSvPfLN8vRfLN8pjXThymO18s2C65YN2JiCLBYCxqJFVGorOmhremsdJ0uJrpqaxqyrjOukrcco6+VRuNRmNwQUBAAAAAAAABUUVVRUUAAAAAAAAAAAAAAAAAAAAAAAAAARUBEVFRBUETExoFc75S+XTEsRdcb5c/Ud/UcvSNSuVjLXpi0xdFZ00xNb01jU1cNdNTpjTVxNb01lqQRY3Ikjp5gL5jr5jPmOkiauLIpFEsAFQAEAAAAAAFRRVVFRQAAAAAAAAAAAAAAAAAAAAAAAAABFQERUVAAQABEqpRWPTj7dfTl7RXH1XO1v050VNNDFQ0XFkERqRZ5ank1cSRueVnl0nlNXE8+XTzCRqRNaxZG4zGkVQFjNAFYoAqAAAAAACooqqiooAAAAAAAAAAAAAAAAAAAAAAAAAAioCIqKgAIAAiVSpVjn6cvUdrHP1GLW5Hn9Rzsej15YvklXHHlZ5dOWp5a1Mc55anlueWp5NMYnlqeW5FkTVxJGpFkUUkUVFFRQURVjNUBpigCsgAAAAACooqqiooAAAAAAAAAAAAAAAAAAAAAAAAAAioCIqKgAIAAIqM1qM1mxus1yrrHOxnG6iRWOWpFVuImLiiiKACoA0IoKqKAoKlUBqMUAVkAEAAAAFRRVVFRQAAAAAAAAAAAAAAAAAAAAAAAAABFQERUVAAQAARUZrUSs1qsVzsdIzUWspjSqyutIommqKmppoNaazq6DWqw1AaVmNQFVFEUBpmgCsUAVAAAABUUVVRUUAAAAAAAAAAAAAAAAAAAAAAAAAARUBEVFQAEAAEVEWM1mtVms10jNZarNRpDRAXTWdNBdNTTQa0ZWA1GozFgNxYzGoCxplYDQiqlVFFjFiANMgAgAAqKKqoqKAAAAAAAAAAAAAAAAAAAAAAAAAAIqAiKioACAAIBUWM1mtVis1uJWKtrNqNialqWgupqamg1prGtSg1GozGoDUWMqDUaY1dBtdY1dBuVZWJVlBsTVWM0AaYoArIAAqKKqoqKAAAAAAAAAAAAAAAAAAAAAAAAAAIqAiKioACAAIlVKixmsVqsVmukZtYtWsVGi1m1LWbQXTWdTQblalc43AdI1GIsoNrrGroN6axq6DemueroOkrUrlK1KDrKusStSqlaVlVjFURWmQAQVFFVUVFAAAAAAAAAAAAAAAAAAAAAAAAAAEVARFRUABAAESqlRYxXP06Vis1uOdYrpWLEbc6xXSxiwGBagNRqMxqA3F1k0GtXWNNBvU1i1L6BvpenLVlB2lblcZW5QdpWpXKVuUHSVWJWpVZsaE1WmLFEVWRUUVVRUUAAAAAAAAAAAAE00FE00FE00FE00FE00FE00FE0BUEAQFQEBFEAEqpUWM1it1mpW452MWOlZrLblYzY6WMWIrnYY1YYokjUJGsERFqUE1LUtZtBq1nUtQGtalYjcBuNysRuA3K3K5xqUHSVqVzlalEblajEajUYrSoNMqqKCqiooAAAAAACAAgGmpazaK1prFrN9A6dJ0530nQOvR049p2Dv0dOHZ2Dv0dOHa9g79HTh2vYO3S9OHa9g69GuXadiOumuXZ0I66a5dHSjrprn0dA6ams9JrLUjVrNTU1GpErNaSo0xWa3WbEVjFkXFkBJFxrCwRzrHp09OXpRi1m0tZBVkSN+YCyNyEjcgEixcAFiANytRiNxUrcbjEbixitRUVpkVFBVRUUAAAAAARUBEqpQZrNbsZsFYrNrdjFiDNrNrVjNgM2mrYmCppphgGrqYYC9L0zhgNdHTOGA10dMoI10dMCjfS9OWmiOvS9OWrorr0vTlqystR01dYlWI00gIJWWgVnGpBQErTNVHL05enb1HL1FTXKsul8pyGkjp5jMjp5iDUjciSNCoKYJqGNYsi4mpI1ISNyLjNqyNxJGorIqKqCooqqiooAAAAAAACI0AxiWN4YDnYzfLriYK5XyzfLvynIOHCcO/JyDhwcO/JyDhwcO/JyDhwcO/KcoOHCcPRynIOHLN8vTyzfCjz8py9F8JwI8/Jy78JwDjyY7cHIa5Ysjpycpi6xI1F5XExdQawwxdZMawww1nFXFwxdZSxvDDE1ysYvl35TlWdee+E4ejg4U1wnlueXTk5TF1mRcbnleTDWMXG+VwxNYnlqeWpFxU1mRqRcVUTFARQAFRRVVFRQAAAAAAAAAAAAAEwxQEwxQEwxQEwxQEwxQGcMaAYxMbQGMTlsxUc+TlvDAY5Tl0wwHPk5dMTAY5MbwxDWMMbwwXWMMbwwNYwxvDA1jFxrDA1nDlvDFRjk5bwwHPleW8MBjFxrDAZxcXAExVBEUAAAAAFAVVRUUAAAAAAAAAAAAAAAAAAAAAAAAAARUBBQRkUUQUBDFAQUBDFATDFATDFATDFAQUBBQEFAQUBBQEFAQUBBQEUUEUEBQFAAAAAAAAAAAAAAAAAAAAAAAAAAAAEUBBQEFAQUBBQEFAQUBBQEFAQUBBQEFAQUBBQEFAQUBBQEFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/2Q=="},V33x:function(A,t,e){A.exports=e.p+"96eadf4b9775fc13c07d3dea4f3736f2.vtt"},ZaYD:function(A,t,e){A.exports=e.p+"e3600c7d1348f8aa83c2120fd1c3a72b.vtt"},tzB8:function(A,t,e){"use strict";var g=e("q1tI"),I=e.n(g),C=(e("8uUf"),e("A0gv")),o=e.n(C),n=(e("zDcZ"),e("/rRK"),e("ZaYD"),e("Hhcu"),e("V33x"),e("vOnD")),i=(e("MdcO"),e("qKvR")),r=(n.default.div.withConfig({displayName:"FixedSizeVideoWidget__PoppySitting02",componentId:"ex3c00-0"})(["height:738px;width:570px;"]),I.a.forwardRef((function(A,t){var e=A.currentCaseStudySlideData,g=(e.isCorrectAnswer,e.animationVideoName,e.mainImage,I.a.useState(!1)),C=g[0],n=g[1];return Object(i.c)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"flex-start",minHeight:"100vh",width:"100%",backgroundColor:"transparent"}},Object(i.c)("video",{autoPlay:!0,playsInline:!0,muted:!0,onLoadedData:function(){n(!0)},loop:!1,width:"100%",height:"560px",style:{opacity:C?1:0,width:"100%",height:"560px"}},Object(i.c)("source",{src:o.a,type:"video/mp4"})))})));t.a=r}}]);
//# sourceMappingURL=462b26e1e304ba4d24372cccc794024301126c2b-0fcc4e857484e12a5e8e.js.map