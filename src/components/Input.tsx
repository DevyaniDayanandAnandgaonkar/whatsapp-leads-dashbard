import { InputHTMLAttributes, forwardRef } from 'react';
import { motion } from 'motion/react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <motion.label 
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="block text-sm text-[var(--text-secondary)] mb-2"
          >
            {label}
          </motion.label>
        )}
        <div className="relative group">
          {icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)] group-focus-within:text-[var(--primary)] transition-colors">
              {icon}
            </div>
          )}
          <motion.input
            ref={ref}
            whileFocus={{ scale: 1.01 }}
            className={`
              w-full px-4 py-3 rounded-2xl
              bg-[var(--glass-bg)] backdrop-blur-xl
              border border-[var(--card-border)]
              text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)]
              focus:outline-none focus:border-[var(--primary)]
              transition-all duration-300
              ${icon ? 'pl-11' : ''}
              ${error ? 'border-[var(--danger)]' : ''}
              ${className}
            `}
            {...props}
          />
          {/* Glow effect on focus */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none"
            style={{
              boxShadow: '0 0 20px var(--primary-glow)',
            }}
          />
        </div>
        {error && (
          <motion.p 
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-xs text-[var(--danger)] mt-2"
          >
            {error}
          </motion.p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
