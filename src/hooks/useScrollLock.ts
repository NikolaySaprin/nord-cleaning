"use client"

import { useEffect } from 'react'

/**
 * Hook для блокировки скролла страницы
 * @param isLocked - флаг, указывающий, нужно ли блокировать скролл
 */
export const useScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    if (isLocked) {
      // Сохраняем текущую позицию скролла
      const scrollY = window.scrollY;
      
      // Блокируем скролл
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Разблокируем скролл и восстанавливаем позицию
      const scrollY = document.body.style.top;
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      
      // Восстанавливаем позицию скролла
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      }
    }

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isLocked]);
};
