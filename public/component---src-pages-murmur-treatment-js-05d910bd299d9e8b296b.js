(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{CczQ:function(e,t,i){var n=i("P8UN"),a=Math.abs;n(n.S,"Math",{hypot:function(e,t){for(var i,n,o=0,r=0,l=arguments.length,s=0;r<l;)s<(i=a(arguments[r++]))?(o=o*(n=s/i)*n+1,s=i):o+=i>0?(n=i/s)*n:i;return s===1/0?1/0:s*Math.sqrt(o)}})},DTFT:function(e,t,i){"use strict";i.d(t,"e",(function(){return v})),i.d(t,"b",(function(){return O})),i.d(t,"d",(function(){return w})),i.d(t,"a",(function(){return A})),i.d(t,"c",(function(){return N}));var n=i("itCy"),a=i("nHD1"),o=i.n(a),r=i("FR4q"),l=i.n(r),s=i("ViR1"),p=i.n(s),c=(i("JxF9"),i("g0X1"),i("wwni"),i("j5sE"),i("nZHY"),i("SADc"),i("yI0q")),d=i.n(c),u=i("X9Lb"),E=i.n(u),g=i("yjWk"),f=i.n(g),h=i("IG+q"),_=i.n(h),m=i("Ejm0"),R=i.n(m),v=function(e,t){var i={videoUrl:_.a,videoPosterImage:"",videoThumbnail:"",videoTitle:"Normal Heart",videoForDog:"dudley",videoText:"",videoCaptionText:"Normal Heart",videoNarrator:"",videoDuration:"0:00"};return t===n.f.DUDLEY&&(i={videoUrl:d.a,videoPosterImage:"",videoThumbnail:"",videoTitle:"Dudley's Heart",videoForDog:"dudley",videoText:"",videoCaptionText:"Dudley's Heart",videoNarrator:"no data",videoDuration:"0:00"}),t===n.f.POPPY&&(i={videoUrl:E.a,videoPosterImage:"",videoThumbnail:"",videoTitle:"Poppy's Heart",videoForDog:"poppy",videoText:"",videoCaptionText:"Poppy's Heart",videoNarrator:"",videoDuration:"0:00"}),t===n.f.REGGIE&&(i={videoUrl:f.a,videoPosterImage:"",videoThumbnail:"",videoTitle:"Reggie's Heart",videoForDog:"reggie",videoText:"",videoCaptionText:"Reggie's Heart",videoNarrator:"",videoDuration:"0:00"}),i},O=function(e){return e===n.f.DUDLEY||e===n.f.POPPY||e===n.f.REGGIE?R.a:"no data"},w=function(e){return e===n.f.DUDLEY?d.a:e===n.f.POPPY?E.a:e===n.f.REGGIE?f.a:_.a},A=function(e,t){if(void 0===e&&(e=n.b.NEUTRAL),e===n.b.NEUTRAL){if(t===n.f.DUDLEY)return"heart_Dudley-Sitting-Pose04.png";if(t===n.f.POPPY)return"heart_Poppy_Sitting_02.png";if(t===n.f.REGGIE)return"heart_Reggie_Standing_Poses02.png"}else if(e===n.b.HAPPY){if(t===n.f.DUDLEY)return"happy_Dudley-Sitting-Pose02.png";if(t===n.f.POPPY)return"happy_Poppy_Sitting_01.png";if(t===n.f.REGGIE)return"happy_Reggie_Sitting_Poses01.png"}else{if(t===n.f.DUDLEY)return"sad_Dudley_Sitting_Pose05.png";if(t===n.f.POPPY)return"sad_Poppy_Sitting_03.png";if(t===n.f.REGGIE)return"sad_Reggie_Sitting_Poses05.png"}},N=function(e,t){if(void 0===e&&(e=n.b.NEUTRAL),e===n.b.NEUTRAL){if(t===n.f.DUDLEY)return o.a;if(t===n.f.POPPY)return l.a;if(t===n.f.REGGIE)return p.a}else if(e===n.b.HAPPY){if(t===n.f.DUDLEY)return o.a;if(t===n.f.POPPY)return l.a;if(t===n.f.REGGIE)return p.a}else{if(t===n.f.DUDLEY)return o.a;if(t===n.f.POPPY)return l.a;if(t===n.f.REGGIE)return p.a}}},Ejm0:function(e,t,i){e.exports=i.p+"static/VET-2020-001_ConsultingRoom_Dudley_Placeholder-5d40396fb74cad1d48a134bd0142075b.mp4"},FR4q:function(e,t,i){e.exports=i.p+"static/VET-2020-001_Questions_Poppy_Sitting-425c9b18e5486276be8fd0aa2623c35b.mp4"},"IG+q":function(e,t,i){e.exports=i.p+"static/Normal_Heart_v2-d1d9182a808dba27e333fb1f9ffcb384.mp4"},JxF9:function(e,t,i){e.exports=i.p+"static/VET-2020-001_Questions_Dudley_Standing-d20fc5b3b469d0e2a79063eafcad7037.mp4"},SADc:function(e,t,i){e.exports=i.p+"static/VET-2020-001_Questions_MrsRichardson-3f5056950f92c4a6ed6a43adda7670da.mp4"},Spfr:function(e,t,i){"use strict";var n=i("q1tI"),a=i.n(n),o=(i("YbXK"),i("cFtU"),i("q8oJ"),i("8npG"),i("CczQ"),i("E5k/"),i("LagC"),function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)}),r=function(){return(r=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var a in t=arguments[i])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},l=r(r({scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1},{tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:null,tiltAngleXManual:null,tiltAngleYManual:null}),{glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1});function s(e,t,i,n,a){return void 0===a&&(a=null),a&&clearTimeout(a),e.style.transition=t+" "+i+"ms "+n,setTimeout((function(){e.style.transition=""}),i)}function p(e,t,i){return Math.min(Math.max(e,t),i)}var c=function(){var e=this;this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=function(t,i){e.updateTilt(t,i),e.updateTiltManualInput(t,i),e.updateTiltReverse(i),e.updateTiltLimits(i)},this.updateTilt=function(t,i){var n=t.yPercentage,a=i.tiltMaxAngleY;e.tiltAngleX=t.xPercentage*i.tiltMaxAngleX/100,e.tiltAngleY=n*a/100*-1},this.updateTiltManualInput=function(t,i){var n=i.tiltAngleXManual,a=i.tiltAngleYManual,o=i.tiltMaxAngleX,r=i.tiltMaxAngleY;null===n&&null===a||(e.tiltAngleX=null!==n?n:0,e.tiltAngleY=null!==a?a:0,t.xPercentage=100*e.tiltAngleX/o,t.yPercentage=100*e.tiltAngleY/r)},this.updateTiltReverse=function(t){var i=t.tiltReverse?-1:1;e.tiltAngleX=i*e.tiltAngleX,e.tiltAngleY=i*e.tiltAngleY},this.updateTiltLimits=function(t){var i=t.tiltAxis;e.tiltAngleX=p(e.tiltAngleX,-90,90),e.tiltAngleY=p(e.tiltAngleY,-90,90),i&&(e.tiltAngleX="x"===i?e.tiltAngleX:0,e.tiltAngleY="y"===i?e.tiltAngleY:0)},this.updateTiltAnglesPercentage=function(t){var i=t.tiltMaxAngleY;e.tiltAngleXPercentage=e.tiltAngleX/t.tiltMaxAngleX*100,e.tiltAngleYPercentage=e.tiltAngleY/i*100},this.render=function(t){t.style.transform+="rotateX("+e.tiltAngleX+"deg) rotateY("+e.tiltAngleY+"deg) "}},d=function(e){var t=this;this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=function(e){return{width:2*e.width,height:2*e.height}},this.setSize=function(e){var i=t.calculateGlareSize(e);t.glareEl.style.width=i.width+"px",t.glareEl.style.height=i.height+"px"},this.update=function(e,i,n,a){t.updateAngle(e,i.glareReverse),t.updateOpacity(e,i,n,a)},this.updateAngle=function(e,i){var n=e.xPercentage,a=180/Math.PI,o=n?Math.atan2(e.yPercentage,-n)*a:0;t.glareAngle=o-(i?180:0)},this.updateOpacity=function(e,i,n,a){var o,r=e.xPercentage,l=e.yPercentage,s=i.glareReverse,c=i.glareMaxOpacity,d=n?-1:1,u=a?-1:1;switch(i.glarePosition){case"top":o=-r*d;break;case"right":o=l*u;break;case"bottom":o=r*d;break;case"left":o=-l*u;break;case"all":o=Math.hypot(r,l);break;default:o=r*d}var E=p(o=s?-o:o,0,100);t.glareOpacity=E*c/100},this.render=function(e){var i=e.glareColor;t.glareEl.style.transform="rotate("+t.glareAngle+"deg) translate(-50%, -50%)",t.glareEl.style.opacity=t.glareOpacity.toString(),t.glareEl.style.background="linear-gradient(0deg, rgba(255,255,255,0) 0%, "+i+" 100%)"},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";var i=this.calculateGlareSize(e),n={position:"absolute",top:"50%",left:"50%","transform-origin":"0% 0%","pointer-events":"none",width:i.width+"px",height:i.height+"px"};Object.assign(this.glareWrapperEl.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden"}),Object.assign(this.glareEl.style,n)},u=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},transitionTimeoutId:void 0,updateAnimationId:null,childrenImgsCounter:0,childrenImgsLength:0,scale:1},t.tilt=null,t.glare=null,t.loadWrapperAndChildElements=function(){var e=Array.from(t.wrapperEl.node.getElementsByTagName("img"));t.wrapperEl.childrenImgsLength=e.length,0!==t.wrapperEl.childrenImgsLength?e.forEach((function(e){e.complete?t.allImagesLoaded():e.addEventListener("load",t.allImagesLoaded)})):t.setSize()},t.allImagesLoaded=function(){t.wrapperEl.childrenImgsCounter++,t.wrapperEl.childrenImgsCounter===t.wrapperEl.childrenImgsLength&&t.setSize()},t.setSize=function(){t.setWrapperElSize(),t.glare&&t.glare.setSize(t.wrapperEl.size)},t.mainLoop=function(e){null!==t.wrapperEl.updateAnimationId&&cancelAnimationFrame(t.wrapperEl.updateAnimationId),t.processInput(e),t.update(e.type),t.wrapperEl.updateAnimationId=requestAnimationFrame(t.renderFrame)},t.onEnter=function(e){var i=t.props.onEnter;t.wrapperEl.node.style.willChange="transform",t.setTransition(),i&&i(e.type)},t.onMove=function(e){t.mainLoop(e),t.emitOnMove(e)},t.onLeave=function(e){var i=t.props.onLeave;if(t.setTransition(),i&&i(e.type),t.props.reset){var n=new CustomEvent("autoreset");t.onMove(n)}},t.processInput=function(e){var i=t.props.scale;switch(e.type){case"mousemove":t.wrapperEl.clientPosition.x=e.pageX,t.wrapperEl.clientPosition.y=e.pageY,t.wrapperEl.scale=i;break;case"touchmove":t.wrapperEl.clientPosition.x=e.touches[0].pageX,t.wrapperEl.clientPosition.y=e.touches[0].pageY,t.wrapperEl.scale=i;break;case"deviceorientation":t.processInputDeviceOrientation(e),t.wrapperEl.scale=i;break;case"autoreset":var n=t.props,a=n.tiltAngleYInitial/n.tiltMaxAngleY*100;t.wrapperEl.clientPosition.xPercentage=p(n.tiltAngleXInitial/n.tiltMaxAngleX*100,-100,100),t.wrapperEl.clientPosition.yPercentage=p(a,-100,100),t.wrapperEl.scale=1}},t.processInputDeviceOrientation=function(e){if(e.gamma&&e.beta&&t.props.gyroscope){var i=t.props,n=i.tiltMaxAngleY,a=e.gamma;t.wrapperEl.clientPosition.xPercentage=e.beta/i.tiltMaxAngleX*100,t.wrapperEl.clientPosition.yPercentage=a/n*100,t.wrapperEl.clientPosition.xPercentage=p(t.wrapperEl.clientPosition.xPercentage,-100,100),t.wrapperEl.clientPosition.yPercentage=p(t.wrapperEl.clientPosition.yPercentage,-100,100)}},t.update=function(e){var i=t.props,n=i.tiltEnable,a=i.flipVertically,o=i.flipHorizontally;t.updateClientInput(e),n&&t.tilt.update(t.wrapperEl.clientPosition,t.props),t.updateFlip(),t.tilt.updateTiltAnglesPercentage(t.props),t.glare&&t.glare.update(t.wrapperEl.clientPosition,t.props,a,o)},t.updateClientInput=function(e){if("autoreset"!==e&&"deviceorientation"!==e){var i,n;if(t.props.trackOnWindow){var a=t.wrapperEl.clientPosition,o=a.x;i=a.y/window.innerHeight*200-100,n=o/window.innerWidth*200-100}else{var r=t.wrapperEl,l=r.size,s=r.clientPosition;i=(s.y-l.top)/l.height*200-100,n=((o=s.x)-l.left)/l.width*200-100}t.wrapperEl.clientPosition.xPercentage=p(i,-100,100),t.wrapperEl.clientPosition.yPercentage=p(n,-100,100)}},t.updateFlip=function(){var e=t.props,i=e.flipHorizontally;e.flipVertically&&(t.tilt.tiltAngleX+=180,t.tilt.tiltAngleY*=-1),i&&(t.tilt.tiltAngleY+=180)},t.renderFrame=function(){t.resetWrapperElTransform(),t.renderPerspective(),t.tilt.render(t.wrapperEl.node),t.renderScale(),t.glare&&t.glare.render(t.props)},t}(function(e,t){function i(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)})(t,e),t.prototype.componentDidMount=function(){this.loadWrapperAndChildElements(),this.tilt=new c,this.initGlare(),this.addEventListeners();var e=new CustomEvent("autoreset");this.mainLoop(e);var t=new CustomEvent("initial");this.emitOnMove(t)},t.prototype.componentWillUnmount=function(){clearTimeout(this.wrapperEl.transitionTimeoutId),null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()},t.prototype.componentDidUpdate=function(){var e=this.props;if(!(e.onMove||e.onEnter||e.onLeave)){var t=new CustomEvent("propchange");this.mainLoop(t)}},t.prototype.addEventListeners=function(){var e=this.props,t=e.trackOnWindow,i=e.gyroscope;if(window.addEventListener("resize",this.setSize),t&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),i){if(!window.DeviceOrientationEvent)return void console.error("Browser doesn't support Device Orientation.");window.addEventListener("deviceorientation",this.onMove)}},t.prototype.removeEventListeners=function(){var e=this.props,t=e.trackOnWindow,i=e.gyroscope;window.removeEventListener("resize",this.setSize),t&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),i&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)},t.prototype.setWrapperElSize=function(){var e=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=e.left+window.scrollX,this.wrapperEl.size.top=e.top+window.scrollY},t.prototype.initGlare=function(){this.props.glareEnable&&(this.glare=new d(this.wrapperEl.size),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))},t.prototype.emitOnMove=function(e){var t=this.props.onMove;if(t){var i=0,n=0;this.glare&&(i=this.glare.glareAngle,n=this.glare.glareOpacity),t(this.tilt.tiltAngleX,this.tilt.tiltAngleY,this.tilt.tiltAngleXPercentage,this.tilt.tiltAngleYPercentage,i,n,e.type)}},t.prototype.resetWrapperElTransform=function(){this.wrapperEl.node.style.transform=""},t.prototype.renderPerspective=function(){this.wrapperEl.node.style.transform+="perspective("+this.props.perspective+"px) "},t.prototype.renderScale=function(){var e=this.wrapperEl.scale;this.wrapperEl.node.style.transform+="scale3d("+e+","+e+","+e+")"},t.prototype.setTransition=function(){var e=this.props,t=e.transitionSpeed,i=e.transitionEasing;this.wrapperEl.transitionTimeoutId=s(this.wrapperEl.node,"all",t,i,this.wrapperEl.transitionTimeoutId),this.glare&&(this.glare.transitionTimeoutId=s(this.glare.glareEl,"opacity",t,i,this.glare.transitionTimeoutId))},t.prototype.render=function(){var e=this,t=this.props;return a.a.createElement("div",{ref:function(t){return e.wrapperEl.node=t},onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:t.className,style:t.style},t.children)},t.defaultProps=l}(n.PureComponent),i("8uUf"));t.a=function(e){var t=e.imgName,i=void 0===t?"oakley.png":t,n=e.width,o=void 0===n?"300px":n,r=e.height,l=void 0===r?"300px":r;return a.a.createElement("div",{style:{height:l,width:o,backgroundColor:"none",transition:"width 1s height 1s"}},a.a.createElement(u.a,{imgName:i}))}},ViR1:function(e,t,i){e.exports=i.p+"static/VET-2020-001_Questions_Reggie_Sitting-b6fcff2fc486d5ea31fe4a55a0319c40.mp4"},X9Lb:function(e,t,i){e.exports=i.p+"static/Dog_heart_Poppy-26fd1adf40f0193df9d7d0c48fd7667a.mp4"},g0X1:function(e,t,i){e.exports=i.p+"static/VET-2020-001_Questions_Poppy_Standing-9f5616b8dc6b977b98ae9973aa517ca3.mp4"},j5sE:function(e,t,i){e.exports=i.p+"static/VET-2020-001_Questions_MrsJenkins-303172c55362c04b9b3bfe0982717514.mp4"},nHD1:function(e,t,i){e.exports=i.p+"static/VET-2020-001_Questions_Dudley_Sitting-ccb9d5c575b9af63aa2e9322508c9874.mp4"},nZHY:function(e,t,i){e.exports=i.p+"static/VET-2020-001_Questions_MrOakley-19cd731c2d2ed65bfaa99b40a21ff996.mp4"},nkKA:function(e,t,i){"use strict";i.r(t),i.d(t,"query",(function(){return T}));i("E5k/");var n=i("q1tI"),a=i.n(n),o=i("Bl7J"),r=i("R/WZ"),l=i("tRbT"),s=(i("ILeL"),i("3ksh"),i("r5vi")),p=i("xvYo"),c=i("C/KN"),d=(i("5lfk"),i("ooR/")),u=i("mwIZ"),E=i.n(u),g=i("a5sw"),f=i("7TWv"),h=i("itCy"),_=i("tzB8"),m=(i("IBCv"),i("DTFT")),R=i("vOnD"),v=(i("zDcZ"),i("Spfr")),O=R.default.div.withConfig({displayName:"murmur-treatment__DogImageHolderBase",componentId:"orsuap-0"})(["display:flex;width:100%;height:314px;"]),w=Object(R.default)(O).withConfig({displayName:"murmur-treatment__DogImageHolder",componentId:"orsuap-1"})([""]),A=Object(r.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));var N=function(e){var t,i=e.type,n=void 0===i?h.q.QUESTION_POSED:i,o=e.resources,r=e.navigationLeftHandler,s=e.navigationRightHandler,d=e.dogChoice,u=null,E=[];o.field_buttonlinks&&o.field_buttonlinks.length>0&&(E=o.field_buttonlinks);switch(n){case h.q.ANSWER_WITH_VIDEO:case h.q.ANSWER_NO_VIDEO:E=[{}],!1===("yes"===o.field_iscorrectanswer[0])&&(E[0].id=h.w.QUESTION_POSED,E[0].title="Try again",E[0].url="/",E[0].onClickHandler=s,E[0].buttonType=h.k.DARK_BLUE_ROUNDED);var R=Object(f.b)(o,d);u={questionText:"",answerHeader:o.field_answerheader?Object(g.i)(o.field_answerheader,d,!1):"",answerText:o.field_answertext?Object(g.i)(o.field_answertext,d,!0):"",additionalText:o.field_additionalbodytext?Object(g.i)(o.field_additionalbodytext,d,!0):"",isCorrectAnswer:o.field_iscorrectanswer[0],mainImage:Object(m.a)(h.b.HAPPY,d),slugName:h.l.CORRECT_ANSWER_ULTRASOUND,continueLink:{uri:"/",title:"Continue",url:"/"},backLink:{uri:"/",title:"Back",url:"/"},accessibilityVideoText:"",buttonLinks:E,dogChoice:d},u=Object(f.f)(u,R);break;case h.q.QUESTION_POSED:var O=Object(f.b)(o,d);(E=[{},{},{},{},{},{}])[0].id=h.w.CORRECT_ANSWER_XRAY_ONLY,E[0].title="X-ray",E[0].url="/",E[1].id=h.w.CORRECT_ANSWER_ULTRASOUND,E[1].title="Ultrasound",E[1].url="/",E[2].id=h.w.INCORRECT_ANSWER_ECG,E[2].title="ECG",E[2].url="/",E[3].id=h.w.CORRECT_ANSWER_XRAY_AND_ULTRASOUND,E[3].title="X-ray and ultrasound",E[3].url="/",E[4].id=h.w.INCORRECT_ANSWER_NO_TREATMENT,E[4].title="Finish Appointment",E[4].url="/",E[5].id=h.w.INCORRECT_ANSWER_HOLTER_MONITORING,E[5].title="Holter monitoring",E[5].url="/",u={questionText:o.field_questiontext?Object(g.i)(o.field_questiontext,d,!1):"",additionalText:o.field_additionalbodytext?Object(g.i)(o.field_additionalbodytext,d,!0):"",slugName:h.l.QUESTION_POSED,accessibilityVideoText:"",animationVideoName:Object(m.c)(h.b.NEUTRAL,d),isCorrect1:o.field_optioniscorrect1,optionsHeader1:Object(g.i)(o.field_optionsheader1,d,!1),optionsBodyText1:Object(g.i)(o.field_optionsbodytext1,d,!0),isCorrect2:o.field_optioniscorrect2,optionsHeader2:"GRADE 2",optionsBodyText2:Object(g.i)(o.field_optionsbodytext2,d,!0),isCorrect3:o.field_optioniscorrect3,optionsHeader3:"GRADE 3",optionsBodyText3:Object(g.i)(o.field_optionsbodytext3,d,!0),isCorrect4:o.field_optioniscorrect4,optionsHeader4:"GRADE 4",optionsBodyText4:Object(g.i)(o.field_optionsbodytext4,d,!0),isCorrect5:o.field_optioniscorrect5,optionsHeader5:"GRADE 5",optionsBodyText5:Object(g.i)(o.field_optionsbodytext5,d,!0),isCorrect6:o.field_optioniscorrect6,optionsHeader6:"GRADE 6",optionsBodyText6:Object(g.i)(o.field_optionsbodytext6,d,!0),buttonLinks:E,dogChoice:d},u=Object(f.f)(u,O);break;default:return"type not found"}var A=a.a.createRef();return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.a,((t={container:!0,spacing:0}).spacing=0,t.alignItems="center",t.justify="center",t.style={border:"0px solid black"},t),a.a.createElement(l.a,{item:!0,xs:12,sm:1,align:"left",style:{border:"0px solid red"}}),a.a.createElement(l.a,{item:!0,xs:12,sm:5,align:"center",style:{border:"0px solid red"}},n===h.q.QUESTION_POSED?a.a.createElement(_.a,{autoPlay:"true",ref:A,data:u}):"",n!==h.q.ANSWER_WITH_VIDEO&&n!==h.q.ANSWER_NO_VIDEO||!u.mainImage||""===u.mainImage||d!==h.f.DUDLEY?"":a.a.createElement(w,null,a.a.createElement(v.a,{imgName:u.mainImage,height:"314px",width:"314px"})),n!==h.q.ANSWER_WITH_VIDEO&&n!==h.q.ANSWER_NO_VIDEO||!u.mainImage||""===u.mainImage||d!==h.f.POPPY?"":a.a.createElement(w,null,a.a.createElement(v.a,{imgName:u.mainImage,height:"314px",width:"314px"})),n!==h.q.ANSWER_WITH_VIDEO&&n!==h.q.ANSWER_NO_VIDEO||!u.mainImage||""===u.mainImage||d!==h.f.REGGIE?"":a.a.createElement(w,null,a.a.createElement(v.a,{imgName:u.mainImage,height:"314px",width:"314px"}))),a.a.createElement(l.a,{item:!0,xs:12,sm:5,align:"left",style:{border:"0px solid red"}},n===h.q.QUESTION_POSED?a.a.createElement(c.a,{data:u,currentSlidePosition:0,onClickHandler:s,dogChoice:d,useVideoWidget:{}.useVideoWidget}):"",n===h.q.ANSWER_WITH_VIDEO?a.a.createElement(p.a,{data:u,currentSlidePosition:0,onClickHandler:r,dogChoice:d,useVideoWidget:!0}):"",n===h.q.ANSWER_NO_VIDEO?a.a.createElement(p.a,{data:u,currentSlidePosition:0,onClickHandler:r,dogChoice:d,useVideoWidget:!1}):""),a.a.createElement(l.a,{item:!0,xs:12,sm:1,align:"left",style:{border:"0px solid red"}})))};t.default=function(e){var t=e.data,i=Object(s.a)([h.e.DOG_CHOICE,h.e.CASESTUDYS_ALL]),r=i[0],l=i[1],p=(i[2],r.dogChoice?r.dogChoice:h.f.DUDLEY),c={step:h.w.QUESTION_POSED,taskCompleted:!1},u=Object(n.useState)(c),_=u[0],m=u[1];Object(n.useEffect)((function(){if(_.step===h.w.CORRECT_ANSWER_XRAY_ONLY||_.step===h.w.CORRECT_ANSWER_XRAY_AND_ULTRASOUND||_.step===h.w.CORRECT_ANSWER_ULTRASOUND){var e=Object(f.e)(h.r.WHICH_EXAMINATION,p,r);console.log("============= "+e+" ============="),l(h.e.CASESTUDYS_ALL,e,{path:"/"})}}),[_.step]);var R=E()(t,"allNodeQuestion.nodes"),v=E()(t,"allNodeAnswer.nodes"),O=null,w="";switch(_.step){case h.w.QUESTION_POSED:O=Object(g.f)(R,h.l.QUESTION_POSED);break;case h.w.CORRECT_ANSWER_XRAY_ONLY:O=Object(g.f)(v,h.l.CORRECT_ANSWER_XRAY_ONLY);break;case h.w.CORRECT_ANSWER_XRAY_AND_ULTRASOUND:O=Object(g.f)(v,h.l.CORRECT_ANSWER_XRAY_AND_ULTRASOUND);break;case h.w.CORRECT_ANSWER_ULTRASOUND:O=Object(g.f)(v,h.l.CORRECT_ANSWER_ULTRASOUND);break;case h.w.INCORRECT_ANSWER_ECG:O=Object(g.f)(v,h.l.INCORRECT_ANSWER_ECG);break;case h.w.INCORRECT_ANSWER_NO_TREATMENT:O=Object(g.f)(v,h.l.INCORRECT_ANSWER_NO_TREATMENT);break;case h.w.INCORRECT_ANSWER_HOLTER_MONITORING:O=Object(g.f)(v,h.l.INCORRECT_ANSWER_HOLTER_MONITORING);break;default:return"no current slide"}if(console.log("=========== current Step - step ",_.step),console.log(O),!O)return"resources not found";if("NO_DATA_FOUND"==O)return"resources not found";var T=function(e){console.log("=========== setCurrentStep - step ",e),m(Object.assign(Object.assign({},_),{},{step:e}))},y=function(e){m(Object.assign(Object.assign({},_),{},{step:h.w.QUESTION_POSED}))},C=function(e){console.log("handleLeftClick")},b=function(e){console.log("handleRightClick")};return w=h.w.QUESTION_POSED!==_.step?w:"",a.a.createElement(o.a,{headerText:w,showPercentIndicator:!0},h.w.CORRECT_ANSWER_ULTRASOUND===_.step||h.w.CORRECT_ANSWER_XRAY_AND_ULTRASOUND===_.step||h.w.CORRECT_ANSWER_XRAY_ONLY===_.step?a.a.createElement(d.a,{to:"/owner-response",distanceFromSide:"2%",bottom:"2%",direction:h.c.FORWARD,linkText:"Continue"}):"",a.a.createElement("div",{className:A().root,style:{position:"relative",zIndex:"1 !important"}},h.w.QUESTION_POSED===_.step?a.a.createElement(N,{type:h.q.QUESTION_POSED,resources:O,dogChoice:p,navigationLeftHandler:C,navigationRightHandler:function(e){if(e.currentTarget.id)switch(e.currentTarget.id){case h.w.CORRECT_ANSWER_ULTRASOUND:T(h.w.CORRECT_ANSWER_ULTRASOUND);break;case h.w.CORRECT_ANSWER_XRAY_AND_ULTRASOUND:T(h.w.CORRECT_ANSWER_XRAY_AND_ULTRASOUND);break;case h.w.CORRECT_ANSWER_XRAY_ONLY:T(h.w.CORRECT_ANSWER_XRAY_ONLY);break;case h.w.INCORRECT_ANSWER_ECG:T(h.w.INCORRECT_ANSWER_ECG);break;case h.w.INCORRECT_ANSWER_NO_TREATMENT:T(h.w.INCORRECT_ANSWER_NO_TREATMENT);break;case h.w.INCORRECT_ANSWER_HOLTER_MONITORING:T(h.w.INCORRECT_ANSWER_HOLTER_MONITORING);break;default:console.log("no matching id on question button"),T(h.w.QUESTION_POSED)}else console.log("no id on question button"),T(h.w.QUESTION_POSED)}}):"",h.w.CORRECT_ANSWER_ULTRASOUND===_.step?a.a.createElement(N,{type:h.q.ANSWER_WITH_VIDEO,resources:O,dogChoice:p,navigationLeftHandler:C,navigationRightHandler:b}):"",h.w.CORRECT_ANSWER_XRAY_AND_ULTRASOUND===_.step?a.a.createElement(N,{type:h.q.ANSWER_WITH_VIDEO,resources:O,dogChoice:p,navigationLeftHandler:C,navigationRightHandler:b}):"",h.w.CORRECT_ANSWER_XRAY_ONLY===_.step?a.a.createElement(N,{type:h.q.ANSWER_WITH_VIDEO,resources:O,dogChoice:p,navigationLeftHandler:C,navigationRightHandler:b}):"",h.w.INCORRECT_ANSWER_ECG===_.step?a.a.createElement(N,{type:h.q.ANSWER_NO_VIDEO,resources:O,dogChoice:p,navigationLeftHandler:C,navigationRightHandler:y}):"",h.w.INCORRECT_ANSWER_NO_TREATMENT===_.step?a.a.createElement(N,{type:h.q.ANSWER_NO_VIDEO,resources:O,dogChoice:p,navigationLeftHandler:C,navigationRightHandler:y}):"",h.w.INCORRECT_ANSWER_HOLTER_MONITORING===_.step?a.a.createElement(N,{type:h.q.ANSWER_NO_VIDEO,resources:O,dogChoice:p,navigationLeftHandler:C,navigationRightHandler:y}):""))};var T="990129315"},"ooR/":function(e,t,i){"use strict";var n=i("q1tI"),a=i.n(n),o=i("zDcZ"),r=i("82Oa"),l=i("vOnD"),s=l.default.div.withConfig({displayName:"BottomNavigationLink__LinkHolder",componentId:"caajde-0"})(["position:absolute;width:150px;height:100px;display:flex;flex-direction:column;justify-content:center;align-content:center;align-content:center;text-align:center;border:0px solid red;z-index:10;@media (max-width:","px){display:block;position:static;width:100% !important;}"],o.c),p=Object(l.default)(s).withConfig({displayName:"BottomNavigationLink__LinkHolderLeft",componentId:"caajde-1"})(["@media (max-width:","px){text-align:right;}"],o.c),c=Object(l.default)(s).withConfig({displayName:"BottomNavigationLink__LinkHolderRight",componentId:"caajde-2"})(["@media (max-width:","px){text-align:left;}"],o.c);t.a=function(e){var t=e.linkText,i=void 0===t?"Back":t,n=e.to,l=void 0===n?"/":n,s=e.distanceFromSide,d=void 0===s?"10%":s,u=e.bottom,E=void 0===u?"0":u,g=e.direction,f=void 0===g?"forward":g,h=e.onClick,_=void 0===h?null:h;return"forward"===f?a.a.createElement(p,{style:{right:d,bottom:E}},a.a.createElement(r.b,{onClick:_,style:{display:"flex",flexDirection:"row",alignItems:"center",width:"200px",height:"50px",textDecoration:"none",color:o.a.palette.deminBlue.main,fontFamily:o.a.typography.fontFamily,fontWeight:"700"},to:l,typeOfButton:r.a.FORWARD_NORMAL_LINK},i)):a.a.createElement(c,{style:{left:d,bottom:E}},a.a.createElement(r.b,{onClick:_,style:{display:"flex",flexDirection:"row",alignItems:"center",alignContent:"center",width:"200px",height:"50px",textDecoration:"none",color:o.a.palette.deminBlue.main,fontFamily:o.a.typography.fontFamily,fontWeight:"700"},to:l,typeOfButton:r.a.BACK_NORMAL_LINK},i))}},wwni:function(e,t,i){e.exports=i.p+"static/VET-2020-001_Questions_Reggie_Standing-be7884d04014b2d73b9e7755ddc20a39.mp4"},yI0q:function(e,t,i){e.exports=i.p+"static/Dog_heart_Dudley-67ef3f6b0bfceda5b6375acf75239fe1.mp4"},yjWk:function(e,t,i){e.exports=i.p+"static/Dog_heart_Reggie-7b4a70e24b0093cc8de64baa7c7a88d5.mp4"}}]);
//# sourceMappingURL=component---src-pages-murmur-treatment-js-05d910bd299d9e8b296b.js.map