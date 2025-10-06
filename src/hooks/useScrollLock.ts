// hooks/useScrollLock.ts
import { useLayoutEffect } from 'react';

export const useScrollLock = (isLocked: boolean) => {
  useLayoutEffect(() => {
    if (!isLocked) return;

    const scrollY = window.scrollY;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    const prev = {
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
      overflowY: document.body.style.overflowY,
      paddingRight: document.body.style.paddingRight,
      touchAction: (document.body.style as any).touchAction,
      overscrollBehavior: (document.body.style as any).overscrollBehavior,
    } as const;

    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    document.body.style.overflowY = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    (document.body.style as any).touchAction = 'none';
    (document.body.style as any).overscrollBehavior = 'none';

    return () => {
      document.body.style.position = prev.position;
      document.body.style.top = prev.top;
      document.body.style.width = prev.width;
      document.body.style.overflowY = prev.overflowY;
      document.body.style.paddingRight = prev.paddingRight;
      (document.body.style as any).touchAction = prev.touchAction || '';
      (document.body.style as any).overscrollBehavior = prev.overscrollBehavior || '';
      window.scrollTo(0, scrollY);
    };
  }, [isLocked]);
}