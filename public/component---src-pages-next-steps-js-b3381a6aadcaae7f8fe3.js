(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"5rFP":function(e,t,i){"use strict";i.r(t),i.d(t,"pageQuery",(function(){return T}));i("E5k/");var n=i("q1tI"),r=i.n(n),o=i("Bl7J"),a=(i("zDcZ"),i("R/WZ")),l=i("tRbT"),s=(i("ILeL"),i("3ksh"),i("r5vi")),p=i("xvYo"),c=i("C/KN"),d=(i("5lfk"),i("7TWv")),u=i("ooR/"),E=i("mwIZ"),g=i.n(E),h=i("a5sw"),f=i("itCy"),v=i("tzB8"),m=(i("IBCv"),i("DTFT")),w=(i("Spfr"),Object(a.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}})));var A=function(e){var t,i=e.type,n=void 0===i?f.t.QUESTION_POSED:i,o=e.resources,a=e.navigationLeftHandler,s=e.navigationRightHandler,u=e.dogChoice,E=[];o.field_buttonlinks&&o.field_buttonlinks.length>0&&(E=o.field_buttonlinks);var g={};switch(n){case f.t.ANSWER_WITH_VIDEO:case f.t.ANSWER_NO_VIDEO:E=[{}],!1===("yes"===o.field_iscorrectanswer[0])&&(E[0].id=f.o.QUESTION_POSED,E[0].title="Try again",E[0].url="/",E[0].onClickHandler=s,E[0].buttonType=f.l.DARK_BLUE_ROUNDED);var w=Object(d.b)(o,u);g={questionText:"",answerHeader:o.field_answerheader?Object(h.i)(o.field_answerheader,u,!1):"",answerText:o.field_answertext?Object(h.i)(o.field_answertext,u,!0):"",additionalText:o.field_additionalbodytext?Object(h.i)(o.field_additionalbodytext,u,!0):"",isCorrectAnswer:o.field_iscorrectanswer[0],mainImage:Object(m.a)(f.b.HAPPY,u),slugName:f.n.CORRECT_ANSWER_RECHECK,continueLink:{uri:"/",title:"Continue",url:"/"},backLink:{uri:"/",title:"Back",url:"/"},accessibilityVideoText:"",buttonLinks:E,dogChoice:u},g=Object(d.f)(g,w);break;case f.t.QUESTION_POSED:(E=[{},{},{},{},{},{}])[0].id=f.o.CORRECT_ANSWER_RECHECK,E[0].title="Recheck in 6–12 months",E[0].url="/",E[1].id=f.o.INCORRECT_ALL_CLEAR,E[1].title="Give the ‘all clear’",E[1].url="/",E[2].id=f.o.CORRECT_ANSWER_START_TREATMENT,E[2].title="Start treatment",E[2].url="/";var A=Object(d.b)(o,u);g={questionText:o.field_questiontext?Object(h.i)(o.field_questiontext,u,!1):"",additionalText:o.field_additionalbodytext?Object(h.i)(o.field_additionalbodytext,u,!0):"",slugName:f.n.QUESTION_POSED,accessibilityVideoText:"",animationVideoName:Object(m.c)(f.b.NEUTRAL,u),isCorrect1:o.field_optioniscorrect1,optionsHeader1:Object(h.i)(o.field_optionsheader1,u,!1),optionsBodyText1:Object(h.i)(o.field_optionsbodytext1,u,!0),isCorrect2:o.field_optioniscorrect2,optionsHeader2:"GRADE 2",optionsBodyText2:Object(h.i)(o.field_optionsbodytext2,u,!0),isCorrect3:o.field_optioniscorrect3,optionsHeader3:"GRADE 3",optionsBodyText3:Object(h.i)(o.field_optionsbodytext3,u,!0),isCorrect4:o.field_optioniscorrect4,optionsHeader4:"GRADE 4",optionsBodyText4:Object(h.i)(o.field_optionsbodytext4,u,!0),isCorrect5:o.field_optioniscorrect5,optionsHeader5:"GRADE 5",optionsBodyText5:Object(h.i)(o.field_optionsbodytext5,u,!0),isCorrect6:o.field_optioniscorrect6,optionsHeader6:"GRADE 6",optionsBodyText6:Object(h.i)(o.field_optionsbodytext6,u,!0),buttonLinks:E,dogChoice:u},g=Object(d.f)(g,A);break;default:return"type not found"}var T=r.a.createRef();return r.a.createElement("section",null,r.a.createElement(l.a,((t={container:!0,spacing:0}).spacing=0,t.justify="center",t.style={border:"0px solid black"},t),r.a.createElement(l.a,{item:!0,xs:12,sm:1,align:"left",style:{border:"0px solid red"}}),r.a.createElement(l.a,{item:!0,xs:12,sm:5,align:"center",style:{border:"0px solid red"}},r.a.createElement(v.a,{autoPlay:"true",ref:T,data:g})),r.a.createElement(l.a,{item:!0,xs:12,sm:5,align:"left",style:{border:"0px solid red"}},n===f.t.QUESTION_POSED?r.a.createElement(c.a,{data:g,currentSlidePosition:0,onClickHandler:s,dogChoice:u,useVideoWidget:g.useVideoWidget}):"",n===f.t.ANSWER_WITH_VIDEO||n===f.t.ANSWER_NO_VIDEO?r.a.createElement(p.a,{data:g,currentSlidePosition:0,onClickHandler:a,dogChoice:u,useVideoWidget:g.useVideoWidget}):""),r.a.createElement(l.a,{item:!0,xs:12,sm:1,align:"left",style:{border:"0px solid red"}})))};t.default=function(e){var t=e.data,i=Object(s.a)([f.e.DOG_CHOICE,f.e.CASESTUDYS_ALL]),a=i[0],l=i[1],p=(i[2],a.dogChoice?a.dogChoice:f.f.DUDLEY),c={step:f.o.QUESTION_POSED},E=Object(n.useState)(c),v=E[0],m=E[1];Object(n.useEffect)((function(){if(v.step===f.o.CORRECT_ANSWER_RECHECK||v.step===f.o.CORRECT_ANSWER_START_TREATMENT){var e=Object(d.e)(f.u.NEXT_STEPS,p,a);console.log("============= "+e+" ============="),l(f.e.CASESTUDYS_ALL,e,{path:"/"})}}),[v.step]);var T=g()(t,"allNodeQuestion.nodes"),R=g()(t,"allNodeAnswer.nodes"),O=null;switch(v.step){case f.o.QUESTION_POSED:(O=Object(h.f)(T,f.n.QUESTION_POSED)).topMostHeaderText=Object(h.m)("Poppy has a grade 3 mitral valve murmur",p);break;case f.o.CORRECT_ANSWER_RECHECK:(O=Object(h.f)(R,f.n.CORRECT_ANSWER_RECHECK)).topMostHeaderText="";case f.o.CORRECT_ANSWER_START_TREATMENT:(O=Object(h.f)(R,f.n.CORRECT_ANSWER_START_TREATMENT)).topMostHeaderText="";break;case f.o.INCORRECT_ALL_CLEAR:(O=Object(h.f)(R,f.n.INCORRECT_ALL_CLEAR)).topMostHeaderText="";break;default:return"no current slide"}if(console.log("=========== current Step - step ",v.step),console.log(O),!O)return"resources not found";if("NO_DATA_FOUND"==O)return"resources not found";var y=function(e){console.log("=========== setCurrentStep - step ",e),m(Object.assign(Object.assign({},v),{},{step:e}))},C=function(e){console.log("handleLeftClick")},_=function(e){console.log("handleRightClick")};return void 0===O||null==typeof O?r.a.createElement(o.a,{headerText:"SORRY TEMPORARILY UNAVAILABLE",showPercentIndicator:!0},r.a.createElement(u.a,{to:"/",distanceFromSide:"2%",bottom:"2%",linkText:"Home"})):r.a.createElement(o.a,{headerText:O.topMostHeaderText,showPercentIndicator:!0},f.o.CORRECT_ANSWER_RECHECK===v.step||f.o.CORRECT_ANSWER_START_TREATMENT===v.step?r.a.createElement(u.a,{to:"/which-treatment/",distanceFromSide:"2%",bottom:"2%",direction:f.c.FORWARD,linkText:"Continue"}):"",r.a.createElement("div",{className:w().root,style:{position:"relative",zIndex:"1 !important"}},f.o.QUESTION_POSED===v.step?r.a.createElement(A,{type:f.t.QUESTION_POSED,resources:O,dogChoice:p,navigationLeftHandler:C,navigationRightHandler:function(e){if(e.currentTarget.id)switch(e.currentTarget.id){case f.o.CORRECT_ANSWER_RECHECK:y(f.o.CORRECT_ANSWER_RECHECK);break;case f.o.CORRECT_ANSWER_START_TREATMENT:y(f.o.CORRECT_ANSWER_START_TREATMENT);break;case f.o.INCORRECT_ALL_CLEAR:y(f.o.INCORRECT_ALL_CLEAR);break;default:console.log("no matching id on question button"),y(f.o.QUESTION_POSED)}else console.log("no id on question button"),y(f.o.QUESTION_POSED)}}):"",f.o.CORRECT_ANSWER_RECHECK===v.step?r.a.createElement(A,{type:f.t.ANSWER_WITH_VIDEO,resources:O,dogChoice:p,navigationLeftHandler:C,navigationRightHandler:_}):"",f.o.CORRECT_ANSWER_START_TREATMENT===v.step?r.a.createElement(A,{type:f.t.ANSWER_WITH_VIDEO,resources:O,dogChoice:p,navigationLeftHandler:C,navigationRightHandler:_}):"",f.o.INCORRECT_ALL_CLEAR===v.step?r.a.createElement(A,{type:f.t.ANSWER_NO_VIDEO,resources:O,dogChoice:p,navigationLeftHandler:C,navigationRightHandler:function(e){m(Object.assign(Object.assign({},v),{},{step:f.o.QUESTION_POSED}))}}):""))};var T="3124856518"},CczQ:function(e,t,i){var n=i("P8UN"),r=Math.abs;n(n.S,"Math",{hypot:function(e,t){for(var i,n,o=0,a=0,l=arguments.length,s=0;a<l;)s<(i=r(arguments[a++]))?(o=o*(n=s/i)*n+1,s=i):o+=i>0?(n=i/s)*n:i;return s===1/0?1/0:s*Math.sqrt(o)}})},Spfr:function(e,t,i){"use strict";var n=i("q1tI"),r=i.n(n),o=(i("YbXK"),i("cFtU"),i("q8oJ"),i("8npG"),i("CczQ"),i("E5k/"),i("LagC"),function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)}),a=function(){return(a=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},l=a(a({scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1},{tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:null,tiltAngleXManual:null,tiltAngleYManual:null}),{glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1});function s(e,t,i,n,r){return void 0===r&&(r=null),r&&clearTimeout(r),e.style.transition=t+" "+i+"ms "+n,setTimeout((function(){e.style.transition=""}),i)}function p(e,t,i){return Math.min(Math.max(e,t),i)}var c=function(){var e=this;this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=function(t,i){e.updateTilt(t,i),e.updateTiltManualInput(t,i),e.updateTiltReverse(i),e.updateTiltLimits(i)},this.updateTilt=function(t,i){var n=t.yPercentage,r=i.tiltMaxAngleY;e.tiltAngleX=t.xPercentage*i.tiltMaxAngleX/100,e.tiltAngleY=n*r/100*-1},this.updateTiltManualInput=function(t,i){var n=i.tiltAngleXManual,r=i.tiltAngleYManual,o=i.tiltMaxAngleX,a=i.tiltMaxAngleY;null===n&&null===r||(e.tiltAngleX=null!==n?n:0,e.tiltAngleY=null!==r?r:0,t.xPercentage=100*e.tiltAngleX/o,t.yPercentage=100*e.tiltAngleY/a)},this.updateTiltReverse=function(t){var i=t.tiltReverse?-1:1;e.tiltAngleX=i*e.tiltAngleX,e.tiltAngleY=i*e.tiltAngleY},this.updateTiltLimits=function(t){var i=t.tiltAxis;e.tiltAngleX=p(e.tiltAngleX,-90,90),e.tiltAngleY=p(e.tiltAngleY,-90,90),i&&(e.tiltAngleX="x"===i?e.tiltAngleX:0,e.tiltAngleY="y"===i?e.tiltAngleY:0)},this.updateTiltAnglesPercentage=function(t){var i=t.tiltMaxAngleY;e.tiltAngleXPercentage=e.tiltAngleX/t.tiltMaxAngleX*100,e.tiltAngleYPercentage=e.tiltAngleY/i*100},this.render=function(t){t.style.transform+="rotateX("+e.tiltAngleX+"deg) rotateY("+e.tiltAngleY+"deg) "}},d=function(e){var t=this;this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=function(e){return{width:2*e.width,height:2*e.height}},this.setSize=function(e){var i=t.calculateGlareSize(e);t.glareEl.style.width=i.width+"px",t.glareEl.style.height=i.height+"px"},this.update=function(e,i,n,r){t.updateAngle(e,i.glareReverse),t.updateOpacity(e,i,n,r)},this.updateAngle=function(e,i){var n=e.xPercentage,r=180/Math.PI,o=n?Math.atan2(e.yPercentage,-n)*r:0;t.glareAngle=o-(i?180:0)},this.updateOpacity=function(e,i,n,r){var o,a=e.xPercentage,l=e.yPercentage,s=i.glareReverse,c=i.glareMaxOpacity,d=n?-1:1,u=r?-1:1;switch(i.glarePosition){case"top":o=-a*d;break;case"right":o=l*u;break;case"bottom":o=a*d;break;case"left":o=-l*u;break;case"all":o=Math.hypot(a,l);break;default:o=a*d}var E=p(o=s?-o:o,0,100);t.glareOpacity=E*c/100},this.render=function(e){var i=e.glareColor;t.glareEl.style.transform="rotate("+t.glareAngle+"deg) translate(-50%, -50%)",t.glareEl.style.opacity=t.glareOpacity.toString(),t.glareEl.style.background="linear-gradient(0deg, rgba(255,255,255,0) 0%, "+i+" 100%)"},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";var i=this.calculateGlareSize(e),n={position:"absolute",top:"50%",left:"50%","transform-origin":"0% 0%","pointer-events":"none",width:i.width+"px",height:i.height+"px"};Object.assign(this.glareWrapperEl.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden"}),Object.assign(this.glareEl.style,n)},u=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},transitionTimeoutId:void 0,updateAnimationId:null,childrenImgsCounter:0,childrenImgsLength:0,scale:1},t.tilt=null,t.glare=null,t.loadWrapperAndChildElements=function(){var e=Array.from(t.wrapperEl.node.getElementsByTagName("img"));t.wrapperEl.childrenImgsLength=e.length,0!==t.wrapperEl.childrenImgsLength?e.forEach((function(e){e.complete?t.allImagesLoaded():e.addEventListener("load",t.allImagesLoaded)})):t.setSize()},t.allImagesLoaded=function(){t.wrapperEl.childrenImgsCounter++,t.wrapperEl.childrenImgsCounter===t.wrapperEl.childrenImgsLength&&t.setSize()},t.setSize=function(){t.setWrapperElSize(),t.glare&&t.glare.setSize(t.wrapperEl.size)},t.mainLoop=function(e){null!==t.wrapperEl.updateAnimationId&&cancelAnimationFrame(t.wrapperEl.updateAnimationId),t.processInput(e),t.update(e.type),t.wrapperEl.updateAnimationId=requestAnimationFrame(t.renderFrame)},t.onEnter=function(e){var i=t.props.onEnter;t.wrapperEl.node.style.willChange="transform",t.setTransition(),i&&i(e.type)},t.onMove=function(e){t.mainLoop(e),t.emitOnMove(e)},t.onLeave=function(e){var i=t.props.onLeave;if(t.setTransition(),i&&i(e.type),t.props.reset){var n=new CustomEvent("autoreset");t.onMove(n)}},t.processInput=function(e){var i=t.props.scale;switch(e.type){case"mousemove":t.wrapperEl.clientPosition.x=e.pageX,t.wrapperEl.clientPosition.y=e.pageY,t.wrapperEl.scale=i;break;case"touchmove":t.wrapperEl.clientPosition.x=e.touches[0].pageX,t.wrapperEl.clientPosition.y=e.touches[0].pageY,t.wrapperEl.scale=i;break;case"deviceorientation":t.processInputDeviceOrientation(e),t.wrapperEl.scale=i;break;case"autoreset":var n=t.props,r=n.tiltAngleYInitial/n.tiltMaxAngleY*100;t.wrapperEl.clientPosition.xPercentage=p(n.tiltAngleXInitial/n.tiltMaxAngleX*100,-100,100),t.wrapperEl.clientPosition.yPercentage=p(r,-100,100),t.wrapperEl.scale=1}},t.processInputDeviceOrientation=function(e){if(e.gamma&&e.beta&&t.props.gyroscope){var i=t.props,n=i.tiltMaxAngleY,r=e.gamma;t.wrapperEl.clientPosition.xPercentage=e.beta/i.tiltMaxAngleX*100,t.wrapperEl.clientPosition.yPercentage=r/n*100,t.wrapperEl.clientPosition.xPercentage=p(t.wrapperEl.clientPosition.xPercentage,-100,100),t.wrapperEl.clientPosition.yPercentage=p(t.wrapperEl.clientPosition.yPercentage,-100,100)}},t.update=function(e){var i=t.props,n=i.tiltEnable,r=i.flipVertically,o=i.flipHorizontally;t.updateClientInput(e),n&&t.tilt.update(t.wrapperEl.clientPosition,t.props),t.updateFlip(),t.tilt.updateTiltAnglesPercentage(t.props),t.glare&&t.glare.update(t.wrapperEl.clientPosition,t.props,r,o)},t.updateClientInput=function(e){if("autoreset"!==e&&"deviceorientation"!==e){var i,n;if(t.props.trackOnWindow){var r=t.wrapperEl.clientPosition,o=r.x;i=r.y/window.innerHeight*200-100,n=o/window.innerWidth*200-100}else{var a=t.wrapperEl,l=a.size,s=a.clientPosition;i=(s.y-l.top)/l.height*200-100,n=((o=s.x)-l.left)/l.width*200-100}t.wrapperEl.clientPosition.xPercentage=p(i,-100,100),t.wrapperEl.clientPosition.yPercentage=p(n,-100,100)}},t.updateFlip=function(){var e=t.props,i=e.flipHorizontally;e.flipVertically&&(t.tilt.tiltAngleX+=180,t.tilt.tiltAngleY*=-1),i&&(t.tilt.tiltAngleY+=180)},t.renderFrame=function(){t.resetWrapperElTransform(),t.renderPerspective(),t.tilt.render(t.wrapperEl.node),t.renderScale(),t.glare&&t.glare.render(t.props)},t}(function(e,t){function i(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)})(t,e),t.prototype.componentDidMount=function(){this.loadWrapperAndChildElements(),this.tilt=new c,this.initGlare(),this.addEventListeners();var e=new CustomEvent("autoreset");this.mainLoop(e);var t=new CustomEvent("initial");this.emitOnMove(t)},t.prototype.componentWillUnmount=function(){clearTimeout(this.wrapperEl.transitionTimeoutId),null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()},t.prototype.componentDidUpdate=function(){var e=this.props;if(!(e.onMove||e.onEnter||e.onLeave)){var t=new CustomEvent("propchange");this.mainLoop(t)}},t.prototype.addEventListeners=function(){var e=this.props,t=e.trackOnWindow,i=e.gyroscope;if(window.addEventListener("resize",this.setSize),t&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),i){if(!window.DeviceOrientationEvent)return void console.error("Browser doesn't support Device Orientation.");window.addEventListener("deviceorientation",this.onMove)}},t.prototype.removeEventListeners=function(){var e=this.props,t=e.trackOnWindow,i=e.gyroscope;window.removeEventListener("resize",this.setSize),t&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),i&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)},t.prototype.setWrapperElSize=function(){var e=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=e.left+window.scrollX,this.wrapperEl.size.top=e.top+window.scrollY},t.prototype.initGlare=function(){this.props.glareEnable&&(this.glare=new d(this.wrapperEl.size),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))},t.prototype.emitOnMove=function(e){var t=this.props.onMove;if(t){var i=0,n=0;this.glare&&(i=this.glare.glareAngle,n=this.glare.glareOpacity),t(this.tilt.tiltAngleX,this.tilt.tiltAngleY,this.tilt.tiltAngleXPercentage,this.tilt.tiltAngleYPercentage,i,n,e.type)}},t.prototype.resetWrapperElTransform=function(){this.wrapperEl.node.style.transform=""},t.prototype.renderPerspective=function(){this.wrapperEl.node.style.transform+="perspective("+this.props.perspective+"px) "},t.prototype.renderScale=function(){var e=this.wrapperEl.scale;this.wrapperEl.node.style.transform+="scale3d("+e+","+e+","+e+")"},t.prototype.setTransition=function(){var e=this.props,t=e.transitionSpeed,i=e.transitionEasing;this.wrapperEl.transitionTimeoutId=s(this.wrapperEl.node,"all",t,i,this.wrapperEl.transitionTimeoutId),this.glare&&(this.glare.transitionTimeoutId=s(this.glare.glareEl,"opacity",t,i,this.glare.transitionTimeoutId))},t.prototype.render=function(){var e=this,t=this.props;return r.a.createElement("div",{ref:function(t){return e.wrapperEl.node=t},onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:t.className,style:t.style},t.children)},t.defaultProps=l}(n.PureComponent),i("8uUf"));t.a=function(e){var t=e.imgName,i=void 0===t?"oakley.png":t,n=e.width,o=void 0===n?"300px":n,a=e.height,l=void 0===a?"300px":a;return r.a.createElement("div",{style:{height:l,width:o,backgroundColor:"none",transition:"width 1s height 1s"}},r.a.createElement(u.a,{imgName:i}))}}}]);
//# sourceMappingURL=component---src-pages-next-steps-js-b3381a6aadcaae7f8fe3.js.map