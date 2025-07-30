"use client"

import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube, ArrowUpRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#092333] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img src="/logo-lab.png" alt="Level Mind Lab" className="h-8 w-auto brightness-0 invert" />
            </div>

            <p className="text-white/70 mb-8 text-lg leading-relaxed max-w-md">
              Transformamos PMEs através da IA Generativa. Metodologia comprovada, resultados mensuráveis.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/70">
                <Mail className="h-5 w-5" />
                <span>levelmind.lab@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Phone className="h-5 w-5" />
                <span>+55 (83) 9962-65549</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="h-5 w-5" />
                <span>Campina Grande, PB</span>
              </div>
            </div>
          </div>

          {/* Services */}
          

          {/* Company */}
          
        </div>

        {/* Social & Certifications */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-white/70 mr-4">Siga-nos:</span>
              {[
                { icon: Instagram, href: "https://www.instagram.com/levelmind.lab?igsh=MW83c2ZremZzMXYyag%3D%3D&utm_source=qr", label: "Instagram" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white/70 hover:bg-[#FFC845] hover:text-[#092333] transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Certifications */}
            
          </div>
        </div>

        {/* Copyright */}
        
      </div>
    </footer>
  )
}
