(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{CczQ:function(e,t,i){var n=i("P8UN"),r=Math.abs;n(n.S,"Math",{hypot:function(e,t){for(var i,n,a=0,o=0,l=arguments.length,s=0;o<l;)s<(i=r(arguments[o++]))?(a=a*(n=s/i)*n+1,s=i):a+=i>0?(n=i/s)*n:i;return s===1/0?1/0:s*Math.sqrt(a)}})},DTFT:function(e,t,i){"use strict";i.d(t,"e",(function(){return m})),i.d(t,"b",(function(){return v})),i.d(t,"d",(function(){return A})),i.d(t,"a",(function(){return w})),i.d(t,"c",(function(){return T}));var n=i("itCy"),r=i("nHD1"),a=i.n(r),o=i("FR4q"),l=i.n(o),s=i("ViR1"),p=i.n(s),c=(i("JxF9"),i("g0X1"),i("wwni"),i("j5sE"),i("nZHY"),i("SADc"),i("yI0q")),d=i.n(c),E=i("X9Lb"),u=i.n(E),g=i("yjWk"),f=i.n(g),_=i("IG+q"),h=i.n(_),R=i("Ejm0"),O=i.n(R),m=function(e,t){var i={videoUrl:h.a,videoPosterImage:"",videoThumbnail:"",videoTitle:"Normal Heart",videoForDog:"dudley",videoText:"",videoCaptionText:"Normal Heart",videoNarrator:"",videoDuration:"0:00"};return t===n.f.DUDLEY&&(i={videoUrl:d.a,videoPosterImage:"",videoThumbnail:"",videoTitle:"Dudley's Heart",videoForDog:"dudley",videoText:"",videoCaptionText:"Dudley's Heart",videoNarrator:"no data",videoDuration:"0:00"}),t===n.f.POPPY&&(i={videoUrl:u.a,videoPosterImage:"",videoThumbnail:"",videoTitle:"Poppy's Heart",videoForDog:"poppy",videoText:"",videoCaptionText:"Poppy's Heart",videoNarrator:"",videoDuration:"0:00"}),t===n.f.REGGIE&&(i={videoUrl:f.a,videoPosterImage:"",videoThumbnail:"",videoTitle:"Reggie's Heart",videoForDog:"reggie",videoText:"",videoCaptionText:"Reggie's Heart",videoNarrator:"",videoDuration:"0:00"}),i},v=function(e){return e===n.f.DUDLEY||e===n.f.POPPY||e===n.f.REGGIE?O.a:"no data"},A=function(e){return e===n.f.DUDLEY?d.a:e===n.f.POPPY?u.a:e===n.f.REGGIE?f.a:h.a},w=function(e,t){if(void 0===e&&(e=n.b.NEUTRAL),e===n.b.NEUTRAL){if(t===n.f.DUDLEY)return"heart_Dudley-Sitting-Pose04.png";if(t===n.f.POPPY)return"heart_Poppy_Sitting_02.png";if(t===n.f.REGGIE)return"heart_Reggie_Standing_Poses02.png"}else if(e===n.b.HAPPY){if(t===n.f.DUDLEY)return"happy_Dudley-Sitting-Pose02.png";if(t===n.f.POPPY)return"happy_Poppy_Sitting_01.png";if(t===n.f.REGGIE)return"happy_Reggie_Sitting_Poses01.png"}else{if(t===n.f.DUDLEY)return"sad_Dudley_Sitting_Pose05.png";if(t===n.f.POPPY)return"sad_Poppy_Sitting_03.png";if(t===n.f.REGGIE)return"sad_Reggie_Sitting_Poses05.png"}},T=function(e,t){if(void 0===e&&(e=n.b.NEUTRAL),e===n.b.NEUTRAL){if(t===n.f.DUDLEY)return a.a;if(t===n.f.POPPY)return l.a;if(t===n.f.REGGIE)return p.a}else if(e===n.b.HAPPY){if(t===n.f.DUDLEY)return a.a;if(t===n.f.POPPY)return l.a;if(t===n.f.REGGIE)return p.a}else{if(t===n.f.DUDLEY)return a.a;if(t===n.f.POPPY)return l.a;if(t===n.f.REGGIE)return p.a}}},Ejm0:function(e,t,i){e.exports=i.p+"static/VET-2020-001_ConsultingRoom_Dudley_Placeholder-5d40396fb74cad1d48a134bd0142075b.mp4"},FR4q:function(e,t,i){e.exports=i.p+"static/VET-2020-001_Questions_Poppy_Sitting-425c9b18e5486276be8fd0aa2623c35b.mp4"},"IG+q":function(e,t,i){e.exports=i.p+"static/Normal_Heart_v2-d1d9182a808dba27e333fb1f9ffcb384.mp4"},JxF9:function(e,t,i){e.exports=i.p+"static/VET-2020-001_Questions_Dudley_Standing-d20fc5b3b469d0e2a79063eafcad7037.mp4"},SADc:function(e,t,i){e.exports=i.p+"static/VET-2020-001_Questions_MrsRichardson-3f5056950f92c4a6ed6a43adda7670da.mp4"},Spfr:function(e,t,i){"use strict";var n=i("q1tI"),r=i.n(n),a=(i("YbXK"),i("cFtU"),i("q8oJ"),i("8npG"),i("CczQ"),i("E5k/"),i("LagC"),function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)}),o=function(){return(o=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},l=o(o({scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1},{tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:null,tiltAngleXManual:null,tiltAngleYManual:null}),{glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1});function s(e,t,i,n,r){return void 0===r&&(r=null),r&&clearTimeout(r),e.style.transition=t+" "+i+"ms "+n,setTimeout((function(){e.style.transition=""}),i)}function p(e,t,i){return Math.min(Math.max(e,t),i)}var c=function(){var e=this;this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=function(t,i){e.updateTilt(t,i),e.updateTiltManualInput(t,i),e.updateTiltReverse(i),e.updateTiltLimits(i)},this.updateTilt=function(t,i){var n=t.yPercentage,r=i.tiltMaxAngleY;e.tiltAngleX=t.xPercentage*i.tiltMaxAngleX/100,e.tiltAngleY=n*r/100*-1},this.updateTiltManualInput=function(t,i){var n=i.tiltAngleXManual,r=i.tiltAngleYManual,a=i.tiltMaxAngleX,o=i.tiltMaxAngleY;null===n&&null===r||(e.tiltAngleX=null!==n?n:0,e.tiltAngleY=null!==r?r:0,t.xPercentage=100*e.tiltAngleX/a,t.yPercentage=100*e.tiltAngleY/o)},this.updateTiltReverse=function(t){var i=t.tiltReverse?-1:1;e.tiltAngleX=i*e.tiltAngleX,e.tiltAngleY=i*e.tiltAngleY},this.updateTiltLimits=function(t){var i=t.tiltAxis;e.tiltAngleX=p(e.tiltAngleX,-90,90),e.tiltAngleY=p(e.tiltAngleY,-90,90),i&&(e.tiltAngleX="x"===i?e.tiltAngleX:0,e.tiltAngleY="y"===i?e.tiltAngleY:0)},this.updateTiltAnglesPercentage=function(t){var i=t.tiltMaxAngleY;e.tiltAngleXPercentage=e.tiltAngleX/t.tiltMaxAngleX*100,e.tiltAngleYPercentage=e.tiltAngleY/i*100},this.render=function(t){t.style.transform+="rotateX("+e.tiltAngleX+"deg) rotateY("+e.tiltAngleY+"deg) "}},d=function(e){var t=this;this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=function(e){return{width:2*e.width,height:2*e.height}},this.setSize=function(e){var i=t.calculateGlareSize(e);t.glareEl.style.width=i.width+"px",t.glareEl.style.height=i.height+"px"},this.update=function(e,i,n,r){t.updateAngle(e,i.glareReverse),t.updateOpacity(e,i,n,r)},this.updateAngle=function(e,i){var n=e.xPercentage,r=180/Math.PI,a=n?Math.atan2(e.yPercentage,-n)*r:0;t.glareAngle=a-(i?180:0)},this.updateOpacity=function(e,i,n,r){var a,o=e.xPercentage,l=e.yPercentage,s=i.glareReverse,c=i.glareMaxOpacity,d=n?-1:1,E=r?-1:1;switch(i.glarePosition){case"top":a=-o*d;break;case"right":a=l*E;break;case"bottom":a=o*d;break;case"left":a=-l*E;break;case"all":a=Math.hypot(o,l);break;default:a=o*d}var u=p(a=s?-a:a,0,100);t.glareOpacity=u*c/100},this.render=function(e){var i=e.glareColor;t.glareEl.style.transform="rotate("+t.glareAngle+"deg) translate(-50%, -50%)",t.glareEl.style.opacity=t.glareOpacity.toString(),t.glareEl.style.background="linear-gradient(0deg, rgba(255,255,255,0) 0%, "+i+" 100%)"},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";var i=this.calculateGlareSize(e),n={position:"absolute",top:"50%",left:"50%","transform-origin":"0% 0%","pointer-events":"none",width:i.width+"px",height:i.height+"px"};Object.assign(this.glareWrapperEl.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden"}),Object.assign(this.glareEl.style,n)},E=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},transitionTimeoutId:void 0,updateAnimationId:null,childrenImgsCounter:0,childrenImgsLength:0,scale:1},t.tilt=null,t.glare=null,t.loadWrapperAndChildElements=function(){var e=Array.from(t.wrapperEl.node.getElementsByTagName("img"));t.wrapperEl.childrenImgsLength=e.length,0!==t.wrapperEl.childrenImgsLength?e.forEach((function(e){e.complete?t.allImagesLoaded():e.addEventListener("load",t.allImagesLoaded)})):t.setSize()},t.allImagesLoaded=function(){t.wrapperEl.childrenImgsCounter++,t.wrapperEl.childrenImgsCounter===t.wrapperEl.childrenImgsLength&&t.setSize()},t.setSize=function(){t.setWrapperElSize(),t.glare&&t.glare.setSize(t.wrapperEl.size)},t.mainLoop=function(e){null!==t.wrapperEl.updateAnimationId&&cancelAnimationFrame(t.wrapperEl.updateAnimationId),t.processInput(e),t.update(e.type),t.wrapperEl.updateAnimationId=requestAnimationFrame(t.renderFrame)},t.onEnter=function(e){var i=t.props.onEnter;t.wrapperEl.node.style.willChange="transform",t.setTransition(),i&&i(e.type)},t.onMove=function(e){t.mainLoop(e),t.emitOnMove(e)},t.onLeave=function(e){var i=t.props.onLeave;if(t.setTransition(),i&&i(e.type),t.props.reset){var n=new CustomEvent("autoreset");t.onMove(n)}},t.processInput=function(e){var i=t.props.scale;switch(e.type){case"mousemove":t.wrapperEl.clientPosition.x=e.pageX,t.wrapperEl.clientPosition.y=e.pageY,t.wrapperEl.scale=i;break;case"touchmove":t.wrapperEl.clientPosition.x=e.touches[0].pageX,t.wrapperEl.clientPosition.y=e.touches[0].pageY,t.wrapperEl.scale=i;break;case"deviceorientation":t.processInputDeviceOrientation(e),t.wrapperEl.scale=i;break;case"autoreset":var n=t.props,r=n.tiltAngleYInitial/n.tiltMaxAngleY*100;t.wrapperEl.clientPosition.xPercentage=p(n.tiltAngleXInitial/n.tiltMaxAngleX*100,-100,100),t.wrapperEl.clientPosition.yPercentage=p(r,-100,100),t.wrapperEl.scale=1}},t.processInputDeviceOrientation=function(e){if(e.gamma&&e.beta&&t.props.gyroscope){var i=t.props,n=i.tiltMaxAngleY,r=e.gamma;t.wrapperEl.clientPosition.xPercentage=e.beta/i.tiltMaxAngleX*100,t.wrapperEl.clientPosition.yPercentage=r/n*100,t.wrapperEl.clientPosition.xPercentage=p(t.wrapperEl.clientPosition.xPercentage,-100,100),t.wrapperEl.clientPosition.yPercentage=p(t.wrapperEl.clientPosition.yPercentage,-100,100)}},t.update=function(e){var i=t.props,n=i.tiltEnable,r=i.flipVertically,a=i.flipHorizontally;t.updateClientInput(e),n&&t.tilt.update(t.wrapperEl.clientPosition,t.props),t.updateFlip(),t.tilt.updateTiltAnglesPercentage(t.props),t.glare&&t.glare.update(t.wrapperEl.clientPosition,t.props,r,a)},t.updateClientInput=function(e){if("autoreset"!==e&&"deviceorientation"!==e){var i,n;if(t.props.trackOnWindow){var r=t.wrapperEl.clientPosition,a=r.x;i=r.y/window.innerHeight*200-100,n=a/window.innerWidth*200-100}else{var o=t.wrapperEl,l=o.size,s=o.clientPosition;i=(s.y-l.top)/l.height*200-100,n=((a=s.x)-l.left)/l.width*200-100}t.wrapperEl.clientPosition.xPercentage=p(i,-100,100),t.wrapperEl.clientPosition.yPercentage=p(n,-100,100)}},t.updateFlip=function(){var e=t.props,i=e.flipHorizontally;e.flipVertically&&(t.tilt.tiltAngleX+=180,t.tilt.tiltAngleY*=-1),i&&(t.tilt.tiltAngleY+=180)},t.renderFrame=function(){t.resetWrapperElTransform(),t.renderPerspective(),t.tilt.render(t.wrapperEl.node),t.renderScale(),t.glare&&t.glare.render(t.props)},t}(function(e,t){function i(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)})(t,e),t.prototype.componentDidMount=function(){this.loadWrapperAndChildElements(),this.tilt=new c,this.initGlare(),this.addEventListeners();var e=new CustomEvent("autoreset");this.mainLoop(e);var t=new CustomEvent("initial");this.emitOnMove(t)},t.prototype.componentWillUnmount=function(){clearTimeout(this.wrapperEl.transitionTimeoutId),null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()},t.prototype.componentDidUpdate=function(){var e=this.props;if(!(e.onMove||e.onEnter||e.onLeave)){var t=new CustomEvent("propchange");this.mainLoop(t)}},t.prototype.addEventListeners=function(){var e=this.props,t=e.trackOnWindow,i=e.gyroscope;if(window.addEventListener("resize",this.setSize),t&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),i){if(!window.DeviceOrientationEvent)return void console.error("Browser doesn't support Device Orientation.");window.addEventListener("deviceorientation",this.onMove)}},t.prototype.removeEventListeners=function(){var e=this.props,t=e.trackOnWindow,i=e.gyroscope;window.removeEventListener("resize",this.setSize),t&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),i&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)},t.prototype.setWrapperElSize=function(){var e=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=e.left+window.scrollX,this.wrapperEl.size.top=e.top+window.scrollY},t.prototype.initGlare=function(){this.props.glareEnable&&(this.glare=new d(this.wrapperEl.size),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))},t.prototype.emitOnMove=function(e){var t=this.props.onMove;if(t){var i=0,n=0;this.glare&&(i=this.glare.glareAngle,n=this.glare.glareOpacity),t(this.tilt.tiltAngleX,this.tilt.tiltAngleY,this.tilt.tiltAngleXPercentage,this.tilt.tiltAngleYPercentage,i,n,e.type)}},t.prototype.resetWrapperElTransform=function(){this.wrapperEl.node.style.transform=""},t.prototype.renderPerspective=function(){this.wrapperEl.node.style.transform+="perspective("+this.props.perspective+"px) "},t.prototype.renderScale=function(){var e=this.wrapperEl.scale;this.wrapperEl.node.style.transform+="scale3d("+e+","+e+","+e+")"},t.prototype.setTransition=function(){var e=this.props,t=e.transitionSpeed,i=e.transitionEasing;this.wrapperEl.transitionTimeoutId=s(this.wrapperEl.node,"all",t,i,this.wrapperEl.transitionTimeoutId),this.glare&&(this.glare.transitionTimeoutId=s(this.glare.glareEl,"opacity",t,i,this.glare.transitionTimeoutId))},t.prototype.render=function(){var e=this,t=this.props;return r.a.createElement("div",{ref:function(t){return e.wrapperEl.node=t},onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:t.className,style:t.style},t.children)},t.defaultProps=l}(n.PureComponent),i("8uUf"));t.a=function(e){var t=e.imgName,i=void 0===t?"oakley.png":t,n=e.width,a=void 0===n?"300px":n,o=e.height,l=void 0===o?"300px":o;return r.a.createElement("div",{style:{height:l,width:a,backgroundColor:"none",transition:"width 1s height 1s"}},r.a.createElement(E.a,{imgName:i}))}},ViR1:function(e,t,i){e.exports=i.p+"static/VET-2020-001_Questions_Reggie_Sitting-b6fcff2fc486d5ea31fe4a55a0319c40.mp4"},X9Lb:function(e,t,i){e.exports=i.p+"static/Dog_heart_Poppy-26fd1adf40f0193df9d7d0c48fd7667a.mp4"},g0X1:function(e,t,i){e.exports=i.p+"static/VET-2020-001_Questions_Poppy_Standing-9f5616b8dc6b977b98ae9973aa517ca3.mp4"},j5sE:function(e,t,i){e.exports=i.p+"static/VET-2020-001_Questions_MrsJenkins-303172c55362c04b9b3bfe0982717514.mp4"},nHD1:function(e,t,i){e.exports=i.p+"static/VET-2020-001_Questions_Dudley_Sitting-ccb9d5c575b9af63aa2e9322508c9874.mp4"},nZHY:function(e,t,i){e.exports=i.p+"static/VET-2020-001_Questions_MrOakley-19cd731c2d2ed65bfaa99b40a21ff996.mp4"},nkKA:function(e,t,i){"use strict";i.r(t),i.d(t,"query",(function(){return N}));i("E5k/");var n=i("q1tI"),r=i.n(n),a=i("Bl7J"),o=i("R/WZ"),l=i("tRbT"),s=(i("ILeL"),i("3ksh"),i("r5vi")),p=i("xvYo"),c=i("C/KN"),d=(i("5lfk"),i("ooR/")),E=i("mwIZ"),u=i.n(E),g=i("a5sw"),f=i("7TWv"),_=i("itCy"),h=i("tzB8"),R=(i("IBCv"),i("DTFT")),O=i("vOnD"),m=(i("zDcZ"),i("Spfr")),v=O.default.div.withConfig({displayName:"murmur-treatment__DogImageHolderBase",componentId:"orsuap-0"})(["display:flex;width:100%;height:314px;"]),A=Object(O.default)(v).withConfig({displayName:"murmur-treatment__DogImageHolder",componentId:"orsuap-1"})([""]),w=Object(o.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));var T=function(e){var t,i=e.type,n=void 0===i?_.q.QUESTION_POSED:i,a=e.resources,o=e.navigationLeftHandler,s=e.navigationRightHandler,d=e.dogChoice,E=null,u=[];a.field_buttonlinks&&a.field_buttonlinks.length>0&&(u=a.field_buttonlinks);switch(n){case _.q.ANSWER_WITH_VIDEO:case _.q.ANSWER_NO_VIDEO:u=[{}],!1===("yes"===a.field_iscorrectanswer[0])&&(u[0].id=_.w.QUESTION_POSED,u[0].title="Try again",u[0].url="/",u[0].onClickHandler=s,u[0].buttonType=_.k.DARK_BLUE_ROUNDED);var O=Object(f.b)(a,d);E={questionText:"",answerHeader:a.field_answerheader?Object(g.i)(a.field_answerheader,d,!1):"",answerText:a.field_answertext?Object(g.i)(a.field_answertext,d,!0):"",additionalText:a.field_additionalbodytext?Object(g.i)(a.field_additionalbodytext,d,!0):"",isCorrectAnswer:a.field_iscorrectanswer[0],mainImage:Object(R.a)(_.b.HAPPY,d),slugName:_.l.CORRECT_ANSWER_ULTRASOUND,continueLink:{uri:"/",title:"Continue",url:"/"},backLink:{uri:"/",title:"Back",url:"/"},accessibilityVideoText:"",buttonLinks:u,dogChoice:d},E=Object(f.f)(E,O);break;case _.q.QUESTION_POSED:var v=Object(f.b)(a,d);(u=[{},{},{},{},{},{}])[0].id=_.w.CORRECT_ANSWER_XRAY_ONLY,u[0].title="X-ray",u[0].url="/",u[1].id=_.w.CORRECT_ANSWER_ULTRASOUND,u[1].title="Ultrasound",u[1].url="/",u[2].id=_.w.INCORRECT_ANSWER_ECG,u[2].title="ECG",u[2].url="/",u[3].id=_.w.CORRECT_ANSWER_XRAY_AND_ULTRASOUND,u[3].title="X-ray and ultrasound",u[3].url="/",u[4].id=_.w.INCORRECT_ANSWER_NO_TREATMENT,u[4].title="Finish Appointment",u[4].url="/",u[5].id=_.w.INCORRECT_ANSWER_HOLTER_MONITORING,u[5].title="Holter monitoring",u[5].url="/",E={questionText:a.field_questiontext?Object(g.i)(a.field_questiontext,d,!1):"",additionalText:a.field_additionalbodytext?Object(g.i)(a.field_additionalbodytext,d,!0):"",slugName:_.l.QUESTION_POSED,accessibilityVideoText:"",animationVideoName:Object(R.c)(_.b.NEUTRAL,d),isCorrect1:a.field_optioniscorrect1,optionsHeader1:Object(g.i)(a.field_optionsheader1,d,!1),optionsBodyText1:Object(g.i)(a.field_optionsbodytext1,d,!0),isCorrect2:a.field_optioniscorrect2,optionsHeader2:"GRADE 2",optionsBodyText2:Object(g.i)(a.field_optionsbodytext2,d,!0),isCorrect3:a.field_optioniscorrect3,optionsHeader3:"GRADE 3",optionsBodyText3:Object(g.i)(a.field_optionsbodytext3,d,!0),isCorrect4:a.field_optioniscorrect4,optionsHeader4:"GRADE 4",optionsBodyText4:Object(g.i)(a.field_optionsbodytext4,d,!0),isCorrect5:a.field_optioniscorrect5,optionsHeader5:"GRADE 5",optionsBodyText5:Object(g.i)(a.field_optionsbodytext5,d,!0),isCorrect6:a.field_optioniscorrect6,optionsHeader6:"GRADE 6",optionsBodyText6:Object(g.i)(a.field_optionsbodytext6,d,!0),buttonLinks:u,dogChoice:d},E=Object(f.f)(E,v);break;default:return"type not found"}var w=r.a.createRef();return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,((t={container:!0,spacing:0}).spacing=0,t.alignItems="center",t.justify="center",t.style={border:"0px solid black"},t),r.a.createElement(l.a,{item:!0,xs:12,sm:1,align:"left",style:{border:"0px solid red"}}),r.a.createElement(l.a,{item:!0,xs:12,sm:5,align:"center",style:{border:"0px solid red"}},n===_.q.QUESTION_POSED?r.a.createElement(h.a,{autoPlay:"true",ref:w,data:E}):"",n!==_.q.ANSWER_WITH_VIDEO&&n!==_.q.ANSWER_NO_VIDEO||!E.mainImage||""===E.mainImage||d!==_.f.DUDLEY?"":r.a.createElement(A,null,r.a.createElement(m.a,{imgName:E.mainImage,height:"314px",width:"314px"})),n!==_.q.ANSWER_WITH_VIDEO&&n!==_.q.ANSWER_NO_VIDEO||!E.mainImage||""===E.mainImage||d!==_.f.POPPY?"":r.a.createElement(A,null,r.a.createElement(m.a,{imgName:E.mainImage,height:"314px",width:"314px"})),n!==_.q.ANSWER_WITH_VIDEO&&n!==_.q.ANSWER_NO_VIDEO||!E.mainImage||""===E.mainImage||d!==_.f.REGGIE?"":r.a.createElement(A,null,r.a.createElement(m.a,{imgName:E.mainImage,height:"314px",width:"314px"}))),r.a.createElement(l.a,{item:!0,xs:12,sm:5,align:"left",style:{border:"0px solid red"}},n===_.q.QUESTION_POSED?r.a.createElement(c.a,{data:E,currentSlidePosition:0,onClickHandler:s,dogChoice:d,useVideoWidget:{}.useVideoWidget}):"",n===_.q.ANSWER_WITH_VIDEO?r.a.createElement(p.a,{data:E,currentSlidePosition:0,onClickHandler:o,dogChoice:d,useVideoWidget:!0}):"",n===_.q.ANSWER_NO_VIDEO?r.a.createElement(p.a,{data:E,currentSlidePosition:0,onClickHandler:o,dogChoice:d,useVideoWidget:!1}):""),r.a.createElement(l.a,{item:!0,xs:12,sm:1,align:"left",style:{border:"0px solid red"}})))};t.default=function(e){var t=e.data,i=Object(s.a)([_.e.DOG_CHOICE,_.e.CASESTUDYS_ALL]),o=i[0],l=i[1],p=(i[2],o.dogChoice?o.dogChoice:_.f.DUDLEY),c={step:_.w.QUESTION_POSED,taskCompleted:!1},E=Object(n.useState)(c),h=E[0],R=E[1];Object(n.useEffect)((function(){if(h.step===_.w.CORRECT_ANSWER_XRAY_ONLY||h.step===_.w.CORRECT_ANSWER_XRAY_AND_ULTRASOUND||h.step===_.w.CORRECT_ANSWER_ULTRASOUND){var e=Object(f.e)(_.r.WHICH_EXAMINATION,p,o);console.log("============= "+e+" ============="),l(_.e.CASESTUDYS_ALL,e,{path:"/"})}}),[h.step]);var O=u()(t,"allNodeQuestion.nodes"),m=u()(t,"allNodeAnswer.nodes"),v=null,A="";switch(h.step){case _.w.QUESTION_POSED:v=Object(g.f)(O,_.l.QUESTION_POSED);break;case _.w.CORRECT_ANSWER_XRAY_ONLY:v=Object(g.f)(m,_.l.CORRECT_ANSWER_XRAY_ONLY);break;case _.w.CORRECT_ANSWER_XRAY_AND_ULTRASOUND:v=Object(g.f)(m,_.l.CORRECT_ANSWER_XRAY_AND_ULTRASOUND);break;case _.w.CORRECT_ANSWER_ULTRASOUND:v=Object(g.f)(m,_.l.CORRECT_ANSWER_ULTRASOUND);break;case _.w.INCORRECT_ANSWER_ECG:v=Object(g.f)(m,_.l.INCORRECT_ANSWER_ECG);break;case _.w.INCORRECT_ANSWER_NO_TREATMENT:v=Object(g.f)(m,_.l.INCORRECT_ANSWER_NO_TREATMENT);break;case _.w.INCORRECT_ANSWER_HOLTER_MONITORING:v=Object(g.f)(m,_.l.INCORRECT_ANSWER_HOLTER_MONITORING);break;default:return"no current slide"}if(console.log("=========== current Step - step ",h.step),console.log(v),!v)return"resources not found";if("NO_DATA_FOUND"==v)return"resources not found";var N=function(e){console.log("=========== setCurrentStep - step ",e),R(Object.assign(Object.assign({},h),{},{step:e}))},C=function(e){R(Object.assign(Object.assign({},h),{},{step:_.w.QUESTION_POSED}))},y=function(e){console.log("handleLeftClick")},b=function(e){console.log("handleRightClick")};return A=_.w.QUESTION_POSED!==h.step?A:"",r.a.createElement(a.a,{headerText:A,showPercentIndicator:!0},_.w.CORRECT_ANSWER_ULTRASOUND===h.step||_.w.CORRECT_ANSWER_XRAY_AND_ULTRASOUND===h.step||_.w.CORRECT_ANSWER_XRAY_ONLY===h.step?r.a.createElement(d.a,{to:"/owner-response",distanceFromSide:"2%",bottom:"2%",direction:_.c.FORWARD,linkText:"Continue"}):"",r.a.createElement("div",{className:w().root,style:{position:"relative",zIndex:"1 !important"}},_.w.QUESTION_POSED===h.step?r.a.createElement(T,{type:_.q.QUESTION_POSED,resources:v,dogChoice:p,navigationLeftHandler:y,navigationRightHandler:function(e){if(e.currentTarget.id)switch(e.currentTarget.id){case _.w.CORRECT_ANSWER_ULTRASOUND:N(_.w.CORRECT_ANSWER_ULTRASOUND);break;case _.w.CORRECT_ANSWER_XRAY_AND_ULTRASOUND:N(_.w.CORRECT_ANSWER_XRAY_AND_ULTRASOUND);break;case _.w.CORRECT_ANSWER_XRAY_ONLY:N(_.w.CORRECT_ANSWER_XRAY_ONLY);break;case _.w.INCORRECT_ANSWER_ECG:N(_.w.INCORRECT_ANSWER_ECG);break;case _.w.INCORRECT_ANSWER_NO_TREATMENT:N(_.w.INCORRECT_ANSWER_NO_TREATMENT);break;case _.w.INCORRECT_ANSWER_HOLTER_MONITORING:N(_.w.INCORRECT_ANSWER_HOLTER_MONITORING);break;default:console.log("no matching id on question button"),N(_.w.QUESTION_POSED)}else console.log("no id on question button"),N(_.w.QUESTION_POSED)}}):"",_.w.CORRECT_ANSWER_ULTRASOUND===h.step?r.a.createElement(T,{type:_.q.ANSWER_WITH_VIDEO,resources:v,dogChoice:p,navigationLeftHandler:y,navigationRightHandler:b}):"",_.w.CORRECT_ANSWER_XRAY_AND_ULTRASOUND===h.step?r.a.createElement(T,{type:_.q.ANSWER_WITH_VIDEO,resources:v,dogChoice:p,navigationLeftHandler:y,navigationRightHandler:b}):"",_.w.CORRECT_ANSWER_XRAY_ONLY===h.step?r.a.createElement(T,{type:_.q.ANSWER_WITH_VIDEO,resources:v,dogChoice:p,navigationLeftHandler:y,navigationRightHandler:b}):"",_.w.INCORRECT_ANSWER_ECG===h.step?r.a.createElement(T,{type:_.q.ANSWER_NO_VIDEO,resources:v,dogChoice:p,navigationLeftHandler:y,navigationRightHandler:C}):"",_.w.INCORRECT_ANSWER_NO_TREATMENT===h.step?r.a.createElement(T,{type:_.q.ANSWER_NO_VIDEO,resources:v,dogChoice:p,navigationLeftHandler:y,navigationRightHandler:C}):"",_.w.INCORRECT_ANSWER_HOLTER_MONITORING===h.step?r.a.createElement(T,{type:_.q.ANSWER_NO_VIDEO,resources:v,dogChoice:p,navigationLeftHandler:y,navigationRightHandler:C}):""))};var N="990129315"},wwni:function(e,t,i){e.exports=i.p+"static/VET-2020-001_Questions_Reggie_Standing-be7884d04014b2d73b9e7755ddc20a39.mp4"},yI0q:function(e,t,i){e.exports=i.p+"static/Dog_heart_Dudley-67ef3f6b0bfceda5b6375acf75239fe1.mp4"},yjWk:function(e,t,i){e.exports=i.p+"static/Dog_heart_Reggie-7b4a70e24b0093cc8de64baa7c7a88d5.mp4"}}]);
//# sourceMappingURL=component---src-pages-murmur-treatment-js-fd5568adc43a019ee72c.js.map