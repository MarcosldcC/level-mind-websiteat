"use client"

import { useEffect, useState } from "react"
import { TrendingUp, Clock, FileText } from "lucide-react"

export function CaseStudies() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ companies: 0, nps: 0, roi: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        const duration = 2000
        const steps = 60
        const increment = duration / steps

        let step = 0
        const timer = setInterval(() => {
          step++
          const progress = step / steps
          setCounters({
            companies: Math.floor(100 * progress),
            nps: Math.floor(92 * progress),
            roi: Math.floor(37 * progress) / 10,
          })

          if (step >= steps) clearInterval(timer)
        }, increment)
      }
    }, { threshold: 0.1 })

    const element = document.getElementById("casos-sucesso")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const cases = [
    {
      icon: FileText,
      title: "Escritório de contabilidade",
      result: "-12h/semana em relatórios",
      description: "Automatização de relatórios financeiros com IA, liberando tempo para consultoria estratégica",
      metrics: "300% mais eficiência",
    },
    {
      icon: TrendingUp,
      title: "E-commerce",
      result: "+300% velocidade em descrições",
      description: "Geração automática de descrições de produtos otimizadas para SEO e conversão",
      metrics: "85% menos tempo",
    },
    {
      icon: Clock,
      title: "Consultoria",
      result: "Automatizou 80% das propostas",
      description: "Sistema de IA para criação de propostas comerciais personalizadas em minutos",
      metrics: "5x mais propostas",
    },
  ]

  return (
    <section id="casos-sucesso" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D3748] mb-4">
              Resultados mensuráveis em empresas como a sua
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Casos reais de transformação digital com impacto direto no resultado
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {cases.map((case_, index) => {
              const Icon = case_.icon
              return (
                <div
                  key={index}
                  className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="bg-[#F8F9FA] rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                    <div className="bg-[#092333] rounded-lg p-3 w-fit mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-[#2D3748] mb-2">{case_.title}</h3>

                    <div className="text-2xl font-bold text-[#FFC845] mb-3">{case_.result}</div>

                    <p className="text-gray-600 mb-4">{case_.description}</p>

                    <div className="bg-white rounded-lg p-3 text-center">
                      <span className="text-[#092333] font-semibold">{case_.metrics}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Overall Metrics */}
          <div className="bg-[#092333] rounded-2xl p-8 text-white grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#FFC845] mb-2">6h</div>
              <p className="text-lg">Liberadas por colaborador/semana</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#FFC845] mb-2">35%</div>
              <p className="text-lg">Redução de processos manuais</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#FFC845] mb-2">2x</div>
              <p className="text-lg">Aceleração em processos internos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
