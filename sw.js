// Змінюйте цю версію (наприклад, v1.1, v1.2), коли робите капітальні зміни в коді
const CACHE_NAME = 'tarot-cache-v1.1'; 

const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/pwa.js',
  '/manifest.json',
  '/favicon.ico',
  '/cards.js',
  '/data.js',
  '/analysis.js',
  '/celtic_cross_positions.js'
];

// Інсталяція: завантажуємо файли в кеш
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Кешування ресурсів...');
        return cache.addAll(urlsToCache);
      })
  );
});

// Активація: ТУТ КЛЮЧОВЕ ВИПРАВЛЕННЯ, старий кеш тепер точно видаляється!
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Видаляємо старий кеш користувача:', cache);
            return caches.delete(cache); // Тепер старі баговані версії зітруться
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Стратегія кешування: спочатку беремо з кешу (ідеально для офлайну)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

// Слухач для вашої кнопки у віконці. Коли користувач натисне "Оновити", 
// цей код змусить новий Service Worker негайно стати активним.
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
