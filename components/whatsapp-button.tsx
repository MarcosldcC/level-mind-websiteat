"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Quero saber mais sobre a capacitação em IA da LevelMind para pequenas e médias empresas. Parece exatamente o que estou buscando",
    )
    window.open(`https://wa.me/5583981362593?text=${message}`, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20b858] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-[#2D3748] text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Fale conosco no WhatsApp
      </div>
    </button>
  )
}
