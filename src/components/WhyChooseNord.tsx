'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Shield, Star, Clock, Truck, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactModal } from './ContactModal';

import whyChooseNordImage from '/public/assets/why-choose-nord.jpg';

const advantages = [
  {
    id: 1,
    title: 'Качество стирки на высшем уровне',
    description: 'Используем профессиональные машины (ASKO, HAIER) и проверенные моющие средства (KLININ, PLEX, GERUGROUP)',
    icon: Star,
  },
  {
    id: 2,
    title: 'Удаляем сложные и застарелые пятна',
    description: 'Косметика, масло, грязь и даже хлорка не станут проблемой',
    icon: Shield,
  },
  {
    id: 3,
    title: 'Круглосуточная работа 24/7',
    description: 'Подстроимся под Ваш график, чтобы не останавливать рабочие процессы',
    icon: Clock,
  },
  {
    id: 4,
    title: 'Бесплатная и быстрая доставка',
    description: 'Без задержек и накладок в любое время суток',
    icon: Truck,
  },
  {
    id: 5,
    title: 'Бережный уход за тканями',
    description: 'Правильная технология стирки увеличивает срок службы белья на 60%',
    icon: Heart,
  },
];

export const WhyChooseNord = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Причины выбрать Nord как партнера
            </h2>
          </div>

          <div className="relative">
            {/* Background Image */}
            <div className="min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] rounded-3xl overflow-hidden relative mb-8">
              <Image
                src={whyChooseNordImage}
                alt="Профессиональная бизнес-леди с чистыми полотенцами"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
              
              {/* Advantages Cards Overlay */}
              <div className="absolute inset-0 flex items-center justify-start py-8">
                <div className="w-full max-w-2xl px-4 sm:px-6 lg:px-8 lg:ml-16">
                  <div className="grid gap-3 sm:gap-4">
                    {advantages.map((advantage) => {
                      const IconComponent = advantage.icon;
                      return (
                        <div
                          key={advantage.id}
                          className="bg-white/95 backdrop-blur-sm rounded-xl p-3 sm:p-4 transform hover:shadow-xl transition-all duration-300 shadow-lg"
                        >
                          <div className="flex items-start gap-2 sm:gap-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                              <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h3 className="font-semibold text-foreground mb-1 text-xs sm:text-sm lg:text-base">
                                {advantage.title}
                              </h3>
                              <p className="text-muted-foreground text-xs sm:text-sm lg:text-sm leading-relaxed">
                                {advantage.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button
                size="lg"
                onClick={() => setIsContactModalOpen(true)}
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg rounded-xl"
              >
                Стать партнером Nord
              </Button>
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