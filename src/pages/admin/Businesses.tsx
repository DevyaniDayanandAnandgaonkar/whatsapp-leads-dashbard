import { DataTable } from '../../components/DataTable';
import { Button } from '../../components/Button';
import { Eye, Ban, Trash2, Filter, Building2, TrendingUp, Users, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';

const businesses = [
  {
    id: 'BIZ001',
    name: 'Fashion Hub',
    category: 'Fashion',
    owner: 'Rahul Mehta',
    phone: '+91 98765 43210',
    status: 'Active',
    plan: 'Professional',
    revenue: '₹45,000',
    joined: '15 Jan 2025'
  },
  {
    id: 'BIZ002',
    name: 'Tech Store',
    category: 'Electronics',
    owner: 'Priya Sharma',
    phone: '+91 98765 43211',
    status: 'Active',
    plan: 'Enterprise',
    revenue: '₹1,20,000',
    joined: '10 Feb 2025'
  },
  {
    id: 'BIZ003',
    name: 'Home Essentials',
    category: 'Home & Kitchen',
    owner: 'Amit Kumar',
    phone: '+91 98765 43212',
    status: 'Active',
    plan: 'Starter',
    revenue: '₹28,000',
    joined: '20 Feb 2025'
  },
  {
    id: 'BIZ004',
    name: 'Sports World',
    category: 'Sports',
    owner: 'Sneha Patel',
    phone: '+91 98765 43213',
    status: 'Suspended',
    plan: 'Professional',
    revenue: '₹0',
    joined: '5 Mar 2025'
  },
  {
    id: 'BIZ005',
    name: 'Food Delights',
    category: 'Food',
    owner: 'Vikram Singh',
    phone: '+91 98765 43214',
    status: 'Active',
    plan: 'Professional',
    revenue: '₹67,000',
    joined: '12 Mar 2025'
  },
];

export function AdminBusinesses() {
  const columns = [
    { header: 'Business ID', accessor: 'id' },
    { 
      header: 'Business Name', 
      accessor: 'name',
      render: (name: string, row: any) => (
        <div>
          <div className="text-[var(--text-primary)]">{name}</div>
          <div className="text-xs text-[var(--text-tertiary)]">{row.category}</div>
        </div>
      )
    },
    { 
      header: 'Owner', 
      accessor: 'owner',
      render: (owner: string, row: any) => (
        <div>
          <div className="text-sm text-[var(--text-primary)]">{owner}</div>
          <div className="text-xs text-[var(--text-tertiary)]">{row.phone}</div>
        </div>
      )
    },
    { 
      header: 'Status', 
      accessor: 'status',
      render: (status: string) => (
        <span className={`px-3 py-1.5 rounded-xl text-xs backdrop-blur-xl border ${
          status === 'Active' 
            ? 'bg-[var(--success)]/10 text-[var(--success)] border-[var(--success)]/20' 
            : 'bg-[var(--danger)]/10 text-[var(--danger)] border-[var(--danger)]/20'
        }`}>
          {status}
        </span>
      )
    },
    { 
      header: 'Plan', 
      accessor: 'plan',
      render: (plan: string) => (
        <span className={`px-3 py-1.5 rounded-xl text-xs backdrop-blur-xl border ${
          plan === 'Enterprise' 
            ? 'bg-[var(--secondary)]/10 text-[var(--secondary)] border-[var(--secondary)]/20' 
            : plan === 'Professional'
            ? 'bg-[var(--primary)]/10 text-[var(--primary)] border-[var(--primary)]/20'
            : 'bg-[var(--text-tertiary)]/10 text-[var(--text-secondary)] border-[var(--text-tertiary)]/20'
        }`}>
          {plan}
        </span>
      )
    },
    { 
      header: 'Monthly Revenue', 
      accessor: 'revenue',
      render: (revenue: string) => (
        <span className="gradient-text">{revenue}</span>
      )
    },
    { header: 'Joined', accessor: 'joined' },
    { 
      header: 'Actions', 
      accessor: 'id',
      render: (id: string, row: any) => (
        <div className="flex gap-2">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-xl hover:bg-[var(--primary)]/10 transition-all group" 
            title="View Details"
          >
            <Eye className="w-4 h-4 text-[var(--primary)] group-hover:scale-110 transition-transform" />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-xl hover:bg-[var(--warning)]/10 transition-all group" 
            title={row.status === 'Active' ? 'Suspend' : 'Activate'}
          >
            <Ban className="w-4 h-4 text-[var(--warning)] group-hover:scale-110 transition-transform" />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-xl hover:bg-[var(--danger)]/10 transition-all group" 
            title="Delete"
          >
            <Trash2 className="w-4 h-4 text-[var(--danger)] group-hover:scale-110 transition-transform" />
          </motion.button>
        </div>
      )
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div 
        className="flex items-center justify-between"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div>
          <h1 className="gradient-text">Business Management</h1>
          <p className="text-[var(--text-secondary)] mt-2">Manage and monitor all registered businesses on the platform</p>
        </div>
        <Button variant="secondary" icon={<Filter className="w-4 h-4" />}>
          Filters
        </Button>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6 relative overflow-hidden group cursor-pointer"
          whileHover={{ y: -5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-start justify-between relative z-10">
            <div>
              <p className="text-[var(--text-tertiary)] text-sm mb-2">Total Businesses</p>
              <h3 className="text-3xl gradient-text">1,234</h3>
              <p className="text-xs text-[var(--success)] mt-2 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                12% this month
              </p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--primary)]/20 to-[var(--primary)]/10 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-[var(--primary)]" />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 relative overflow-hidden group cursor-pointer"
          whileHover={{ y: -5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--success)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-start justify-between relative z-10">
            <div>
              <p className="text-[var(--text-tertiary)] text-sm mb-2">Active</p>
              <h3 className="text-3xl text-[var(--success)]">1,156</h3>
              <p className="text-xs text-[var(--text-tertiary)] mt-2">93.7% of total</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--success)]/20 to-[var(--success)]/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-[var(--success)]" />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-6 relative overflow-hidden group cursor-pointer"
          whileHover={{ y: -5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--danger)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-start justify-between relative z-10">
            <div>
              <p className="text-[var(--text-tertiary)] text-sm mb-2">Suspended</p>
              <h3 className="text-3xl text-[var(--danger)]">78</h3>
              <p className="text-xs text-[var(--text-tertiary)] mt-2">6.3% of total</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--danger)]/20 to-[var(--danger)]/10 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-[var(--danger)]" />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-6 relative overflow-hidden group cursor-pointer"
          whileHover={{ y: -5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-start justify-between relative z-10">
            <div>
              <p className="text-[var(--text-tertiary)] text-sm mb-2">New This Month</p>
              <h3 className="text-3xl gradient-text">145</h3>
              <p className="text-xs text-[var(--success)] mt-2 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                23 from last month
              </p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--secondary)]/20 to-[var(--secondary)]/10 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-[var(--secondary)]" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Status Tabs */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="glass-card p-2 w-fit rounded-2xl"
      >
        <div className="flex gap-2">
          {['All', 'Active', 'Suspended', 'New'].map((status, index) => (
            <motion.button
              key={status}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl text-sm transition-all relative overflow-hidden ${
                status === 'All'
                  ? 'text-white' 
                  : 'text-[var(--text-secondary)] hover:bg-[var(--background-secondary)]'
              }`}
            >
              {status === 'All' && (
                <motion.div
                  layoutId="businessTab"
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: 'var(--gradient-primary)',
                  }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{status}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Businesses Table */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <DataTable columns={columns} data={businesses} />
      </motion.div>
    </div>
  );
}
