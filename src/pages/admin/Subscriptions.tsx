import { useState } from 'react';
import { DataTable } from '../../components/DataTable';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import { Plus, Edit, Trash2, Download } from 'lucide-react';

const plans = [
  {
    id: 'PLAN001',
    name: 'Starter',
    price: '₹999',
    period: 'month',
    subscribers: 456,
    revenue: '₹4,55,544',
    active: true
  },
  {
    id: 'PLAN002',
    name: 'Professional',
    price: '₹2,499',
    period: 'month',
    subscribers: 623,
    revenue: '₹15,56,877',
    active: true
  },
  {
    id: 'PLAN003',
    name: 'Enterprise',
    price: '₹9,999',
    period: 'month',
    subscribers: 155,
    revenue: '₹15,49,845',
    active: true
  },
];

const transactions = [
  { id: 'TXN001', business: 'Fashion Hub', plan: 'Professional', amount: '₹2,499', status: 'Success', date: '12 Dec 2025' },
  { id: 'TXN002', business: 'Tech Store', plan: 'Enterprise', amount: '₹9,999', status: 'Success', date: '12 Dec 2025' },
  { id: 'TXN003', business: 'Home Essentials', plan: 'Starter', amount: '₹999', status: 'Success', date: '11 Dec 2025' },
  { id: 'TXN004', business: 'Sports World', plan: 'Professional', amount: '₹2,499', status: 'Failed', date: '11 Dec 2025' },
  { id: 'TXN005', business: 'Food Delights', plan: 'Professional', amount: '₹2,499', status: 'Success', date: '10 Dec 2025' },
];

