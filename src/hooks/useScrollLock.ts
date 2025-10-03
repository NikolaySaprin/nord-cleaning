// hooks/useScrollLock.ts
import { useLayoutEffect } from 'react';

export const useScrollLock = (isLocked: boolean) => {
  useLayoutEffect(() => {
    if (!isLocked) return;

    // Сохраняем текущую позицию скролла и ширину скроллбара
    const scrollY = window.scrollY;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    // Применяем стили для блокировки скролла :cite[1]:cite[5]
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    document.body.style.overflowY = 'hidden'; // Резервное свойство для блокировки скролла
    document.body.style.paddingRight = `${scrollbarWidth}px`; // Компенсируем исчезновение скроллбара

    return () => {
      // Восстанавливаем стили
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflowY = '';
      document.body.style.paddingRight = '';

      // Восстанавливаем позицию скролла :cite[1]
      window.scrollTo(0, scrollY);
    };
  }, [isLocked]);
}