(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{CczQ:function(e,t,n){var i=n("P8UN"),a=Math.abs;i(i.S,"Math",{hypot:function(e,t){for(var n,i,r=0,l=0,o=arguments.length,s=0;l<o;)s<(n=a(arguments[l++]))?(r=r*(i=s/n)*i+1,s=n):r+=n>0?(i=n/s)*i:n;return s===1/0?1/0:s*Math.sqrt(r)}})},Spfr:function(e,t,n){"use strict";var i=n("q1tI"),a=n.n(i),r=(n("YbXK"),n("cFtU"),n("q8oJ"),n("8npG"),n("CczQ"),n("E5k/"),n("LagC"),function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)}),l=function(){return(l=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},o=l(l({scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1},{tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:null,tiltAngleXManual:null,tiltAngleYManual:null}),{glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1});function s(e,t,n,i,a){return void 0===a&&(a=null),a&&clearTimeout(a),e.style.transition=t+" "+n+"ms "+i,setTimeout((function(){e.style.transition=""}),n)}function p(e,t,n){return Math.min(Math.max(e,t),n)}var c=function(){var e=this;this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=function(t,n){e.updateTilt(t,n),e.updateTiltManualInput(t,n),e.updateTiltReverse(n),e.updateTiltLimits(n)},this.updateTilt=function(t,n){var i=t.yPercentage,a=n.tiltMaxAngleY;e.tiltAngleX=t.xPercentage*n.tiltMaxAngleX/100,e.tiltAngleY=i*a/100*-1},this.updateTiltManualInput=function(t,n){var i=n.tiltAngleXManual,a=n.tiltAngleYManual,r=n.tiltMaxAngleX,l=n.tiltMaxAngleY;null===i&&null===a||(e.tiltAngleX=null!==i?i:0,e.tiltAngleY=null!==a?a:0,t.xPercentage=100*e.tiltAngleX/r,t.yPercentage=100*e.tiltAngleY/l)},this.updateTiltReverse=function(t){var n=t.tiltReverse?-1:1;e.tiltAngleX=n*e.tiltAngleX,e.tiltAngleY=n*e.tiltAngleY},this.updateTiltLimits=function(t){var n=t.tiltAxis;e.tiltAngleX=p(e.tiltAngleX,-90,90),e.tiltAngleY=p(e.tiltAngleY,-90,90),n&&(e.tiltAngleX="x"===n?e.tiltAngleX:0,e.tiltAngleY="y"===n?e.tiltAngleY:0)},this.updateTiltAnglesPercentage=function(t){var n=t.tiltMaxAngleY;e.tiltAngleXPercentage=e.tiltAngleX/t.tiltMaxAngleX*100,e.tiltAngleYPercentage=e.tiltAngleY/n*100},this.render=function(t){t.style.transform+="rotateX("+e.tiltAngleX+"deg) rotateY("+e.tiltAngleY+"deg) "}},d=function(e){var t=this;this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=function(e){return{width:2*e.width,height:2*e.height}},this.setSize=function(e){var n=t.calculateGlareSize(e);t.glareEl.style.width=n.width+"px",t.glareEl.style.height=n.height+"px"},this.update=function(e,n,i,a){t.updateAngle(e,n.glareReverse),t.updateOpacity(e,n,i,a)},this.updateAngle=function(e,n){var i=e.xPercentage,a=180/Math.PI,r=i?Math.atan2(e.yPercentage,-i)*a:0;t.glareAngle=r-(n?180:0)},this.updateOpacity=function(e,n,i,a){var r,l=e.xPercentage,o=e.yPercentage,s=n.glareReverse,c=n.glareMaxOpacity,d=i?-1:1,g=a?-1:1;switch(n.glarePosition){case"top":r=-l*d;break;case"right":r=o*g;break;case"bottom":r=l*d;break;case"left":r=-o*g;break;case"all":r=Math.hypot(l,o);break;default:r=l*d}var h=p(r=s?-r:r,0,100);t.glareOpacity=h*c/100},this.render=function(e){var n=e.glareColor;t.glareEl.style.transform="rotate("+t.glareAngle+"deg) translate(-50%, -50%)",t.glareEl.style.opacity=t.glareOpacity.toString(),t.glareEl.style.background="linear-gradient(0deg, rgba(255,255,255,0) 0%, "+n+" 100%)"},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";var n=this.calculateGlareSize(e),i={position:"absolute",top:"50%",left:"50%","transform-origin":"0% 0%","pointer-events":"none",width:n.width+"px",height:n.height+"px"};Object.assign(this.glareWrapperEl.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden"}),Object.assign(this.glareEl.style,i)},g=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},transitionTimeoutId:void 0,updateAnimationId:null,childrenImgsCounter:0,childrenImgsLength:0,scale:1},t.tilt=null,t.glare=null,t.loadWrapperAndChildElements=function(){var e=Array.from(t.wrapperEl.node.getElementsByTagName("img"));t.wrapperEl.childrenImgsLength=e.length,0!==t.wrapperEl.childrenImgsLength?e.forEach((function(e){e.complete?t.allImagesLoaded():e.addEventListener("load",t.allImagesLoaded)})):t.setSize()},t.allImagesLoaded=function(){t.wrapperEl.childrenImgsCounter++,t.wrapperEl.childrenImgsCounter===t.wrapperEl.childrenImgsLength&&t.setSize()},t.setSize=function(){t.setWrapperElSize(),t.glare&&t.glare.setSize(t.wrapperEl.size)},t.mainLoop=function(e){null!==t.wrapperEl.updateAnimationId&&cancelAnimationFrame(t.wrapperEl.updateAnimationId),t.processInput(e),t.update(e.type),t.wrapperEl.updateAnimationId=requestAnimationFrame(t.renderFrame)},t.onEnter=function(e){var n=t.props.onEnter;t.wrapperEl.node.style.willChange="transform",t.setTransition(),n&&n(e.type)},t.onMove=function(e){t.mainLoop(e),t.emitOnMove(e)},t.onLeave=function(e){var n=t.props.onLeave;if(t.setTransition(),n&&n(e.type),t.props.reset){var i=new CustomEvent("autoreset");t.onMove(i)}},t.processInput=function(e){var n=t.props.scale;switch(e.type){case"mousemove":t.wrapperEl.clientPosition.x=e.pageX,t.wrapperEl.clientPosition.y=e.pageY,t.wrapperEl.scale=n;break;case"touchmove":t.wrapperEl.clientPosition.x=e.touches[0].pageX,t.wrapperEl.clientPosition.y=e.touches[0].pageY,t.wrapperEl.scale=n;break;case"deviceorientation":t.processInputDeviceOrientation(e),t.wrapperEl.scale=n;break;case"autoreset":var i=t.props,a=i.tiltAngleYInitial/i.tiltMaxAngleY*100;t.wrapperEl.clientPosition.xPercentage=p(i.tiltAngleXInitial/i.tiltMaxAngleX*100,-100,100),t.wrapperEl.clientPosition.yPercentage=p(a,-100,100),t.wrapperEl.scale=1}},t.processInputDeviceOrientation=function(e){if(e.gamma&&e.beta&&t.props.gyroscope){var n=t.props,i=n.tiltMaxAngleY,a=e.gamma;t.wrapperEl.clientPosition.xPercentage=e.beta/n.tiltMaxAngleX*100,t.wrapperEl.clientPosition.yPercentage=a/i*100,t.wrapperEl.clientPosition.xPercentage=p(t.wrapperEl.clientPosition.xPercentage,-100,100),t.wrapperEl.clientPosition.yPercentage=p(t.wrapperEl.clientPosition.yPercentage,-100,100)}},t.update=function(e){var n=t.props,i=n.tiltEnable,a=n.flipVertically,r=n.flipHorizontally;t.updateClientInput(e),i&&t.tilt.update(t.wrapperEl.clientPosition,t.props),t.updateFlip(),t.tilt.updateTiltAnglesPercentage(t.props),t.glare&&t.glare.update(t.wrapperEl.clientPosition,t.props,a,r)},t.updateClientInput=function(e){if("autoreset"!==e&&"deviceorientation"!==e){var n,i;if(t.props.trackOnWindow){var a=t.wrapperEl.clientPosition,r=a.x;n=a.y/window.innerHeight*200-100,i=r/window.innerWidth*200-100}else{var l=t.wrapperEl,o=l.size,s=l.clientPosition;n=(s.y-o.top)/o.height*200-100,i=((r=s.x)-o.left)/o.width*200-100}t.wrapperEl.clientPosition.xPercentage=p(n,-100,100),t.wrapperEl.clientPosition.yPercentage=p(i,-100,100)}},t.updateFlip=function(){var e=t.props,n=e.flipHorizontally;e.flipVertically&&(t.tilt.tiltAngleX+=180,t.tilt.tiltAngleY*=-1),n&&(t.tilt.tiltAngleY+=180)},t.renderFrame=function(){t.resetWrapperElTransform(),t.renderPerspective(),t.tilt.render(t.wrapperEl.node),t.renderScale(),t.glare&&t.glare.render(t.props)},t}(function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.loadWrapperAndChildElements(),this.tilt=new c,this.initGlare(),this.addEventListeners();var e=new CustomEvent("autoreset");this.mainLoop(e);var t=new CustomEvent("initial");this.emitOnMove(t)},t.prototype.componentWillUnmount=function(){clearTimeout(this.wrapperEl.transitionTimeoutId),null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()},t.prototype.componentDidUpdate=function(){var e=this.props;if(!(e.onMove||e.onEnter||e.onLeave)){var t=new CustomEvent("propchange");this.mainLoop(t)}},t.prototype.addEventListeners=function(){var e=this.props,t=e.trackOnWindow,n=e.gyroscope;if(window.addEventListener("resize",this.setSize),t&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),n){if(!window.DeviceOrientationEvent)return void console.error("Browser doesn't support Device Orientation.");window.addEventListener("deviceorientation",this.onMove)}},t.prototype.removeEventListeners=function(){var e=this.props,t=e.trackOnWindow,n=e.gyroscope;window.removeEventListener("resize",this.setSize),t&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),n&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)},t.prototype.setWrapperElSize=function(){var e=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=e.left+window.scrollX,this.wrapperEl.size.top=e.top+window.scrollY},t.prototype.initGlare=function(){this.props.glareEnable&&(this.glare=new d(this.wrapperEl.size),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))},t.prototype.emitOnMove=function(e){var t=this.props.onMove;if(t){var n=0,i=0;this.glare&&(n=this.glare.glareAngle,i=this.glare.glareOpacity),t(this.tilt.tiltAngleX,this.tilt.tiltAngleY,this.tilt.tiltAngleXPercentage,this.tilt.tiltAngleYPercentage,n,i,e.type)}},t.prototype.resetWrapperElTransform=function(){this.wrapperEl.node.style.transform=""},t.prototype.renderPerspective=function(){this.wrapperEl.node.style.transform+="perspective("+this.props.perspective+"px) "},t.prototype.renderScale=function(){var e=this.wrapperEl.scale;this.wrapperEl.node.style.transform+="scale3d("+e+","+e+","+e+")"},t.prototype.setTransition=function(){var e=this.props,t=e.transitionSpeed,n=e.transitionEasing;this.wrapperEl.transitionTimeoutId=s(this.wrapperEl.node,"all",t,n,this.wrapperEl.transitionTimeoutId),this.glare&&(this.glare.transitionTimeoutId=s(this.glare.glareEl,"opacity",t,n,this.glare.transitionTimeoutId))},t.prototype.render=function(){var e=this,t=this.props;return a.a.createElement("div",{ref:function(t){return e.wrapperEl.node=t},onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:t.className,style:t.style},t.children)},t.defaultProps=o}(i.PureComponent),n("8uUf"));t.a=function(e){var t=e.imgName,n=void 0===t?"oakley.png":t,i=e.width,r=void 0===i?"300px":i,l=e.height,o=void 0===l?"300px":l;return a.a.createElement("div",{style:{height:o,width:r,backgroundColor:"none",transition:"width 1s height 1s"}},a.a.createElement(g.a,{imgName:n}))}},vUEc:function(e,t,n){"use strict";n.d(t,"c",(function(){return d})),n.d(t,"i",(function(){return g})),n.d(t,"k",(function(){return h})),n.d(t,"g",(function(){return m})),n.d(t,"d",(function(){return u})),n.d(t,"h",(function(){return f})),n.d(t,"f",(function(){return v})),n.d(t,"b",(function(){return A})),n.d(t,"j",(function(){return b})),n.d(t,"e",(function(){return O})),n.d(t,"a",(function(){return I}));n("E5k/");var i=n("q1tI"),a=n.n(i),r=n("vOnD"),l=n("8uUf"),o=n("Spfr"),s=n("zDcZ"),p=n("a5sw"),c=n("itCy"),d=r.default.div.withConfig({displayName:"PageParts__HeaderText",componentId:"sc-13yrde5-0"})(["padding-bottom:2rem;font-family:",";font-size:2.938rem;font-weight:600;font-stretch:normal;font-style:normal;line-height:1.15;letter-spacing:-0.47px;text-align:left;color:",";"],s.a.overrides.MuiTypography.h1.fontFamily,s.a.palette.midnightBlue.main),g=r.default.div.withConfig({displayName:"PageParts__SubtitleText",componentId:"sc-13yrde5-1"})(["padding-bottom:2rem;margin-bottom:2rem;height:1.938rem;font-family:",";font-size:1.375rem;font-weight:600;font-stretch:normal;font-style:normal;line-height:1.4;letter-spacing:-0.22px;text-align:left;color:",";"],s.a.typography.fontFamily,s.a.palette.raven.main),h=r.default.div.attrs((function(e){return{id:e.id,style:e.style,onClick:e.onClick}})).withConfig({displayName:"PageParts__WhiteDotButton",componentId:"sc-13yrde5-2"})(["width:4.25rem;height:4.25rem;border-radius:50%;background-color:white;"]),m=r.default.div.attrs((function(e){return{id:e.id,style:e.style}})).withConfig({displayName:"PageParts__PageSection",componentId:"sc-13yrde5-3"})(["display:flex;flex-direction:row;width:100%;margin:auto;@media (max-width:","px){width:100%;flex-direction:column;align-items:center;}"],s.c),u=r.default.div.attrs((function(e){return{id:e.id}})).withConfig({displayName:"PageParts__LeftPageSection",componentId:"sc-13yrde5-4"})(["display:flex;width:50%;height:100vh;flex-direction:column;align-items:flex-end;justify-content:center;@media (max-width:","px){width:100%;align-items:center;height:10%;}"],s.c),f=r.default.div.attrs((function(e){return{id:e.id}})).withConfig({displayName:"PageParts__RightPageSection",componentId:"sc-13yrde5-5"})(["display:flex;width:50%;height:100vh;flex-direction:column;align-items:flex-start;justify-content:center;@media (max-width:","px){width:100%;height:10%;margin-bottom:100px;}"],s.c),w=r.default.div.withConfig({displayName:"PageParts__OwnerImageCloseUpStyle",componentId:"sc-13yrde5-6"})(["width:800px;height:1600px;margin-right:-200px;margin-top:600px;"]),y=Object(r.default)(w).withConfig({displayName:"PageParts__OwnerImageCloseUpDudley",componentId:"sc-13yrde5-7"})(["margin-right:-20px;margin-top:300px;"]),v=function(e){var t=e.dogChoice,n=e.ownerState,i=void 0===n?c.c.HAPPY:n,r=e.style,o=void 0===r?{}:r;return a.a.createElement(a.a.Fragment,null,a.a.createElement(y,{style:Object.assign(Object.assign({},o),{},{display:Object(p.d)(t,c.g.DUDLEY)})},i===c.c.HAPPY?a.a.createElement(l.a,{style:{marginLeft:"-100px",marginTop:"-50px"},imgName:"owner_resp_Mrs-Jenkins-Pose01.png"}):a.a.createElement(l.a,{imgName:"owner_resp_mrs-jenkins-pose-02.png"})),a.a.createElement(w,{style:Object.assign(Object.assign({},o),{},{display:Object(p.d)(t,c.g.POPPY)})},i===c.c.HAPPY?a.a.createElement(l.a,{style:{marginLeft:"-200px",marginTop:"-50px"},imgName:"owner_resp_Mr-Oakley-Poses02.png"}):a.a.createElement(l.a,{imgName:"owner_resp_mr-oakley-poses-01.png"})),a.a.createElement(w,{style:Object.assign(Object.assign({},o),{},{display:Object(p.d)(t,c.g.REGGIE)})},i===c.c.HAPPY?a.a.createElement(l.a,{style:{marginLeft:"-250px",marginTop:"-50px"},imgName:"owner_resp_Mrs-Richardson-Pose02.png"}):a.a.createElement(l.a,{imgName:"owner_resp_mrs-richardson-pose-03.png"})))},E=r.default.div.withConfig({displayName:"PageParts__OwnerImageStyle",componentId:"sc-13yrde5-8"})(["width:500px;height:900px;margin-right:0px;"]),x=(Object(r.default)(E).withConfig({displayName:"PageParts__OwnerImageStyleDudley",componentId:"sc-13yrde5-9"})(["width:500px;height:600px;margin-right:0px;"]),r.default.div.withConfig({displayName:"PageParts__OwnerCertSummaryImageHolder",componentId:"sc-13yrde5-10"})(["display:flex;flex-wrap:wrap;justify-content:flex-end;& .block{position:relative;}"])),P=r.default.div.withConfig({displayName:"PageParts__DogImageHolderBase",componentId:"sc-13yrde5-11"})(["display:flex;width:100%;height:314px;"]),A=Object(r.default)(P).withConfig({displayName:"PageParts__DogImageHolder",componentId:"sc-13yrde5-12"})(["width:100%;height:614px;display:flex;flex-direction:row;justify-content:center;align-items:center;@media (max-width:","px){height:314px}@media (max-width:","px){height:314px;}"],s.c,s.d),b=function(e){var t=e.dogChoice,n=e.dogState,i=(void 0===n&&c.c.NEUTRAL,e.style),r=void 0===i?{}:i;return a.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",minHeight:"100vh"}},a.a.createElement(x,{style:Object.assign(Object.assign({},r),{},{display:Object(p.d)(t,c.g.DUDLEY)})},a.a.createElement(o.a,{imgName:"Mrs-Jenkins-and-Dudley-Poses-03.png",height:"100vh",width:"600px"})),a.a.createElement(x,{style:Object.assign(Object.assign({},r),{},{display:Object(p.d)(t,c.g.POPPY)})},a.a.createElement(o.a,{imgName:"Mr-Oakley-and-Poppy-Poses03.png",height:"100vh",width:"400px"})),a.a.createElement(x,{style:Object.assign(Object.assign({},r),{},{display:Object(p.d)(t,c.g.REGGIE)})},a.a.createElement(o.a,{imgName:"Mrs-Richardson-and-Reggie-Poses-03.png",height:"100vh",width:"400px"})))},O=function(e){var t=e.dogChoice,n=e.style,i=void 0===n?{}:n;return a.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",minHeight:"100vh"}},a.a.createElement(x,{style:Object.assign(Object.assign({},i),{},{display:Object(p.d)(t,c.g.DUDLEY)})},a.a.createElement("div",{className:"block",style:{marginLeft:"-200px",marginTop:"-50px"}},a.a.createElement("div",{style:{position:"absolute",left:"0",top:"0"}},a.a.createElement(o.a,{imgName:"Mrs-Jenkins-and-Dudley-Pose02.png",height:"680px",width:"500px"})))),a.a.createElement(x,{style:Object.assign(Object.assign({},i),{},{display:Object(p.d)(t,c.g.POPPY)})},a.a.createElement("div",{className:"block",style:{marginLeft:"-200px",marginTop:"-50px"}},a.a.createElement("div",{style:{position:"absolute",left:"0",top:"0px"}},a.a.createElement(o.a,{imgName:"Mr-Oakley-and-Poppy-Poses02.png",height:"680px",width:"450px"})))),a.a.createElement(x,{style:Object.assign(Object.assign({},i),{},{display:Object(p.d)(t,c.g.REGGIE)})},a.a.createElement("div",{className:"block",style:{marginLeft:"-200px",marginTop:"-50px"}},a.a.createElement("div",{style:{position:"absolute",left:"0",top:"0"}},a.a.createElement(o.a,{imgName:"Mrs-Richardson-and-Reggie-Pose02-RIGHT.png",height:"690px",width:"500px"})))))},I=r.default.div.withConfig({displayName:"PageParts__BottomCenterTaskText",componentId:"sc-13yrde5-13"})(["width:692px;height:61.8px;font-family:",";font-size:22px;font-weight:600;font-stretch:normal;font-style:normal;line-height:1.4;letter-spacing:-0.22px;text-align:center;color:",";@media (max-width:","px){width:100%;}@media (max-width:","px){width:100%;}"],s.a.typography.fontFamily,s.a.palette.midnightBlue.main,s.c,s.d)}}]);
//# sourceMappingURL=06a9fc13bf17427a2385edec4e39aef4c134d75f-c4abf6106fd1497e42cd.js.map