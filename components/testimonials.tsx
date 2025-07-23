"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("testimonials")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      quote: "Implementamos IA no atendimento em 48h. Resultado: 60% menos tempo por chamado.",
      author: "Maria Silva",
      role: "Gerente Operacional",
      location: "São Paulo",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote: "O workshop foi direto ao ponto. Saímos aplicando no mesmo dia.",
      author: "João Santos",
      role: "CEO",
      location: "Florianópolis",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote: "Nossa produtividade aumentou 40% em apenas 3 semanas. Investimento que se paga sozinho.",
      author: "Ana Costa",
      role: "Diretora Comercial",
      location: "Rio de Janeiro",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D3748] mb-4">O que nossos clientes dizem</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Depoimentos reais de empresários que transformaram suas operações
            </p>
          </div>

          {/* Video Testimonial Placeholder */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative bg-[#092333] rounded-2xl overflow-hidden aspect-video">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-[#FFC845] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#092333]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-lg">Depoimento em vídeo - Maria Silva</p>
                  <p className="text-sm text-gray-300">CEO da TechSolutions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Carousel */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-6">
                  <Quote className="h-12 w-12 text-[#FFC845] flex-shrink-0" />

                  <div className="flex-1">
                    <blockquote className="text-xl md:text-2xl text-[#2D3748] mb-6 leading-relaxed">
                      "{testimonials[currentTestimonial].quote}"
                    </blockquote>

                    <div className="flex items-center gap-4">
                      <img
                        src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                        alt={testimonials[currentTestimonial].author}
                        className="w-16 h-16 rounded-full object-cover"
                      />

                      <div className="flex-1">
                        <div className="font-semibold text-[#2D3748] text-lg">
                          {testimonials[currentTestimonial].author}
                        </div>
                        <div className="text-gray-600">
                          {testimonials[currentTestimonial].role} • {testimonials[currentTestimonial].location}
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-[#FFC845] text-[#FFC845]" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center gap-4 mt-8">
                <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full bg-transparent">
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentTestimonial ? "bg-[#FFC845]" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full bg-transparent">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
