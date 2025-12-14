import { DataTable } from '../../components/DataTable';
import { Button } from '../../components/Button';
import { Filter, Download, Calendar } from 'lucide-react';

const orders = [
  {
    id: '#ORD001',
    business: 'Fashion Hub',
    customer: 'Rahul Mehta',
    items: 'Cotton T-Shirt (x2)',
    amount: '₹1,198',
    payment: 'Online',
    status: 'Delivered',
    date: '12 Dec 2025',
    time: '10:30 AM'
  },
  {
    id: '#ORD002',
    business: 'Tech Store',
    customer: 'Priya Sharma',
    items: 'Wireless Headphones',
    amount: '₹2,499',
    payment: 'COD',
    status: 'Shipped',
    date: '12 Dec 2025',
    time: '09:15 AM'
  },
  {
    id: '#ORD003',
    business: 'Home Essentials',
    customer: 'Amit Kumar',
    items: 'Coffee Maker, Coffee Beans',
    amount: '₹4,199',
    payment: 'Online',
    status: 'Confirmed',
    date: '11 Dec 2025',
    time: '04:20 PM'
  },
  {
    id: '#ORD004',
    business: 'Food Delights',
    customer: 'Sneha Patel',
    items: 'Organic Honey (x3)',
    amount: '₹1,497',
    payment: 'Online',
    status: 'Delivered',
    date: '11 Dec 2025',
    time: '02:45 PM'
  },
  {
    id: '#ORD005',
    business: 'Sports World',
    customer: 'Vikram Singh',
    items: 'Yoga Mat, Resistance Bands',
    amount: '₹1,799',
    payment: 'COD',
    status: 'Pending',
    date: '10 Dec 2025',
    time: '11:30 AM'
  },
];

export function AdminOrderLogs() {
  const columns = [
    { header: 'Order ID', accessor: 'id' },
    { 
      header: 'Business', 
      accessor: 'business',
      render: (business: string, row: any) => (
        <div>
          <div className="text-sm">{business}</div>
          <div className="text-xs text-[var(--text-secondary)]">{row.customer}</div>
        </div>
      )
    },
    { header: 'Items', accessor: 'items' },
    { header: 'Amount', accessor: 'amount' },
    { 
      header: 'Payment', 
      accessor: 'payment',
      render: (payment: string) => (
        <span className={`px-2 py-1 rounded text-xs ${
          payment === 'Online' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
        }`}>
          {payment}
        </span>
      )
    },
    { 
      header: 'Status', 
      accessor: 'status',
      render: (status: string) => (
        <span className={`px-3 py-1 rounded-full text-xs ${
          status === 'Delivered' ? 'bg-green-100 text-green-700' :
          status === 'Shipped' ? 'bg-blue-100 text-blue-700' :
          status === 'Confirmed' ? 'bg-yellow-100 text-yellow-700' :
          'bg-gray-100 text-gray-700'
        }`}>
          {status}
        </span>
      )
    },
    { 
      header: 'Date & Time', 
      accessor: 'date',
      render: (date: string, row: any) => (
        <div>
          <div className="text-sm">{date}</div>
          <div className="text-xs text-[var(--text-secondary)]">{row.time}</div>
        </div>
      )
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Order Logs</h1>
          <p className="text-[var(--text-secondary)] mt-1">All orders across businesses</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary">
            <Calendar className="w-4 h-4 mr-2" />
            Date Range
          </Button>
          <Button variant="secondary">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
          <Button variant="secondary">
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
          <p className="text-[var(--text-secondary)] text-sm">Total Orders</p>
          <h3 className="mt-2">45,678</h3>
          <p className="text-xs text-[var(--success)] mt-2">↑ 23% this month</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
          <p className="text-[var(--text-secondary)] text-sm">Total Revenue</p>
          <h3 className="mt-2">₹56.8L</h3>
          <p className="text-xs text-[var(--success)] mt-2">↑ 18% this month</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
          <p className="text-[var(--text-secondary)] text-sm">Avg Order Value</p>
          <h3 className="mt-2">₹1,243</h3>
          <p className="text-xs text-[var(--text-secondary)] mt-2">Platform average</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
          <p className="text-[var(--text-secondary)] text-sm">COD Orders</p>
          <h3 className="mt-2">18,234</h3>
          <p className="text-xs text-[var(--text-secondary)] mt-2">39.9% of total</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
          <p className="text-[var(--text-secondary)] text-sm">Online Orders</p>
          <h3 className="mt-2">27,444</h3>
          <p className="text-xs text-[var(--text-secondary)] mt-2">60.1% of total</p>
        </div>
      </div>

      <div className="flex gap-2 bg-white rounded-lg p-1 border border-[var(--border)] w-fit">
        {['All', 'Pending', 'Confirmed', 'Shipped', 'Delivered'].map((status) => (
          <button
            key={status}
            className={`px-4 py-2 rounded-lg text-sm transition-all ${
              status === 'All'
                ? 'bg-[var(--primary)] text-white' 
                : 'text-[var(--text-secondary)] hover:bg-gray-50'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      <DataTable columns={columns} data={orders} />

      {/* Order Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
          <h3 className="mb-4">Top Performing Businesses (by orders)</h3>
          <div className="space-y-3">
            {[
              { name: 'Tech Store', orders: 1234, revenue: '₹15.6L' },
              { name: 'Fashion Hub', orders: 987, revenue: '₹8.9L' },
              { name: 'Food Delights', orders: 876, revenue: '₹12.3L' },
              { name: 'Home Essentials', orders: 654, revenue: '₹9.1L' },
              { name: 'Sports World', orders: 543, revenue: '₹6.7L' },
            ].map((business, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[var(--primary)] rounded-full flex items-center justify-center text-white text-sm">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="text-sm">{business.name}</p>
                    <p className="text-xs text-[var(--text-secondary)]">{business.orders} orders</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--primary)]">{business.revenue}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
          <h3 className="mb-4">Order Status Distribution</h3>
          <div className="space-y-4">
            {[
              { status: 'Delivered', count: 28456, percentage: 62.3, color: 'var(--success)' },
              { status: 'Shipped', count: 8234, percentage: 18.0, color: 'var(--primary)' },
              { status: 'Confirmed', count: 6123, percentage: 13.4, color: 'var(--warning)' },
              { status: 'Pending', count: 2865, percentage: 6.3, color: 'var(--text-secondary)' },
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">{item.status}</span>
                  <span className="text-sm">{item.count.toLocaleString()} ({item.percentage}%)</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full transition-all"
                    style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
        <h3 className="mb-4">Recent Order Activity</h3>
        <div className="space-y-3">
          {[
            { action: 'New order placed', business: 'Tech Store', order: '#ORD123', time: '2 minutes ago' },
            { action: 'Order delivered', business: 'Fashion Hub', order: '#ORD120', time: '15 minutes ago' },
            { action: 'Payment received', business: 'Food Delights', order: '#ORD118', time: '32 minutes ago' },
            { action: 'Order shipped', business: 'Home Essentials', order: '#ORD115', time: '1 hour ago' },
            { action: 'New order placed', business: 'Sports World', order: '#ORD113', time: '2 hours ago' },
          ].map((activity, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 border-l-4 border-[var(--primary)] bg-gray-50">
              <div>
                <p className="text-sm">{activity.action}</p>
                <p className="text-xs text-[var(--text-secondary)]">
                  {activity.business} • {activity.order}
                </p>
              </div>
              <p className="text-xs text-[var(--text-secondary)]">{activity.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
