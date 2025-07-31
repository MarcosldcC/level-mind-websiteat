"use client"

import { useEffect, useState } from "react"
import { HeartHandshake, Lightbulb, Rocket, Users } from "lucide-react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById("about-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const values = [
    {
      icon: HeartHandshake,
      title: "Compromisso com Pessoas",
      description: "Colocamos pessoas no centro de tudo que fazemos, com empatia e ética.",
    },
    {
      icon: Lightbulb,
      title: "Inovação com Propósito",
      description: "Criamos soluções que realmente fazem a diferença no dia a dia.",
    },
    {
      icon: Rocket,
      title: "Visão de Futuro",
      description: "Trabalhamos hoje pensando no amanhã, com responsabilidade e estratégia.",
    },
    {
      icon: Users,
      title: "Trabalho em Equipe",
      description: "Unimos talentos diversos para entregar resultados excepcionais.",
    },
  ]

  return (
    <section id="about-section" className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#092333] mb-4">
            Quem Somos <span className="text-[#FFC845]">Level Mind</span>
          </h2>
          <p className="text-xl text-[#2D3748]/70 max-w-3xl mx-auto">
            Unimos tecnologia, criatividade e estratégia para transformar ideias em soluções reais e impactantes.
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Texto Institucional */}
          <div className="space-y-6">
            <p className="text-lg text-[#2D3748]/80 leading-relaxed">
              A Level Mind nasceu com o propósito de revolucionar a forma como empresas e pessoas se relacionam com a tecnologia.
              Atuamos com inteligência, propósito e foco em resultado.
            </p>
            <p className="text-lg text-[#2D3748]/80 leading-relaxed">
              Nossos projetos unem design estratégico, automação inteligente e uma cultura centrada no ser humano.
              Não criamos apenas soluções digitais, criamos transformações significativas.
            </p>
          </div>

          {/* Right Column - Valores com Ícones */}
          <div className="space-y-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-[#FFC845] rounded-lg p-3">
                    <Icon className="h-6 w-6 text-[#092333]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#092333] mb-1">{value.title}</h3>
                    <p className="text-[#2D3748]/70">{value.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
