(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{M4Fi:function(e,t,r){"use strict";r.r(t),r.d(t,"pageQuery",(function(){return S}));var i=r("q1tI"),n=r.n(i),a=r("mwIZ"),s=r.n(a),o=(r("zDcZ"),r("itCy")),c=r("r5vi"),E=r("KGtl"),O=r("Bl7J"),l=r("a5sw"),d=r("7TWv"),_=r("DTFT");t.default=function(e){var t=e.data;console.log(t);var r=Object(c.a)([o.f.DOG_CHOICE,o.f.CASESTUDYS_ALL]),a=r[0],S=r[1],R=(r[2],{step:o.r.QUESTION_POSED_BY_OWNER}),N=Object(i.useState)(R),u=N[0],C=N[1];console.log("=========== step ",u.step),console.log("state",u);var b,f=a.dogChoice?a.dogChoice:o.g.DUDLEY,T=s()(t,"allNodeQuestion.nodes"),p=s()(t,"allNodeOwnerquestion.nodes"),D=s()(t,"allNodeAnswer.nodes"),I="ownerResponsePage",g=function(e){console.log("=========== setCurrentStep - step",e),C(Object.assign({},u,{step:e}))};switch(u.step){case o.r.QUESTION_POSED_BY_OWNER:f===o.g.DUDLEY&&(b=Object(l.f)(p,o.q.QUESTION_POSED_BY_OWNER_DUDLEY)),f===o.g.POPPY&&(b=Object(l.f)(p,o.q.QUESTION_POSED_BY_OWNER_POPPY)),f===o.g.REGGIE&&(b=Object(l.f)(p,o.q.QUESTION_POSED_BY_OWNER_REGGIE)),b.animationVideoName=Object(_.e)(f);break;case o.r.QUESTION_POSED:f===o.g.DUDLEY&&(b=Object(l.f)(T,o.q.QUESTION_POSED_DUDLEY)),f===o.g.POPPY&&(b=Object(l.f)(T,o.q.QUESTION_POSED_POPPY)),f===o.g.REGGIE&&(b=Object(l.f)(T,o.q.QUESTION_POSED_REGGIE)),b.correctAnswerStep=o.r.CORRECT_ANSWER,b.incorrectAnswerStep=o.r.INCORRECT_ANSWER,b.animationVideoName=Object(_.e)(f),console.log(b);break;case o.r.CORRECT_ANSWER:b=Object(l.f)(D,o.q.CORRECT_ANSWER);var w=Object(d.c)(b,f),P={answerHeader:b.field_answerheader?Object(l.i)(b.field_answerheader,f,!1):"",answerText:b.field_answertext?Object(l.i)(b.field_answertext,f,!0):"",additionalText:b.field_additionalbodytext?Object(l.i)(b.field_additionalbodytext,f,!0):"",isCorrectAnswer:b.field_iscorrectanswer[0],mainImage:Object(_.a)(o.c.HAPPY,f),slugName:o.q.CORRECT_ANSWER,continueLink:{uri:"/",title:"Continue",url:"/xray"},backLink:{uri:"/",title:"Back",url:"/"},accessibilityVideoText:"",buttonLinks:[],dogChoice:f};b=Object(d.i)(P,w),console.log(b);break;case o.r.INCORRECT_ANSWER:b=Object(l.f)(D,o.q.INCORRECT_ANSWER);var j=Object(d.c)(b,f),A=[{}];A[0].id="ownerresponsequestionposed1",A[0].title="Try again",A[0].url="/",A[0].onClickHandler=function(){g(o.r.QUESTION_POSED)},A[0].buttonType=o.m.DARK_BLUE_ROUNDED;var U={answerHeader:b.field_answerheader?Object(l.i)(b.field_answerheader,f,!1):"",answerText:b.field_answertext?Object(l.i)(b.field_answertext,f,!0):"",additionalText:b.field_additionalbodytext?Object(l.i)(b.field_additionalbodytext,f,!0):"",isCorrectAnswer:b.field_iscorrectanswer[0],mainImage:Object(_.a)(o.c.SAD,f),slugName:o.q.INCORRECT_ANSWER,continueLink:{uri:"/",title:"Continue",url:"/"},backLink:{uri:"/",title:"Back",url:"/"},accessibilityVideoText:"",buttonLinks:A,dogChoice:f};b=Object(d.i)(U,j),console.log(b);break;default:return"no current slide"}return console.log(b),b?(Object(i.useEffect)((function(){if(u.step===o.r.CORRECT_ANSWER){var e=Object(d.f)(o.v.RESPONDING_OWNER_INITIAL_QUESTION,f,a);console.log("============= "+e+" ============="),S(o.f.CASESTUDYS_ALL,e,{path:"/"})}}),[u.step]),n.a.createElement(O.a,null,u.step===o.r.QUESTION_POSED_BY_OWNER?n.a.createElement(E.a,{step:o.r.QUESTION_POSED_BY_OWNER,id:I,style:{display:"flex"},dogChoice:f,setCurrentStep:g,resources:b}):"",u.step===o.r.QUESTION_POSED?n.a.createElement(E.a,{step:o.r.QUESTION_POSED,id:I,style:{display:"flex"},dogChoice:f,setCurrentStep:g,resources:b}):"",u.step===o.r.CORRECT_ANSWER?n.a.createElement(E.a,{step:o.r.CORRECT_ANSWER,id:I,style:{display:"flex"},dogChoice:f,setCurrentStep:g,resources:b}):"",u.step===o.r.INCORRECT_ANSWER?n.a.createElement(E.a,{step:o.r.INCORRECT_ANSWER,id:I,style:{display:"flex"},dogChoice:f,setCurrentStep:function(e){g(o.r.QUESTION_POSED)},resources:b}):"")):"resources not found"};var S="3747504502"}}]);
//# sourceMappingURL=component---src-pages-owner-response-js-3d0c117fdf4d8f7d050f.js.map