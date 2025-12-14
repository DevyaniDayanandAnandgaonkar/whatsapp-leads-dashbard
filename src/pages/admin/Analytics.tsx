import { StatCard } from '../../components/StatCard';
import { Building2, ShoppingCart, DollarSign, Bot } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 2800000 },
  { month: 'Feb', revenue: 3100000 },
  { month: 'Mar', revenue: 2900000 },
  { month: 'Apr', revenue: 3400000 },
  { month: 'May', revenue: 3200000 },
  { month: 'Jun', revenue: 3560000 },
];

const businessData = [
  { category: 'Electronics', count: 234 },
  { category: 'Fashion', count: 345 },
  { category: 'Home & Kitchen', count: 189 },
  { category: 'Food', count: 156 },
  { category: 'Sports', count: 98 },
  { category: 'Other', count: 212 },
];

const ordersPerBusiness = [
  { range: '0-50', count: 234 },
  { range: '51-100', count: 456 },
  { range: '101-500', count: 345 },
  { range: '501-1000', count: 123 },
  { range: '1000+', count: 76 },
];

const aiMetrics = [
  { metric: 'Product Inquiry', success: 94 },
  { metric: 'Price Check', success: 98 },
  { metric: 'Order Status', success: 96 },
  { metric: 'Support', success: 87 },
  { metric: 'General', success: 92 },
];

export function AdminAnalytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1>Admin Analytics</h1>
        <p className="text-[var(--text-secondary)] mt-1">Platform-wide insights and metrics</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="Total Businesses"
          value="1,234"
          icon={Building2}
          trend={{ value: '12% this month', isPositive: true }}
          color="var(--primary)"
        />
        <StatCard
          title="Total Orders"
          value="45,678"
          icon={ShoppingCart}
          trend={{ value: '23% this month', isPositive: true }}
          color="var(--success)"
        />
        <StatCard
          title="Monthly Revenue"
          value="₹35.6L"
          icon={DollarSign}
          trend={{ value: '18% this month', isPositive: true }}
          color="var(--warning)"
        />
        <StatCard
          title="Active AI Agents"
          value="1,156"
          icon={Bot}
          trend={{ value: '93.7% uptime', isPositive: true }}
          color="#AF52DE"
        />
      </div>

      {/* Revenue Chart */}
      <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
        <h3 className="mb-4">Platform Revenue Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E5EA" />
            <XAxis dataKey="month" stroke="#6C6C70" />
            <YAxis stroke="#6C6C70" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="var(--primary)" strokeWidth={3} name="Revenue (₹)" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Businesses by Category */}
        <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
          <h3 className="mb-4">Businesses by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={businessData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E5EA" />
              <XAxis dataKey="category" stroke="#6C6C70" angle={-45} textAnchor="end" height={80} />
              <YAxis stroke="#6C6C70" />
              <Tooltip />
              <Bar dataKey="count" fill="var(--primary)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Orders Distribution */}
        <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
          <h3 className="mb-4">Orders per Business Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={ordersPerBusiness}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E5EA" />
              <XAxis dataKey="range" stroke="#6C6C70" />
              <YAxis stroke="#6C6C70" />
              <Tooltip />
              <Bar dataKey="count" fill="var(--success)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* AI Success Rate */}
      <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
        <h3 className="mb-4">AI Intent Success Rate</h3>
        <div className="space-y-4">
          {aiMetrics.map((metric, idx) => (
            <div key={idx}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">{metric.metric}</span>
                <span className="text-sm text-[var(--primary)]">{metric.success}%</span>
              </div>
              <div className="bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-[var(--primary)] h-2 rounded-full transition-all"
                  style={{ width: `${metric.success}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Platform Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
          <h4 className="mb-4">Average Response Time</h4>
          <div className="text-center">
            <div className="text-4xl text-[var(--success)] mb-2">1.8s</div>
            <p className="text-sm text-[var(--text-secondary)]">AI response time</p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="bg-gray-50 rounded-lg p-2">
                <p className="text-xs text-[var(--text-secondary)]">Fastest</p>
                <p className="text-sm">0.3s</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-2">
                <p className="text-xs text-[var(--text-secondary)]">Slowest</p>
                <p className="text-sm">4.2s</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
          <h4 className="mb-4">Platform Uptime</h4>
          <div className="text-center">
            <div className="text-4xl text-[var(--success)] mb-2">99.9%</div>
            <p className="text-sm text-[var(--text-secondary)]">Last 30 days</p>
            <div className="mt-4 bg-gray-50 rounded-lg p-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-[var(--text-secondary)]">Last incident</span>
                <span>5 days ago</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[var(--text-secondary)]">Duration</span>
                <span>12 minutes</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
          <h4 className="mb-4">Data Storage</h4>
          <div className="text-center">
            <div className="text-4xl text-[var(--warning)] mb-2">2.4TB</div>
            <p className="text-sm text-[var(--text-secondary)]">Total storage used</p>
            <div className="mt-4 bg-gray-50 rounded-lg p-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-[var(--text-secondary)]">Images</span>
                <span>1.8TB</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[var(--text-secondary)]">Database</span>
                <span>0.6TB</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Performing Businesses */}
      <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
        <h3 className="mb-4">Top Performing Businesses</h3>
        <div className="space-y-3">
          {[
            { name: 'Tech Store', revenue: '₹1,20,000', orders: 456, growth: '+34%' },
            { name: 'Food Delights', revenue: '₹67,000', orders: 234, growth: '+28%' },
            { name: 'Fashion Hub', revenue: '₹45,000', orders: 189, growth: '+22%' },
            { name: 'Home Essentials', revenue: '₹28,000', orders: 145, growth: '+18%' },
            { name: 'Sports World', revenue: '₹23,500', orders: 98, growth: '+15%' },
          ].map((business, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-[var(--primary)] rounded-full flex items-center justify-center text-white text-sm">
                  {idx + 1}
                </div>
                <div>
                  <p className="text-sm">{business.name}</p>
                  <p className="text-xs text-[var(--text-secondary)]">{business.orders} orders</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-[var(--primary)]">{business.revenue}</p>
                <p className="text-xs text-[var(--success)]">{business.growth}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
