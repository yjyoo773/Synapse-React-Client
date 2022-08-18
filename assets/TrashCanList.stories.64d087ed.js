import{h as F}from"./moment.53181859.js";import{f as j}from"./DateFormatter.7758aab2.js";import{bq as I,dD as O,dE as z,T as Q,dF as q,w as g,bi as x,p as _}from"./index.9a9a7666.js";import{T as f}from"./Typography.bfdf676e.js";import{E as G}from"./EntityLink.c9c0a6fc.js";import{B as W,S as Y}from"./LoadingScreen.56f18e4f.js";import{W as V}from"./WarningModal.db1d2b8d.js";import{C as k}from"./Checkbox.85bb9cd4.js";import{a as l,j as e,F as v}from"./jsx-runtime.2e925369.js";import{T as $}from"./Table.9806fafe.js";import{A as H}from"./Alert.eafe86e9.js";import{B as m}from"./Button.c582ea4c.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./withStyles.8be28b48.js";import"./toConsumableArray.b3669986.js";import"./toString.8ef640ae.js";import"./index.f252d424.js";import"./index.06f4a415.js";import"./assert.058f6c29.js";import"./iframe.1ea5c850.js";import"./index.8cde812d.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.31249d58.js";import"./makeStyles.9dfaa099.js";import"./EntityTypeUtils.a19eb0d2.js";import"./FileEntity.4f8cb425.js";import"./TypeUtils.a2c41307.js";import"./EntityIcon.e38c7200.js";import"./IconSvg.c485205d.js";import"./Tooltip.6c95fe7b.js";import"./createSvgIcon.d78a924b.js";import"./useTheme.8804f8cd.js";import"./Transition.d42a873e.js";import"./InfoOutlined.22a371fd.js";import"./Skeleton.8dd0668e.js";import"./Modal.58357e58.js";import"./useWaitForDOMRef.c89dbc64.js";import"./useWillUnmount.4a16e5cd.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.fa0dadf5.js";function J(n){const{accessToken:t}=g();return Q(["trashcan","list",t],o=>q(t,o.pageParam),{...n,getNextPageParam:(o,r)=>{const s=r.flatMap(i=>i.results).length;if(o.totalNumberOfResults>s)return s}})}function K(n){const t=x(),{accessToken:o}=g();return I(r=>{typeof r=="string"&&(r=new Set([r]));const s=Array.from(r).map(i=>O(i,o));return Promise.allSettled(s)},{...n,onSuccess:async(r,s,i)=>{await t.invalidateQueries(["trashcan"]),n!=null&&n.onSuccess&&await n.onSuccess(r,s,i)}})}function U(n){const t=x(),{accessToken:o}=g();return I(r=>{typeof r=="string"&&(r=new Set([r]));const s=Array.from(r).map(i=>z(i,o));return Promise.allSettled(s)},{...n,onSuccess:async(r,s,i)=>{await t.invalidateQueries(["trashcan"]),n!=null&&n.onSuccess&&await n.onSuccess(r,s,i)}})}const X=window.React.useEffect,Z=window.React.useRef,y=window.React.useState;function ee(n){const{item:t,isSelected:o,setIsSelected:r,onRestore:s}=n,{data:i}=_(t.originalParentId);return l("tr",{children:[e("td",{children:e(k,{label:`Select ${t.entityId}`,hideLabel:!0,checked:o,onChange:r})}),e("td",{children:t.entityId}),e("td",{children:t.entityName}),e("td",{children:l(v,{children:[i&&e(G,{entity:i})," (",t.originalParentId,")"]})}),e("td",{children:j(F(t.deletedOn))}),e("td",{children:e(m,{size:"sm",variant:"outline",onClick:s,children:"Restore"})})]})}function te(n){return n.filter(t=>t.status==="rejected").map(t=>t.reason)}function R(){var L;const n=Z(!0),[t,o]=y(new Set),[r,s]=y(!1),[i,S]=y([]);X(()=>(n.current=!0,()=>{n.current=!1}));function C(a,d){n.current&&(a?S(te(a)):d&&S([d]),o(new Set))}const{mutate:T,isLoading:E}=K({onSettled:C}),{mutate:P,isLoading:b}=U({onSettled:C}),M=E||b,{data:u,isLoading:h,hasNextPage:B,fetchNextPage:D,isFetchingNextPage:N}=J({useErrorBoundary:!0}),c=(L=u==null?void 0:u.pages.flatMap(a=>a.results))!=null?L:[],w=t.size===c.length,A=()=>{o(w?new Set:new Set(c.map(a=>a.entityId)))};return l("div",{className:"bootstrap-4-backport",children:[e(W,{show:M,headlineText:b?"Deleting...":"Restoring..."}),e(f,{variant:"body1",children:'The trash can contains items that were recently deleted. You can recover deleted items in the trash can by clicking "Restore". Items will remain in the trash can for 30 days before being automatically purged.'}),e(V,{title:"Delete selected items from your Trash?",modalBody:e(f,{variant:"body1",children:"You can't undo this action."}),confirmButtonText:"Delete",confirmButtonVariant:"danger",onConfirm:()=>{P(t),s(!1)},onCancel:()=>{s(!1)},show:r}),h&&e(Y,{}),!h&&c.length===0&&e(f,{variant:"body1",children:"Trash Can is currently empty."}),!h&&c.length>0&&l(v,{children:[l($,{striped:!0,borderless:!0,bordered:!1,children:[e("thead",{children:l("tr",{children:[e("th",{children:e(k,{label:"Select All",hideLabel:!0,checked:w,onChange:A})}),e("th",{children:"ID"}),e("th",{children:"Name"}),e("th",{children:"Location"}),e("th",{children:"Deleted On"}),e("th",{})]})}),e("tbody",{children:c.map(a=>e(ee,{item:a,isSelected:t.has(a.entityId),setIsSelected:d=>{o(p=>(d?p.add(a.entityId):p.delete(a.entityId),new Set(p)))},onRestore:()=>{T(a.entityId),t.delete(a.entityId)}},a.entityId))})]}),i.length>0&&l(H,{dismissible:!1,show:!0,variant:"danger",transition:!1,children:["The following errors were encountered:",e("ul",{children:i.map(a=>e("li",{children:a.message},a.message))})]}),l("div",{style:{display:"flex",justifyContent:"flex-end",gap:"10px"},children:[B&&e(m,{variant:"sds-primary",disabled:N,onClick:()=>{D()},children:"Load More"}),e("div",{style:{margin:"auto"}}),e(m,{variant:"danger",disabled:t.size===0,onClick:()=>{s(!0)},children:"Delete Selected"}),e(m,{variant:"outline",disabled:t.size===0,onClick:()=>{T(t)},children:"Restore Selected"})]})]})]})}var We={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TrashCanList } from './TrashCanList'

export default {
  title: 'Synapse/TrashCanList',
  component: TrashCanList,
} as ComponentMeta<typeof TrashCanList>

const Template: ComponentStory<typeof TrashCanList> = args => (
  <TrashCanList {...args} />
)

export const TrashCan = Template.bind({})
`,locationsMap:{"trash-can":{startLoc:{col:54,line:10},endLoc:{col:1,line:12},startBody:{col:54,line:10},endBody:{col:1,line:12}}}}},title:"Synapse/TrashCanList",component:R};const ne=n=>e(R,{...n}),Ye=ne.bind({}),Ve=["TrashCan"];export{Ye as TrashCan,Ve as __namedExportsOrder,We as default};
//# sourceMappingURL=TrashCanList.stories.64d087ed.js.map