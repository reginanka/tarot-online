// Бампніть цю версію при кожному деплої зі значними змінами —
// це гарантує, що старий кеш видалиться і всі клієнти отримають свіжі файли.
const CACHE_VERSION = 'v4';
const CACHE_NAME = `tarot-pwa-${CACHE_VERSION}`;

// Всі локальні ресурси для попереднього кешування
const STATIC_ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './data.js',
  './cards-data.js',
  // Зображення карт — Старші Аркани
  './images/cards/m00.webp',
  './images/cards/m01.webp',
  './images/cards/m02.webp',
  './images/cards/m03.webp',
  './images/cards/m04.webp',
  './images/cards/m05.webp',
  './images/cards/m06.webp',
  './images/cards/m07.webp',
  './images/cards/m08.webp',
  './images/cards/m09.webp',
  './images/cards/m10.webp',
  './images/cards/m11.webp',
  './images/cards/m12.webp',
  './images/cards/m13.webp',
  './images/cards/m14.webp',
  './images/cards/m15.webp',
  './images/cards/m16.webp',
  './images/cards/m17.webp',
  './images/cards/m18.webp',
  './images/cards/m19.webp',
  './images/cards/m20.webp',
  './images/cards/m21.webp',
  // Жезли
  './images/cards/w01.webp',
  './images/cards/w02.webp',
  './images/cards/w03.webp',
  './images/cards/w04.webp',
  './images/cards/w05.webp',
  './images/cards/w06.webp',
  './images/cards/w07.webp',
  './images/cards/w08.webp',
  './images/cards/w09.webp',
  './images/cards/w10.webp',
  './images/cards/w11.webp',
  './images/cards/w12.webp',
  './images/cards/w13.webp',
  './images/cards/w14.webp',
  // Кубки
  './images/cards/c01.webp',
  './images/cards/c02.webp',
  './images/cards/c03.webp',
  './images/cards/c04.webp',
  './images/cards/c05.webp',
  './images/cards/c06.webp',
  './images/cards/c07.webp',
  './images/cards/c08.webp',
  './images/cards/c09.webp',
  './images/cards/c10.webp',
  './images/cards/c11.webp',
  './images/cards/c12.webp',
  './images/cards/c13.webp',
  './images/cards/c14.webp',
  // Мечі
  './images/cards/s01.webp',
  './images/cards/s02.webp',
  './images/cards/s03.webp',
  './images/cards/s04.webp',
  './images/cards/s05.webp',
  './images/cards/s06.webp',
  './images/cards/s07.webp',
  './images/cards/s08.webp',
  './images/cards/s09.webp',
  './images/cards/s10.webp',
  './images/cards/s11.webp',
  './images/cards/s12.webp',
  './images/cards/s13.webp',
  './images/cards/s14.webp',
  // Пентаклі
  './images/cards/p01.webp',
  './images/cards/p02.webp',
  './images/cards/p03.webp',
  './images/cards/p04.webp',
  './images/cards/p05.webp',
  './images/cards/p06.webp',
  './images/cards/p07.webp',
  './images/cards/p08.webp',
  './images/cards/p09.webp',
  './images/cards/p10.webp',
  './images/cards/p11.webp',
  './images/cards/p12.webp',
  './images/cards/p13.webp',
  './images/cards/p14.webp',
  // Рубашка
  './images/cards/card-back.png',
  // Іконки PWA
  './icons/icon-192.png',
  './icons/icon-512.png',
];

// Зовнішні ресурси (CDN)
const CDN_HOSTS = [
  'cdn.tailwindcss.com',
  'unpkg.com',
  'cdnjs.cloudflare.com',
  'cdn.jsdelivr.net',
  'fonts.googleapis.com',
  'fonts.gstatic.com',
];

// ── Install: кешуємо всі локальні ресурси ──────────────────────────────────
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Кешування статичних ресурсів...');
      return cache.addAll(STATIC_ASSETS);
    }).then(() => {
      console.log('[SW] Встановлено успішно');
      return self.skipWaiting();
    })
  );
});

// ── Activate: видаляємо старі кеші (спрацює автоматично при зміні CACHE_VERSION) ──
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => {
            console.log('[SW] Видалення старого кешу:', key);
            return caches.delete(key);
          })
      )
    ).then(() => {
      console.log('[SW] Активовано');
      return self.clients.claim();
    })
  );
});

// ── Fetch: і локальні, і CDN ресурси йдуть через stale-while-revalidate ────
// Це означає: користувач одразу бачить кешовану версію (швидко, працює офлайн),
// але в фоні завжди йде запит по мережі, і кеш оновлюється свіжими файлами.
// Завдяки цьому наступний візит уже підхопить нову версію без ручного очищення кешу.
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  if (event.request.method !== 'GET') return;
  if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {
    return;
  }

  const isLocal = url.origin === self.location.origin;
  const isCDN = CDN_HOSTS.some((host) => url.hostname.includes(host));
  const isImage = request.destination === 'image' || url.pathname.match(/\.(png|jpg|jpeg|webp|gif|svg)$/i);

  if (isImage && isLocal) {
    event.respondWith(cacheFirst(event.request));
  } else if (isLocal || isCDN) {
    event.respondWith(staleWhileRevalidate(event.request));
  }
});

// Cache First — ідеально для картинок, щоб вони миттєво вантажились офлайн
async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request, { ignoreSearch: true });
  if (cached) {
    return cached;
  }
  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    return new Response('', { status: 404, statusText: 'Offline' });
  }
}

// Stale While Revalidate — повертаємо кеш (якщо є) і одразу оновлюємо у фоні
async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request, { ignoreSearch: true });

  const fetchPromise = fetch(request).then((response) => {
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  }).catch(() => cached);

  return cached || fetchPromise;
}
