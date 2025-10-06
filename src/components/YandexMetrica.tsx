'use client';

import { useEffect } from 'react';
import { initYandexMetrica } from '@/lib/yandex-metrica';

export function YandexMetrica() {
  useEffect(() => {
    initYandexMetrica();
  }, []);

  return null;
}
