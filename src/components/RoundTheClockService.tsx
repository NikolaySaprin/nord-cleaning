'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Clock, Zap, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactModal } from './ContactModal';

import roundTheClockImage from '/assets/round-the-clock.jpg';

const serviceFeatures = [
  {
    id: 1,
    title: 'Забор, стирка и доставка по графику, в том числе ночью',
    icon: Clock,
  },
  {
    id: 2,
    title: 'Срочная обработка - решим проблему даже в форс-мажорной ситуации',
    icon: Zap,
  },
  {
    id: 3,
    title: 'Постоянный менеджер, который всегда на связи и быстро решает вопросы',
    icon: Headphones,
  },
];

export const RoundTheClockService = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Background Image with Overlay */}
            <div className="min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] rounded-3xl overflow-hidden relative">
              <Image
                src={roundTheClockImage}
                alt="Круглосуточный сервис прачечной"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center py-8">
                <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-white">
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-3 sm:mb-4">
                      Круглосуточный сервис
                    </h2>
                    <h3 className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-blue-200">
                      Мы не спим, мы чистим
                    </h3>
                    <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 max-w-2xl">
                      Ваши клиенты не ждут и мы тоже
                    </p>
                    
                    {/* Features */}
                    <div className="grid gap-4 sm:gap-6 mb-6 sm:mb-8">
                      {serviceFeatures.map((feature) => {
                        const IconComponent = feature.icon;
                        return (
                          <div
                            key={feature.id}
                            className="flex items-center gap-3 sm:gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 hover:bg-white/20 transition-all duration-300"
                          >
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                              <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </div>
                            <p className="text-white text-base sm:text-lg font-medium">
                              {feature.title}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    {/* CTA Button */}
                    <Button
                      size="sm"
                      onClick={() => setIsContactModalOpen(true)}
                      className="bg-white text-primary hover:bg-gray-100 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg rounded-xl w-full sm:w-auto"
                    >
                      <span className="text-center">
                        Подключить круглосуточный сервис
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
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