"use client"

import { useState, useRef } from 'react'
import { Card } from "@/components/ui/card"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export function PromotionsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const swiperRef = useRef<any>(null)

  const promotions = [
    {
      id: 1,
      title: "Первая стирка — без вашего риска!",
      description: "Попробуйте качество наших услуг бесплатно! Первая пробная стирка позволит убедиться в безупречной чистоте и заботе о ткани без каких-либо затрат.",
      image: "/assets/promo-1.jpg",
      discount: null
    },
    {
      id: 2,
      title: "Мы - за долгое сотрудничество!",
      description: "Оставайтесь с нами дольше — и получайте больше. На второй месяц сотрудничества действует специальная скидка –10% на весь объём услуг.",
      image: "/assets/promo-2.jpg",
      discount: "-10%"
    },
    {
      id: 3,
      title: "Белоснежный бонус — пятновыведение и отбеливание",
      description: "Мы заботимся о каждой вещи. При каждой стирке вы получаете отбеливание и выведение пятен в подарок — никаких скрытых платежей, только идеально чистый результат.",
      image: "/assets/promo-3.jpg",
      discount: "-20%"
    },
    {
      id: 4,
      title: "Сдавайте больше - платите меньше!",
      description: "Если объём вашего белья превышает 3 тонны в месяц, мы предложим персональные условия: специальные тарифы и гибкую систему скидок.",
      image: "/assets/promo-4.jpg",
      discount: null
    }
  ]

  return (
    <section className="bg-white px-4 py-10 lg:px-8 lg:py-20 lg:max-w-7xl lg:mx-auto relative">
      {/* Decorative pattern */}
      <div className="absolute top-16 right-4 w-[100px] h-[100px] opacity-30 hidden lg:block">
        <div className="grid grid-cols-10 gap-[10px]">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="w-[10px] h-[10px] bg-gradient-to-br from-[#97C3F9] to-[#93C1F9] rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-10 lg:mb-16">
          <div className="flex justify-center mb-6 lg:justify-start lg:mb-8">
            <div className="border border-[#3A64C5] rounded-[50px] px-[34px] py-[14px] lg:px-[40px] lg:py-[16px]">
              <span className="text-[#3A64C5] font-montserrat font-medium text-[14px] leading-[1.71] uppercase lg:text-[16px]">
                Акции
              </span>
            </div>
          </div>
          
          <h2 className="text-[#3A64C5] font-montserrat font-bold text-[22px] leading-[1.55] uppercase text-center lg:text-[34px] lg:leading-[1.53] lg:text-left">
            Выгодные предложения для вашего бизнеса
          </h2>
        </div>

        {/* Mobile version - Swiper */}
        <div className="lg:hidden">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
            className="w-full"
          >
            {promotions.map((promotion) => (
              <SwiperSlide key={promotion.id}>
                <Card className="bg-white rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] overflow-hidden">
                  <div className="h-[240px] relative">
                    <img
                      src={promotion.image}
                      alt={promotion.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-[#1B2A46] font-montserrat font-bold text-[18px] leading-[1.33] mb-4">
                      {promotion.title}
                    </h3>
                    <p className="text-[#1B2A46] font-montserrat font-normal text-[16px] leading-[1.5]">
                      {promotion.description}
                    </p>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop version - Swiper */}
        <div className="hidden lg:block">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={40}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
            className="w-full"
          >
            {promotions.map((promotion) => (
              <SwiperSlide key={promotion.id}>
                <Card className="bg-white rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] overflow-hidden h-full">
                  <div className="h-[240px] relative">
                    <img
                      src={promotion.image}
                      alt={promotion.title}
                      className="w-full h-full object-cover"
                    />
                    {promotion.discount && (
                      <div className="absolute top-5 right-5">
                        <span className={`font-outfit font-extrabold text-[40px] leading-[1.26] uppercase ${
                          promotion.discount === '-10%' ? 'text-[#3A64C5]' : 'text-[#EEF3FF]'
                        }`}>
                          {promotion.discount}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-8">
                    <h3 className="text-[#1B2A46] font-montserrat font-bold text-[18px] leading-[1.33] mb-4">
                      {promotion.title}
                    </h3>
                    <p className="text-[#1B2A46] font-montserrat font-normal text-[16px] leading-[1.5]">
                      {promotion.description}
                    </p>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}