"use client"

import { Card } from "@/components/ui/card";
import { UnifiedForm } from "@/components/ui/unified-form";

interface ApplicationFormProps {
  title: string;
  description: string;
  showSphereField?: boolean;
  source: 'contact_form' | 'bottom_form' | 'services_form';
  buttonText?: string;
}

export function ApplicationForm({ 
  title,
  description,
  showSphereField = true,
  source,
  buttonText = "Получить КП"
}: ApplicationFormProps) {
  return (
    <Card className="bg-[#F7F8FA] rounded-[1.25rem] p-[1.25rem] relative overflow-hidden lg:max-w-[75rem] lg:mx-auto lg:p-[3.75rem]">
      {/* Decorative elements from Figma */}
      <div className="absolute top-[4rem] right-[17.1875rem] w-[5.1875rem] h-[5.6875rem] lg:-left-[1.3125rem] lg:top-[12.875rem] lg:w-[19.4375rem] lg:h-[21.3125rem]">
        <img src="/assets/snowflake-2.svg" alt="" className="w-full h-full opacity-100" />
      </div>
      <div className="absolute bottom-[3.625rem] right-[16.5625rem] w-[6.9375rem] h-[7.5625rem] lg:right-[31.0625rem] lg:top-[0.625rem] lg:w-[5.1875rem] lg:h-[5.6875rem]">
        <img src="/assets/snowflake-1.svg" alt="" className="w-full h-full opacity-100" />
      </div>

      <div className="relative z-10">
        {/* Mobile layout */}
        <div className="lg:hidden">
          <h3 className="text-[#202124] font-montserrat font-bold text-[1.25rem] leading-[1.7] mb-[1.25rem]">
            {title}
          </h3>

          <div className="space-y-[1.25rem]">
            <p className="text-[#202124] font-montserrat font-normal text-[0.875rem] leading-[1.71]">
              {description}
            </p>

            <UnifiedForm
              source={source}
              showSphereField={showSphereField}
              sphereFieldName="sphere"
              spherePlaceholder="Ваша сфера (не обязательно)"
              buttonText={buttonText}
            />
          </div>
        </div>

        {/* Desktop layout - two columns */}
        <div className="hidden lg:flex lg:gap-[2.5rem] lg:items-stretch">
          {/* Left column - titles */}
          <div className="flex-1 min-w-[32.5rem]">
            <h3 className="text-[#202124] font-montserrat font-bold text-[1.5rem] leading-[1.42] mb-[1.25rem]">
              {title}
            </h3>

            <p className="text-[#202124] font-montserrat font-normal text-[1rem] leading-[1.5]">
              {description}
            </p>
          </div>

          {/* Right column - form inputs */}
          <div className="flex-1 min-w-[32.5rem]">
            <UnifiedForm
              source={source}
              showSphereField={showSphereField}
              sphereFieldName="sphere"
              spherePlaceholder="Ваша сфера (не обязательно)"
              buttonText={buttonText}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}