'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { unifiedFormSchema, UnifiedFormData, formatPhoneNumber, FormSource } from '@/lib/form-validation';
import { useFormSubmit } from '@/hooks/use-form-submit';
import { FormErrorMessage } from './form-components';
import Link from 'next/link';

interface UnifiedFormProps {
  source: FormSource;
  showSphereField?: boolean;
  sphereFieldName?: 'sphere' | 'industry';
  spherePlaceholder?: string;
  buttonText?: string;
  onSuccess?: () => void;
  className?: string;
}

export const UnifiedForm: React.FC<UnifiedFormProps> = ({
  source,
  showSphereField = false,
  sphereFieldName = 'sphere',
  spherePlaceholder = 'Ваша сфера (не обязательно)',
  buttonText = 'Получить КП',
  onSuccess,
  className = ''
}) => {
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);

  // Используем хук формы с валидацией zod
  const form = useForm<UnifiedFormData>({
    resolver: zodResolver(unifiedFormSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {
      name: '',
      phone: '',
      sphere: '',
      privacy: false
    }
  });

  // Используем хук для отправки формы
  const { isSubmitting, submitError, isSuccess, submitForm } = useFormSubmit({
    source,
    onSuccess: () => {
      setShowSuccessNotification(true);
      // Скрываем уведомление через 7 секунд
      setTimeout(() => {
        setShowSuccessNotification(false);
      }, 7000);

      if (onSuccess) {
        onSuccess();
      }
    }
  });

  // Обработчик отправки формы
  const onSubmit = async (data: UnifiedFormData) => {
    await submitForm(data, form.reset, form.setError);
  };

  // Обработчик изменения телефона для маски
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    form.setValue('phone', formatted);
  };

  // Обработчик изменения имени
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    form.setValue('name', e.target.value);
  };

  // Обработчик изменения сферы
  const handleSphereChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    form.setValue('sphere', e.target.value);
  };

  // Обработчик изменения чекбокса
  const handlePrivacyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    form.setValue('privacy', e.target.checked);
  };

  // Обработчик ввода только цифр для телефона
  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.currentTarget.type === 'tel') {
      if (
        !/[0-9]/.test(e.key) &&
        !['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)
      ) {
        e.preventDefault();
      }
    }
  };

  return (
    <>
      {/* Уведомление об успешной отправке */}
      {showSuccessNotification && (
        <div className="fixed top-20 right-4 left-4 sm:top-24 sm:right-6 sm:left-auto sm:max-w-md bg-green-500 text-white px-4 py-3 sm:px-6 rounded-lg shadow-lg z-[9999] flex items-center gap-2 mx-auto">
          <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="font-montserrat font-medium text-sm sm:text-base">
            Спасибо за заявку! Наш менеджер свяжется с вами в ближайшее время.
          </span>
        </div>
      )}

      <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-[1.25rem] ${className}`}>
        {/* Поле имени */}
        <div className="flex items-center gap-[0.5rem] p-[0.625rem_1rem] border border-[#D7DAE2] rounded-[0.5rem] bg-white">
          <input
            type="text"
            placeholder="Ваше имя"
            value={form.watch('name') || ''}
            onChange={handleNameChange}
            className="flex-1 text-[#202124] font-montserrat font-normal text-[0.875rem] sm:text-[1rem] leading-[1.71] sm:leading-[1.5] bg-transparent border-none outline-none"
          />
          <img src="/form-icon/people-Icon.svg" alt="" className="w-6 h-6" />
        </div>
        {form.formState.errors.name && (
          <p className="text-red-500 text-xs mt-1">
            {form.formState.errors.name.message}
          </p>
        )}

        {/* Поле телефона */}
        <div className="flex items-center gap-[0.5rem] p-[0.625rem_1rem] border border-[#D7DAE2] rounded-[0.5rem] bg-white">
          <input
            type="tel"
            placeholder="+7 (999) 999-99-99"
            value={form.watch('phone') || ''}
            onChange={handlePhoneChange}
            onKeyDown={handlePhoneKeyDown}
            className="flex-1 text-[#202124] font-montserrat font-normal text-[0.875rem] sm:text-[1rem] leading-[1.71] sm:leading-[1.5] bg-transparent border-none outline-none"
          />
          <img src="/form-icon/phone-Icon.svg" alt="" className="w-6 h-6" />
        </div>
        {form.formState.errors.phone && (
          <p className="text-red-500 text-xs mt-1">
            {form.formState.errors.phone.message}
          </p>
        )}

        {/* Поле сферы (если включено) */}
        {showSphereField && (
          <div className="flex items-start gap-[0.5rem] p-[0.625rem_1rem] border border-[#D7DAE2] rounded-[0.5rem] bg-white min-h-[2.75rem] sm:min-h-[4rem]">
            <input
              type="text"
              placeholder={spherePlaceholder}
              value={form.watch('sphere') || ''}
              onChange={handleSphereChange}
              className="flex-1 text-[#202124] font-montserrat font-normal text-[0.875rem] sm:text-[1rem] leading-[1.71] sm:leading-[1.5] bg-transparent border-none outline-none placeholder:text-[#999EAD] placeholder:whitespace-normal placeholder:break-words"
            />
            <img src="/form-icon/pencil-Icon.svg" alt="" className="w-6 h-6 flex-shrink-0 mt-[0.125rem]" />
          </div>
        )}

        {/* Кнопка и чекбокс */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-[1.25rem]">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#3264F6] hover:bg-[#2950D4] text-white font-montserrat font-medium text-[0.875rem] leading-[1.43] px-[1rem] py-[0.625rem] rounded-[0.5rem] sm:rounded-[2.125rem] h-[2.75rem] w-full sm:w-auto flex items-center justify-center"
          >
            {isSubmitting ? 'Отправка...' : buttonText}
          </Button>

          <div className="flex flex-col">
            <div className="flex items-center gap-[0.625rem] px-[1.25rem] sm:px-0">
              <input
                type="checkbox"
                id={`privacy-${source}`}
                checked={form.watch('privacy') || false}
                onChange={handlePrivacyChange}
                className="w-[1rem] h-[1rem] border-2 border-[#999EAD] bg-[#D9D9D9] rounded-[0.125rem]"
              />
              <label htmlFor={`privacy-${source}`} className="text-[#202124] font-montserrat font-normal text-[0.75rem] leading-[1.22]">
                Отправляя форму Вы соглашаетесь с{' '}
                <Link href="/privacy-policy" className="underline hover:text-[#3264F6] transition-colors">
                  политикой конфиденциальности
                </Link>
              </label>
            </div>
            {form.formState.errors.privacy && (
              <p className="text-red-500 text-xs mt-1 px-[1.25rem] sm:px-0">
                {form.formState.errors.privacy.message}
              </p>
            )}
          </div>
        </div>

        <FormErrorMessage error={submitError} />
      </form>
    </>
  );
};
