(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{M4Fi:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return S}));n("E5k/");var i=n("q1tI"),o=n.n(i),a=n("mwIZ"),s=n.n(a),r=(n("zDcZ"),n("itCy")),c=n("r5vi"),E=n("KGtl"),O=n("Bl7J"),l=(n("Sx81"),n("a5sw")),d=n("7TWv"),_=n("DTFT");t.default=function(e){var t=e.data;console.log(t);var n=Object(c.a)([r.e.DOG_CHOICE,r.e.CASESTUDYS_ALL]),a=n[0],S=n[1],R=(n[2],{step:r.q.QUESTION_POSED_BY_OWNER}),N=Object(i.useState)(R),u=N[0],C=N[1];console.log("=========== step ",u.step),console.log("state",u);var f,p=a.dogChoice?a.dogChoice:r.f.DUDLEY,b=s()(t,"allNodeQuestion.nodes"),T=s()(t,"allNodeOwnerquestion.nodes"),I=s()(t,"allNodeAnswer.nodes"),D="ownerResponsePage",w=function(e){console.log("=========== setCurrentStep - step",e),C(Object.assign(Object.assign({},u),{},{step:e}))};switch(u.step){case r.q.QUESTION_POSED_BY_OWNER:p===r.f.DUDLEY&&(f=Object(l.f)(T,r.p.QUESTION_POSED_BY_OWNER_DUDLEY)),p===r.f.POPPY&&(f=Object(l.f)(T,r.p.QUESTION_POSED_BY_OWNER_POPPY)),p===r.f.REGGIE&&(f=Object(l.f)(T,r.p.QUESTION_POSED_BY_OWNER_REGGIE)),f.animationVideoName=getOwnerVideo(p),console.log(f);break;case r.q.QUESTION_POSED:p===r.f.DUDLEY&&(f=Object(l.f)(b,r.p.QUESTION_POSED_DUDLEY)),p===r.f.POPPY&&(f=Object(l.f)(b,r.p.QUESTION_POSED_POPPY)),p===r.f.REGGIE&&(f=Object(l.f)(b,r.p.QUESTION_POSED_REGGIE)),f.correctAnswerStep=r.q.CORRECT_ANSWER,f.incorrectAnswerStep=r.q.INCORRECT_ANSWER,f.animationVideoName=getOwnerVideo(p),console.log(f);break;case r.q.CORRECT_ANSWER:f=Object(l.f)(I,r.p.CORRECT_ANSWER);var P=Object(d.b)(f,p),g={answerHeader:f.field_answerheader?Object(l.i)(f.field_answerheader,p,!1):"",answerText:f.field_answertext?Object(l.i)(f.field_answertext,p,!0):"",additionalText:f.field_additionalbodytext?Object(l.i)(f.field_additionalbodytext,p,!0):"",isCorrectAnswer:f.field_iscorrectanswer[0],mainImage:Object(_.a)(r.b.HAPPY,p),slugName:r.p.CORRECT_ANSWER,continueLink:{uri:"/",title:"Continue",url:"/xray"},backLink:{uri:"/",title:"Back",url:"/"},accessibilityVideoText:"",buttonLinks:[],dogChoice:p};f=Object(d.f)(g,P),console.log(f);break;case r.q.INCORRECT_ANSWER:f=Object(l.f)(I,r.p.INCORRECT_ANSWER);var j=Object(d.b)(f,p),A=[{}];A[0].id="ownerresponsequestionposed1",A[0].title="Try again",A[0].url="/",A[0].onClickHandler=function(){w(r.q.QUESTION_POSED)},A[0].buttonType=r.l.DARK_BLUE_ROUNDED;var U={answerHeader:f.field_answerheader?Object(l.i)(f.field_answerheader,p,!1):"",answerText:f.field_answertext?Object(l.i)(f.field_answertext,p,!0):"",additionalText:f.field_additionalbodytext?Object(l.i)(f.field_additionalbodytext,p,!0):"",isCorrectAnswer:f.field_iscorrectanswer[0],mainImage:Object(_.a)(r.b.HAPPY,p),slugName:r.p.INCORRECT_ANSWER,continueLink:{uri:"/",title:"Continue",url:"/"},backLink:{uri:"/",title:"Back",url:"/"},accessibilityVideoText:"",buttonLinks:A,dogChoice:p};f=Object(d.f)(U,j),console.log(f);break;default:return"no current slide"}return console.log(f),f?(Object(i.useEffect)((function(){if(u.step===r.q.CORRECT_ANSWER){var e=Object(d.e)(r.u.RESPONDING_OWNER_INITIAL_QUESTION,p,a);console.log("============= "+e+" ============="),S(r.e.CASESTUDYS_ALL,e,{path:"/"})}}),[u.step]),o.a.createElement(O.a,null,u.step===r.q.QUESTION_POSED_BY_OWNER?o.a.createElement(E.a,{step:r.q.QUESTION_POSED_BY_OWNER,id:D,style:{display:"flex"},dogChoice:p,setCurrentStep:w,resources:f}):"",u.step===r.q.QUESTION_POSED?o.a.createElement(E.a,{step:r.q.QUESTION_POSED,id:D,style:{display:"flex"},dogChoice:p,setCurrentStep:w,resources:f}):"",u.step===r.q.CORRECT_ANSWER?o.a.createElement(E.a,{step:r.q.CORRECT_ANSWER,id:D,style:{display:"flex"},dogChoice:p,setCurrentStep:w,resources:f}):"",u.step===r.q.INCORRECT_ANSWER?o.a.createElement(E.a,{step:r.q.INCORRECT_ANSWER,id:D,style:{display:"flex"},dogChoice:p,setCurrentStep:function(e){w(r.q.QUESTION_POSED)},resources:f}):"")):"resources not found"};var S="860099289"}}]);
//# sourceMappingURL=component---src-pages-owner-response-js-fe7a37134ef90d3ed97c.js.map