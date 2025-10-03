"use client"

import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ContactModal } from './ContactModal'

export function Pricing() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const pricingTiers = [
    {
      id: 1,
      image: "/assets/pricing-small.png",
      title: "До 1 тонны",
      price: "95 р/кг",
      description: "Идеально для небольших проектов"
    },
    {
      id: 2,
      image: "/assets/pricing-medium.png",
      title: "От 1 до 2 тонн",
      price: "90 р/кг",
      description: "Оптимальный выбор для большинства клиентов"
    },
    {
      id: 3,
      image: "/assets/pricing-large.png",
      title: "От 3 тонн",
      price: "85 р/кг",
      description: "Максимальная выгода для крупных объемов"
    }
  ]

  return (
    <>
      <section className="bg-gradient-to-br from-[#628CED] to-[#3A64C5] px-4 py-10 lg:px-8 lg:py-20 lg:max-w-7xl lg:mx-auto">
        <div className="mb-10 lg:mb-16">
          <div className="flex justify-start mb-6 lg:justify-start lg:mb-8">
            <div className="border border-white rounded-[50px] px-[34px] py-[14px] lg:px-[40px] lg:py-[16px]">
              <span className="text-white font-montserrat font-medium text-[14px] leading-[1.71] uppercase lg:text-[16px]">
                Цены
              </span>
            </div>
          </div>
          
          <h2 className="text-white font-montserrat font-bold text-[22px] leading-[1.55] uppercase text-left lg:text-[34px] lg:leading-[1.53] lg:text-left">
            Прозрачные тарифы без скрытых платежей
          </h2>
        </div>

        {/* Mobile version - vertical stack */}
        <div className="space-y-5 lg:hidden">
          {pricingTiers.map((tier) => (
            <Card key={tier.id} className="bg-white rounded-[20px] overflow-hidden flex flex-col h-full">
              <div className="h-[240px] relative">
                <img
                  src={tier.image}
                  alt={tier.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 text-center flex flex-col flex-grow">
                <div className="mb-4 flex-grow">
                  <div className="inline-block border-2 border-[#1B2A46] rounded-[50px] px-5 py-2.5 mb-4">
                    <span className="text-[#1B2A46] font-montserrat font-bold text-[18px] leading-[1.33]">
                      {tier.title}
                    </span>
                  </div>
                  <div className="text-[#3264F6] font-montserrat font-bold text-[42px] leading-[0.57] mb-4">
                    {tier.price}
                  </div>
                  <p className="text-[#1B2A46] font-montserrat font-normal text-[16px] leading-[1.5]">
                    {tier.description}
                  </p>
                </div>
                <Button
                  onClick={() => setIsContactModalOpen(true)}
                  className="w-full bg-[#3264F6] hover:bg-[#2950D4] text-white font-montserrat font-medium text-[14px] leading-[1.71] px-6 py-4 rounded-[12px] flex items-center justify-center gap-3 mt-6"
                >
                  Рассчитать стоимость
                  <img src="/vector.svg" alt="" className="w-3 h-3" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Desktop version - 3 columns */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-10">
          {pricingTiers.map((tier) => (
            <Card key={tier.id} className="bg-white rounded-[20px] overflow-hidden flex flex-col h-full">
              <div className="h-[240px] relative">
                <img
                  src={tier.image}
                  alt={tier.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 text-center flex flex-col flex-grow">
                <div className="mb-6 flex-grow">
                  <div className="inline-block border-2 border-[#1B2A46] rounded-[50px] px-5 py-2.5 mb-6">
                    <span className="text-[#1B2A46] font-montserrat font-bold text-[18px] leading-[1.33]">
                      {tier.title}
                    </span>
                  </div>
                  <div className="text-[#3264F6] font-montserrat font-bold text-[42px] leading-[0.57] mb-6">
                    {tier.price}
                  </div>
                  <p className="text-[#1B2A46] font-montserrat font-normal text-[16px] leading-[1.5]">
                    {tier.description}
                  </p>
                </div>
                <Button
                  onClick={() => setIsContactModalOpen(true)}
                  className="w-full bg-[#3264F6] hover:bg-[#2950D4] text-white font-montserrat font-medium text-[14px] leading-[1.71] px-6 py-4 rounded-[12px] flex items-center justify-center gap-3 mt-6"
                >
                  Рассчитать стоимость
                  <img src="/vector.svg" alt="" className="w-3 h-3" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-10 lg:mt-16">
          <p className="text-white font-montserrat font-normal text-[16px] leading-[1.5] max-w-3xl mx-auto">
            * Цены указаны за килограмм белья. Окончательная стоимость зависит от типа ткани, степени загрязнения и дополнительных услуг
          </p>
        </div>
      </section>

      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  )
}