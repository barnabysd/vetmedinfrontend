(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"/ybW":function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return S}));n("E5k/");var i=n("q1tI"),a=n.n(i),o=n("Bl7J"),r=(n("zDcZ"),n("R/WZ")),l=n("tRbT"),c=(n("ILeL"),n("3ksh"),n("r5vi")),d=n("xvYo"),s=n("C/KN"),E=(n("5lfk"),n("ooR/")),R=n("mwIZ"),_=n.n(R),u=n("a5sw"),O=n("itCy"),C=n("tzB8"),g=n("7TWv"),N=Object(r.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));var p=function(e){var t,n=e.type,i=void 0===n?O.l.QUESTION_POSED:n,o=e.resources,r=e.navigationLeftHandler,c=e.navigationRightHandler,E=e.dogChoice,R=[];o.field_buttonlinks&&o.field_buttonlinks.length>0&&(R=o.field_buttonlinks),console.log("WhichTreatmentQuestionResponseLayout ",o);var _={};switch(i){case O.l.ANSWER_WITH_VIDEO:case O.l.ANSWER_NO_VIDEO:var g="yes"===o.field_iscorrectanswer[0];R=[{}],!1===g&&(R[0].id=O.v.QUESTION_POSED,R[0].title="Try again",R[0].url="/",R[0].onClickHandler=c,R[0].buttonType=O.g.DARK_BLUE_ROUNDED),_={useVideoWidget:g,isCorrectAnswer:o.field_iscorrectanswer[0],answerHeader:Object(u.l)(Object(u.k)(o.field_answerheader?o.field_answerheader:""),E),answerText:Object(u.l)(Object(u.k)(o.field_answertext?o.field_answertext.processed:""),E),additionalText:Object(u.l)(Object(u.k)(o.field_additionalbodytext?o.field_additionalbodytext.processed:""),E),videoText1:o.field_videocaptiontext1,buttonLinks:R};break;case O.l.QUESTION_POSED:(R=[{},{},{},{},{},{}])[0].id=O.v.CORRECT_VETMEDIN,R[0].title="Vetmedin®",R[0].url="/",R[1].id=O.v.INCORRECT_ANSWER_ALL_DIURETICS,R[1].title="Diuretics",R[1].url="/",R[2].id=O.v.INCORRECT_ANSWER_SPIRO,R[2].title="Spironolactone",R[2].url="/",R[3].id=O.v.INCORRECT_ANSWER_ACE,R[3].title="ACE inhibitors",R[3].url="/",_={useVideoWidget:!1,questionText:o.field_questiontext,headerText:o.field_questiontext,additionalText:o.field_additionalbodytext,videoText1:o.field_videocaptiontext1,buttonLinks:R};break;default:return"type not found"}var N=a.a.createRef();return a.a.createElement("section",null,a.a.createElement(l.a,((t={container:!0,spacing:0}).spacing=0,t.justify="center",t.style={border:"0px solid black"},t),a.a.createElement(l.a,{item:!0,xs:12,sm:1,align:"left",style:{border:"0px solid red"}}),a.a.createElement(l.a,{item:!0,xs:12,sm:5,align:"center",style:{border:"0px solid red"}},a.a.createElement(C.a,{autoPlay:"true",ref:N,currentCaseStudySlideData:_})),a.a.createElement(l.a,{item:!0,xs:12,sm:5,align:"left",style:{border:"0px solid red"}},i===O.l.QUESTION_POSED?a.a.createElement(s.a,{currentCaseStudySlideData:_,currentSlidePosition:0,onClickHandler:c,dogChoice:E,useVideoWidget:_.useVideoWidget}):"",i===O.l.ANSWER_WITH_VIDEO||i===O.l.ANSWER_NO_VIDEO?a.a.createElement(d.a,{currentCaseStudySlideData:_,currentSlidePosition:0,onClickHandler:r,dogChoice:E,useVideoWidget:_.useVideoWidget}):""),a.a.createElement(l.a,{item:!0,xs:12,sm:1,align:"left",style:{border:"0px solid red"}})))};t.default=function(e){var t=e.data,n=Object(c.a)([O.c.DOG_CHOICE,O.c.CASESTUDYS_ALL]),r=n[0],l=n[1],d=(n[2],r.dogChoice?r.dogChoice:O.d.DUDLEY),s={step:O.v.QUESTION_POSED},R=Object(i.useState)(s),C=R[0],S=R[1];Object(i.useEffect)((function(){if(C.step===O.v.CORRECT_VETMEDIN){var e=Object(g.b)(O.m.WHICH_TREATMENT,d,r);console.log("============= "+e+" ============="),l(O.c.CASESTUDYS_ALL,e,{path:"/"})}}),[C.step]);var f=_()(t,"allNodeQuestion.nodes"),I=_()(t,"allNodeAnswer.nodes"),T=null;switch(C.step){case O.v.QUESTION_POSED:T=Object(u.e)(f,O.u.QUESTION_POSED);break;case O.v.CORRECT_VETMEDIN:T=Object(u.e)(I,O.u.CORRECT_VETMEDIN);break;case O.v.INCORRECT_ANSWER_ACE:T=Object(u.e)(I,O.u.INCORRECT_ANSWER_ACE);break;case O.v.INCORRECT_ANSWER_SPIRO:T=Object(u.e)(I,O.u.INCORRECT_ANSWER_SPIRO);break;case O.v.INCORRECT_ANSWER_ALL_DIURETICS:T=Object(u.e)(I,O.u.INCORRECT_ANSWER_ALL_DIURETICS);break;default:return"no current slide"}if(console.log("=========== current Step - step ",C.step),console.log(T),!T)return"resources not found";if("NO_DATA_FOUND"==T)return"resources not found";var v=function(e){console.log("=========== setCurrentStep - step ",e),S(Object.assign(Object.assign({},C),{},{step:e}))},m=function(e){S(Object.assign(Object.assign({},C),{},{step:O.v.QUESTION_POSED}))},b=function(e){console.log("handleLeftClick")};return a.a.createElement(o.a,{headerText:Object(u.l)("Poppy has a grade 3 mitral valve murmur",d),showPercentIndicator:!0},O.v.CORRECT_VETMEDIN===C.step?a.a.createElement(E.a,{to:"/owner-treatment-options/",distanceFromSide:"2%",bottom:"2%",direction:O.a.FORWARD,linkText:"Continue"}):"",a.a.createElement("div",{className:N().root,style:{position:"relative",zIndex:"1 !important"}},O.v.QUESTION_POSED===C.step?a.a.createElement(p,{type:O.l.QUESTION_POSED,resources:T,dogChoice:d,navigationLeftHandler:b,navigationRightHandler:function(e){if(e.currentTarget.id)switch(console.log("========== e.currentTarget.id ========",e.currentTarget.id),e.currentTarget.id){case O.v.CORRECT_VETMEDIN:console.log("answerSelected - ichTreatmentSteps.CORRECT_VETMEDIN"),v(O.v.CORRECT_VETMEDIN);break;case O.v.INCORRECT_ANSWER_ACE:v(O.v.INCORRECT_ANSWER_ACE);break;case O.v.INCORRECT_ANSWER_ALL_DIURETICS:v(O.v.INCORRECT_ANSWER_ALL_DIURETICS);break;case O.v.INCORRECT_ANSWER_SPIRO:v(O.v.INCORRECT_ANSWER_SPIRO);break;default:console.log("no matching id on question button"),v(O.v.QUESTION_POSED)}else console.log("no id on question button"),v(O.v.QUESTION_POSED)}}):"",O.v.CORRECT_VETMEDIN===C.step?a.a.createElement(p,{type:O.l.ANSWER_WITH_VIDEO,resources:T,dogChoice:d,navigationLeftHandler:b,navigationRightHandler:function(e){console.log("handleRightClick")}}):"",O.v.INCORRECT_ANSWER_ACE===C.step?a.a.createElement(p,{type:O.l.ANSWER_NO_VIDEO,resources:T,dogChoice:d,navigationLeftHandler:b,navigationRightHandler:m}):"",O.v.INCORRECT_ANSWER_ALL_DIURETICS===C.step?a.a.createElement(p,{type:O.l.ANSWER_NO_VIDEO,resources:T,dogChoice:d,navigationLeftHandler:b,navigationRightHandler:m}):"",O.v.INCORRECT_ANSWER_SPIRO===C.step?a.a.createElement(p,{type:O.l.ANSWER_NO_VIDEO,resources:T,dogChoice:d,navigationLeftHandler:b,navigationRightHandler:m}):""))};var S="1995821694"},"ooR/":function(e,t,n){"use strict";var i=n("q1tI"),a=n.n(i),o=n("zDcZ"),r=n("82Oa"),l=n("vOnD"),c=l.default.div.withConfig({displayName:"BottomNavigationLink__LinkHolder",componentId:"caajde-0"})(["position:absolute;width:150px;height:100px;display:flex;flex-direction:column;justify-content:center;align-content:center;align-content:center;text-align:center;border:0px solid red;z-index:10;@media (max-width:","px){display:block;position:static;width:100% !important;}"],o.c),d=Object(l.default)(c).withConfig({displayName:"BottomNavigationLink__LinkHolderLeft",componentId:"caajde-1"})(["@media (max-width:","px){text-align:right;}"],o.c),s=Object(l.default)(c).withConfig({displayName:"BottomNavigationLink__LinkHolderRight",componentId:"caajde-2"})(["@media (max-width:","px){text-align:left;}"],o.c);t.a=function(e){var t=e.linkText,n=void 0===t?"Back":t,i=e.to,l=void 0===i?"/":i,c=e.distanceFromSide,E=void 0===c?"10%":c,R=e.bottom,_=void 0===R?"0":R,u=e.direction,O=void 0===u?"forward":u,C=e.onClick,g=void 0===C?null:C;return"forward"===O?a.a.createElement(d,{style:{right:E,bottom:_}},a.a.createElement(r.b,{onClick:g,style:{display:"flex",flexDirection:"row",alignItems:"center",width:"200px",height:"50px",textDecoration:"none",color:o.a.palette.deminBlue.main,fontFamily:o.a.typography.fontFamily,fontWeight:"700"},to:l,typeOfButton:r.a.FORWARD_NORMAL_LINK},n)):a.a.createElement(s,{style:{left:E,bottom:_}},a.a.createElement(r.b,{onClick:g,style:{display:"flex",flexDirection:"row",alignItems:"center",alignContent:"center",width:"200px",height:"50px",textDecoration:"none",color:o.a.palette.deminBlue.main,fontFamily:o.a.typography.fontFamily,fontWeight:"700"},to:l,typeOfButton:r.a.BACK_NORMAL_LINK},n))}}}]);
//# sourceMappingURL=component---src-pages-which-treatment-js-3b40d58a0c0812f45314.js.map