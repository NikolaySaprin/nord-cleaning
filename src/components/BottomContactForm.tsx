"use client"

import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export function BottomContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
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
      setFormData({ name: '', phone: '' });
      setIsPrivacyAccepted(false);
      setShowPrivacyError(false);
      setErrors({ name: '', phone: '', privacy: '' });
    } else {
      setShowPrivacyError(true);
    }
  };

  return (
    <section className="bg-white relative overflow-hidden">
      {/* Desktop version */}
      <div className="hidden lg:block">
        <div className="max-w-[87.5rem] mx-auto px-[2rem] py-[5rem]">
          <Card className="bg-[#F7F8FA] border-2 border-[#3B65C6] rounded-[1.5rem] p-[3.75rem] relative overflow-hidden">
            {/* Decorative snowflakes */}
            <div className="absolute -left-[1rem] top-[9.75rem] w-[19.4375rem] h-[21.3125rem]">
              <img src="/assets/snowflake-1.svg" alt="" className="w-full h-full opacity-100" />
            </div>
            <div className="absolute right-[31.0625rem] top-[0.625rem] w-[5.1875rem] h-[5.6875rem]">
              <img src="/assets/snowflake-2.svg" alt="" className="w-full h-full opacity-100" />
            </div>

            <div className="relative z-10 flex flex-wrap gap-[2.5rem] items-stretch">
              <div className="flex-1 min-w-[32.5rem]">
                <h2 className="text-[#202124] font-montserrat font-bold text-[1.5rem] leading-[1.42] mb-[1.25rem]">
                  Доверьте чистоту Вашего бизнеса нам!
                  <br/>
                  Присоединяйтесь к нашим довольным клиентам!
                </h2>

                <div className="flex flex-wrap gap-[1.75rem] pt-[0.625rem]">
                  <div className="flex-1 min-w-[32.5rem]">
                    <p className="text-[#202124] font-montserrat font-normal text-[1rem] leading-[1.5] mb-[1.25rem]">
                      Мы помогаем бизнесу любого масштаба поддерживать высокие стандарты чистоты и гигиены
                    </p>

                    <div className="space-y-[1.25rem]">
                      <div>
                        <div className="flex items-center gap-[0.5rem] p-[0.625rem_1rem] border border-[#D7DAE2] rounded-[0.5rem] bg-white">
                          <input 
                            type="text" 
                            placeholder="Ваше имя"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className={`flex-1 text-[#999EAD] font-montserrat font-normal text-[1rem] leading-[1.5] bg-transparent border-none outline-none ${
                              errors.name ? 'text-red-500' : ''
                            }`}
                          />
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#999EAD]">
                            <path d="M4 15L16 6M8 3L20 8" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                        </div>
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <div className="flex items-center gap-[0.5rem] p-[0.625rem_1rem] border border-[#D7DAE2] rounded-[0.5rem] bg-white">
                          <input 
                            type="tel" 
                            placeholder="+7 (999) 999-99-99"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className={`flex-1 text-[#999EAD] font-montserrat font-normal text-[1rem] leading-[1.5] bg-transparent border-none outline-none ${
                              errors.phone ? 'text-red-500' : ''
                            }`}
                          />
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#999EAD]">
                            <path d="M2.11 2L22 2" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                        </div>
                        {errors.phone && (
                          <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                        )}
                      </div>

                      <div className="flex items-center gap-[1.25rem]">
                        <Button 
                          onClick={handleSubmit}
                          className="bg-[#3264F6] hover:bg-[#2950D4] text-white font-montserrat font-medium text-[0.875rem] leading-[1.43] px-[1rem] py-[0.625rem] rounded-[0.5rem] h-[2.75rem]"
                        >
                          Отправить заявку
                        </Button>

                        <div className="flex items-center gap-[0.625rem]">
                          <Checkbox
                            id="privacy-bottom"
                            checked={isPrivacyAccepted}
                            onCheckedChange={(checked) => {
                              setIsPrivacyAccepted(checked as boolean);
                              if (checked) setShowPrivacyError(false);
                              if (errors.privacy) {
                                setErrors(prev => ({ ...prev, privacy: '' }));
                              }
                            }}
                            className={`w-[0.875rem] h-[0.875rem] ${
                              showPrivacyError || errors.privacy ? 'border-red-500' : 'border-[#999EAD]'
                            }`}
                          />
                          <label
                            htmlFor="privacy-bottom"
                            className={`text-[#202124] font-montserrat font-normal text-[0.75rem] leading-[1.22] max-w-[17.9375rem] ${
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
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Mobile version */}
      <div className="lg:hidden">
        <div className="px-[1rem] py-[2.5rem]">
          <Card className="bg-[#F7F8FA] border border-[#3B65C6] rounded-[1.25rem] p-[1.25rem] relative overflow-hidden">
            {/* Decorative snowflakes */}
            <div className="absolute top-[4rem] right-[17.1875rem] w-[5.1875rem] h-[5.6875rem]">
              <img src="/assets/snowflake-2.svg" alt="" className="w-full h-full opacity-100" />
            </div>
            <div className="absolute bottom-[3.625rem] right-[16.5625rem] w-[6.9375rem] h-[7.5625rem]">
              <img src="/assets/snowflake-1.svg" alt="" className="w-full h-full opacity-100" />
            </div>

            <div className="relative z-10">
              <h2 className="text-[#202124] font-montserrat font-bold text-[1.25rem] leading-[1.7] mb-[1.25rem]">
                Доверьте чистоту Вашего бизнеса нам!
                <br/>
                Присоединяйтесь к нашим довольным клиентам!
              </h2>

              <div className="space-y-[1.25rem]">
                <p className="text-[#202124] font-montserrat font-normal text-[0.875rem] leading-[1.71]">
                  Мы помогаем бизнесу любого масштаба поддерживать высокие стандарты чистоты и гигиены
                </p>

                <div className="space-y-[1.25rem]">
                  <div>
                    <div className="flex items-center gap-[0.5rem] p-[0.625rem_1rem] border border-[#D7DAE2] rounded-[0.5rem] bg-white">
                      <input 
                        type="text" 
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={`flex-1 text-[#999EAD] font-montserrat font-normal text-[0.875rem] leading-[1.71] bg-transparent border-none outline-none ${
                          errors.name ? 'text-red-500' : ''
                        }`}
                      />
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#999EAD]">
                        <path d="M4 15L16 6M8 3L20 8" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-[0.5rem] p-[0.625rem_1rem] border border-[#D7DAE2] rounded-[0.5rem] bg-white">
                      <input 
                        type="tel" 
                        placeholder="+7 (999) 999-99-99"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={`flex-1 text-[#999EAD] font-montserrat font-normal text-[0.875rem] leading-[1.71] bg-transparent border-none outline-none ${
                          errors.phone ? 'text-red-500' : ''
                        }`}
                      />
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#999EAD]">
                        <path d="M2.11 2L22 2" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div className="flex flex-col gap-[1.25rem]">
                    <Button 
                      onClick={handleSubmit}
                      className="bg-[#3264F6] hover:bg-[#2950D4] text-white font-montserrat font-medium text-[0.875rem] leading-[1.43] px-[1rem] py-[0.625rem] rounded-[0.5rem] h-[2.75rem] w-full"
                    >
                      Отправить заявку
                    </Button>

                    <div className="flex items-center gap-[0.625rem] px-[1.25rem]">
                      <Checkbox
                        id="privacy-bottom-mobile"
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
                        htmlFor="privacy-bottom-mobile"
                        className={`text-[#202124] font-montserrat font-normal text-[0.75rem] leading-[1.22] ${
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
        </div>
      </div>
    </section>
  )
}
