'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ContactModal } from './ContactModal';
import { Card } from '@/components/ui/card';
import { DecorativePattern } from './DecorativePattern';
import { ApplicationForm } from './ApplicationForm';

const services = [
  {
    id: 0,
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
    category: "Для бань и бассейнов",
    subtitle: "",
    title: "Для бань и бассейнов",
    badge: "Халаты, полотенца",
    description: "Специальная обработка текстиля для влажных помещений с антибактериальными средствами",
    image: "/assets/service-pool.png"
  },
  {
    id: 5,
    category: "Производство и склад",
    subtitle: "",
    title: "Производство и склад",
    badge: "Форменная одежда, перчатки",
    description: "Усиленные программы для машинных масел\nМаркировка по сотрудникам и сменам\nПрочные мешки, повышенная износостойкость",
    image: "/assets/service-production.png"
  },
  {
    id: 6,
    category: "Ритейл и e‑commerce",
    subtitle: "",
    title: "Ритейл и e‑commerce",
    badge: "Примерочные, шторы, коврики",
    description: "Экспресс-логистика для возвратов и промотекстиля\nИндивидуальная упаковка с наклейками SKU\nГлажка без заломов, паровая обработка",
    image: "/assets/service-retail.png"
  },
  {
    id: 7,
    category: "Сфера недвижимости",
    subtitle: "—  апарт‑отели, аренда, клининг",
    title: "Сфера недвижимости",
    badge: "Халаты, полотенца, простыни ",
    description: "Комплектация наборами (простыня/наволочки/полотенца)\nМаркировка по объектам и управляющим\nГибкие окна забора под заселения/выезды",
    image: "/assets/service-realestate.png"
  },
  {
    id: 8,
    category: "Пекарни/фуд‑производства",
    subtitle: "",
    title: "Пекарни/фуд‑производства",
    badge: "Полотна, фартуки",
    description: "Программы против жиров/муки, без запахов\nЧастые рейсы, ночные окна\nТеплостойкая упаковка при необходимости",
    image: "/assets/service-bakery.png"
  },

];

export const Services = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <section className="bg-gradient-to-br from-[#628CED] to-[#3A64C5] px-4 py-20 rounded-2xl relative overflow-hidden lg:px-8 lg:py-32 lg:max-w-7xl lg:mx-auto z-0 mt-[-40px] lg:mt-[-80px]">
        {/* Decorative elements */}
        <DecorativePattern
          position="custom"
          customPosition="top-[20px] right-[-33px]"
          width="66px"
          height="57.5px"
          mobileOnly
        />
        <div className="absolute right-[304px] top-[537px] w-[100px] h-[100px] opacity-25 hidden lg:block">
          <div className="grid grid-cols-5 gap-[10px]">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className="w-[10px] h-[10px] bg-gradient-to-br from-[#97C3F9] to-[#93C1F9] rounded-full"></div>
            ))}
          </div>
        </div>

        <div className="mb-10 lg:mb-16">
          <div className="flex justify-start mb-6 lg:justify-start lg:mb-8">
            <div className="border border-white rounded-[50px] px-[34px] py-[14px] lg:px-[40px] lg:py-[16px]">
              <span className="text-white font-montserrat font-medium text-[14px] leading-[1.71] uppercase lg:text-[16px]">
                УСЛУГИ
              </span>
            </div>
          </div>
          <h2 className="text-white font-montserrat font-bold text-[22px] leading-[1.55] uppercase text-left lg:text-[34px] lg:leading-[1.53] lg:text-left">
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
        <ApplicationForm
          title="Не нашли вашу отрасль? Запросите индивидуальные условия"
          description="Оставьте заявку — мы перезвоним вам с готовым коммерческим предложением!"
          showSphereField={true}
          source="services_form"
          buttonText="Получить КП"
        />
      </section>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};