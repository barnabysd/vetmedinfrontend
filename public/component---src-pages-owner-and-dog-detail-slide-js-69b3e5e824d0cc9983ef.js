(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{CczQ:function(e,t,i){var n=i("P8UN"),o=Math.abs;n(n.S,"Math",{hypot:function(e,t){for(var i,n,a=0,r=0,l=arguments.length,s=0;r<l;)s<(i=o(arguments[r++]))?(a=a*(n=s/i)*n+1,s=i):a+=i>0?(n=i/s)*n:i;return s===1/0?1/0:s*Math.sqrt(a)}})},Spfr:function(e,t,i){"use strict";var n=i("q1tI"),o=i.n(n),a=(i("YbXK"),i("cFtU"),i("q8oJ"),i("8npG"),i("CczQ"),i("E5k/"),i("LagC"),function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)}),r=function(){return(r=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var o in t=arguments[i])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l=r(r({scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1},{tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:null,tiltAngleXManual:null,tiltAngleYManual:null}),{glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1});function s(e,t,i,n,o){return void 0===o&&(o=null),o&&clearTimeout(o),e.style.transition=t+" "+i+"ms "+n,setTimeout((function(){e.style.transition=""}),i)}function c(e,t,i){return Math.min(Math.max(e,t),i)}var p=function(){var e=this;this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=function(t,i){e.updateTilt(t,i),e.updateTiltManualInput(t,i),e.updateTiltReverse(i),e.updateTiltLimits(i)},this.updateTilt=function(t,i){var n=t.yPercentage,o=i.tiltMaxAngleY;e.tiltAngleX=t.xPercentage*i.tiltMaxAngleX/100,e.tiltAngleY=n*o/100*-1},this.updateTiltManualInput=function(t,i){var n=i.tiltAngleXManual,o=i.tiltAngleYManual,a=i.tiltMaxAngleX,r=i.tiltMaxAngleY;null===n&&null===o||(e.tiltAngleX=null!==n?n:0,e.tiltAngleY=null!==o?o:0,t.xPercentage=100*e.tiltAngleX/a,t.yPercentage=100*e.tiltAngleY/r)},this.updateTiltReverse=function(t){var i=t.tiltReverse?-1:1;e.tiltAngleX=i*e.tiltAngleX,e.tiltAngleY=i*e.tiltAngleY},this.updateTiltLimits=function(t){var i=t.tiltAxis;e.tiltAngleX=c(e.tiltAngleX,-90,90),e.tiltAngleY=c(e.tiltAngleY,-90,90),i&&(e.tiltAngleX="x"===i?e.tiltAngleX:0,e.tiltAngleY="y"===i?e.tiltAngleY:0)},this.updateTiltAnglesPercentage=function(t){var i=t.tiltMaxAngleY;e.tiltAngleXPercentage=e.tiltAngleX/t.tiltMaxAngleX*100,e.tiltAngleYPercentage=e.tiltAngleY/i*100},this.render=function(t){t.style.transform+="rotateX("+e.tiltAngleX+"deg) rotateY("+e.tiltAngleY+"deg) "}},d=function(e){var t=this;this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=function(e){return{width:2*e.width,height:2*e.height}},this.setSize=function(e){var i=t.calculateGlareSize(e);t.glareEl.style.width=i.width+"px",t.glareEl.style.height=i.height+"px"},this.update=function(e,i,n,o){t.updateAngle(e,i.glareReverse),t.updateOpacity(e,i,n,o)},this.updateAngle=function(e,i){var n=e.xPercentage,o=180/Math.PI,a=n?Math.atan2(e.yPercentage,-n)*o:0;t.glareAngle=a-(i?180:0)},this.updateOpacity=function(e,i,n,o){var a,r=e.xPercentage,l=e.yPercentage,s=i.glareReverse,p=i.glareMaxOpacity,d=n?-1:1,h=o?-1:1;switch(i.glarePosition){case"top":a=-r*d;break;case"right":a=l*h;break;case"bottom":a=r*d;break;case"left":a=-l*h;break;case"all":a=Math.hypot(r,l);break;default:a=r*d}var g=c(a=s?-a:a,0,100);t.glareOpacity=g*p/100},this.render=function(e){var i=e.glareColor;t.glareEl.style.transform="rotate("+t.glareAngle+"deg) translate(-50%, -50%)",t.glareEl.style.opacity=t.glareOpacity.toString(),t.glareEl.style.background="linear-gradient(0deg, rgba(255,255,255,0) 0%, "+i+" 100%)"},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";var i=this.calculateGlareSize(e),n={position:"absolute",top:"50%",left:"50%","transform-origin":"0% 0%","pointer-events":"none",width:i.width+"px",height:i.height+"px"};Object.assign(this.glareWrapperEl.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden"}),Object.assign(this.glareEl.style,n)},h=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},transitionTimeoutId:void 0,updateAnimationId:null,childrenImgsCounter:0,childrenImgsLength:0,scale:1},t.tilt=null,t.glare=null,t.loadWrapperAndChildElements=function(){var e=Array.from(t.wrapperEl.node.getElementsByTagName("img"));t.wrapperEl.childrenImgsLength=e.length,0!==t.wrapperEl.childrenImgsLength?e.forEach((function(e){e.complete?t.allImagesLoaded():e.addEventListener("load",t.allImagesLoaded)})):t.setSize()},t.allImagesLoaded=function(){t.wrapperEl.childrenImgsCounter++,t.wrapperEl.childrenImgsCounter===t.wrapperEl.childrenImgsLength&&t.setSize()},t.setSize=function(){t.setWrapperElSize(),t.glare&&t.glare.setSize(t.wrapperEl.size)},t.mainLoop=function(e){null!==t.wrapperEl.updateAnimationId&&cancelAnimationFrame(t.wrapperEl.updateAnimationId),t.processInput(e),t.update(e.type),t.wrapperEl.updateAnimationId=requestAnimationFrame(t.renderFrame)},t.onEnter=function(e){var i=t.props.onEnter;t.wrapperEl.node.style.willChange="transform",t.setTransition(),i&&i(e.type)},t.onMove=function(e){t.mainLoop(e),t.emitOnMove(e)},t.onLeave=function(e){var i=t.props.onLeave;if(t.setTransition(),i&&i(e.type),t.props.reset){var n=new CustomEvent("autoreset");t.onMove(n)}},t.processInput=function(e){var i=t.props.scale;switch(e.type){case"mousemove":t.wrapperEl.clientPosition.x=e.pageX,t.wrapperEl.clientPosition.y=e.pageY,t.wrapperEl.scale=i;break;case"touchmove":t.wrapperEl.clientPosition.x=e.touches[0].pageX,t.wrapperEl.clientPosition.y=e.touches[0].pageY,t.wrapperEl.scale=i;break;case"deviceorientation":t.processInputDeviceOrientation(e),t.wrapperEl.scale=i;break;case"autoreset":var n=t.props,o=n.tiltAngleYInitial/n.tiltMaxAngleY*100;t.wrapperEl.clientPosition.xPercentage=c(n.tiltAngleXInitial/n.tiltMaxAngleX*100,-100,100),t.wrapperEl.clientPosition.yPercentage=c(o,-100,100),t.wrapperEl.scale=1}},t.processInputDeviceOrientation=function(e){if(e.gamma&&e.beta&&t.props.gyroscope){var i=t.props,n=i.tiltMaxAngleY,o=e.gamma;t.wrapperEl.clientPosition.xPercentage=e.beta/i.tiltMaxAngleX*100,t.wrapperEl.clientPosition.yPercentage=o/n*100,t.wrapperEl.clientPosition.xPercentage=c(t.wrapperEl.clientPosition.xPercentage,-100,100),t.wrapperEl.clientPosition.yPercentage=c(t.wrapperEl.clientPosition.yPercentage,-100,100)}},t.update=function(e){var i=t.props,n=i.tiltEnable,o=i.flipVertically,a=i.flipHorizontally;t.updateClientInput(e),n&&t.tilt.update(t.wrapperEl.clientPosition,t.props),t.updateFlip(),t.tilt.updateTiltAnglesPercentage(t.props),t.glare&&t.glare.update(t.wrapperEl.clientPosition,t.props,o,a)},t.updateClientInput=function(e){if("autoreset"!==e&&"deviceorientation"!==e){var i,n;if(t.props.trackOnWindow){var o=t.wrapperEl.clientPosition,a=o.x;i=o.y/window.innerHeight*200-100,n=a/window.innerWidth*200-100}else{var r=t.wrapperEl,l=r.size,s=r.clientPosition;i=(s.y-l.top)/l.height*200-100,n=((a=s.x)-l.left)/l.width*200-100}t.wrapperEl.clientPosition.xPercentage=c(i,-100,100),t.wrapperEl.clientPosition.yPercentage=c(n,-100,100)}},t.updateFlip=function(){var e=t.props,i=e.flipHorizontally;e.flipVertically&&(t.tilt.tiltAngleX+=180,t.tilt.tiltAngleY*=-1),i&&(t.tilt.tiltAngleY+=180)},t.renderFrame=function(){t.resetWrapperElTransform(),t.renderPerspective(),t.tilt.render(t.wrapperEl.node),t.renderScale(),t.glare&&t.glare.render(t.props)},t}(function(e,t){function i(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)})(t,e),t.prototype.componentDidMount=function(){this.loadWrapperAndChildElements(),this.tilt=new p,this.initGlare(),this.addEventListeners();var e=new CustomEvent("autoreset");this.mainLoop(e);var t=new CustomEvent("initial");this.emitOnMove(t)},t.prototype.componentWillUnmount=function(){clearTimeout(this.wrapperEl.transitionTimeoutId),null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()},t.prototype.componentDidUpdate=function(){var e=this.props;if(!(e.onMove||e.onEnter||e.onLeave)){var t=new CustomEvent("propchange");this.mainLoop(t)}},t.prototype.addEventListeners=function(){var e=this.props,t=e.trackOnWindow,i=e.gyroscope;if(window.addEventListener("resize",this.setSize),t&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),i){if(!window.DeviceOrientationEvent)return void console.error("Browser doesn't support Device Orientation.");window.addEventListener("deviceorientation",this.onMove)}},t.prototype.removeEventListeners=function(){var e=this.props,t=e.trackOnWindow,i=e.gyroscope;window.removeEventListener("resize",this.setSize),t&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),i&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)},t.prototype.setWrapperElSize=function(){var e=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=e.left+window.scrollX,this.wrapperEl.size.top=e.top+window.scrollY},t.prototype.initGlare=function(){this.props.glareEnable&&(this.glare=new d(this.wrapperEl.size),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))},t.prototype.emitOnMove=function(e){var t=this.props.onMove;if(t){var i=0,n=0;this.glare&&(i=this.glare.glareAngle,n=this.glare.glareOpacity),t(this.tilt.tiltAngleX,this.tilt.tiltAngleY,this.tilt.tiltAngleXPercentage,this.tilt.tiltAngleYPercentage,i,n,e.type)}},t.prototype.resetWrapperElTransform=function(){this.wrapperEl.node.style.transform=""},t.prototype.renderPerspective=function(){this.wrapperEl.node.style.transform+="perspective("+this.props.perspective+"px) "},t.prototype.renderScale=function(){var e=this.wrapperEl.scale;this.wrapperEl.node.style.transform+="scale3d("+e+","+e+","+e+")"},t.prototype.setTransition=function(){var e=this.props,t=e.transitionSpeed,i=e.transitionEasing;this.wrapperEl.transitionTimeoutId=s(this.wrapperEl.node,"all",t,i,this.wrapperEl.transitionTimeoutId),this.glare&&(this.glare.transitionTimeoutId=s(this.glare.glareEl,"opacity",t,i,this.glare.transitionTimeoutId))},t.prototype.render=function(){var e=this,t=this.props;return o.a.createElement("div",{ref:function(t){return e.wrapperEl.node=t},onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:t.className,style:t.style},t.children)},t.defaultProps=l}(n.PureComponent),i("8uUf")),g=i("qKvR");t.a=function(e){var t=e.imgName,i=void 0===t?"oakley.png":t,n=e.width,o=void 0===n?"300px":n,a=e.height,r=void 0===a?"300px":a;return Object(g.c)("div",{style:{height:r,width:o,backgroundColor:"none",transition:"width 1s height 1s"}},Object(g.c)(h.a,{imgName:i}))}},eCxS:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return re})),i.d(t,"pageQuery",(function(){return le}));i("E5k/");var n=i("q1tI"),o=i("Bl7J"),a=(i("Wbzz"),i("tRbT")),r=(i("8uUf"),i("r5vi")),l=i("R/WZ"),s=(i("1w3K"),i("SLu4")),c=i.n(s),p=i("cbsx"),d=i.n(p),h=i("H2TA"),g=i("/EAt"),u=i("Uf6+"),f=i("3PeG"),m=i("nCZa"),v=i("Imu7"),b=i("sRsu"),y=i("kKAo"),w=i("zDcZ"),x=i("vOnD"),E=i("mwIZ"),O=i.n(E),j=i("a5sw"),A=(i("82Oa"),i("qKvR")),C=x.default.div.withConfig({displayName:"DogDetailTable__TableHolder",componentId:"sc-11dtto8-0"})(["background-color:",";border-radius:2rem 2rem 2rem 2rem;box-shadow:none;border-color:",";width:500px;"],w.a.palette.skyBlue.main,w.a.palette.skyBlue.main),k=x.default.div.withConfig({displayName:"DogDetailTable__PanelTitle",componentId:"sc-11dtto8-1"})(["font-family:",";font-size:",";font-weight:",";background-color:",";transform:rotate(270deg);color:#30c1e2;border-radius:2rem 2rem 2rem 0rem;width:406px;height:574px;position:absolute;left:59px;top:-84px;padding:1rem;box-shadow:-8px 6px 5px rgba(35,42,54,0.2);"],w.a.overrides.MuiTypography.h1.fontFamily,w.a.overrides.MuiTypography.h1.fontSize,w.a.overrides.MuiTypography.h1.fontWeight,w.a.palette.skyBlue.main),P=x.default.div.withConfig({displayName:"DogDetailTable__DogTabText",componentId:"sc-11dtto8-2"})(["height:16.5rem;font-family:",";font-size:2.313rem;font-weight:600;font-stretch:normal;font-style:normal;line-height:1.15;letter-spacing:7.4px;text-align:center;color:",";"],w.a.overrides.MuiTypography.h1.fontFamily,w.a.palette.topazBlue.main),M=Object(h.a)((function(e){var t;return{head:(t={backgroundColor:"white",color:w.a.palette.midnightBlue.main,fontWeight:"700",fontFamily:w.a.overrides.MuiTypography.h1.fontFamily,fontSize:w.a.overrides.MuiTypography.h1.fontSize},t.fontWeight=w.a.overrides.MuiTypography.h1.fontWeight,t),body:{backgroundColor:"#c6f5fe",color:w.a.palette.raven.main,fontFamily:w.a.overrides.MuiTypography.body1.fontFamily,fontSize:w.a.overrides.MuiTypography.body1.fontSize,fontWeight:w.a.overrides.MuiTypography.body1.fontWeight,padding:"1rem",margin:"1rem"}}}))(f.a),T=Object(h.a)((function(e){return{head:{backgroundColor:"#c6f5fe",color:w.a.palette.raven.main,fontFamily:w.a.overrides.MuiTypography.h4.fontFamily,fontSize:w.a.overrides.MuiTypography.h4.fontSize,fontWeight:w.a.overrides.MuiTypography.h4.fontWeight},body:{backgroundColor:"#c6f5fe",color:w.a.palette.raven.main,fontFamily:w.a.overrides.MuiTypography.h5.fontFamily,fontSize:w.a.overrides.MuiTypography.h5.fontSize,fontWeight:w.a.overrides.MuiTypography.h5.fontWeight,padding:"1rem",margin:"1rem"}}}))(f.a),S=Object(h.a)((function(e){return{head:{backgroundColor:"#effcfe",color:w.a.palette.raven.main},body:{backgroundColor:"#effcfe",color:w.a.palette.raven.main,fontFamily:w.a.overrides.MuiTypography.body1.fontFamily,fontSize:w.a.overrides.MuiTypography.body1.fontSize,fontWeight:w.a.overrides.MuiTypography.body1.fontWeight,height:"2.6rem",padding:"1rem"}}}))(f.a),z=Object(h.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:"white"}}}}))(b.a),I=Object(l.a)({table:{minWidth:"200px"}});function _(e){var t=e.resources,i=e.rowPointer,n=void 0===i?1:i,o=I();function a(e,t){return{rowTitle:e,rowValue:t}}var r=[a(t.field_tableitemtitle1,Object(j.j)(t.field_tableitemcontent1.processed)),a(t.field_tableitemtitle2,Object(j.j)(t.field_tableitemcontent2.processed)),a(t.field_tableitemtitle3,Object(j.j)(t.field_tableitemcontent3.processed)),a(t.field_tableitemtitle4,Object(j.j)(t.field_tableitemcontent4.processed)),a(t.field_tableitemtitle5,Object(j.j)(t.field_tableitemcontent5.processed)),a(t.field_tableitemtitle6,Object(j.j)(t.field_tableitemcontent6.processed))],l=[a(t.field_tableitemtitle7,Object(j.j)(t.field_tableitemcontent7.processed)),a(t.field_tableitemtitle8,Object(j.j)(t.field_tableitemcontent8.processed))];return 2===n&&l,Object(A.c)(C,null,Object(A.c)(k,null,Object(A.c)(P,null,t.field_paneltitle)),Object(A.c)(m.a,{component:y.a,style:{borderRadius:"0 2rem 0 0",position:"relative",height:"406px",overflow:"hidden",boxShadow:"none",paddingLeft:"1.5rem",paddingRight:"1.5rem",paddingTop:"1.5rem"}},Object(A.c)(g.a,{className:o.table,"aria-label":t.field_tabletitle},Object(A.c)(v.a,null,Object(A.c)(b.a,null,Object(A.c)(M,{colSpan:2,style:{border:"2px solid white"}},t.field_tabletitle))),Object(A.c)(u.a,null,r.map((function(e){return Object(A.c)(z,{key:e.rowTitle},Object(A.c)(T,{component:"th",scope:"row",style:{border:"2px solid white",padding:"0.5rem"}},e.rowTitle),Object(A.c)(S,{align:"left",style:{border:"2px solid white",padding:"0.5rem"}},e.rowValue))}))))))}var L=i("Spfr"),Y=i("edxh"),W=(i("pJf4"),i("wx14")),D=i("Ff2n"),N=(i("17x9"),i("iuhU")),X=i("4ppn"),F=i("5AJ6"),R=Object(F.a)(n.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),B=Object(F.a)(n.createElement("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked");var H=Object(h.a)((function(e){return{root:{position:"relative",display:"flex","&$checked $layer":{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}},layer:{left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},checked:{}}}),{name:"PrivateRadioButtonIcon"})((function(e){var t=e.checked,i=e.classes,o=e.fontSize;return n.createElement("div",{className:Object(N.a)(i.root,t&&i.checked)},n.createElement(R,{fontSize:o}),n.createElement(B,{fontSize:o,className:i.layer}))})),G=i("ye/S"),U=i("NqtD"),q=i("x6Ns");var $=n.createContext();var J=n.createElement(H,{checked:!0}),K=n.createElement(H,null),V=n.forwardRef((function(e,t){var i=e.checked,o=e.classes,a=e.color,r=void 0===a?"secondary":a,l=e.name,s=e.onChange,c=e.size,p=void 0===c?"medium":c,d=Object(D.a)(e,["checked","classes","color","name","onChange","size"]),h=n.useContext($),g=i,u=Object(q.a)(s,h&&h.onChange),f=l;return h&&(void 0===g&&(g=h.value===e.value),void 0===f&&(f=h.name)),n.createElement(X.a,Object(W.a)({color:r,type:"radio",icon:n.cloneElement(K,{fontSize:"small"===p?"small":"default"}),checkedIcon:n.cloneElement(J,{fontSize:"small"===p?"small":"default"}),classes:{root:Object(N.a)(o.root,o["color".concat(Object(U.a)(r))]),checked:o.checked,disabled:o.disabled},name:f,checked:g,onChange:u,ref:t},d))})),Z=Object(h.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(G.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(G.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiRadio"})(V);function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}Object(h.a)({root:{color:Y.a[400],"&$checked":{color:Y.a[600]}},checked:{}})((function(e){return Object(A.c)(Z,Q({color:"default"},e))}));var ee=i("kOA+"),te=i.n(ee),ie=i("itCy"),ne=Object(l.a)((function(e){return{root:{display:"flex",flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}})),oe=x.default.div.attrs((function(e){return{id:e.id,onClick:e.onClick}})).withConfig({displayName:"owner-and-dog-detail-slide__SliderBlueTabOutlineDot",componentId:"sc-1cahfb-0"})(["width:0.75rem;height:0.75rem;background:transparent;border:solid 2px ",";border-radius:50%;cursor:pointer;"],w.a.palette.egyptianBlue.main),ae=function(e){var t=e.classNam,i=void 0===t?"":t,n=e.onClick,o=e.id,a=e.tabSelected,r=void 0!==a&&a;return Object(A.c)("div",{className:i,style:{width:"30px",height:"30px"}},!0===r?Object(A.c)(oe,{id:o,style:{backgroundColor:w.a.palette.midnightBlue.main},onClick:n}):Object(A.c)(oe,{id:o,style:{backgroundColor:"transparent"},onClick:n}))};function re(e){var t,i=e.data,l=Object(r.a)([ie.c.DOG_CHOICE,ie.c.CASESTUDYS_ALL]),s=l[0],p=(l[1],l[2],{dogName:s[ie.c.DOG_CHOICE]?s[ie.c.DOG_CHOICE]:ie.d.POPPY,tabSelected:"first"}),h=Object(n.useState)(p),g=h[0],u=h[1],f=O()(i,"nodeDogoptions");if(console.log("state",g),!f)return"no data";var m=function(e){0===e?(console.log("tab1"),u(Object.assign(Object.assign({},g),{},{tabSelected:"first"}))):(console.log("tab2"),u(Object.assign(Object.assign({},g),{},{tabSelected:"second"})))};return Object(A.c)(o.a,{showBurgerMenuIcon:!0},Object(A.c)("div",{className:ne().root},Object(A.c)(a.a,((t={container:!0,spacing:0}).spacing=0,t.justify="flex-end",t.style={border:"1px solid black",minHeight:"100vh",width:"100%",maxWidth:"3000px"},t),Object(A.c)(a.a,{item:!0,xs:12,sm:8,align:"center",style:{border:"0px solid red",minHeight:"100%"}},Object(A.c)("div",{style:{position:"relative",width:"600px",minHeight:"100%",border:"0px solid red"}},Object(A.c)("div",{style:{position:"absolute",right:"0%",top:"17%",width:"600px",height:"100%",zIndex:"first"===g.tabSelected?2:3}},Object(A.c)(_,{resources:f})),Object(A.c)("div",{style:{position:"absolute",right:"2%",top:"15%",width:"600px",height:"100%",zIndex:"second"===g.tabSelected?2:3}},Object(A.c)(_,{resources:f,rowPointer:2})),Object(A.c)("div",{style:{position:"absolute",right:"33%",top:"69%",width:"300px",height:"30px",backgroundColor:"transparent",zIndex:10}},Object(A.c)("div",{style:{display:"flex",flexDirection:"row",width:"300px",justifyContent:"center"}},Object(A.c)(ae,{id:"dotTabButton1",tabSelected:"first"===g.tabSelected,onClick:function(){return m(0)}}),Object(A.c)(ae,{id:"dotTabButton2",tabSelected:"second"===g.tabSelected,onClick:function(){return m(1)}}))))),Object(A.c)(a.a,{item:!0,xs:12,sm:4,align:"flex-start",style:{border:"0px solid red"}},Object(A.c)("div",{"data-active":g.dogName===ie.d.DUDLEY,style:{display:g.dogName===ie.d.DUDLEY?"block":"none",position:"relative",margin:"auto",left:0,width:"100%",minHeight:"100%",padding:"2rem",border:"0px solid red"}},Object(A.c)("div",{style:{position:"absolute",left:"-30%",top:"5%"}},Object(A.c)(L.a,{axis:"Y",imgName:"mrs_jenkins_pose_01@3x.png",height:"600px",width:"600px"})),Object(A.c)("div",{style:{position:"absolute",left:"10%",top:"30%"}},Object(A.c)(L.a,{axis:"Y",imgName:"dudley_standing_pose_02@3x.png",height:"430px",width:"600px"}))),Object(A.c)("div",{"data-active":g.dogName===ie.d.POPPY,style:{display:g.dogName===ie.d.POPPY?"block":"none",position:"relative",margin:"auto",left:0,width:"100%",minHeight:"100%",padding:"2rem",border:"0px solid red"}},Object(A.c)("div",{style:{position:"absolute",left:"-30%",top:"5%"}},Object(A.c)(L.a,{axis:"Y",imgName:"mr_oakley_poses_02@3x.png",height:"600px",width:"600px"})),Object(A.c)("div",{style:{position:"absolute",left:"10%",top:"30%"}},Object(A.c)(L.a,{axis:"Y",imgName:"poppy_standing_02@3x.png",height:"430px",width:"600px"}))),Object(A.c)("div",{"data-active":g.dogName===ie.d.REGGIE,style:{display:g.dogName===ie.d.REGGIE?"block":"none",position:"relative",margin:"auto",width:"100%",minHeight:"100%",padding:"2rem",border:"0px solid red"}},Object(A.c)("div",{style:{position:"absolute",left:"-30%",top:"5%"}},Object(A.c)(L.a,{axis:"Y",imgName:"mr_oakley_poses_02@3x.png",height:"600px",width:"600px"})),Object(A.c)("div",{style:{position:"absolute",left:"10%",top:"30%"}},Object(A.c)(L.a,{axis:"Y",imgName:"poppy_standing_02@3x.png",height:"430px",width:"600px"})))))),Object(A.c)("div",{style:{position:"absolute",right:"0",bottom:"0",width:"150px",height:"100px",display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",textAlign:"center",border:"0px solid red"}},Object(A.c)(te.a,{style:{display:"flex",flexDirection:"row",alignItems:"center",width:"200px",height:"50px",textDecoration:"none",color:"white !important",fontFamily:w.a.typography.fontFamily,fontWeight:"700"},to:"/heart/"},"Continue ",Object(A.c)(d.a,null))),Object(A.c)("div",{style:{position:"absolute",left:"15%",bottom:"0",width:"150px",height:"100px",display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",textAlign:"center",zIndex:"100",border:"0px solid red"}}," ",Object(A.c)(te.a,{to:"/case-study-options/",style:{display:"flex",flexDirection:"row",alignItems:"center",width:"200px",height:"50px",textDecoration:"none",color:"white !important",fontFamily:w.a.typography.fontFamily,fontWeight:"700"}},Object(A.c)(c.a,null),"Change Dog")))}var le="2651826294"},x6Ns:function(e,t,i){"use strict";function n(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return t.reduce((function(e,t){return null==t?e:function(){for(var i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];e.apply(this,n),t.apply(this,n)}}),(function(){}))}i.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-owner-and-dog-detail-slide-js-69b3e5e824d0cc9983ef.js.map