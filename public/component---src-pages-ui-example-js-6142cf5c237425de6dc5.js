(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"1waj":function(e,a,t){"use strict";var o=t("TqRt");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=o(t("q1tI")),n=(0,o(t("8/g6")).default)(r.default.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");a.default=n},"6WxA":function(e,a,t){},ED4I:function(e,a,t){"use strict";function o(e){return e}t.d(a,"a",(function(){return o}))},K8zP:function(e,a,t){"use strict";var o=t("q1tI"),r=t.n(o),n=t("H2TA"),i=t("R/WZ"),c=t("Z3vd"),l=Object(n.a)((function(e){return{root:{color:"#092178",fontWeight:"700",fontFamily:["Poppins","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),backgroundColor:"#fc9a5c",borderBottomLeftRadius:20,borderBottomRightRadius:20,borderTopLeftRadius:20,borderTopRightRadius:20,"&:hover":{backgroundColor:"#092178",color:"#fc9a5c"}}}}))(c.a),d=Object(i.a)((function(e){return{margin:{margin:e.spacing(1)}}}));a.a=function(e){var a=e.buttonText,t=d();return r.a.createElement(l,{variant:"contained",color:"secondary",className:t.margin},a)}},"R/WZ":function(e,a,t){"use strict";var o=t("wx14"),r=t("RD7I"),n=t("cNwE");a.a=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(r.a)(e,Object(o.a)({defaultTheme:n.a},a))}},Z3vd:function(e,a,t){"use strict";var o=t("Ff2n"),r=t("wx14"),n=t("q1tI"),i=(t("17x9"),t("iuhU")),c=t("H2TA"),l=t("ye/S"),d=t("VD++"),s=t("NqtD"),b=n.forwardRef((function(e,a){var t=e.children,c=e.classes,l=e.className,b=e.color,u=void 0===b?"default":b,p=e.component,m=void 0===p?"button":p,h=e.disabled,g=void 0!==h&&h,f=e.disableElevation,v=void 0!==f&&f,y=e.disableFocusRipple,k=void 0!==y&&y,x=e.endIcon,j=e.focusVisibleClassName,O=e.fullWidth,C=void 0!==O&&O,S=e.size,R=void 0===S?"medium":S,w=e.startIcon,E=e.type,z=void 0===E?"button":E,I=e.variant,N=void 0===I?"text":I,$=Object(o.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),B=w&&n.createElement("span",{className:Object(i.default)(c.startIcon,c["iconSize".concat(Object(s.a)(R))])},w),T=x&&n.createElement("span",{className:Object(i.default)(c.endIcon,c["iconSize".concat(Object(s.a)(R))])},x);return n.createElement(d.a,Object(r.a)({className:Object(i.default)(c.root,c[N],l,"inherit"===u?c.colorInherit:"default"!==u&&c["".concat(N).concat(Object(s.a)(u))],"medium"!==R&&[c["".concat(N,"Size").concat(Object(s.a)(R))],c["size".concat(Object(s.a)(R))]],v&&c.disableElevation,g&&c.disabled,C&&c.fullWidth),component:m,disabled:g,focusRipple:!k,focusVisibleClassName:Object(i.default)(c.focusVisible,j),ref:a,type:z},$),n.createElement("span",{className:c.label},B,t,T))}));a.a=Object(c.a)((function(e){return{root:Object(r.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(l.b)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(l.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(l.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(l.b)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(l.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(l.b)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(l.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(b)},pimO:function(e,a,t){"use strict";t.r(a);t("rzGZ"),t("Dq+y"),t("8npG"),t("Ggvi"),t("pJf4"),t("E5k/");var o=t("q1tI"),r=t.n(o),n=t("Bl7J"),i=t("H2TA"),c=t("R/WZ"),l=t("Z3vd"),d=t("edxh");Object(i.a)((function(e){return{root:{color:e.palette.getContrastText(d.a[500]),fontFamily:["Oswald","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),backgroundColor:d.a[500],borderBottomLeftRadius:0,borderBottomRightRadius:20,borderTopLeftRadius:20,borderTopRightRadius:20,"&:hover":{backgroundColor:d.a[700]}}}}))(l.a),Object(c.a)((function(e){return{margin:{margin:e.spacing(1)}}}));var s=t("wx14"),b=t("Ff2n"),u=(t("17x9"),t("iuhU")),p=o.forwardRef((function(e,a){var t=e.classes,r=e.className,n=e.row,i=void 0!==n&&n,c=Object(b.a)(e,["classes","className","row"]);return o.createElement("div",Object(s.a)({className:Object(u.default)(t.root,r,i&&t.row),ref:a},c))})),m=Object(i.a)({root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}},{name:"MuiFormGroup"})(p),h=o.createContext();var g=h;function f(){return o.useContext(g)}var v=t("ofer"),y=t("NqtD"),k=o.forwardRef((function(e,a){e.checked;var t=e.classes,r=e.className,n=e.control,i=e.disabled,c=(e.inputRef,e.label),l=e.labelPlacement,d=void 0===l?"end":l,p=(e.name,e.onChange,e.value,Object(b.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),m=f(),h=i;void 0===h&&void 0!==n.props.disabled&&(h=n.props.disabled),void 0===h&&m&&(h=m.disabled);var g={disabled:h};return["checked","name","onChange","value","inputRef"].forEach((function(a){void 0===n.props[a]&&void 0!==e[a]&&(g[a]=e[a])})),o.createElement("label",Object(s.a)({className:Object(u.default)(t.root,r,"end"!==d&&t["labelPlacement".concat(Object(y.a)(d))],h&&t.disabled),ref:a},p),o.cloneElement(n,g),o.createElement(v.a,{component:"span",className:Object(u.default)(t.label,h&&t.disabled)},c))})),x=Object(i.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(k),j=t("ODXe");var O=t("ye/S"),C=t("VD++"),S=o.forwardRef((function(e,a){var t=e.edge,r=void 0!==t&&t,n=e.children,i=e.classes,c=e.className,l=e.color,d=void 0===l?"default":l,p=e.disabled,m=void 0!==p&&p,h=e.disableFocusRipple,g=void 0!==h&&h,f=e.size,v=void 0===f?"medium":f,k=Object(b.a)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return o.createElement(C.a,Object(s.a)({className:Object(u.default)(i.root,c,"default"!==d&&i["color".concat(Object(y.a)(d))],m&&i.disabled,"small"===v&&i["size".concat(Object(y.a)(v))],{start:i.edgeStart,end:i.edgeEnd}[r]),centerRipple:!0,focusRipple:!g,disabled:m,ref:a},k),o.createElement("span",{className:i.label},n))})),R=Object(i.a)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(O.b)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(O.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(O.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(S),w=o.forwardRef((function(e,a){var t,r,n,i,c,l,d,p=e.autoFocus,m=e.checked,h=e.checkedIcon,g=e.classes,v=e.className,y=e.defaultChecked,k=e.disabled,x=e.icon,O=e.id,C=e.inputProps,S=e.inputRef,w=e.name,E=e.onBlur,z=e.onChange,I=e.onFocus,N=e.readOnly,$=e.required,B=e.tabIndex,T=e.type,L=e.value,F=Object(b.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),P=(t={controlled:m,default:Boolean(y),name:"SwitchBase",state:"checked"},r=t.controlled,n=t.default,t.name,t.state,i=o.useRef(void 0!==r).current,c=o.useState(n),l=c[0],d=c[1],[i?r:l,o.useCallback((function(e){i||d(e)}),[])]),A=Object(j.a)(P,2),V=A[0],W=A[1],M=f(),U=k;M&&void 0===U&&(U=M.disabled);var H="checkbox"===T||"radio"===T;return o.createElement(R,Object(s.a)({component:"span",className:Object(u.default)(g.root,v,V&&g.checked,U&&g.disabled),disabled:U,tabIndex:null,role:void 0,onFocus:function(e){I&&I(e),M&&M.onFocus&&M.onFocus(e)},onBlur:function(e){E&&E(e),M&&M.onBlur&&M.onBlur(e)},ref:a},F),o.createElement("input",Object(s.a)({autoFocus:p,checked:m,defaultChecked:y,className:g.input,disabled:U,id:H&&O,name:w,onChange:function(e){var a=e.target.checked;W(a),z&&z(e,a)},readOnly:N,ref:S,required:$,tabIndex:B,type:T,value:L},C)),V?h:x)})),E=Object(i.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(w),z=t("HR5l");function I(e,a){var t=r.a.memo(r.a.forwardRef((function(a,t){return r.a.createElement(z.a,Object(s.a)({ref:t},a),e)})));return t.muiName=z.a.muiName,t}var N=I(o.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"})),$=I(o.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})),B=I(o.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"})),T=o.createElement($,null),L=o.createElement(N,null),F=o.createElement(B,null),P=o.forwardRef((function(e,a){var t=e.checkedIcon,r=void 0===t?T:t,n=e.classes,i=e.color,c=void 0===i?"secondary":i,l=e.icon,d=void 0===l?L:l,p=e.indeterminate,m=void 0!==p&&p,h=e.indeterminateIcon,g=void 0===h?F:h,f=e.inputProps,v=e.size,k=void 0===v?"medium":v,x=Object(b.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]);return o.createElement(E,Object(s.a)({type:"checkbox",classes:{root:Object(u.default)(n.root,n["color".concat(Object(y.a)(c))],m&&n.indeterminate),checked:n.checked,disabled:n.disabled},color:c,inputProps:Object(s.a)({"data-indeterminate":m},f),icon:o.cloneElement(m?g:d,{fontSize:"small"===k?"small":"default"}),checkedIcon:o.cloneElement(m?g:r,{fontSize:"small"===k?"small":"default"}),ref:a},x))})),A=Object(i.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(O.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(O.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(P),V=Object(i.a)({root:{color:d.a[400],"&$checked":{color:d.a[600]}},checked:{}})((function(e){return r.a.createElement(A,Object.assign({color:"default"},e))}));var W=function(){var e=r.a.useState({checkedA:!0,checkedB:!0,checkedF:!0,checkedG:!0}),a=e[0],t=e[1];return r.a.createElement(m,{row:!0},r.a.createElement(x,{control:r.a.createElement(V,{checked:a.checkedG,onChange:function(e){var o;t(Object.assign(Object.assign({},a),{},((o={})[e.target.name]=e.target.checked,o)))},name:"checkedG"}),label:"Custom color"}))},M=t("Rme4"),U=t.n(M),H=(t("6WxA"),o.forwardRef((function(e,a){var t=e.children,r=e.classes,n=e.className,i=e.color,c=void 0===i?"default":i,l=e.component,d=void 0===l?"button":l,p=e.disabled,m=void 0!==p&&p,h=e.disableFocusRipple,g=void 0!==h&&h,f=e.focusVisibleClassName,v=e.size,k=void 0===v?"large":v,x=e.variant,j=void 0===x?"round":x,O=Object(b.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return o.createElement(C.a,Object(s.a)({className:Object(u.default)(r.root,n,"round"!==j&&r.extended,"large"!==k&&r["size".concat(Object(y.a)(k))],m&&r.disabled,{primary:r.primary,secondary:r.secondary,inherit:r.colorInherit}[c]),component:d,disabled:m,focusRipple:!g,focusVisibleClassName:Object(u.default)(r.focusVisible,f),ref:a},O),o.createElement("span",{className:r.label},t))}))),D=Object(i.a)((function(e){return{root:Object(s.a)({},e.typography.button,{boxSizing:"border-box",minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground},textDecoration:"none"},"&$focusVisible":{boxShadow:e.shadows[6]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},secondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}}),{name:"MuiFab"})(H),q=t("1waj"),G=t.n(q),Z=t("Wbzz"),J=t("ED4I");var X=o.forwardRef((function(e,a){var t=e.classes,r=e.className,n=e.color,i=void 0===n?"secondary":n,c=e.edge,l=void 0!==c&&c,d=e.size,p=void 0===d?"medium":d,m=Object(b.a)(e,["classes","className","color","edge","size"]),h=o.createElement("span",{className:t.thumb});return o.createElement("span",{className:Object(u.default)(t.root,r,{start:t.edgeStart,end:t.edgeEnd}[l],"small"===p&&t["size".concat(Object(y.a)(p))])},o.createElement(E,Object(s.a)({type:"checkbox",icon:h,checkedIcon:h,classes:{root:Object(u.default)(t.switchBase,t["color".concat(Object(y.a)(i))]),input:t.input,checked:t.checked,disabled:t.disabled},ref:a},m)),o.createElement("span",{className:t.track}))})),K=Object(i.a)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(O.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(O.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(X),_=Object(i.a)((function(e){return{root:{color:"#092178",fontWeight:"700",fontFamily:["Poppins","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),backgroundColor:"#fc9a5c",borderBottomLeftRadius:0,borderBottomRightRadius:20,borderTopLeftRadius:20,borderTopRightRadius:20,"&:hover":{backgroundColor:"#092178",color:"#fc9a5c"}}}}))(l.a),Q=Object(c.a)((function(e){return{margin:{margin:e.spacing(1)}}}));var Y=function(e){var a=e.buttonText,t=Q();return r.a.createElement(_,{variant:"contained",color:"secondary",className:t.margin},a)},ee=t("K8zP"),ae=Object(i.a)((function(e){return{root:{color:"#fc9a5c",fontWeight:"700",fontFamily:["Poppins","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),backgroundColor:"#092178",borderBottomLeftRadius:20,borderBottomRightRadius:20,borderTopLeftRadius:20,borderTopRightRadius:20,"&:hover":{backgroundColor:"#fc9a5c",color:"#092178"}}}}))(l.a),te=Object(c.a)((function(e){return{margin:{margin:e.spacing(1)}}}));var oe=function(e){var a=e.buttonText,t=te();return r.a.createElement(ae,{variant:"contained",color:"secondary",className:t.margin},a)},re=Object(i.a)((function(e){return{root:{color:"#fc9a5c",fontWeight:"700",fontFamily:["Poppins","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),backgroundColor:"#092178",borderBottomLeftRadius:0,borderBottomRightRadius:20,borderTopLeftRadius:20,borderTopRightRadius:20,"&:hover":{backgroundColor:"#fc9a5c",color:"#092178"}}}}))(l.a),ne=Object(c.a)((function(e){return{margin:{margin:e.spacing(1)}}}));var ie=function(e){var a=e.buttonText,t=ne();return r.a.createElement(re,{variant:"contained",color:"secondary",className:t.margin},a)},ce=Object(i.a)((function(e){return{root:{color:"#fc9a5c",fontWeight:"700",fontFamily:["Poppins","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),backgroundColor:"#0c2f8b",borderBottomLeftRadius:0,borderBottomRightRadius:20,borderTopLeftRadius:20,borderTopRightRadius:20,"&:hover":{backgroundColor:"#fc9a5c",color:"#0c2f8b"}}}}))(l.a),le=Object(c.a)((function(e){return{margin:{margin:e.spacing(1)}}}));var de=function(e){var a=e.buttonText,t=le();return r.a.createElement(ce,{variant:"contained",color:"secondary",className:t.margin},a)};var se=Object(i.a)((function(e){return{root:{width:70,height:36,padding:0,margin:e.spacing(1)},switchBase:{padding:3,"&$checked":{transform:"translateX(34px)",color:e.palette.common.white,"& + $track":{backgroundColor:"black",opacity:1,border:"1px solid white"}},"&$focusVisible $thumb":{color:"black",border:"1px solid white"}},thumb:{width:30,height:30,borderRadius:0},track:{borderRadius:0,border:"1px solid white",backgroundColor:"black",opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{}}}))((function(e){var a=e.classes,t=function(e,a){if(null==e)return{};var t,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["classes"]);return r.a.createElement(K,Object.assign({focusVisibleClassName:a.focusVisible,disableRipple:!0,classes:{root:a.root,switchBase:a.switchBase,thumb:a.thumb,track:a.track,checked:a.checked}},t))}));function be(){var e=r.a.useState({checkedA:!0,checkedB:!0,checkedC:!0}),a=e[0],t=e[1],o=function(e){return Object(J.a)(e)}({formControlLabel:{fontSize:"0.6rem","& label":{fontSize:"0.6rem"}}});return r.a.createElement(m,null,r.a.createElement("div",null,r.a.createElement(x,{control:r.a.createElement(se,{checked:a.checkedB,onChange:function(e){var o;t(Object.assign(Object.assign({},a),{},((o={})[e.target.name]=e.target.checked,o)))},name:"checkedB"}),label:r.a.createElement(v.a,{className:o.formControlLabel},"Turn hints"),labelPlacement:"top"})))}Object(c.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},extendedIcon:{marginRight:e.spacing(1)}}}));U.a,a.default=function(){return r.a.createElement(n.a,null,r.a.createElement("h1",null,"UI examples"),r.a.createElement(be,null),r.a.createElement(D,{color:"primary","aria-label":"add"},r.a.createElement(G.a,null)),r.a.createElement(Y,{buttonText:"hello"}),r.a.createElement(ee.a,{buttonText:"hello"}),r.a.createElement(oe,{buttonText:"hello"}),r.a.createElement(ie,{buttonText:"hello"}),r.a.createElement(de,{buttonText:"hello"}),r.a.createElement(W,null),r.a.createElement(Z.Link,{to:"/"},"Back to home"))}}}]);
//# sourceMappingURL=component---src-pages-ui-example-js-6142cf5c237425de6dc5.js.map