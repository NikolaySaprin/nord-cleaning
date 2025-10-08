'use client';

import React, { createContext, useContext } from 'react';
import { useSuccessNotification } from '@/hooks/use-success-notification';
import { SuccessNotification } from '@/components/ui/success-notification';
import { NotificationContextType, NotificationProviderProps } from '@/types/components';

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
  const { isVisible, message, showNotification, hideNotification } = useSuccessNotification();

  const showSuccessNotification = (customMessage?: string) => {
    showNotification(customMessage);
  };

  const hideSuccessNotification = () => {
    hideNotification();
  };

  return (
    <NotificationContext.Provider value={{ showSuccessNotification, hideSuccessNotification }}>
      {children}
      <SuccessNotification isVisible={isVisible} message={message} />
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};
