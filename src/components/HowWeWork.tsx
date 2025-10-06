'use client';

import { useState } from 'react';
import { Truck, Filter, Sparkles, Package, MapPin } from 'lucide-react';
import { ContactModal } from './ContactModal';
import Image from 'next/image';
import stepPickup from '/assets/step-pickup.webp';
import stepSorting from '/assets/step-sorting.webp';
import stepWashing from '/assets/step-washing.webp';
import stepDrying from '/assets/step-drying.webp';
import stepDelivery from '/assets/step-delivery.webp';
import { Button } from './ui/button';

const steps = [
  {
    id: 1,
    title: 'ЗАБОР БЕЛЬЯ',
    description: 'Приезжаем бесплатно при заказе от 30 килограмм',
    icon: Truck,
    image: stepPickup,
  },
  {
    id: 2,
    title: 'СОРТИРОВКА',
    description: 'Разделяем текстиль по видам тканей и степени загрязнения',
    icon: Filter,
    image: stepSorting,
  },
  {
    id: 3,
    title: 'АКВАЧИСТКА, СТИРКА И ПЯТНОВЫВЕДЕНИЕ',
    description: 'Подбираем режим для каждого типа ткани',
    icon: Sparkles,
    image: stepWashing,
  },
  {
    id: 4,
    title: 'СУШКА, ГЛАЖКА И УПАКОВКА',
    description: 'Аккуратный вид и гигиеничность',
    icon: Package,
    image: stepDrying,
  },
  {
    id: 5,
    title: 'ДОСТАВКА ОБРАТНО',
    description: 'В согласованное время',
    icon: MapPin,
    image: stepDelivery,
  },
];

export const HowWeWork = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-[87.5rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Как мы работаем
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Простой и надежный процесс в 5 шагов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isLastStep = index === steps.length - 1;

              return (
                <div key={step.id} className="relative group">
                  {/* Step Card */}
                  <div className="text-center">
                    {/* Step Image */}
                    <div className="relative mb-6 rounded-2xl overflow-hidden aspect-[4/3]">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover group-hover:brightness-110 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                      {/* Step Number */}
                      <div className="absolute top-4 left-4 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-primary-dark text-white rounded-full text-xl font-bold">
                        {step.id}
                      </div>

                      {/* Icon */}
                      <div className="absolute bottom-4 right-4">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-foreground mb-3 leading-tight">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow for desktop */}
                  {!isLastStep && (
                    <div className="hidden lg:block absolute top-8 right-0 z-10">
                      <div className="w-8 h-0.5 bg-primary relative">
                        <div className="absolute right-0 top-0 w-0 h-0 border-l-4 border-l-primary border-t-2 border-t-transparent border-b-2 border-b-transparent transform -translate-y-1/2"></div>
                      </div>
                    </div>
                  )}

                  {/* Arrow for mobile/tablet */}
                  {!isLastStep && (
                    <div className="lg:hidden flex justify-center mt-6">
                      <div className="h-8 w-0.5 bg-primary relative">
                        <div className="absolute bottom-0 left-0 w-0 h-0 border-t-4 border-t-primary border-l-2 border-l-transparent border-r-2 border-r-transparent transform -translate-x-1/2"></div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary/5 to-primary-dark/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Готовы начать работу с нами?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Профессиональное качество, надежность и индивидуальный подход к каждому клиенту
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white hover:bg-primary hover:text-white border-gray-300"
                  onClick={() => window.location.href = 'tel:+79999999999'}
                >
                  Позвонить сейчас
                </Button>
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary-dark"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  Рассчитать стоимость
                </Button>
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