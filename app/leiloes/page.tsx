'use client'

import { useState } from 'react'
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
  CheckCircle2,
  Users,
  Building2,
  Scale,
  ShieldCheck,
  Landmark
} from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLinkWarningModal } from '@/components/ExternalLinkWarningModal'

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
  const [isModalOpen, setIsModalOpen] = useState(false)

  // DIFERENCIAIS (Seção anterior já atualizada)
  const differentials = [
    {
      title: 'Gestão Patrimonial Completa',
      description: 'Administração integral dos ativos, incluindo regularização documental, controle financeiro, manutenção, cobrança de recebíveis e preparação para locação ou venda, garantindo organização e eficiência operacional.',
      icon: Building2
    },
    {
      title: 'Estrutura Técnica Multidisciplinar',
      description: 'Equipe formada por áreas administrativa, jurídica, financeira, contábil, comercial e de campo, assegurando controle total do ciclo de gestão imobiliária com supervisão direta dos sócios.',
      icon: Users
    },
    {
      title: 'Escala Nacional e Experiência Consolidada',
      description: 'Mais de uma década de atuação, com +11 bilhões em ativos sob gestão, +500 milhões de m² administrados e centenas de investidores atendidos, evidenciando solidez e capacidade operacional em larga escala.',
      icon: Landmark
    },
    {
      title: 'Governança, Compliance e Segurança Jurídica',
      description: 'Processos estruturados de auditoria, análise documental e conformidade legal que reduzem riscos, aumentam a transparência e garantem segurança patrimonial durante toda a administração dos ativos.',
      icon: ShieldCheck
    },
    {
      title: 'Foco em Liquidez e Valorização de Longo Prazo',
      description: 'Metodologia orientada à organização, preservação de valor e geração de performance patrimonial contínua, acompanhando o ativo desde a regularização até sua plena eficiência econômica.',
      icon: TrendingUp
    }
  ]

  // ETAPAS DA METODOLOGIA (Atualizado com novos textos)
  const steps = [
    {
      id: '01',
      title: 'Diagnóstico Técnico e Documental',
      text: 'Análise completa da situação jurídica, registral, fiscal e operacional dos imóveis pertencentes à carteira do cliente, identificando riscos, pendências e oportunidades de organização patrimonial.',
      icon: Search
    },
    {
      id: '02',
      title: 'Regularização e Estruturação Jurídica',
      text: 'Condução dos processos de regularização documental, adequação cadastral e organização jurídica necessários para garantir conformidade legal e viabilidade administrativa dos ativos.',
      icon: FileCheck
    },
    {
      id: '03',
      title: 'Implementação da Gestão Operacional',
      text: 'Administração contínua dos imóveis com controle financeiro, manutenção, acompanhamento técnico, gestão contratual e cobrança de recebíveis, assegurando eficiência e preservação de valor.',
      icon: Gavel
    },
    {
      id: '04',
      title: 'Estratégias de Valorização Patrimonial',
      text: 'Ações orientadas à performance econômica do ativo, incluindo reposicionamento de mercado, preparação para locação ou venda e otimização de resultados patrimoniais.',
      icon: TrendingUp
    },
    {
      id: '05',
      title: 'Governança, Monitoramento e Relatórios',
      text: 'Acompanhamento contínuo com indicadores de desempenho, auditoria documental, transparência de informações e relatórios periódicos ao cliente durante todo o ciclo de administração.',
      icon: BarChart3
    }
  ]

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-500/30 pt-16">
      
      {/* 1. HERO SECTION */}
