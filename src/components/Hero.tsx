'use client';

import { Button } from '@/components/ui/button';
import { ContactModal } from './ContactModal';
import { useState } from 'react';
import Image from 'next/image';
import { sendYandexMetricaEvent, YandexMetricaEvents } from '@/lib/yandex-metrica';

export const Hero = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleClick = () => {
    setIsContactModalOpen(true);
    sendYandexMetricaEvent(YandexMetricaEvents.TRIAL_WASHING_BTN);
  };

  const tags = [
    "Удаление сложных пятен",
    "дезинфекция", 
    "Фотофиксация и Маркировка",
    "SLA по срокам"
  ];

  return (
    <>
      <section className="bg-white px-[1rem] py-[1.25rem] pb-[2.5rem] lg:px-[2rem] lg:py-[5rem] lg:flex-row lg:items-center lg:gap-[4rem] lg:max-w-[87.5rem] lg:mx-auto relative z-0">
        {/* Mobile Layout */}
        <div className="flex flex-col gap-[2.5rem] lg:hidden">
          {/* First Block: Title + Image + Description */}
          <div className="flex flex-col gap-[1.25rem]">
            {/* Title */}
            <h1 className="text-[#1B2A46] font-montserrat font-bold text-[1.375rem] leading-[1.55] uppercase w-full max-w-[21.25rem]">
              Nord — профессиональная прачечная для вашего бизнеса в Москве и МО
            </h1>
            
            {/* Image */}
            <div className="w-full h-[21.25rem] bg-gray-200 rounded-[1rem] overflow-hidden relative">
              <Image 
                src="/assets/hero-banner.webp" 
                alt="Modern B2B laundry room"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Description */}
            <p className="text-[#1D1C3E] font-montserrat font-normal text-[1rem] leading-[1.5] w-full max-w-[21.25rem]">
              Полный цикл стирки для отелей, фитнеса/SPA, производственных центров и других объектов. 
              Бесплатная доставка, круглосуточный сервис, контроль качества на каждом этапе.
            </p>
          </div>
          
          {/* Second Block: Tags + Button */}
          <div className="flex flex-col gap-[2.5rem]">
            {/* Tags */}
            <div className="flex flex-col gap-[0.625rem]">
              {tags.map((tag, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-[0.5rem]"
                >
                  <div className="w-[0.375rem] h-[0.375rem] bg-[#000000] rounded-full flex-shrink-0"></div>
                  <span className="text-[#1D1C3E] font-montserrat font-semibold text-[1rem] leading-[1.5] uppercase w-fit">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="flex justify-center w-full">
              <Button
                className="bg-[#3264F6] hover:bg-[#2950D4] text-white font-montserrat font-medium text-[14px] leading-[1.71] px-6 py-3 rounded-[12px] flex items-center justify-center gap-3 w-full lg:flex-1 lg:text-[16px] lg:py-4"
                onClick={handleClick}
              >
                Заказать пробную стирку
                <Image src="/vector.svg" alt="" width={12} height={12} className="object-contain" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Desktop Layout */}
        <div className="hidden lg:flex lg:flex-row lg:gap-[4rem]">
          {/* Left Column */}
          <div className="flex flex-col gap-[2rem] flex-1">
            <h1 className="text-[#1B2A46] font-montserrat font-bold text-[3rem] leading-[1.2] w-full max-w-[37.5rem] uppercase">
              Nord — профессиональная прачечная для вашего бизнеса в Москве и МО
            </h1>
            
            <p className="text-[#1D1C3E] font-montserrat font-normal text-[1.25rem] leading-[1.4] w-full max-w-[31.25rem]">
              Полный цикл стирки для отелей, фитнеса/SPA, производственных центров и других объектов. 
              Бесплатная доставка, круглосуточный сервис, контроль качества на каждом этапе.
            </p>
            
            {/* Tags */}
            <div className="flex flex-col gap-[0.75rem]">
              {tags.map((tag, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-[0.5rem]"
                >
                  <div className="w-[0.375rem] h-[0.375rem] bg-[#000000] rounded-full flex-shrink-0"></div>
                  <span className="text-[#1D1C3E] font-montserrat font-semibold text-[1.125rem] leading-[1.5] uppercase w-fit ml-[1rem]">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <Button
              className="bg-[#3264F6] hover:bg-[#2950D4] text-white font-montserrat font-medium text-[1rem] leading-[1.71] px-[2rem] py-[1.25rem] rounded-[0.75rem] flex items-center justify-center gap-[0.75rem] w-fit"
              onClick={handleClick}
            >
              Заказать пробную стирку
              <Image src="/vector.svg" alt="" width={12} height={12} className="object-contain" />
            </Button>
          </div>
          
          {/* Right Column - Image */}
          <div className="flex-1 h-[31.25rem] bg-gray-200 rounded-[1.25rem] overflow-hidden max-w-[37.5rem] relative">
            <Image 
              src="/assets/hero-banner.webp" 
              alt="Modern B2B laundry room"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};