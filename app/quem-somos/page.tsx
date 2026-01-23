'use client'

import Image from 'next/image'
import { Target, Eye, Heart, Award, Users, TrendingUp, BadgeCheck } from 'lucide-react'
import { motion } from 'framer-motion'

// Reutilizando as animações da Home
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

export default function QuemSomosPage() {
  const methodology = [
    {
      number: '01',
      title: 'Análise Estratégica',
      description: 'Avaliação completa do portfólio e identificação de oportunidades de valorização.',
    },
    {
      number: '02',
      title: 'Gestão Ativa',
      description: 'Acompanhamento constante e tomada de decisões baseadas em dados.',
    },
    {
      number: '03',
      title: 'Otimização',
      description: 'Implementação de melhorias para maximizar o retorno dos ativos.',
    },
    {
      number: '04',
      title: 'Relatórios Transparentes',
      description: 'Comunicação clara e regular sobre o desempenho dos investimentos.',
    },
  ]

  const values = [
    {
      icon: Award,
      title: 'Excelência',
      description: 'Compromisso com a qualidade em cada detalhe de nossa operação.',
    },
    {
      icon: Users,
      title: 'Parceria',
      description: 'Construímos relações duradouras baseadas em confiança mútua.',
    },
    {
      icon: TrendingUp,
      title: 'Resultados',
      description: 'Foco em gerar valor e retorno consistente para nossos clientes.',
    },
    {
      icon: Heart,
      title: 'Integridade',
      description: 'Transparência e ética em todas as nossas decisões.',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-cyan-500/30 pt-16">
      
      {/* 1. HERO SECTION (Compacta e Institucional) */}
      <section className="relative py-24 lg:py-32 bg-[#1e293b] overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 opacity-20">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center grayscale mix-blend-overlay" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-[#1e293b]/90 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto space-y-6">
            <span className="inline-block py-1 px-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold tracking-widest uppercase">
              Institucional
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Quem Somos
            </h1>
            <p className="text-xl text-slate-300 text-pretty leading-relaxed font-medium max-w-2xl mx-auto">
              O Grupo Awake Brasil nasceu da visão de transformar a gestão imobiliária 
              em uma operação estratégica, profissional e orientada a resultados.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. HISTÓRIA E PROPÓSITO (Split Screen Clean) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Texto */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8 order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 text-cyan-700 font-bold uppercase tracking-wider text-sm">
                <BadgeCheck className="h-5 w-5" />
                Nossa História
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Construindo Confiança Através da Excelência
              </h2>
              
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Fundado por profissionais com décadas de experiência no mercado 
                  imobiliário e financeiro, o Grupo Awake Brasil surgiu para preencher 
                  uma lacuna no setor: a gestão verdadeiramente profissional e estratégica 
                  de propriedades imobiliárias.
                </p>
                <p>
                  Nosso nome reflete nosso propósito: <strong className="text-slate-900">estar sempre atentos, conscientes 
                  e proativos</strong> na gestão dos ativos sob nossa responsabilidade. Acreditamos 
                  que cada propriedade é mais do que um bem físico – é um investimento que 
                  merece cuidado, planejamento e execução impecável.
                </p>
                <div className="pl-6 border-l-4 border-cyan-500">
                  <p className="italic font-medium text-slate-800">
                    Hoje, atendemos investidores institucionais, fintechs, securitizadoras 
                    e fundos imobiliários, sempre com o compromisso de entregar resultados mensuráveis.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Imagem */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] lg:h-[600px] rounded-sm overflow-hidden shadow-2xl order-1 lg:order-2"
            >
              <Image 
                src="/autoridade.jpg" // Reutilizando a imagem institucional
                alt="Equipe Awake Brasil"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 to-transparent" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. METODOLOGIA (Clean Grid - Sem Cards Fechados) */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              O Método Awake
            </h2>
            <p className="text-lg text-slate-600">
              Nossa metodologia estruturada garante resultados consistentes, previsíveis e escaláveis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
            {methodology.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <span className="text-6xl font-bold text-cyan-200 group-hover:text-cyan-600 transition-colors duration-500 font-mono">
                    {step.number}
                  </span>
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-700 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MISSÃO, VISÃO E VALORES (Dark Section Premium) */}
      <section className="py-24 bg-[#0f172a] text-white">
        <div className="container mx-auto px-4">
          
          {/* Top Grid: Missão & Visão */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20 pb-20 border-b border-slate-800">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="flex gap-6"
            >
               <div className="w-16 h-16 shrink-0 bg-cyan-900/30 rounded-lg flex items-center justify-center border border-cyan-800">
                  <Target className="h-8 w-8 text-cyan-400" />
               </div>
               <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Missão</h3>
                  <p className="text-slate-400 leading-relaxed text-lg">
                    Fornecer gestão imobiliária de excelência, transformando propriedades 
                    em ativos estratégicos que geram valor sustentável para nossos clientes 
                    e parceiros.
                  </p>
               </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="flex gap-6"
            >
               <div className="w-16 h-16 shrink-0 bg-cyan-900/30 rounded-lg flex items-center justify-center border border-cyan-800">
                  <Eye className="h-8 w-8 text-cyan-400" />
               </div>
               <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Visão</h3>
                  <p className="text-slate-400 leading-relaxed text-lg">
                    Ser a referência nacional em gestão e administração de propriedades 
                    imobiliárias, reconhecidos pela nossa excelência operacional e resultados 
                    consistentes.
                  </p>
               </div>
            </motion.div>
          </div>

          {/* Bottom Grid: Valores */}
          <div>
            <div className="text-center mb-16">
               <h3 className="text-3xl font-bold text-white mb-4">Nossos Valores</h3>
               <p className="text-slate-400">Princípios inegociáveis que guiam o Grupo Awake.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-900/50 p-8 rounded-sm border border-slate-800 hover:border-cyan-500 transition-colors group"
                >
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-900/50 transition-colors">
                    <value.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">
                    {value.title}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}