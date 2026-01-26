'use client'

import Link from 'next/link'
import { Building2, Mail, Phone, Linkedin, Instagram, Facebook, Clock } from 'lucide-react'

export function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Quem Somos', href: '/quem-somos' },
    { name: 'Clientes', href: '/clientes' },
    { name: 'Leilões', href: '/leiloes' },
    { name: 'Agente', href: '/agente' }, // Adicionado para consistência
    { name: 'Investidor', href: '/investidor' },
    { name: 'Contato', href: '/contato' },
  ]

  return (
    <footer className="bg-[#1e293b] text-white border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* 1. Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-cyan-400" />
              <span className="text-lg font-bold">Grupo Awake Brasil</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Excelência estratégica em investimentos imobiliários e gestão patrimonial.
            </p>
          </div>

          {/* 2. Contact (Telefones) */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-500">
              Fale Conosco
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-1 text-cyan-400 shrink-0" />
                <div className="space-y-1">
                  <p>Filial SC: <a href="tel:+554832092800" className="hover:text-white transition-colors">(48) 3209-2800</a></p>
                  <p>Filial SP: <a href="tel:+5511916986787" className="hover:text-white transition-colors">(11) 91698-6787</a></p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-cyan-400 shrink-0" />
                <a href="mailto:contato@grupoawakebrasil.com" className="hover:text-white transition-colors">
                  contato@grupoawakebrasil.com
                </a>
              </div>
            </div>
          </div>

          {/* 3. Horário */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-500">
              Atendimento
            </h3>
            <div className="flex items-start gap-3 text-sm text-slate-300">
               <Clock className="h-4 w-4 mt-1 text-cyan-400 shrink-0" />
               <div>
                 <p>Segunda a Sexta-feira</p>
                 <p>Das 09h às 18h</p>
               </div>
            </div>
          </div>

          {/* 4. Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-500">
              Navegação
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Grupo Awake Brasil. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}