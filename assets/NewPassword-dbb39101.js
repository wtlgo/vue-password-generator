import{a as g,u as y}from"./password-a1bca326.js";import{d as i,t as _,c as p,a as s,l as P,u,o as w,_ as v,j as x,e as k,p as S,f as C,g as I}from"./index-7f11be17.js";const N={class:"wrap"},D=i({__name:"PasswordDisplay",props:{password:null},setup(o){const r=o,{password:a}=_(r),n=async()=>{try{const{state:e}=await navigator.permissions.query({name:"clipboard-write"});if(e=="denied")return}catch{}await navigator.clipboard.writeText(a.value),alert("Password was copied to clipboard")};return(e,d)=>(w(),p("div",{class:"alert alert-success pointer",onClick:n},[s("p",N,P(u(a)),1)]))}});const R=v(D,[["__scopeId","data-v-daa64b2f"]]),c=o=>(S("data-v-ec56af9b"),o=o(),C(),o),B={class:"container"},H=c(()=>s("div",{class:"row"},[s("div",{class:"col"}),s("div",{class:"col-auto"},[s("h1",null,"Your password is:")]),s("div",{class:"col"})],-1)),V={class:"row"},$=c(()=>s("div",{class:"col"},null,-1)),j={class:"col-auto"},q=c(()=>s("div",{class:"col"},null,-1)),E=c(()=>s("div",{class:"col"},null,-1)),G=c(()=>s("div",{class:"col"},null,-1)),T=i({__name:"NewPassword",props:{id:null},setup(o){const r=o,a=I(),n=()=>a.push({name:"home"}),{id:e}=_(r),{get:d,add:m}=g(),h=x(()=>{const t=d(e.value);return t||(n(),"")}),{generate:f}=y(),b=()=>{const t=f(),l=m(t);a.push({name:"new-password",params:{id:l}})};return(t,l)=>(w(),p("div",B,[H,s("div",V,[$,s("div",j,[k(R,{password:u(h)},null,8,["password"])]),q]),s("div",{class:"row"},[E,s("div",{class:"col-auto"},[s("button",{class:"btn btn-warning m-1",onClick:b}," Re-generate "),s("button",{class:"btn btn-warning m-1",onClick:n}," Home ")]),G])]))}});const A=v(T,[["__scopeId","data-v-ec56af9b"]]);export{A as default};
