if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const c=e=>i(e,o),d={module:{uri:o},exports:l,require:c};s[o]=Promise.all(n.map((e=>d[e]||c(e)))).then((e=>(r(...e),l)))}}define(["./workbox-30e9d199"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/About-38549e4c.js",revision:null},{url:"assets/About-e305fe1a.css",revision:null},{url:"assets/Home-bf953bd8.js",revision:null},{url:"assets/Home-d2bc3fcc.css",revision:null},{url:"assets/index-bfd5495b.css",revision:null},{url:"assets/index-d040dfa5.js",revision:null},{url:"assets/NewPassword-b859be9f.css",revision:null},{url:"assets/NewPassword-da5286e0.js",revision:null},{url:"assets/password-00a1ae9a.js",revision:null},{url:"index.html",revision:"2a7c336ac4add9ad650630298bcf81c0"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"de737e3ad4542754b6900a10e87d4d21"},{url:"icons/icon-192.png",revision:"ad32e093e2069215905cce9fa6dc6032"},{url:"icons/icon-512.png",revision:"ab1d736c5a1d0bf4a2078b60846fc530"},{url:"icons/icon-192-maskable.png",revision:"bb4eac5e613993c96f215dfba35a4dac"},{url:"icons/icon-512-maskable.png",revision:"e263d6bc7fcef96dc3b807f1b9a2ced8"},{url:"manifest.webmanifest",revision:"f45f1f91691e71171db978fb3951798e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
