import{r as g,j as v}from"./jsx-runtime.ed0bc2e8.js";import{w as y,c as b,g as w}from"./withStyles.5eea39d5.js";function O(a,t){if(a==null)return{};var r={},e=Object.keys(a),i,n;for(n=0;n<e.length;n++)i=e[n],!(t.indexOf(i)>=0)&&(r[i]=a[i]);return r}function j(a,t){if(a==null)return{};var r=O(a,t),e,i;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);for(i=0;i<n.length;i++)e=n[i],!(t.indexOf(e)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,e)||(r[e]=a[e]))}return r}function s(){return s=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(a[e]=r[e])}return a},s.apply(this,arguments)}var k=function(t){return{root:{display:"block",backgroundColor:w(t.palette.text.primary,t.palette.type==="light"?.11:.13),height:"1.2em"},text:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 60%",transform:"scale(1, 0.60)",borderRadius:t.shape.borderRadius,"&:empty:before":{content:'"\\00a0"'}},rect:{},circle:{borderRadius:"50%"},pulse:{animation:"$pulse 1.5s ease-in-out 0.5s infinite"},"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}},wave:{position:"relative",overflow:"hidden","&::after":{animation:"$wave 1.6s linear 0.5s infinite",background:"linear-gradient(90deg, transparent, ".concat(t.palette.action.hover,", transparent)"),content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}},"@keyframes wave":{"0%":{transform:"translateX(-100%)"},"60%":{transform:"translateX(100%)"},"100%":{transform:"translateX(100%)"}},withChildren:{"& > *":{visibility:"hidden"}},fitContent:{maxWidth:"fit-content"},heightAuto:{height:"auto"}}},x=g.exports.forwardRef(function(t,r){var e=t.animation,i=e===void 0?"pulse":e,n=t.classes,m=t.className,l=t.component,p=l===void 0?"span":l,h=t.height,c=t.variant,u=c===void 0?"text":c,f=t.width,o=j(t,["animation","classes","className","component","height","variant","width"]),d=Boolean(o.children);return v(p,{ref:r,className:b(n.root,n[u],m,d&&[n.withChildren,!f&&n.fitContent,!h&&n.heightAuto],i!==!1&&n[i]),...o,style:s({width:f,height:h},o.style)})});const _=y(k,{name:"MuiSkeleton"})(x);export{_ as S,j as _,s as a};
