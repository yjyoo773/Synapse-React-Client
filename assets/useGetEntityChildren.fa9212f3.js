import{T as u,bk as i,bA as s,aZ as l,w as r}from"./index.9a9a7666.js";function c(e,a){const{accessToken:t}=r();return l(s.children(e,!1),()=>i(e,t),a)}function y(e,a){const{accessToken:t}=r();return u(s.children(e,!0),async n=>await i({...e,includeTotalChildCount:n.pageParam?!1:e.includeTotalChildCount,nextPageToken:n.pageParam},t,n.signal),{...a,getNextPageParam:n=>n.nextPageToken})}export{c as a,y as u};
//# sourceMappingURL=useGetEntityChildren.fa9212f3.js.map