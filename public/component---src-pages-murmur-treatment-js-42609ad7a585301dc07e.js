(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{CczQ:function(e,t,i){var n=i("P8UN"),r=Math.abs;n(n.S,"Math",{hypot:function(e,t){for(var i,n,a=0,o=0,l=arguments.length,s=0;o<l;)s<(i=r(arguments[o++]))?(a=a*(n=s/i)*n+1,s=i):a+=i>0?(n=i/s)*n:i;return s===1/0?1/0:s*Math.sqrt(a)}})},Spfr:function(e,t,i){"use strict";var n=i("q1tI"),r=i.n(n),a=(i("YbXK"),i("cFtU"),i("q8oJ"),i("8npG"),i("CczQ"),i("E5k/"),i("LagC"),function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)}),o=function(){return(o=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},l=o(o({scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1},{tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:null,tiltAngleXManual:null,tiltAngleYManual:null}),{glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1});function s(e,t,i,n,r){return void 0===r&&(r=null),r&&clearTimeout(r),e.style.transition=t+" "+i+"ms "+n,setTimeout((function(){e.style.transition=""}),i)}function p(e,t,i){return Math.min(Math.max(e,t),i)}var c=function(){var e=this;this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=function(t,i){e.updateTilt(t,i),e.updateTiltManualInput(t,i),e.updateTiltReverse(i),e.updateTiltLimits(i)},this.updateTilt=function(t,i){var n=t.yPercentage,r=i.tiltMaxAngleY;e.tiltAngleX=t.xPercentage*i.tiltMaxAngleX/100,e.tiltAngleY=n*r/100*-1},this.updateTiltManualInput=function(t,i){var n=i.tiltAngleXManual,r=i.tiltAngleYManual,a=i.tiltMaxAngleX,o=i.tiltMaxAngleY;null===n&&null===r||(e.tiltAngleX=null!==n?n:0,e.tiltAngleY=null!==r?r:0,t.xPercentage=100*e.tiltAngleX/a,t.yPercentage=100*e.tiltAngleY/o)},this.updateTiltReverse=function(t){var i=t.tiltReverse?-1:1;e.tiltAngleX=i*e.tiltAngleX,e.tiltAngleY=i*e.tiltAngleY},this.updateTiltLimits=function(t){var i=t.tiltAxis;e.tiltAngleX=p(e.tiltAngleX,-90,90),e.tiltAngleY=p(e.tiltAngleY,-90,90),i&&(e.tiltAngleX="x"===i?e.tiltAngleX:0,e.tiltAngleY="y"===i?e.tiltAngleY:0)},this.updateTiltAnglesPercentage=function(t){var i=t.tiltMaxAngleY;e.tiltAngleXPercentage=e.tiltAngleX/t.tiltMaxAngleX*100,e.tiltAngleYPercentage=e.tiltAngleY/i*100},this.render=function(t){t.style.transform+="rotateX("+e.tiltAngleX+"deg) rotateY("+e.tiltAngleY+"deg) "}},d=function(e){var t=this;this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=function(e){return{width:2*e.width,height:2*e.height}},this.setSize=function(e){var i=t.calculateGlareSize(e);t.glareEl.style.width=i.width+"px",t.glareEl.style.height=i.height+"px"},this.update=function(e,i,n,r){t.updateAngle(e,i.glareReverse),t.updateOpacity(e,i,n,r)},this.updateAngle=function(e,i){var n=e.xPercentage,r=180/Math.PI,a=n?Math.atan2(e.yPercentage,-n)*r:0;t.glareAngle=a-(i?180:0)},this.updateOpacity=function(e,i,n,r){var a,o=e.xPercentage,l=e.yPercentage,s=i.glareReverse,c=i.glareMaxOpacity,d=n?-1:1,E=r?-1:1;switch(i.glarePosition){case"top":a=-o*d;break;case"right":a=l*E;break;case"bottom":a=o*d;break;case"left":a=-l*E;break;case"all":a=Math.hypot(o,l);break;default:a=o*d}var g=p(a=s?-a:a,0,100);t.glareOpacity=g*c/100},this.render=function(e){var i=e.glareColor;t.glareEl.style.transform="rotate("+t.glareAngle+"deg) translate(-50%, -50%)",t.glareEl.style.opacity=t.glareOpacity.toString(),t.glareEl.style.background="linear-gradient(0deg, rgba(255,255,255,0) 0%, "+i+" 100%)"},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";var i=this.calculateGlareSize(e),n={position:"absolute",top:"50%",left:"50%","transform-origin":"0% 0%","pointer-events":"none",width:i.width+"px",height:i.height+"px"};Object.assign(this.glareWrapperEl.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden"}),Object.assign(this.glareEl.style,n)},E=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},transitionTimeoutId:void 0,updateAnimationId:null,childrenImgsCounter:0,childrenImgsLength:0,scale:1},t.tilt=null,t.glare=null,t.loadWrapperAndChildElements=function(){var e=Array.from(t.wrapperEl.node.getElementsByTagName("img"));t.wrapperEl.childrenImgsLength=e.length,0!==t.wrapperEl.childrenImgsLength?e.forEach((function(e){e.complete?t.allImagesLoaded():e.addEventListener("load",t.allImagesLoaded)})):t.setSize()},t.allImagesLoaded=function(){t.wrapperEl.childrenImgsCounter++,t.wrapperEl.childrenImgsCounter===t.wrapperEl.childrenImgsLength&&t.setSize()},t.setSize=function(){t.setWrapperElSize(),t.glare&&t.glare.setSize(t.wrapperEl.size)},t.mainLoop=function(e){null!==t.wrapperEl.updateAnimationId&&cancelAnimationFrame(t.wrapperEl.updateAnimationId),t.processInput(e),t.update(e.type),t.wrapperEl.updateAnimationId=requestAnimationFrame(t.renderFrame)},t.onEnter=function(e){var i=t.props.onEnter;t.wrapperEl.node.style.willChange="transform",t.setTransition(),i&&i(e.type)},t.onMove=function(e){t.mainLoop(e),t.emitOnMove(e)},t.onLeave=function(e){var i=t.props.onLeave;if(t.setTransition(),i&&i(e.type),t.props.reset){var n=new CustomEvent("autoreset");t.onMove(n)}},t.processInput=function(e){var i=t.props.scale;switch(e.type){case"mousemove":t.wrapperEl.clientPosition.x=e.pageX,t.wrapperEl.clientPosition.y=e.pageY,t.wrapperEl.scale=i;break;case"touchmove":t.wrapperEl.clientPosition.x=e.touches[0].pageX,t.wrapperEl.clientPosition.y=e.touches[0].pageY,t.wrapperEl.scale=i;break;case"deviceorientation":t.processInputDeviceOrientation(e),t.wrapperEl.scale=i;break;case"autoreset":var n=t.props,r=n.tiltAngleYInitial/n.tiltMaxAngleY*100;t.wrapperEl.clientPosition.xPercentage=p(n.tiltAngleXInitial/n.tiltMaxAngleX*100,-100,100),t.wrapperEl.clientPosition.yPercentage=p(r,-100,100),t.wrapperEl.scale=1}},t.processInputDeviceOrientation=function(e){if(e.gamma&&e.beta&&t.props.gyroscope){var i=t.props,n=i.tiltMaxAngleY,r=e.gamma;t.wrapperEl.clientPosition.xPercentage=e.beta/i.tiltMaxAngleX*100,t.wrapperEl.clientPosition.yPercentage=r/n*100,t.wrapperEl.clientPosition.xPercentage=p(t.wrapperEl.clientPosition.xPercentage,-100,100),t.wrapperEl.clientPosition.yPercentage=p(t.wrapperEl.clientPosition.yPercentage,-100,100)}},t.update=function(e){var i=t.props,n=i.tiltEnable,r=i.flipVertically,a=i.flipHorizontally;t.updateClientInput(e),n&&t.tilt.update(t.wrapperEl.clientPosition,t.props),t.updateFlip(),t.tilt.updateTiltAnglesPercentage(t.props),t.glare&&t.glare.update(t.wrapperEl.clientPosition,t.props,r,a)},t.updateClientInput=function(e){if("autoreset"!==e&&"deviceorientation"!==e){var i,n;if(t.props.trackOnWindow){var r=t.wrapperEl.clientPosition,a=r.x;i=r.y/window.innerHeight*200-100,n=a/window.innerWidth*200-100}else{var o=t.wrapperEl,l=o.size,s=o.clientPosition;i=(s.y-l.top)/l.height*200-100,n=((a=s.x)-l.left)/l.width*200-100}t.wrapperEl.clientPosition.xPercentage=p(i,-100,100),t.wrapperEl.clientPosition.yPercentage=p(n,-100,100)}},t.updateFlip=function(){var e=t.props,i=e.flipHorizontally;e.flipVertically&&(t.tilt.tiltAngleX+=180,t.tilt.tiltAngleY*=-1),i&&(t.tilt.tiltAngleY+=180)},t.renderFrame=function(){t.resetWrapperElTransform(),t.renderPerspective(),t.tilt.render(t.wrapperEl.node),t.renderScale(),t.glare&&t.glare.render(t.props)},t}(function(e,t){function i(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)})(t,e),t.prototype.componentDidMount=function(){this.loadWrapperAndChildElements(),this.tilt=new c,this.initGlare(),this.addEventListeners();var e=new CustomEvent("autoreset");this.mainLoop(e);var t=new CustomEvent("initial");this.emitOnMove(t)},t.prototype.componentWillUnmount=function(){clearTimeout(this.wrapperEl.transitionTimeoutId),null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()},t.prototype.componentDidUpdate=function(){var e=this.props;if(!(e.onMove||e.onEnter||e.onLeave)){var t=new CustomEvent("propchange");this.mainLoop(t)}},t.prototype.addEventListeners=function(){var e=this.props,t=e.trackOnWindow,i=e.gyroscope;if(window.addEventListener("resize",this.setSize),t&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),i){if(!window.DeviceOrientationEvent)return void console.error("Browser doesn't support Device Orientation.");window.addEventListener("deviceorientation",this.onMove)}},t.prototype.removeEventListeners=function(){var e=this.props,t=e.trackOnWindow,i=e.gyroscope;window.removeEventListener("resize",this.setSize),t&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),i&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)},t.prototype.setWrapperElSize=function(){var e=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=e.left+window.scrollX,this.wrapperEl.size.top=e.top+window.scrollY},t.prototype.initGlare=function(){this.props.glareEnable&&(this.glare=new d(this.wrapperEl.size),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))},t.prototype.emitOnMove=function(e){var t=this.props.onMove;if(t){var i=0,n=0;this.glare&&(i=this.glare.glareAngle,n=this.glare.glareOpacity),t(this.tilt.tiltAngleX,this.tilt.tiltAngleY,this.tilt.tiltAngleXPercentage,this.tilt.tiltAngleYPercentage,i,n,e.type)}},t.prototype.resetWrapperElTransform=function(){this.wrapperEl.node.style.transform=""},t.prototype.renderPerspective=function(){this.wrapperEl.node.style.transform+="perspective("+this.props.perspective+"px) "},t.prototype.renderScale=function(){var e=this.wrapperEl.scale;this.wrapperEl.node.style.transform+="scale3d("+e+","+e+","+e+")"},t.prototype.setTransition=function(){var e=this.props,t=e.transitionSpeed,i=e.transitionEasing;this.wrapperEl.transitionTimeoutId=s(this.wrapperEl.node,"all",t,i,this.wrapperEl.transitionTimeoutId),this.glare&&(this.glare.transitionTimeoutId=s(this.glare.glareEl,"opacity",t,i,this.glare.transitionTimeoutId))},t.prototype.render=function(){var e=this,t=this.props;return r.a.createElement("div",{ref:function(t){return e.wrapperEl.node=t},onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:t.className,style:t.style},t.children)},t.defaultProps=l}(n.PureComponent),i("8uUf"));t.a=function(e){var t=e.imgName,i=void 0===t?"oakley.png":t,n=e.width,a=void 0===n?"300px":n,o=e.height,l=void 0===o?"300px":o;return r.a.createElement("div",{style:{height:l,width:a,backgroundColor:"none",transition:"width 1s height 1s"}},r.a.createElement(E.a,{imgName:i}))}},nkKA:function(e,t,i){"use strict";i.r(t),i.d(t,"query",(function(){return C}));i("E5k/");var n=i("q1tI"),r=i.n(n),a=i("Bl7J"),o=i("R/WZ"),l=i("tRbT"),s=(i("ILeL"),i("3ksh"),i("r5vi")),p=i("xvYo"),c=i("C/KN"),d=(i("5lfk"),i("ooR/")),E=i("mwIZ"),g=i.n(E),u=i("a5sw"),h=i("7TWv"),R=i("itCy"),O=i("tzB8"),_=i("IBCv"),m=i("DTFT"),A=i("vOnD"),f=(i("zDcZ"),i("Spfr")),v=A.default.div.withConfig({displayName:"murmur-treatment__DogImageHolderBase",componentId:"orsuap-0"})(["display:flex;width:100%;height:314px;"]),N=Object(A.default)(v).withConfig({displayName:"murmur-treatment__DogImageHolder",componentId:"orsuap-1"})([""]),T=Object(o.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));var w=function(e){var t,i=e.type,n=void 0===i?R.t.QUESTION_POSED:i,a=e.resources,o=e.navigationLeftHandler,s=e.navigationRightHandler,d=e.dogChoice,E=null,g=[];a.field_buttonlinks&&a.field_buttonlinks.length>0&&(g=a.field_buttonlinks);switch(n){case R.t.ANSWER_WITH_VIDEO:case R.t.ANSWER_NO_VIDEO:g=[{}],!1===("yes"===a.field_iscorrectanswer[0])&&(g[0].id=R.z.QUESTION_POSED,g[0].title="Try again",g[0].url="/",g[0].onClickHandler=s,g[0].buttonType=R.l.DARK_BLUE_ROUNDED);var A=Object(h.b)(a,d);E={questionText:"",answerHeader:a.field_answerheader?Object(u.i)(a.field_answerheader,d,!1):"",answerText:a.field_answertext?Object(u.i)(a.field_answertext,d,!0):"",additionalText:a.field_additionalbodytext?Object(u.i)(a.field_additionalbodytext,d,!0):"",isCorrectAnswer:a.field_iscorrectanswer[0],mainImage:Object(m.a)(R.b.HAPPY,d),slugName:R.m.CORRECT_ANSWER_ULTRASOUND,continueLink:{uri:"/",title:"Continue",url:"/"},backLink:{uri:"/",title:"Back",url:"/"},accessibilityVideoText:"",buttonLinks:g,dogChoice:d},E=Object(h.f)(E,A);break;case R.t.QUESTION_POSED:var v=Object(h.b)(a,d);(g=[{},{},{},{},{},{}])[0].id=R.z.CORRECT_ANSWER_XRAY_ONLY,g[0].title="X-ray",g[0].url="/",g[1].id=R.z.CORRECT_ANSWER_ULTRASOUND,g[1].title="Ultrasound",g[1].url="/",g[2].id=R.z.INCORRECT_ANSWER_ECG,g[2].title="ECG",g[2].url="/",g[3].id=R.z.CORRECT_ANSWER_XRAY_AND_ULTRASOUND,g[3].title="X-ray and ultrasound",g[3].url="/",g[4].id=R.z.INCORRECT_ANSWER_NO_TREATMENT,g[4].title="Finish Appointment",g[4].url="/",g[5].id=R.z.INCORRECT_ANSWER_HOLTER_MONITORING,g[5].title="Holter monitoring",g[5].url="/",E={questionText:a.field_questiontext?Object(u.i)(a.field_questiontext,d,!1):"",additionalText:a.field_additionalbodytext?Object(u.i)(a.field_additionalbodytext,d,!0):"",slugName:R.m.QUESTION_POSED,accessibilityVideoText:"",animationVideoName:Object(m.c)(R.b.NEUTRAL,d),isCorrect1:a.field_optioniscorrect1,optionsHeader1:Object(u.i)(a.field_optionsheader1,d,!1),optionsBodyText1:Object(u.i)(a.field_optionsbodytext1,d,!0),isCorrect2:a.field_optioniscorrect2,optionsHeader2:"GRADE 2",optionsBodyText2:Object(u.i)(a.field_optionsbodytext2,d,!0),isCorrect3:a.field_optioniscorrect3,optionsHeader3:"GRADE 3",optionsBodyText3:Object(u.i)(a.field_optionsbodytext3,d,!0),isCorrect4:a.field_optioniscorrect4,optionsHeader4:"GRADE 4",optionsBodyText4:Object(u.i)(a.field_optionsbodytext4,d,!0),isCorrect5:a.field_optioniscorrect5,optionsHeader5:"GRADE 5",optionsBodyText5:Object(u.i)(a.field_optionsbodytext5,d,!0),isCorrect6:a.field_optioniscorrect6,optionsHeader6:"GRADE 6",optionsBodyText6:Object(u.i)(a.field_optionsbodytext6,d,!0),buttonLinks:g,dogChoice:d},E=Object(h.f)(E,v);break;default:return"type not found"}var T=r.a.createRef();return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,((t={container:!0,spacing:0}).spacing=0,t.alignItems="center",t.justify="center",t.style={border:"0px solid black"},t),r.a.createElement(l.a,{item:!0,xs:12,sm:1,align:"left",style:{border:"0px solid red"}}),r.a.createElement(l.a,{item:!0,xs:12,sm:5,align:"center",style:{border:"0px solid red"}},n===R.t.QUESTION_POSED?r.a.createElement(O.a,{autoPlay:"true",ref:T,data:E}):"",n!==R.t.ANSWER_WITH_VIDEO&&n!==R.t.ANSWER_NO_VIDEO||!E.mainImage||""===E.mainImage||d!==R.f.DUDLEY?"":r.a.createElement(N,null,r.a.createElement(f.a,{imgName:E.mainImage,height:"314px",width:"314px"})),n!==R.t.ANSWER_WITH_VIDEO&&n!==R.t.ANSWER_NO_VIDEO||!E.mainImage||""===E.mainImage||d!==R.f.POPPY?"":r.a.createElement(N,null,r.a.createElement(f.a,{imgName:E.mainImage,height:"314px",width:"314px"})),n!==R.t.ANSWER_WITH_VIDEO&&n!==R.t.ANSWER_NO_VIDEO||!E.mainImage||""===E.mainImage||d!==R.f.REGGIE?"":r.a.createElement(N,null,r.a.createElement(f.a,{imgName:E.mainImage,height:"314px",width:"314px"}))),r.a.createElement(l.a,{item:!0,xs:12,sm:5,align:"left",style:{border:"0px solid red"}},n===R.t.QUESTION_POSED?r.a.createElement(c.a,{data:E,currentSlidePosition:0,onClickHandler:s,dogChoice:d,useVideoWidget:{}.useVideoWidget}):"",n===R.t.ANSWER_WITH_VIDEO?r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{data:E,currentSlidePosition:0,onClickHandler:o,dogChoice:d,useVideoWidget:!0}),r.a.createElement(_.a,{videoData1:E.videoData1,instance:"One"})):"",n===R.t.ANSWER_NO_VIDEO?r.a.createElement(p.a,{data:E,currentSlidePosition:0,onClickHandler:o,dogChoice:d,useVideoWidget:!1}):""),r.a.createElement(l.a,{item:!0,xs:12,sm:1,align:"left",style:{border:"0px solid red"}})))};t.default=function(e){var t=e.data,i=Object(s.a)([R.e.DOG_CHOICE,R.e.CASESTUDYS_ALL]),o=i[0],l=i[1],p=(i[2],o.dogChoice?o.dogChoice:R.f.DUDLEY),c={step:R.z.QUESTION_POSED,taskCompleted:!1},E=Object(n.useState)(c),O=E[0],_=E[1];Object(n.useEffect)((function(){if(O.step===R.z.CORRECT_ANSWER_XRAY_ONLY||O.step===R.z.CORRECT_ANSWER_XRAY_AND_ULTRASOUND||O.step===R.z.CORRECT_ANSWER_ULTRASOUND){var e=Object(h.e)(R.u.WHICH_EXAMINATION,p,o);console.log("============= "+e+" ============="),l(R.e.CASESTUDYS_ALL,e,{path:"/"})}}),[O.step]);var m=g()(t,"allNodeQuestion.nodes"),A=g()(t,"allNodeAnswer.nodes"),f=null,v="";switch(O.step){case R.z.QUESTION_POSED:f=Object(u.f)(m,R.m.QUESTION_POSED);break;case R.z.CORRECT_ANSWER_XRAY_ONLY:f=Object(u.f)(A,R.m.CORRECT_ANSWER_XRAY_ONLY);break;case R.z.CORRECT_ANSWER_XRAY_AND_ULTRASOUND:f=Object(u.f)(A,R.m.CORRECT_ANSWER_XRAY_AND_ULTRASOUND);break;case R.z.CORRECT_ANSWER_ULTRASOUND:f=Object(u.f)(A,R.m.CORRECT_ANSWER_ULTRASOUND);break;case R.z.INCORRECT_ANSWER_ECG:f=Object(u.f)(A,R.m.INCORRECT_ANSWER_ECG);break;case R.z.INCORRECT_ANSWER_NO_TREATMENT:f=Object(u.f)(A,R.m.INCORRECT_ANSWER_NO_TREATMENT);break;case R.z.INCORRECT_ANSWER_HOLTER_MONITORING:f=Object(u.f)(A,R.m.INCORRECT_ANSWER_HOLTER_MONITORING);break;default:return"no current slide"}if(console.log("=========== current Step - step ",O.step),console.log(f),!f)return"resources not found";if("NO_DATA_FOUND"==f)return"resources not found";var N=function(e){console.log("=========== setCurrentStep - step ",e),_(Object.assign(Object.assign({},O),{},{step:e}))},C=function(e){_(Object.assign(Object.assign({},O),{},{step:R.z.QUESTION_POSED}))},S=function(e){console.log("handleLeftClick")},y=function(e){console.log("handleRightClick")};return v=R.z.QUESTION_POSED!==O.step?v:"",r.a.createElement(a.a,{headerText:v,showPercentIndicator:!0},R.z.CORRECT_ANSWER_ULTRASOUND===O.step||R.z.CORRECT_ANSWER_XRAY_AND_ULTRASOUND===O.step||R.z.CORRECT_ANSWER_XRAY_ONLY===O.step?r.a.createElement(d.a,{to:"/owner-response",distanceFromSide:"2%",bottom:"2%",direction:R.c.FORWARD,linkText:"Continue"}):"",r.a.createElement("div",{className:T().root,style:{position:"relative",zIndex:"1 !important"}},R.z.QUESTION_POSED===O.step?r.a.createElement(w,{type:R.t.QUESTION_POSED,resources:f,dogChoice:p,navigationLeftHandler:S,navigationRightHandler:function(e){if(e.currentTarget.id)switch(e.currentTarget.id){case R.z.CORRECT_ANSWER_ULTRASOUND:N(R.z.CORRECT_ANSWER_ULTRASOUND);break;case R.z.CORRECT_ANSWER_XRAY_AND_ULTRASOUND:N(R.z.CORRECT_ANSWER_XRAY_AND_ULTRASOUND);break;case R.z.CORRECT_ANSWER_XRAY_ONLY:N(R.z.CORRECT_ANSWER_XRAY_ONLY);break;case R.z.INCORRECT_ANSWER_ECG:N(R.z.INCORRECT_ANSWER_ECG);break;case R.z.INCORRECT_ANSWER_NO_TREATMENT:N(R.z.INCORRECT_ANSWER_NO_TREATMENT);break;case R.z.INCORRECT_ANSWER_HOLTER_MONITORING:N(R.z.INCORRECT_ANSWER_HOLTER_MONITORING);break;default:console.log("no matching id on question button"),N(R.z.QUESTION_POSED)}else console.log("no id on question button"),N(R.z.QUESTION_POSED)}}):"",R.z.CORRECT_ANSWER_ULTRASOUND===O.step?r.a.createElement(w,{type:R.t.ANSWER_WITH_VIDEO,resources:f,dogChoice:p,navigationLeftHandler:S,navigationRightHandler:y}):"",R.z.CORRECT_ANSWER_XRAY_AND_ULTRASOUND===O.step?r.a.createElement(w,{type:R.t.ANSWER_WITH_VIDEO,resources:f,dogChoice:p,navigationLeftHandler:S,navigationRightHandler:y}):"",R.z.CORRECT_ANSWER_XRAY_ONLY===O.step?r.a.createElement(w,{type:R.t.ANSWER_WITH_VIDEO,resources:f,dogChoice:p,navigationLeftHandler:S,navigationRightHandler:y}):"",R.z.INCORRECT_ANSWER_ECG===O.step?r.a.createElement(w,{type:R.t.ANSWER_NO_VIDEO,resources:f,dogChoice:p,navigationLeftHandler:S,navigationRightHandler:C}):"",R.z.INCORRECT_ANSWER_NO_TREATMENT===O.step?r.a.createElement(w,{type:R.t.ANSWER_NO_VIDEO,resources:f,dogChoice:p,navigationLeftHandler:S,navigationRightHandler:C}):"",R.z.INCORRECT_ANSWER_HOLTER_MONITORING===O.step?r.a.createElement(w,{type:R.t.ANSWER_NO_VIDEO,resources:f,dogChoice:p,navigationLeftHandler:S,navigationRightHandler:C}):""))};var C="990129315"}}]);
//# sourceMappingURL=component---src-pages-murmur-treatment-js-42609ad7a585301dc07e.js.map