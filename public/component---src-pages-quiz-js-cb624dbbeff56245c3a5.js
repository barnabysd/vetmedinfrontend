(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{BTad:function(t,e,n){},Bl7J:function(t,e,n){"use strict";var r=n("IRj2"),s=n("q1tI"),i=n.n(s),o=n("zyEs"),a=(n("LbRr"),n("8ypT"),n("zDcZ")),u=n("qKvR");e.a=function(t){var e,n,c,l=t.children,d=(e=Object(s.useState)([0,0]),n=e[0],c=e[1],Object(s.useLayoutEffect)((function(){function t(){c([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",t),t(),function(){return window.removeEventListener("resize",t)}}),[]),n),p=(d[0],d[1],r.data,{backgroundColor:a.a.palette.background.lightBlue,minWidth:"100%",height:"100vh",minHeight:"100vh",border:"0px solid yellow",overflow:"hidden"});return Object(u.b)(i.a.Fragment,null,Object(u.b)(o.a,null,Object(u.b)("div",{style:p},Object(u.b)("main",null,l))))}},EH9Q:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Vetmedin","description":"website description","author":"@barnabysd"}}}}')},GCOq:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),s=n("Wbzz"),i=n("Bl7J"),o=n("vrFN"),a=(n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("E5k/"),[{question:"Which dog toy is best?",answers:[{type:"Pug",content:"Bone"},{type:"Rottweiller",content:"Squeaky Toy"},{type:"Labrador",content:"slipper"}]},{question:"Which dog trick is best?",answers:[{type:"Pug",content:"Roll over"},{type:"Rottweiller",content:"Sit"},{type:"Labrador",content:"Jump"}]}]),u=n("1w3K"),c=n("qKvR");var l=function(t){return Object(c.b)("h2",{className:"question"},t.content)};var d=function(t){return Object(c.b)("div",{className:"questionCount"},"Question ",Object(c.b)("span",null,t.counter)," of ",Object(c.b)("span",null,t.total))};var p=function(t){return Object(c.b)("li",{className:"answerOption"},Object(c.b)("input",{type:"radio",className:"radioCustomButton",name:"radioGroup",checked:t.answerType===t.answer,id:t.answerType,value:t.answerType,disabled:t.answer,onChange:t.onAnswerSelected}),Object(c.b)("label",{className:"radioCustomLabel",htmlFor:t.answerType},t.answerContent))};var b=function(t){return Object(c.b)(u.CSSTransitionGroup,{className:"container",component:"div",transitionName:"fade",transitionEnterTimeout:800,transitionLeaveTimeout:500,transitionAppear:!0,transitionAppearTimeout:500},Object(c.b)("div",{key:t.questionId},Object(c.b)(d,{counter:t.questionId,total:t.questionTotal}),Object(c.b)(l,{content:t.question}),Object(c.b)("ul",{className:"answerOptions"},t.answerOptions.map((function(e){return Object(c.b)(p,{key:e.content,answerContent:e.content,answerType:e.type,answer:t.answer,questionId:t.questionId,onAnswerSelected:t.onAnswerSelected})})))))};var w=function(t){return Object(c.b)(u.CSSTransitionGroup,{className:"container result",component:"div",transitionName:"fade",transitionEnterTimeout:800,transitionLeaveTimeout:500,transitionAppear:!0,transitionAppearTimeout:500},Object(c.b)("div",null,"You prefer ",Object(c.b)("strong",null,t.quizResult),"!"))};n("BTad");var h=function(t){var e,n;function r(e){var n;return(n=t.call(this,e)||this).state={counter:0,questionId:1,question:"",answerOptions:[],answer:"",answersCount:{},result:""},n.handleAnswerSelected=n.handleAnswerSelected.bind(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n)),n}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var s=r.prototype;return s.componentDidMount=function(){var t=this,e=a.map((function(e){return t.shuffleArray(e.answers)}));this.setState({question:a[0].question,answerOptions:e[0]})},s.shuffleArray=function(t){for(var e,n,r=t.length;0!==r;)n=Math.floor(Math.random()*r),e=t[r-=1],t[r]=t[n],t[n]=e;return t},s.handleAnswerSelected=function(t){var e=this;this.setUserAnswer(t.currentTarget.value),this.state.questionId<a.length?setTimeout((function(){return e.setNextQuestion()}),300):setTimeout((function(){return e.setResults(e.getResults())}),300)},s.setUserAnswer=function(t){this.setState((function(e,n){var r;return{answersCount:Object.assign(Object.assign({},e.answersCount),{},(r={},r[t]=(e.answersCount[t]||0)+1,r)),answer:t}}))},s.setNextQuestion=function(){var t=this.state.counter+1,e=this.state.questionId+1;this.setState({counter:t,questionId:e,question:a[t].question,answerOptions:a[t].answers,answer:""})},s.getResults=function(){var t=this.state.answersCount,e=Object.keys(t),n=e.map((function(e){return t[e]})),r=Math.max.apply(null,n);return e.filter((function(e){return t[e]===r}))},s.setResults=function(t){1===t.length?this.setState({result:t[0]}):this.setState({result:"Undetermined"})},s.renderQuiz=function(){return Object(c.b)(b,{answer:this.state.answer,answerOptions:this.state.answerOptions,questionId:this.state.questionId,question:this.state.question,questionTotal:a.length,onAnswerSelected:this.handleAnswerSelected})},s.renderResult=function(){return Object(c.b)(w,{quizResult:this.state.result})},s.render=function(){return Object(c.b)("div",{className:"App"},Object(c.b)("div",{className:"App-header"},Object(c.b)("h2",null,"Case Study - Quiz")),this.state.result?this.renderResult():this.renderQuiz())},r}(r.Component);e.default=function(){return Object(c.b)(i.a,null,Object(c.b)(o.a,{title:"Quiz"}),Object(c.b)(h,null),Object(c.b)(s.Link,{to:"/"},"Back to home"))}},IRj2:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Vetmedin"}}}}')},vrFN:function(t,e,n){"use strict";var r=n("EH9Q"),s=(n("q1tI"),n("qhky")),i=n("qKvR");function o(t){var e=t.description,n=t.lang,o=t.meta,a=t.title,u=r.data.site,c=e||u.siteMetadata.description;return Object(i.b)(s.a,{htmlAttributes:{lang:n},title:a,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:a},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:a},{name:"twitter:description",content:c}].concat(o)})}o.defaultProps={lang:"en",meta:[],description:""},e.a=o}}]);
//# sourceMappingURL=component---src-pages-quiz-js-cb624dbbeff56245c3a5.js.map