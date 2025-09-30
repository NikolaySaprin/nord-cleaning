"use client"

import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export function ContactForm() {
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
    // Clear error when user starts typing
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

    // Validate name (minimum 2 characters)
    if (formData.name.length < 2) {
      newErrors.name = 'Имя должно содержать минимум 2 символа';
    }

    // Validate phone (basic Russian phone format)
    const phoneRegex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Введите корректный номер телефона';
    }

    // Validate privacy checkbox
    if (!isPrivacyAccepted) {
      newErrors.privacy = 'Необходимо согласие с политикой конфиденциальности';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted:', formData);
      // Reset form
      setFormData({ name: '', phone: '', industry: '' });
      setIsPrivacyAccepted(false);
      setShowPrivacyError(false);
      setErrors({ name: '', phone: '', privacy: '' });
    } else {
      setShowPrivacyError(true);
    }
  };

  return (
    <section className="bg-white px-4 py-10 lg:px-8 lg:py-20 lg:max-w-7xl lg:mx-auto">
      <Card className="bg-[#F7F8FA] border border-[#3B65C6] rounded-[24px] p-5 relative lg:p-15 lg:max-w-6xl lg:mx-auto">
        {/* Decorative elements - снежинки */}
        <div className="absolute -left-5 top-52 w-[311px] h-[341px] opacity-20 hidden lg:block">
          <svg viewBox="0 0 311 341" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H311V341H0V0Z" fill="#E3EAF6"/>
          </svg>
        </div>
        <div className="absolute top-2.5 right-5 w-[83px] h-[91px] opacity-20 lg:top-2.5 lg:right-5">
          <svg viewBox="0 0 83 91" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H83V91H0V0Z" fill="#E3EAF6"/>
          </svg>
        </div>

        <div className="relative z-10">
          <h2 className="text-[#202124] font-montserrat font-bold text-[24px] leading-[1.42] mb-10 lg:text-[24px] lg:leading-[1.42] lg:mb-10">
            Не нашли вашу отрасль? 
            <br/>
            Запросите индивидуальные условия.
          </h2>

          <div className="space-y-7 lg:space-y-7">
            <p className="text-[#202124] font-montserrat font-normal text-[16px] leading-[1.5] lg:text-[16px] lg:leading-[1.5]">
              Оставьте заявку — мы перезвоним вам с готовым коммерческим предложением!
            </p>

            <div className="space-y-5 lg:space-y-5">
              <div className="space-y-5 lg:grid lg:grid-cols-1 lg:gap-5 lg:space-y-0 lg:max-w-[520px]">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`w-full h-11 px-4 py-2.5 bg-white border rounded-lg font-montserrat text-[16px] lg:text-[16px] lg:h-11 ${
                      errors.name ? 'border-red-500' : 'border-[#D7DAE2]'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <Input
                    placeholder="+7 (999) 999-99-99"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`w-full h-11 px-4 py-2.5 bg-white border rounded-lg font-montserrat text-[16px] lg:text-[16px] lg:h-11 ${
                      errors.phone ? 'border-red-500' : 'border-[#D7DAE2]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                <Input
                  placeholder="Укажите вашу сферу (не обязательно)"
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full h-11 px-4 py-2.5 bg-white border border-[#D7DAE2] rounded-lg font-montserrat text-[16px] lg:text-[16px] lg:h-11"
                />
              </div>

              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-5">
                <Button 
                  onClick={handleSubmit}
                  className="font-montserrat font-medium text-[14px] leading-[1.43] py-2.5 px-4 rounded-lg lg:text-[14px] lg:py-2.5 lg:px-4 lg:h-11 bg-[#3264F6] hover:bg-[#2950D4] text-white"
                >
                  Получить КП
                </Button>

                <div className="flex items-center gap-2.5">
                  <Checkbox
                    id="privacy-contact"
                    checked={isPrivacyAccepted}
                    onCheckedChange={(checked) => {
                      setIsPrivacyAccepted(checked as boolean);
                      if (checked) setShowPrivacyError(false);
                      if (errors.privacy) {
                        setErrors(prev => ({ ...prev, privacy: '' }));
                      }
                    }}
                    className={`w-4 h-4 lg:w-4 lg:h-4 ${
                      showPrivacyError || errors.privacy ? 'border-red-500' : 'border-[#999EAD]'
                    }`}
                  />
                  <label
                    htmlFor="privacy-contact"
                    className={`text-[#202124] font-montserrat font-normal text-[12px] leading-[1.22] lg:text-[12px] lg:leading-[1.22] ${
                      showPrivacyError || errors.privacy ? 'text-red-500' : ''
                    }`}
                  >
                    Отправляя форму Вы соглашаетесь с политикой конфиденциальности
                  </label>
                </div>
              </div>
              {errors.privacy && (
                <p className="text-red-500 text-xs">{errors.privacy}</p>
              )}
            </div>
          </div>
        </div>
      </Card>
    </section>
  )
}