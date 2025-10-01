"use client"

import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-[#2C4495] text-white relative overflow-hidden">
      {/* Desktop version */}
      <div className="hidden lg:block">
        <div className="max-w-[87.5rem] mx-auto px-[8.75rem] py-[5rem] relative">
          {/* Decorative elements */}
          <div className="absolute top-[3rem] right-[2rem] w-[131.58px] h-[115px] opacity-25">
            <img src="/assets/decorative/footer-dots-pattern.svg" alt="" className="w-full h-full" />
          </div>
          
          <div className="flex flex-col gap-[5rem]">
            {/* Logo and Description */}
            <div className="flex items-start gap-[2.5rem]">
              <div className="w-[13.75rem] h-[4.125rem] flex items-center">
                <img src="/assets/footer_logo.svg" alt="Nord Logo" className="w-full h-full object-contain" />
              </div>
              <p className="text-white font-montserrat font-normal text-[1rem] leading-[1.5] max-w-[17.6875rem]">
                Профессиональная прачечная для вашего бизнеса. Качество, надежность и индивидуальный подход.
              </p>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-col gap-[1.5rem]">
              <Button asChild className="bg-transparent border border-white text-white font-montserrat font-medium text-[1rem] leading-[1.5] px-[2.125rem] py-[1rem] rounded-[3.125rem] flex items-center justify-center gap-[0.75rem] w-fit uppercase">
                <a href="https://wa.me/79933393550">
                  <img src="/assets/whatsapp-icon.svg" alt="WhatsApp" className="w-[1.5rem] h-[1.5rem]" />
                  Написать в Whatsapp
                </a>
              </Button>
              
              <Button asChild className="bg-transparent border border-white text-white font-montserrat font-medium text-[1rem] leading-[1.5] px-[2.125rem] py-[1rem] rounded-[3.125rem] flex items-center justify-center gap-[0.75rem] w-fit uppercase">
                <a href="https://t.me/+79933393550">
                  <img src="/assets/telegram-icon.svg" alt="Telegram" className="w-[1.5rem] h-[1.5rem]" />
                  Написать в Телеграм
                </a>
              </Button>
              
              <Button asChild className="bg-transparent border border-white text-white font-montserrat font-medium text-[1rem] leading-[1.5] px-[2.125rem] py-[1rem] rounded-[3.125rem] flex items-center justify-center gap-[0.75rem] w-fit uppercase">
                <a href="tel:+74952114295">
                  <img src="/assets/phone-icon.svg" alt="Phone" className="w-[1.5rem] h-[1.5rem]" />
                  Позвонить
                </a>
              </Button>
            </div>

            {/* Contact Information and Navigation */}
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-[2.125rem]">
                <h3 className="text-white font-montserrat font-medium text-[1.5rem] leading-[1]">
                  Клиентам:
                </h3>
                <div className="flex flex-col gap-[1.5rem]">
                  <a href="#home" className="text-white font-montserrat font-medium text-[1.5rem] leading-[1] hover:text-white/80 transition-colors">
                    Главная
                  </a>
                  <a href="#services" className="text-white font-montserrat font-medium text-[1.5rem] leading-[1] hover:text-white/80 transition-colors">
                    Услуги
                  </a>
                  <a href="#pricing" className="text-white font-montserrat font-medium text-[1.5rem] leading-[1] hover:text-white/80 transition-colors">
                    Цены
                  </a>
                  <a href="#contacts" className="text-white font-montserrat font-medium text-[1.5rem] leading-[1] hover:text-white/80 transition-colors">
                    Контакты
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-[2.125rem]">
                <h3 className="text-white font-montserrat font-medium text-[1.5rem] leading-[1]">
                  Контакты:
                </h3>
                <div className="space-y-[2.125rem]">
                  <div>
                    <p className="text-white/50 font-montserrat font-medium text-[1rem] leading-[1.5] uppercase">
                      ТЕЛЕФОН:
                    </p>
                    <a href="tel:+74952114295" className="text-white font-montserrat font-medium text-[1.5rem] leading-[1] hover:text-white/80 transition-colors">
                      +7 (495) 211-42-95
                    </a>
                  </div>
                  
                  <div>
                    <p className="text-white/50 font-montserrat font-medium text-[1rem] leading-[1.5] uppercase">
                      Почта:
                    </p>
                    <a href="mailto:nord_clean@mail.ru" className="text-white font-montserrat font-medium text-[1.5rem] leading-[1]">
                      nord_clean@mail.ru
                    </a>
                  </div>
                  
                  <div>
                    <p className="text-white/50 font-montserrat font-medium text-[1rem] leading-[1.5] uppercase">
                      Адрес:
                    </p>
                    <p className="text-white font-montserrat font-medium text-[1.5rem] leading-[1]">
                      125502, г. Москва, ул. Петрозаводская, д.24, корп.2
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex gap-[2rem]">
              <a href="#" className="text-white/50 font-montserrat font-medium text-[1rem] leading-[1.5] hover:text-white transition-colors">
                © {new Date().getFullYear()} Nord Laundry. Все права защищены.
              </a>
              <a href="#" className="text-white/50 font-montserrat font-medium text-[1rem] leading-[1.5] hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-white/50 font-montserrat font-medium text-[1rem] leading-[1.5] hover:text-white transition-colors">
                Согласие на обработку персональных данных
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile version */}
      <div className="lg:hidden">
        <div className="px-[1.625rem] py-[5rem] relative">
          {/* Decorative elements */}
          <div className="absolute top-[33.5rem] right-[1rem] w-[131.58px] h-[115px] opacity-25">
            <img src="/assets/decorative/footer-dots-pattern.svg" alt="" className="w-full h-full" />
          </div>
          
          <div className="flex flex-col gap-[5rem]">
            {/* Logo and Description */}
            <div className="flex flex-col gap-[1.25rem]">
              <div className="w-[13.75rem] h-[4.125rem] flex items-center">
                <img src="/assets/footer_logo.svg" alt="Nord Logo" className="w-full h-full object-contain" />
              </div>
              <p className="text-white font-montserrat font-normal text-[1rem] leading-[1.5] max-w-[20.8125rem]">
                Профессиональная прачечная для вашего бизнеса. Качество, надежность и индивидуальный подход.
              </p>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-col gap-[1.5rem]">
              <Button asChild className="bg-transparent border border-white text-white font-montserrat font-medium text-[0.875rem] leading-[1.71] px-[2.125rem] py-[1rem] rounded-[3.125rem] flex items-center justify-center gap-[0.75rem] w-fit uppercase">
                <a href="https://wa.me/79933393550">
                  <img src="/assets/whatsapp-icon.svg" alt="WhatsApp" className="w-[1.5rem] h-[1.5rem]" />
                  Написать в Whatsapp
                </a>
              </Button>
              
              <Button asChild className="bg-transparent border border-white text-white font-montserrat font-medium text-[0.875rem] leading-[1.71] px-[2.125rem] py-[1rem] rounded-[3.125rem] flex items-center justify-center gap-[0.75rem] w-fit uppercase">
                <a href="https://t.me/+79933393550">
                  <img src="/assets/telegram-icon.svg" alt="Telegram" className="w-[1.5rem] h-[1.5rem]" />
                  Написать в Телеграм
                </a>
              </Button>
              
              <Button asChild className="bg-transparent border border-white text-white font-montserrat font-medium text-[0.875rem] leading-[1.71] px-[2.125rem] py-[1rem] rounded-[3.125rem] flex items-center justify-center gap-[0.75rem] w-fit uppercase">
                <a href="tel:+74952114295">
                  <img src="/assets/phone-icon.svg" alt="Phone" className="w-[1.5rem] h-[1.5rem]" />
                  Позвонить
                </a>
              </Button>
            </div>

            {/* Contact Information */}
            <div className="space-y-[2.125rem]">
              <h3 className="text-white font-montserrat font-medium text-[1.25rem] leading-[1.2]">
                Контакты:
              </h3>
              
              <div className="space-y-[2.125rem]">
                <div>
                  <p className="text-white/50 font-montserrat font-medium text-[0.875rem] leading-[1.71] uppercase">
                    ТЕЛЕФОН:
                  </p>
                  <a href="tel:+74952114295" className="text-white font-montserrat font-medium text-[1.125rem] leading-[1.33] hover:text-white/80 transition-colors">
                    +7 (495) 211-42-95
                  </a>
                </div>
                
                <div>
                  <p className="text-white/50 font-montserrat font-medium text-[0.875rem] leading-[1.71] uppercase">
                    Почта:
                  </p>
                  <a href="mailto:nord_clean@mail.ru" className="text-white font-montserrat font-medium text-[1.125rem] leading-[1.33]">
                    nord_clean@mail.ru
                  </a>
                </div>
                
                <div>
                  <p className="text-white/50 font-montserrat font-medium text-[0.875rem] leading-[1.71] uppercase">
                    Адрес:
                  </p>
                  <p className="text-white font-montserrat font-medium text-[1.125rem] leading-[1.33]">
                    125502, г. Москва, ул. Петрозаводская, д.24, корп.2
                  </p>
                </div>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-col gap-[1.5rem]">
              <a href="#" className="text-white/50 font-montserrat font-medium text-[0.875rem] leading-[1.71] hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-white/50 font-montserrat font-medium text-[0.875rem] leading-[1.71] hover:text-white transition-colors">
                Согласие на обработку персональных данных
              </a>
              <a href="#" className="text-white/50 font-montserrat font-medium text-[0.875rem] leading-[1.71] hover:text-white transition-colors">
                © {new Date().getFullYear()} Nord Laundry. Все права защищены.
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}