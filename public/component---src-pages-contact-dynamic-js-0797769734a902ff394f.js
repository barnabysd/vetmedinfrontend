(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{EH9Q:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Vetmedin","description":"website description","author":"@barnabyfb"}}}}')},NRRM:function(e,t,n){"use strict";n.r(t);n("pJf4"),n("E5k/"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("Wbzz"),n("vrFN");var a=n("q1tI"),r=n.n(a);var o=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).handleSubmit=function(e){var t;fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(t=Object.assign({"form-name":"contact"},n.state),Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"))}).then((function(){return alert("Success!")})).catch((function(e){return alert(e)})),e.preventDefault()},n.handleChange=function(e){var t;return n.setState(((t={})[e.target.name]=e.target.value,t))},n.state={name:"",email:"",message:""},n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.state,t=e.name,n=e.email,a=e.message;return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("p",null,r.a.createElement("label",null,"Your Name: ",r.a.createElement("input",{type:"text",name:"name",value:t,onChange:this.handleChange}))),r.a.createElement("p",null,r.a.createElement("label",null,"Your Email: ",r.a.createElement("input",{type:"email",name:"email",value:n,onChange:this.handleChange}))),r.a.createElement("p",null,r.a.createElement("label",null,"Message: ",r.a.createElement("textarea",{name:"message",value:a,onChange:this.handleChange}))),r.a.createElement("p",null,r.a.createElement("button",{type:"submit"},"Send")))},a}(r.a.Component);t.default=o},vrFN:function(e,t,n){"use strict";var a=n("EH9Q"),r=n("q1tI"),o=n.n(r),i=n("qhky");function l(e){var t=e.description,n=e.lang,r=e.meta,l=e.title,c=a.data.site,s=t||c.siteMetadata.description;return o.a.createElement(i.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:l},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:s}].concat(r)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l}}]);
//# sourceMappingURL=component---src-pages-contact-dynamic-js-0797769734a902ff394f.js.map