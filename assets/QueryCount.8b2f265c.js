import{cq as l,f as i}from"./index.29a7f152.js";import{p as d}from"./sqlFunctions.b49ac766.js";import{j as p}from"./jsx-runtime.2e925369.js";const y=window.React,r=({sql:e,selectedFacets:a,parens:s})=>{var o;const u=d(e),c={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",query:{sql:e,selectedFacets:a},entityId:u,partMask:i},{data:t}=l(c),n=(o=t==null?void 0:t.queryCount)==null?void 0:o.toLocaleString();return p(y.Fragment,{children:n&&(s?`(${n})`:n)})};try{r.displayName="QueryCount",r.__docgenInfo={description:"",displayName:"QueryCount",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},selectedFacets:{defaultValue:null,description:"",name:"selectedFacets",required:!1,type:{name:"FacetColumnValuesRequest[]"}},parens:{defaultValue:null,description:"",name:"parens",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/QueryCount.tsx#QueryCount"]={docgenInfo:r.__docgenInfo,name:"QueryCount",path:"src/lib/containers/QueryCount.tsx#QueryCount"})}catch{}export{r as Q};
//# sourceMappingURL=QueryCount.8b2f265c.js.map