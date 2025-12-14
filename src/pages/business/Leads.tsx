import { useState } from 'react';
import { Button } from '../../components/Button';
import { Search, Send, ShoppingCart, User, Phone, MessageSquare, TrendingUp, Clock } from 'lucide-react';
import { motion } from 'motion/react';

const customers = [
  { 
    id: 1, 
    name: 'Rajesh Mehta', 
    phone: '+91 98765 43210',
    lastMessage: 'Do you have this in blue color?',
    time: '2 min ago',
    unread: 2,
    status: 'active'
  },
  { 
    id: 2, 
    name: 'Anjali Verma', 
    phone: '+91 98765 43211',
    lastMessage: 'What is the delivery time?',
    time: '15 min ago',
    unread: 0,
    status: 'active'
  },
  { 
    id: 3, 
    name: 'Suresh Nair', 
    phone: '+91 98765 43212',
    lastMessage: 'Can I get a discount on bulk order?',
    time: '1 hour ago',
    unread: 1,
    status: 'active'
  },
  { 
    id: 4, 
    name: 'Kavita Joshi', 
    phone: '+91 98765 43213',
    lastMessage: 'Thank you for the quick delivery!',
    time: '2 hours ago',
    unread: 0,
    status: 'resolved'
  },
];

const messages = [
  { sender: 'customer', text: 'Hi, I saw your wireless headphones', time: '10:30 AM' },
  { sender: 'customer', text: 'Do you have this in blue color?', time: '10:31 AM' },
  { sender: 'business', text: 'Yes! We have it in Black, White, and Blue', time: '10:32 AM' },
  { sender: 'business', text: 'The blue variant is currently in stock', time: '10:32 AM' },
  { sender: 'customer', text: 'Great! What is the price?', time: '10:33 AM' },
  { sender: 'business', text: '₹2,499 with free delivery', time: '10:34 AM' },
];

