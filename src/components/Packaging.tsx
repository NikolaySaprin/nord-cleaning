'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ContactModal } from './ContactModal';

import packagingMedical from '/public/assets/packaging-medical.jpg';
import packagingIroning from '/public/assets/packaging-ironing.jpg';
import packagingMarking from '/public/assets/packaging-marking.jpg';
import packagingIndividual from '/public/assets/packaging-individual.jpg';

const packagingOptions = [
  {
    id: 1,
    image: packagingMedical,
    title: 'Подготовка текстиля под повторное использование',
    description: 'Стерильная упаковка для медицинских центров с соблюдением санитарных норм',
  },
  {
    id: 2,
    image: packagingIroning,
    title: 'Глажка без заломов и белье готово к использованию',
    description: 'Профессиональная глажка с использованием промышленного оборудования',
  },
  {
    id: 3,
    image: packagingMarking,
    title: 'Маркировка белья по категориям и объектам',
    description: 'Удобная система маркировки для быстрой идентификации и сортировки',
  },
  {
    id: 4,
    image: packagingIndividual,
    title: 'Индивидуальная упаковка по Вашим требованиям',
    description: 'Персонализированная упаковка с учетом специфики вашего бизнеса',
  },
];

export const Packaging = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Упакуем по Вашему техническому заданию
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Индивидуальный подход к упаковке и подготовке текстиля
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {packagingOptions.map((option) => (
              <div
                key={option.id}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <Image
                    src={option.image}
                    alt={option.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {option.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {option.description}
                  </p>
                  
                  <Button
                    variant="outline"
                    onClick={() => setIsContactModalOpen(true)}
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Узнать подробнее
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-primary/5 to-primary-dark/5 rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Нужна особая упаковка?
              </h3>
              <p className="text-muted-foreground mb-6">
                Расскажите о ваших требованиях, и мы разработаем индивидуальное решение
              </p>
              <Button
                size="lg"
                onClick={() => setIsContactModalOpen(true)}
                className="bg-primary hover:bg-primary-dark text-white px-8"
              >
                Обсудить требования
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