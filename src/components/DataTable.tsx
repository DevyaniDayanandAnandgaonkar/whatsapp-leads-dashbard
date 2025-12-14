import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface Column {
  header: string;
  accessor: string;
  render?: (value: any, row: any) => ReactNode;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  className?: string;
}

export function DataTable({ columns, data, className = '' }: DataTableProps) {
  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`glass-card overflow-hidden ${className}`}
    >
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="relative">
            <tr className="border-b border-[var(--card-border)]">
              {columns.map((column, index) => (
                <th
                  key={column.accessor}
                  className="px-6 py-4 text-left text-xs text-[var(--text-tertiary)] uppercase tracking-wider backdrop-blur-xl relative"
                >
                  <motion.div
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {column.header}
                  </motion.div>
                </th>
              ))}
            </tr>
            {/* Gradient underline for header */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-50" />
          </thead>
          <tbody className="divide-y divide-[var(--card-border)]">
            {data.map((row, rowIndex) => (
              <motion.tr
                key={rowIndex}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: rowIndex * 0.05 }}
                className="group hover:bg-gradient-to-r hover:from-[var(--primary)]/5 hover:to-[var(--secondary)]/5 transition-all duration-300 cursor-pointer relative"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/0 via-[var(--primary)]/5 to-[var(--secondary)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {columns.map((column, colIndex) => (
                  <td 
                    key={column.accessor} 
                    className="px-6 py-4 text-sm text-[var(--text-primary)] relative z-10"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: rowIndex * 0.05 + colIndex * 0.02 }}
                    >
                      {column.render
                        ? column.render(row[column.accessor], row)
                        : row[column.accessor]}
                    </motion.div>
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Empty State */}
      {data.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-[var(--text-tertiary)]">No data available</p>
        </motion.div>
      )}
    </motion.div>
  );
}
