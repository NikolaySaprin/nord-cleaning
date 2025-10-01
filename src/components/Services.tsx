'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ContactModal } from './ContactModal';
import { Card } from '@/components/ui/card';

const services = [
  {
    id: 1,
    category: "HoReCa",
    subtitle: "—  отели, рестораны, кейтеринг",
    title: "HoReCa",
    badge: "Белье, полотенца, скатерти, спецодежда",
    description: "Раздельные потоки белого/цветного\nЭкспресс-цикл от 6 часов для форс‑мажора\nМаркировка по объектам/службам: номер этажа/службы",
    image: "/assets/service-hotel.png"
  },
  {
    id: 2,
    category: "Спорт и фитнес",
    subtitle: "—  клубы, бассейны, секции",
    title: "Спорт и фитнес",
    badge: "Халаты, полотенца, спецодежда ",
    description: "Антибактериальные программы, эко-химия для полотенец\nСушка при контроле температуры ±2 °C, анти‑пиллинг\nГрафик забора утром/поздним вечером",
    image: "/assets/service-fitness.png"
  },
  {
    id: 3,
    category: "Салоны красоты и SPA",
    subtitle: "",
    title: "Салоны красоты и SPA",
    badge: "Халаты, полотенца, простыни ",
    description: "Специализированная химия против масел и красителей\nКондиционирование для сохранения мягкости\nИндивидуальные комплекты по мастерам/кабинетам",
    image: "/assets/service-spa.png"
  },
  {
    id: 4,
    category: "Производство и склад",
    subtitle: "",
    title: "Производство и склад",
    badge: "Форменная одежда, перчатки, ветошь",
    description: "Усиленные программы для масла/смазок\nМаркировка по сотрудникам/сменам по запросу\nПрочные мешки, повышенная износостойкость",
    image: "/assets/service-production.png"
  },
  {
    id: 5,
    category: "Ритейл и e‑commerce",
    subtitle: "",
    title: "Ритейл и e‑commerce",
    badge: "Примерочные, шторы, коврики, витрины",
    description: "Экспресс-логистика для возвратов и промотекстиля\nИндивидуальная упаковка с наклейками SKU/магазин\nГлажка без заломов, паровая обработка",
    image: "/assets/service-retail.png"
  },
  {
    id: 6,
    category: "Сфера недвижимости",
    subtitle: "—  апарт‑отели, аренда, клининг",
    title: "Сфера недвижимости",
    badge: "Халаты, полотенца, простыни ",
    description: "Комплектация наборами (простыня/наволочки/полотенца)\nМаркировка по объектам и управляющим\nГибкие окна забора под заселения/выезды",
    image: "/assets/service-realestate.png"
  },
  {
    id: 7,
    category: "Пекарни/фуд‑производства",
    subtitle: "",
    title: "Пекарни/фуд‑производства",
    badge: "Полотна, фартуки",
    description: "Программы против жиров/муки, без запахов\nЧастые рейсы, ночные окна\nТеплостойкая упаковка при необходимости",
    image: "/assets/service-bakery.png"
  },
  {
    id: 8,
    category: "Для баней и бассейнов",
    subtitle: "",
    title: "Для баней и бассейнов",
    badge: "Халаты, полотенца",
    description: "Специальная обработка текстиля для влажных помещений с антибактериальными средствами",
    image: "/assets/service-pool.png"
  }
];

