(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{M4Fi:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return S}));n("E5k/");var i=n("q1tI"),a=n.n(i),s=n("mwIZ"),o=n.n(s),r=(n("zDcZ"),n("itCy")),c=n("r5vi"),E=n("KGtl"),O=n("Bl7J"),l=(n("Sx81"),n("a5sw")),d=n("7TWv"),_=n("DTFT");t.default=function(e){var t=e.data;console.log(t);var n=Object(c.a)([r.e.DOG_CHOICE,r.e.CASESTUDYS_ALL]),s=n[0],S=n[1],R=(n[2],{step:r.q.QUESTION_POSED_BY_OWNER}),N=Object(i.useState)(R),u=N[0],b=N[1];console.log("=========== step ",u.step),console.log("state",u);var C,f=s.dogChoice?s.dogChoice:r.f.DUDLEY,p=o()(t,"allNodeQuestion.nodes"),T=o()(t,"allNodeOwnerquestion.nodes"),I=o()(t,"allNodeAnswer.nodes"),D="ownerResponsePage",P=function(e){console.log("=========== setCurrentStep - step",e),b(Object.assign(Object.assign({},u),{},{step:e}))};switch(u.step){case r.q.QUESTION_POSED_BY_OWNER:f===r.f.DUDLEY&&(C=Object(l.f)(T,r.p.QUESTION_POSED_BY_OWNER_DUDLEY)),f===r.f.POPPY&&(C=Object(l.f)(T,r.p.QUESTION_POSED_BY_OWNER_POPPY)),f===r.f.REGGIE&&(C=Object(l.f)(T,r.p.QUESTION_POSED_BY_OWNER_REGGIE)),C.animationVideoName=Object(_.e)(f),console.log(C);break;case r.q.QUESTION_POSED:f===r.f.DUDLEY&&(C=Object(l.f)(p,r.p.QUESTION_POSED_DUDLEY)),f===r.f.POPPY&&(C=Object(l.f)(p,r.p.QUESTION_POSED_POPPY)),f===r.f.REGGIE&&(C=Object(l.f)(p,r.p.QUESTION_POSED_REGGIE)),C.correctAnswerStep=r.q.CORRECT_ANSWER,C.incorrectAnswerStep=r.q.INCORRECT_ANSWER,C.animationVideoName=Object(_.e)(f),console.log(C);break;case r.q.CORRECT_ANSWER:C=Object(l.f)(I,r.p.CORRECT_ANSWER);var w=Object(d.b)(C,f),j={answerHeader:C.field_answerheader?Object(l.i)(C.field_answerheader,f,!1):"",answerText:C.field_answertext?Object(l.i)(C.field_answertext,f,!0):"",additionalText:C.field_additionalbodytext?Object(l.i)(C.field_additionalbodytext,f,!0):"",isCorrectAnswer:C.field_iscorrectanswer[0],mainImage:Object(_.a)(r.b.HAPPY,f),slugName:r.p.CORRECT_ANSWER,continueLink:{uri:"/",title:"Continue",url:"/xray"},backLink:{uri:"/",title:"Back",url:"/"},accessibilityVideoText:"",buttonLinks:[],dogChoice:f};C=Object(d.f)(j,w),console.log(C);break;case r.q.INCORRECT_ANSWER:C=Object(l.f)(I,r.p.INCORRECT_ANSWER);var g=Object(d.b)(C,f),A=[{}];A[0].id="ownerresponsequestionposed1",A[0].title="Try again",A[0].url="/",A[0].onClickHandler=function(){P(r.q.QUESTION_POSED)},A[0].buttonType=r.l.DARK_BLUE_ROUNDED;var U={answerHeader:C.field_answerheader?Object(l.i)(C.field_answerheader,f,!1):"",answerText:C.field_answertext?Object(l.i)(C.field_answertext,f,!0):"",additionalText:C.field_additionalbodytext?Object(l.i)(C.field_additionalbodytext,f,!0):"",isCorrectAnswer:C.field_iscorrectanswer[0],mainImage:Object(_.a)(r.b.HAPPY,f),slugName:r.p.INCORRECT_ANSWER,continueLink:{uri:"/",title:"Continue",url:"/"},backLink:{uri:"/",title:"Back",url:"/"},accessibilityVideoText:"",buttonLinks:A,dogChoice:f};C=Object(d.f)(U,g),console.log(C);break;default:return"no current slide"}return console.log(C),C?(Object(i.useEffect)((function(){if(u.step===r.q.CORRECT_ANSWER){var e=Object(d.e)(r.u.RESPONDING_OWNER_INITIAL_QUESTION,f,s);console.log("============= "+e+" ============="),S(r.e.CASESTUDYS_ALL,e,{path:"/"})}}),[u.step]),a.a.createElement(O.a,null,u.step===r.q.QUESTION_POSED_BY_OWNER?a.a.createElement(E.a,{step:r.q.QUESTION_POSED_BY_OWNER,id:D,style:{display:"flex"},dogChoice:f,setCurrentStep:P,resources:C}):"",u.step===r.q.QUESTION_POSED?a.a.createElement(E.a,{step:r.q.QUESTION_POSED,id:D,style:{display:"flex"},dogChoice:f,setCurrentStep:P,resources:C}):"",u.step===r.q.CORRECT_ANSWER?a.a.createElement(E.a,{step:r.q.CORRECT_ANSWER,id:D,style:{display:"flex"},dogChoice:f,setCurrentStep:P,resources:C}):"",u.step===r.q.INCORRECT_ANSWER?a.a.createElement(E.a,{step:r.q.INCORRECT_ANSWER,id:D,style:{display:"flex"},dogChoice:f,setCurrentStep:function(e){P(r.q.QUESTION_POSED)},resources:C}):"")):"resources not found"};var S="860099289"}}]);
//# sourceMappingURL=component---src-pages-owner-response-js-053823fb89b777db5544.js.map