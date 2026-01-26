'use client'

import React, { useState } from "react"
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { 
  Briefcase, 
  Award, 
  TrendingUp, 
  Users, 
  CheckSquare, 
  MapPin, 
  FileText, 
  ShieldCheck, 
  Send,
  UserCheck
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Candidatura enviada:', formData)
    // Integração com API
  }

  const responsibilities = [
    'Atuar como ponto de contato local para investidores ou clientes.',
    'Garantir conformidade com os padrões técnicos e jurídicos da Awake Brasil.',
    'Integrar-se à rede de agentes e seguir os fluxos operacionais internos.'
  ]

  const requirements = [
    'Experiência comprovada no mercado de imóveis ou investimentos.',
    'Estrutura de atendimento profissional (física ou remota qualificada).',
    'Comprometimento ético com os valores da Awake Brasil.',
    'Disponibilidade para treinamentos e report de desempenho.'
  ]

  const benefits = [
    {
      title: 'Oportunidades Privilegiadas',
      desc: 'Acesso a ativos de leilão previamente avaliados e com expertise Awake.',
      icon: Award
    },
    {
      title: 'Suporte Jurídico e Operacional',
      desc: 'Retaguarda da matriz para agilizar aquisições e regularizações.',
      icon: ShieldCheck
    },
    {
      title: 'Treinamento e Material',
      desc: 'Manuais, webinars e templates de vendas para sua capacitação.',
      icon: FileText
    },
    {
      title: 'Branding Institucional',
      desc: 'Associação à marca Awake Brasil, sinônimo de solidez no mercado.',
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
              Torne-se Agente Credenciado <br/> Awake Brasil
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

      {/* 2. INTRODUÇÃO E RESPONSABILIDADES (Split Screen) */}
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
                  Na Awake Brasil, consideramos nossos agentes credenciados elementos fundamentais
                  para a expansão de nossa atuação. Essa rede seletiva conecta o alcance
                  regional com a estrutura nacional.
                </p>
                <p>
                  Como Agente Credenciado, você representa nossa marca, tem acesso exclusivo a
                  oportunidades e processos personalizados — ampliando suas receitas com
                  credibilidade.
                </p>
              </div>

              <div className="mt-8 p-6 bg-slate-50 border-l-4 border-cyan-500 rounded-r-lg">
                <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <UserCheck className="h-5 w-5 text-cyan-600" />
                  Responsabilidades do Agente
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

      {/* 3. BENEFÍCIOS (Grid de Cards) */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Benefícios & Suporte
            </h2>
            <p className="text-lg text-slate-600">
              Uma estrutura completa desenhada para o seu sucesso comercial.
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

      {/* 4. PERFIL E REQUISITOS (Checklist Visual) */}
      <section className="py-24 bg-[#0f172a] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 p-10 rounded-sm">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Briefcase className="text-cyan-400" />
                  Perfil Ideal
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Profissional autônomo ou empresa com atuação no mercado imobiliário ou de
                  investimentos, com bom relacionamento comercial, ética profissional e interesse em
                  participar de operações estruturadas de destaque.
                </p>
              </div>
              <div className="md:w-1/2 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12">
                <h3 className="text-xl font-bold mb-6 text-cyan-400">Requisitos Mínimos</h3>
                <ul className="space-y-4">
                  {requirements.map((req, i) => (
                    <li key={i} className="flex gap-3 items-start text-sm text-slate-300">
                      <CheckSquare className="h-5 w-5 text-cyan-500 shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROCESSO DE CREDENCIAMENTO (Timeline Horizontal) */}
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

      {/* 6. FORMULÁRIO DE CANDIDATURA (CTA Section) */}
      <section className="py-24 bg-slate-50 border-t border-slate-200" id="candidatura">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="shadow-2xl border-t-4 border-t-cyan-500">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Candidatura de Agente</h2>
                <p className="text-slate-600">Preencha o formulário abaixo para iniciar seu processo de credenciamento.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Nome Completo *</Label>
                    <Input placeholder="Seu nome" required onChange={(e) => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <Label>Empresa (Opcional)</Label>
                    <Input placeholder="Nome da empresa" onChange={(e) => setFormData({...formData, company: e.target.value})} />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Cidade *</Label>
                    <Input placeholder="Sua cidade" required onChange={(e) => setFormData({...formData, city: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <Label>Estado *</Label>
                    <Input placeholder="UF" maxLength={2} required onChange={(e) => setFormData({...formData, state: e.target.value})} />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Telefone / WhatsApp *</Label>
                    <Input placeholder="(00) 00000-0000" type="tel" required onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <Label>E-mail *</Label>
                    <Input placeholder="seu@email.com" type="email" required onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Resumo de Experiência *</Label>
                  <Textarea placeholder="Breve histórico profissional..." required onChange={(e) => setFormData({...formData, experience: e.target.value})} />
                </div>

                <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold bg-cyan-700 hover:bg-cyan-800 text-white rounded-sm">
                  Enviar Candidatura
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  )
}