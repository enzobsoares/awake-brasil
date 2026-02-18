'use client'

import { X, AlertTriangle, ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface ExternalLinkWarningModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ExternalLinkWarningModal({ isOpen, onClose }: ExternalLinkWarningModalProps) {
  
  const handleContinue = () => {
    // SUBSTITUA PELO LINK REAL DA PLATAFORMA DE LEILÕES
    window.open('https://www.portaldeleiloes.com.br', '_blank') 
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Escuro */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Conteúdo do Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-lg shadow-2xl overflow-hidden z-10"
          >
            {/* Header com Ícone de Alerta */}
            <div className="bg-amber-50 p-6 border-b border-amber-100 flex items-start gap-4">
              <div className="p-3 bg-amber-100 rounded-full shrink-0">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-amber-900">Aviso Importante</h3>
                <p className="text-sm text-amber-800/80 mt-1">Redirecionamento externo</p>
              </div>
              <button 
                onClick={onClose} 
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Corpo do Texto */}
            <div className="p-6 space-y-4">
              <p className="text-slate-600 leading-relaxed text-sm">
                Ao prosseguir, você será redirecionado para ambiente digital de terceiros, cuja operação é <strong>autônoma</strong> e <strong>não possui vínculo</strong> com o Grupo Awake Brasil.
              </p>
            </div>

            {/* Rodapé com Botões */}
            <div className="p-6 pt-0 flex gap-3 justify-end bg-white">
              <Button 
                variant="outline" 
                onClick={onClose}
                className="border-slate-200 text-slate-700 hover:bg-slate-50"
              >
                Cancelar
              </Button>
              <Button 
                onClick={handleContinue}
                className="bg-cyan-700 hover:bg-cyan-800 text-white gap-2"
              >
                Continuar e Acessar
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}