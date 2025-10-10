'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ContactModal } from '@/components/ContactModal';
import { sendYandexMetricaEvent, YandexMetricaEvents } from '@/lib/yandex-metrica';

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
          <img src="/vector.svg" alt="" className="w-3 h-3" />
        </Button>
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};
