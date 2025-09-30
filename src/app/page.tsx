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
import { BottomContactForm } from "@/components/BottomContactForm"
import { Footer } from "@/components/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <PromotionsSlider />
        <Process />
        <Pricing />
        <WhyChooseNord />
        <Packaging />
        <ClientsAndCases />
        <BottomContactForm />
      </main>
      <Footer />
    </div>
  )
}
