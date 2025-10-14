'use client';

import { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { sendYandexMetricaEvent, YandexMetricaEvents } from '@/lib/yandex-metrica';

const ContactModal = dynamic(() => import('@/components/ContactModal').then(mod => ({ default: mod.ContactModal })), {
  ssr: false,
});

export const HeroClient = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleClick = () => {
    setIsContactModalOpen(true);
    sendYandexMetricaEvent(YandexMetricaEvents.TRIAL_WASHING_BTN);
  };

  return (
    <>
      <Button
        className="bg-[#3264F6] hover:bg-[#2950D4] text-white font-montserrat font-medium text-[14px] leading-[1.71] px-6 py-3 rounded-[12px] md:text-[1rem] md:px-[2rem] md:py-[1.25rem] md:rounded-[0.75rem] flex items-center justify-center gap-3 md:gap-[0.75rem] w-full md:w-fit"
        onClick={handleClick}
      >
        Заказать пробную стирку
        <Image src="/vector.svg" alt="" width={12} height={12} className="object-contain" />
      </Button>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};
