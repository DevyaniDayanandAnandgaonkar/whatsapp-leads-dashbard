import { DataTable } from '../../components/DataTable';
import { Button } from '../../components/Button';
import { CreditCard, Download, Crown, Check, TrendingUp, DollarSign, Calendar, Zap } from 'lucide-react';
import { motion } from 'motion/react';

const transactions = [
  { 
    id: 'TXN001', 
    date: '12 Dec 2025',
    description: 'Order Payment #1234',
    amount: '₹2,999',
    status: 'Success',
    method: 'UPI'
  },
  { 
    id: 'TXN002', 
    date: '12 Dec 2025',
    description: 'Order Payment #1235',
    amount: '₹599',
    status: 'Success',
    method: 'Card'
  },
  { 
    id: 'TXN003', 
    date: '11 Dec 2025',
    description: 'Plan Renewal - Professional',
    amount: '₹4,999',
    status: 'Success',
    method: 'UPI'
  },
  { 
    id: 'TXN004', 
    date: '11 Dec 2025',
    description: 'Order Payment #1236',
    amount: '₹5,299',
    status: 'Pending',
    method: 'Net Banking'
  },
  { 
    id: 'TXN005', 
    date: '10 Dec 2025',
    description: 'Order Payment #1237',
    amount: '₹899',
    status: 'Failed',
    method: 'Card'
  },
];

const plans = [
  {
    name: 'Starter',
    price: '₹999',
    period: '/month',
    features: [
      'Up to 500 products',
      '1,000 orders/month',
      'Basic AI chatbot',
      'Email support',
      '5 GB storage'
    ],
    current: false,
    color: 'var(--text-secondary)'
  },
  {
    name: 'Professional',
    price: '₹2,499',
    period: '/month',
    features: [
      'Up to 5,000 products',
      'Unlimited orders',
      'Advanced AI chatbot',
      'Priority support',
      '50 GB storage',
      'Custom branding'
    ],
    current: true,
    color: 'var(--primary)'
  },
  {
    name: 'Enterprise',
    price: '₹9,999',
    period: '/month',
    features: [
      'Unlimited products',
      'Unlimited orders',
      'Custom AI training',
      '24/7 dedicated support',
      'Unlimited storage',
      'API access',
      'Multi-user accounts'
    ],
    current: false,
    color: 'var(--secondary)'
  },
];

