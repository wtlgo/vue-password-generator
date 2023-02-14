import{d as k,s as I,r as S,o as y,c as x,a as s,u as e,w as p,v as $,i as _,b as v,e as C,p as P,f as V,g as D,_ as G}from"./index-ddbcf6bd.js";import{u as N,a as B}from"./password-fa9d27ab.js";const H={class:"bg-secondary p-4 rounded"},L={class:"input-group"},R=["id"],A=["disabled","aria-describedby"],M={class:"form-check form-switch"},T=["id","disabled"],j=["for"],E={class:"form-check form-switch"},q=["id","disabled"],z=["for"],F={class:"form-check form-switch"},J=["id","disabled"],K=["for"],O=["disabled"],Q=k({__name:"PasswordGenerator",emits:["new-password"],setup(c,{emit:l}){const r=crypto.randomUUID(),i=crypto.randomUUID(),u=crypto.randomUUID(),n=crypto.randomUUID(),d=N(),{generate:U}=d,{passwordLength:m,uppercase:b,numbers:h,special:f}=I(d),t=S(!1),g=()=>{t.value=!0,l("new-password",U()),t.value=!1};return(ts,o)=>(y(),x("div",H,[s("div",L,[s("span",{class:"input-group-text",id:e(r)}," Length ",8,R),p(s("input",{class:"form-control",type:"number","onUpdate:modelValue":o[0]||(o[0]=a=>_(m)?m.value=a:null),min:"1",disabled:t.value,"aria-label":"Password Length","aria-describedby":e(r),inputmode:"numeric",pattern:"[0-9]*"},null,8,A),[[$,e(m),void 0,{number:!0}]])]),s("div",M,[p(s("input",{class:"form-check-input",id:e(i),type:"checkbox","onUpdate:modelValue":o[1]||(o[1]=a=>_(b)?b.value=a:null),disabled:t.value},null,8,T),[[v,e(b)]]),s("label",{class:"form-check-label mx-1",for:e(i)}," Uppercase ",8,j)]),s("div",E,[p(s("input",{class:"form-check-input",id:e(u),type:"checkbox","onUpdate:modelValue":o[2]||(o[2]=a=>_(h)?h.value=a:null),disabled:t.value},null,8,q),[[v,e(h)]]),s("label",{class:"form-check-label mx-1",for:e(u)}," Numbers ",8,z)]),s("div",F,[p(s("input",{class:"form-check-input",id:e(n),type:"checkbox","onUpdate:modelValue":o[3]||(o[3]=a=>_(f)?f.value=a:null),disabled:t.value},null,8,J),[[v,e(f)]]),s("label",{class:"form-check-label mx-1",for:e(n)}," Special Characters ",8,K)]),s("button",{class:"btn btn-primary",disabled:t.value,onClick:g}," Generate Password ",8,O)]))}}),w=c=>(P("data-v-29074fdc"),c=c(),V(),c),W={class:"container"},X=w(()=>s("div",{class:"row"},[s("div",{class:"col"}),s("div",{class:"col-auto"},[s("h1",null,"Password Generator")]),s("div",{class:"col"})],-1)),Y={class:"row py-1"},Z={class:"col d-flex justify-content-center"},ss=w(()=>s("div",{class:"col"},null,-1)),es=w(()=>s("div",{class:"col"},null,-1)),os=k({__name:"Home",setup(c){const l=D(),{add:r}=B(),i=n=>{const d=r(n);l.push({name:"new-password",params:{id:d}})},u=()=>l.push({name:"about"});return(n,d)=>(y(),x("div",W,[X,s("div",Y,[s("div",Z,[C(Q,{onNewPassword:i})])]),s("div",{class:"row"},[ss,s("div",{class:"col-auto"},[s("button",{class:"btn btn-secondary",onClick:u}," About ")]),es])]))}});const ns=G(os,[["__scopeId","data-v-29074fdc"]]);export{ns as default};
