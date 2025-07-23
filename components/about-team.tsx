"use client"

import { useEffect, useState } from "react"
import { Award, Users, Target, CheckCircle } from "lucide-react"

export function AboutTeam() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about-team")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const differentials = [
    {
      icon: Target,
      title: "Metodologia própria testada em +100 empresas",
      description: "Processo validado e refinado através de centenas de implementações",
    },
    {
      icon: Users,
      title: "Foco exclusivo em PMEs (conhecemos suas dores)",
      description: "Especialização em desafios específicos de pequenas e médias empresas",
    },
    {
      icon: CheckCircle,
      title: "Suporte direto com os fundadores",
      description: "Acesso direto aos criadores da metodologia, não terceirizamos",
    },
    {
      icon: Award,
      title: "Resultados mensuráveis, não promessas",
      description: "Métricas claras e acompanhamento de ROI em cada implementação",
    },
  ]

  return (
    <section id="about-team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D3748] mb-6">
              Especialistas que aplicam o que ensinam
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A Level Mind reúne profissionais com experiência prática em IA corporativa. Não somos teóricos —
                desenvolvemos e implementamos soluções reais para empresas reais.
              </p>
            </div>
          </div>

          {/* Team Photo */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=800"
                alt="Equipe Level Mind"
                className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-[#092333] bg-opacity-20 rounded-2xl"></div>
            </div>
          </div>

          {/* Differentials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {differentials.map((item, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start gap-4 p-6 bg-[#F8F9FA] rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-[#FFC845] rounded-lg p-3 flex-shrink-0">
                    <item.icon className="h-6 w-6 text-[#092333]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2D3748] mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications/Achievements */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-8 bg-[#092333] rounded-2xl px-8 py-6">
              <div className="text-white">
                <div className="text-2xl font-bold text-[#FFC845]">5+ anos</div>
                <div className="text-sm">Experiência em IA</div>
              </div>
              <div className="w-px h-12 bg-gray-600"></div>
              <div className="text-white">
                <div className="text-2xl font-bold text-[#FFC845]">100+</div>
                <div className="text-sm">Projetos entregues</div>
              </div>
              <div className="w-px h-12 bg-gray-600"></div>
              <div className="text-white">
                <div className="text-2xl font-bold text-[#FFC845]">92 NPS</div>
                <div className="text-sm">Satisfação cliente</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
