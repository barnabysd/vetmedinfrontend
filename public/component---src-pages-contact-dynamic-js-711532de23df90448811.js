(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{NRRM:function(e,t,n){"use strict";n.r(t);n("pJf4"),n("E5k/"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("Wbzz"),n("vrFN");var a=n("q1tI"),r=n.n(a);var l=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).handleSubmit=function(e){var t;fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(t=Object.assign({"form-name":"contact"},n.state),Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"))}).then((function(){return alert("Success!")})).catch((function(e){return alert(e)})),e.preventDefault()},n.handleChange=function(e){var t;return n.setState(((t={})[e.target.name]=e.target.value,t))},n.state={name:"",email:"",message:""},n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.state,t=e.name,n=e.email,a=e.message;return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("p",null,r.a.createElement("label",null,"Your Name: ",r.a.createElement("input",{type:"text",name:"name",value:t,onChange:this.handleChange}))),r.a.createElement("p",null,r.a.createElement("label",null,"Your Email: ",r.a.createElement("input",{type:"email",name:"email",value:n,onChange:this.handleChange}))),r.a.createElement("p",null,r.a.createElement("label",null,"Message: ",r.a.createElement("textarea",{name:"message",value:a,onChange:this.handleChange}))),r.a.createElement("p",null,r.a.createElement("button",{type:"submit"},"Send")))},a}(r.a.Component);t.default=l}}]);
//# sourceMappingURL=component---src-pages-contact-dynamic-js-711532de23df90448811.js.map