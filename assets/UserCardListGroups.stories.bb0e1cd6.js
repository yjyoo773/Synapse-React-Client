import{u as y}from"./useShowDesktop.09cba887.js";import{U as f}from"./UserCardListRotate.429e2517.js";import{E as L}from"./ExpandableContent.4de2bc7f.js";import{j as e,a as c,F as C}from"./jsx-runtime.2e925369.js";import{B as S}from"./Button.c582ea4c.js";import{M as U}from"./index.9a9a7666.js";import"./sqlFunctions.b49ac766.js";import"./ColumnType.744125d2.js";import"./assert.058f6c29.js";import"./iframe.1ea5c850.js";import"./index.8cde812d.js";import"./UserCardList.db14a994.js";import"./UserCard.306a3ff2.js";import"./getEndpoint.0de7fccf.js";import"./IconCopy.b1eba79c.js";import"./SkeletonTable.f8d5c781.js";import"./times.570227e3.js";import"./toInteger.68de6488.js";import"./toString.8ef640ae.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./index.f252d424.js";import"./index.06f4a415.js";import"./Skeleton.8dd0668e.js";import"./toConsumableArray.b3669986.js";import"./withStyles.8be28b48.js";import"./Tooltip.6c95fe7b.js";import"./createSvgIcon.d78a924b.js";import"./SvgIcon.31249d58.js";import"./useTheme.8804f8cd.js";import"./Transition.d42a873e.js";import"./makeStyles.9dfaa099.js";import"./IconSvg.c485205d.js";import"./InfoOutlined.22a371fd.js";import"./ToastMessage.f82ed562.js";import"./FullWidthAlert.e7125a09.js";import"./Typography.bfdf676e.js";import"./Alert.eafe86e9.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.fa0dadf5.js";import"./Overlay.88992b99.js";import"./useWaitForDOMRef.c89dbc64.js";import"./usePopperMarginModifiers.31225551.js";import"./without.339fd4e0.js";import"./_baseDifference.0331c2a7.js";import"./_cacheHas.c4a58f17.js";import"./use-deep-compare-effect.esm.76673280.js";function l(r){const{columnName:s,facetValues:t,...i}=r;return e("div",{children:t==null?void 0:t.map((a,n)=>{const u=t[n],m=e(f,{...i,selectedFacets:[{columnName:s,facetValues:[u],concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest"}]},`UserCardListGroup-Mobile-${n}`);return e(L,{title:c(C,{children:[" ",u," "]}),content:m})})})}try{l.displayName="UserCardListGroupsMobile",l.__docgenInfo={description:"",displayName:"UserCardListGroupsMobile",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},columnName:{defaultValue:null,description:"",name:"columnName",required:!0,type:{name:"string"}},facetValues:{defaultValue:null,description:"",name:"facetValues",required:!0,type:{name:"string[]"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},summaryLink:{defaultValue:null,description:"",name:"summaryLink",required:!1,type:{name:"string"}},summaryLinkText:{defaultValue:null,description:"",name:"summaryLinkText",required:!1,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},useQueryResultUserData:{defaultValue:null,description:"",name:"useQueryResultUserData",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/people/UserCardListGroups.Mobile.tsx#UserCardListGroupsMobile"]={docgenInfo:l.__docgenInfo,name:"UserCardListGroupsMobile",path:"src/lib/containers/home_page/people/UserCardListGroups.Mobile.tsx#UserCardListGroupsMobile"})}catch{}const R=window.React.useState;function p(r){const[s,t]=R(0),{columnName:i,facetValues:a,...n}=r,u={columnName:i,facetValues:[a[s]],concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest"};return c("div",{className:"control-container",children:[c("div",{className:"button-container",children:[a==null?void 0:a.map((d,m)=>e("button",{className:s===m?"isSelected":"",onClick:()=>t(m),children:d},d)),e("button",{className:"gap-fill"})]}),e("div",{className:"content-container",children:e(f,{...n,selectedFacets:[u]},`UserCardListGroup-${s}`)})]})}try{p.displayName="UserCardListGroupsDesktop",p.__docgenInfo={description:"",displayName:"UserCardListGroupsDesktop",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},columnName:{defaultValue:null,description:"",name:"columnName",required:!0,type:{name:"string"}},facetValues:{defaultValue:null,description:"",name:"facetValues",required:!0,type:{name:"string[]"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},summaryLink:{defaultValue:null,description:"",name:"summaryLink",required:!1,type:{name:"string"}},summaryLinkText:{defaultValue:null,description:"",name:"summaryLinkText",required:!1,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},useQueryResultUserData:{defaultValue:null,description:"",name:"useQueryResultUserData",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/people/UserCardListGroups.Desktop.tsx#UserCardListGroupsDesktop"]={docgenInfo:p.__docgenInfo,name:"UserCardListGroupsDesktop",path:"src/lib/containers/home_page/people/UserCardListGroups.Desktop.tsx#UserCardListGroupsDesktop"})}catch{}function o(r){const{summaryLink:s,summaryLinkText:t,...i}=r,a=y();return e("div",{className:`bootstrap-4-backport UserCardListGroups${a?"__Desktop":""}`,children:c("div",{children:[a?e(p,{...i}):e(l,{...i}),s&&t&&e("div",{className:"UserCardListGroups__summary",children:e(S,{variant:"secondary",size:"lg",className:"pill",href:s,children:t})})]})})}try{o.displayName="UserCardListGroups",o.__docgenInfo={description:"",displayName:"UserCardListGroups",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},columnName:{defaultValue:null,description:"",name:"columnName",required:!0,type:{name:"string"}},facetValues:{defaultValue:null,description:"",name:"facetValues",required:!0,type:{name:"string[]"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},summaryLink:{defaultValue:null,description:"",name:"summaryLink",required:!1,type:{name:"string"}},summaryLinkText:{defaultValue:null,description:"",name:"summaryLinkText",required:!1,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},useQueryResultUserData:{defaultValue:null,description:"",name:"useQueryResultUserData",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/people/UserCardListGroups.tsx#UserCardListGroups"]={docgenInfo:o.__docgenInfo,name:"UserCardListGroups",path:"src/lib/containers/home_page/people/UserCardListGroups.tsx#UserCardListGroups"})}catch{}var Ce={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import UserCardListGroups from './UserCardListGroups'
import { MEDIUM_USER_CARD } from '../../../utils/SynapseConstants'

export default {
  title: 'Home Page/UserCardListGroups',
  component: UserCardListGroups,
} as ComponentMeta<typeof UserCardListGroups>

const Template: ComponentStory<typeof UserCardListGroups> = args => (
  <UserCardListGroups {...args} />
)

export const Demo = Template.bind({})
Demo.args = {
  sql: "SELECT * FROM syn21781196 WHERE isFeatured='true'",
  columnName: 'Project Title',
  facetValues: [
    'Somatic Mosaicism in the brain of Tourette syndrome',
    'Somatic Mosaicism in Schizophrenia and Control Brains',
    '1/3-Schizophrenia Genetics and Brain Somatic Mosaicism',
    '2/3-Schizophrenia Genetics and Brain Somatic Mosaicism',
    'Role of brain somatic mosaicism in autism, schizophrenia, and bipolar disorder',
    'Mosaicism in focal cortical dysplasias spectrum seen in neuropsychiatric disease',
    '1/2-Somatic mosaicism and autism spectrum disorder',
    '2/2-Somatic mosaicism and autism spectrum disorder',
    '3/3-Schizophrenia Genetics and Brain Somatic Mosaicism',
  ],
  size: MEDIUM_USER_CARD,
  useQueryResultUserData: false,
  summaryLinkText: 'EXPLORE ALL PEOPLE',
  summaryLink: '/Explore/People',
  count: 6,
}
`,locationsMap:{demo:{startLoc:{col:60,line:11},endLoc:{col:1,line:13},startBody:{col:60,line:11},endBody:{col:1,line:13}}}}},title:"Home Page/UserCardListGroups",component:o};const _=r=>e(o,{...r}),E=_.bind({});E.args={sql:"SELECT * FROM syn21781196 WHERE isFeatured='true'",columnName:"Project Title",facetValues:["Somatic Mosaicism in the brain of Tourette syndrome","Somatic Mosaicism in Schizophrenia and Control Brains","1/3-Schizophrenia Genetics and Brain Somatic Mosaicism","2/3-Schizophrenia Genetics and Brain Somatic Mosaicism","Role of brain somatic mosaicism in autism, schizophrenia, and bipolar disorder","Mosaicism in focal cortical dysplasias spectrum seen in neuropsychiatric disease","1/2-Somatic mosaicism and autism spectrum disorder","2/2-Somatic mosaicism and autism spectrum disorder","3/3-Schizophrenia Genetics and Brain Somatic Mosaicism"],size:U,useQueryResultUserData:!1,summaryLinkText:"EXPLORE ALL PEOPLE",summaryLink:"/Explore/People",count:6};const Se=["Demo"];export{E as Demo,Se as __namedExportsOrder,Ce as default};
//# sourceMappingURL=UserCardListGroups.stories.bb0e1cd6.js.map