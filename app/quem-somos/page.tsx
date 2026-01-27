'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Users, 
  TrendingUp, 
  BadgeCheck, 
  Scale, 
  Search, 
  MapPin, 
  Briefcase,
  Building2,
  CheckCircle2
} from 'lucide-react'
import { motion } from 'framer-motion'

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

export default function QuemSomosPage() {
  
  const stats = [
    { value: 'R$ 11 Bi+', label: 'Ativos sob gestão' },
    { value: '500 mil m²', label: 'Patrimônio administrado' },
    { value: '300+', label: 'Investidores ativos' },
  ]

  const departments = [
    {
      title: 'Departamento de Análise',
      description: 'Responsável pela triagem e avaliação técnica e financeira de ativos imobiliários, assegurando decisões estratégicas e seguras.',
      icon: Search
    },
    {
      title: 'Equipe de Campo',
      description: 'Realiza vistorias in loco para validação de ocupação, localização, estado físico, documentação operacional e potencial de valorização do imóvel.',
      icon: MapPin
    },
    {
      title: 'Comercial e Relacionamento',
      description: 'Estrutura o portfólio, conduz negociações e mantém o relacionamento com investidores e parceiros, garantindo alinhamento e transparência em todas as etapas.',
      icon: TrendingUp
    },
    {
      title: 'Departamento Jurídico',
      description: 'Atua na análise jurídica e documental dos ativos, assegurando conformidade, segurança nas operações e suporte completo nos processos de regularização.',
      icon: Scale
    }
  ]

  const methodology = [
    {
      number: '01',
      title: 'Mapeamento Estratégico',
      description: 'Monitoramento contínuo de oportunidades e ativos imobiliários alinhados ao perfil, objetivo e estratégia do investidor.',
    },
    {
      number: '02',
      title: 'Due Diligence Completa',
      description: 'Avaliações jurídicas, documentais, mercadológicas e operacionais para mitigação de riscos e tomada de decisão segura.',
    },
    {
      number: '03',
      title: 'Estruturação e Regularização',
      description: 'Condução integral do processo de aquisição, negociação de pendências e organização documental para viabilização do ativo.',
    },
    {
      number: '04',
      title: 'Gestão e Valorização do Ativo',
      description: 'Implementação de estratégias para valorização e performance do imóvel, com foco em locação, revenda ou otimização patrimonial.',
    },
    {
      number: '05',
      title: 'Acompanhamento e Relatórios',
      description: 'Relatórios periódicos ao investidor, governança, compliance e suporte contínuo durante todo o ciclo do ativo.',
    },
  ]

  const values = [
    { text: 'Transparência e integridade em todas as etapas' },
    { text: 'Excelência técnica e operacional' },
    { text: 'Relacionamento duradouro com clientes' },
    { text: 'Rigor jurídico-documental e conformidade' },
    { text: 'Agilidade com foco em resultado' },
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-cyan-500/30 pt-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-24 lg:py-32 bg-[#1e293b] overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 opacity-20">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale mix-blend-overlay" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-[#1e293b]/90 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-5xl mx-auto space-y-6">
            <span className="inline-block py-1 px-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold tracking-widest uppercase">
              Institucional
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              Excelência estratégica em investimentos imobiliários
            </h1>
            <p className="text-xl text-slate-300 text-pretty leading-relaxed font-medium max-w-3xl mx-auto">
              Desde 2010, a Awake Brasil atua com solidez e visão para transformar imóveis de leilão
              em ativos estruturados para investidores.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. NOSSA TRAJETÓRIA (Split Screen) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 text-cyan-700 font-bold uppercase tracking-wider text-sm">
                <BadgeCheck className="h-5 w-5" />
                Nossa Trajetória
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                De Intermediação a Gestão Patrimonial Completa
              </h2>
              
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Desde a sua constituição em 2010, a Awake Brasil vem se consolidando como uma
                  referência no segmento de investimentos em imóveis provenientes de leilões judiciais e
                  extrajudiciais.
                </p>
                <p>
                  Ao longo desse período, a empresa ampliou sua atuação desde a simples
                  intermediação até o ciclo completo de aquisição, regularização, estruturação e
                  administração patrimonial.
                </p>
                <div className="pl-6 border-l-4 border-cyan-500 bg-slate-50 p-4 rounded-r-lg">
                  <p className="font-medium text-slate-800">
                    Com sede em Curitiba (PR) e filiais em São Paulo (SP) e Florianópolis (SC), 
                    a Awake Brasil conta com presença nacional para escalar operações.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] lg:h-[600px] rounded-sm overflow-hidden shadow-2xl"
            >
              <Image 
                src="/autoridade.jpg" 
                alt="Sede Awake Brasil"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 to-transparent" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. INDICADORES DE DESEMPENHO (Stats Banner) */}
      <section className="py-20 bg-[#1e293b] text-white border-y border-slate-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
             <h3 className="text-2xl font-bold text-white">Resultados que atestam nossa solidez</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-slate-700">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="px-4 pt-8 md:pt-0"
              >
                <p className="text-5xl md:text-6xl font-bold text-cyan-400 mb-2">{stat.value}</p>
                <p className="text-slate-300 uppercase tracking-widest text-sm font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ESTRUTURA ORGANIZACIONAL (Feature Grid) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Estrutura Organizacional
            </h2>
            <p className="text-lg text-slate-600">
              Operamos com áreas estruturadas para garantir controle, eficiência e excelência na gestão
e administração de ativos imobiliários.

            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 p-8 bg-slate-50 rounded-lg border border-slate-100 hover:border-cyan-200 transition-colors group"
              >
                <div className="shrink-0">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm text-cyan-700 group-hover:bg-cyan-700 group-hover:text-white transition-colors">
                    <dept.icon className="w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{dept.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{dept.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. METODOLOGIA (Timeline Vertical/Grid) */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Metodologia de Atuação
            </h2>
            <p className="text-lg text-slate-600">
              Nossa abordagem estratégica divide-se em etapas fundamentais para garantir assertividade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {methodology.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group text-center"
              >
                <div className="w-16 h-16 mx-auto bg-white border-2 border-cyan-100 rounded-full flex items-center justify-center mb-6 text-xl font-bold text-cyan-700 shadow-sm z-10 relative group-hover:border-cyan-500 group-hover:bg-cyan-50 transition-colors">
                  {step.number}
                </div>
                
                {/* Linha conectora (apenas desktop, exceto no último) */}
                {index < methodology.length - 1 && (
                   <div className="hidden lg:block absolute top-8 left-[50%] w-full h-0.5 bg-slate-200 -z-0" />
                )}

                <h3 className="text-lg font-bold text-slate-900 mb-3 px-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MISSÃO, VISÃO E VALORES (Dark Section) */}
      <section className="py-24 bg-[#0f172a] text-white">
        <div className="container mx-auto px-4">
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20 pb-16 border-b border-slate-800">
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
                    Oferecer soluções completas e seguras em gestão e administração de ativos
imobiliários, garantindo governança, transparência, eficiência operacional e valorização
patrimonial para clientes e parceiros.
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
                    Ser reconhecida nacionalmente como referência em credibilidade, eficiência e excelência
na gestão e administração de ativos imobiliários, entregando segurança e performance
patrimonial em cada operação.
                  </p>
               </div>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
               <h3 className="text-3xl font-bold text-white mb-4">Nossos Valores</h3>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {values.map((val, index) => (
                <div key={index} className="flex items-start gap-3 bg-slate-900/50 p-4 rounded border border-slate-800">
                   <CheckCircle2 className="h-5 w-5 text-cyan-500 mt-0.5 shrink-0" />
                   <span className="text-slate-300 font-medium">{val.text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 7. LOCALIZAÇÃO E CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fadeInUp} className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-bold uppercase mb-4">
               <MapPin className="h-4 w-4" />
               Presença Nacional
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
              Quer conhecer nossas oportunidades?
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
              Se deseja saber como a Awake Brasil pode apoiá-lo em investimentos ou parcerias, 
              solicite uma reunião com nossos especialistas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 flex-wrap">
              <Button size="lg" className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold h-14 px-8 rounded-none" asChild>
                 <Link href="/contato">Fale Conosco</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 font-bold h-14 px-8 rounded-none" asChild>
                 <Link href="/contato">Seja Parceiro / Agente</Link>
              </Button>
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white font-bold h-14 px-8 rounded-none" asChild>
                 <Link href="/investidor">Seja um Investidor</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}