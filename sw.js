/* Service worker Latihan CPNS: cache lalu perbarui di latar belakang.
   Ubah VERSI setiap kali index.html diganti agar cache lama dibersihkan. */
const VERSI = 'latihan-cpns-v1';
const ASET = ['./', 'index.html', 'manifest.webmanifest',
  'icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSI).then(c => c.addAll(ASET)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSI).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    caches.open(VERSI).then(async cache => {
      const tersimpan = await cache.match(req, { ignoreSearch: true });
      const jaringan = fetch(req).then(res => {
        if (res && res.ok) cache.put(req, res.clone());
        return res;
      }).catch(() => null);
      if (tersimpan) { e.waitUntil(jaringan); return tersimpan; }
      const res = await jaringan;
      return res || (req.mode === 'navigate' ? cache.match('index.html') : Response.error());
    })
  );
});
