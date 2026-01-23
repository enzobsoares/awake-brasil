'use client'

import React from "react"
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

// Animações
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
}

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('[v0] Form submitted:', formData)
    // Handle form submission
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      lines: [
        'Matriz São Paulo',
        'Av. Paulista, 1000 - Conj. 1001',
        'Bela Vista, São Paulo - SP',
        'CEP 01310-100',
      ],
    },
    {
      icon: Phone,
      title: 'Telefone',
      lines: [
        'São Paulo: (11) 3333-4444',
        'Rio de Janeiro: (21) 3333-5555',
        'WhatsApp: (11) 99999-8888',
      ],
    },
    {
      icon: Mail,
      title: 'E-mail',
      lines: [
        'contato@grupoawake.com.br',
        'investimentos@grupoawake.com.br',
        'parceiros@grupoawake.com.br',
      ],
    },
    {
      icon: Clock,
      title: 'Horário de Atendimento',
      lines: [
        'Segunda a Sexta: 9h às 18h',
        'Sábado: 9h às 13h',
        'Domingo: Fechado',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-cyan-500/30 pt-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-20 lg:py-32 bg-[#1e293b] text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale mix-blend-overlay" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-[#1e293b]/90 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto space-y-6">
            <span className="inline-block py-1 px-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold tracking-widest uppercase">
              Fale Conosco
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Entre em Contato
            </h1>
            <p className="text-xl text-slate-300 text-pretty leading-relaxed font-medium max-w-2xl mx-auto">
              Nossa equipe está pronta para atender você. Entre em contato e descubra 
              como podemos ajudá-lo a alcançar seus objetivos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. MAIN CONTACT SECTION (Split Form) */}
      <section className="py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            
            {/* Left: Contact Info */}
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:col-span-2 space-y-10"
            >
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Canais de Atendimento
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Estamos aqui para responder suas perguntas e fornecer as informações 
                  que você precisa com agilidade e eficiência.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex gap-5 p-6 bg-slate-50 border border-slate-100 rounded-sm hover:border-cyan-200 transition-colors group">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center group-hover:bg-cyan-600 transition-colors duration-300">
                        <info.icon className="h-6 w-6 text-cyan-700 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-slate-900 text-lg">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.lines.map((line, lineIndex) => (
                          <p key={lineIndex} className="text-sm text-slate-600">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:col-span-3"
            >
              <Card className="border border-slate-200 shadow-xl bg-white rounded-sm overflow-hidden">
                <div className="h-2 w-full bg-cyan-600" />
                <CardContent className="p-8 md:p-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                         <Label htmlFor="name" className="text-slate-700 font-semibold">Nome Completo</Label>
                         <Input
                           id="name"
                           type="text"
                           placeholder="Seu nome"
                           className="h-12 border-slate-300 focus:border-cyan-500 focus:ring-cyan-500"
                           value={formData.name}
                           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                           required
                         />
                       </div>
                       <div className="space-y-2">
                         <Label htmlFor="phone" className="text-slate-700 font-semibold">Telefone</Label>
                         <Input
                           id="phone"
                           type="tel"
                           placeholder="(11) 99999-9999"
                           className="h-12 border-slate-300 focus:border-cyan-500 focus:ring-cyan-500"
                           value={formData.phone}
                           onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                           required
                         />
                       </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-700 font-semibold">E-mail Corporativo</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@empresa.com.br"
                        className="h-12 border-slate-300 focus:border-cyan-500 focus:ring-cyan-500"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-slate-700 font-semibold">Assunto</Label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="Como podemos ajudar?"
                        className="h-12 border-slate-300 focus:border-cyan-500 focus:ring-cyan-500"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-slate-700 font-semibold">Mensagem</Label>
                      <Textarea
                        id="message"
                        placeholder="Descreva sua necessidade ou dúvida..."
                        rows={6}
                        className="resize-none border-slate-300 focus:border-cyan-500 focus:ring-cyan-500 p-4"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold bg-cyan-700 hover:bg-cyan-800 text-white rounded-sm shadow-md transition-all hover:-translate-y-1">
                      Enviar Mensagem
                      <Send className="ml-2 h-5 w-5" />
                    </Button>

                    <p className="text-xs text-slate-400 text-center mt-4">
                      Ao enviar este formulário, você concorda com nossa Política de 
                      Privacidade e autoriza o contato da nossa equipe.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  )
}