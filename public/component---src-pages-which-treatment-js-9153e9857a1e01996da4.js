(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"/ybW":function(e,t,i){"use strict";i.r(t),i.d(t,"pageQuery",(function(){return b}));i("E5k/");var n=i("q1tI"),o=i.n(n),a=i("Bl7J"),r=(i("zDcZ"),i("R/WZ")),l=i("tRbT"),d=(i("ILeL"),i("3ksh"),i("r5vi")),c=i("xvYo"),s=i("C/KN"),E=i("IBCv"),u=i("ooR/"),_=i("mwIZ"),O=i.n(_),R=i("a5sw"),I=i("itCy"),T=i("tzB8"),m=i("7TWv"),g=i("DTFT"),C=i("vUEc"),f=i("Spfr"),p=Object(r.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));var N=function(e){var t,i=e.type,n=void 0===i?I.u.QUESTION_POSED:i,a=e.resources,r=e.navigationLeftHandler,d=e.navigationRightHandler,u=e.dogChoice,_=[];a.field_buttonlinks&&a.field_buttonlinks.length>0&&(_=a.field_buttonlinks),console.log("WhichTreatmentQuestionResponseLayout ",a);var O={};switch(n){case I.u.ANSWER_WITH_VIDEO:case I.u.ANSWER_NO_VIDEO:_=[{}],!1===("yes"===a.field_iscorrectanswer[0])&&(_[0].id=I.G.QUESTION_POSED,_[0].title="Try again",_[0].url="/",_[0].onClickHandler=d,_[0].buttonType=I.m.DARK_BLUE_ROUNDED);var p={};n===I.u.ANSWER_WITH_VIDEO&&(p=Object(m.c)(a,u)),O={questionText:"",answerHeader:a.field_answerheader?Object(R.i)(a.field_answerheader,u,!1):"",answerText:a.field_answertext?Object(R.i)(a.field_answertext,u,!0):"",additionalText:a.field_additionalbodytext?Object(R.i)(a.field_additionalbodytext,u,!0):"",isCorrectAnswer:a.field_iscorrectanswer[0],mainImage:Object(g.a)(I.c.HAPPY,u),slugName:I.F.CORRECT_VETMEDIN,continueLink:{uri:"/",title:"Continue",url:"/"},backLink:{uri:"/",title:"Back",url:"/"},accessibilityVideoText:"",buttonLinks:_,dogChoice:u},n===I.u.ANSWER_WITH_VIDEO&&(O=Object(m.i)(O,p));break;case I.u.QUESTION_POSED:(_=[{},{},{},{},{},{}])[0].id=I.G.CORRECT_VETMEDIN,_[0].title="Vetmedin®",_[0].url="/",_[1].id=I.G.INCORRECT_ANSWER_ALL_DIURETICS,_[1].title="Diuretics",_[1].url="/",_[2].id=I.G.INCORRECT_ANSWER_SPIRO,_[2].title="Spironolactone",_[2].url="/",_[3].id=I.G.INCORRECT_ANSWER_ACE,_[3].title="ACE inhibitors",_[3].url="/";var N={};n===I.u.ANSWER_WITH_VIDEO&&(N=Object(m.c)(a,u)),O={questionText:a.field_questiontext?Object(R.i)(a.field_questiontext,u,!1):"",additionalText:a.field_additionalbodytext?Object(R.i)(a.field_additionalbodytext,u,!0):"",slugName:I.G.QUESTION_POSED,accessibilityVideoText:"",animationVideoName:Object(g.c)(I.c.NEUTRAL,u),isCorrect1:a.field_optioniscorrect1,optionsHeader1:Object(R.i)(a.field_optionsheader1,u,!1),optionsBodyText1:Object(R.i)(a.field_optionsbodytext1,u,!0),isCorrect2:a.field_optioniscorrect2,optionsHeader2:"GRADE 2",optionsBodyText2:Object(R.i)(a.field_optionsbodytext2,u,!0),isCorrect3:a.field_optioniscorrect3,optionsHeader3:"GRADE 3",optionsBodyText3:Object(R.i)(a.field_optionsbodytext3,u,!0),isCorrect4:a.field_optioniscorrect4,optionsHeader4:"GRADE 4",optionsBodyText4:Object(R.i)(a.field_optionsbodytext4,u,!0),isCorrect5:a.field_optioniscorrect5,optionsHeader5:"GRADE 5",optionsBodyText5:Object(R.i)(a.field_optionsbodytext5,u,!0),isCorrect6:a.field_optioniscorrect6,optionsHeader6:"GRADE 6",optionsBodyText6:Object(R.i)(a.field_optionsbodytext6,u,!0),buttonLinks:_,dogChoice:u},n===I.u.ANSWER_WITH_VIDEO&&(O=Object(m.i)(O,N));break;default:return"type not found"}var b=o.a.createRef();return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,((t={container:!0,spacing:0}).spacing=0,t.alignItems="center",t.justify="center",t.style={border:"0px solid black"},t),o.a.createElement(l.a,{item:!0,xs:12,sm:1,align:"left",style:{border:"0px solid red"}}),o.a.createElement(l.a,{item:!0,xs:12,sm:5,align:"center",style:{border:"0px solid red"}},n===I.u.QUESTION_POSED?o.a.createElement(T.a,{autoPlay:"true",ref:b,data:O}):"",n!==I.u.ANSWER_WITH_VIDEO&&n!==I.u.ANSWER_NO_VIDEO||!O.mainImage||""===O.mainImage||u!==I.g.DUDLEY?"":o.a.createElement(C.b,null,o.a.createElement(f.a,{imgName:O.mainImage,height:"314px",width:"314px"})),n!==I.u.ANSWER_WITH_VIDEO&&n!==I.u.ANSWER_NO_VIDEO||!O.mainImage||""===O.mainImage||u!==I.g.POPPY?"":o.a.createElement(C.b,null,o.a.createElement(f.a,{imgName:O.mainImage,height:"314px",width:"314px"})),n!==I.u.ANSWER_WITH_VIDEO&&n!==I.u.ANSWER_NO_VIDEO||!O.mainImage||""===O.mainImage||u!==I.g.REGGIE?"":o.a.createElement(C.b,null,o.a.createElement(f.a,{imgName:O.mainImage,height:"314px",width:"314px"}))),o.a.createElement(l.a,{item:!0,xs:12,sm:5,align:"left",style:{border:"0px solid red"}},n===I.u.QUESTION_POSED?o.a.createElement(s.a,{data:O,currentSlidePosition:0,onClickHandler:d,dogChoice:u,useVideoWidget:O.useVideoWidget}):"",n===I.u.ANSWER_WITH_VIDEO||n===I.u.ANSWER_NO_VIDEO?o.a.createElement(c.a,{data:O,currentSlidePosition:0,onClickHandler:r,dogChoice:u,useVideoWidget:O.useVideoWidget}):""),o.a.createElement(l.a,{item:!0,xs:12,sm:1,align:"left",style:{border:"0px solid red"}})),n===I.u.ANSWER_WITH_VIDEO?o.a.createElement(E.a,{videoData1:O.videoData1,instance:"One"}):"")};t.default=function(e){var t=e.data,i=Object(d.a)([I.f.DOG_CHOICE,I.f.CASESTUDYS_ALL]),r=i[0],l=i[1],c=(i[2],r.dogChoice?r.dogChoice:I.g.DUDLEY),s={step:I.G.QUESTION_POSED},E=Object(n.useState)(s),_=E[0],T=E[1];Object(n.useEffect)((function(){if(_.step===I.G.CORRECT_VETMEDIN){var e=Object(m.f)(I.v.WHICH_TREATMENT,c,r);console.log("============= "+e+" ============="),l(I.f.CASESTUDYS_ALL,e,{path:"/"})}}),[_.step]);var g=O()(t,"allNodeQuestion.nodes"),C=O()(t,"allNodeAnswer.nodes"),f=null;switch(_.step){case I.G.QUESTION_POSED:f=Object(R.f)(g,I.F.QUESTION_POSED);break;case I.G.CORRECT_VETMEDIN:f=Object(R.f)(C,I.F.CORRECT_VETMEDIN);break;case I.G.INCORRECT_ANSWER_ACE:f=Object(R.f)(C,I.F.INCORRECT_ANSWER_ACE);break;case I.G.INCORRECT_ANSWER_SPIRO:f=Object(R.f)(C,I.F.INCORRECT_ANSWER_SPIRO);break;case I.G.INCORRECT_ANSWER_ALL_DIURETICS:f=Object(R.f)(C,I.F.INCORRECT_ANSWER_ALL_DIURETICS);break;default:return"no current slide"}if(console.log("=========== current Step - step ",_.step),console.log(f),!f)return"resources not found";if("NO_DATA_FOUND"==f)return"resources not found";var b=function(e){console.log("=========== setCurrentStep - step ",e),T(Object.assign(Object.assign({},_),{},{step:e}))},S=function(e){T(Object.assign(Object.assign({},_),{},{step:I.G.QUESTION_POSED}))},h=function(e){console.log("handleLeftClick")};return void 0===f||null==typeof f?o.a.createElement(a.a,{headerText:"SORRY TEMPORARILY UNAVAILABLE",showPercentIndicator:!0},o.a.createElement(u.a,{to:"/",distanceFromSide:"2%",bottom:"2%",linkText:"Home"})):o.a.createElement(a.a,{headerText:Object(R.m)("Poppy has a grade 3 mitral valve murmur",c),showPercentIndicator:!0},I.G.CORRECT_VETMEDIN===_.step?o.a.createElement(u.a,{to:"/owner-treatment-options/",distanceFromSide:"2%",bottom:"2%",direction:I.d.FORWARD,linkText:"Continue"}):"",o.a.createElement("div",{className:p().root,style:{position:"relative",zIndex:"1000 !important"}},I.G.QUESTION_POSED===_.step?o.a.createElement(N,{type:I.u.QUESTION_POSED,resources:f,dogChoice:c,navigationLeftHandler:h,navigationRightHandler:function(e){if(e.currentTarget.id)switch(console.log("========== e.currentTarget.id ========",e.currentTarget.id),e.currentTarget.id){case I.G.CORRECT_VETMEDIN:console.log("answerSelected - ichTreatmentSteps.CORRECT_VETMEDIN"),b(I.G.CORRECT_VETMEDIN);break;case I.G.INCORRECT_ANSWER_ACE:b(I.G.INCORRECT_ANSWER_ACE);break;case I.G.INCORRECT_ANSWER_ALL_DIURETICS:b(I.G.INCORRECT_ANSWER_ALL_DIURETICS);break;case I.G.INCORRECT_ANSWER_SPIRO:b(I.G.INCORRECT_ANSWER_SPIRO);break;default:console.log("no matching id on question button"),b(I.G.QUESTION_POSED)}else console.log("no id on question button"),b(I.G.QUESTION_POSED)}}):"",I.G.CORRECT_VETMEDIN===_.step?o.a.createElement(N,{type:I.u.ANSWER_WITH_VIDEO,resources:f,dogChoice:c,navigationLeftHandler:h,navigationRightHandler:function(e){console.log("handleRightClick")}}):"",I.G.INCORRECT_ANSWER_ACE===_.step?o.a.createElement(N,{type:I.u.ANSWER_WITH_VIDEO,resources:f,dogChoice:c,navigationLeftHandler:h,navigationRightHandler:S}):"",I.G.INCORRECT_ANSWER_ALL_DIURETICS===_.step?o.a.createElement(N,{type:I.u.ANSWER_WITH_VIDEO,resources:f,dogChoice:c,navigationLeftHandler:h,navigationRightHandler:S}):"",I.G.INCORRECT_ANSWER_SPIRO===_.step?o.a.createElement(N,{type:I.u.ANSWER_WITH_VIDEO,resources:f,dogChoice:c,navigationLeftHandler:h,navigationRightHandler:S}):""))};var b="3124856518"},"3ksh":function(e,t,i){"use strict";i("E5k/"),i("q1tI"),i("/PMb"),i("kOA+"),i("zDcZ")},"C/KN":function(e,t,i){"use strict";var n=i("q1tI"),o=i.n(n),a=(i("8uUf"),i("cKdi")),r=(i("i98L"),i("a5sw")),l=(i("IBCv"),i("P/bV"),i("vOnD")),d=i("zDcZ"),c=i("itCy"),s=l.default.div.withConfig({displayName:"QuestionPosed__QuestionPoseHeader",componentId:"sc-1y9dg44-0"})(["max-width:609px;font-family:",";font-size:2.938rem;font-weight:600;font-stretch:normal;font-style:normal;line-height:1.15;letter-spacing:-0.47px;text-align:left;padding-bottom:1.5rem;color:",";"],d.a.overrides.MuiTypography.h1.fontFamily,d.a.palette.midnightBlue.main),E=l.default.div.withConfig({displayName:"QuestionPosed__QuestionPosedBody",componentId:"sc-1y9dg44-1"})(["font-family:",";font-weight:400;font-size:0.75rem;letter-spacing:0.01rem;padding-left:3rem;max-width:568px;"],d.a.typography.fontFamily);t.a=function(e){var t=e.data,i=(e.currentSlidePosition,e.onClickHandler),n=e.dogChoice,l=void 0===n?c.g.DUDLEY:n,d=t.questionText,u=t.additionalText,_=(t.videoText1,t.buttonLinks),O=(t.videoUrl1,t.videoThumbName1,Object(r.i)(d,l,!0)),R=Object(r.i)(u,l,!0);return o.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"flex-start",minHeight:"100vh",width:"100%"}},o.a.createElement(s,{dangerouslySetInnerHTML:O}),o.a.createElement(E,{dangerouslySetInnerHTML:R}),o.a.createElement("div",{style:{paddingLeft:"2.8rem",maxWidth:"568px"}},void 0!==_&&_.length>0&&void 0!==_[0].title&&""!==_[0].title?o.a.createElement(a.a,{id:_[0].id?_[0].id:Object(r.h)(_[0].url),buttonText:_[0].title,to:_[0].url,onClickHandler:i}):"",void 0!==_&&_.length>1&&void 0!==_[1].title&&""!==_[1].title?o.a.createElement(a.a,{id:_[1].id?_[1].id:Object(r.h)(_[1].url),buttonText:_[1].title,to:_[1].url,onClickHandler:i}):"",void 0!==_&&_.length>2&&void 0!==_[2].title&&""!==_[2].title?o.a.createElement(a.a,{id:_[2].id?_[2].id:Object(r.h)(_[2].url),buttonText:_[2].title,to:_[2].url,onClickHandler:i}):"",void 0!==_&&_.length>3&&void 0!==_[3].title&&""!==_[3].title?o.a.createElement(a.a,{id:_[3].id?_[3].id:Object(r.h)(_[3].url),buttonText:_[3].title,to:_[3].url,onClickHandler:i}):"",void 0!==_&&_.length>4&&void 0!==_[4].title&&""!==_[4].title?o.a.createElement(a.a,{id:_[4].id?_[4].id:Object(r.h)(_[4].url),buttonText:_[4].title,to:_[4].url,onClickHandler:i}):"",void 0!==_&&_.length>5&&void 0!==_[5].title&&""!==_[5].title?o.a.createElement(a.a,{id:_[5].id?_[5].id:Object(r.h)(_[5].url),buttonText:_[5].title,to:_[5].url,onClickHandler:i}):""),o.a.createElement("div",{style:{width:"100%"}}," "))}},ILeL:function(e,t,i){"use strict";i("E5k/"),i("q1tI"),i("/PMb"),i("kOA+"),i("zDcZ")}}]);
//# sourceMappingURL=component---src-pages-which-treatment-js-9153e9857a1e01996da4.js.map