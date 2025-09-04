'use client';

import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight, ExternalLink, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactModal } from './ContactModal';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import promo1 from '/public/assets/promo-1.jpg';
import promo2 from '/public/assets/promo-2.jpg';
import promo3 from '/public/assets/promo-3.jpg';

const promotions = [
  {
    id: 1,
    image: promo1,
    title: 'Скидка 20% новым клиентам',
    description: 'При первом заказе от 50 кг',
    link: '/promotion/new-client'
  },
  {
    id: 2,
    image: promo2,
    title: 'Бесплатная доставка для отелей',
    description: 'При заказе от 30 кг',
    link: '/promotion/hotels'
  },
  {
    id: 3,
    image: promo3,
    title: 'Пакет для фитнес-клубов',
    description: 'Специальные условия для спортивных объектов',
    link: '/promotion/fitness'
  },
  {
    id: 4,
    image: promo1,
    title: 'Ночная стирка со скидкой',
    description: 'Экономия до 15% при сдаче с 22:00 до 06:00',
    link: '/promotion/night'
  },
  {
    id: 5,
    image: promo2,
    title: 'Комплексное обслуживание SPA',
    description: 'Полный цикл для салонов красоты и SPA-центров',
    link: '/promotion/spa'
  },
  {
    id: 6,
    image: promo3,
    title: 'Корпоративные скидки',
    description: 'Выгодные условия для постоянных клиентов',
    link: '/promotion/corporate'
  }
];

export const PromotionsSlider = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [hoveredSlide, setHoveredSlide] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (isPaused) {
        swiperRef.current.swiper.autoplay.stop();
      } else {
        swiperRef.current.swiper.autoplay.start();
      }
    }
  }, [isPaused]);

  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Акции
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выгодные предложения для вашего бизнеса
            </p>
          </div>

          <div className="relative overflow-hidden">
            {/* Navigation Buttons */}
            <button className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group">
              <ChevronRight className="w-5 h-5" />
            </button>

            <Swiper
              ref={swiperRef}
              modules={[Navigation, Autoplay, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              navigation={{
                prevEl: '.swiper-button-prev-custom',
                nextEl: '.swiper-button-next-custom',
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet !bg-primary !opacity-30',
                bulletActiveClass: 'swiper-pagination-bullet-active !opacity-100',
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="!pb-12 no-scrollbar"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {promotions.map((promo) => (
                <SwiperSlide key={promo.id} className="h-auto">
                  <div
                    className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full flex flex-col"
                    onMouseEnter={() => setHoveredSlide(promo.id)}
                    onMouseLeave={() => setHoveredSlide(null)}
                  >
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <Image
                        src={promo.image}
                        alt={promo.title}
                        fill
                        className="object-cover group-hover:brightness-110 transition-all duration-500"
                      />
                    </div>
                    
                    {/* <div className="p-6 flex-1 flex flex-col"> */}
                    <div className="m-6 flex-1 flex flex-col pt-20 md:pt-0 lg:pt-20">

                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {promo.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 flex-1 min-h-[4.5rem]">
                        {promo.description}
                      </p>
                      
                      {/* Hover Buttons */}
                      <div className={`transition-all duration-300 ${hoveredSlide === promo.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 bg-white hover:bg-primary hover:text-white border-gray-300"
                            onClick={() => window.location.href = promo.link}
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
                </SwiperSlide>
              ))}
            </Swiper>
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