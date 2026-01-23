'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button' // <--- ADICIONADO
import Link from 'next/link' // <--- ADICIONADO
import { Building2, Landmark, Wallet, TrendingUp, CheckCircle2, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Animações
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
}

const staggerChildren = {
  animate: {
    transition: { staggerChildren: 0.1 }
  }
}

export default function ClientesPage() {
  const clientTypes = [
    {
      icon: Landmark,
      title: 'Instituições Financeiras',
      description: 'Bancos e instituições financeiras que necessitam de gestão profissional de ativos imobiliários.',
    },
    {
      icon: Wallet,
      title: 'Fintechs',
      description: 'Empresas de tecnologia financeira com portfólios imobiliários em crescimento.',
    },
    {
      icon: TrendingUp,
      title: 'Securitizadoras',
      description: 'Gestão especializada de propriedades securitizadas com foco em performance.',
    },
    {
      icon: Building2,
      title: 'Fundos Imobiliários',
      description: 'Administração estratégica de ativos para fundos de investimento imobiliário.',
    },
  ]

  const partners = [
    { name: 'Banco Nacional', category: 'Instituição Financeira' },
    { name: 'FinTech Invest', category: 'Fintech' },
    { name: 'Securitize Capital', category: 'Securitizadora' },
    { name: 'Real Estate Fund I', category: 'Fundo Imobiliário' },
    { name: 'Trust Bank', category: 'Instituição Financeira' },
    { name: 'Digital Assets', category: 'Fintech' },
    { name: 'Patrimonial Holdings', category: 'Securitizadora' },
    { name: 'Property Fund II', category: 'Fundo Imobiliário' },
  ]

  const capabilities = [
    'Gestão de mais de 5.000 propriedades simultaneamente',
    'Cobertura nacional com equipes locais especializadas',
    'Tecnologia proprietária para tracking e reporting',
    'Time com mais de 50 anos de experiência combinada',
    'Processos certificados ISO 9001',
    'Compliance rigoroso com regulações do setor',
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-cyan-500/30 pt-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-20 lg:py-32 bg-[#1e293b] text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale mix-blend-overlay" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-[#1e293b]/90 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto space-y-6">
            <span className="inline-block py-1 px-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold tracking-widest uppercase">
              Parcerias Estratégicas
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Clientes & Parceiros
            </h1>
            <p className="text-xl text-slate-300 text-pretty leading-relaxed font-medium max-w-2xl mx-auto">
              Construímos relações sólidas com as principais instituições do mercado 
              financeiro e imobiliário brasileiro.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. TIPOS DE CLIENTES (Client Types) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Nossos Clientes
            </h2>
            <p className="text-lg text-slate-600">
              Atendemos os principais players do mercado com soluções customizadas
            </p>
          </motion.div>

          <motion.div 
             variants={staggerChildren}
             initial="initial"
             whileInView="animate"
             viewport={{ once: true }}
             className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {clientTypes.map((type, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="group h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-slate-200 bg-white">
                  <CardContent className="p-8 space-y-4 text-center">
                    <div className="mx-auto w-16 h-16 rounded-lg bg-cyan-100 flex items-center justify-center group-hover:bg-cyan-700 transition-colors duration-300">
                      <type.icon className="h-8 w-8 text-cyan-700 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {type.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {type.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. PARCEIROS (Partners Grid) */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Parceiros de Confiança
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Trabalhamos com instituições que compartilham nossos valores de excelência e transparência
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative aspect-[3/2] rounded-xl bg-white border border-slate-200 hover:border-cyan-500 transition-all duration-300 hover:shadow-md overflow-hidden flex items-center justify-center p-6"
              >
                <div className="text-center z-10">
                  <div className="text-sm font-bold text-slate-800 group-hover:text-cyan-700 transition-colors">
                    {partner.name}
                  </div>
                  <div className="mt-1 text-xs text-slate-500 font-medium uppercase tracking-wide">
                    {partner.category}
                  </div>
                </div>
                {/* Background Hover Effect */}
                <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CAPACIDADE INSTITUCIONAL (Trust Section) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-800 text-sm font-bold">
                <Users className="h-4 w-4" />
                Capacidade Institucional
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 text-balance leading-tight">
                Preparados para Operações de Grande Escala
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Nossa infraestrutura, processos e equipe foram desenvolvidos para 
                atender às demandas das maiores instituições do mercado. Combinamos 
                escala operacional com atenção personalizada a cada cliente.
              </p>
              
              <div className="space-y-4 pt-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-600 mt-1 flex-shrink-0" />
                    <p className="text-slate-700 font-medium">{capability}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl"
            >
              {/* Imagem Institucional */}
              <Image 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop" 
                alt="Reunião Corporativa Awake"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/80 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white max-w-sm">
                 <p className="font-bold text-lg border-l-4 border-cyan-500 pl-4">Parcerias que geram valor real.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-24 bg-[#1e293b] text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fadeInUp} className="space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Quer Se Tornar um Parceiro?
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-medium">
              Entre em contato com nossa equipe comercial e descubra como podemos 
              agregar valor ao seu negócio.
            </p>
            <div className="pt-4">
              <Button size="lg" className="bg-cyan-700 hover:bg-cyan-800 text-white rounded-none px-10 h-14 text-lg font-bold shadow-lg shadow-cyan-900/50 transition-all hover:scale-105" asChild>
                 <Link href="/contato">Solicitar Proposta</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}