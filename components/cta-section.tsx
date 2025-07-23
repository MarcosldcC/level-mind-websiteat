"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle, Clock, Shield } from "lucide-react"

export function CTASection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(false)

    try {
      const formData = new FormData(e.target as HTMLFormElement)
      const emailData = {
        to: "levelmind.lab@gmail.com",
        subject: "Novo lead - Diagnóstico gratuito",
        text: `
          Novo lead interessado em diagnóstico gratuito:
          
          Email: ${formData.get("email")}
          Data: ${new Date().toLocaleString("pt-BR")}
          
          Origem: Site Level Mind
        `,
      }

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        throw new Error("Erro ao enviar email")
      }
    } catch (error) {
      console.error("Erro:", error)
      alert("Erro ao enviar. Tente novamente.")
    }
  }

  return (
    <section className="py-24 bg-gradient-to-br from-[#092333] via-[#0a2a3a] to-[#092333] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#FFC845]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#FFC845]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Pronto para
            <br />
            <span className="bg-gradient-to-r from-[#FFC845] to-[#ffb82e] bg-clip-text text-transparent">
              transformar
            </span>
            <br />
            sua empresa?
          </h2>

          <p className="text-xl lg:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Comece com um diagnóstico gratuito de 30 minutos e descubra como a IA pode revolucionar sua operação
          </p>

          {/* CTA Form */}
          <div className="max-w-2xl mx-auto mb-12">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  name="email"
                  placeholder="Seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-14 px-6 text-lg bg-white/10 border-white/20 text-white placeholder:text-white/60 backdrop-blur-sm"
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  className="bg-[#FFC845] hover:bg-[#e6b33e] text-[#092333] px-8 h-14 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Diagnóstico gratuito
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            ) : (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <CheckCircle className="h-12 w-12 text-[#FFC845] mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Solicitação enviada!</h3>
                <p className="text-white/80">Entraremos em contato em até 4 horas úteis.</p>
              </div>
            )}
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/60">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>Resposta em até 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span>100% gratuito</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>Sem compromisso</span>
            </div>
          </div>

          {/* Social Proof */}
        </div>
      </div>
    </section>
  )
}
