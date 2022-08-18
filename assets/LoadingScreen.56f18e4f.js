import{T as h}from"./Typography.bfdf676e.js";import{j as t,a as v,F as P}from"./jsx-runtime.2e925369.js";import{a as L}from"./objectWithoutPropertiesLoose.090b3c10.js";import{a as N}from"./toConsumableArray.b3669986.js";import{w as T,b as p,d as c,l as I,k as O}from"./withStyles.8be28b48.js";import{u as E}from"./useTheme.8804f8cd.js";import{M as R}from"./Modal.58357e58.js";import{B as z}from"./Button.c582ea4c.js";const d=window.React;var S=4,q=function(a){var o=function(i){return a.palette.type==="light"?I(i,.62):O(i,.5)},e=o(a.palette.primary.main),s=o(a.palette.secondary.main);return{root:{position:"relative",overflow:"hidden",height:4,"@media print":{colorAdjust:"exact"}},colorPrimary:{backgroundColor:e},colorSecondary:{backgroundColor:s},determinate:{},indeterminate:{},buffer:{backgroundColor:"transparent"},query:{transform:"rotate(180deg)"},dashed:{position:"absolute",marginTop:0,height:"100%",width:"100%",animation:"$buffer 3s infinite linear"},dashedColorPrimary:{backgroundImage:"radial-gradient(".concat(e," 0%, ").concat(e," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},dashedColorSecondary:{backgroundImage:"radial-gradient(".concat(s," 0%, ").concat(s," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},bar:{width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},barColorPrimary:{backgroundColor:a.palette.primary.main},barColorSecondary:{backgroundColor:a.palette.secondary.main},bar1Indeterminate:{width:"auto",animation:"$indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite"},bar1Determinate:{transition:"transform .".concat(S,"s linear")},bar1Buffer:{zIndex:1,transition:"transform .".concat(S,"s linear")},bar2Indeterminate:{width:"auto",animation:"$indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite"},bar2Buffer:{transition:"transform .".concat(S,"s linear")},"@keyframes indeterminate1":{"0%":{left:"-35%",right:"100%"},"60%":{left:"100%",right:"-90%"},"100%":{left:"100%",right:"-90%"}},"@keyframes indeterminate2":{"0%":{left:"-200%",right:"100%"},"60%":{left:"107%",right:"-8%"},"100%":{left:"107%",right:"-8%"}},"@keyframes buffer":{"0%":{opacity:1,backgroundPosition:"0 -23px"},"50%":{opacity:0,backgroundPosition:"0 -23px"},"100%":{opacity:1,backgroundPosition:"-200px -23px"}}}},A=d.forwardRef(function(a,o){var e=a.classes,s=a.className,l=a.color,i=l===void 0?"primary":l,b=a.value,x=a.valueBuffer,_=a.variant,r=_===void 0?"indeterminate":_,w=N(a,["classes","className","color","value","valueBuffer","variant"]),C=E(),u={},m={bar1:{},bar2:{}};if((r==="determinate"||r==="buffer")&&b!==void 0){u["aria-valuenow"]=Math.round(b),u["aria-valuemin"]=0,u["aria-valuemax"]=100;var g=b-100;C.direction==="rtl"&&(g=-g),m.bar1.transform="translateX(".concat(g,"%)")}if(r==="buffer"&&x!==void 0){var y=(x||0)-100;C.direction==="rtl"&&(y=-y),m.bar2.transform="translateX(".concat(y,"%)")}return d.createElement("div",L({className:p(e.root,e["color".concat(c(i))],s,{determinate:e.determinate,indeterminate:e.indeterminate,buffer:e.buffer,query:e.query}[r]),role:"progressbar"},u,{ref:o},w),r==="buffer"?d.createElement("div",{className:p(e.dashed,e["dashedColor".concat(c(i))])}):null,d.createElement("div",{className:p(e.bar,e["barColor".concat(c(i))],(r==="indeterminate"||r==="query")&&e.bar1Indeterminate,{determinate:e.bar1Determinate,buffer:e.bar1Buffer}[r]),style:m.bar1}),r==="determinate"?null:d.createElement("div",{className:p(e.bar,(r==="indeterminate"||r==="query")&&e.bar2Indeterminate,r==="buffer"?[e["color".concat(c(i))],e.bar2Buffer]:e["barColor".concat(c(i))]),style:m.bar2}))}),B=T(q,{name:"MuiLinearProgress"})(A);const $=window.React.useEffect,H=t("div",{className:"bar-loader",children:t(B,{classes:{colorPrimary:"bar-background-color",barColorPrimary:"bar-color"}})}),f=({size:n=20})=>t("div",{className:"spinner",style:{height:`${n}px`,width:`${n}px`,backgroundSize:`${n}px`}}),k=({show:n,currentProgress:a,onCancel:o,totalProgress:e,headlineText:s,hintText:l})=>{$(()=>(document.body.style.cursor=n?"wait":"default",()=>{document.body.style.cursor="default"}),[n]);const i=v(P,{children:[t("div",{className:"bar-loader",children:t(B,{"data-testid":"progress-bar",variant:"determinate",classes:{colorPrimary:"bar-background-color",barColorPrimary:"bar-color"},value:a/e*100})}),t(h,{variant:"headline3",children:s}),t(h,{variant:"hintText",children:l})]});return t(R,{className:"bootstrap-4-backport BlockingLoader",backdrop:!1,animation:!1,show:n,size:"sm",centered:!0,onHide:()=>{},children:v("div",{className:"SpinnerContainer","data-testid":"spinner-container",children:[e?i:v(P,{children:[t(f,{size:40}),t(h,{variant:"headline3","data-testid":"spinner-hint-text",children:l})]}),o&&t(z,{variant:"default",onClick:o,children:"Cancel"})]})})};try{f.displayName="SynapseSpinner",f.__docgenInfo={description:"",displayName:"SynapseSpinner",props:{size:{defaultValue:{value:"20"},description:"",name:"size",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/LoadingScreen.tsx#SynapseSpinner"]={docgenInfo:f.__docgenInfo,name:"SynapseSpinner",path:"src/lib/containers/LoadingScreen.tsx#SynapseSpinner"})}catch{}try{k.displayName="BlockingLoader",k.__docgenInfo={description:"",displayName:"BlockingLoader",props:{show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}},currentProgress:{defaultValue:null,description:"",name:"currentProgress",required:!1,type:{name:"number"}},totalProgress:{defaultValue:null,description:"",name:"totalProgress",required:!1,type:{name:"number"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"(() => void)"}},hintText:{defaultValue:null,description:"",name:"hintText",required:!1,type:{name:"string"}},headlineText:{defaultValue:null,description:"",name:"headlineText",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/LoadingScreen.tsx#BlockingLoader"]={docgenInfo:k.__docgenInfo,name:"BlockingLoader",path:"src/lib/containers/LoadingScreen.tsx#BlockingLoader"})}catch{}export{k as B,f as S,H as l};
//# sourceMappingURL=LoadingScreen.56f18e4f.js.map