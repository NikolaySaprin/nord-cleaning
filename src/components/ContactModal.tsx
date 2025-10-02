"use client"

import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { useScrollLock } from "@/hooks/useScrollLock"

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
  
  // Блокируем скролл страницы при открытии модального окна
  useScrollLock(isOpen);

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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      {/* Desktop Modal */}
      <div className="hidden lg:block relative">
        <Card 
          className="bg-white rounded-[2.5rem] p-[3.75rem] relative w-[49.75rem] h-[32.5rem] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-[2.1875rem] right-[2.1875rem] w-[2rem] h-[2rem] bg-black/20 rounded-full flex items-center justify-center z-20"
            aria-label="Закрыть"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L13 13M1 13L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Decorative elements - Desktop */}
          <div className="absolute top-[3.5625rem] right-[32.25rem] w-[5.1875rem] h-[5.6875rem] opacity-40">
            <img src="/assets/decorative/snowflake-small.svg" alt="" className="w-full h-full" />
          </div>
          <div className="absolute top-[15.25rem] right-[35.5rem] w-[19.4375rem] h-[21.3125rem] opacity-40">
            <img src="/assets/decorative/snowflake-large.svg" alt="" className="w-full h-full" />
          </div>
          <div className="absolute bottom-[-2rem] right-[-2rem] w-[14rem] h-[14rem] opacity-40">
            <img src="/assets/decorative/snowflake-medium.svg" alt="" className="w-full h-full" />
          </div>

          <div className="relative z-10">
            <h2 className="text-[#343434] font-montserrat font-medium text-[2.75rem] leading-[1.22] mb-[1.25rem]">
              Оставить заявку
            </h2>
            
            <p className="text-[#343434] font-montserrat font-medium text-[1.375rem] leading-[1.22] mb-[3.75rem]">
              Заполните форму и мы свяжемся с вами для обсуждения деталей
            </p>

            <div className="w-[32.5rem] space-y-[1.25rem] mb-[1.25rem]">
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
                  id="privacy-modal-desktop"
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
                  htmlFor="privacy-modal-desktop"
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

      {/* Mobile Modal */}
      <div className="block lg:hidden relative">
        <Card 
          className="bg-[#F7F8FA] rounded-[1.25rem] w-[21.4375rem] h-[40rem] relative overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-[1.25rem] right-[1.25rem] w-[2rem] h-[2rem] bg-black/20 rounded-full flex items-center justify-center z-20"
            aria-label="Закрыть"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L13 13M1 13L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Decorative elements - Mobile */}
          <div className="absolute top-[-1.625rem] left-0 w-[5.1875rem] h-[5.6875rem] opacity-40">
            <img src="/assets/decorative/snowflake-small.svg" alt="" className="w-full h-full" />
          </div>
          <div className="absolute bottom-[-2rem] right-0 w-[6.9375rem] h-[7.5625rem] opacity-40">
            <img src="/assets/decorative/snowflake-small.svg" alt="" className="w-full h-full" />
          </div>
          <div className="absolute top-[50%] left-[-2rem] w-[8rem] h-[8rem] opacity-40">
            <img src="/assets/decorative/snowflake-medium.svg" alt="" className="w-full h-full" />
          </div>

          <div className="pt-[5rem] px-[1.25rem] relative z-10">
            <h2 className="text-[#343434] font-montserrat font-bold text-[1.625rem] leading-[1.3] mb-[1rem]">
              Оставить заявку
            </h2>
            
            <p className="text-[#343434] font-montserrat font-normal text-[0.875rem] leading-[1.7] mb-[1.25rem]">
              Заполните форму и мы свяжемся с вами для обсуждения деталей
            </p>

            <div className="space-y-[1.25rem] mb-[1.25rem]">
              <div>
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`w-full h-[2.75rem] px-[1rem] py-[0.625rem] bg-white border rounded-[0.5rem] font-montserrat text-[0.875rem] ${
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
                  className={`w-full h-[2.75rem] px-[1rem] py-[0.625rem] bg-white border rounded-[0.5rem] font-montserrat text-[0.875rem] ${
                    errors.phone ? 'border-red-500' : 'border-[#D7DAE2]'
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-[0.25rem]">{errors.phone}</p>
                )}
              </div>

              <div>
                <Input
                  placeholder="Укажите вашу сферу (не обязательно)"
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full h-[4rem] px-[1rem] py-[0.625rem] bg-white border border-[#D7DAE2] rounded-[0.5rem] font-montserrat text-[0.875rem]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-[1.25rem]">
              <Button
                onClick={handleSubmit}
                className="bg-[#3264F6] hover:bg-[#2950D4] text-white font-montserrat font-medium text-[0.875rem] leading-[1.43] px-[1rem] py-[0.625rem] rounded-[0.5rem] h-[2.75rem] w-full"
              >
                Получить КП
              </Button>

              <div className="flex items-start gap-[0.625rem] px-[1.25rem]">
                <Checkbox
                  id="privacy-modal-mobile"
                  checked={isPrivacyAccepted}
                  onCheckedChange={(checked) => {
                    setIsPrivacyAccepted(checked as boolean);
                    if (checked) setShowPrivacyError(false);
                    if (errors.privacy) {
                      setErrors(prev => ({ ...prev, privacy: '' }));
                    }
                  }}
                  className={`w-[1rem] h-[1rem] mt-[0.25rem] ${
                    showPrivacyError || errors.privacy ? 'border-red-500' : 'border-[#999EAD]'
                  }`}
                />
                <label
                  htmlFor="privacy-modal-mobile"
                  className={`text-[#202124] font-montserrat font-normal text-[0.75rem] leading-[1.22] ${
                    showPrivacyError || errors.privacy ? 'text-red-500' : ''
                  }`}
                >
                  Отправляя форму Вы соглашаетесь с политикой конфиденциальности
                </label>
              </div>
              {errors.privacy && (
                <p className="text-red-500 text-xs mt-[0.25rem]">{errors.privacy}</p>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}