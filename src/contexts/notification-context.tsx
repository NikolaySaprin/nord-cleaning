'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useSuccessNotification } from '@/hooks/use-success-notification';
import { SuccessNotification } from '@/components/ui/success-notification';

interface NotificationContextType {
  showSuccessNotification: (message?: string) => void;
  hideSuccessNotification: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

interface NotificationProviderProps {
  children: ReactNode;
}

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
