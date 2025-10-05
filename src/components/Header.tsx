'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ContactModal } from './ContactModal';
import { useScrollLock } from '@/hooks/useScrollLock';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Блокируем скролл страницы при открытии любого модального окна
  useScrollLock(isMobileMenuOpen || isContactModalOpen);

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden lg:block bg-white shadow-[0px_0.0625rem_0.25rem_0px_rgba(0,0,0,0.15)] h-[5rem] fixed top-0 left-0 right-0 z-50">
        <div className="max-w-[87.5rem] mx-auto px-[2.5rem] h-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-[6.875rem] h-[2.0625rem] flex items-center">
              <img src="/assets/logo_nord.svg" alt="Nord Logo" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="bg-[#E3EAF6] rounded-[4.25rem] p-[0.125rem] flex items-center">
            <Link href="/#services" className="bg-transparent rounded-[4.25rem] px-[1rem] py-[0.25rem] text-[#2C4495] font-montserrat font-medium text-[0.875rem] leading-[1.43] uppercase hover:bg-white transition-colors">
              Услуги
            </Link>
            <Link href="/#pricing" className="bg-transparent rounded-[4.25rem] px-[1rem] py-[0.25rem] text-[#2C4495] font-montserrat font-medium text-[0.875rem] leading-[1.43] uppercase hover:bg-white transition-colors">
              Цены
            </Link>
            <Link href="/#promotions" className="bg-transparent rounded-[4.25rem] px-[1rem] py-[0.25rem] text-[#2C4495] font-montserrat font-medium text-[0.875rem] leading-[1.43] uppercase hover:bg-white transition-colors">
              Акции
            </Link>
            <Link href="/#packaging" className="bg-transparent rounded-[4.25rem] px-[1rem] py-[0.25rem] text-[#2C4495] font-montserrat font-medium text-[0.875rem] leading-[1.43] uppercase hover:bg-white transition-colors">
              Упаковка
            </Link>
            <Link href="/#clients-cases" className="bg-transparent rounded-[4.25rem] px-[1rem] py-[0.25rem] text-[#2C4495] font-montserrat font-medium text-[0.875rem] leading-[1.43] uppercase hover:bg-white transition-colors">
              Кейсы
            </Link>
            <Link href="/#footer" className="bg-transparent rounded-[4.25rem] px-[1rem] py-[0.25rem] text-[#2C4495] font-montserrat font-medium text-[0.875rem] leading-[1.43] uppercase hover:bg-white transition-colors">
              Контакты
            </Link>
          </nav>

          {/* Contact Info & CTA */}
          <div className="flex items-center gap-[1.5rem]">
            {/* Phone - Full number for larger screens */}
            <div className="hidden xl:block text-[#2C4495] font-montserrat font-medium text-[1rem] leading-[1.25]">
              +7 (495) 211-42-95
            </div>
            
            {/* Phone - Icon for smaller screens */}
            <a
              href="tel:+74952114295"
              className="xl:hidden flex items-center justify-center"
              title="Позвонить"
            >
              <img src="/assets/phone-icon.svg" alt="Phone" className="w-[1.75rem] h-[1.75rem]" />
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-[0.875rem]">
              <a
                href="https://wa.me/79933393550"
                className="flex items-center justify-center"
                title="WhatsApp"
                target="_blank"
                rel="noopener"
              >
                <img src="/assets/whatsapp-icon.svg" alt="WhatsApp" className="w-[1.75rem] h-[1.75rem]" />
              </a>
              <a
                href="https://t.me/+79933393550"
                className="flex items-center justify-center"
                title="Telegram"
                target="_blank"
                rel="noopener"
              >
                <img src="/assets/telegram-icon.svg" alt="Telegram" className="w-[1.75rem] h-[1.75rem]" />
              </a>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="bg-[#E3EAF6] rounded-[4.25rem] px-[1.5rem] py-[0.625rem] flex items-center justify-center text-[#2C4495] font-montserrat font-medium text-[0.875rem] leading-[1.43] uppercase"
            >
              Получить расчет за 5 минут
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="lg:hidden bg-white shadow-[0px_0.0625rem_0.25rem_0px_rgba(0,0,0,0.25)] h-[3.75rem] flex items-center justify-between fixed top-0 left-0 right-0 z-50">
        {/* Logo */}
        <div className="flex items-center ml-[1rem]">
          <div className="w-[6.5rem] h-[1.625rem] flex items-center">
            <img src="/assets/logo_nord.svg" alt="Nord Logo" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center flex-1 mx-auto">
          <div className="flex items-center gap-[1.25rem]">
            <a
              href="https://wa.me/79933393550"
              className="flex items-center justify-center"
              title="WhatsApp"
              target="_blank"
              rel="noopener"
            >
              <img src="/assets/whatsapp-icon.svg" alt="WhatsApp" className="w-[1.5rem] h-[1.5rem]" />
            </a>
            <a
              href="https://t.me/+79933393550"
              className="flex items-center justify-center"
              title="Telegram"
              target="_blank"
              rel="noopener"
            >
              <img src="/assets/telegram-icon.svg" alt="Telegram" className="w-[1.5rem] h-[1.5rem]" />
            </a>
            <a
              href="tel:+74952114295"
              className="flex items-center justify-center"
              title="Позвонить"
            >
              <img src="/assets/phone-icon.svg" alt="Phone" className="w-[1.5rem] h-[1.5rem]" />
            </a>
          </div>
        </div>

        {/* Menu Button */}
        <button
          className="bg-[#E3EAF6] rounded-[4.25rem] px-[1.125rem] py-[0.375rem] flex items-center gap-[0.75rem] mr-[1rem] z-10 relative"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Открыть меню"
        >
          <span className="text-[#2C4495] font-montserrat font-medium text-[0.75rem] leading-[1.67]">
            Меню
          </span>
          <div className="w-[1.5rem] h-[1.5rem] bg-white rounded-full flex items-center justify-center">
            <img src="/mobile-menu-icon.svg" alt="Menu" className="w-9 h-9" />
          </div>
        </button>
      </header>

      {/* Mobile Menu Popup */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed inset-0 bg-white w-full h-full overflow-hidden z-40">
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-[30px] right-[30px] w-[32px] h-[32px] bg-black/20 rounded-full flex items-center justify-center z-50"
              aria-label="Закрыть"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L13 13M1 13L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Decorative elements - with pointer-events-none to prevent click interference */}
            <div className="absolute top-[31px] right-[30px] w-[209px] h-[231px] pointer-events-none transform rotate-[27deg] z-0">
              <img src="/assets/decorative/mobile-menu-snowflake-1.svg" alt="" className="w-full h-full" />
            </div>
            <div className="absolute bottom-[10px] right-[0px] w-[132px] h-[145px] pointer-events-none z-0">
              <img src="/assets/decorative/mobile-menu-snowflake-2.svg" alt="" className="w-full h-full" />
            </div>

            <div className="p-[30px] pt-[90px] relative z-20">
              {/* Navigation buttons */}
              <div className="mb-[40px]">
                <div className="flex flex-col gap-[4px]">
                  <Link 
                    href="/#services" 
                    className="text-[#2C4495] font-montserrat font-medium text-[16px] leading-[20px] uppercase text-left pl-[30px] py-[12px] w-full block transition-colors relative z-10"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setTimeout(() => {
                        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                  >
                    <span className="absolute left-[8px] top-[50%] transform -translate-y-1/2 w-[6px] h-[6px] bg-[#2C4495] rounded-full z-10"></span>
                    УСЛУГИ
                  </Link>
                  <Link 
                    href="/#pricing" 
                    className="text-[#2C4495] font-montserrat font-medium text-[16px] leading-[20px] uppercase text-left pl-[30px] py-[12px] w-full block transition-colors relative z-10"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setTimeout(() => {
                        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                  >
                    <span className="absolute left-[8px] top-[50%] transform -translate-y-1/2 w-[6px] h-[6px] bg-[#2C4495] rounded-full z-10"></span>
                    ЦЕНЫ
                  </Link>
                  <Link 
                    href="/#promotions" 
                    className="text-[#2C4495] font-montserrat font-medium text-[16px] leading-[20px] uppercase text-left pl-[30px] py-[12px] w-full block transition-colors relative z-10"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setTimeout(() => {
                        document.getElementById('promotions')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                  >
                    <span className="absolute left-[8px] top-[50%] transform -translate-y-1/2 w-[6px] h-[6px] bg-[#2C4495] rounded-full z-10"></span>
                    АКЦИИ
                  </Link>
                  <Link 
                    href="/#packaging" 
                    className="text-[#2C4495] font-montserrat font-medium text-[16px] leading-[20px] uppercase text-left pl-[30px] py-[12px] w-full block transition-colors relative z-10"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setTimeout(() => {
                        document.getElementById('packaging')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                  >
                    <span className="absolute left-[8px] top-[50%] transform -translate-y-1/2 w-[6px] h-[6px] bg-[#2C4495] rounded-full z-10"></span>
                    УПАКОВКА
                  </Link>
                  <Link 
                    href="/#clients-cases" 
                    className="text-[#2C4495] font-montserrat font-medium text-[16px] leading-[20px] uppercase text-left pl-[30px] py-[12px] w-full block transition-colors relative z-10"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setTimeout(() => {
                        document.getElementById('clients-cases')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                  >
                    <span className="absolute left-[8px] top-[50%] transform -translate-y-1/2 w-[6px] h-[6px] bg-[#2C4495] rounded-full z-10"></span>
                    КЕЙСЫ
                  </Link>
                  <Link 
                    href="/#footer" 
                    className="text-[#2C4495] font-montserrat font-medium text-[16px] leading-[20px] uppercase text-left pl-[30px] py-[12px] w-full block transition-colors relative z-10"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setTimeout(() => {
                        document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                  >
                    <span className="absolute left-[8px] top-[50%] transform -translate-y-1/2 w-[6px] h-[6px] bg-[#2C4495] rounded-full z-10"></span>
                    КОНТАКТЫ
                  </Link>
                </div>
              </div>

              {/* Contact buttons */}
              <div className="space-y-[16px] mt-auto relative z-20">
                <a 
                  href="https://wa.me/79933393550"
                  className="w-[85%] mx-auto bg-transparent border border-[#2C4495] text-[#2C4495] font-montserrat font-medium text-[14px] leading-[24px] px-[20px] py-[12px] rounded-[50px] flex items-center justify-center gap-[12px] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  target="_blank"
                  rel="noopener"
                >
                  НАПИСАТЬ В WHATSAPP
                  <div className="w-[24px] h-[24px] bg-[#60D669] rounded-full flex items-center justify-center">
                    <img src="/assets/whatsapp-icon.svg" alt="WhatsApp" className="w-[16px] h-[16px]" />
                  </div>
                </a>

                <a 
                  href="https://t.me/+79933393550"
                  className="w-[85%] mx-auto bg-transparent border border-[#2C4495] text-[#2C4495] font-montserrat font-medium text-[14px] leading-[24px] px-[20px] py-[12px] rounded-[50px] flex items-center justify-center gap-[12px] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  target="_blank"
                  rel="noopener"
                >
                  НАПИСАТЬ В ТЕЛЕГРАМ
                  <div className="w-[24px] h-[24px] bg-[#039BE5] rounded-full flex items-center justify-center">
                    <img src="/assets/telegram-icon.svg" alt="Telegram" className="w-[16px] h-[16px]" />
                  </div>
                </a>

                <a 
                  href="tel:+74952114295"
                  className="w-[65%] ml-[7.5%] mr-auto bg-transparent border border-[#2C4495] text-[#2C4495] font-montserrat font-medium text-[14px] leading-[24px] px-[20px] py-[12px] rounded-[50px] flex items-center justify-center gap-[12px] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ПОЗВОНИТЬ
                  <div className="w-[24px] h-[24px] bg-[#60D669] rounded-full flex items-center justify-center">
                    <img src="/assets/phone-icon.svg" alt="Phone" className="w-[16px] h-[16px]" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};