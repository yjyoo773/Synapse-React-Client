import{aZ as I,w as r,bn as u,T as f}from"./index.9a9a7666.js";function v(e="FAVORITED_ON",s="DESC",n){const{accessToken:a}=r();return I(["favorites",e,s],()=>u(a,void 0,void 0,e,s),n)}function T(e="FAVORITED_ON",s="DESC",n){const{accessToken:i}=r();return f(["favorites","infinite",e,s],async t=>u(i,t.pageParam,10,e,s),{...n,getNextPageParam:(t,o)=>{if(t.results.length>0)return o.length*10}})}export{v as a,T as u};
//# sourceMappingURL=useFavorites.b6fbe9f6.js.map