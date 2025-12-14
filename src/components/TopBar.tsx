import { Search, Bell, User, Sun, Moon, Sparkles } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { motion, AnimatePresence } from 'motion/react';

interface TopBarProps {
  title?: string;
}

export function TopBar({ title }: TopBarProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="glass-card border-b border-[var(--card-border)] px-8 py-4 flex items-center justify-between sticky top-0 z-40"
      style={{
        background: 'var(--glass-bg)',
        backdropFilter: 'blur(20px)',
      }}
    >
      <div>
        {title && (
          <motion.h1
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {title}
          </motion.h1>
        )}
      </div>
      
      <div className="flex items-center gap-3">
        {/* Search Bar */}
        <motion.div 
          className="relative group"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)] group-focus-within:text-[var(--primary)] transition-colors" />
          <input
            type="text"
            placeholder="Search anything..."
            className="relative pl-11 pr-4 py-2.5 rounded-2xl border border-[var(--card-border)] bg-[var(--glass-bg)] backdrop-blur-xl w-72 text-sm focus:outline-none focus:border-[var(--primary)] transition-all text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)]"
            style={{ backdropFilter: 'blur(10px)' }}
          />
        </motion.div>
        
        {/* AI Assistant Button */}
        <motion.button 
          className="relative px-4 py-2.5 rounded-2xl overflow-hidden group"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-10 group-hover:opacity-20 transition-opacity"></div>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] animate-pulse"></div>
          </div>
          <div className="relative flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[var(--primary)]" />
            <span className="text-sm gradient-text">AI Chat</span>
          </div>
        </motion.button>
        
        {/* Theme Toggle */}
        <motion.button 
          onClick={toggleTheme}
          className="relative p-2.5 rounded-2xl border border-[var(--card-border)] hover:border-[var(--primary)] transition-all group overflow-hidden"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ background: 'var(--glass-bg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-0 group-hover:opacity-10 transition-opacity"></div>
          <AnimatePresence mode="wait">
            {theme === 'light' ? (
              <motion.div
                key="sun"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Sun className="w-5 h-5 text-[var(--warning)]" />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Moon className="w-5 h-5 text-[var(--primary)]" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
        
        {/* Notifications */}
        <motion.button 
          className="relative p-2.5 rounded-2xl border border-[var(--card-border)] hover:border-[var(--primary)] transition-all group"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ background: 'var(--glass-bg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl"></div>
          <Bell className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--primary)] transition-colors relative z-10" />
          <motion.span 
            className="absolute top-1 right-1 w-2 h-2 bg-[var(--danger)] rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.button>
        
        {/* User Profile */}
        <motion.button 
          className="relative flex items-center gap-3 p-1.5 pr-4 rounded-2xl border border-[var(--card-border)] hover:border-[var(--primary)] transition-all group"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ background: 'var(--glass-bg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl"></div>
          <div className="w-8 h-8 rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="text-left relative z-10">
            <p className="text-sm text-[var(--text-primary)]">Admin</p>
          </div>
        </motion.button>
      </div>
    </motion.header>
  );
}
