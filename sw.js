if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const d=e=>i(e,o),a={module:{uri:o},exports:l,require:d};s[o]=Promise.all(n.map((e=>a[e]||d(e)))).then((e=>(r(...e),l)))}}define(["./workbox-30e9d199"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/About-d5400113.js",revision:null},{url:"assets/Home-a0234fdb.js",revision:null},{url:"assets/Home-c10fda05.css",revision:null},{url:"assets/index-4de4f80b.css",revision:null},{url:"assets/index-5089b2d9.js",revision:null},{url:"assets/NewPassword-8ea994ba.js",revision:null},{url:"assets/NewPassword-a39b2b88.css",revision:null},{url:"assets/password-fed684d8.js",revision:null},{url:"index.html",revision:"64297c9b6da03d3f148a31383f9aaf1c"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"de737e3ad4542754b6900a10e87d4d21"},{url:"icon-192.png",revision:"ad32e093e2069215905cce9fa6dc6032"},{url:"icon-512.png",revision:"ab1d736c5a1d0bf4a2078b60846fc530"},{url:"icon-192-maskable.png",revision:"bb4eac5e613993c96f215dfba35a4dac"},{url:"icon-512-maskable.png",revision:"e263d6bc7fcef96dc3b807f1b9a2ced8"},{url:"manifest.webmanifest",revision:"df2418aba2849e11db0af6db0005f9a3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
