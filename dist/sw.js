if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const c=e=>i(e,t),d={module:{uri:t},exports:o,require:c};s[t]=Promise.all(n.map((e=>d[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-56a10583"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-bd62ebf0.css",revision:null},{url:"assets/index-c5b34e6d.js",revision:null},{url:"index.html",revision:"f123525fc60c9cd37966e2fc95b4dbc5"},{url:"registerSW.js",revision:"cdf576ce5d54a5d45b71d0309b7bfd89"},{url:"manifest.webmanifest",revision:"c795a90ebc9a2fee591733432b9c8ac7"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
