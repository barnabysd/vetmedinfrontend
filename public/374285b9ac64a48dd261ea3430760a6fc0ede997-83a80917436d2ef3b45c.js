(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{DTFT:function(t,e,i){"use strict";i.d(e,"f",(function(){return O})),i.d(e,"g",(function(){return V})),i.d(e,"b",(function(){return Q})),i.d(e,"d",(function(){return j})),i.d(e,"a",(function(){return q})),i.d(e,"c",(function(){return M})),i.d(e,"e",(function(){return W}));var n=i("itCy"),o=i("nHD1"),a=i.n(o),r=i("FR4q"),d=i.n(r),l=i("ViR1"),p=i.n(l),f=i("JxF9"),g=i.n(f),s=i("g0X1"),c=i.n(s),u=i("wwni"),m=i.n(u),h=i("j5sE"),y=i.n(h),v=i("nZHY"),_=i.n(v),b=i("SADc"),x=i.n(b),P=i("yI0q"),w=i.n(P),E=i("X9Lb"),D=i.n(E),T=i("yjWk"),I=i.n(T),N=i("IG+q"),R=i.n(N),A=i("ckkW"),C=i.n(A),z=i("WQkL"),S=i.n(z),Y=i("Y1K6"),G=i.n(Y),U=i("Qw5V"),k=i.n(U),F=i("qiF2"),H=i.n(F),B=i("RKfI"),L=i.n(B),O=function(t){var e={videoUrl:"",videoPosterImage:"",videoThumbnail:"",videoTitle:"",videoForDog:"",videoText:"",videoCaptionText:"",videoNarrator:"",videoDuration:"0:00"};return t===n.g.DUDLEY&&(e={videoUrl:k.a,videoPosterImage:"",videoThumbnail:"",videoTitle:"Dudley's Ultrasound",videoForDog:"dudley",videoText:"",videoCaptionText:"Dudley's Ultrasound",videoNarrator:"no data",videoDuration:"0:00"}),t===n.g.POPPY&&(e={videoUrl:H.a,videoPosterImage:"",videoThumbnail:"",videoTitle:"Poppy's Ultrasound",videoForDog:"poppy",videoText:"",videoCaptionText:"Poppy's Ultrasound",videoNarrator:"",videoDuration:"0:00"}),t===n.g.REGGIE&&(e={videoUrl:L.a,videoPosterImage:"",videoThumbnail:"",videoTitle:"Reggie's Ultrasound",videoForDog:"reggie",videoText:"",videoCaptionText:"Reggie's Heart",videoNarrator:"",videoDuration:"0:00"}),e},V=function(t,e){var i={videoUrl:R.a,videoPosterImage:"",videoThumbnail:"",videoTitle:"Normal Heart",videoForDog:"dudley",videoText:"",videoCaptionText:"Normal Heart",videoNarrator:"",videoDuration:"0:00"};return e===n.g.DUDLEY&&(i={videoUrl:w.a,videoPosterImage:"",videoThumbnail:"",videoTitle:"Dudley's Heart",videoForDog:"dudley",videoText:"",videoCaptionText:"Dudley's Heart",videoNarrator:"no data",videoDuration:"0:00"}),e===n.g.POPPY&&(i={videoUrl:D.a,videoPosterImage:"",videoThumbnail:"",videoTitle:"Poppy's Heart",videoForDog:"poppy",videoText:"",videoCaptionText:"Poppy's Heart",videoNarrator:"",videoDuration:"0:00"}),e===n.g.REGGIE&&(i={videoUrl:I.a,videoPosterImage:"",videoThumbnail:"",videoTitle:"Reggie's Heart",videoForDog:"reggie",videoText:"",videoCaptionText:"Reggie's Heart",videoNarrator:"",videoDuration:"0:00"}),i},Q=function(t){return t===n.g.DUDLEY?C.a:t===n.g.POPPY?S.a:t===n.g.REGGIE?G.a:"no data"},j=function(t){return t===n.g.DUDLEY?w.a:t===n.g.POPPY?D.a:t===n.g.REGGIE?I.a:R.a},q=function(t,e){if(void 0===t&&(t=n.c.NEUTRAL),t===n.c.NEUTRAL){if(e===n.g.DUDLEY)return"neutral_sitting_right_Dudley-Sitting-Pose04.png";if(e===n.g.POPPY)return"neutral_sitting_right_Poppy_Sitting_02.png";if(e===n.g.REGGIE)return"neutral_sitting_right_Reggie_Sitting_Poses02.png"}else if(t===n.c.HAPPY){if(e===n.g.DUDLEY)return"happy_sitting_right_Dudley-Sitting-Pose02.png";if(e===n.g.POPPY)return"happy_sitting_right_Poppy_Sitting_01.png";if(e===n.g.REGGIE)return"happy_sitting_right_Reggie_Sitting_Poses01.png"}else if(t===n.c.SAD){if(e===n.g.DUDLEY)return"sad_sitting_right_Dudley_Sitting_Pose05.png";if(e===n.g.POPPY)return"sad_sitting_right_Poppy_Sitting_03.png";if(e===n.g.REGGIE)return"sad_sitting_right_Reggie_Sitting_Poses05.png"}else if(t===n.c.NEUTRAL_STANDING){if(e===n.g.DUDLEY)return"neutral_standing_left_Dudley-Standing-Pose02.png";if(e===n.g.POPPY)return"neutral_standing_left_Poppy_Standing_02.png";if(e===n.g.REGGIE)return"neutral_standing_left_Reggie_Standing_Poses02.png"}else if(t===n.c.HAPPY_STANDING){if(e===n.g.DUDLEY)return"happy_standing_right_Dudley-Standing-Pose04.png";if(e===n.g.POPPY)return"happy_standing_right_Poppy_Standing_01.png";if(e===n.g.REGGIE)return"happy_standing_right_Reggie_Standing_Poses01.png"}else if(t===n.c.SAD_STANDING){if(e===n.g.DUDLEY)return"sad_standing_right_Dudley-Standing-Pose03.png";if(e===n.g.POPPY)return"sad_standing_right_Poppy_Standing_03.png";if(e===n.g.REGGIE)return"sad_standing_right_Reggie-Standing-Poses03.png"}else{if(e===n.g.DUDLEY)return"";if(e===n.g.POPPY)return"";if(e===n.g.REGGIE)return""}},M=function(t,e){if(void 0===t&&(t=n.c.NEUTRAL),t===n.c.NEUTRAL){if(e===n.g.DUDLEY)return a.a;if(e===n.g.POPPY)return d.a;if(e===n.g.REGGIE)return p.a}else if(t===n.c.NEUTRAL_STANDING){if(e===n.g.DUDLEY)return g.a;if(e===n.g.POPPY)return c.a;if(e===n.g.REGGIE)return m.a}else if(t===n.c.HAPPY){if(e===n.g.DUDLEY)return a.a;if(e===n.g.POPPY)return d.a;if(e===n.g.REGGIE)return p.a}else{if(e===n.g.DUDLEY)return a.a;if(e===n.g.POPPY)return d.a;if(e===n.g.REGGIE)return p.a}},W=function(t){return t===n.g.DUDLEY?y.a:t===n.g.POPPY?_.a:t===n.g.REGGIE?x.a:void 0}},FR4q:function(t,e,i){t.exports=i.p+"static/VET-2020-001_Questions_Poppy_Sitting-425c9b18e5486276be8fd0aa2623c35b.mp4"},"IG+q":function(t,e,i){t.exports=i.p+"static/Normal_Heart_v2-d1d9182a808dba27e333fb1f9ffcb384.mp4"},JxF9:function(t,e,i){t.exports=i.p+"static/VET-2020-001_Questions_Dudley_Standing-d20fc5b3b469d0e2a79063eafcad7037.mp4"},Qw5V:function(t,e,i){t.exports=i.p+"static/ultrasound_Dog_1_Dudley--9c56343e7a95b4057492398bcdf84146.mp4"},RKfI:function(t,e,i){t.exports=i.p+"static/ultrasound_Dog_3_Reggie-f308a057a55f98c98edefc11a71f6eba.mp4"},SADc:function(t,e,i){t.exports=i.p+"static/VET-2020-001_Questions_MrsRichardson-3f5056950f92c4a6ed6a43adda7670da.mp4"},ViR1:function(t,e,i){t.exports=i.p+"static/VET-2020-001_Questions_Reggie_Sitting-b6fcff2fc486d5ea31fe4a55a0319c40.mp4"},VwcB:function(t,e,i){"use strict";i.d(e,"b",(function(){return l})),i.d(e,"a",(function(){return p})),i.d(e,"e",(function(){return f})),i.d(e,"v",(function(){return g})),i.d(e,"w",(function(){return s})),i.d(e,"q",(function(){return c})),i.d(e,"h",(function(){return u})),i.d(e,"B",(function(){return m})),i.d(e,"C",(function(){return h})),i.d(e,"f",(function(){return y})),i.d(e,"g",(function(){return v})),i.d(e,"d",(function(){return _})),i.d(e,"c",(function(){return b})),i.d(e,"l",(function(){return x})),i.d(e,"m",(function(){return P})),i.d(e,"n",(function(){return w})),i.d(e,"i",(function(){return E})),i.d(e,"j",(function(){return D})),i.d(e,"k",(function(){return T})),i.d(e,"s",(function(){return I})),i.d(e,"t",(function(){return N})),i.d(e,"u",(function(){return R})),i.d(e,"r",(function(){return A})),i.d(e,"o",(function(){return C})),i.d(e,"p",(function(){return z})),i.d(e,"A",(function(){return S})),i.d(e,"x",(function(){return Y})),i.d(e,"y",(function(){return G})),i.d(e,"z",(function(){return U}));var n=i("q1tI"),o=i.n(n),a=i("vOnD"),r=(i("8uUf"),i("zDcZ")),d=i("a5sw"),l=(i("itCy"),a.default.div.withConfig({displayName:"ActivityParts__BottomHeaderUltrasound",componentId:"fzvtnb-0"})(["width:692px;font-family:",";font-size:47px;font-weight:600;font-stretch:normal;font-style:normal;line-height:1.15;letter-spacing:-0.47px;text-align:center;color:",";padding-top:3.6rem;padding-bottom:1.25rem;"],r.a.overrides.MuiTypography.h1.fontFamily,r.a.palette.midnightBlue.main)),p=a.default.div.withConfig({displayName:"ActivityParts__BottomBodyUltrasound",componentId:"fzvtnb-1"})(["width:692px;font-family:",";font-size:22px;font-weight:600;font-stretch:normal;font-style:normal;line-height:1.4;letter-spacing:-0.22px;text-align:center;color:",";"],r.a.typography.fontFamily,r.a.palette.midnightBlue.main),f=a.default.div.withConfig({displayName:"ActivityParts__BottomXrayHeader",componentId:"fzvtnb-2"})(["width:46rem;font-family:",";font-size:1.375rem;font-weight:600;font-stretch:normal;font-style:normal;line-height:1.4;letter-spacing:-0.22px;text-align:left;color:white;@media (max-width:","px){}@media (max-width:","px){}@media (max-width:","px){width:90%;}"],r.a.typography.fontFamily,r.b,r.c,r.d),g=a.default.div.withConfig({displayName:"ActivityParts__ToolTip",componentId:"fzvtnb-3"})(["padding:1rem;width:20.437rem;background-color:white;border-radius:1rem;"]),s=a.default.div.withConfig({displayName:"ActivityParts__ToolTipText",componentId:"fzvtnb-4"})(["width:18.938rem;font-family:",";font-size:0.938rem;font-weight:600;font-stretch:normal;font-style:normal;line-height:1.6;letter-spacing:-0.15px;text-align:left;color:",";"],r.a.typography.fontFamily,r.a.palette.egyptianBlue.main),c=a.default.div.withConfig({displayName:"ActivityParts__TapCircle",componentId:"fzvtnb-5"})(["width:2.75rem;height:2.75rem;box-shadow:0 0 6px 0 white;border:solid 2px white;border-radius:50%;"]),u=a.default.div.withConfig({displayName:"ActivityParts__HintCircle",componentId:"fzvtnb-6"})(["width:4.75rem;height:4.75rem;box-shadow:0 0 6px 0 ",";border:solid 2px ",";border-radius:50%;"],r.a.palette.warning.main,r.a.palette.warning.main),m=a.default.div.withConfig({displayName:"ActivityParts__Triangle",componentId:"fzvtnb-7"})(["width:100px;height:100px;margin:0 auto;background:tan;border-top:0 solid white;border-left:0 solid white;border-bottom:0 solid white;border-right:0 solid #8DB434;border-top-width:10px;border-left-width:10px;border-right-width:10px;border-bottom-width:10px;background:transparent;width:0;height:0;border-left-color:transparent;border-right-color:transparent;border-top-color:transparent;transform:rotate(180deg);"]),h=Object(a.default)(m).withConfig({displayName:"ActivityParts__TriangleBlue",componentId:"fzvtnb-8"})(["  border-bottom-color:",";"],r.a.palette.midnightBlue.main),y=a.default.div.withConfig({displayName:"ActivityParts__Frame",componentId:"fzvtnb-9"})(["position:relative;width:1054px;height:780px;background-color:lightgrey;border-radius:30px;border-left:30px solid lightgrey;border-right:30px solid lightgrey;border-top:30px solid lightgrey;border-bottom:30px solid lightgrey;padding:5px;@media (max-width:","px){transform:scale(0.75);top:0;left:0;}@media (max-width:","px){transform:scale(0.5);top:0;left:0;}@media (max-width:","px){transform:scale(0.33);top:0;left:0;}"],r.b,r.c,r.d),v=a.default.div.withConfig({displayName:"ActivityParts__FrameInner",componentId:"fzvtnb-10"})(["  border-left:15px solid darkgray;border-right:15px solid #e6e6e6;border-top:15px solid darkgray;border-bottom:15px solid darkgray;height:706px;width:975px;background-color:black;"]),_=a.default.div.withConfig({displayName:"ActivityParts__BottomRightIntroText",componentId:"fzvtnb-11"})(["width:26.813rem;height:14.509rem;font-family:",";font-size:2.938rem;font-weight:600;font-stretch:normal;font-style:normal;line-height:1.15;letter-spacing:-0.47px;text-align:left;color:",";"],r.a.overrides.MuiTypography.h1.fontFamily,r.a.palette.midnightBlue.main),b=a.default.div.withConfig({displayName:"ActivityParts__BottomRightIntroBodyText",componentId:"fzvtnb-12"})(["width:26.813rem;height:7.712rem;font-family:",";;font-size:1.375rem;font-weight:600;font-stretch:normal;font-style:normal;line-height:1.4;letter-spacing:-0.22px;text-align:left;color:",";"],r.a.typography.fontFamily,r.a.palette.midnightBlue.main),x=a.default.div.withConfig({displayName:"ActivityParts__PopupDarkBlue",componentId:"fzvtnb-13"})(["width:479px;height:235px;padding-left:1rem;padding-right:1rem;padding-top:2rem;color:white;position:absolute;left:calc(50% - 180px);top:calc(50% - 140px);border-radius:2rem 2rem 2rem 0rem;background-color:",";box-shadow:0 8px 12px 0px rgba(35,42,54,0.2);"],r.a.palette.midnightBlue.main),P=a.default.div.withConfig({displayName:"ActivityParts__PopupLightOrangeHeaderText",componentId:"fzvtnb-14"})(["height:3.063rem;font-family:",";font-size:2.188rem;font-weight:normal;font-stretch:normal;font-style:normal;line-height:1.4;letter-spacing:normal;text-align:center;color:",";"],r.a.overrides.MuiTypography.h1.fontFamily,r.a.palette.peachCobbler.main),w=a.default.div.withConfig({displayName:"ActivityParts__PopupWhiteBodyText",componentId:"fzvtnb-15"})(["font-size:3.2rem;line-height:1.16;text-align:center;letter-spacing:-0.58px;color:white;font-family:",";font-weight:600;height:86px;"],r.a.overrides.MuiTypography.h1.fontFamily),E=a.default.div.withConfig({displayName:"ActivityParts__Popup2DarkBlue",componentId:"fzvtnb-16"})(["width:643px;height:393px;padding-left:3.48rem;padding-right:3.48rem;padding-top:3.1rem;color:white;position:absolute;left:calc(50% - 180px);top:calc(50% - 140px);border-radius:0 2rem 2rem 2rem;background-color:#001d5f;box-shadow:0 8px 12px 0px rgba(35,42,54,0.2);"]),D=a.default.div.withConfig({displayName:"ActivityParts__Popup2HeaderText",componentId:"fzvtnb-17"})(["font-family:",";height:5.037rem;font-family:",";font-size:1.813rem;font-weight:600;font-stretch:normal;font-style:normal;line-height:1.4;letter-spacing:-0.29px;text-align:left;color:white;"],r.a.typography.fontFamily,r.a.typography.fontFamily),T=a.default.div.withConfig({displayName:"ActivityParts__Popup2WhiteBodyText",componentId:"fzvtnb-18"})(["font-family:",";font-size:0.938rem;font-weight:normal;font-stretch:normal;font-style:normal;line-height:1.6;letter-spacing:normal;text-align:left;color:white;padding-bottom:2.48rem;"],r.a.typography.fontFamily),I=a.default.div.withConfig({displayName:"ActivityParts__TaskSummaryHeader",componentId:"fzvtnb-19"})(["width:31.844rem;font-family:",";font-size:2.938rem;font-weight:600;font-stretch:normal;font-style:normal;line-height:1.15;letter-spacing:-0.47px;text-align:left;color:",";"],r.a.overrides.MuiTypography.h1.fontFamily,r.a.palette.midnightBlue.main),N=a.default.div.withConfig({displayName:"ActivityParts__TaskSummarySubHeader",componentId:"fzvtnb-20"})(["width:31.844rem;font-family:",";font-size:1.563rem;font-weight:600;font-stretch:normal;font-style:normal;line-height:1.4;letter-spacing:-0.25px;text-align:left;color:",";"],r.a.typography.fontFamily,r.a.palette.midnightBlue.main),R=a.default.div.withConfig({displayName:"ActivityParts__TaskSummaryTableHolder",componentId:"fzvtnb-21"})(["width:31.844rem;background-color:white;"]),A=a.default.div.withConfig({displayName:"ActivityParts__TaskSummaryFootnote",componentId:"fzvtnb-22"})(["width:31.844rem;height:2.325rem;font-family:",";font-size:0.813rem;font-weight:normal;font-stretch:normal;font-style:normal;line-height:1.4;letter-spacing:normal;text-align:left;color:",";"],r.a.typography.fontFamily,r.a.palette.raven.main),C=a.default.div.withConfig({displayName:"ActivityParts__SliderTextHolder",componentId:"fzvtnb-23"})(["position:absolute;left:59px;bottom:-55px;width:684px;height:200px;border:0px solid green;@media (max-width:","px){}@media (max-width:","px){}@media (max-width:","px){left:11%;bottom:93px;width:83%;}"],r.b,r.c,r.d),z=a.default.div.withConfig({displayName:"ActivityParts__SwitchHolder",componentId:"fzvtnb-24"})(["position:absolute;left:817px;top:587px;@media (max-width:","px){}@media (max-width:","px){}@media (max-width:","px){bottom:6%;}"],r.b,r.c,r.d),S=function(t){var e=t.id,i=t.hintChecked,n=t.stageVisible,a=(t.stage,t.textHtml),r=t.leftPos,l=void 0===r?"0":r,p=t.topPos,f=void 0===p?"0":p;return o.a.createElement("div",{id:e,style:{display:i&&n?"block":"none",position:"absolute",left:l,top:f,border:"0px solid red"}},o.a.createElement(g,null,o.a.createElement(s,null,Object(d.o)(a))),o.a.createElement("div",null,o.a.createElement(m,null)),o.a.createElement(u,{style:{margin:"auto"}}))},Y=function(t){var e=t.id,i=t.hintChecked,n=t.stageVisible,a=(t.stage,t.textHtml),r=t.leftPos,l=void 0===r?"0":r,p=t.topPos,f=void 0===p?"0":p;return o.a.createElement("div",{id:e,style:{display:i&&n?"block":"none",position:"absolute",left:l,top:f,border:"0px solid red"}},o.a.createElement(u,{style:{margin:"auto"}}),o.a.createElement("div",{"data-custom":"bjm"},o.a.createElement(m,{style:{transform:"rotate(360deg)"}})),o.a.createElement(g,null,o.a.createElement(s,null,Object(d.o)(a))))},G=function(t){var e=t.id,i=t.hintChecked,n=t.stageVisible,a=(t.stage,t.textHtml),r=t.leftPos,l=void 0===r?"0":r,p=t.topPos,f=void 0===p?"0":p;return o.a.createElement("div",{id:e,style:{display:i&&n?"flex":"none",position:"absolute",left:l,top:f,border:"0px solid red",alignItems:"center"}},o.a.createElement(g,null,o.a.createElement(s,null,Object(d.o)(a))),o.a.createElement("div",null,o.a.createElement(m,{style:{transform:"rotate(90deg)"}})),o.a.createElement(u,{style:{margin:"auto"}}))},U=function(t){var e=t.id,i=t.hintChecked,n=t.stageVisible,a=(t.stage,t.textHtml),r=t.leftPos,l=void 0===r?"0":r,p=t.topPos,f=void 0===p?"0":p;return o.a.createElement("div",{id:e,style:{display:i&&n?"flex":"none",position:"absolute",left:l,top:f,border:"0px solid red",alignItems:"center"}},o.a.createElement(u,{style:{margin:"auto"}}),o.a.createElement("div",null,o.a.createElement(m,{style:{transform:"rotate(270deg)"}})),o.a.createElement(g,null,o.a.createElement(s,null,Object(d.o)(a))))}},WQkL:function(t,e,i){t.exports=i.p+"static/Poppy_Final_Build-7e7e8e955dc570342a8947191ef804b1.mp4"},X9Lb:function(t,e,i){t.exports=i.p+"static/Dog_heart_Poppy-26fd1adf40f0193df9d7d0c48fd7667a.mp4"},Y1K6:function(t,e,i){t.exports=i.p+"static/Reggie_Final_Build_1-964d56c8a683dd9c2319b94faeb40153.mp4"},ckkW:function(t,e,i){t.exports=i.p+"static/Dudley_Final_Build-8b638efb120cc320610b912c8ff20326.mp4"},g0X1:function(t,e,i){t.exports=i.p+"static/VET-2020-001_Questions_Poppy_Standing-9f5616b8dc6b977b98ae9973aa517ca3.mp4"},j5sE:function(t,e,i){t.exports=i.p+"static/VET-2020-001_Questions_MrsJenkins-303172c55362c04b9b3bfe0982717514.mp4"},nHD1:function(t,e,i){t.exports=i.p+"static/VET-2020-001_Questions_Dudley_Sitting-ccb9d5c575b9af63aa2e9322508c9874.mp4"},nZHY:function(t,e,i){t.exports=i.p+"static/VET-2020-001_Questions_MrOakley-19cd731c2d2ed65bfaa99b40a21ff996.mp4"},qiF2:function(t,e,i){t.exports=i.p+"static/ultrasound_Dog_2_Poppy-ee1908278c8d616b4fa1f6674166ba3c.mp4"},wwni:function(t,e,i){t.exports=i.p+"static/VET-2020-001_Questions_Reggie_Standing-be7884d04014b2d73b9e7755ddc20a39.mp4"},yI0q:function(t,e,i){t.exports=i.p+"static/Dog_heart_Dudley-67ef3f6b0bfceda5b6375acf75239fe1.mp4"},yjWk:function(t,e,i){t.exports=i.p+"static/Dog_heart_Reggie-7b4a70e24b0093cc8de64baa7c7a88d5.mp4"}}]);
//# sourceMappingURL=374285b9ac64a48dd261ea3430760a6fc0ede997-83a80917436d2ef3b45c.js.map