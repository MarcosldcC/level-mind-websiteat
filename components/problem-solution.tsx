"use client"

import { useEffect, useState } from "react"
import { Clock, Users, TrendingUp, HelpCircle } from "lucide-react"

export function ProblemSolution() {
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

    const element = document.getElementById("problem-solution")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const problems = [
    {
      icon: Clock,
      title: "Processos manuais consomem 40% do tempo útil",
      description: "Tarefas repetitivas que poderiam ser automatizadas",
    },
    {
      icon: Users,
      title: "Equipe sobrecarregada, sem tempo para inovar",
      description: "Colaboradores presos em atividades operacionais",
    },
    {
      icon: TrendingUp,
      title: "Concorrentes usando IA ganham vantagem competitiva",
      description: "Mercado evoluindo mais rápido que sua empresa",
    },
    {
      icon: HelpCircle,
      title: "Falta clareza sobre por onde começar com IA",
      description: "Muitas opções, pouca orientação prática",
    },
  ]

  return (
    <section id="problem-solution" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#092333] mb-6 leading-tight">
              Reconhece esses desafios
              <br />
              na sua empresa?
            </h2>
            <p className="text-xl text-[#2D3748]/70 max-w-3xl mx-auto leading-relaxed">
              Você não está sozinho. Estes são os principais obstáculos que impedem PMEs de crescer com eficiência.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto">
            {problems.map((problem, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-[#FFC845]/20 transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="flex items-start gap-6">
                    <div className="bg-[#092333] rounded-xl p-4 flex-shrink-0 group-hover:bg-[#FFC845] transition-colors duration-300">
                      <problem.icon className="h-7 w-7 text-white group-hover:text-[#092333]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#092333] mb-3 leading-tight">{problem.title}</h3>
                      <p className="text-[#2D3748]/70 leading-relaxed">{problem.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Solution Transition */}
          <div className="text-center">
            <div className="inline-block relative">
              <div className="bg-gradient-to-r from-[#FFC845] to-[#ffb82e] rounded-2xl px-12 py-8 mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-[#092333]">
                  E se você pudesse resolver isso em 8 semanas?
                </h3>
              </div>
            </div>
            <p className="text-xl text-[#2D3748]/70 max-w-3xl mx-auto leading-relaxed">
              Nossa metodologia Level Mind transforma esses desafios em oportunidades de crescimento, com resultados
              mensuráveis desde a primeira semana.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
