import{j as e,r as v,a as c,F as z}from"./jsx-runtime.31268528.js";import{A}from"./Alert.d1d035f0.js";import{T as p}from"./Typography.7deb443e.js";import{C as S,T as b,a as N}from"./Tooltip.5176c19c.js";import{B as w}from"./Button.3eb9449f.js";import{c as f}from"./createSvgIcon.f7c19e7b.js";const B=f([e("path",{d:"M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm1 13h-2v-2h2v2zm0-4h-2V7h2v6z",opacity:".3"},"0"),e("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-5h2v2h-2zm0-8h2v6h-2z"},"1")],"ErrorTwoTone"),x=f([e("path",{d:"M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm4 10.59L14.59 16 12 13.41 9.41 16 8 14.59 10.59 12 8 9.41 9.41 8 12 10.59 14.59 8 16 9.41 13.41 12 16 14.59z",opacity:".3"},"0"),e("path",{d:"M14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"},"1")],"HighlightOffTwoTone"),_=f([e("path",{d:"M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1 13h-2v-6h2v6zm0-8h-2V7h2v2z",opacity:".3"},"0"),e("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"},"1")],"InfoTwoTone");function F(n){switch(n){case"warning":return e(B,{className:"text-warning",fontSize:"large"});case"info":return e(_,{className:"text-info",fontSize:"large"});case"danger":return e(x,{className:"text-danger",fontSize:"large"});case"success":return e(N,{className:"text-success",fontSize:"large"});default:return e(z,{})}}function h(n){var r;const{config:t,variant:o,className:l}=n;return t&&("onClick"in t||"href"in t)?e(b,{title:(r=t.tooltipText)!=null?r:"",enterNextDelay:300,children:e("span",{className:l,"data-tip-disable":!1,children:e(w,{variant:o,size:"sm",disabled:t.isDisabled,onClick:i=>{"onClick"in t?(i.preventDefault(),t.onClick(i)):"href"in t&&(i.preventDefault(),window.open(t.href,"_blank","noopener"))},children:t.text})})}):null}function m(n){const{title:t,description:o,primaryButtonConfig:l,secondaryButtonConfig:r,show:i,onClose:a,autoCloseAfterDelayInSeconds:d,variant:s="info",transition:g,isGlobal:C=!0}=n,y=F(s);v.exports.useEffect(()=>{let u;return a&&d&&(u=setTimeout(a,d*1e3)),()=>{u&&clearTimeout(u)}},[a,d]);const T=s?`alert-${s}`:"";return e(A,{variant:s,show:i,dismissible:!1,transition:g,className:`FullWidthAlert bootstrap-4-backport ${C?"global":""} ${T}`,children:c("div",{className:`gridContainer ${a?"hasCloseButton":""}`,children:[e("span",{className:"iconArea",children:y}),c("span",{className:"mainContent",children:[c("span",{className:"messageArea",children:[e(p,{variant:"smallText2",children:t}),t&&o&&e("div",{className:"SRC-marginBottomTen"}),e(p,{variant:"smallText1",children:o})]}),c("span",{className:"buttonArea",children:[r&&e(h,{className:"secondaryButton",config:r,variant:"tertiary"}),l&&e(h,{className:"primaryButton",config:l,variant:"sds-primary"})]})]}),a&&e("button",{className:"closeAlert",onClick:a,children:e(S,{fontSize:"large"})})]})})}try{m.displayName="FullWidthAlert",m.__docgenInfo={description:`Nav bar item, displayed when files have been added to the Download Cart.
This must be configured with the URL of a page dedicated to showing the Download Cart.`,displayName:"FullWidthAlert",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},primaryButtonConfig:{defaultValue:null,description:"",name:"primaryButtonConfig",required:!1,type:{name:"AlertButtonConfig"}},secondaryButtonConfig:{defaultValue:null,description:"",name:"secondaryButtonConfig",required:!1,type:{name:"AlertButtonConfig"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},autoCloseAfterDelayInSeconds:{defaultValue:null,description:"",name:"autoCloseAfterDelayInSeconds",required:!1,type:{name:"number"}},isGlobal:{defaultValue:null,description:"",name:"isGlobal",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/FullWidthAlert.tsx#FullWidthAlert"]={docgenInfo:m.__docgenInfo,name:"FullWidthAlert",path:"src/lib/containers/FullWidthAlert.tsx#FullWidthAlert"})}catch{}export{m as F};
