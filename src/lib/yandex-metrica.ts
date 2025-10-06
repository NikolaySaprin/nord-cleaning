// Яндекс.Метрика утилиты
declare global {
  interface Window {
    ym: (counterId: number, method: string, target: string, params?: any) => void;
  }
}

const YANDEX_METRICA_ID = 104366457;

// Инициализация Яндекс.Метрики
export const initYandexMetrica = () => {
  if (typeof window !== 'undefined') {
    // Создаем скрипт для загрузки Яндекс.Метрики
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

      ym(${YANDEX_METRICA_ID}, "init", {
           clickmap:true,
           trackLinks:true,
           accurateTrackBounce:true,
           webvisor:true
      });
    `;
    document.head.appendChild(script);

    // Создаем noscript тег
    const noscript = document.createElement('noscript');
    const img = document.createElement('img');
    img.src = `https://mc.yandex.ru/watch/${YANDEX_METRICA_ID}`;
    img.style.position = 'absolute';
    img.style.left = '-9999px';
    img.alt = '';
    noscript.appendChild(img);
    document.body.appendChild(noscript);
  }
};

// Отправка события в Яндекс.Метрику
export const sendYandexMetricaEvent = (eventName: string, params?: any) => {
  if (typeof window !== 'undefined' && window.ym) {
    window.ym(YANDEX_METRICA_ID, 'reachGoal', eventName, params);
  }
};

// События для форм
export const YandexMetricaEvents = {
  FORM_PROBNAYA_STIRKA: 'form-probnaya-stirka',
  FORM_SERVIS: 'form-servis', 
  FORM_KEIS: 'form-keis',
  PHONE: 'phone',
  WHATS: 'whats',
  TELEGRAM: 'telegram'
} as const;

// Хук для отправки событий
export const useYandexMetrica = () => {
  const trackEvent = (eventName: string, params?: any) => {
    sendYandexMetricaEvent(eventName, params);
  };

  return { trackEvent };
};
