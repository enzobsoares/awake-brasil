import React from "react"
import type { Metadata } from 'next'
import { Inter, Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GoogleTagManager } from '@next/third-parties/google' // <--- 1. IMPORTAÇÃO ADICIONADA
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Grupo Awake Brasil | Inteligência em Ativos Imobiliários',
    template: '%s | Grupo Awake Brasil'
  },
  description: 'Especialistas em gestão, administração e estruturação de ativos imobiliários. Segurança, governança e visão estratégica para investidores e instituições.',
  keywords: [
    'Gestão Imobiliária', 
    'Investimentos', 
    'Leilões de Imóveis', 
    'Asset Management', 
    'Grupo Awake', 
    'Fundos Imobiliários'
  ],
  authors: [{ name: 'Grupo Awake Brasil' }],
  // Configuração limpa de ícone
  icons: {
    icon: '/favicon.ico', 
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      {/* 2. COMPONENTE GTM ADICIONADO AQUI
        Ele injeta automaticamente o Script no Head e o NoScript no Body 
      */}
      <GoogleTagManager gtmId="GTM-MV8DP36Q" />

      <body 
        className={`
          ${inter.variable} 
          ${playfair.variable} 
          ${plusJakartaSans.variable} 
          font-sans antialiased 
          bg-slate-50 text-slate-900
        `}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}