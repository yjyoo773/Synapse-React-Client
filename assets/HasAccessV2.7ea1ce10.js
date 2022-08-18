import{w as _,aI as E,cp as C,c5 as q}from"./index.9a9a7666.js";import{g as k,B as O}from"./getEndpoint.0de7fccf.js";import{d as H}from"./useGetAccessRequirement.3a48a881.js";import{u as x}from"./useEntityBundle.c92f70b1.js";import{i as D}from"./FileEntity.4f8cb425.js";import"./assert.058f6c29.js";import{R as I,a as N,A as F,c as B}from"./AccessRequirementList.965530b6.js";import{I as v}from"./IconSvg.c485205d.js";import{j as t,F as p,a as w}from"./jsx-runtime.2e925369.js";const u=window.React,L={AccessBlockedToAnonymous:{icon:"accessClosed",color:e=>e.colors.warning,tooltipText:"You must sign in to access this file."},AccessBlockedByRestriction:{icon:"accessClosed",color:e=>e.colors.warning,tooltipText:"You must request access to this restricted file."},AccessBlockedByACL:{icon:"accessClosed",color:e=>e.colors.warning,tooltipText:"You do not have download access for this item."},Accessible:{icon:"accessOpen",color:e=>e.colors.success,tooltipText:""},NoFileHandle:{icon:"accessOpen",color:e=>e.colors.success,tooltipText:""}};function R(e){const{downloadType:o}=e;if(o){const c=L[o];return t(C.Consumer,{children:i=>t(v,{options:{icon:c.icon,color:c.color(i),label:c.tooltipText}})})}return t(p,{})}function A(e,o){const[c,i]=u.useState(),{accessToken:f}=_(),{data:n,error:y}=x(e,{includeEntity:!0,includePermissions:!0},parseInt(o!=null?o:"")),r=u.useMemo(()=>({restrictableObjectType:I.ENTITY,objectId:e}),[e]),{data:m}=H(r),l=n==null?void 0:n.entity,s=n==null?void 0:n.permissions;return u.useEffect(()=>{m&&m.hasUnmetAccessRequirement?i("AccessBlockedByRestriction"):l&&(s==null?void 0:s.canDownload)?D(l)&&l.dataFileHandleId?i("Accessible"):i("NoFileHandle"):s&&!s.canDownload&&i(f?"AccessBlockedByACL":"AccessBlockedToAnonymous")},[f,l,y,s,m]),c}function h(e){const[o,c]=u.useState(!1),[i,f]=u.useState([]),{entityId:n,entityVersionNumber:y}=e,r=A(n,y),{accessToken:m}=_(),l=u.useMemo(()=>({restrictableObjectType:I.ENTITY,objectId:n}),[n]),{data:s}=H(l),b=()=>{const{entityId:a}=e;q(m,a).then(d=>{B(d)?window.open(`${k(O.PORTAL_ENDPOINT)}#!AccessRequirements:ID=${a}&TYPE=ENTITY`,"_blank"):(f(d),c(!0))})},g=()=>{const{entityId:a}=e;if(!s)return t(p,{});const d=s==null?void 0:s.hasUnmetAccessRequirement,S=s==null?void 0:s.restrictionLevel;let T="";if(d)T="Request Access";else{if(N.OPEN===S)return t(p,{});T="View Terms"}return w(p,{children:[t("a",{style:{fontSize:"14px",cursor:"pointer",marginLeft:"5px",verticalAlign:"middle"},className:e.className,onClick:b,children:T}),o&&t(F,{entityId:a,accessRequirementFromProps:i,renderAsModal:!0,onHide:()=>{c(!1)}})]})};return r===void 0?t(p,{}):w("span",{style:{whiteSpace:"nowrap"},children:[r==="AccessBlockedToAnonymous"?t("button",{type:"button",className:E,onClick:a=>{if(a.isTrusted){const d=new MouseEvent("click",{bubbles:!0});a.currentTarget.dispatchEvent(d)}},children:t(R,{downloadType:r})}):t(R,{downloadType:r}),t(g,{})]})}try{A.displayName="useGetFileHandleDownloadType",A.__docgenInfo={description:`Determines whether an Entity is accessible for download, or if it is blocked by the ACL or unmet Access Requirements.

To make download available, and determine if the file is downloadable via the web, see {@link DirectDownload.tsx }`,displayName:"useGetFileHandleDownloadType",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/HasAccessV2.tsx#useGetFileHandleDownloadType"]={docgenInfo:A.__docgenInfo,name:"useGetFileHandleDownloadType",path:"src/lib/containers/HasAccessV2.tsx#useGetFileHandleDownloadType"})}catch{}try{h.displayName="HasAccessV2",h.__docgenInfo={description:`HasAccess shows if the user has access to the file or not.

The component's behavior changes whether it's passed in a FileHandle or not.
If passed a file handle then it will give more detailed information about the download.`,displayName:"HasAccessV2",props:{onHide:{defaultValue:null,description:"",name:"onHide",required:!1,type:{name:"(() => void)"}},entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},entityVersionNumber:{defaultValue:null,description:"",name:"entityVersionNumber",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/HasAccessV2.tsx#HasAccessV2"]={docgenInfo:h.__docgenInfo,name:"HasAccessV2",path:"src/lib/containers/HasAccessV2.tsx#HasAccessV2"})}catch{}export{h as H};
//# sourceMappingURL=HasAccessV2.7ea1ce10.js.map