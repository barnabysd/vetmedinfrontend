(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"/ybW":function(e,t,o){"use strict";o.r(t),o.d(t,"pageQuery",(function(){return i}));o("E5k/");var n=o("q1tI"),c=o.n(n),r=o("Bl7J"),E=(o("zDcZ"),o("R/WZ")),a=(o("tRbT"),o("ILeL"),o("3ksh"),o("r5vi")),s=(o("xvYo"),o("C/KN"),o("5lfk"),o("ooR/")),R=o("mwIZ"),C=o.n(R),O=o("a5sw"),T=o("itCy"),A=(o("tzB8"),o("7TWv"));Object(E.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));t.default=function(e){var t=e.data,o=Object(a.a)([T.e.DOG_CHOICE,T.e.CASESTUDYS_ALL]),E=o[0],R=o[1],i=(o[2],E.dogChoice?E.dogChoice:T.f.DUDLEY),S={step:T.A.QUESTION_POSED},u=Object(n.useState)(S),I=u[0];u[1],Object(n.useEffect)((function(){if(I.step===T.A.CORRECT_VETMEDIN){var e=Object(A.e)(T.r.WHICH_TREATMENT,i,E);console.log("============= "+e+" ============="),R(T.e.CASESTUDYS_ALL,e,{path:"/"})}}),[I.step]);var N=C()(t,"allNodeQuestion.nodes"),_=C()(t,"allNodeAnswer.nodes"),l=null;switch(I.step){case T.A.QUESTION_POSED:l=Object(O.f)(N,T.z.QUESTION_POSED);break;case T.A.CORRECT_VETMEDIN:l=Object(O.f)(_,T.z.CORRECT_VETMEDIN);break;case T.A.INCORRECT_ANSWER_ACE:l=Object(O.f)(_,T.z.INCORRECT_ANSWER_ACE);break;case T.A.INCORRECT_ANSWER_SPIRO:l=Object(O.f)(_,T.z.INCORRECT_ANSWER_SPIRO);break;case T.A.INCORRECT_ANSWER_ALL_DIURETICS:l=Object(O.f)(_,T.z.INCORRECT_ANSWER_ALL_DIURETICS);break;default:return"no current slide"}return console.log("=========== current Step - step ",I.step),console.log(l),l?"NO_DATA_FOUND"==l?"resources not found":c.a.createElement(r.a,{headerText:"TEMP PAGE - WHICH TREATMENT IN PROGRESS",showPercentIndicator:!0},c.a.createElement(s.a,{to:"/certificate-request/",distanceFromSide:"2%",bottom:"2%",direction:T.c.FORWARD,linkText:"Continue"})):"resources not found"};var i="3124856518"}}]);
//# sourceMappingURL=component---src-pages-which-treatment-js-e23913ef39dd4765d6ae.js.map