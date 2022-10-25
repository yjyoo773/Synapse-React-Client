import{u as y}from"./useShowDesktop.21d5439f.js";import{U as f}from"./UserCardListRotate.d5d3a2fc.js";import{E as L}from"./ExpandableContent.0adfb371.js";import{j as e,a as c,F as C,r as S}from"./jsx-runtime.ed0bc2e8.js";import{B as U}from"./Button.ead7d59a.js";import{ax as R}from"./index.444e3572.js";import"./sqlFunctions.1d7d9843.js";import"./ColumnType.744125d2.js";import"./UserCardList.acf920eb.js";import"./UserCard.89349cd4.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.82604258.js";import"./SkeletonTable.a364440a.js";import"./times.12135b85.js";import"./toInteger.c1671d6c.js";import"./isSymbol.3ae1367c.js";import"./isArray.69d02dee.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.d97a08a6.js";import"./withStyles.5eea39d5.js";import"./Tooltip.9455954b.js";import"./createSvgIcon.b88943f5.js";import"./SvgIcon.1c3fe3f1.js";import"./utils.31a80d71.js";import"./index.68bd2905.js";import"./iframe.1c77586e.js";import"./makeStyles.83c340c0.js";import"./IconSvg.af973a0c.js";import"./InfoOutlined.10c65527.js";import"./ToastMessage.f3c1e08b.js";import"./FullWidthAlert.7478a55e.js";import"./Typography.935cd23d.js";import"./Alert.e70a23c6.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.e6e71b68.js";import"./Overlay.d35a38e4.js";import"./useWaitForDOMRef.2b50b75b.js";import"./usePopperMarginModifiers.2ccc8168.js";import"./without.ae039a4c.js";import"./_cacheHas.2f01a71b.js";import"./use-deep-compare-effect.esm.63a03aa5.js";function l(r){const{columnName:s,facetValues:t,...i}=r;return e("div",{children:t==null?void 0:t.map((a,n)=>{const u=t[n],m=e(f,{...i,selectedFacets:[{columnName:s,facetValues:[u],concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest"}]},`UserCardListGroup-Mobile-${n}`);return e(L,{title:c(C,{children:[" ",u," "]}),content:m})})})}try{l.displayName="UserCardListGroupsMobile",l.__docgenInfo={description:"",displayName:"UserCardListGroupsMobile",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},columnName:{defaultValue:null,description:"",name:"columnName",required:!0,type:{name:"string"}},facetValues:{defaultValue:null,description:"",name:"facetValues",required:!0,type:{name:"string[]"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},summaryLink:{defaultValue:null,description:"",name:"summaryLink",required:!1,type:{name:"string"}},summaryLinkText:{defaultValue:null,description:"",name:"summaryLinkText",required:!1,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},useQueryResultUserData:{defaultValue:null,description:"",name:"useQueryResultUserData",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/people/UserCardListGroups.Mobile.tsx#UserCardListGroupsMobile"]={docgenInfo:l.__docgenInfo,name:"UserCardListGroupsMobile",path:"src/lib/containers/home_page/people/UserCardListGroups.Mobile.tsx#UserCardListGroupsMobile"})}catch{}function p(r){const[s,t]=S.exports.useState(0),{columnName:i,facetValues:a,...n}=r,u={columnName:i,facetValues:[a[s]],concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest"};return c("div",{className:"control-container",children:[c("div",{className:"button-container",children:[a==null?void 0:a.map((d,m)=>e("button",{className:s===m?"isSelected":"",onClick:()=>t(m),children:d},d)),e("button",{className:"gap-fill"})]}),e("div",{className:"content-container",children:e(f,{...n,selectedFacets:[u]},`UserCardListGroup-${s}`)})]})}try{p.displayName="UserCardListGroupsDesktop",p.__docgenInfo={description:"",displayName:"UserCardListGroupsDesktop",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},columnName:{defaultValue:null,description:"",name:"columnName",required:!0,type:{name:"string"}},facetValues:{defaultValue:null,description:"",name:"facetValues",required:!0,type:{name:"string[]"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},summaryLink:{defaultValue:null,description:"",name:"summaryLink",required:!1,type:{name:"string"}},summaryLinkText:{defaultValue:null,description:"",name:"summaryLinkText",required:!1,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},useQueryResultUserData:{defaultValue:null,description:"",name:"useQueryResultUserData",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/people/UserCardListGroups.Desktop.tsx#UserCardListGroupsDesktop"]={docgenInfo:p.__docgenInfo,name:"UserCardListGroupsDesktop",path:"src/lib/containers/home_page/people/UserCardListGroups.Desktop.tsx#UserCardListGroupsDesktop"})}catch{}function o(r){const{summaryLink:s,summaryLinkText:t,...i}=r,a=y();return e("div",{className:`bootstrap-4-backport UserCardListGroups${a?"__Desktop":""}`,children:c("div",{children:[a?e(p,{...i}):e(l,{...i}),s&&t&&e("div",{className:"UserCardListGroups__summary",children:e(U,{variant:"secondary",size:"lg",className:"pill",href:s,children:t})})]})})}try{o.displayName="UserCardListGroups",o.__docgenInfo={description:"",displayName:"UserCardListGroups",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},columnName:{defaultValue:null,description:"",name:"columnName",required:!0,type:{name:"string"}},facetValues:{defaultValue:null,description:"",name:"facetValues",required:!0,type:{name:"string[]"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},summaryLink:{defaultValue:null,description:"",name:"summaryLink",required:!1,type:{name:"string"}},summaryLinkText:{defaultValue:null,description:"",name:"summaryLinkText",required:!1,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},useQueryResultUserData:{defaultValue:null,description:"",name:"useQueryResultUserData",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/people/UserCardListGroups.tsx#UserCardListGroups"]={docgenInfo:o.__docgenInfo,name:"UserCardListGroups",path:"src/lib/containers/home_page/people/UserCardListGroups.tsx#UserCardListGroups"})}catch{}const de={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:60,line:11},endLoc:{col:1,line:13},startBody:{col:60,line:11},endBody:{col:1,line:13}}}}},title:"Home Page/UserCardListGroups",component:o},_=r=>e(o,{...r}),E=_.bind({});E.args={sql:"SELECT * FROM syn21781196 WHERE isFeatured='true'",columnName:"Project Title",facetValues:["Somatic Mosaicism in the brain of Tourette syndrome","Somatic Mosaicism in Schizophrenia and Control Brains","1/3-Schizophrenia Genetics and Brain Somatic Mosaicism","2/3-Schizophrenia Genetics and Brain Somatic Mosaicism","Role of brain somatic mosaicism in autism, schizophrenia, and bipolar disorder","Mosaicism in focal cortical dysplasias spectrum seen in neuropsychiatric disease","1/2-Somatic mosaicism and autism spectrum disorder","2/2-Somatic mosaicism and autism spectrum disorder","3/3-Schizophrenia Genetics and Brain Somatic Mosaicism"],size:R,useQueryResultUserData:!1,summaryLinkText:"EXPLORE ALL PEOPLE",summaryLink:"/Explore/People",count:6};const fe=["Demo"];export{E as Demo,fe as __namedExportsOrder,de as default};
