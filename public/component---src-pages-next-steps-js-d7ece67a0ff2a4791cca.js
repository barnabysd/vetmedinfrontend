(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"5rFP":function(e,t,i){"use strict";i.r(t),i.d(t,"pageQuery",(function(){return b}));i("E5k/");var n=i("q1tI"),o=i.n(n),a=i("Bl7J"),r=(i("zDcZ"),i("6wlY"),i("R/WZ")),c=i("tRbT"),s=(i("ILeL"),i("3ksh"),i("r5vi")),d=i("xvYo"),l=i("C/KN"),E=(i("5lfk"),i("ooR/")),R=i("mwIZ"),_=i.n(R),O=i("a5sw"),T=i("itCy"),C=i("cFcJ"),u=i("qKvR"),S=Object(r.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));var h=function(e){var t,i=e.type,n=void 0===i?T.j.QUESTION_POSED:i,a=e.resources,r=e.navigationLeftHandler,s=e.navigationRightHandler,E=e.dogChoice,R=[];a.field_buttonlinks&&a.field_buttonlinks.length>0&&(R=a.field_buttonlinks);var _={};switch(n){case T.j.ANSWER_WITH_VIDEO:case T.j.ANSWER_NO_VIDEO:var S="yes"===a.field_iscorrectanswer[0];R=[{}],!1===S&&(R[0].id=T.h.QUESTION_POSED,R[0].title="Try again",R[0].url="/",R[0].onClickHandler=s,R[0].buttonType=T.e.DARK_BLUE_ROUNDED),_={useVideoWidget:S,isCorrectAnswer:a.field_iscorrectanswer[0],answerHeader:Object(O.i)(Object(O.h)(a.field_answerheader?a.field_answerheader:"",E)),answerText:Object(O.i)(Object(O.h)(a.field_answertext?a.field_answertext.processed:"",E)),additionalText:Object(O.i)(Object(O.h)(a.field_additionalbodytext?a.field_additionalbodytext.processed:"",E)),videoText1:a.field_videocaptiontext1,buttonLinks:R};break;case T.j.QUESTION_POSED:(R=[{},{},{},{},{},{}])[0].id=T.h.CORRECT_ANSWER_RECHECK,R[0].title="Recheck in 6–12 months",R[0].url="/",R[1].id=T.h.INCORRECT_ALL_CLEAR,R[1].title="Give the ‘all clear’",R[1].url="/",R[2].id=T.h.CORRECT_ANSWER_START_TREATMENT,R[2].title="Start treatment",R[2].url="/",_={useVideoWidget:!1,questionText:a.field_questiontext,headerText:a.field_questiontext,additionalText:a.field_additionalbodytext,videoText1:a.field_videocaptiontext1,buttonLinks:R};break;default:return"type not found"}var h=o.a.createRef();return Object(u.c)("section",null,Object(u.c)(c.a,((t={container:!0,spacing:0}).spacing=0,t.justify="center",t.style={border:"0px solid black"},t),Object(u.c)(c.a,{item:!0,xs:12,sm:1,align:"left",style:{border:"0px solid red"}}),Object(u.c)(c.a,{item:!0,xs:12,sm:5,align:"center",style:{border:"0px solid red"}},Object(u.c)(C.a,{autoPlay:"true",ref:h,currentCaseStudySlideData:_})),Object(u.c)(c.a,{item:!0,xs:12,sm:5,align:"left",style:{border:"0px solid red"}},n===T.j.QUESTION_POSED?Object(u.c)(l.a,{currentCaseStudySlideData:_,currentSlidePosition:0,onClickHandler:s,dogChoice:E,useVideoWidget:_.useVideoWidget}):"",n===T.j.ANSWER_WITH_VIDEO||n===T.j.ANSWER_NO_VIDEO?Object(u.c)(d.a,{currentCaseStudySlideData:_,currentSlidePosition:0,onClickHandler:r,dogChoice:E,useVideoWidget:_.useVideoWidget}):""),Object(u.c)(c.a,{item:!0,xs:12,sm:1,align:"left",style:{border:"0px solid red"}})))};t.default=function(e){var t=e.data,i=Object(s.a)(["hasConsentSet","userChoice","dogChoice","score"]),o=i[0],r=i[1],c=(i[2],o.dogChoice?o.dogChoice:T.c.DUDLEY),d={step:T.h.QUESTION_POSED},l=Object(n.useState)(d),R=l[0],C=l[1];R.step!==T.h.CORRECT_ANSWER_RECHECK&&R.step!==T.h.CORRECT_ANSWER_START_TREATMENT||r(T.k.DUDLEY_GRADE_HEART_MURMUR,!0,"/");var b=_()(t,"allNodeQuestion.nodes"),g=_()(t,"allNodeAnswer.nodes"),A=null;switch(R.step){case T.h.QUESTION_POSED:A=Object(O.c)(b,T.g.QUESTION_POSED);break;case T.h.CORRECT_ANSWER_RECHECK:A=Object(O.c)(g,T.g.CORRECT_ANSWER_RECHECK);case T.h.CORRECT_ANSWER_START_TREATMENT:A=Object(O.c)(g,T.g.CORRECT_ANSWER_START_TREATMENT);break;case T.h.INCORRECT_ALL_CLEAR:A=Object(O.c)(g,T.g.INCORRECT_ALL_CLEAR);break;default:return"no current slide"}if(console.log("=========== current Step - step ",R.step),console.log(A),!A)return"resources not found";if("NO_DATA_FOUND"==A)return"resources not found";var N=function(e){console.log("=========== setCurrentStep - step ",e),C(Object.assign(Object.assign({},R),{},{step:e}))},p=function(e){console.log("handleLeftClick")},f=function(e){console.log("handleRightClick")};return Object(u.c)(a.a,{headerText:(Object(O.i)("Poppy has a grade 3 mitral valve murmur; how would you like to proceed?"),c),showPercentIndicator:!0},T.h.CORRECT_ANSWER_RECHECK===R.step||T.h.CORRECT_ANSWER_START_TREATMENT===R.step?Object(u.c)(E.a,{to:"/which-treatment/",distanceFromSide:"2%",bottom:"2%",direction:T.a.FORWARD,linkText:"Continue"}):"",Object(u.c)("div",{className:S().root,style:{position:"relative",zIndex:"1 !important"}},T.h.QUESTION_POSED===R.step?Object(u.c)(h,{type:T.j.QUESTION_POSED,resources:A,dogChoice:c,navigationLeftHandler:p,navigationRightHandler:function(e){if(e.currentTarget.id)switch(e.currentTarget.id){case T.h.CORRECT_ANSWER_RECHECK:N(T.h.CORRECT_ANSWER_RECHECK);break;case T.h.CORRECT_ANSWER_START_TREATMENT:N(T.h.CORRECT_ANSWER_START_TREATMENT);break;case T.h.CORRECT_ANSWER_XRAY_ONLY:N(T.h.INCORRECT_ALL_CLEAR);break;default:console.log("no matching id on question button"),N(T.h.QUESTION_POSED)}else console.log("no id on question button"),N(T.h.QUESTION_POSED)}}):"",T.h.CORRECT_ANSWER_RECHECK===R.step?Object(u.c)(h,{type:T.j.ANSWER_WITH_VIDEO,resources:A,dogChoice:c,navigationLeftHandler:p,navigationRightHandler:f}):"",T.h.CORRECT_ANSWER_START_TREATMENT===R.step?Object(u.c)(h,{type:T.j.ANSWER_WITH_VIDEO,resources:A,dogChoice:c,navigationLeftHandler:p,navigationRightHandler:f}):"",T.h.INCORRECT_ALL_CLEAR===R.step?Object(u.c)(h,{type:T.j.ANSWER_NO_VIDEO,resources:A,dogChoice:c,navigationLeftHandler:p,navigationRightHandler:function(e){C(Object.assign(Object.assign({},R),{},{step:T.h.QUESTION_POSED}))}}):""))};var b="1995821694"}}]);
//# sourceMappingURL=component---src-pages-next-steps-js-d7ece67a0ff2a4791cca.js.map