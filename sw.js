const CACHE_NAME = 'breathe-app-v2'; // Bumped version number
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  // Audio Files 1-36
  '/sleep1.mp3', '/sleep2.mp3', '/sleep3.mp3', '/sleep4.mp3', '/sleep5.mp3',
  '/sleep6.mp3', '/sleep7.mp3', '/sleep8.mp3', '/sleep9.mp3', '/sleep10.mp3',
  '/sleep11.mp3', '/sleep12.mp3', '/sleep13.mp3', '/sleep14.mp3', '/sleep15.mp3',
  '/sleep16.mp3', '/sleep17.mp3', '/sleep18.mp3', '/sleep19.mp3', '/sleep20.mp3',
  '/sleep21.mp3', '/sleep22.mp3', '/sleep23.mp3', '/sleep24.mp3', '/sleep25.mp3',
  '/sleep26.mp3', '/sleep27.mp3', '/sleep28.mp3', '/sleep29.mp3', '/sleep30.mp3',
  '/sleep31.mp3', '/sleep32.mp3', '/sleep33.mp3', '/sleep34.mp3', '/sleep35.mp3',
  '/sleep36.mp3'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});