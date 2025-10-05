'use client';

import { Card } from '@/components/ui/card';
import { useScrollLock } from '@/hooks/useScrollLock';
import { UnifiedForm } from '@/components/ui/unified-form';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  // Блокируем скролл страницы при открытии модального окна
  useScrollLock(isOpen);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-0 sm:p-4"
      onClick={onClose}
    >
      {/* Desktop version */}
      <Card 
        className="hidden sm:block bg-white rounded-[2.5rem] p-[3.75rem] w-full max-w-[49.75rem] h-[36rem] relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Кнопка закрытия для десктопа */}
        <button
          onClick={onClose}
          className="absolute top-[2.1875rem] right-[2.1875rem] w-[2rem] h-[2rem] bg-black/20 rounded-full flex items-center justify-center z-20"
          aria-label="Закрыть"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L11 11M1 11L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        {/* Декоративные снежинки для десктопа */}
        <div className="absolute top-[3.5625rem] right-[8rem] w-[5.1875rem] h-[5.6875rem] opacity-100 pointer-events-none z-0">
          <img src="/assets/snowflake-1.svg" alt="" className="w-full h-full" />
        </div>
        {/* Большая снежинка в правом нижнем углу (уменьшена в 2 раза) */}
        <div className="absolute bottom-[1.25rem] right-[1.25rem] w-[9.71875rem] h-[10.65625rem] opacity-100 pointer-events-none z-0">
          <img src="/assets/snowflake-2.svg" alt="" className="w-full h-full" />
        </div>

        <div className="relative z-10 flex gap-[2.5rem] h-full">
          {/* Левая часть - компактная форма */}
          <div className="flex-1 max-w-[32.5rem]">
            <h2 className="text-[#343434] font-montserrat font-medium text-[2.75rem] leading-[1.22] mb-[1.25rem]">
              Оставить заявку
            </h2>
            
            <p className="text-[#343434] font-montserrat font-medium text-[1.375rem] leading-[1.22] mb-[3.75rem]">
              Заполните форму и мы свяжемся с вами для обсуждения деталей
            </p>

            <div className="max-w-[32.5rem]">
            <UnifiedForm
              source="modal_form"
              showSphereField={true}
              sphereFieldName="sphere"
              spherePlaceholder="Ваша сфера (не обязательно)"
              buttonText="ОТПРАВИТЬ"
              onSuccess={() => {
                // Закрываем модальное окно после успешной отправки через 1.5 секунды
                setTimeout(() => {
                  onClose();
                }, 1500);
              }}
            />
            </div>
          </div>
        </div>
      </Card>

      {/* Mobile version - полный экран */}
      <div 
        className="sm:hidden fixed inset-0 bg-[#F7F8FA] z-50"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Кнопка закрытия для мобильной версии */}
        <button
          onClick={onClose}
          className="absolute top-[1.25rem] right-[1.25rem] w-[2rem] h-[2rem] bg-black/20 rounded-full flex items-center justify-center z-20"
          aria-label="Закрыть"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L11 11M1 11L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        {/* Декоративные снежинки для мобильной версии */}
        <div className="absolute top-[-1.625rem] left-[-1.625rem] w-[5.1875rem] h-[5.6875rem] opacity-100 pointer-events-none z-0">
          <img src="/assets/snowflake-1.svg" alt="" className="w-full h-full" />
        </div>
        <div className="absolute bottom-[1.25rem] right-[1.25rem] w-[6.9375rem] h-[7.5625rem] opacity-100 pointer-events-none z-0">
          <img src="/assets/snowflake-2.svg" alt="" className="w-full h-full" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center p-[1.25rem]">
          <h2 className="text-[#202124] font-montserrat font-bold text-[1.625rem] leading-[1.31] uppercase mb-[1.25rem]">
            ОСТАВИТЬ ЗАЯВКУ
          </h2>
          
          <p className="text-[#202124] font-montserrat font-normal text-[0.875rem] leading-[1.71] mb-[2.5rem]">
            Заполните форму и мы свяжемся с вами для обсуждения деталей
          </p>

          <UnifiedForm
            source="modal_form"
            showSphereField={true}
            sphereFieldName="sphere"
            spherePlaceholder="Ваша сфера (не обязательно)"
            buttonText="ПОЛУЧИТЬ КП"
            onSuccess={() => {
              // Закрываем модальное окно после успешной отправки через 1.5 секунды
              setTimeout(() => {
                onClose();
              }, 1500);
            }}
          />
        </div>
      </div>
    </div>
  );
}