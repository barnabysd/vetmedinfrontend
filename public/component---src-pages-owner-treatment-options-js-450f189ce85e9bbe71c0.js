(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{KeYd:function(e,t,s){"use strict";s.r(t),s.d(t,"pageQuery",(function(){return d}));s("E5k/");var o=s("q1tI"),n=s.n(o),r=s("mwIZ"),a=s.n(r),c=(s("zDcZ"),s("itCy")),E=s("a5sw"),i=s("r5vi"),l=s("KGtl"),O=s("Bl7J"),S=s("Sx81"),p=s("7TWv");t.default=function(e){var t=e.data;console.log(t);var s=Object(i.a)([c.c.DOG_CHOICE,c.c.CASESTUDYS_ALL]),r=s[0],d=s[1],u=(s[2],{step:c.k.SECTION_INTRO}),C=Object(o.useState)(u),N=C[0],R=C[1];console.log("=========== step ",N.step),console.log("state",N);var _,k=r.dogChoice?r.dogChoice:c.d.DUDLEY,T=a()(t,"allNodeQuestion.nodes"),I=a()(t,"allNodeSectionintroduction.nodes"),b=a()(t,"allNodeOwnerquestion.nodes"),f="ownerResponsePage",g=function(e){console.log("=========== setCurrentStep - step",e),R(Object.assign(Object.assign({},N),{},{step:e}))};switch(Object(o.useEffect)((function(){if(N.step===c.k.CORRECT_ANSWER){var e=Object(p.b)(c.m.REASSURING_OWNER,k,r);console.log("============= "+e+" ============="),d(c.c.CASESTUDYS_ALL,e,{path:"/"})}}),[N.step]),N.step){case c.k.SECTION_INTRO:_=Object(E.e)(I,"treatment-options-section-main-introduction");break;case c.k.QUESTION_POSED_BY_OWNER:_=Object(E.e)(b,"owner-question-is-dudley-ok");break;case c.k.QUESTION_POSED:_=Object(E.e)(T,"owner-treatment-options");break;case c.k.CORRECT_ANSWER:_=S.h;break;case c.k.INCORRECT_ANSWER:_=S.i;break;default:return"no current slide"}return console.log(_),_?n.a.createElement(O.a,null,N.step===c.k.SECTION_INTRO?n.a.createElement(l.a,{step:c.k.SECTION_INTRO,id:f,style:{display:"flex"},dogChoice:k,setCurrentStep:g,resources:_}):"",N.step===c.k.QUESTION_POSED_BY_OWNER?n.a.createElement(l.a,{step:c.k.QUESTION_POSED_BY_OWNER,id:f,style:{display:"flex"},dogChoice:k,setCurrentStep:g,resources:_}):"",N.step===c.k.QUESTION_POSED?n.a.createElement(l.a,{step:c.k.QUESTION_POSED,id:f,style:{display:"flex"},dogChoice:k,setCurrentStep:g,resources:_}):"",N.step===c.k.CORRECT_ANSWER?n.a.createElement(l.a,{step:c.k.CORRECT_ANSWER,id:f,style:{display:"flex"},dogChoice:k,setCurrentStep:g,resources:_}):"",N.step===c.k.INCORRECT_ANSWER?n.a.createElement(l.a,{step:c.k.INCORRECT_ANSWER,id:f,style:{display:"flex"},dogChoice:k,setCurrentStep:function(e){g(c.k.QUESTION_POSED)},resources:_}):""):"resources not found"};var d="688011157"}}]);
//# sourceMappingURL=component---src-pages-owner-treatment-options-js-450f189ce85e9bbe71c0.js.map