"use client"

import { CTASection } from "@/components/cta-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import AboutSection from "@/components/about-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <AboutSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
