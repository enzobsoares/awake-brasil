'use client'

import { Button } from '@/components/ui/button'
import { 
  Gavel, 
  Search, 
  FileCheck, 
  TrendingUp, 
  BarChart3, 
  ArrowRight, 
  ExternalLink,
  Lock,
  Clock,
  CheckCircle2
} from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// Animações
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
}

const slideInLeft = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
}

export default function LeiloesPage() {
  
  const benefits = [
    {
      title: 'Acesso Antecipado',
      description: 'Acesso a ativos com perfil de retorno elevado antes da concorrência ampla do mercado.'
    },
    {
      title: 'Avaliação Jurídica Prévia',
      description: 'Nossa equipe realiza a varredura completa de riscos processuais e documentais antes da oferta.'
    },
    {
      title: 'Estrutura Nacional',
      description: 'Capilaridade para arrematar e gerir ativos em múltiplas praças e estados simultaneamente.'
    },
    {
      title: 'Gestão Pós-Arrematação',
      description: 'Cuidamos da regularização, desocupação (se necessário), reforma e monetização do ativo.'
    },
    {
      title: 'Transparência Radical',
      description: 'Acesso a relatórios detalhados para acompanhar cada marco da evolução do investimento.'
    }
  ]

  const steps = [
    {
      id: '01',
      title: 'Seleção de Lotes',
      text: 'Mapeamento contínuo de leilões judiciais e extrajudiciais em todo o território nacional.',
      icon: Search
    },
    {
      id: '02',
      title: 'Avaliação Técnica e Jurídica',
      text: 'Due diligence completa (física, jurídica e mercadológica) para mitigação absoluta de riscos.',
      icon: FileCheck
    },
    {
      id: '03',
      title: 'Arrematação & Estruturação',
      text: 'Representação no leilão, aquisição formal, regularização documental e definição da estratégia.',
      icon: Gavel
    },
    {
      id: '04',
      title: 'Gestão e Monetização',
      text: 'Implementação do plano de saída: locação para renda passiva, revenda com ágio ou incorporação.',
      icon: TrendingUp
    },
    {
      id: '05',
      title: 'Relatórios e Comunicação',
      text: 'Atualização periódica sobre desempenho, status legal e indicadores financeiros.',
      icon: BarChart3
    }
  ]

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-500/30 pt-16">
      
      {/* 1. HERO SECTION - Clean & Editorial */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <motion.div 
              {...slideInLeft}
              className="lg:w-1/2 space-y-8 relative z-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 border-l-4 border-cyan-500 bg-slate-50 text-slate-900 text-sm font-bold uppercase tracking-wider">
                Oportunidades em Leilões
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                Ativos com potencial <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-800">estruturado.</span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                Acesse imóveis criteriosamente selecionados por meio de leilões judiciais e extrajudiciais,
                com a segurança e a expertise da Awake Brasil.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white rounded-none px-8 h-14 text-base font-bold shadow-xl">
                   Ver Oportunidades
                </Button>
              </div>
            </motion.div>

            {/* Imagem Hero Estilizada */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1 }}
               className="lg:w-1/2 relative"
            >
               <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop" 
                    alt="Martelo de Leilão e Documentos" 
                    fill 
                    className="object-cover"
                  />
                  {/* Overlay Gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 to-transparent mix-blend-multiply" />
               </div>
               {/* Elemento Decorativo */}
               <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-cyan-500 z-[-1]" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. INTRODUÇÃO (Texto Corrido - Estilo Jornal) */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold text-slate-900 mb-8 leading-snug">
              Transformando a complexidade dos leilões em resultados consistentes
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Na Awake Brasil, entendemos que os ativos provenientes de leilão representam uma
                parcela significativa de oportunidade no mercado imobiliário nacional. Porém, apenas
                oportunidades identificadas e estruturadas com rigor técnico e jurídico se traduzem em
                resultados reais.
              </p>
              <p>
                Por isso oferecemos um portal dedicado, que reúne os imóveis
                disponíveis e pré-avaliados para investidores, com o respaldo completo da nossa
                metodologia de atuação.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. POR QUE INVESTIR (Dark List - Sem Cards) */}
      <section className="py-24 bg-[#0f172a] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                <h2 className="text-4xl font-bold mb-6">Por que investir via leilões com a Awake?</h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  Oferecemos uma camada de inteligência e segurança que elimina as incertezas tradicionais deste mercado.
                </p>
                <div className="w-20 h-1 bg-cyan-500" />
              </div>
            </div>

            <div className="lg:w-2/3 space-y-8">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 pb-8 border-b border-slate-800 last:border-0 hover:bg-white/5 transition-colors p-4 rounded-lg group"
                >
                  <div className="shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-cyan-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{benefit.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 4. PROCESSO SIMPLIFICADO (Vertical Timeline) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-cyan-700 font-bold uppercase tracking-widest text-sm">Metodologia</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2">Processo Simplificado</h2>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Linha Vertical Central (Desktop) */}
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />

            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center gap-8 mb-16 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Lado do Conteúdo (Texto) */}
                <div className="flex-1 pl-16 md:pl-0 text-left md:text-right">
                  <div className={`md:pr-12 ${index % 2 !== 0 ? 'md:text-left md:pl-12 md:pr-0' : ''}`}>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600">{step.text}</p>
                  </div>
                </div>

                {/* Marcador Central (Icone) */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-14 h-14 bg-white border-4 border-slate-100 rounded-full flex items-center justify-center z-10 shadow-sm group">
                   <step.icon className="w-6 h-6 text-cyan-700" />
                </div>

                {/* Lado Vazio (para equilíbrio visual no desktop) */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA - PORTAL EXCLUSIVO (Full Width Banner) */}
      <section className="relative py-32 bg-[#1e293b] overflow-hidden">
        <div className="absolute inset-0">
           <Image 
             src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
             alt="Building Abstract" 
             fill 
             className="object-cover opacity-10 mix-blend-overlay"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/90 to-slate-900/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto space-y-8">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto backdrop-blur-sm border border-white/20">
               <Lock className="w-8 h-8 text-cyan-400" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Acesse nosso Portal Exclusivo
            </h2>
            
            <p className="text-lg md:text-xl text-slate-300 font-light">
              Clique no botão abaixo para acessar o portal exclusivo de imóveis disponíveis
              em leilão, com filtros, dados de mercado e relatórios pré-estruturados.
            </p>
            
            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold h-16 px-10 text-lg rounded-none transition-all hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              >
                Ver Oportunidades
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <p className="text-sm text-slate-500 pt-4 opacity-70">
              * Ambiente externo seguro. Acesso restrito a oportunidades selecionadas.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  )
}