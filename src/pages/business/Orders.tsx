import { useState } from 'react';
import { DataTable } from '../../components/DataTable';
import { Button } from '../../components/Button';
import { Filter, Download, ShoppingCart, Clock, CheckCircle, TrendingUp, Package } from 'lucide-react';
import { motion } from 'motion/react';

const orders = [
  { 
    id: '#1234', 
    customer: 'Rahul Sharma', 
    phone: '+91 98765 43210',
    items: 'Wireless Headphones, Phone Case',
    total: '₹2,999',
    payment: 'COD',
    status: 'Delivered',
    date: '12 Dec 2025'
  },
  { 
    id: '#1235', 
    customer: 'Priya Patel', 
    phone: '+91 98765 43211',
    items: 'Cotton T-Shirt',
    total: '₹599',
    payment: 'Online',
    status: 'Shipped',
    date: '12 Dec 2025'
  },
  { 
    id: '#1236', 
    customer: 'Amit Kumar', 
    phone: '+91 98765 43212',
    items: 'Smart Watch, Charging Cable',
    total: '₹5,299',
    payment: 'Online',
    status: 'Confirmed',
    date: '11 Dec 2025'
  },
  { 
    id: '#1237', 
    customer: 'Sneha Reddy', 
    phone: '+91 98765 43213',
    items: 'Yoga Mat',
    total: '₹899',
    payment: 'COD',
    status: 'Pending',
    date: '11 Dec 2025'
  },
  { 
    id: '#1238', 
    customer: 'Vikram Singh', 
    phone: '+91 98765 43214',
    items: 'Coffee Maker, Coffee Beans',
    total: '₹4,199',
    payment: 'Online',
    status: 'Confirmed',
    date: '10 Dec 2025'
  },
];

export function BusinessOrders() {
  const [selectedStatus, setSelectedStatus] = useState('all');

  const columns = [
    { header: 'Order ID', accessor: 'id' },
    { 
      header: 'Customer', 
      accessor: 'customer',
      render: (customer: string, row: any) => (
        <div>
          <div className="text-[var(--text-primary)]">{customer}</div>
          <div className="text-xs text-[var(--text-tertiary)]">{row.phone}</div>
        </div>
      )
    },
    { header: 'Items', accessor: 'items' },
    { 
      header: 'Total', 
      accessor: 'total',
      render: (total: string) => (
        <span className="gradient-text">{total}</span>
      )
    },
    { 
      header: 'Payment', 
      accessor: 'payment',
      render: (payment: string) => (
        <span className={`px-3 py-1.5 rounded-xl text-xs backdrop-blur-xl border ${
          payment === 'Online' 
            ? 'bg-[var(--success)]/10 text-[var(--success)] border-[var(--success)]/20' 
            : 'bg-[var(--warning)]/10 text-[var(--warning)] border-[var(--warning)]/20'
        }`}>
          {payment}
        </span>
      )
    },
    { 
      header: 'Status', 
      accessor: 'status',
      render: (status: string) => (
        <select 
          className={`px-3 py-1.5 rounded-xl text-xs border cursor-pointer transition-all backdrop-blur-xl ${
            status === 'Delivered' ? 'bg-[var(--success)]/10 text-[var(--success)] border-[var(--success)]/20' :
            status === 'Shipped' ? 'bg-[var(--primary)]/10 text-[var(--primary)] border-[var(--primary)]/20' :
            status === 'Confirmed' ? 'bg-[var(--warning)]/10 text-[var(--warning)] border-[var(--warning)]/20' :
            'bg-[var(--text-tertiary)]/10 text-[var(--text-secondary)] border-[var(--text-tertiary)]/20'
          }`}
          value={status}
        >
          <option value="Pending">Pending</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
        </select>
      )
    },
    { header: 'Date', accessor: 'date' },
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
          <h1 className="gradient-text">Order Management</h1>
          <p className="text-[var(--text-secondary)] mt-2">Track and manage all your orders in real-time</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" icon={<Filter className="w-4 h-4" />}>
            Filters
          </Button>
          <Button variant="secondary" icon={<Download className="w-4 h-4" />}>
            Export CSV
          </Button>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6 relative overflow-hidden group cursor-pointer"
          whileHover={{ y: -5 }}
          onClick={() => setSelectedStatus('all')}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-start justify-between relative z-10">
            <div>
              <p className="text-[var(--text-tertiary)] text-sm mb-2">Total Orders</p>
              <h3 className="text-3xl gradient-text">234</h3>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--primary)]/20 to-[var(--primary)]/10 flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 text-[var(--primary)]" />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 relative overflow-hidden group cursor-pointer"
          whileHover={{ y: -5 }}
          onClick={() => setSelectedStatus('pending')}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--text-tertiary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-start justify-between relative z-10">
            <div>
              <p className="text-[var(--text-tertiary)] text-sm mb-2">Pending</p>
              <h3 className="text-3xl text-[var(--text-secondary)]">23</h3>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--text-tertiary)]/20 to-[var(--text-tertiary)]/10 flex items-center justify-center">
              <Clock className="w-6 h-6 text-[var(--text-secondary)]" />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-6 relative overflow-hidden group cursor-pointer"
          whileHover={{ y: -5 }}
          onClick={() => setSelectedStatus('confirmed')}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--warning)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-start justify-between relative z-10">
            <div>
              <p className="text-[var(--text-tertiary)] text-sm mb-2">Confirmed</p>
              <h3 className="text-3xl text-[var(--warning)]">45</h3>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--warning)]/20 to-[var(--warning)]/10 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-[var(--warning)]" />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-6 relative overflow-hidden group cursor-pointer"
          whileHover={{ y: -5 }}
          onClick={() => setSelectedStatus('shipped')}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-start justify-between relative z-10">
            <div>
              <p className="text-[var(--text-tertiary)] text-sm mb-2">Shipped</p>
              <h3 className="text-3xl text-[var(--primary)]">32</h3>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--primary)]/20 to-[var(--primary)]/10 flex items-center justify-center">
              <Package className="w-6 h-6 text-[var(--primary)]" />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="glass-card p-6 relative overflow-hidden group cursor-pointer"
          whileHover={{ y: -5 }}
          onClick={() => setSelectedStatus('delivered')}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--success)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-start justify-between relative z-10">
            <div>
              <p className="text-[var(--text-tertiary)] text-sm mb-2">Delivered</p>
              <h3 className="text-3xl text-[var(--success)]">134</h3>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--success)]/20 to-[var(--success)]/10 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-[var(--success)]" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Status Tabs */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="glass-card p-2 w-fit rounded-2xl"
      >
        <div className="flex gap-2">
          {['All', 'Pending', 'Confirmed', 'Shipped', 'Delivered'].map((status) => (
            <motion.button
              key={status}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl text-sm transition-all relative overflow-hidden ${
                selectedStatus === status.toLowerCase() 
                  ? 'text-white' 
                  : 'text-[var(--text-secondary)] hover:bg-[var(--background-secondary)]'
              }`}
              onClick={() => setSelectedStatus(status.toLowerCase())}
            >
              {selectedStatus === status.toLowerCase() && (
                <motion.div
                  layoutId="statusTab"
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

      {/* Orders Table */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <DataTable columns={columns} data={orders} />
      </motion.div>
    </div>
  );
}