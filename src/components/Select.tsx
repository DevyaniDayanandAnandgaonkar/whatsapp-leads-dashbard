import { SelectHTMLAttributes, forwardRef } from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className = '', ...props }, ref) => {
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
          <motion.select
            ref={ref}
            whileFocus={{ scale: 1.01 }}
            className={`
              w-full px-4 py-3 rounded-2xl
              bg-[var(--glass-bg)] backdrop-blur-xl
              border border-[var(--card-border)]
              text-[var(--text-primary)]
              focus:outline-none focus:border-[var(--primary)]
              transition-all duration-300
              appearance-none cursor-pointer
              ${error ? 'border-[var(--danger)]' : ''}
              ${className}
            `}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </motion.select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-tertiary)] pointer-events-none" />
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

Select.displayName = 'Select';
