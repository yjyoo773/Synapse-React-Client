import{r as m,R as k,a as n,j as i,F as g}from"./jsx-runtime.ed0bc2e8.js";import{h as E,y as N,cj as O,ck as B}from"./index.444e3572.js";import{d}from"./ToastMessage.f3c1e08b.js";import{M as L}from"./CardContainerLogic.70bdaa71.js";import{T as u}from"./Typography.935cd23d.js";import{B as x}from"./Button.ead7d59a.js";import{H as _}from"./IconSvg.af973a0c.js";import"./iframe.1c77586e.js";import"./index.68bd2905.js";import"./withStyles.5eea39d5.js";import"./utils.31a80d71.js";import"./Alert.e70a23c6.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./isArray.69d02dee.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.1c3fe3f1.js";import"./FullWidthAlert.7478a55e.js";import"./Tooltip.9455954b.js";import"./createSvgIcon.b88943f5.js";import"./makeStyles.83c340c0.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.e6e71b68.js";import"./isSymbol.3ae1367c.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.fc63d11c.js";import"./use-deep-compare-effect.esm.63a03aa5.js";import"./uniq.e0b70e96.js";import"./_baseSlice.50189bc5.js";import"./toInteger.c1671d6c.js";import"./_cacheHas.2f01a71b.js";import"./without.ae039a4c.js";import"./_Set.79ce457d.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.f3162245.js";import"./TypeUtils.a2c41307.js";import"./ElementWithTooltip.aa21c398.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.cea6d11d.js";import"./Modal.2df339d5.js";import"./useWaitForDOMRef.2b50b75b.js";import"./inheritsLoose.02c5cdc5.js";import"./usePopperMarginModifiers.2ccc8168.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.244c418d.js";import"./queryUtils.b6e7a174.js";import"./useInfiniteQuery.4114925f.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.c1db8169.js";import"./_baseClone.32511df5.js";import"./_getTag.09032bbf.js";import"./useEntity.a73b6a7f.js";import"./useMutation.60a502f5.js";import"./pick.fbb2f290.js";import"./Checkbox.fc5ecb82.js";import"./RadioGroup.0bddc76f.js";import"./moment.a565bb48.js";import"./RangeSlider.e5b4fec2.js";import"./factory.ee8ba69d.js";import"./react-sizeme.22227f3d.js";import"./Skeleton.d97a08a6.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.d5fc7030.js";import"./InfoOutlined.10c65527.js";import"./Close.2a111ba4.js";import"./react-select.esm.cd0b6178.js";import"./Select-54ac8379.esm.d5f59070.js";import"./CustomSelectWidget.aa330617.js";import"./index.browser.0b0b54ae.js";import"./WarningModal.57553bf6.js";import"./react-intersection-observer.esm.94964140.js";import"./UserCard.89349cd4.js";import"./IconCopy.82604258.js";import"./SkeletonTable.a364440a.js";import"./times.12135b85.js";import"./Overlay.d35a38e4.js";import"./DateFormatter.db43e9a9.js";import"./core.esm.241c4529.js";import"./isEmpty.c32e2e50.js";import"./isEqual.7b80062a.js";import"./union.ec09b824.js";import"./isString.e1b80b76.js";import"./useGetDownloadListStatistics.c8592017.js";import"./QueryCount.8c3d262b.js";import"./NoData.14d6f6b5.js";import"./useGetAccessRequirement.6e90b266.js";import"./ManagedACTAccessRequirementStatus.3daf4e8d.js";import"./FileUpload.7b8befbf.js";import"./UserSearchBox.d170c2a6.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.1f67599d.js";import"./EntityLink.cfbd5ae5.js";import"./NoSearchResults.826667f9.js";import"./SynapseVideo.10f842ec.js";import"./IconList.f6977954.js";import"./UserCardList.acf920eb.js";const M="org.sagebionetworks.repo.model.quiz.MultichoiceResponse",c=()=>{const{accessToken:a}=E(),z=N(),[o,T]=m.exports.useState(),[l,f]=m.exports.useState([]),[e,h]=m.exports.useState(),C=k.useRef(null),S="https://help.synapse.org/docs/Getting-Started.2055471150.html",y=async()=>{try{T(await O(a))}catch(t){z(t)}};m.exports.useEffect(()=>{y()},[a]);const w=(t,s)=>{const p=[...l.filter(r=>r.questionIndex!==t),{questionIndex:t,answerIndex:[s],concreteType:M}];f(p)},v=()=>{var t;(t=C.current)==null||t.reset(),f([]),h(void 0),y()},R=async()=>{try{if(o&&o.questions.length===l.length){const t={quizId:o.id,questionResponses:l},s=await B(a,t);h(s),window.scrollTo(0,0)}else d("Please answer all of the questions and try again.","warning")}catch(t){d(t.reason,"danger")}},I=t=>t?{content:i(g,{children:"More info"}),closePopoverOnClick:!0,onClick:()=>window.open(t,"_blank"),variant:"primary"}:void 0;return n("div",{className:"bootstrap-4-backport CertificationQuiz",children:[e&&i("div",{children:n(g,{children:[!e.passed&&i("div",{className:"failBanner",children:"Quiz Failed"}),n(u,{variant:"hintText",children:["Score: ",e.score," / ",o==null?void 0:o.questions.length]}),e.passed?d(`You passed the Synapse Certification Quiz on ${e.passedOn}`,"success"):n(u,{variant:"body1",children:["Please review the items shown in red below, and"," ",i("a",{href:"#",onClick:t=>{t.preventDefault(),v()},children:"try again"}),"."]})]})}),n("div",{className:"CertificationQuiz__container",children:[n(x,{onClick:()=>window.open(S,"_blank"),className:"help-button",variant:"light-secondary",children:[i(_,{className:"HelpButton",style:{marginRight:"4px"}}),"Help"]}),o?i("div",{dangerouslySetInnerHTML:{__html:o.header}}):"",i("form",{ref:C,onSubmit:t=>t.preventDefault(),children:i("ol",{children:o==null?void 0:o.questions.map(t=>{var s,p;return n("li",{role:t.exclusive?"radiogroup":void 0,children:[i("div",{dangerouslySetInnerHTML:{__html:t.prompt},className:e&&((p=(s=e.corrections)==null?void 0:s.find(r=>r.question.questionIndex===t.questionIndex))!=null&&p.isCorrect?"":"incorrectQuestion")}),t.answers.map(r=>n("div",{children:[i("input",{id:`${t.questionIndex}-${r.answerIndex}`,name:`${t.questionIndex}`,type:t.exclusive?"radio":"checkbox",value:r.answerIndex,onClick:b=>w(t.questionIndex,Number(b.currentTarget.value)),disabled:!!e}),i("label",{style:{fontWeight:400},htmlFor:`${t.questionIndex}-${r.answerIndex}`,children:r.prompt})]},`${t.questionIndex}-${r.answerIndex}`)),i(L,{contentProps:{markdown:t.helpText},placement:"right",actionButton:I(t.docLink),showCloseButton:!0,children:n(u,{variant:"hintText",color:"primary",children:[i(_,{className:"HelpButton",style:{marginRight:"4px"}}),"Need help answering this question?"]})})]},t.questionIndex)})})}),!e&&i(x,{className:"help-button",variant:"primary",onClick:()=>R(),children:"Submit"})]})]})},Q=c;try{c.displayName="CertificationQuiz",c.__docgenInfo={description:"",displayName:"CertificationQuiz",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/CertificationQuiz.tsx#CertificationQuiz"]={docgenInfo:c.__docgenInfo,name:"CertificationQuiz",path:"src/lib/containers/CertificationQuiz.tsx#CertificationQuiz"})}catch{}const ki={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"certification-quiz-demo":{startLoc:{col:59,line:12},endLoc:{col:1,line:14},startBody:{col:59,line:12},endBody:{col:1,line:14}}}}},title:"Synapse/CertificationQuiz",component:Q,argTypes:{}},H=a=>i(Q,{...a}),$=H.bind({});$.args={};const Ei=["CertificationQuizDemo"];export{$ as CertificationQuizDemo,Ei as __namedExportsOrder,ki as default};
