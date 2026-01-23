'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Shield, TrendingUp, Eye, Users, CheckCircle2, ArrowRight } from 'lucide-react'
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
  const whyAwake = [
    {
      icon: Shield,
      title: 'Segurança',
      description: 'Due diligence rigorosa e gestão de risco em todas as operações.',
    },
    {
      icon: TrendingUp,
      title: 'ROI Consistente',
      description: 'Histórico comprovado de retornos acima da média do mercado.',
    },
    {
      icon: Eye,
      title: 'Visão Estratégica',
      description: 'Identificação de oportunidades antes do mercado geral.',
    },
    {
      icon: Users,
      title: 'Gestão Ativa',
      description: 'Acompanhamento constante e otimização do portfólio.',
    },
  ]

  const investmentModels = [
    {
      title: 'Investidor Conservador',
      subtitle: 'Foco em Segurança',
      features: [
        'Propriedades com documentação impecável',
        'Localizações consolidadas',
        'Retorno previsível e estável',
        'Baixa volatilidade',
      ],
      returnRange: '8-12% a.a.',
    },
    {
      title: 'Investidor Moderado',
      subtitle: 'Equilíbrio Risco-Retorno',
      features: [
        'Mix de propriedades estabelecidas e em valorização',
        'Diversificação regional',
        'Potencial de valorização média',
        'Liquidez moderada',
      ],
      returnRange: '12-18% a.a.',
    },
    {
      title: 'Investidor Arrojado',
      subtitle: 'Alto Potencial',
      features: [
        'Oportunidades de alto potencial de valorização',
        'Propriedades em áreas em desenvolvimento',
        'Estratégias de repositioning',
        'Horizonte de investimento estendido',
      ],
      returnRange: '18-30% a.a.',
    },
  ]

  const benefits = [
    'Acesso a dealflow exclusivo de propriedades',
    'Análise técnica e jurídica completa',
    'Gestão profissional pós-aquisição',
    'Relatórios mensais detalhados',
    'Portal do investidor com acompanhamento em tempo real',
    'Equipe dedicada de relacionamento',
    'Opções de exit strategy estruturadas',
    'Suporte tributário e contábil',
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-cyan-500/30 pt-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#1e293b] overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale mix-blend-overlay" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/90 to-transparent" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto space-y-6">
            <span className="inline-block py-1 px-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold tracking-widest uppercase">
              Área do Investidor
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight text-balance">
              Seja um Investidor
            </h1>
            <p className="text-xl text-slate-300 text-pretty leading-relaxed font-medium max-w-2xl mx-auto">
              Transforme seu capital em ativos imobiliários estratégicos com a segurança 
              e expertise de quem é líder em gestão patrimonial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button size="lg" className="bg-cyan-700 hover:bg-cyan-800 text-white rounded-none px-10 h-14 text-lg font-bold shadow-lg shadow-cyan-900/50 transition-all hover:scale-105" asChild>
                 <Link href="/contato">Fale com um Consultor</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. POR QUE INVESTIR (Why Awake) */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Por Que Investir com a Awake?
            </h2>
            <p className="text-lg text-slate-600">
              A combinação perfeita entre segurança institucional e retornos atrativos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyAwake.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-slate-200 bg-white h-full">
                  <CardContent className="p-8 space-y-4 text-center">
                    <div className="mx-auto w-16 h-16 rounded-lg bg-cyan-100 flex items-center justify-center group-hover:bg-cyan-700 transition-colors duration-300">
                      <item.icon className="h-8 w-8 text-cyan-700 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MODELOS DE INVESTIMENTO (Investment Models) */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Modelos de Investimento
            </h2>
            <p className="text-lg text-slate-600">
              Estruturas personalizadas para cada perfil e objetivo
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {investmentModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative group bg-white rounded-lg border ${index === 1 ? 'border-cyan-500 shadow-2xl scale-105 z-10' : 'border-slate-200 hover:shadow-xl hover:border-cyan-300'} transition-all duration-300`}
              >
                {index === 1 && (
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      Mais Popular
                   </div>
                )}
                <div className="p-8 space-y-6">
                  <div className="space-y-2 text-center">
                    <h3 className="text-2xl font-bold text-slate-900">
                      {model.title}
                    </h3>
                    <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">
                      {model.subtitle}
                    </p>
                  </div>
                  
                  <div className="py-4 px-6 rounded-lg bg-slate-50 text-center border border-slate-100">
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-1 font-semibold">
                      Retorno Projetado
                    </div>
                    <div className="text-3xl font-bold text-cyan-700">
                      {model.returnRange}
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    {model.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3 text-sm text-slate-600">
                        <CheckCircle2 className="h-5 w-5 text-cyan-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full h-12 text-base font-bold rounded-sm mt-4 ${index === 1 ? 'bg-cyan-700 hover:bg-cyan-800 text-white' : 'bg-white border-2 border-slate-200 hover:border-cyan-600 hover:text-cyan-700 text-slate-700'}`}
                    variant="ghost"
                  >
                    Saiba Mais
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-xs text-slate-400 mt-12 max-w-2xl mx-auto italic">
            * Retornos projetados baseados em desempenho histórico e análise de mercado. Rentabilidade passada não garante resultados futuros. Consulte o prospecto de cada oportunidade.
          </p>
        </div>
      </section>

      {/* 4. BENEFÍCIOS E SEGURANÇA (Split Screen) */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-800 text-sm font-bold">
                <Shield className="h-4 w-4" />
                Suporte Completo
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 text-balance leading-tight">
                Investir com Segurança e Transparência
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Quando você investe com o Grupo Awake Brasil, você não está apenas 
                comprando propriedades – você está adquirindo uma parceria estratégica 
                com especialistas dedicados ao sucesso do seu investimento.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                alt="Dashboard de Investimentos"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/80 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white max-w-sm">
                 <p className="font-bold text-lg border-l-4 border-cyan-500 pl-4">Tecnologia para acompanhar seu patrimônio em tempo real.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-24 bg-[#1e293b] text-white text-center">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
              Pronto para Começar a Investir?
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto text-pretty leading-relaxed font-medium">
              Agende uma conversa com um de nossos consultores de investimentos e 
              descubra como podemos ajudá-lo a construir um portfólio imobiliário 
              sólido e rentável.
            </p>
            
            <div className="pt-6">
              <Button size="lg" className="bg-cyan-700 hover:bg-cyan-800 text-white rounded-none px-12 h-14 text-lg font-bold shadow-lg shadow-cyan-900/50 transition-all hover:scale-105" asChild>
                 <Link href="/contato">Fale com um Consultor de Investimentos</Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-500" />
                <span>Sem compromisso</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-500" />
                <span>Análise gratuita</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-500" />
                <span>Resposta em 24h</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}