'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Verifica se já existe o consentimento salvo
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Pequeno delay para não ser invasivo logo no primeiro milissegundo
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-[#1e293b] text-white p-6 rounded-lg shadow-2xl border border-slate-700 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
            
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2 text-cyan-400">Política de Cookies</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Nós utilizamos cookies para melhorar sua experiência de navegação e analisar o tráfego do site. 
                Ao continuar, você concorda com nossa{' '}
                <Link href="/privacidade" className="underline text-white hover:text-cyan-400 transition-colors">
                  Política de Privacidade
                </Link>.
              </p>
            </div>

            <div className="flex gap-4 shrink-0 w-full md:w-auto">
              <Button 
                onClick={acceptCookies}
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold whitespace-nowrap flex-1 md:flex-none"
              >
                Aceitar Cookies
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsVisible(false)} 
                className="text-slate-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}