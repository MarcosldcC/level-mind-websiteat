"use client"

import { useEffect, useState } from "react"

export function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("process-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      title: "Diagnóstico",
      subtitle: "Reunião inicial",
      description: "Reunião de diagnóstico para compreender as principais problemáticas da sua empresa",
      duration: "Etapa 1",
    },
    {
      title: "Personalização",
      subtitle: "Material customizado",
      description: "Personalização do material para a capacitação especialmente para a empresa",
      duration: "Etapa 2",
    },
    {
      title: "Treinamento",
      subtitle: "6,5h presencial",
      description: "Treinamento presencial de 6 horas e meia, incluindo um intervalo para coffee break",
      duration: "Etapa 3",
    },
    {
      title: "Consultoria",
      subtitle: "+2h opcionais",
      description: "+2 horas opcionais de consultoria personalizada após o curso, voltadas para retirar dúvidas",
      duration: "Etapa 4",
    },
    {
      title: "Casos Reais",
      subtitle: "Hands-on",
      description:
        "Estudos de caso reais do seu setor, demonstrações ao vivo e atividades hands-on para sua equipe aprender fazendo",
      duration: "Etapa 5",
    },
    {
      title: "Especialista",
      subtitle: "Profissional experiente",
      description:
        "Curso oferecido por um profissional de destaque em inovação, para que você aprenda com alguém que aplica IA na prática",
      duration: "Etapa 6",
    },
  ]

  const results = [
    {
      metric: "40%",
      label: "Aumento na produtividade",
      gradient: "from-green-400 to-blue-500",
    },
    {
      metric: "60%",
      label: "Redução em tarefas manuais",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      metric: "3.7x",
      label: "Retorno sobre investimento",
      gradient: "from-purple-400 to-pink-500",
    },
  ]

  return (
    <section id="process-section" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Título */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#092333] mb-6">Como funciona</h2>
          <p className="text-xl text-[#2D3748]/70 max-w-3xl mx-auto">
            Processo estruturado em 6 etapas para garantir resultados mensuráveis
          </p>
        </div>

        {/* Etapas */}
        <div className="relative">
          <div className="space-y-12">
            {/* Primeira linha - 3 etapas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {steps.slice(0, 3).map((step, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  <div className="text-center mb-6">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl transition-all duration-300 ${
                        activeStep === index ? "bg-[#FFC845] shadow-lg scale-110" : "bg-[#092333] hover:bg-[#FFC845]"
                      }`}
                    >
                      <span className={`text-2xl font-bold ${activeStep === index ? "text-[#092333]" : "text-white"}`}>
                        {index + 1}
                      </span>
                    </div>
                    <div className="mt-4 text-sm font-medium text-[#FFC845]">{step.duration}</div>
                  </div>

                  <div
                    className={`bg-white border rounded-2xl p-6 transition-all duration-300 ${
                      activeStep === index
                        ? "border-[#FFC845]/30 shadow-xl -translate-y-2"
                        : "border-gray-100 hover:shadow-lg hover:-translate-y-1"
                    }`}
                  >
                    <h3 className="text-xl font-bold text-[#092333] mb-2">{step.title}</h3>
                    <p className="text-[#FFC845] font-medium text-sm mb-3">{step.subtitle}</p>
                    <p className="text-[#2D3748]/70 text-sm leading-relaxed">{step.description}</p>
                  </div>

                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#092333] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>

            {/* Segunda linha - 3 etapas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {steps.slice(3, 6).map((step, index) => (
                <div
                  key={index + 3}
                  className={`relative transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${(index + 3) * 200}ms` }}
                  onMouseEnter={() => setActiveStep(index + 3)}
                >
                  <div className="text-center mb-6">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl transition-all duration-300 ${
                        activeStep === index + 3
                          ? "bg-[#FFC845] shadow-lg scale-110"
                          : "bg-[#092333] hover:bg-[#FFC845]"
                      }`}
                    >
                      <span
                        className={`text-2xl font-bold ${activeStep === index + 3 ? "text-[#092333]" : "text-white"}`}
                      >
                        {index + 4}
                      </span>
                    </div>
                    <div className="mt-4 text-sm font-medium text-[#FFC845]">{step.duration}</div>
                  </div>

                  <div
                    className={`bg-white border rounded-2xl p-6 transition-all duration-300 ${
                      activeStep === index + 3
                        ? "border-[#FFC845]/30 shadow-xl -translate-y-2"
                        : "border-gray-100 hover:shadow-lg hover:-translate-y-1"
                    }`}
                  >
                    <h3 className="text-xl font-bold text-[#092333] mb-2">{step.title}</h3>
                    <p className="text-[#FFC845] font-medium text-sm mb-3">{step.subtitle}</p>
                    <p className="text-[#2D3748]/70 text-sm leading-relaxed">{step.description}</p>
                  </div>

                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#092333] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 4}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div
          className={`mt-20 bg-gradient-to-r from-[#092333] to-[#0a2a3a] rounded-3xl p-8 lg:p-12 text-white transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Resultados esperados</h3>
            <p className="text-white/80 text-lg">Métricas típicas após a capacitação</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center group">
                
                <div className="text-4xl font-bold text-[#FFC845] mb-2">{result.metric}</div>
                <div className="text-white/80">{result.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
