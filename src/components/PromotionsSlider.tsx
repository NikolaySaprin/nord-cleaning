"use client"

import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function PromotionsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % promotions.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + promotions.length) % promotions.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

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

        {/* Mobile version - single card */}
        <div className="lg:hidden">
          <Card className="bg-white rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] overflow-hidden">
            <div className="h-[240px] relative">
              <img
                src={promotions[currentSlide].image}
                alt={promotions[currentSlide].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-[#1B2A46] font-montserrat font-bold text-[18px] leading-[1.33] mb-4">
                {promotions[currentSlide].title}
              </h3>
              <p className="text-[#1B2A46] font-montserrat font-normal text-[16px] leading-[1.5]">
                {promotions[currentSlide].description}
              </p>
            </div>
          </Card>

          {/* Mobile pagination dots */}
          <div className="flex justify-center gap-2.5 mt-6">
            {promotions.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-[#ADC4EB]' : 'bg-[#E3EAF6]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop version - 3 cards */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#E3EAF6] rounded-full flex items-center justify-center hover:bg-[#3A64C5] hover:text-white transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 9L4.5 6L7.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#E3EAF6] rounded-full flex items-center justify-center hover:bg-[#3A64C5] hover:text-white transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Cards container */}
            <div className="flex gap-10 px-16">
              {promotions.slice(currentSlide, currentSlide + 3).map((promotion, index) => (
                <Card key={promotion.id} className="bg-white rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] overflow-hidden flex-1">
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
              ))}
            </div>
          </div>

          {/* Desktop pagination dots */}
          <div className="flex justify-center gap-2.5 mt-8">
            {promotions.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-[#ADC4EB]' : 'bg-[#E3EAF6]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}