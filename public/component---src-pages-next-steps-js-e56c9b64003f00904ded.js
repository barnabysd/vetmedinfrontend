(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"3ksh":function(e,t,i){"use strict";i("q1tI"),i("/PMb"),i("kOA+"),i("zDcZ")},"5rFP":function(e,t,i){"use strict";i.r(t),i.d(t,"pageQuery",(function(){return h}));var o=i("q1tI"),n=i.n(o),a=i("Bl7J"),r=(i("zDcZ"),i("R/WZ")),l=i("tRbT"),d=(i("ILeL"),i("3ksh"),i("r5vi")),c=i("xvYo"),s=i("C/KN"),E=i("7TWv"),u=i("ooR/"),_=i("mwIZ"),R=i.n(_),T=i("a5sw"),p=i("itCy"),O=i("tzB8"),C=(i("IBCv"),i("DTFT")),m=i("Spfr"),g=i("vUEc"),f=Object(r.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));var b=function(e){var t,i=e.type,o=void 0===i?p.u.QUESTION_POSED:i,a=e.resources,r=e.navigationLeftHandler,d=e.navigationRightHandler,u=e.dogChoice,_=[];a.field_buttonlinks&&a.field_buttonlinks.length>0&&(_=a.field_buttonlinks);var R={};switch(o){case p.u.ANSWER_WITH_VIDEO:case p.u.ANSWER_NO_VIDEO:_=[{}],!1===("yes"===a.field_iscorrectanswer[0])&&(_[0].id=p.p.QUESTION_POSED,_[0].title="Try again",_[0].url="/",_[0].onClickHandler=d,_[0].buttonType=p.m.DARK_BLUE_ROUNDED);var f={};o===p.u.ANSWER_WITH_VIDEO&&(f=Object(E.c)(a,u)),R={questionText:"",answerHeader:a.field_answerheader?Object(T.i)(a.field_answerheader,u,!1):"",answerText:a.field_answertext?Object(T.i)(a.field_answertext,u,!0):"",additionalText:a.field_additionalbodytext?Object(T.i)(a.field_additionalbodytext,u,!0):"",isCorrectAnswer:a.field_iscorrectanswer[0],mainImage:Object(C.a)(p.c.HAPPY,u),slugName:p.o.CORRECT_ANSWER_RECHECK,continueLink:{uri:"/",title:"Continue",url:"/"},backLink:{uri:"/",title:"Back",url:"/"},accessibilityVideoText:"",buttonLinks:_,dogChoice:u,useVideoWidget:!1},o===p.u.ANSWER_WITH_VIDEO&&(R=Object(E.i)(R,f));break;case p.u.QUESTION_POSED:(_=[{},{},{},{},{},{}])[0].id=p.p.CORRECT_ANSWER_RECHECK,_[0].title="Recheck in 6–12 months",_[0].url="/",_[1].id=p.p.INCORRECT_ALL_CLEAR,_[1].title="Give the ‘all clear’",_[1].url="/",_[2].id=p.p.CORRECT_ANSWER_START_TREATMENT,_[2].title="Start treatment",_[2].url="/";var b=Object(E.c)(a,u);R={questionText:a.field_questiontext?Object(T.i)(a.field_questiontext,u,!1):"",additionalText:a.field_additionalbodytext?Object(T.i)(a.field_additionalbodytext,u,!0):"",slugName:p.o.QUESTION_POSED,accessibilityVideoText:"",animationVideoName:Object(C.c)(p.c.NEUTRAL,u),isCorrect1:a.field_optioniscorrect1,optionsHeader1:Object(T.i)(a.field_optionsheader1,u,!1),optionsBodyText1:Object(T.i)(a.field_optionsbodytext1,u,!0),isCorrect2:a.field_optioniscorrect2,optionsHeader2:"GRADE 2",optionsBodyText2:Object(T.i)(a.field_optionsbodytext2,u,!0),isCorrect3:a.field_optioniscorrect3,optionsHeader3:"GRADE 3",optionsBodyText3:Object(T.i)(a.field_optionsbodytext3,u,!0),isCorrect4:a.field_optioniscorrect4,optionsHeader4:"GRADE 4",optionsBodyText4:Object(T.i)(a.field_optionsbodytext4,u,!0),isCorrect5:a.field_optioniscorrect5,optionsHeader5:"GRADE 5",optionsBodyText5:Object(T.i)(a.field_optionsbodytext5,u,!0),isCorrect6:a.field_optioniscorrect6,optionsHeader6:"GRADE 6",optionsBodyText6:Object(T.i)(a.field_optionsbodytext6,u,!0),buttonLinks:_,dogChoice:u},R=Object(E.i)(R,b);break;default:return"type not found"}var h=n.a.createRef();return n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,((t={container:!0,spacing:0}).spacing=0,t.alignItems="center",t.justify="center",t.style={border:"0px solid black"},t),n.a.createElement(l.a,{item:!0,xs:12,sm:1,align:"left",style:{border:"0px solid red"}}),n.a.createElement(l.a,{item:!0,xs:12,sm:5,align:"center",style:{border:"0px solid red"}},o===p.u.QUESTION_POSED?n.a.createElement(O.a,{autoPlay:"true",ref:h,data:R}):"",o!==p.u.ANSWER_WITH_VIDEO&&o!==p.u.ANSWER_NO_VIDEO||!R.mainImage||""===R.mainImage||u!==p.g.DUDLEY?"":n.a.createElement(g.b,null,n.a.createElement(m.a,{imgName:R.mainImage,height:"614px",width:"614px"})),o!==p.u.ANSWER_WITH_VIDEO&&o!==p.u.ANSWER_NO_VIDEO||!R.mainImage||""===R.mainImage||u!==p.g.POPPY?"":n.a.createElement(g.b,null,n.a.createElement(m.a,{imgName:R.mainImage,height:"614px",width:"614px"})),o!==p.u.ANSWER_WITH_VIDEO&&o!==p.u.ANSWER_NO_VIDEO||!R.mainImage||""===R.mainImage||u!==p.g.REGGIE?"":n.a.createElement(g.b,null,n.a.createElement(m.a,{imgName:R.mainImage,height:"614px",width:"614px"}))),n.a.createElement(l.a,{item:!0,xs:12,sm:5,align:"left",style:{border:"0px solid red"}},o===p.u.QUESTION_POSED?n.a.createElement(s.a,{data:R,currentSlidePosition:0,onClickHandler:d,dogChoice:u,useVideoWidget:R.useVideoWidget}):"",o===p.u.ANSWER_WITH_VIDEO||o===p.u.ANSWER_NO_VIDEO?n.a.createElement(c.a,{data:R,currentSlidePosition:0,onClickHandler:r,dogChoice:u,useVideoWidget:R.useVideoWidget}):""),n.a.createElement(l.a,{item:!0,xs:12,sm:1,align:"left",style:{border:"0px solid red"}})))};t.default=function(e){var t=e.data,i=Object(d.a)([p.f.DOG_CHOICE,p.f.CASESTUDYS_ALL]),r=i[0],l=i[1],c=(i[2],r.dogChoice?r.dogChoice:p.g.DUDLEY),s={step:p.p.QUESTION_POSED},_=Object(o.useState)(s),O=_[0],C=_[1];Object(o.useEffect)((function(){if(O.step===p.p.CORRECT_ANSWER_RECHECK||O.step===p.p.CORRECT_ANSWER_START_TREATMENT){var e=Object(E.f)(p.v.NEXT_STEPS,c,r);console.log("============= "+e+" ============="),l(p.f.CASESTUDYS_ALL,e,{path:"/"})}}),[O.step]);var m=R()(t,"allNodeQuestion.nodes"),g=R()(t,"allNodeAnswer.nodes"),h=null;switch(O.step){case p.p.QUESTION_POSED:(h=Object(T.f)(m,p.o.QUESTION_POSED)).topMostHeaderText="";break;case p.p.CORRECT_ANSWER_RECHECK:(h=Object(T.f)(g,p.o.CORRECT_ANSWER_RECHECK)).topMostHeaderText=Object(T.m)("What is the next step you would like to take following these results?",c);case p.p.CORRECT_ANSWER_START_TREATMENT:(h=Object(T.f)(g,p.o.CORRECT_ANSWER_START_TREATMENT)).topMostHeaderText=Object(T.m)("What is the next step you would like to take following these results?",c);break;case p.p.INCORRECT_ALL_CLEAR:(h=Object(T.f)(g,p.o.INCORRECT_ALL_CLEAR)).topMostHeaderText=Object(T.m)("What is the next step you would like to take following these results?",c);break;default:return"no current slide"}if(console.log("=========== current Step - step ",O.step),console.log(h),!h)return"resources not found";if("NO_DATA_FOUND"==h)return"resources not found";var S=function(e){console.log("=========== setCurrentStep - step ",e),C(Object.assign({},O,{step:e}))},N=function(e){console.log("handleLeftClick")},A=function(e){console.log("handleRightClick")};return void 0===h||null==typeof h?n.a.createElement(a.a,{headerText:"SORRY TEMPORARILY UNAVAILABLE",showPercentIndicator:!0},n.a.createElement(u.a,{to:"/",distanceFromSide:"2%",bottom:"2%",linkText:"Home"})):n.a.createElement(a.a,{headerText:h.topMostHeaderText,showPercentIndicator:!0},n.a.createElement("div",{className:f().root,style:{position:"relative",zIndex:"1 !important"}},p.p.QUESTION_POSED===O.step?n.a.createElement(b,{type:p.u.QUESTION_POSED,resources:h,dogChoice:c,navigationLeftHandler:N,navigationRightHandler:function(e){if(e.currentTarget.id)switch(e.currentTarget.id){case p.p.CORRECT_ANSWER_RECHECK:S(p.p.CORRECT_ANSWER_RECHECK);break;case p.p.CORRECT_ANSWER_START_TREATMENT:S(p.p.CORRECT_ANSWER_START_TREATMENT);break;case p.p.INCORRECT_ALL_CLEAR:S(p.p.INCORRECT_ALL_CLEAR);break;default:console.log("no matching id on question button"),S(p.p.QUESTION_POSED)}else console.log("no id on question button"),S(p.p.QUESTION_POSED)}}):"",p.p.CORRECT_ANSWER_RECHECK===O.step?n.a.createElement(b,{type:p.u.ANSWER_NO_VIDEO,resources:h,dogChoice:c,navigationLeftHandler:N,navigationRightHandler:A}):"",p.p.CORRECT_ANSWER_START_TREATMENT===O.step?n.a.createElement(b,{type:p.u.ANSWER_NO_VIDEO,resources:h,dogChoice:c,navigationLeftHandler:N,navigationRightHandler:A}):"",p.p.INCORRECT_ALL_CLEAR===O.step?n.a.createElement(b,{type:p.u.ANSWER_NO_VIDEO,resources:h,dogChoice:c,navigationLeftHandler:N,navigationRightHandler:function(e){C(Object.assign({},O,{step:p.p.QUESTION_POSED}))}}):""),p.p.CORRECT_ANSWER_RECHECK===O.step||p.p.CORRECT_ANSWER_START_TREATMENT===O.step?n.a.createElement(u.a,{to:p.g.DUDLEY===c?"/certificate-request/":"/which-treatment/",distanceFromSide:"2%",bottom:"2%",direction:p.d.FORWARD,linkText:"Continue"}):"")};var h="2237218406"},"C/KN":function(e,t,i){"use strict";var o=i("q1tI"),n=i.n(o),a=(i("8uUf"),i("cKdi")),r=(i("i98L"),i("a5sw")),l=(i("IBCv"),i("P/bV"),i("vOnD")),d=i("zDcZ"),c=i("itCy"),s=l.b.div.withConfig({displayName:"QuestionPosed__QuestionPoseHeader",componentId:"sc-1y9dg44-0"})(["max-width:609px;font-family:",";font-size:2.938rem;font-weight:600;font-stretch:normal;font-style:normal;line-height:1.15;letter-spacing:-0.47px;text-align:left;padding-bottom:1.5rem;color:",";"],d.a.overrides.MuiTypography.h1.fontFamily,d.a.palette.midnightBlue.main),E=l.b.div.withConfig({displayName:"QuestionPosed__QuestionPosedBody",componentId:"sc-1y9dg44-1"})(["font-family:",";font-weight:400;font-size:0.75rem;letter-spacing:0.01rem;padding-left:3rem;max-width:568px;"],d.a.typography.fontFamily);t.a=function(e){var t=e.data,i=(e.currentSlidePosition,e.onClickHandler),o=e.dogChoice,l=void 0===o?c.g.DUDLEY:o,d=t.questionText,u=t.additionalText,_=(t.videoText1,t.buttonLinks),R=(t.videoUrl1,t.videoThumbName1,Object(r.i)(d,l,!0)),T=Object(r.i)(u,l,!0);return n.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"flex-start",minHeight:"100vh",width:"100%"}},n.a.createElement(s,{dangerouslySetInnerHTML:R}),n.a.createElement(E,{dangerouslySetInnerHTML:T}),n.a.createElement("div",{style:{paddingLeft:"2.8rem",maxWidth:"568px"}},void 0!==_&&_.length>0&&void 0!==_[0].title&&""!==_[0].title?n.a.createElement(a.a,{id:_[0].id?_[0].id:Object(r.h)(_[0].url),buttonText:_[0].title,to:_[0].url,onClickHandler:i}):"",void 0!==_&&_.length>1&&void 0!==_[1].title&&""!==_[1].title?n.a.createElement(a.a,{id:_[1].id?_[1].id:Object(r.h)(_[1].url),buttonText:_[1].title,to:_[1].url,onClickHandler:i}):"",void 0!==_&&_.length>2&&void 0!==_[2].title&&""!==_[2].title?n.a.createElement(a.a,{id:_[2].id?_[2].id:Object(r.h)(_[2].url),buttonText:_[2].title,to:_[2].url,onClickHandler:i}):"",void 0!==_&&_.length>3&&void 0!==_[3].title&&""!==_[3].title?n.a.createElement(a.a,{id:_[3].id?_[3].id:Object(r.h)(_[3].url),buttonText:_[3].title,to:_[3].url,onClickHandler:i}):"",void 0!==_&&_.length>4&&void 0!==_[4].title&&""!==_[4].title?n.a.createElement(a.a,{id:_[4].id?_[4].id:Object(r.h)(_[4].url),buttonText:_[4].title,to:_[4].url,onClickHandler:i}):"",void 0!==_&&_.length>5&&void 0!==_[5].title&&""!==_[5].title?n.a.createElement(a.a,{id:_[5].id?_[5].id:Object(r.h)(_[5].url),buttonText:_[5].title,to:_[5].url,onClickHandler:i}):""),n.a.createElement("div",{style:{width:"100%"}}," "))}},ILeL:function(e,t,i){"use strict";i("q1tI"),i("/PMb"),i("kOA+"),i("zDcZ")}}]);
//# sourceMappingURL=component---src-pages-next-steps-js-e56c9b64003f00904ded.js.map