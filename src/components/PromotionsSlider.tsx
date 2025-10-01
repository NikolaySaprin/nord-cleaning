"use client"

import { useState, useRef, useEffect } from 'react'
import { Card } from "@/components/ui/card"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { DecorativeElement } from './DecorativeElement'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export function PromotionsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const swiperRef = useRef<SwiperType | null>(null)
  const navigationPrevRef = useRef<HTMLDivElement>(null)
  const navigationNextRef = useRef<HTMLDivElement>(null)
  const paginationRef = useRef<HTMLDivElement>(null)

  const promotions = [
    {
      id: 1,
      title: "Первая стирка — без вашего риска!",
      description: "Попробуйте качество наших услуг бесплатно! Первая пробная стирка позволит убедиться в безупречной чистоте и заботе о ткани без каких-либо затрат.",
      image: "/assets/promo-1.png",
      discount: null
    },
    {
      id: 2,
      title: "Мы - за долгое сотрудничество!",
      description: "Оставайтесь с нами дольше — и получайте больше. На второй месяц сотрудничества действует специальная скидка –10% на весь объём услуг.",
      image: "/assets/promo-2.png",
      discount: "-10%"
    },
    {
      id: 3,
      title: "Белоснежный бонус — пятновыведение и отбеливание",
      description: "Мы заботимся о каждой вещи. При каждой стирке вы получаете отбеливание и выведение пятен в подарок — никаких скрытых платежей, только идеально чистый результат.",
      image: "/assets/promo-3.png",
      discount: "-20%"
    },
    {
      id: 4,
      title: "Сдавайте больше - платите меньше!",
      description: "Если объём вашего белья превышает 3 тонны в месяц, мы предложим персональные условия: специальные тарифы и гибкую систему скидок.",
      image: "/assets/promo-1.png",
      discount: null
    }
  ]

  useEffect(() => {
    // Initialize Swiper with navigation and pagination refs
    if (swiperRef.current && navigationPrevRef.current && navigationNextRef.current && paginationRef.current) {
      if (swiperRef.current.params.navigation && typeof swiperRef.current.params.navigation === 'object') {
        swiperRef.current.params.navigation.prevEl = navigationPrevRef.current
        swiperRef.current.params.navigation.nextEl = navigationNextRef.current
      }
      
      if (swiperRef.current.params.pagination && typeof swiperRef.current.params.pagination === 'object') {
        swiperRef.current.params.pagination.el = paginationRef.current
      }
      
      swiperRef.current.navigation?.init()
      swiperRef.current.navigation?.update()
      swiperRef.current.pagination?.init()
      swiperRef.current.pagination?.update()
    }
  }, [])

  return (
    <section className="bg-white px-4 py-10 lg:px-8 lg:py-20 lg:max-w-7xl lg:mx-auto relative">
      {/* Decorative elements */}
      <DecorativeElement 
        type="dots" 
        position="custom" 
        customPosition="top-16 right-4" 
        desktopOnly 
      />
      <DecorativeElement 
        type="dots" 
        position="custom" 
        customPosition="top-11 right-4" 
        mobileOnly 
      />

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
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
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
              el: paginationRef.current,
              bulletClass: 'inline-block w-[10px] h-[10px] rounded-full bg-[#E3EAF6] mx-1 cursor-pointer',
              bulletActiveClass: 'bg-[#ADC4EB]',
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
          
          {/* Mobile pagination */}
          <div className="flex justify-center mt-6">
            <div className="flex gap-4 items-center">
              <div ref={paginationRef} className="flex gap-2">
                {promotions.map((_, index) => (
                  <div 
                    key={index} 
                    className={`w-[10px] h-[10px] rounded-full ${
                      index === currentSlide ? 'bg-[#ADC4EB]' : 'bg-[#E3EAF6]'
                    }`}
                    onClick={() => {
                      if (swiperRef.current) {
                        swiperRef.current.slideTo(index)
                      }
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop version - Swiper */}
        <div className="hidden lg:block">
          <div className="relative">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper
              }}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={40}
              slidesPerView={3}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
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
            
            {/* Navigation buttons */}
            <div 
              ref={navigationPrevRef} 
              className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 z-10 w-[40px] h-[40px] bg-[#E3EAF6] rounded-full flex items-center justify-center cursor-pointer"
            >
              <img src="/assets/decorative/arrow-left.svg" alt="Previous" className="w-3 h-3" />
            </div>
            <div 
              ref={navigationNextRef} 
              className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 z-10 w-[40px] h-[40px] bg-[#E3EAF6] rounded-full flex items-center justify-center cursor-pointer"
            >
              <img src="/assets/decorative/arrow-right.svg" alt="Next" className="w-3 h-3" />
            </div>
          </div>
          
          {/* Desktop pagination */}
          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              {promotions.map((_, index) => (
                <div 
                  key={index} 
                  className={`w-[10px] h-[10px] rounded-full ${
                    index === currentSlide ? 'bg-[#ADC4EB]' : 'bg-[#E3EAF6]'
                  }`}
                  onClick={() => {
                    if (swiperRef.current) {
                      swiperRef.current.slideTo(index)
                    }
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}