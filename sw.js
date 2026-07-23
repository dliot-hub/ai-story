const CACHE = 'story-weaver-v1';
const FILES = [
  '/ai-story/',
  '/ai-story/index.html',
  '/ai-story/ai-chat.html',
  '/ai-story/manifest.json',
  '/ai-story/icon-192.png',
  '/ai-story/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
