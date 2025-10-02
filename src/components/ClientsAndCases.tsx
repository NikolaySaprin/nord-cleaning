"use client"

import { useState, useEffect, useRef } from 'react'
import { Card } from "@/components/ui/card"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

export function ClientsAndCases() {
  const [activeCase, setActiveCase] = useState(0)
  const swiperRef = useRef<any>(null)

  const clients = [
    { name: "REDSTAR HOTELS", id: 1, logo: "/assets/red-star.png" },
    { name: "ТАЙРАЙ", id: 2, logo: "/assets/tai-rai.png" },
    { name: "ХОСТЕЛЫ РУС", id: 3, logo: "/assets/rus-hostels.png" },
    { name: "AURA SPA", id: 4, logo: "/assets/aura.png" },
    { name: "REDSTAR HOTELS", id: 5, logo: "/assets/red-star.png" },
    { name: "ТАЙРАЙ", id: 6, logo: "/assets/tai-rai.png" },
  ]

  const cases = [
    {
      id: 0,
      title: "Сеть массажных салонов «Тай Рай»",
      subtitle: "решение проблемы масляных полотенец",
      task: "Полотенца после СПА-процедур были полностью пропитаны массажными маслами. Стандартная стирка не помогала: ткань оставалась жирной и теряла вид.",
      solution: "Мы протестировали несколько методов и подобрали универсальную технологию с профессиональными средствами, позволяющую удалять даже глубоко въевшиеся масла.",
      result: [
        "Текстиль снова стал белоснежным и аккуратным.",
        "Масло удаляется стабильно при каждой стирке.",
        "Гости получают свежие полотенца без малейших следов загрязнений."
      ]
    },
    {
      id: 1,
      title: "Бассейн и массажный комплекс «Аура СПА»",
      subtitle: "устранение запаха хлора и восстановление махровых полотенец",
      task: "Полотенца после стирки сохраняли резкий запах хлорки, были тяжёлыми, потеряли мягкость и выглядели изношенными. Их собирались заменить.",
      solution: "Мы составили специальную формулу обработки, которая выводит хлорсодержащие остатки, восстанавливает структуру махры и возвращает ткани свежесть.",
      result: [
        "Полотенца вновь стали мягкими и пышными.",
        "Запах хлорки полностью устранён.",
        "Текстиль выглядит как новый, без пятен и серости."
      ]
    },
    {
      id: 2,
      title: "Хостел Рус",
      subtitle: "возвращение к жизни белья после неудачных попыток других прачечных",
      task: "Постельное бельё выглядело крайне плохо: серое, в пятнах, с неприятным запахом. Две прачечные уже пытались отстирать его, но безуспешно.",
      solution: "Мы использовали несколько циклов стирки, замачивание и отбеливающие составы. Внимательно обработали каждый комплект, чтобы восстановить ткань до первоначального состояния.",
      result: [
        "Бельё стало белоснежным и свежим.",
        "Все застарелые пятна удалены.",
        "Хостел впервые получил качественный результат, соответствующий ожиданиям гостей."
      ]
    },
    {
      id: 3,
      title: "Фитнес-клуб GYM-GYM",
      subtitle: "стабильная доставка и особые требования к упаковке",
      task: "Фитнес-клуб предъявил строгие требования: полотенца должны быть ароматными, свежими, доставляться строго по графику и упаковываться по особой технологии.",
      solution: "Мы подобрали специальные средства для стойкого аромата, выстроили точный график логистики и внедрили формат упаковки, полностью соответствующий стандартам клиента.",
      result: [
        "Стабильная поставка без задержек.",
        "Полотенца всегда аккуратно упакованы и приятно пахнут.",
        "У клиента исчез риск перебоев в работе."
      ]
    },
    {
      id: 4,
      title: "Хоккейный клуб «Звезда»",
      subtitle: "деликатная стирка формы хоккеистов",
      task: "Необходимо было стирать форму известных хоккеистов максимально бережно: исключить усадку и повреждения, удалять пятна крови и сложные загрязнения, обеспечивать доставку точно в срок, быть готовыми к любым объёмам, включая срочные.",
      solution: "Мы разработали мягкую технологию стирки с использованием деликатной химии, безопасной для спортсменов. Применили методы для эффективного удаления крови и усилили логистику для гарантированной своевременной доставки.",
      result: [
        "Форма всегда выглядит свежо и аккуратно.",
        "Пятна удаляются без следа.",
        "Доставка стабильна, даже в пиковые периоды."
      ]
    }
  ]

  return (
    <section className="bg-gradient-to-br from-[#628CED] to-[#3A64C5] px-4 py-10 lg:px-8 lg:py-20 lg:max-w-7xl lg:mx-auto">
      <div className="mb-10 lg:mb-16">
        <div className="flex justify-center mb-6 lg:justify-start lg:mb-8">
          <div className="border border-white rounded-[50px] px-[34px] py-[14px] lg:px-[40px] lg:py-[16px]">
            <span className="text-white font-montserrat font-medium text-[14px] leading-[1.71] uppercase lg:text-[16px]">
              Клиенты
            </span>
          </div>
        </div>
        <h2 className="text-white font-montserrat font-bold text-[22px] leading-[1.55] uppercase text-center lg:text-[34px] lg:leading-[1.53] lg:text-left">
          Нам доверяют
        </h2>
      </div>

      {/* Client Logos */}
      <div className="overflow-x-auto mb-10 lg:mb-16">
        <div className="flex gap-10 w-[1200px] lg:justify-center lg:w-full lg:gap-8">
          {clients.map((client) => (
            <div key={client.id} className="w-40 h-[70px] bg-white rounded-[10px] flex items-center justify-center lg:w-[270px] lg:h-[120px] p-2">
              <img src={client.logo} alt={client.name} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Cases Header */}
      <div className="mb-10 lg:mb-16">
        <div className="flex justify-center lg:justify-start">
          <div className="border border-white rounded-[50px] px-[34px] py-[14px] lg:px-[40px] lg:py-[16px]">
            <span className="text-white font-montserrat font-medium text-[14px] leading-[1.71] uppercase lg:text-[16px]">
              Кейсы
            </span>
          </div>
        </div>
      </div>

      {/* Cases Section */}
      <div className="lg:flex lg:gap-10">
        {/* Desktop: Left side - Case titles */}
        <div className="hidden lg:flex lg:flex-col lg:gap-5 lg:w-[460px]">
          {cases.map((caseItem, index) => (
            <button
              key={caseItem.id}
              onClick={() => setActiveCase(index)}
              className={`text-left p-6 rounded-[20px] transition-all ${
                activeCase === index
                  ? 'bg-white'
                  : 'bg-[#C5D3EC] hover:bg-white/50'
              }`}
            >
              <h3 className={`font-montserrat font-bold text-[18px] leading-[1.33] mb-2 ${
                activeCase === index ? 'text-[#4A74D5]' : 'text-[#4F79D9]'
              }`}>
                {caseItem.title}
              </h3>
              <p className={`font-montserrat font-normal text-[14px] leading-[1.71] ${
                activeCase === index ? 'text-[#4A74D5]' : 'text-[#4F79D9]'
              }`}>
                {caseItem.subtitle}
              </p>
            </button>
          ))}
        </div>

        {/* Mobile: Swiper for case titles */}
        <div className="lg:hidden mb-6">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 15000,
              disableOnInteraction: false,
            }}
            onSlideChange={(swiper) => setActiveCase(swiper.realIndex)}
            className="w-full"
          >
            {cases.map((caseItem, index) => (
              <SwiperSlide key={caseItem.id}>
                <button
                  onClick={() => setActiveCase(index)}
                  className={`w-full text-left p-6 rounded-[20px] transition-all relative ${
                    activeCase === index
                      ? 'bg-white'
                      : 'bg-[#C5D3EC] hover:bg-white/50'
                  }`}
                >
                  <h3 className={`font-montserrat font-bold text-[18px] leading-[1.33] mb-2 ${
                    activeCase === index ? 'text-[#4A74D5]' : 'text-[#4F79D9]'
                  }`}>
                    {caseItem.title}
                  </h3>
                  <p className={`font-montserrat font-normal text-[14px] leading-[1.71] ${
                    activeCase === index ? 'text-[#4A74D5]' : 'text-[#4F79D9]'
                  }`}>
                    {caseItem.subtitle}
                  </p>
                  {activeCase === index && (
                    <div className="absolute top-6 right-6 w-7 h-[22px] bg-[#5F88E9] border border-[#5F88E9] rounded-lg flex items-center justify-center">
                      <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 9L6 5.63" stroke="white" strokeWidth="1.5"/>
                      </svg>
                    </div>
                  )}
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right side: Case details */}
        <div className="lg:flex-1">
          <Card className="bg-white rounded-[20px] p-6 lg:p-10">
            <div className="space-y-8 lg:space-y-10">
              <div>
                <h4 className="text-[#1B2A46] font-montserrat font-bold text-[18px] leading-[1.33] mb-4 lg:text-[20px] lg:leading-[1.3] lg:mb-6">
                  Проблема клиента:
                </h4>
                <p className="text-[#1B2A46] font-montserrat font-medium text-[16px] leading-[1.5] lg:text-[18px] lg:leading-[1.4]">
                  {cases[activeCase].task}
                </p>
              </div>

              <div>
                <h4 className="text-[#1B2A46] font-montserrat font-bold text-[18px] leading-[1.33] mb-4 lg:text-[20px] lg:leading-[1.3] lg:mb-6">
                  Решение:
                </h4>
                <p className="text-[#1B2A46] font-montserrat font-medium text-[16px] leading-[1.5] lg:text-[18px] lg:leading-[1.4]">
                  {cases[activeCase].solution}
                </p>
              </div>

              <div>
                <h4 className="text-[#1B2A46] font-montserrat font-bold text-[18px] leading-[1.33] mb-4 lg:text-[20px] lg:leading-[1.3] lg:mb-6">
                  Результат:
                </h4>
                <ul className="text-[#1B2A46] font-montserrat font-medium text-[16px] leading-[1.5] lg:text-[18px] lg:leading-[1.4] space-y-2">
                  {cases[activeCase].result.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}