(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{KGtl:function(e,t,o){"use strict";o("sC2a"),o("q1tI");var i=o("vOnD"),n=(o("8uUf"),o("a5sw")),c=(o("82Oa"),o("CALc"),o("zDcZ")),a=o("itCy"),l=o("IBCv"),d=(o("P/bV"),o("ooR/")),r=o("xvYo"),s=o("vUEc"),p=o("qKvR"),u=i.default.div.withConfig({displayName:"OwnerResPage__Quotes",componentId:"fq4esd-0"})(["position:absolute;left:12px;top:30px;width:24px;height:17.2px;font-family:",";font-size:4rem;background-color:transparent;color:white;"],c.a.overrides.MuiTypography.h1.fontFamily),m=i.default.div.withConfig({displayName:"OwnerResPage__QuoteDot",componentId:"fq4esd-1"})(["position:absolute;left:22px;top:-33px;width:62px;height:62px;border-radius:50%;border:solid 4px ",";background-color:",";"],c.a.palette.cloudBlue.main,c.a.palette.deminBlue.main),g=i.default.div.withConfig({displayName:"OwnerResPage__QuoteBox",componentId:"fq4esd-2"})(["position:relative;padding:1.5rem;box-shadow:0 8px 12px 0 rgba(15,87,159,0.2);border-radius:1rem 1rem 1rem 0rem;background-color:white;"]),f=i.default.div.withConfig({displayName:"OwnerResPage__QuoteBoxBodyText",componentId:"fq4esd-3"})(["width:616px;font-family:",";font-size:29px;font-weight:600;font-stretch:normal;font-style:normal;line-height:1.4;letter-spacing:-0.29px;text-align:left;color:",";padding-bottom:2rem;"],c.a.typography.fontFamily,c.a.palette.midnightBlue.main),O=i.default.div.withConfig({displayName:"OwnerResPage__QuoteBoxBodySmallText",componentId:"fq4esd-4"})(["width:616px;height:25px;font-family:",";font-size:18px;font-weight:normal;font-stretch:normal;font-style:normal;line-height:1.4;letter-spacing:normal;text-align:left;color:",";"],c.a.typography.fontFamily,c.a.palette.raven50.main),b=i.default.div.withConfig({displayName:"OwnerResPage__OwnerResponseHeaderText",componentId:"fq4esd-5"})(["font-family:",";width:691px;font-size:47px;font-weight:600;font-stretch:normal;font-style:normal;line-height:1.15;letter-spacing:-0.47px;text-align:left;color:",";margin-bottom:1.5rem;"],c.a.overrides.MuiTypography.h1.fontFamily,c.a.palette.midnightBlue.main),h=i.default.div.withConfig({displayName:"OwnerResPage__OwnerResponseBox",componentId:"fq4esd-6"})(["position:relative;width:691px;padding:1.5rem;padding-top:1rem;margin-bottom:0.5rem;border-radius:1rem 1rem 1rem 0rem;background-color:",";-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;"],c.a.palette.skyBlue.main),y=i.default.div.withConfig({displayName:"OwnerResPage__OwnerResponseDarkBlueDot",componentId:"fq4esd-7"})(["position:absolute;left:1rem;top:1.3rem;width:32px;height:32px;border-radius:50%;border:solid 1px #001d5f;background-color:#001d5f;"]),x=(Object(i.default)(y).withConfig({displayName:"OwnerResPage__OwnerResponseDarkBlueDotSelected",componentId:"fq4esd-8"})(["background-color:",";"],c.a.palette.midnightBlue.main),i.default.div.withConfig({displayName:"OwnerResPage__OwnerResponseBodyText",componentId:"fq4esd-9"})(["width:580px;font-family:",";font-size:15px;font-weight:normal;font-stretch:normal;font-style:normal;line-height:1.6;letter-spacing:normal;text-align:left;padding-left:2rem;color:",";& strong{font-weight:600;}& b{font-weight:600;}"],c.a.typography.fontFamily,c.a.palette.midnightBlue.main)),_=(Object(i.default)(x).withConfig({displayName:"OwnerResPage__OwnerResponseBodyTextSelected",componentId:"fq4esd-10"})(["color:white;"]),i.default.div.withConfig({displayName:"OwnerResPage__OrangeDotSmall",componentId:"fq4esd-11"})(["position:absolute;left:0.5rem;top:0.5rem;width:12px;height:12px;border-radius:50%;background-color:",";"],c.a.palette.peachCobbler.main));t.a=function(e){var t=e.id,o=e.style,i=e.dogChoice,w=e.resources,j=e.step,R=e.setCurrentStep,C=["option1","option2","option3","option4","option5"];console.log(w);var E=function(e){var t=e.idNum,o=e.optionText,i=e.selectOption,c="option"+t,l="optionOrangeDot"+t,d={__html:Object(n.f)(Object(n.g)(o,a.b))};return Object(p.c)(h,{id:c,"data-active":!1,onClick:i},Object(p.c)(y,null,Object(p.c)("span",{className:"orange-dot",id:l,style:{display:"none"}},Object(p.c)(_,null))),Object(p.c)(x,{dangerouslySetInnerHTML:d}))},N=function(e){e.style.backgroundColor=c.a.palette.skyBlue.main,e.style.color=c.a.palette.midnightBlue.main,e.setAttribute("data-active",!1);for(var t=document.getElementsByClassName("orange-dot"),o=0;o<t.length;o++)t[o].style.display="none"},S=function(e){if(!0===e.currentTarget["data-active"])N(e.currentTarget);else{for(var t=0;t<C.length;t++)document.getElementById("option"+t)&&N(document.getElementById("option"+t));!function(e){e.style.backgroundColor=c.a.palette.deminBlue.main,e.style.color=c.a.palette.midnightBlue.main,e.setAttribute("data-active",!0);var t="optionOrangeDot"+e.id.replace(/option/,"");document.getElementById(t).style.display="flex"}(e.currentTarget)}};if(j===a.d.CORRECT_ANSWER||j===a.d.INCORRECT_ANSWER){console.log("========= CORRECT_ANSWER OR INCORRECT_ANSWER");var v=w;return Object(p.c)(s.d,{id:t,style:o},Object(p.c)(s.a,{id:"summaryImage"},Object(p.c)(s.b,{dogChoice:i})),Object(p.c)(s.e,{id:"summaryText"},Object(p.c)(r.a,{currentCaseStudySlideData:v,currentSlidePosition:0,onClickHandler:R,onClickHandlers:[R],onClickHandlersParams:[a.d.QUESTION_POSED],useBigVideoWidget:!0}),j===a.d.CORRECT_ANSWER&&v.continueLink?Object(p.c)(d.a,{to:Object(n.e)(w.continueLink.url),distanceFromSide:"2%",bottom:"2%",linkText:w.continueLink.title}):""),Object(p.c)(l.a,null))}if(j===a.d.QUESTION_POSED)return console.log("========= QUESTION_POSED"),Object(p.c)(s.d,{id:t,style:o},Object(p.c)(s.a,{id:"summaryImage"},Object(p.c)(s.c,{dogChoice:i})),Object(p.c)(s.e,{id:"summaryText"},Object(p.c)(b,null,Object(n.f)(Object(n.h)(w.field_questiontext.processed,a.b))),w.field_optionsbodytext1?Object(p.c)(E,{idNum:"1",selectOption:S,optionText:w.field_optionsbodytext1.processed}):"",w.field_optionsbodytext2?Object(p.c)(E,{idNum:"2",selectOption:S,optionText:w.field_optionsbodytext2.processed}):"",w.field_optionsbodytext3?Object(p.c)(E,{idNum:"3",selectOption:S,optionText:w.field_optionsbodytext3.processed}):"",w.field_optionsbodytext4?Object(p.c)(E,{idNum:"4",selectOption:S,optionText:w.field_optionsbodytext4.processed}):"",w.field_optionsbodytext5?Object(p.c)(E,{idNum:"5",selectOption:S,optionText:w.field_optionsbodytext5.processed}):"",Object(p.c)(d.a,{onClick:function(){var e=-1;w.field_optioniscorrect1&&"yes"===w.field_optioniscorrect1&&(e=1),w.field_optioniscorrect2&&"yes"===w.field_optioniscorrect2&&(e=2),w.field_optioniscorrect3&&"yes"===w.field_optioniscorrect3&&(e=3),w.field_optioniscorrect4&&"yes"===w.field_optioniscorrect4&&(e=4),w.field_optioniscorrect5&&"yes"===w.field_optioniscorrect5&&(e=5),w.field_optioniscorrect6&&"yes"===w.field_optioniscorrect6&&(e=6);for(var t=!1,o=0;o<C.length;o++)if(document.getElementById("option"+o)){var i=document.getElementById("option"+o);if(console.log("(i)",o),console.log("correctAnswerPointer",e),"true"==i.getAttribute("data-active")&&console.log("TRUE"),"true"==i.getAttribute("data-active")&&o===e){console.log("CORRECT"),t=!0;break}}t?R(a.d.CORRECT_ANSWER):(console.log("INCORRECT"),R(a.d.INCORRECT_ANSWER))},to:"button",distanceFromSide:"2%",bottom:"2%",linkText:w.field_continuelink.title})),Object(p.c)(l.a,null));if(j===a.d.QUESTION_POSED_BY_OWNER){console.log("=========== QUESTION_POSED_BY_OWNER ");return Object(p.c)(s.d,{id:t,style:o},Object(p.c)(s.a,{id:"summaryImage"},Object(p.c)(s.c,{dogChoice:i})),Object(p.c)(s.e,{id:"summaryText"},Object(p.c)(g,null,Object(p.c)(m,null,Object(p.c)(u,null,"“")),Object(p.c)(f,null,Object(n.c)(Object(n.g)(w.field_questiontext.processed,a.b))),Object(p.c)(O,null,Object(n.c)(Object(n.h)(w.field_additionalbodytext.processed,a.b)))),Object(p.c)(d.a,{onClick:function(e){e.preventDefault(),console.log("setStepQuestionPosed = ",a.d.QUESTION_POSED),R(a.d.QUESTION_POSED)},to:"button",distanceFromSide:"2%",bottom:"2%",linkText:w.field_continuelink.title})),Object(p.c)(l.a,null))}return Object(p.c)("div",null,"no step")}},SXOt:function(e,t,o){"use strict";o.r(t),o.d(t,"pageQuery",(function(){return m}));o("E5k/");var i=o("q1tI"),n=o("mwIZ"),c=o.n(n),a=(o("zDcZ"),o("itCy")),l=o("a5sw"),d=o("r5vi"),r=o("KGtl"),s=o("Bl7J"),p=o("Sx81"),u=o("qKvR");t.default=function(e){var t=e.data;console.log(t);var o=Object(d.a)(a.a),n=o[0],m=o[1],g=(o[2],{step:a.d.QUESTION_POSED_BY_OWNER}),f=Object(i.useState)(g),O=f[0],b=f[1];console.log("=========== step ",O.step),console.log("state",O);var h,y=n.dogChoice?n.dogChoice:a.b.DUDLEY,x=c()(t,"allNodeQuestion.nodes"),_="ownerResponsePage",w=function(e){console.log("=========== setCurrentStep - step",e),b(Object.assign(Object.assign({},O),{},{step:e}))};O.step===a.d.CORRECT_ANSWER&&m("ownerResponseTaskCompleted",!0,"/");switch(O.step){case a.d.QUESTION_POSED_BY_OWNER:case a.d.QUESTION_POSED:h=Object(l.b)(x,"owner-response");break;case a.d.CORRECT_ANSWER:h=p.e;break;case a.d.INCORRECT_ANSWER:h=p.f;break;default:return"no crrent slide"}return console.log(h),h?Object(u.c)(s.a,null,O.step===a.d.QUESTION_POSED_BY_OWNER?Object(u.c)(r.a,{step:a.d.QUESTION_POSED_BY_OWNER,id:_,style:{display:"flex"},dogChoice:y,setCurrentStep:w,resources:h}):"",O.step===a.d.QUESTION_POSED?Object(u.c)(r.a,{step:a.d.QUESTION_POSED,id:_,style:{display:"flex"},dogChoice:y,setCurrentStep:w,resources:h}):"",O.step===a.d.CORRECT_ANSWER?Object(u.c)(r.a,{step:a.d.CORRECT_ANSWER,id:_,style:{display:"flex"},dogChoice:y,setCurrentStep:w,resources:h}):"",O.step===a.d.INCORRECT_ANSWER?Object(u.c)(r.a,{step:a.d.INCORRECT_ANSWER,id:_,style:{display:"flex"},dogChoice:y,setCurrentStep:w,resources:h}):""):"resources not found"};var m="4259012204"},vUEc:function(e,t,o){"use strict";o.d(t,"d",(function(){return u})),o.d(t,"a",(function(){return m})),o.d(t,"e",(function(){return g})),o.d(t,"c",(function(){return f})),o.d(t,"b",(function(){return O}));o("q1tI");var i=o("vOnD"),n=o("8uUf"),c=o("zDcZ"),a=o("a5sw"),l=o("itCy"),d=o("qKvR"),r=function(){return Object(d.c)(n.a,{imgName:"owner_resp_mrs-jenkins-pose-02.png"})},s=function(){return Object(d.c)(n.a,{imgName:"owner_resp_mr-oakley-poses-01.png"})},p=function(){return Object(d.c)(n.a,{imgName:"owner_resp_mrs-richardson-pose-03.png"})},u=i.default.div.attrs((function(e){return{id:e.id,style:e.style}})).withConfig({displayName:"PageParts__PageSection",componentId:"sc-1jkib7h-0"})(["display:flex;flex-direction:row;width:100%;margin:auto;@media (max-width:","px){width:100%;flex-direction:column;align-items:center;}"],c.c),m=i.default.div.attrs((function(e){return{id:e.id}})).withConfig({displayName:"PageParts__LeftPageSection",componentId:"sc-1jkib7h-1"})(["display:flex;width:50%;height:100vh;flex-direction:column;align-items:flex-end;justify-content:center;@media (max-width:","px){width:100%;align-items:center;height:10%;}"],c.c),g=i.default.div.attrs((function(e){return{id:e.id}})).withConfig({displayName:"PageParts__RightPageSection",componentId:"sc-1jkib7h-2"})(["display:flex;width:50%;height:100vh;flex-direction:column;align-items:flex-start;justify-content:center;@media (max-width:","px){width:100%;height:10%;margin-bottom:100px;}"],c.c),f=function(e){var t=e.dogChoice;return Object(d.c)("div",null,Object(d.c)("div",{style:{display:Object(a.a)(t,l.b.DUDLEY),width:"1000px",height:"1000px",marginRight:"-250px"}},Object(d.c)(r,null)),Object(d.c)("div",{style:{display:Object(a.a)(l.b,l.b.POPPY),width:"1000px",height:"1000px",marginRight:"-250px"}},Object(d.c)(s,null)),Object(d.c)("div",{style:{display:Object(a.a)(l.b,l.b.POPPY),width:"1000px",height:"1000px",marginRight:"-250px"}},Object(d.c)(p,null)))},O=function(e){var t=e.dogChoice;return Object(d.c)("div",null,Object(d.c)("div",{style:{display:Object(a.a)(t,l.b.DUDLEY),width:"1000px",height:"1000px",marginRight:"-250px"}},Object(d.c)(r,null)),Object(d.c)("div",{style:{display:Object(a.a)(l.b,l.b.POPPY),width:"1000px",height:"1000px",marginRight:"-250px"}},Object(d.c)(s,null)),Object(d.c)("div",{style:{display:Object(a.a)(l.b,l.b.POPPY),width:"1000px",height:"1000px",marginRight:"-250px"}},Object(d.c)(p,null)))}}}]);
//# sourceMappingURL=component---src-pages-owner-response-continued-js-adaf4e9bbf62b4f27415.js.map