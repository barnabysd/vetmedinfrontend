(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"/ybW":function(e,t,i){"use strict";i.r(t),i.d(t,"pageQuery",(function(){return I}));i("E5k/");var n=i("q1tI"),o=i.n(n),a=i("Bl7J"),r=(i("zDcZ"),i("6wlY"),i("R/WZ")),c=i("tRbT"),s=(i("ILeL"),i("3ksh"),i("r5vi")),d=i("xvYo"),l=i("C/KN"),E=(i("5lfk"),i("ooR/")),O=i("mwIZ"),R=i.n(O),u=i("a5sw"),_=i("itCy"),p=i("4M4x"),C=i("qKvR"),S=Object(r.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));var N=function(e){var t,i=e.type,n=void 0===i?_.j.QUESTION_POSED:i,a=e.resources,r=e.navigationLeftHandler,s=e.navigationRightHandler,E=e.dogChoice,O=[];a.field_buttonlinks&&a.field_buttonlinks.length>0&&(O=a.field_buttonlinks);var R={};switch(n){case _.j.ANSWER_WITH_VIDEO:case _.j.ANSWER_NO_VIDEO:var S="yes"===a.field_iscorrectanswer[0];O=[{}],!1===S&&(O[0].id=_.p.QUESTION_POSED,O[0].title="Try again",O[0].url="/",O[0].onClickHandler=s,O[0].buttonType=_.e.DARK_BLUE_ROUNDED),R={useVideoWidget:S,isCorrectAnswer:a.field_iscorrectanswer[0],answerHeader:Object(u.i)(Object(u.h)(a.field_answerheader?a.field_answerheader:"",E)),answerText:Object(u.i)(Object(u.h)(a.field_answertext?a.field_answertext.processed:"",E)),additionalText:Object(u.i)(Object(u.h)(a.field_additionalbodytext?a.field_additionalbodytext.processed:"",E)),videoText1:a.field_videocaptiontext1,buttonLinks:O};break;case _.j.QUESTION_POSED:(O=[{},{},{},{},{},{}])[0].id=_.p.CORRECT_VETMEDIN,O[0].title="Vetmedin® (pimobendan)",O[0].url="/",O[1].id=_.p.INCORRECT_ANSWER_ALL_DIURETICS,O[1].title="Diuretics",O[1].url="/",O[2].id=_.p.INCORRECT_ANSWER_SPIRO,O[2].title="Spironolactone",O[2].url="/",O[3].id=_.p.INCORRECT_ANSWER_ACE,O[3].title="ACE inhibitors",O[3].url="/",R={useVideoWidget:!1,questionText:a.field_questiontext,headerText:a.field_questiontext,additionalText:a.field_additionalbodytext,videoText1:a.field_videocaptiontext1,buttonLinks:O};break;default:return"type not found"}var N=o.a.createRef();return Object(C.c)("section",null,Object(C.c)(c.a,((t={container:!0,spacing:0}).spacing=0,t.justify="center",t.style={border:"0px solid black"},t),Object(C.c)(c.a,{item:!0,xs:12,sm:1,align:"left",style:{border:"0px solid red"}}),Object(C.c)(c.a,{item:!0,xs:12,sm:5,align:"center",style:{border:"0px solid red"}},Object(C.c)(p.a,{autoPlay:"true",ref:N,currentCaseStudySlideData:R})),Object(C.c)(c.a,{item:!0,xs:12,sm:5,align:"left",style:{border:"0px solid red"}},n===_.j.QUESTION_POSED?Object(C.c)(l.a,{currentCaseStudySlideData:R,currentSlidePosition:0,onClickHandler:s,dogChoice:E,useVideoWidget:R.useVideoWidget}):"",n===_.j.ANSWER_WITH_VIDEO||n===_.j.ANSWER_NO_VIDEO?Object(C.c)(d.a,{currentCaseStudySlideData:R,currentSlidePosition:0,onClickHandler:r,dogChoice:E,useVideoWidget:R.useVideoWidget}):""),Object(C.c)(c.a,{item:!0,xs:12,sm:1,align:"left",style:{border:"0px solid red"}})))};t.default=function(e){var t=e.data,i=Object(s.a)(["hasConsentSet","userChoice","dogChoice","score"]),o=i[0],r=i[1],c=(i[2],o.dogChoice?o.dogChoice:_.c.DUDLEY),d={step:_.p.QUESTION_POSED},l=Object(n.useState)(d),O=l[0],p=l[1];O.step===_.p.CORRECT_VETMEDIN&&r(_.k.DUDLEY_GRADE_HEART_MURMUR,!0,"/");var I=R()(t,"allNodeQuestion.nodes"),b=R()(t,"allNodeAnswer.nodes"),g=null;switch(O.step){case _.p.QUESTION_POSED:g=Object(u.c)(I,_.o.QUESTION_POSED);break;case _.p.CORRECT_VETMEDIN:g=Object(u.c)(b,_.o.CORRECT_VETMEDIN);case _.p.INCORRECT_ANSWER_ACE:g=Object(u.c)(b,_.o.INCORRECT_ANSWER_ACE);break;case _.p.INCORRECT_ANSWER_SPIRO:g=Object(u.c)(b,_.o.INCORRECT_ANSWER_SPIRO);break;case _.p.INCORRECT_ANSWER_ALL_DIURETICS:g=Object(u.c)(b,_.o.INCORRECT_ANSWER_ALL_DIURETICS);break;default:return"no current slide"}if(console.log("=========== current Step - step ",O.step),console.log(g),!g)return"resources not found";if("NO_DATA_FOUND"==g)return"resources not found";var T=function(e){console.log("=========== setCurrentStep - step ",e),p(Object.assign(Object.assign({},O),{},{step:e}))},f=function(e){p(Object.assign(Object.assign({},O),{},{step:_.p.QUESTION_POSED}))},D=function(e){console.log("handleLeftClick")};return Object(C.c)(a.a,{headerText:(Object(u.i)("Poppy has a grade 3 mitral valve murmur; how would you like to proceed?"),c),showPercentIndicator:!0},_.p.CORRECT_VETMEDIN===O.step?Object(C.c)(E.a,{to:"/owner-treatment-options/",distanceFromSide:"2%",bottom:"2%",direction:_.a.FORWARD,linkText:"Continue"}):"",Object(C.c)("div",{className:S().root,style:{position:"relative",zIndex:"1 !important"}},_.p.QUESTION_POSED===O.step?Object(C.c)(N,{type:_.j.QUESTION_POSED,resources:g,dogChoice:c,navigationLeftHandler:D,navigationRightHandler:function(e){if(e.currentTarget.id)switch(e.currentTarget.id){case _.p.CORRECT_VETMEDIN:T(_.p.CORRECT_VETMEDIN);break;case _.p.INCORRECT_ANSWER_ACE:T(_.p.INCORRECT_ANSWER_ACE);break;case _.p.INCORRECT_ANSWER_ALL_DIURETICS:T(_.p.INCORRECT_ANSWER_ALL_DIURETICS);break;case _.p.INCORRECT_ANSWER_SPIRO:T(_.p.INCORRECT_ANSWER_SPIRO);break;default:console.log("no matching id on question button"),T(_.p.QUESTION_POSED)}else console.log("no id on question button"),T(_.p.QUESTION_POSED)}}):"",_.p.CORRECT_VETMEDIN===O.step?Object(C.c)(N,{type:_.j.ANSWER_WITH_VIDEO,resources:g,dogChoice:c,navigationLeftHandler:D,navigationRightHandler:function(e){console.log("handleRightClick")}}):"",_.p.INCORRECT_ANSWER_ACE===O.step?Object(C.c)(N,{type:_.j.ANSWER_NO_VIDEO,resources:g,dogChoice:c,navigationLeftHandler:D,navigationRightHandler:f}):"",_.p.INCORRECT_ANSWER_ALL_DIURETICS===O.step?Object(C.c)(N,{type:_.j.ANSWER_NO_VIDEO,resources:g,dogChoice:c,navigationLeftHandler:D,navigationRightHandler:f}):"",_.p.INCORRECT_ANSWER_SPIRO===O.step?Object(C.c)(N,{type:_.j.ANSWER_NO_VIDEO,resources:g,dogChoice:c,navigationLeftHandler:D,navigationRightHandler:f}):""))};var I="1995821694"},"4M4x":function(e,t,i){"use strict";var n=i("q1tI"),o=i.n(n),a=(i("8uUf"),i("A0gv")),r=i.n(a),c=(i("zDcZ"),i("/rRK"),i("ZaYD"),i("Hhcu"),i("V33x"),i("vOnD")),s=(i("MdcO"),i("qKvR")),d=(c.default.div.withConfig({displayName:"FixedSIzeVideo__PoppySitting02",componentId:"sc-1tz0hub-0"})(["height:738px;width:570px;"]),o.a.forwardRef((function(e,t){var i=e.currentCaseStudySlideData,n=(i.isCorrectAnswer,i.animationVideoName,i.mainImage,o.a.useState(!1)),a=n[0],c=n[1];return Object(s.c)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"flex-start",minHeight:"100vh",width:"100%",backgroundColor:"transparent"}},Object(s.c)("video",{autoPlay:!0,playsInline:!0,muted:!0,onLoadedData:function(){c(!0)},loop:!1,width:"100%",height:"560px",style:{opacity:a?1:0,width:"100%",height:"560px"}},Object(s.c)("source",{src:r.a,type:"video/mp4"})))})));t.a=d}}]);
//# sourceMappingURL=component---src-pages-which-treatment-js-b7269e7e279040b531c8.js.map