(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{CczQ:function(e,t,n){var i=n("P8UN"),a=Math.abs;i(i.S,"Math",{hypot:function(e,t){for(var n,i,r=0,o=0,l=arguments.length,s=0;o<l;)s<(n=a(arguments[o++]))?(r=r*(i=s/n)*i+1,s=n):r+=n>0?(i=n/s)*i:n;return s===1/0?1/0:s*Math.sqrt(r)}})},DTFT:function(e,t,n){"use strict";n.d(t,"b",(function(){return O})),n.d(t,"d",(function(){return A})),n.d(t,"a",(function(){return v})),n.d(t,"c",(function(){return N}));var i=n("itCy"),a=n("nHD1"),r=n.n(a),o=n("FR4q"),l=n.n(o),s=n("ViR1"),c=n.n(s),p=(n("JxF9"),n("g0X1"),n("wwni"),n("j5sE"),n("nZHY"),n("SADc"),n("yI0q")),d=n.n(p),u=n("X9Lb"),E=n.n(u),g=n("yjWk"),f=n.n(g),h=n("IG+q"),_=n.n(h),R=n("Ejm0"),m=n.n(R),O=function(e){return e===i.e.DUDLEY||e===i.e.POPPY||e===i.e.REGGIE?m.a:"no data"},A=function(e){return e===i.e.DUDLEY?d.a:e===i.e.POPPY?E.a:e===i.e.REGGIE?f.a:_.a},v=function(e,t){if(void 0===e&&(e=i.a.NEUTRAL),e===i.a.NEUTRAL){if(t===i.e.DUDLEY)return"heart_Dudley-Sitting-Pose04.png";if(t===i.e.POPPY)return"heart_Poppy_Sitting_02.png";if(t===i.e.REGGIE)return"heart_Reggie_Standing_Poses02.png"}else if(e===i.a.HAPPY){if(t===i.e.DUDLEY)return"heart_Dudley-Sitting-Pose04.png";if(t===i.e.POPPY)return"heart_Poppy_Sitting_02.png";if(t===i.e.REGGIE)return"heart_Reggie_Standing_Poses02.png"}else{if(t===i.e.DUDLEY)return"heart_Dudley-Sitting-Pose04.png";if(t===i.e.POPPY)return"heart_Poppy_Sitting_02.png";if(t===i.e.REGGIE)return"heart_Reggie_Standing_Poses02.png"}},N=function(e,t){if(void 0===e&&(e=i.a.NEUTRAL),e===i.a.NEUTRAL){if(t===i.e.DUDLEY)return r.a;if(t===i.e.POPPY)return l.a;if(t===i.e.REGGIE)return c.a}else if(e===i.a.HAPPY){if(t===i.e.DUDLEY)return r.a;if(t===i.e.POPPY)return l.a;if(t===i.e.REGGIE)return c.a}else{if(t===i.e.DUDLEY)return r.a;if(t===i.e.POPPY)return l.a;if(t===i.e.REGGIE)return c.a}}},Ejm0:function(e,t,n){e.exports=n.p+"static/VET-2020-001_ConsultingRoom_Dudley_Placeholder-5d40396fb74cad1d48a134bd0142075b.mp4"},FR4q:function(e,t,n){e.exports=n.p+"static/VET-2020-001_Questions_Poppy_Sitting-425c9b18e5486276be8fd0aa2623c35b.mp4"},"IG+q":function(e,t,n){e.exports=n.p+"static/Normal_Heart_v2-d1d9182a808dba27e333fb1f9ffcb384.mp4"},JxF9:function(e,t,n){e.exports=n.p+"static/VET-2020-001_Questions_Dudley_Standing-d20fc5b3b469d0e2a79063eafcad7037.mp4"},SADc:function(e,t,n){e.exports=n.p+"static/VET-2020-001_Questions_MrsRichardson-3f5056950f92c4a6ed6a43adda7670da.mp4"},Spfr:function(e,t,n){"use strict";var i=n("q1tI"),a=n.n(i),r=(n("YbXK"),n("cFtU"),n("q8oJ"),n("8npG"),n("CczQ"),n("E5k/"),n("LagC"),function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)}),o=function(){return(o=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},l=o(o({scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1},{tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:null,tiltAngleXManual:null,tiltAngleYManual:null}),{glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1});function s(e,t,n,i,a){return void 0===a&&(a=null),a&&clearTimeout(a),e.style.transition=t+" "+n+"ms "+i,setTimeout((function(){e.style.transition=""}),n)}function c(e,t,n){return Math.min(Math.max(e,t),n)}var p=function(){var e=this;this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=function(t,n){e.updateTilt(t,n),e.updateTiltManualInput(t,n),e.updateTiltReverse(n),e.updateTiltLimits(n)},this.updateTilt=function(t,n){var i=t.yPercentage,a=n.tiltMaxAngleY;e.tiltAngleX=t.xPercentage*n.tiltMaxAngleX/100,e.tiltAngleY=i*a/100*-1},this.updateTiltManualInput=function(t,n){var i=n.tiltAngleXManual,a=n.tiltAngleYManual,r=n.tiltMaxAngleX,o=n.tiltMaxAngleY;null===i&&null===a||(e.tiltAngleX=null!==i?i:0,e.tiltAngleY=null!==a?a:0,t.xPercentage=100*e.tiltAngleX/r,t.yPercentage=100*e.tiltAngleY/o)},this.updateTiltReverse=function(t){var n=t.tiltReverse?-1:1;e.tiltAngleX=n*e.tiltAngleX,e.tiltAngleY=n*e.tiltAngleY},this.updateTiltLimits=function(t){var n=t.tiltAxis;e.tiltAngleX=c(e.tiltAngleX,-90,90),e.tiltAngleY=c(e.tiltAngleY,-90,90),n&&(e.tiltAngleX="x"===n?e.tiltAngleX:0,e.tiltAngleY="y"===n?e.tiltAngleY:0)},this.updateTiltAnglesPercentage=function(t){var n=t.tiltMaxAngleY;e.tiltAngleXPercentage=e.tiltAngleX/t.tiltMaxAngleX*100,e.tiltAngleYPercentage=e.tiltAngleY/n*100},this.render=function(t){t.style.transform+="rotateX("+e.tiltAngleX+"deg) rotateY("+e.tiltAngleY+"deg) "}},d=function(e){var t=this;this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=function(e){return{width:2*e.width,height:2*e.height}},this.setSize=function(e){var n=t.calculateGlareSize(e);t.glareEl.style.width=n.width+"px",t.glareEl.style.height=n.height+"px"},this.update=function(e,n,i,a){t.updateAngle(e,n.glareReverse),t.updateOpacity(e,n,i,a)},this.updateAngle=function(e,n){var i=e.xPercentage,a=180/Math.PI,r=i?Math.atan2(e.yPercentage,-i)*a:0;t.glareAngle=r-(n?180:0)},this.updateOpacity=function(e,n,i,a){var r,o=e.xPercentage,l=e.yPercentage,s=n.glareReverse,p=n.glareMaxOpacity,d=i?-1:1,u=a?-1:1;switch(n.glarePosition){case"top":r=-o*d;break;case"right":r=l*u;break;case"bottom":r=o*d;break;case"left":r=-l*u;break;case"all":r=Math.hypot(o,l);break;default:r=o*d}var E=c(r=s?-r:r,0,100);t.glareOpacity=E*p/100},this.render=function(e){var n=e.glareColor;t.glareEl.style.transform="rotate("+t.glareAngle+"deg) translate(-50%, -50%)",t.glareEl.style.opacity=t.glareOpacity.toString(),t.glareEl.style.background="linear-gradient(0deg, rgba(255,255,255,0) 0%, "+n+" 100%)"},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";var n=this.calculateGlareSize(e),i={position:"absolute",top:"50%",left:"50%","transform-origin":"0% 0%","pointer-events":"none",width:n.width+"px",height:n.height+"px"};Object.assign(this.glareWrapperEl.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden"}),Object.assign(this.glareEl.style,i)},u=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},transitionTimeoutId:void 0,updateAnimationId:null,childrenImgsCounter:0,childrenImgsLength:0,scale:1},t.tilt=null,t.glare=null,t.loadWrapperAndChildElements=function(){var e=Array.from(t.wrapperEl.node.getElementsByTagName("img"));t.wrapperEl.childrenImgsLength=e.length,0!==t.wrapperEl.childrenImgsLength?e.forEach((function(e){e.complete?t.allImagesLoaded():e.addEventListener("load",t.allImagesLoaded)})):t.setSize()},t.allImagesLoaded=function(){t.wrapperEl.childrenImgsCounter++,t.wrapperEl.childrenImgsCounter===t.wrapperEl.childrenImgsLength&&t.setSize()},t.setSize=function(){t.setWrapperElSize(),t.glare&&t.glare.setSize(t.wrapperEl.size)},t.mainLoop=function(e){null!==t.wrapperEl.updateAnimationId&&cancelAnimationFrame(t.wrapperEl.updateAnimationId),t.processInput(e),t.update(e.type),t.wrapperEl.updateAnimationId=requestAnimationFrame(t.renderFrame)},t.onEnter=function(e){var n=t.props.onEnter;t.wrapperEl.node.style.willChange="transform",t.setTransition(),n&&n(e.type)},t.onMove=function(e){t.mainLoop(e),t.emitOnMove(e)},t.onLeave=function(e){var n=t.props.onLeave;if(t.setTransition(),n&&n(e.type),t.props.reset){var i=new CustomEvent("autoreset");t.onMove(i)}},t.processInput=function(e){var n=t.props.scale;switch(e.type){case"mousemove":t.wrapperEl.clientPosition.x=e.pageX,t.wrapperEl.clientPosition.y=e.pageY,t.wrapperEl.scale=n;break;case"touchmove":t.wrapperEl.clientPosition.x=e.touches[0].pageX,t.wrapperEl.clientPosition.y=e.touches[0].pageY,t.wrapperEl.scale=n;break;case"deviceorientation":t.processInputDeviceOrientation(e),t.wrapperEl.scale=n;break;case"autoreset":var i=t.props,a=i.tiltAngleYInitial/i.tiltMaxAngleY*100;t.wrapperEl.clientPosition.xPercentage=c(i.tiltAngleXInitial/i.tiltMaxAngleX*100,-100,100),t.wrapperEl.clientPosition.yPercentage=c(a,-100,100),t.wrapperEl.scale=1}},t.processInputDeviceOrientation=function(e){if(e.gamma&&e.beta&&t.props.gyroscope){var n=t.props,i=n.tiltMaxAngleY,a=e.gamma;t.wrapperEl.clientPosition.xPercentage=e.beta/n.tiltMaxAngleX*100,t.wrapperEl.clientPosition.yPercentage=a/i*100,t.wrapperEl.clientPosition.xPercentage=c(t.wrapperEl.clientPosition.xPercentage,-100,100),t.wrapperEl.clientPosition.yPercentage=c(t.wrapperEl.clientPosition.yPercentage,-100,100)}},t.update=function(e){var n=t.props,i=n.tiltEnable,a=n.flipVertically,r=n.flipHorizontally;t.updateClientInput(e),i&&t.tilt.update(t.wrapperEl.clientPosition,t.props),t.updateFlip(),t.tilt.updateTiltAnglesPercentage(t.props),t.glare&&t.glare.update(t.wrapperEl.clientPosition,t.props,a,r)},t.updateClientInput=function(e){if("autoreset"!==e&&"deviceorientation"!==e){var n,i;if(t.props.trackOnWindow){var a=t.wrapperEl.clientPosition,r=a.x;n=a.y/window.innerHeight*200-100,i=r/window.innerWidth*200-100}else{var o=t.wrapperEl,l=o.size,s=o.clientPosition;n=(s.y-l.top)/l.height*200-100,i=((r=s.x)-l.left)/l.width*200-100}t.wrapperEl.clientPosition.xPercentage=c(n,-100,100),t.wrapperEl.clientPosition.yPercentage=c(i,-100,100)}},t.updateFlip=function(){var e=t.props,n=e.flipHorizontally;e.flipVertically&&(t.tilt.tiltAngleX+=180,t.tilt.tiltAngleY*=-1),n&&(t.tilt.tiltAngleY+=180)},t.renderFrame=function(){t.resetWrapperElTransform(),t.renderPerspective(),t.tilt.render(t.wrapperEl.node),t.renderScale(),t.glare&&t.glare.render(t.props)},t}(function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.loadWrapperAndChildElements(),this.tilt=new p,this.initGlare(),this.addEventListeners();var e=new CustomEvent("autoreset");this.mainLoop(e);var t=new CustomEvent("initial");this.emitOnMove(t)},t.prototype.componentWillUnmount=function(){clearTimeout(this.wrapperEl.transitionTimeoutId),null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()},t.prototype.componentDidUpdate=function(){var e=this.props;if(!(e.onMove||e.onEnter||e.onLeave)){var t=new CustomEvent("propchange");this.mainLoop(t)}},t.prototype.addEventListeners=function(){var e=this.props,t=e.trackOnWindow,n=e.gyroscope;if(window.addEventListener("resize",this.setSize),t&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),n){if(!window.DeviceOrientationEvent)return void console.error("Browser doesn't support Device Orientation.");window.addEventListener("deviceorientation",this.onMove)}},t.prototype.removeEventListeners=function(){var e=this.props,t=e.trackOnWindow,n=e.gyroscope;window.removeEventListener("resize",this.setSize),t&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),n&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)},t.prototype.setWrapperElSize=function(){var e=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=e.left+window.scrollX,this.wrapperEl.size.top=e.top+window.scrollY},t.prototype.initGlare=function(){this.props.glareEnable&&(this.glare=new d(this.wrapperEl.size),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))},t.prototype.emitOnMove=function(e){var t=this.props.onMove;if(t){var n=0,i=0;this.glare&&(n=this.glare.glareAngle,i=this.glare.glareOpacity),t(this.tilt.tiltAngleX,this.tilt.tiltAngleY,this.tilt.tiltAngleXPercentage,this.tilt.tiltAngleYPercentage,n,i,e.type)}},t.prototype.resetWrapperElTransform=function(){this.wrapperEl.node.style.transform=""},t.prototype.renderPerspective=function(){this.wrapperEl.node.style.transform+="perspective("+this.props.perspective+"px) "},t.prototype.renderScale=function(){var e=this.wrapperEl.scale;this.wrapperEl.node.style.transform+="scale3d("+e+","+e+","+e+")"},t.prototype.setTransition=function(){var e=this.props,t=e.transitionSpeed,n=e.transitionEasing;this.wrapperEl.transitionTimeoutId=s(this.wrapperEl.node,"all",t,n,this.wrapperEl.transitionTimeoutId),this.glare&&(this.glare.transitionTimeoutId=s(this.glare.glareEl,"opacity",t,n,this.glare.transitionTimeoutId))},t.prototype.render=function(){var e=this,t=this.props;return a.a.createElement("div",{ref:function(t){return e.wrapperEl.node=t},onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:t.className,style:t.style},t.children)},t.defaultProps=l}(i.PureComponent),n("8uUf"));t.a=function(e){var t=e.imgName,n=void 0===t?"oakley.png":t,i=e.width,r=void 0===i?"300px":i,o=e.height,l=void 0===o?"300px":o;return a.a.createElement("div",{style:{height:l,width:r,backgroundColor:"none",transition:"width 1s height 1s"}},a.a.createElement(u.a,{imgName:n}))}},ViR1:function(e,t,n){e.exports=n.p+"static/VET-2020-001_Questions_Reggie_Sitting-b6fcff2fc486d5ea31fe4a55a0319c40.mp4"},X9Lb:function(e,t,n){e.exports=n.p+"static/Dog_heart_Poppy-26fd1adf40f0193df9d7d0c48fd7667a.mp4"},g0X1:function(e,t,n){e.exports=n.p+"static/VET-2020-001_Questions_Poppy_Standing-9f5616b8dc6b977b98ae9973aa517ca3.mp4"},j5sE:function(e,t,n){e.exports=n.p+"static/VET-2020-001_Questions_MrsJenkins-303172c55362c04b9b3bfe0982717514.mp4"},nHD1:function(e,t,n){e.exports=n.p+"static/VET-2020-001_Questions_Dudley_Sitting-ccb9d5c575b9af63aa2e9322508c9874.mp4"},nZHY:function(e,t,n){e.exports=n.p+"static/VET-2020-001_Questions_MrOakley-19cd731c2d2ed65bfaa99b40a21ff996.mp4"},nkKA:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return w}));n("E5k/");var i=n("q1tI"),a=n.n(i),r=n("Bl7J"),o=n("R/WZ"),l=n("tRbT"),s=(n("ILeL"),n("3ksh"),n("r5vi")),c=n("xvYo"),p=n("C/KN"),d=(n("5lfk"),n("ooR/")),u=n("mwIZ"),E=n.n(u),g=n("a5sw"),f=n("7TWv"),h=n("itCy"),_=n("tzB8"),R=(n("IBCv"),n("DTFT")),m=n("vOnD"),O=(n("zDcZ"),n("Spfr")),A=m.default.div.withConfig({displayName:"murmur-treatment__DogImageHolderBase",componentId:"orsuap-0"})(["display:flex;width:100%;height:314px;"]),v=Object(m.default)(A).withConfig({displayName:"murmur-treatment__DogImageHolder",componentId:"orsuap-1"})([""]),N=Object(o.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));var T=function(e){var t,n=e.type,i=void 0===n?h.o.QUESTION_POSED:n,r=e.resources,o=e.navigationLeftHandler,s=e.navigationRightHandler,d=e.dogChoice,u=null,E=[];r.field_buttonlinks&&r.field_buttonlinks.length>0&&(E=r.field_buttonlinks);var m={};switch(i){case h.o.ANSWER_WITH_VIDEO:case h.o.ANSWER_NO_VIDEO:E=[{}],!1===("yes"===r.field_iscorrectanswer[0])&&(E[0].id=h.u.QUESTION_POSED,E[0].title="Try again",E[0].url="/",E[0].onClickHandler=s,E[0].buttonType=h.j.DARK_BLUE_ROUNDED),u={questionText:"",answerHeader:r.field_answerheader?Object(g.i)(r.field_answerheader,d,!1):"",answerText:r.field_answertext?Object(g.i)(r.field_answertext,d,!0):"",additionalText:r.field_additionalbodytext?Object(g.i)(r.field_additionalbodytext,d,!0):"",isCorrectAnswer:r.field_iscorrectanswer[0],mainImage:Object(R.a)(h.a.HAPPY,d),slugName:h.k.CORRECT_ANSWER_ULTRASOUND,continueLink:{uri:"/",title:"Continue",url:"/"},backLink:{uri:"/",title:"Back",url:"/"},accessibilityVideoText:"",buttonLinks:E,dogChoice:d};var A=Object(f.b)(u,d);u=Object(f.d)(u,A);break;case h.o.QUESTION_POSED:(E=[{},{},{},{},{},{}])[0].id=h.u.CORRECT_ANSWER_XRAY_ONLY,E[0].title="X-ray",E[0].url="/",E[1].id=h.u.CORRECT_ANSWER_ULTRASOUND,E[1].title="Ultrasound",E[1].url="/",E[2].id=h.u.INCORRECT_ANSWER_ECG,E[2].title="ECG",E[2].url="/",E[3].id=h.u.CORRECT_ANSWER_XRAY_AND_ULTRASOUND,E[3].title="X-ray and ultrasound",E[3].url="/",E[4].id=h.u.INCORRECT_ANSWER_NO_TREATMENT,E[4].title="Finish Appointment",E[4].url="/",E[5].id=h.u.INCORRECT_ANSWER_HOLTER_MONITORING,E[5].title="Holter monitoring",E[5].url="/",u={questionText:r.field_questiontext?Object(g.i)(r.field_questiontext,d,!1):"",additionalText:r.field_additionalbodytext?Object(g.i)(r.field_additionalbodytext,d,!0):"",slugName:h.k.QUESTION_POSED,accessibilityVideoText:"",animationVideoName:Object(R.c)(h.a.NEUTRAL,d),isCorrect1:r.field_optioniscorrect1,optionsHeader1:Object(g.i)(r.field_optionsheader1,d,!1),optionsBodyText1:Object(g.i)(r.field_optionsbodytext1,d,!0),isCorrect2:r.field_optioniscorrect2,optionsHeader2:"GRADE 2",optionsBodyText2:Object(g.i)(r.field_optionsbodytext2,d,!0),isCorrect3:r.field_optioniscorrect3,optionsHeader3:"GRADE 3",optionsBodyText3:Object(g.i)(r.field_optionsbodytext3,d,!0),isCorrect4:r.field_optioniscorrect4,optionsHeader4:"GRADE 4",optionsBodyText4:Object(g.i)(r.field_optionsbodytext4,d,!0),isCorrect5:r.field_optioniscorrect5,optionsHeader5:"GRADE 5",optionsBodyText5:Object(g.i)(r.field_optionsbodytext5,d,!0),isCorrect6:r.field_optioniscorrect6,optionsHeader6:"GRADE 6",optionsBodyText6:Object(g.i)(r.field_optionsbodytext6,d,!0),buttonLinks:E,dogChoice:d};var N=Object(f.b)(u,d);u=Object(f.d)(u,N);break;default:return"type not found"}var T=a.a.createRef();return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.a,((t={container:!0,spacing:0}).spacing=0,t.alignItems="center",t.justify="center",t.style={border:"0px solid black"},t),a.a.createElement(l.a,{item:!0,xs:12,sm:1,align:"left",style:{border:"0px solid red"}}),a.a.createElement(l.a,{item:!0,xs:12,sm:5,align:"center",style:{border:"0px solid red"}},i===h.o.QUESTION_POSED?a.a.createElement(_.a,{autoPlay:"true",ref:T,data:u}):"",i!==h.o.ANSWER_WITH_VIDEO&&i!==h.o.ANSWER_NO_VIDEO||!u.mainImage||""===u.mainImage||d!==h.e.DUDLEY?"":a.a.createElement(v,null,a.a.createElement(O.a,{imgName:u.mainImage,height:"314px",width:"314px"})),i!==h.o.ANSWER_WITH_VIDEO&&i!==h.o.ANSWER_NO_VIDEO||!u.mainImage||""===u.mainImage||d!==h.e.POPPY?"":a.a.createElement(v,null,a.a.createElement(O.a,{imgName:u.mainImage,height:"314px",width:"314px"})),i!==h.o.ANSWER_WITH_VIDEO&&i!==h.o.ANSWER_NO_VIDEO||!u.mainImage||""===u.mainImage||d!==h.e.REGGIE?"":a.a.createElement(v,null,a.a.createElement(O.a,{imgName:u.mainImage,height:"314px",width:"314px"}))),a.a.createElement(l.a,{item:!0,xs:12,sm:5,align:"left",style:{border:"0px solid red"}},i===h.o.QUESTION_POSED?a.a.createElement(p.a,{data:u,currentSlidePosition:0,onClickHandler:s,dogChoice:d,useVideoWidget:m.useVideoWidget}):"",i===h.o.ANSWER_WITH_VIDEO||i===h.o.ANSWER_NO_VIDEO?a.a.createElement(c.a,{data:u,currentSlidePosition:0,onClickHandler:o,dogChoice:d,useVideoWidget:m.useVideoWidget}):""),a.a.createElement(l.a,{item:!0,xs:12,sm:1,align:"left",style:{border:"0px solid red"}})))};t.default=function(e){var t=e.data,n=Object(s.a)([h.d.DOG_CHOICE,h.d.CASESTUDYS_ALL]),o=n[0],l=n[1],c=(n[2],o.dogChoice?o.dogChoice:h.e.DUDLEY),p={step:h.u.QUESTION_POSED,taskCompleted:!1},u=Object(i.useState)(p),_=u[0],R=u[1];Object(i.useEffect)((function(){if(_.step===h.u.CORRECT_ANSWER_XRAY_ONLY||_.step===h.u.CORRECT_ANSWER_XRAY_AND_ULTRASOUND||_.step===h.u.CORRECT_ANSWER_ULTRASOUND){var e=Object(f.c)(h.p.WHICH_EXAMINATION,c,o);console.log("============= "+e+" ============="),l(h.d.CASESTUDYS_ALL,e,{path:"/"})}}),[_.step]);var m=E()(t,"allNodeQuestion.nodes"),O=E()(t,"allNodeAnswer.nodes"),A=null;switch(_.step){case h.u.QUESTION_POSED:A=Object(g.f)(m,h.k.QUESTION_POSED);break;case h.u.CORRECT_ANSWER_XRAY_ONLY:A=Object(g.f)(O,h.k.CORRECT_ANSWER_XRAY_ONLY);break;case h.u.CORRECT_ANSWER_XRAY_AND_ULTRASOUND:A=Object(g.f)(O,h.k.CORRECT_ANSWER_XRAY_AND_ULTRASOUND);break;case h.u.CORRECT_ANSWER_ULTRASOUND:A=Object(g.f)(O,h.k.CORRECT_ANSWER_ULTRASOUND);break;case h.u.INCORRECT_ANSWER_ECG:A=Object(g.f)(O,h.k.INCORRECT_ANSWER_ECG);break;case h.u.INCORRECT_ANSWER_NO_TREATMENT:A=Object(g.f)(O,h.k.INCORRECT_ANSWER_NO_TREATMENT);break;case h.u.INCORRECT_ANSWER_HOLTER_MONITORING:A=Object(g.f)(O,h.k.INCORRECT_ANSWER_HOLTER_MONITORING);break;default:return"no current slide"}if(console.log("=========== current Step - step ",_.step),console.log(A),!A)return"resources not found";if("NO_DATA_FOUND"==A)return"resources not found";var v=function(e){console.log("=========== setCurrentStep - step ",e),R(Object.assign(Object.assign({},_),{},{step:e}))},w=function(e){R(Object.assign(Object.assign({},_),{},{step:h.u.QUESTION_POSED}))},y=function(e){console.log("handleLeftClick")},C=function(e){console.log("handleRightClick")};return a.a.createElement(r.a,{headerText:Object(g.m)("Poppy has a grade 3 mitral valve murmur",c),showPercentIndicator:!0},h.u.CORRECT_ANSWER_ULTRASOUND===_.step||h.u.CORRECT_ANSWER_XRAY_AND_ULTRASOUND===_.step||h.u.CORRECT_ANSWER_XRAY_ONLY===_.step?a.a.createElement(d.a,{to:"/owner-response",distanceFromSide:"2%",bottom:"2%",direction:h.b.FORWARD,linkText:"Continue"}):"",a.a.createElement("div",{className:N().root,style:{position:"relative",zIndex:"1 !important"}},h.u.QUESTION_POSED===_.step?a.a.createElement(T,{type:h.o.QUESTION_POSED,resources:A,dogChoice:c,navigationLeftHandler:y,navigationRightHandler:function(e){if(e.currentTarget.id)switch(e.currentTarget.id){case h.u.CORRECT_ANSWER_ULTRASOUND:v(h.u.CORRECT_ANSWER_ULTRASOUND);break;case h.u.CORRECT_ANSWER_XRAY_AND_ULTRASOUND:v(h.u.CORRECT_ANSWER_XRAY_AND_ULTRASOUND);break;case h.u.CORRECT_ANSWER_XRAY_ONLY:v(h.u.CORRECT_ANSWER_XRAY_ONLY);break;case h.u.INCORRECT_ANSWER_ECG:v(h.u.INCORRECT_ANSWER_ECG);break;case h.u.INCORRECT_ANSWER_NO_TREATMENT:v(h.u.INCORRECT_ANSWER_NO_TREATMENT);break;case h.u.INCORRECT_ANSWER_HOLTER_MONITORING:v(h.u.INCORRECT_ANSWER_HOLTER_MONITORING);break;default:console.log("no matching id on question button"),v(h.u.QUESTION_POSED)}else console.log("no id on question button"),v(h.u.QUESTION_POSED)}}):"",h.u.CORRECT_ANSWER_ULTRASOUND===_.step?a.a.createElement(T,{type:h.o.ANSWER_WITH_VIDEO,resources:A,dogChoice:c,navigationLeftHandler:y,navigationRightHandler:C}):"",h.u.CORRECT_ANSWER_XRAY_AND_ULTRASOUND===_.step?a.a.createElement(T,{type:h.o.ANSWER_WITH_VIDEO,resources:A,dogChoice:c,navigationLeftHandler:y,navigationRightHandler:C}):"",h.u.CORRECT_ANSWER_XRAY_ONLY===_.step?a.a.createElement(T,{type:h.o.ANSWER_WITH_VIDEO,resources:A,dogChoice:c,navigationLeftHandler:y,navigationRightHandler:C}):"",h.u.INCORRECT_ANSWER_ECG===_.step?a.a.createElement(T,{type:h.o.ANSWER_NO_VIDEO,resources:A,dogChoice:c,navigationLeftHandler:y,navigationRightHandler:w}):"",h.u.INCORRECT_ANSWER_NO_TREATMENT===_.step?a.a.createElement(T,{type:h.o.ANSWER_NO_VIDEO,resources:A,dogChoice:c,navigationLeftHandler:y,navigationRightHandler:w}):"",h.u.INCORRECT_ANSWER_HOLTER_MONITORING===_.step?a.a.createElement(T,{type:h.o.ANSWER_NO_VIDEO,resources:A,dogChoice:c,navigationLeftHandler:y,navigationRightHandler:w}):""))};var w="2906521392"},"ooR/":function(e,t,n){"use strict";var i=n("q1tI"),a=n.n(i),r=n("zDcZ"),o=n("82Oa"),l=n("vOnD"),s=l.default.div.withConfig({displayName:"BottomNavigationLink__LinkHolder",componentId:"caajde-0"})(["position:absolute;width:150px;height:100px;display:flex;flex-direction:column;justify-content:center;align-content:center;align-content:center;text-align:center;border:0px solid red;z-index:10;@media (max-width:","px){display:block;position:static;width:100% !important;}"],r.c),c=Object(l.default)(s).withConfig({displayName:"BottomNavigationLink__LinkHolderLeft",componentId:"caajde-1"})(["@media (max-width:","px){text-align:right;}"],r.c),p=Object(l.default)(s).withConfig({displayName:"BottomNavigationLink__LinkHolderRight",componentId:"caajde-2"})(["@media (max-width:","px){text-align:left;}"],r.c);t.a=function(e){var t=e.linkText,n=void 0===t?"Back":t,i=e.to,l=void 0===i?"/":i,s=e.distanceFromSide,d=void 0===s?"10%":s,u=e.bottom,E=void 0===u?"0":u,g=e.direction,f=void 0===g?"forward":g,h=e.onClick,_=void 0===h?null:h;return"forward"===f?a.a.createElement(c,{style:{right:d,bottom:E}},a.a.createElement(o.b,{onClick:_,style:{display:"flex",flexDirection:"row",alignItems:"center",width:"200px",height:"50px",textDecoration:"none",color:r.a.palette.deminBlue.main,fontFamily:r.a.typography.fontFamily,fontWeight:"700"},to:l,typeOfButton:o.a.FORWARD_NORMAL_LINK},n)):a.a.createElement(p,{style:{left:d,bottom:E}},a.a.createElement(o.b,{onClick:_,style:{display:"flex",flexDirection:"row",alignItems:"center",alignContent:"center",width:"200px",height:"50px",textDecoration:"none",color:r.a.palette.deminBlue.main,fontFamily:r.a.typography.fontFamily,fontWeight:"700"},to:l,typeOfButton:o.a.BACK_NORMAL_LINK},n))}},wwni:function(e,t,n){e.exports=n.p+"static/VET-2020-001_Questions_Reggie_Standing-be7884d04014b2d73b9e7755ddc20a39.mp4"},yI0q:function(e,t,n){e.exports=n.p+"static/Dog_heart_Dudley-67ef3f6b0bfceda5b6375acf75239fe1.mp4"},yjWk:function(e,t,n){e.exports=n.p+"static/Dog_heart_Reggie-7b4a70e24b0093cc8de64baa7c7a88d5.mp4"}}]);
//# sourceMappingURL=component---src-pages-murmur-treatment-js-f78c797243665e373e7e.js.map