(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"+ZrZ":function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=function(e){e.exit,e.entry,e.fade;var t=e.duration,n=(0,i.default)(e,["exit","entry","fade","duration"]),r=t||.8;return o.default.createElement(l.default,(0,a.default)({exit:{length:r,zIndex:1,trigger:function(e){var t=e.exit,n=e.node;return s({exit:t,node:n,direction:"out"})}},entry:{length:0,trigger:function(e){var t=e.exit,n=e.node;return s({exit:t,node:n,direction:"in"})}}},n,{__source:{fileName:"/Users/tyler/Documents/GitHub/gatsby-plugins/transition-link/gatsby-plugin-transition-link/src/AniLink/Fade.js",lineNumber:36},__self:this}),n.children)};var a=r(n("pVnL")),i=r(n("8OQS")),o=r(n("q1tI")),l=r(n("plVc")),u=r(n("z/o8")),s=function(e){var t=e.exit.length,n=e.node,r=e.direction,a="out"===r?t+t/4:t,i="in"===r?1:0,o=document.scrollingElement&&document.scrollingElement.scrollTop||document.body.scrollTop||window.pageYOffset,l="out"===r?{overflowY:"hidden",height:"100vh",scrollTop:o}:{};return u.default.timeline().set(n,l).fromTo(n,{opacity:!i},{opacity:i,duration:a})}},AbOF:function(e,t,n){"use strict";n("n0hJ");var r=n("TqRt"),a=n("284h");t.__esModule=!0,t.default=void 0;var i=r(n("8OQS")),o=r(n("pVnL")),l=r(n("VbXa")),u=r(n("PJYZ")),s=r(n("lSNA")),c=a(n("q1tI")),d=r(n("plVc")),f=r(n("z/o8")),h=r(n("uxXc")),p=function(e){function t(t){var n;return n=e.call(this,t)||this,(0,s.default)((0,u.default)((0,u.default)(n)),"createRipple",(function(e,t,n,r,a){var i=e.length,o=document.body,l=document.createElement("canvas"),u=l.getContext("2d"),s=2*Math.PI,c=n?h.default.hex.rgb(n).join(","):"0,0,255";c=r?h.default.keyword.rgb(r):c,l.style.zIndex=1e4,l.style.top=0,l.style.position="fixed";var d=l.width=window.innerWidth,p=l.height=window.innerHeight;o.appendChild(l);var v=t.clientX,g=t.clientY,m=v<d/2?d-v:v,b=g<p/2?p-g:g,y=Math.sqrt(m*m+b*b),w={alpha:0,radius:0,x:v,y:g},x=i;f.default.timeline({onUpdate:function(){u.clearRect(0,0,d,p),u.beginPath(),u.arc(w.x,w.y,w.radius,0,s,!1);var e="rgba("+c+","+w.alpha+")";u.fillStyle=e,u.fill()},onComplete:function(){return function(e){void 0===e&&(e=0);setTimeout((function(){o.removeChild(l)}),e)}(x/3)}}).to(w,{alpha:1,duration:x/4}).to(w,{radius:y,ease:"power1.easeIn",duration:x-x/3},0).set(a,{visibility:"hidden"}).to(l,{x:"100%",ease:"power1.easeIn",duration:x/3},"+="+.4*x),window.addEventListener("resize",(function(){d=l.width=window.innerWidth,p=l.height=window.innerHeight}))})),(0,s.default)((0,u.default)((0,u.default)(n)),"getDirection",(function(e){switch(e){case"left":return{xPercent:-5};case"right":return{xPercent:5};case"top":return{yPercent:-5};case"bottom":return{yPercent:5};default:return{}}})),(0,s.default)((0,u.default)((0,u.default)(n)),"slideIn",(function(e,t,r){var a=e.length;f.default.from(t,a,(0,o.default)({},n.getDirection(r),{ease:"power1.easeOut"}))})),(0,s.default)((0,u.default)((0,u.default)(n)),"onResize",(function(){n.vw=n.canvas.width=window.innerWidth,n.vh=n.canvas.height=window.innerHeight})),n.createRipple=n.createRipple.bind((0,u.default)((0,u.default)(n))),n}(0,l.default)(t,e);var n=t.prototype;return n.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize)},n.render=function(){var e=this,t=this.props,n=(t.exit,t.entry,t.paintDrip,t.duration),r=t.direction,a=void 0===r?"left":r,l=(0,i.default)(t,["exit","entry","paintDrip","duration","direction"]),u=n||1,s=u/1.75;return c.default.createElement(c.default.Fragment,null,c.default.createElement(d.default,(0,o.default)({exit:{length:u,trigger:function(t){var n=t.exit,r=t.e,a=t.node;return e.createRipple(n,r,l.hex,l.color,a)}},entry:{delay:s,length:u,trigger:function(t){var n=t.entry,r=t.node;return e.slideIn(n,r,a)}}},l,{__source:{fileName:"/Users/tyler/Documents/GitHub/gatsby-plugins/transition-link/gatsby-plugin-transition-link/src/AniLink/PaintDrip.js",lineNumber:145},__self:this}),l.children))},t}(c.Component);t.default=p},Alic:function(e,t,n){"use strict";t.__esModule=!0,t.useTransitionState=void 0;var r=n("q1tI"),a=n("Ds8n");t.useTransitionState=function(){return(0,r.useContext)(a.publicContext)}},Fstm:function(e,t,n){"use strict";n("HQhv"),n("gu/5"),n("eoYm"),n("sC2a");var r=n("TqRt");t.__esModule=!0,t.triggerTransition=void 0;var a=r(n("pVnL")),i=n("Wbzz"),o=n("NAVQ"),l=n("c3/e"),u=r(n("I3R8"));t.triggerTransition=function(e){var t,n=e.to,r=e.event,s=void 0===r?null:r,c=e.exit,d=void 0===c?{}:c,f=e.entry,h=void 0===f?{}:f,p=e.inTransition,v=e.pages,g=e.trigger,m=e.updateContext,b=e.linkState,y=e.replace,w=e.preventScrollJump;if(s&&(s.persist(),s.preventDefault()),p)return!1;if(n.includes("#")){var x=n.split("#");n=x[0],t=x[1]}window.__tl_inTransition=!0,window.__tl_desiredPathname=(0,i.withPrefix)(n),m({inTransition:!0,exitDelay:0,exitLength:0,appearAfter:0,exitState:{}}),g&&"function"==typeof g&&g(v);var k=d.length,_=void 0===k?0:k,M=d.delay,E=void 0===M?0:M,T=d.state,N=void 0===T?{}:T,S=d.trigger,I=void 0===S?function(){}:S,q=h.length,z=void 0===q?1:q,L=h.delay,O=void 0===L?0:L,P=h.state,R=void 0===P?{}:P,D=h.trigger,V=void 0===D?function(){}:D,A=h.appearAfter;m({entryLength:z,entryDelay:O,exitLength:_,exitDelay:E,entryProps:h,exitProps:d,appearAfter:void 0===A?0:A,preventScrollJump:w,exitTrigger:function(e,t,n){return I(e,t,n)},entryTrigger:function(e,t,n){return V(e,t,n)},e:s}),(0,o.setTimeout)((function(){(0,i.navigate)(n,{state:(0,a.default)({},b),replace:y}),m({exitState:N,hash:t})}),(0,l.getMs)(E)),(0,o.setTimeout)((function(){m({entryState:R})}),(0,l.getMs)(E+O)),(0,o.setTimeout)((function(){return m({entryDelay:0,appearAfter:0,entryLength:0})}),(0,l.getMs)(E+O+z));var G=E+Math.max(_,O+z);(0,o.setTimeout)((function(){window.__tl_inTransition=!1,window.__tl_desiredPathname=!1,window.__tl_back_button_pressed=!1,m((0,a.default)({exitDelay:0,exitLength:0,inTransition:!1},(0,u.default)()))}),(0,l.getMs)(G)+1)}},GVzS:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=n("q1tI"),a=n("Ds8n");var i=function(e){var t=(0,r.useRef)(null),n=(0,r.useContext)(a.publicContext),i=(0,r.useState)(null),o=i[0],l=i[1],u=(0,r.useState)(!1),s=u[0],c=u[1],d="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype;return(0,r.useEffect)((function(){if(t&&t.current){var e;return(e=new IntersectionObserver((function(e){var t=e[0];c(!!t.intersectionRatio)}),{threshold:1})).observe(t.current),function(){return e.unobserve(t.current)}}}),[t]),(0,r.useEffect)((function(){(!d||e.forceRender||s)&&l(n)}),[n.transitionStatus,t,s]),e.children(o,t)};t.default=i},"N+e4":function(e,t,n){"use strict";var r=n("TqRt"),a=n("284h");t.__esModule=!0,t.default=void 0;var i=r(n("VbXa")),o=r(n("PJYZ")),l=r(n("lSNA")),u=a(n("q1tI")),s=r(n("i8i4")),c="/Users/tyler/Documents/GitHub/gatsby-plugins/transition-link/gatsby-plugin-transition-link/src/components/TransitionPortal.js",d="undefined"!=typeof document&&document.body,f=function(e){var t=function(e){switch(e){case"bottom":return 1e3;case"top":return 1200;default:return 1100}}(e.level);return u.default.createElement("div",{className:"gatsby-plugin-transition-link-portal",style:{position:"fixed",top:0,left:0,zIndex:t},__source:{fileName:c,lineNumber:19},__self:this},e.children)},h=function(e){function t(){var t;return t=e.call(this)||this,(0,l.default)((0,o.default)((0,o.default)(t)),"componentDidMount",(function(){d&&d.appendChild(t.el)})),(0,l.default)((0,o.default)((0,o.default)(t)),"componentWillUnmount",(function(){d&&d.removeChild(t.el)})),t.el="undefined"!=typeof document&&document.createElement("section"),t}return(0,i.default)(t,e),t.prototype.render=function(){return this.el&&d?s.default.createPortal(u.default.createElement(u.default.Fragment,null,d&&u.default.createElement(f,{styles:this.props.css,level:this.props.level,__source:{fileName:c,lineNumber:54},__self:this},this.props.children)),this.el):null},t}(u.Component);t.default=h},RXBc:function(e,t,n){"use strict";n.r(t);n("tf9N");var r=n("kOA+"),a=n.n(r),i=n("q1tI"),o=n.n(i),l=n("Wbzz"),u=n("Bl7J"),s=n("vrFN");t.default=function(){return o.a.createElement(u.a,null,o.a.createElement(s.a,{title:"Home"}),o.a.createElement("h1",null,"Vetmedin"),o.a.createElement("p",null,"Some text here."),o.a.createElement("p",null,o.a.createElement(l.Link,{to:"/quiz"},"Go to Quiz")),o.a.createElement("p",null,o.a.createElement(l.Link,{to:"/video/"},"Go to Video")),o.a.createElement("p",null,o.a.createElement(l.Link,{to:"/about/"},"Go to About")),o.a.createElement("p",null,o.a.createElement(l.Link,{to:"/contact/"},"Go to contact")),o.a.createElement("p",null,o.a.createElement(a.a,{paintDrip:!0,to:"/about/"},"Go to transition")),o.a.createElement("p",null,o.a.createElement(l.Link,{to:"/responsiveVideoPlayer/"},"Go to Responsive Video")),o.a.createElement("p",null,o.a.createElement(l.Link,{to:"/responsiveVideoPlayerFullWidthVideo/"},"Go to Responsive FW Video")),o.a.createElement("p",null,o.a.createElement(l.Link,{to:"/sideBarExample/"},"Go to Side Bar")),o.a.createElement("p",null,o.a.createElement(l.Link,{to:"/uiExample/"},"Go to UI Example")),o.a.createElement("p",null,o.a.createElement(l.Link,{to:"/animateExample/"},"Go to Animate Example")),o.a.createElement("p",null,o.a.createElement(l.Link,{to:"/backgroundVideoExample/"},"Go to Background Video Example")),o.a.createElement("p",null,o.a.createElement(l.Link,{to:"/framerExample/"},"Go to Framer Example")),o.a.createElement("p",null,o.a.createElement(l.Link,{to:"/socialShareExample/"},"Go to Social Share Example")),o.a.createElement("p",null,o.a.createElement(l.Link,{to:"/tabPageExample/"},"Go to Social Share Example")))}},T016:function(e,t,n){"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},V17b:function(e,t,n){"use strict";n("sC2a");var r=n("TqRt"),a=n("284h");t.__esModule=!0,t.TransitionLink=void 0;var i=r(n("pVnL")),o=r(n("8OQS")),l=a(n("q1tI")),u=r(n("17x9")),s=n("Wbzz"),c=n("X6jR"),d=n("Fstm"),f=n("Ds8n"),h="/Users/tyler/Documents/GitHub/gatsby-plugins/transition-link/gatsby-plugin-transition-link/src/components/TransitionLink.js";void 0===l.forwardRef&&(l.forwardRef=function(){throw new Error('"forwardRef" is read-only.')}());var p=(0,l.forwardRef)((function(e,t){var n=e.to,r=e.children,a=e.exit,u=e.entry,p=e.activeStyle,v=e.partiallyActive,g=e.style,m=e.className,b=e.activeClassName,y=e.state,w=e.onClick,x=e.trigger,k=e.replace,_=e.innerRef,M=e.preventScrollJump,E=(0,o.default)(e,["to","children","exit","entry","activeStyle","partiallyActive","style","className","activeClassName","state","onClick","trigger","replace","innerRef","preventScrollJump"]);return l.default.createElement(f.Consumer,{__source:{fileName:h,lineNumber:36},__self:this},(function(e){var f=e.disableAnimation,T=(0,o.default)(e,["disableAnimation"]);return l.default.createElement(s.Link,(0,i.default)({style:g,activeStyle:p,className:m,activeClassName:b,partiallyActive:v,onClick:function(e){if(!f){var t=(0,c.shouldNavigate)(e);t&&(0,d.triggerTransition)((0,i.default)({event:e,to:n,exit:a,entry:u,trigger:x,replace:k,preventScrollJump:M,linkState:y},T)),"function"==typeof w&&w(e,t)}},to:n,ref:t||_},E,{__source:{fileName:h,lineNumber:38},__self:this}),r)}))}));t.TransitionLink=p,p.propTypes={to:u.default.string.isRequired,exitLength:u.default.number,entryDelay:u.default.number,exitFn:u.default.func,entryState:u.default.object}},V2YU:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.useTriggerTransition=void 0;var a=r(n("pVnL")),i=n("q1tI"),o=n("Wbzz"),l=n("Ds8n"),u=n("Fstm");t.useTriggerTransition=function(e){var t=(0,i.useContext)(l.Context);return function(n){(n instanceof Event||n.nativeEvent&&n.nativeEvent instanceof Event)&&(n={event:n});var r=(0,a.default)({},e,n);t.disableAnimation?(r.event&&(r.event.persist(),r.event.preventDefault()),(0,o.navigate)(r.to)):(0,u.triggerTransition)((0,a.default)({},t,r))}}},X6jR:function(e,t,n){"use strict";t.__esModule=!0,t.shouldNavigate=void 0;t.shouldNavigate=function(e){return!e.defaultPrevented&&0===e.button&&!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}},"Y++M":function(e,t,n){"use strict";var r=n("DFzH"),a=n("dTG6"),i=n("kiRH");e.exports=function(e){for(var t=r(this),n=i(t.length),o=arguments.length,l=a(o>1?arguments[1]:void 0,n),u=o>2?arguments[2]:void 0,s=void 0===u?n:a(u,n);s>l;)t[l++]=e;return t}},"kOA+":function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=function(e){var t=e.children,n=(0,i.default)(e,["children"]);return o.default.createElement(o.default.Fragment,null,n.cover&&o.default.createElement(l.default,(0,a.default)({},n,{__source:{fileName:h,lineNumber:13},__self:this}),t),n.fade&&o.default.createElement(u.default,(0,a.default)({},n,{__source:{fileName:h,lineNumber:14},__self:this}),t),n.paintDrip&&o.default.createElement(s.default,(0,a.default)({},n,{__source:{fileName:h,lineNumber:15},__self:this}),t),n.swipe&&o.default.createElement(c.default,(0,a.default)({},n,{__source:{fileName:h,lineNumber:16},__self:this}),t),!!n.morph&&o.default.createElement(f.default,(0,a.default)({},n,{__source:{fileName:h,lineNumber:17},__self:this}),t),!n.cover&&!n.fade&&!n.paintDrip&&!n.swipe&&!n.morph&&o.default.createElement(d.default,(0,a.default)({},n,{__source:{fileName:h,lineNumber:24},__self:this}),t))};var a=r(n("pVnL")),i=r(n("8OQS")),o=r(n("q1tI")),l=r(n("tiwY")),u=r(n("+ZrZ")),s=r(n("AbOF")),c=r(n("mc3b")),d=r(n("plVc")),f=r(n("noOv")),h="/Users/tyler/Documents/GitHub/gatsby-plugins/transition-link/gatsby-plugin-transition-link/src/AniLink/index.js"},mc3b:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=function(e){e.exit,e.entry,e.swipe;var t=e.entryOffset,n=void 0===t?40:t,r=(0,a.default)(e,["exit","entry","swipe","entryOffset"]),u=r.top||"exit",s=r.duration||.7,c=s/3.5,d="entry"===u?1:0,h="exit"===u?1:0;return o.default.createElement(l.default,(0,i.default)({exit:{length:s,trigger:function(e){var t=e.node,a=e.exit;return f({node:t,exit:a,direction:r.direction,top:u,entryOffset:n,triggerName:"exit"})},zIndex:h},entry:{length:c,trigger:function(e){var t=e.node,a=e.exit;return f({node:t,exit:a,direction:r.direction,top:u,entryOffset:n,triggerName:"entry"})},zIndex:d}},r,{__source:{fileName:"/Users/tyler/Documents/GitHub/gatsby-plugins/transition-link/gatsby-plugin-transition-link/src/AniLink/Swipe.js",lineNumber:106},__self:this}),r.children)};var a=r(n("8OQS")),i=r(n("pVnL")),o=r(n("q1tI")),l=r(n("plVc")),u=r(n("z/o8")),s="0 0 100px 10px rgba(0, 0, 0, 0.12941176470588237)",c=function(e,t){var n=t?"-":"+",r=t?"+":"-";switch(e){case"down":return{y:n+"=100vh",ease:"power1.easeIn"};case"up":return{y:r+"=100vh",ease:"power1.easeIn"};case"left":return{x:r+"=100%",ease:"power1.easeIn"};default:return{x:n+"=100%",ease:"power1.easeIn"}}},d=function(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=40);var r=t?"-":"",a=t?"":"-";switch(e){case"down":return{y:""+a+n+"vh",ease:"power1.easeIn"};case"up":return{y:""+r+n+"vh",ease:"power1.easeIn"};case"left":return{x:""+r+n+"%",ease:"power1.easeIn"};default:return{x:""+a+n+"%",ease:"power1.easeIn"}}},f=function(e){var t=e.node,n=e.exit,r=e.direction,a=e.top,o=e.triggerName,l=e.entryOffset,f=document.scrollingElement&&document.scrollingElement.scrollTop||document.body.scrollTop||window.pageYOffset;return"entry"===o&&"entry"===a?u.default.timeline().set(t,{boxShadow:s,overflowY:"hidden",height:"100vh",scrollTop:f}).from(t,(0,i.default)({},c(r,!0),{duration:n.length})).set(t,{overflowY:"initial"}):"entry"===o?u.default.timeline().from(t,(0,i.default)({},d(r,!1,l),{duration:n.length})):"exit"===o&&"exit"===a?u.default.timeline().set(t,{boxShadow:s,overflowY:"hidden",height:"100vh",scrollTop:f}).to(t,(0,i.default)({},c(r),{duration:n.length})).set(t,{overflowY:"initial"}):u.default.timeline().set(t,{boxShadow:s,overflowY:"hidden",height:"100vh",scrollTop:f}).to(t,(0,i.default)({},d(r,!0,l),{duration:n.length})).set(t,{overflowY:"initial"})}},n0hJ:function(e,t,n){var r=n("P8UN");r(r.P,"Array",{fill:n("Y++M")}),n("Dq1/")("fill")},noOv:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=void 0;var a=r(n("o0o1")),i=r(n("yXPU")),o=r(n("q1tI")),l=r(n("plVc")),u=r(n("z/o8")),s=function(e){var t=e.children,n=e.to,r=e.duration,s=e.morph;return o.default.createElement(l.default,{to:n,exit:{length:r},entry:{appearAfter:r},trigger:function(){var e=(0,i.default)(a.default.mark((function e(t){var n,i,o,l,c;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.exit;case 2:return n=e.sent,e.next=5,t.entry;case 5:i=e.sent,o=n.node.querySelector(s.from),l=i.node.querySelector(s.to),c={height:l.offsetHeight,width:l.offsetWidth},u.default.to(o,{width:c.width,height:c.height,duration:r});case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),__source:{fileName:"/Users/tyler/Documents/GitHub/gatsby-plugins/transition-link/gatsby-plugin-transition-link/src/AniLink/MorphTo.js",lineNumber:6},__self:this},t)};t.default=s},onlc:function(e,t,n){n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi");var r=n("t1N5");function a(e){var t=function(){for(var e={},t=Object.keys(r),n=t.length,a=0;a<n;a++)e[t[a]]={distance:-1,parent:null};return e}(),n=[e];for(t[e].distance=0;n.length;)for(var a=n.pop(),i=Object.keys(r[a]),o=i.length,l=0;l<o;l++){var u=i[l],s=t[u];-1===s.distance&&(s.distance=t[a].distance+1,s.parent=a,n.unshift(u))}return t}function i(e,t){return function(n){return t(e(n))}}function o(e,t){for(var n=[t[e].parent,e],a=r[t[e].parent][e],o=t[e].parent;t[o].parent;)n.unshift(t[o].parent),a=i(r[t[o].parent][o],a),o=t[o].parent;return a.conversion=n,a}e.exports=function(e){for(var t=a(e),n={},r=Object.keys(t),i=r.length,l=0;l<i;l++){var u=r[l];null!==t[u].parent&&(n[u]=o(u,t))}return n}},plVc:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=void 0;var a=n("V17b"),i=r(n("7Y3J"));t.TransitionHandler=i.default;var o=n("Ds8n");t.TransitionState=o.PublicConsumer;var l=r(n("N+e4"));t.TransitionPortal=l.default;var u=r(n("GVzS"));t.TransitionObserver=u.default;var s=n("qF42");t.useTriggerTransition=s.useTriggerTransition;var c=a.TransitionLink;t.default=c},qF42:function(e,t,n){"use strict";t.__esModule=!0,t.useTriggerTransition=t.useTransitionState=void 0;var r=n("Alic");t.useTransitionState=r.useTransitionState;var a=n("V2YU");t.useTriggerTransition=a.useTriggerTransition},t1N5:function(e,t,n){n("HQhv"),n("Ll4R"),n("q8oJ"),n("8npG");var r=n("T016"),a={};for(var i in r)r.hasOwnProperty(i)&&(a[r[i]]=i);var o=e.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var l in o)if(o.hasOwnProperty(l)){if(!("channels"in o[l]))throw new Error("missing channels property: "+l);if(!("labels"in o[l]))throw new Error("missing channel labels property: "+l);if(o[l].labels.length!==o[l].channels)throw new Error("channel and label counts mismatch: "+l);var u=o[l].channels,s=o[l].labels;delete o[l].channels,delete o[l].labels,Object.defineProperty(o[l],"channels",{value:u}),Object.defineProperty(o[l],"labels",{value:s})}o.rgb.hsl=function(e){var t,n,r=e[0]/255,a=e[1]/255,i=e[2]/255,o=Math.min(r,a,i),l=Math.max(r,a,i),u=l-o;return l===o?t=0:r===l?t=(a-i)/u:a===l?t=2+(i-r)/u:i===l&&(t=4+(r-a)/u),(t=Math.min(60*t,360))<0&&(t+=360),n=(o+l)/2,[t,100*(l===o?0:n<=.5?u/(l+o):u/(2-l-o)),100*n]},o.rgb.hsv=function(e){var t,n,r,a,i,o=e[0]/255,l=e[1]/255,u=e[2]/255,s=Math.max(o,l,u),c=s-Math.min(o,l,u),d=function(e){return(s-e)/6/c+.5};return 0===c?a=i=0:(i=c/s,t=d(o),n=d(l),r=d(u),o===s?a=r-n:l===s?a=1/3+t-r:u===s&&(a=2/3+n-t),a<0?a+=1:a>1&&(a-=1)),[360*a,100*i,100*s]},o.rgb.hwb=function(e){var t=e[0],n=e[1],r=e[2];return[o.rgb.hsl(e)[0],100*(1/255*Math.min(t,Math.min(n,r))),100*(r=1-1/255*Math.max(t,Math.max(n,r)))]},o.rgb.cmyk=function(e){var t,n=e[0]/255,r=e[1]/255,a=e[2]/255;return[100*((1-n-(t=Math.min(1-n,1-r,1-a)))/(1-t)||0),100*((1-r-t)/(1-t)||0),100*((1-a-t)/(1-t)||0),100*t]},o.rgb.keyword=function(e){var t=a[e];if(t)return t;var n,i,o,l=1/0;for(var u in r)if(r.hasOwnProperty(u)){var s=r[u],c=(i=e,o=s,Math.pow(i[0]-o[0],2)+Math.pow(i[1]-o[1],2)+Math.pow(i[2]-o[2],2));c<l&&(l=c,n=u)}return n},o.keyword.rgb=function(e){return r[e]},o.rgb.xyz=function(e){var t=e[0]/255,n=e[1]/255,r=e[2]/255;return[100*(.4124*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)+.3576*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)+.1805*(r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92)),100*(.2126*t+.7152*n+.0722*r),100*(.0193*t+.1192*n+.9505*r)]},o.rgb.lab=function(e){var t=o.rgb.xyz(e),n=t[0],r=t[1],a=t[2];return r/=100,a/=108.883,n=(n/=95.047)>.008856?Math.pow(n,1/3):7.787*n+16/116,[116*(r=r>.008856?Math.pow(r,1/3):7.787*r+16/116)-16,500*(n-r),200*(r-(a=a>.008856?Math.pow(a,1/3):7.787*a+16/116))]},o.hsl.rgb=function(e){var t,n,r,a,i,o=e[0]/360,l=e[1]/100,u=e[2]/100;if(0===l)return[i=255*u,i,i];t=2*u-(n=u<.5?u*(1+l):u+l-u*l),a=[0,0,0];for(var s=0;s<3;s++)(r=o+1/3*-(s-1))<0&&r++,r>1&&r--,i=6*r<1?t+6*(n-t)*r:2*r<1?n:3*r<2?t+(n-t)*(2/3-r)*6:t,a[s]=255*i;return a},o.hsl.hsv=function(e){var t=e[0],n=e[1]/100,r=e[2]/100,a=n,i=Math.max(r,.01);return n*=(r*=2)<=1?r:2-r,a*=i<=1?i:2-i,[t,100*(0===r?2*a/(i+a):2*n/(r+n)),100*((r+n)/2)]},o.hsv.rgb=function(e){var t=e[0]/60,n=e[1]/100,r=e[2]/100,a=Math.floor(t)%6,i=t-Math.floor(t),o=255*r*(1-n),l=255*r*(1-n*i),u=255*r*(1-n*(1-i));switch(r*=255,a){case 0:return[r,u,o];case 1:return[l,r,o];case 2:return[o,r,u];case 3:return[o,l,r];case 4:return[u,o,r];case 5:return[r,o,l]}},o.hsv.hsl=function(e){var t,n,r,a=e[0],i=e[1]/100,o=e[2]/100,l=Math.max(o,.01);return r=(2-i)*o,n=i*l,[a,100*(n=(n/=(t=(2-i)*l)<=1?t:2-t)||0),100*(r/=2)]},o.hwb.rgb=function(e){var t,n,r,a,i,o,l,u=e[0]/360,s=e[1]/100,c=e[2]/100,d=s+c;switch(d>1&&(s/=d,c/=d),r=6*u-(t=Math.floor(6*u)),0!=(1&t)&&(r=1-r),a=s+r*((n=1-c)-s),t){default:case 6:case 0:i=n,o=a,l=s;break;case 1:i=a,o=n,l=s;break;case 2:i=s,o=n,l=a;break;case 3:i=s,o=a,l=n;break;case 4:i=a,o=s,l=n;break;case 5:i=n,o=s,l=a}return[255*i,255*o,255*l]},o.cmyk.rgb=function(e){var t=e[0]/100,n=e[1]/100,r=e[2]/100,a=e[3]/100;return[255*(1-Math.min(1,t*(1-a)+a)),255*(1-Math.min(1,n*(1-a)+a)),255*(1-Math.min(1,r*(1-a)+a))]},o.xyz.rgb=function(e){var t,n,r,a=e[0]/100,i=e[1]/100,o=e[2]/100;return n=-.9689*a+1.8758*i+.0415*o,r=.0557*a+-.204*i+1.057*o,t=(t=3.2406*a+-1.5372*i+-.4986*o)>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,r=r>.0031308?1.055*Math.pow(r,1/2.4)-.055:12.92*r,[255*(t=Math.min(Math.max(0,t),1)),255*(n=Math.min(Math.max(0,n),1)),255*(r=Math.min(Math.max(0,r),1))]},o.xyz.lab=function(e){var t=e[0],n=e[1],r=e[2];return n/=100,r/=108.883,t=(t/=95.047)>.008856?Math.pow(t,1/3):7.787*t+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(t-n),200*(n-(r=r>.008856?Math.pow(r,1/3):7.787*r+16/116))]},o.lab.xyz=function(e){var t,n,r,a=e[0];t=e[1]/500+(n=(a+16)/116),r=n-e[2]/200;var i=Math.pow(n,3),o=Math.pow(t,3),l=Math.pow(r,3);return n=i>.008856?i:(n-16/116)/7.787,t=o>.008856?o:(t-16/116)/7.787,r=l>.008856?l:(r-16/116)/7.787,[t*=95.047,n*=100,r*=108.883]},o.lab.lch=function(e){var t,n=e[0],r=e[1],a=e[2];return(t=360*Math.atan2(a,r)/2/Math.PI)<0&&(t+=360),[n,Math.sqrt(r*r+a*a),t]},o.lch.lab=function(e){var t,n=e[0],r=e[1];return t=e[2]/360*2*Math.PI,[n,r*Math.cos(t),r*Math.sin(t)]},o.rgb.ansi16=function(e){var t=e[0],n=e[1],r=e[2],a=1 in arguments?arguments[1]:o.rgb.hsv(e)[2];if(0===(a=Math.round(a/50)))return 30;var i=30+(Math.round(r/255)<<2|Math.round(n/255)<<1|Math.round(t/255));return 2===a&&(i+=60),i},o.hsv.ansi16=function(e){return o.rgb.ansi16(o.hsv.rgb(e),e[2])},o.rgb.ansi256=function(e){var t=e[0],n=e[1],r=e[2];return t===n&&n===r?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(n/255*5)+Math.round(r/255*5)},o.ansi16.rgb=function(e){var t=e%10;if(0===t||7===t)return e>50&&(t+=3.5),[t=t/10.5*255,t,t];var n=.5*(1+~~(e>50));return[(1&t)*n*255,(t>>1&1)*n*255,(t>>2&1)*n*255]},o.ansi256.rgb=function(e){if(e>=232){var t=10*(e-232)+8;return[t,t,t]}var n;return e-=16,[Math.floor(e/36)/5*255,Math.floor((n=e%36)/6)/5*255,n%6/5*255]},o.rgb.hex=function(e){var t=(((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2]))).toString(16).toUpperCase();return"000000".substring(t.length)+t},o.hex.rgb=function(e){var t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];var n=t[0];3===t[0].length&&(n=n.split("").map((function(e){return e+e})).join(""));var r=parseInt(n,16);return[r>>16&255,r>>8&255,255&r]},o.rgb.hcg=function(e){var t,n=e[0]/255,r=e[1]/255,a=e[2]/255,i=Math.max(Math.max(n,r),a),o=Math.min(Math.min(n,r),a),l=i-o;return t=l<=0?0:i===n?(r-a)/l%6:i===r?2+(a-n)/l:4+(n-r)/l+4,t/=6,[360*(t%=1),100*l,100*(l<1?o/(1-l):0)]},o.hsl.hcg=function(e){var t=e[1]/100,n=e[2]/100,r=1,a=0;return(r=n<.5?2*t*n:2*t*(1-n))<1&&(a=(n-.5*r)/(1-r)),[e[0],100*r,100*a]},o.hsv.hcg=function(e){var t=e[1]/100,n=e[2]/100,r=t*n,a=0;return r<1&&(a=(n-r)/(1-r)),[e[0],100*r,100*a]},o.hcg.rgb=function(e){var t=e[0]/360,n=e[1]/100,r=e[2]/100;if(0===n)return[255*r,255*r,255*r];var a,i=[0,0,0],o=t%1*6,l=o%1,u=1-l;switch(Math.floor(o)){case 0:i[0]=1,i[1]=l,i[2]=0;break;case 1:i[0]=u,i[1]=1,i[2]=0;break;case 2:i[0]=0,i[1]=1,i[2]=l;break;case 3:i[0]=0,i[1]=u,i[2]=1;break;case 4:i[0]=l,i[1]=0,i[2]=1;break;default:i[0]=1,i[1]=0,i[2]=u}return a=(1-n)*r,[255*(n*i[0]+a),255*(n*i[1]+a),255*(n*i[2]+a)]},o.hcg.hsv=function(e){var t=e[1]/100,n=t+e[2]/100*(1-t),r=0;return n>0&&(r=t/n),[e[0],100*r,100*n]},o.hcg.hsl=function(e){var t=e[1]/100,n=e[2]/100*(1-t)+.5*t,r=0;return n>0&&n<.5?r=t/(2*n):n>=.5&&n<1&&(r=t/(2*(1-n))),[e[0],100*r,100*n]},o.hcg.hwb=function(e){var t=e[1]/100,n=t+e[2]/100*(1-t);return[e[0],100*(n-t),100*(1-n)]},o.hwb.hcg=function(e){var t=e[1]/100,n=1-e[2]/100,r=n-t,a=0;return r<1&&(a=(n-r)/(1-r)),[e[0],100*r,100*a]},o.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},o.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},o.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},o.gray.hsl=o.gray.hsv=function(e){return[0,0,e[0]]},o.gray.hwb=function(e){return[0,100,e[0]]},o.gray.cmyk=function(e){return[0,0,0,e[0]]},o.gray.lab=function(e){return[e[0],0,0]},o.gray.hex=function(e){var t=255&Math.round(e[0]/100*255),n=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(n.length)+n},o.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]}},tiwY:function(e,t,n){"use strict";var r=n("TqRt"),a=n("284h");t.__esModule=!0,t.default=void 0;var i=r(n("pVnL")),o=r(n("8OQS")),l=r(n("VbXa")),u=r(n("PJYZ")),s=r(n("lSNA")),c=a(n("q1tI")),d=a(n("plVc")),f=r(n("z/o8")),h="/Users/tyler/Documents/GitHub/gatsby-plugins/transition-link/gatsby-plugin-transition-link/src/AniLink/Cover.js",p=function(e){function t(t){var n;return n=e.call(this,t)||this,(0,s.default)((0,u.default)((0,u.default)(n)),"horizontal",(function(e){var t=e.node,r=e.props.length,a=e.direction,i="left"===a?"-100%":"100%",o="left"===a?"100%":"-100%",l=r/6,u=(r-l)/2;return f.default.timeline().set(n.cover,{y:0,x:o,display:"block"}).to(n.cover,{x:"0%",ease:"power1.easeInOut",duration:u}).set(t,{opacity:0}).to(n.cover,{x:i,ease:"power1.easeInOut",duration:u},"+="+l)})),(0,s.default)((0,u.default)((0,u.default)(n)),"vertical",(function(e){var t=e.node,r=e.props.length,a=e.direction,i="up"===a?"-100%":"100%",o="up"===a?"100%":"-100%",l=r/6,u=(r-l)/2;return f.default.timeline().set(n.cover,{y:o}).to(n.cover,{y:"0%",ease:"power1.easeInOut",duration:u}).set(t,{opacity:0}).to(n.cover,{y:i,ease:"power1.easeIn",duration:u},"+="+l)})),(0,s.default)((0,u.default)((0,u.default)(n)),"moveInDirection",(function(e){var t=e.props,r=e.direction,a=e.node;return"left"===r||"right"===r?n.horizontal({props:t,direction:r,node:a}):n.vertical({props:t,direction:r,node:a})})),n.horizontal=n.horizontal.bind((0,u.default)((0,u.default)(n))),n.vertical=n.vertical.bind((0,u.default)((0,u.default)(n))),n.cover=c.default.createRef(),n}return(0,l.default)(t,e),t.prototype.render=function(){var e=this,t=this.props.direction||"left",n=this.props.duration||1,r=this.props,a=(r.exit,r.entry,r.cover,(0,o.default)(r,["exit","entry","cover"]));return c.default.createElement(c.default.Fragment,null,c.default.createElement(d.default,(0,i.default)({exit:{length:n,trigger:function(n){var r=n.exit,a=n.node;return e.moveInDirection({props:r,node:a,direction:t})}},entry:{delay:n/2}},a,{__source:{fileName:h,lineNumber:83},__self:this}),this.props.children),c.default.createElement(d.TransitionPortal,{__source:{fileName:h,lineNumber:100},__self:this},c.default.createElement("div",{ref:function(t){return e.cover=t},style:{position:"fixed",background:this.props.bg||"#4b2571",top:0,left:0,width:"100vw",height:"100vh",transform:"translateY(100%)"},__source:{fileName:h,lineNumber:101},__self:this})))},t}(c.Component);t.default=p},uxXc:function(e,t,n){n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi");var r=n("t1N5"),a=n("onlc"),i={};Object.keys(r).forEach((function(e){i[e]={},Object.defineProperty(i[e],"channels",{value:r[e].channels}),Object.defineProperty(i[e],"labels",{value:r[e].labels});var t=a(e);Object.keys(t).forEach((function(n){var r=t[n];i[e][n]=function(e){var t=function(t){if(null==t)return t;arguments.length>1&&(t=Array.prototype.slice.call(arguments));var n=e(t);if("object"==typeof n)for(var r=n.length,a=0;a<r;a++)n[a]=Math.round(n[a]);return n};return"conversion"in e&&(t.conversion=e.conversion),t}(r),i[e][n].raw=function(e){var t=function(t){return null==t?t:(arguments.length>1&&(t=Array.prototype.slice.call(arguments)),e(t))};return"conversion"in e&&(t.conversion=e.conversion),t}(r)}))})),e.exports=i},yXPU:function(e,t){function n(e,t,n,r,a,i,o){try{var l=e[i](o),u=l.value}catch(s){return void n(s)}l.done?t(u):Promise.resolve(u).then(r,a)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(a,i){var o=e.apply(t,r);function l(e){n(o,a,i,l,u,"next",e)}function u(e){n(o,a,i,l,u,"throw",e)}l(void 0)}))}}}}]);
//# sourceMappingURL=component---src-pages-index-js-e3f30ad98f8be4aa1dd2.js.map