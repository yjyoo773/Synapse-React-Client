import{bu as w,bv as R,bw as C,bx as _,by as p,bz as L,bA as c,bB as F,bC as I}from"./index.444e3572.js";import{b as y}from"./isEqual.7b80062a.js";import{k as A,g as T,b as x}from"./_getTag.09032bbf.js";import{b as O,i as d,t as E,h as D}from"./pick.fbb2f290.js";import{e as P}from"./isArray.69d02dee.js";function G(r,n,t){var e=r==null?void 0:O(r,n);return e===void 0?t:e}var S=1,B=2;function K(r,n,t,e){var i=t.length,s=i,a=!e;if(r==null)return!s;for(r=Object(r);i--;){var f=t[i];if(a&&f[2]?f[1]!==r[f[0]]:!(f[0]in r))return!1}for(;++i<s;){f=t[i];var u=f[0],o=r[u],b=f[1];if(a&&f[2]){if(o===void 0&&!(u in r))return!1}else{var g=new w;if(e)var h=e(o,b,u,r,n,g);if(!(h===void 0?y(b,o,S|B,e,g):h))return!1}}return!0}function m(r){return r===r&&!R(r)}function $(r){for(var n=A(r),t=n.length;t--;){var e=n[t],i=r[e];n[t]=[e,i,m(i)]}return n}function M(r,n){return function(t){return t==null?!1:t[r]===n&&(n!==void 0||r in Object(t))}}function N(r){var n=$(r);return n.length==1&&n[0][2]?M(n[0][0],n[0][1]):function(t){return t===r||K(t,r,n)}}var U=1,k=2;function q(r,n){return d(r)&&m(n)?M(E(r),n):function(t){var e=G(t,r);return e===void 0&&e===n?D(t,r):y(n,e,U|k)}}function z(r){return function(n){return n==null?void 0:n[r]}}function H(r){return function(n){return O(n,r)}}function J(r){return d(r)?z(E(r)):H(r)}function ir(r){return typeof r=="function"?r:r==null?C:typeof r=="object"?P(r)?q(r[0],r[1]):N(r):J(r)}function Q(r,n){return r&&_(r,n,A)}function W(r,n){return function(t,e){if(t==null)return t;if(!p(t))return r(t,e);for(var i=t.length,s=n?i:-1,a=Object(t);(n?s--:++s<i)&&e(a[s],s,a)!==!1;);return t}}var X=W(Q);const Y=X;function sr(r,n){var t=-1,e=p(r)?Array(r.length):[];return Y(r,function(i,s,a){e[++t]=n(i,s,a)}),e}var Z="[object Map]",l="[object Set]",v=Object.prototype,j=v.hasOwnProperty;function fr(r){if(r==null)return!0;if(p(r)&&(P(r)||typeof r=="string"||typeof r.splice=="function"||L(r)||c(r)||F(r)))return!r.length;var n=T(r);if(n==Z||n==l)return!r.size;if(I(r))return!x(r).length;for(var t in r)if(j.call(r,t))return!1;return!0}export{sr as a,ir as b,Y as c,W as d,Q as e,K as f,G as g,$ as h,fr as i,N as j,q as k,z as l,J as p};
