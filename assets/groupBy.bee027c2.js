import{bK as p,bL as u}from"./index.29a7f152.js";import{e as f,h as b}from"./toString.8ef640ae.js";import{a as c,b as g,c as i}from"./_baseMap.1cdfb348.js";function h(r,a,t,n){for(var e=-1,o=r==null?0:r.length;++e<o;){var s=r[e];a(n,s,t(s),r)}return n}function m(r,a,t,n){return c(r,function(e,o,s){a(n,e,t(e),s)}),n}function v(r,a){return function(t,n){var e=f(t)?h:m,o=a?a():{};return e(t,r,g(n),o)}}function A(r,a){var t=f(r)?b:i;return t(r,g(a))}function x(r,a){return p(A(r,a),1)}var y=Object.prototype,w=y.hasOwnProperty,M=v(function(r,a,t){w.call(r,t)?r[t].push(a):u(r,t,[a])}),B=M;export{v as c,x as f,B as g,A as m};
//# sourceMappingURL=groupBy.bee027c2.js.map