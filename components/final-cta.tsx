"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Shield } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#092333] to-[#0a2a3a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=400')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Sua equipe merece trabalhar com <span className="text-[#FFC845]">inteligência</span>, não apenas força
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Agende 30 minutos gratuitos e descubra como implementar IA sem complicação
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-[#FFC845] hover:bg-[#e6b33e] text-[#092333] font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById("diagnostico-gratuito")?.scrollIntoView({ behavior: "smooth" })}
            >
              Quero transformar minha operação
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>Conversa sem compromisso</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span>Resposta garantida em 4h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
