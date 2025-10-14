'use client';

import { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { sendYandexMetricaEvent, YandexMetricaEvents } from '@/lib/yandex-metrica';

const ContactModal = dynamic(() => import('@/components/ContactModal').then(mod => ({ default: mod.ContactModal })), {
  ssr: false,
});

export const ProcessClient = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleClick = () => {
    setIsContactModalOpen(true)
    sendYandexMetricaEvent(YandexMetricaEvents.PROCESS_BTN)
  }

  return (
    <>
      <div className="flex justify-center mt-10 lg:mt-16">
        <Button
          onClick={handleClick}
          className="bg-[#3264F6] hover:bg-[#2950D4] text-white font-montserrat font-medium text-[14px] leading-[1.71] px-6 py-4 rounded-[12px] flex items-center justify-center gap-3"
        >
          Запросить график под ваш объект
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
