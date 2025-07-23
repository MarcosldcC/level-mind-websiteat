"use client"

import { useEffect, useState } from "react"

export function SocialValidation() {
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

    const element = document.getElementById("social-validation")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const companies = ["TechCorp", "InnovaSoft", "DataFlow", "SmartBiz", "ProActive", "NextGen"]

  return (
    <section id="social-validation" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-16">
            <p className="text-[#2D3748]/60 text-lg mb-8">Empresas que já transformaram sua operação</p>

            {/* Company Logos */}
            <div className="overflow-hidden mb-16">
              <div className="flex animate-scroll items-center">
                {[...companies, ...companies].map((company, index) => (
                  <div key={index} className="flex-shrink-0 mx-12">
                    <div className="text-[#2D3748]/40 font-semibold text-lg hover:text-[#092333] transition-colors duration-300">
                      {company}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Metrics - Simplified */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#092333] to-[#0a2a3a] rounded-3xl p-12 text-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-5xl font-bold text-[#FFC845] mb-3">6h</div>
                  <p className="text-white/80">Liberadas por colaborador/semana</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-[#FFC845] mb-3">4h</div>
                  <p className="text-white/80">Economizadas/semana</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-[#FFC845] mb-3">3.7x</div>
                  <p className="text-white/80">ROI Médio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
