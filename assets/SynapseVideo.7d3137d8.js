import{r as l,j as t,a as v,F as _}from"./jsx-runtime.31268528.js";import{V as w,$ as x,a4 as F,ac as b}from"./index.22d2125e.js";import{g as R}from"./SynapseConstants.290eab74.js";function c({params:e}){var g,S;const{accessToken:i}=w(),[d,p]=l.exports.useState(),[u,y]=l.exports.useState(),o=(g=e.width)!=null?g:"",r=(S=e.height)!=null?S:"";return l.exports.useEffect(()=>{const h=()=>{if(e.videoId)p(`https://www.youtube.com/embed/${e.videoId}`);else if(e.vimeoId)p(`https://player.vimeo.com/video/${e.vimeoId}`);else{const n=e.oggSynapseId||e.mp4SynapseId||e.webmSynapseId;x(i,n).then(s=>{const f=[{associateObjectId:n,associateObjectType:F.FileEntity,fileHandleId:s.dataFileHandleId}];I(f,s.dataFileHandleId)})}},I=(n,s)=>{b({includeFileHandles:!1,includePreSignedURLs:!0,includePreviewPreSignedURLs:!1,requestedFiles:n},i).then(a=>{const{preSignedURL:m}=a.requestedFiles.filter(V=>V.fileHandleId===s)[0];y(m)}).catch(a=>{console.error("Error on getting video ",a)})};h()},[d,e,i,r,o]),t(()=>u?i?t("video",{controls:!0,src:u,width:o,height:r,"data-testid":"synapse-video-url",children:"It does not support the HTML5 Video element."}):v("p",{children:["You will need to",t("button",{"data-testid":"video-login",className:`${R} sign-in-btn default
                `,children:"Sign in"}),"in for access to that resource."]}):d?t("iframe",{title:"video frame",src:d,width:o,height:r}):t(_,{}),{})}try{c.displayName="SynapseVideo",c.__docgenInfo={description:"",displayName:"SynapseVideo",props:{params:{defaultValue:null,description:"",name:"params",required:!0,type:{name:"{ width?: string | undefined; height?: string | undefined; videoId?: string | undefined; vimeoId?: string | undefined; oggSynapseId?: string | undefined; mp4SynapseId?: string | undefined; webmSynapseId?: string | undefined; }"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/widgets/SynapseVideo.tsx#SynapseVideo"]={docgenInfo:c.__docgenInfo,name:"SynapseVideo",path:"src/lib/containers/widgets/SynapseVideo.tsx#SynapseVideo"})}catch{}export{c as S};
