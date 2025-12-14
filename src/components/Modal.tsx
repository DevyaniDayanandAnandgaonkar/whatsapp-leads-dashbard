import { ReactNode } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  maxWidth?: string;
}

export function Modal({ isOpen, onClose, title, children, maxWidth = 'max-w-2xl' }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-md" 
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className={`relative glass-card ${maxWidth} w-full max-h-[90vh] overflow-hidden`}
            style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 100px rgba(0, 209, 255, 0.1)'
            }}
          >
            {/* Header */}
            <div className="sticky top-0 backdrop-blur-xl bg-[var(--glass-bg)] border-b border-[var(--card-border)] px-6 py-5 flex items-center justify-between z-10">
              <h3 className="gradient-text">{title}</h3>
              <motion.button
                onClick={onClose}
                className="p-2 rounded-xl hover:bg-[var(--card-border)] transition-all group"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--danger)]" />
              </motion.button>
            </div>
            
            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
              {children}
            </div>

            {/* Decorative Gradient */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-50"></div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
