import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Features } from "@/components/Features"
import { Services } from "@/components/Services"
import { PromotionsSlider } from "@/components/PromotionsSlider"
import { Process } from "@/components/Process"
import { Pricing } from "@/components/Pricing"
import { WhyChooseNord } from "@/components/WhyChooseNord"
import { Packaging } from "@/components/Packaging"
import { ClientsAndCases } from "@/components/ClientsAndCases"
import { Footer } from "@/components/Footer"
import { ApplicationForm } from "@/components/ApplicationForm"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[3.75rem] lg:pt-[5rem]">
        <section id="home">
          <Hero />
          <Features />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="promotions">
          <PromotionsSlider />
        </section>
        <section id="process">
          <Process />
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
        <section className="bg-white px-4 py-10 lg:px-8 lg:py-20 lg:max-w-7xl lg:mx-auto">
          <ApplicationForm source="bottom_form" title="Доверьте чистоту Вашего бизнеса нам!" description="Присоединяйтесь к нашим довольным клиентам!" showSphereField={false} />
        </section>
      </main>
      <Footer />
    </div>
  )
}
