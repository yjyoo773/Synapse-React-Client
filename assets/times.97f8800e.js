import{b8 as s,bw as f}from"./index.22d2125e.js";import{t as m}from"./toInteger.93a4e178.js";function u(t){return typeof t=="function"?t:s}var c=9007199254740991,i=4294967295,e=Math.min;function p(t,r){if(t=m(t),t<1||t>c)return[];var n=i,o=e(t,i);r=u(r),t-=i;for(var a=f(o,r);++n<t;)r(n);return a}export{u as c,p as t};
