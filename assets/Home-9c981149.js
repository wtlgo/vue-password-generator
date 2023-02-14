import{d as w,s as I,r as g,o as y,c as k,a as s,u as e,w as _,v as S,i as p,b as v,e as C,p as P,f as V,g as $,_ as D}from"./index-b761e01e.js";import{u as j,a as G}from"./password-59c5bff8.js";const N={class:"row mb-3"},B=["for"],H={class:"col"},L=["id","disabled","aria-describedby"],R={class:"row"},A={class:"col offset-sm-3"},M={class:"form-check form-switch"},T=["id","disabled"],E=["for"],q={class:"row"},z={class:"col offset-sm-3"},F={class:"form-check form-switch"},J=["id","disabled"],K=["for"],O={class:"row"},Q={class:"col offset-sm-3"},W={class:"form-check form-switch"},X=["id","disabled"],Y=["for"],Z={class:"row justify-content-center mt-3"},ss=["disabled"],es=w({__name:"PasswordGenerator",emits:["new-password"],setup(c,{emit:r}){const n=crypto.randomUUID(),i=crypto.randomUUID(),u=crypto.randomUUID(),d=crypto.randomUUID(),l=j(),{generate:x}=l,{passwordLength:m,uppercase:f,numbers:h,special:b}=I(l),t=g(!1),U=()=>{t.value=!0,r("new-password",x()),t.value=!1};return(rs,o)=>(y(),k("form",null,[s("div",N,[s("label",{class:"col-sm-3 col-form-label",for:e(n)}," Length ",8,B),s("div",H,[_(s("input",{class:"form-control",id:e(n),type:"number","onUpdate:modelValue":o[0]||(o[0]=a=>p(m)?m.value=a:null),min:"1",disabled:t.value,"aria-label":"Password Length","aria-describedby":e(n),inputmode:"numeric",pattern:"[0-9]*"},null,8,L),[[S,e(m),void 0,{number:!0}]])])]),s("div",R,[s("div",A,[s("div",M,[_(s("input",{class:"form-check-input",id:e(i),type:"checkbox","onUpdate:modelValue":o[1]||(o[1]=a=>p(f)?f.value=a:null),disabled:t.value},null,8,T),[[v,e(f)]]),s("label",{class:"form-check-label mx-1",for:e(i)}," Uppercase ",8,E)])])]),s("div",q,[s("div",z,[s("div",F,[_(s("input",{class:"form-check-input",id:e(u),type:"checkbox","onUpdate:modelValue":o[2]||(o[2]=a=>p(h)?h.value=a:null),disabled:t.value},null,8,J),[[v,e(h)]]),s("label",{class:"form-check-label mx-1",for:e(u)}," Numbers ",8,K)])])]),s("div",O,[s("div",Q,[s("div",W,[_(s("input",{class:"form-check-input",id:e(d),type:"checkbox","onUpdate:modelValue":o[3]||(o[3]=a=>p(b)?b.value=a:null),disabled:t.value},null,8,X),[[v,e(b)]]),s("label",{class:"form-check-label mx-1",for:e(d)}," Special Characters ",8,Y)])])]),s("div",Z,[s("button",{class:"col-auto btn btn-primary",disabled:t.value,onClick:U}," Generate Password ",8,ss)])]))}}),os=c=>(P("data-v-6609e16a"),c=c(),V(),c),ts={class:"container"},as=os(()=>s("div",{class:"row justify-content-center"},[s("div",{class:"col-auto"},[s("h1",null,"Password Generator")])],-1)),cs={class:"row py-1 justify-content-center"},ns={class:"col-auto"},ds={class:"bg-secondary p-4 rounded"},ls=w({__name:"Home",setup(c){const r=$(),{add:n}=G(),i=d=>{const l=n(d);r.push({name:"new-password",params:{id:l}})},u=()=>r.push({name:"about"});return(d,l)=>(y(),k("div",ts,[as,s("div",cs,[s("div",ns,[s("div",ds,[C(es,{onNewPassword:i})])])]),s("div",{class:"row justify-content-center"},[s("div",{class:"col-auto"},[s("button",{class:"btn btn-secondary",onClick:u}," About ")])])]))}});const _s=D(ls,[["__scopeId","data-v-6609e16a"]]);export{_s as default};