(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"C/KN":function(e,t,i){"use strict";var n=i("q1tI"),a=i.n(n),o=(i("8uUf"),i("cKdi")),r=(i("i98L"),i("a5sw")),l=(i("IBCv"),i("P/bV"),i("vOnD")),d=i("zDcZ"),c=i("itCy"),E=l.default.div.withConfig({displayName:"QuestionPosed__QuestionPoseHeader",componentId:"sc-1wiq9ob-0"})(["max-width:609px;font-family:",";font-size:2.938rem;font-weight:600;font-stretch:normal;font-style:normal;line-height:1.15;letter-spacing:-0.47px;text-align:left;padding-bottom:1.5rem;color:",";"],d.a.overrides.MuiTypography.h1.fontFamily,d.a.palette.midnightBlue.main),s=l.default.div.withConfig({displayName:"QuestionPosed__QuestionPosedBody",componentId:"sc-1wiq9ob-1"})(["font-family:",";font-weight:400;font-size:0.75rem;letter-spacing:0.01rem;padding-left:3rem;max-width:568px;"],d.a.typography.fontFamily);t.a=function(e){var t=e.data,i=(e.currentSlidePosition,e.onClickHandler),n=e.dogChoice,l=void 0===n?c.g.DUDLEY:n,d=t.questionText,R=t.additionalText,_=(t.videoText1,t.buttonLinks),O=(t.videoUrl1,t.videoThumbName1,Object(r.i)(d,l,!0)),N=Object(r.i)(R,l,!0);return a.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"flex-start",minHeight:"100vh",width:"100%"}},a.a.createElement(E,{dangerouslySetInnerHTML:O}),a.a.createElement(s,{dangerouslySetInnerHTML:N}),a.a.createElement("div",{style:{paddingLeft:"2.8rem",maxWidth:"568px"}},void 0!==_&&_.length>0&&void 0!==_[0].title&&""!==_[0].title?a.a.createElement(o.a,{id:_[0].id?_[0].id:Object(r.h)(_[0].url),buttonText:_[0].title,to:_[0].url,onClickHandler:i}):"",void 0!==_&&_.length>1&&void 0!==_[1].title&&""!==_[1].title?a.a.createElement(o.a,{id:_[1].id?_[1].id:Object(r.h)(_[1].url),buttonText:_[1].title,to:_[1].url,onClickHandler:i}):"",void 0!==_&&_.length>2&&void 0!==_[2].title&&""!==_[2].title?a.a.createElement(o.a,{id:_[2].id?_[2].id:Object(r.h)(_[2].url),buttonText:_[2].title,to:_[2].url,onClickHandler:i}):"",void 0!==_&&_.length>3&&void 0!==_[3].title&&""!==_[3].title?a.a.createElement(o.a,{id:_[3].id?_[3].id:Object(r.h)(_[3].url),buttonText:_[3].title,to:_[3].url,onClickHandler:i}):"",void 0!==_&&_.length>4&&void 0!==_[4].title&&""!==_[4].title?a.a.createElement(o.a,{id:_[4].id?_[4].id:Object(r.h)(_[4].url),buttonText:_[4].title,to:_[4].url,onClickHandler:i}):"",void 0!==_&&_.length>5&&void 0!==_[5].title&&""!==_[5].title?a.a.createElement(o.a,{id:_[5].id?_[5].id:Object(r.h)(_[5].url),buttonText:_[5].title,to:_[5].url,onClickHandler:i}):""),a.a.createElement("div",{style:{width:"100%"}}," "))}},nkKA:function(e,t,i){"use strict";i.r(t),i.d(t,"query",(function(){return b}));i("E5k/");var n=i("q1tI"),a=i.n(n),o=i("Bl7J"),r=i("R/WZ"),l=i("tRbT"),d=i("r5vi"),c=i("xvYo"),E=i("C/KN"),s=i("ooR/"),R=i("mwIZ"),_=i.n(R),O=i("a5sw"),N=i("7TWv"),A=i("itCy"),u=i("tzB8"),T=i("IBCv"),C=i("DTFT"),S=(i("zDcZ"),i("Spfr")),g=i("vUEc"),m=Object(r.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));var p=function(e){var t,i=e.type,n=void 0===i?A.u.QUESTION_POSED:i,o=e.resources,r=e.navigationLeftHandler,d=e.navigationRightHandler,s=e.dogChoice,R=null,_=[];o.field_buttonlinks&&o.field_buttonlinks.length>0&&(_=o.field_buttonlinks);switch(n){case A.u.ANSWER_WITH_VIDEO:case A.u.ANSWER_NO_VIDEO:var m="yes"===o.field_iscorrectanswer[0];_=[{}],!1===m&&(_[0].id=A.A.QUESTION_POSED,_[0].title="Try again",_[0].url="/",_[0].onClickHandler=d,_[0].buttonType=A.m.DARK_BLUE_ROUNDED);var p=Object(N.b)(o,s);R={questionText:"",answerHeader:o.field_answerheader?Object(O.i)(o.field_answerheader,s,!1):"",answerText:o.field_answertext?Object(O.i)(o.field_answertext,s,!0):"",additionalText:o.field_additionalbodytext?Object(O.i)(o.field_additionalbodytext,s,!0):"",isCorrectAnswer:o.field_iscorrectanswer[0],mainImage:Object(C.a)(m?A.c.NEUTRAL:A.c.SAD,s),slugName:A.n.CORRECT_ANSWER_ULTRASOUND,continueLink:{uri:"/",title:"Continue",url:"/"},backLink:{uri:"/",title:"Back",url:"/"},accessibilityVideoText:"",buttonLinks:_,dogChoice:s},R=Object(N.g)(R,p);break;case A.u.QUESTION_POSED:var b=Object(N.b)(o,s);(_=[{},{},{},{},{},{}])[0].id=A.A.CORRECT_ANSWER_XRAY_ONLY,_[0].title="X-ray",_[0].url="/",_[1].id=A.A.CORRECT_ANSWER_ULTRASOUND,_[1].title="Ultrasound",_[1].url="/",_[2].id=A.A.CORRECT_ANSWER_XRAY_AND_ULTRASOUND,_[2].title="X-ray and ultrasound",_[2].url="/",_[3].id=A.A.INCORRECT_ANSWER_ECG,_[3].title="ECG",_[3].url="/",_[4].id=A.A.INCORRECT_ANSWER_HOLTER_MONITORING,_[4].title="Holter monitoring",_[4].url="/",_[5].id=A.A.INCORRECT_ANSWER_NO_TREATMENT,_[5].title="Finish Appointment",_[5].url="/",R={questionText:o.field_questiontext?Object(O.i)(o.field_questiontext,s,!1):"",additionalText:o.field_additionalbodytext?Object(O.i)(o.field_additionalbodytext,s,!0):"",slugName:A.n.QUESTION_POSED,accessibilityVideoText:"",animationVideoName:Object(C.c)(A.c.NEUTRAL_STANDING,s),isCorrect1:o.field_optioniscorrect1,optionsHeader1:Object(O.i)(o.field_optionsheader1,s,!1),optionsBodyText1:Object(O.i)(o.field_optionsbodytext1,s,!0),isCorrect2:o.field_optioniscorrect2,optionsHeader2:"GRADE 2",optionsBodyText2:Object(O.i)(o.field_optionsbodytext2,s,!0),isCorrect3:o.field_optioniscorrect3,optionsHeader3:"GRADE 3",optionsBodyText3:Object(O.i)(o.field_optionsbodytext3,s,!0),isCorrect4:o.field_optioniscorrect4,optionsHeader4:"GRADE 4",optionsBodyText4:Object(O.i)(o.field_optionsbodytext4,s,!0),isCorrect5:o.field_optioniscorrect5,optionsHeader5:"GRADE 5",optionsBodyText5:Object(O.i)(o.field_optionsbodytext5,s,!0),isCorrect6:o.field_optioniscorrect6,optionsHeader6:"GRADE 6",optionsBodyText6:Object(O.i)(o.field_optionsbodytext6,s,!0),buttonLinks:_,dogChoice:s},R=Object(N.g)(R,b);break;default:return"type not found"}var f=a.a.createRef();return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.a,((t={container:!0,spacing:0}).spacing=0,t.alignItems="center",t.justify="center",t.style={border:"0px solid black"},t),a.a.createElement(l.a,{item:!0,xs:12,sm:1,align:"left",style:{border:"0px solid red"}}),a.a.createElement(l.a,{item:!0,xs:12,sm:5,align:"center",style:{border:"0px solid red"}},n===A.u.QUESTION_POSED?a.a.createElement(u.a,{autoPlay:"true",ref:f,data:R}):"",n!==A.u.ANSWER_WITH_VIDEO&&n!==A.u.ANSWER_NO_VIDEO||!R.mainImage||""===R.mainImage||s!==A.g.DUDLEY?"":a.a.createElement(g.b,null,a.a.createElement(S.a,{imgName:R.mainImage,height:"614px",width:"614px"})),n!==A.u.ANSWER_WITH_VIDEO&&n!==A.u.ANSWER_NO_VIDEO||!R.mainImage||""===R.mainImage||s!==A.g.POPPY?"":a.a.createElement(g.b,null,a.a.createElement(S.a,{imgName:R.mainImage,height:"614px",width:"614px"})),n!==A.u.ANSWER_WITH_VIDEO&&n!==A.u.ANSWER_NO_VIDEO||!R.mainImage||""===R.mainImage||s!==A.g.REGGIE?"":a.a.createElement(g.b,null,a.a.createElement(S.a,{imgName:R.mainImage,height:"614px",width:"614px"}))),a.a.createElement(l.a,{item:!0,xs:12,sm:5,align:"left",style:{border:"0px solid red"}},n===A.u.QUESTION_POSED?a.a.createElement(E.a,{data:R,currentSlidePosition:0,onClickHandler:d,dogChoice:s,useVideoWidget:{}.useVideoWidget}):"",n===A.u.ANSWER_WITH_VIDEO?a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,{data:R,currentSlidePosition:0,onClickHandler:r,dogChoice:s,useVideoWidget:!0}),a.a.createElement(T.a,{videoData1:R.videoData1,instance:"One"})):"",n===A.u.ANSWER_NO_VIDEO?a.a.createElement(c.a,{data:R,currentSlidePosition:0,onClickHandler:r,dogChoice:s,useVideoWidget:!1}):""),a.a.createElement(l.a,{item:!0,xs:12,sm:1,align:"left",style:{border:"0px solid red"}})))};t.default=function(e){var t=e.data,i=Object(d.a)([A.f.DOG_CHOICE,A.f.CASESTUDYS_ALL]),r=i[0],l=i[1],c=(i[2],r.dogChoice?r.dogChoice:A.g.DUDLEY),E={step:A.A.QUESTION_POSED,taskCompleted:!1},R=Object(n.useState)(E),u=R[0],T=R[1];Object(n.useEffect)((function(){if(u.step===A.A.CORRECT_ANSWER_XRAY_ONLY||u.step===A.A.CORRECT_ANSWER_XRAY_AND_ULTRASOUND||u.step===A.A.CORRECT_ANSWER_ULTRASOUND){var e=Object(N.e)(A.v.WHICH_EXAMINATION,c,r);console.log("============= "+e+" ============="),l(A.f.CASESTUDYS_ALL,e,{path:"/"})}}),[u.step]);var C=_()(t,"allNodeQuestion.nodes"),S=_()(t,"allNodeAnswer.nodes"),g=null,b="";switch(u.step){case A.A.QUESTION_POSED:g=Object(O.f)(C,A.n.QUESTION_POSED);break;case A.A.CORRECT_ANSWER_XRAY_ONLY:g=Object(O.f)(S,A.n.CORRECT_ANSWER_XRAY_ONLY);break;case A.A.CORRECT_ANSWER_XRAY_AND_ULTRASOUND:g=Object(O.f)(S,A.n.CORRECT_ANSWER_XRAY_AND_ULTRASOUND);break;case A.A.CORRECT_ANSWER_ULTRASOUND:g=Object(O.f)(S,A.n.CORRECT_ANSWER_ULTRASOUND);break;case A.A.INCORRECT_ANSWER_ECG:g=Object(O.f)(S,A.n.INCORRECT_ANSWER_ECG);break;case A.A.INCORRECT_ANSWER_NO_TREATMENT:g=Object(O.f)(S,A.n.INCORRECT_ANSWER_NO_TREATMENT);break;case A.A.INCORRECT_ANSWER_HOLTER_MONITORING:g=Object(O.f)(S,A.n.INCORRECT_ANSWER_HOLTER_MONITORING);break;default:return"no current slide"}if(console.log("=========== current Step - step ",u.step),console.log(g),!g)return"resources not found";if("NO_DATA_FOUND"==g)return"resources not found";var f=function(e){console.log("=========== setCurrentStep - step ",e),T(Object.assign(Object.assign({},u),{},{step:e}))},I=function(e){T(Object.assign(Object.assign({},u),{},{step:A.A.QUESTION_POSED}))},D=function(e){console.log("handleLeftClick")},h=function(e){console.log("handleRightClick")};return b=A.A.QUESTION_POSED!==u.step?b:"",a.a.createElement(o.a,{headerText:b,showPercentIndicator:!0},A.A.CORRECT_ANSWER_ULTRASOUND===u.step||A.A.CORRECT_ANSWER_XRAY_AND_ULTRASOUND===u.step||A.A.CORRECT_ANSWER_XRAY_ONLY===u.step?a.a.createElement(s.a,{to:"/owner-response",distanceFromSide:"2%",bottom:"2%",direction:A.d.FORWARD,linkText:"Continue"}):"",a.a.createElement("div",{className:m().root,style:{position:"relative",zIndex:"1 !important"}},A.A.QUESTION_POSED===u.step?a.a.createElement(p,{type:A.u.QUESTION_POSED,resources:g,dogChoice:c,navigationLeftHandler:D,navigationRightHandler:function(e){if(e.currentTarget.id)switch(e.currentTarget.id){case A.A.CORRECT_ANSWER_ULTRASOUND:f(A.A.CORRECT_ANSWER_ULTRASOUND);break;case A.A.CORRECT_ANSWER_XRAY_AND_ULTRASOUND:f(A.A.CORRECT_ANSWER_XRAY_AND_ULTRASOUND);break;case A.A.CORRECT_ANSWER_XRAY_ONLY:f(A.A.CORRECT_ANSWER_XRAY_ONLY);break;case A.A.INCORRECT_ANSWER_ECG:f(A.A.INCORRECT_ANSWER_ECG);break;case A.A.INCORRECT_ANSWER_NO_TREATMENT:f(A.A.INCORRECT_ANSWER_NO_TREATMENT);break;case A.A.INCORRECT_ANSWER_HOLTER_MONITORING:f(A.A.INCORRECT_ANSWER_HOLTER_MONITORING);break;default:console.log("no matching id on question button"),f(A.A.QUESTION_POSED)}else console.log("no id on question button"),f(A.A.QUESTION_POSED)}}):"",A.A.CORRECT_ANSWER_ULTRASOUND===u.step?a.a.createElement(p,{type:A.u.ANSWER_WITH_VIDEO,resources:g,dogChoice:c,navigationLeftHandler:D,navigationRightHandler:h}):"",A.A.CORRECT_ANSWER_XRAY_AND_ULTRASOUND===u.step?a.a.createElement(p,{type:A.u.ANSWER_WITH_VIDEO,resources:g,dogChoice:c,navigationLeftHandler:D,navigationRightHandler:h}):"",A.A.CORRECT_ANSWER_XRAY_ONLY===u.step?a.a.createElement(p,{type:A.u.ANSWER_WITH_VIDEO,resources:g,dogChoice:c,navigationLeftHandler:D,navigationRightHandler:h}):"",A.A.INCORRECT_ANSWER_ECG===u.step?a.a.createElement(p,{type:A.u.ANSWER_NO_VIDEO,resources:g,dogChoice:c,navigationLeftHandler:D,navigationRightHandler:I}):"",A.A.INCORRECT_ANSWER_NO_TREATMENT===u.step?a.a.createElement(p,{type:A.u.ANSWER_NO_VIDEO,resources:g,dogChoice:c,navigationLeftHandler:D,navigationRightHandler:I}):"",A.A.INCORRECT_ANSWER_HOLTER_MONITORING===u.step?a.a.createElement(p,{type:A.u.ANSWER_NO_VIDEO,resources:g,dogChoice:c,navigationLeftHandler:D,navigationRightHandler:I}):""))};var b="990129315"}}]);
//# sourceMappingURL=component---src-pages-murmur-treatment-js-5ceb55234f72f8079707.js.map