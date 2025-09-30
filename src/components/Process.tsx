"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Process() {
  const steps = [
    {
      number: "1",
      title: "Забор белья",
      description: "Бесплатно от 30 кг, гибкие и ночные слоты",
      image: "/assets/step-pickup.png"
    },
    {
      number: "2", 
      title: "Сортировка",
      description: "По типам ткани и степени загрязнения",
      image: "/assets/step-sorting.png"
    },
    {
      number: "3",
      title: "Стирка и пятновыведение", 
      description: "Индивидуальные режимы под каждую ткань",
      image: "/assets/step-washing.png"
    },
    {
      number: "4",
      title: "Сушка, глажка и упаковка",
      description: "Аккуратность и гигиеничность",
      image: "/assets/step-drying.png"
    },
    {
      number: "5",
      title: "Маркировка и отчетность",
      description: "Привязка к объектам/категориям, фотофиксация",
      image: "/assets/step-marking.png"
    },
    {
      number: "6",
      title: "Доставка обратно",
      description: "В согласованное время, подтверждение вручения",
      image: "/assets/step-delivery.png"
    }
  ]

  return (
    <section className="bg-[#F7F8FA] rounded-t-[20px] px-4 py-10 lg:px-8 lg:py-20 lg:max-w-7xl lg:mx-auto">
      <div className="mb-10 lg:mb-16">
        <div className="flex justify-center mb-6 lg:justify-start lg:mb-8">
          <div className="border border-[#3A64C5] rounded-[50px] px-[34px] py-[14px] lg:px-[40px] lg:py-[16px]">
            <span className="text-[#3A64C5] font-montserrat font-medium text-[14px] leading-[1.71] uppercase lg:text-[16px]">
              Процесс работы
            </span>
          </div>
        </div>
        
        <h2 className="text-[#3A64C5] font-montserrat font-bold text-[22px] leading-[1.55] uppercase text-center lg:text-[34px] lg:leading-[1.53] lg:text-left">
          Простой и надежный процесс в 6 шагов
        </h2>
      </div>

      {/* Mobile version - vertical stack */}
      <div className="space-y-5 lg:hidden">
        {steps.map((step, index) => (
          <Card key={index} className="bg-white rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] overflow-hidden">
            <div className="h-[240px] relative">
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between">
                <div className="flex-1 pr-4">
                  <h3 className="text-[#1B2A46] font-montserrat font-bold text-[18px] leading-[1.33] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#1B2A46] font-montserrat font-normal text-[16px] leading-[1.5]">
                    {step.description}
                  </p>
                </div>
                <div className="w-[42px] h-[42px] border-2 border-[#3A64C5] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[#3A64C5] font-outfit font-extrabold text-[30px] leading-[1.26]">
                    {step.number}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Desktop version - 3x2 grid */}
      <div className="hidden lg:grid lg:grid-cols-3 lg:gap-10">
        {steps.map((step, index) => (
          <Card key={index} className="bg-white rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] overflow-hidden">
            <div className="h-[240px] relative">
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-start justify-between">
                <div className="flex-1 pr-6">
                  <h3 className="text-[#1B2A46] font-montserrat font-bold text-[18px] leading-[1.33] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#1B2A46] font-montserrat font-normal text-[16px] leading-[1.5]">
                    {step.description}
                  </p>
                </div>
                <div className="w-[55px] h-[55px] border-2 border-[#3A64C5] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[#3A64C5] font-outfit font-extrabold text-[40px] leading-[1.26]">
                    {step.number}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-10 lg:mt-16">
        <Button className="bg-[#3264F6] hover:bg-[#2950D4] text-white font-montserrat font-medium text-[14px] leading-[1.71] px-6 py-4 rounded-[12px] flex items-center justify-center gap-3">
          Запросить график под ваш объект
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </Button>
      </div>
    </section>
  )
}
