(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"3ksh":function(e,t,i){"use strict";i("E5k/"),i("q1tI"),i("/PMb"),i("kOA+"),i("zDcZ")},"5rFP":function(e,t,i){"use strict";i.r(t),i.d(t,"pageQuery",(function(){return S}));i("E5k/");var o=i("q1tI"),n=i.n(o),a=i("Bl7J"),r=(i("zDcZ"),i("R/WZ")),l=i("tRbT"),d=(i("ILeL"),i("3ksh"),i("r5vi")),c=i("xvYo"),s=i("C/KN"),E=i("7TWv"),u=i("ooR/"),p=i("mwIZ"),T=i.n(p),_=i("a5sw"),R=i("itCy"),m=i("tzB8"),O=(i("IBCv"),i("DTFT")),C=i("Spfr"),g=i("vUEc"),f=Object(r.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));var b=function(e){var t,i=e.type,o=void 0===i?R.u.QUESTION_POSED:i,a=e.resources,r=e.navigationLeftHandler,d=e.navigationRightHandler,u=e.dogChoice,p=[];a.field_buttonlinks&&a.field_buttonlinks.length>0&&(p=a.field_buttonlinks);var T={};switch(o){case R.u.ANSWER_WITH_VIDEO:case R.u.ANSWER_NO_VIDEO:p=[{}],!1===("yes"===a.field_iscorrectanswer[0])&&(p[0].id=R.p.QUESTION_POSED,p[0].title="Try again",p[0].url="/",p[0].onClickHandler=d,p[0].buttonType=R.m.DARK_BLUE_ROUNDED);var f=Object(E.b)(a,u);T={questionText:"",answerHeader:a.field_answerheader?Object(_.i)(a.field_answerheader,u,!1):"",answerText:a.field_answertext?Object(_.i)(a.field_answertext,u,!0):"",additionalText:a.field_additionalbodytext?Object(_.i)(a.field_additionalbodytext,u,!0):"",isCorrectAnswer:a.field_iscorrectanswer[0],mainImage:Object(O.a)(R.c.HAPPY,u),slugName:R.o.CORRECT_ANSWER_RECHECK,continueLink:{uri:"/",title:"Continue",url:"/"},backLink:{uri:"/",title:"Back",url:"/"},accessibilityVideoText:"",buttonLinks:p,dogChoice:u},T=Object(E.f)(T,f);break;case R.u.QUESTION_POSED:(p=[{},{},{},{},{},{}])[0].id=R.p.CORRECT_ANSWER_RECHECK,p[0].title="Recheck in 6–12 months",p[0].url="/",p[1].id=R.p.INCORRECT_ALL_CLEAR,p[1].title="Give the ‘all clear’",p[1].url="/",p[2].id=R.p.CORRECT_ANSWER_START_TREATMENT,p[2].title="Start treatment",p[2].url="/";var b=Object(E.b)(a,u);T={questionText:a.field_questiontext?Object(_.i)(a.field_questiontext,u,!1):"",additionalText:a.field_additionalbodytext?Object(_.i)(a.field_additionalbodytext,u,!0):"",slugName:R.o.QUESTION_POSED,accessibilityVideoText:"",animationVideoName:Object(O.c)(R.c.NEUTRAL,u),isCorrect1:a.field_optioniscorrect1,optionsHeader1:Object(_.i)(a.field_optionsheader1,u,!1),optionsBodyText1:Object(_.i)(a.field_optionsbodytext1,u,!0),isCorrect2:a.field_optioniscorrect2,optionsHeader2:"GRADE 2",optionsBodyText2:Object(_.i)(a.field_optionsbodytext2,u,!0),isCorrect3:a.field_optioniscorrect3,optionsHeader3:"GRADE 3",optionsBodyText3:Object(_.i)(a.field_optionsbodytext3,u,!0),isCorrect4:a.field_optioniscorrect4,optionsHeader4:"GRADE 4",optionsBodyText4:Object(_.i)(a.field_optionsbodytext4,u,!0),isCorrect5:a.field_optioniscorrect5,optionsHeader5:"GRADE 5",optionsBodyText5:Object(_.i)(a.field_optionsbodytext5,u,!0),isCorrect6:a.field_optioniscorrect6,optionsHeader6:"GRADE 6",optionsBodyText6:Object(_.i)(a.field_optionsbodytext6,u,!0),buttonLinks:p,dogChoice:u},T=Object(E.f)(T,b);break;default:return"type not found"}var S=n.a.createRef();return n.a.createElement("section",null,n.a.createElement(l.a,((t={container:!0,spacing:0}).spacing=0,t.alignItems="center",t.justify="center",t.style={border:"0px solid black"},t),n.a.createElement(l.a,{item:!0,xs:12,sm:1,align:"left",style:{border:"0px solid red"}}),n.a.createElement(l.a,{item:!0,xs:12,sm:5,align:"center",style:{border:"0px solid red"}},o===R.u.QUESTION_POSED?n.a.createElement(m.a,{autoPlay:"true",ref:S,data:T}):"",o!==R.u.ANSWER_WITH_VIDEO&&o!==R.u.ANSWER_NO_VIDEO||!T.mainImage||""===T.mainImage||u!==R.g.DUDLEY?"":n.a.createElement(g.b,null,n.a.createElement(C.a,{imgName:T.mainImage,height:"614px",width:"614px"})),o!==R.u.ANSWER_WITH_VIDEO&&o!==R.u.ANSWER_NO_VIDEO||!T.mainImage||""===T.mainImage||u!==R.g.POPPY?"":n.a.createElement(g.b,null,n.a.createElement(C.a,{imgName:T.mainImage,height:"614px",width:"614px"})),o!==R.u.ANSWER_WITH_VIDEO&&o!==R.u.ANSWER_NO_VIDEO||!T.mainImage||""===T.mainImage||u!==R.g.REGGIE?"":n.a.createElement(g.b,null,n.a.createElement(C.a,{imgName:T.mainImage,height:"614px",width:"614px"}))),n.a.createElement(l.a,{item:!0,xs:12,sm:5,align:"left",style:{border:"0px solid red"}},o===R.u.QUESTION_POSED?n.a.createElement(s.a,{data:T,currentSlidePosition:0,onClickHandler:d,dogChoice:u,useVideoWidget:T.useVideoWidget}):"",o===R.u.ANSWER_WITH_VIDEO||o===R.u.ANSWER_NO_VIDEO?n.a.createElement(c.a,{data:T,currentSlidePosition:0,onClickHandler:r,dogChoice:u,useVideoWidget:T.useVideoWidget}):""),n.a.createElement(l.a,{item:!0,xs:12,sm:1,align:"left",style:{border:"0px solid red"}})))};t.default=function(e){var t=e.data,i=Object(d.a)([R.f.DOG_CHOICE,R.f.CASESTUDYS_ALL]),r=i[0],l=i[1],c=(i[2],r.dogChoice?r.dogChoice:R.g.DUDLEY),s={step:R.p.QUESTION_POSED},p=Object(o.useState)(s),m=p[0],O=p[1];Object(o.useEffect)((function(){if(m.step===R.p.CORRECT_ANSWER_RECHECK||m.step===R.p.CORRECT_ANSWER_START_TREATMENT){var e=Object(E.e)(R.v.NEXT_STEPS,c,r);console.log("============= "+e+" ============="),l(R.f.CASESTUDYS_ALL,e,{path:"/"})}}),[m.step]);var C=T()(t,"allNodeQuestion.nodes"),g=T()(t,"allNodeAnswer.nodes"),S=null;switch(m.step){case R.p.QUESTION_POSED:(S=Object(_.f)(C,R.o.QUESTION_POSED)).topMostHeaderText="";break;case R.p.CORRECT_ANSWER_RECHECK:(S=Object(_.f)(g,R.o.CORRECT_ANSWER_RECHECK)).topMostHeaderText=Object(_.m)("Poppy has a grade 3 mitral valve murmur",c);case R.p.CORRECT_ANSWER_START_TREATMENT:(S=Object(_.f)(g,R.o.CORRECT_ANSWER_START_TREATMENT)).topMostHeaderText=Object(_.m)("Poppy has a grade 3 mitral valve murmur",c);break;case R.p.INCORRECT_ALL_CLEAR:(S=Object(_.f)(g,R.o.INCORRECT_ALL_CLEAR)).topMostHeaderText=Object(_.m)("Poppy has a grade 3 mitral valve murmur",c);break;default:return"no current slide"}if(console.log("=========== current Step - step ",m.step),console.log(S),!S)return"resources not found";if("NO_DATA_FOUND"==S)return"resources not found";var h=function(e){console.log("=========== setCurrentStep - step ",e),O(Object.assign(Object.assign({},m),{},{step:e}))},N=function(e){console.log("handleLeftClick")},A=function(e){console.log("handleRightClick")};return void 0===S||null==typeof S?n.a.createElement(a.a,{headerText:"SORRY TEMPORARILY UNAVAILABLE",showPercentIndicator:!0},n.a.createElement(u.a,{to:"/",distanceFromSide:"2%",bottom:"2%",linkText:"Home"})):n.a.createElement(a.a,{headerText:S.topMostHeaderText,showPercentIndicator:!0},R.p.CORRECT_ANSWER_RECHECK===m.step||R.p.CORRECT_ANSWER_START_TREATMENT===m.step?n.a.createElement(u.a,{to:"/which-treatment/",distanceFromSide:"2%",bottom:"2%",direction:R.d.FORWARD,linkText:"Continue"}):"",n.a.createElement("div",{className:f().root,style:{position:"relative",zIndex:"1 !important"}},R.p.QUESTION_POSED===m.step?n.a.createElement(b,{type:R.u.QUESTION_POSED,resources:S,dogChoice:c,navigationLeftHandler:N,navigationRightHandler:function(e){if(e.currentTarget.id)switch(e.currentTarget.id){case R.p.CORRECT_ANSWER_RECHECK:h(R.p.CORRECT_ANSWER_RECHECK);break;case R.p.CORRECT_ANSWER_START_TREATMENT:h(R.p.CORRECT_ANSWER_START_TREATMENT);break;case R.p.INCORRECT_ALL_CLEAR:h(R.p.INCORRECT_ALL_CLEAR);break;default:console.log("no matching id on question button"),h(R.p.QUESTION_POSED)}else console.log("no id on question button"),h(R.p.QUESTION_POSED)}}):"",R.p.CORRECT_ANSWER_RECHECK===m.step?n.a.createElement(b,{type:R.u.ANSWER_WITH_VIDEO,resources:S,dogChoice:c,navigationLeftHandler:N,navigationRightHandler:A}):"",R.p.CORRECT_ANSWER_START_TREATMENT===m.step?n.a.createElement(b,{type:R.u.ANSWER_WITH_VIDEO,resources:S,dogChoice:c,navigationLeftHandler:N,navigationRightHandler:A}):"",R.p.INCORRECT_ALL_CLEAR===m.step?n.a.createElement(b,{type:R.u.ANSWER_NO_VIDEO,resources:S,dogChoice:c,navigationLeftHandler:N,navigationRightHandler:function(e){O(Object.assign(Object.assign({},m),{},{step:R.p.QUESTION_POSED}))}}):""))};var S="3844387645"},"C/KN":function(e,t,i){"use strict";var o=i("q1tI"),n=i.n(o),a=(i("8uUf"),i("cKdi")),r=(i("i98L"),i("a5sw")),l=(i("IBCv"),i("P/bV"),i("vOnD")),d=i("zDcZ"),c=i("itCy"),s=l.default.div.withConfig({displayName:"QuestionPosed__QuestionPoseHeader",componentId:"sc-1wiq9ob-0"})(["max-width:609px;font-family:",";font-size:2.938rem;font-weight:600;font-stretch:normal;font-style:normal;line-height:1.15;letter-spacing:-0.47px;text-align:left;padding-bottom:1.5rem;color:",";"],d.a.overrides.MuiTypography.h1.fontFamily,d.a.palette.midnightBlue.main),E=l.default.div.withConfig({displayName:"QuestionPosed__QuestionPosedBody",componentId:"sc-1wiq9ob-1"})(["font-family:",";font-weight:400;font-size:0.75rem;letter-spacing:0.01rem;padding-left:3rem;max-width:568px;"],d.a.typography.fontFamily);t.a=function(e){var t=e.data,i=(e.currentSlidePosition,e.onClickHandler),o=e.dogChoice,l=void 0===o?c.g.DUDLEY:o,d=t.questionText,u=t.additionalText,p=(t.videoText1,t.buttonLinks),T=(t.videoUrl1,t.videoThumbName1,Object(r.i)(d,l,!0)),_=Object(r.i)(u,l,!0);return n.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"flex-start",minHeight:"100vh",width:"100%"}},n.a.createElement(s,{dangerouslySetInnerHTML:T}),n.a.createElement(E,{dangerouslySetInnerHTML:_}),n.a.createElement("div",{style:{paddingLeft:"2.8rem",maxWidth:"568px"}},void 0!==p&&p.length>0&&void 0!==p[0].title&&""!==p[0].title?n.a.createElement(a.a,{id:p[0].id?p[0].id:Object(r.h)(p[0].url),buttonText:p[0].title,to:p[0].url,onClickHandler:i}):"",void 0!==p&&p.length>1&&void 0!==p[1].title&&""!==p[1].title?n.a.createElement(a.a,{id:p[1].id?p[1].id:Object(r.h)(p[1].url),buttonText:p[1].title,to:p[1].url,onClickHandler:i}):"",void 0!==p&&p.length>2&&void 0!==p[2].title&&""!==p[2].title?n.a.createElement(a.a,{id:p[2].id?p[2].id:Object(r.h)(p[2].url),buttonText:p[2].title,to:p[2].url,onClickHandler:i}):"",void 0!==p&&p.length>3&&void 0!==p[3].title&&""!==p[3].title?n.a.createElement(a.a,{id:p[3].id?p[3].id:Object(r.h)(p[3].url),buttonText:p[3].title,to:p[3].url,onClickHandler:i}):"",void 0!==p&&p.length>4&&void 0!==p[4].title&&""!==p[4].title?n.a.createElement(a.a,{id:p[4].id?p[4].id:Object(r.h)(p[4].url),buttonText:p[4].title,to:p[4].url,onClickHandler:i}):"",void 0!==p&&p.length>5&&void 0!==p[5].title&&""!==p[5].title?n.a.createElement(a.a,{id:p[5].id?p[5].id:Object(r.h)(p[5].url),buttonText:p[5].title,to:p[5].url,onClickHandler:i}):""),n.a.createElement("div",{style:{width:"100%"}}," "))}},ILeL:function(e,t,i){"use strict";i("E5k/"),i("q1tI"),i("/PMb"),i("kOA+"),i("zDcZ")}}]);
//# sourceMappingURL=component---src-pages-next-steps-js-c0aad7b2b2c6be0c4b0d.js.map