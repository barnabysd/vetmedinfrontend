(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{nkKA:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return u}));a("E5k/");var n=a("q1tI"),i=a.n(n),r=a("Bl7J"),o=(a("zDcZ"),a("R/WZ")),l=a("tRbT"),R=(a("ILeL"),a("3ksh"),a("r5vi")),d=a("xvYo"),c=a("C/KN"),s=(a("5lfk"),a("ooR/")),_=a("mwIZ"),E=a.n(_),O=a("a5sw"),N=a("7TWv"),C=a("itCy"),T=a("tzB8"),A=Object(o.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));var S=function(e){var t,a=e.type,n=void 0===a?C.l.QUESTION_POSED:a,r=e.resources,o=e.navigationLeftHandler,R=e.navigationRightHandler,s=e.dogChoice,_=[];r.field_buttonlinks&&r.field_buttonlinks.length>0&&(_=r.field_buttonlinks);var E={};switch(n){case C.l.ANSWER_WITH_VIDEO:case C.l.ANSWER_NO_VIDEO:var N="yes"===r.field_iscorrectanswer[0];_=[{}],!1===N&&(_[0].id=C.r.QUESTION_POSED,_[0].title="Try again",_[0].url="/",_[0].onClickHandler=R,_[0].buttonType=C.g.DARK_BLUE_ROUNDED),E={useVideoWidget:N,isCorrectAnswer:r.field_iscorrectanswer[0],answerHeader:Object(O.k)(Object(O.j)(r.field_answerheader?r.field_answerheader:"",s)),answerText:Object(O.k)(Object(O.j)(r.field_answertext?r.field_answertext.processed:"",s)),additionalText:Object(O.k)(Object(O.j)(r.field_additionalbodytext?r.field_additionalbodytext.processed:"",s)),videoText1:r.field_videocaptiontext1,buttonLinks:_};break;case C.l.QUESTION_POSED:(_=[{},{},{},{},{},{}])[0].id=C.r.CORRECT_ANSWER_XRAY_ONLY,_[0].title="X-ray",_[0].url="/",_[1].id=C.r.CORRECT_ANSWER_ULTRASOUND,_[1].title="Ultrasound",_[1].url="/",_[2].id=C.r.INCORRECT_ANSWER_ECG,_[2].title="ECG",_[2].url="/",_[3].id=C.r.CORRECT_ANSWER_XRAY_AND_ULTRASOUND,_[3].title="X-ray and ultrasound",_[3].url="/",_[4].id=C.r.INCORRECT_ANSWER_NO_TREATMENT,_[4].title="Finish Appointment",_[4].url="/",_[5].id=C.r.INCORRECT_ANSWER_HOLTER_MONITORING,_[5].title="Holter monitoring",_[5].url="/",E={useVideoWidget:!1,questionText:r.field_questiontext,headerText:r.field_questiontext,additionalText:r.field_additionalbodytext,videoText1:r.field_videocaptiontext1,buttonLinks:_};break;default:return"type not found"}var A=i.a.createRef();return i.a.createElement("section",null,i.a.createElement(l.a,((t={container:!0,spacing:0}).spacing=0,t.justify="center",t.style={border:"0px solid black"},t),i.a.createElement(l.a,{item:!0,xs:12,sm:1,align:"left",style:{border:"0px solid red"}}),i.a.createElement(l.a,{item:!0,xs:12,sm:5,align:"center",style:{border:"0px solid red"}},i.a.createElement(T.a,{autoPlay:"true",ref:A,currentCaseStudySlideData:E})),i.a.createElement(l.a,{item:!0,xs:12,sm:5,align:"left",style:{border:"0px solid red"}},n===C.l.QUESTION_POSED?i.a.createElement(c.a,{currentCaseStudySlideData:E,currentSlidePosition:0,onClickHandler:R,dogChoice:s,useVideoWidget:E.useVideoWidget}):"",n===C.l.ANSWER_WITH_VIDEO||n===C.l.ANSWER_NO_VIDEO?i.a.createElement(d.a,{currentCaseStudySlideData:E,currentSlidePosition:0,onClickHandler:o,dogChoice:s,useVideoWidget:E.useVideoWidget}):""),i.a.createElement(l.a,{item:!0,xs:12,sm:1,align:"left",style:{border:"0px solid red"}})))};t.default=function(e){var t=e.data,a=Object(R.a)([C.c.DOG_CHOICE,C.c.CASESTUDYS_ALL]),o=a[0],l=a[1],d=(a[2],o.dogChoice?o.dogChoice:C.d.DUDLEY),c={step:C.r.QUESTION_POSED,taskCompleted:!1},_=Object(n.useState)(c),T=_[0],u=_[1];Object(n.useEffect)((function(){if(T.step===C.r.CORRECT_ANSWER_XRAY_ONLY||T.step===C.r.CORRECT_ANSWER_XRAY_AND_ULTRASOUND||T.step===C.r.CORRECT_ANSWER_ULTRASOUND){var e=Object(N.b)(C.m.WHICH_EXAMINATION,d,o);console.log("============= "+e+" ============="),l(C.c.CASESTUDYS_ALL,e,{path:"/"})}}),[T.step]);var g=E()(t,"allNodeQuestion.nodes"),p=E()(t,"allNodeAnswer.nodes"),f=null;switch(T.step){case C.r.QUESTION_POSED:f=Object(O.d)(g,C.h.QUESTION_POSED);break;case C.r.CORRECT_ANSWER_XRAY_ONLY:f=Object(O.d)(p,C.h.CORRECT_ANSWER_XRAY_ONLY);break;case C.r.CORRECT_ANSWER_XRAY_AND_ULTRASOUND:f=Object(O.d)(p,C.h.CORRECT_ANSWER_XRAY_AND_ULTRASOUND);break;case C.r.CORRECT_ANSWER_ULTRASOUND:f=Object(O.d)(p,C.h.CORRECT_ANSWER_ULTRASOUND);break;case C.r.INCORRECT_ANSWER_ECG:f=Object(O.d)(p,C.h.INCORRECT_ANSWER_ECG);break;case C.r.INCORRECT_ANSWER_NO_TREATMENT:f=Object(O.d)(p,C.h.INCORRECT_ANSWER_NO_TREATMENT);break;case C.r.INCORRECT_ANSWER_HOLTER_MONITORING:f=Object(O.d)(p,C.h.INCORRECT_ANSWER_HOLTER_MONITORING);break;default:return"no current slide"}if(console.log("=========== current Step - step ",T.step),console.log(f),!f)return"resources not found";if("NO_DATA_FOUND"==f)return"resources not found";var m=function(e){console.log("=========== setCurrentStep - step ",e),u(Object.assign(Object.assign({},T),{},{step:e}))},I=function(e){u(Object.assign(Object.assign({},T),{},{step:C.r.QUESTION_POSED}))},b=function(e){console.log("handleLeftClick")},W=function(e){console.log("handleRightClick")};return i.a.createElement(r.a,{headerText:Object(O.k)("Poppy has a grade 3 mitral valve murmur",d),showPercentIndicator:!0},C.r.CORRECT_ANSWER_ULTRASOUND===T.step||C.r.CORRECT_ANSWER_XRAY_AND_ULTRASOUND===T.step||C.r.CORRECT_ANSWER_XRAY_ONLY===T.step?i.a.createElement(s.a,{to:"/owner-response",distanceFromSide:"2%",bottom:"2%",direction:C.a.FORWARD,linkText:"Continue"}):"",i.a.createElement("div",{className:A().root,style:{position:"relative",zIndex:"1 !important"}},C.r.QUESTION_POSED===T.step?i.a.createElement(S,{type:C.l.QUESTION_POSED,resources:f,dogChoice:d,navigationLeftHandler:b,navigationRightHandler:function(e){if(e.currentTarget.id)switch(e.currentTarget.id){case C.r.CORRECT_ANSWER_ULTRASOUND:m(C.r.CORRECT_ANSWER_ULTRASOUND);break;case C.r.CORRECT_ANSWER_XRAY_AND_ULTRASOUND:m(C.r.CORRECT_ANSWER_XRAY_AND_ULTRASOUND);break;case C.r.CORRECT_ANSWER_XRAY_ONLY:m(C.r.CORRECT_ANSWER_XRAY_ONLY);break;case C.r.INCORRECT_ANSWER_ECG:m(C.r.INCORRECT_ANSWER_ECG);break;case C.r.INCORRECT_ANSWER_NO_TREATMENT:m(C.r.INCORRECT_ANSWER_NO_TREATMENT);break;case C.r.INCORRECT_ANSWER_HOLTER_MONITORING:m(C.r.INCORRECT_ANSWER_HOLTER_MONITORING);break;default:console.log("no matching id on question button"),m(C.r.QUESTION_POSED)}else console.log("no id on question button"),m(C.r.QUESTION_POSED)}}):"",C.r.CORRECT_ANSWER_ULTRASOUND===T.step?i.a.createElement(S,{type:C.l.ANSWER_WITH_VIDEO,resources:f,dogChoice:d,navigationLeftHandler:b,navigationRightHandler:W}):"",C.r.CORRECT_ANSWER_XRAY_AND_ULTRASOUND===T.step?i.a.createElement(S,{type:C.l.ANSWER_WITH_VIDEO,resources:f,dogChoice:d,navigationLeftHandler:b,navigationRightHandler:W}):"",C.r.CORRECT_ANSWER_XRAY_ONLY===T.step?i.a.createElement(S,{type:C.l.ANSWER_WITH_VIDEO,resources:f,dogChoice:d,navigationLeftHandler:b,navigationRightHandler:W}):"",C.r.INCORRECT_ANSWER_ECG===T.step?i.a.createElement(S,{type:C.l.ANSWER_NO_VIDEO,resources:f,dogChoice:d,navigationLeftHandler:b,navigationRightHandler:I}):"",C.r.INCORRECT_ANSWER_NO_TREATMENT===T.step?i.a.createElement(S,{type:C.l.ANSWER_NO_VIDEO,resources:f,dogChoice:d,navigationLeftHandler:b,navigationRightHandler:I}):"",C.r.INCORRECT_ANSWER_HOLTER_MONITORING===T.step?i.a.createElement(S,{type:C.l.ANSWER_NO_VIDEO,resources:f,dogChoice:d,navigationLeftHandler:b,navigationRightHandler:I}):""))};var u="1995821694"},"ooR/":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("zDcZ"),o=a("82Oa"),l=a("vOnD"),R=l.default.div.withConfig({displayName:"BottomNavigationLink__LinkHolder",componentId:"caajde-0"})(["position:absolute;width:150px;height:100px;display:flex;flex-direction:column;justify-content:center;align-content:center;align-content:center;text-align:center;border:0px solid red;z-index:10;@media (max-width:","px){display:block;position:static;width:100% !important;}"],r.c),d=Object(l.default)(R).withConfig({displayName:"BottomNavigationLink__LinkHolderLeft",componentId:"caajde-1"})(["@media (max-width:","px){text-align:right;}"],r.c),c=Object(l.default)(R).withConfig({displayName:"BottomNavigationLink__LinkHolderRight",componentId:"caajde-2"})(["@media (max-width:","px){text-align:left;}"],r.c);t.a=function(e){var t=e.linkText,a=void 0===t?"Back":t,n=e.to,l=void 0===n?"/":n,R=e.distanceFromSide,s=void 0===R?"10%":R,_=e.bottom,E=void 0===_?"0":_,O=e.direction,N=void 0===O?"forward":O,C=e.onClick,T=void 0===C?null:C;return"forward"===N?i.a.createElement(d,{style:{right:s,bottom:E}},i.a.createElement(o.b,{onClick:T,style:{display:"flex",flexDirection:"row",alignItems:"center",width:"200px",height:"50px",textDecoration:"none",color:r.a.palette.deminBlue.main,fontFamily:r.a.typography.fontFamily,fontWeight:"700"},to:l,typeOfButton:o.a.FORWARD_NORMAL_LINK},a)):i.a.createElement(c,{style:{left:s,bottom:E}},i.a.createElement(o.b,{onClick:T,style:{display:"flex",flexDirection:"row",alignItems:"center",alignContent:"center",width:"200px",height:"50px",textDecoration:"none",color:r.a.palette.deminBlue.main,fontFamily:r.a.typography.fontFamily,fontWeight:"700"},to:l,typeOfButton:o.a.BACK_NORMAL_LINK},a))}}}]);
//# sourceMappingURL=component---src-pages-murmur-treatment-js-71e80a24b8921f07f595.js.map