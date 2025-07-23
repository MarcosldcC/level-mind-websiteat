"use client"

import { useEffect, useState } from "react"
import { Zap, Target, Users, BarChart3, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("features-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: Zap,
      title: "Automação Inteligente",
      description: "Transforme tarefas repetitivas em processos automatizados com IA",
      details: "Reduza até 80% do tempo gasto em atividades manuais",
      progress: 80,
    },
    {
      icon: Target,
      title: "Resultados Mensuráveis",
      description: "Acompanhe o impacto real da IA na sua operação",
      details: "Métricas claras de produtividade e ROI",
      progress: 92,
    },
    {
      icon: Users,
      title: "Capacitação Prática",
      description: "Treinamento hands-on para sua equipe",
      details: "Workshops práticos com aplicação imediata",
      progress: 95,
    },
    {
      icon: BarChart3,
      title: "Crescimento Acelerado",
      description: "Escale sua operação sem aumentar custos",
      details: "Aumento médio de 40% na produtividade",
      progress: 100,
    },
  ]

  return (
    <section id="features-section" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#092333] mb-4">
            Por que escolher a <span className="text-[#FFC845]">Level Mind</span>?
          </h2>
          <p className="text-xl text-[#2D3748]/70 max-w-3xl mx-auto">
            Metodologia comprovada que transforma desafios em oportunidades de crescimento
          </p>
        </div>

        {/* Main Content - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column - Features List */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeFeature === index ? "bg-[#FFC845]/10 border-l-4 border-[#FFC845]" : "hover:bg-gray-50"
                  }`}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div
                    className={`rounded-lg p-2 transition-colors duration-300 ${
                      activeFeature === index ? "bg-[#FFC845]" : "bg-[#092333]"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 transition-colors duration-300 ${
                        activeFeature === index ? "text-[#092333]" : "text-white"
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#092333] mb-1">{feature.title}</h3>
                    <p className="text-[#2D3748]/70">{feature.description}</p>
                    <p className="text-[#FFC845] font-semibold text-sm mt-1">{feature.details}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Column - Interactive Card */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-[#092333] rounded-2xl p-8 text-white min-h-[300px] transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#FFC845] rounded-xl p-3">
                  {(() => {
                    const Icon = features[activeFeature].icon
                    return <Icon className="h-8 w-8 text-[#092333]" />
                  })()}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{features[activeFeature].title}</h3>
                  <p className="text-white/80">{features[activeFeature].description}</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white/80">Progresso</span>
                  <span className="text-[#FFC845] font-bold">{features[activeFeature].progress}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-[#FFC845] to-[#ffb82e] h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${features[activeFeature].progress}%` }}
                  ></div>
                </div>
              </div>

              <p className="text-white/90 text-lg">{features[activeFeature].details}</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        
      </div>
    </section>
  )
}

export default FeaturesSection
