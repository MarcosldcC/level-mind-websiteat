"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Clock, Shield } from "lucide-react"

export function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id="diagnostico-gratuito" className="py-20 bg-[#092333]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center text-white">
            <div className="w-20 h-20 bg-[#FFC845] rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-[#092333]" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Solicitação enviada com sucesso!</h2>
            <p className="text-xl text-gray-300 mb-6">
              Entraremos em contato em até 4 horas úteis para agendar seu diagnóstico gratuito.
            </p>
            <p className="text-gray-400">Enquanto isso, que tal conhecer alguns dos nossos casos de sucesso?</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="diagnostico-gratuito" className="py-20 bg-[#092333]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Descubra o potencial de IA na sua empresa</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Diagnóstico gratuito de 30min: identificamos 3 processos que podem ser otimizados com IA
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Benefits */}
            <div className="text-white">
              <h3 className="text-2xl font-semibold mb-6">O que você vai receber:</h3>
              <div className="space-y-4">
                {[
                  "Análise gratuita dos seus processos atuais",
                  "Identificação de 3 oportunidades de automação",
                  "Estimativa de tempo e recursos que pode economizar",
                  "Roadmap personalizado para implementação",
                  "Acesso ao nosso grupo VIP no WhatsApp",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-[#0a2a3a] rounded-xl">
                <div className="flex items-center gap-4 text-[#FFC845] mb-4">
                  <Clock className="h-6 w-6" />
                  <span className="font-semibold">Agenda limitada</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Realizamos apenas 5 diagnósticos por semana para garantir qualidade máxima. Garante já o seu!
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nome" className="text-[#2D3748] font-medium">
                      Nome completo *
                    </Label>
                    <Input id="nome" name="nome" type="text" required placeholder="Seu nome" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="empresa" className="text-[#2D3748] font-medium">
                      Empresa *
                    </Label>
                    <Input
                      id="empresa"
                      name="empresa"
                      type="text"
                      required
                      placeholder="Nome da empresa"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="text-[#2D3748] font-medium">
                      E-mail corporativo *
                    </Label>
                    <Input id="email" name="email" type="email" required placeholder="seu@email.com" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="telefone" className="text-[#2D3748] font-medium">
                      WhatsApp
                    </Label>
                    <Input id="telefone" name="telefone" type="tel" placeholder="(11) 99999-9999" className="mt-1" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="funcionarios" className="text-[#2D3748] font-medium">
                    Quantos funcionários?
                  </Label>
                  <Select name="funcionarios">
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Selecionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10</SelectItem>
                      <SelectItem value="11-50">11-50</SelectItem>
                      <SelectItem value="51-200">51-200</SelectItem>
                      <SelectItem value="200+">Mais de 200</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="desafio" className="text-[#2D3748] font-medium">
                    Principal desafio com processos manuais:
                  </Label>
                  <Textarea
                    id="desafio"
                    name="desafio"
                    rows={3}
                    placeholder="Ex: Perco muito tempo criando relatórios..."
                    className="mt-1"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FFC845] hover:bg-[#e6b33e] text-[#092333] font-semibold py-4 text-lg transition-all duration-300 hover:scale-105"
                >
                  {isSubmitting ? "Enviando..." : "Agendar meu diagnóstico gratuito"}
                </Button>

                <div className="flex items-center gap-4 text-sm text-gray-600 justify-center">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>Resposta em até 4h úteis</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield className="h-4 w-4" />
                    <span>100% gratuito</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
