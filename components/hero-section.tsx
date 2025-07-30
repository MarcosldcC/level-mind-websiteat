"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Target, TrendingUp } from "lucide-react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const metrics = [
    {
      metric: "6h",
      label: "Liberadas por colaborador/semana",
      icon: Target,
      gradient: "from-blue-400 to-purple-500",
    },
    {
      metric: "35%",
      label: "Redução de processos",
      icon: Zap,
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      metric: "2x",
      label: "Aceleração em processos internos",
      icon: TrendingUp,
      gradient: "from-green-400 to-blue-500",
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50/30 to-white pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-[#FFC845]/10 to-[#092333]/5 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            top: "10%",
            left: "10%",
          }}
        />
        <div
          className="absolute w-80 h-80 bg-gradient-to-r from-[#092333]/10 to-[#FFC845]/5 rounded-full blur-3xl animate-pulse delay-1000"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            bottom: "10%",
            right: "10%",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-8">
        <div className="text-center">
          <h1
            className={`text-5xl md:text-6xl lg:text-8xl font-bold text-[#092333] mb-8 leading-tight transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Automatize.
            <br />
            <span className="bg-gradient-to-r from-[#FFC845] to-[#ffb82e] bg-clip-text text-transparent">
              Acelere.
            </span>
            <br />
            Cresça.
          </h1>

          <p
            className={`text-xl lg:text-2xl text-[#2D3748]/70 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Transforme processos manuais em sistemas inteligentes com IA Generativa. Resultados mensuráveis em 30 dias.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button
              onClick={() => {
                document.getElementById("features-section")?.scrollIntoView({ behavior: "smooth" })
              }}
              variant="outline"
              size="lg"
              className="border-[#092333] text-[#092333] hover:bg-[#092333]/10 px-8 py-4 text-lg rounded-xl font-medium transition-all duration-300"
            >
              Ver como funciona
            </Button>

            <Button
              onClick={() => {
                const el = document.getElementById("cta")
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" })
                } else {
                  console.warn("Elemento #cta não encontrado")
                }
              }}
              size="lg"
              className="bg-[#092333] hover:bg-[#0a2a3a] text-white px-8 py-4 text-lg rounded-xl font-medium group shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Diagnóstico gratuito
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="relative">
            <div
              className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-800 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              {metrics.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group shadow-none"
                >
                  <div className="text-3xl font-bold text-[#092333] mb-1">{item.metric}</div>
                  <div className="text-sm text-[#2D3748]/60">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" />
    </section>
  )
}
