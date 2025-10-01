'use client';

import { Card } from "@/components/ui/card"

export function Features() {
  const features = [
    {
      number: "60%",
      prefix: "до",
      title: "Продление срока службы белья за счет бережного процесса стирки"
    },
    {
      number: "35",
      unit: "кг",
      prefix: "от",
      title: "Бесплатная доставка"
    },
    {
      number: "40%",
      prefix: "до",
      title: "Экономии на стирке за счет маршрутизации и тарифа по объему"
    }
  ]

  return (
    <section className="relative z-10 -mt-[0px] lg:-mt-[0px] mb-[60px] lg:mb-[-30px]">
      <div className="px-[1rem] lg:px-[2rem] lg:max-w-[87.5rem] lg:mx-auto">
        <div className="flex flex-col gap-[1.25rem] lg:flex-row lg:gap-[2rem] lg:justify-center">
          {features.map((feature, index) => (
            <Card key={index} className="bg-[#E3EAF6] rounded-[1.25rem] p-[2rem] flex flex-col items-center text-center lg:flex-1 lg:max-w-[21.875rem] lg:p-[2.5rem] shadow-[0px_0.25rem_1.25rem_0px_rgba(0,0,0,0.1)]">
              <div className="flex items-baseline justify-center mb-[0.625rem] lg:mb-[1rem]">
                {feature.prefix && (
                  <span className="text-[#3A64C5] font-outfit font-extrabold text-[1.375rem] leading-[1.26] mr-[0.5rem] lg:text-[1.75rem]">
                    {feature.prefix}
                  </span>
                )}
                <span className="text-[#3A64C5] font-outfit font-extrabold text-[2.625rem] leading-[1.26] lg:text-[3.5rem]">
                  {feature.number}
                </span>
                {feature.unit && (
                  <span className="text-[#3A64C5] font-outfit font-extrabold text-[1.375rem] leading-[1.26] ml-[0.5rem] lg:text-[1.75rem]">
                    {feature.unit}
                  </span>
                )}
              </div>
              <p className="text-[#1B2A46] font-montserrat font-normal text-[0.875rem] leading-[1.71] px-[1.25rem] lg:text-[1rem] lg:leading-[1.5] lg:px-[0.5rem]">
                {feature.title}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}