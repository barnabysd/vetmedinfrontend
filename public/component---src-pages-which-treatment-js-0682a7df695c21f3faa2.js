(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"/ybW":function(e,t,i){"use strict";i.r(t),i.d(t,"pageQuery",(function(){return D}));i("E5k/");var n=i("q1tI"),o=i.n(n),a=i("Bl7J"),r=(i("zDcZ"),i("R/WZ")),l=i("tRbT"),d=(i("ILeL"),i("3ksh"),i("r5vi")),c=i("xvYo"),s=i("C/KN"),E=i("ooR/"),u=i("mwIZ"),O=i.n(u),_=i("a5sw"),R=i("itCy"),C=i("tzB8"),m=i("7TWv"),T=i("DTFT"),g=i("vUEc"),I=i("Spfr"),f=Object(r.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));var b=function(e){var t,i=e.type,n=void 0===i?R.t.QUESTION_POSED:i,a=e.resources,r=e.navigationLeftHandler,d=e.navigationRightHandler,E=e.dogChoice,u=[];a.field_buttonlinks&&a.field_buttonlinks.length>0&&(u=a.field_buttonlinks),console.log("WhichTreatmentQuestionResponseLayout ",a);var O={};switch(n){case R.t.ANSWER_WITH_VIDEO:case R.t.ANSWER_NO_VIDEO:u=[{}],!1===("yes"===a.field_iscorrectanswer[0])&&(u[0].id=R.D.QUESTION_POSED,u[0].title="Try again",u[0].url="/",u[0].onClickHandler=d,u[0].buttonType=R.l.DARK_BLUE_ROUNDED);var f=Object(m.b)(a,E);O={questionText:"",answerHeader:a.field_answerheader?Object(_.i)(a.field_answerheader,E,!1):"",answerText:a.field_answertext?Object(_.i)(a.field_answertext,E,!0):"",additionalText:a.field_additionalbodytext?Object(_.i)(a.field_additionalbodytext,E,!0):"",isCorrectAnswer:a.field_iscorrectanswer[0],mainImage:Object(T.a)(R.b.HAPPY,E),slugName:R.C.CORRECT_VETMEDIN,continueLink:{uri:"/",title:"Continue",url:"/"},backLink:{uri:"/",title:"Back",url:"/"},accessibilityVideoText:"",buttonLinks:u,dogChoice:E},O=Object(m.f)(O,f);break;case R.t.QUESTION_POSED:(u=[{},{},{},{},{},{}])[0].id=R.D.CORRECT_VETMEDIN,u[0].title="Vetmedin®",u[0].url="/",u[1].id=R.D.INCORRECT_ANSWER_ALL_DIURETICS,u[1].title="Diuretics",u[1].url="/",u[2].id=R.D.INCORRECT_ANSWER_SPIRO,u[2].title="Spironolactone",u[2].url="/",u[3].id=R.D.INCORRECT_ANSWER_ACE,u[3].title="ACE inhibitors",u[3].url="/";var b=Object(m.b)(a,E);O={questionText:a.field_questiontext?Object(_.i)(a.field_questiontext,E,!1):"",additionalText:a.field_additionalbodytext?Object(_.i)(a.field_additionalbodytext,E,!0):"",slugName:R.D.QUESTION_POSED,accessibilityVideoText:"",animationVideoName:Object(T.c)(R.b.NEUTRAL,E),isCorrect1:a.field_optioniscorrect1,optionsHeader1:Object(_.i)(a.field_optionsheader1,E,!1),optionsBodyText1:Object(_.i)(a.field_optionsbodytext1,E,!0),isCorrect2:a.field_optioniscorrect2,optionsHeader2:"GRADE 2",optionsBodyText2:Object(_.i)(a.field_optionsbodytext2,E,!0),isCorrect3:a.field_optioniscorrect3,optionsHeader3:"GRADE 3",optionsBodyText3:Object(_.i)(a.field_optionsbodytext3,E,!0),isCorrect4:a.field_optioniscorrect4,optionsHeader4:"GRADE 4",optionsBodyText4:Object(_.i)(a.field_optionsbodytext4,E,!0),isCorrect5:a.field_optioniscorrect5,optionsHeader5:"GRADE 5",optionsBodyText5:Object(_.i)(a.field_optionsbodytext5,E,!0),isCorrect6:a.field_optioniscorrect6,optionsHeader6:"GRADE 6",optionsBodyText6:Object(_.i)(a.field_optionsbodytext6,E,!0),buttonLinks:u,dogChoice:E},O=Object(m.f)(O,b);break;default:return"type not found"}var D=o.a.createRef();return o.a.createElement("section",null,o.a.createElement(l.a,((t={container:!0,spacing:0}).spacing=0,t.alignItems="center",t.justify="center",t.style={border:"0px solid black"},t),o.a.createElement(l.a,{item:!0,xs:12,sm:1,align:"left",style:{border:"0px solid red"}}),o.a.createElement(l.a,{item:!0,xs:12,sm:5,align:"center",style:{border:"0px solid red"}},n===R.t.QUESTION_POSED?o.a.createElement(C.a,{autoPlay:"true",ref:D,data:O}):"",n!==R.t.ANSWER_WITH_VIDEO&&n!==R.t.ANSWER_NO_VIDEO||!O.mainImage||""===O.mainImage||E!==R.f.DUDLEY?"":o.a.createElement(g.b,null,o.a.createElement(I.a,{imgName:O.mainImage,height:"314px",width:"314px"})),n!==R.t.ANSWER_WITH_VIDEO&&n!==R.t.ANSWER_NO_VIDEO||!O.mainImage||""===O.mainImage||E!==R.f.POPPY?"":o.a.createElement(g.b,null,o.a.createElement(I.a,{imgName:O.mainImage,height:"314px",width:"314px"})),n!==R.t.ANSWER_WITH_VIDEO&&n!==R.t.ANSWER_NO_VIDEO||!O.mainImage||""===O.mainImage||E!==R.f.REGGIE?"":o.a.createElement(g.b,null,o.a.createElement(I.a,{imgName:O.mainImage,height:"314px",width:"314px"}))),o.a.createElement(l.a,{item:!0,xs:12,sm:5,align:"left",style:{border:"0px solid red"}},n===R.t.QUESTION_POSED?o.a.createElement(s.a,{data:O,currentSlidePosition:0,onClickHandler:d,dogChoice:E,useVideoWidget:O.useVideoWidget}):"",n===R.t.ANSWER_WITH_VIDEO||n===R.t.ANSWER_NO_VIDEO?o.a.createElement(c.a,{data:O,currentSlidePosition:0,onClickHandler:r,dogChoice:E,useVideoWidget:O.useVideoWidget}):""),o.a.createElement(l.a,{item:!0,xs:12,sm:1,align:"left",style:{border:"0px solid red"}})))};t.default=function(e){var t=e.data,i=Object(d.a)([R.e.DOG_CHOICE,R.e.CASESTUDYS_ALL]),r=i[0],l=i[1],c=(i[2],r.dogChoice?r.dogChoice:R.f.DUDLEY),s={step:R.D.QUESTION_POSED},u=Object(n.useState)(s),C=u[0],T=u[1];Object(n.useEffect)((function(){if(C.step===R.D.CORRECT_VETMEDIN){var e=Object(m.e)(R.u.WHICH_TREATMENT,c,r);console.log("============= "+e+" ============="),l(R.e.CASESTUDYS_ALL,e,{path:"/"})}}),[C.step]);var g=O()(t,"allNodeQuestion.nodes"),I=O()(t,"allNodeAnswer.nodes"),D=null;switch(C.step){case R.D.QUESTION_POSED:D=Object(_.f)(g,R.C.QUESTION_POSED);break;case R.D.CORRECT_VETMEDIN:D=Object(_.f)(I,R.C.CORRECT_VETMEDIN);break;case R.D.INCORRECT_ANSWER_ACE:D=Object(_.f)(I,R.C.INCORRECT_ANSWER_ACE);break;case R.D.INCORRECT_ANSWER_SPIRO:D=Object(_.f)(I,R.C.INCORRECT_ANSWER_SPIRO);break;case R.D.INCORRECT_ANSWER_ALL_DIURETICS:D=Object(_.f)(I,R.C.INCORRECT_ANSWER_ALL_DIURETICS);break;default:return"no current slide"}if(console.log("=========== current Step - step ",C.step),console.log(D),!D)return"resources not found";if("NO_DATA_FOUND"==D)return"resources not found";var N=function(e){console.log("=========== setCurrentStep - step ",e),T(Object.assign(Object.assign({},C),{},{step:e}))},p=function(e){T(Object.assign(Object.assign({},C),{},{step:R.D.QUESTION_POSED}))},S=function(e){console.log("handleLeftClick")};return void 0===D||null==typeof D?o.a.createElement(a.a,{headerText:"SORRY TEMPORARILY UNAVAILABLE",showPercentIndicator:!0},o.a.createElement(E.a,{to:"/",distanceFromSide:"2%",bottom:"2%",linkText:"Home"})):o.a.createElement(a.a,{headerText:Object(_.m)("Poppy has a grade 3 mitral valve murmur",c),showPercentIndicator:!0},R.D.CORRECT_VETMEDIN===C.step?o.a.createElement(E.a,{to:"/owner-treatment-options/",distanceFromSide:"2%",bottom:"2%",direction:R.c.FORWARD,linkText:"Continue"}):"",o.a.createElement("div",{className:f().root,style:{position:"relative",zIndex:"1 !important"}},R.D.QUESTION_POSED===C.step?o.a.createElement(b,{type:R.t.QUESTION_POSED,resources:D,dogChoice:c,navigationLeftHandler:S,navigationRightHandler:function(e){if(e.currentTarget.id)switch(console.log("========== e.currentTarget.id ========",e.currentTarget.id),e.currentTarget.id){case R.D.CORRECT_VETMEDIN:console.log("answerSelected - ichTreatmentSteps.CORRECT_VETMEDIN"),N(R.D.CORRECT_VETMEDIN);break;case R.D.INCORRECT_ANSWER_ACE:N(R.D.INCORRECT_ANSWER_ACE);break;case R.D.INCORRECT_ANSWER_ALL_DIURETICS:N(R.D.INCORRECT_ANSWER_ALL_DIURETICS);break;case R.D.INCORRECT_ANSWER_SPIRO:N(R.D.INCORRECT_ANSWER_SPIRO);break;default:console.log("no matching id on question button"),N(R.D.QUESTION_POSED)}else console.log("no id on question button"),N(R.D.QUESTION_POSED)}}):"",R.D.CORRECT_VETMEDIN===C.step?o.a.createElement(b,{type:R.t.ANSWER_WITH_VIDEO,resources:D,dogChoice:c,navigationLeftHandler:S,navigationRightHandler:function(e){console.log("handleRightClick")}}):"",R.D.INCORRECT_ANSWER_ACE===C.step?o.a.createElement(b,{type:R.t.ANSWER_NO_VIDEO,resources:D,dogChoice:c,navigationLeftHandler:S,navigationRightHandler:p}):"",R.D.INCORRECT_ANSWER_ALL_DIURETICS===C.step?o.a.createElement(b,{type:R.t.ANSWER_NO_VIDEO,resources:D,dogChoice:c,navigationLeftHandler:S,navigationRightHandler:p}):"",R.D.INCORRECT_ANSWER_SPIRO===C.step?o.a.createElement(b,{type:R.t.ANSWER_NO_VIDEO,resources:D,dogChoice:c,navigationLeftHandler:S,navigationRightHandler:p}):""))};var D="3124856518"},"3ksh":function(e,t,i){"use strict";i("E5k/"),i("q1tI"),i("/PMb"),i("kOA+"),i("zDcZ")},"C/KN":function(e,t,i){"use strict";var n=i("q1tI"),o=i.n(n),a=(i("8uUf"),i("cKdi")),r=(i("i98L"),i("a5sw")),l=(i("IBCv"),i("P/bV"),i("vOnD")),d=i("zDcZ"),c=i("itCy"),s=l.default.div.withConfig({displayName:"QuestionPosed__QuestionPoseHeader",componentId:"sc-1wiq9ob-0"})(["font-family:",";font-size:2.938rem;font-weight:600;font-stretch:normal;font-style:normal;line-height:1.15;letter-spacing:-0.47px;text-align:left;padding-bottom:1.5rem;color:",";"],d.a.overrides.MuiTypography.h1.fontFamily,d.a.palette.midnightBlue.main),E=l.default.div.withConfig({displayName:"QuestionPosed__QuestionPosedBody",componentId:"sc-1wiq9ob-1"})(["font-family:",";font-weight:400;font-size:0.75rem;letter-spacing:0.01rem;padding-left:3rem;"],d.a.typography.fontFamily);t.a=function(e){var t=e.data,i=(e.currentSlidePosition,e.onClickHandler),n=e.dogChoice,l=void 0===n?c.f.DUDLEY:n,d=t.questionText,u=t.additionalText,O=(t.videoText1,t.buttonLinks),_=(t.videoUrl1,t.videoThumbName1,Object(r.i)(d,l,!0)),R=Object(r.i)(u,l,!0);return o.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"flex-start",minHeight:"100vh",width:"100%"}},o.a.createElement(s,{dangerouslySetInnerHTML:_}),o.a.createElement(E,{dangerouslySetInnerHTML:R}),o.a.createElement("div",{style:{paddingLeft:"2.8rem"}},void 0!==O&&O.length>0&&void 0!==O[0].title&&""!==O[0].title?o.a.createElement(a.a,{id:O[0].id?O[0].id:Object(r.h)(O[0].url),buttonText:O[0].title,to:O[0].url,onClickHandler:i}):"",void 0!==O&&O.length>1&&void 0!==O[1].title&&""!==O[1].title?o.a.createElement(a.a,{id:O[1].id?O[1].id:Object(r.h)(O[1].url),buttonText:O[1].title,to:O[1].url,onClickHandler:i}):"",void 0!==O&&O.length>2&&void 0!==O[2].title&&""!==O[2].title?o.a.createElement(a.a,{id:O[2].id?O[2].id:Object(r.h)(O[2].url),buttonText:O[2].title,to:O[2].url,onClickHandler:i}):"",void 0!==O&&O.length>3&&void 0!==O[3].title&&""!==O[3].title?o.a.createElement(a.a,{id:O[3].id?O[3].id:Object(r.h)(O[3].url),buttonText:O[3].title,to:O[3].url,onClickHandler:i}):"",void 0!==O&&O.length>4&&void 0!==O[4].title&&""!==O[4].title?o.a.createElement(a.a,{id:O[4].id?O[4].id:Object(r.h)(O[4].url),buttonText:O[4].title,to:O[4].url,onClickHandler:i}):"",void 0!==O&&O.length>5&&void 0!==O[5].title&&""!==O[5].title?o.a.createElement(a.a,{id:O[5].id?O[5].id:Object(r.h)(O[5].url),buttonText:O[5].title,to:O[5].url,onClickHandler:i}):""),o.a.createElement("div",{style:{width:"100%"}}," "))}},ILeL:function(e,t,i){"use strict";i("E5k/"),i("q1tI"),i("/PMb"),i("kOA+"),i("zDcZ")}}]);
//# sourceMappingURL=component---src-pages-which-treatment-js-0682a7df695c21f3faa2.js.map