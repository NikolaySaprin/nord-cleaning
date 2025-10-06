'use client';

import { useState } from 'react';
import { UseFormReset, UseFormSetError } from 'react-hook-form';
import { ApplicationSubmission, FormSource, normalizePhoneNumber } from '@/lib/form-validation';
import { sendYandexMetricaEvent, YandexMetricaEvents } from '@/lib/yandex-metrica';

// Функция для получения имени события Яндекс.Метрики по источнику формы
function getYandexMetricaEventName(source: FormSource): string | null {
  switch (source) {
    case 'modal_form':
      return YandexMetricaEvents.FORM_PROBNAYA_STIRKA;
    case 'services_form':
      return YandexMetricaEvents.FORM_SERVIS;
    case 'bottom_form':
      return YandexMetricaEvents.FORM_KEIS;
    default:
      return null;
  }
}

interface UseFormSubmitOptions {
  source: FormSource;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

interface UseFormSubmitReturn {
  isSubmitting: boolean;
  submitError: string | null;
  isSuccess: boolean;
  submitForm: (data: any, reset: UseFormReset<any>, setError?: UseFormSetError<any>) => Promise<void>;
}

export function useFormSubmit({
  source,
  onSuccess,
  onError
}: UseFormSubmitOptions): UseFormSubmitReturn {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const submitForm = async (data: any, reset: UseFormReset<any>, setError?: UseFormSetError<any>) => {
    setIsSubmitting(true);
    setSubmitError(null);
    setIsSuccess(false);
    
    try {
      // Нормализуем номер телефона перед отправкой
      const normalizedData = {
        ...data,
        phone: normalizePhoneNumber(data.phone),
        source
      };
      
      console.log('Нормализованные данные:', normalizedData);
      
      // В режиме разработки имитируем успешную отправку
      if (process.env.NODE_ENV === 'development') {
        // Имитация задержки сети
        await new Promise(resolve => setTimeout(resolve, 800));
        console.log('Форма отправлена (имитация):', normalizedData);
        
        // Сброс формы при успехе
        reset();
        setIsSuccess(true);
        
        // Отправляем событие в Яндекс.Метрику
        const eventName = getYandexMetricaEventName(source);
        if (eventName) {
          sendYandexMetricaEvent(eventName);
        }
        
        // Вызов колбэка успеха, если предоставлен
        if (onSuccess) {
          onSuccess();
        }
        return;
      }
      
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(normalizedData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Ошибка при отправке заявки');
      }

      // Сброс формы при успехе
      reset();
      setIsSuccess(true);
      
      // Отправляем событие в Яндекс.Метрику
      const eventName = getYandexMetricaEventName(source);
      if (eventName) {
        sendYandexMetricaEvent(eventName);
      }
      
      // Вызов колбэка успеха, если предоставлен
      if (onSuccess) {
        onSuccess();
      }
      
    } catch (error) {
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'Ошибка при отправке заявки. Пожалуйста, попробуйте еще раз.';
      
      setSubmitError(errorMessage);
      console.error('Ошибка отправки формы:', error);
      
      // Вызов колбэка ошибки, если предоставлен
      if (onError) {
        onError(errorMessage);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    submitError,
    isSuccess,
    submitForm
  };
}