(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"+bOE":function(t,n,r){var e=r("Drra"),o=r("P8UN"),i=r("1a8y");o(o.S,"Reflect",{getOwnPropertyDescriptor:function(t,n){return e.f(i(t),n)}})},"16Xr":function(t,n,r){"use strict";var e=r("nONw"),o=r("BjK0"),i=r("+wZX"),u=[].slice,a={},c=function(t,n,r){if(!(n in a)){for(var e=[],o=0;o<n;o++)e[o]="a["+o+"]";a[n]=Function("F,a","return new F("+e.join(",")+")")}return a[n](t,r)};t.exports=Function.bind||function(t){var n=e(this),r=u.call(arguments,1),a=function(){var e=r.concat(u.call(arguments));return this instanceof a?c(n,e.length,e):i(n,e,t)};return o(n.prototype)&&(a.prototype=n.prototype),a}},"5irr":function(t,n,r){r("Sc3u")("Float32",4,(function(t){return function(n,r,e){return t(this,n,r,e)}}))},"7W2i":function(t,n,r){var e=r("SksO");t.exports=function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&e(t,n)}},Bnag:function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},ELYx:function(t,n,r){var e=r("Drra"),o=r("ltAs"),i=r("qDzq"),u=r("P8UN"),a=r("BjK0"),c=r("1a8y");u(u.S,"Reflect",{get:function t(n,r){var u,f,s=arguments.length<3?n:arguments[2];return c(n)===s?n[r]:(u=e.f(n,r))?i(u,"value")?u.value:void 0!==u.get?u.get.call(s):void 0:a(f=o(n))?t(f,r,s):void 0}})},EbDI:function(t,n){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},FRcj:function(t,n,r){var e=r("P8UN");e(e.S,"Reflect",{has:function(t,n){return n in t}})},Fdud:function(t,n,r){var e=r("P8UN"),o=Math.imul;e(e.S+e.F*r("96qb")((function(){return-5!=o(4294967295,5)||2!=o.length})),"Math",{imul:function(t,n){var r=+t,e=+n,o=65535&r,i=65535&e;return 0|o*i+((65535&r>>>16)*i+o*(65535&e>>>16)<<16>>>0)}})},HQAx:function(t,n,r){"use strict";var e=r("P8UN"),o=r("ewoU"),i=r("DFzH"),u=r("kiRH"),a=r("nONw"),c=r("ytzU");e(e.P,"Array",{flatMap:function(t){var n,r,e=i(this);return a(t),n=u(e.length),r=c(e,0),o(r,e,e,n,0,1,t,arguments[1]),r}}),r("Dq1/")("flatMap")},IJWR:function(t,n,r){var e=r("P8UN");e(e.S,"Reflect",{ownKeys:r("uSBc")})},Ijbi:function(t,n,r){var e=r("WkPL");t.exports=function(t){if(Array.isArray(t))return e(t)}},J4zp:function(t,n,r){var e=r("wTVA"),o=r("m0LI"),i=r("ZhPi"),u=r("wkBT");t.exports=function(t,n){return e(t)||o(t,n)||i(t,n)||u()}},Nsbk:function(t,n){function r(n){return t.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(n)}t.exports=r},Pixl:function(t,n,r){"use strict";r.r(n),r.d(n,"default",(function(){return a}));var e=r("q1tI"),o=r("VgAt"),i=r("qKvR");function u(t){var n=t.min,r=void 0===n?0:n,e=t.max,u=void 0===e?1:e,a=t.value,c=void 0===a?0:a,f=t.onChange,s=Object(o.useMotionValue)(130*c),l=Object(o.useTransform)(s,[0,130],[r,u]);return Object(i.b)(o.Frame,{name:"Rail",width:130,height:6,center:!0,radius:3,background:"rgba(255,255,255,.2"},Object(i.b)(o.Frame,{name:"Fill",width:s,height:6,radius:3,background:"#fff"}),Object(i.b)(o.Frame,{name:"Knob",x:s,size:40,center:"y",radius:"50%",background:"#fff",shadow:"0 2px 8px 1px #242424",left:-20,drag:"x",dragConstraints:{left:0,right:130},dragElastic:0,dragMomentum:!1,onDrag:function(){f&&f(l.get())}}))}function a(){var t=e.useState(.5),n=t[0],r=t[1],a=(480*n-120)/2;return Object(i.b)(o.Frame,{name:"SliderApp",width:"100%",height:"100%",background:"#242424"},Object(i.b)(o.Frame,{name:"Mask",size:120,center:!0,y:"-100px",overflow:"hidden",radius:"50%"},Object(i.b)(o.Frame,{name:"Image",scale:n,center:!0,size:480,image:"https://static.framer.com/api/bg.jpg",drag:!0,dragElastic:0,dragMomentum:!1,dragConstraints:{top:-a,bottom:a,left:-a,right:a}})),Object(i.b)(u,{value:n,min:.25,max:.75,onChange:function(t){r(t)}}))}},Q4TC:function(t,n,r){"use strict";var e=r("P8UN"),o=r("ouCZ")(!1);e(e.P,"String",{codePointAt:function(t){return o(this,t)}})},RIqP:function(t,n,r){var e=r("Ijbi"),o=r("EbDI"),i=r("ZhPi"),u=r("Bnag");t.exports=function(t){return e(t)||o(t)||i(t)||u()}},SksO:function(t,n){function r(n,e){return t.exports=r=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},r(n,e)}t.exports=r},UwXh:function(t,n,r){var e=r("rjfK"),o=r("Drra"),i=r("ltAs"),u=r("qDzq"),a=r("P8UN"),c=r("pSXQ"),f=r("1a8y"),s=r("BjK0");a(a.S,"Reflect",{set:function t(n,r,a){var l,p,b=arguments.length<4?n:arguments[3],v=o.f(f(n),r);if(!v){if(s(p=i(n)))return t(p,r,a,b);v=c(0)}if(u(v,"value")){if(!1===v.writable||!s(b))return!1;if(l=o.f(b,r)){if(l.get||l.set||!1===l.writable)return!1;l.value=a,e.f(b,r,l)}else e.f(b,r,c(0,a));return!0}return void 0!==v.set&&(v.set.call(b,a),!0)}})},W8MJ:function(t,n){function r(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}t.exports=function(t,n,e){return n&&r(t.prototype,n),e&&r(t,e),t}},WkPL:function(t,n){t.exports=function(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}},ZhPi:function(t,n,r){var e=r("WkPL");t.exports=function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}},a1gu:function(t,n,r){var e=r("cDf5"),o=r("PJYZ");t.exports=function(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?o(t):n}},bNpn:function(t,n,r){var e=r("BjK0");r("939a")("isExtensible",(function(t){return function(n){return!!e(n)&&(!t||t(n))}}))},ewoU:function(t,n,r){"use strict";var e=r("tuyV"),o=r("BjK0"),i=r("kiRH"),u=r("ot9L"),a=r("sOol")("isConcatSpreadable");t.exports=function t(n,r,c,f,s,l,p,b){for(var v,d,y=s,g=0,h=!!p&&u(p,b,3);g<f;){if(g in c){if(v=h?h(c[g],g,r):c[g],d=!1,o(v)&&(d=void 0!==(d=v[a])?!!d:e(v)),d&&l>0)y=t(n,r,v,i(v.length),y,l-1)-1;else{if(y>=9007199254740991)throw TypeError();n[y]=v}y++}g++}return y}},hvu4:function(t,n,r){var e=r("P8UN"),o=r("Drra").f,i=r("1a8y");e(e.S,"Reflect",{deleteProperty:function(t,n){var r=o(i(t),n);return!(r&&!r.configurable)&&delete t[n]}})},iWIM:function(t,n,r){var e=r("n3AX");function o(n,r,i){return"undefined"!=typeof Reflect&&Reflect.get?t.exports=o=Reflect.get:t.exports=o=function(t,n,r){var o=e(t,n);if(o){var i=Object.getOwnPropertyDescriptor(o,n);return i.get?i.get.call(r):i.value}},o(n,r,i||n)}t.exports=o},iuFa:function(t,n,r){var e=r("P8UN");e(e.S,"Number",{isNaN:function(t){return t!=t}})},lwsE:function(t,n){t.exports=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},m0LI:function(t,n){t.exports=function(t,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],e=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(e=(u=a.next()).done)&&(r.push(u.value),!n||r.length!==n);e=!0);}catch(c){o=!0,i=c}finally{try{e||null==a.return||a.return()}finally{if(o)throw i}}return r}}},n3AX:function(t,n,r){var e=r("Nsbk");t.exports=function(t,n){for(;!Object.prototype.hasOwnProperty.call(t,n)&&null!==(t=e(t)););return t}},nWfQ:function(t,n,r){var e=r("P8UN"),o=r("nsRs"),i=r("nONw"),u=r("1a8y"),a=r("BjK0"),c=r("96qb"),f=r("16Xr"),s=(r("emib").Reflect||{}).construct,l=c((function(){function t(){}return!(s((function(){}),[],t)instanceof t)})),p=!c((function(){s((function(){}))}));e(e.S+e.F*(l||p),"Reflect",{construct:function(t,n){i(t),u(n);var r=arguments.length<3?t:i(arguments[2]);if(p&&!l)return s(t,n,r);if(t==r){switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3])}var e=[null];return e.push.apply(e,n),new(f.apply(t,e))}var c=r.prototype,b=o(a(c)?c:Object.prototype),v=Function.apply.call(t,b,n);return a(v)?v:b}})},wTVA:function(t,n){t.exports=function(t){if(Array.isArray(t))return t}},wbKt:function(t,n,r){"use strict";var e=r("SGlo"),o=r("O1i0");r("94Pd")("WeakSet",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return e.def(o(this,"WeakSet"),t,!0)}},e,!1,!0)},wkBT:function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}}]);
//# sourceMappingURL=60-3de675ef89a6bf008ac1.js.map