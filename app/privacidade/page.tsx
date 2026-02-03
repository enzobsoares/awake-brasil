'use client'

import { Shield, Lock, FileText, Eye, Server, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Animações suaves
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
}

export default function PrivacidadePage() {
  
  // Data atual para "Última atualização"
  const lastUpdate = new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'long' });

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-500/30 pt-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-16 lg:py-24 bg-[#1e293b] text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale mix-blend-overlay" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-[#1e293b]/90 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-full mb-4 border border-white/10">
               <Shield className="w-6 h-6 text-cyan-400" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Política de Privacidade
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto font-light">
              Transparência, segurança e compromisso com a proteção dos seus dados.
            </p>
            <p className="text-xs text-slate-500 uppercase tracking-widest mt-4">
              Última atualização: {lastUpdate}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTEÚDO LEGAL */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Introdução */}
            <motion.div {...fadeInUp} className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 leading-relaxed">
                A <strong>Awake Brasil</strong> tem o compromisso de respeitar a sua privacidade e garantir o sigilo de todas as informações que você nos fornece. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
              </p>
            </motion.div>

            {/* Seções em Grid/Lista para facilitar leitura */}
            <div className="grid gap-12">
              
              {/* Coleta de Dados */}
              <motion.div {...fadeInUp} className="flex gap-6 items-start">
                <div className="shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-700">
                    <FileText className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">1. Coleta de Informações</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Coletamos informações pessoais quando você interage conosco, seja preenchendo formulários em nosso site, inscrevendo-se em nossa newsletter, ou entrando em contato via telefone/WhatsApp. Os dados coletados podem incluir:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600">
                    <li>Nome completo, e-mail, telefone e endereço;</li>
                    <li>Dados profissionais (empresa, cargo) para parcerias B2B;</li>
                    <li>Informações de navegação (endereço IP, cookies, páginas visitadas).</li>
                  </ul>
                </div>
              </motion.div>

              {/* Uso das Informações */}
              <motion.div {...fadeInUp} className="flex gap-6 items-start">
                <div className="shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-700">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">2. Como Usamos Seus Dados</h3>
                  <p className="text-slate-600 leading-relaxed">
                    As informações coletadas são utilizadas primordialmente para:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600 mt-3">
                    <li>Fornecer serviços de gestão imobiliária e consultoria em leilões;</li>
                    <li>Enviar oportunidades de investimento personalizadas ao seu perfil;</li>
                    <li>Cumprir obrigações legais e regulatórias (compliance);</li>
                    <li>Melhorar a experiência de navegação em nosso portal.</li>
                  </ul>
                </div>
              </motion.div>

              {/* Segurança */}
              <motion.div {...fadeInUp} className="flex gap-6 items-start">
                <div className="shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-700">
                    <Lock className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">3. Segurança e Armazenamento</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Adotamos práticas robustas de segurança da informação para proteger seus dados contra acesso não autorizado, alteração ou destruição. Seus dados são armazenados em servidores seguros, com acesso restrito apenas a colaboradores autorizados e parceiros que necessitam das informações para execução do serviço.
                  </p>
                </div>
              </motion.div>

              {/* Cookies */}
              <motion.div {...fadeInUp} className="flex gap-6 items-start">
                <div className="shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-700">
                    <Server className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">4. Cookies e Tecnologias de Rastreamento</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Utilizamos cookies para otimizar a funcionalidade do site e analisar o tráfego. Você pode gerenciar suas preferências de cookies diretamente nas configurações do seu navegador a qualquer momento.
                  </p>
                </div>
              </motion.div>

              {/* Contato DPO */}
              <motion.div {...fadeInUp} className="flex gap-6 items-start bg-slate-50 p-8 rounded-lg border border-slate-200">
                <div className="shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-lg bg-[#1e293b] flex items-center justify-center text-white">
                    <Mail className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">5. Seus Direitos e Contato</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Conforme a LGPD, você tem o direito de solicitar o acesso, correção ou exclusão dos seus dados pessoais. Para exercer esses direitos ou tirar dúvidas sobre esta política, entre em contato com nosso Encarregado de Proteção de Dados (DPO):
                  </p>
                  <p className="font-bold text-cyan-700">
                    <a href="mailto:contato@grupoawakebrasil.com" className="hover:underline">
                      contato@grupoawakebrasil.com
                    </a>
                  </p>
                </div>
              </motion.div>

            </div>

            <div className="border-t border-slate-200 pt-8 text-center text-slate-500 text-sm">
              <p>
                A Awake Brasil reserva-se o direito de atualizar esta política periodicamente. <br/>
                Recomendamos a visita regular a esta página.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}