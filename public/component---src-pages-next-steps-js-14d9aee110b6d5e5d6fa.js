(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"5rFP":function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return _}));n("E5k/");var o=n("q1tI"),E=n.n(o),c=n("Bl7J"),r=(n("zDcZ"),n("R/WZ")),a=(n("tRbT"),n("ILeL"),n("3ksh"),n("r5vi")),R=(n("xvYo"),n("C/KN"),n("5lfk"),n("7TWv")),T=n("ooR/"),s=n("mwIZ"),C=n.n(s),S=n("a5sw"),O=n("itCy");n("tzB8"),Object(r.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));t.default=function(e){var t=e.data,n=Object(a.a)([O.e.DOG_CHOICE,O.e.CASESTUDYS_ALL]),r=n[0],s=n[1],_=(n[2],r.dogChoice?r.dogChoice:O.f.DUDLEY),i={step:O.n.QUESTION_POSED},A=Object(o.useState)(i),u=A[0];A[1],Object(o.useEffect)((function(){if(u.step===O.n.CORRECT_ANSWER_RECHECK||u.step===O.n.CORRECT_ANSWER_START_TREATMENT){var e=Object(R.e)(O.r.NEXT_STEPS,_,r);console.log("============= "+e+" ============="),s(O.e.CASESTUDYS_ALL,e,{path:"/"})}}),[u.step]);var l=C()(t,"allNodeQuestion.nodes"),d=C()(t,"allNodeAnswer.nodes"),N=null;switch(u.step){case O.n.QUESTION_POSED:N=Object(S.f)(l,O.m.QUESTION_POSED);break;case O.n.CORRECT_ANSWER_RECHECK:N=Object(S.f)(d,O.m.CORRECT_ANSWER_RECHECK);case O.n.CORRECT_ANSWER_START_TREATMENT:N=Object(S.f)(d,O.m.CORRECT_ANSWER_START_TREATMENT);break;case O.n.INCORRECT_ALL_CLEAR:N=Object(S.f)(d,O.m.INCORRECT_ALL_CLEAR);break;default:return"no current slide"}return console.log("=========== current Step - step ",u.step),console.log(N),N?"NO_DATA_FOUND"==N?"resources not found":E.a.createElement(c.a,{headerText:"TEMP PAGE - NEXT STEPS IN PROGRESS",showPercentIndicator:!0},E.a.createElement(T.a,{to:"/which-treatment/",distanceFromSide:"2%",bottom:"2%",direction:O.c.FORWARD,linkText:"Continue"})):"resources not found"};var _="3124856518"}}]);
//# sourceMappingURL=component---src-pages-next-steps-js-14d9aee110b6d5e5d6fa.js.map