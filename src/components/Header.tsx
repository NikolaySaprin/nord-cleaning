'use client';

import { useState, useEffect } from 'react';
import { ContactModal } from './ContactModal';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Disable scroll when modals are open
  useEffect(() => {
    if (isMobileMenuOpen || isContactModalOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.documentElement.style.overflow = 'unset';
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
    }

    return () => {
      document.documentElement.style.overflow = 'unset';
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
    };
  }, [isMobileMenuOpen, isContactModalOpen]);

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
          <nav className="bg-[#E3EAF6] rounded-[4.25rem] p-[0.125rem] flex items-center gap-[1.25rem]">
            <a href="#services" className="bg-transparent rounded-[4.25rem] px-[1.5rem] py-[0.25rem] text-[#2C4495] font-montserrat font-medium text-[0.875rem] leading-[1.43] uppercase hover:bg-white transition-colors">
              Услуги
            </a>
            <a href="#pricing" className="bg-transparent rounded-[4.25rem] px-[1.5rem] py-[0.25rem] text-[#2C4495] font-montserrat font-medium text-[0.875rem] leading-[1.43] uppercase hover:bg-white transition-colors">
              Цены
            </a>
            <a href="#promotions" className="bg-transparent rounded-[4.25rem] px-[1.5rem] py-[0.25rem] text-[#2C4495] font-montserrat font-medium text-[0.875rem] leading-[1.43] uppercase hover:bg-white transition-colors">
              Акции
            </a>
            <a href="#contacts" className="bg-transparent rounded-[4.25rem] px-[1.5rem] py-[0.25rem] text-[#2C4495] font-montserrat font-medium text-[0.875rem] leading-[1.43] uppercase hover:bg-white transition-colors">
              Контакты
            </a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="flex items-center gap-[1.5rem]">
            {/* Phone */}
            <div className="text-[#2C4495] font-montserrat font-medium text-[1rem] leading-[1.25]">
              +7 (495) 211-42-95
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-[0.875rem]">
              <a
                href="https://wa.me/79933393550"
                className="flex items-center justify-center"
                title="WhatsApp"
              >
                <img src="/assets/whatsapp-icon.svg" alt="WhatsApp" className="w-[1.75rem] h-[1.75rem]" />
              </a>
              <a
                href="https://t.me/+79933393550"
                className="flex items-center justify-center"
                title="Telegram"
              >
                <img src="/assets/telegram-icon.svg" alt="Telegram" className="w-[1.75rem] h-[1.75rem]" />
              </a>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="bg-[#E3EAF6] rounded-[4.25rem] px-[1.5rem] py-[0.625rem] flex items-center gap-[0.75rem] text-[#2C4495] font-montserrat font-medium text-[0.875rem] leading-[1.43] uppercase"
            >
              Получить расчет за 5 минут
              <div className="w-[1.5rem] h-[1.5rem] flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 6L6 6" stroke="#2C4495" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
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
            >
              <img src="/assets/whatsapp-icon.svg" alt="WhatsApp" className="w-[1.5rem] h-[1.5rem]" />
            </a>
            <a
              href="https://t.me/+79933393550"
              className="flex items-center justify-center"
              title="Telegram"
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
          className="bg-[#E3EAF6] rounded-[4.25rem] px-[1.125rem] py-[0.375rem] flex items-center gap-[0.75rem] mr-[1rem]"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <span className="text-[#2C4495] font-montserrat font-medium text-[0.75rem] leading-[1.67]">
            Меню
          </span>
          <div className="w-[1.5rem] h-[1.5rem] bg-white rounded-full flex items-center justify-center">
            <img src="/mobile-menu-icon.svg" alt="Menu" className="w-3 h-3" />
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
          <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[1.25rem] w-full max-w-[23.4375rem] h-[42.5rem] mx-auto overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-[1rem] right-[1rem] w-[2rem] h-[2rem] bg-black/20 rounded-full flex items-center justify-center"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6L6 6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Decorative elements */}
            <div className="absolute top-[15.375rem] right-[10.125rem] w-[10.3125rem] h-[11.3125rem] opacity-20">
              <img src="/assets/snowflake-1.svg" alt="" className="w-full h-full" />
            </div>
            <div className="absolute top-[14.625rem] left-[-1.3125rem] w-[5.1875rem] h-[5.6875rem] opacity-50">
              <img src="/assets/snowflake-2.svg" alt="" className="w-full h-full" />
            </div>
            <div className="absolute top-[1.9375rem] right-[11.125rem] w-[18.23875rem] h-[18.8275rem] opacity-20">
              <img src="/assets/snowflake-1.svg" alt="" className="w-full h-full" />
            </div>

            <div className="p-[1.5rem] pt-[4.375rem]">
              {/* Navigation buttons */}
              <div className="bg-[#E3EAF6] rounded-[0.625rem] p-[0.5rem] mb-[3.625rem]">
                <div className="flex flex-col gap-[1.25rem]">
                  <a 
                    href="#services" 
                    className="text-[#2C4495] font-montserrat font-medium text-[1rem] leading-[1.25] uppercase text-center py-[0.5rem]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Услуги
                  </a>
                  <a 
                    href="#pricing" 
                    className="text-[#2C4495] font-montserrat font-medium text-[1rem] leading-[1.25] uppercase text-center py-[0.5rem]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Цены
                  </a>
                  <a 
                    href="#promotions" 
                    className="text-[#2C4495] font-montserrat font-medium text-[1rem] leading-[1.25] uppercase text-center py-[0.5rem]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Акции
                  </a>
                  <a 
                    href="#contacts" 
                    className="text-[#2C4495] font-montserrat font-medium text-[1rem] leading-[1.25] uppercase text-center py-[0.5rem]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Контакты
                  </a>
                </div>
              </div>

              {/* Contact buttons */}
              <div className="space-y-[1.5rem]">
                <button 
                  onClick={() => {
                    setIsContactModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-transparent border border-[#2C4495] text-[#2C4495] font-montserrat font-medium text-[0.875rem] leading-[1.71] px-[2.125rem] py-[1rem] rounded-[3.125rem] flex items-center justify-center gap-[0.75rem]"
                >
                  Написать в Whatsapp
                  <div className="w-[1.5rem] h-[1.5rem] bg-[#60D669] rounded-full flex items-center justify-center">
                    <img src="/assets/whatsapp-icon.svg" alt="WhatsApp" className="w-[1rem] h-[1rem]" />
                  </div>
                </button>

                <button 
                  onClick={() => {
                    setIsContactModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-transparent border border-[#2C4495] text-[#2C4495] font-montserrat font-medium text-[0.875rem] leading-[1.71] px-[2.125rem] py-[1rem] rounded-[3.125rem] flex items-center justify-center gap-[0.75rem]"
                >
                  Написать в Телеграм
                  <div className="w-[1.5rem] h-[1.5rem] bg-[#039BE5] rounded-full flex items-center justify-center">
                    <img src="/assets/telegram-icon.svg" alt="Telegram" className="w-[1rem] h-[1rem]" />
                  </div>
                </button>

                <button 
                  onClick={() => {
                    setIsContactModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-transparent border border-[#2C4495] text-[#2C4495] font-montserrat font-medium text-[0.875rem] leading-[1.71] px-[2.125rem] py-[1rem] rounded-[3.125rem] flex items-center justify-center gap-[0.75rem]"
                >
                  Позвонить
                  <div className="w-[1.5rem] h-[1.5rem] bg-[#60D669] rounded-full flex items-center justify-center">
                    <img src="/assets/phone-icon.svg" alt="Phone" className="w-[1rem] h-[1rem]" />
                  </div>
                </button>
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