import { HeroSection } from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import { ProcessSection } from "@/components/process-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ProcessSection />
      <FeaturesSection />
      {/*<TestimonialsSection />*/}
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
