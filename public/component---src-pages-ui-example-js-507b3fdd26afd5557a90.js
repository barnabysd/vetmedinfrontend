(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"R/WZ":function(e,a,o){"use strict";var t=o("wx14"),n=o("RD7I"),r=o("cNwE");a.a=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(n.a)(e,Object(t.a)({defaultTheme:r.a},a))}},pimO:function(e,a,o){"use strict";o.r(a);var t=o("q1tI"),n=o.n(t),r=o("Bl7J"),c=o("H2TA"),i=o("R/WZ"),l=o("Ff2n"),d=o("wx14"),s=(o("17x9"),o("iuhU")),p=o("ye/S"),b=o("VD++"),m=o("NqtD"),u=t.forwardRef((function(e,a){var o=e.children,n=e.classes,r=e.className,c=e.color,i=void 0===c?"default":c,p=e.component,u=void 0===p?"button":p,h=e.disabled,g=void 0!==h&&h,f=e.disableElevation,v=void 0!==f&&f,y=e.disableFocusRipple,x=void 0!==y&&y,k=e.endIcon,O=e.focusVisibleClassName,j=e.fullWidth,S=void 0!==j&&j,C=e.size,w=void 0===C?"medium":C,R=e.startIcon,z=e.type,E=void 0===z?"button":z,I=e.variant,N=void 0===I?"text":I,$=Object(l.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),B=R&&t.createElement("span",{className:Object(s.a)(n.startIcon,n["iconSize".concat(Object(m.a)(w))])},R),L=k&&t.createElement("span",{className:Object(s.a)(n.endIcon,n["iconSize".concat(Object(m.a)(w))])},k);return t.createElement(b.a,Object(d.a)({className:Object(s.a)(n.root,n[N],r,"inherit"===i?n.colorInherit:"default"!==i&&n["".concat(N).concat(Object(m.a)(i))],"medium"!==w&&[n["".concat(N,"Size").concat(Object(m.a)(w))],n["size".concat(Object(m.a)(w))]],v&&n.disableElevation,g&&n.disabled,S&&n.fullWidth),component:u,disabled:g,focusRipple:!x,focusVisibleClassName:Object(s.a)(n.focusVisible,O),ref:a,type:E},$),t.createElement("span",{className:n.label},B,o,L))})),h=Object(c.a)((function(e){return{root:Object(d.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(p.b)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(p.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(p.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(p.b)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(p.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(p.b)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(p.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(u),g=o("edxh"),f=Object(c.a)((function(e){return{root:{color:e.palette.getContrastText(g.a[500]),fontFamily:["Oswald","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),backgroundColor:g.a[500],borderBottomLeftRadius:0,borderBottomRightRadius:20,borderTopLeftRadius:20,borderTopRightRadius:20,"&:hover":{backgroundColor:g.a[700]}}}}))(h),v=Object(i.a)((function(e){return{margin:{margin:e.spacing(1)}}}));var y=function(){var e=v();return n.a.createElement("div",null,n.a.createElement(f,{variant:"contained",color:"primary",className:e.margin},"home"))},x=(o("pJf4"),o("E5k/"),t.forwardRef((function(e,a){var o=e.classes,n=e.className,r=e.row,c=void 0!==r&&r,i=Object(l.a)(e,["classes","className","row"]);return t.createElement("div",Object(d.a)({className:Object(s.a)(o.root,n,c&&o.row),ref:a},i))}))),k=Object(c.a)({root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}},{name:"MuiFormGroup"})(x),O=t.createContext();var j=O;function S(){return t.useContext(j)}var C=o("ofer"),w=t.forwardRef((function(e,a){e.checked;var o=e.classes,n=e.className,r=e.control,c=e.disabled,i=(e.inputRef,e.label),p=e.labelPlacement,b=void 0===p?"end":p,u=(e.name,e.onChange,e.value,Object(l.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),h=S(),g=c;void 0===g&&void 0!==r.props.disabled&&(g=r.props.disabled),void 0===g&&h&&(g=h.disabled);var f={disabled:g};return["checked","name","onChange","value","inputRef"].forEach((function(a){void 0===r.props[a]&&void 0!==e[a]&&(f[a]=e[a])})),t.createElement("label",Object(d.a)({className:Object(s.a)(o.root,n,"end"!==b&&o["labelPlacement".concat(Object(m.a)(b))],g&&o.disabled),ref:a},u),t.cloneElement(r,f),t.createElement(C.a,{component:"span",className:Object(s.a)(o.label,g&&o.disabled)},i))})),R=Object(c.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(w),z=o("ODXe");var E=t.forwardRef((function(e,a){var o=e.edge,n=void 0!==o&&o,r=e.children,c=e.classes,i=e.className,p=e.color,u=void 0===p?"default":p,h=e.disabled,g=void 0!==h&&h,f=e.disableFocusRipple,v=void 0!==f&&f,y=e.size,x=void 0===y?"medium":y,k=Object(l.a)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return t.createElement(b.a,Object(d.a)({className:Object(s.a)(c.root,i,"default"!==u&&c["color".concat(Object(m.a)(u))],g&&c.disabled,"small"===x&&c["size".concat(Object(m.a)(x))],{start:c.edgeStart,end:c.edgeEnd}[n]),centerRipple:!0,focusRipple:!v,disabled:g,ref:a},k),t.createElement("span",{className:c.label},r))})),I=Object(c.a)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(p.b)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(p.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(p.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(E),N=t.forwardRef((function(e,a){var o,n,r,c,i,p,b,m=e.autoFocus,u=e.checked,h=e.checkedIcon,g=e.classes,f=e.className,v=e.defaultChecked,y=e.disabled,x=e.icon,k=e.id,O=e.inputProps,j=e.inputRef,C=e.name,w=e.onBlur,R=e.onChange,E=e.onFocus,N=e.readOnly,$=e.required,B=e.tabIndex,L=e.type,F=e.value,T=Object(l.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),P=(o={controlled:u,default:Boolean(v),name:"SwitchBase",state:"checked"},n=o.controlled,r=o.default,o.name,o.state,c=t.useRef(void 0!==n).current,i=t.useState(r),p=i[0],b=i[1],[c?n:p,t.useCallback((function(e){c||b(e)}),[])]),V=Object(z.a)(P,2),D=V[0],M=V[1],W=S(),H=y;W&&void 0===H&&(H=W.disabled);var A="checkbox"===L||"radio"===L;return t.createElement(I,Object(d.a)({component:"span",className:Object(s.a)(g.root,f,D&&g.checked,H&&g.disabled),disabled:H,tabIndex:null,role:void 0,onFocus:function(e){E&&E(e),W&&W.onFocus&&W.onFocus(e)},onBlur:function(e){w&&w(e),W&&W.onBlur&&W.onBlur(e)},ref:a},T),t.createElement("input",Object(d.a)({autoFocus:m,checked:u,defaultChecked:v,className:g.input,disabled:H,id:A&&k,name:C,onChange:function(e){var a=e.target.checked;M(a),R&&R(e,a)},readOnly:N,ref:j,required:$,tabIndex:B,type:L,value:F},O)),D?h:x)})),$=Object(c.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(N),B=o("HR5l");function L(e,a){var o=n.a.memo(n.a.forwardRef((function(a,o){return n.a.createElement(B.a,Object(d.a)({ref:o},a),e)})));return o.muiName=B.a.muiName,o}var F=L(t.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"})),T=L(t.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})),P=L(t.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"})),V=t.createElement(T,null),D=t.createElement(F,null),M=t.createElement(P,null),W=t.forwardRef((function(e,a){var o=e.checkedIcon,n=void 0===o?V:o,r=e.classes,c=e.color,i=void 0===c?"secondary":c,p=e.icon,b=void 0===p?D:p,u=e.indeterminate,h=void 0!==u&&u,g=e.indeterminateIcon,f=void 0===g?M:g,v=e.inputProps,y=e.size,x=void 0===y?"medium":y,k=Object(l.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]);return t.createElement($,Object(d.a)({type:"checkbox",classes:{root:Object(s.a)(r.root,r["color".concat(Object(m.a)(i))],h&&r.indeterminate),checked:r.checked,disabled:r.disabled},color:i,inputProps:Object(d.a)({"data-indeterminate":h},v),icon:t.cloneElement(h?f:b,{fontSize:"small"===x?"small":"default"}),checkedIcon:t.cloneElement(h?f:n,{fontSize:"small"===x?"small":"default"}),ref:a},k))})),H=Object(c.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(p.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(p.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(W),A=Object(c.a)({root:{color:g.a[400],"&$checked":{color:g.a[600]}},checked:{}})((function(e){return n.a.createElement(H,Object.assign({color:"default"},e))}));var q=function(){var e=n.a.useState({checkedA:!0,checkedB:!0,checkedF:!0,checkedG:!0}),a=e[0],o=e[1];return n.a.createElement(k,{row:!0},n.a.createElement(R,{control:n.a.createElement(A,{checked:a.checkedG,onChange:function(e){var t;o(Object.assign(Object.assign({},a),{},((t={})[e.target.name]=e.target.checked,t)))},name:"checkedG"}),label:"Custom color"}))},U=o("Rme4"),G=o.n(U);o("6WxA");G.a,a.default=function(){return n.a.createElement(r.a,null,n.a.createElement("h1",null,"UI examples"),n.a.createElement("p",null,n.a.createElement(y,null),n.a.createElement(q,null)))}}}]);
//# sourceMappingURL=component---src-pages-ui-example-js-507b3fdd26afd5557a90.js.map