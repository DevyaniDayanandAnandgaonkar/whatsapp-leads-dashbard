import { Button } from '../../components/Button';
import { Upload, Save, Plus, Trash2 } from 'lucide-react';

const teamMembers = [
  { name: 'Rahul Kumar', email: 'rahul@business.com', role: 'Owner', status: 'Active' },
  { name: 'Priya Sharma', email: 'priya@business.com', role: 'Manager', status: 'Active' },
  { name: 'Amit Patel', email: 'amit@business.com', role: 'Support', status: 'Active' },
];

export function BusinessSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h1>Settings</h1>
        <p className="text-[var(--text-secondary)] mt-1">Manage your business profile and preferences</p>
      </div>

      {/* Business Profile */}
      <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
        <h3 className="mb-4">Business Profile</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-2">Business Logo</label>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-[var(--primary)] rounded-lg flex items-center justify-center text-white text-2xl">
                WL
              </div>
              <Button variant="secondary" size="sm">
                <Upload className="w-4 h-4 mr-2" />
                Upload Logo
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-2">Business Name</label>
              <input
                type="text"
                defaultValue="My Amazing Store"
                className="w-full px-4 py-2 rounded-lg border border-[var(--border)] focus:outline-none focus:border-[var(--primary)]"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Category</label>
              <select className="w-full px-4 py-2 rounded-lg border border-[var(--border)] focus:outline-none focus:border-[var(--primary)]">
                <option>Electronics & Gadgets</option>
                <option>Fashion & Apparel</option>
                <option>Home & Kitchen</option>
                <option>Food & Beverages</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2">Business Description</label>
            <textarea
              className="w-full px-4 py-3 rounded-lg border border-[var(--border)] resize-none focus:outline-none focus:border-[var(--primary)]"
              rows={4}
              defaultValue="Your one-stop shop for quality products with fast delivery and excellent customer service."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                defaultValue="contact@mystore.com"
                className="w-full px-4 py-2 rounded-lg border border-[var(--border)] focus:outline-none focus:border-[var(--primary)]"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">WhatsApp Number</label>
              <input
                type="tel"
                defaultValue="+91 98765 43210"
                className="w-full px-4 py-2 rounded-lg border border-[var(--border)] focus:outline-none focus:border-[var(--primary)]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2">Business Address</label>
            <textarea
              className="w-full px-4 py-3 rounded-lg border border-[var(--border)] resize-none focus:outline-none focus:border-[var(--primary)]"
              rows={3}
              defaultValue="123 Main Street, Mumbai, Maharashtra 400001"
            />
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
        <div className="flex items-center justify-between mb-4">
          <h3>Team Members</h3>
          <Button size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Invite Member
          </Button>
        </div>

        <div className="space-y-3">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[var(--primary)] rounded-full flex items-center justify-center text-white">
                  {member.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm">{member.name}</p>
                  <p className="text-xs text-[var(--text-secondary)]">{member.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <select className="px-3 py-1 rounded-lg border border-[var(--border)] text-sm">
                  <option>{member.role}</option>
                  <option>Owner</option>
                  <option>Manager</option>
                  <option>Support</option>
                </select>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                  {member.status}
                </span>
                {member.role !== 'Owner' && (
                  <button className="p-1 hover:bg-gray-200 rounded">
                    <Trash2 className="w-4 h-4 text-[var(--danger)]" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* API & Webhooks */}
      <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
        <h3 className="mb-4">API & Webhooks</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-2">API Key</label>
            <div className="flex gap-2">
              <input
                type="text"
                value="wl_live_xxxxxxxxxxxxxxxxxxxxxxxx"
                className="flex-1 px-4 py-2 rounded-lg border border-[var(--border)] bg-gray-50 focus:outline-none"
                readOnly
              />
              <Button variant="secondary">Regenerate</Button>
              <Button variant="secondary">Copy</Button>
            </div>
            <p className="text-xs text-[var(--text-secondary)] mt-2">
              Keep your API key secure. Don't share it publicly.
            </p>
          </div>

          <div>
            <label className="block text-sm mb-2">Webhook URL</label>
            <input
              type="url"
              placeholder="https://yoursite.com/webhook"
              className="w-full px-4 py-2 rounded-lg border border-[var(--border)] focus:outline-none focus:border-[var(--primary)]"
            />
            <p className="text-xs text-[var(--text-secondary)] mt-2">
              Receive real-time notifications for orders, messages, and more
            </p>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
        <h3 className="mb-4">Notification Preferences</h3>
        <div className="space-y-3">
          {[
            { label: 'Email notifications for new orders', checked: true },
            { label: 'WhatsApp alerts for new messages', checked: true },
            { label: 'Daily sales summary', checked: true },
            { label: 'Low stock alerts', checked: true },
            { label: 'Marketing updates', checked: false },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <p className="text-sm">{item.label}</p>
              <input type="checkbox" defaultChecked={item.checked} className="w-5 h-5 text-[var(--primary)]" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <Button>
          <Save className="w-4 h-4 mr-2" />
          Save All Changes
        </Button>
        <Button variant="secondary">Cancel</Button>
      </div>
    </div>
  );
}