export function BusinessLeads() {
  const [selectedCustomer, setSelectedCustomer] = useState(customers[0]);
  const [message, setMessage] = useState('');

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1 className="gradient-text">Leads / Chat CRM</h1>
        <p className="text-[var(--text-secondary)] mt-2">Manage customer conversations and convert leads with AI-powered insights</p>
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
              <p className="text-[var(--text-tertiary)] text-sm mb-2">Total Leads</p>
              <h3 className="text-3xl gradient-text">156</h3>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--primary)]/20 to-[var(--primary)]/10 flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-[var(--primary)]" />
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
              <p className="text-[var(--text-tertiary)] text-sm mb-2">Active Chats</p>
              <h3 className="text-3xl text-[var(--success)]">23</h3>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--success)]/20 to-[var(--success)]/10 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-[var(--success)]" />
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
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--warning)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-start justify-between relative z-10">
            <div>
              <p className="text-[var(--text-tertiary)] text-sm mb-2">Avg Response</p>
              <h3 className="text-3xl text-[var(--warning)]">2.5m</h3>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--warning)]/20 to-[var(--warning)]/10 flex items-center justify-center">
              <Clock className="w-6 h-6 text-[var(--warning)]" />
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
              <p className="text-[var(--text-tertiary)] text-sm mb-2">Conversion Rate</p>
              <h3 className="text-3xl gradient-text">68%</h3>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--secondary)]/20 to-[var(--secondary)]/10 flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 text-[var(--secondary)]" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-12 gap-6 h-[calc(100vh-420px)]">
        {/* Customer List */}
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="col-span-3 glass-card overflow-hidden flex flex-col"
        >
          <div className="p-4 border-b border-[var(--card-border)]">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]" />
              <input
                type="text"
                placeholder="Search customers..."
                className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[var(--card-border)] text-sm focus:outline-none focus:border-[var(--primary)] bg-[var(--background)] text-[var(--text-primary)] transition-all"
              />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {customers.map((customer, index) => (
              <motion.div
                key={customer.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.05 }}
                onClick={() => setSelectedCustomer(customer)}
                className={`p-4 border-b border-[var(--card-border)] cursor-pointer transition-all relative overflow-hidden group ${
                  selectedCustomer.id === customer.id ? 'bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10' : 'hover:bg-[var(--background-secondary)]'
                }`}
              >
                {selectedCustomer.id === customer.id && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--primary)] to-[var(--secondary)]"></div>
                )}
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center relative overflow-hidden">
                      <User className="w-5 h-5 text-white relative z-10" />
                      <div className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-colors"></div>
                    </div>
                    <div>
                      <h4 className="text-sm text-[var(--text-primary)]">{customer.name}</h4>
                      <div className="flex items-center gap-1 text-xs text-[var(--text-tertiary)] mt-0.5">
                        <Phone className="w-3 h-3" />
                        {customer.phone}
                      </div>
                    </div>
                  </div>
                  {customer.unread > 0 && (
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white text-xs rounded-xl w-6 h-6 flex items-center justify-center shadow-lg"
                    >
                      {customer.unread}
                    </motion.span>
                  )}
                </div>
                <p className="text-xs text-[var(--text-secondary)] truncate mb-1 ml-14">{customer.lastMessage}</p>
                <p className="text-xs text-[var(--text-tertiary)] ml-14">{customer.time}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Chat Window */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="col-span-6 glass-card flex flex-col"
        >
          <div className="p-5 border-b border-[var(--card-border)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center relative">
                  <User className="w-6 h-6 text-white" />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[var(--success)] rounded-full border-2 border-[var(--glass-bg)]"></div>
                </div>
                <div>
                  <h4 className="text-[var(--text-primary)]">{selectedCustomer.name}</h4>
                  <p className="text-xs text-[var(--text-tertiary)] flex items-center gap-1">
                    <Phone className="w-3 h-3" />
                    {selectedCustomer.phone}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-sm"
                >
                  {selectedCustomer.status}
                </motion.button>
              </div>
            </div>
          </div>

          <div className="flex-1 p-6 overflow-y-auto" style={{ background: 'var(--background)' }}>
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.05 }}
                className={`mb-4 flex ${msg.sender === 'business' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] rounded-2xl p-4 backdrop-blur-xl relative overflow-hidden ${
                    msg.sender === 'business'
                      ? 'bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white shadow-lg'
                      : 'glass-card'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <p className={`text-xs mt-2 ${
                    msg.sender === 'business' ? 'text-white/70' : 'text-[var(--text-tertiary)]'
                  }`}>
                    {msg.time}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="p-5 border-t border-[var(--card-border)]">
            <div className="flex gap-3">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-5 py-3 rounded-2xl border border-[var(--card-border)] focus:outline-none focus:border-[var(--primary)] bg-[var(--background)] text-[var(--text-primary)] transition-all"
              />
              <Button icon={<Send className="w-4 h-4" />}>
                Send
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Customer Details */}
        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="col-span-3 glass-card p-6"
        >
          <h4 className="gradient-text mb-6">Customer Details</h4>
          
          <div className="space-y-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center mx-auto relative overflow-hidden group">
                <User className="w-12 h-12 text-white relative z-10" />
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>

            <div className="text-center">
              <h4 className="text-[var(--text-primary)]">{selectedCustomer.name}</h4>
              <p className="text-sm text-[var(--text-secondary)] mt-1">{selectedCustomer.phone}</p>
            </div>

            <div className="border-t border-[var(--card-border)] pt-6">
              <p className="text-xs text-[var(--text-tertiary)] mb-3 tracking-wide">CONVERSATION STATUS</p>
              <select className="w-full px-4 py-3 rounded-2xl border border-[var(--card-border)] text-sm bg-[var(--background)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] transition-all cursor-pointer">
                <option>Active</option>
                <option>Interested</option>
                <option>Converted</option>
                <option>Not Interested</option>
              </select>
            </div>

            <div>
              <p className="text-xs text-[var(--text-tertiary)] mb-3 tracking-wide">NOTES</p>
              <textarea
                className="w-full px-4 py-3 rounded-2xl border border-[var(--card-border)] text-sm resize-none focus:outline-none focus:border-[var(--primary)] bg-[var(--background)] text-[var(--text-primary)] transition-all"
                rows={4}
                placeholder="Add notes about this customer..."
              />
            </div>

            <div className="space-y-3">
              <h4 className="text-sm text-[var(--text-primary)]">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="glass-card p-4 rounded-2xl">
                  <p className="text-xs text-[var(--text-tertiary)] mb-1">Total Orders</p>
                  <p className="text-xl gradient-text">3</p>
                </div>
                <div className="glass-card p-4 rounded-2xl">
                  <p className="text-xs text-[var(--text-tertiary)] mb-1">Total Spent</p>
                  <p className="text-xl text-[var(--success)]">₹8,297</p>
                </div>
              </div>
            </div>

            <Button className="w-full" icon={<ShoppingCart className="w-4 h-4" />}>
              Convert to Order
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}