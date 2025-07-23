"use client"

import { useEffect, useState } from "react"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("testimonials-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      quote:
        "A Level Mind transformou completamente nossa operação. Reduzimos 60% do tempo em relatórios e aumentamos nossa capacidade de atendimento em 40%.",
      author: "Maria Silva",
      role: "CEO",
      company: "TechSolutions",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      results: "60% menos tempo em relatórios",
    },
    {
      quote:
        "O workshop foi extremamente prático. Saímos aplicando as ferramentas no mesmo dia. O ROI foi visível em menos de 30 dias.",
      author: "João Santos",
      role: "Diretor de Operações",
      company: "InnovaCorp",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      results: "ROI em 30 dias",
    },
    {
      quote:
        "Metodologia excepcional. A equipe da Level Mind entende as dores reais de PMEs e oferece soluções práticas e eficazes.",
      author: "Ana Costa",
      role: "Fundadora",
      company: "SmartBiz",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      results: "40% mais produtividade",
    },
  ]

  return (
    <section id="testimonials-section" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#092333] mb-6">
            Histórias de
            <span className="bg-gradient-to-r from-[#FFC845] to-[#ffb82e] bg-clip-text text-transparent"> sucesso</span>
          </h2>
          <p className="text-xl text-[#2D3748]/70 max-w-3xl mx-auto">
            Veja como empresas como a sua transformaram suas operações
          </p>
        </div>

        {/* Main Testimonial */}
        <div
          className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 relative">
            <Quote className="absolute top-6 left-6 h-8 w-8 text-[#FFC845]/30" />

            <div className="text-center mb-8">
              <blockquote className="text-2xl lg:text-3xl font-medium text-[#092333] leading-relaxed mb-6">
                "{testimonials[activeTestimonial].quote}"
              </blockquote>

              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#FFC845] text-[#FFC845]" />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <img
                src={testimonials[activeTestimonial].avatar || "/placeholder.svg"}
                alt={testimonials[activeTestimonial].author}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-center">
                <div className="font-bold text-[#092333] text-lg">{testimonials[activeTestimonial].author}</div>
                <div className="text-[#2D3748]/70">
                  {testimonials[activeTestimonial].role} • {testimonials[activeTestimonial].company}
                </div>
                <div className="text-[#FFC845] font-medium text-sm mt-1">{testimonials[activeTestimonial].results}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center gap-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeTestimonial ? "bg-[#FFC845] scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Video Testimonial */}
        
      </div>
    </section>
  )
}
