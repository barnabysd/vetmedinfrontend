(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{KeYd:function(e,t,s){"use strict";s.r(t),s.d(t,"pageQuery",(function(){return S}));s("E5k/");var i=s("q1tI"),a=s.n(i),n=s("mwIZ"),r=s.n(n),o=(s("zDcZ"),s("itCy")),c=s("a5sw"),O=s("r5vi"),E=s("KGtl"),l=s("Bl7J"),d=(s("Sx81"),s("7TWv")),_=s("DTFT");t.default=function(e){var t=e.data;console.log(t);var s=Object(O.a)([o.f.DOG_CHOICE,o.f.CASESTUDYS_ALL]),n=s[0],S=s[1],N=(s[2],{step:o.t.SECTION_INTRO}),R=Object(i.useState)(N),C=R[0],u=R[1];console.log("=========== step ",C.step),console.log("state",C);var T,b=n.dogChoice?n.dogChoice:o.g.DUDLEY,f=r()(t,"allNodeQuestion.nodes"),p=r()(t,"allNodeSectionintroduction.nodes"),I=r()(t,"allNodeOwnerquestion.nodes"),g=r()(t,"allNodeAnswer.nodes"),D="ownerResponsePage",w=function(e){console.log("=========== setCurrentStep - step",e),u(Object.assign(Object.assign({},C),{},{step:e}))};switch(Object(i.useEffect)((function(){if(C.step===o.t.CORRECT_ANSWER){var e=Object(d.e)(o.v.REASSURING_OWNER,b,n);console.log("============= "+e+" ============="),S(o.f.CASESTUDYS_ALL,e,{path:"/"})}}),[C.step]),C.step){case o.t.SECTION_INTRO:T=Object(c.f)(p,o.s.SECTION_INTRO);break;case o.t.QUESTION_POSED_BY_OWNER:b===o.g.DUDLEY&&(T=Object(c.f)(I,o.s.QUESTION_POSED_BY_OWNER_DUDLEY)),b===o.g.REGGIE&&(T=Object(c.f)(I,o.s.QUESTION_POSED_BY_OWNER_REGGIE)),b===o.g.POPPY&&(T=Object(c.f)(I,o.s.QUESTION_POSED_BY_OWNER_POPPY)),T.animationVideoName=Object(_.e)(b);break;case o.t.QUESTION_POSED:b===o.g.DUDLEY&&(T=Object(c.f)(f,o.s.QUESTION_POSED_DUDLEY)),b===o.g.REGGIE&&(T=Object(c.f)(f,o.s.QUESTION_POSED_REGGIE)),b===o.g.POPPY&&(T=Object(c.f)(f,o.s.QUESTION_POSED_POPPY)),T.correctAnswerStep=o.t.CORRECT_ANSWER,T.incorrectAnswerStep=o.t.INCORRECT_ANSWER,T.animationVideoName=Object(_.e)(b);break;case o.t.CORRECT_ANSWER:T=Object(c.f)(g,o.s.CORRECT_ANSWER);var j=Object(d.b)(T,b),P={answerHeader:T.field_answerheader?Object(c.i)(T.field_answerheader,b,!1):"",answerText:T.field_answertext?Object(c.i)(T.field_answertext,b,!0):"",additionalText:T.field_additionalbodytext?Object(c.i)(T.field_additionalbodytext,b,!0):"",isCorrectAnswer:T.field_iscorrectanswer[0],mainImage:Object(_.a)(o.c.HAPPY,b),slugName:o.s.CORRECT_ANSWER,continueLink:{uri:"/",title:"Continue",url:"/certificate-request"},backLink:{uri:"/",title:"Back",url:"/"},accessibilityVideoText:"",buttonLinks:[],dogChoice:b};T=Object(d.f)(P,j),console.log(T);break;case o.t.INCORRECT_ANSWER:T=Object(c.f)(g,o.s.INCORRECT_ANSWER);var A=Object(d.b)(T,b),U=[{}];U[0].id="ownertreatmentquestionposed1",U[0].title="Try again",U[0].url="/",U[0].onClickHandler=function(){w(o.t.QUESTION_POSED)},U[0].buttonType=o.m.DARK_BLUE_ROUNDED;var W={answerHeader:T.field_answerheader?Object(c.i)(T.field_answerheader,b,!1):"",answerText:T.field_answertext?Object(c.i)(T.field_answertext,b,!0):"",additionalText:T.field_additionalbodytext?Object(c.i)(T.field_additionalbodytext,b,!0):"",isCorrectAnswer:T.field_iscorrectanswer[0],mainImage:Object(_.a)(o.c.SAD,b),slugName:o.s.INCORRECT_ANSWER,continueLink:{uri:"/",title:"Continue",url:"/"},backLink:{uri:"/",title:"Back",url:"/"},accessibilityVideoText:"",buttonLinks:U,dogChoice:b};T=Object(d.f)(W,A),console.log(T);break;default:return"no current slide"}return console.log(T),T?a.a.createElement(l.a,null,C.step===o.t.SECTION_INTRO?a.a.createElement(E.a,{step:o.t.SECTION_INTRO,id:D,style:{display:"flex"},dogChoice:b,setCurrentStep:w,resources:T}):"",C.step===o.t.QUESTION_POSED_BY_OWNER?a.a.createElement(E.a,{step:o.t.QUESTION_POSED_BY_OWNER,id:D,style:{display:"flex"},dogChoice:b,setCurrentStep:w,resources:T}):"",C.step===o.t.QUESTION_POSED?a.a.createElement(E.a,{step:o.t.QUESTION_POSED,id:D,style:{display:"flex"},dogChoice:b,setCurrentStep:w,resources:T}):"",C.step===o.t.CORRECT_ANSWER?a.a.createElement(E.a,{step:o.t.CORRECT_ANSWER,id:D,style:{display:"flex"},dogChoice:b,setCurrentStep:w,resources:T}):"",C.step===o.t.INCORRECT_ANSWER?a.a.createElement(E.a,{step:o.t.INCORRECT_ANSWER,id:D,style:{display:"flex"},dogChoice:b,setCurrentStep:function(e){w(o.t.QUESTION_POSED)},resources:T}):""):"resources not found"};var S="356172031"}}]);
//# sourceMappingURL=component---src-pages-owner-treatment-options-js-09badea5352bbc37a389.js.map