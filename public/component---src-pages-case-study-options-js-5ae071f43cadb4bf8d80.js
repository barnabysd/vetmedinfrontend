(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"1waj":function(e,t,i){"use strict";var n=i("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("q1tI")),o=(0,n(i("8/g6")).default)(a.default.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=o},CczQ:function(e,t,i){var n=i("P8UN"),a=Math.abs;n(n.S,"Math",{hypot:function(e,t){for(var i,n,o=0,r=0,l=arguments.length,s=0;r<l;)s<(i=a(arguments[r++]))?(o=o*(n=s/i)*n+1,s=i):o+=i>0?(n=i/s)*n:i;return s===1/0?1/0:s*Math.sqrt(o)}})},GMqj:function(e,t,i){"use strict";i("q1tI");var n=i("gCJi"),a=i.n(n),o=i("zDcZ"),r=i("qKvR");t.a=function(e){var t=e.textLabel,i=e.colour;e.revealColour;return Object(r.c)("div",null,Object(r.c)(a.a,{delay:0,duration:3,color:i},Object(r.c)("span",{style:{fontSize:"5.5rem",lineHeight:"5.7rem",fontFamily:o.a.overrides.MuiTypography.h1.fontFamily,fontWeight:"700",color:i}},t)))}},SKkF:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(i("q1tI")),a=o(i("17x9"));function o(e){return e&&e.__esModule?e:{default:e}}i("jmMV");var r=function(e){var t=e.delay,i=e.duration,a=e.className,o=e.children,r=e.color;return n.default.createElement("span",{className:"block-reveal-animation "+a},n.default.createElement("div",{className:"block-reveal-animation__element",style:{animationDelay:t+i/2+"s"}},o),n.default.createElement("span",{className:"block-reveal-animation__block",style:{animationDelay:t+"s",animationDuration:i+"s",backgroundColor:r}}))};r.propTypes={children:a.default.node.isRequired,color:a.default.string,className:a.default.string,delay:a.default.number,duration:a.default.number},r.defaultProps={className:"",delay:1,duration:.9,color:"#000"},t.default=r},Spfr:function(e,t,i){"use strict";var n=i("q1tI"),a=i.n(n),o=(i("YbXK"),i("cFtU"),i("q8oJ"),i("8npG"),i("CczQ"),i("E5k/"),i("LagC"),function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)}),r=function(){return(r=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var a in t=arguments[i])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},l=r(r({scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1},{tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:null,tiltAngleXManual:null,tiltAngleYManual:null}),{glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1});function s(e,t,i,n,a){return void 0===a&&(a=null),a&&clearTimeout(a),e.style.transition=t+" "+i+"ms "+n,setTimeout((function(){e.style.transition=""}),i)}function c(e,t,i){return Math.min(Math.max(e,t),i)}var p=function(){var e=this;this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=function(t,i){e.updateTilt(t,i),e.updateTiltManualInput(t,i),e.updateTiltReverse(i),e.updateTiltLimits(i)},this.updateTilt=function(t,i){var n=t.yPercentage,a=i.tiltMaxAngleY;e.tiltAngleX=t.xPercentage*i.tiltMaxAngleX/100,e.tiltAngleY=n*a/100*-1},this.updateTiltManualInput=function(t,i){var n=i.tiltAngleXManual,a=i.tiltAngleYManual,o=i.tiltMaxAngleX,r=i.tiltMaxAngleY;null===n&&null===a||(e.tiltAngleX=null!==n?n:0,e.tiltAngleY=null!==a?a:0,t.xPercentage=100*e.tiltAngleX/o,t.yPercentage=100*e.tiltAngleY/r)},this.updateTiltReverse=function(t){var i=t.tiltReverse?-1:1;e.tiltAngleX=i*e.tiltAngleX,e.tiltAngleY=i*e.tiltAngleY},this.updateTiltLimits=function(t){var i=t.tiltAxis;e.tiltAngleX=c(e.tiltAngleX,-90,90),e.tiltAngleY=c(e.tiltAngleY,-90,90),i&&(e.tiltAngleX="x"===i?e.tiltAngleX:0,e.tiltAngleY="y"===i?e.tiltAngleY:0)},this.updateTiltAnglesPercentage=function(t){var i=t.tiltMaxAngleY;e.tiltAngleXPercentage=e.tiltAngleX/t.tiltMaxAngleX*100,e.tiltAngleYPercentage=e.tiltAngleY/i*100},this.render=function(t){t.style.transform+="rotateX("+e.tiltAngleX+"deg) rotateY("+e.tiltAngleY+"deg) "}},d=function(e){var t=this;this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=function(e){return{width:2*e.width,height:2*e.height}},this.setSize=function(e){var i=t.calculateGlareSize(e);t.glareEl.style.width=i.width+"px",t.glareEl.style.height=i.height+"px"},this.update=function(e,i,n,a){t.updateAngle(e,i.glareReverse),t.updateOpacity(e,i,n,a)},this.updateAngle=function(e,i){var n=e.xPercentage,a=180/Math.PI,o=n?Math.atan2(e.yPercentage,-n)*a:0;t.glareAngle=o-(i?180:0)},this.updateOpacity=function(e,i,n,a){var o,r=e.xPercentage,l=e.yPercentage,s=i.glareReverse,p=i.glareMaxOpacity,d=n?-1:1,u=a?-1:1;switch(i.glarePosition){case"top":o=-r*d;break;case"right":o=l*u;break;case"bottom":o=r*d;break;case"left":o=-l*u;break;case"all":o=Math.hypot(r,l);break;default:o=r*d}var g=c(o=s?-o:o,0,100);t.glareOpacity=g*p/100},this.render=function(e){var i=e.glareColor;t.glareEl.style.transform="rotate("+t.glareAngle+"deg) translate(-50%, -50%)",t.glareEl.style.opacity=t.glareOpacity.toString(),t.glareEl.style.background="linear-gradient(0deg, rgba(255,255,255,0) 0%, "+i+" 100%)"},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";var i=this.calculateGlareSize(e),n={position:"absolute",top:"50%",left:"50%","transform-origin":"0% 0%","pointer-events":"none",width:i.width+"px",height:i.height+"px"};Object.assign(this.glareWrapperEl.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden"}),Object.assign(this.glareEl.style,n)},u=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},transitionTimeoutId:void 0,updateAnimationId:null,childrenImgsCounter:0,childrenImgsLength:0,scale:1},t.tilt=null,t.glare=null,t.loadWrapperAndChildElements=function(){var e=Array.from(t.wrapperEl.node.getElementsByTagName("img"));t.wrapperEl.childrenImgsLength=e.length,0!==t.wrapperEl.childrenImgsLength?e.forEach((function(e){e.complete?t.allImagesLoaded():e.addEventListener("load",t.allImagesLoaded)})):t.setSize()},t.allImagesLoaded=function(){t.wrapperEl.childrenImgsCounter++,t.wrapperEl.childrenImgsCounter===t.wrapperEl.childrenImgsLength&&t.setSize()},t.setSize=function(){t.setWrapperElSize(),t.glare&&t.glare.setSize(t.wrapperEl.size)},t.mainLoop=function(e){null!==t.wrapperEl.updateAnimationId&&cancelAnimationFrame(t.wrapperEl.updateAnimationId),t.processInput(e),t.update(e.type),t.wrapperEl.updateAnimationId=requestAnimationFrame(t.renderFrame)},t.onEnter=function(e){var i=t.props.onEnter;t.wrapperEl.node.style.willChange="transform",t.setTransition(),i&&i(e.type)},t.onMove=function(e){t.mainLoop(e),t.emitOnMove(e)},t.onLeave=function(e){var i=t.props.onLeave;if(t.setTransition(),i&&i(e.type),t.props.reset){var n=new CustomEvent("autoreset");t.onMove(n)}},t.processInput=function(e){var i=t.props.scale;switch(e.type){case"mousemove":t.wrapperEl.clientPosition.x=e.pageX,t.wrapperEl.clientPosition.y=e.pageY,t.wrapperEl.scale=i;break;case"touchmove":t.wrapperEl.clientPosition.x=e.touches[0].pageX,t.wrapperEl.clientPosition.y=e.touches[0].pageY,t.wrapperEl.scale=i;break;case"deviceorientation":t.processInputDeviceOrientation(e),t.wrapperEl.scale=i;break;case"autoreset":var n=t.props,a=n.tiltAngleYInitial/n.tiltMaxAngleY*100;t.wrapperEl.clientPosition.xPercentage=c(n.tiltAngleXInitial/n.tiltMaxAngleX*100,-100,100),t.wrapperEl.clientPosition.yPercentage=c(a,-100,100),t.wrapperEl.scale=1}},t.processInputDeviceOrientation=function(e){if(e.gamma&&e.beta&&t.props.gyroscope){var i=t.props,n=i.tiltMaxAngleY,a=e.gamma;t.wrapperEl.clientPosition.xPercentage=e.beta/i.tiltMaxAngleX*100,t.wrapperEl.clientPosition.yPercentage=a/n*100,t.wrapperEl.clientPosition.xPercentage=c(t.wrapperEl.clientPosition.xPercentage,-100,100),t.wrapperEl.clientPosition.yPercentage=c(t.wrapperEl.clientPosition.yPercentage,-100,100)}},t.update=function(e){var i=t.props,n=i.tiltEnable,a=i.flipVertically,o=i.flipHorizontally;t.updateClientInput(e),n&&t.tilt.update(t.wrapperEl.clientPosition,t.props),t.updateFlip(),t.tilt.updateTiltAnglesPercentage(t.props),t.glare&&t.glare.update(t.wrapperEl.clientPosition,t.props,a,o)},t.updateClientInput=function(e){if("autoreset"!==e&&"deviceorientation"!==e){var i,n;if(t.props.trackOnWindow){var a=t.wrapperEl.clientPosition,o=a.x;i=a.y/window.innerHeight*200-100,n=o/window.innerWidth*200-100}else{var r=t.wrapperEl,l=r.size,s=r.clientPosition;i=(s.y-l.top)/l.height*200-100,n=((o=s.x)-l.left)/l.width*200-100}t.wrapperEl.clientPosition.xPercentage=c(i,-100,100),t.wrapperEl.clientPosition.yPercentage=c(n,-100,100)}},t.updateFlip=function(){var e=t.props,i=e.flipHorizontally;e.flipVertically&&(t.tilt.tiltAngleX+=180,t.tilt.tiltAngleY*=-1),i&&(t.tilt.tiltAngleY+=180)},t.renderFrame=function(){t.resetWrapperElTransform(),t.renderPerspective(),t.tilt.render(t.wrapperEl.node),t.renderScale(),t.glare&&t.glare.render(t.props)},t}(function(e,t){function i(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)})(t,e),t.prototype.componentDidMount=function(){this.loadWrapperAndChildElements(),this.tilt=new p,this.initGlare(),this.addEventListeners();var e=new CustomEvent("autoreset");this.mainLoop(e);var t=new CustomEvent("initial");this.emitOnMove(t)},t.prototype.componentWillUnmount=function(){clearTimeout(this.wrapperEl.transitionTimeoutId),null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()},t.prototype.componentDidUpdate=function(){var e=this.props;if(!(e.onMove||e.onEnter||e.onLeave)){var t=new CustomEvent("propchange");this.mainLoop(t)}},t.prototype.addEventListeners=function(){var e=this.props,t=e.trackOnWindow,i=e.gyroscope;if(window.addEventListener("resize",this.setSize),t&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),i){if(!window.DeviceOrientationEvent)return void console.error("Browser doesn't support Device Orientation.");window.addEventListener("deviceorientation",this.onMove)}},t.prototype.removeEventListeners=function(){var e=this.props,t=e.trackOnWindow,i=e.gyroscope;window.removeEventListener("resize",this.setSize),t&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),i&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)},t.prototype.setWrapperElSize=function(){var e=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=e.left+window.scrollX,this.wrapperEl.size.top=e.top+window.scrollY},t.prototype.initGlare=function(){this.props.glareEnable&&(this.glare=new d(this.wrapperEl.size),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))},t.prototype.emitOnMove=function(e){var t=this.props.onMove;if(t){var i=0,n=0;this.glare&&(i=this.glare.glareAngle,n=this.glare.glareOpacity),t(this.tilt.tiltAngleX,this.tilt.tiltAngleY,this.tilt.tiltAngleXPercentage,this.tilt.tiltAngleYPercentage,i,n,e.type)}},t.prototype.resetWrapperElTransform=function(){this.wrapperEl.node.style.transform=""},t.prototype.renderPerspective=function(){this.wrapperEl.node.style.transform+="perspective("+this.props.perspective+"px) "},t.prototype.renderScale=function(){var e=this.wrapperEl.scale;this.wrapperEl.node.style.transform+="scale3d("+e+","+e+","+e+")"},t.prototype.setTransition=function(){var e=this.props,t=e.transitionSpeed,i=e.transitionEasing;this.wrapperEl.transitionTimeoutId=s(this.wrapperEl.node,"all",t,i,this.wrapperEl.transitionTimeoutId),this.glare&&(this.glare.transitionTimeoutId=s(this.glare.glareEl,"opacity",t,i,this.glare.transitionTimeoutId))},t.prototype.render=function(){var e=this,t=this.props;return a.a.createElement("div",{ref:function(t){return e.wrapperEl.node=t},onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:t.className,style:t.style},t.children)},t.defaultProps=l}(n.PureComponent),i("8uUf")),g=i("qKvR");t.a=function(e){var t=e.imgName,i=void 0===t?"oakley.png":t,n=e.width,a=void 0===n?"300px":n,o=e.height,r=void 0===o?"300px":o;return Object(g.c)("div",{style:{height:r,width:a,backgroundColor:"none",transition:"width 1s height 1s"}},Object(g.c)(u.a,{imgName:i}))}},gCJi:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=i("SKkF"),o=(n=a)&&n.__esModule?n:{default:n};t.default=o.default},jmMV:function(e,t,i){},"zE4+":function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return z})),i.d(t,"pageQuery",(function(){return _}));i("E5k/");var n=i("q1tI"),a=i.n(n),o=i("Bl7J"),r=(i("Wbzz"),i("tRbT")),l=(i("GMqj"),i("8uUf"),i("eELa")),s=i("kT3S"),c=i("v564"),p=(i("MPxq"),i("r5vi")),d=i("R/WZ"),u=i("1w3K"),g=i("Ff2n"),h=i("wx14"),m=(i("17x9"),i("iuhU")),f=i("H2TA"),v=i("VD++"),b=i("NqtD"),y=n.forwardRef((function(e,t){var i=e.children,a=e.classes,o=e.className,r=e.color,l=void 0===r?"default":r,s=e.component,c=void 0===s?"button":s,p=e.disabled,d=void 0!==p&&p,u=e.disableFocusRipple,f=void 0!==u&&u,y=e.focusVisibleClassName,w=e.size,E=void 0===w?"large":w,x=e.variant,O=void 0===x?"round":x,j=Object(g.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return n.createElement(v.a,Object(h.a)({className:Object(m.a)(a.root,o,"round"!==O&&a.extended,"large"!==E&&a["size".concat(Object(b.a)(E))],d&&a.disabled,{primary:a.primary,secondary:a.secondary,inherit:a.colorInherit}[l]),component:c,disabled:d,focusRipple:!f,focusVisibleClassName:Object(m.a)(a.focusVisible,y),ref:t},j),n.createElement("span",{className:a.label},i))})),w=Object(f.a)((function(e){return{root:Object(h.a)({},e.typography.button,{boxSizing:"border-box",minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground},textDecoration:"none"},"&$focusVisible":{boxShadow:e.shadows[6]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},secondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}}),{name:"MuiFab"})(y),E=i("1waj"),x=i.n(E),O=i("kOA+"),j=i.n(O),P=i("mwIZ"),A=i.n(P),C=i("a5sw"),k=i("zDcZ"),M=i("Spfr"),L=i("vOnD"),I=(i("82Oa"),i("qKvR"));function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}Object(d.a)((function(e){return{root:{display:"flex",flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}})),a.a.forwardRef((function(e,t){return Object(I.c)("input",T({ref:t},e,{type:"email",className:"AppEmailInput"}))}));function z(e){var t,i=e.data,a=A()(i,"nodeChoosedog");console.log("resources",a);var d=A()(i,"nodeUserchoice");console.log(d);var g=Object(p.a)(["hasConsentSet","userChoice","dogChoice"]),h=(g[0],g[1]),m=(g[2],Object(n.useState)({renderUserChoice:!1,renderLoader:!1,renderCookieBanner:!1,isPanelVisible1:!1,isPanelVisible2:!1,isPanelVisible3:!1})),f=m[0],v=m[1],b=function(e){h("dogChoice","dudley",{path:"/"})},y=L.default.div.withConfig({displayName:"case-study-options__DogOptionPanel",componentId:"sc-1i2kzgj-0"})(["text-decoration:none !important;position:relative;display:flex;flex-direction:column;align-content:center;justify-content:center;width:100%;flex-grow:1;height:6.625rem;border-radius:2rem 2rem 2rem 0;background-color:",";& a{display:flex;text-decoration:none !important;}& div{display:flex;text-decoration:none !important;}"],k.a.palette.deminBlue.main),E=L.default.div.withConfig({displayName:"case-study-options__MinusButton",componentId:"sc-1i2kzgj-1"})(["display:flex;justify-content:center;margin-top:0rem;display:flex;width:0.7rem;height:2px;background-color:",";"],k.a.palette.white.main),O=L.default.div.withConfig({displayName:"case-study-options__PanelTitle",componentId:"sc-1i2kzgj-2"})(["display:flex;justify-content:center;padding-bottom:1rem;padding-top:0.5rem;width:100%;height:1.313rem;font-family:",";font-size:0.938rem;font-weight:600;font-stretch:normal;font-style:normal;line-height:1.6;letter-spacing:-0.15px;text-align:left;color:",";"],k.a.typography.fontFamily,k.a.palette.midnightBlue.main),P=L.default.div.withConfig({displayName:"case-study-options__PanelDogName",componentId:"sc-1i2kzgj-3"})(["display:flex;justify-content:center;padding-bottom:1rem;height:2.188rem;font-family:",";font-size:1.563rem;font-weight:600;font-stretch:normal;font-style:normal;line-height:1.4;letter-spacing:-0.25px;text-align:left;color:",";"],k.a.typography.fontFamily,k.a.palette.white.main);return Object(I.c)(o.a,null,f.renderLoader?Object(I.c)(s.a,{unmountMe:function(){v({renderUserChoice:!1,renderLoader:!1,renderCookieBanner:!1,isPanelVisible1:!1,isPanelVisible2:!1,isPanelVisible3:!1})}}):"",f.renderCookieBanner?Object(I.c)(c.a,{unmountMe:function(){v({renderUserChoice:!1,renderLoader:!1,renderCookieBanner:!1,isPanelVisible1:!1,isPanelVisible2:!1,isPanelVisible3:!1})}}):"",Object(I.c)("div",{style:{position:"absolute",left:"0",top:"0",width:"100%",height:"100vh",backgroundColor:"#24add6",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover",backgroundImage:"url(/caseStudyOptions/vetmedin_backgrounds_plain_01@3x.png)"}}),Object(I.c)(l.a,null),Object(I.c)(r.a,((t={container:!0,spacing:0}).spacing=0,t.justify="center",t.style={border:"0px solid black",minHeight:"100vh",width:"100%"},t),Object(I.c)(r.a,{item:!0,xs:12,sm:4,align:"center",style:{height:"560px",border:"0px solid red"}},Object(I.c)("div",{style:{position:"relative",margin:"auto",width:"100%",minHeight:"100%",padding:"2rem",border:"0px solid red"}},Object(I.c)(u.CSSTransitionGroup,{className:"container result",component:"div",transitionName:"fade",transitionEnterTimeout:800,transitionLeaveTimeout:500,transitionAppear:!0,transitionAppearTimeout:500},Object(I.c)("div",{style:{position:"absolute",left:0,top:0}},Object(I.c)(M.a,{axis:"Y",imgName:"mrs_jenkins_pose_01@3x.png",height:"600px",width:"600px"})),Object(I.c)("div",{style:{position:"absolute",left:"20%",top:"30%"}},Object(I.c)(M.a,{axis:"Y",imgName:"dudley_standing_pose_02@3x.png",height:"600px",width:"600px"})),Object(I.c)(w,{style:{position:"absolute",left:"50%",top:"100%",backgroundColor:k.a.palette.deminBlue.main,color:"white"},color:"primary","aria-label":"show dog and owner name. In this case Dudley",onClick:function(e){v({renderUserChoice:!1,renderLoader:!1,renderCookieBanner:!1,isPanelVisible1:!0,isPanelVisible2:!1,isPanelVisible3:!1})}},Object(I.c)(x.a,null)),Object(I.c)(j.a,{"data-active":f.isPanelVisible1,style:{position:"absolute",left:"15%",top:"100%",marginLeft:"10%",width:"270px",display:f.isPanelVisible1?"flex":"none",textDecoration:"none"},to:"/owner-and-dog-detail-slide/",onClick:b},Object(I.c)(y,null,Object(I.c)("div",{style:{display:"flex",height:"10px"}}," "),Object(I.c)(E,null),Object(I.c)(O,null,"MRS JENKINS WITH"),Object(I.c)(P,null,"Dudley")))))),Object(I.c)(r.a,{item:!0,xs:12,sm:4,align:"center",justify:"center",style:{height:"560px",border:"0px solid red"}},Object(I.c)("div",{style:{display:"flex",alignItems:"center",position:"relative",margin:"auto",width:"100%",minHeight:"100%",padding:"2rem",border:"0px solid red"}},Object(I.c)(u.CSSTransitionGroup,{className:"container result",component:"div",transitionName:"fade",transitionEnterTimeout:800,transitionLeaveTimeout:500,transitionAppear:!0,transitionAppearTimeout:500},Object(I.c)("div",{style:{position:"absolute",left:0,top:0}},Object(I.c)(M.a,{axis:"Y",imgName:"mr_oakley_poses_02@3x.png",height:"600px",width:"600px"})),Object(I.c)("div",{style:{position:"absolute",left:"20%",top:"30%"}},Object(I.c)(M.a,{axis:"Y",imgName:"poppy_standing_02@3x.png",height:"600px",width:"600px"})),Object(I.c)(w,{style:{position:"absolute",left:"50%",top:"100%",backgroundColor:k.a.palette.deminBlue.main,color:"white"},color:"primary","aria-label":"show dog and owner name. In this case Poppy",onClick:function(e){v({renderUserChoice:!1,renderLoader:!1,renderCookieBanner:!1,isPanelVisible1:!1,isPanelVisible2:!0,isPanelVisible3:!1})}},Object(I.c)(x.a,null)),Object(I.c)(j.a,{"data-active":f.isPanelVisible2,style:{position:"absolute",left:"15%",top:"100%",marginLeft:"10%",width:"270px",display:f.isPanelVisible2?"flex":"none",textDecoration:"none"},to:"/owner-and-dog-detail-slide/",onClick:b},Object(I.c)(y,null,Object(I.c)("div",{style:{display:"flex",height:"10px"}}," "),Object(I.c)(E,null),Object(I.c)(O,null,"MR OAKLEY WITH"),Object(I.c)(P,null,"Poppy")))))),Object(I.c)(r.a,{item:!0,xs:12,sm:4,align:"center",style:{height:"560px",border:"0px solid red"}},Object(I.c)("div",{style:{position:"relative",margin:"auto",width:"100%",minHeight:"100%",padding:"2rem",border:"0px solid red"}},Object(I.c)(u.CSSTransitionGroup,{className:"container result",component:"div",transitionName:"fade",transitionEnterTimeout:800,transitionLeaveTimeout:500,transitionAppear:!0,transitionAppearTimeout:500},Object(I.c)("div",{style:{position:"absolute",left:0,top:0}},Object(I.c)(M.a,{axis:"Y",imgName:"mrs_richardson_pose_02@3x.png",height:"600px",width:"600px"})),Object(I.c)("div",{style:{position:"absolute",left:"20%",top:"30%"}},Object(I.c)(M.a,{axis:"Y",imgName:"reggie_standing_poses_02@3x.png",height:"600px",width:"600px"})),Object(I.c)(w,{style:{position:"absolute",left:"50%",top:"100%",backgroundColor:k.a.palette.deminBlue.main,color:"white"},color:"red","aria-label":"show dog and owner name. In this case Reggie",onClick:function(e){v({renderUserChoice:!1,renderLoader:!1,renderCookieBanner:!1,isPanelVisible1:!1,isPanelVisible2:!1,isPanelVisible3:!0})}},Object(I.c)(x.a,null)),Object(I.c)(j.a,{"data-active":f.isPanelVisible3,style:{position:"absolute",left:"15%",top:"100%",marginLeft:"10%",width:"270px",display:f.isPanelVisible3?"flex":"none",textDecoration:"none"},to:"/owner-and-dog-detail-slide/",onClick:b},Object(I.c)(y,null,Object(I.c)("div",{style:{display:"flex",height:"10px"}}," "),Object(I.c)(E,null),Object(I.c)(O,null,"MRS RICHARDSON WITH"),Object(I.c)(P,null,"Reggie")))))),Object(I.c)(r.a,{item:!0,xs:12,sm:12,align:"center",style:{border:"0px solid red"}},Object(I.c)("div",{style:{position:"relative",width:"100%",height:"100%",padding:"2rem",fontSize:"1.5rem",fontWeight:"700",fontFamily:k.a.typography.fontFamily}},Object(C.i)(a.field_bottomtitle.processed)))))}var _="345670595"}}]);
//# sourceMappingURL=component---src-pages-case-study-options-js-5ae071f43cadb4bf8d80.js.map