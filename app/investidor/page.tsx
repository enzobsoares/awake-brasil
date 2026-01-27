'use client'

import { Button } from '@/components/ui/button'
import { 
  Shield, 
  TrendingUp, 
  Eye, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  BarChart3, 
  FileText, 
  PieChart, 
  Landmark,
  Briefcase
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

const staggerChildren = {
  animate: {
    transition: { staggerChildren: 0.1 }
  }
}

export default function InvestidorPage() {
  
  const whyInvest = [
    {
      title: 'Acesso a Oportunidades Selecionadas',
      description: 'Ativos imobiliários previamente avaliados, com potencial de valorização e geração de renda.',
      icon: Eye
    },
    {
      title: 'Estrutura Nacional',
      description: 'Atuação em diferentes regiões do país, ampliando a capacidade de mapeamento e gestão de ativos imobiliários.',
      icon: Landmark
    },
    {
      title: 'Gestão Profissional Completa',
      description: 'Da estruturação à valorização do ativo (locação, revenda ou otimização patrimonial),cuidamos de toda a operação.',
      icon: Briefcase
    },
    {
      title: 'Transparência Plena',
      description: 'Relatórios periódicos, governança e conformidade rigorosa em cada etapa da gestão.',
      icon: FileText
    },
    {
      title: 'Mitigação de Riscos',
      description: 'Atuação com padrões técnicos e jurídicos que garantem segurança na aquisição e na administração do ativo.',
      icon: Shield
    }
  ]

  const idealProfile = [
    'Investidor individual ou institucional buscando diversificação fora da renda fixa/variável tradicional.',
    'Fundo de investimento ou gestor de patrimônio que requer governança e escala.',
    'Perfil com horizonte de médio a longo prazo e foco em ativos tangíveis.'
  ]

  const modalities = [
    'Aquisição direta de imóveis de leilão com gestão completa da Awake Brasil.',
    'Participação em operações estruturadas ou veículos de investimento.',
    'Acompanhamento contínuo com relatórios e previsões de monetização.'
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Contato Inicial',
      desc: 'Análise de perfil, capital disponível e objetivos para definição da estratégia de investimento imobiliário.'
    },
    {
      number: '02',
      title: 'Seleção',
      desc: 'Apresentação de portfólio com ativos previamente avaliados, seguindo critérios técnicos, jurídicos e financeiros.'
    },
    {
      number: '03',
      title: 'Estruturação e Aquisição',
      desc: 'Condução do processo de aquisição, organização documental, regularização e estruturação da estratégia do ativo.'
    },
    {
      number: '04',
      title: 'Gestão',
      desc: 'Administração contínua do ativo com monitoramento, manutenção e relatórios periódicos de desempenho.'
    },
    {
      number: '05',
      title: 'Valorização e Performance',
      desc: 'Estratégia de valorização do patrimônio por meio de locação, revenda ou otimização do ativo, com prestação de contas e governança.'
    }
  ]

  const testimonials = [
    {
      quote: "A parceria com a Awake Brasil permitiu que eu acessasse oportunidades que, sozinho, teriam sido inviáveis. A gestão realizada trouxe tranquilidade e resultados mensuráveis.",
      author: "Investidor Privado",
      location: "São Paulo, SP"
    },
    {
      quote: "Fizemos uma operação estruturada que atendeu nossos critérios: investimento direto, prazo definido e acompanhamento especializado. A Awake Brasil se demonstrou parceira estratégica.",
      author: "Fundo de Investimento",
      location: "Curitiba, PR"
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-cyan-500/30 pt-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-24 lg:py-32 bg-[#0f172a] text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale mix-blend-overlay" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/90 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-5xl mx-auto space-y-6">
            <span className="inline-block py-1 px-3 border border-cyan-500/30 bg-cyan-900/30 text-cyan-400 text-xs font-bold uppercase tracking-widest rounded-full">
              Área do Investidor
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
              Invista com segurança, <br/> estratégia e <span className="text-cyan-500">respaldo institucional.</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light max-w-3xl mx-auto">
              Descubra como a Awake Brasil estrutura e administra ativos imobiliários com gestão
profissional, governança e foco em valorização patrimonial.

            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. VISÃO GERAL (Texto Corrido) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Oportunidade de Diversificação e Performance
            </h2>
            <div className="text-lg text-slate-600 leading-relaxed space-y-6">
              <p>
                No cenário atual, investir em ativos imobiliários com gestão profissional representa uma
alternativa sólida para diversificação de portfólio. A Awake Brasil identifica, avalia e
estrutura oportunidades com compromisso de transparência, rigor técnico e foco em
performance.

              </p>
              <p className="font-medium text-slate-800">
                Aqui você encontra uma jornada de investimento cuidadosamente planejada, com gestão e
administração proativa de ativos imobiliários, acompanhamento especializado e suporte
completo em todas as etapas.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. POR QUE INVESTIR (Grid de Benefícios) */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Por que investir conosco?</h2>
            <p className="text-lg text-slate-600">Diferenciais que garantem segurança e retorno.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyInvest.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 border border-slate-200 hover:border-cyan-500 transition-all duration-300 group shadow-sm hover:shadow-lg rounded-sm"
              >
                <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-600 transition-colors">
                  <item.icon className="h-6 w-6 text-cyan-700 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PERFIL E MODALIDADES (Split Cards) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Card Perfil */}
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-[#0f172a] text-white p-10 rounded-sm"
            >
               <div className="flex items-center gap-3 mb-8">
                 <Users className="text-cyan-400 h-8 w-8" />
                 <h3 className="text-2xl font-bold">Perfil do Investidor Ideal</h3>
               </div>
               <p className="text-slate-400 mb-8 leading-relaxed">
                 A Awake Brasil atende investidores que desejam aplicar capital com estratégia clara, prazo definido e acompanhamento profissional.
               </p>
               <ul className="space-y-6">
                 {idealProfile.map((item, i) => (
                   <li key={i} className="flex gap-4">
                     <CheckCircle2 className="h-6 w-6 text-cyan-500 shrink-0 mt-1" />
                     <span className="text-slate-200">{item}</span>
                   </li>
                 ))}
               </ul>
            </motion.div>

            {/* Card Modalidades */}
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-slate-50 border border-slate-200 p-10 rounded-sm"
            >
               <div className="flex items-center gap-3 mb-8">
                 <PieChart className="text-cyan-700 h-8 w-8" />
                 <h3 className="text-2xl font-bold text-slate-900">Modalidades Disponíveis</h3>
               </div>
               <p className="text-slate-600 mb-8 leading-relaxed">
                 Flexibilidade para diferentes estratégias de alocação de capital e objetivos de retorno.
               </p>
               <ul className="space-y-6">
                 {modalities.map((item, i) => (
                   <li key={i} className="flex gap-4">
                     <div className="h-2 w-2 bg-cyan-600 rounded-full mt-2.5 shrink-0" />
                     <span className="text-slate-700 font-medium">{item}</span>
                   </li>
                 ))}
               </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. PROCESSO DE INVESTIMENTO (Horizontal Step) */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Processo de Investimento</h2>
            <p className="text-slate-600 mt-2">Uma jornada estruturada em 5 etapas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white p-6 border-t-4 border-cyan-500 shadow-sm hover:shadow-md transition-shadow text-center group"
              >
                <div className="text-4xl font-bold text-slate-200 mb-4 font-mono group-hover:text-cyan-100 transition-colors">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GOVERNANÇA E TRANSPARÊNCIA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="relative h-[400px] bg-slate-100 rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                  alt="Governança e Dados" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-cyan-900/10 mix-blend-multiply" />
             </div>
             
             <div>
               <h2 className="text-3xl font-bold text-slate-900 mb-6">Indicadores, Transparência e Governança</h2>
               <p className="text-lg text-slate-600 mb-8">
                 Investir com confiança exige visibilidade e dados concretos. A Awake Brasil disponibiliza:
               </p>
               <ul className="space-y-4">
                 <li className="flex gap-4">
                   <BarChart3 className="text-cyan-600 h-6 w-6 shrink-0" />
                   <span className="text-slate-700">Relatórios periódicos com evolução do ativo, valorização e ocupação.</span>
                 </li>
                 <li className="flex gap-4">
                   <FileText className="text-cyan-600 h-6 w-6 shrink-0" />
                   <span className="text-slate-700">Governança documental clara e auditoria interna/externa quando aplicável.</span>
                 </li>
                 <li className="flex gap-4">
                   <Shield className="text-cyan-600 h-6 w-6 shrink-0" />
                   <span className="text-slate-700">Práticas de compliance e gestão de risco conforme requisitos jurídicos.</span>
                 </li>
               </ul>
             </div>
          </div>
        </div>
      </section>

      {/* 7. DEPOIMENTOS (Dark Section) */}
      <section className="py-24 bg-[#1e293b] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16">Resultados Reais</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-sm relative">
                <p className="text-lg text-slate-300 italic mb-6">"{t.quote}"</p>
                <div>
                  <p className="font-bold text-white">{t.author}</p>
                  <p className="text-sm text-cyan-400">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fadeInUp} className="space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
              Pronto para estruturar seu capital?
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
              Entre em contato conosco ou solicite acesso ao nosso portfólio de oportunidades reais.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 flex-wrap">
              <Button size="lg" className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold h-14 px-10 rounded-none shadow-lg" asChild>
                 <Link href="/contato">Quero Investir</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 font-bold h-14 px-10 rounded-none" asChild>
                 <Link href="/contato">Solicitar Portfólio</Link>
              </Button>
              <Button size="lg" variant="secondary" className="bg-slate-900 text-white hover:bg-slate-800 font-bold h-14 px-10 rounded-none" asChild>
                 <Link href="/contato">Fale com um Especialista</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}