import{r as m,b as br,j as _,a as $t}from"./jsx-runtime.31268528.js";import{c as _t}from"./createSvgIcon.f7c19e7b.js";import{i as be,g as qt,d as Xt,j as Yt,s as et,B as xr,e as Gt,h as ft,_ as A,A as Kt,D as Zt}from"./styled.0bfd4c69.js";import{u as Jt}from"./useTheme.910eaec3.js";import{r as wr}from"./index.d5f32449.js";import{u as xe,a as Je,s as St,b as Pr,c as Or}from"./TransitionGroupContext.43d26755.js";import{T as Tr,r as Er,g as Dt}from"./utils.033d23ab.js";function Rr(e){return e&&e.ownerDocument||document}let Mt=0;function Cr(e){const[t,r]=m.exports.useState(e),o=e||t;return m.exports.useEffect(()=>{t==null&&(Mt+=1,r(`mui-${Mt}`))},[t]),o}const Lt=br["useId"];function Ar(e){if(Lt!==void 0){const t=Lt();return e!=null?e:t}return Cr(e)}function $r({controlled:e,default:t,name:r,state:o="value"}){const{current:n}=m.exports.useRef(e!==void 0),[i,l]=m.exports.useState(t),s=n?e:i,a=m.exports.useCallback(c=>{n||l(c)},[]);return[s,a]}function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},W.apply(this,arguments)}function Sr(e){return typeof e=="string"}function We(e,t,r){return Sr(e)?t:W({},t,{ownerState:W({},t.ownerState,r)})}function Dr(e,t=[]){if(e===void 0)return{};const r={};return Object.keys(e).filter(o=>o.match(/^on[A-Z]/)&&typeof e[o]=="function"&&!t.includes(o)).forEach(o=>{r[o]=e[o]}),r}function Mr(e,t){return typeof e=="function"?e(t):e}function dt(e,t){if(e==null)return{};var r={},o=Object.keys(e),n,i;for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&(r[n]=e[n]);return r}function kt(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(r=>!(r.match(/^on[A-Z]/)&&typeof e[r]=="function")).forEach(r=>{t[r]=e[r]}),t}function Lr(e){const{getSlotProps:t,additionalProps:r,externalSlotProps:o,externalForwardedProps:n,className:i}=e;if(!t){const u=be(n==null?void 0:n.className,o==null?void 0:o.className,i,r==null?void 0:r.className),b=W({},r==null?void 0:r.style,n==null?void 0:n.style,o==null?void 0:o.style),f=W({},r,n,o);return u.length>0&&(f.className=u),Object.keys(b).length>0&&(f.style=b),{props:f,internalRef:void 0}}const l=Dr(W({},n,o)),s=kt(o),a=kt(n),c=t(l),p=be(c==null?void 0:c.className,r==null?void 0:r.className,i,n==null?void 0:n.className,o==null?void 0:o.className),d=W({},c==null?void 0:c.style,r==null?void 0:r.style,n==null?void 0:n.style,o==null?void 0:o.style),g=W({},c,r,a,s);return p.length>0&&(g.className=p),Object.keys(d).length>0&&(g.style=d),{props:g,internalRef:c.ref}}const kr=["elementType","externalSlotProps","ownerState"];function Br(e){var t;const{elementType:r,externalSlotProps:o,ownerState:n}=e,i=dt(e,kr),l=Mr(o,n),{props:s,internalRef:a}=Lr(W({},i,{externalSlotProps:l})),c=xe(a,l==null?void 0:l.ref,(t=e.additionalProps)==null?void 0:t.ref);return We(r,W({},s,{ref:c}),n)}var U="top",X="bottom",Y="right",V="left",vt="auto",Ve=[U,X,Y,V],we="start",Fe="end",jr="clippingParents",Qt="viewport",Ne="popper",Nr="reference",Bt=Ve.reduce(function(e,t){return e.concat([t+"-"+we,t+"-"+Fe])},[]),er=[].concat(Ve,[vt]).reduce(function(e,t){return e.concat([t,t+"-"+we,t+"-"+Fe])},[]),Wr="beforeRead",Hr="read",Ir="afterRead",Fr="beforeMain",Ur="main",Vr="afterMain",zr="beforeWrite",_r="write",qr="afterWrite",Xr=[Wr,Hr,Ir,Fr,Ur,Vr,zr,_r,qr];function ne(e){return e?(e.nodeName||"").toLowerCase():null}function G(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function he(e){var t=G(e).Element;return e instanceof t||e instanceof Element}function q(e){var t=G(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function mt(e){if(typeof ShadowRoot>"u")return!1;var t=G(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Yr(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var o=t.styles[r]||{},n=t.attributes[r]||{},i=t.elements[r];!q(i)||!ne(i)||(Object.assign(i.style,o),Object.keys(n).forEach(function(l){var s=n[l];s===!1?i.removeAttribute(l):i.setAttribute(l,s===!0?"":s)}))})}function Gr(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(o){var n=t.elements[o],i=t.attributes[o]||{},l=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:r[o]),s=l.reduce(function(a,c){return a[c]="",a},{});!q(n)||!ne(n)||(Object.assign(n.style,s),Object.keys(i).forEach(function(a){n.removeAttribute(a)}))})}}const Kr={name:"applyStyles",enabled:!0,phase:"write",fn:Yr,effect:Gr,requires:["computeStyles"]};function oe(e){return e.split("-")[0]}var me=Math.max,Qe=Math.min,Pe=Math.round;function lt(){var e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function tr(){return!/^((?!chrome|android).)*safari/i.test(lt())}function Oe(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var o=e.getBoundingClientRect(),n=1,i=1;t&&q(e)&&(n=e.offsetWidth>0&&Pe(o.width)/e.offsetWidth||1,i=e.offsetHeight>0&&Pe(o.height)/e.offsetHeight||1);var l=he(e)?G(e):window,s=l.visualViewport,a=!tr()&&r,c=(o.left+(a&&s?s.offsetLeft:0))/n,p=(o.top+(a&&s?s.offsetTop:0))/i,d=o.width/n,g=o.height/i;return{width:d,height:g,top:p,right:c+d,bottom:p+g,left:c,x:c,y:p}}function ht(e){var t=Oe(e),r=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:o}}function rr(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&mt(r)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function ae(e){return G(e).getComputedStyle(e)}function Zr(e){return["table","td","th"].indexOf(ne(e))>=0}function ue(e){return((he(e)?e.ownerDocument:e.document)||window.document).documentElement}function tt(e){return ne(e)==="html"?e:e.assignedSlot||e.parentNode||(mt(e)?e.host:null)||ue(e)}function jt(e){return!q(e)||ae(e).position==="fixed"?null:e.offsetParent}function Jr(e){var t=/firefox/i.test(lt()),r=/Trident/i.test(lt());if(r&&q(e)){var o=ae(e);if(o.position==="fixed")return null}var n=tt(e);for(mt(n)&&(n=n.host);q(n)&&["html","body"].indexOf(ne(n))<0;){var i=ae(n);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return n;n=n.parentNode}return null}function ze(e){for(var t=G(e),r=jt(e);r&&Zr(r)&&ae(r).position==="static";)r=jt(r);return r&&(ne(r)==="html"||ne(r)==="body"&&ae(r).position==="static")?t:r||Jr(e)||t}function gt(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function He(e,t,r){return me(e,Qe(t,r))}function Qr(e,t,r){var o=He(e,t,r);return o>r?r:o}function or(){return{top:0,right:0,bottom:0,left:0}}function nr(e){return Object.assign({},or(),e)}function ir(e,t){return t.reduce(function(r,o){return r[o]=e,r},{})}var eo=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,nr(typeof t!="number"?t:ir(t,Ve))};function to(e){var t,r=e.state,o=e.name,n=e.options,i=r.elements.arrow,l=r.modifiersData.popperOffsets,s=oe(r.placement),a=gt(s),c=[V,Y].indexOf(s)>=0,p=c?"height":"width";if(!(!i||!l)){var d=eo(n.padding,r),g=ht(i),u=a==="y"?U:V,b=a==="y"?X:Y,f=r.rects.reference[p]+r.rects.reference[a]-l[a]-r.rects.popper[p],y=l[a]-r.rects.reference[a],P=ze(i),C=P?a==="y"?P.clientHeight||0:P.clientWidth||0:0,R=f/2-y/2,v=d[u],h=C-g[p]-d[b],x=C/2-g[p]/2+R,T=He(v,x,h),$=a;r.modifiersData[o]=(t={},t[$]=T,t.centerOffset=T-x,t)}}function ro(e){var t=e.state,r=e.options,o=r.element,n=o===void 0?"[data-popper-arrow]":o;n!=null&&(typeof n=="string"&&(n=t.elements.popper.querySelector(n),!n)||!rr(t.elements.popper,n)||(t.elements.arrow=n))}const oo={name:"arrow",enabled:!0,phase:"main",fn:to,effect:ro,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Te(e){return e.split("-")[1]}var no={top:"auto",right:"auto",bottom:"auto",left:"auto"};function io(e){var t=e.x,r=e.y,o=window,n=o.devicePixelRatio||1;return{x:Pe(t*n)/n||0,y:Pe(r*n)/n||0}}function Nt(e){var t,r=e.popper,o=e.popperRect,n=e.placement,i=e.variation,l=e.offsets,s=e.position,a=e.gpuAcceleration,c=e.adaptive,p=e.roundOffsets,d=e.isFixed,g=l.x,u=g===void 0?0:g,b=l.y,f=b===void 0?0:b,y=typeof p=="function"?p({x:u,y:f}):{x:u,y:f};u=y.x,f=y.y;var P=l.hasOwnProperty("x"),C=l.hasOwnProperty("y"),R=V,v=U,h=window;if(c){var x=ze(r),T="clientHeight",$="clientWidth";if(x===G(r)&&(x=ue(r),ae(x).position!=="static"&&s==="absolute"&&(T="scrollHeight",$="scrollWidth")),x=x,n===U||(n===V||n===Y)&&i===Fe){v=X;var M=d&&x===h&&h.visualViewport?h.visualViewport.height:x[T];f-=M-o.height,f*=a?1:-1}if(n===V||(n===U||n===X)&&i===Fe){R=Y;var S=d&&x===h&&h.visualViewport?h.visualViewport.width:x[$];u-=S-o.width,u*=a?1:-1}}var L=Object.assign({position:s},c&&no),j=p===!0?io({x:u,y:f}):{x:u,y:f};if(u=j.x,f=j.y,a){var k;return Object.assign({},L,(k={},k[v]=C?"0":"",k[R]=P?"0":"",k.transform=(h.devicePixelRatio||1)<=1?"translate("+u+"px, "+f+"px)":"translate3d("+u+"px, "+f+"px, 0)",k))}return Object.assign({},L,(t={},t[v]=C?f+"px":"",t[R]=P?u+"px":"",t.transform="",t))}function ao(e){var t=e.state,r=e.options,o=r.gpuAcceleration,n=o===void 0?!0:o,i=r.adaptive,l=i===void 0?!0:i,s=r.roundOffsets,a=s===void 0?!0:s,c={placement:oe(t.placement),variation:Te(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Nt(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:l,roundOffsets:a})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Nt(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const so={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:ao,data:{}};var Ye={passive:!0};function lo(e){var t=e.state,r=e.instance,o=e.options,n=o.scroll,i=n===void 0?!0:n,l=o.resize,s=l===void 0?!0:l,a=G(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach(function(p){p.addEventListener("scroll",r.update,Ye)}),s&&a.addEventListener("resize",r.update,Ye),function(){i&&c.forEach(function(p){p.removeEventListener("scroll",r.update,Ye)}),s&&a.removeEventListener("resize",r.update,Ye)}}const po={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:lo,data:{}};var co={left:"right",right:"left",bottom:"top",top:"bottom"};function Ze(e){return e.replace(/left|right|bottom|top/g,function(t){return co[t]})}var uo={start:"end",end:"start"};function Wt(e){return e.replace(/start|end/g,function(t){return uo[t]})}function yt(e){var t=G(e),r=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:r,scrollTop:o}}function bt(e){return Oe(ue(e)).left+yt(e).scrollLeft}function fo(e,t){var r=G(e),o=ue(e),n=r.visualViewport,i=o.clientWidth,l=o.clientHeight,s=0,a=0;if(n){i=n.width,l=n.height;var c=tr();(c||!c&&t==="fixed")&&(s=n.offsetLeft,a=n.offsetTop)}return{width:i,height:l,x:s+bt(e),y:a}}function vo(e){var t,r=ue(e),o=yt(e),n=(t=e.ownerDocument)==null?void 0:t.body,i=me(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),l=me(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),s=-o.scrollLeft+bt(e),a=-o.scrollTop;return ae(n||r).direction==="rtl"&&(s+=me(r.clientWidth,n?n.clientWidth:0)-i),{width:i,height:l,x:s,y:a}}function xt(e){var t=ae(e),r=t.overflow,o=t.overflowX,n=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+n+o)}function ar(e){return["html","body","#document"].indexOf(ne(e))>=0?e.ownerDocument.body:q(e)&&xt(e)?e:ar(tt(e))}function Ie(e,t){var r;t===void 0&&(t=[]);var o=ar(e),n=o===((r=e.ownerDocument)==null?void 0:r.body),i=G(o),l=n?[i].concat(i.visualViewport||[],xt(o)?o:[]):o,s=t.concat(l);return n?s:s.concat(Ie(tt(l)))}function pt(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function mo(e,t){var r=Oe(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function Ht(e,t,r){return t===Qt?pt(fo(e,r)):he(t)?mo(t,r):pt(vo(ue(e)))}function ho(e){var t=Ie(tt(e)),r=["absolute","fixed"].indexOf(ae(e).position)>=0,o=r&&q(e)?ze(e):e;return he(o)?t.filter(function(n){return he(n)&&rr(n,o)&&ne(n)!=="body"}):[]}function go(e,t,r,o){var n=t==="clippingParents"?ho(e):[].concat(t),i=[].concat(n,[r]),l=i[0],s=i.reduce(function(a,c){var p=Ht(e,c,o);return a.top=me(p.top,a.top),a.right=Qe(p.right,a.right),a.bottom=Qe(p.bottom,a.bottom),a.left=me(p.left,a.left),a},Ht(e,l,o));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function sr(e){var t=e.reference,r=e.element,o=e.placement,n=o?oe(o):null,i=o?Te(o):null,l=t.x+t.width/2-r.width/2,s=t.y+t.height/2-r.height/2,a;switch(n){case U:a={x:l,y:t.y-r.height};break;case X:a={x:l,y:t.y+t.height};break;case Y:a={x:t.x+t.width,y:s};break;case V:a={x:t.x-r.width,y:s};break;default:a={x:t.x,y:t.y}}var c=n?gt(n):null;if(c!=null){var p=c==="y"?"height":"width";switch(i){case we:a[c]=a[c]-(t[p]/2-r[p]/2);break;case Fe:a[c]=a[c]+(t[p]/2-r[p]/2);break}}return a}function Ue(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=o===void 0?e.placement:o,i=r.strategy,l=i===void 0?e.strategy:i,s=r.boundary,a=s===void 0?jr:s,c=r.rootBoundary,p=c===void 0?Qt:c,d=r.elementContext,g=d===void 0?Ne:d,u=r.altBoundary,b=u===void 0?!1:u,f=r.padding,y=f===void 0?0:f,P=nr(typeof y!="number"?y:ir(y,Ve)),C=g===Ne?Nr:Ne,R=e.rects.popper,v=e.elements[b?C:g],h=go(he(v)?v:v.contextElement||ue(e.elements.popper),a,p,l),x=Oe(e.elements.reference),T=sr({reference:x,element:R,strategy:"absolute",placement:n}),$=pt(Object.assign({},R,T)),M=g===Ne?$:x,S={top:h.top-M.top+P.top,bottom:M.bottom-h.bottom+P.bottom,left:h.left-M.left+P.left,right:M.right-h.right+P.right},L=e.modifiersData.offset;if(g===Ne&&L){var j=L[n];Object.keys(S).forEach(function(k){var H=[Y,X].indexOf(k)>=0?1:-1,w=[U,X].indexOf(k)>=0?"y":"x";S[k]+=j[w]*H})}return S}function yo(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=r.boundary,i=r.rootBoundary,l=r.padding,s=r.flipVariations,a=r.allowedAutoPlacements,c=a===void 0?er:a,p=Te(o),d=p?s?Bt:Bt.filter(function(b){return Te(b)===p}):Ve,g=d.filter(function(b){return c.indexOf(b)>=0});g.length===0&&(g=d);var u=g.reduce(function(b,f){return b[f]=Ue(e,{placement:f,boundary:n,rootBoundary:i,padding:l})[oe(f)],b},{});return Object.keys(u).sort(function(b,f){return u[b]-u[f]})}function bo(e){if(oe(e)===vt)return[];var t=Ze(e);return[Wt(e),t,Wt(t)]}function xo(e){var t=e.state,r=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var n=r.mainAxis,i=n===void 0?!0:n,l=r.altAxis,s=l===void 0?!0:l,a=r.fallbackPlacements,c=r.padding,p=r.boundary,d=r.rootBoundary,g=r.altBoundary,u=r.flipVariations,b=u===void 0?!0:u,f=r.allowedAutoPlacements,y=t.options.placement,P=oe(y),C=P===y,R=a||(C||!b?[Ze(y)]:bo(y)),v=[y].concat(R).reduce(function(ee,te){return ee.concat(oe(te)===vt?yo(t,{placement:te,boundary:p,rootBoundary:d,padding:c,flipVariations:b,allowedAutoPlacements:f}):te)},[]),h=t.rects.reference,x=t.rects.popper,T=new Map,$=!0,M=v[0],S=0;S<v.length;S++){var L=v[S],j=oe(L),k=Te(L)===we,H=[U,X].indexOf(j)>=0,w=H?"width":"height",E=Ue(t,{placement:L,boundary:p,rootBoundary:d,altBoundary:g,padding:c}),D=H?k?Y:V:k?X:U;h[w]>x[w]&&(D=Ze(D));var I=Ze(D),B=[];if(i&&B.push(E[j]<=0),s&&B.push(E[D]<=0,E[I]<=0),B.every(function(ee){return ee})){M=L,$=!1;break}T.set(L,B)}if($)for(var F=b?3:1,Ee=function(te){var re=v.find(function(se){var z=T.get(se);if(z)return z.slice(0,te).every(function(le){return le})});if(re)return M=re,"break"},K=F;K>0;K--){var fe=Ee(K);if(fe==="break")break}t.placement!==M&&(t.modifiersData[o]._skip=!0,t.placement=M,t.reset=!0)}}const wo={name:"flip",enabled:!0,phase:"main",fn:xo,requiresIfExists:["offset"],data:{_skip:!1}};function It(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function Ft(e){return[U,Y,X,V].some(function(t){return e[t]>=0})}function Po(e){var t=e.state,r=e.name,o=t.rects.reference,n=t.rects.popper,i=t.modifiersData.preventOverflow,l=Ue(t,{elementContext:"reference"}),s=Ue(t,{altBoundary:!0}),a=It(l,o),c=It(s,n,i),p=Ft(a),d=Ft(c);t.modifiersData[r]={referenceClippingOffsets:a,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":d})}const Oo={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Po};function To(e,t,r){var o=oe(e),n=[V,U].indexOf(o)>=0?-1:1,i=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,l=i[0],s=i[1];return l=l||0,s=(s||0)*n,[V,Y].indexOf(o)>=0?{x:s,y:l}:{x:l,y:s}}function Eo(e){var t=e.state,r=e.options,o=e.name,n=r.offset,i=n===void 0?[0,0]:n,l=er.reduce(function(p,d){return p[d]=To(d,t.rects,i),p},{}),s=l[t.placement],a=s.x,c=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=a,t.modifiersData.popperOffsets.y+=c),t.modifiersData[o]=l}const Ro={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Eo};function Co(e){var t=e.state,r=e.name;t.modifiersData[r]=sr({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Ao={name:"popperOffsets",enabled:!0,phase:"read",fn:Co,data:{}};function $o(e){return e==="x"?"y":"x"}function So(e){var t=e.state,r=e.options,o=e.name,n=r.mainAxis,i=n===void 0?!0:n,l=r.altAxis,s=l===void 0?!1:l,a=r.boundary,c=r.rootBoundary,p=r.altBoundary,d=r.padding,g=r.tether,u=g===void 0?!0:g,b=r.tetherOffset,f=b===void 0?0:b,y=Ue(t,{boundary:a,rootBoundary:c,padding:d,altBoundary:p}),P=oe(t.placement),C=Te(t.placement),R=!C,v=gt(P),h=$o(v),x=t.modifiersData.popperOffsets,T=t.rects.reference,$=t.rects.popper,M=typeof f=="function"?f(Object.assign({},t.rects,{placement:t.placement})):f,S=typeof M=="number"?{mainAxis:M,altAxis:M}:Object.assign({mainAxis:0,altAxis:0},M),L=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,j={x:0,y:0};if(!!x){if(i){var k,H=v==="y"?U:V,w=v==="y"?X:Y,E=v==="y"?"height":"width",D=x[v],I=D+y[H],B=D-y[w],F=u?-$[E]/2:0,Ee=C===we?T[E]:$[E],K=C===we?-$[E]:-T[E],fe=t.elements.arrow,ee=u&&fe?ht(fe):{width:0,height:0},te=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:or(),re=te[H],se=te[w],z=He(0,T[E],ee[E]),le=R?T[E]/2-F-z-re-S.mainAxis:Ee-z-re-S.mainAxis,ie=R?-T[E]/2+F+z+se+S.mainAxis:K+z+se+S.mainAxis,ge=t.elements.arrow&&ze(t.elements.arrow),rt=ge?v==="y"?ge.clientTop||0:ge.clientLeft||0:0,Re=(k=L==null?void 0:L[v])!=null?k:0,Z=D+le-Re-rt,Ce=D+ie-Re,pe=He(u?Qe(I,Z):I,D,u?me(B,Ce):B);x[v]=pe,j[v]=pe-D}if(s){var de,_e=v==="x"?U:V,ye=v==="x"?X:Y,J=x[h],ve=h==="y"?"height":"width",Ae=J+y[_e],qe=J-y[ye],$e=[U,V].indexOf(P)!==-1,Xe=(de=L==null?void 0:L[h])!=null?de:0,Se=$e?Ae:J-T[ve]-$[ve]-Xe+S.altAxis,De=$e?J+T[ve]+$[ve]-Xe-S.altAxis:qe,Me=u&&$e?Qr(Se,J,De):He(u?Se:Ae,J,u?De:qe);x[h]=Me,j[h]=Me-J}t.modifiersData[o]=j}}const Do={name:"preventOverflow",enabled:!0,phase:"main",fn:So,requiresIfExists:["offset"]};function Mo(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Lo(e){return e===G(e)||!q(e)?yt(e):Mo(e)}function ko(e){var t=e.getBoundingClientRect(),r=Pe(t.width)/e.offsetWidth||1,o=Pe(t.height)/e.offsetHeight||1;return r!==1||o!==1}function Bo(e,t,r){r===void 0&&(r=!1);var o=q(t),n=q(t)&&ko(t),i=ue(t),l=Oe(e,n,r),s={scrollLeft:0,scrollTop:0},a={x:0,y:0};return(o||!o&&!r)&&((ne(t)!=="body"||xt(i))&&(s=Lo(t)),q(t)?(a=Oe(t,!0),a.x+=t.clientLeft,a.y+=t.clientTop):i&&(a.x=bt(i))),{x:l.left+s.scrollLeft-a.x,y:l.top+s.scrollTop-a.y,width:l.width,height:l.height}}function jo(e){var t=new Map,r=new Set,o=[];e.forEach(function(i){t.set(i.name,i)});function n(i){r.add(i.name);var l=[].concat(i.requires||[],i.requiresIfExists||[]);l.forEach(function(s){if(!r.has(s)){var a=t.get(s);a&&n(a)}}),o.push(i)}return e.forEach(function(i){r.has(i.name)||n(i)}),o}function No(e){var t=jo(e);return Xr.reduce(function(r,o){return r.concat(t.filter(function(n){return n.phase===o}))},[])}function Wo(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function Ho(e){var t=e.reduce(function(r,o){var n=r[o.name];return r[o.name]=n?Object.assign({},n,o,{options:Object.assign({},n.options,o.options),data:Object.assign({},n.data,o.data)}):o,r},{});return Object.keys(t).map(function(r){return t[r]})}var Ut={placement:"bottom",modifiers:[],strategy:"absolute"};function Vt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function Io(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,o=r===void 0?[]:r,n=t.defaultOptions,i=n===void 0?Ut:n;return function(s,a,c){c===void 0&&(c=i);var p={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ut,i),modifiersData:{},elements:{reference:s,popper:a},attributes:{},styles:{}},d=[],g=!1,u={state:p,setOptions:function(P){var C=typeof P=="function"?P(p.options):P;f(),p.options=Object.assign({},i,p.options,C),p.scrollParents={reference:he(s)?Ie(s):s.contextElement?Ie(s.contextElement):[],popper:Ie(a)};var R=No(Ho([].concat(o,p.options.modifiers)));return p.orderedModifiers=R.filter(function(v){return v.enabled}),b(),u.update()},forceUpdate:function(){if(!g){var P=p.elements,C=P.reference,R=P.popper;if(!!Vt(C,R)){p.rects={reference:Bo(C,ze(R),p.options.strategy==="fixed"),popper:ht(R)},p.reset=!1,p.placement=p.options.placement,p.orderedModifiers.forEach(function(S){return p.modifiersData[S.name]=Object.assign({},S.data)});for(var v=0;v<p.orderedModifiers.length;v++){if(p.reset===!0){p.reset=!1,v=-1;continue}var h=p.orderedModifiers[v],x=h.fn,T=h.options,$=T===void 0?{}:T,M=h.name;typeof x=="function"&&(p=x({state:p,options:$,name:M,instance:u})||p)}}}},update:Wo(function(){return new Promise(function(y){u.forceUpdate(),y(p)})}),destroy:function(){f(),g=!0}};if(!Vt(s,a))return u;u.setOptions(c).then(function(y){!g&&c.onFirstUpdate&&c.onFirstUpdate(y)});function b(){p.orderedModifiers.forEach(function(y){var P=y.name,C=y.options,R=C===void 0?{}:C,v=y.effect;if(typeof v=="function"){var h=v({state:p,name:P,instance:u,options:R}),x=function(){};d.push(h||x)}})}function f(){d.forEach(function(y){return y()}),d=[]}return u}}var Fo=[po,Ao,so,Kr,Ro,wo,Do,oo,Oo],Uo=Io({defaultModifiers:Fo});function Vo(e){return typeof e=="function"?e():e}const zo=m.exports.forwardRef(function(t,r){const{children:o,container:n,disablePortal:i=!1}=t,[l,s]=m.exports.useState(null),a=xe(m.exports.isValidElement(o)?o.ref:null,r);return Je(()=>{i||s(Vo(n)||document.body)},[n,i]),Je(()=>{if(l&&!i)return St(r,l),()=>{St(r,null)}},[r,l,i]),i?m.exports.isValidElement(o)?m.exports.cloneElement(o,{ref:a}):o:_(m.exports.Fragment,{children:l&&wr.exports.createPortal(o,l)})}),_o=zo;function qo(e){return qt("MuiPopperUnstyled",e)}Xt("MuiPopperUnstyled",["root"]);const Xo=["anchorEl","children","component","direction","disablePortal","modifiers","open","ownerState","placement","popperOptions","popperRef","slotProps","slots","TransitionProps"],Yo=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function Go(e,t){if(t==="ltr")return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}function ct(e){return typeof e=="function"?e():e}const Ko=()=>Yt({root:["root"]},qo,{}),Zo={},Jo=m.exports.forwardRef(function(t,r){var o;const{anchorEl:n,children:i,component:l,direction:s,disablePortal:a,modifiers:c,open:p,ownerState:d,placement:g,popperOptions:u,popperRef:b,slotProps:f={},slots:y={},TransitionProps:P}=t,C=dt(t,Xo),R=m.exports.useRef(null),v=xe(R,r),h=m.exports.useRef(null),x=xe(h,b),T=m.exports.useRef(x);Je(()=>{T.current=x},[x]),m.exports.useImperativeHandle(b,()=>h.current,[]);const $=Go(g,s),[M,S]=m.exports.useState($);m.exports.useEffect(()=>{h.current&&h.current.forceUpdate()}),Je(()=>{if(!n||!p)return;const w=I=>{S(I.placement)};ct(n);let E=[{name:"preventOverflow",options:{altBoundary:a}},{name:"flip",options:{altBoundary:a}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:I})=>{w(I)}}];c!=null&&(E=E.concat(c)),u&&u.modifiers!=null&&(E=E.concat(u.modifiers));const D=Uo(ct(n),R.current,W({placement:$},u,{modifiers:E}));return T.current(D),()=>{D.destroy(),T.current(null)}},[n,a,c,p,u,$]);const L={placement:M};P!==null&&(L.TransitionProps=P);const j=Ko(),k=(o=l!=null?l:y.root)!=null?o:"div",H=Br({elementType:k,externalSlotProps:f.root,externalForwardedProps:C,additionalProps:{role:"tooltip",ref:v},ownerState:W({},t,d),className:j.root});return _(k,W({},H,{children:typeof i=="function"?i(L):i}))}),Qo=m.exports.forwardRef(function(t,r){const{anchorEl:o,children:n,container:i,direction:l="ltr",disablePortal:s=!1,keepMounted:a=!1,modifiers:c,open:p,placement:d="bottom",popperOptions:g=Zo,popperRef:u,style:b,transition:f=!1}=t,y=dt(t,Yo),[P,C]=m.exports.useState(!0),R=()=>{C(!1)},v=()=>{C(!0)};if(!a&&!p&&(!f||P))return null;const h=i||(o?Rr(ct(o)).body:void 0);return _(_o,{disablePortal:s,container:h,children:_(Jo,W({anchorEl:o,direction:l,disablePortal:s,modifiers:c,ref:r,open:f?!P:p,placement:d,popperOptions:g,popperRef:u},y,{style:W({position:"fixed",top:0,left:0,display:!p&&a&&(!f||P)?"none":null},b),TransitionProps:f?{in:p,onEnter:R,onExited:v}:null,children:n}))})}),en=Qo,On=_t([_("path",{d:"M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm-2 13-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z",opacity:".3"},"0"),_("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"},"1")],"CheckCircleTwoTone"),Tn=_t(_("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear"),tn=["components","componentsProps","slots","slotProps"],rn=et(en,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),on=m.exports.forwardRef(function(t,r){var o;const n=xr(),i=Gt({props:t,name:"MuiPopper"}),{components:l,componentsProps:s,slots:a,slotProps:c}=i,p=ft(i,tn),d=(o=a==null?void 0:a.root)!=null?o:l==null?void 0:l.Root;return _(rn,A({direction:n==null?void 0:n.direction,slots:{root:d},slotProps:c!=null?c:s},p,{ref:r}))}),lr=on,nn=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function ut(e){return`scale(${e}, ${e**2})`}const an={entering:{opacity:1,transform:ut(1)},entered:{opacity:1,transform:"none"}},at=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),pr=m.exports.forwardRef(function(t,r){const{addEndListener:o,appear:n=!0,children:i,easing:l,in:s,onEnter:a,onEntered:c,onEntering:p,onExit:d,onExited:g,onExiting:u,style:b,timeout:f="auto",TransitionComponent:y=Tr}=t,P=ft(t,nn),C=m.exports.useRef(),R=m.exports.useRef(),v=Jt(),h=m.exports.useRef(null),x=xe(h,i.ref,r),T=w=>E=>{if(w){const D=h.current;E===void 0?w(D):w(D,E)}},$=T(p),M=T((w,E)=>{Er(w);const{duration:D,delay:I,easing:B}=Dt({style:b,timeout:f,easing:l},{mode:"enter"});let F;f==="auto"?(F=v.transitions.getAutoHeightDuration(w.clientHeight),R.current=F):F=D,w.style.transition=[v.transitions.create("opacity",{duration:F,delay:I}),v.transitions.create("transform",{duration:at?F:F*.666,delay:I,easing:B})].join(","),a&&a(w,E)}),S=T(c),L=T(u),j=T(w=>{const{duration:E,delay:D,easing:I}=Dt({style:b,timeout:f,easing:l},{mode:"exit"});let B;f==="auto"?(B=v.transitions.getAutoHeightDuration(w.clientHeight),R.current=B):B=E,w.style.transition=[v.transitions.create("opacity",{duration:B,delay:D}),v.transitions.create("transform",{duration:at?B:B*.666,delay:at?D:D||B*.333,easing:I})].join(","),w.style.opacity=0,w.style.transform=ut(.75),d&&d(w)}),k=T(g),H=w=>{f==="auto"&&(C.current=setTimeout(w,R.current||0)),o&&o(h.current,w)};return m.exports.useEffect(()=>()=>{clearTimeout(C.current)},[]),_(y,A({appear:n,in:s,nodeRef:h,onEnter:M,onEntered:S,onEntering:$,onExit:j,onExited:k,onExiting:L,addEndListener:H,timeout:f==="auto"?null:f},P,{children:(w,E)=>m.exports.cloneElement(i,A({style:A({opacity:0,transform:ut(.75),visibility:w==="exited"&&!s?"hidden":void 0},an[w],b,i.props.style),ref:x},E))}))});pr.muiSupportAuto=!0;const zt=pr;function sn(e){return qt("MuiTooltip",e)}const ln=Xt("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),ce=ln,pn=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","title","TransitionComponent","TransitionProps"];function cn(e){return Math.round(e*1e5)/1e5}const un=e=>{const{classes:t,disableInteractive:r,arrow:o,touch:n,placement:i}=e,l={popper:["popper",!r&&"popperInteractive",o&&"popperArrow"],tooltip:["tooltip",o&&"tooltipArrow",n&&"touch",`tooltipPlacement${Kt(i.split("-")[0])}`],arrow:["arrow"]};return Yt(l,sn,t)},fn=et(lr,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.popper,!r.disableInteractive&&t.popperInteractive,r.arrow&&t.popperArrow,!r.open&&t.popperClose]}})(({theme:e,ownerState:t,open:r})=>A({zIndex:(e.vars||e).zIndex.tooltip,pointerEvents:"none"},!t.disableInteractive&&{pointerEvents:"auto"},!r&&{pointerEvents:"none"},t.arrow&&{[`&[data-popper-placement*="bottom"] .${ce.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${ce.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${ce.arrow}`]:A({},t.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${ce.arrow}`]:A({},t.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),dn=et("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.tooltip,r.touch&&t.touch,r.arrow&&t.tooltipArrow,t[`tooltipPlacement${Kt(r.placement.split("-")[0])}`]]}})(({theme:e,ownerState:t})=>A({backgroundColor:e.vars?e.vars.palette.Tooltip.bg:Zt(e.palette.grey[700],.92),borderRadius:(e.vars||e).shape.borderRadius,color:(e.vars||e).palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},t.arrow&&{position:"relative",margin:0},t.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:`${cn(16/14)}em`,fontWeight:e.typography.fontWeightRegular},{[`.${ce.popper}[data-popper-placement*="left"] &`]:A({transformOrigin:"right center"},t.isRtl?A({marginLeft:"14px"},t.touch&&{marginLeft:"24px"}):A({marginRight:"14px"},t.touch&&{marginRight:"24px"})),[`.${ce.popper}[data-popper-placement*="right"] &`]:A({transformOrigin:"left center"},t.isRtl?A({marginRight:"14px"},t.touch&&{marginRight:"24px"}):A({marginLeft:"14px"},t.touch&&{marginLeft:"24px"})),[`.${ce.popper}[data-popper-placement*="top"] &`]:A({transformOrigin:"center bottom",marginBottom:"14px"},t.touch&&{marginBottom:"24px"}),[`.${ce.popper}[data-popper-placement*="bottom"] &`]:A({transformOrigin:"center top",marginTop:"14px"},t.touch&&{marginTop:"24px"})})),vn=et("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})(({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:e.vars?e.vars.palette.Tooltip.bg:Zt(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let Ge=!1,st=null;function Ke(e,t){return r=>{t&&t(r),e(r)}}const mn=m.exports.forwardRef(function(t,r){var o,n,i,l,s,a;const c=Gt({props:t,name:"MuiTooltip"}),{arrow:p=!1,children:d,components:g={},componentsProps:u={},describeChild:b=!1,disableFocusListener:f=!1,disableHoverListener:y=!1,disableInteractive:P=!1,disableTouchListener:C=!1,enterDelay:R=100,enterNextDelay:v=0,enterTouchDelay:h=700,followCursor:x=!1,id:T,leaveDelay:$=0,leaveTouchDelay:M=1500,onClose:S,onOpen:L,open:j,placement:k="bottom",PopperComponent:H,PopperProps:w={},title:E,TransitionComponent:D=zt,TransitionProps:I}=c,B=ft(c,pn),F=Jt(),Ee=F.direction==="rtl",[K,fe]=m.exports.useState(),[ee,te]=m.exports.useState(null),re=m.exports.useRef(!1),se=P||x,z=m.exports.useRef(),le=m.exports.useRef(),ie=m.exports.useRef(),ge=m.exports.useRef(),[rt,Re]=$r({controlled:j,default:!1,name:"Tooltip",state:"open"});let Z=rt;const Ce=Ar(T),pe=m.exports.useRef(),de=m.exports.useCallback(()=>{pe.current!==void 0&&(document.body.style.WebkitUserSelect=pe.current,pe.current=void 0),clearTimeout(ge.current)},[]);m.exports.useEffect(()=>()=>{clearTimeout(z.current),clearTimeout(le.current),clearTimeout(ie.current),de()},[de]);const _e=O=>{clearTimeout(st),Ge=!0,Re(!0),L&&!Z&&L(O)},ye=Pr(O=>{clearTimeout(st),st=setTimeout(()=>{Ge=!1},800+$),Re(!1),S&&Z&&S(O),clearTimeout(z.current),z.current=setTimeout(()=>{re.current=!1},F.transitions.duration.shortest)}),J=O=>{re.current&&O.type!=="touchstart"||(K&&K.removeAttribute("title"),clearTimeout(le.current),clearTimeout(ie.current),R||Ge&&v?le.current=setTimeout(()=>{_e(O)},Ge?v:R):_e(O))},ve=O=>{clearTimeout(le.current),clearTimeout(ie.current),ie.current=setTimeout(()=>{ye(O)},$)},{isFocusVisibleRef:Ae,onBlur:qe,onFocus:$e,ref:Xe}=Or(),[,Se]=m.exports.useState(!1),De=O=>{qe(O),Ae.current===!1&&(Se(!1),ve(O))},Me=O=>{K||fe(O.currentTarget),$e(O),Ae.current===!0&&(Se(!0),J(O))},wt=O=>{re.current=!0;const N=d.props;N.onTouchStart&&N.onTouchStart(O)},Pt=J,Ot=ve,cr=O=>{wt(O),clearTimeout(ie.current),clearTimeout(z.current),de(),pe.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",ge.current=setTimeout(()=>{document.body.style.WebkitUserSelect=pe.current,J(O)},h)},ur=O=>{d.props.onTouchEnd&&d.props.onTouchEnd(O),de(),clearTimeout(ie.current),ie.current=setTimeout(()=>{ye(O)},M)};m.exports.useEffect(()=>{if(!Z)return;function O(N){(N.key==="Escape"||N.key==="Esc")&&ye(N)}return document.addEventListener("keydown",O),()=>{document.removeEventListener("keydown",O)}},[ye,Z]);const fr=xe(d.ref,Xe,fe,r);!E&&E!==0&&(Z=!1);const Le=m.exports.useRef({x:0,y:0}),ot=m.exports.useRef(),dr=O=>{const N=d.props;N.onMouseMove&&N.onMouseMove(O),Le.current={x:O.clientX,y:O.clientY},ot.current&&ot.current.update()},ke={},nt=typeof E=="string";b?(ke.title=!Z&&nt&&!y?E:null,ke["aria-describedby"]=Z?Ce:null):(ke["aria-label"]=nt?E:null,ke["aria-labelledby"]=Z&&!nt?Ce:null);const Q=A({},ke,B,d.props,{className:be(B.className,d.props.className),onTouchStart:wt,ref:fr},x?{onMouseMove:dr}:{}),Be={};C||(Q.onTouchStart=cr,Q.onTouchEnd=ur),y||(Q.onMouseOver=Ke(Pt,Q.onMouseOver),Q.onMouseLeave=Ke(Ot,Q.onMouseLeave),se||(Be.onMouseOver=Pt,Be.onMouseLeave=Ot)),f||(Q.onFocus=Ke(Me,Q.onFocus),Q.onBlur=Ke(De,Q.onBlur),se||(Be.onFocus=Me,Be.onBlur=De));const vr=m.exports.useMemo(()=>{var O;let N=[{name:"arrow",enabled:Boolean(ee),options:{element:ee,padding:4}}];return(O=w.popperOptions)!=null&&O.modifiers&&(N=N.concat(w.popperOptions.modifiers)),A({},w.popperOptions,{modifiers:N})},[ee,w]),je=A({},c,{isRtl:Ee,arrow:p,disableInteractive:se,placement:k,PopperComponentProp:H,touch:re.current}),it=un(je),Tt=(o=g.Popper)!=null?o:fn,Et=(n=(i=g.Transition)!=null?i:D)!=null?n:zt,Rt=(l=g.Tooltip)!=null?l:dn,Ct=(s=g.Arrow)!=null?s:vn,mr=We(Tt,A({},w,u.popper),je),hr=We(Et,A({},I,u.transition),je),gr=We(Rt,A({},u.tooltip),je),yr=We(Ct,A({},u.arrow),je);return $t(m.exports.Fragment,{children:[m.exports.cloneElement(d,Q),_(Tt,A({as:H!=null?H:lr,placement:k,anchorEl:x?{getBoundingClientRect:()=>({top:Le.current.y,left:Le.current.x,right:Le.current.x,bottom:Le.current.y,width:0,height:0})}:K,popperRef:ot,open:K?Z:!1,id:Ce,transition:!0},Be,mr,{className:be(it.popper,w==null?void 0:w.className,(a=u.popper)==null?void 0:a.className),popperOptions:vr,children:({TransitionProps:O})=>{var N,At;return _(Et,A({timeout:F.transitions.duration.shorter},O,hr,{children:$t(Rt,A({},gr,{className:be(it.tooltip,(N=u.tooltip)==null?void 0:N.className),children:[E,p?_(Ct,A({},yr,{className:be(it.arrow,(At=u.arrow)==null?void 0:At.className),ref:te})):null]}))}))}}))]})}),En=mn;export{Tn as C,zt as G,lr as P,En as T,dt as _,On as a,W as b,Ar as c,Br as d,_o as e,Sr as i,Rr as o,Mr as r,$r as u};
