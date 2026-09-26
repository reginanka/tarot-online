// Бампніть CACHE_VERSION (або CACHE_NAME) при кожному деплої зі значними змінами —
// це гарантує, що старий кеш видалиться і клієнти зможуть отримати свіжі файли.
const CACHE_VERSION = 'v1.3';
const CACHE_NAME = `tarot-cache-${CACHE_VERSION}`;

const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './pwa.js',
  './manifest.json',
  './favicon.ico',
  './cards.js',
  './data.js',
  './analysis.js',
  './celtic_cross_positions.js',
];

// Інсталяція: кешуємо ресурси. НЕ викликаємо skipWaiting() тут —
// новий SW залишається в стані waiting, доки користувач не натисне «Оновити».
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Кешування ресурсів...');
      return cache.addAll(urlsToCache);
    })
  );
});

// Активація: видаляємо старі кеші і беремо контроль над клієнтами
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

// Cache-first з мережевим fallback (офлайн)
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).catch(() => {
          // опційний fallback для навігації
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
          return new Response('', { status: 404, statusText: 'Offline' });
        })
      );
    })
  );
});

// Кнопка «Оновити» у банері надсилає SKIP_WAITING → новий SW стає активним
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
