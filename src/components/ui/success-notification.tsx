'use client';

import React from 'react';
import { SuccessNotificationProps } from '@/types/components';

export const SuccessNotification: React.FC<SuccessNotificationProps> = ({ 
  isVisible, 
  message = "Спасибо за заявку!\nМы свяжемся с Вами в ближайшее время" 
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed top-20 right-4 left-4 sm:top-24 sm:right-6 sm:left-auto sm:max-w-md bg-green-500 text-white px-4 py-3 sm:px-6 rounded-lg shadow-lg z-[9999] flex items-center gap-2 mx-auto">
      <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
      <span className="font-montserrat font-medium text-sm sm:text-base whitespace-pre-line">
        {message}
      </span>
    </div>
  );
};
