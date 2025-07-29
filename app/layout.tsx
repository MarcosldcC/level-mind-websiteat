import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Level Mind - Capacitação Empresarial em IA Generativa para PMEs",
  description:
    "Transforme sobrecarga em produtividade com IA Generativa. Capacitação prática para equipes que precisam de resultados reais — sem perder tempo com teoria.",
  keywords: "IA Generativa, Capacitação Empresarial, PME, Automação, Produtividade, Inteligência Artificial",
  authors: [{ name: "Level Mind" }],
  openGraph: {
    title: "Level Mind - Capacitação Empresarial em IA Generativa",
    description: "Transforme sobrecarga em produtividade com IA Generativa",
    type: "website",
    locale: "pt_BR",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/faveicon.png" type="image/png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
