/**
 * pwa.js — Service Worker registration + install banner + update banner.
 * Loaded after data.js, so uiTranslations is always available.
 */

// ── Service Worker ────────────────────────────────────────────────────────────
if ('serviceWorker' in navigator) {
  let refreshing = false;

  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then((reg) => {
        console.log('[PWA] Service Worker зареєстровано:', reg.scope);

        // Перевіряємо оновлення одразу
        reg.update();

        // І коли користувач повертається в додаток
        document.addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'visible') {
            reg.update();
          }
        });

        // Коли з'явився новий Service Worker
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          if (!newWorker) return;

          newWorker.addEventListener('statechange', () => {
            // Новий SW встановлений і є старий, який зараз керує сторінкою
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              showUpdateBanner(reg);
            }
          });
        });
      })
      .catch((err) => console.error('[PWA] Помилка реєстрації SW:', err));
  });

  // Коли новий SW взяв контроль — перезавантажуємо сторінку
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!refreshing) {
      refreshing = true;
      window.location.reload();
    }
  });
}

// ── Install prompt ────────────────────────────────────────────────────────────
let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
});

// Показуємо кнопку встановлення через 3 секунди тільки якщо доступно
setTimeout(() => {
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
                       window.matchMedia('(display-mode: fullscreen)').matches ||
                       window.matchMedia('(display-mode: minimal-ui)').matches ||
                       window.navigator.standalone;

  if (!document.getElementById('pwa-install-banner') &&
      !document.getElementById('pwa-update-banner') &&
      deferredPrompt && !isStandalone) {
    showInstallBanner();
  }
}, 3000);

window.addEventListener('appinstalled', () => {
  deferredPrompt = null;
  const banner = document.getElementById('pwa-install-banner');
  if (banner) banner.remove();
});

// ── Helpers ───────────────────────────────────────────────────────────────────
function getPwaLang() {
  const saved = localStorage.getItem('tarot-lang');
  if (saved === 'uk' || saved === 'en') return saved;
  return navigator.language.startsWith('uk') ? 'uk' : 'en';
}

function showInstallBanner() {
  const pwaLang = getPwaLang();
  const strings = uiTranslations[pwaLang];

  const banner = document.createElement('div');
  banner.id = 'pwa-install-banner';
  banner.className = 'fixed bottom-5 left-1/2 -translate-x-1/2 z-[9999] w-[calc(100%-40px)] max-w-[340px]';
  banner.innerHTML = `
    <div class="glass-panel p-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/10 text-white font-sans backdrop-blur-md">
      <img src="icons/icon-192.png" width="40" height="40" class="rounded-xl shrink-0 shadow-md" alt="Icon">
      <div class="flex-1 min-w-0">
        <div class="font-bold text-sm text-white mb-0.5 truncate">${strings.pwaInstallTitle}</div>
        <div class="text-xs text-gray-300 truncate">${strings.pwaInstallDesc}</div>
      </div>
      <button id="pwa-install-btn" class="bg-tarot-gold text-tarot-dark px-3.5 py-2 rounded-lg font-bold text-sm hover:bg-yellow-400 transition-colors shrink-0">${strings.pwaInstallYes}</button>
      <button id="pwa-dismiss-btn" class="text-gray-400 hover:text-white px-2 py-1 text-xl leading-none transition-colors shrink-0">&times;</button>
    </div>
  `;
  document.body.appendChild(banner);

  document.getElementById('pwa-install-btn').addEventListener('click', async () => {
    banner.remove();
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log('[PWA] Результат встановлення:', outcome);
      deferredPrompt = null;
    } else {
      alert(strings.pwaInstallBlocked);
    }
  });

  document.getElementById('pwa-dismiss-btn').addEventListener('click', () => {
    banner.remove();
    deferredPrompt = null;
  });
}

function showUpdateBanner(reg) {
  // Не показуємо, якщо вже є
  if (document.getElementById('pwa-update-banner')) return;

  const pwaLang = getPwaLang();
  const strings = uiTranslations[pwaLang];

  const banner = document.createElement('div');
  banner.id = 'pwa-update-banner';
  banner.className = 'fixed bottom-5 left-1/2 -translate-x-1/2 z-[9999] w-[calc(100%-40px)] max-w-[340px]';
  banner.innerHTML = `
    <div class="glass-panel p-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-tarot-gold/40 text-white font-sans backdrop-blur-md">
      <div class="w-10 h-10 rounded-xl bg-tarot-gold/20 flex items-center justify-center shrink-0">
        <i class="fa-solid fa-rotate text-tarot-gold text-lg"></i>
      </div>
      <div class="flex-1 min-w-0">
        <div class="font-bold text-sm text-white mb-0.5 truncate">${strings.pwaUpdateTitle}</div>
        <div class="text-xs text-gray-300 truncate">${strings.pwaUpdateDesc}</div>
      </div>
      <button id="pwa-update-btn" class="bg-tarot-gold text-tarot-dark px-3.5 py-2 rounded-lg font-bold text-sm hover:bg-yellow-400 transition-colors shrink-0">${strings.pwaUpdateYes}</button>
      <button id="pwa-update-dismiss" class="text-gray-400 hover:text-white px-2 py-1 text-xl leading-none transition-colors shrink-0">&times;</button>
    </div>
  `;
  document.body.appendChild(banner);

  document.getElementById('pwa-update-btn').addEventListener('click', () => {
    banner.remove();
    // Форсуємо активацію нового Service Worker
    if (reg.waiting) {
      reg.waiting.postMessage({ type: 'SKIP_WAITING' });
    } else {
      // Якщо waiting вже немає — просто перезавантажуємо
      window.location.reload();
    }
  });

  document.getElementById('pwa-update-dismiss').addEventListener('click', () => {
    banner.remove();
  });
}
