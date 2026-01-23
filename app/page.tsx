'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { 
  ArrowRight, 
  Building2, 
  TrendingUp, 
  ShieldCheck, 
  Search, 
  FileCheck, 
  Settings, 
  Users, 
  Handshake, 
  Landmark, 
  Briefcase,
  ArrowDown
} from 'lucide-react'
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useState } from 'react'

// Animações suaves
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
}

export default function HomePage() {
  // Hooks do Embla Carousel
  const [actionRef] = useEmblaCarousel({ loop: false, align: 'center' })
  const [audienceRef] = useEmblaCarousel({ loop: false, align: 'start' })

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-cyan-500/30">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-[#1e293b]">
        <div className="absolute inset-0 opacity-30">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale mix-blend-overlay" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-[#1e293b]/80 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto space-y-8">
            <span className="inline-block py-1 px-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4">
              Grupo Awake Brasil
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
              Gestão inteligente de <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
                Ativos Imobiliários
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
              Estruturamos ativos desde a prospecção até a administração contínua, garantindo organização operacional, controle financeiro e valorização patrimonial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="bg-cyan-700 hover:bg-cyan-800 text-white rounded-none px-8 h-14 text-base tracking-wide transition-all duration-300 font-bold shadow-lg shadow-cyan-900/20">
                Conheça nossos serviços
              </Button>
              <Button size="lg" variant="outline" className="border-slate-500 text-white hover:bg-white hover:text-slate-900 rounded-none px-8 h-14 text-base tracking-wide bg-transparent transition-all duration-300">
                Fale com um especialista
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
           <ArrowDown className="w-6 h-6 text-cyan-500" />
        </div>
      </section>

      {/* 2. INTRODUÇÃO INSTITUCIONAL */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[500px] w-full">
                <Image 
                  src="/autoridade.jpg" 
                  alt="Sede Awake Brasil" 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-cyan-600/20 -z-10" />
              </div>
              <div className="absolute bottom-8 left-8 bg-[#1e293b] p-6 max-w-xs shadow-lg border-l-4 border-cyan-500">
                <p className="text-cyan-400 font-bold text-lg mb-1">Desde 2010</p>
                <p className="text-slate-300 text-sm">Disciplina operacional e alto padrão de governança.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Segurança, transparência e <span className="text-cyan-700">resultados consistentes.</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  O Grupo Awake atua com visão estratégica na gestão e administração de ativos imobiliários. Nossa atuação é orientada por processos bem definidos, controle rigoroso e foco na valorização patrimonial.
                </p>
                <p>
                  Contamos com uma <strong>equipe multidisciplinar</strong> que integra análise de mercado, inteligência documental e suporte jurídico-operacional.
                </p>
                <div className="pt-4 border-l-4 border-cyan-500 pl-6 bg-slate-50 py-4 pr-4">
                  <p className="italic text-slate-800 font-medium">
                    &quot;Garantimos atuação nacional, ampliando o acesso a oportunidades qualificadas mesmo em cenários complexos.&quot;
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. METRICAS */}
      <section className="py-20 bg-[#1e293b] text-white border-y border-slate-700">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-slate-700">
            <div className="px-4">
              <p className="text-5xl md:text-6xl font-bold text-cyan-400 mb-2">11 Bi+</p>
              <p className="text-slate-300 uppercase tracking-widest text-sm font-semibold">Em ativos sob gestão</p>
            </div>
            <div className="px-4 pt-8 md:pt-0">
              <p className="text-5xl md:text-6xl font-bold text-cyan-400 mb-2">500k</p>
              <p className="text-slate-300 uppercase tracking-widest text-sm font-semibold">m² de patrimônio</p>
            </div>
            <div className="px-4 pt-8 md:pt-0">
              <p className="text-5xl md:text-6xl font-bold text-cyan-400 mb-2">300+</p>
              <p className="text-slate-300 uppercase tracking-widest text-sm font-semibold">Investidores ativos</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXPERTISE - REDESENHADO (Minimalista & Pequeno) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Nossa Expertise</h2>
            <p className="text-slate-600 font-medium">Um ecossistema completo de gestão imobiliária, focado na segurança do seu patrimônio.</p>
          </div>

          {/* Grid Minimalista Centralizado */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 max-w-6xl mx-auto">
            {[
              { title: "Prospecção Estratégica", desc: "Identificação de oportunidades em todo território nacional com análise criteriosa.", icon: Search },
              { title: "Due Diligence Integrada", desc: "Processos jurídicos, documentais e mercadológicos para mitigação de riscos.", icon: ShieldCheck },
              { title: "Estruturação e Aquisição", desc: "Condução integral da operação, negociação e regularização do imóvel.", icon: FileCheck },
              { title: "Gestão Especializada", desc: "Estratégias de monetização, locação ou revenda com foco no perfil do ativo.", icon: Settings },
              { title: "Rede de Parceiros", desc: "Capilaridade operacional com representantes credenciados locais.", icon: Users },
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex gap-5 items-start"
              >
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center group-hover:bg-cyan-700 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-cyan-700 group-hover:text-white transition-colors" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed text-pretty">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ROLETA DE AÇÕES (ACTION HUB) - SLIDER */}
      <section className="py-24 bg-white border-t border-slate-200 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Qual o seu próximo passo?</h2>
            <p className="text-slate-500 mt-2 font-medium">Escolha a opção ideal para o seu perfil</p>
          </div>

          <div className="overflow-hidden" ref={actionRef}>
            <div className="flex touch-pan-y -ml-4">
              
              {/* SLIDE 1 */}
              <div className="flex-[0_0_85%] min-w-0 pl-4 sm:flex-[0_0_50%] md:flex-[0_0_33.33%]">
                <Link href="/contato" className="group block h-full p-10 bg-white border border-slate-200 hover:border-cyan-500 transition-all text-center hover:shadow-xl relative top-0 hover:-top-2 duration-300 rounded-sm">
                    <div className="w-16 h-16 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan-100 transition-colors">
                      <Handshake className="w-8 h-8 text-slate-600 group-hover:text-cyan-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Contato</h3>
                    <p className="text-slate-600 mb-8 px-2 text-sm leading-relaxed">Deseja falar com nossa equipe? Inicie uma conversa estratégica.</p>
                    <span className="inline-flex items-center text-cyan-700 font-bold group-hover:gap-2 transition-all">
                      Fale Conosco <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                </Link>
              </div>

              {/* SLIDE 2 - ITEM REMOVIDO AQUI */}
              <div className="flex-[0_0_85%] min-w-0 pl-4 sm:flex-[0_0_50%] md:flex-[0_0_33.33%]">
                <Link href="/investidor" className="group block h-full p-10 bg-[#1e293b] text-white transition-all text-center relative shadow-2xl hover:shadow-cyan-900/20 top-0 hover:-top-2 duration-300 border-t-4 border-cyan-500 rounded-sm">
                    <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                      <TrendingUp className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Seja um Investidor</h3>
                    <p className="text-slate-300 mb-8 px-2 text-sm leading-relaxed">Acesse oportunidades estruturadas com segurança e governança.</p>
                    <span className="inline-flex items-center text-white font-bold group-hover:gap-2 transition-all">
                      Começar a Investir <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                </Link>
              </div>

              {/* SLIDE 3 */}
              <div className="flex-[0_0_85%] min-w-0 pl-4 sm:flex-[0_0_50%] md:flex-[0_0_33.33%]">
                <Link href="/agente" className="group block h-full p-10 bg-white border border-slate-200 hover:border-cyan-500 transition-all text-center hover:shadow-xl relative top-0 hover:-top-2 duration-300 rounded-sm">
                    <div className="w-16 h-16 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan-100 transition-colors">
                      <Briefcase className="w-8 h-8 text-slate-600 group-hover:text-cyan-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Seja Parceiro</h3>
                    <p className="text-slate-600 mb-8 px-2 text-sm leading-relaxed">Junte-se à nossa rede credenciada e amplie seus negócios.</p>
                    <span className="inline-flex items-center text-cyan-700 font-bold group-hover:gap-2 transition-all">
                      Quero ser parceiro <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 6. PARA QUEM ATUAMOS - SLIDER */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Para quem atuamos</h2>
              <div className="w-20 h-1 bg-cyan-600 mt-4"></div>
           </div>

           <div className="overflow-hidden" ref={audienceRef}>
              <div className="flex touch-pan-y -ml-4">
                {[
                  { title: "Investidores Individuais", icon: Users, desc: "Diversificação de portfólio com ativos imobiliários geridos profissionalmente, garantindo rentabilidade." },
                  { title: "Empresas Parceiras", icon: Building2, desc: "Operações bem estruturadas com respaldo institucional para ampliar atuação no mercado." },
                  { title: "Fundos de Investimento", icon: Landmark, desc: "Transparência, governança robusta e capacidade operacional em escala nacional." },
                  { title: "Family Offices", icon: Handshake, desc: "Gestão patrimonial dedicada com foco em preservação e multiplicação de capital." }
                ].map((item, i) => (
                  <div key={i} className="flex-[0_0_80%] min-w-0 pl-4 sm:flex-[0_0_45%] lg:flex-[0_0_25%]">
                    <div className="bg-white p-8 border border-slate-200 h-full hover:border-cyan-500 transition-colors shadow-sm hover:shadow-md rounded-sm">
                       <item.icon className="w-10 h-10 text-slate-400 mb-6" />
                       <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                       <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* 7. CTA FINAL */}
      <section className="py-24 bg-[#1e293b] text-center px-4 relative overflow-hidden">
         {/* Efeito de Fundo */}
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500 via-transparent to-transparent" />
         
         <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Está pronto para estruturar e potencializar <br/> seus ativos imobiliários?
            </h2>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
              Descubra como o Grupo Awake pode apoiar sua operação com segurança, governança e visão estratégica.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <Button className="bg-cyan-700 hover:bg-cyan-800 text-white h-14 px-8 text-base rounded-none transition-all hover:scale-105 font-bold">
                 Conhecer oportunidades
               </Button>
               <Button variant="outline" className="border-slate-500 text-white hover:bg-white hover:text-slate-900 h-14 px-8 text-base rounded-none bg-transparent transition-all font-bold">
                 Fale com um especialista
               </Button>
            </div>
         </div>
      </section>

    </div>
  )
}