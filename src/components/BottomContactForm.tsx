"use client"

import { UnifiedForm } from '@/components/ui/unified-form';

interface BottomContactFormProps {
  showSphereField?: boolean;
  source?: 'bottom_form' | 'services_form';
}

export function BottomContactForm({ 
  showSphereField = false, 
  source = 'bottom_form' 
}: BottomContactFormProps) {
  return (
    <section className="bg-white px-4 py-10 lg:px-8 lg:py-20 lg:max-w-7xl lg:mx-auto">
      <div className="max-w-[75rem] mx-auto">
        <div className="grid lg:grid-cols-2 gap-[2.5rem]">
          {/* Левая колонка с текстом */}
          <div>
            <h2 className="text-[#343434] font-montserrat font-medium text-[2.75rem] leading-[1.22] mb-[1.25rem]">
              {source === 'services_form' 
                ? 'Не нашли нужную отрасль?' 
                : 'Доверьте чистоту Вашего бизнеса нам!'}
            </h2>
            
            <p className="text-[#343434] font-montserrat font-medium text-[1.375rem] leading-[1.22] mb-[1.25rem]">
              {source === 'services_form' 
                ? 'Заполните форму и мы свяжемся с вами для обсуждения деталей' 
                : 'Присоединяйтесь к нашим довольным клиентам!'}
            </p>
            
            {/* Декоративные элементы */}
            <div className="absolute top-[3rem] left-[-3rem] w-[15rem] h-[15rem] opacity-40 pointer-events-none">
              <img src="/assets/decorative/mobile-menu-snowflake-1.svg" alt="" className="w-full h-full" />
            </div>
            <div className="absolute bottom-[3rem] right-[-3rem] w-[15rem] h-[15rem] opacity-40 pointer-events-none">
              <img src="/assets/decorative/mobile-menu-snowflake-2.svg" alt="" className="w-full h-full" />
            </div>
          </div>
          
          {/* Правая колонка с формой */}
          <div>
            <div className="bg-white rounded-[1rem] p-[2.5rem] shadow-lg relative">
              <UnifiedForm
                source={source}
                showSphereField={showSphereField}
                sphereFieldName="sphere"
                spherePlaceholder="Ваша сфера (не обязательно)"
                buttonText="Получить КП"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
