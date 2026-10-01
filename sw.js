
const CACHE_VERSION = 'v2.6';
const CACHE_NAME = `tarot-cache-${CACHE_VERSION}`;

const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './pwa.js',
  './manifest.json',
  './favicon.ico',
  './dynamic_data.js',
  './data/cards.json',
  './data.js',
  './analysis.js',
  './data/spreads/celtic-cross.json',
  './data/spreads/one-card.json',
  './data/spreads/three-cards.json',
  './data/spreads/yes-no.json',
  './data/spreads/love-triangle.json',
  './data/spreads/daily-path.json',
  './data/spreads/birthday.json',
  './data/spreads/mind-body-spirit.json',
];

self.addEventListener('install', (event) => {
  // Не викликаємо skipWaiting автоматично — чекаємо підтвердження користувача
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log(`[SW] Кешування ресурсів ${CACHE_VERSION}...`);
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames.map((cache) => {
            if (cache !== CACHE_NAME) {
              console.log('[SW] Видаляємо старий кеш:', cache);
              return caches.delete(cache);
            }
          })
        )
      )
      .then(() => self.clients.claim())
  );
});

// Network-first для коду та даних із кешованим fallback для офлайну
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = event.request.url;
  const isCodeOrData = url.includes('/data/') ||
                       url.endsWith('.js') ||
                       url.endsWith('.json') ||
                       url.endsWith('.html') ||
                       url.endsWith('.css') ||
                       event.request.mode === 'navigate';

  if (isCodeOrData) {
    // Network-first: завжди намагаємося взяти найсвіжіше з мережі
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) return cachedResponse;
            if (event.request.mode === 'navigate') {
              return caches.match('./index.html');
            }
            return new Response('', { status: 404, statusText: 'Offline' });
          });
        })
    );
  } else {
    // Cache-first для статичних картинок
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) return cachedResponse;
        return fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        });
      })
    );
  }
});

// Кнопка «Оновити» у банері надсилає SKIP_WAITING → новий SW стає активним
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
