(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"/EAt":function(e,t,i){"use strict";var a=i("Ff2n"),n=i("wx14"),o=i("q1tI"),r=(i("17x9"),i("iuhU")),l=i("H2TA"),s=i("DbRV"),c=o.forwardRef((function(e,t){var i=e.classes,l=e.className,c=e.component,p=void 0===c?"table":c,d=e.padding,u=void 0===d?"default":d,g=e.size,h=void 0===g?"medium":g,f=e.stickyHeader,m=void 0!==f&&f,v=Object(a.a)(e,["classes","className","component","padding","size","stickyHeader"]),b=o.useMemo((function(){return{padding:u,size:h,stickyHeader:m}}),[u,h,m]);return o.createElement(s.a.Provider,{value:b},o.createElement(p,Object(n.a)({role:"table"===p?null:"table",ref:t,className:Object(r.a)(i.root,l,m&&i.stickyHeader)},v)))}));t.a=Object(l.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(n.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(c)},"3PeG":function(e,t,i){"use strict";var a=i("Ff2n"),n=i("wx14"),o=i("q1tI"),r=(i("17x9"),i("iuhU")),l=i("H2TA"),s=i("NqtD"),c=i("ye/S"),p=i("DbRV"),d=i("tgoA"),u=o.forwardRef((function(e,t){var i,l,c=e.align,u=void 0===c?"inherit":c,g=e.classes,h=e.className,f=e.component,m=e.padding,v=e.scope,b=e.size,y=e.sortDirection,w=e.variant,x=Object(a.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),E=o.useContext(p.a),O=o.useContext(d.a),j=O&&"head"===O.variant;f?(l=f,i=j?"columnheader":"cell"):l=j?"th":"td";var A=v;!A&&j&&(A="col");var P=m||(E&&E.padding?E.padding:"default"),k=b||(E&&E.size?E.size:"medium"),C=w||O&&O.variant,M=null;return y&&(M="asc"===y?"ascending":"descending"),o.createElement(l,Object(n.a)({ref:t,className:Object(r.a)(g.root,g[C],h,"inherit"!==u&&g["align".concat(Object(s.a)(u))],"default"!==P&&g["padding".concat(Object(s.a)(P))],"medium"!==k&&g["size".concat(Object(s.a)(k))],"head"===C&&E&&E.stickyHeader&&g.stickyHeader),"aria-sort":M,role:i,scope:A},x))}));t.a=Object(l.a)((function(e){return{root:Object(n.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(c.d)(Object(c.b)(e.palette.divider,1),.88):Object(c.a)(Object(c.b)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0px 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(u)},CczQ:function(e,t,i){var a=i("P8UN"),n=Math.abs;a(a.S,"Math",{hypot:function(e,t){for(var i,a,o=0,r=0,l=arguments.length,s=0;r<l;)s<(i=n(arguments[r++]))?(o=o*(a=s/i)*a+1,s=i):o+=i>0?(a=i/s)*a:i;return s===1/0?1/0:s*Math.sqrt(o)}})},DbRV:function(e,t,i){"use strict";var a=i("q1tI"),n=a.createContext();t.a=n},Imu7:function(e,t,i){"use strict";var a=i("wx14"),n=i("Ff2n"),o=i("q1tI"),r=(i("17x9"),i("iuhU")),l=i("H2TA"),s=i("tgoA"),c={variant:"head"},p=o.forwardRef((function(e,t){var i=e.classes,l=e.className,p=e.component,d=void 0===p?"thead":p,u=Object(n.a)(e,["classes","className","component"]);return o.createElement(s.a.Provider,{value:c},o.createElement(d,Object(a.a)({className:Object(r.a)(i.root,l),ref:t,role:"thead"===d?null:"rowgroup"},u)))}));t.a=Object(l.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(p)},SLu4:function(e,t,i){"use strict";var a=i("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("q1tI")),o=(0,a(i("8/g6")).default)(n.default.createElement("path",{d:"M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42a.9959.9959 0 00-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"}),"ArrowBackRounded");t.default=o},Spfr:function(e,t,i){"use strict";var a=i("q1tI"),n=i.n(a),o=(i("YbXK"),i("cFtU"),i("q8oJ"),i("8npG"),i("CczQ"),i("E5k/"),i("LagC"),function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)}),r=function(){return(r=Object.assign||function(e){for(var t,i=1,a=arguments.length;i<a;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},l=r(r({scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1},{tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:null,tiltAngleXManual:null,tiltAngleYManual:null}),{glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1});function s(e,t,i,a,n){return void 0===n&&(n=null),n&&clearTimeout(n),e.style.transition=t+" "+i+"ms "+a,setTimeout((function(){e.style.transition=""}),i)}function c(e,t,i){return Math.min(Math.max(e,t),i)}var p=function(){var e=this;this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=function(t,i){e.updateTilt(t,i),e.updateTiltManualInput(t,i),e.updateTiltReverse(i),e.updateTiltLimits(i)},this.updateTilt=function(t,i){var a=t.yPercentage,n=i.tiltMaxAngleY;e.tiltAngleX=t.xPercentage*i.tiltMaxAngleX/100,e.tiltAngleY=a*n/100*-1},this.updateTiltManualInput=function(t,i){var a=i.tiltAngleXManual,n=i.tiltAngleYManual,o=i.tiltMaxAngleX,r=i.tiltMaxAngleY;null===a&&null===n||(e.tiltAngleX=null!==a?a:0,e.tiltAngleY=null!==n?n:0,t.xPercentage=100*e.tiltAngleX/o,t.yPercentage=100*e.tiltAngleY/r)},this.updateTiltReverse=function(t){var i=t.tiltReverse?-1:1;e.tiltAngleX=i*e.tiltAngleX,e.tiltAngleY=i*e.tiltAngleY},this.updateTiltLimits=function(t){var i=t.tiltAxis;e.tiltAngleX=c(e.tiltAngleX,-90,90),e.tiltAngleY=c(e.tiltAngleY,-90,90),i&&(e.tiltAngleX="x"===i?e.tiltAngleX:0,e.tiltAngleY="y"===i?e.tiltAngleY:0)},this.updateTiltAnglesPercentage=function(t){var i=t.tiltMaxAngleY;e.tiltAngleXPercentage=e.tiltAngleX/t.tiltMaxAngleX*100,e.tiltAngleYPercentage=e.tiltAngleY/i*100},this.render=function(t){t.style.transform+="rotateX("+e.tiltAngleX+"deg) rotateY("+e.tiltAngleY+"deg) "}},d=function(e){var t=this;this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=function(e){return{width:2*e.width,height:2*e.height}},this.setSize=function(e){var i=t.calculateGlareSize(e);t.glareEl.style.width=i.width+"px",t.glareEl.style.height=i.height+"px"},this.update=function(e,i,a,n){t.updateAngle(e,i.glareReverse),t.updateOpacity(e,i,a,n)},this.updateAngle=function(e,i){var a=e.xPercentage,n=180/Math.PI,o=a?Math.atan2(e.yPercentage,-a)*n:0;t.glareAngle=o-(i?180:0)},this.updateOpacity=function(e,i,a,n){var o,r=e.xPercentage,l=e.yPercentage,s=i.glareReverse,p=i.glareMaxOpacity,d=a?-1:1,u=n?-1:1;switch(i.glarePosition){case"top":o=-r*d;break;case"right":o=l*u;break;case"bottom":o=r*d;break;case"left":o=-l*u;break;case"all":o=Math.hypot(r,l);break;default:o=r*d}var g=c(o=s?-o:o,0,100);t.glareOpacity=g*p/100},this.render=function(e){var i=e.glareColor;t.glareEl.style.transform="rotate("+t.glareAngle+"deg) translate(-50%, -50%)",t.glareEl.style.opacity=t.glareOpacity.toString(),t.glareEl.style.background="linear-gradient(0deg, rgba(255,255,255,0) 0%, "+i+" 100%)"},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";var i=this.calculateGlareSize(e),a={position:"absolute",top:"50%",left:"50%","transform-origin":"0% 0%","pointer-events":"none",width:i.width+"px",height:i.height+"px"};Object.assign(this.glareWrapperEl.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden"}),Object.assign(this.glareEl.style,a)},u=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},transitionTimeoutId:void 0,updateAnimationId:null,childrenImgsCounter:0,childrenImgsLength:0,scale:1},t.tilt=null,t.glare=null,t.loadWrapperAndChildElements=function(){var e=Array.from(t.wrapperEl.node.getElementsByTagName("img"));t.wrapperEl.childrenImgsLength=e.length,0!==t.wrapperEl.childrenImgsLength?e.forEach((function(e){e.complete?t.allImagesLoaded():e.addEventListener("load",t.allImagesLoaded)})):t.setSize()},t.allImagesLoaded=function(){t.wrapperEl.childrenImgsCounter++,t.wrapperEl.childrenImgsCounter===t.wrapperEl.childrenImgsLength&&t.setSize()},t.setSize=function(){t.setWrapperElSize(),t.glare&&t.glare.setSize(t.wrapperEl.size)},t.mainLoop=function(e){null!==t.wrapperEl.updateAnimationId&&cancelAnimationFrame(t.wrapperEl.updateAnimationId),t.processInput(e),t.update(e.type),t.wrapperEl.updateAnimationId=requestAnimationFrame(t.renderFrame)},t.onEnter=function(e){var i=t.props.onEnter;t.wrapperEl.node.style.willChange="transform",t.setTransition(),i&&i(e.type)},t.onMove=function(e){t.mainLoop(e),t.emitOnMove(e)},t.onLeave=function(e){var i=t.props.onLeave;if(t.setTransition(),i&&i(e.type),t.props.reset){var a=new CustomEvent("autoreset");t.onMove(a)}},t.processInput=function(e){var i=t.props.scale;switch(e.type){case"mousemove":t.wrapperEl.clientPosition.x=e.pageX,t.wrapperEl.clientPosition.y=e.pageY,t.wrapperEl.scale=i;break;case"touchmove":t.wrapperEl.clientPosition.x=e.touches[0].pageX,t.wrapperEl.clientPosition.y=e.touches[0].pageY,t.wrapperEl.scale=i;break;case"deviceorientation":t.processInputDeviceOrientation(e),t.wrapperEl.scale=i;break;case"autoreset":var a=t.props,n=a.tiltAngleYInitial/a.tiltMaxAngleY*100;t.wrapperEl.clientPosition.xPercentage=c(a.tiltAngleXInitial/a.tiltMaxAngleX*100,-100,100),t.wrapperEl.clientPosition.yPercentage=c(n,-100,100),t.wrapperEl.scale=1}},t.processInputDeviceOrientation=function(e){if(e.gamma&&e.beta&&t.props.gyroscope){var i=t.props,a=i.tiltMaxAngleY,n=e.gamma;t.wrapperEl.clientPosition.xPercentage=e.beta/i.tiltMaxAngleX*100,t.wrapperEl.clientPosition.yPercentage=n/a*100,t.wrapperEl.clientPosition.xPercentage=c(t.wrapperEl.clientPosition.xPercentage,-100,100),t.wrapperEl.clientPosition.yPercentage=c(t.wrapperEl.clientPosition.yPercentage,-100,100)}},t.update=function(e){var i=t.props,a=i.tiltEnable,n=i.flipVertically,o=i.flipHorizontally;t.updateClientInput(e),a&&t.tilt.update(t.wrapperEl.clientPosition,t.props),t.updateFlip(),t.tilt.updateTiltAnglesPercentage(t.props),t.glare&&t.glare.update(t.wrapperEl.clientPosition,t.props,n,o)},t.updateClientInput=function(e){if("autoreset"!==e&&"deviceorientation"!==e){var i,a;if(t.props.trackOnWindow){var n=t.wrapperEl.clientPosition,o=n.x;i=n.y/window.innerHeight*200-100,a=o/window.innerWidth*200-100}else{var r=t.wrapperEl,l=r.size,s=r.clientPosition;i=(s.y-l.top)/l.height*200-100,a=((o=s.x)-l.left)/l.width*200-100}t.wrapperEl.clientPosition.xPercentage=c(i,-100,100),t.wrapperEl.clientPosition.yPercentage=c(a,-100,100)}},t.updateFlip=function(){var e=t.props,i=e.flipHorizontally;e.flipVertically&&(t.tilt.tiltAngleX+=180,t.tilt.tiltAngleY*=-1),i&&(t.tilt.tiltAngleY+=180)},t.renderFrame=function(){t.resetWrapperElTransform(),t.renderPerspective(),t.tilt.render(t.wrapperEl.node),t.renderScale(),t.glare&&t.glare.render(t.props)},t}(function(e,t){function i(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)})(t,e),t.prototype.componentDidMount=function(){this.loadWrapperAndChildElements(),this.tilt=new p,this.initGlare(),this.addEventListeners();var e=new CustomEvent("autoreset");this.mainLoop(e);var t=new CustomEvent("initial");this.emitOnMove(t)},t.prototype.componentWillUnmount=function(){clearTimeout(this.wrapperEl.transitionTimeoutId),null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()},t.prototype.componentDidUpdate=function(){var e=this.props;if(!(e.onMove||e.onEnter||e.onLeave)){var t=new CustomEvent("propchange");this.mainLoop(t)}},t.prototype.addEventListeners=function(){var e=this.props,t=e.trackOnWindow,i=e.gyroscope;if(window.addEventListener("resize",this.setSize),t&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),i){if(!window.DeviceOrientationEvent)return void console.error("Browser doesn't support Device Orientation.");window.addEventListener("deviceorientation",this.onMove)}},t.prototype.removeEventListeners=function(){var e=this.props,t=e.trackOnWindow,i=e.gyroscope;window.removeEventListener("resize",this.setSize),t&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),i&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)},t.prototype.setWrapperElSize=function(){var e=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=e.left+window.scrollX,this.wrapperEl.size.top=e.top+window.scrollY},t.prototype.initGlare=function(){this.props.glareEnable&&(this.glare=new d(this.wrapperEl.size),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))},t.prototype.emitOnMove=function(e){var t=this.props.onMove;if(t){var i=0,a=0;this.glare&&(i=this.glare.glareAngle,a=this.glare.glareOpacity),t(this.tilt.tiltAngleX,this.tilt.tiltAngleY,this.tilt.tiltAngleXPercentage,this.tilt.tiltAngleYPercentage,i,a,e.type)}},t.prototype.resetWrapperElTransform=function(){this.wrapperEl.node.style.transform=""},t.prototype.renderPerspective=function(){this.wrapperEl.node.style.transform+="perspective("+this.props.perspective+"px) "},t.prototype.renderScale=function(){var e=this.wrapperEl.scale;this.wrapperEl.node.style.transform+="scale3d("+e+","+e+","+e+")"},t.prototype.setTransition=function(){var e=this.props,t=e.transitionSpeed,i=e.transitionEasing;this.wrapperEl.transitionTimeoutId=s(this.wrapperEl.node,"all",t,i,this.wrapperEl.transitionTimeoutId),this.glare&&(this.glare.transitionTimeoutId=s(this.glare.glareEl,"opacity",t,i,this.glare.transitionTimeoutId))},t.prototype.render=function(){var e=this,t=this.props;return n.a.createElement("div",{ref:function(t){return e.wrapperEl.node=t},onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:t.className,style:t.style},t.children)},t.defaultProps=l}(a.PureComponent),i("8uUf")),g=i("qKvR");t.a=function(e){var t=e.imgName,i=void 0===t?"oakley.png":t,a=e.width,n=void 0===a?"300px":a,o=e.height,r=void 0===o?"300px":o;return Object(g.c)("div",{style:{height:r,width:n,backgroundColor:"none",transition:"width 1s height 1s"}},Object(g.c)(u.a,{imgName:i}))}},"Uf6+":function(e,t,i){"use strict";var a=i("wx14"),n=i("Ff2n"),o=i("q1tI"),r=(i("17x9"),i("iuhU")),l=i("H2TA"),s=i("tgoA"),c={variant:"body"},p=o.forwardRef((function(e,t){var i=e.classes,l=e.className,p=e.component,d=void 0===p?"tbody":p,u=Object(n.a)(e,["classes","className","component"]);return o.createElement(s.a.Provider,{value:c},o.createElement(d,Object(a.a)({className:Object(r.a)(i.root,l),ref:t,role:"tbody"===d?null:"rowgroup"},u)))}));t.a=Object(l.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(p)},cbsx:function(e,t,i){"use strict";var a=i("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("q1tI")),o=(0,a(i("8/g6")).default)(n.default.createElement("path",{d:"M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z"}),"ArrowForwardRounded");t.default=o},eCxS:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return oe})),i.d(t,"pageQuery",(function(){return re}));var a=i("q1tI"),n=i.n(a),o=i("Bl7J"),r=(i("Wbzz"),i("tRbT")),l=(i("8uUf"),i("r5vi")),s=i("R/WZ"),c=(i("1w3K"),i("SLu4")),p=i.n(c),d=i("cbsx"),u=i.n(d),g=i("H2TA"),h=i("/EAt"),f=i("Uf6+"),m=i("3PeG"),v=i("nCZa"),b=i("Imu7"),y=i("sRsu"),w=i("kKAo"),x=i("zDcZ"),E=i("vOnD"),O=i("mwIZ"),j=i.n(O),A=i("a5sw"),P=(i("82Oa"),i("qKvR")),k=E.default.div.withConfig({displayName:"DogDetailTable__TableHolder",componentId:"sc-11dtto8-0"})(["background-color:",";border-radius:2rem 2rem 2rem 2rem;border-width-left:2rem;border-color:",";width:500px;"],x.a.palette.skyBlue.main,x.a.palette.skyBlue.main),C=E.default.div.withConfig({displayName:"DogDetailTable__PanelTitle",componentId:"sc-11dtto8-1"})(["font-family:",";font-size:",";font-weight:",";background-color:",";transform:rotate(270deg);color:#30c1e2;border-radius:2rem 2rem 2rem 0rem;width:406px;height:574px;position:absolute;left:59px;top:-84px;padding:1rem;box-shadow:-8px 6px 5px rgba(35,42,54,0.2);"],x.a.overrides.MuiTypography.h1.fontFamily,x.a.overrides.MuiTypography.h1.fontSize,x.a.overrides.MuiTypography.h1.fontWeight,x.a.palette.skyBlue.main),M=Object(g.a)((function(e){var t;return{head:(t={backgroundColor:"white",color:x.a.palette.midnightBlue.main,fontWeight:"700",fontFamily:x.a.overrides.MuiTypography.h1.fontFamily,fontSize:x.a.overrides.MuiTypography.h1.fontSize},t.fontWeight=x.a.overrides.MuiTypography.h1.fontWeight,t),body:{backgroundColor:"#c6f5fe",color:x.a.palette.raven.main,fontFamily:x.a.overrides.MuiTypography.body1.fontFamily,fontSize:x.a.overrides.MuiTypography.body1.fontSize,fontWeight:x.a.overrides.MuiTypography.body1.fontWeight,padding:"1rem",margin:"1rem"}}}))(m.a),T=Object(g.a)((function(e){return{head:{backgroundColor:"#c6f5fe",color:x.a.palette.raven.main,fontFamily:x.a.overrides.MuiTypography.h4.fontFamily,fontSize:x.a.overrides.MuiTypography.h4.fontSize,fontWeight:x.a.overrides.MuiTypography.h4.fontWeight},body:{backgroundColor:"#c6f5fe",color:x.a.palette.raven.main,fontFamily:x.a.overrides.MuiTypography.h5.fontFamily,fontSize:x.a.overrides.MuiTypography.h5.fontSize,fontWeight:x.a.overrides.MuiTypography.h5.fontWeight,padding:"1rem",margin:"1rem"}}}))(m.a),z=Object(g.a)((function(e){return{head:{backgroundColor:"#effcfe",color:x.a.palette.raven.main},body:{backgroundColor:"#effcfe",color:x.a.palette.raven.main,fontFamily:x.a.overrides.MuiTypography.body1.fontFamily,fontSize:x.a.overrides.MuiTypography.body1.fontSize,fontWeight:x.a.overrides.MuiTypography.body1.fontWeight,padding:"1rem",margin:"1rem"}}}))(m.a),I=Object(g.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:"white"}}}}))(y.a),S=Object(s.a)({table:{minWidth:"200px"}});function L(e){var t=e.resources,i=e.rowPointer,a=void 0===i?1:i,n=S();function o(e,t){return{rowTitle:e,rowValue:t}}var r=[o(t.field_tableitemtitle1,Object(A.c)(t.field_tableitemcontent1.processed)),o(t.field_tableitemtitle2,Object(A.c)(t.field_tableitemcontent2.processed)),o(t.field_tableitemtitle3,Object(A.c)(t.field_tableitemcontent3.processed)),o(t.field_tableitemtitle4,Object(A.c)(t.field_tableitemcontent4.processed)),o(t.field_tableitemtitle5,Object(A.c)(t.field_tableitemcontent5.processed)),o(t.field_tableitemtitle6,Object(A.c)(t.field_tableitemcontent6.processed))],l=[o(t.field_tableitemtitle7,Object(A.c)(t.field_tableitemcontent7.processed)),o(t.field_tableitemtitle8,Object(A.c)(t.field_tableitemcontent8.processed))];return 2===a&&l,Object(P.c)(k,null,Object(P.c)(C,null,t.field_paneltitle),Object(P.c)(v.a,{component:w.a,style:{borderRadius:"0 2rem 0 0",position:"relative",height:"406px",overflow:"hidden"}},Object(P.c)(h.a,{className:n.table,"aria-label":t.field_tabletitle,style:{border:"1px solid red"}},Object(P.c)(b.a,null,Object(P.c)(y.a,null,Object(P.c)(M,{colSpan:2,style:{border:"2px solid white"}}," ",t.field_tabletitle))),Object(P.c)(f.a,null,r.map((function(e){return Object(P.c)(I,{key:e.rowTitle},Object(P.c)(T,{component:"th",scope:"row",style:{border:"2px solid white"}},"   ",e.rowTitle),Object(P.c)(z,{align:"left",style:{border:"2px solid white"}},"    ",e.rowValue))}))))))}var _=i("Spfr"),N=(i("E5k/"),i("edxh")),Y=(i("pJf4"),i("wx14")),R=i("Ff2n"),W=(i("17x9"),i("iuhU")),D=i("4ppn"),H=i("5AJ6"),X=Object(H.a)(a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),F=Object(H.a)(a.createElement("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked");var q=Object(g.a)((function(e){return{root:{position:"relative",display:"flex","&$checked $layer":{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}},layer:{left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},checked:{}}}),{name:"PrivateRadioButtonIcon"})((function(e){var t=e.checked,i=e.classes,n=e.fontSize;return a.createElement("div",{className:Object(W.a)(i.root,t&&i.checked)},a.createElement(X,{fontSize:n}),a.createElement(F,{fontSize:n,className:i.layer}))})),U=i("ye/S"),B=i("NqtD"),G=i("x6Ns");var $=a.createContext();var V=a.createElement(q,{checked:!0}),J=a.createElement(q,null),Z=a.forwardRef((function(e,t){var i=e.checked,n=e.classes,o=e.color,r=void 0===o?"secondary":o,l=e.name,s=e.onChange,c=e.size,p=void 0===c?"medium":c,d=Object(R.a)(e,["checked","classes","color","name","onChange","size"]),u=a.useContext($),g=i,h=Object(G.a)(s,u&&u.onChange),f=l;return u&&(void 0===g&&(g=u.value===e.value),void 0===f&&(f=u.name)),a.createElement(D.a,Object(Y.a)({color:r,type:"radio",icon:a.cloneElement(J,{fontSize:"small"===p?"small":"default"}),checkedIcon:a.cloneElement(V,{fontSize:"small"===p?"small":"default"}),classes:{root:Object(W.a)(n.root,n["color".concat(Object(B.a)(r))]),checked:n.checked,disabled:n.disabled},name:f,checked:g,onChange:h,ref:t},d))})),K=Object(g.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(U.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(U.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiRadio"})(Z);function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}Object(g.a)({root:{color:N.a[400],"&$checked":{color:N.a[600]}},checked:{}})((function(e){return Object(P.c)(K,Q({color:"default"},e))}));function ee(e){e.state;var t=e.setState,i=n.a.useState("first"),a=i[0],o=i[1],r=function(e){o(e.target.value),t(Object.assign({},stage),{tabSelected:e.target.value})};return Object(P.c)("div",null,Object(P.c)(K,{checked:"first"===a,onChange:r,value:"a",name:"radio-button-panel",inputProps:{"aria-label":"first tab"}}),Object(P.c)(K,{checked:"second"===a,onChange:r,value:"b",name:"radio-button-panel",inputProps:{"aria-label":"second tab"}}))}var te=i("kOA+"),ie=i.n(te),ae=i("itCy"),ne=Object(s.a)((function(e){return{root:{display:"flex",flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));function oe(e){var t,i=e.data,n=j()(i,"nodeDogoptions");console.log(n),n||(n=[{field_headertextline3:"LISTEN.",field_bottombodytext:{processed:"<p>Build your canine heart disease management skills and prolong the lives of dogs with the help of this simple, fun digital tool.</p>"},field_bottomtitle:{processed:"<p>This activity will earn you 12 minutes of CPD points</p>"},field_buttonlinks:[{title:"Start",uri:"/case-studies-options/"}],field_toprighttext:[{processed:"You will need sound for part of this activity."}]}]);var s=Object(l.a)(["hasConsentSet","userChoice","dogChoice"]),c=s[0],d=(s[1],s[2],{dogName:c.dogName?c.dogName:ae.a.POPPY,tabSelected:"first"}),g=Object(a.useState)(d),h=g[0],f=g[1];return Object(P.c)(o.a,null,Object(P.c)("div",{className:ne().root},Object(P.c)(r.a,((t={container:!0,spacing:0}).spacing=0,t.justify="center",t.style={border:"1px solid black",minHeight:"100vh",width:"100%",maxWidth:"3000px"},t),Object(P.c)(r.a,{item:!0,xs:12,sm:8,align:"center",style:{border:"0px solid red",minHeight:"100%"}},Object(P.c)("div",{style:{position:"relative",width:"100%",minHeight:"100%",border:"0px solid red"}},Object(P.c)("div",{style:{position:"absolute",left:"25%",top:"10%",width:"600px",height:"100%",zIndex:h.isPanelVisible1?3:2}},Object(P.c)(L,{resources:n})),Object(P.c)("div",{style:{position:"absolute",left:"30%",top:"15%",width:"600px",height:"100%",zIndex:h.isPanelVisible1?2:3}},Object(P.c)(L,{resources:n,rowPointer:2})),Object(P.c)("div",{style:{position:"absolute",left:"50%",top:"55%",width:"300px",height:"30px",backgroundColor:"transparent"}},Object(P.c)(ee,{state:h,setState:f})))),Object(P.c)(r.a,{item:!0,xs:12,sm:4,align:"center",style:{border:"0px solid red"}},Object(P.c)("div",{"data-active":h.dogName===ae.a.DUDLEY,style:{display:h.dogName===ae.a.DUDLEY?"block":"none",position:"relative",margin:"auto",width:"75%",minHeight:"100%",padding:"2rem",border:"0px solid red"}},Object(P.c)("div",{style:{position:"absolute",left:0,top:0}},Object(P.c)(_.a,{axis:"Y",imgName:"mrs_jenkins_pose_01@3x.png",height:"600px",width:"600px"})),Object(P.c)("div",{style:{position:"absolute",left:"20%",top:"30%"}},Object(P.c)(_.a,{axis:"Y",imgName:"dudley_standing_pose_02@3x.png",height:"600px",width:"600px"}))),Object(P.c)("div",{"data-active":h.dogName===ae.a.POPPY,style:{display:h.dogName===ae.a.POPPY?"block":"none",position:"relative",margin:"auto",width:"75%",minHeight:"100%",padding:"2rem",border:"0px solid red"}},Object(P.c)("div",{style:{position:"absolute",left:0,top:0}},Object(P.c)(_.a,{axis:"Y",imgName:"mr_oakley_poses_02@3x.png",height:"600px",width:"600px"})),Object(P.c)("div",{style:{position:"absolute",left:"20%",top:"30%"}},Object(P.c)(_.a,{axis:"Y",imgName:"poppy_standing_02@3x.png",height:"600px",width:"600px"}))),Object(P.c)("div",{"data-active":h.dogName===ae.a.REGGIE,style:{display:h.dogName===ae.a.REGGIE?"block":"none",position:"relative",margin:"auto",width:"75%",minHeight:"100%",padding:"2rem",border:"0px solid red"}},Object(P.c)("div",{style:{position:"absolute",left:0,top:0}},Object(P.c)(_.a,{axis:"Y",imgName:"mr_oakley_poses_02@3x.png",height:"600px",width:"600px"})),Object(P.c)("div",{style:{position:"absolute",left:"20%",top:"30%"}},Object(P.c)(_.a,{axis:"Y",imgName:"poppy_standing_02@3x.png",height:"600px",width:"600px"})))))),Object(P.c)("div",{style:{position:"absolute",right:"0",bottom:"0",width:"150px",height:"100px",display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",textAlign:"center",border:"0px solid red"}},Object(P.c)(ie.a,{style:{display:"flex",flexDirection:"row",alignItems:"center",width:"200px",height:"50px",textDecoration:"none",color:"white !important",fontFamily:"Poppins",fontWeight:"700"},to:"/heart/"},"Continue ",Object(P.c)(u.a,null))),Object(P.c)("div",{style:{position:"absolute",left:"15%",bottom:"0",width:"150px",height:"100px",display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",textAlign:"center",zIndex:"100",border:"0px solid red"}}," ",Object(P.c)(ie.a,{to:"/case-study-options/",style:{display:"flex",flexDirection:"row",alignItems:"center",width:"200px",height:"50px",textDecoration:"none",color:"white !important",fontFamily:"Poppins",fontWeight:"700"}},Object(P.c)(p.a,null),"Change Dog")))}var re="2651826294"},itCy:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var a={DUDLEY:"dudley",POPPY:"poppy",REGGIE:"reggie"}},nCZa:function(e,t,i){"use strict";var a=i("wx14"),n=i("Ff2n"),o=i("q1tI"),r=(i("17x9"),i("iuhU")),l=i("H2TA"),s=o.forwardRef((function(e,t){var i=e.classes,l=e.className,s=e.component,c=void 0===s?"div":s,p=Object(n.a)(e,["classes","className","component"]);return o.createElement(c,Object(a.a)({ref:t,className:Object(r.a)(i.root,l)},p))}));t.a=Object(l.a)({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(s)},sRsu:function(e,t,i){"use strict";var a=i("wx14"),n=i("Ff2n"),o=i("q1tI"),r=(i("17x9"),i("iuhU")),l=i("H2TA"),s=i("tgoA"),c=i("ye/S"),p=o.forwardRef((function(e,t){var i=e.classes,l=e.className,c=e.component,p=void 0===c?"tr":c,d=e.hover,u=void 0!==d&&d,g=e.selected,h=void 0!==g&&g,f=Object(n.a)(e,["classes","className","component","hover","selected"]),m=o.useContext(s.a);return o.createElement(p,Object(a.a)({ref:t,className:Object(r.a)(i.root,l,m&&{head:i.head,footer:i.footer}[m.variant],u&&i.hover,h&&i.selected),role:"tr"===p?null:"row"},f))}));t.a=Object(l.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(c.b)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(p)},tgoA:function(e,t,i){"use strict";var a=i("q1tI"),n=a.createContext();t.a=n}}]);
//# sourceMappingURL=component---src-pages-owner-and-dog-detail-slide-js-9bc6bac1853e67c58f4d.js.map