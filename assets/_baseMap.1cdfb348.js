import{bs as E,bt as _,aR as w,bu as p,bv as O,bw as g,bx as C,aS as L,by as v,aK as y}from"./index.29a7f152.js";import{b as R}from"./_baseIsEqual.67c9efc6.js";import{e as F}from"./toString.8ef640ae.js";function I(n,r,e){var t=n==null?void 0:E(n,r);return t===void 0?e:t}var m=1,o=2;function x(n,r,e,t){var i=e.length,f=i,s=!t;if(n==null)return!f;for(n=Object(n);i--;){var u=e[i];if(s&&u[2]?u[1]!==n[u[0]]:!(u[0]in n))return!1}for(;++i<f;){u=e[i];var a=u[0],b=n[a],h=u[1];if(s&&u[2]){if(b===void 0&&!(a in n))return!1}else{var A=new _;if(t)var d=t(b,h,a,n,r,A);if(!(d===void 0?R(h,b,m|o,t,A):d))return!1}}return!0}function M(n){return n===n&&!w(n)}function D(n){for(var r=p(n),e=r.length;e--;){var t=r[e],i=n[t];r[e]=[t,i,M(i)]}return r}function P(n,r){return function(e){return e==null?!1:e[n]===r&&(r!==void 0||n in Object(e))}}function G(n){var r=D(n);return r.length==1&&r[0][2]?P(r[0][0],r[0][1]):function(e){return e===n||x(e,n,r)}}var S=1,l=2;function K(n,r){return O(n)&&M(r)?P(g(n),r):function(e){var t=I(e,n);return t===void 0&&t===r?C(e,n):R(r,t,S|l)}}function $(n){return function(r){return r==null?void 0:r[n]}}function N(n){return function(r){return E(r,n)}}function T(n){return O(n)?$(g(n)):N(n)}function W(n){return typeof n=="function"?n:n==null?L:typeof n=="object"?F(n)?K(n[0],n[1]):G(n):T(n)}function U(n,r){return n&&v(n,r,p)}function q(n,r){return function(e,t){if(e==null)return e;if(!y(e))return n(e,t);for(var i=e.length,f=r?i:-1,s=Object(e);(r?f--:++f<i)&&t(s[f],f,s)!==!1;);return e}}var B=q(U),k=B;function X(n,r){var e=-1,t=y(n)?Array(n.length):[];return k(n,function(i,f,s){t[++e]=r(i,f,s)}),t}export{k as a,W as b,X as c,q as d,U as e,x as f,I as g,D as h,G as i,K as j,$ as k,T as p};
//# sourceMappingURL=_baseMap.1cdfb348.js.map