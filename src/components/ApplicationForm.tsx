"use client"

import { Card } from "@/components/ui/card";
import { UnifiedForm } from "@/components/ui/unified-form";
import { ApplicationFormProps } from "@/types/components";

export function ApplicationForm({ 
  title,
  description,
  showSphereField = true,
  source,
  buttonText = "Получить КП"
}: ApplicationFormProps) {
  return (
    <Card className="bg-[#F7F8FA] rounded-[1.25rem] p-[1.25rem] relative overflow-hidden 
                     md:p-[2rem] xl:max-w-[75rem] xl:mx-auto xl:p-[3.75rem]">
      <div className="absolute top-[4rem] right-[17.1875rem] w-[5.1875rem] h-[5.6875rem] 
                      md:right-[8rem] md:w-[4rem] md:h-[4.5rem]
                      xl:-left-[1.3125rem] xl:top-[12.875rem] xl:w-[19.4375rem] xl:h-[21.3125rem]">
        <img src="/assets/snowflake-2.svg" alt="" className="w-full h-full opacity-100" />
      </div>
      <div className="absolute bottom-[3.625rem] right-[16.5625rem] w-[6.9375rem] h-[7.5625rem] 
                      md:right-[6rem] md:w-[5rem] md:h-[5.5rem]
                      xl:right-[31.0625rem] xl:top-[0.625rem] xl:w-[5.1875rem] xl:h-[5.6875rem]">
        <img src="/assets/snowflake-1.svg" alt="" className="w-full h-full opacity-100" />
      </div>

      <div className="relative z-10">
        <div className="md:hidden">
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
              spherePlaceholder="Ваша сфера (не обязательно)"
              buttonText={buttonText}
            />
          </div>
        </div>

        <div className="hidden md:block xl:hidden">
          <div className="space-y-[2rem]">
            <div>
              <h3 className="text-[#202124] font-montserrat font-bold text-[1.375rem] leading-[1.45] mb-[1rem]">
                {title}
              </h3>
              <p className="text-[#202124] font-montserrat font-normal text-[0.9375rem] leading-[1.6]">
                {description}
              </p>
            </div>

            <UnifiedForm
              source={source}
              showSphereField={showSphereField}
              spherePlaceholder="Ваша сфера (не обязательно)"
              buttonText={buttonText}
            />
          </div>
        </div>

        <div className="hidden xl:flex xl:gap-[2.5rem] xl:items-stretch">
          <div className="flex-1 min-w-0 xl:min-w-[32.5rem]">
            <h3 className="text-[#202124] font-montserrat font-bold text-[1.5rem] leading-[1.42] mb-[1.25rem]">
              {title}
            </h3>

            <p className="text-[#202124] font-montserrat font-normal text-[1rem] leading-[1.5]">
              {description}
            </p>
          </div>

          <div className="flex-1 min-w-0 xl:min-w-[32.5rem]">
            <UnifiedForm
              source={source}
              showSphereField={showSphereField}
              spherePlaceholder="Ваша сфера (не обязательно)"
              buttonText={buttonText}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}