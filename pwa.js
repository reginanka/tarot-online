if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => {
        console.log('Service Worker зареєстровано успішно!');

        // Примусово опитуємо GitHub Pages, чи є нова версія sw.js
        reg.update();

        // Слідкуємо за появою нової версії
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          
          newWorker.addEventListener('statechange', () => {
            // Коли нова версія повністю завантажилася в браузер і чекає (waiting)
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              
              // 🔔 ТУТ ВИКЛИКАЙТЕ ВАШЕ ВІКОНЦЕ СПОВІЩЕННЯ
              // Замініть `showYourUpdateWindow` на назву вашої функції або логіки, яка показує вікно.
              // Коли користувач натисне кнопку "ТАК/ОНОВИТИ", має виконатися код нижче:
              
              /* Приклад інтеграції з вашою кнопкою:
              buttonUpdate.onclick = () => {
                newWorker.postMessage({ type: 'SKIP_WAITING' });
              };
              */
              
              console.log('Доступна нова версія! Покажіть віконце користувачу.');
            }
          });
        });
      })
      .catch(err => console.log('Помилка реєстрації SW:', err));
  });

  // Цей код спрацює ОДРАЗУ після того, як користувач натисне кнопку "Оновити".
  // Браузер перезавантажить сторінку один раз, щоб підтягнути новий інтерфейс.
  let refreshing = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!refreshing) {
      refreshing = true;
      window.location.reload();
    }
  });
}
