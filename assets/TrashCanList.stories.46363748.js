import{h as F}from"./moment.a565bb48.js";import{r as d,a as l,j as e,F as I}from"./jsx-runtime.ed0bc2e8.js";import{f as j}from"./DateFormatter.db43e9a9.js";import{h as g,dF as O,X as w,dG as z,dH as Q}from"./index.444e3572.js";import{u as G}from"./useEntity.a73b6a7f.js";import{u as k}from"./useMutation.60a502f5.js";import{u as _}from"./useInfiniteQuery.4114925f.js";import{T as y}from"./Typography.935cd23d.js";import{E as q}from"./EntityLink.cfbd5ae5.js";import{B as W,S as Y}from"./LoadingScreen.d5fc7030.js";import{W as H}from"./WarningModal.57553bf6.js";import{C as v}from"./Checkbox.fc5ecb82.js";import{T as V}from"./Table.e5537ea5.js";import{A as X}from"./Alert.e70a23c6.js";import{B as u}from"./Button.ead7d59a.js";import"./iframe.1c77586e.js";import"./index.68bd2905.js";import"./withStyles.5eea39d5.js";import"./utils.31a80d71.js";import"./isArray.69d02dee.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.1c3fe3f1.js";import"./queryKeys.e0d3085f.js";import"./pick.fbb2f290.js";import"./uniqueId.e6e71b68.js";import"./isSymbol.3ae1367c.js";import"./_baseClone.32511df5.js";import"./_getTag.09032bbf.js";import"./_Set.79ce457d.js";import"./_baseSlice.50189bc5.js";import"./makeStyles.83c340c0.js";import"./EntityIcon.f3162245.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.af973a0c.js";import"./Tooltip.9455954b.js";import"./createSvgIcon.b88943f5.js";import"./InfoOutlined.10c65527.js";import"./Skeleton.d97a08a6.js";import"./Modal.2df339d5.js";import"./useWaitForDOMRef.2b50b75b.js";import"./inheritsLoose.02c5cdc5.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";function $(r){const{accessToken:t}=g();return _(["trashcan","list",t],i=>O(t,i.pageParam),{...r,getNextPageParam:(i,n)=>{const s=n.flatMap(o=>o.results).length;if(i.totalNumberOfResults>s)return s}})}function J(r){const t=w(),{accessToken:i}=g();return k(n=>{typeof n=="string"&&(n=new Set([n]));const s=Array.from(n).map(o=>z(o,i));return Promise.allSettled(s)},{...r,onSuccess:async(n,s,o)=>{await t.invalidateQueries(["trashcan"]),r!=null&&r.onSuccess&&await r.onSuccess(n,s,o)}})}function K(r){const t=w(),{accessToken:i}=g();return k(n=>{typeof n=="string"&&(n=new Set([n]));const s=Array.from(n).map(o=>Q(o,i));return Promise.allSettled(s)},{...r,onSuccess:async(n,s,o)=>{await t.invalidateQueries(["trashcan"]),r!=null&&r.onSuccess&&await r.onSuccess(n,s,o)}})}function U(r){const{item:t,isSelected:i,setIsSelected:n,onRestore:s}=r,{data:o}=G(t.originalParentId);return l("tr",{children:[e("td",{children:e(v,{label:`Select ${t.entityId}`,hideLabel:!0,checked:i,onChange:n})}),e("td",{children:t.entityId}),e("td",{children:t.entityName}),e("td",{children:l(I,{children:[o&&e(q,{entity:o})," (",t.originalParentId,")"]})}),e("td",{children:j(F(t.deletedOn))}),e("td",{children:e(u,{size:"sm",variant:"outline",onClick:s,children:"Restore"})})]})}function Z(r){return r.filter(t=>t.status==="rejected").map(t=>t.reason)}function P(){var x;const r=d.exports.useRef(!0),[t,i]=d.exports.useState(new Set),[n,s]=d.exports.useState(!1),[o,S]=d.exports.useState([]);d.exports.useEffect(()=>(r.current=!0,()=>{r.current=!1}));function C(a,m){r.current&&(a?S(Z(a)):m&&S([m]),i(new Set))}const{mutate:T,isLoading:R}=J({onSettled:C}),{mutate:E,isLoading:b}=K({onSettled:C}),M=R||b,{data:h,isLoading:p,hasNextPage:B,fetchNextPage:D,isFetchingNextPage:N}=$({useErrorBoundary:!0}),c=(x=h==null?void 0:h.pages.flatMap(a=>a.results))!=null?x:[],L=t.size===c.length,A=()=>{i(L?new Set:new Set(c.map(a=>a.entityId)))};return l("div",{className:"bootstrap-4-backport",children:[e(W,{show:M,headlineText:b?"Deleting...":"Restoring..."}),e(y,{variant:"body1",children:'The trash can contains items that were recently deleted. You can recover deleted items in the trash can by clicking "Restore". Items will remain in the trash can for 30 days before being automatically purged.'}),e(H,{title:"Delete selected items from your Trash?",modalBody:e(y,{variant:"body1",children:"You can't undo this action."}),confirmButtonText:"Delete",confirmButtonVariant:"danger",onConfirm:()=>{E(t),s(!1)},onCancel:()=>{s(!1)},show:n}),p&&e(Y,{}),!p&&c.length===0&&e(y,{variant:"body1",children:"Trash Can is currently empty."}),!p&&c.length>0&&l(I,{children:[l(V,{striped:!0,borderless:!0,bordered:!1,children:[e("thead",{children:l("tr",{children:[e("th",{children:e(v,{label:"Select All",hideLabel:!0,checked:L,onChange:A})}),e("th",{children:"ID"}),e("th",{children:"Name"}),e("th",{children:"Location"}),e("th",{children:"Deleted On"}),e("th",{})]})}),e("tbody",{children:c.map(a=>e(U,{item:a,isSelected:t.has(a.entityId),setIsSelected:m=>{i(f=>(m?f.add(a.entityId):f.delete(a.entityId),new Set(f)))},onRestore:()=>{T(a.entityId),t.delete(a.entityId)}},a.entityId))})]}),o.length>0&&l(X,{dismissible:!1,show:!0,variant:"danger",transition:!1,children:["The following errors were encountered:",e("ul",{children:o.map(a=>e("li",{children:a.message},a.message))})]}),l("div",{style:{display:"flex",justifyContent:"flex-end",gap:"10px"},children:[B&&e(u,{variant:"sds-primary",disabled:N,onClick:()=>{D()},children:"Load More"}),e("div",{style:{margin:"auto"}}),e(u,{variant:"danger",disabled:t.size===0,onClick:()=>{s(!0)},children:"Delete Selected"}),e(u,{variant:"outline",disabled:t.size===0,onClick:()=>{T(t)},children:"Restore Selected"})]})]})]})}const He={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"trash-can":{startLoc:{col:54,line:10},endLoc:{col:1,line:12},startBody:{col:54,line:10},endBody:{col:1,line:12}}}}},title:"Synapse/TrashCanList",component:P},ee=r=>e(P,{...r}),Ve=ee.bind({}),Xe=["TrashCan"];export{Ve as TrashCan,Xe as __namedExportsOrder,He as default};
