(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"4M4x":function(e,t,i){"use strict";var n=i("q1tI"),a=i.n(n),o=(i("8uUf"),i("A0gv")),R=i.n(o),r=(i("zDcZ"),i("/rRK"),i("ZaYD"),i("Hhcu"),i("V33x"),i("vOnD")),c=(i("MdcO"),i("qKvR")),l=(r.default.div.withConfig({displayName:"FixedSIzeVideo__PoppySitting02",componentId:"sc-1tz0hub-0"})(["height:738px;width:570px;"]),a.a.forwardRef((function(e,t){var i=e.currentCaseStudySlideData,n=(i.isCorrectAnswer,i.animationVideoName,i.mainImage,a.a.useState(!1)),o=n[0],r=n[1];return Object(c.c)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"flex-start",minHeight:"100vh",width:"100%",backgroundColor:"transparent"}},Object(c.c)("video",{autoPlay:!0,playsInline:!0,muted:!0,onLoadedData:function(){r(!0)},loop:!1,width:"100%",height:"560px",style:{opacity:o?1:0,width:"100%",height:"560px"}},Object(c.c)("source",{src:R.a,type:"video/mp4"})))})));t.a=l},nkKA:function(e,t,i){"use strict";i.r(t),i.d(t,"pageQuery",(function(){return S}));i("E5k/");var n=i("q1tI"),a=i.n(n),o=i("Bl7J"),R=(i("zDcZ"),i("6wlY"),i("R/WZ")),r=i("tRbT"),c=(i("ILeL"),i("3ksh"),i("r5vi")),l=i("xvYo"),s=i("C/KN"),O=(i("5lfk"),i("ooR/")),_=i("mwIZ"),d=i.n(_),E=i("a5sw"),N=i("itCy"),C=i("4M4x"),T=i("qKvR"),u=Object(R.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));var A=function(e){var t,i=e.type,n=void 0===i?N.j.QUESTION_POSED:i,o=e.resources,R=e.navigationLeftHandler,c=e.navigationRightHandler,O=e.dogChoice,_=[];o.field_buttonlinks&&o.field_buttonlinks.length>0&&(_=o.field_buttonlinks);var d={};switch(n){case N.j.ANSWER_WITH_VIDEO:case N.j.ANSWER_NO_VIDEO:var u="yes"===o.field_iscorrectanswer[0];_=[{}],!1===u&&(_[0].id=N.l.QUESTION_POSED,_[0].title="Try again",_[0].url="/murmur-treatment/",_[0].onClickHandler=c,_[0].buttonType=N.e.DARK_BLUE_ROUNDED),d={useVideoWidget:u,isCorrectAnswer:o.field_iscorrectanswer[0],answerHeader:Object(E.i)(Object(E.h)(o.field_answerheader?o.field_answerheader:"",O)),answerText:Object(E.i)(Object(E.h)(o.field_answertext?o.field_answertext.processed:"",O)),additionalText:Object(E.i)(Object(E.h)(o.field_additionalbodytext?o.field_additionalbodytext.processed:"",O)),videoText1:o.field_videocaptiontext1,buttonLinks:_};break;case N.j.QUESTION_POSED:(_=[{},{},{},{},{},{}])[0].id=N.l.CORRECT_ANSWER_XRAY_ONLY,_[0].title="X-ray",_[0].url="/",_[1].id=N.l.CORRECT_ANSWER_ULTRASOUND,_[1].title="Ultrasound",_[1].url="/",_[2].id=N.l.INCORRECT_ANSWER_ECG,_[2].title="ECG",_[2].url="/",_[3].id=N.l.CORRECT_ANSWER_XRAY_AND_ULTRASOUND,_[3].title="X-ray and ultrasound",_[3].url="/",_[4].id=N.l.INCORRECT_ANSWER_NO_TREATMENT,_[4].title="Finish Appointment",_[4].url="/",_[5].id=N.l.INCORRECT_ANSWER_HOLTER_MONITORING,_[5].title="Holter monitoring",_[5].url="/",d={useVideoWidget:!1,questionText:o.field_questiontext,headerText:o.field_questiontext,additionalText:o.field_additionalbodytext,videoText1:o.field_videocaptiontext1,buttonLinks:_};break;default:return"type not found"}var A=a.a.createRef();return Object(T.c)("section",null,Object(T.c)(r.a,((t={container:!0,spacing:0}).spacing=0,t.justify="center",t.style={border:"0px solid black"},t),Object(T.c)(r.a,{item:!0,xs:12,sm:1,align:"left",style:{border:"0px solid red"}}),Object(T.c)(r.a,{item:!0,xs:12,sm:5,align:"center",style:{border:"0px solid red"}},Object(T.c)(C.a,{autoPlay:"true",ref:A,currentCaseStudySlideData:d})),Object(T.c)(r.a,{item:!0,xs:12,sm:5,align:"left",style:{border:"0px solid red"}},n===N.j.QUESTION_POSED?Object(T.c)(s.a,{currentCaseStudySlideData:d,currentSlidePosition:0,onClickHandler:c,dogChoice:O,useVideoWidget:d.useVideoWidget}):"",n===N.j.ANSWER_WITH_VIDEO||n===N.j.ANSWER_NO_VIDEO?Object(T.c)(l.a,{currentCaseStudySlideData:d,currentSlidePosition:0,onClickHandler:R,dogChoice:O,useVideoWidget:d.useVideoWidget}):""),Object(T.c)(r.a,{item:!0,xs:12,sm:1,align:"left",style:{border:"0px solid red"}})))};t.default=function(e){var t=e.data,i=Object(c.a)(["hasConsentSet","userChoice","dogChoice","score"]),a=i[0],R=i[1],r=(i[2],a.dogChoice?a.dogChoice:N.c.DUDLEY),l={step:N.l.QUESTION_POSED},s=Object(n.useState)(l),_=s[0],C=s[1];_.step!==N.l.CORRECT_ANSWER_XRAY_ONLY&&_.step!==N.l.CORRECT_ANSWER_XRAY_AND_ULTRASOUND&&_.step!==N.l.CORRECT_ANSWER_ULTRASOUND||R(N.k.DUDLEY_GRADE_HEART_MURMUR,!0,"/");var S=d()(t,"allNodeQuestion.nodes"),g=d()(t,"allNodeAnswer.nodes"),b=null;switch(_.step){case N.l.QUESTION_POSED:b=Object(E.c)(S,N.f.QUESTION_POSED);break;case N.l.CORRECT_ANSWER_XRAY_ONLY:b=Object(E.c)(g,N.f.CORRECT_ANSWER_XRAY_ONLY);case N.l.CORRECT_ANSWER_XRAY_AND_ULTRASOUND:b=Object(E.c)(g,N.f.CORRECT_ANSWER_XRAY_AND_ULTRASOUND);break;case N.l.CORRECT_ANSWER_ULTRASOUND:b=Object(E.c)(g,N.f.CORRECT_ANSWER_ULTRASOUND);break;case N.l.INCORRECT_ANSWER_ECG:b=Object(E.c)(g,N.f.INCORRECT_ANSWER_ECG);break;case N.l.INCORRECT_ANSWER_NO_TREATMENT:b=Object(E.c)(g,N.f.INCORRECT_ANSWER_NO_TREATMENT);break;case N.l.INCORRECT_ANSWER_HOLTER_MONITORING:b=Object(E.c)(g,N.f.INCORRECT_ANSWER_HOLTER_MONITORING);break;default:return"no current slide"}if(console.log("=========== current Step - step ",_.step),console.log(b),!b)return"resources not found";if("NO_DATA_FOUND"==b)return"resources not found";var p=function(e){console.log("=========== setCurrentStep - step ",e),C(Object.assign(Object.assign({},_),{},{step:e}))},f=function(e){C(Object.assign(Object.assign({},_),{},{step:N.l.QUESTION_POSED}))},D=function(e){console.log("handleLeftClick")},I=function(e){console.log("handleRightClick")};return Object(T.c)(o.a,{headerText:(Object(E.i)("Poppy has a grade 3 mitral valve murmur; how would you like to proceed?"),r),showPercentIndicator:!0},N.l.CORRECT_ANSWER_ULTRASOUND===_.step||N.l.CORRECT_ANSWER_XRAY_AND_ULTRASOUND===_.step||N.l.CORRECT_ANSWER_XRAY_ONLY===_.step?Object(T.c)(O.a,{to:"/owner-response/",distanceFromSide:"2%",bottom:"2%",direction:N.a.FORWARD,linkText:"Continue"}):"",Object(T.c)("div",{className:u().root,style:{position:"relative",zIndex:"1 !important"}},N.l.QUESTION_POSED===_.step?Object(T.c)(A,{type:N.j.QUESTION_POSED,resources:b,dogChoice:r,navigationLeftHandler:D,navigationRightHandler:function(e){if(e.currentTarget.id)switch(e.currentTarget.id){case N.l.CORRECT_ANSWER_ULTRASOUND:p(N.l.CORRECT_ANSWER_ULTRASOUND);break;case N.l.CORRECT_ANSWER_XRAY_AND_ULTRASOUND:p(N.l.CORRECT_ANSWER_XRAY_AND_ULTRASOUND);break;case N.l.CORRECT_ANSWER_XRAY_ONLY:p(N.l.CORRECT_ANSWER_XRAY_ONLY);break;case N.l.INCORRECT_ANSWER_ECG:p(N.l.INCORRECT_ANSWER_ECG);break;case N.l.INCORRECT_ANSWER_NO_TREATMENT:p(N.l.INCORRECT_ANSWER_NO_TREATMENT);break;case N.l.INCORRECT_ANSWER_HOLTER_MONITORING:p(N.l.INCORRECT_ANSWER_HOLTER_MONITORING);break;default:console.log("no matching id on question button"),p(N.l.QUESTION_POSED)}else console.log("no id on question button"),p(N.l.QUESTION_POSED)}}):"",N.l.CORRECT_ANSWER_ULTRASOUND===_.step?Object(T.c)(A,{type:N.j.ANSWER_WITH_VIDEO,resources:b,dogChoice:r,navigationLeftHandler:D,navigationRightHandler:I}):"",N.l.CORRECT_ANSWER_XRAY_AND_ULTRASOUND===_.step?Object(T.c)(A,{type:N.j.ANSWER_WITH_VIDEO,resources:b,dogChoice:r,navigationLeftHandler:D,navigationRightHandler:I}):"",N.l.CORRECT_ANSWER_XRAY_ONLY===_.step?Object(T.c)(A,{type:N.j.ANSWER_WITH_VIDEO,resources:b,dogChoice:r,navigationLeftHandler:D,navigationRightHandler:I}):"",N.l.INCORRECT_ANSWER_ECG===_.step?Object(T.c)(A,{type:N.j.ANSWER_NO_VIDEO,resources:b,dogChoice:r,navigationLeftHandler:D,navigationRightHandler:f}):"",N.l.INCORRECT_ANSWER_NO_TREATMENT===_.step?Object(T.c)(A,{type:N.j.ANSWER_NO_VIDEO,resources:b,dogChoice:r,navigationLeftHandler:D,navigationRightHandler:f}):"",N.l.INCORRECT_ANSWER_HOLTER_MONITORING===_.step?Object(T.c)(A,{type:N.j.ANSWER_NO_VIDEO,resources:b,dogChoice:r,navigationLeftHandler:D,navigationRightHandler:f}):""))};var S="1995821694"}}]);
//# sourceMappingURL=component---src-pages-murmur-treatment-js-76dba16c2b19e9156e74.js.map