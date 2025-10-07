// hooks/useScrollLock.ts
import { useLayoutEffect, useRef } from 'react';

export const useScrollLock = (isLocked: boolean) => {
  const scrollYRef = useRef<number>(0);
  const isLockedRef = useRef<boolean>(false);

  useLayoutEffect(() => {
    // Если состояние не изменилось, ничего не делаем
    if (isLockedRef.current === isLocked) return;
    
    isLockedRef.current = isLocked;

    if (isLocked) {
      // Сохраняем текущую позицию скролла
      scrollYRef.current = window.scrollY;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      // Сохраняем текущие стили
      const prev = {
        position: document.body.style.position,
        top: document.body.style.top,
        width: document.body.style.width,
        overflowY: document.body.style.overflowY,
        paddingRight: document.body.style.paddingRight,
        touchAction: (document.body.style as any).touchAction,
        overscrollBehavior: (document.body.style as any).overscrollBehavior,
      };

      // Блокируем скролл
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.width = '100%';
      document.body.style.overflowY = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      (document.body.style as any).touchAction = 'none';
      (document.body.style as any).overscrollBehavior = 'none';

      // Сохраняем предыдущие стили для восстановления
      (document.body as any)._scrollLockPrev = prev;
    } else {
      // Восстанавливаем скролл
      const prev = (document.body as any)._scrollLockPrev;
      
      if (prev) {
        document.body.style.position = prev.position || '';
        document.body.style.top = prev.top || '';
        document.body.style.width = prev.width || '';
        document.body.style.overflowY = prev.overflowY || '';
        document.body.style.paddingRight = prev.paddingRight || '';
        (document.body.style as any).touchAction = prev.touchAction || '';
        (document.body.style as any).overscrollBehavior = prev.overscrollBehavior || '';
        
        // Удаляем сохраненные стили
        delete (document.body as any)._scrollLockPrev;
      }

      // Восстанавливаем позицию скролла
      window.scrollTo(0, scrollYRef.current);
    }
  }, [isLocked]);
}