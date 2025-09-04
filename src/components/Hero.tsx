'use client';

import { Button } from '@/components/ui/button';
import { ContactModal } from './ContactModal';
import { useState } from 'react';
import Image from 'next/image';
import heroImage from '/public/assets/hero-banner.jpg';

export const Hero = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Nord Clean Business - Профессиональная химчистка"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Nord - профессиональная прачечная для Вашего бизнеса
            </h1>
            
            <div className="text-lg md:text-xl lg:text-2xl mb-8 space-y-4 leading-relaxed">
              <p className="font-medium">
                Сосредоточьтесь на вашем бизнесе, а вопросы чистоты доверьте Nord.
              </p>
              <p className="text-gray-200">
                Полный цикл стирки для отелей, фитнес-клубов и SPA с бесплатной доставкой и круглосуточным сервисом.
              </p>
              <p className="text-gray-200">
                Работаем на профессиональной химии KLININ и PLEX. Освобождаем ваши ресурсы для главного.
              </p>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-8">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white/10 text-white border-white/30 hover:bg-white hover:text-primary backdrop-blur-sm"
                onClick={() => window.location.href = '/about'}
              >
                О нас
              </Button>
              
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-dark shadow-lg hover:shadow-xl"
                onClick={() => setIsContactModalOpen(true)}
              >
                Заказать
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/50 to-transparent" />
      </section>

      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};