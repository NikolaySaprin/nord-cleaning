'use client';

import { useState, useCallback } from 'react';

export const useSuccessNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState<string>('');

  const showNotification = useCallback((customMessage?: string) => {
    if (customMessage) {
      setMessage(customMessage);
    } else {
      setMessage('Спасибо за заявку!\nМы свяжемся с Вами в ближайшее время');
    }
    
    setIsVisible(true);
    
    // Скрываем уведомление через 7 секунд
    setTimeout(() => {
      setIsVisible(false);
    }, 7000);
  }, []);

  const hideNotification = useCallback(() => {
    setIsVisible(false);
  }, []);

  return {
    isVisible,
    message,
    showNotification,
    hideNotification
  };
};
