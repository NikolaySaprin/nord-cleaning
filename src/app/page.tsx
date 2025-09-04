import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { PromotionsSlider } from "@/components/PromotionsSlider"
import { HowWeWork } from "@/components/HowWeWork"
import { Services } from "@/components/Services"
import { WhyChooseNord } from "@/components/WhyChooseNord"
import { Pricing } from "@/components/Pricing"
import { Packaging } from "@/components/Packaging"
import { RoundTheClockService } from "@/components/RoundTheClockService"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PromotionsSlider />
        <HowWeWork />
        <Services />
        <WhyChooseNord />
        <Pricing />
        <Packaging />
        <RoundTheClockService />
      </main>
    </div>
  )
}
