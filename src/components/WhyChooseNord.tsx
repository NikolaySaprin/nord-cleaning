"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Card } from "@/components/ui/card"
import { ContactModal } from './ContactModal'

export function WhyChooseNord() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const advantages = [
    {
      id: 1,
      title: "Качество стирки на высшем уровне",
      description: "Используем профессиональные машины и проверенные моющие средства",
      icon: <Image src="/assets/advantage-icon-1.svg" alt="" width={64} height={64} className="object-contain" />
    },
    {
      id: 2,
      title: "Удаляем сложные и застарелые пятна",
      description: "Косметика, масло, грязь, жир не станут проблемой",
      icon: <Image src="/assets/advantage-icon-2.svg" alt="" width={64} height={64} className="object-contain" />
    },
    {
      id: 3,
      title: "Круглосуточная работа 24/7",
      description: "Подстроимся под Ваш график, чтобы не останавливать рабочие процессы",
      icon: <Image src="/assets/advantage-icon-3.svg" alt="" width={64} height={64} className="object-contain" />
    },
    {
      id: 4,
      title: "Бесплатная и быстрая доставка",
      description: "Без задержек и накладок в любое время суток",
      icon: <Image src="/assets/advantage-icon-4.svg" alt="" width={64} height={64} className="object-contain" />
    },
    {
      id: 5,
      title: "Бережный уход за тканями",
      description: "Правильная технология стирки увеличивает срок службы белья на 60%",
      icon: <Image src="/assets/advantage-icon-5.svg" alt="" width={64} height={64} className="object-contain" />
    },
    {
      id: 6,
      title: "Персональный менеджер",
      description: "Закрепленный специалист который знает все особенности вашего бизнеса",
      icon: <Image src="/assets/advantage-icon-6.svg" alt="" width={64} height={64} className="object-contain" />
    }
  ]

  return (
    <>
      <section className="bg-[#F7F8FA] px-[1rem] py-[2.5rem] lg:px-[2rem] lg:py-[5rem] lg:max-w-[87.5rem] lg:mx-auto relative overflow-hidden">
        {/* Decorative pattern for desktop - positioned safely outside content */}
        <div className="hidden lg:block absolute top-[8rem] right-[2rem] w-[6rem] h-[6rem] opacity-25 pointer-events-none">
          <div className="grid grid-cols-5 gap-[0.5rem]">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className="w-[0.5rem] h-[0.5rem] bg-gradient-to-br from-[#97C3F9] to-[#93C1F9] rounded-full"></div>
            ))}
          </div>
        </div>

        <div className="mb-[2.5rem] lg:mb-[4rem]">
          <div className="flex justify-start mb-[1.5rem] lg:justify-start lg:mb-[2rem]">
            <div className="border border-[#3A64C5] rounded-[3.125rem] px-[2.125rem] py-[0.875rem] lg:px-[2.5rem] lg:py-[1rem]">
              <span className="text-[#3A64C5] font-montserrat font-medium text-[0.875rem] leading-[1.71] uppercase lg:text-[1rem]">
                Почему мы?
              </span>
            </div>
          </div>

          <h2 className="text-[#3A64C5] font-montserrat font-bold text-[1.375rem] leading-[1.55] uppercase text-left lg:text-[2.125rem] lg:leading-[1.53] lg:text-left">
            Причины выбрать Nord как партнера
          </h2>
        </div>

        {/* Mobile version - vertical stack */}
        <div className="space-y-[1.25rem] lg:hidden">
          {advantages.map((advantage) => (
            <Card key={advantage.id} className="bg-white rounded-lg p-[2rem] flex flex-col items-center text-center shadow-[0px_0px_0.625rem_0px_rgba(0,0,0,0.1)]">
              <div className="mb-[1.5rem]">
                {advantage.icon}
              </div>
              <div className="space-y-[1rem]">
                <h3 className="text-[#1B2A46] font-montserrat font-bold text-[1.25rem] leading-[1.6]">
                  {advantage.title}
                </h3>
                <p className="text-[#555A65] font-montserrat font-normal text-[1rem] leading-[1.5]">
                  {advantage.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Desktop version - 3x2 grid in white container - responsive */}
        <div className="hidden lg:block">
          <Card className="bg-white rounded-[1.25rem] p-[6.25rem_7.5rem] shadow-none border-none w-full max-w-[85rem] mx-auto">
            <div className="w-full max-w-[75rem] mx-auto">
              <div className="grid grid-cols-3 gap-[2.5rem]">
                {advantages.map((advantage) => (
                  <div key={advantage.id} className="flex flex-col items-center text-center gap-[1.5rem] p-[2.5rem_1.875rem] bg-white rounded-lg shadow-[0px_0px_0.625rem_0px_rgba(0,0,0,0.1)]">
                    <div className="mb-0">
                      {advantage.icon}
                    </div>
                    <div className="space-y-[1rem]">
                      <h3 className="text-[#1B2A46] font-montserrat font-bold text-[1.25rem] leading-[1.6]">
                        {advantage.title}
                      </h3>
                      <p className="text-[#555A65] font-montserrat font-normal text-[1rem] leading-[1.5]">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  )
}