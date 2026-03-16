// @ts-ignore

'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { 
  Building2, 
  FileText, 
  Scale, 
  CheckCircle2, 
  BarChart3, 
  ArrowRight,
  ShieldCheck,
  Settings,
  Hammer,
  FileSearch,
  Briefcase
} from 'lucide-react'
import { motion } from 'framer-motion'

// Configurações de Animação
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function SolucoesPage() {
  
  // Dados para a Seção 1: Gestão Imobiliária (Mantido no código caso queira usar depois, mas removido da UI conforme referência)
  const gestaoItems = [
    { text: "Avaliação técnica e análise da situação do imóvel", icon: FileSearch },
    { text: "Regularização documental e acompanhamento jurídico", icon: Scale },
    { text: "Controle de pagamentos, despesas e recebíveis", icon: BarChart3 },
    { text: "Manutenção preventiva, conservação e vistorias", icon: Hammer },
    { text: "Gestão contratual de locações e negociações", icon: Briefcase },
    { text: "Disponibilização estratégica para venda ou locação", icon: Building2 },
    { text: "Suporte jurídico e auditoria em todas as etapas", icon: ShieldCheck },
  ]

  // Dados para a Seção 3: Regularização Imóveis
  const regImoveisItems = [
    { title: "Levantamento Documental", desc: "Organização completa do histórico do imóvel." },
    { title: "Regularização em Órgãos", desc: "Atuação junto a cartórios, prefeituras e órgãos competentes." },
    { title: "Análise de Ocupação", desc: "Suporte jurídico para resolução de pendências de posse." },
    { title: "Adequação Cadastral", desc: "Regularização fiscal e registral para conformidade total." },
    { title: "Preparação do Ativo", desc: "Deixando o imóvel pronto para administração, locação ou venda." },
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-cyan-500/30">
      <Header />
      
      <main className="pt-20">
        
        {/* 1. HERO SECTION */}
        <section className="relative py-24 lg:py-32 bg-[#1e293b] text-center overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale mix-blend-overlay" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-[#1e293b]/90 to-transparent" />
          </div>

          <div className="relative z-10 container mx-auto px-4">
            <motion.div {...fadeInUp} className="max-w-4xl mx-auto space-y-6">
              <span className="inline-block py-1 px-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold tracking-widest uppercase">
                Nossas Soluções
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                Transformamos imóveis em <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500">
                  oportunidades rentáveis
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
                Gestão estratégica, segura e orientada à valorização patrimonial. 
                Integramos diagnóstico, regularização e administração para garantir liquidez.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 2. GESTÃO E ADMINISTRAÇÃO (Layout fiel à referência: Texto Esq / Imagem Dir) */}
        <section className="py-24 bg-white scroll-mt-20" id="gestao">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* items-center garante o alinhamento horizontal no centro da imagem */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Texto Descritivo (Esquerda) */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cyan-50 rounded-sm flex items-center justify-center text-cyan-700">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="text-cyan-700 font-bold uppercase tracking-wider text-xs">SOLUÇÃO 01</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                  Gestão e Administração <br/> Imobiliária
                </h2>
                
                <div className="space-y-6 text-slate-600 leading-relaxed pt-2">
                  <p>
                    Realizamos a gestão completa de ativos imobiliários com controle técnico, financeiro e jurídico, assegurando organização patrimonial e redução de custos operacionais.
                  </p>
                  <p>
                    Esse modelo integrado permite transformar ativos parados, burocráticos ou com alto custo de manutenção em <strong>patrimônios organizados, rentáveis e com potencial de liquidez.</strong>
                  </p>
                </div>

                <div className="pt-6">
                  <Button className="bg-[#0f172a] hover:bg-slate-800 text-white rounded-none px-8 h-12 font-bold transition-all" asChild>
                    <Link href="/contato">Falar com Consultor</Link>
                  </Button>
                </div>
              </motion.div>

              {/* Imagem (Direita) - Quadrada/Retangular limpa como na referência */}
              <motion.div
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="relative aspect-square md:aspect-[4/3] w-full rounded-sm overflow-hidden shadow-2xl"
              >
                 <Image 
                   src="/solucao1.jpeg" 
                   alt="Gestão Imobiliária"
                   fill
                   className="object-cover"
                 />
              </motion.div>

            </div>
          </div>
        </section>

        {/* 3. REGULARIZAÇÃO DE EMPRESAS (Layout: Dark Section) */}
        <section className="py-24 bg-[#0f172a] text-white scroll-mt-20" id="empresas">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:order-2"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-cyan-900/50 border border-cyan-500/30 rounded-sm flex items-center justify-center text-cyan-400">
                    <Scale className="w-6 h-6" />
                  </div>
                  <span className="text-cyan-500 font-bold uppercase tracking-wider text-sm">Solução 02</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Regularização de alvarás de funcionamento
                </h2>
                
                <p className="text-lg text-slate-300 leading-relaxed mb-8">
                  Oferecemos suporte completo para estruturação e conformidade legal de empresas vinculadas a operações imobiliárias. Nosso objetivo é assegurar estabilidade jurídica e previsibilidade financeira.
                </p>

                <ul className="space-y-4">
                  {[
                    "Análise documental e adequação às normas legais vigentes",
                    "Regularização de pendências jurídicas, fiscais e administrativas",
                    "Organização contábil e controle de obrigações legais",
                    "Estruturação societária e suporte estratégico",
                    "Acompanhamento contínuo para manutenção da conformidade"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-[500px] lg:h-[600px] bg-slate-800 rounded-sm overflow-hidden lg:order-1 border border-slate-700"
              >
                 <Image 
                   src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop" 
                   alt="Regularização Empresarial" 
                   fill 
                   className="object-cover opacity-60 mix-blend-overlay hover:scale-105 transition-transform duration-1000"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
                 <div className="absolute bottom-10 left-10 right-10">
                    <p className="text-xl font-medium border-l-4 border-cyan-500 pl-4">
                      "Garantimos que empresas e instituições operem com alinhamento total às exigências regulatórias."
                    </p>
                 </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 4. REGULARIZAÇÃO DE IMÓVEIS (Layout: Cards Grid) */}
        <section className="py-24 bg-slate-50 border-t border-slate-200 scroll-mt-20" id="imoveis">
          <div className="container mx-auto px-4">
            
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 justify-center mb-4">
                <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-700">
                  <FileText className="w-5 h-5" />
                </div>
                <span className="text-cyan-700 font-bold uppercase tracking-wider text-sm">Solução 03</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Regularização de Imóveis
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Executamos todo o processo de regularização, promovendo segurança jurídica e viabilidade de comercialização. A regularização adequada elimina entraves burocráticos e aumenta o valor do ativo.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regImoveisItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 border border-slate-200 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg rounded-sm group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-slate-200 group-hover:bg-cyan-500 transition-colors" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* 5. EQUIPE & CTA FINAL */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-[#1e293b] rounded-sm p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
              {/* Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10 max-w-3xl mx-auto">
                <Settings className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Conte com uma gestão especializada
                </h2>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  Nossa equipe multidisciplinar atua de forma integrada, com experiência nacional e internacional, garantindo segurança, agilidade e alto desempenho em cada etapa da gestão patrimonial.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold h-14 px-10 rounded-none shadow-lg transition-all hover:scale-105" asChild>
                    <Link href="/contato">Fale com o Grupo Awake</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-slate-500 text-slate-300 hover:bg-white hover:text-slate-900 font-bold h-14 px-10 rounded-none bg-transparent" asChild>
                    <Link href="/clientes">Ver Nossos Clientes</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      
     
    </div>
  )
}