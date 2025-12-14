import { NavLink } from 'react-router';
import { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';

interface SidebarItem {
  icon: LucideIcon;
  label: string;
  path: string;
}

interface SidebarProps {
  items: SidebarItem[];
  logo: string;
}

export function Sidebar({ items, logo }: SidebarProps) {
  return (
    <motion.aside 
      initial={{ x: -280 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-72 h-screen fixed left-0 top-0 flex flex-col glass-card border-r border-[var(--card-border)] backdrop-blur-xl"
      style={{
        background: 'var(--glass-bg)',
        backdropFilter: 'blur(20px)',
      }}
    >
      {/* Logo Section */}
      <div className="p-6 border-b border-[var(--card-border)] relative">
        <div className="flex items-center gap-3">
          <motion.img 
            src={`figma:asset/a5e768e42746e02408d1161a68bd26dd5706ba38.png`}
            alt="WhatsLead Logo"
            className="h-10 w-auto"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <motion.h2 
            className="gradient-text text-2xl tracking-tight"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {logo}
          </motion.h2>
        </div>
        
        {/* Decorative Glow */}
        <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-50"></div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-1">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path.split('/').length === 2}
                className={({ isActive }) => `
                  relative flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-300 group overflow-hidden
                  ${isActive 
                    ? 'text-white' 
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }
                `}
              >
                {({ isActive }) => (
                  <>
                    {/* Active Background with Gradient */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 rounded-2xl"
                        style={{
                          background: 'var(--gradient-primary)',
                          boxShadow: '0 8px 24px var(--primary-glow)'
                        }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    
                    {/* Hover Background */}
                    {!isActive && (
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    )}
                    
                    {/* Icon */}
                    <motion.div
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="relative z-10"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>
                    
                    {/* Label */}
                    <motion.span 
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 + 0.05 }}
                      className="text-sm relative z-10"
                    >
                      {item.label}
                    </motion.span>
                    
                    {/* Glow Effect on Active */}
                    {isActive && (
                      <motion.div
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-l-full bg-white opacity-80"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 0.8, x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </div>
      </nav>

      {/* Bottom Decorative Element */}
      <div className="p-6 border-t border-[var(--card-border)]">
        <div className="relative overflow-hidden rounded-2xl p-4" style={{ background: 'var(--gradient-card)' }}>
          <div className="relative z-10">
            <p className="text-xs text-[var(--text-tertiary)] mb-1">AI Powered by</p>
            <p className="gradient-text">WhatsLead Engine</p>
          </div>
          <div className="absolute top-0 right-0 w-20 h-20 bg-[var(--primary)] opacity-10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-[var(--secondary)] opacity-10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </motion.aside>
  );
}
