import { StatCard } from '../../components/StatCard';
import { DataTable } from '../../components/DataTable';
import { Button } from '../../components/Button';
import { DollarSign, ShoppingCart, Users, TrendingUp, Crown, ArrowRight, Zap } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { motion } from 'motion/react';

const salesData = [
  { month: 'Jan', orders: 45 },
  { month: 'Feb', orders: 52 },
  { month: 'Mar', orders: 48 },
  { month: 'Apr', orders: 61 },
  { month: 'May', orders: 55 },
  { month: 'Jun', orders: 67 },
];

const categoryData = [
  { name: 'Electronics', value: 35 },
  { name: 'Fashion', value: 25 },
  { name: 'Home & Garden', value: 20 },
  { name: 'Food', value: 15 },
  { name: 'Other', value: 5 },
];

const COLORS = ['#00D1FF', '#7A5CFF', '#10B981', '#F59E0B', '#EF4444'];

const recentOrders = [
  { id: '#1234', customer: 'Rahul Sharma', items: '2 items', total: '₹2,499', status: 'Delivered', date: '12 Dec 2025' },
  { id: '#1235', customer: 'Priya Patel', items: '1 item', total: '₹999', status: 'Shipped', date: '12 Dec 2025' },
  { id: '#1236', customer: 'Amit Kumar', items: '3 items', total: '₹4,299', status: 'Confirmed', date: '11 Dec 2025' },
  { id: '#1237', customer: 'Sneha Reddy', items: '1 item', total: '₹1,599', status: 'Pending', date: '11 Dec 2025' },
  { id: '#1238', customer: 'Vikram Singh', items: '2 items', total: '₹3,199', status: 'Confirmed', date: '10 Dec 2025' },
];

const columns = [
  { header: 'Order ID', accessor: 'id' },
  { header: 'Customer', accessor: 'customer' },
  { header: 'Items', accessor: 'items' },
  { header: 'Total', accessor: 'total' },
  { 
    header: 'Status', 
    accessor: 'status',
    render: (status: string) => (
      <span className={`px-3 py-1.5 rounded-xl text-xs backdrop-blur-xl border ${
        status === 'Delivered' ? 'bg-[var(--success)]/10 text-[var(--success)] border-[var(--success)]/20' :
        status === 'Shipped' ? 'bg-[var(--primary)]/10 text-[var(--primary)] border-[var(--primary)]/20' :
        status === 'Confirmed' ? 'bg-[var(--warning)]/10 text-[var(--warning)] border-[var(--warning)]/20' :
        'bg-[var(--text-tertiary)]/10 text-[var(--text-secondary)] border-[var(--text-tertiary)]/20'
      }`}>
        {status}
      </span>
    )
  },
  { header: 'Date', accessor: 'date' },
];

export function BusinessDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="gradient-text">Dashboard Overview</h1>
        <p className="text-[var(--text-secondary)] mt-2">Welcome back! Here's what's happening today.</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Today's Sales"
          value="₹12,450"
          icon={DollarSign}
          trend={{ value: '12% from yesterday', isPositive: true }}
          color="var(--primary)"
          delay={0.1}
        />
        <StatCard
          title="Monthly Sales"
          value="₹3,24,500"
          icon={TrendingUp}
          trend={{ value: '8% from last month', isPositive: true }}
          color="var(--success)"
          delay={0.2}
        />
        <StatCard
          title="Total Orders"
          value="234"
          icon={ShoppingCart}
          trend={{ value: '23 new today', isPositive: true }}
          color="var(--warning)"
          delay={0.3}
        />
        <StatCard
          title="Total Leads"
          value="156"
          icon={Users}
          trend={{ value: '15 new this week', isPositive: true }}
          color="var(--secondary)"
          delay={0.4}
        />
      </div>

      {/* Plan Status Card */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="relative overflow-hidden rounded-3xl p-8 group cursor-pointer"
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
            <div className="flex items-center gap-3 mb-3">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Crown className="w-7 h-7 text-white" />
              </motion.div>
              <h3 className="text-white text-2xl">Current Plan: Professional</h3>
            </div>
            <p className="text-white/80 mb-2">Your plan expires on 31st December 2025</p>
            <div className="flex items-center gap-2">
              <div className="w-48 h-2 bg-white/20 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-white rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '24.7%' }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
              </div>
              <span className="text-white/80 text-sm">1,234 / 5,000 products</span>
            </div>
          </div>
          <Button variant="secondary" size="lg" icon={<Zap className="w-4 h-4" />}>
            Upgrade Plan
          </Button>
        </div>
      </motion.div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="glass-card p-6 group hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="flex items-center justify-between mb-6">
            <h4 className="gradient-text">Orders Trend</h4>
            <div className="px-3 py-1 rounded-xl bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10 border border-[var(--primary)]/20">
              <span className="text-xs text-[var(--primary)]">Last 6 Months</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={salesData}>
              <defs>
                <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--card-border)" />
              <XAxis 
                dataKey="month" 
                stroke="var(--text-tertiary)" 
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="var(--text-tertiary)" 
                style={{ fontSize: '12px' }}
              />
              <Tooltip 
                contentStyle={{
                  background: 'var(--glass-bg)',
                  border: '1px solid var(--card-border)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(20px)'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="orders" 
                stroke="var(--primary)" 
                strokeWidth={3}
                dot={{ fill: 'var(--primary)', strokeWidth: 2, r: 5 }}
                activeDot={{ r: 7 }}
                fill="url(#colorOrders)"
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Pie Chart */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="glass-card p-6 group hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="flex items-center justify-between mb-6">
            <h4 className="gradient-text">Top Selling Categories</h4>
            <div className="px-3 py-1 rounded-xl bg-gradient-to-r from-[var(--secondary)]/10 to-[var(--primary)]/10 border border-[var(--secondary)]/20">
              <span className="text-xs text-[var(--secondary)]">This Month</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={90}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  background: 'var(--glass-bg)',
                  border: '1px solid var(--card-border)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(20px)'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Recent Orders Table */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="gradient-text">Recent Orders</h3>
            <p className="text-[var(--text-secondary)] text-sm mt-1">Track and manage your latest orders</p>
          </div>
          <Button variant="secondary" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
            View All Orders
          </Button>
        </div>
        <DataTable columns={columns} data={recentOrders} />
      </motion.div>
    </div>
  );
}
