import { StatCard } from '../../components/StatCard';
import { TrendingUp, Users, ShoppingCart, DollarSign } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const monthlySales = [
  { month: 'Jan', sales: 45000 },
  { month: 'Feb', sales: 52000 },
  { month: 'Mar', sales: 48000 },
  { month: 'Apr', sales: 61000 },
  { month: 'May', sales: 55000 },
  { month: 'Jun', sales: 67000 },
];

const categoryData = [
  { category: 'Electronics', orders: 145 },
  { category: 'Fashion', orders: 98 },
  { category: 'Home & Kitchen', orders: 76 },
  { category: 'Sports', orders: 54 },
  { category: 'Food', orders: 32 },
];

const customerData = [
  { name: 'New', value: 156 },
  { name: 'Returning', value: 234 },
];

const paymentData = [
  { name: 'COD', value: 145 },
  { name: 'Online', value: 289 },
];

const COLORS = ['#0A84FF', '#34C759', '#FF9500', '#FF3B30', '#AF52DE'];

export function BusinessAnalytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1>Analytics Dashboard</h1>
        <p className="text-[var(--text-secondary)] mt-1">Track your business performance and insights</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="Total Revenue"
          value="₹5,24,500"
          icon={DollarSign}
          trend={{ value: '15% vs last month', isPositive: true }}
          color="var(--primary)"
        />
        <StatCard
          title="Total Orders"
          value="434"
          icon={ShoppingCart}
          trend={{ value: '12% vs last month', isPositive: true }}
          color="var(--success)"
        />
        <StatCard
          title="Total Customers"
          value="390"
          icon={Users}
          trend={{ value: '23% new customers', isPositive: true }}
          color="#AF52DE"
        />
        <StatCard
          title="Avg Order Value"
          value="₹1,208"
          icon={TrendingUp}
          trend={{ value: '8% vs last month', isPositive: true }}
          color="var(--warning)"
        />
      </div>

      {/* Monthly Sales Chart */}
      <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
        <h3 className="mb-4">Monthly Sales Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlySales}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E5EA" />
            <XAxis dataKey="month" stroke="#6C6C70" />
            <YAxis stroke="#6C6C70" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="var(--primary)" strokeWidth={3} name="Sales (₹)" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Orders by Category */}
        <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
          <h3 className="mb-4">Orders by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categoryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E5EA" />
              <XAxis dataKey="category" stroke="#6C6C70" />
              <YAxis stroke="#6C6C70" />
              <Tooltip />
              <Bar dataKey="orders" fill="var(--primary)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Customer Distribution */}
        <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
          <h3 className="mb-4">New vs Returning Customers</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={customerData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {customerData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Payment Methods */}
        <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
          <h3 className="mb-4">COD vs Online Payment</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={paymentData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value, percent }) => `${name}: ${value} (${(percent * 100).toFixed(0)}%)`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {paymentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
          <h3 className="mb-4">Top Selling Products</h3>
          <div className="space-y-3">
            {[
              { name: 'Wireless Headphones', sales: 234, revenue: '₹5,84,766' },
              { name: 'Smart Watch', sales: 189, revenue: '₹9,44,811' },
              { name: 'Cotton T-Shirt', sales: 156, revenue: '₹93,444' },
              { name: 'Yoga Mat', sales: 142, revenue: '₹1,27,658' },
              { name: 'Coffee Maker', sales: 98, revenue: '₹3,42,902' },
            ].map((product, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm">{product.name}</p>
                  <p className="text-xs text-[var(--text-secondary)]">{product.sales} units sold</p>
                </div>
                <p className="text-sm text-[var(--primary)]">{product.revenue}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
          <h4 className="mb-4">Conversion Rate</h4>
          <div className="text-center">
            <div className="text-4xl text-[var(--primary)] mb-2">24.5%</div>
            <p className="text-sm text-[var(--text-secondary)]">Leads to customers</p>
            <div className="mt-4 bg-gray-200 rounded-full h-2">
              <div className="bg-[var(--primary)] h-2 rounded-full" style={{ width: '24.5%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
          <h4 className="mb-4">Average Response Time</h4>
          <div className="text-center">
            <div className="text-4xl text-[var(--success)] mb-2">2.5 min</div>
            <p className="text-sm text-[var(--text-secondary)]">AI + Manual response</p>
            <div className="mt-4 space-y-2 text-left">
              <div className="flex justify-between text-xs">
                <span className="text-[var(--text-secondary)]">AI Auto-reply</span>
                <span>0.3 min</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[var(--text-secondary)]">Manual reply</span>
                <span>4.2 min</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
          <h4 className="mb-4">Customer Satisfaction</h4>
          <div className="text-center">
            <div className="text-4xl text-[var(--warning)] mb-2">4.7/5</div>
            <p className="text-sm text-[var(--text-secondary)]">Based on 234 reviews</p>
            <div className="mt-4 flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-2xl text-[var(--warning)]">★</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
