'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ContactModal } from './ContactModal';

import pricingSmall from '/public/assets/pricing-small.jpg';
import pricingMedium from '/public/assets/pricing-medium.jpg';
import pricingLarge from '/public/assets/pricing-large.jpg';

const pricingTiers = [
  {
    id: 1,
    image: pricingSmall,
    title: 'до 1 тонны',
    price: '95 р/кг',
    description: 'Идеально для небольших объектов'
  },
  {
    id: 2,
    image: pricingMedium,
    title: 'от 1 до 2 тонн',
    price: '90 р/кг',
    popular: true,
    description: 'Оптимальный выбор для большинства клиентов'
  },
  {
    id: 3,
    image: pricingLarge,
    title: 'от 3 тонн',
    price: '85 р/кг',
    description: 'Максимальная выгода для крупных объемов'
  }
];

export const Pricing = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Прозрачное и понятное ценообразование
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы заранее озвучиваем стоимость - никаких скрытых платежей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group ${
                  tier.popular ? 'ring-2 ring-primary' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Популярно
                    </div>
                  </div>
                )}

                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image
                    src={tier.image}
                    alt={tier.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {tier.title}
                  </h3>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {tier.price}
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {tier.description}
                  </p>
                  
                  <Button
                    className="w-full bg-primary hover:bg-primary-dark"
                    onClick={() => setIsContactModalOpen(true)}
                  >
                    Рассчитать стоимость
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
              * Цены указаны за килограмм сухого белья. Окончательная стоимость зависит от типа ткани, степени загрязнения и дополнительных услуг
            </p>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setIsContactModalOpen(true)}
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              Получить персональное предложение
            </Button>
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