<section className="relative py-24 lg:py-32 overflow-hidden bg-white">
  <div className="container mx-auto px-4">
    <div className="flex flex-col lg:flex-row gap-16 items-center">
      
      <motion.div 
        {...slideInLeft}
        className="lg:w-1/2 space-y-8 relative z-10"
      >
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 border-l-4 border-cyan-500 bg-slate-50 text-slate-900 text-sm font-bold uppercase tracking-wider">
            Gestão e Valorização Patrimonial
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
            Gestão estratégica de ativos imobiliários com <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-800">potencial de valorização</span>
          </h1>

          <h2 className="text-2xl lg:text-3xl font-medium text-slate-700 leading-snug">
            Cuidamos, estruturamos e valorizamos ativos imobiliários ao longo de todo o seu ciclo patrimonial.
          </h2>
        </div>
        
        <div className="space-y-6 text-lg text-slate-600 leading-relaxed max-w-2xl">
          <p>
            O <strong>Grupo AWAKE Brasil</strong> atua de forma independente na gestão, organização e administração patrimonial de ativos imobiliários, com foco na preservação, regularização documental e manutenção contínua dos imóveis sob sua gestão.
          </p>

          <p>
            Nossa atuação é direcionada a garantir que cada ativo permaneça regularizado, bem conservado e estrategicamente estruturado, mantendo sua documentação, condições operacionais e aspectos técnicos sempre em conformidade. Esse cuidado permanente contribui para a valorização progressiva dos imóveis e para uma gestão patrimonial eficiente ao longo de todo o seu ciclo dentro da carteira.
          </p>

          <p>
            Como parte do ecossistema do grupo, a <strong>AWAKE Leilões</strong> é a empresa especializada em leilões imobiliários judiciais, extrajudiciais e oportunidades de venda direta, reunindo ativos frequentemente disponibilizados abaixo do valor de mercado.
          </p>

          <p>
            Para investidores e interessados em acompanhar essas oportunidades, disponibilizamos acesso à plataforma da AWAKE Leilões, onde é possível conhecer os imóveis disponíveis e participar das oportunidades de aquisição.
          </p>
        </div>

        <div className="pt-4 space-y-6">
          <p className="text-slate-900 font-semibold italic text-lg border-l-2 border-slate-200 pl-4">
            "Oportunidades selecionadas para investidores e compradores atentos ao mercado imobiliário."
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-slate-900 hover:bg-slate-800 text-white rounded-none px-10 h-16 text-base font-bold shadow-2xl transition-all hover:scale-[1.02]" 
              onClick={() => setIsModalOpen(true)}
            >
              
              Acessar plataforma de leilões
              
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Imagem Hero Estilizada */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="lg:w-1/2 relative"
      >
        <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden shadow-2xl">
          <Image 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop" 
            alt="Edificações modernas e gestão de ativos" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 to-transparent mix-blend-multiply" />
        </div>
        {/* Elemento Decorativo */}
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-500/10 z-[-1] rounded-full blur-2xl" />
        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-cyan-500 z-[-1]" />
      </motion.div>

    </div>
  </div>
</section>

      {/* 2. POR QUE CONTAR COM O GRUPO AWAKE */}
      <section className="py-24 bg-[#0f172a] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white leading-tight">
                  Por que contar com o Grupo Awake Brasil na gestão de ativos imobiliários?
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  Atuamos desde 2010 com presença nacional e internacional, dedicados à gestão completa, regularização e valorização patrimonial de ativos imobiliários, transformando imóveis em oportunidades rentáveis por meio de processos técnicos, jurídicos e operacionais integrados.
                </p>
                <div className="w-20 h-1 bg-cyan-500" />
              </div>
            </div>

            <div className="lg:w-2/3 space-y-8">
              {differentials.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 pb-8 border-b border-slate-800 last:border-0 hover:bg-white/5 transition-colors p-4 rounded-lg group"
                >
                  <div className="shrink-0 mt-1">
                    <div className="w-12 h-12 bg-cyan-900/50 rounded-lg flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                      <item.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-base">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. METODOLOGIA DE GESTÃO (Timeline Vertical - Atualizada) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Metodologia de Gestão Patrimonial</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Processo estruturado que assegura organização, segurança jurídica, eficiência operacional e valorização contínua dos ativos imobiliários sob administração.
            </p>
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
                    <p className="text-slate-600 leading-relaxed">{step.text}</p>
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

      

      <ExternalLinkWarningModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}