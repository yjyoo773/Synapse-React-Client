import{V as u,X as r,ao as o,c0 as m,c1 as S,c2 as b}from"./index.22d2125e.js";import{u as y}from"./useMutation.9a2bc2f1.js";import{u as f}from"./useInfiniteQuery.c6eed216.js";const n={submission:s=>["dataAccessSubmission",s],search:s=>s?["accessSubmissionSearch",s]:["accessSubmissionSearch"]};function Q(s,a){const{accessToken:c}=u();return r(n.submission(s),()=>S(s,c),a)}function k(s,a){const{accessToken:c}=u();return f(n.search(s),async e=>await b({...s,nextPageToken:e.pageParam},c),{...a,getNextPageParam:e=>e.nextPageToken})}function x(s){const a=o(),{accessToken:c}=u();return y(e=>m(e,c),{...s,onSuccess:async(e,t,i)=>{a.invalidateQueries(n.search()),a.setQueryData(n.submission(t.submissionId),e),s!=null&&s.onSuccess&&await s.onSuccess(e,t,i)}})}export{Q as a,x as b,k as u};
