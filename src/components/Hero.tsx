'use client';

import { Button } from '@/components/ui/button';
import { ContactModal } from './ContactModal';
import { useState } from 'react';

export const Hero = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const tags = [
    "Удаление сложных пятен",
    "дезинфекция", 
    "Фотофиксация и Маркировка",
    "SLA по срокам"
  ];

  return (
    <>
        <section className="bg-white px-[1rem] py-[2.5rem] flex flex-col gap-[2.5rem] lg:px-[2rem] lg:py-[5rem] lg:flex-row lg:items-center lg:gap-[4rem] lg:max-w-[87.5rem] lg:mx-auto relative z-0">
        {/* Content Section */}
        <div className="flex flex-col gap-[1.25rem] lg:flex-1 lg:gap-[2rem]">
          <h1 className="text-[#1B2A46] font-montserrat font-bold text-[1.375rem] leading-[1.55] uppercase w-[21.25rem] lg:text-[3rem] lg:leading-[1.2] lg:w-full lg:max-w-[37.5rem]">
            Nord — профессиональная прачечная для вашего бизнеса в Москве и МО
          </h1>
          
          <p className="text-[#1D1C3E] font-montserrat font-normal text-[1rem] leading-[1.5] w-[21.25rem] lg:text-[1.25rem] lg:leading-[1.4] lg:w-full lg:max-w-[31.25rem]">
            Полный цикл стирки для отелей, фитнес/SPA, производственных центров и других объектов. 
            Бесплатная доставка, круглосуточный сервис, контроль качества на каждом этапе.
          </p>

          {/* Tags */}
          <div className="flex flex-col gap-[0.625rem] lg:flex-row lg:flex-wrap lg:gap-[1rem]">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="text-[#1D1C3E] font-montserrat font-semibold text-[1rem] leading-[1.5] uppercase w-fit lg:text-[1.125rem]"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* CTA Button */}
          <Button
            className="bg-[#3264F6] hover:bg-[#2950D4] text-white font-montserrat font-medium text-[0.875rem] leading-[1.71] px-[1.5rem] py-[1rem] rounded-[0.75rem] flex items-center justify-center gap-[0.75rem] w-fit lg:text-[1rem] lg:px-[2rem] lg:py-[1.25rem]"
            onClick={() => setIsContactModalOpen(true)}
          >
            Заказать пробную стирку
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6L6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </Button>
        </div>

        {/* Image Section */}
        <div className="w-full h-[21.25rem] bg-gray-200 rounded-[1.25rem] overflow-hidden lg:flex-1 lg:h-[31.25rem] lg:max-w-[37.5rem]">
          <img 
            src="/assets/hero-banner.jpg" 
            alt="Modern B2B laundry room"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};