import{bu as T,bx as j,by as _,bz as C,bA as N,bB as u,b2 as E,b7 as v,bC as K,z as R,bD as W,bE as Y,A as q,bv as H}from"./index.22d2125e.js";import{k as F,d as B,s as J,c as Q,e as V,a as p,g as X}from"./_getTag.005e7532.js";import{S as m,i as x,e as Z}from"./isArray.e45ce668.js";function z(e,t){for(var n=-1,o=e==null?0:e.length;++n<o&&t(e[n],n,e)!==!1;);return e}function k(e,t){return e&&T(t,F(t),e)}function ee(e,t){return e&&T(t,j(t),e)}function te(e,t){return T(e,B(e),t)}var re=Object.getOwnPropertySymbols,ne=re?function(e){for(var t=[];e;)Q(t,B(e)),e=_(e);return t}:J;const M=ne;function ae(e,t){return T(e,M(e),t)}function oe(e){return V(e,j,M)}var se=Object.prototype,ce=se.hasOwnProperty;function ie(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&ce.call(e,"index")&&(n.index=e.index,n.input=e.input),n}function be(e,t){var n=t?C(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var ge=/\w*$/;function fe(e){var t=new e.constructor(e.source,ge.exec(e));return t.lastIndex=e.lastIndex,t}var I=m?m.prototype:void 0,O=I?I.valueOf:void 0;function ye(e){return O?Object(O.call(e)):{}}var ue="[object Boolean]",Te="[object Date]",le="[object Map]",je="[object Number]",pe="[object RegExp]",Ae="[object Set]",de="[object String]",$e="[object Symbol]",Se="[object ArrayBuffer]",me="[object DataView]",Ie="[object Float32Array]",Oe="[object Float64Array]",we="[object Int8Array]",he="[object Int16Array]",Ce="[object Int32Array]",Ee="[object Uint8Array]",Fe="[object Uint8ClampedArray]",Be="[object Uint16Array]",xe="[object Uint32Array]";function Me(e,t,n){var o=e.constructor;switch(t){case Se:return C(e);case ue:case Te:return new o(+e);case me:return be(e,n);case Ie:case Oe:case we:case he:case Ce:case Ee:case Fe:case Be:case xe:return N(e,n);case le:return new o;case je:case de:return new o(e);case pe:return fe(e);case Ae:return new o;case $e:return ye(e)}}var Le="[object Map]";function Ue(e){return x(e)&&p(e)==Le}var w=u&&u.isMap,Pe=w?E(w):Ue;const De=Pe;var Ge="[object Set]";function _e(e){return x(e)&&p(e)==Ge}var h=u&&u.isSet,Ne=h?E(h):_e;const ve=Ne;var Ke=1,Re=2,We=4,L="[object Arguments]",Ye="[object Array]",qe="[object Boolean]",He="[object Date]",Je="[object Error]",U="[object Function]",Qe="[object GeneratorFunction]",Ve="[object Map]",Xe="[object Number]",P="[object Object]",Ze="[object RegExp]",ze="[object Set]",ke="[object String]",et="[object Symbol]",tt="[object WeakMap]",rt="[object ArrayBuffer]",nt="[object DataView]",at="[object Float32Array]",ot="[object Float64Array]",st="[object Int8Array]",ct="[object Int16Array]",it="[object Int32Array]",bt="[object Uint8Array]",gt="[object Uint8ClampedArray]",ft="[object Uint16Array]",yt="[object Uint32Array]",r={};r[L]=r[Ye]=r[rt]=r[nt]=r[qe]=r[He]=r[at]=r[ot]=r[st]=r[ct]=r[it]=r[Ve]=r[Xe]=r[P]=r[Ze]=r[ze]=r[ke]=r[et]=r[bt]=r[gt]=r[ft]=r[yt]=!0;r[Je]=r[U]=r[tt]=!1;function l(e,t,n,o,g,s){var a,f=t&Ke,y=t&Re,D=t&We;if(n&&(a=g?n(e,o,g,s):n(e)),a!==void 0)return a;if(!v(e))return e;var A=Z(e);if(A){if(a=ie(e),!f)return K(e,a)}else{var b=p(e),d=b==U||b==Qe;if(R(e))return W(e,f);if(b==P||b==L||d&&!g){if(a=y||d?{}:Y(e),!f)return y?ae(e,ee(a,e)):te(e,k(a,e))}else{if(!r[b])return g?e:{};a=Me(e,b,f)}}s||(s=new q);var $=s.get(e);if($)return $;s.set(e,a),ve(e)?e.forEach(function(c){a.add(l(c,t,n,c,e,s))}):De(e)&&e.forEach(function(c,i){a.set(i,l(c,t,n,i,e,s))});var G=D?y?oe:X:y?j:F,S=A?void 0:G(e);return z(S||e,function(c,i){S&&(i=c,c=e[i]),H(a,i,l(c,t,n,i,e,s))}),a}export{z as a,l as b,k as c,ve as d,oe as g,De as i};
