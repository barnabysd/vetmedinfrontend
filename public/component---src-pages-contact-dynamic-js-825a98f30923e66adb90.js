(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{EH9Q:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Vetmedin","description":"website description","author":"@barnabysd"}}}}')},NRRM:function(t,e,n){"use strict";n.r(e);n("pJf4"),n("E5k/"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("Wbzz"),n("vrFN");var a=n("q1tI"),r=n.n(a),o=n("qKvR");var i=function(t){var e,n;function a(e){var n;return(n=t.call(this,e)||this).handleSubmit=function(t){var e;fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(e=Object.assign({"form-name":"contact"},n.state),Object.keys(e).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&"))}).then((function(){return alert("Success!")})).catch((function(t){return alert(t)})),t.preventDefault()},n.handleChange=function(t){var e;return n.setState(((e={})[t.target.name]=t.target.value,e))},n.state={name:"",email:"",message:""},n}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){var t=this.state,e=t.name,n=t.email,a=t.message;return Object(o.b)("form",{onSubmit:this.handleSubmit},Object(o.b)("p",null,Object(o.b)("label",null,"Your Name: ",Object(o.b)("input",{type:"text",name:"name",value:e,onChange:this.handleChange}))),Object(o.b)("p",null,Object(o.b)("label",null,"Your Email: ",Object(o.b)("input",{type:"email",name:"email",value:n,onChange:this.handleChange}))),Object(o.b)("p",null,Object(o.b)("label",null,"Message: ",Object(o.b)("textarea",{name:"message",value:a,onChange:this.handleChange}))),Object(o.b)("p",null,Object(o.b)("button",{type:"submit"},"Send")))},a}(r.a.Component);e.default=i},vrFN:function(t,e,n){"use strict";var a=n("EH9Q"),r=(n("q1tI"),n("qhky")),o=n("qKvR");function i(t){var e=t.description,n=t.lang,i=t.meta,c=t.title,s=a.data.site,l=e||s.siteMetadata.description;return Object(o.b)(r.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:l}].concat(i)})}i.defaultProps={lang:"en",meta:[],description:""},e.a=i}}]);
//# sourceMappingURL=component---src-pages-contact-dynamic-js-825a98f30923e66adb90.js.map