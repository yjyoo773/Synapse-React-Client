import{R as l,r as i,j as n,a as d}from"./jsx-runtime.31268528.js";import{Q as u,m,n as y,o as f,S as C,p as S,q as h,r as k,s as x,t as g,u as _}from"./index.22d2125e.js";import{S as T}from"./ToastMessage.a10582c4.js";import{d as b}from"./dayjs.min.fa03b112.js";import{M as v}from"./react-router.5b70f4d2.js";var p={exports:{}};p.exports={ReactQueryDevtools:function(){return null},ReactQueryDevtoolsPanel:function(){return null}};async function w(){S();let e=await h(),t;try{t=await k(e)}catch(o){throw o instanceof x&&o.status===401&&(console.error("Encountered error fetching profile: ",o,"Signing out..."),await g(()=>{}),e=void 0),o}let r;return e&&_(e).then(o=>{r=b(o.authenticatedOn).format("L LT")}),{accessToken:e,profile:t,authenticatedOn:r}}const a=new u(m);function c(e){const[t,r]=l.useState(void 0);i.exports.useEffect(()=>{w().then(s=>{r(s.accessToken)})}),i.exports.useEffect(()=>{async function s(){await a.cancelQueries(),a.removeQueries(),await a.invalidateQueries()}s()},[t]);const o=i.exports.useMemo(()=>({accessToken:t,isInExperimentalMode:y(),utcTime:f(),withErrorBoundary:!0,downloadCartPageUrl:"/?path=/story/download-downloadcartpage--demo"}),[t]);return n(C,{queryClient:a,synapseContext:o,children:d(v,{children:[n(p.exports.ReactQueryDevtools,{}),n(T,{}),n("main",{children:e.children})]})},t)}try{c.displayName="StorybookComponentWrapper",c.__docgenInfo={description:"Wraps storybook story components to ensure that all components receive required context.",displayName:"StorybookComponentWrapper",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/StorybookComponentWrapper.tsx#StorybookComponentWrapper"]={docgenInfo:c.__docgenInfo,name:"StorybookComponentWrapper",path:"src/lib/containers/StorybookComponentWrapper.tsx#StorybookComponentWrapper"})}catch{}export{c as S,w as s};
