"use client"

import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    industry: ''
  });
  const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false);
  const [showPrivacyError, setShowPrivacyError] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    privacy: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      phone: '',
      privacy: ''
    };

    if (formData.name.length < 2) {
      newErrors.name = 'Имя должно содержать минимум 2 символа';
    }

    const phoneRegex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Введите корректный номер телефона';
    }

    if (!isPrivacyAccepted) {
      newErrors.privacy = 'Необходимо согласие с политикой конфиденциальности';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setFormData({ name: '', phone: '', industry: '' });
      setIsPrivacyAccepted(false);
      setShowPrivacyError(false);
      setErrors({ name: '', phone: '', privacy: '' });
      onClose();
    } else {
      setShowPrivacyError(true);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="bg-white rounded-[2.5rem] p-[3.75rem] relative max-w-[49.75rem] w-full max-h-[32.5rem] overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-[2.1875rem] right-[2.1875rem] w-[2rem] h-[2rem] bg-black/20 rounded-full flex items-center justify-center"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L6 6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Decorative elements */}
        <div className="absolute top-[15.25rem] right-[35.5rem] w-[19.4375rem] h-[21.3125rem] opacity-20">
          <Image src="/assets/snowflake-1.svg" alt="" layout="fill" objectFit="contain" />
        </div>
        <div className="absolute top-[3.5625rem] right-[32.25rem] w-[5.1875rem] h-[5.6875rem] opacity-20">
          <Image src="/assets/snowflake-2.svg" alt="" layout="fill" objectFit="contain" />
        </div>

        <div className="relative z-10">
          <h2 className="text-[#343434] font-montserrat font-medium text-[2.75rem] leading-[1.22] mb-[1.25rem]">
            Оставить заявку
          </h2>
          
          <p className="text-[#343434] font-montserrat font-medium text-[1.375rem] leading-[1.22] mb-[6.25rem]">
            Заполните форму и мы свяжемся с вами для обсуждения деталей
          </p>

          <div className="space-y-[1.25rem] mb-[1.25rem]">
            <div>
              <Input
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={`w-full h-[2.75rem] px-[1rem] py-[0.625rem] bg-white border rounded-[0.5rem] font-montserrat text-[1rem] ${
                  errors.name ? 'border-red-500' : 'border-[#D7DAE2]'
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-[0.25rem]">{errors.name}</p>
              )}
            </div>

            <div>
              <Input
                placeholder="+7 (999) 999-99-99"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className={`w-full h-[2.75rem] px-[1rem] py-[0.625rem] bg-white border rounded-[0.5rem] font-montserrat text-[1rem] ${
                  errors.phone ? 'border-red-500' : 'border-[#D7DAE2]'
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-[0.25rem]">{errors.phone}</p>
              )}
            </div>

            <Input
              placeholder="Укажите вашу сферу (не обязательно)"
              value={formData.industry}
              onChange={(e) => handleInputChange('industry', e.target.value)}
              className="w-full h-[2.75rem] px-[1rem] py-[0.625rem] bg-white border border-[#D7DAE2] rounded-[0.5rem] font-montserrat text-[1rem]"
            />
          </div>

          <div className="flex items-center gap-[1.25rem]">
            <Button
              onClick={handleSubmit}
              className="bg-[#3264F6] hover:bg-[#2950D4] text-white font-montserrat font-medium text-[0.875rem] leading-[1.43] px-[1rem] py-[0.625rem] rounded-[4.25rem] h-[2.75rem] uppercase"
            >
              Отправить
            </Button>

            <div className="flex items-center gap-[0.625rem]">
              <Checkbox
                id="privacy-modal"
                checked={isPrivacyAccepted}
                onCheckedChange={(checked) => {
                  setIsPrivacyAccepted(checked as boolean);
                  if (checked) setShowPrivacyError(false);
                  if (errors.privacy) {
                    setErrors(prev => ({ ...prev, privacy: '' }));
                  }
                }}
                className={`w-[1rem] h-[1rem] ${
                  showPrivacyError || errors.privacy ? 'border-red-500' : 'border-[#999EAD]'
                }`}
              />
              <label
                htmlFor="privacy-modal"
                className={`text-[#202124] font-montserrat font-normal text-[0.75rem] leading-[1.22] ${
                  showPrivacyError || errors.privacy ? 'text-red-500' : ''
                }`}
              >
                Отправляя форму Вы соглашаетесь с политикой конфиденциальности
              </label>
            </div>
          </div>
          {errors.privacy && (
            <p className="text-red-500 text-xs mt-[0.25rem]">{errors.privacy}</p>
          )}
        </div>
      </Card>
    </div>
  )
}