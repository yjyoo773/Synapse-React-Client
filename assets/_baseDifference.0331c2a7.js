import{S as d,c as b}from"./_cacheHas.c4a58f17.js";import{h as w}from"./toString.8ef640ae.js";import{aQ as x}from"./index.9a9a7666.js";function I(n,e,i,t){for(var h=n.length,f=i+(t?1:-1);t?f--:++f<h;)if(e(n[f],f,n))return f;return-1}function A(n){return n!==n}function S(n,e,i){for(var t=i-1,h=n.length;++t<h;)if(n[t]===e)return t;return-1}function p(n,e,i){return e===e?S(n,e,i):I(n,A,i)}function C(n,e){var i=n==null?0:n.length;return!!i&&p(n,e,0)>-1}function E(n,e,i){for(var t=-1,h=n==null?0:n.length;++t<h;)if(i(e,n[t]))return!0;return!1}var L=200;function _(n,e,i,t){var h=-1,f=C,c=!0,g=n.length,r=[],o=e.length;if(!g)return r;i&&(e=w(e,x(i))),t?(f=E,c=!1):e.length>=L&&(f=b,c=!1,e=new d(e));n:for(;++h<g;){var s=n[h],l=i==null?s:i(s);if(s=t||s!==0?s:0,c&&l===l){for(var u=o;u--;)if(e[u]===l)continue n;r.push(s)}else f(e,l,t)||r.push(s)}return r}export{C as a,E as b,_ as c,I as d,p as e,A as f};
//# sourceMappingURL=_baseDifference.0331c2a7.js.map