import{r as u,j as a,a as O,R as E}from"./jsx-runtime.31268528.js";import{I as W}from"./IconSvg.1a319e23.js";import{B as U}from"./Button.5756842c.js";import{T as C}from"./Typography.7deb443e.js";import{o as S,T as A,P as K}from"./Tooltip.5176c19c.js";import{F as z}from"./Fade.4ca82ca8.js";import{a as w,P as Y}from"./List.36978e17.js";import{u as H,b as X,a as J}from"./TransitionGroupContext.43d26755.js";import{M as Q}from"./MenuList.07fec125.js";import{d as D,g as _,s as B,_ as x,e as N,h as F,i as R,j as V,G as Z,D as $}from"./styled.0bfd4c69.js";import{B as ee}from"./ButtonBase.34890086.js";import{d as j,D as te}from"./Divider.ced7c7fd.js";function q(e){return e.substring(2).toLowerCase()}function ne(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}function oe(e){const{children:t,disableReactTree:s=!1,mouseEvent:o="onClick",onClickAway:y,touchEvent:l="onTouchEnd"}=e,d=u.exports.useRef(!1),i=u.exports.useRef(null),c=u.exports.useRef(!1),f=u.exports.useRef(!1);u.exports.useEffect(()=>(setTimeout(()=>{c.current=!0},0),()=>{c.current=!1}),[]);const b=H(t.ref,i),g=X(r=>{const n=f.current;f.current=!1;const p=S(i.current);if(!c.current||!i.current||"clientX"in r&&ne(r,p))return;if(d.current){d.current=!1;return}let v;r.composedPath?v=r.composedPath().indexOf(i.current)>-1:v=!p.documentElement.contains(r.target)||i.current.contains(r.target),!v&&(s||!n)&&y(r)}),h=r=>n=>{f.current=!0;const p=t.props[r];p&&p(n)},I={ref:b};return l!==!1&&(I[l]=h(l)),u.exports.useEffect(()=>{if(l!==!1){const r=q(l),n=S(i.current),p=()=>{d.current=!0};return n.addEventListener(r,g),n.addEventListener("touchmove",p),()=>{n.removeEventListener(r,g),n.removeEventListener("touchmove",p)}}},[g,l]),o!==!1&&(I[o]=h(o)),u.exports.useEffect(()=>{if(o!==!1){const r=q(o),n=S(i.current);return n.addEventListener(r,g),()=>{n.removeEventListener(r,g)}}},[g,o]),a(u.exports.Fragment,{children:u.exports.cloneElement(t,I)})}function re(e){return _("MuiListItemIcon",e)}const se=D("MuiListItemIcon",["root","alignItemsFlexStart"]),G=se,ae=["className"],ie=e=>{const{alignItems:t,classes:s}=e;return V({root:["root",t==="flex-start"&&"alignItemsFlexStart"]},re,s)},ce=B("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,s.alignItems==="flex-start"&&t.alignItemsFlexStart]}})(({theme:e,ownerState:t})=>x({minWidth:56,color:(e.vars||e).palette.action.active,flexShrink:0,display:"inline-flex"},t.alignItems==="flex-start"&&{marginTop:8})),le=u.exports.forwardRef(function(t,s){const o=N({props:t,name:"MuiListItemIcon"}),{className:y}=o,l=F(o,ae),d=u.exports.useContext(w),i=x({},o,{alignItems:d.alignItems}),c=ie(i);return a(ce,x({className:R(c.root,y),ownerState:i,ref:s},l))}),de=le;function ue(e){return _("MuiListItemText",e)}const pe=D("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),k=pe,me=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],fe=e=>{const{classes:t,inset:s,primary:o,secondary:y,dense:l}=e;return V({root:["root",s&&"inset",l&&"dense",o&&y&&"multiline"],primary:["primary"],secondary:["secondary"]},ue,t)},ye=B("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[{[`& .${k.primary}`]:t.primary},{[`& .${k.secondary}`]:t.secondary},t.root,s.inset&&t.inset,s.primary&&s.secondary&&t.multiline,s.dense&&t.dense]}})(({ownerState:e})=>x({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},e.primary&&e.secondary&&{marginTop:6,marginBottom:6},e.inset&&{paddingLeft:56})),ge=u.exports.forwardRef(function(t,s){const o=N({props:t,name:"MuiListItemText"}),{children:y,className:l,disableTypography:d=!1,inset:i=!1,primary:c,primaryTypographyProps:f,secondary:b,secondaryTypographyProps:g}=o,h=F(o,me),{dense:I}=u.exports.useContext(w);let r=c!=null?c:y,n=b;const p=x({},o,{disableTypography:d,inset:i,primary:!!r,secondary:!!n,dense:I}),v=fe(p);return r!=null&&r.type!==C&&!d&&(r=a(C,x({variant:I?"body2":"body1",className:v.primary,component:f!=null&&f.variant?void 0:"span",display:"block"},f,{children:r}))),n!=null&&n.type!==C&&!d&&(n=a(C,x({variant:"body2",className:v.secondary,color:"text.secondary",display:"block"},g,{children:n}))),O(ye,x({className:R(v.root,l),ownerState:p,ref:s},h,{children:[r,n]}))}),xe=ge;function ve(e){return _("MuiMenuItem",e)}const be=D("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),M=be,Ie=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],he=(e,t)=>{const{ownerState:s}=e;return[t.root,s.dense&&t.dense,s.divider&&t.divider,!s.disableGutters&&t.gutters]},Ce=e=>{const{disabled:t,dense:s,divider:o,disableGutters:y,selected:l,classes:d}=e,c=V({root:["root",s&&"dense",t&&"disabled",!y&&"gutters",o&&"divider",l&&"selected"]},ve,d);return x({},d,c)},Te=B(ee,{shouldForwardProp:e=>Z(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:he})(({theme:e,ownerState:t})=>x({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${M.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:$(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${M.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:$(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${M.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:$(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:$(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${M.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${M.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${j.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${j.inset}`]:{marginLeft:52},[`& .${k.root}`]:{marginTop:0,marginBottom:0},[`& .${k.inset}`]:{paddingLeft:36},[`& .${G.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&x({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${G.root} svg`]:{fontSize:"1.25rem"}}))),Me=u.exports.forwardRef(function(t,s){const o=N({props:t,name:"MuiMenuItem"}),{autoFocus:y=!1,component:l="li",dense:d=!1,divider:i=!1,disableGutters:c=!1,focusVisibleClassName:f,role:b="menuitem",tabIndex:g,className:h}=o,I=F(o,Ie),r=u.exports.useContext(w),n=u.exports.useMemo(()=>({dense:d||r.dense||!1,disableGutters:c}),[r.dense,d,c]),p=u.exports.useRef(null);J(()=>{y&&p.current&&p.current.focus()},[y]);const v=x({},o,{dense:n.dense,divider:i,disableGutters:c}),T=Ce(o),m=H(p,s);let L;return o.disabled||(L=g!==void 0?g:-1),a(w.Provider,{value:n,children:a(Te,x({ref:m,role:b,tabIndex:L,component:l,focusVisibleClassName:R(T.focusVisible,f),className:R(T.root,h)},I,{ownerState:v,classes:T}))})}),Le=Me;function P(e){const{buttonTooltip:t,dropdownButtonText:s,items:o=[],convertSingleItemToButton:y=!0,renderMenuIfNoItems:l=!1,buttonProps:d={}}=e,i=u.exports.useId(),[c,f]=E.useState(!1),b=E.useRef(null),g=o.flat().length;if(!l&&g===0)return null;if(y&&g===1){const n=o.flat()[0];return a(U,{component:"href"in n?"a":"button",title:n.tooltipText,variant:"outlined",href:"href"in n?n.href:void 0,rel:"href"in n?"noopener noreferrer":void 0,onClick:"onClick"in n?n.onClick:void 0,disabled:n.disabled,children:a(C,{variant:"buttonLink",children:n.text})})}const h=()=>{f(n=>!n)},I=n=>{b.current&&b.current.contains(n.target)||f(!1)};function r(n){n.key==="Tab"?(n.preventDefault(),f(!1)):n.key==="Escape"&&f(!1)}return O(E.Fragment,{children:[a(A,{title:t,children:a("span",{children:a(U,{variant:"outlined",ref:b,id:`composition-button-${i}`,"aria-controls":c?`composition-menu-${i}`:void 0,"aria-expanded":c?"true":void 0,"aria-haspopup":"true",onClick:h,...d,children:a(C,{variant:"buttonLink",children:s})})})}),a(K,{open:c,anchorEl:b.current,role:void 0,placement:"bottom-end",transition:!0,style:{zIndex:10},children:({TransitionProps:n})=>a(z,{...n,children:a(Y,{children:a(oe,{onClickAway:I,children:a(Q,{autoFocusItem:c,id:`composition-menu-${i}`,"aria-labelledby":`composition-button-${i}`,onKeyDown:r,children:o.map((p,v,T)=>[p.map(m=>a(A,{title:m.tooltipText,placement:"left",children:O(Le,{component:"a",sx:{"&:hover":{color:"unset"},"&:focus":{color:"unset",textDecoration:"unset"}},disabled:m.disabled,href:"href"in m?m.href:void 0,rel:"href"in m?"noopener noreferrer":void 0,style:{pointerEvents:"auto"},onClick:L=>{!m.disabled&&"onClick"in m&&m.onClick&&(f(!1),m.onClick(L))},children:[a(de,{children:m.icon&&a(W,{icon:m.icon,sx:{width:"16px",height:"16px",...m.iconSx},wrap:!1})}),a(xe,{primaryTypographyProps:{variant:"smallText1",sx:m.textSx},sx:{marginTop:0},children:m.text})]})},m.text)),v<T.length-1&&a(te,{})])})})})})})]})}try{P.displayName="DropdownMenu",P.__docgenInfo={description:"The DropdownMenu component provides a generic way to compose a MUI dropdown menu.",displayName:"DropdownMenu",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"DropdownMenuItem[][]"}},dropdownButtonText:{defaultValue:null,description:"",name:"dropdownButtonText",required:!0,type:{name:"string"}},buttonTooltip:{defaultValue:null,description:"",name:"buttonTooltip",required:!1,type:{name:"string"}},buttonProps:{defaultValue:null,description:"",name:"buttonProps",required:!1,type:{name:'ButtonProps<"button", {}>'}},convertSingleItemToButton:{defaultValue:null,description:"",name:"convertSingleItemToButton",required:!1,type:{name:"boolean"}},renderMenuIfNoItems:{defaultValue:null,description:"",name:"renderMenuIfNoItems",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/menu/DropdownMenu.tsx#DropdownMenu"]={docgenInfo:P.__docgenInfo,name:"DropdownMenu",path:"src/lib/containers/menu/DropdownMenu.tsx#DropdownMenu"})}catch{}export{P as D};
