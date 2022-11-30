import{F as De,V as _e,A as be,B as ve,a as Ne,D as Re,b as we,c as Oe,C as Ae,M as Ve,d as ke,P as xe,e as $e}from"./EntityFinder.405093a4.js";import{r as m,a as E,j as i,F as G}from"./jsx-runtime.31268528.js";import{p as l}from"./CardContainerLogic.a44526c0.js";import{S as Me}from"./SkeletonTable.8b5a914e.js";import{an as L,E as A,aK as Q,bN as B,a6 as Pe}from"./index.22d2125e.js";import{u as Be,e as Fe,f as Le}from"./useEntity.e61a2fe2.js";import{E as qe}from"./EntityFinderModal.5e16887b.js";import{I as W}from"./IconSvg.1a319e23.js";import{B as Ke}from"./LoadingScreen.f5aeb847.js";import{W as Ye}from"./WarningModal.0aedfe85.js";import{d as w}from"./ToastMessage.a10582c4.js";import{C as ze}from"./Checkbox.b2ac944e.js";import{i as He}from"./isEqual.81f70372.js";import{T as F}from"./Typography.7deb443e.js";import{S as Ue}from"./Skeleton.855acef4.js";import{B as _}from"./Button.3eb9449f.js";import{A as je}from"./Alert.d1d035f0.js";import{u as Z}from"./upperFirst.99d19ae0.js";import"./index.35ce73ec.js";import"./iframe.c7567c2d.js";import"./react-sizeme.631dea86.js";import"./index.d5f32449.js";import"./Arrow.ad0fc4a0.js";import"./RegularExpressions.3cd69849.js";import"./use-deep-compare-effect.esm.b33b0620.js";import"./EntityChildren.50133102.js";import"./Select-54ac8379.esm.73afc0b0.js";import"./emotion-react.browser.esm.d60ec8ed.js";import"./styled.0bfd4c69.js";import"./EntityIcon.69a6cf7b.js";import"./SynapseTableConstants.07ecdebd.js";import"./Tooltip.5176c19c.js";import"./createSvgIcon.f7c19e7b.js";import"./TransitionGroupContext.43d26755.js";import"./useTheme.910eaec3.js";import"./utils.033d23ab.js";import"./useInfiniteQuery.c6eed216.js";import"./SynapseConstants.290eab74.js";import"./dayjs.min.fa03b112.js";import"./react-intersection-observer.esm.12900737.js";import"./DateFormatter.5cb85eed.js";import"./utc.8b3d5b7c.js";import"./SchemaDrivenAnnotationEditor.68fa8360.js";import"./CustomSelectWidget.695d030e.js";import"./index.browser.62786e23.js";import"./isEmpty.7ec601bf.js";import"./_getTag.005e7532.js";import"./isArray.e45ce668.js";import"./_Set.87305464.js";import"./pick.a80537e5.js";import"./uniqueId.23cb78c9.js";import"./isSymbol.32cdb41a.js";import"./_baseClone.dc0316e6.js";import"./_baseSlice.50189bc5.js";import"./getEndpoint.bb7ded34.js";import"./queryKeys.e0d3085f.js";import"./CalendarWithIconFormGroup.4bcd27a4.js";import"./localizedFormat.964c81ce.js";import"./createWithBsPrefix.4103f011.js";import"./IconButton.916ffe0f.js";import"./ButtonBase.34890086.js";import"./Button.5756842c.js";import"./List.36978e17.js";import"./Modal.d9b6994f.js";import"./Fade.4ca82ca8.js";import"./index.f2a06ad4.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./MenuList.07fec125.js";import"./FullWidthAlert.0f9fa90d.js";import"./Close.a4816efa.js";import"./groupBy.461d9450.js";import"./Modal.befa9583.js";import"./contains.861fc71b.js";import"./inheritsLoose.58664c58.js";import"./divWithClassName.a05c647c.js";import"./usePrevious.638ecd05.js";import"./useWaitForDOMRef.f228876d.js";import"./EntityModal.e77399bf.js";import"./UserCard.0f3fab61.js";import"./IconCopy.47bd251d.js";import"./Overlay.4f4ca7b6.js";import"./usePopperMarginModifiers.7853b5dc.js";import"./cloneDeep.edfd3e7e.js";import"./Dropdown.8938a9f4.js";import"./hook.78e5dc31.js";import"./isRequiredForA11y.20ed4857.js";import"./Sort.d188dacc.js";import"./EntityLink.fd06899a.js";import"./useFavorites.63c09acf.js";import"./sqlFunctions.d0deafe9.js";import"./QueryFilter.90a1a7eb.js";import"./useGetInfoFromIds.5e8bec87.js";import"./uniq.f8b89bad.js";import"./toInteger.93a4e178.js";import"./_cacheHas.93c5766b.js";import"./without.6ba87f76.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.5627db8b.js";import"./queryUtils.3c459226.js";import"./NoSearchResults.9e332b6e.js";import"./NoData.aa30cbc5.js";import"./unCamelCase.07e38083.js";import"./ElementWithTooltip.c6b5d0bb.js";import"./RadioGroup.b4a59787.js";import"./RangeSlider.cbd19d00.js";import"./factory.f5aa0ef3.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./InfoOutlined.1c97ae19.js";import"./SelectionCriteriaPill.5c36fa2b.js";import"./react-select.esm.61342118.js";import"./core.esm.7a354c66.js";import"./union.8e76d114.js";import"./isString.53ba3e66.js";import"./relativeTime.d35cf3f2.js";import"./useGetDownloadListStatistics.3d14c4e1.js";import"./QueryCount.2f8a0495.js";import"./useGetAccessRequirement.b2c1473c.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.399fb39e.js";import"./UserSearchBox.0e6910a6.js";import"./UserOrTeamBadge.86c3eff2.js";import"./SynapseVideo.7d3137d8.js";import"./IconList.bef16bba.js";import"./UserCardList.3cb51c31.js";import"./times.97f8800e.js";import"./Link.df009298.js";import"./useMutation.9a2bc2f1.js";function Ge(n){const[o,a]=m.exports.useState(new Set(n));function u(...h){const y=new Set(o);for(const g of h)y.add(g);a(y)}function f(h){const y=new Set(o);y.delete(h),a(y)}function V(){a(new Set)}return{set:o,add:u,remove:f,clear:V}}function We(n){return L(n)?[A.FILE]:Q(n)?[A.DATASET]:(console.error("Cannot determine selectable types for entity type: "+n.concreteType),[])}function O(n){const o=n?B(Pe(n.concreteType)):"Collection";let a="Item",u="Current Version";n&&L(n)?(a=B(A.FILE),u="Draft"):n&&Q(n)&&(a=B(A.DATASET));const f=n&&L(n)?`Use the left pane to browse projects and folders. Select ${l(a)} from the right pane to add to this ${o}. ${Z(l(a))} in a ${o} can be added from multiple folders. You can also use Search to find and select ${l(a)}.`:`Use the left pane to browse projects. Select ${l(a)} from the right pane to add to this ${o}. ${Z(l(a))} in a ${o} can be added from multiple projects. You can also use Search to find and select ${l(a)}.`;return{ADD_ITEMS:`Add ${l(a)}`,ADD_ITEMS_TO:`Add ${l(a)} to ${o}`,REMOVE_ITEMS:`Remove ${l(a)}`,NO_ITEMS_IN_THIS_DATASET:`No ${l(a)} in this ${o}`,SAVE_TO_CONTINUE:`Save the ${o} to continue`,CREATE_VERSION_TO_FREEZE:`Create a Version of this ${o} to freeze it in its current state`,ENTITY_SAVED:`${o} Saved`,SAVE_CHANGES:`Save changes to ${u}`,ENTITY_FINDER_POPOVER:f,ENTITY_FINDER_PROMPT:`Find ${l(a)} to add to the ${o}.`,PRECONDITION_FAILED_MESSAGE:`Re-retrieve the ${o} to get the latest changes. Your current changes will be lost.`,PRECONDITION_FAILED_TITLE:`${o} updated since last fetched`,PRECONDITION_FAILED_ACTION:`Retrieve ${o}`}}const J=42,Ze=350;function b(n){var U;const{entityId:o,onSave:a,onClose:u,onUnsavedChangesChange:f}=n,[V,h]=m.exports.useState(!1),[y,g]=m.exports.useState(!1),[v,k]=m.exports.useState(!1),[r,X]=m.exports.useState(),[T,ee]=m.exports.useState(),N=e=>{k(!0),X(e)},{data:c,refetch:te}=Be(o,void 0,{enabled:!r}),{ADD_ITEMS:x,ADD_ITEMS_TO:re,REMOVE_ITEMS:ie,NO_ITEMS_IN_THIS_DATASET:ne,SAVE_TO_CONTINUE:oe,CREATE_VERSION_TO_FREEZE:ae,ENTITY_SAVED:se,SAVE_CHANGES:de,PRECONDITION_FAILED_TITLE:le,PRECONDITION_FAILED_MESSAGE:me,PRECONDITION_FAILED_ACTION:ce,ENTITY_FINDER_POPOVER:pe,ENTITY_FINDER_PROMPT:ue}=m.exports.useMemo(()=>O(c),[c]);m.exports.useEffect(()=>{!r&&c&&(c.items==null&&(c.items=[]),N(c),k(!1))},[c,r]);const{set:C,add:q,remove:fe,clear:$}=Ge(),K=!!(r&&r.items.length===C.size);m.exports.useEffect(()=>{f&&f(v)},[v,f]),m.exports.useEffect(()=>{if(T&&r&&!He(T,r)){const e=ye();w(oe,"info",{title:e,primaryButtonConfig:{text:de,onClick:()=>P.mutate(r)}})}ee(r)},[r]);const{data:M}=Fe(o),R=(U=M==null?void 0:M.path[1])==null?void 0:U.id,P=Le({onSuccess:()=>{k(!1),a?a():w(ae,"success",{title:se})},onError:e=>{e.status===412?w(me,"warning",{title:le,primaryButtonConfig:{text:ce,onClick:()=>{te()}}}):w(e.reason,"danger",{title:"An Error Occurred"})}}),he=r==null?void 0:r.items.map(e=>({...e,isSelected:C.has(e.entityId),setSelected:t=>t?q(e.entityId):fe(e.entityId)}));function Y(e,t){const s=e.filter(I=>!t.find(p=>p.entityId===I.entityId)),d=[...s],{updatedItems:S,newItems:D}=t.reduce((I,p)=>{const j=e.find(Ce=>Ce.entityId===p.entityId);return j?p.versionNumber!==j.versionNumber?I.updatedItems.push(p):s.push(p):I.newItems.push(p),I},{updatedItems:[],newItems:[]});return{unchangedItems:s,updatedItems:S,newItems:D,deletedItems:d}}function ye(){const{updatedItems:e,newItems:t,deletedItems:s}=Y(T==null?void 0:T.items,r==null?void 0:r.items);let d="";return s.length>0?d+=`${s.length} Item${s.length===1?"":"s"} removed`:(d+=`${t.length} Item${t.length===1?"":"s"} added`,e.length>0&&(d+=` and ${e.length} Item${e.length===1?"":"s"} updated`)),d}function Ie(e){N(t=>{if(t){const s=e.map(p=>({entityId:p.targetId,versionNumber:p.targetVersionNumber})),{unchangedItems:d,updatedItems:S,newItems:D}=Y(t.items,s),I=[...d,...S,...D];return{...t,items:I}}else return console.warn("Cannot add items to the Collection because it is undefined. The Collection may not have been fetched yet."),t}),$()}function Ee(){N(e=>({...e,items:e.items.filter(t=>!C.has(t.entityId))})),$()}function Se(e,t){N(s=>({...s,items:s.items.map(d=>d.entityId===e?{entityId:e,versionNumber:t}:d)}))}const z=[{key:"errorState",width:30,cellRenderer:Ne},{key:"isSelected",width:40,dataKey:"isSelected",headerRenderer:r?i(e=>{const{datasetToUpdate:t,clearSelectedIds:s,addSelectedId:d}=e,S=K;return t?i("div",{"data-testid":"Select All",style:{cursor:"pointer"},onClick:()=>{S?s():d(...t.items.map(D=>D.entityId))},children:i(ze,{label:"Select All",hideLabel:!0,className:"SRC-pointer-events-none",checked:S,disabled:t.items.length===0,onChange:()=>{}})}):i(G,{})},{datasetToUpdate:r,selectedIds:C,clearSelectedIds:$,addSelectedId:q,allItemsAreSelected:K}):i(G,{}),cellRenderer:Re},{key:"name",width:350,dataKey:"entityId",title:"Name",resizable:!0,cellRenderer:we},{key:"status",width:80,dataKey:"entityId",resizable:!0,cellRenderer:Oe},{key:"id",width:140,title:"ID",dataKey:"entityId",resizable:!0},{key:"version",width:150,title:"Version",dataKey:"entityId",cellRenderer:e=>i($e,{...e,toggleSelection:t=>{Se(t.entityId,t.versionNumber)}})},{key:"createdOn",width:200,title:"Created On",dataKey:"entityId",resizable:!0,cellRenderer:Ae},{key:"modifiedOn",width:200,title:"Modified On",dataKey:"entityId",resizable:!0,cellRenderer:Ve},{key:"modifiedBy",width:250,title:"Modified By",dataKey:"entityId",resizable:!0,cellRenderer:ke},{key:"projectId",width:300,title:"Project",dataKey:"entityId",resizable:!0,cellRenderer:xe}],H=z.reduce((e,t)=>e+t.width,0);function ge(){return E("div",{className:"NoItemsPlaceholder",children:[i(F,{variant:"headline3",children:ne}),E(_,{className:"AddItemsButton",variant:"sds-primary",onClick:()=>h(!0),children:[i(W,{icon:"addCircleTwoTone"}),i("span",{children:x})]})]})}const Te=m.exports.useMemo(()=>{if(c)return We(c)},[c]);return E("div",{className:"DatasetEditor bootstrap-4-backport",children:[i(qe,{configuration:{projectId:R,selectMultiple:!0,initialScope:De.CURRENT_PROJECT,initialContainer:R!=null?R:null,selectableTypes:Te,versionSelection:_e.REQUIRED},titlePopoverProps:{markdownText:pe,helpUrl:"https://help.synapse.org/docs/Datasets.2611281979.html"},promptCopy:ue,show:V,onClose:()=>{h(!1)},title:re,confirmButtonCopy:x,onConfirm:e=>{Ie(e),h(!1)},onCancel:()=>h(!1)}),i(Ye,{title:"Unsaved Changes",modalBody:"Any unsaved changes will be lost. Are you sure you want to close the editor?",confirmButtonText:"Close Editor",onConfirm:()=>{u&&(g(!1),f&&f(!1),u())},show:y,onConfirmCallbackArgs:[],onCancel:()=>g(!1)}),E("div",{className:"DatasetEditorTopBottomPanel",children:[i(Ke,{show:P.isLoading}),i("div",{className:"ItemCount",children:r?E(F,{variant:"headline3",children:[r.items.length===0?"No":r.items.length.toLocaleString()," ","File",r.items.length!==1&&"s"]}):i(Ue,{variant:"rectangular",width:200})}),i(_,{variant:"sds-primary",disabled:r==null,onClick:()=>h(!0),children:x}),i(_,{disabled:C.size===0,variant:"outline",onClick:Ee,children:ie})]}),i("div",{className:"DatasetEditorTableContainer",children:r?r.items.length===0?i(ge,{}):i(be,{height:Ze,children:({height:e,width:t})=>i(ve,{classPrefix:"DatasetEditorTable",data:he,height:e,width:t>H?t:H,rowHeight:J,overscanRowCount:5,columns:z,rowClassName:"DatasetEditorRow",rowProps:({rowData:s})=>({"aria-selected":s.isSelected}),headerCellProps:{role:"columnheader"}})}):i(Me,{className:"DatasetItemsEditorSkeleton",numRows:8,numCols:6,rowHeight:`${J}px`})}),E("div",{className:"DatasetEditorTopBottomPanel",children:[v&&E(je,{dismissible:!1,show:!0,transition:!1,variant:"warning",children:[i(W,{icon:"warning",sx:{color:"warning.main",paddingRight:"0.2rem"}}),i(F,{display:"inline",component:"span",variant:"smallText2",children:"You have unsaved changes"})]}),i(_,{variant:"outline",onClick:()=>{v?g(!0):u&&u()},children:"Cancel"}),i(_,{disabled:!r,variant:"sds-primary",onClick:()=>P.mutate(r),children:"Save"})]})]})}try{O.displayName="getCopy",O.__docgenInfo={description:"",displayName:"getCopy",props:{items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"EntityRef[]"}},concreteType:{defaultValue:null,description:"Indicates which implementation of Entity this object represents.",name:"concreteType",required:!0,type:{name:"enum",value:[{value:'"org.sagebionetworks.repo.model.table.EntityView"'},{value:'"org.sagebionetworks.repo.model.table.SubmissionView"'},{value:'"org.sagebionetworks.repo.model.table.Dataset"'},{value:'"org.sagebionetworks.repo.model.table.DatasetCollection"'}]}},columnIds:{defaultValue:null,description:"",name:"columnIds",required:!0,type:{name:"string[]"}},isSearchEnabled:{defaultValue:null,description:"",name:"isSearchEnabled",required:!0,type:{name:"boolean"}},versionLabel:{defaultValue:null,description:"",name:"versionLabel",required:!1,type:{name:"string"}},versionComment:{defaultValue:null,description:"",name:"versionComment",required:!1,type:{name:"string"}},isLatestVersion:{defaultValue:null,description:"",name:"isLatestVersion",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"The name of this entity?",name:"name",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"The description of this entity.",name:"description",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"The unique immutable ID for this entity. A new ID will be generated for new Entities. Once issued, this ID is guaranteed to never change or be re-issued",name:"id",required:!1,type:{name:"string"}},etag:{defaultValue:null,description:"Synapse employs an Optimistic Concurrency Control (OCC) scheme to handle concurrent updates. Since the E-Tag changes every time an entity is updated it is used to detect when a client's current representation of an entity is out-of-date.",name:"etag",required:!1,type:{name:"string"}},createdOn:{defaultValue:null,description:"The date this entity was created.",name:"createdOn",required:!1,type:{name:"string"}},modifiedOn:{defaultValue:null,description:"The date this entity was last modified.",name:"modifiedOn",required:!1,type:{name:"string"}},createdBy:{defaultValue:null,description:"The ID of the user that created this entity.",name:"createdBy",required:!1,type:{name:"string"}},modifiedBy:{defaultValue:null,description:"The ID of the user that last modified this entity.",name:"modifiedBy",required:!1,type:{name:"string"}},parentId:{defaultValue:null,description:"The ID of the Entity that is the parent of this Entity.",name:"parentId",required:!1,type:{name:"string"}},versionNumber:{defaultValue:null,description:"",name:"versionNumber",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/table/datasets/DatasetItemsEditor.tsx#getCopy"]={docgenInfo:O.__docgenInfo,name:"getCopy",path:"src/lib/containers/table/datasets/DatasetItemsEditor.tsx#getCopy"})}catch{}try{b.displayName="DatasetItemsEditor",b.__docgenInfo={description:"",displayName:"DatasetItemsEditor",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},onUnsavedChangesChange:{defaultValue:null,description:"Callback invoked when the editor changes state to contain un/saved changes.",name:"onUnsavedChangesChange",required:!1,type:{name:"((hasUnsavedChanges: boolean) => void)"}},onSave:{defaultValue:null,description:"",name:"onSave",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/table/datasets/DatasetItemsEditor.tsx#DatasetItemsEditor"]={docgenInfo:b.__docgenInfo,name:"DatasetItemsEditor",path:"src/lib/containers/table/datasets/DatasetItemsEditor.tsx#DatasetItemsEditor"})}catch{}const bi={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DatasetItemsEditor } from './DatasetItemsEditor'

export default {
  title: 'Synapse/DatasetItemsEditor',
  component: DatasetItemsEditor,
} as ComponentMeta<typeof DatasetItemsEditor>

const Template: ComponentStory<typeof DatasetItemsEditor> = args => (
  <DatasetItemsEditor {...args} />
)

export const Demo = Template.bind({})
Demo.args = {
  entityId: 'syn26302617',
}
`,locationsMap:{demo:{startLoc:{col:60,line:10},endLoc:{col:1,line:12},startBody:{col:60,line:10},endBody:{col:1,line:12}}}}},title:"Synapse/DatasetItemsEditor",component:b},Je=n=>i(b,{...n}),Qe=Je.bind({});Qe.args={entityId:"syn26302617"};const vi=["Demo"];export{Qe as Demo,vi as __namedExportsOrder,bi as default};
