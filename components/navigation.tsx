"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 my-[0] ${
        isScrolled
          ? "bg-[#092333]/95 backdrop-blur-xl border-b border-[#092333]/20"
          : "bg-[#092333]/90 backdrop-blur-sm border-b border-[#092333]/20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo-lab.png" alt="Level Mind Lab" className="h-8 w-auto brightness-0 invert" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-12">
            {[
              { name: "Metodologia", id: "process-section" },
              { name: "Sobre", id: "features-section" },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-white/80 hover:text-white transition-colors duration-300 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFC845] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              className="bg-[#FFC845] hover:bg-[#e6b33e] text-[#092333] px-6 py-3 rounded-xl font-medium group bg-white"
              onClick={() => scrollToSection("cta")}
            >
              Começar agora
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#092333] border-b border-[#092333]/20 shadow-lg">
            <div className="px-6 py-6 space-y-4">
              {[
                { name: "Metodologia", id: "process-section" },
                { name: "Sobre", id: "features-section" },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    scrollToSection(item.id)
                  }}
                  className="block text-white/80 hover:text-white font-medium w-full text-left"
                >
                  {item.name}
                </button>
              ))}

              <div className="pt-4 space-y-3">
                <Button
                  className="w-full bg-[#FFC845] hover:bg-[#e6b33e] text-[#092333]"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    scrollToSection("cta")
                  }}
                >
                  Começar agora
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