export function AdminSubscriptions() {
  const [isCreatePlanOpen, setIsCreatePlanOpen] = useState(false);

  const planColumns = [
    { header: 'Plan ID', accessor: 'id' },
    { header: 'Plan Name', accessor: 'name' },
    { 
      header: 'Price', 
      accessor: 'price',
      render: (price: string, row: any) => `${price}/${row.period}`
    },
    { header: 'Subscribers', accessor: 'subscribers' },
    { header: 'Monthly Revenue', accessor: 'revenue' },
    { 
      header: 'Status', 
      accessor: 'active',
      render: (active: boolean) => (
        <span className={`px-3 py-1 rounded-full text-xs ${
          active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
        }`}>
          {active ? 'Active' : 'Inactive'}
        </span>
      )
    },
    { 
      header: 'Actions', 
      accessor: 'id',
      render: () => (
        <div className="flex gap-2">
          <button className="p-1 hover:bg-gray-100 rounded">
            <Edit className="w-4 h-4 text-[var(--primary)]" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <Trash2 className="w-4 h-4 text-[var(--danger)]" />
          </button>
        </div>
      )
    },
  ];

  const transactionColumns = [
    { header: 'Transaction ID', accessor: 'id' },
    { header: 'Business', accessor: 'business' },
    { header: 'Plan', accessor: 'plan' },
    { header: 'Amount', accessor: 'amount' },
    { 
      header: 'Status', 
      accessor: 'status',
      render: (status: string) => (
        <span className={`px-3 py-1 rounded-full text-xs ${
          status === 'Success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`}>
          {status}
        </span>
      )
    },
    { header: 'Date', accessor: 'date' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Subscription Plans</h1>
          <p className="text-[var(--text-secondary)] mt-1">Manage subscription plans and pricing</p>
        </div>
        <Button onClick={() => setIsCreatePlanOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Create New Plan
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
          <p className="text-[var(--text-secondary)] text-sm">Total Subscribers</p>
          <h3 className="mt-2">1,234</h3>
          <p className="text-xs text-[var(--success)] mt-2">↑ 12% this month</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
          <p className="text-[var(--text-secondary)] text-sm">Monthly Revenue</p>
          <h3 className="mt-2">₹35.6L</h3>
          <p className="text-xs text-[var(--success)] mt-2">↑ 18% this month</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
          <p className="text-[var(--text-secondary)] text-sm">New Subscriptions</p>
          <h3 className="mt-2">145</h3>
          <p className="text-xs text-[var(--text-secondary)] mt-2">This month</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
          <p className="text-[var(--text-secondary)] text-sm">Churn Rate</p>
          <h3 className="mt-2 text-[var(--danger)]">2.3%</h3>
          <p className="text-xs text-[var(--text-secondary)] mt-2">Last 30 days</p>
        </div>
      </div>

      {/* Subscription Plans */}
      <div>
        <h3 className="mb-4">Subscription Plans</h3>
        <DataTable columns={planColumns} data={plans} />
      </div>

      {/* Plan Pricing Cards */}
      <div>
        <h3 className="mb-4">Plan Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
            <h4 className="mb-2">Starter</h4>
            <div className="text-3xl mb-4">₹999<span className="text-sm text-[var(--text-secondary)]">/month</span></div>
            <ul className="space-y-2 text-sm mb-4">
              <li className="flex items-center gap-2"><span className="text-[var(--success)]">✓</span> 500 products</li>
              <li className="flex items-center gap-2"><span className="text-[var(--success)]">✓</span> 1,000 orders/month</li>
              <li className="flex items-center gap-2"><span className="text-[var(--success)]">✓</span> Basic AI chatbot</li>
              <li className="flex items-center gap-2"><span className="text-[var(--success)]">✓</span> Email support</li>
            </ul>
            <p className="text-sm text-[var(--text-secondary)]">{plans[0].subscribers} subscribers</p>
          </div>

          <div className="bg-gradient-to-br from-[var(--primary)] to-blue-600 rounded-xl p-6 text-white border-2 border-[var(--primary)]">
            <div className="bg-white/20 text-white text-xs px-3 py-1 rounded-full w-fit mb-2">Popular</div>
            <h4 className="mb-2 text-white">Professional</h4>
            <div className="text-3xl mb-4">₹2,499<span className="text-sm text-blue-100">/month</span></div>
            <ul className="space-y-2 text-sm mb-4">
              <li className="flex items-center gap-2"><span>✓</span> 5,000 products</li>
              <li className="flex items-center gap-2"><span>✓</span> Unlimited orders</li>
              <li className="flex items-center gap-2"><span>✓</span> Advanced AI chatbot</li>
              <li className="flex items-center gap-2"><span>✓</span> Priority support</li>
            </ul>
            <p className="text-sm text-blue-100">{plans[1].subscribers} subscribers</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
            <h4 className="mb-2">Enterprise</h4>
            <div className="text-3xl mb-4">₹9,999<span className="text-sm text-[var(--text-secondary)]">/month</span></div>
            <ul className="space-y-2 text-sm mb-4">
              <li className="flex items-center gap-2"><span className="text-[var(--success)]">✓</span> Unlimited products</li>
              <li className="flex items-center gap-2"><span className="text-[var(--success)]">✓</span> Unlimited orders</li>
              <li className="flex items-center gap-2"><span className="text-[var(--success)]">✓</span> Custom AI training</li>
              <li className="flex items-center gap-2"><span className="text-[var(--success)]">✓</span> 24/7 support</li>
            </ul>
            <p className="text-sm text-[var(--text-secondary)]">{plans[2].subscribers} subscribers</p>
          </div>
        </div>
      </div>

      {/* Payment Transactions */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3>Recent Transactions</h3>
          <Button variant="secondary" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
        <DataTable columns={transactionColumns} data={transactions} />
      </div>

      {/* Create Plan Modal */}
      <Modal
        isOpen={isCreatePlanOpen}
        onClose={() => setIsCreatePlanOpen(false)}
        title="Create New Plan"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-2">Plan Name</label>
            <input
              type="text"
              placeholder="e.g., Premium"
              className="w-full px-4 py-2 rounded-lg border border-[var(--border)] focus:outline-none focus:border-[var(--primary)]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-2">Price (₹)</label>
              <input
                type="number"
                placeholder="0"
                className="w-full px-4 py-2 rounded-lg border border-[var(--border)] focus:outline-none focus:border-[var(--primary)]"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Billing Period</label>
              <select className="w-full px-4 py-2 rounded-lg border border-[var(--border)] focus:outline-none focus:border-[var(--primary)]">
                <option>Monthly</option>
                <option>Quarterly</option>
                <option>Yearly</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2">Features (one per line)</label>
            <textarea
              className="w-full px-4 py-3 rounded-lg border border-[var(--border)] resize-none focus:outline-none focus:border-[var(--primary)]"
              rows={6}
              placeholder="Unlimited products&#10;Unlimited orders&#10;Custom AI training"
            />
          </div>

          <div className="flex gap-3">
            <Button className="flex-1">Create Plan</Button>
            <Button variant="secondary" onClick={() => setIsCreatePlanOpen(false)}>Cancel</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