export const Services = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <section className="bg-gradient-to-br from-[#628CED] to-[#3A64C5] px-4 py-20 rounded-2xl relative overflow-hidden lg:px-8 lg:py-32 lg:max-w-7xl lg:mx-auto z-0 mt-[-40px] lg:mt-[-80px]">
        {/* Decorative elements */}
        <div className="absolute right-[304px] top-[537px] w-[100px] h-[100px] opacity-25">
          <div className="grid grid-cols-5 gap-[10px]">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className="w-[10px] h-[10px] bg-gradient-to-br from-[#97C3F9] to-[#93C1F9] rounded-full"></div>
            ))}
          </div>
        </div>

      <div className="mb-10 lg:mb-16">
        <div className="flex justify-center mb-6 lg:justify-start lg:mb-8">
          <div className="border border-white rounded-[50px] px-[34px] py-[14px] lg:px-[40px] lg:py-[16px]">
            <span className="text-white font-montserrat font-medium text-[14px] leading-[1.71] uppercase lg:text-[16px]">
              УСЛУГИ
            </span>
          </div>
        </div>
        <h2 className="text-white font-montserrat font-bold text-[22px] leading-[1.55] uppercase text-center lg:text-[34px] lg:leading-[1.53] lg:text-left">
          Для кого мы работаем
        </h2>
      </div>

        <div className="space-y-[20px] mb-10 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0 lg:mb-16">
          {services.map((service) => (
            <Card key={service.id} className="bg-white rounded-[20px] shadow-[0px_0px_10px_4px_rgba(255,255,255,0.2)] overflow-hidden lg:shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] flex flex-col h-full">
              {/* Image Section */}
              <div className="h-[315px] relative lg:h-[250px]">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-5 left-2.5 bg-white rounded-[50px] px-3 py-2">
                  <span className="text-black font-montserrat font-light text-[14px] leading-[1.71]">
                    {service.badge}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5 lg:p-8 flex flex-col flex-grow">
                <div className="space-y-2.5 lg:space-y-4 flex-grow">
                  <div className="space-y-0">
                    <h3 className="text-black font-montserrat font-bold text-[22px] leading-[1.22] lg:text-[24px] lg:leading-[1.2]">
                      {service.title}
                    </h3>
                    {service.subtitle && (
                      <p className="text-black font-montserrat font-light text-[14px] leading-[1.71] lg:text-[16px]">
                        {service.subtitle}
                      </p>
                    )}
                  </div>
                  
                  <div className="w-[305px] lg:w-full">
                    <p className="text-[#1D1C3E] font-montserrat font-normal text-[16px] leading-[1.22] whitespace-pre-line lg:text-[18px] lg:leading-[1.4]">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 lg:flex-row lg:gap-4 mt-6">
                  <Button 
                    onClick={() => setIsContactModalOpen(true)}
                    className="bg-[#3264F6] hover:bg-[#2950D4] text-white font-montserrat font-medium text-[14px] leading-[1.71] px-6 py-3 rounded-[12px] flex items-center justify-center gap-3 lg:flex-1 lg:text-[16px] lg:py-4"
                  >
                    Заказать услугу
                    <img src="/vector.svg" alt="" className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="bg-[#F7F8FA] rounded-[1.25rem] p-[1.25rem] relative overflow-hidden lg:max-w-[75rem] lg:mx-auto lg:p-[3.75rem]">
          {/* Decorative elements from Figma */}
          <div className="absolute top-[4rem] right-[17.1875rem] w-[5.1875rem] h-[5.6875rem] lg:-left-[1.3125rem] lg:top-[12.875rem] lg:w-[19.4375rem] lg:h-[21.3125rem]">
            <img src="/assets/snowflake-2.svg" alt="" className="w-full h-full opacity-100" />
          </div>
          <div className="absolute bottom-[3.625rem] right-[16.5625rem] w-[6.9375rem] h-[7.5625rem] lg:right-[31.0625rem] lg:top-[0.625rem] lg:w-[5.1875rem] lg:h-[5.6875rem]">
            <img src="/assets/snowflake-1.svg" alt="" className="w-full h-full opacity-100" />
          </div>

          <div className="relative z-10">
            {/* Mobile layout */}
            <div className="lg:hidden">
              <h3 className="text-[#202124] font-montserrat font-bold text-[1.25rem] leading-[1.7] mb-[1.25rem]">
                Не нашли вашу отрасль?
                <br/>
                Запросите индивидуальные условия.
              </h3>

              <div className="space-y-[1.25rem]">
                <p className="text-[#202124] font-montserrat font-normal text-[0.875rem] leading-[1.71]">
                  Оставьте заявку — мы перезвоним вам с готовым коммерческим предложением!
                </p>

                <div className="space-y-[1.25rem]">
                  <div className="flex items-center gap-[0.5rem] p-[0.625rem_1rem] border border-[#D7DAE2] rounded-[0.5rem] bg-white">
                    <input 
                      type="text" 
                      placeholder="Ваше имя"
                      className="flex-1 text-[#999EAD] font-montserrat font-normal text-[0.875rem] leading-[1.71] bg-transparent border-none outline-none"
                    />
                    <img src="/form-icon/people-Icon.svg" alt="" className="w-6 h-6" />
                  </div>

                  <div className="flex items-center gap-[0.5rem] p-[0.625rem_1rem] border border-[#D7DAE2] rounded-[0.5rem] bg-white">
                    <input 
                      type="tel" 
                      placeholder="+7 (999) 999-99-99"
                      className="flex-1 text-[#999EAD] font-montserrat font-normal text-[0.875rem] leading-[1.71] bg-transparent border-none outline-none"
                    />
                    <img src="/form-icon/phone-Icon.svg" alt="" className="w-6 h-6" />
                  </div>

                  <div className="flex items-center gap-[0.5rem] p-[0.625rem_1rem] border border-[#D7DAE2] rounded-[0.5rem] bg-white">
                    <input 
                      type="text" 
                      placeholder="Ваша сфера (не обязательно)"
                      className="flex-1 text-[#999EAD] font-montserrat font-normal text-[0.875rem] leading-[1.71] bg-transparent border-none outline-none"
                    />
                    <img src="/form-icon/pencil-Icon.svg" alt="" className="w-6 h-6" />
                  </div>

                  <div className="flex flex-col gap-[1.25rem]">
                    <Button 
                      onClick={() => setIsContactModalOpen(true)}
                      className="bg-[#3264F6] hover:bg-[#2950D4] text-white font-montserrat font-medium text-[0.875rem] leading-[1.43] px-[1rem] py-[0.625rem] rounded-[0.5rem] h-[2.75rem] w-full flex items-center justify-center"
                    >
                      Получить КП
                    </Button>

                    <div className="flex items-center gap-[0.625rem] px-[1.25rem]">
                      <div className="w-[1rem] h-[1rem] border-2 border-[#999EAD] bg-[#D9D9D9] rounded-[0.125rem]"></div>
                      <p className="text-[#202124] font-montserrat font-normal text-[0.75rem] leading-[1.22]">
                        Отправляя форму Вы соглашаетесь с политикой конфиденциальности
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop layout - two columns */}
            <div className="hidden lg:flex lg:gap-[2.5rem] lg:items-stretch">
              {/* Left column - titles */}
              <div className="flex-1 min-w-[32.5rem]">
                <h3 className="text-[#202124] font-montserrat font-bold text-[1.5rem] leading-[1.42] mb-[1.25rem]">
                  Не нашли вашу отрасль?
                  <br/>
                  Запросите индивидуальные условия.
                </h3>

                <p className="text-[#202124] font-montserrat font-normal text-[1rem] leading-[1.5]">
                  Оставьте заявку — мы перезвоним вам с готовым коммерческим предложением!
                </p>
              </div>

              {/* Right column - form inputs */}
              <div className="flex-1 min-w-[32.5rem]">
                <div className="space-y-[1.25rem]">
                  <div className="flex items-center gap-[0.5rem] p-[0.625rem_1rem] border border-[#D7DAE2] rounded-[0.5rem] bg-white">
                    <input 
                      type="text" 
                      placeholder="Ваше имя"
                      className="flex-1 text-[#999EAD] font-montserrat font-normal text-[1rem] leading-[1.5] bg-transparent border-none outline-none"
                    />
                    <img src="/form-icon/people-Icon.svg" alt="" className="w-6 h-6" />
                  </div>

                  <div className="flex items-center gap-[0.5rem] p-[0.625rem_1rem] border border-[#D7DAE2] rounded-[0.5rem] bg-white">
                    <input 
                      type="tel" 
                      placeholder="+7 (999) 999-99-99"
                      className="flex-1 text-[#999EAD] font-montserrat font-normal text-[1rem] leading-[1.5] bg-transparent border-none outline-none"
                    />
                    <img src="/form-icon/phone-Icon.svg" alt="" className="w-6 h-6" />
                  </div>

                  <div className="flex items-center gap-[0.5rem] p-[0.625rem_1rem] border border-[#D7DAE2] rounded-[0.5rem] bg-white">
                    <input 
                      type="text" 
                      placeholder="Ваша сфера (не обязательно)"
                      className="flex-1 text-[#999EAD] font-montserrat font-normal text-[1rem] leading-[1.5] bg-transparent border-none outline-none"
                    />
                    <img src="/form-icon/pencil-Icon.svg" alt="" className="w-6 h-6" />
                  </div>

                  <div className="flex items-center gap-[1.25rem]">
                    <Button 
                      onClick={() => setIsContactModalOpen(true)}
                      className="bg-[#3264F6] hover:bg-[#2950D4] text-white font-montserrat font-medium text-[0.875rem] leading-[1.43] px-[1rem] py-[0.625rem] rounded-[0.5rem] h-[2.75rem] flex items-center justify-center"
                    >
                      Получить КП
                    </Button>

                    <div className="flex items-center gap-[0.625rem]">
                      <div className="w-[0.875rem] h-[0.875rem] border-2 border-[#999EAD] bg-[#D9D9D9] rounded-[0.125rem]"></div>
                      <p className="text-[#202124] font-montserrat font-normal text-[0.75rem] leading-[1.22] max-w-[17.9375rem]">
                        Отправляя форму Вы соглашаетесь с политикой конфиденциальности
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};