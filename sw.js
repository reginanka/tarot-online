// Бампніть цю версію при кожному деплої зі значними змінами —
// це гарантує, що старий кеш видалиться і всі клієнти отримають свіжі файли.
const CACHE_VERSION = 'v14';
const CACHE_NAME = `tarot-pwa-${CACHE_VERSION}`;

// CDN base for card images (tarot-cards repo)
const CARDS_CDN = 'https://cdn.jsdelivr.net/gh/reginanka/tarot-cards@main/cards/';

// Generate all 78 card + back URLs
const CARD_FILES = [
  // Старші Аркани
  'm00.webp','m01.webp','m02.webp','m03.webp','m04.webp','m05.webp',
  'm06.webp','m07.webp','m08.webp','m09.webp','m10.webp','m11.webp',
  'm12.webp','m13.webp','m14.webp','m15.webp','m16.webp','m17.webp',
  'm18.webp','m19.webp','m20.webp','m21.webp',
  // Жезли
  'w01.webp','w02.webp','w03.webp','w04.webp','w05.webp','w06.webp',
  'w07.webp','w08.webp','w09.webp','w10.webp','w11.webp','w12.webp',
  'w13.webp','w14.webp',
  // Кубки
  'c01.webp','c02.webp','c03.webp','c04.webp','c05.webp','c06.webp',
  'c07.webp','c08.webp','c09.webp','c10.webp','c11.webp','c12.webp',
  'c13.webp','c14.webp',
  // Мечі
  's01.webp','s02.webp','s03.webp','s04.webp','s05.webp','s06.webp',
  's07.webp','s08.webp','s09.webp','s10.webp','s11.webp','s12.webp',
  's13.webp','s14.webp',
  // Пентаклі
  'p01.webp','p02.webp','p03.webp','p04.webp','p05.webp','p06.webp',
  'p07.webp','p08.webp','p09.webp','p10.webp','p11.webp','p12.webp',
  'p13.webp','p14.webp',
  // Рубашка
  'card-back.webp',
];

const CARD_ASSETS = CARD_FILES.map((f) => CARDS_CDN + f);

// Локальні ресурси (без папки images/cards — карти тепер з CDN)
const LOCAL_ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './data.js',
  './cards.js',
  './pwa.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
];

// Все, що попередньо кешуємо при install
const STATIC_ASSETS = [...LOCAL_ASSETS, ...CARD_ASSETS];

// Зовнішні ресурси (CDN)
const CDN_HOSTS = [
  'cdn.tailwindcss.com',
  'unpkg.com',
  'cdnjs.cloudflare.com',
  'cdn.jsdelivr.net',
  'fonts.googleapis.com',
  'fonts.gstatic.com',
];

// ── Install: кешуємо локальні файли + всі карти з CDN ───────────────────────
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      console.log('[SW] Кешування статичних ресурсів і карт...');
      // Локальні — обовʼязково
      await cache.addAll(LOCAL_ASSETS);
      // Карти — по одній, щоб одна невдала не зламала весь install
      for (const url of CARD_ASSETS) {
        try {
          await cache.add(url);
        } catch (err) {
          console.warn('[SW] Не вдалося закешувати:', url, err);
        }
      }
      console.log('[SW] Встановлено успішно');
      // Не викликаємо skipWaiting() одразу — чекаємо команду від клієнта
      // (щоб користувач міг підтвердити оновлення через банер)
    })
  );
});

// ── Activate: видаляємо старі кеші ──────────────────────────────────────────
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

// ── Message: дозволяємо клієнту форсувати skipWaiting ───────────────────────
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// ── Fetch ───────────────────────────────────────────────────────────────────
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  if (event.request.method !== 'GET') return;
  if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {
    return;
  }

  const isLocal = url.origin === self.location.origin;
  const isCDN = CDN_HOSTS.some((host) => url.hostname.includes(host));
  const isCardImage =
    url.hostname.includes('cdn.jsdelivr.net') &&
    url.pathname.includes('/tarot-cards/') &&
    url.pathname.match(/\.(webp|png|jpg|jpeg)$/i);
  const isImage =
    event.request.destination === 'image' ||
    url.pathname.match(/\.(png|jpg|jpeg|webp|gif|svg)$/i);

  // Картинки карт — cache-first (миттєво офлайн)
  if (isCardImage || (isImage && isLocal)) {
    event.respondWith(cacheFirst(event.request));
  } else if (isLocal || isCDN) {
    event.respondWith(staleWhileRevalidate(event.request));
  }
});

// Cache First — ідеально для картинок
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

// Stale While Revalidate
async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request, { ignoreSearch: true });

  const fetchPromise = fetch(request)
    .then((response) => {
      if (response.ok) {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => cached);

  return cached || fetchPromise;
}
