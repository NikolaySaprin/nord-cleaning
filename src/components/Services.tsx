'use client';

import { useState } from 'react';
import { ExternalLink, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactModal } from './ContactModal';
import Image from 'next/image';

import serviceSpa from '/public/assets/service-spa.jpg';
import serviceBanya from '/public/assets/service-banya.jpg';
import serviceHotel from '/public/assets/service-hotel.jpg';
import serviceFitness from '/public/assets/service-fitness.jpg';
import serviceMedical from '/public/assets/service-medical.jpg';

const services = [
  {
    id: 1,
    image: serviceSpa,
    title: 'Массажные салоны и спа центры',
    description: 'Полотенца и халаты всегда свежие, без пятен от косметики и масел',
    link: '/services/spa'
  },
  {
    id: 2,
    image: serviceBanya,
    title: 'Для баней и бассейнов',
    description: 'Специальная обработка текстиля для влажных помещений с антибактериальными средствами',
    link: '/services/banya'
  },
  {
    id: 3,
    image: serviceHotel,
    title: 'Гостиницы и отели',
    description: 'Выглаженные простыни и белоснежные полотенца поднимут оценку Вашего объекта на Booking и Яндекс.Путешествиях',
    link: '/services/hotels'
  },
  {
    id: 4,
    image: serviceFitness,
    title: 'Фитнес клубы',
    description: 'Чистое полотенце после тренировки, обязательный стандарт вашего сервиса',
    link: '/services/fitness'
  },
  {
    id: 5,
    image: serviceMedical,
    title: 'Медцентры',
    description: 'Стерильность и безупречный вид текстиля напрямую влияют на доверие клиентов',
    link: '/services/medical'
  }
];

export const Services = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Услуги
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессиональное обслуживание для различных сфер бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <div
                key={service.id}
                className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full flex flex-col"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:brightness-110 transition-all duration-500"
                  />
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-1">
                    {service.description}
                  </p>
                  
                  {/* Hover Buttons */}
                  <div className={`transition-all duration-300 ${hoveredService === service.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-white hover:bg-primary hover:text-white border-gray-300"
                        onClick={() => window.location.href = service.link}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Узнать
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-primary hover:bg-primary-dark"
                        onClick={() => setIsContactModalOpen(true)}
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        Заявка
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              onClick={() => setIsContactModalOpen(true)}
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-xl"
            >
              Получить консультацию по всем услугам
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