'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Building2, Landmark, Wallet, TrendingUp, CheckCircle2, Users, Quote, MapPin } from 'lucide-react'
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
      title: 'Investidores',
      description: 'IIndivíduos ou instituições que buscam diversificar seu portfólio com ativos imobiliários sob gestão e administração especializada, com foco em segurança e valorização patrimonial.',
    },
    {
      icon: Wallet,
      title: 'Parceiros & Agentes',
      description: 'Empresas e profissionais que desejam integrar nossa rede operacional e estratégica, atuando em conjunto na gestão e administração de ativos imobiliários com acesso a oportunidades qualificadas.',
    },
    {
      icon: TrendingUp,
      title: 'Fundos de Investimento',
      description: 'Gestores de patrimônio que operam em escala, exigindo governança, transparência e processos auditáveis na gestão e administração de ativos imobiliários.',
    }
  ]

  const benefits = [
    'Ativos previamente analisados e qualificados',
    'Suporte técnico e jurídico em todas as etapas',
    'Rede nacional para atuação e acompanhamento regional',
    'Relatórios periódicos de desempenho, gestão e compliance',
    'Programa de capacitação para agentes credenciados',
  ]

  const testimonials = [
    {
      quote: "É genuíno o apoio, a atenção e o nível de comprometimento do Grupo Awake Brasil. Com profissionais engajados e competentes, os desafios são superados com maestria e as entregas com acabativa impecável.",
      author: "André Alvarenga",
      role: "Gerente de Facilities, Banco Sofisa S.A."
    },
    {
      quote: "A assessoria de ponta do Grupo Awake Brasil permitiu que concluíssemos negócios com êxito absoluto. Pelo excelente atendimento, recomendo.",
      author: "Dr. Oliveira",
      role: "Sócio-Proprietário do Grupo Oliveira"
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-cyan-500/30 pt-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-24 lg:py-32 bg-[#1e293b] text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop')] bg-cover bg-center grayscale mix-blend-overlay" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-[#1e293b]/90 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto space-y-6">
            <span className="inline-block py-1 px-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold tracking-widest uppercase">
              Ecossistema Colaborativo
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              Parceiros estratégicos e <br/> clientes de confiança
            </h1>
            <p className="text-xl text-slate-300 text-pretty leading-relaxed font-medium max-w-3xl mx-auto">
              Construímos alianças duradouras pautadas por excelência, governança e transparência.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. INTRODUÇÃO INSTITUCIONAL (Text Block) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              A força de um ecossistema integrado
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              O Grupo Awake Brasil entende que o sucesso na gestão de ativos imobiliários não depende apenas da identificação de oportunidades, mas da construção de um ecossistema colaborativo. Nossos clientes e parceiros são parte integrante desse sucesso, materializando resultados relevantes no mercado nacional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. PERFIL DOS CLIENTES (3 Columns) */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {clientTypes.map((type, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 border border-slate-200 hover:border-cyan-500 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-cyan-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-100 transition-colors">
                  <type.icon className="h-7 w-7 text-cyan-700" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{type.title}</h3>
                <p className="text-slate-600 leading-relaxed">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BENEFÍCIOS E REDE (Split Screen) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-8"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Benefícios da Parceria
              </h2>
              <p className="text-lg text-slate-600">
                Ao se associar ao Grupo Awake Brasil, você passa a contar com uma estrutura completa de gestão
e administração de ativos imobiliários, com governança, segurança e eficiência
operacional.
              </p>
              
              <div className="space-y-4 pt-2">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-600 mt-1 flex-shrink-0" />
                    <p className="text-slate-700 font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-slate-900 text-white p-10 rounded-sm relative overflow-hidden"
            >
               <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6 text-cyan-400">
                     <MapPin className="h-6 w-6" />
                     <span className="font-bold text-lg uppercase tracking-wider">Abrangência Nacional</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Rede de Agentes Credenciados</h3>
                  <p className="text-slate-300 leading-relaxed mb-8">
                    Nossa rede compreende agentes, escritórios regionais e parceiros estratégicos que atuam em colaboração, garantindo a identificação de oportunidades onde há menos visibilidade.
                  </p>
                  <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-950 hover:text-cyan-300 w-full" asChild>
                     <Link href="/contato">Quero ser um Agente</Link>
                  </Button>
               </div>
               {/* Background Pattern */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. DEPOIMENTOS (Dark Section) */}
      <section className="py-24 bg-[#1e293b] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold">O que dizem nossos parceiros</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 p-8 border border-white/10 rounded-sm relative"
              >
                <Quote className="h-8 w-8 text-cyan-500 mb-6 opacity-50" />
                <p className="text-lg text-slate-300 italic mb-6 leading-relaxed">
                  &quot;{item.quote}&quot;
                </p>
                <div>
                  <p className="font-bold text-white">{item.author}</p>
                  <p className="text-sm text-cyan-400">{item.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA FINAL */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fadeInUp} className="space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
              Vamos construir juntos?
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
              Seja você um investidor buscando rentabilidade ou um profissional buscando parceria, estamos prontos para conversar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 flex-wrap">
              <Button size="lg" className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold h-14 px-8 rounded-none" asChild>
                 <Link href="/contato">Torne-se Parceiro / Agente</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 font-bold h-14 px-8 rounded-none" asChild>
                 <Link href="/investidor">Seja Investidor</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}