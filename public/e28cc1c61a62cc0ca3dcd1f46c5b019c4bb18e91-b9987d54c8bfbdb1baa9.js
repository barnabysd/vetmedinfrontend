(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{DTFT:function(e,t,i){"use strict";i.d(t,"f",(function(){return M})),i.d(t,"g",(function(){return Q})),i.d(t,"b",(function(){return V})),i.d(t,"d",(function(){return q})),i.d(t,"a",(function(){return B})),i.d(t,"c",(function(){return J})),i.d(t,"e",(function(){return W}));var n=i("itCy"),a=i("nHD1"),o=i.n(a),r=i("FR4q"),d=i.n(r),g=i("ViR1"),s=i.n(g),p=i("JxF9"),c=i.n(p),l=i("g0X1"),f=i.n(l),m=i("wwni"),u=i.n(m),_=i("j5sE"),h=i.n(_),P=i("nZHY"),y=i.n(P),x=i("SADc"),v=i.n(x),b=i("yI0q"),E=i.n(b),D=i("X9Lb"),w=i.n(D),T=i("yjWk"),I=i.n(T),N=i("IG+q"),R=i.n(N),O=i("ckkW"),Y=i.n(O),G=i("WQkL"),S=i.n(G),U=i("Y1K6"),L=i.n(U),C=i("Qw5V"),j=i.n(C),k=i("qiF2"),H=i.n(k),A=i("RKfI"),F=i.n(A),M=function(e){var t={videoUrl:"",videoPosterImage:"",videoThumbnail:"",videoTitle:"",videoForDog:"",videoText:"",videoCaptionText:"",videoNarrator:"",videoDuration:"0:00"};return e===n.g.DUDLEY&&(t={videoUrl:j.a,videoPosterImage:"",videoThumbnail:"",videoTitle:"Dudley's Ultrasound",videoForDog:"dudley",videoText:"",videoCaptionText:"Dudley's Ultrasound",videoNarrator:"no data",videoDuration:"0:00"}),e===n.g.POPPY&&(t={videoUrl:H.a,videoPosterImage:"",videoThumbnail:"",videoTitle:"Poppy's Ultrasound",videoForDog:"poppy",videoText:"",videoCaptionText:"Poppy's Ultrasound",videoNarrator:"",videoDuration:"0:00"}),e===n.g.REGGIE&&(t={videoUrl:F.a,videoPosterImage:"",videoThumbnail:"",videoTitle:"Reggie's Ultrasound",videoForDog:"reggie",videoText:"",videoCaptionText:"Reggie's Heart",videoNarrator:"",videoDuration:"0:00"}),t},Q=function(e,t){var i={videoUrl:R.a,videoPosterImage:"",videoThumbnail:"",videoTitle:"Normal Heart",videoForDog:"dudley",videoText:"",videoCaptionText:"Normal Heart",videoNarrator:"",videoDuration:"0:00"};return t===n.g.DUDLEY&&(i={videoUrl:E.a,videoPosterImage:"",videoThumbnail:"",videoTitle:"Dudley's Heart",videoForDog:"dudley",videoText:"",videoCaptionText:"Dudley's Heart",videoNarrator:"no data",videoDuration:"0:00"}),t===n.g.POPPY&&(i={videoUrl:w.a,videoPosterImage:"",videoThumbnail:"",videoTitle:"Poppy's Heart",videoForDog:"poppy",videoText:"",videoCaptionText:"Poppy's Heart",videoNarrator:"",videoDuration:"0:00"}),t===n.g.REGGIE&&(i={videoUrl:I.a,videoPosterImage:"",videoThumbnail:"",videoTitle:"Reggie's Heart",videoForDog:"reggie",videoText:"",videoCaptionText:"Reggie's Heart",videoNarrator:"",videoDuration:"0:00"}),i},V=function(e){return e===n.g.DUDLEY?Y.a:e===n.g.POPPY?S.a:e===n.g.REGGIE?L.a:"no data"},q=function(e){return e===n.g.DUDLEY?E.a:e===n.g.POPPY?w.a:e===n.g.REGGIE?I.a:R.a},B=function(e,t){if(void 0===e&&(e=n.c.NEUTRAL),e===n.c.NEUTRAL){if(t===n.g.DUDLEY)return"neutral_sitting_right_Dudley-Sitting-Pose04.png";if(t===n.g.POPPY)return"neutral_sitting_right_Poppy_Sitting_02.png";if(t===n.g.REGGIE)return"neutral_sitting_right_Reggie_Sitting_Poses02.png"}else if(e===n.c.HAPPY){if(t===n.g.DUDLEY)return"happy_sitting_right_Dudley-Sitting-Pose02.png";if(t===n.g.POPPY)return"happy_sitting_right_Poppy_Sitting_01.png";if(t===n.g.REGGIE)return"happy_sitting_right_Reggie_Sitting_Poses01.png"}else if(e===n.c.SAD){if(t===n.g.DUDLEY)return"sad_sitting_right_Dudley_Sitting_Pose05.png";if(t===n.g.POPPY)return"sad_sitting_right_Poppy_Sitting_03.png";if(t===n.g.REGGIE)return"sad_sitting_right_Reggie_Sitting_Poses05.png"}else if(e===n.c.NEUTRAL_STANDING){if(t===n.g.DUDLEY)return"neutral_standing_left_Dudley-Standing-Pose02.png";if(t===n.g.POPPY)return"neutral_standing_left_Poppy_Standing_02.png";if(t===n.g.REGGIE)return"neutral_standing_left_Reggie_Standing_Poses02.png"}else if(e===n.c.HAPPY_STANDING){if(t===n.g.DUDLEY)return"happy_standing_right_Dudley-Standing-Pose04.png";if(t===n.g.POPPY)return"happy_standing_right_Poppy_Standing_01.png";if(t===n.g.REGGIE)return"happy_standing_right_Reggie_Standing_Poses01.png"}else if(e===n.c.SAD_STANDING){if(t===n.g.DUDLEY)return"sad_standing_right_Dudley-Standing-Pose03.png";if(t===n.g.POPPY)return"sad_standing_right_Poppy_Standing_03.png";if(t===n.g.REGGIE)return"sad_standing_right_Reggie-Standing-Poses03.png"}else{if(t===n.g.DUDLEY)return"";if(t===n.g.POPPY)return"";if(t===n.g.REGGIE)return""}},J=function(e,t){if(void 0===e&&(e=n.c.NEUTRAL),e===n.c.NEUTRAL){if(t===n.g.DUDLEY)return o.a;if(t===n.g.POPPY)return d.a;if(t===n.g.REGGIE)return s.a}else if(e===n.c.NEUTRAL_STANDING){if(t===n.g.DUDLEY)return c.a;if(t===n.g.POPPY)return f.a;if(t===n.g.REGGIE)return u.a}else if(e===n.c.HAPPY){if(t===n.g.DUDLEY)return o.a;if(t===n.g.POPPY)return d.a;if(t===n.g.REGGIE)return s.a}else{if(t===n.g.DUDLEY)return o.a;if(t===n.g.POPPY)return d.a;if(t===n.g.REGGIE)return s.a}},W=function(e){return e===n.g.DUDLEY?h.a:e===n.g.POPPY?y.a:e===n.g.REGGIE?v.a:void 0}},FR4q:function(e,t,i){e.exports=i.p+"static/VET-2020-001_Questions_Poppy_Sitting-425c9b18e5486276be8fd0aa2623c35b.mp4"},"IG+q":function(e,t,i){e.exports=i.p+"static/Normal_Heart_v2-d1d9182a808dba27e333fb1f9ffcb384.mp4"},JxF9:function(e,t,i){e.exports=i.p+"static/VET-2020-001_Questions_Dudley_Standing-d20fc5b3b469d0e2a79063eafcad7037.mp4"},Qw5V:function(e,t,i){e.exports=i.p+"static/ultrasound_Dog_1_Dudley--9c56343e7a95b4057492398bcdf84146.mp4"},RKfI:function(e,t,i){e.exports=i.p+"static/ultrasound_Dog_3_Reggie-f308a057a55f98c98edefc11a71f6eba.mp4"},SADc:function(e,t,i){e.exports=i.p+"static/VET-2020-001_Questions_MrsRichardson-3f5056950f92c4a6ed6a43adda7670da.mp4"},Spfr:function(e,t,i){"use strict";var n=i("q1tI"),a=i.n(n),o=i("8uUf");t.a=function(e){var t=e.imgName,i=void 0===t?"oakley.png":t,n=e.width,r=void 0===n?"300px":n,d=e.height,g=void 0===d?"300px":d;return a.a.createElement("div",{style:{height:g,width:r,backgroundColor:"none",transition:"width 1s height 1s"}},a.a.createElement(o.a,{imgName:i}))}},ViR1:function(e,t,i){e.exports=i.p+"static/VET-2020-001_Questions_Reggie_Sitting-b6fcff2fc486d5ea31fe4a55a0319c40.mp4"},WQkL:function(e,t,i){e.exports=i.p+"static/Poppy_Final_Build-7e7e8e955dc570342a8947191ef804b1.mp4"},X9Lb:function(e,t,i){e.exports=i.p+"static/Dog_heart_Poppy-26fd1adf40f0193df9d7d0c48fd7667a.mp4"},Y1K6:function(e,t,i){e.exports=i.p+"static/Reggie_Final_Build_1-964d56c8a683dd9c2319b94faeb40153.mp4"},ckkW:function(e,t,i){e.exports=i.p+"static/Dudley_Final_Build-8b638efb120cc320610b912c8ff20326.mp4"},g0X1:function(e,t,i){e.exports=i.p+"static/VET-2020-001_Questions_Poppy_Standing-9f5616b8dc6b977b98ae9973aa517ca3.mp4"},j5sE:function(e,t,i){e.exports=i.p+"static/VET-2020-001_Questions_MrsJenkins-303172c55362c04b9b3bfe0982717514.mp4"},nHD1:function(e,t,i){e.exports=i.p+"static/VET-2020-001_Questions_Dudley_Sitting-ccb9d5c575b9af63aa2e9322508c9874.mp4"},nZHY:function(e,t,i){e.exports=i.p+"static/VET-2020-001_Questions_MrOakley-19cd731c2d2ed65bfaa99b40a21ff996.mp4"},qiF2:function(e,t,i){e.exports=i.p+"static/ultrasound_Dog_2_Poppy-ee1908278c8d616b4fa1f6674166ba3c.mp4"},vUEc:function(e,t,i){"use strict";i.d(t,"c",(function(){return c})),i.d(t,"i",(function(){return l})),i.d(t,"g",(function(){return f})),i.d(t,"d",(function(){return m})),i.d(t,"h",(function(){return u})),i.d(t,"f",(function(){return P})),i.d(t,"b",(function(){return b})),i.d(t,"j",(function(){return E})),i.d(t,"e",(function(){return D})),i.d(t,"a",(function(){return w}));var n=i("q1tI"),a=i.n(n),o=i("vOnD"),r=i("8uUf"),d=i("Spfr"),g=i("zDcZ"),s=i("a5sw"),p=i("itCy"),c=o.b.div.withConfig({displayName:"PageParts__HeaderText",componentId:"sc-86fwxb-0"})(["padding-bottom:2rem;font-family:",";font-size:2.938rem;font-weight:600;font-stretch:normal;font-style:normal;line-height:1.15;letter-spacing:-0.47px;text-align:left;color:",";"],g.a.overrides.MuiTypography.h1.fontFamily,g.a.palette.midnightBlue.main),l=o.b.div.withConfig({displayName:"PageParts__SubtitleText",componentId:"sc-86fwxb-1"})(["padding-bottom:2rem;margin-bottom:2rem;height:1.938rem;font-family:",";font-size:1.375rem;font-weight:600;font-stretch:normal;font-style:normal;line-height:1.4;letter-spacing:-0.22px;text-align:left;color:",";"],g.a.typography.fontFamily,g.a.palette.raven.main),f=(o.b.div.attrs((function(e){return{id:e.id,style:e.style,onClick:e.onClick}})).withConfig({displayName:"PageParts__WhiteDotButton",componentId:"sc-86fwxb-2"})(["width:4.25rem;height:4.25rem;border-radius:50%;background-color:white;"]),o.b.div.attrs((function(e){return{id:e.id,style:e.style}})).withConfig({displayName:"PageParts__PageSection",componentId:"sc-86fwxb-3"})(["display:flex;flex-direction:row;width:100%;margin:auto;@media (max-width:","px){width:100%;flex-direction:column;align-items:center;}"],g.c)),m=o.b.div.attrs((function(e){return{id:e.id}})).withConfig({displayName:"PageParts__LeftPageSection",componentId:"sc-86fwxb-4"})(["display:flex;width:50%;height:100vh;flex-direction:column;align-items:flex-end;justify-content:center;@media (max-width:","px){width:100%;align-items:center;height:10%;}"],g.c),u=o.b.div.attrs((function(e){return{id:e.id}})).withConfig({displayName:"PageParts__RightPageSection",componentId:"sc-86fwxb-5"})(["display:flex;width:50%;height:100vh;flex-direction:column;align-items:flex-start;justify-content:center;@media (max-width:","px){width:100%;height:10%;margin-bottom:100px;}"],g.c),_=o.b.div.withConfig({displayName:"PageParts__OwnerImageCloseUpStyle",componentId:"sc-86fwxb-6"})(["width:800px;height:1600px;margin-right:-200px;margin-top:600px;"]),h=Object(o.b)(_).withConfig({displayName:"PageParts__OwnerImageCloseUpDudley",componentId:"sc-86fwxb-7"})(["margin-right:-20px;margin-top:300px;"]),P=function(e){var t=e.dogChoice,i=e.ownerState,n=void 0===i?p.c.HAPPY:i,o=e.style,d=void 0===o?{}:o;return a.a.createElement(a.a.Fragment,null,a.a.createElement(h,{style:Object.assign({},d,{display:Object(s.d)(t,p.g.DUDLEY)})},n===p.c.HAPPY?a.a.createElement(r.a,{style:{marginLeft:"-100px",marginTop:"-50px"},imgName:"owner_resp_Mrs-Jenkins-Pose01.png"}):a.a.createElement(r.a,{imgName:"owner_resp_mrs-jenkins-pose-02.png"})),a.a.createElement(_,{style:Object.assign({},d,{display:Object(s.d)(t,p.g.POPPY)})},n===p.c.HAPPY?a.a.createElement(r.a,{style:{marginLeft:"-200px",marginTop:"-50px"},imgName:"owner_resp_Mr-Oakley-Poses02.png"}):a.a.createElement(r.a,{imgName:"owner_resp_mr-oakley-poses-01.png"})),a.a.createElement(_,{style:Object.assign({},d,{display:Object(s.d)(t,p.g.REGGIE)})},n===p.c.HAPPY?a.a.createElement(r.a,{style:{marginLeft:"-250px",marginTop:"-50px"},imgName:"owner_resp_Mrs-Richardson-Pose02.png"}):a.a.createElement(r.a,{imgName:"owner_resp_mrs-richardson-pose-03.png"})))},y=o.b.div.withConfig({displayName:"PageParts__OwnerImageStyle",componentId:"sc-86fwxb-8"})(["width:500px;height:900px;margin-right:0px;"]),x=(Object(o.b)(y).withConfig({displayName:"PageParts__OwnerImageStyleDudley",componentId:"sc-86fwxb-9"})(["width:500px;height:600px;margin-right:0px;"]),o.b.div.withConfig({displayName:"PageParts__OwnerCertSummaryImageHolder",componentId:"sc-86fwxb-10"})(["display:flex;flex-wrap:wrap;justify-content:flex-end;& .block{position:relative;}"])),v=o.b.div.withConfig({displayName:"PageParts__DogImageHolderBase",componentId:"sc-86fwxb-11"})(["display:flex;width:100%;height:314px;"]),b=Object(o.b)(v).withConfig({displayName:"PageParts__DogImageHolder",componentId:"sc-86fwxb-12"})(["width:100%;height:614px;display:flex;flex-direction:row;justify-content:center;align-items:center;@media (max-width:","px){height:314px}@media (max-width:","px){height:314px;}"],g.c,g.d),E=function(e){var t=e.dogChoice,i=e.dogState,n=(void 0===i&&p.c.NEUTRAL,e.style),o=void 0===n?{}:n;return a.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",minHeight:"100vh"}},a.a.createElement(x,{style:Object.assign({},o,{display:Object(s.d)(t,p.g.DUDLEY)})},a.a.createElement(d.a,{imgName:"Mrs-Jenkins-and-Dudley-Poses-03.png",height:"100vh",width:"600px"})),a.a.createElement(x,{style:Object.assign({},o,{display:Object(s.d)(t,p.g.POPPY)})},a.a.createElement(d.a,{imgName:"Mr-Oakley-and-Poppy-Poses03.png",height:"100vh",width:"400px"})),a.a.createElement(x,{style:Object.assign({},o,{display:Object(s.d)(t,p.g.REGGIE)})},a.a.createElement(d.a,{imgName:"Mrs-Richardson-and-Reggie-Poses-03.png",height:"100vh",width:"400px"})))},D=function(e){var t=e.dogChoice,i=e.style,n=void 0===i?{}:i;return a.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",minHeight:"100vh"}},a.a.createElement(x,{style:Object.assign({},n,{display:Object(s.d)(t,p.g.DUDLEY)})},a.a.createElement("div",{className:"block",style:{marginLeft:"-200px",marginTop:"-50px"}},a.a.createElement("div",{style:{position:"absolute",left:"0",top:"0"}},a.a.createElement(d.a,{imgName:"Mrs-Jenkins-and-Dudley-Pose02.png",height:"680px",width:"500px"})))),a.a.createElement(x,{style:Object.assign({},n,{display:Object(s.d)(t,p.g.POPPY)})},a.a.createElement("div",{className:"block",style:{marginLeft:"-200px",marginTop:"-50px"}},a.a.createElement("div",{style:{position:"absolute",left:"0",top:"0px"}},a.a.createElement(d.a,{imgName:"Mr-Oakley-and-Poppy-Poses02.png",height:"680px",width:"450px"})))),a.a.createElement(x,{style:Object.assign({},n,{display:Object(s.d)(t,p.g.REGGIE)})},a.a.createElement("div",{className:"block",style:{marginLeft:"-200px",marginTop:"-50px"}},a.a.createElement("div",{style:{position:"absolute",left:"0",top:"0"}},a.a.createElement(d.a,{imgName:"Mrs-Richardson-and-Reggie-Pose02-RIGHT.png",height:"690px",width:"500px"})))))},w=o.b.div.withConfig({displayName:"PageParts__BottomCenterTaskText",componentId:"sc-86fwxb-13"})(["width:692px;height:61.8px;font-family:",";font-size:22px;font-weight:600;font-stretch:normal;font-style:normal;line-height:1.4;letter-spacing:-0.22px;text-align:center;color:",";@media (max-width:","px){width:100%;}@media (max-width:","px){width:100%;}"],g.a.typography.fontFamily,g.a.palette.midnightBlue.main,g.c,g.d)},wwni:function(e,t,i){e.exports=i.p+"static/VET-2020-001_Questions_Reggie_Standing-be7884d04014b2d73b9e7755ddc20a39.mp4"},yI0q:function(e,t,i){e.exports=i.p+"static/Dog_heart_Dudley-67ef3f6b0bfceda5b6375acf75239fe1.mp4"},yjWk:function(e,t,i){e.exports=i.p+"static/Dog_heart_Reggie-7b4a70e24b0093cc8de64baa7c7a88d5.mp4"}}]);
//# sourceMappingURL=e28cc1c61a62cc0ca3dcd1f46c5b019c4bb18e91-b9987d54c8bfbdb1baa9.js.map