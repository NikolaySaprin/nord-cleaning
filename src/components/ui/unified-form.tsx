'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { unifiedFormSchema, UnifiedFormData, formatPhoneNumber } from '@/lib/form-validation';
import { useFormSubmit } from '@/hooks/use-form-submit';
import { useNotification } from '@/contexts/notification-context';
import { UnifiedFormProps } from '@/types/components';
import Link from 'next/link';

export const UnifiedForm: React.FC<UnifiedFormProps> = ({
  source,
  showSphereField = false,
  spherePlaceholder = 'Ваша сфера (не обязательно)',
  buttonText = 'Получить КП',
  onSuccess,
  className = ''
}) => {
  const { showSuccessNotification } = useNotification();

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

  const { isSubmitting, submitError, submitForm } = useFormSubmit({
    source,
    onSuccess: () => {
      if (onSuccess) {
        onSuccess();
      }
      
      showSuccessNotification();
    }
  });

  const onSubmit = async (data: UnifiedFormData) => {
    await submitForm(data, form.reset, form.setError);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    form.setValue('phone', formatted);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    form.setValue('name', e.target.value);
  };

  const handleSphereChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    form.setValue('sphere', e.target.value);
  };

  const handlePrivacyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    form.setValue('privacy', e.target.checked);
  };

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

      <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-[1.25rem] ${className}`}>
        {/* Поле имени */}
        <div className="flex items-center gap-[0.5rem] p-[0.625rem_1rem] border border-[#D7DAE2] rounded-[0.5rem] bg-white">
          <input
            type="text"
            placeholder="Ваше имя"
            value={form.watch('name') || ''}
            onChange={handleNameChange}
            className="flex-1 text-[#202124] font-montserrat font-normal text-[0.875rem] lg:text-[1rem] leading-[1.71] lg:leading-[1.5] bg-transparent border-none outline-none"
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
            className="flex-1 text-[#202124] font-montserrat font-normal text-[0.875rem] lg:text-[1rem] leading-[1.71] lg:leading-[1.5] bg-transparent border-none outline-none"
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
          <div className="flex items-start gap-[0.5rem] p-[0.625rem_1rem] border border-[#D7DAE2] rounded-[0.5rem] bg-white min-h-[2.75rem] lg:min-h-[4rem]">
            <input
              type="text"
              placeholder={spherePlaceholder}
              value={form.watch('sphere') || ''}
              onChange={handleSphereChange}
              className="flex-1 text-[#202124] font-montserrat font-normal text-[0.875rem] lg:text-[1rem] leading-[1.71] lg:leading-[1.5] bg-transparent border-none outline-none placeholder:text-[#999EAD] placeholder:whitespace-normal placeholder:break-words"
            />
            <img src="/form-icon/pencil-Icon.svg" alt="" className="w-6 h-6 flex-shrink-0 mt-[0.125rem]" />
          </div>
        )}

        {/* Кнопка и чекбокс */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-[1.25rem]">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#3264F6] hover:bg-[#2950D4] text-white font-montserrat font-medium text-[0.875rem] leading-[1.43] px-[1rem] py-[0.625rem] rounded-[0.5rem] lg:rounded-[2.125rem] h-[2.75rem] w-full lg:w-auto flex items-center justify-center"
          >
            {isSubmitting ? 'Отправка...' : buttonText}
          </Button>

          <div className="flex flex-col">
            <div className="flex items-center gap-[0.625rem] px-[1.25rem] lg:px-0">
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
              <p className="text-red-500 text-xs mt-1 px-[1.25rem] lg:px-0">
                {form.formState.errors.privacy.message}
              </p>
            )}
          </div>
        </div>

        {submitError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4 md:max-w-[20rem]">
            <span className="block sm:inline">{submitError}</span>
          </div>
        )}
      </form>
    </>
  );
};
