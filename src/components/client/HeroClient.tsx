'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ContactModal } from '@/components/ContactModal';

export const HeroClient = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <Button
        className="bg-[#3264F6] hover:bg-[#2950D4] text-white font-montserrat font-medium text-[14px] leading-[1.71] px-6 py-3 rounded-[12px] md:text-[1rem] md:px-[2rem] md:py-[1.25rem] md:rounded-[0.75rem] flex items-center justify-center gap-3 md:gap-[0.75rem] w-full md:w-fit"
        onClick={() => setIsContactModalOpen(true)}
      >
        Заказать пробную стирку
        <img src="/vector.svg" alt="" className="w-3 h-3" />
      </Button>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};
