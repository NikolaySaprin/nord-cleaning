import { Card } from '@/components/ui/card';
import { DecorativePattern } from '@/components/DecorativePattern';
import { ApplicationForm } from '@/components/ApplicationForm';
import { ServicesClient } from '@/components/client/ServicesClient';
import { servicesData } from '@/types/data';

export const ServicesServer = () => {
  return (
    <>
      <section className="bg-gradient-to-br from-[#628CED] to-[#3A64C5] px-4 py-20 rounded-2xl relative overflow-hidden lg:px-8 lg:py-32 lg:max-w-[87.5rem] lg:mx-auto z-0 mt-[-40px] lg:mt-[-80px]">
        {/* Decorative elements */}
        <DecorativePattern
          position="custom"
          customPosition="top-[20px] right-[-33px]"
          width="66px"
          height="57.5px"
          mobileOnly
        />
        <div className="absolute right-[304px] top-[537px] w-[100px] h-[100px] opacity-25 hidden lg:block">
          <div className="grid grid-cols-5 gap-[10px]">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className="w-[10px] h-[10px] bg-gradient-to-br from-[#97C3F9] to-[#93C1F9] rounded-full"></div>
            ))}
          </div>
        </div>

        <div className="mb-10 lg:mb-16">
          <div className="flex justify-start mb-6 lg:justify-start lg:mb-8">
            <div className="border border-white rounded-[50px] px-[34px] py-[14px] lg:px-[40px] lg:py-[16px]">
              <span className="text-white font-montserrat font-medium text-[14px] leading-[1.71] uppercase lg:text-[16px]">
                УСЛУГИ
              </span>
            </div>
          </div>
          <h2 className="text-white font-montserrat font-bold text-[22px] leading-[1.55] uppercase text-left lg:text-[34px] lg:leading-[1.53] lg:text-left">
            Для кого мы работаем
          </h2>
        </div>

        <div className="space-y-[20px] mb-10 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0 lg:mb-16">
          {servicesData.map((service) => (
            <Card key={service.id} className="bg-white rounded-[20px] shadow-[0px_0px_10px_4px_rgba(255,255,255,0.2)] overflow-hidden lg:shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] flex flex-col h-full">
              {/* Image Section */}
              <div className="h-[315px] relative lg:h-[250px]">
                <img
                  src={service.image}
                  alt={`${service.title} - профессиональная стирка`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-5 left-2.5 bg-white rounded-[50px] px-3 py-2">
                  <span className="text-black font-montserrat font-light text-[14px] leading-[1.71]">
                    {service.badge}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5 lg:p-8 flex flex-col flex-grow">
                <div className="space-y-2.5 lg:space-y-4 flex-grow">
                  <div className="space-y-0">
                    <h3 className="text-black font-montserrat font-bold text-[22px] leading-[1.22] lg:text-[24px] lg:leading-[1.2]">
                      {service.title}
                    </h3>
                    {service.subtitle && (
                      <p className="text-black font-montserrat font-light text-[14px] leading-[1.71] lg:text-[16px]">
                        {service.subtitle}
                      </p>
                    )}
                  </div>

                  <div className="w-[305px] lg:w-full">
                    <p className="text-[#1D1C3E] font-montserrat font-normal text-[16px] leading-[1.22] whitespace-pre-line lg:text-[18px] lg:leading-[1.4]">
                      {service.description}
                    </p>
                  </div>
                </div>

                <ServicesClient />
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <ApplicationForm
          title="Не нашли вашу отрасль? Запросите индивидуальные условия"
          description="Оставьте заявку — мы перезвоним вам с готовым коммерческим предложением!"
          showSphereField={true}
          source="services_form"
          buttonText="Получить КП"
        />
      </section>
    </>
  );
};
