import{u as v}from"./password-faf03b8b.js";import{a as l,t as r,b as d,e as s,k as w,u as _,o as i,_ as h,c as m,g as f,h as b}from"./index-677e6fc5.js";const y={class:"alert alert-success"},g={class:"wrap"},x=l({__name:"PasswordDisplay",props:{password:null},setup(o){const a=o,{password:t}=r(a);return(c,n)=>(i(),d("div",y,[s("p",g,w(_(t)),1)]))}});const P=h(x,[["__scopeId","data-v-7ca752ab"]]),k={class:"container"},D=s("div",{class:"row"},[s("div",{class:"col"}),s("div",{class:"col-auto"},[s("h1",null,"Your password is:")]),s("div",{class:"col"})],-1),B={class:"row"},N=s("div",{class:"col"},null,-1),$=s("div",{class:"col"},null,-1),C=s("div",{class:"col"},null,-1),H=s("div",{class:"col"},null,-1),E=l({__name:"NewPassword",props:{id:null},setup(o){const a=o,t=b(),c=()=>t.push({name:"home"}),{id:n}=r(a),{get:u}=v(),p=m(()=>{const e=u(n.value);return e||(c(),"")});return(e,R)=>(i(),d("div",k,[D,s("div",B,[N,f(P,{class:"col-auto",password:_(p)},null,8,["password"]),$]),s("div",{class:"row"},[C,s("div",{class:"col-auto"},[s("button",{class:"btn btn-warning",onClick:c},"Home")]),H])]))}});export{E as default};