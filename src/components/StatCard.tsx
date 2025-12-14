import { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  color?: string;
  delay?: number;
}

export function StatCard({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  color = 'var(--primary)',
  delay = 0 
}: StatCardProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="glass-card p-6 relative overflow-hidden group cursor-pointer"
    >
      {/* Background Gradient Glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at top right, ${color}15, transparent 70%)`
        }}
      />
      
      {/* Top Gradient Line */}
      <div 
        className="absolute top-0 left-0 right-0 h-1 opacity-60"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`
        }}
      />
      
      <div className="flex items-start justify-between relative z-10">
        <div className="flex-1">
          <p className="text-[var(--text-tertiary)] text-sm mb-3">{title}</p>
          <motion.h3 
            className="text-3xl mb-2 bg-gradient-to-br from-[var(--text-primary)] to-[var(--text-secondary)] bg-clip-text"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: delay + 0.2, type: "spring" }}
          >
            {value}
          </motion.h3>
          {trend && (
            <motion.div 
              className="flex items-center gap-1.5"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: delay + 0.3 }}
            >
              <div 
                className={`px-2 py-0.5 rounded-full text-xs flex items-center gap-1 ${
                  trend.isPositive 
                    ? 'bg-[var(--success)]/10 text-[var(--success)]' 
                    : 'bg-[var(--danger)]/10 text-[var(--danger)]'
                }`}
              >
                <span>{trend.isPositive ? '↑' : '↓'}</span>
                <span>{trend.value}</span>
              </div>
            </motion.div>
          )}
        </div>
        
        {/* Icon with Glow */}
        <motion.div
          className="relative"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: delay + 0.1, type: "spring", stiffness: 200 }}
          whileHover={{ rotate: 360, scale: 1.1 }}
        >
          {/* Glow Effect */}
          <div 
            className="absolute inset-0 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"
            style={{ background: color }}
          />
          
          {/* Icon Container */}
          <div 
            className="relative w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-xl border border-white/10"
            style={{ 
              background: `linear-gradient(135deg, ${color}20, ${color}10)`,
            }}
          >
            <Icon className="w-7 h-7" style={{ color }} />
          </div>
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
      <motion.div 
        className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-5"
        style={{ background: color }}
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Shimmer Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden rounded-[20px]">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 1 }}
        />
      </div>
    </motion.div>
  );
}
