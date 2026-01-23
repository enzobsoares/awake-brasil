'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { FileSearch, Scale, Target, TrendingUp, ExternalLink, CheckCircle2, Gavel } from 'lucide-react'
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

export default function LeiloesPage() {
  const expertise = [
    {
      icon: FileSearch,
      title: 'Curadoria Especializada',
      description: 'Seleção criteriosa de propriedades com potencial de valorização e retorno.',
    },
    {
      icon: Scale,
      title: 'Análise Jurídica',
      description: 'Avaliação completa da documentação e situação legal de cada imóvel.',
    },
    {
      icon: Target,
      title: 'Estruturação de Oportunidades',
      description: 'Preparação detalhada de informações para facilitar a decisão de investimento.',
    },
    {
      icon: TrendingUp,
      title: 'Avaliação de Potencial',
      description: 'Análise de mercado e projeção de valorização para cada propriedade.',
    },
  ]

  const benefits = [
    'Acesso a oportunidades pré-selecionadas por especialistas',
    'Documentação completa e transparente',
    'Análise de risco detalhada',
    'Suporte especializado durante todo o processo',
    'Acompanhamento pós-aquisição',
    'Gestão de propriedades adquiridas',
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Identificação',
      description: 'Rastreamos leilões em todo o território nacional.',
    },
    {
      number: '02',
      title: 'Análise',
      description: 'Avaliação técnica, jurídica e financeira detalhada.',
    },
    {
      number: '03',
      title: 'Curadoria',
      description: 'Seleção apenas das melhores oportunidades.',
    },
    {
      number: '04',
      title: 'Apresentação',
      description: 'Disponibilização no portal exclusivo para investidores.',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-cyan-500/30 pt-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-20 lg:py-32 bg-[#1e293b] text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop')] bg-cover bg-center grayscale mix-blend-overlay" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-[#1e293b]/90 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto space-y-6">
            <span className="inline-block py-1 px-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold tracking-widest uppercase">
              Investimento Estratégico
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Imóveis em Leilões
            </h1>
            <p className="text-xl text-slate-300 text-pretty leading-relaxed font-medium max-w-2xl mx-auto">
              Transformamos leilões imobiliários em oportunidades estratégicas de investimento 
              através de curadoria especializada e análise profunda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. EXPERTISE (Grid Clean) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Nossa Expertise
            </h2>
            <p className="text-lg text-slate-600">
              Mais do que intermediação, oferecemos inteligência de mercado
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
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

      {/* 3. NOSSO PROCESSO (Timeline Step) */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Nosso Processo
            </h2>
            <p className="text-lg text-slate-600">
              Metodologia estruturada para identificar as melhores oportunidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative group"
              >
                <div className="p-8 rounded-sm bg-white border border-slate-200 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg h-full">
                  <div className="space-y-4">
                    <div className="text-5xl font-bold text-slate-200 group-hover:text-cyan-100 transition-colors font-mono">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
                {/* Linha Conectora (Desktop) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-slate-300 z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FRENTE ESTRATÉGICA (Split Screen) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative h-[500px] lg:h-[600px] rounded-sm overflow-hidden shadow-2xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" 
                alt="Estratégia de Investimento"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/70 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                 <div className="bg-white/10 backdrop-blur-md p-6 border border-white/20 rounded-sm">
                    <p className="text-white font-medium">"Transformamos complexidade jurídica em oportunidade financeira."</p>
                 </div>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-800 text-sm font-bold">
                <Gavel className="h-4 w-4" />
                Frente Estratégica
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Leilões como Ferramenta de Investimento
              </h2>
              
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Posicionamos leilões não como última opção, mas como uma estratégia 
                  inteligente de aquisição de ativos com desconto significativo e 
                  potencial de valorização acima da média.
                </p>
                <p>
                  Nossa equipe atua na linha de frente, identificando oportunidades 
                  que combinam preço atrativo, localização estratégica e baixo risco jurídico.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-100 mt-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-600 mt-1 flex-shrink-0" />
                    <p className="text-slate-700 font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. CTA - PORTAL EXCLUSIVO */}
      <section className="py-24 bg-[#1e293b] text-white text-center relative overflow-hidden">
        {/* Background Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/40 via-transparent to-transparent opacity-50" />

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <motion.div {...fadeInUp} className="space-y-8">
            <span className="inline-block py-1 px-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold tracking-widest uppercase">
              Portal Exclusivo
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Acesse Oportunidades Selecionadas
            </h2>
            
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
              Todas as propriedades passam por rigorosa análise técnica e jurídica antes 
              de serem disponibilizadas em nosso portal exclusivo para investidores qualificados.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button 
                size="lg" 
                className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-none px-10 h-14 text-lg font-bold shadow-lg shadow-cyan-900/50 transition-all hover:scale-105"
              >
                Acessar Portal de Oportunidades
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-slate-500 text-white hover:bg-white hover:text-slate-900 h-14 px-8 text-base rounded-none bg-transparent transition-all font-bold"
                asChild
              >
                <Link href="/contato">Falar com Especialista</Link>
              </Button>
            </div>
            
            <p className="text-sm text-slate-500 pt-4">
              * O acesso ao portal é restrito a investidores cadastrados e qualificados.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  )
}