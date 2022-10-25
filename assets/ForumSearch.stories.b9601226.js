import{r as i,a as s,j as o,F as g}from"./jsx-runtime.ed0bc2e8.js";import{h as C,d5 as I,o as j}from"./index.444e3572.js";import{D as k}from"./DiscussionSearchResult.8998b0da.js";import{T as d}from"./Typography.935cd23d.js";import{s as E}from"./NoSearchResults.826667f9.js";import{I as x}from"./IconSvg.af973a0c.js";import{d as B}from"./ToastMessage.f3c1e08b.js";import{B as L}from"./Button.ead7d59a.js";import"./iframe.1c77586e.js";import"./index.68bd2905.js";import"./withStyles.5eea39d5.js";import"./utils.31a80d71.js";import"./Alert.e70a23c6.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./isArray.69d02dee.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.1c3fe3f1.js";import"./moment.a565bb48.js";import"./UserCard.89349cd4.js";import"./IconCopy.82604258.js";import"./SkeletonTable.a364440a.js";import"./times.12135b85.js";import"./toInteger.c1671d6c.js";import"./isSymbol.3ae1367c.js";import"./Skeleton.d97a08a6.js";import"./Tooltip.9455954b.js";import"./createSvgIcon.b88943f5.js";import"./makeStyles.83c340c0.js";import"./Overlay.d35a38e4.js";import"./useWaitForDOMRef.2b50b75b.js";import"./usePopperMarginModifiers.2ccc8168.js";import"./hasClass.56fd144a.js";import"./Row.ea03abeb.js";import"./InfoOutlined.10c65527.js";import"./FullWidthAlert.7478a55e.js";import"./removeClass.27874bcb.js";import"./uniqueId.e6e71b68.js";const u=t=>{const{onSearchResultsVisible:c}=t,{accessToken:m}=C(),[a,f]=i.exports.useState(""),[r,p]=i.exports.useState(),[l,h]=i.exports.useState(),[n,v]=i.exports.useState(),[y,S]=i.exports.useState(!1),F=async()=>{c&&c(!0);try{p(void 0),S(!1);const e=await I({searchString:a,nextPageToken:void 0},t.forumId,m);e.matches.length==0&&S(!0),p(e),h(e.matches)}catch(e){B(e.reason,"danger")}},T=()=>{c&&c(!1),f(""),p(void 0),S(!1),h(void 0)};i.exports.useEffect(()=>{(async()=>{if(t.projectId){const N=await j(m,t.projectId);v(N)}})()},[m,t.projectId]);const R=()=>s("div",{className:"text-center",children:[E,o(d,{variant:"body1",children:"No results with this query"}),o(d,{variant:"body2",children:"Search the full text of posts, replies, and titles"})]}),_=async()=>{const e=await I({searchString:a,nextPageToken:r==null?void 0:r.nextPageToken},t.forumId,m);p(e),l&&h([...l,...e.matches])};return s("div",{className:"bootstrap-4-backport ForumSearch",children:[s("div",{children:[o("span",{className:"SearchIcon",children:o(x,{options:{icon:"search"}})}),o("input",{role:"textbox",type:"search",className:`SearchBar  ${r?"SearchBarResult":""}`,placeholder:"Search discussions",value:a,onChange:e=>{f(e.target.value)},onKeyDown:e=>{e.key==="Enter"&&F()}}),a&&o("button",{className:"ClearSearchIcon",onClick:()=>{T()},children:o(x,{options:{icon:"clear"}})})]}),y&&s(g,{children:[t.projectId&&s(d,{variant:"body2",className:"NoResultsText",children:["No results for '",a,"' in ",n==null?void 0:n.name]}),o(R,{})]}),l&&s(g,{children:[t.projectId&&!y&&s(d,{variant:"body2",className:"ResultsText",children:["Results for '",a,"' in ",n==null?void 0:n.name]}),l.map(e=>o("div",{children:o(k,{threadId:e.threadId,replyId:e.replyId})},`${e.forumId}-${e.threadId}-${e.replyId}`))]}),(r==null?void 0:r.nextPageToken)&&o("div",{className:"text-center",children:o(L,{variant:"primary",onClick:_,children:"Load more"})})]})},b=u;try{u.displayName="ForumSearch",u.__docgenInfo={description:"",displayName:"ForumSearch",props:{forumId:{defaultValue:null,description:"",name:"forumId",required:!0,type:{name:"string"}},projectId:{defaultValue:null,description:"",name:"projectId",required:!1,type:{name:"string"}},onSearchResultsVisible:{defaultValue:null,description:"",name:"onSearchResultsVisible",required:!1,type:{name:"((visible: boolean) => void)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ForumSearch.tsx#ForumSearch"]={docgenInfo:u.__docgenInfo,name:"ForumSearch",path:"src/lib/containers/ForumSearch.tsx#ForumSearch"})}catch{}const xe={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ForumSearch from './ForumSearch'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Synapse/ForumSearch',
  component: ForumSearch,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ForumSearch>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ForumSearch> = args => (
  <ForumSearch {...args} />
)

export const Demo = Template.bind({})

Demo.args = {
  forumId: '1032',
  onSearchResultsVisible: visible => alert(\`Is visible? \${visible}\`),
}
`,locationsMap:{demo:{startLoc:{col:53,line:15},endLoc:{col:1,line:17},startBody:{col:53,line:15},endBody:{col:1,line:17}}}}},title:"Synapse/ForumSearch",component:b,argTypes:{}},M=t=>o(b,{...t}),V=M.bind({});V.args={forumId:"1032",onSearchResultsVisible:t=>alert(`Is visible? ${t}`)};const be=["Demo"];export{V as Demo,be as __namedExportsOrder,xe as default};