export function BusinessPayments() {
  const columns = [
    { header: 'Transaction ID', accessor: 'id' },
    { header: 'Date', accessor: 'date' },
    { header: 'Description', accessor: 'description' },
    { 
      header: 'Amount', 
      accessor: 'amount',
      render: (amount: string) => (
        <span className="gradient-text">{amount}</span>
      )
    },
    { 
      header: 'Status', 
      accessor: 'status',
      render: (status: string) => (
        <span className={`px-3 py-1.5 rounded-xl text-xs backdrop-blur-xl border ${
          status === 'Success' ? 'bg-[var(--success)]/10 text-[var(--success)] border-[var(--success)]/20' :
          status === 'Pending' ? 'bg-[var(--warning)]/10 text-[var(--warning)] border-[var(--warning)]/20' :
          'bg-[var(--danger)]/10 text-[var(--danger)] border-[var(--danger)]/20'
        }`}>
          {status}
        </span>
      )
    },
    { header: 'Method', accessor: 'method' },
    { 
      header: 'Invoice', 
      accessor: 'id',
      render: () => (
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-[var(--primary)] text-sm flex items-center gap-1 hover:underline"
        >
          <Download className="w-4 h-4" />
          Download
        </motion.button>
      )
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1 className="gradient-text">Billing & Payments</h1>
        <p className="text-[var(--text-secondary)] mt-2">Manage your subscription and payment history</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6 relative overflow-hidden group cursor-pointer"
          whileHover={{ y: -5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--success)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-start justify-between relative z-10">
            <div>
              <p className="text-[var(--text-tertiary)] text-sm mb-2">Total Revenue</p>
              <h3 className="text-3xl text-[var(--success)]">₹3.2L</h3>
              <p className="text-xs text-[var(--text-tertiary)] mt-1">This month</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--success)]/20 to-[var(--success)]/10 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-[var(--success)]" />
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
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-start justify-between relative z-10">
            <div>
              <p className="text-[var(--text-tertiary)] text-sm mb-2">Next Billing</p>
              <h3 className="text-3xl text-[var(--primary)]">₹2,499</h3>
              <p className="text-xs text-[var(--text-tertiary)] mt-1">31 Dec 2025</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--primary)]/20 to-[var(--primary)]/10 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-[var(--primary)]" />
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
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-start justify-between relative z-10">
            <div>
              <p className="text-[var(--text-tertiary)] text-sm mb-2">Success Rate</p>
              <h3 className="text-3xl gradient-text">98.5%</h3>
              <p className="text-xs text-[var(--text-tertiary)] mt-1">Last 30 days</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--secondary)]/20 to-[var(--secondary)]/10 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-[var(--secondary)]" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Current Plan */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative overflow-hidden rounded-3xl p-8 group"
        whileHover={{ scale: 1.01 }}
        style={{
          background: 'var(--gradient-primary)',
          boxShadow: '0 20px 60px var(--primary-glow)'
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>

        <div className="flex items-start justify-between relative z-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Crown className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-white text-2xl">Current Plan: Professional</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 text-white/90">
              <div>
                <p className="text-sm text-white/70 mb-1">Next billing date</p>
                <p className="text-lg">31st December 2025</p>
              </div>
              <div>
                <p className="text-sm text-white/70 mb-1">Monthly cost</p>
                <p className="text-lg">₹2,499</p>
              </div>
              <div>
                <p className="text-sm text-white/70 mb-1">Products used</p>
                <p className="text-lg">1,234 / 5,000</p>
              </div>
              <div>
                <p className="text-sm text-white/70 mb-1">Storage used</p>
                <p className="text-lg">12 GB / 50 GB</p>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary" size="lg">
              Manage Plan
            </Button>
            <Button variant="secondary" size="lg" icon={<CreditCard className="w-4 h-4" />}>
              Payment Method
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Subscription Plans */}
      <div>
        <motion.h3 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="gradient-text mb-6"
        >
          Available Plans
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div 
              key={plan.name}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className={`glass-card p-8 relative overflow-hidden group cursor-pointer ${
                plan.current ? 'border-2 border-[var(--primary)]' : ''
              }`}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {plan.current && (
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-6 right-6 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white text-xs px-4 py-2 rounded-xl shadow-lg"
                >
                  <Zap className="w-3 h-3 inline mr-1" />
                  Current Plan
                </motion.div>
              )}

              <div className="relative z-10">
                <h4 className="text-[var(--text-primary)] mb-2">{plan.name}</h4>
                <div className="mb-6">
                  <span className="text-4xl gradient-text">{plan.price}</span>
                  <span className="text-[var(--text-tertiary)]">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.7 + index * 0.1 + idx * 0.05 }}
                      className="flex items-start gap-3 text-sm text-[var(--text-primary)]"
                    >
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[var(--success)] to-[var(--success)]/70 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <Button 
                  variant={plan.current ? 'secondary' : 'primary'}
                  className="w-full"
                >
                  {plan.current ? 'Current Plan' : 'Upgrade'}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Payment History */}
      <div>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex items-center justify-between mb-6"
        >
          <div>
            <h3 className="gradient-text">Payment History</h3>
            <p className="text-[var(--text-secondary)] text-sm mt-1">View and download your transaction history</p>
          </div>
          <Button variant="secondary" size="sm" icon={<Download className="w-4 h-4" />}>
            Export All
          </Button>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <DataTable columns={columns} data={transactions} />
        </motion.div>
      </div>
    </div>
  );
}
