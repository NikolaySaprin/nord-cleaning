"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

interface MobileMenuModalProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenuModal({ isOpen, onClose }: MobileMenuModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-50">
      <div className="bg-white rounded-t-[1.25rem] w-full max-w-[23.4375rem] h-[42.5rem] relative overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-[1rem] right-[1.875rem] w-[2rem] h-[2rem] bg-black/20 rounded-full flex items-center justify-center"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L6 6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Decorative elements - снежинки */}
        <div className="absolute top-[15.375rem] right-[10.125rem] w-[10.3125rem] h-[11.3125rem] opacity-20">
          <Image src="/assets/snowflake-1.svg" alt="" layout="fill" objectFit="contain" />
        </div>
        <div className="absolute top-[14.625rem] left-[-1.3125rem] w-[5.1875rem] h-[5.6875rem] opacity-50">
          <Image src="/assets/snowflake-2.svg" alt="" layout="fill" objectFit="contain" />
        </div>
        <div className="absolute top-[1.9375rem] right-[11.125rem] w-[18.23875rem] h-[18.8275rem] opacity-20">
          <Image src="/assets/snowflake-1.svg" alt="" layout="fill" objectFit="contain" />
        </div>

        <div className="p-[1.5rem] pt-[4.375rem]">
          {/* Navigation buttons */}
          <div className="bg-[#E3EAF6] rounded-[0.625rem] p-[0.5rem] mb-[3.625rem]">
            <div className="flex flex-col gap-[1.25rem]">
              <button className="text-[#2C4495] font-montserrat font-medium text-[1rem] leading-[1.25] uppercase text-center py-[0.5rem]">
                Услуги
              </button>
              <button className="text-[#2C4495] font-montserrat font-medium text-[1rem] leading-[1.25] uppercase text-center py-[0.5rem]">
                Цены
              </button>
              <button className="text-[#2C4495] font-montserrat font-medium text-[1rem] leading-[1.25] uppercase text-center py-[0.5rem]">
                Акции
              </button>
              <button className="text-[#2C4495] font-montserrat font-medium text-[1rem] leading-[1.25] uppercase text-center py-[0.5rem]">
                Контакты
              </button>
            </div>
          </div>

          {/* Contact buttons */}
          <div className="space-y-[1.5rem]">
            <Button asChild className="w-full bg-transparent border border-[#2C4495] text-[#2C4495] font-montserrat font-medium text-[0.875rem] leading-[1.71] px-[2.125rem] py-[1rem] rounded-[3.125rem] flex items-center justify-center gap-[0.75rem]">
              <a href="https://wa.me/79933393550">
                Написать в Whatsapp
                <div className="w-[1.5rem] h-[1.5rem] bg-[#60D669] rounded-full flex items-center justify-center">
                  <Image src="/assets/whatsapp-icon.svg" alt="WhatsApp" width={16} height={16} />
                </div>
              </a>
            </Button>

            <Button asChild className="w-full bg-transparent border border-[#2C4495] text-[#2C4495] font-montserrat font-medium text-[0.875rem] leading-[1.71] px-[2.125rem] py-[1rem] rounded-[3.125rem] flex items-center justify-center gap-[0.75rem]">
              <a href="https://t.me/+79933393550">
                Написать в Телеграм
                <div className="w-[1.5rem] h-[1.5rem] bg-[#039BE5] rounded-full flex items-center justify-center">
                  <Image src="/assets/telegram-icon.svg" alt="Telegram" width={16} height={16} />
                </div>
              </a>
            </Button>

            <Button asChild className="w-full bg-transparent border border-[#2C4495] text-[#2C4495] font-montserrat font-medium text-[0.875rem] leading-[1.71] px-[2.125rem] py-[1rem] rounded-[3.125rem] flex items-center justify-center gap-[0.75rem]">
              <a href="tel:+74952114295">
                Позвонить
                <div className="w-[1.5rem] h-[1.5rem] bg-[#60D669] rounded-full flex items-center justify-center">
                  <Image src="/assets/phone-icon.svg" alt="Phone" width={16} height={16} />
                </div>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
