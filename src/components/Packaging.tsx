"use client"

import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ContactModal } from './ContactModal'
import { DecorativeElement } from './DecorativeElement'
import { DecorativePattern } from './DecorativePattern'

export function Packaging() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const packagingOptions = [
    {
      id: 1,
      image: "/assets/webp/packaging-individual.webp",
      title: "Подготовка текстиля под повторное использование",
      description: "Стерильная упаковка для медицинских центров с соблюдением санитарных норм"
    },
    {
      id: 2,
      image: "/assets/webp/packaging-ironing.webp",
      title: "Глажка без заломов и белье готово к использованию",
      description: "Профессиональная глажка с использованием промышленного оборудования"
    },
    {
      id: 3,
      image: "/assets/webp/packaging-marking.webp",
      title: "Маркировка белья по категориям и объектам",
      description: "Удобная система маркировки для быстрой идентификации и сортировки"
    },
    {
      id: 4,
      image: "/assets/webp/packaging-medical.webp",
      title: "Индивидуальная упаковка по Вашим требованиям",
      description: "Персонализированная упаковка с учетом специфики вашего бизнеса"
    }
  ]

  return (
    <>
      <section className="bg-white px-4 py-10 lg:px-8 lg:py-20 lg:max-w-[87.5rem] lg:mx-auto relative overflow-hidden">
        {/* Decorative elements - positioned safely outside content */}
        <div className="hidden lg:block absolute top-[4rem] right-[2rem] w-[5rem] h-[5rem] opacity-20 pointer-events-none">
          <div className="grid grid-cols-5 gap-[0.4rem]">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className="w-[0.4rem] h-[0.4rem] bg-gradient-to-br from-[#97C3F9] to-[#93C1F9] rounded-full"></div>
            ))}
          </div>
        </div>
        <DecorativePattern
          position="custom"
          customPosition="top-[20px] right-[-33px]"
          width="66px"
          height="57.5px"
          mobileOnly
        />

        <div className="mb-10 lg:mb-16">
          <div className="flex justify-start mb-6 lg:justify-start lg:mb-8">
            <div className="border border-[#3A64C5] rounded-[50px] px-[34px] py-[14px] lg:px-[40px] lg:py-[16px]">
              <span className="text-[#3A64C5] font-montserrat font-medium text-[14px] leading-[1.71] uppercase lg:text-[16px]">
                Упаковка
              </span>
            </div>
          </div>
          
          <h2 className="text-[#3A64C5] font-montserrat font-bold text-[22px] leading-[1.55] uppercase text-left lg:text-[34px] lg:leading-[1.53] lg:text-left">
            Упакуем по Вашему техническому заданию
          </h2>
        </div>

        {/* Mobile version - vertical stack */}
        <div className="space-y-5 lg:hidden">
          {packagingOptions.map((option) => (
            <Card key={option.id} className="bg-white rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] overflow-hidden">
              <div className="p-5">
                <div className="space-y-5">
                  <div className="space-y-5">
                    <h3 className="text-[#1B2A46] font-montserrat font-bold text-[18px] leading-[1.33]">
                      {option.title}
                    </h3>
                    <p className="text-[#1B2A46] font-montserrat font-normal text-[16px] leading-[1.5]">
                      {option.description}
                    </p>
                  </div>
                  <div className="h-[218px] relative rounded-[10px] overflow-hidden">
                    <img
                      src={option.image}
                      alt={option.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Desktop version - 4 cards in a row */}
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-10">
          {packagingOptions.map((option, index) => (
            <Card key={option.id} className="bg-white rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] overflow-hidden">
              <div className={`flex items-center gap-6 p-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                <div className="flex-1 space-y-6">
                  <h3 className="text-[#1B2A46] font-montserrat font-bold text-[18px] leading-[1.33]">
                    {option.title}
                  </h3>
                  <p className="text-[#1B2A46] font-montserrat font-normal text-[16px] leading-[1.5]">
                    {option.description}
                  </p>
                </div>
                <div className="w-[515px] h-[218px] relative rounded-[20px] overflow-hidden flex-shrink-0">
                  <img
                    src={option.image}
                    alt={option.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  )
}