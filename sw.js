if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const d=e=>i(e,o),c={module:{uri:o},exports:l,require:d};s[o]=Promise.all(n.map((e=>c[e]||d(e)))).then((e=>(r(...e),l)))}}define(["./workbox-30e9d199"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/About-06f7e9e3.js",revision:null},{url:"assets/About-d8a88c5e.css",revision:null},{url:"assets/Home-bd85882b.js",revision:null},{url:"assets/Home-cc70b70c.css",revision:null},{url:"assets/index-a4f941bb.css",revision:null},{url:"assets/index-f4fc280d.js",revision:null},{url:"assets/NewPassword-1ff99f62.css",revision:null},{url:"assets/NewPassword-807f485b.js",revision:null},{url:"assets/password-d87fbd46.js",revision:null},{url:"index.html",revision:"79782d1130a83006a6dd629171da718d"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"8ab8867250506f12a9fbf8a9513c9e65"},{url:"icons/icon-192.png",revision:"146cd78571fe2cd76b54d627c3ac8869"},{url:"icons/icon-512.png",revision:"04fa338584ad553e65f680283d7e36e5"},{url:"icons/icon-192-maskable.png",revision:"351746d6aae6e46541167a20bd59ecad"},{url:"icons/icon-512-maskable.png",revision:"187d5005ff39b0dc1e64b05beec32404"},{url:"images/background.png",revision:"59a647446d7c2389ed4aa209f4eb612e"},{url:"manifest.webmanifest",revision:"f45f1f91691e71171db978fb3951798e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
