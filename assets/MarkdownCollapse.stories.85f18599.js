import{R as x,r as i,j as r,a as E}from"./jsx-runtime.31268528.js";import{I as V,s as L}from"./FacetNav.5627db8b.js";import{I as b}from"./IconCopy.47bd251d.js";import{a as U}from"./CardContainerLogic.a44526c0.js";import{d as B}from"./ToastMessage.a10582c4.js";import{_ as W,a as f,c as q,S as k}from"./Button.3eb9449f.js";import{_ as F}from"./createWithBsPrefix.4103f011.js";import{E as G,c as Y,e as j,f as $,T as H,g as K,h as Q,s as M}from"./divWithClassName.a05c647c.js";import"./iframe.c7567c2d.js";import"./index.22d2125e.js";import"./index.d5f32449.js";import"./SynapseConstants.290eab74.js";import"./styled.0bfd4c69.js";import"./utils.033d23ab.js";import"./TransitionGroupContext.43d26755.js";import"./useTheme.910eaec3.js";import"./Alert.d1d035f0.js";import"./hook.78e5dc31.js";import"./Fade.4ca82ca8.js";import"./isArray.e45ce668.js";import"./index.35ce73ec.js";import"./getEndpoint.bb7ded34.js";import"./Link.df009298.js";import"./Typography.7deb443e.js";import"./Button.5756842c.js";import"./ButtonBase.34890086.js";import"./emotion-react.browser.esm.d60ec8ed.js";import"./queryUtils.3c459226.js";import"./useInfiniteQuery.c6eed216.js";import"./queryKeys.e0d3085f.js";import"./QueryFilter.90a1a7eb.js";import"./cloneDeep.edfd3e7e.js";import"./_baseClone.dc0316e6.js";import"./_getTag.005e7532.js";import"./_Set.87305464.js";import"./use-deep-compare-effect.esm.b33b0620.js";import"./NoSearchResults.9e332b6e.js";import"./NoData.aa30cbc5.js";import"./unCamelCase.07e38083.js";import"./ColumnType.744125d2.js";import"./useEntity.e61a2fe2.js";import"./useMutation.9a2bc2f1.js";import"./pick.a80537e5.js";import"./uniqueId.23cb78c9.js";import"./isSymbol.32cdb41a.js";import"./_baseSlice.50189bc5.js";import"./sqlFunctions.d0deafe9.js";import"./RegularExpressions.3cd69849.js";import"./isEqual.81f70372.js";import"./_cacheHas.93c5766b.js";import"./_setToArray.a82100c8.js";import"./ElementWithTooltip.c6b5d0bb.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.1a319e23.js";import"./Tooltip.5176c19c.js";import"./createSvgIcon.f7c19e7b.js";import"./InfoOutlined.1c97ae19.js";import"./Dropdown.8938a9f4.js";import"./usePrevious.638ecd05.js";import"./contains.861fc71b.js";import"./usePopperMarginModifiers.7853b5dc.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./useGetInfoFromIds.5e8bec87.js";import"./uniq.f8b89bad.js";import"./toInteger.93a4e178.js";import"./without.6ba87f76.js";import"./Checkbox.b2ac944e.js";import"./RadioGroup.b4a59787.js";import"./dayjs.min.fa03b112.js";import"./RangeSlider.cbd19d00.js";import"./factory.f5aa0ef3.js";import"./react-sizeme.631dea86.js";import"./Skeleton.855acef4.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.f5aeb847.js";import"./Modal.befa9583.js";import"./inheritsLoose.58664c58.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.f228876d.js";import"./SelectionCriteriaPill.5c36fa2b.js";import"./Close.a4816efa.js";import"./react-select.esm.61342118.js";import"./Select-54ac8379.esm.73afc0b0.js";import"./CustomSelectWidget.695d030e.js";import"./index.browser.62786e23.js";import"./UserCard.0f3fab61.js";import"./SkeletonTable.8b5a914e.js";import"./times.97f8800e.js";import"./Overlay.4f4ca7b6.js";import"./WarningModal.0aedfe85.js";import"./react-intersection-observer.esm.12900737.js";import"./DateFormatter.5cb85eed.js";import"./utc.8b3d5b7c.js";import"./EntityIcon.69a6cf7b.js";import"./core.esm.7a354c66.js";import"./isEmpty.7ec601bf.js";import"./union.8e76d114.js";import"./isString.53ba3e66.js";import"./relativeTime.d35cf3f2.js";import"./useGetDownloadListStatistics.3d14c4e1.js";import"./QueryCount.2f8a0495.js";import"./useGetAccessRequirement.b2c1473c.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.399fb39e.js";import"./UserSearchBox.0e6910a6.js";import"./UserOrTeamBadge.86c3eff2.js";import"./EntityLink.fd06899a.js";import"./SynapseVideo.7d3137d8.js";import"./IconList.bef16bba.js";import"./UserCardList.3cb51c31.js";import"./FullWidthAlert.0f9fa90d.js";var X=["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"],d,z={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function h(o,n){var s="offset"+o[0].toUpperCase()+o.slice(1),a=n[s],l=z[o];return a+parseInt(M(n,l[0]),10)+parseInt(M(n,l[1]),10)}var J=(d={},d[G]="collapse",d[Y]="collapsing",d[j]="collapsing",d[$]="collapse show",d),Z={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:h},y=x.forwardRef(function(o,n){var s=o.onEnter,a=o.onEntering,l=o.onEntered,c=o.onExit,w=o.onExiting,I=o.className,u=o.children,C=o.dimension,p=C===void 0?"height":C,m=o.getDimensionValue,v=m===void 0?h:m,g=W(o,X),e=typeof p=="function"?p():p,R=i.exports.useMemo(function(){return f(function(t){t.style[e]="0"},s)},[e,s]),N=i.exports.useMemo(function(){return f(function(t){var T="scroll"+e[0].toUpperCase()+e.slice(1);t.style[e]=t[T]+"px"},a)},[e,a]),O=i.exports.useMemo(function(){return f(function(t){t.style[e]=null},l)},[e,l]),D=i.exports.useMemo(function(){return f(function(t){t.style[e]=v(e,t)+"px",Q(t)},c)},[c,v,e]),P=i.exports.useMemo(function(){return f(function(t){t.style[e]=null},w)},[e,w]);return r(H,{ref:n,addEndListener:K,...g,"aria-expanded":g.role?g.in:null,onEnter:R,onEntering:N,onEntered:O,onExit:D,onExiting:P,children:function(t,T){return x.cloneElement(u,F({},T,{className:q(I,u.props.className,J[t],e==="width"&&"width")}))}})});y.defaultProps=Z;const oo=y,S=o=>{const[n,s]=i.exports.useState(!1),[a,l]=i.exports.useState(),[c,w]=i.exports.useState(),I=p=>{const m=p==null?void 0:p.textContent;m&&(w(m.trim()),l(m.trim().split(/\s+/).length))},{textDescription:u="full text",showCopyPlainText:C}=o;return E("div",{className:"MarkdownCollapse bootstrap-4-backport",children:[E("p",{children:[n?r(V,{}):r(L,{}),E(k,{className:"highlight-link",onClick:()=>s(!n),"aria-controls":"collapse-text","aria-expanded":n,children:[n?"Hide":"View"," ",u," ",a?`(${a} words)`:""]})]}),C&&E("p",{children:[r(b,{className:"primary"}),E(k,{className:"highlight-link",onClick:()=>{c&&navigator.clipboard.writeText(c).then(()=>{B("Successfully copied to the clipboard")})},children:["Copy ",u," to clipboard"]})]}),r(oo,{in:n,children:r("div",{id:"collapse-text",children:r(U,{onMarkdownProcessingDone:I,...o})})})]})},_=S;try{S.displayName="MarkdownCollapse",S.__docgenInfo={description:`Wraps a MarkdownSynapse in a Collapse area, with customizable text description.
Will pass down all properties to the MarkdownSynapse component, so this can be used in
the portal detail pages.`,displayName:"MarkdownCollapse",props:{textDescription:{defaultValue:null,description:"",name:"textDescription",required:!1,type:{name:"string"}},showCopyPlainText:{defaultValue:null,description:"",name:"showCopyPlainText",required:!1,type:{name:"boolean"}},ownerId:{defaultValue:null,description:"",name:"ownerId",required:!1,type:{name:"string"}},wikiId:{defaultValue:null,description:"",name:"wikiId",required:!1,type:{name:"string"}},markdown:{defaultValue:null,description:"",name:"markdown",required:!1,type:{name:"string"}},renderInline:{defaultValue:null,description:"",name:"renderInline",required:!1,type:{name:"boolean"}},objectType:{defaultValue:null,description:"",name:"objectType",required:!1,type:{name:"enum",value:[{value:'"ENTITY"'},{value:'"ENTITY_CONTAINER"'},{value:'"PRINCIPAL"'},{value:'"ACTIVITY"'},{value:'"EVALUATION"'},{value:'"SUBMISSION"'},{value:'"EVALUATION_SUBMISSIONS"'},{value:'"FILE"'},{value:'"MESSAGE"'},{value:'"WIKI"'},{value:'"FAVORITE"'},{value:'"ACCESS_REQUIREMENT"'},{value:'"ACCESS_APPROVAL"'},{value:'"TEAM"'},{value:'"TABLE"'},{value:'"ACCESS_CONTROL_LIST"'},{value:'"PROJECT_SETTING"'},{value:'"VERIFICATION_SUBMISSION"'},{value:'"CERTIFIED_USER_PASSING_RECORD"'},{value:'"FORUM"'},{value:'"THREAD"'},{value:'"REPLY"'},{value:'"FORM_GROUP"'},{value:'"FORM_DATA"'},{value:'"ENTITY_VIEW"'},{value:'"USER_PROFILE"'},{value:'"DATA_ACCESS_REQUEST"'},{value:'"DATA_ACCESS_SUBMISSION"'},{value:'"DATA_ACCESS_SUBMISSION_STATUS"'},{value:'"MEMBERSHIP_INVITATION"'}]}},loadingSkeletonRowCount:{defaultValue:null,description:"",name:"loadingSkeletonRowCount",required:!1,type:{name:"number"}},onMarkdownProcessingDone:{defaultValue:null,description:"",name:"onMarkdownProcessingDone",required:!1,type:{name:"((ref: HTMLInputElement | null) => void)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/MarkdownCollapse.tsx#MarkdownCollapse"]={docgenInfo:S.__docgenInfo,name:"MarkdownCollapse",path:"src/lib/containers/MarkdownCollapse.tsx#MarkdownCollapse"})}catch{}const mt={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import MarkdownCollapse from './MarkdownCollapse'

export default {
  title: 'Markdown/MarkdownCollapse',
  component: MarkdownCollapse,
} as ComponentMeta<typeof MarkdownCollapse>

const Template: ComponentStory<typeof MarkdownCollapse> = args => (
  <MarkdownCollapse {...args} />
)

export const Markdown = Template.bind({})
Markdown.args = {
  markdown: '*markdown* given to the **component**',
  textDescription: 'full statement',
}

export const WikiPage = Template.bind({})
WikiPage.args = {
  ownerId: 'syn12666371',
  wikiId: '585317',
  textDescription: 'text',
  showCopyPlainText: true,
}
`,locationsMap:{markdown:{startLoc:{col:58,line:10},endLoc:{col:1,line:12},startBody:{col:58,line:10},endBody:{col:1,line:12}},"wiki-page":{startLoc:{col:58,line:10},endLoc:{col:1,line:12},startBody:{col:58,line:10},endBody:{col:1,line:12}}}}},title:"Markdown/MarkdownCollapse",component:_},A=o=>r(_,{...o}),eo=A.bind({});eo.args={markdown:"*markdown* given to the **component**",textDescription:"full statement"};const to=A.bind({});to.args={ownerId:"syn12666371",wikiId:"585317",textDescription:"text",showCopyPlainText:!0};const dt=["Markdown","WikiPage"];export{eo as Markdown,to as WikiPage,dt as __namedExportsOrder,mt as default};
