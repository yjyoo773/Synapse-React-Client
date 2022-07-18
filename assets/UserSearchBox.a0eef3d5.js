import{a as M,_ as W}from"./objectWithoutPropertiesLoose.090b3c10.js";import{_ as ot,a as He}from"./withStyles.8be28b48.js";import{P as o}from"./index.06f4a415.js";import{b7 as st}from"./index.29a7f152.js";import{U as ut}from"./UserOrTeamBadge.9fa42aa2.js";import{j as L,F as at,a as lt}from"./jsx-runtime.2e925369.js";var w={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var he=60103,me=60106,Y=60107,q=60108,z=60114,X=60109,Q=60110,Z=60112,G=60113,Se=60120,J=60115,ee=60116,_e=60121,Be=60122,Ve=60117,Ke=60129,Ne=60131;if(typeof Symbol=="function"&&Symbol.for){var D=Symbol.for;he=D("react.element"),me=D("react.portal"),Y=D("react.fragment"),q=D("react.strict_mode"),z=D("react.profiler"),X=D("react.provider"),Q=D("react.context"),Z=D("react.forward_ref"),G=D("react.suspense"),Se=D("react.suspense_list"),J=D("react.memo"),ee=D("react.lazy"),_e=D("react.block"),Be=D("react.server.block"),Ve=D("react.fundamental"),Ke=D("react.debug_trace_mode"),Ne=D("react.legacy_hidden")}function B(t){if(typeof t=="object"&&t!==null){var n=t.$$typeof;switch(n){case he:switch(t=t.type,t){case Y:case z:case q:case G:case Se:return t;default:switch(t=t&&t.$$typeof,t){case Q:case Z:case ee:case J:case X:return t;default:return n}}case me:return n}}}var dt=X,ct=he,pt=Z,ft=Y,gt=ee,ht=J,mt=me,vt=z,It=q,yt=G;w.ContextConsumer=Q;w.ContextProvider=dt;w.Element=ct;w.ForwardRef=pt;w.Fragment=ft;w.Lazy=gt;w.Memo=ht;w.Portal=mt;w.Profiler=vt;w.StrictMode=It;w.Suspense=yt;w.isAsyncMode=function(){return!1};w.isConcurrentMode=function(){return!1};w.isContextConsumer=function(t){return B(t)===Q};w.isContextProvider=function(t){return B(t)===X};w.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===he};w.isForwardRef=function(t){return B(t)===Z};w.isFragment=function(t){return B(t)===Y};w.isLazy=function(t){return B(t)===ee};w.isMemo=function(t){return B(t)===J};w.isPortal=function(t){return B(t)===me};w.isProfiler=function(t){return B(t)===z};w.isStrictMode=function(t){return B(t)===q};w.isSuspense=function(t){return B(t)===G};w.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Y||t===z||t===Ke||t===q||t===G||t===Se||t===Ne||typeof t=="object"&&t!==null&&(t.$$typeof===ee||t.$$typeof===J||t.$$typeof===X||t.$$typeof===Q||t.$$typeof===Z||t.$$typeof===Ve||t.$$typeof===_e||t[0]===Be)};w.typeOf=B;function Ee(t){return typeof t=="object"&&t!=null&&t.nodeType===1}function Oe(t,n){return(!n||t!=="hidden")&&t!=="visible"&&t!=="clip"}function Ie(t,n){if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){var i=getComputedStyle(t,null);return Oe(i.overflowY,n)||Oe(i.overflowX,n)||function(u){var l=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch{return null}}(u);return!!l&&(l.clientHeight<u.scrollHeight||l.clientWidth<u.scrollWidth)}(t)}return!1}function le(t,n,i,u,l,e,d,v){return e<t&&d>n||e>t&&d<n?0:e<=t&&v<=i||d>=n&&v>=i?e-t-u:d>n&&v<i||e<t&&v>i?d-n+l:0}function wt(t,n){var i=window,u=n.scrollMode,l=n.block,e=n.inline,d=n.boundary,v=n.skipOverflowHiddenElements,O=typeof d=="function"?d:function(it){return it!==d};if(!Ee(t))throw new TypeError("Invalid target");for(var y=document.scrollingElement||document.documentElement,C=[],I=t;Ee(I)&&O(I);){if((I=I.parentElement)===y){C.push(I);break}I!=null&&I===document.body&&Ie(I)&&!Ie(document.documentElement)||I!=null&&Ie(I,v)&&C.push(I)}for(var b=i.visualViewport?i.visualViewport.width:innerWidth,H=i.visualViewport?i.visualViewport.height:innerHeight,x=window.scrollX||pageXOffset,A=window.scrollY||pageYOffset,V=t.getBoundingClientRect(),$=V.height,r=V.width,s=V.top,a=V.right,p=V.bottom,g=V.left,h=l==="start"||l==="nearest"?s:l==="end"?p:s+$/2,c=e==="center"?g+r/2:e==="end"?a:g,f=[],S=0;S<C.length;S++){var m=C[S],E=m.getBoundingClientRect(),P=E.height,R=E.width,_=E.top,k=E.right,ve=E.bottom,te=E.left;if(u==="if-needed"&&s>=0&&g>=0&&p<=H&&a<=b&&s>=_&&p<=ve&&g>=te&&a<=k)return f;var ne=getComputedStyle(m),re=parseInt(ne.borderLeftWidth,10),ie=parseInt(ne.borderTopWidth,10),oe=parseInt(ne.borderRightWidth,10),se=parseInt(ne.borderBottomWidth,10),T=0,U=0,ue="offsetWidth"in m?m.offsetWidth-m.clientWidth-re-oe:0,ae="offsetHeight"in m?m.offsetHeight-m.clientHeight-ie-se:0;if(y===m)T=l==="start"?h:l==="end"?h-H:l==="nearest"?le(A,A+H,H,ie,se,A+h,A+h+$,$):h-H/2,U=e==="start"?c:e==="center"?c-b/2:e==="end"?c-b:le(x,x+b,b,re,oe,x+c,x+c+r,r),T=Math.max(0,T+A),U=Math.max(0,U+x);else{T=l==="start"?h-_-ie:l==="end"?h-ve+se+ae:l==="nearest"?le(_,ve,P,ie,se+ae,h,h+$,$):h-(_+P/2)+ae/2,U=e==="start"?c-te-re:e==="center"?c-(te+R/2)+ue/2:e==="end"?c-k+oe+ue:le(te,k,R,re,oe+ue,c,c+r,r);var Ce=m.scrollLeft,xe=m.scrollTop;h+=xe-(T=Math.max(0,Math.min(xe+T,m.scrollHeight-P+ae))),c+=Ce-(U=Math.max(0,Math.min(Ce+U,m.scrollWidth-R+ue)))}f.push({el:m,top:T,left:U})}return f}var ge=function(){return ge=Object.assign||function(n){for(var i,u=1,l=arguments.length;u<l;u++){i=arguments[u];for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&(n[e]=i[e])}return n},ge.apply(this,arguments)};const St=window.React.cloneElement,bt=window.React.Component;window.React.useRef;window.React.useEffect;window.React.useCallback;window.React.useLayoutEffect;window.React.useReducer;window.React.useMemo;var Ct=0;function De(t){return typeof t=="function"?t:N}function N(){}function Te(t,n){if(!!t){var i=wt(t,{boundary:n,block:"nearest",scrollMode:"if-needed"});i.forEach(function(u){var l=u.el,e=u.top,d=u.left;l.scrollTop=e,l.scrollLeft=d})}}function Me(t,n,i){var u=t===n||n instanceof i.Node&&t.contains&&t.contains(n);return u}function be(t,n){var i;function u(){i&&clearTimeout(i)}function l(){for(var e=arguments.length,d=new Array(e),v=0;v<e;v++)d[v]=arguments[v];u(),i=setTimeout(function(){i=null,t.apply(void 0,d)},n)}return l.cancel=u,l}function K(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return function(u){for(var l=arguments.length,e=new Array(l>1?l-1:0),d=1;d<l;d++)e[d-1]=arguments[d];return n.some(function(v){return v&&v.apply(void 0,[u].concat(e)),u.preventDownshiftDefault||u.hasOwnProperty("nativeEvent")&&u.nativeEvent.preventDownshiftDefault})}}function Re(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return function(u){n.forEach(function(l){typeof l=="function"?l(u):l&&(l.current=u)})}}function xt(){return String(Ct++)}function Ue(t){var n=t.isOpen,i=t.resultCount,u=t.previousResultCount;return n?i?i!==u?i+" result"+(i===1?" is":"s are")+" available, use up and down arrow keys to navigate. Press Enter key to select.":"":"No results are available.":""}function Ae(t,n){return t=Array.isArray(t)?t[0]:t,!t&&n?n:t}function Ht(t){return typeof t.type=="string"}function Et(t){return t.props}var Ot=["highlightedIndex","inputValue","isOpen","selectedItem","type"];function de(t){t===void 0&&(t={});var n={};return Ot.forEach(function(i){t.hasOwnProperty(i)&&(n[i]=t[i])}),n}function Dt(t,n){return Object.keys(t).reduce(function(i,u){return i[u]=we(n,u)?n[u]:t[u],i},{})}function we(t,n){return t[n]!==void 0}function $e(t){var n=t.key,i=t.keyCode;return i>=37&&i<=40&&n.indexOf("Arrow")!==0?"Arrow"+n:n}function ye(t,n,i,u,l){if(l===void 0&&(l=!0),i===0)return-1;var e=i-1;(typeof n!="number"||n<0||n>=i)&&(n=t>0?-1:e+1);var d=n+t;d<0?d=l?e:0:d>e&&(d=l?0:e);var v=F(t,d,i,u,l);return v===-1?n>=i?-1:n:v}function F(t,n,i,u,l){var e=u(n);if(!e||!e.hasAttribute("disabled"))return n;if(t>0){for(var d=n+1;d<i;d++)if(!u(d).hasAttribute("disabled"))return d}else for(var v=n-1;v>=0;v--)if(!u(v).hasAttribute("disabled"))return v;return l?t>0?F(1,0,i,u,!1):F(-1,i-1,i,u,!1):-1}function Pe(t,n,i,u){return u===void 0&&(u=!0),n.some(function(l){return l&&(Me(l,t,i)||u&&Me(l,i.document.activeElement,i))})}var Mt=be(function(t){ke(t).textContent=""},500);function Le(t,n){var i=ke(n);!t||(i.textContent=t,Mt(n))}function ke(t){t===void 0&&(t=document);var n=t.getElementById("a11y-status-message");return n||(n=t.createElement("div"),n.setAttribute("id","a11y-status-message"),n.setAttribute("role","status"),n.setAttribute("aria-live","polite"),n.setAttribute("aria-relevant","additions text"),Object.assign(n.style,{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px"}),t.body.appendChild(n),n)}var We=0,je=1,Fe=2,ce=3,pe=4,Ye=5,qe=6,ze=7,Xe=8,Qe=9,Ze=10,Ge=11,Je=12,et=13,tt=14,nt=15,rt=16,Rt=Object.freeze({__proto__:null,unknown:We,mouseUp:je,itemMouseEnter:Fe,keyDownArrowUp:ce,keyDownArrowDown:pe,keyDownEscape:Ye,keyDownEnter:qe,keyDownHome:ze,keyDownEnd:Xe,clickItem:Qe,blurInput:Ze,changeInput:Ge,keyDownSpaceButton:Je,clickButton:et,blurButton:tt,controlledPropUpdatedSelectedItem:nt,touchEnd:rt}),At=["refKey","ref"],$t=["onClick","onPress","onKeyDown","onKeyUp","onBlur"],Pt=["onKeyDown","onBlur","onChange","onInput","onChangeText"],_t=["refKey","ref"],Bt=["onMouseMove","onMouseDown","onClick","onPress","index","item"],Vt=function(){var t=function(n){ot(i,n);function i(l){var e;e=n.call(this,l)||this,e.id=e.props.id||"downshift-"+xt(),e.menuId=e.props.menuId||e.id+"-menu",e.labelId=e.props.labelId||e.id+"-label",e.inputId=e.props.inputId||e.id+"-input",e.getItemId=e.props.getItemId||function(r){return e.id+"-item-"+r},e.input=null,e.items=[],e.itemCount=null,e.previousResultCount=0,e.timeoutIds=[],e.internalSetTimeout=function(r,s){var a=setTimeout(function(){e.timeoutIds=e.timeoutIds.filter(function(p){return p!==a}),r()},s);e.timeoutIds.push(a)},e.setItemCount=function(r){e.itemCount=r},e.unsetItemCount=function(){e.itemCount=null},e.setHighlightedIndex=function(r,s){r===void 0&&(r=e.props.defaultHighlightedIndex),s===void 0&&(s={}),s=de(s),e.internalSetState(M({highlightedIndex:r},s))},e.clearSelection=function(r){e.internalSetState({selectedItem:null,inputValue:"",highlightedIndex:e.props.defaultHighlightedIndex,isOpen:e.props.defaultIsOpen},r)},e.selectItem=function(r,s,a){s=de(s),e.internalSetState(M({isOpen:e.props.defaultIsOpen,highlightedIndex:e.props.defaultHighlightedIndex,selectedItem:r,inputValue:e.props.itemToString(r)},s),a)},e.selectItemAtIndex=function(r,s,a){var p=e.items[r];p!=null&&e.selectItem(p,s,a)},e.selectHighlightedItem=function(r,s){return e.selectItemAtIndex(e.getState().highlightedIndex,r,s)},e.internalSetState=function(r,s){var a,p,g={},h=typeof r=="function";return!h&&r.hasOwnProperty("inputValue")&&e.props.onInputValueChange(r.inputValue,M({},e.getStateAndHelpers(),r)),e.setState(function(c){c=e.getState(c);var f=h?r(c):r;f=e.props.stateReducer(c,f),a=f.hasOwnProperty("selectedItem");var S={};return a&&f.selectedItem!==c.selectedItem&&(p=f.selectedItem),f.type=f.type||We,Object.keys(f).forEach(function(m){c[m]!==f[m]&&(g[m]=f[m]),m!=="type"&&(f[m],we(e.props,m)||(S[m]=f[m]))}),h&&f.hasOwnProperty("inputValue")&&e.props.onInputValueChange(f.inputValue,M({},e.getStateAndHelpers(),f)),S},function(){De(s)();var c=Object.keys(g).length>1;c&&e.props.onStateChange(g,e.getStateAndHelpers()),a&&e.props.onSelect(r.selectedItem,e.getStateAndHelpers()),p!==void 0&&e.props.onChange(p,e.getStateAndHelpers()),e.props.onUserAction(g,e.getStateAndHelpers())})},e.rootRef=function(r){return e._rootNode=r},e.getRootProps=function(r,s){var a,p=r===void 0?{}:r,g=p.refKey,h=g===void 0?"ref":g,c=p.ref,f=W(p,At),S=s===void 0?{}:s,m=S.suppressRefError,E=m===void 0?!1:m;e.getRootProps.called=!0,e.getRootProps.refKey=h,e.getRootProps.suppressRefError=E;var P=e.getState(),R=P.isOpen;return M((a={},a[h]=Re(c,e.rootRef),a.role="combobox",a["aria-expanded"]=R,a["aria-haspopup"]="listbox",a["aria-owns"]=R?e.menuId:null,a["aria-labelledby"]=e.labelId,a),f)},e.keyDownHandlers={ArrowDown:function(s){var a=this;if(s.preventDefault(),this.getState().isOpen){var p=s.shiftKey?5:1;this.moveHighlightedIndex(p,{type:pe})}else this.internalSetState({isOpen:!0,type:pe},function(){var g=a.getItemCount();if(g>0){var h=a.getState(),c=h.highlightedIndex,f=ye(1,c,g,function(S){return a.getItemNodeFromIndex(S)});a.setHighlightedIndex(f,{type:pe})}})},ArrowUp:function(s){var a=this;if(s.preventDefault(),this.getState().isOpen){var p=s.shiftKey?-5:-1;this.moveHighlightedIndex(p,{type:ce})}else this.internalSetState({isOpen:!0,type:ce},function(){var g=a.getItemCount();if(g>0){var h=a.getState(),c=h.highlightedIndex,f=ye(-1,c,g,function(S){return a.getItemNodeFromIndex(S)});a.setHighlightedIndex(f,{type:ce})}})},Enter:function(s){if(s.which!==229){var a=this.getState(),p=a.isOpen,g=a.highlightedIndex;if(p&&g!=null){s.preventDefault();var h=this.items[g],c=this.getItemNodeFromIndex(g);if(h==null||c&&c.hasAttribute("disabled"))return;this.selectHighlightedItem({type:qe})}}},Escape:function(s){s.preventDefault(),this.reset(M({type:Ye},!this.state.isOpen&&{selectedItem:null,inputValue:""}))}},e.buttonKeyDownHandlers=M({},e.keyDownHandlers,{" ":function(s){s.preventDefault(),this.toggleMenu({type:Je})}}),e.inputKeyDownHandlers=M({},e.keyDownHandlers,{Home:function(s){var a=this,p=this.getState(),g=p.isOpen;if(!!g){s.preventDefault();var h=this.getItemCount();if(!(h<=0||!g)){var c=F(1,0,h,function(f){return a.getItemNodeFromIndex(f)},!1);this.setHighlightedIndex(c,{type:ze})}}},End:function(s){var a=this,p=this.getState(),g=p.isOpen;if(!!g){s.preventDefault();var h=this.getItemCount();if(!(h<=0||!g)){var c=F(-1,h-1,h,function(f){return a.getItemNodeFromIndex(f)},!1);this.setHighlightedIndex(c,{type:Xe})}}}}),e.getToggleButtonProps=function(r){var s=r===void 0?{}:r,a=s.onClick;s.onPress;var p=s.onKeyDown,g=s.onKeyUp,h=s.onBlur,c=W(s,$t),f=e.getState(),S=f.isOpen,m={onClick:K(a,e.buttonHandleClick),onKeyDown:K(p,e.buttonHandleKeyDown),onKeyUp:K(g,e.buttonHandleKeyUp),onBlur:K(h,e.buttonHandleBlur)},E=c.disabled?{}:m;return M({type:"button",role:"button","aria-label":S?"close menu":"open menu","aria-haspopup":!0,"data-toggle":!0},E,c)},e.buttonHandleKeyUp=function(r){r.preventDefault()},e.buttonHandleKeyDown=function(r){var s=$e(r);e.buttonKeyDownHandlers[s]&&e.buttonKeyDownHandlers[s].call(He(e),r)},e.buttonHandleClick=function(r){r.preventDefault(),e.props.environment.document.activeElement===e.props.environment.document.body&&r.target.focus(),e.internalSetTimeout(function(){return e.toggleMenu({type:et})})},e.buttonHandleBlur=function(r){var s=r.target;e.internalSetTimeout(function(){!e.isMouseDown&&(e.props.environment.document.activeElement==null||e.props.environment.document.activeElement.id!==e.inputId)&&e.props.environment.document.activeElement!==s&&e.reset({type:tt})})},e.getLabelProps=function(r){return M({htmlFor:e.inputId,id:e.labelId},r)},e.getInputProps=function(r){var s=r===void 0?{}:r,a=s.onKeyDown,p=s.onBlur,g=s.onChange,h=s.onInput;s.onChangeText;var c=W(s,Pt),f,S={};f="onChange";var m=e.getState(),E=m.inputValue,P=m.isOpen,R=m.highlightedIndex;if(!c.disabled){var _;S=(_={},_[f]=K(g,h,e.inputHandleChange),_.onKeyDown=K(a,e.inputHandleKeyDown),_.onBlur=K(p,e.inputHandleBlur),_)}return M({"aria-autocomplete":"list","aria-activedescendant":P&&typeof R=="number"&&R>=0?e.getItemId(R):null,"aria-controls":P?e.menuId:null,"aria-labelledby":e.labelId,autoComplete:"off",value:E,id:e.inputId},S,c)},e.inputHandleKeyDown=function(r){var s=$e(r);s&&e.inputKeyDownHandlers[s]&&e.inputKeyDownHandlers[s].call(He(e),r)},e.inputHandleChange=function(r){e.internalSetState({type:Ge,isOpen:!0,inputValue:r.target.value,highlightedIndex:e.props.defaultHighlightedIndex})},e.inputHandleBlur=function(){e.internalSetTimeout(function(){var r=e.props.environment.document&&!!e.props.environment.document.activeElement&&!!e.props.environment.document.activeElement.dataset&&e.props.environment.document.activeElement.dataset.toggle&&e._rootNode&&e._rootNode.contains(e.props.environment.document.activeElement);!e.isMouseDown&&!r&&e.reset({type:Ze})})},e.menuRef=function(r){e._menuNode=r},e.getMenuProps=function(r,s){var a,p=r===void 0?{}:r,g=p.refKey,h=g===void 0?"ref":g,c=p.ref,f=W(p,_t),S=s===void 0?{}:s,m=S.suppressRefError,E=m===void 0?!1:m;return e.getMenuProps.called=!0,e.getMenuProps.refKey=h,e.getMenuProps.suppressRefError=E,M((a={},a[h]=Re(c,e.menuRef),a.role="listbox",a["aria-labelledby"]=f&&f["aria-label"]?null:e.labelId,a.id=e.menuId,a),f)},e.getItemProps=function(r){var s,a=r===void 0?{}:r,p=a.onMouseMove,g=a.onMouseDown,h=a.onClick;a.onPress;var c=a.index,f=a.item,S=f===void 0?void 0:f,m=W(a,Bt);c===void 0?(e.items.push(S),c=e.items.indexOf(S)):e.items[c]=S;var E="onClick",P=h,R=(s={onMouseMove:K(p,function(){c!==e.getState().highlightedIndex&&(e.setHighlightedIndex(c,{type:Fe}),e.avoidScrolling=!0,e.internalSetTimeout(function(){return e.avoidScrolling=!1},250))}),onMouseDown:K(g,function(k){k.preventDefault()})},s[E]=K(P,function(){e.selectItemAtIndex(c,{type:Qe})}),s),_=m.disabled?{onMouseDown:R.onMouseDown}:R;return M({id:e.getItemId(c),role:"option","aria-selected":e.getState().highlightedIndex===c},_,m)},e.clearItems=function(){e.items=[]},e.reset=function(r,s){r===void 0&&(r={}),r=de(r),e.internalSetState(function(a){var p=a.selectedItem;return M({isOpen:e.props.defaultIsOpen,highlightedIndex:e.props.defaultHighlightedIndex,inputValue:e.props.itemToString(p)},r)},s)},e.toggleMenu=function(r,s){r===void 0&&(r={}),r=de(r),e.internalSetState(function(a){var p=a.isOpen;return M({isOpen:!p},p&&{highlightedIndex:e.props.defaultHighlightedIndex},r)},function(){var a=e.getState(),p=a.isOpen,g=a.highlightedIndex;p&&e.getItemCount()>0&&typeof g=="number"&&e.setHighlightedIndex(g,r),De(s)()})},e.openMenu=function(r){e.internalSetState({isOpen:!0},r)},e.closeMenu=function(r){e.internalSetState({isOpen:!1},r)},e.updateStatus=be(function(){var r=e.getState(),s=e.items[r.highlightedIndex],a=e.getItemCount(),p=e.props.getA11yStatusMessage(M({itemToString:e.props.itemToString,previousResultCount:e.previousResultCount,resultCount:a,highlightedItem:s},r));e.previousResultCount=a,Le(p,e.props.environment.document)},200);var d=e.props,v=d.defaultHighlightedIndex,O=d.initialHighlightedIndex,y=O===void 0?v:O,C=d.defaultIsOpen,I=d.initialIsOpen,b=I===void 0?C:I,H=d.initialInputValue,x=H===void 0?"":H,A=d.initialSelectedItem,V=A===void 0?null:A,$=e.getState({highlightedIndex:y,isOpen:b,inputValue:x,selectedItem:V});return $.selectedItem!=null&&e.props.initialInputValue===void 0&&($.inputValue=e.props.itemToString($.selectedItem)),e.state=$,e}var u=i.prototype;return u.internalClearTimeouts=function(){this.timeoutIds.forEach(function(e){clearTimeout(e)}),this.timeoutIds=[]},u.getState=function(e){return e===void 0&&(e=this.state),Dt(e,this.props)},u.getItemCount=function(){var e=this.items.length;return this.itemCount!=null?e=this.itemCount:this.props.itemCount!==void 0&&(e=this.props.itemCount),e},u.getItemNodeFromIndex=function(e){return this.props.environment.document.getElementById(this.getItemId(e))},u.scrollHighlightedItemIntoView=function(){{var e=this.getItemNodeFromIndex(this.getState().highlightedIndex);this.props.scrollIntoView(e,this._menuNode)}},u.moveHighlightedIndex=function(e,d){var v=this,O=this.getItemCount(),y=this.getState(),C=y.highlightedIndex;if(O>0){var I=ye(e,C,O,function(b){return v.getItemNodeFromIndex(b)});this.setHighlightedIndex(I,d)}},u.getStateAndHelpers=function(){var e=this.getState(),d=e.highlightedIndex,v=e.inputValue,O=e.selectedItem,y=e.isOpen,C=this.props.itemToString,I=this.id,b=this.getRootProps,H=this.getToggleButtonProps,x=this.getLabelProps,A=this.getMenuProps,V=this.getInputProps,$=this.getItemProps,r=this.openMenu,s=this.closeMenu,a=this.toggleMenu,p=this.selectItem,g=this.selectItemAtIndex,h=this.selectHighlightedItem,c=this.setHighlightedIndex,f=this.clearSelection,S=this.clearItems,m=this.reset,E=this.setItemCount,P=this.unsetItemCount,R=this.internalSetState;return{getRootProps:b,getToggleButtonProps:H,getLabelProps:x,getMenuProps:A,getInputProps:V,getItemProps:$,reset:m,openMenu:r,closeMenu:s,toggleMenu:a,selectItem:p,selectItemAtIndex:g,selectHighlightedItem:h,setHighlightedIndex:c,clearSelection:f,clearItems:S,setItemCount:E,unsetItemCount:P,setState:R,itemToString:C,id:I,highlightedIndex:d,inputValue:v,isOpen:y,selectedItem:O}},u.componentDidMount=function(){var e=this;{var d=function(){e.isMouseDown=!0},v=function(H){e.isMouseDown=!1;var x=Pe(H.target,[e._rootNode,e._menuNode],e.props.environment);!x&&e.getState().isOpen&&e.reset({type:je},function(){return e.props.onOuterClick(e.getStateAndHelpers())})},O=function(){e.isTouchMove=!1},y=function(){e.isTouchMove=!0},C=function(H){var x=Pe(H.target,[e._rootNode,e._menuNode],e.props.environment,!1);!e.isTouchMove&&!x&&e.getState().isOpen&&e.reset({type:rt},function(){return e.props.onOuterClick(e.getStateAndHelpers())})},I=this.props.environment;I.addEventListener("mousedown",d),I.addEventListener("mouseup",v),I.addEventListener("touchstart",O),I.addEventListener("touchmove",y),I.addEventListener("touchend",C),this.cleanup=function(){e.internalClearTimeouts(),e.updateStatus.cancel(),I.removeEventListener("mousedown",d),I.removeEventListener("mouseup",v),I.removeEventListener("touchstart",O),I.removeEventListener("touchmove",y),I.removeEventListener("touchend",C)}}},u.shouldScroll=function(e,d){var v=this.props.highlightedIndex===void 0?this.getState():this.props,O=v.highlightedIndex,y=d.highlightedIndex===void 0?e:d,C=y.highlightedIndex,I=O&&this.getState().isOpen&&!e.isOpen,b=O!==C;return I||b},u.componentDidUpdate=function(e,d){we(this.props,"selectedItem")&&this.props.selectedItemChanged(e.selectedItem,this.props.selectedItem)&&this.internalSetState({type:nt,inputValue:this.props.itemToString(this.props.selectedItem)}),!this.avoidScrolling&&this.shouldScroll(d,e)&&this.scrollHighlightedItemIntoView(),this.updateStatus()},u.componentWillUnmount=function(){this.cleanup()},u.render=function(){var e=Ae(this.props.children,N);this.clearItems(),this.getRootProps.called=!1,this.getRootProps.refKey=void 0,this.getRootProps.suppressRefError=void 0,this.getMenuProps.called=!1,this.getMenuProps.refKey=void 0,this.getMenuProps.suppressRefError=void 0,this.getLabelProps.called=!1,this.getInputProps.called=!1;var d=Ae(e(this.getStateAndHelpers()));if(!d)return null;if(this.getRootProps.called||this.props.suppressRefError)return d;if(Ht(d))return St(d,this.getRootProps(Et(d)))},i}(bt);return t.defaultProps={defaultHighlightedIndex:null,defaultIsOpen:!1,getA11yStatusMessage:Ue,itemToString:function(i){return i==null?"":String(i)},onStateChange:N,onInputValueChange:N,onUserAction:N,onChange:N,onSelect:N,onOuterClick:N,selectedItemChanged:function(i,u){return i!==u},environment:typeof window=="undefined"?{}:window,stateReducer:function(i,u){return u},suppressRefError:!1,scrollIntoView:Te},t.stateChangeTypes=Rt,t}(),Kt=Vt;function Nt(t,n){return n.changes}function Tt(t){var n=t.selectedItem,i=t.itemToString;return n?i(n)+" has been selected.":""}be(function(t,n){Le(t(),n)},200);function Ut(t){return t?String(t):""}var j={itemToString:Ut,stateReducer:Nt,getA11ySelectionMessage:Tt,scrollIntoView:Te,circularNavigation:!1,environment:typeof window=="undefined"?{}:window};o.array.isRequired,o.func,o.func,o.func,o.bool,o.number,o.number,o.number,o.bool,o.bool,o.bool,o.any,o.any,o.any,o.string,o.string,o.string,o.func,o.string,o.func,o.func,o.func,o.func,o.func,o.shape({addEventListener:o.func,removeEventListener:o.func,document:o.shape({getElementById:o.func,activeElement:o.any,body:o.any})});function Lt(t){var n=t.isOpen,i=t.resultCount,u=t.previousResultCount;return n?i?i!==u?i+" result"+(i===1?" is":"s are")+" available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select.":"":"No results are available.":""}ge(ge({},j),{getA11yStatusMessage:Lt});o.array.isRequired,o.func,o.func,o.func,o.bool,o.number,o.number,o.number,o.bool,o.bool,o.bool,o.any,o.any,o.any,o.string,o.string,o.string,o.string,o.string,o.string,o.func,o.string,o.string,o.func,o.func,o.func,o.func,o.func,o.func,o.shape({addEventListener:o.func,removeEventListener:o.func,document:o.shape({getElementById:o.func,activeElement:o.any,body:o.any})});M({},j,{getA11yStatusMessage:Ue,circularNavigation:!0});function kt(t){var n=t.removedSelectedItem,i=t.itemToString;return i(n)+" has been removed."}o.array,o.array,o.array,o.func,o.func,o.func,o.number,o.number,o.number,o.func,o.func,o.string,o.string,o.shape({addEventListener:o.func,removeEventListener:o.func,document:o.shape({getElementById:o.func,activeElement:o.any,body:o.any})});j.itemToString,j.stateReducer,j.environment;const Wt=window.React.useState,fe=t=>{const{id:n,onSelectCallback:i,filterUserIds:u,typeFilter:l}=t,[e,d]=Wt([]),v=async y=>{try{const C=await st(y,l),I=u!=null&&u.length?C.children.filter(b=>!u.includes(b.ownerId)):C.children;d(I)}catch(C){console.log("onInputValueChange",C)}},O=y=>{i&&i(y)};return L(at,{children:L(Kt,{onInputValueChange:y=>{v(y)},onChange:y=>O(y),itemToString:y=>y!=null&&y.name?y.name:"",children:({getInputProps:y,getMenuProps:C,getItemProps:I,isOpen:b,inputValue:H})=>lt("div",{className:"user-search-box",children:[L("input",{...y({className:"form-control",id:n,type:"search",role:"searchbox",placeholder:"Enter the name..."}),style:{marginBottom:"0"}}),L("ul",{...C(),className:b?"users-visible":"",role:"list",children:b?e.filter(x=>!H||`${x.firstName} ${x.lastName}`.includes(H)||x.userName.includes(H)).map((x,A)=>L("li",{...I({key:x.ownerId,index:A,item:x}),children:L(ut,{userGroupHeader:x,disableHref:!0,showFullName:!0})},`userSearchBox-${A}`)):null})]})})})};var Qt=fe;try{fe.displayName="UserSearchBox",fe.__docgenInfo={description:"",displayName:"UserSearchBox",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},onSelectCallback:{defaultValue:null,description:"",name:"onSelectCallback",required:!1,type:{name:"((selected: UserGroupHeader) => void)"}},typeFilter:{defaultValue:null,description:"",name:"typeFilter",required:!1,type:{name:"enum",value:[{value:'"USERS_ONLY"'},{value:'"TEAMS_ONLY"'},{value:'"ALL"'}]}},filterUserIds:{defaultValue:null,description:"",name:"filterUserIds",required:!1,type:{name:"string[]"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/UserSearchBox.tsx#UserSearchBox"]={docgenInfo:fe.__docgenInfo,name:"UserSearchBox",path:"src/lib/containers/UserSearchBox.tsx#UserSearchBox"})}catch{}export{Qt as U};
//# sourceMappingURL=UserSearchBox.a0eef3d5.js.map