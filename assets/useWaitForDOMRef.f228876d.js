import{o as c}from"./createWithBsPrefix.4103f011.js";import{r}from"./jsx-runtime.31268528.js";var o=function(t){var u;return typeof document>"u"?null:t==null?c().body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),(u=t)!=null&&u.nodeType&&t||null)};function p(e,t){var u=r.exports.useState(function(){return o(e)}),n=u[0],i=u[1];if(!n){var f=o(e);f&&i(f)}return r.exports.useEffect(function(){t&&n&&t(n)},[t,n]),r.exports.useEffect(function(){var a=o(e);a!==n&&i(a)},[e,n]),n}export{p as u};
