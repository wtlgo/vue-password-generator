if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const d=e=>i(e,o),c={module:{uri:o},exports:l,require:d};s[o]=Promise.all(n.map((e=>c[e]||d(e)))).then((e=>(r(...e),l)))}}define(["./workbox-30e9d199"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/About-7acc2e60.js",revision:null},{url:"assets/Home-4efc0de6.js",revision:null},{url:"assets/Home-c10fda05.css",revision:null},{url:"assets/index-00ff808f.js",revision:null},{url:"assets/index-4de4f80b.css",revision:null},{url:"assets/NewPassword-cc1a2570.css",revision:null},{url:"assets/NewPassword-d15e0048.js",revision:null},{url:"assets/password-7db266bb.js",revision:null},{url:"index.html",revision:"0b3fc040e6532538b78bd16ae5d4aaa1"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"de737e3ad4542754b6900a10e87d4d21"},{url:"icon-192.png",revision:"ad32e093e2069215905cce9fa6dc6032"},{url:"icon-512.png",revision:"ab1d736c5a1d0bf4a2078b60846fc530"},{url:"icon-192-maskable.png",revision:"bb4eac5e613993c96f215dfba35a4dac"},{url:"icon-512-maskable.png",revision:"e263d6bc7fcef96dc3b807f1b9a2ced8"},{url:"manifest.webmanifest",revision:"df2418aba2849e11db0af6db0005f9a3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
