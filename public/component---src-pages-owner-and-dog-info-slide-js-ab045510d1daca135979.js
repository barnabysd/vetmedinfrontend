(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"/EAt":function(e,t,i){"use strict";var n=i("Ff2n"),a=i("wx14"),o=i("q1tI"),r=(i("17x9"),i("iuhU")),l=i("H2TA"),s=i("DbRV"),c=o.forwardRef((function(e,t){var i=e.classes,l=e.className,c=e.component,d=void 0===c?"table":c,p=e.padding,u=void 0===p?"default":p,h=e.size,g=void 0===h?"medium":h,f=e.stickyHeader,m=void 0!==f&&f,b=Object(n.a)(e,["classes","className","component","padding","size","stickyHeader"]),v=o.useMemo((function(){return{padding:u,size:g,stickyHeader:m}}),[u,g,m]);return o.createElement(s.a.Provider,{value:v},o.createElement(d,Object(a.a)({role:"table"===d?null:"table",ref:t,className:Object(r.default)(i.root,l,m&&i.stickyHeader)},b)))}));t.a=Object(l.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(a.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(c)},"3PeG":function(e,t,i){"use strict";var n=i("Ff2n"),a=i("wx14"),o=i("q1tI"),r=(i("17x9"),i("iuhU")),l=i("H2TA"),s=i("NqtD"),c=i("ye/S"),d=i("DbRV"),p=i("tgoA"),u=o.forwardRef((function(e,t){var i,l,c=e.align,u=void 0===c?"inherit":c,h=e.classes,g=e.className,f=e.component,m=e.padding,b=e.scope,v=e.size,y=e.sortDirection,w=e.variant,x=Object(n.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),O=o.useContext(d.a),E=o.useContext(p.a),j=E&&"head"===E.variant;f?(l=f,i=j?"columnheader":"cell"):l=j?"th":"td";var A=b;!A&&j&&(A="col");var P=m||(O&&O.padding?O.padding:"default"),C=v||(O&&O.size?O.size:"medium"),k=w||E&&E.variant,M=null;return y&&(M="asc"===y?"ascending":"descending"),o.createElement(l,Object(a.a)({ref:t,className:Object(r.default)(h.root,h[k],g,"inherit"!==u&&h["align".concat(Object(s.a)(u))],"default"!==P&&h["padding".concat(Object(s.a)(P))],"medium"!==C&&h["size".concat(Object(s.a)(C))],"head"===k&&O&&O.stickyHeader&&h.stickyHeader),"aria-sort":M,role:i,scope:A},x))}));t.a=Object(l.a)((function(e){return{root:Object(a.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(c.d)(Object(c.b)(e.palette.divider,1),.88):Object(c.a)(Object(c.b)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0px 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(u)},CczQ:function(e,t,i){var n=i("P8UN"),a=Math.abs;n(n.S,"Math",{hypot:function(e,t){for(var i,n,o=0,r=0,l=arguments.length,s=0;r<l;)s<(i=a(arguments[r++]))?(o=o*(n=s/i)*n+1,s=i):o+=i>0?(n=i/s)*n:i;return s===1/0?1/0:s*Math.sqrt(o)}})},DbRV:function(e,t,i){"use strict";var n=i("q1tI"),a=n.createContext();t.a=a},Imu7:function(e,t,i){"use strict";var n=i("wx14"),a=i("Ff2n"),o=i("q1tI"),r=(i("17x9"),i("iuhU")),l=i("H2TA"),s=i("tgoA"),c={variant:"head"},d=o.forwardRef((function(e,t){var i=e.classes,l=e.className,d=e.component,p=void 0===d?"thead":d,u=Object(a.a)(e,["classes","className","component"]);return o.createElement(s.a.Provider,{value:c},o.createElement(p,Object(n.a)({className:Object(r.default)(i.root,l),ref:t,role:"thead"===p?null:"rowgroup"},u)))}));t.a=Object(l.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(d)},SLu4:function(e,t,i){"use strict";var n=i("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("q1tI")),o=(0,n(i("8/g6")).default)(a.default.createElement("path",{d:"M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42a.9959.9959 0 00-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"}),"ArrowBackRounded");t.default=o},Spfr:function(e,t,i){"use strict";var n=i("q1tI"),a=i.n(n),o=(i("YbXK"),i("cFtU"),i("q8oJ"),i("8npG"),i("CczQ"),i("E5k/"),i("LagC"),function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)}),r=function(){return(r=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var a in t=arguments[i])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},l=r(r({scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1},{tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:null,tiltAngleXManual:null,tiltAngleYManual:null}),{glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1});function s(e,t,i,n,a){return void 0===a&&(a=null),a&&clearTimeout(a),e.style.transition=t+" "+i+"ms "+n,setTimeout((function(){e.style.transition=""}),i)}function c(e,t,i){return Math.min(Math.max(e,t),i)}var d=function(){var e=this;this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=function(t,i){e.updateTilt(t,i),e.updateTiltManualInput(t,i),e.updateTiltReverse(i),e.updateTiltLimits(i)},this.updateTilt=function(t,i){var n=t.yPercentage,a=i.tiltMaxAngleY;e.tiltAngleX=t.xPercentage*i.tiltMaxAngleX/100,e.tiltAngleY=n*a/100*-1},this.updateTiltManualInput=function(t,i){var n=i.tiltAngleXManual,a=i.tiltAngleYManual,o=i.tiltMaxAngleX,r=i.tiltMaxAngleY;null===n&&null===a||(e.tiltAngleX=null!==n?n:0,e.tiltAngleY=null!==a?a:0,t.xPercentage=100*e.tiltAngleX/o,t.yPercentage=100*e.tiltAngleY/r)},this.updateTiltReverse=function(t){var i=t.tiltReverse?-1:1;e.tiltAngleX=i*e.tiltAngleX,e.tiltAngleY=i*e.tiltAngleY},this.updateTiltLimits=function(t){var i=t.tiltAxis;e.tiltAngleX=c(e.tiltAngleX,-90,90),e.tiltAngleY=c(e.tiltAngleY,-90,90),i&&(e.tiltAngleX="x"===i?e.tiltAngleX:0,e.tiltAngleY="y"===i?e.tiltAngleY:0)},this.updateTiltAnglesPercentage=function(t){var i=t.tiltMaxAngleY;e.tiltAngleXPercentage=e.tiltAngleX/t.tiltMaxAngleX*100,e.tiltAngleYPercentage=e.tiltAngleY/i*100},this.render=function(t){t.style.transform+="rotateX("+e.tiltAngleX+"deg) rotateY("+e.tiltAngleY+"deg) "}},p=function(e){var t=this;this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=function(e){return{width:2*e.width,height:2*e.height}},this.setSize=function(e){var i=t.calculateGlareSize(e);t.glareEl.style.width=i.width+"px",t.glareEl.style.height=i.height+"px"},this.update=function(e,i,n,a){t.updateAngle(e,i.glareReverse),t.updateOpacity(e,i,n,a)},this.updateAngle=function(e,i){var n=e.xPercentage,a=180/Math.PI,o=n?Math.atan2(e.yPercentage,-n)*a:0;t.glareAngle=o-(i?180:0)},this.updateOpacity=function(e,i,n,a){var o,r=e.xPercentage,l=e.yPercentage,s=i.glareReverse,d=i.glareMaxOpacity,p=n?-1:1,u=a?-1:1;switch(i.glarePosition){case"top":o=-r*p;break;case"right":o=l*u;break;case"bottom":o=r*p;break;case"left":o=-l*u;break;case"all":o=Math.hypot(r,l);break;default:o=r*p}var h=c(o=s?-o:o,0,100);t.glareOpacity=h*d/100},this.render=function(e){var i=e.glareColor;t.glareEl.style.transform="rotate("+t.glareAngle+"deg) translate(-50%, -50%)",t.glareEl.style.opacity=t.glareOpacity.toString(),t.glareEl.style.background="linear-gradient(0deg, rgba(255,255,255,0) 0%, "+i+" 100%)"},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";var i=this.calculateGlareSize(e),n={position:"absolute",top:"50%",left:"50%","transform-origin":"0% 0%","pointer-events":"none",width:i.width+"px",height:i.height+"px"};Object.assign(this.glareWrapperEl.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden"}),Object.assign(this.glareEl.style,n)},u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},transitionTimeoutId:void 0,updateAnimationId:null,childrenImgsCounter:0,childrenImgsLength:0,scale:1},t.tilt=null,t.glare=null,t.loadWrapperAndChildElements=function(){var e=Array.from(t.wrapperEl.node.getElementsByTagName("img"));t.wrapperEl.childrenImgsLength=e.length,0!==t.wrapperEl.childrenImgsLength?e.forEach((function(e){e.complete?t.allImagesLoaded():e.addEventListener("load",t.allImagesLoaded)})):t.setSize()},t.allImagesLoaded=function(){t.wrapperEl.childrenImgsCounter++,t.wrapperEl.childrenImgsCounter===t.wrapperEl.childrenImgsLength&&t.setSize()},t.setSize=function(){t.setWrapperElSize(),t.glare&&t.glare.setSize(t.wrapperEl.size)},t.mainLoop=function(e){null!==t.wrapperEl.updateAnimationId&&cancelAnimationFrame(t.wrapperEl.updateAnimationId),t.processInput(e),t.update(e.type),t.wrapperEl.updateAnimationId=requestAnimationFrame(t.renderFrame)},t.onEnter=function(e){var i=t.props.onEnter;t.wrapperEl.node.style.willChange="transform",t.setTransition(),i&&i(e.type)},t.onMove=function(e){t.mainLoop(e),t.emitOnMove(e)},t.onLeave=function(e){var i=t.props.onLeave;if(t.setTransition(),i&&i(e.type),t.props.reset){var n=new CustomEvent("autoreset");t.onMove(n)}},t.processInput=function(e){var i=t.props.scale;switch(e.type){case"mousemove":t.wrapperEl.clientPosition.x=e.pageX,t.wrapperEl.clientPosition.y=e.pageY,t.wrapperEl.scale=i;break;case"touchmove":t.wrapperEl.clientPosition.x=e.touches[0].pageX,t.wrapperEl.clientPosition.y=e.touches[0].pageY,t.wrapperEl.scale=i;break;case"deviceorientation":t.processInputDeviceOrientation(e),t.wrapperEl.scale=i;break;case"autoreset":var n=t.props,a=n.tiltAngleYInitial/n.tiltMaxAngleY*100;t.wrapperEl.clientPosition.xPercentage=c(n.tiltAngleXInitial/n.tiltMaxAngleX*100,-100,100),t.wrapperEl.clientPosition.yPercentage=c(a,-100,100),t.wrapperEl.scale=1}},t.processInputDeviceOrientation=function(e){if(e.gamma&&e.beta&&t.props.gyroscope){var i=t.props,n=i.tiltMaxAngleY,a=e.gamma;t.wrapperEl.clientPosition.xPercentage=e.beta/i.tiltMaxAngleX*100,t.wrapperEl.clientPosition.yPercentage=a/n*100,t.wrapperEl.clientPosition.xPercentage=c(t.wrapperEl.clientPosition.xPercentage,-100,100),t.wrapperEl.clientPosition.yPercentage=c(t.wrapperEl.clientPosition.yPercentage,-100,100)}},t.update=function(e){var i=t.props,n=i.tiltEnable,a=i.flipVertically,o=i.flipHorizontally;t.updateClientInput(e),n&&t.tilt.update(t.wrapperEl.clientPosition,t.props),t.updateFlip(),t.tilt.updateTiltAnglesPercentage(t.props),t.glare&&t.glare.update(t.wrapperEl.clientPosition,t.props,a,o)},t.updateClientInput=function(e){if("autoreset"!==e&&"deviceorientation"!==e){var i,n;if(t.props.trackOnWindow){var a=t.wrapperEl.clientPosition,o=a.x;i=a.y/window.innerHeight*200-100,n=o/window.innerWidth*200-100}else{var r=t.wrapperEl,l=r.size,s=r.clientPosition;i=(s.y-l.top)/l.height*200-100,n=((o=s.x)-l.left)/l.width*200-100}t.wrapperEl.clientPosition.xPercentage=c(i,-100,100),t.wrapperEl.clientPosition.yPercentage=c(n,-100,100)}},t.updateFlip=function(){var e=t.props,i=e.flipHorizontally;e.flipVertically&&(t.tilt.tiltAngleX+=180,t.tilt.tiltAngleY*=-1),i&&(t.tilt.tiltAngleY+=180)},t.renderFrame=function(){t.resetWrapperElTransform(),t.renderPerspective(),t.tilt.render(t.wrapperEl.node),t.renderScale(),t.glare&&t.glare.render(t.props)},t}return function(e,t){function i(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}(t,e),t.prototype.componentDidMount=function(){this.loadWrapperAndChildElements(),this.tilt=new d,this.initGlare(),this.addEventListeners();var e=new CustomEvent("autoreset");this.mainLoop(e);var t=new CustomEvent("initial");this.emitOnMove(t)},t.prototype.componentWillUnmount=function(){clearTimeout(this.wrapperEl.transitionTimeoutId),null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()},t.prototype.componentDidUpdate=function(){var e=this.props;if(!(e.onMove||e.onEnter||e.onLeave)){var t=new CustomEvent("propchange");this.mainLoop(t)}},t.prototype.addEventListeners=function(){var e=this.props,t=e.trackOnWindow,i=e.gyroscope;if(window.addEventListener("resize",this.setSize),t&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),i){if(!window.DeviceOrientationEvent)return void console.error("Browser doesn't support Device Orientation.");window.addEventListener("deviceorientation",this.onMove)}},t.prototype.removeEventListeners=function(){var e=this.props,t=e.trackOnWindow,i=e.gyroscope;window.removeEventListener("resize",this.setSize),t&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),i&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)},t.prototype.setWrapperElSize=function(){var e=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=e.left+window.scrollX,this.wrapperEl.size.top=e.top+window.scrollY},t.prototype.initGlare=function(){this.props.glareEnable&&(this.glare=new p(this.wrapperEl.size),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))},t.prototype.emitOnMove=function(e){var t=this.props.onMove;if(t){var i=0,n=0;this.glare&&(i=this.glare.glareAngle,n=this.glare.glareOpacity),t(this.tilt.tiltAngleX,this.tilt.tiltAngleY,this.tilt.tiltAngleXPercentage,this.tilt.tiltAngleYPercentage,i,n,e.type)}},t.prototype.resetWrapperElTransform=function(){this.wrapperEl.node.style.transform=""},t.prototype.renderPerspective=function(){this.wrapperEl.node.style.transform+="perspective("+this.props.perspective+"px) "},t.prototype.renderScale=function(){var e=this.wrapperEl.scale;this.wrapperEl.node.style.transform+="scale3d("+e+","+e+","+e+")"},t.prototype.setTransition=function(){var e=this.props,t=e.transitionSpeed,i=e.transitionEasing;this.wrapperEl.transitionTimeoutId=s(this.wrapperEl.node,"all",t,i,this.wrapperEl.transitionTimeoutId),this.glare&&(this.glare.transitionTimeoutId=s(this.glare.glareEl,"opacity",t,i,this.glare.transitionTimeoutId))},t.prototype.render=function(){var e=this,t=this.props;return a.a.createElement("div",{ref:function(t){return e.wrapperEl.node=t},onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:t.className,style:t.style},t.children)},t.defaultProps=l,t}(n.PureComponent),h=i("8uUf"),g=i("qKvR");t.a=function(e){var t=e.imgName,i=void 0===t?"oakley.png":t,n=e.width,a=void 0===n?"300px":n,o=e.height,r=void 0===o?"300px":o;return Object(g.c)(u,null,Object(g.c)("div",{style:{height:r,width:a,backgroundColor:"none"}},Object(g.c)(h.a,{imgName:i})))}},"Uf6+":function(e,t,i){"use strict";var n=i("wx14"),a=i("Ff2n"),o=i("q1tI"),r=(i("17x9"),i("iuhU")),l=i("H2TA"),s=i("tgoA"),c={variant:"body"},d=o.forwardRef((function(e,t){var i=e.classes,l=e.className,d=e.component,p=void 0===d?"tbody":d,u=Object(a.a)(e,["classes","className","component"]);return o.createElement(s.a.Provider,{value:c},o.createElement(p,Object(n.a)({className:Object(r.default)(i.root,l),ref:t,role:"tbody"===p?null:"rowgroup"},u)))}));t.a=Object(l.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(d)},cbsx:function(e,t,i){"use strict";var n=i("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("q1tI")),o=(0,n(i("8/g6")).default)(a.default.createElement("path",{d:"M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z"}),"ArrowForwardRounded");t.default=o},nCZa:function(e,t,i){"use strict";var n=i("wx14"),a=i("Ff2n"),o=i("q1tI"),r=(i("17x9"),i("iuhU")),l=i("H2TA"),s=o.forwardRef((function(e,t){var i=e.classes,l=e.className,s=e.component,c=void 0===s?"div":s,d=Object(a.a)(e,["classes","className","component"]);return o.createElement(c,Object(n.a)({ref:t,className:Object(r.default)(i.root,l)},d))}));t.a=Object(l.a)({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(s)},qn43:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return de})),i.d(t,"pageQuery",(function(){return pe}));var n=i("q1tI"),a=i.n(n),o=i("Bl7J"),r=(i("Wbzz"),i("tRbT")),l=(i("GMqj"),i("8uUf")),s=i("eELa"),c=i("kT3S"),d=i("v564"),p=i("MPxq"),u=i("r5vi"),h=i("R/WZ"),g=(i("1w3K"),i("kOA+")),f=i.n(g),m=i("SLu4"),b=i.n(m),v=i("cbsx"),y=i.n(v),w=i("H2TA"),x=i("/EAt"),O=i("Uf6+"),E=i("3PeG"),j=i("nCZa"),A=i("Imu7"),P=i("sRsu"),C=i("kKAo"),k=i("zDcZ"),M=i("vOnD"),T=i("mwIZ"),z=i.n(T),I=i("a5sw"),L=(i("82Oa"),i("qKvR")),S=M.default.div.withConfig({displayName:"DogDetailTable__TableHolder",componentId:"sc-11dtto8-0"})(["background-color:",";border-radius:2rem 2rem 2rem 2rem;border-width-left:2rem;border-color:",";width:500px;"],k.a.palette.skyBlue.main,k.a.palette.skyBlue.main),_=M.default.div.withConfig({displayName:"DogDetailTable__PanelTitle",componentId:"sc-11dtto8-1"})(["font-family:",";font-size:",";font-weight:",";background-color:",";transform:rotate(270deg);color:#30c1e2;border-radius:2rem 2rem 2rem 0rem;width:406px;height:574px;position:absolute;left:59px;top:-84px;padding:1rem;box-shadow:-8px 6px 5px rgba(35,42,54,0.2);"],k.a.overrides.MuiTypography.h1.fontFamily,k.a.overrides.MuiTypography.h1.fontSize,k.a.overrides.MuiTypography.h1.fontWeight,k.a.palette.skyBlue.main),N=Object(w.a)((function(e){var t;return{head:(t={backgroundColor:"white",color:k.a.palette.midnightBlue.main,fontWeight:"700",fontFamily:k.a.overrides.MuiTypography.h1.fontFamily,fontSize:k.a.overrides.MuiTypography.h1.fontSize},t.fontWeight=k.a.overrides.MuiTypography.h1.fontWeight,t),body:{backgroundColor:"#c6f5fe",color:k.a.palette.raven.main,fontFamily:k.a.overrides.MuiTypography.body1.fontFamily,fontSize:k.a.overrides.MuiTypography.body1.fontSize,fontWeight:k.a.overrides.MuiTypography.body1.fontWeight,padding:"1rem",margin:"1rem"}}}))(E.a),R=Object(w.a)((function(e){return{head:{backgroundColor:"#c6f5fe",color:k.a.palette.raven.main,fontFamily:k.a.overrides.MuiTypography.h4.fontFamily,fontSize:k.a.overrides.MuiTypography.h4.fontSize,fontWeight:k.a.overrides.MuiTypography.h4.fontWeight},body:{backgroundColor:"#c6f5fe",color:k.a.palette.raven.main,fontFamily:k.a.overrides.MuiTypography.h5.fontFamily,fontSize:k.a.overrides.MuiTypography.h5.fontSize,fontWeight:k.a.overrides.MuiTypography.h5.fontWeight,padding:"1rem",margin:"1rem"}}}))(E.a),W=Object(w.a)((function(e){return{head:{backgroundColor:"#effcfe",color:k.a.palette.raven.main},body:{backgroundColor:"#effcfe",color:k.a.palette.raven.main,fontFamily:k.a.overrides.MuiTypography.body1.fontFamily,fontSize:k.a.overrides.MuiTypography.body1.fontSize,fontWeight:k.a.overrides.MuiTypography.body1.fontWeight,padding:"1rem",margin:"1rem"}}}))(E.a),Y=Object(w.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:"white"}}}}))(P.a),X=Object(h.a)({table:{minWidth:"200px"}});function H(e){var t=e.resources,i=e.rowPointer,n=void 0===i?1:i,a=X();function o(e,t){return{rowTitle:e,rowValue:t}}var r=[o(t.field_tableitemtitle1,Object(I.c)(t.field_tableitemcontent1.processed)),o(t.field_tableitemtitle2,Object(I.c)(t.field_tableitemcontent2.processed)),o(t.field_tableitemtitle3,Object(I.c)(t.field_tableitemcontent3.processed)),o(t.field_tableitemtitle4,Object(I.c)(t.field_tableitemcontent4.processed)),o(t.field_tableitemtitle5,Object(I.c)(t.field_tableitemcontent5.processed)),o(t.field_tableitemtitle6,Object(I.c)(t.field_tableitemcontent6.processed))],l=[o(t.field_tableitemtitle7,Object(I.c)(t.field_tableitemcontent7.processed)),o(t.field_tableitemtitle8,Object(I.c)(t.field_tableitemcontent8.processed))];return 2===n&&l,Object(L.c)(S,null,Object(L.c)(_,null,t.field_paneltitle),Object(L.c)(j.a,{component:C.a,style:{borderRadius:"0 2rem 0 0",position:"relative",height:"406px",overflow:"hidden"}},Object(L.c)(x.a,{className:a.table,"aria-label":t.field_tabletitle,style:{border:"1px solid red"}},Object(L.c)(A.a,null,Object(L.c)(P.a,null,Object(L.c)(N,{colSpan:2,style:{border:"2px solid white"}}," ",t.field_tabletitle))),Object(L.c)(O.a,null,r.map((function(e){return Object(L.c)(Y,{key:e.rowTitle},Object(L.c)(R,{component:"th",scope:"row",style:{border:"2px solid white"}},"   ",e.rowTitle),Object(L.c)(W,{align:"left",style:{border:"2px solid white"}},"    ",e.rowValue))}))))))}var D=i("Spfr"),F=(i("E5k/"),i("6yBS")),V=(i("pJf4"),i("wx14")),q=i("Ff2n"),B=(i("17x9"),i("iuhU")),U=i("4ppn"),$=i("5AJ6"),G=Object($.a)(n.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),J=Object($.a)(n.createElement("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked");var Z=Object(w.a)((function(e){return{root:{position:"relative",display:"flex","&$checked $layer":{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}},layer:{left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},checked:{}}}),{name:"PrivateRadioButtonIcon"})((function(e){var t=e.checked,i=e.classes,a=e.fontSize;return n.createElement("div",{className:Object(B.default)(i.root,t&&i.checked)},n.createElement(G,{fontSize:a}),n.createElement(J,{fontSize:a,className:i.layer}))})),K=i("ye/S"),Q=i("NqtD"),ee=i("x6Ns");var te=n.createContext();var ie=n.createElement(Z,{checked:!0}),ne=n.createElement(Z,null),ae=n.forwardRef((function(e,t){var i=e.checked,a=e.classes,o=e.color,r=void 0===o?"secondary":o,l=e.name,s=e.onChange,c=e.size,d=void 0===c?"medium":c,p=Object(q.a)(e,["checked","classes","color","name","onChange","size"]),u=n.useContext(te),h=i,g=Object(ee.a)(s,u&&u.onChange),f=l;return u&&(void 0===h&&(h=u.value===e.value),void 0===f&&(f=u.name)),n.createElement(U.a,Object(V.a)({color:r,type:"radio",icon:n.cloneElement(ne,{fontSize:"small"===d?"small":"default"}),checkedIcon:n.cloneElement(ie,{fontSize:"small"===d?"small":"default"}),classes:{root:Object(B.default)(a.root,a["color".concat(Object(Q.a)(r))]),checked:a.checked,disabled:a.disabled},name:f,checked:h,onChange:g,ref:t},p))})),oe=Object(w.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(K.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(K.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiRadio"})(ae);function re(){return(re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var le=Object(w.a)({root:{color:F.a[400],"&$checked":{color:F.a[600]}},checked:{}})((function(e){return Object(L.c)(oe,re({color:"default"},e))}));function se(){var e=a.a.useState("a"),t=e[0],i=e[1],n=function(e){i(e.target.value)};return Object(L.c)("div",null,Object(L.c)(oe,{checked:"a"===t,onChange:n,value:"a",name:"radio-button-demo",inputProps:{"aria-label":"A"}}),Object(L.c)(oe,{checked:"b"===t,onChange:n,value:"b",name:"radio-button-demo",inputProps:{"aria-label":"B"}}),Object(L.c)(le,{checked:"c"===t,onChange:n,value:"c",name:"radio-button-demo",inputProps:{"aria-label":"C"}}),Object(L.c)(oe,{checked:"d"===t,onChange:n,value:"d",color:"default",name:"radio-button-demo",inputProps:{"aria-label":"D"}}),Object(L.c)(oe,{checked:"e"===t,onChange:n,value:"e",color:"default",name:"radio-button-demo",inputProps:{"aria-label":"E"},size:"small"}))}var ce=Object(h.a)((function(e){return{root:{display:"flex",flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));function de(e){var t,i=e.data,a=z()(i,"nodeDogoptions");console.log(a),a||(a=[{field_headertextline3:"LISTEN.",field_bottombodytext:{processed:"<p>Build your canine heart disease management skills and prolong the lives of dogs with the help of this simple, fun digital tool.</p>"},field_bottomtitle:{processed:"<p>This activity will earn you 12 minutes of CPD points</p>"},field_buttonlinks:[{title:"Start",uri:"/case-studies-options/"}],field_toprighttext:[{processed:"You will need sound for part of this activity."}]}]);var h=Object(u.a)(["hasConsentSet","userChoice","dogChoice"]),g=(h[0],h[1],h[2],Object(n.useState)({renderUserChoice:!1,renderLoader:!1,renderCookieBanner:!1,isPanelVisible1:!0,isPanelVisible2:!1,isPanelVisible3:!1})),m=g[0],v=g[1];return Object(L.c)(o.a,null,m.renderUserChoice?Object(L.c)(p.a,{unmountMe:function(){v({renderUserChoice:!1,renderLoader:!1,renderCookieBanner:!1,isPanelVisible1:!1,isPanelVisible2:!1,isPanelVisible3:!1})}}):"",m.renderLoader?Object(L.c)(c.a,{unmountMe:function(){v({renderUserChoice:!1,renderLoader:!1,renderCookieBanner:!1,isPanelVisible1:!1,isPanelVisible2:!1,isPanelVisible3:!1})}}):"",m.renderCookieBanner?Object(L.c)(d.a,{unmountMe:function(){v({renderUserChoice:!1,renderLoader:!1,renderCookieBanner:!1,isPanelVisible1:!1,isPanelVisible2:!1,isPanelVisible3:!1})}}):"",Object(L.c)(s.a,null),Object(L.c)("div",{className:ce().root},Object(L.c)(r.a,((t={container:!0,spacing:0}).spacing=0,t.justify="center",t.style={border:"1px solid black",minHeight:"100vh",width:"100%",maxWidth:"3000px"},t),Object(L.c)(r.a,{item:!0,xs:12,sm:8,align:"center",style:{border:"0px solid red"}},Object(L.c)("div",{style:{position:"relative",width:"100%",minHeight:"100%",border:"0px solid red"}},Object(L.c)("div",{style:{position:"absolute",left:"25%",top:"10%",width:"600px",height:"100%",zIndex:m.isPanelVisible1?3:2}},Object(L.c)(H,{resources:a})),Object(L.c)("div",{style:{position:"absolute",left:"30%",top:"15%",width:"600px",height:"100%",zIndex:m.isPanelVisible2?3:2}},Object(L.c)(H,{resources:a,rowPointer:2})),Object(L.c)("div",{style:{position:"absolute",left:"50%",bottom:"10%",width:"300px",height:"30px"}},Object(L.c)(se,null)),Object(L.c)(se,null))),Object(L.c)(r.a,{item:!0,xs:12,sm:4,align:"center",style:{border:"0px solid red"}},Object(L.c)("div",{"data-acive":m.isPanelVisible1,style:{display:m.isPanelVisible1?"block":"none",position:"relative",margin:"auto",width:"75%",minHeight:"100%",padding:"2rem",border:"0px solid red"}},Object(L.c)("div",{style:{position:"absolute",left:"-200px",top:0}},Object(L.c)(D.a,{axis:"Y",imgName:"mrs_jenkins_pose_01@3x.png",height:"600px",width:"600px"})),Object(L.c)("div",{style:{position:"absolute",left:"-150px",top:"10%"}},Object(L.c)(D.a,{axis:"Y",imgName:"dudley_standing_pose_02@3x.png",height:"600px",width:"600px"}))),Object(L.c)("div",{"data-acive":m.isPanelVisible2,style:{display:m.isPanelVisible1?"block":"none",position:"relative",margin:"auto",width:"75%",minHeight:"100%",padding:"2rem",border:"5px solid red"}},Object(L.c)(l.a,{imgName:"reggieOwner.png"})),Object(L.c)("div",{"data-acive":m.isPanelVisible3,style:{display:m.isPanelVisible1?"block":"none",position:"relative",margin:"auto",width:"75%",minHeight:"100%",padding:"2rem",border:"5px solid red"}},Object(L.c)(l.a,{imgName:"reggieOwner.png"}))))),Object(L.c)("div",{style:{position:"absolute",right:"0",bottom:"0",width:"150px",height:"100px",display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",textAlign:"center",border:"0px solid red"}},Object(L.c)(f.a,{style:{display:"flex",flexDirection:"row",alignItems:"center",width:"200px",height:"50px",textDecoration:"none",color:"white !important",fontFamily:"Poppins",fontWeight:"700"},to:"/"},"Continue ",Object(L.c)(y.a,null))),Object(L.c)("div",{style:{position:"absolute",left:"15%",bottom:"0",width:"150px",height:"100px",display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",textAlign:"center",zIndex:"100",border:"0px solid red"}}," ",Object(L.c)(f.a,{to:"/case-studies-choice/",style:{display:"flex",flexDirection:"row",alignItems:"center",width:"200px",height:"50px",textDecoration:"none",color:"white !important",fontFamily:"Poppins",fontWeight:"700"}},Object(L.c)(b.a,null),"Change Dog")," "))}var pe="2651826294"},sRsu:function(e,t,i){"use strict";var n=i("wx14"),a=i("Ff2n"),o=i("q1tI"),r=(i("17x9"),i("iuhU")),l=i("H2TA"),s=i("tgoA"),c=i("ye/S"),d=o.forwardRef((function(e,t){var i=e.classes,l=e.className,c=e.component,d=void 0===c?"tr":c,p=e.hover,u=void 0!==p&&p,h=e.selected,g=void 0!==h&&h,f=Object(a.a)(e,["classes","className","component","hover","selected"]),m=o.useContext(s.a);return o.createElement(d,Object(n.a)({ref:t,className:Object(r.default)(i.root,l,m&&{head:i.head,footer:i.footer}[m.variant],u&&i.hover,g&&i.selected),role:"tr"===d?null:"row"},f))}));t.a=Object(l.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(c.b)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},tgoA:function(e,t,i){"use strict";var n=i("q1tI"),a=n.createContext();t.a=a}}]);
//# sourceMappingURL=component---src-pages-owner-and-dog-info-slide-js-ab045510d1daca135979.js.map