import{r as l,a as ce,j as N}from"./jsx-runtime.31268528.js";import{g as de,d as ue,j as fe,s as J,_ as I,e as pe,h as be,i as ve}from"./styled.0bfd4c69.js";import{F as Te}from"./Fade.4ca82ca8.js";import{o as A,_ as Pe,b as G,d as ne,e as Se,r as re,i as Ce}from"./Tooltip.5176c19c.js";import{g as Me}from"./List.36978e17.js";import{u as me,b as se}from"./TransitionGroupContext.43d26755.js";function ie(...e){return e.reduce((t,n)=>n==null?t:function(...s){t.apply(this,s),n.apply(this,s)},()=>{})}function ft(e,t=166){let n;function o(...s){const r=()=>{e.apply(this,s)};clearTimeout(n),n=setTimeout(r,t)}return o.clear=()=>{clearTimeout(n)},o}function pt(e,t){return l.exports.isValidElement(e)&&t.indexOf(e.type.muiName)!==-1}function Q(e){return A(e).defaultView||window}const Ie=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Fe(e){const t=parseInt(e.getAttribute("tabindex"),10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function we(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=o=>e.ownerDocument.querySelector(`input[type="radio"]${o}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function Ne(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||we(e))}function Ae(e){const t=[],n=[];return Array.from(e.querySelectorAll(Ie)).forEach((o,s)=>{const r=Fe(o);r===-1||!Ne(o)||(r===0?t.push(o):n.push({documentOrder:s,tabIndex:r,node:o}))}),n.sort((o,s)=>o.tabIndex===s.tabIndex?o.documentOrder-s.documentOrder:o.tabIndex-s.tabIndex).map(o=>o.node).concat(t)}function Be(){return!0}function Oe(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:o=!1,disableRestoreFocus:s=!1,getTabbable:r=Ae,isEnabled:i=Be,open:a}=e,u=l.exports.useRef(),g=l.exports.useRef(null),y=l.exports.useRef(null),f=l.exports.useRef(null),m=l.exports.useRef(null),h=l.exports.useRef(!1),d=l.exports.useRef(null),P=me(t.ref,d),x=l.exports.useRef(null);l.exports.useEffect(()=>{!a||!d.current||(h.current=!n)},[n,a]),l.exports.useEffect(()=>{if(!a||!d.current)return;const c=A(d.current);return d.current.contains(c.activeElement)||(d.current.hasAttribute("tabIndex")||d.current.setAttribute("tabIndex",-1),h.current&&d.current.focus()),()=>{s||(f.current&&f.current.focus&&(u.current=!0,f.current.focus()),f.current=null)}},[a]),l.exports.useEffect(()=>{if(!a||!d.current)return;const c=A(d.current),b=k=>{const{current:F}=d;if(F!==null){if(!c.hasFocus()||o||!i()||u.current){u.current=!1;return}if(!F.contains(c.activeElement)){if(k&&m.current!==k.target||c.activeElement!==m.current)m.current=null;else if(m.current!==null)return;if(!h.current)return;let C=[];if((c.activeElement===g.current||c.activeElement===y.current)&&(C=r(d.current)),C.length>0){var v,T;const D=Boolean(((v=x.current)==null?void 0:v.shiftKey)&&((T=x.current)==null?void 0:T.key)==="Tab"),L=C[0],w=C[C.length-1];D?w.focus():L.focus()}else F.focus()}}},B=k=>{x.current=k,!(o||!i()||k.key!=="Tab")&&c.activeElement===d.current&&k.shiftKey&&(u.current=!0,y.current.focus())};c.addEventListener("focusin",b),c.addEventListener("keydown",B,!0);const R=setInterval(()=>{c.activeElement.tagName==="BODY"&&b()},50);return()=>{clearInterval(R),c.removeEventListener("focusin",b),c.removeEventListener("keydown",B,!0)}},[n,o,s,i,a,r]);const S=c=>{f.current===null&&(f.current=c.relatedTarget),h.current=!0,m.current=c.target;const b=t.props.onFocus;b&&b(c)},E=c=>{f.current===null&&(f.current=c.relatedTarget),h.current=!0};return ce(l.exports.Fragment,{children:[N("div",{tabIndex:a?0:-1,onFocus:E,ref:g,"data-testid":"sentinelStart"}),l.exports.cloneElement(t,{ref:P,onFocus:S}),N("div",{tabIndex:a?0:-1,onFocus:E,ref:y,"data-testid":"sentinelEnd"})]})}function De(e){const t=A(e);return t.body===e?Q(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function K(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function ae(e){return parseInt(Q(e).getComputedStyle(e).paddingRight,10)||0}function Le(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,o=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||o}function le(e,t,n,o,s){const r=[t,n,...o];[].forEach.call(e.children,i=>{const a=r.indexOf(i)===-1,u=!Le(i);a&&u&&K(i,s)})}function X(e,t){let n=-1;return e.some((o,s)=>t(o)?(n=s,!0):!1),n}function $e(e,t){const n=[],o=e.container;if(!t.disableScrollLock){if(De(o)){const i=Me(A(o));n.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight=`${ae(o)+i}px`;const a=A(o).querySelectorAll(".mui-fixed");[].forEach.call(a,u=>{n.push({value:u.style.paddingRight,property:"padding-right",el:u}),u.style.paddingRight=`${ae(u)+i}px`})}let r;if(o.parentNode instanceof DocumentFragment)r=A(o).body;else{const i=o.parentElement,a=Q(o);r=(i==null?void 0:i.nodeName)==="HTML"&&a.getComputedStyle(i).overflowY==="scroll"?i:o}n.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{n.forEach(({value:r,el:i,property:a})=>{r?i.style.setProperty(a,r):i.style.removeProperty(a)})}}function Ue(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class _e{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,n){let o=this.modals.indexOf(t);if(o!==-1)return o;o=this.modals.length,this.modals.push(t),t.modalRef&&K(t.modalRef,!1);const s=Ue(n);le(n,t.mount,t.modalRef,s,!0);const r=X(this.containers,i=>i.container===n);return r!==-1?(this.containers[r].modals.push(t),o):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:s}),o)}mount(t,n){const o=X(this.containers,r=>r.modals.indexOf(t)!==-1),s=this.containers[o];s.restore||(s.restore=$e(s,n))}remove(t,n=!0){const o=this.modals.indexOf(t);if(o===-1)return o;const s=X(this.containers,i=>i.modals.indexOf(t)!==-1),r=this.containers[s];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(o,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&K(t.modalRef,n),le(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(s,1);else{const i=r.modals[r.modals.length-1];i.modalRef&&K(i.modalRef,!1)}return o}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function He(e){return de("MuiModal",e)}ue("MuiModal",["root","hidden"]);const Ke=["children","classes","closeAfterTransition","component","container","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onKeyDown","open","onTransitionEnter","onTransitionExited","slotProps","slots"],je=e=>{const{open:t,exited:n,classes:o}=e;return fe({root:["root",!t&&n&&"hidden"]},He,o)};function We(e){return typeof e=="function"?e():e}function ze(e){return e.children?e.children.props.hasOwnProperty("in"):!1}const Ye=new _e,qe=l.exports.forwardRef(function(t,n){var o,s;const{children:r,classes:i,closeAfterTransition:a=!1,component:u,container:g,disableAutoFocus:y=!1,disableEnforceFocus:f=!1,disableEscapeKeyDown:m=!1,disablePortal:h=!1,disableRestoreFocus:d=!1,disableScrollLock:P=!1,hideBackdrop:x=!1,keepMounted:S=!1,manager:E=Ye,onBackdropClick:c,onClose:b,onKeyDown:B,open:R,onTransitionEnter:k,onTransitionExited:F,slotProps:v={},slots:T={}}=t,C=Pe(t,Ke),[D,L]=l.exports.useState(!0),w=l.exports.useRef({}),$=l.exports.useRef(null),M=l.exports.useRef(null),W=me(M,n),O=ze(t),_=(o=t["aria-hidden"])!=null?o:!0,z=()=>A($.current),U=()=>(w.current.modalRef=M.current,w.current.mountNode=$.current,w.current),Z=()=>{E.mount(U(),{disableScrollLock:P}),M.current.scrollTop=0},ee=se(()=>{const p=We(g)||z().body;E.add(U(),p),M.current&&Z()}),Y=l.exports.useCallback(()=>E.isTopModal(U()),[E]),he=se(p=>{$.current=p,p&&(R&&Y()?Z():K(M.current,_))}),H=l.exports.useCallback(()=>{E.remove(U(),_)},[E,_]);l.exports.useEffect(()=>()=>{H()},[H]),l.exports.useEffect(()=>{R?ee():(!O||!a)&&H()},[R,H,O,a,ee]);const q=G({},t,{classes:i,closeAfterTransition:a,disableAutoFocus:y,disableEnforceFocus:f,disableEscapeKeyDown:m,disablePortal:h,disableRestoreFocus:d,disableScrollLock:P,exited:D,hideBackdrop:x,keepMounted:S}),te=je(q),xe=()=>{L(!1),k&&k()},ge=()=>{L(!0),F&&F(),a&&H()},Ee=p=>{p.target===p.currentTarget&&(c&&c(p),b&&b(p,"backdropClick"))},ke=p=>{B&&B(p),!(p.key!=="Escape"||!Y())&&(m||(p.stopPropagation(),b&&b(p,"escapeKeyDown")))},j={};r.props.tabIndex===void 0&&(j.tabIndex="-1"),O&&(j.onEnter=ie(xe,r.props.onEnter),j.onExited=ie(ge,r.props.onExited));const oe=(s=u!=null?u:T.root)!=null?s:"div",ye=ne({elementType:oe,externalSlotProps:v.root,externalForwardedProps:C,additionalProps:{ref:W,role:"presentation",onKeyDown:ke},className:te.root,ownerState:q}),V=T.backdrop,Re=ne({elementType:V,externalSlotProps:v.backdrop,additionalProps:{"aria-hidden":!0,onClick:Ee,open:R},className:te.backdrop,ownerState:q});return!S&&!R&&(!O||D)?null:N(Se,{ref:he,container:g,disablePortal:h,children:ce(oe,G({},ye,{children:[!x&&V?N(V,G({},Re)):null,N(Oe,{disableEnforceFocus:f,disableAutoFocus:y,disableRestoreFocus:d,isEnabled:Y,open:R,children:l.exports.cloneElement(r,j)})]}))})}),Ve=qe;function Ge(e){return de("MuiBackdrop",e)}ue("MuiBackdrop",["root","invisible"]);const Xe=["children","component","components","componentsProps","className","invisible","open","transitionDuration","TransitionComponent"],Je=e=>{const{classes:t,invisible:n}=e;return fe({root:["root",n&&"invisible"]},Ge,t)},Qe=J("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>I({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),Ze=l.exports.forwardRef(function(t,n){var o,s;const r=pe({props:t,name:"MuiBackdrop"}),{children:i,component:a="div",components:u={},componentsProps:g={},className:y,invisible:f=!1,open:m,transitionDuration:h,TransitionComponent:d=Te}=r,P=be(r,Xe),x=I({},r,{component:a,invisible:f}),S=Je(x);return N(d,I({in:m,timeout:h},P,{children:N(Qe,{"aria-hidden":!0,as:(o=u.Root)!=null?o:a,className:ve(S.root,y),ownerState:I({},x,(s=g.root)==null?void 0:s.ownerState),classes:S,ref:n,children:i})}))}),et=Ze,tt=["BackdropComponent","BackdropProps","closeAfterTransition","children","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","slotProps","slots","theme"],ot=e=>e.classes,nt=J("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>I({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),rt=J(et,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),st=l.exports.forwardRef(function(t,n){var o,s,r,i,a,u;const g=pe({name:"MuiModal",props:t}),{BackdropComponent:y=rt,BackdropProps:f,closeAfterTransition:m=!1,children:h,component:d,components:P={},componentsProps:x={},disableAutoFocus:S=!1,disableEnforceFocus:E=!1,disableEscapeKeyDown:c=!1,disablePortal:b=!1,disableRestoreFocus:B=!1,disableScrollLock:R=!1,hideBackdrop:k=!1,keepMounted:F=!1,slotProps:v,slots:T,theme:C}=g,D=be(g,tt),[L,w]=l.exports.useState(!0),$={closeAfterTransition:m,disableAutoFocus:S,disableEnforceFocus:E,disableEscapeKeyDown:c,disablePortal:b,disableRestoreFocus:B,disableScrollLock:R,hideBackdrop:k,keepMounted:F},M=I({},g,$,{exited:L}),W=ot(M),O=(o=(s=T==null?void 0:T.root)!=null?s:P.Root)!=null?o:nt,_=(r=(i=T==null?void 0:T.backdrop)!=null?i:P.Backdrop)!=null?r:y,z=(a=v==null?void 0:v.root)!=null?a:x.root,U=(u=v==null?void 0:v.backdrop)!=null?u:x.backdrop;return N(Ve,I({slots:{root:O,backdrop:_},slotProps:{root:()=>I({},re(z,M),!Ce(O)&&{as:d,theme:C}),backdrop:()=>I({},f,re(U,M))},onTransitionEnter:()=>w(!1),onTransitionExited:()=>w(!0),ref:n},D,{classes:W},$,{children:h}))}),bt=st;export{et as B,Oe as F,bt as M,ft as d,pt as i,Q as o};
