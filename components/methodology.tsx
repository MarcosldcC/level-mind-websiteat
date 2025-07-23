"use client"

import { useEffect, useState } from "react"
import { Search, Wrench, Target, MessageCircle } from "lucide-react"

export function Methodology() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("methodology")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      number: "01",
      title: "DIAGNÓSTICO",
      subtitle: "30min • Gratuito",
      description: "Mapeamento de processos e identificação de oportunidades de automação específicas para sua empresa",
      icon: Search,
      features: ["Análise de processos atuais", "Identificação de gargalos", "Estimativa de ROI"],
    },
    {
      number: "02",
      title: "WORKSHOP HANDS-ON",
      subtitle: "6,5h • Presencial/Online",
      description: "Capacitação prática com ferramentas aplicadas diretamente à sua operação",
      icon: Wrench,
      features: ["Treinamento prático", "Ferramentas específicas", "Aplicação real"],
    },
    {
      number: "03",
      title: "IMPLEMENTAÇÃO GUIADA",
      subtitle: "2h • Consultoria 1:1",
      description: "Aplicação real com mentoria direta dos especialistas",
      icon: Target,
      features: ["Mentoria personalizada", "Implementação assistida", "Ajustes específicos"],
    },
    {
      number: "04",
      title: "SUPORTE CONTÍNUO",
      subtitle: "WhatsApp VIP",
      description: "Grupo exclusivo para dúvidas e otimizações contínuas",
      icon: MessageCircle,
      features: ["Suporte direto", "Grupo VIP", "Otimizações contínuas"],
    },
  ]

  return (
    <section id="methodology" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#092333] mb-6 leading-tight">
              Metodologia Level Mind:
              <br />
              Prática, não teoria
            </h2>
            <p className="text-xl text-[#2D3748]/70 max-w-3xl mx-auto leading-relaxed">
              Um processo estruturado e testado que garante resultados mensuráveis em cada etapa
            </p>
          </div>

          {/* Steps */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  <div className="group relative">
                    {/* Step Number */}
                    <div className="text-6xl font-bold text-[#FFC845]/20 mb-4 group-hover:text-[#FFC845]/40 transition-colors">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 bg-[#092333] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FFC845] transition-colors duration-300">
                      <step.icon className="h-8 w-8 text-white group-hover:text-[#092333]" />
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-[#092333] mb-2">{step.title}</h3>
                        <p className="text-[#FFC845] font-semibold text-sm mb-4">{step.subtitle}</p>
                      </div>

                      <p className="text-[#2D3748]/70 leading-relaxed mb-6">{step.description}</p>

                      {/* Features */}
                      <ul className="space-y-2">
                        {step.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-[#2D3748]/60">
                            <div className="w-1.5 h-1.5 bg-[#FFC845] rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Connecting Line (Desktop) */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-20 -right-4 w-8 h-px bg-gradient-to-r from-[#092333]/20 to-transparent"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
