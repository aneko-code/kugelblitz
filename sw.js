/* Kugelblitz offline: everything is cached on first visit, the game then starts without network.
   Updates load quietly in the background and are active on the next start. */
const V='kugelblitz-9391fe60cf';
const ASSETS=["./", "index.html", "manifest.webmanifest", "icon-180.png", "icon-192.png", "icon-512.png", "fonts/fonts.css", "fonts/barlow-sc-500.woff2", "fonts/barlow-sc-600.woff2", "fonts/barlow-sc-700.woff2", "fonts/barlow-sc-800.woff2", "fonts/tilt-neon-400.woff2"];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(V).then(c=>c.addAll(ASSETS.map(u=>new Request(u,{cache:'reload'})))).then(()=>self.skipWaiting())); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('kugelblitz-')&&k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener('fetch',e=>{
  const r=e.request; if(r.method!=='GET'||new URL(r.url).origin!==location.origin) return;
  const key=r.mode==='navigate'?'index.html':r;
  e.respondWith(caches.open(V).then(async c=>{
    const hit=await c.match(key,{ignoreSearch:true});
    const net=fetch(r).then(res=>{ if(res&&res.ok&&r.mode!=='navigate') c.put(r,res.clone()); return res; }).catch(()=>null);
    if(hit){ e.waitUntil(net); return hit; }
    return (await net)||new Response('Offline',{status:503,headers:{'Content-Type':'text/plain'}});
  }));
});
