(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{nkKA:function(e,t,i){"use strict";i.r(t),i.d(t,"pageQuery",(function(){return u}));i("E5k/");var R=i("q1tI"),n=i.n(R),o=i("Bl7J"),a=(i("zDcZ"),i("6wlY"),i("R/WZ")),r=i("tRbT"),l=(i("ILeL"),i("3ksh"),i("r5vi")),_=i("xvYo"),c=i("C/KN"),O=(i("5lfk"),i("ooR/")),s=i("mwIZ"),E=i.n(s),d=i("a5sw"),N=i("itCy"),T=i("tzB8"),C=i("qKvR"),A=Object(a.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));var S=function(e){var t,i=e.type,R=void 0===i?N.j.QUESTION_POSED:i,o=e.resources,a=e.navigationLeftHandler,l=e.navigationRightHandler,O=e.dogChoice,s=[];o.field_buttonlinks&&o.field_buttonlinks.length>0&&(s=o.field_buttonlinks);var E={};switch(R){case N.j.ANSWER_WITH_VIDEO:case N.j.ANSWER_NO_VIDEO:var A="yes"===o.field_iscorrectanswer[0];s=[{}],!1===A&&(s[0].id=N.l.QUESTION_POSED,s[0].title="Try again",s[0].url="/",s[0].onClickHandler=l,s[0].buttonType=N.e.DARK_BLUE_ROUNDED),E={useVideoWidget:A,isCorrectAnswer:o.field_iscorrectanswer[0],answerHeader:Object(d.i)(Object(d.h)(o.field_answerheader?o.field_answerheader:"",O)),answerText:Object(d.i)(Object(d.h)(o.field_answertext?o.field_answertext.processed:"",O)),additionalText:Object(d.i)(Object(d.h)(o.field_additionalbodytext?o.field_additionalbodytext.processed:"",O)),videoText1:o.field_videocaptiontext1,buttonLinks:s};break;case N.j.QUESTION_POSED:(s=[{},{},{},{},{},{}])[0].id=N.l.CORRECT_ANSWER_XRAY_ONLY,s[0].title="X-ray",s[0].url="/",s[1].id=N.l.CORRECT_ANSWER_ULTRASOUND,s[1].title="Ultrasound",s[1].url="/",s[2].id=N.l.INCORRECT_ANSWER_ECG,s[2].title="ECG",s[2].url="/",s[3].id=N.l.CORRECT_ANSWER_XRAY_AND_ULTRASOUND,s[3].title="X-ray and ultrasound",s[3].url="/",s[4].id=N.l.INCORRECT_ANSWER_NO_TREATMENT,s[4].title="Finish Appointment",s[4].url="/",s[5].id=N.l.INCORRECT_ANSWER_HOLTER_MONITORING,s[5].title="Holter monitoring",s[5].url="/",E={useVideoWidget:!1,questionText:o.field_questiontext,headerText:o.field_questiontext,additionalText:o.field_additionalbodytext,videoText1:o.field_videocaptiontext1,buttonLinks:s};break;default:return"type not found"}var S=n.a.createRef();return Object(C.c)("section",null,Object(C.c)(r.a,((t={container:!0,spacing:0}).spacing=0,t.justify="center",t.style={border:"0px solid black"},t),Object(C.c)(r.a,{item:!0,xs:12,sm:1,align:"left",style:{border:"0px solid red"}}),Object(C.c)(r.a,{item:!0,xs:12,sm:5,align:"center",style:{border:"0px solid red"}},Object(C.c)(T.a,{autoPlay:"true",ref:S,currentCaseStudySlideData:E})),Object(C.c)(r.a,{item:!0,xs:12,sm:5,align:"left",style:{border:"0px solid red"}},R===N.j.QUESTION_POSED?Object(C.c)(c.a,{currentCaseStudySlideData:E,currentSlidePosition:0,onClickHandler:l,dogChoice:O,useVideoWidget:E.useVideoWidget}):"",R===N.j.ANSWER_WITH_VIDEO||R===N.j.ANSWER_NO_VIDEO?Object(C.c)(_.a,{currentCaseStudySlideData:E,currentSlidePosition:0,onClickHandler:a,dogChoice:O,useVideoWidget:E.useVideoWidget}):""),Object(C.c)(r.a,{item:!0,xs:12,sm:1,align:"left",style:{border:"0px solid red"}})))};t.default=function(e){var t=e.data,i=Object(l.a)(["hasConsentSet","userChoice","dogChoice","score"]),n=i[0],a=i[1],r=(i[2],n.dogChoice?n.dogChoice:N.c.DUDLEY),_={step:N.l.QUESTION_POSED},c=Object(R.useState)(_),s=c[0],T=c[1];s.step!==N.l.CORRECT_ANSWER_XRAY_ONLY&&s.step!==N.l.CORRECT_ANSWER_XRAY_AND_ULTRASOUND&&s.step!==N.l.CORRECT_ANSWER_ULTRASOUND||a(N.k.DUDLEY_GRADE_HEART_MURMUR,!0,"/");var u=E()(t,"allNodeQuestion.nodes"),b=E()(t,"allNodeAnswer.nodes"),g=null;switch(s.step){case N.l.QUESTION_POSED:g=Object(d.c)(u,N.f.QUESTION_POSED);break;case N.l.CORRECT_ANSWER_XRAY_ONLY:g=Object(d.c)(b,N.f.CORRECT_ANSWER_XRAY_ONLY);case N.l.CORRECT_ANSWER_XRAY_AND_ULTRASOUND:g=Object(d.c)(b,N.f.CORRECT_ANSWER_XRAY_AND_ULTRASOUND);break;case N.l.CORRECT_ANSWER_ULTRASOUND:g=Object(d.c)(b,N.f.CORRECT_ANSWER_ULTRASOUND);break;case N.l.INCORRECT_ANSWER_ECG:g=Object(d.c)(b,N.f.INCORRECT_ANSWER_ECG);break;case N.l.INCORRECT_ANSWER_NO_TREATMENT:g=Object(d.c)(b,N.f.INCORRECT_ANSWER_NO_TREATMENT);break;case N.l.INCORRECT_ANSWER_HOLTER_MONITORING:g=Object(d.c)(b,N.f.INCORRECT_ANSWER_HOLTER_MONITORING);break;default:return"no current slide"}if(console.log("=========== current Step - step ",s.step),console.log(g),!g)return"resources not found";if("NO_DATA_FOUND"==g)return"resources not found";var W=function(e){console.log("=========== setCurrentStep - step ",e),T(Object.assign(Object.assign({},s),{},{step:e}))},p=function(e){T(Object.assign(Object.assign({},s),{},{step:N.l.QUESTION_POSED}))},I=function(e){console.log("handleLeftClick")},D=function(e){console.log("handleRightClick")};return Object(C.c)(o.a,{headerText:(Object(d.i)("Poppy has a grade 3 mitral valve murmur; how would you like to proceed?"),r),showPercentIndicator:!0},N.l.CORRECT_ANSWER_ULTRASOUND===s.step||N.l.CORRECT_ANSWER_XRAY_AND_ULTRASOUND===s.step||N.l.CORRECT_ANSWER_XRAY_ONLY===s.step?Object(C.c)(O.a,{to:"/owner-response",distanceFromSide:"2%",bottom:"2%",direction:N.a.FORWARD,linkText:"Continue"}):"",Object(C.c)("div",{className:A().root,style:{position:"relative",zIndex:"1 !important"}},N.l.QUESTION_POSED===s.step?Object(C.c)(S,{type:N.j.QUESTION_POSED,resources:g,dogChoice:r,navigationLeftHandler:I,navigationRightHandler:function(e){if(e.currentTarget.id)switch(e.currentTarget.id){case N.l.CORRECT_ANSWER_ULTRASOUND:W(N.l.CORRECT_ANSWER_ULTRASOUND);break;case N.l.CORRECT_ANSWER_XRAY_AND_ULTRASOUND:W(N.l.CORRECT_ANSWER_XRAY_AND_ULTRASOUND);break;case N.l.CORRECT_ANSWER_XRAY_ONLY:W(N.l.CORRECT_ANSWER_XRAY_ONLY);break;case N.l.INCORRECT_ANSWER_ECG:W(N.l.INCORRECT_ANSWER_ECG);break;case N.l.INCORRECT_ANSWER_NO_TREATMENT:W(N.l.INCORRECT_ANSWER_NO_TREATMENT);break;case N.l.INCORRECT_ANSWER_HOLTER_MONITORING:W(N.l.INCORRECT_ANSWER_HOLTER_MONITORING);break;default:console.log("no matching id on question button"),W(N.l.QUESTION_POSED)}else console.log("no id on question button"),W(N.l.QUESTION_POSED)}}):"",N.l.CORRECT_ANSWER_ULTRASOUND===s.step?Object(C.c)(S,{type:N.j.ANSWER_WITH_VIDEO,resources:g,dogChoice:r,navigationLeftHandler:I,navigationRightHandler:D}):"",N.l.CORRECT_ANSWER_XRAY_AND_ULTRASOUND===s.step?Object(C.c)(S,{type:N.j.ANSWER_WITH_VIDEO,resources:g,dogChoice:r,navigationLeftHandler:I,navigationRightHandler:D}):"",N.l.CORRECT_ANSWER_XRAY_ONLY===s.step?Object(C.c)(S,{type:N.j.ANSWER_WITH_VIDEO,resources:g,dogChoice:r,navigationLeftHandler:I,navigationRightHandler:D}):"",N.l.INCORRECT_ANSWER_ECG===s.step?Object(C.c)(S,{type:N.j.ANSWER_NO_VIDEO,resources:g,dogChoice:r,navigationLeftHandler:I,navigationRightHandler:p}):"",N.l.INCORRECT_ANSWER_NO_TREATMENT===s.step?Object(C.c)(S,{type:N.j.ANSWER_NO_VIDEO,resources:g,dogChoice:r,navigationLeftHandler:I,navigationRightHandler:p}):"",N.l.INCORRECT_ANSWER_HOLTER_MONITORING===s.step?Object(C.c)(S,{type:N.j.ANSWER_NO_VIDEO,resources:g,dogChoice:r,navigationLeftHandler:I,navigationRightHandler:p}):""))};var u="1995821694"}}]);
//# sourceMappingURL=component---src-pages-murmur-treatment-js-b7152df600b291e4796e.js.map