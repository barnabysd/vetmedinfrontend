(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{M4Fi:function(e,t,s){"use strict";s.r(t),s.d(t,"pageQuery",(function(){return S}));s("E5k/");var n=s("q1tI"),i=s.n(n),a=s("mwIZ"),o=s.n(a),r=(s("zDcZ"),s("itCy")),c=s("r5vi"),E=s("KGtl"),l=s("Bl7J"),O=(s("Sx81"),s("a5sw")),d=s("7TWv"),_=s("DTFT");t.default=function(e){var t=e.data;console.log(t);var s=Object(c.a)([r.e.DOG_CHOICE,r.e.CASESTUDYS_ALL]),a=s[0],S=s[1],u=(s[2],{step:r.q.QUESTION_POSED_BY_OWNER}),R=Object(n.useState)(u),N=R[0],f=R[1];console.log("=========== step ",N.step),console.log("state",N);var b,p=a.dogChoice?a.dogChoice:r.f.DUDLEY,C=o()(t,"allNodeQuestion.nodes"),T=o()(t,"allNodeOwnerquestion.nodes"),I=o()(t,"allNodeAnswer.nodes"),P="ownerResponsePage",D=function(e){console.log("=========== setCurrentStep - step",e),f(Object.assign(Object.assign({},N),{},{step:e}))};switch(N.step){case r.q.QUESTION_POSED_BY_OWNER:p===r.f.DUDLEY&&(b=Object(O.f)(T,r.p.QUESTION_POSED_BY_OWNER_DUDLEY)),p===r.f.POPPY&&(b=Object(O.f)(T,r.p.QUESTION_POSED_BY_OWNER_POPPY)),p===r.f.REGGIE&&(b=Object(O.f)(T,r.p.QUESTION_POSED_BY_OWNER_REGGIE)),console.log(b);break;case r.q.QUESTION_POSED:p===r.f.REGGIE&&(b=Object(O.f)(C,r.p.QUESTION_POSED_DUDLEY)),p===r.f.POPPY&&(b=Object(O.f)(C,r.p.QUESTION_POSED_POPPY)),p===r.f.REGGIE&&(b=Object(O.f)(C,r.p.QUESTION_POSED_REGGIE)),console.log(b);break;case r.q.CORRECT_ANSWER:b=Object(O.f)(I,r.p.CORRECT_ANSWER);var w=Object(d.b)(b,p),g={answerHeader:b.field_answerheader?Object(O.i)(b.field_answerheader,p,!1):"",answerText:b.field_answertext?Object(O.i)(b.field_answertext,p,!0):"",additionalText:b.field_additionalbodytext?Object(O.i)(b.field_additionalbodytext,p,!0):"",isCorrectAnswer:b.field_iscorrectanswer[0],mainImage:Object(_.a)(r.b.HAPPY,p),slugName:r.p.CORRECT_ANSWER,continueLink:{uri:"/",title:"Continue",url:"/xray"},backLink:{uri:"/",title:"Back",url:"/"},accessibilityVideoText:"",buttonLinks:[],dogChoice:p};b=Object(d.f)(g,w),console.log(b);break;case r.q.INCORRECT_ANSWER:b=Object(O.f)(I,r.p.INCORRECT_ANSWER);var j=Object(d.b)(b,p),U=[{}];U[0].id="ownerresponsequestionposed1",U[0].title="Try again",U[0].url="/",U[0].onClickHandler=function(){D(r.q.QUESTION_POSED)},U[0].buttonType=r.l.DARK_BLUE_ROUNDED;var A={answerHeader:b.field_answerheader?Object(O.i)(b.field_answerheader,p,!1):"",answerText:b.field_answertext?Object(O.i)(b.field_answertext,p,!0):"",additionalText:b.field_additionalbodytext?Object(O.i)(b.field_additionalbodytext,p,!0):"",isCorrectAnswer:b.field_iscorrectanswer[0],mainImage:Object(_.a)(r.b.HAPPY,p),slugName:r.p.INCORRECT_ANSWER,continueLink:{uri:"/",title:"Continue",url:"/"},backLink:{uri:"/",title:"Back",url:"/"},accessibilityVideoText:"",buttonLinks:U,dogChoice:p};b=Object(d.f)(A,j),console.log(b);break;default:return"no current slide"}return console.log(b),b?(Object(n.useEffect)((function(){if(N.step===r.q.CORRECT_ANSWER){var e=Object(d.e)(r.u.RESPONDING_OWNER_INITIAL_QUESTION,p,a);console.log("============= "+e+" ============="),S(r.e.CASESTUDYS_ALL,e,{path:"/"})}}),[N.step]),i.a.createElement(l.a,null,N.step===r.q.QUESTION_POSED_BY_OWNER?i.a.createElement(E.a,{step:r.q.QUESTION_POSED_BY_OWNER,id:P,style:{display:"flex"},dogChoice:p,setCurrentStep:D,resources:b}):"",N.step===r.q.QUESTION_POSED?i.a.createElement(E.a,{step:r.q.QUESTION_POSED,id:P,style:{display:"flex"},dogChoice:p,setCurrentStep:D,resources:b}):"",N.step===r.q.CORRECT_ANSWER?i.a.createElement(E.a,{step:r.q.CORRECT_ANSWER,id:P,style:{display:"flex"},dogChoice:p,setCurrentStep:D,resources:b}):"",N.step===r.q.INCORRECT_ANSWER?i.a.createElement(E.a,{step:r.q.INCORRECT_ANSWER,id:P,style:{display:"flex"},dogChoice:p,setCurrentStep:function(e){D(r.q.QUESTION_POSED)},resources:b}):"")):"resources not found"};var S="860099289"}}]);
//# sourceMappingURL=component---src-pages-owner-response-js-6dea34f7ca9130a56171.js.map