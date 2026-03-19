'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false)

  // Mostra o botão "Voltar ao topo" apenas após rolar 300px para baixo
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-center">
      {/* Botão Voltar ao Topo */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            onClick={scrollToTop}
            className="p-3 rounded-full bg-slate-800 text-white shadow-lg hover:bg-slate-700 transition-all hover:-translate-y-1 flex items-center justify-center"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Botão WhatsApp */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Link
          href="https://wa.me/5511916986787"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:bg-[#128C7E] transition-all hover:scale-110 flex items-center justify-center group"
          aria-label="Fale conosco no WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </Link>
      </motion.div>
    </div>
  )
}