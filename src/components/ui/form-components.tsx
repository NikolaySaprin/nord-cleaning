'use client';

import React from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { formatPhoneNumber } from '@/lib/form-validation';
import { UseFormReturn } from 'react-hook-form';

// Компонент поля имени
interface FormNameFieldProps {
    form: UseFormReturn<any>;
    className?: string;
}

export const FormNameField: React.FC<FormNameFieldProps> = ({ form, className = '' }) => {
    const { register, formState: { errors } } = form;

    return (
        <div className="form-field relative">
            <Input
                placeholder="Ваше имя"
                {...register('name')}
                className={`w-full md:max-w-[20rem] h-[2.75rem] px-[1rem] py-[0.625rem] pr-[2.5rem] bg-white border rounded-[3.125rem] font-montserrat text-[1rem] ${errors.name ? 'border-red-500' : 'border-[#D7DAE2]'
                    } ${className}`}
            />
            <div className="absolute right-[1rem] top-1/2 transform -translate-y-1/2 pointer-events-none">
                <img src="/assets/icons/person-icon.svg" alt="" className="w-[1.25rem] h-[1.25rem]" />
            </div>
            {errors.name && (
                <p className="text-red-500 text-xs mt-[0.25rem]">
                    {errors.name.message as string}
                </p>
            )}
        </div>
    );
};

// Компонент поля телефона с форматированием
interface FormPhoneFieldProps {
    form: UseFormReturn<any>;
    className?: string;
}

export const FormPhoneField: React.FC<FormPhoneFieldProps> = ({ form, className = '' }) => {
    const { register, formState: { errors }, setValue, watch } = form;
    const phoneValue = watch('phone');

    // Обработчик изменения телефона с форматированием
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatted = formatPhoneNumber(e.target.value);
        setValue('phone', formatted, { shouldValidate: true });
    };

    return (
        <div className="form-field relative">
            <Input
                placeholder="+7 (999) 999-99-99"
                {...register('phone')}
                onChange={handlePhoneChange}
                value={phoneValue}
                className={`w-full md:max-w-[20rem] h-[2.75rem] px-[1rem] py-[0.625rem] pr-[2.5rem] bg-white border rounded-[3.125rem] font-montserrat text-[1rem] ${errors.phone ? 'border-red-500' : 'border-[#D7DAE2]'
                    } ${className}`}
            />
            <div className="absolute right-[1rem] top-1/2 transform -translate-y-1/2 pointer-events-none">
                <img src="/assets/icons/phone-input-icon.svg" alt="" className="w-[1.25rem] h-[1.25rem]" />
            </div>
            {errors.phone && (
                <p className="text-red-500 text-xs mt-[0.25rem]">
                    {errors.phone.message as string}
                </p>
            )}
        </div>
    );
};

// Компонент поля сферы деятельности
interface FormSphereFieldProps {
    form: UseFormReturn<any>;
    className?: string;
    placeholder?: string;
}

export const FormSphereField: React.FC<FormSphereFieldProps> = ({
    form,
    className = '',
    placeholder = "Укажите вашу сферу (не обязательно)"
}) => {
    const { register, formState: { errors } } = form;

    return (
        <div className="form-field relative">
            <Input
                placeholder={placeholder}
                {...register('sphere')}
                className={`w-full md:max-w-[20rem] min-h-[2.75rem] px-[1rem] py-[0.625rem] pr-[2.5rem] bg-white border rounded-[3.125rem] font-montserrat text-[1rem] whitespace-normal overflow-visible ${errors.sphere ? 'border-red-500' : 'border-[#D7DAE2]'
                    } ${className}`}
            />
            <div className="absolute right-[1rem] top-[0.875rem] pointer-events-none">
                <img src="/assets/icons/sphere-icon.svg" alt="" className="w-[1.25rem] h-[1.25rem]" />
            </div>
            {errors.sphere && (
                <p className="text-red-500 text-xs mt-[0.25rem]">
                    {errors.sphere.message as string}
                </p>
            )}
        </div>
    );
};

// Компонент поля согласия с политикой конфиденциальности
interface FormPrivacyCheckboxProps {
    form: UseFormReturn<any>;
    className?: string;
}

export const FormPrivacyCheckbox: React.FC<FormPrivacyCheckboxProps> = ({ form, className = '' }) => {
    const { formState: { errors } } = form;
    console.log(form.getValues(), 'form')
    return (
        <div className={`flex items-start gap-[0.625rem] ${className}`}>
            <Checkbox
                id="privacy"
                // {...register('privacy')}
                checked={form.watch('privacy')}
                onCheckedChange={(checked) => form.setValue('privacy', checked)}
                className={`w-[1.25rem] h-[1.25rem] mt-[0.125rem] ${errors.privacy ? 'border-red-500' : 'border-[#D7DAE2]'
                    }`}
            />
            <div className="flex flex-col">
                <label
                    htmlFor="privacy"
                    className="text-[#343434] font-montserrat text-[0.875rem] leading-[1.5] cursor-pointer"
                >
                    Отправляя форму Вы соглашаетесь с <Link href="#" className="text-[#2C4495] underline">политикой конфиденциальности</Link>
                </label>
                {errors.privacy && (
                    <p className="text-red-500 text-xs mt-[0.25rem]">
                        {errors.privacy.message as string}
                    </p>
                )}
            </div>
        </div>
    );
};

// Компонент кнопки отправки формы
interface FormSubmitButtonProps {
    isSubmitting: boolean;
    text?: string;
    className?: string;
}

export const FormSubmitButton: React.FC<FormSubmitButtonProps> = ({
    isSubmitting,
    text = 'Получить КП',
    className = ''
}) => {
    return (
        <Button
            type="submit"
            disabled={isSubmitting}
            className={`md:max-w-[20rem] w-full h-[3.125rem] bg-[#4066EB] hover:bg-[#3058DC] text-white font-montserrat font-medium text-[1rem] leading-[1.5] rounded-[3.125rem] ${className}`}
        >
            {isSubmitting ? 'Отправка...' : text}
        </Button>
    );
};

// Компонент сообщения об ошибке
interface FormErrorMessageProps {
    error: string | null;
}

export const FormErrorMessage: React.FC<FormErrorMessageProps> = ({ error }) => {
    if (!error) return null;

    return (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4 md:max-w-[20rem]">
            <span className="block sm:inline">{error}</span>
        </div>
    );
};

// Компонент сообщения об успешной отправке
interface FormSuccessMessageProps {
    show: boolean;
    message?: string;
}

export const FormSuccessMessage: React.FC<FormSuccessMessageProps> = ({
    show,
    message = 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.'
}) => {
    if (!show) return null;

    return (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4 md:max-w-[20rem]">
            <span className="block sm:inline">{message}</span>
        </div>
    );
};