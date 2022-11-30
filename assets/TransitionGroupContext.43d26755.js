import{r as s,a as T,j as I,R as C}from"./jsx-runtime.31268528.js";import{g as O,d as j,s as k,A as g,e as L,h as V,_ as E,i as F,j as P}from"./styled.0bfd4c69.js";function B(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const K=typeof window<"u"?s.exports.useLayoutEffect:s.exports.useEffect,M=K;function Z(e){const t=s.exports.useRef(e);return M(()=>{t.current=e}),s.exports.useCallback((...o)=>(0,t.current)(...o),[])}function ee(...e){return s.exports.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(o=>{B(o,t)})},e)}let S=!0,x=!1,R;const A={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function N(e){const{type:t,tagName:o}=e;return!!(o==="INPUT"&&A[t]&&!e.readOnly||o==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function U(e){e.metaKey||e.altKey||e.ctrlKey||(S=!0)}function _(){S=!1}function D(){this.visibilityState==="hidden"&&x&&(S=!0)}function W(e){e.addEventListener("keydown",U,!0),e.addEventListener("mousedown",_,!0),e.addEventListener("pointerdown",_,!0),e.addEventListener("touchstart",_,!0),e.addEventListener("visibilitychange",D,!0)}function G(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return S||N(t)}function te(){const e=s.exports.useCallback(n=>{n!=null&&W(n.ownerDocument)},[]),t=s.exports.useRef(!1);function o(){return t.current?(x=!0,window.clearTimeout(R),R=window.setTimeout(()=>{x=!1},100),t.current=!1,!0):!1}function r(n){return G(n)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:r,onBlur:o,ref:e}}function X(e){return O("MuiSvgIcon",e)}j("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const q=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],H=e=>{const{color:t,fontSize:o,classes:r}=e,n={root:["root",t!=="inherit"&&`color${g(t)}`,`fontSize${g(o)}`]};return P(n,X,r)},J=k("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.color!=="inherit"&&t[`color${g(o.color)}`],t[`fontSize${g(o.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var o,r,n,i,u,c,f,y,a,l,d,m,p,h,v,$,w;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:(o=e.transitions)==null||(r=o.create)==null?void 0:r.call(o,"fill",{duration:(n=e.transitions)==null||(i=n.duration)==null?void 0:i.shorter}),fontSize:{inherit:"inherit",small:((u=e.typography)==null||(c=u.pxToRem)==null?void 0:c.call(u,20))||"1.25rem",medium:((f=e.typography)==null||(y=f.pxToRem)==null?void 0:y.call(f,24))||"1.5rem",large:((a=e.typography)==null||(l=a.pxToRem)==null?void 0:l.call(a,35))||"2.1875rem"}[t.fontSize],color:(d=(m=(e.vars||e).palette)==null||(p=m[t.color])==null?void 0:p.main)!=null?d:{action:(h=(e.vars||e).palette)==null||(v=h.action)==null?void 0:v.active,disabled:($=(e.vars||e).palette)==null||(w=$.action)==null?void 0:w.disabled,inherit:void 0}[t.color]}}),z=s.exports.forwardRef(function(t,o){const r=L({props:t,name:"MuiSvgIcon"}),{children:n,className:i,color:u="inherit",component:c="svg",fontSize:f="medium",htmlColor:y,inheritViewBox:a=!1,titleAccess:l,viewBox:d="0 0 24 24"}=r,m=V(r,q),p=E({},r,{color:u,component:c,fontSize:f,instanceFontSize:t.fontSize,inheritViewBox:a,viewBox:d}),h={};a||(h.viewBox=d);const v=H(p);return T(J,E({as:c,className:F(v.root,i),focusable:"false",color:y,"aria-hidden":l?void 0:!0,role:l?"img":void 0,ref:o},h,m,{ownerState:p,children:[n,l?I("title",{children:l}):null]}))});z.muiName="SvgIcon";const oe=z;function ne(e,t){if(e==null)return{};var o={},r=Object.keys(e),n,i;for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&(o[n]=e[n]);return o}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},b(e,t)}function re(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,b(e,t)}const ie=C.createContext(null);export{oe as S,ie as T,re as _,M as a,Z as b,te as c,ne as d,B as s,ee as u};
