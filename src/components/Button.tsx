import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  icon?: ReactNode;
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  className = '',
  disabled = false,
  icon
}: ButtonProps) {
  const baseStyles = 'rounded-2xl transition-all duration-300 font-medium focus:outline-none relative overflow-hidden group';
  
  const variants = {
    primary: 'text-white shadow-lg shadow-[var(--primary-glow)]',
    secondary: 'border border-[var(--card-border)] text-[var(--text-primary)] backdrop-blur-xl',
    danger: 'text-white shadow-lg shadow-[var(--danger-glow)]',
    success: 'text-white shadow-lg shadow-[var(--success-glow)]',
    ghost: 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3 text-base',
  };
  
  const getBackground = () => {
    switch(variant) {
      case 'primary':
        return 'var(--gradient-primary)';
      case 'secondary':
        return 'var(--glass-bg)';
      case 'danger':
        return 'linear-gradient(135deg, var(--danger) 0%, #DC2626 100%)';
      case 'success':
        return 'linear-gradient(135deg, var(--success) 0%, #059669 100%)';
      case 'ghost':
        return 'transparent';
      default:
        return 'var(--gradient-primary)';
    }
  };
  
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      style={{
        background: getBackground(),
      }}
    >
      {/* Gradient Background for primary/danger/success */}
      {variant !== 'secondary' && variant !== 'ghost' && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div 
            className="absolute inset-0" 
            style={{
              background: getBackground(),
              filter: 'brightness(1.2)',
            }}
          />
        </div>
      )}
      
      {/* Hover effect for secondary */}
      {variant === 'secondary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      )}
      
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {icon && <span>{icon}</span>}
        {children}
      </span>
    </motion.button>
  );
}
