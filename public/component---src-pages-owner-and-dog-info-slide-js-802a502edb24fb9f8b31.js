(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{SLu4:function(e,t,i){"use strict";var o=i("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(i("q1tI")),r=(0,o(i("8/g6")).default)(a.default.createElement("path",{d:"M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42a.9959.9959 0 00-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"}),"ArrowBackRounded");t.default=r},cbsx:function(e,t,i){"use strict";var o=i("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(i("q1tI")),r=(0,o(i("8/g6")).default)(a.default.createElement("path",{d:"M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z"}),"ArrowForwardRounded");t.default=r},qn43:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return re})),i.d(t,"pageQuery",(function(){return ne}));var o=i("q1tI"),a=i("Bl7J"),r=(i("Wbzz"),i("tRbT")),n=(i("GMqj"),i("8uUf")),l=i("eELa"),d=i("kT3S"),c=i("v564"),s=i("MPxq"),p=i("r5vi"),b=i("R/WZ"),u=(i("1w3K"),i("kOA+")),f=i.n(u),g=i("SLu4"),h=i.n(g),m=i("cbsx"),y=i.n(m),v=i("HXt5"),x=i("H2TA"),j=i("Ff2n"),O=i("wx14"),w=(i("17x9"),i("iuhU"));var k=o.createContext(),C=o.forwardRef((function(e,t){var i=e.classes,a=e.className,r=e.component,n=void 0===r?"table":r,l=e.padding,d=void 0===l?"default":l,c=e.size,s=void 0===c?"medium":c,p=e.stickyHeader,b=void 0!==p&&p,u=Object(j.a)(e,["classes","className","component","padding","size","stickyHeader"]),f=o.useMemo((function(){return{padding:d,size:s,stickyHeader:b}}),[d,s,b]);return o.createElement(k.Provider,{value:f},o.createElement(n,Object(O.a)({role:"table"===n?null:"table",ref:t,className:Object(w.default)(i.root,a,b&&i.stickyHeader)},u)))})),T=Object(x.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(O.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(C);var _=o.createContext(),M={variant:"body"},P=o.forwardRef((function(e,t){var i=e.classes,a=e.className,r=e.component,n=void 0===r?"tbody":r,l=Object(j.a)(e,["classes","className","component"]);return o.createElement(_.Provider,{value:M},o.createElement(n,Object(O.a)({className:Object(w.default)(i.root,a),ref:t,role:"tbody"===n?null:"rowgroup"},l)))})),z=Object(x.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(P),N=i("NqtD"),S=i("ye/S"),H=o.forwardRef((function(e,t){var i,a,r=e.align,n=void 0===r?"inherit":r,l=e.classes,d=e.className,c=e.component,s=e.padding,p=e.scope,b=e.size,u=e.sortDirection,f=e.variant,g=Object(j.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),h=o.useContext(k),m=o.useContext(_),y=m&&"head"===m.variant;c?(a=c,i=y?"columnheader":"cell"):a=y?"th":"td";var v=p;!v&&y&&(v="col");var x=s||(h&&h.padding?h.padding:"default"),C=b||(h&&h.size?h.size:"medium"),T=f||m&&m.variant,M=null;return u&&(M="asc"===u?"ascending":"descending"),o.createElement(a,Object(O.a)({ref:t,className:Object(w.default)(l.root,l[T],d,"inherit"!==n&&l["align".concat(Object(N.a)(n))],"default"!==x&&l["padding".concat(Object(N.a)(x))],"medium"!==C&&l["size".concat(Object(N.a)(C))],"head"===T&&h&&h.stickyHeader&&l.stickyHeader),"aria-sort":M,role:i,scope:v},g))})),R=Object(x.a)((function(e){return{root:Object(O.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(S.d)(Object(S.b)(e.palette.divider,1),.88):Object(S.a)(Object(S.b)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0px 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(H),V=o.forwardRef((function(e,t){var i=e.classes,a=e.className,r=e.component,n=void 0===r?"div":r,l=Object(j.a)(e,["classes","className","component"]);return o.createElement(n,Object(O.a)({ref:t,className:Object(w.default)(i.root,a)},l))})),W=Object(x.a)({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(V),D={variant:"head"},A=o.forwardRef((function(e,t){var i=e.classes,a=e.className,r=e.component,n=void 0===r?"thead":r,l=Object(j.a)(e,["classes","className","component"]);return o.createElement(_.Provider,{value:D},o.createElement(n,Object(O.a)({className:Object(w.default)(i.root,a),ref:t,role:"thead"===n?null:"rowgroup"},l)))})),F=Object(x.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(A),B=o.forwardRef((function(e,t){var i=e.classes,a=e.className,r=e.component,n=void 0===r?"tr":r,l=e.hover,d=void 0!==l&&l,c=e.selected,s=void 0!==c&&c,p=Object(j.a)(e,["classes","className","component","hover","selected"]),b=o.useContext(_);return o.createElement(n,Object(O.a)({ref:t,className:Object(w.default)(i.root,a,b&&{head:i.head,footer:i.footer}[b.variant],d&&i.hover,s&&i.selected),role:"tr"===n?null:"row"},p))})),L=Object(x.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(S.b)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(B),E=i("kKAo"),I=i("zDcZ"),q=i("vOnD"),U=i("mwIZ"),J=i.n(U),$=i("a5sw"),K=(i("82Oa"),i("qKvR")),Y=q.default.div.withConfig({displayName:"DogDetailTable__TableHolder",componentId:"sc-11dtto8-0"})(["background-color:",";border-radius:2rem 2rem 2rem 2rem;border-width-left:2rem;border-color:",";width:500px;"],I.a.palette.skyBlue.main,I.a.palette.skyBlue.main),Z=q.default.div.withConfig({displayName:"DogDetailTable__PanelTitle",componentId:"sc-11dtto8-1"})(["font-family:",";font-size:",";font-weight:",";background-color:",";transform:rotate(270deg);color:#30c1e2;border-radius:2rem 2rem 2rem 0rem;width:406px;height:574px;position:absolute;left:59px;top:-84px;padding:1rem;box-shadow:-8px 6px 5px rgba(35,42,54,0.2);"],I.a.overrides.MuiTypography.h1.fontFamily,I.a.overrides.MuiTypography.h1.fontSize,I.a.overrides.MuiTypography.h1.fontWeight,I.a.palette.skyBlue.main),G=Object(x.a)((function(e){var t;return{head:(t={backgroundColor:"white",color:I.a.palette.midnightBlue.main,fontWeight:"700",fontFamily:I.a.overrides.MuiTypography.h1.fontFamily,fontSize:I.a.overrides.MuiTypography.h1.fontSize},t.fontWeight=I.a.overrides.MuiTypography.h1.fontWeight,t),body:{backgroundColor:"#c6f5fe",color:I.a.palette.raven.main,fontFamily:I.a.overrides.MuiTypography.body1.fontFamily,fontSize:I.a.overrides.MuiTypography.body1.fontSize,fontWeight:I.a.overrides.MuiTypography.body1.fontWeight,padding:"1rem",margin:"1rem"}}}))(R),X=Object(x.a)((function(e){return{head:{backgroundColor:"#c6f5fe",color:I.a.palette.raven.main,fontFamily:I.a.overrides.MuiTypography.h4.fontFamily,fontSize:I.a.overrides.MuiTypography.h4.fontSize,fontWeight:I.a.overrides.MuiTypography.h4.fontWeight},body:{backgroundColor:"#c6f5fe",color:I.a.palette.raven.main,fontFamily:I.a.overrides.MuiTypography.h5.fontFamily,fontSize:I.a.overrides.MuiTypography.h5.fontSize,fontWeight:I.a.overrides.MuiTypography.h5.fontWeight,padding:"1rem",margin:"1rem"}}}))(R),Q=Object(x.a)((function(e){return{head:{backgroundColor:"#effcfe",color:I.a.palette.raven.main},body:{backgroundColor:"#effcfe",color:I.a.palette.raven.main,fontFamily:I.a.overrides.MuiTypography.body1.fontFamily,fontSize:I.a.overrides.MuiTypography.body1.fontSize,fontWeight:I.a.overrides.MuiTypography.body1.fontWeight,padding:"1rem",margin:"1rem"}}}))(R),ee=Object(x.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:"white"}}}}))(L),te=Object(b.a)({table:{minWidth:"200px"}});function ie(e){var t=e.resources,i=e.rowPointer,o=void 0===i?1:i,a=te();function r(e,t){return{rowTitle:e,rowValue:t}}var n=[r(t.field_tableitemtitle1,Object($.c)(t.field_tableitemcontent1.processed)),r(t.field_tableitemtitle2,Object($.c)(t.field_tableitemcontent2.processed)),r(t.field_tableitemtitle3,Object($.c)(t.field_tableitemcontent3.processed)),r(t.field_tableitemtitle4,Object($.c)(t.field_tableitemcontent4.processed)),r(t.field_tableitemtitle5,Object($.c)(t.field_tableitemcontent5.processed)),r(t.field_tableitemtitle6,Object($.c)(t.field_tableitemcontent6.processed))],l=[r(t.field_tableitemtitle7,Object($.c)(t.field_tableitemcontent7.processed)),r(t.field_tableitemtitle8,Object($.c)(t.field_tableitemcontent8.processed))];return 2===o&&l,Object(K.b)(Y,null,Object(K.b)(Z,null,t.field_paneltitle),Object(K.b)(W,{component:E.a,style:{borderRadius:"0 2rem 0 0",position:"relative",height:"406px",overflow:"hidden"}},Object(K.b)(T,{className:a.table,"aria-label":t.field_paneltitle,style:{border:"1px solid red"}},Object(K.b)(F,null,Object(K.b)(L,null,Object(K.b)(G,{colspan:2,style:{border:"2px solid white"}}," ",t.field_tabletitle))),Object(K.b)(z,null,n.map((function(e){return Object(K.b)(ee,{key:e.rowTitle},Object(K.b)(X,{component:"th",scope:"row",style:{border:"2px solid white"}},"   ",e.rowTitle),Object(K.b)(Q,{align:"left",style:{border:"2px solid white"}},"    ",e.rowValue))}))))))}var oe=i("jrT1"),ae=Object(b.a)((function(e){return{root:{display:"flex",flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));function re(e){var t,i=e.data,b=J()(i,"nodeDogoptions");console.log(b),b||(b=[{field_headertextline3:"LISTEN.",field_bottombodytext:{processed:"<p>Build your canine heart disease management skills and prolong the lives of dogs with the help of this simple, fun digital tool.</p>"},field_bottomtitle:{processed:"<p>This activity will earn you 12 minutes of CPD points</p>"},field_buttonlinks:[{title:"Start",uri:"/case-studies-options/"}],field_toprighttext:[{processed:"You will need sound for part of this activity."}]}]);var u=Object(p.a)(["hasConsentSet","userChoice","dogChoice"]),g=(u[0],u[1],u[2],Object(o.useState)({renderUserChoice:!1,renderLoader:!1,renderCookieBanner:!1,isPanelVisible1:!0,isPanelVisible2:!1,isPanelVisible3:!1})),m=g[0],x=g[1];return Object(K.b)(a.a,null,m.renderUserChoice?Object(K.b)(s.a,{unmountMe:function(){x({renderUserChoice:!1,renderLoader:!1,renderCookieBanner:!1,isPanelVisible1:!1,isPanelVisible2:!1,isPanelVisible3:!1})}}):"",m.renderLoader?Object(K.b)(d.a,{unmountMe:function(){x({renderUserChoice:!1,renderLoader:!1,renderCookieBanner:!1,isPanelVisible1:!1,isPanelVisible2:!1,isPanelVisible3:!1})}}):"",m.renderCookieBanner?Object(K.b)(c.a,{unmountMe:function(){x({renderUserChoice:!1,renderLoader:!1,renderCookieBanner:!1,isPanelVisible1:!1,isPanelVisible2:!1,isPanelVisible3:!1})}}):"",Object(K.b)(l.a,null),Object(K.b)("div",{className:ae().root},Object(K.b)(r.a,((t={container:!0,spacing:0}).spacing=0,t.justify="center",t.style={border:"1px solid black",minHeight:"100vh",width:"100%",maxWidth:"3000px"},t),Object(K.b)(r.a,{item:!0,xs:12,sm:8,align:"center",style:{border:"0px solid red"}},Object(K.b)("div",{style:{position:"relative",width:"100%",minHeight:"100%",border:"0px solid red"}},Object(K.b)("div",{style:{position:"absolute",left:"25%",top:"10%",width:"600px",height:"100%",zIndex:m.isPanelVisible1?3:2}},Object(K.b)(ie,{resources:b})),Object(K.b)("div",{style:{position:"absolute",left:"30%",top:"15%",width:"600px",height:"100%",zIndex:m.isPanelVisible2?3:2}},Object(K.b)(ie,{resources:b,rowPointer:2})),Object(K.b)("div",{style:{position:"absolute",left:"50%",bottom:"10%",width:"300px",height:"30px"}},Object(K.b)(v.a,null)))),Object(K.b)(r.a,{item:!0,xs:12,sm:4,align:"center",style:{border:"0px solid red"}},Object(K.b)("div",{"data-acive":m.isPanelVisible1,style:{display:m.isPanelVisible1?"block":"none",position:"relative",margin:"auto",width:"75%",minHeight:"100%",padding:"2rem",border:"0px solid red"}},Object(K.b)("div",{style:{position:"absolute",left:"-200px",top:0}},Object(K.b)(oe.a,{axis:"Y",imgName:"mrs_jenkins_pose_01@3x.png",height:"600px",width:"600px"})),Object(K.b)("div",{style:{position:"absolute",left:"-150px",top:"10%"}},Object(K.b)(oe.a,{axis:"Y",imgName:"dudley_standing_pose_02@3x.png",height:"600px",width:"600px"}))),Object(K.b)("div",{"data-acive":m.isPanelVisible2,style:{display:m.isPanelVisible1?"block":"none",position:"relative",margin:"auto",width:"75%",minHeight:"100%",padding:"2rem",border:"5px solid red"}},Object(K.b)(n.a,{imgName:"reggieOwner.png"})),Object(K.b)("div",{"data-acive":m.isPanelVisible3,style:{display:m.isPanelVisible1?"block":"none",position:"relative",margin:"auto",width:"75%",minHeight:"100%",padding:"2rem",border:"5px solid red"}},Object(K.b)(n.a,{imgName:"reggieOwner.png"}))))),Object(K.b)("div",{style:{position:"absolute",right:"0",bottom:"0",width:"150px",height:"100px",display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",textAlign:"center",border:"0px solid red"}},Object(K.b)(f.a,{style:{display:"flex",flexDirection:"row",alignItems:"center",width:"200px",height:"50px",textDecoration:"none",color:"white !important",fontFamily:"Poppins",fontWeight:"700"},to:"/"},"Continue ",Object(K.b)(y.a,null))),Object(K.b)("div",{style:{position:"absolute",left:"15%",bottom:"0",width:"150px",height:"100px",display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",textAlign:"center",zIndex:"100",border:"0px solid red"}}," ",Object(K.b)(f.a,{to:"/case-studies-choice/",style:{display:"flex",flexDirection:"row",alignItems:"center",width:"200px",height:"50px",textDecoration:"none",color:"white !important",fontFamily:"Poppins",fontWeight:"700"}},Object(K.b)(h.a,null),"Change Dog")," "))}var ne="2651826294"}}]);
//# sourceMappingURL=component---src-pages-owner-and-dog-info-slide-js-802a502edb24fb9f8b31.js.map