import{r as m,R as k,a as n,j as i,F as g}from"./jsx-runtime.31268528.js";import{V as E,a9 as N,bP as O,bQ as B}from"./index.22d2125e.js";import{d}from"./ToastMessage.a10582c4.js";import{M as L}from"./CardContainerLogic.a44526c0.js";import{T as u}from"./Typography.7deb443e.js";import{L as M}from"./Link.df009298.js";import{B as x}from"./Button.5756842c.js";import{H as Q}from"./IconSvg.1a319e23.js";import"./iframe.c7567c2d.js";import"./index.d5f32449.js";import"./SynapseConstants.290eab74.js";import"./Button.3eb9449f.js";import"./styled.0bfd4c69.js";import"./utils.033d23ab.js";import"./TransitionGroupContext.43d26755.js";import"./useTheme.910eaec3.js";import"./Alert.d1d035f0.js";import"./hook.78e5dc31.js";import"./createWithBsPrefix.4103f011.js";import"./divWithClassName.a05c647c.js";import"./index.35ce73ec.js";import"./Fade.4ca82ca8.js";import"./isArray.e45ce668.js";import"./getEndpoint.bb7ded34.js";import"./FullWidthAlert.0f9fa90d.js";import"./Tooltip.5176c19c.js";import"./createSvgIcon.f7c19e7b.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.23cb78c9.js";import"./isSymbol.32cdb41a.js";import"./sqlFunctions.d0deafe9.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.90a1a7eb.js";import"./useGetInfoFromIds.5e8bec87.js";import"./use-deep-compare-effect.esm.b33b0620.js";import"./uniq.f8b89bad.js";import"./_baseSlice.50189bc5.js";import"./toInteger.93a4e178.js";import"./_cacheHas.93c5766b.js";import"./without.6ba87f76.js";import"./_Set.87305464.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.5627db8b.js";import"./queryUtils.3c459226.js";import"./useInfiniteQuery.c6eed216.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.edfd3e7e.js";import"./_baseClone.dc0316e6.js";import"./_getTag.005e7532.js";import"./NoSearchResults.9e332b6e.js";import"./NoData.aa30cbc5.js";import"./unCamelCase.07e38083.js";import"./useEntity.e61a2fe2.js";import"./useMutation.9a2bc2f1.js";import"./pick.a80537e5.js";import"./isEqual.81f70372.js";import"./ElementWithTooltip.c6b5d0bb.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.8938a9f4.js";import"./usePrevious.638ecd05.js";import"./contains.861fc71b.js";import"./usePopperMarginModifiers.7853b5dc.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.b2ac944e.js";import"./RadioGroup.b4a59787.js";import"./dayjs.min.fa03b112.js";import"./RangeSlider.cbd19d00.js";import"./factory.f5aa0ef3.js";import"./react-sizeme.631dea86.js";import"./Skeleton.855acef4.js";import"./emotion-react.browser.esm.d60ec8ed.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.f5aeb847.js";import"./Modal.befa9583.js";import"./inheritsLoose.58664c58.js";import"./useWaitForDOMRef.f228876d.js";import"./InfoOutlined.1c97ae19.js";import"./SelectionCriteriaPill.5c36fa2b.js";import"./Close.a4816efa.js";import"./react-select.esm.61342118.js";import"./Select-54ac8379.esm.73afc0b0.js";import"./CustomSelectWidget.695d030e.js";import"./index.browser.62786e23.js";import"./UserCard.0f3fab61.js";import"./IconCopy.47bd251d.js";import"./SkeletonTable.8b5a914e.js";import"./times.97f8800e.js";import"./Overlay.4f4ca7b6.js";import"./WarningModal.0aedfe85.js";import"./react-intersection-observer.esm.12900737.js";import"./DateFormatter.5cb85eed.js";import"./utc.8b3d5b7c.js";import"./EntityIcon.69a6cf7b.js";import"./core.esm.7a354c66.js";import"./isEmpty.7ec601bf.js";import"./union.8e76d114.js";import"./isString.53ba3e66.js";import"./relativeTime.d35cf3f2.js";import"./useGetDownloadListStatistics.3d14c4e1.js";import"./QueryCount.2f8a0495.js";import"./useGetAccessRequirement.b2c1473c.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.399fb39e.js";import"./UserSearchBox.0e6910a6.js";import"./UserOrTeamBadge.86c3eff2.js";import"./EntityLink.fd06899a.js";import"./ButtonBase.34890086.js";import"./SynapseVideo.7d3137d8.js";import"./IconList.bef16bba.js";import"./UserCardList.3cb51c31.js";const H="org.sagebionetworks.repo.model.quiz.MultichoiceResponse",c=()=>{const{accessToken:p}=E(),z=N(),[o,T]=m.exports.useState(),[l,f]=m.exports.useState([]),[r,h]=m.exports.useState(),C=k.useRef(null),S="https://help.synapse.org/docs/Getting-Started.2055471150.html",y=async()=>{try{T(await O(p))}catch(t){z(t)}};m.exports.useEffect(()=>{y()},[p]);const w=(t,a)=>{const s=[...l.filter(e=>e.questionIndex!==t),{questionIndex:t,answerIndex:[a],concreteType:H}];f(s)},v=()=>{var t;(t=C.current)==null||t.reset(),f([]),h(void 0),y()},R=async()=>{try{if(o&&o.questions.length===l.length){const t={quizId:o.id,questionResponses:l},a=await B(p,t);h(a),window.scrollTo(0,0)}else d("Please answer all of the questions and try again.","warning")}catch(t){d(t.reason,"danger")}},b=t=>t?{content:i(g,{children:"More info"}),closePopoverOnClick:!0,onClick:()=>window.open(t,"_blank"),variant:"primary"}:void 0;return n("div",{className:"bootstrap-4-backport CertificationQuiz",children:[r&&i("div",{children:n(g,{children:[!r.passed&&i("div",{className:"failBanner",children:"Quiz Failed"}),n(u,{variant:"hintText",children:["Score: ",r.score," / ",o==null?void 0:o.questions.length]}),r.passed?d(`You passed the Synapse Certification Quiz on ${r.passedOn}`,"success"):n(u,{variant:"body1",children:["Please review the items shown in red below, and"," ",i(M,{href:"#",onClick:t=>{t.preventDefault(),v()},children:"try again"}),"."]})]})}),n("div",{className:"CertificationQuiz__container",children:[n(x,{onClick:()=>window.open(S,"_blank"),className:"help-button",color:"secondary",variant:"contained",children:[i(Q,{className:"HelpButton",style:{marginRight:"4px"}}),"Help"]}),o?i("div",{dangerouslySetInnerHTML:{__html:o.header}}):"",i("form",{ref:C,onSubmit:t=>t.preventDefault(),children:i("ol",{children:o==null?void 0:o.questions.map(t=>{var a,s;return n("li",{role:t.exclusive?"radiogroup":void 0,children:[i("div",{dangerouslySetInnerHTML:{__html:t.prompt},className:r&&((s=(a=r.corrections)==null?void 0:a.find(e=>e.question.questionIndex===t.questionIndex))!=null&&s.isCorrect?"":"incorrectQuestion")}),t.answers.map(e=>n("div",{children:[i("input",{id:`${t.questionIndex}-${e.answerIndex}`,name:`${t.questionIndex}`,type:t.exclusive?"radio":"checkbox",value:e.answerIndex,onClick:I=>w(t.questionIndex,Number(I.currentTarget.value)),disabled:!!r}),i("label",{style:{fontWeight:400},htmlFor:`${t.questionIndex}-${e.answerIndex}`,children:e.prompt})]},`${t.questionIndex}-${e.answerIndex}`)),i(L,{contentProps:{markdown:t.helpText},placement:"right",actionButton:b(t.docLink),showCloseButton:!0,children:n(u,{variant:"hintText",color:"primary",children:[i(Q,{className:"HelpButton",style:{marginRight:"4px"}}),"Need help answering this question?"]})})]},t.questionIndex)})})}),!r&&i(x,{className:"help-button",color:"primary",variant:"contained",size:"large",onClick:()=>R(),children:"Submit"})]})]})},_=c;try{c.displayName="CertificationQuiz",c.__docgenInfo={description:"",displayName:"CertificationQuiz",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/CertificationQuiz.tsx#CertificationQuiz"]={docgenInfo:c.__docgenInfo,name:"CertificationQuiz",path:"src/lib/containers/CertificationQuiz.tsx#CertificationQuiz"})}catch{}const ji={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import CertificationQuiz from './CertificationQuiz'

export default {
  title: 'Synapse/CertificationQuiz',
  component: CertificationQuiz,
  argTypes: {},
} as ComponentMeta<typeof CertificationQuiz>

const Template: ComponentStory<typeof CertificationQuiz> = args => (
  <CertificationQuiz {...args} />
)

export const CertificationQuizDemo = Template.bind({})
CertificationQuizDemo.args = {}
`,locationsMap:{"certification-quiz-demo":{startLoc:{col:59,line:12},endLoc:{col:1,line:14},startBody:{col:59,line:12},endBody:{col:1,line:14}}}}},title:"Synapse/CertificationQuiz",component:_,argTypes:{}},P=p=>i(_,{...p}),$=P.bind({});$.args={};const Gi=["CertificationQuizDemo"];export{$ as CertificationQuizDemo,Gi as __namedExportsOrder,ji as default};
