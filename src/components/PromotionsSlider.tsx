"use client"

import { useState, useRef, useEffect } from 'react'
import { Card } from "@/components/ui/card"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { DecorativePattern } from './DecorativePattern'
import { ContactModal } from './ContactModal'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export function PromotionsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isInitialized, setIsInitialized] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const swiperRef = useRef<SwiperType | null>(null)
  const navigationPrevRef = useRef<HTMLDivElement>(null)
  const navigationNextRef = useRef<HTMLDivElement>(null)
  const paginationRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (swiperRef.current) {
      setIsInitialized(true)
      
      if (navigationPrevRef.current && navigationNextRef.current) {
        swiperRef.current.navigation.init()
        swiperRef.current.navigation.update()
      }
      
      if (paginationRef.current) {
        swiperRef.current.pagination.init()
        swiperRef.current.pagination.update()
      }
    }
  }, [swiperRef.current])

  const promotions = [
    {
      id: 1,
      title: "Первая стирка — без вашего риска!",
      description: "Попробуйте качество наших услуг бесплатно! Первая пробная стирка позволит убедиться в безупречной чистоте и заботе о ткани без каких-либо затрат.",
      image: "/assets/promo-1.webp",
      discount: null
    },
    {
      id: 2,
      title: "Мы - за долгое сотрудничество!",
      description: "Оставайтесь с нами дольше — получайте больше. На второй месяц сотрудничества действует специальная скидка –10% на весь объём услуг.",
      image: "/assets/promo-2.webp",
      discount: null
    },
    {
      id: 3,
      title: "Белоснежный бонус — пятновыведение и отбеливание",
      description: "Мы заботимся о ваших вещах. При каждой стирке вы получаете отбеливание и выведение пятен в подарок — никаких скрытых платежей, только идеально чистый результат.",
      image: "/assets/promo-3.webp",
      discount: null
    },
    {
      id: 4,
      title: "Сдавайте больше - платите меньше!",
      description: "Если объём вашего белья превышает 3 тонны в месяц, мы предложим персональные условия: специальные тарифы и гибкую систему скидок.",
      image: "/assets/promo-4.webp",
      discount: null
    }
  ]

  return (
    <section className="bg-white px-4 py-10 lg:px-8 lg:py-20 lg:max-w-[87.5rem] lg:mx-auto relative" >
      {/* Decorative elements */}
      <DecorativePattern
        position="custom"
        customPosition="top-[20px] right-[-33px]"
        width="66px"
        height="57.5px"
        mobileOnly
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-10 lg:mb-16">
          <div className="flex justify-start mb-6 lg:justify-start lg:mb-8">
            <div className="border border-[#3A64C5] rounded-[50px] px-[34px] py-[14px] lg:px-[40px] lg:py-[16px]">
              <span className="text-[#3A64C5] font-montserrat font-medium text-[14px] leading-[1.71] uppercase lg:text-[16px]">
                Акции
              </span>
            </div>
          </div>
          
          <h2 className="text-[#3A64C5] font-montserrat font-bold text-[22px] leading-[1.55] uppercase text-left lg:text-[34px] lg:leading-[1.53] lg:text-left">
            Выгодные предложения для вашего бизнеса
          </h2>
        </div>

        {/* Mobile version - Swiper */}
        <div className="lg:hidden">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            modules={[Pagination, Autoplay]}
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
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
            className="w-full"
          >
            {promotions.map((promotion) => (
              <SwiperSlide key={promotion.id} className="h-auto">
                <Card 
                  className="bg-white rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col h-full cursor-pointer hover:shadow-[0px_8px_30px_0px_rgba(0,0,0,0.15)] transition-shadow duration-300"
                  onClick={() => setIsModalOpen(true)}
                >
                  <div className="h-[240px] relative">
                    <img
                      src={promotion.image}
                      alt={promotion.title}
                      className="w-full h-full object-cover"
                    />
                    {promotion.discount && (
                      <div className="absolute top-5 right-5">
                        <span className={`font-montserrat font-extrabold text-[40px] leading-[1.26] uppercase ${
                          promotion.discount === '-10%' ? 'text-[#3A64C5]' : 'text-[#EEF3FF]'
                        }`}>
                          {promotion.discount}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-5 flex flex-col flex-grow h-[250px] overflow-hidden pb-[30px]">
                    <h3 className="text-[#1B2A46] font-montserrat font-bold text-[18px] leading-[1.33] mb-4">
                      {promotion.title}
                    </h3>
                    <p className="text-[#1B2A46] font-montserrat font-normal text-[16px] leading-[1.5] mb-5">
                      {promotion.description}
                    </p>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Mobile pagination */}
          <div className="flex justify-center mt-6">
            <div ref={paginationRef} className="flex gap-2 justify-center"></div>
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
                enabled: isInitialized,
              }}
              onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
              className="w-full"
            >
              {promotions.map((promotion, index) => (
                <SwiperSlide key={promotion.id} className="h-auto">
                  <Card 
                    className="bg-white rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col h-full cursor-pointer hover:shadow-[0px_8px_30px_0px_rgba(0,0,0,0.15)] transition-shadow duration-300"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <div className="h-[240px] relative">
                      <img
                        src={promotion.image}
                        alt={promotion.title}
                        className="w-full h-full object-cover"
                      />
                      {promotion.discount && (
                        <div className="absolute top-5 right-5">
                          <span className={`font-montserrat font-extrabold text-[40px] leading-[1.26] uppercase ${
                            promotion.discount === '-10%' ? 'text-[#3A64C5]' : 'text-[#EEF3FF]'
                          }`}>
                            {promotion.discount}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-8 flex flex-col flex-grow h-[240px] overflow-hidden pb-[72px]">
                      <h3 className="text-[#1B2A46] font-montserrat font-bold text-[18px] leading-[1.33] mb-4">
                        {promotion.title}
                      </h3>
                      <p className="text-[#1B2A46] font-montserrat font-normal text-[16px] leading-[1.5] mb-5">
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
              className="absolute top-1/2 -translate-y-1/2 left-[-20px] z-10 w-[40px] h-[40px] bg-[#E3EAF6] hover:bg-[#ADC4EB] rounded-full flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Previous slide"
              role="button"
              tabIndex={0}
            >
              <img src="/assets/decorative/arrow-left.svg" alt="Previous" className="w-3 h-3" />
            </div>
            <div 
              ref={navigationNextRef} 
              className="absolute top-1/2 -translate-y-1/2 right-[-20px] z-10 w-[40px] h-[40px] bg-[#E3EAF6] hover:bg-[#ADC4EB] rounded-full flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Next slide"
              role="button"
              tabIndex={0}
            >
              <img src="/assets/decorative/arrow-right.svg" alt="Next" className="w-3 h-3" />
            </div>
          </div>
          
          {/* Desktop pagination */}
          <div className="flex justify-center mt-8 gap-2">
            {promotions.map((_, index) => (
              <div 
                key={index} 
                className={`w-[10px] h-[10px] rounded-full cursor-pointer transition-colors ${
                  index === currentSlide ? 'bg-[#3264F6]' : 'bg-[#E3EAF6]'
                }`}
                onClick={() => {
                  if (swiperRef.current) {
                    swiperRef.current.slideTo(index)
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Go to slide ${index + 1}`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={() => {
          setIsModalOpen(false);
        }}
      />
    </section>
  )
}