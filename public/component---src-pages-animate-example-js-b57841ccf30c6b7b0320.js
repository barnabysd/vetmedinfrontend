(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{Bl7J:function(t,e,n){"use strict";var a=n("IRj2"),o=n("q1tI"),r=n.n(o),i=n("zyEs"),s=(n("LbRr"),n("8ypT"),n("zDcZ")),c=n("qKvR");e.a=function(t){var e=t.children,n=t.scrollablePage,o=void 0!==n&&n,u=t.backgroundColor,l=void 0===u?s.a.palette.background.lightBlue:u;a.data;return o&&{backgroundColor:l,minWidth:"100%"},Object(c.c)(r.a.Fragment,null,Object(c.c)(i.a,null,Object(c.c)("div",{className:"pageContainer"},Object(c.c)("main",null,e))))}},EH9Q:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Vetmedin","description":"website description","author":"@barnabysd"}}}}')},IRj2:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Vetmedin"}}}}')},mVle:function(t,e,n){"use strict";n.r(e);var a=n("Wbzz"),o=n("z/o8"),r=n("pc+1"),i=n("Bl7J"),s=n("vrFN"),c=n("q1tI"),u=n.n(c),l=(n("+ZDr"),n("qKvR"));function p(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var d=function(t){function e(e){var n;return(n=t.call(this,e)||this).restart=function(){n.tl.restart(),n.tl.pause(),n.props.onRestart()},n.state={count:0},n._count=0,n}p(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this;o.TweenMax.to(this,5,{_count:100,onUpdate:function(){return t.setState({count:~~t._count})},repeat:-1,yoyo:!0,ease:r.h.easeNone}),this.tl=new r.u({onComplete:this.restart}),this.tl.to(this.box,1,{rotation:45}),this.tl.to(this.box,.5,{rotation:0}),this.tl.to(this.box,1,{scaleX:-1,yoyo:!0,repeat:1}),this.tl.pause()},n.componentDidUpdate=function(t){t.animate!==this.props.animate&&(this.props.animate?this.tl.resume():this.tl.pause()),t.restart!==this.props.restart&&!0===this.props.restart&&this.restart()},n.render=function(){var t=this;return Object(l.c)("div",{className:"Box",ref:function(e){return t.box=e}},this.state.count)},e}(u.a.Component),h=function(t){function e(e){var n;return(n=t.call(this,e)||this).toggle=function(){return n.setState({animate:!n.state.animate})},n.onRestart=function(){return n.setState({animate:!1})},n.state={animate:!1},n}return p(e,t),e.prototype.render=function(){return Object(l.c)("div",null,Object(l.c)(d,{animate:this.state.animate,restart:this.state.restart,onRestart:this.onRestart}),Object(l.c)("p",null,"Actions below control timeline (intentionally seperate from counter)"),Object(l.c)("a",{href:"#",onClick:this.toggle},this.state.animate?"Pause timeline":"Start timeline"))},e}(u.a.Component);e.default=function(){return Object(l.c)(i.a,null,Object(l.c)(s.a,{title:"About"}),Object(l.c)("h1",null,"About"),Object(l.c)(h,null),Object(l.c)(a.Link,{to:"/"},"Back to home"))}},vrFN:function(t,e,n){"use strict";var a=n("EH9Q"),o=(n("q1tI"),n("qhky")),r=n("qKvR");function i(t){var e=t.description,n=t.lang,i=t.meta,s=t.title,c=a.data.site,u=e||c.siteMetadata.description;return Object(r.c)(o.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(i)})}i.defaultProps={lang:"en",meta:[],description:""},e.a=i}}]);
//# sourceMappingURL=component---src-pages-animate-example-js-b57841ccf30c6b7b0320.js.map