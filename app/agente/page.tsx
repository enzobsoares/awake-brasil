'use client'

import React, { useState } from "react"
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { 
  Award, 
  Users, 
  FileText, 
  ShieldCheck, 
  Send,
  UserCheck,
  CheckCircle2
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

// Animações
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
}

export default function AgentePage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    city: '',
    state: '',
    phone: '',
    email: '',
    experience: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setIsSuccess(false) // Limpa o estado antes de tentar enviar

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'credenciamento', // Identificador que a nossa API usa
          data: formData
        }),
      })

      if (response.ok) {
        setIsSuccess(true)
        // Limpa os campos após o envio
        setFormData({ name: '', company: '', city: '', state: '', phone: '', email: '', experience: '', message: '' })
      } else {
        alert('Erro ao enviar candidatura. Tente novamente.')
      }
    } catch (error) {
      console.error(error)
      alert('Erro de conexão. Verifique sua internet.')
    } finally {
      setIsSubmitting(false)
      // Remove a mensagem de sucesso da tela após 4 segundos
      setTimeout(() => setIsSuccess(false), 4000)
    }
  }

  // --- NOVOS TEXTOS: Responsabilidades ---
  const responsibilities = [
    'Atuar como ponto de apoio ou conexão regional junto a clientes, investidores ou operações.',
    'Garantir conformidade com os padrões técnicos, jurídicos e operacionais do Grupo Awake Brasil.',
    'Integrar-se aos fluxos internos, contribuindo de forma colaborativa para a eficiência das atividades e projetos.'
  ]

  // --- NOVOS TEXTOS: Benefícios ---
  const benefits = [
    {
      title: 'Oportunidades Qualificadas',
      desc: 'Acesso a ativos e projetos previamente analisados, com curadoria técnica e governança estruturada do Grupo Awake Brasil.',
      icon: Award
    },
    {
      title: 'Suporte Jurídico e Operacional',
      desc: 'Retaguarda especializada para apoiar processos, regularizações e demandas operacionais com segurança e eficiência.',
      icon: ShieldCheck
    },
    {
      title: 'Capacitação e Materiais Estratégicos',
      desc: 'Conteúdos, treinamentos e recursos institucionais que contribuem para integração, desenvolvimento e padronização da atuação dos parceiros.',
      icon: FileText
    },
    {
      title: 'Fortalecimento de Marca Institucional',
      desc: 'Vinculação a uma estrutura sólida e reconhecida, ampliando credibilidade, posicionamento e presença no mercado.',
      icon: Users
    }
  ]

  const processSteps = [
    { number: '01', title: 'Inscrição', desc: 'Preenchimento do formulário de candidatura.' },
    { number: '02', title: 'Análise', desc: 'Avaliação de perfil e compatibilidade.' },
    { number: '03', title: 'Adesão', desc: 'Contrato, onboarding e capacitação técnica.' },
    { number: '04', title: 'Integração', desc: 'Acesso ao portal e primeiras oportunidades.' },
    { number: '05', title: 'Atuação', desc: 'Desenvolvimento de negócios e suporte contínuo.' },
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-cyan-500/30 pt-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-24 lg:py-32 bg-[#1e293b] text-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale mix-blend-overlay" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-[#1e293b]/80 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto space-y-6">
            <span className="inline-block py-1 px-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold tracking-widest uppercase">
              Parceria Estratégica
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              Torne-se Parceiro Credenciado <br/> Grupo Awake Brasil
            </h1>
            <p className="text-xl text-slate-300 text-pretty leading-relaxed font-medium max-w-3xl mx-auto">
              Integre-se à nossa rede de representantes autorizados e amplie suas oportunidades com
              respaldo institucional e expertise consolidada.
            </p>
            <div className="pt-6">
              <Button 
                size="lg" 
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold h-14 px-10 rounded-none shadow-lg transition-all hover:scale-105"
                onClick={() => document.getElementById('candidatura')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Quero me Credenciar
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. INTRODUÇÃO E RESPONSABILIDADES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Expansão e Excelência
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  No Grupo Awake Brasil, consideramos nossos parceiros credenciados elementos 
                  fundamentais para a expansão e fortalecimento da nossa atuação. Essa rede 
                  seletiva conecta a presença regional a uma estrutura nacional sólida, promovendo 
                  eficiência, governança e crescimento sustentável.
                </p>
                <p>
                  Ao se credenciar como parceiro, você passa a atuar de forma integrada à nossa 
                  estrutura, com acesso a oportunidades qualificadas, processos organizados e 
                  suporte técnico, jurídico e operacional — ampliando resultados com segurança e 
                  credibilidade institucional.
                </p>
              </div>

              <div className="mt-8 p-6 bg-slate-50 border-l-4 border-cyan-500 rounded-r-lg">
                <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <UserCheck className="h-5 w-5 text-cyan-600" />
                  Responsabilidades do Parceiro
                </h3>
                <ul className="space-y-2">
                  {responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <div className="h-1.5 w-1.5 bg-cyan-500 rounded-full mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative h-[600px] rounded-sm overflow-hidden shadow-2xl"
            >
               <Image 
                 src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop" 
                 alt="Reunião de Parceiros" 
                 fill 
                 className="object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/70 to-transparent" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. BENEFÍCIOS */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Benefícios & Suporte
            </h2>
            <p className="text-lg text-slate-600">
              Uma estrutura completa voltada ao fortalecimento da sua atuação profissional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-sm border border-slate-200 hover:border-cyan-500 transition-all hover:shadow-lg group"
              >
                <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-600 transition-colors">
                  <item.icon className="h-6 w-6 text-cyan-700 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROCESSO DE CREDENCIAMENTO */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Processo de Credenciamento</h2>
            <p className="text-slate-600 mt-2">Etapas simples para iniciar nossa parceria</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {processSteps.map((step, index) => (
              <div key={index} className="relative text-center group">
                <div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center text-xl font-bold text-cyan-700 mb-4 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                  {step.number}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-xs text-slate-500 max-w-[150px] mx-auto">{step.desc}</p>
                
                {/* Conector (exceto no último) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-slate-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FORMULÁRIO DE CANDIDATURA */}
      <section className="py-24 bg-slate-50 border-t border-slate-200" id="candidatura">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="shadow-2xl border-t-4 border-t-cyan-500 relative overflow-hidden">
            
            {/* Feedback de Sucesso */}
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-30 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center text-center p-12"
                >
                  <div className="w-20 h-20 rounded-full bg-cyan-100 flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-10 w-10 text-cyan-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">Candidatura Enviada!</h3>
                  <p className="text-slate-600 max-w-md">
                    Recebemos suas informações com sucesso. Nossa equipe analisará seu perfil e entrará em contato em breve.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <CardContent className="p-8 md:p-12 relative z-10">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Candidatura de Parceiro</h2>
                <p className="text-slate-600">
                  Preencha o formulário abaixo para iniciar seu processo de análise e integração à rede de parceiros do Grupo Awake Brasil.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Nome Completo *</Label>
                    <Input placeholder="Seu nome" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <Label>Empresa (Opcional)</Label>
                    <Input placeholder="Nome da empresa" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Cidade *</Label>
                    <Input placeholder="Sua cidade" required value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <Label>Estado *</Label>
                    <Input placeholder="UF" maxLength={2} required value={formData.state} onChange={(e) => setFormData({...formData, state: e.target.value})} />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Telefone / WhatsApp *</Label>
                    <Input placeholder="(00) 00000-0000" type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <Label>E-mail *</Label>
                    <Input placeholder="seu@email.com" type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Resumo de Experiência *</Label>
                  <Textarea 
                    placeholder="Breve histórico profissional, área de atuação ou forma como deseja colaborar com o Grupo Awake Brasil." 
                    required 
                    value={formData.experience}
                    onChange={(e) => setFormData({...formData, experience: e.target.value})} 
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full h-14 text-lg font-bold bg-cyan-700 hover:bg-cyan-800 text-white rounded-sm shadow-md transition-all hover:-translate-y-1 disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Enviar Credenciamento
                      <Send className="h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  )
}