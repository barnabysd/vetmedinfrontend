(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"/ybW":function(e,t,i){"use strict";i.r(t),i.d(t,"pageQuery",(function(){return g}));i("E5k/");var n=i("q1tI"),o=i.n(n),a=i("Bl7J"),r=(i("zDcZ"),i("6wlY"),i("R/WZ")),c=i("tRbT"),d=(i("ILeL"),i("3ksh"),i("r5vi")),s=i("xvYo"),l=i("C/KN"),E=(i("5lfk"),i("ooR/")),O=i("mwIZ"),R=i.n(O),_=i("a5sw"),C=i("itCy"),u=i("tzB8"),p=i("qKvR"),b=Object(r.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));var I=function(e){var t,i=e.type,n=void 0===i?C.k.QUESTION_POSED:i,a=e.resources,r=e.navigationLeftHandler,d=e.navigationRightHandler,E=e.dogChoice,O=[];a.field_buttonlinks&&a.field_buttonlinks.length>0&&(O=a.field_buttonlinks);var R={};switch(n){case C.k.ANSWER_WITH_VIDEO:case C.k.ANSWER_NO_VIDEO:var b="yes"===a.field_iscorrectanswer[0];O=[{}],!1===b&&(O[0].id=C.q.QUESTION_POSED,O[0].title="Try again",O[0].url="/",O[0].onClickHandler=d,O[0].buttonType=C.f.DARK_BLUE_ROUNDED),R={useVideoWidget:b,isCorrectAnswer:a.field_iscorrectanswer[0],answerHeader:Object(_.j)(Object(_.i)(a.field_answerheader?a.field_answerheader:"",E)),answerText:Object(_.j)(Object(_.i)(a.field_answertext?a.field_answertext.processed:"",E)),additionalText:Object(_.j)(Object(_.i)(a.field_additionalbodytext?a.field_additionalbodytext.processed:"",E)),videoText1:a.field_videocaptiontext1,buttonLinks:O};break;case C.k.QUESTION_POSED:(O=[{},{},{},{},{},{}])[0].id=C.q.CORRECT_VETMEDIN,O[0].title="Vetmedin® (pimobendan)",O[0].url="/",O[1].id=C.q.INCORRECT_ANSWER_ALL_DIURETICS,O[1].title="Diuretics",O[1].url="/",O[2].id=C.q.INCORRECT_ANSWER_SPIRO,O[2].title="Spironolactone",O[2].url="/",O[3].id=C.q.INCORRECT_ANSWER_ACE,O[3].title="ACE inhibitors",O[3].url="/",R={useVideoWidget:!1,questionText:a.field_questiontext,headerText:a.field_questiontext,additionalText:a.field_additionalbodytext,videoText1:a.field_videocaptiontext1,buttonLinks:O};break;default:return"type not found"}var I=o.a.createRef();return Object(p.c)("section",null,Object(p.c)(c.a,((t={container:!0,spacing:0}).spacing=0,t.justify="center",t.style={border:"0px solid black"},t),Object(p.c)(c.a,{item:!0,xs:12,sm:1,align:"left",style:{border:"0px solid red"}}),Object(p.c)(c.a,{item:!0,xs:12,sm:5,align:"center",style:{border:"0px solid red"}},Object(p.c)(u.a,{autoPlay:"true",ref:I,currentCaseStudySlideData:R})),Object(p.c)(c.a,{item:!0,xs:12,sm:5,align:"left",style:{border:"0px solid red"}},n===C.k.QUESTION_POSED?Object(p.c)(l.a,{currentCaseStudySlideData:R,currentSlidePosition:0,onClickHandler:d,dogChoice:E,useVideoWidget:R.useVideoWidget}):"",n===C.k.ANSWER_WITH_VIDEO||n===C.k.ANSWER_NO_VIDEO?Object(p.c)(s.a,{currentCaseStudySlideData:R,currentSlidePosition:0,onClickHandler:r,dogChoice:E,useVideoWidget:R.useVideoWidget}):""),Object(p.c)(c.a,{item:!0,xs:12,sm:1,align:"left",style:{border:"0px solid red"}})))};t.default=function(e){var t=e.data,i=Object(d.a)(["hasConsentSet","userChoice","dogChoice","score"]),o=i[0],r=i[1],c=(i[2],o.dogChoice?o.dogChoice:C.c.DUDLEY),s={step:C.q.QUESTION_POSED},l=Object(n.useState)(s),O=l[0],u=l[1];O.step===C.q.CORRECT_VETMEDIN&&r(C.l.DUDLEY_GRADE_HEART_MURMUR,!0,"/");var g=R()(t,"allNodeQuestion.nodes"),N=R()(t,"allNodeAnswer.nodes"),S=null;switch(O.step){case C.q.QUESTION_POSED:S=Object(_.c)(g,C.p.QUESTION_POSED);break;case C.q.CORRECT_VETMEDIN:S=Object(_.c)(N,C.p.CORRECT_VETMEDIN);case C.q.INCORRECT_ANSWER_ACE:S=Object(_.c)(N,C.p.INCORRECT_ANSWER_ACE);break;case C.q.INCORRECT_ANSWER_SPIRO:S=Object(_.c)(N,C.p.INCORRECT_ANSWER_SPIRO);break;case C.q.INCORRECT_ANSWER_ALL_DIURETICS:S=Object(_.c)(N,C.p.INCORRECT_ANSWER_ALL_DIURETICS);break;default:return"no current slide"}if(console.log("=========== current Step - step ",O.step),console.log(S),!S)return"resources not found";if("NO_DATA_FOUND"==S)return"resources not found";var f=function(e){console.log("=========== setCurrentStep - step ",e),u(Object.assign(Object.assign({},O),{},{step:e}))},T=function(e){u(Object.assign(Object.assign({},O),{},{step:C.q.QUESTION_POSED}))},x=function(e){console.log("handleLeftClick")};return Object(p.c)(a.a,{headerText:(Object(_.j)("Poppy has a grade 3 mitral valve murmur; how would you like to proceed?"),c),showPercentIndicator:!0},C.q.CORRECT_VETMEDIN===O.step?Object(p.c)(E.a,{to:"/owner-treatment-options/",distanceFromSide:"2%",bottom:"2%",direction:C.a.FORWARD,linkText:"Continue"}):"",Object(p.c)("div",{className:b().root,style:{position:"relative",zIndex:"1 !important"}},C.q.QUESTION_POSED===O.step?Object(p.c)(I,{type:C.k.QUESTION_POSED,resources:S,dogChoice:c,navigationLeftHandler:x,navigationRightHandler:function(e){if(e.currentTarget.id)switch(e.currentTarget.id){case C.q.CORRECT_VETMEDIN:f(C.q.CORRECT_VETMEDIN);break;case C.q.INCORRECT_ANSWER_ACE:f(C.q.INCORRECT_ANSWER_ACE);break;case C.q.INCORRECT_ANSWER_ALL_DIURETICS:f(C.q.INCORRECT_ANSWER_ALL_DIURETICS);break;case C.q.INCORRECT_ANSWER_SPIRO:f(C.q.INCORRECT_ANSWER_SPIRO);break;default:console.log("no matching id on question button"),f(C.q.QUESTION_POSED)}else console.log("no id on question button"),f(C.q.QUESTION_POSED)}}):"",C.q.CORRECT_VETMEDIN===O.step?Object(p.c)(I,{type:C.k.ANSWER_WITH_VIDEO,resources:S,dogChoice:c,navigationLeftHandler:x,navigationRightHandler:function(e){console.log("handleRightClick")}}):"",C.q.INCORRECT_ANSWER_ACE===O.step?Object(p.c)(I,{type:C.k.ANSWER_NO_VIDEO,resources:S,dogChoice:c,navigationLeftHandler:x,navigationRightHandler:T}):"",C.q.INCORRECT_ANSWER_ALL_DIURETICS===O.step?Object(p.c)(I,{type:C.k.ANSWER_NO_VIDEO,resources:S,dogChoice:c,navigationLeftHandler:x,navigationRightHandler:T}):"",C.q.INCORRECT_ANSWER_SPIRO===O.step?Object(p.c)(I,{type:C.k.ANSWER_NO_VIDEO,resources:S,dogChoice:c,navigationLeftHandler:x,navigationRightHandler:T}):""))};var g="1995821694"},"ooR/":function(e,t,i){"use strict";i("q1tI");var n=i("zDcZ"),o=i("82Oa"),a=i("qKvR");t.a=function(e){var t,i,r=e.linkText,c=void 0===r?"Back":r,d=e.to,s=void 0===d?"/":d,l=e.distanceFromSide,E=void 0===l?"10%":l,O=e.bottom,R=void 0===O?"0":O,_=e.direction,C=void 0===_?"forward":_,u=e.onClick,p=void 0===u?null:u;return"forward"===C?Object(a.c)("div",{style:(t={position:"absolute",right:E,bottom:R,width:"150px",height:"100px",display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center"},t.alignContent="center",t.textAlign="center",t.zIndex="100",t.border="0px solid red",t.zIndex="10",t)},Object(a.c)(o.b,{onClick:p,style:{display:"flex",flexDirection:"row",alignItems:"center",width:"200px",height:"50px",textDecoration:"none",color:n.a.palette.primary.main,fontFamily:n.a.typography.fontFamily,fontWeight:"700"},to:s,typeOfButton:o.a.FORWARD_NORMAL_LINK},c)):Object(a.c)("div",{style:(i={position:"absolute",left:E,bottom:R,width:"150px",height:"100px",display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",textAlign:"center",zIndex:"100",border:"0px solid red"},i.zIndex="10",i)},Object(a.c)(o.b,{onClick:p,style:{display:"flex",flexDirection:"row",alignItems:"center",alignContent:"center",width:"200px",height:"50px",textDecoration:"none",color:n.a.palette.primary.main,fontFamily:n.a.typography.fontFamily,fontWeight:"700"},to:s,typeOfButton:o.a.BACK_NORMAL_LINK},c))}}}]);
//# sourceMappingURL=component---src-pages-which-treatment-js-4266ae43ec36c2d87a2a.js.map