"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { ApplicationFormData, applicationFormSchema } from "@/types/application-types";

interface BottomContactFormProps {
  showSphereField?: boolean; // Опциональное поле сферы
  source: 'website_form' | 'whatsapp'; // Источник для этой формы
}

export function BottomContactForm({ showSphereField = false, source }: BottomContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      sphere: "",
      privacy: false
    }
  });

  const privacyAccepted = watch("privacy");

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          source: source // Используем переданный источник
        })
      });

      if (!response.ok) {
        throw new Error('Ошибка при отправке заявки');
      }

      // Сброс формы при успехе
      reset();
      
      // Показать сообщение об успехе
      alert("Заявка успешно отправлена!");
      
    } catch (error) {
      setSubmitError("Ошибка при отправке заявки. Пожалуйста, попробуйте еще раз.");
      console.error('Ошибка отправки формы:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white relative overflow-hidden">
      <div className="hidden lg:block">
        <div className="max-w-[87.5rem] mx-auto px-[2rem] py-[5rem]">
          <Card className="bg-[#F7F8FA] border-2 border-[#3B65C6] rounded-[1.5rem] p-[3.75rem] relative overflow-hidden">
            {/* ... (декоративные элементы без изменений) ... */}

            <div className="relative z-10 flex gap-[2.5rem] items-stretch">
              <div className="flex-1 min-w-[32.5rem]">
                <h2 className="text-[#202124] font-montserrat font-bold text-[1.5rem] leading-[1.42] mb-[1.25rem]">
                  Доверьте чистоту Вашего бизнеса нам!
                  <br/>
                  Присоединяйтесь к нашим довольным клиентам!
                </h2>
                <p className="text-[#202124] font-montserrat font-normal text-[1rem] leading-[1.5]">
                  Мы помогаем бизнесу любого масштаба поддерживать высокие стандарты чистоты и гигиены
                </p>
              </div>

              <div className="flex-1 min-w-[32.5rem]">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-[1.25rem]">
                  {submitError && (
                    <div className="text-red-500 text-sm p-2 bg-red-50 rounded">{submitError}</div>
                  )}
                  
                  {/* Поле имени */}
                  <div>
                    <div className={`flex items-center gap-[0.5rem] p-[0.625rem_1rem] border rounded-[0.5rem] bg-white ${
                      errors.name ? 'border-red-500' : 'border-[#D7DAE2]'
                    }`}>
                      <input 
                        {...register("name")}
                        type="text" 
                        placeholder="Ваше имя"
                        className="flex-1 text-[#999EAD] font-montserrat font-normal text-[1rem] leading-[1.5] bg-transparent border-none outline-none"
                      />
                      <img src="/form-icon/people-Icon.svg" alt="" className="w-6 h-6" />
                    </div>
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Поле телефона */}
                  <div>
                    <div className={`flex items-center gap-[0.5rem] p-[0.625rem_1rem] border rounded-[0.5rem] bg-white ${
                      errors.phone ? 'border-red-500' : 'border-[#D7DAE2]'
                    }`}>
                      <input 
                        {...register("phone")}
                        type="tel" 
                        placeholder="+7 (999) 999-99-99"
                        className="flex-1 text-[#999EAD] font-montserrat font-normal text-[1rem] leading-[1.5] bg-transparent border-none outline-none"
                      />
                      <img src="/form-icon/phone-Icon.svg" alt="" className="w-6 h-6" />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Опциональное поле сферы деятельности */}
                  {showSphereField && (
                    <div>
                      <div className={`flex items-center gap-[0.5rem] p-[0.625rem_1rem] border rounded-[0.5rem] bg-white ${
                        errors.sphere ? 'border-red-500' : 'border-[#D7DAE2]'
                      }`}>
                        <input 
                          {...register("sphere")}
                          type="text" 
                          placeholder="Сфера деятельности (необязательно)"
                          className="flex-1 text-[#999EAD] font-montserrat font-normal text-[1rem] leading-[1.5] bg-transparent border-none outline-none"
                        />
                      </div>
                      {errors.sphere && (
                        <p className="text-red-500 text-xs mt-1">{errors.sphere.message}</p>
                      )}
                    </div>
                  )}

                  <div className="flex items-center gap-[1.25rem]">
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#3264F6] hover:bg-[#2950D4] text-white font-montserrat font-medium text-[0.875rem] leading-[1.43] px-[1rem] py-[0.625rem] rounded-[0.5rem] h-[2.75rem] disabled:opacity-50"
                    >
                      {isSubmitting ? "Отправка..." : "Отправить заявку"}
                    </Button>

                    <div className="flex items-center gap-[0.625rem]">
                      <Checkbox
                        {...register("privacy")}
                        onCheckedChange={(checked) => setValue("privacy", checked as boolean)}
                        className={`w-[0.875rem] h-[0.875rem] ${
                          errors.privacy ? 'border-red-500' : 'border-[#999EAD]'
                        }`}
                      />
                      <label className={`text-[#202124] font-montserrat font-normal text-[0.75rem] leading-[1.22] max-w-[17.9375rem] ${
                        errors.privacy ? 'text-red-500' : ''
                      }`}>
                        Отправляя форму Вы соглашаетесь с политикой конфиденциальности
                      </label>
                    </div>
                  </div>
                  {errors.privacy && (
                    <p className="text-red-500 text-xs">{errors.privacy.message}</p>
                  )}
                </form>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Мобильная версия с аналогичными изменениями */}
    </section>
  );
}