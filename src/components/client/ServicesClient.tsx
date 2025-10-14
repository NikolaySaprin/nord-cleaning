'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ContactModal } from '@/components/ContactModal';
import { ServiceClientPageProps } from '@/types';
import { sendYandexMetricaEvent } from '@/lib/yandex-metrica';

export const ServicesClient = ({ YMtype } : ServiceClientPageProps) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleClick = () => {
    setIsContactModalOpen(true);
    if (YMtype) {
      sendYandexMetricaEvent(YMtype);
    }
  };

  return (
    <>
      <div className="mt-6">
        <Button
          onClick={handleClick} 
          className="w-full bg-[#3264F6] hover:bg-[#2950D4] text-white font-montserrat font-medium text-[14px] leading-[1.71] px-6 py-3 rounded-[12px] flex items-center justify-center gap-3 lg:text-[16px] lg:py-4"
        >
          Заказать услугу
          <Image src="/vector.svg" alt="" width={12} height={12} className="object-contain" />
        </Button>
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};
