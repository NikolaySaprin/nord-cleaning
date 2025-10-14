import dynamic from 'next/dynamic'
import { Header } from "@/components/Header"
import { HeroServer } from "@/components/server/HeroServer"
import { Features } from "@/components/Features"
import { ServicesServer } from "@/components/server/ServicesServer"
import { Footer } from "@/components/Footer"

// Lazy load компоненты ниже fold для оптимизации First Load
const PromotionsSlider = dynamic(() => import('@/components/PromotionsSlider/PromotionsSlider').then(mod => ({ default: mod.PromotionsSlider })), {
  loading: () => <div className="min-h-[400px] bg-white" />,
})

const ProcessServer = dynamic(() => import('@/components/server/ProcessServer').then(mod => ({ default: mod.ProcessServer })), {
  loading: () => <div className="min-h-[400px] bg-white" />,
})

const Pricing = dynamic(() => import('@/components/Pricing/Pricing').then(mod => ({ default: mod.Pricing })), {
  loading: () => <div className="min-h-[400px] bg-gradient-to-br from-[#628CED] to-[#3A64C5]" />,
})

const WhyChooseNord = dynamic(() => import('@/components/WhyChooseNord').then(mod => ({ default: mod.WhyChooseNord })), {
  loading: () => <div className="min-h-[400px] bg-[#F7F8FA]" />,
})

const Packaging = dynamic(() => import('@/components/Packaging/Packaging').then(mod => ({ default: mod.Packaging })), {
  loading: () => <div className="min-h-[400px] bg-white" />,
})

const ClientsAndCases = dynamic(() => import('@/components/ClientsAndCases').then(mod => ({ default: mod.ClientsAndCases })), {
  loading: () => <div className="min-h-[400px] bg-gradient-to-br from-[#628CED] to-[#3A64C5]" />,
})

const ApplicationForm = dynamic(() => import('@/components/ApplicationForm').then(mod => ({ default: mod.ApplicationForm })), {
  loading: () => <div className="min-h-[200px] bg-white" />,
})

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[3.75rem] lg:pt-[5rem]">
        <section id="home">
          <HeroServer />
          <Features />
        </section>
        <section id="services">
          <ServicesServer />
        </section>
        <section id="promotions">
          <PromotionsSlider />
        </section>
        <section id="process">
          <ProcessServer />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="why-choose">
          <WhyChooseNord />
        </section>
        <section id="packaging">
          <Packaging />
        </section>
        <section id="clients-cases">
          <ClientsAndCases />
        </section>
        <section className="bg-white px-4 py-10 lg:px-8 lg:py-20 lg:max-w-[87.5rem] lg:mx-auto">
          <ApplicationForm source="bottom_form" title="Доверьте чистоту Вашего бизнеса нам!" description="Присоединяйтесь к нашим довольным клиентам!" showSphereField={false} />
        </section>
      </main>
      <Footer />
    </div>
  )
}
