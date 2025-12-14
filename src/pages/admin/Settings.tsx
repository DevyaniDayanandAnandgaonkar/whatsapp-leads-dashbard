import { Button } from '../../components/Button';
import { Save, Copy, Upload } from 'lucide-react';

export function AdminSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h1>System Settings</h1>
        <p className="text-[var(--text-secondary)] mt-1">Manage system-wide configuration</p>
      </div>

      {/* API Configuration */}
      <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
        <h3 className="mb-4">API Configuration</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-2">WhatsApp Business API Key</label>
            <div className="flex gap-2">
              <input
                type="text"
                value="whatsapp_api_xxxxxxxxxxxxxxxxxxxxxxxx"
                className="flex-1 px-4 py-2 rounded-lg border border-[var(--border)] bg-gray-50 focus:outline-none"
                readOnly
              />
              <Button variant="secondary">
                <Copy className="w-4 h-4 mr-2" />
                Copy
              </Button>
              <Button variant="secondary">Regenerate</Button>
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2">Razorpay Key ID</label>
            <input
              type="text"
              placeholder="rzp_live_xxxxxxxxxxxxxxxx"
              className="w-full px-4 py-2 rounded-lg border border-[var(--border)] focus:outline-none focus:border-[var(--primary)]"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Razorpay Secret Key</label>
            <input
              type="password"
              placeholder="••••••••••••••••••••"
              className="w-full px-4 py-2 rounded-lg border border-[var(--border)] focus:outline-none focus:border-[var(--primary)]"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">S3 Bucket Name</label>
            <input
              type="text"
              placeholder="whatslead-assets"
              className="w-full px-4 py-2 rounded-lg border border-[var(--border)] focus:outline-none focus:border-[var(--primary)]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-2">AWS Access Key</label>
              <input
                type="text"
                placeholder="AKIA••••••••••••••••"
                className="w-full px-4 py-2 rounded-lg border border-[var(--border)] focus:outline-none focus:border-[var(--primary)]"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">AWS Secret Key</label>
              <input
                type="password"
                placeholder="••••••••••••••••••••"
                className="w-full px-4 py-2 rounded-lg border border-[var(--border)] focus:outline-none focus:border-[var(--primary)]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Webhook Configuration */}
      <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
        <h3 className="mb-4">Webhook Configuration</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-2">Order Webhook URL</label>
            <input
              type="url"
              placeholder="https://api.yourplatform.com/webhooks/orders"
              className="w-full px-4 py-2 rounded-lg border border-[var(--border)] focus:outline-none focus:border-[var(--primary)]"
            />
            <p className="text-xs text-[var(--text-secondary)] mt-2">
              Receive real-time notifications when orders are placed
            </p>
          </div>

          <div>
            <label className="block text-sm mb-2">Payment Webhook URL</label>
            <input
              type="url"
              placeholder="https://api.yourplatform.com/webhooks/payments"
              className="w-full px-4 py-2 rounded-lg border border-[var(--border)] focus:outline-none focus:border-[var(--primary)]"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">WhatsApp Webhook URL</label>
            <input
              type="url"
              placeholder="https://api.yourplatform.com/webhooks/whatsapp"
              className="w-full px-4 py-2 rounded-lg border border-[var(--border)] focus:outline-none focus:border-[var(--primary)]"
            />
          </div>
        </div>
      </div>

      {/* Email Configuration */}
      <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
        <h3 className="mb-4">Email Configuration</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-2">SMTP Host</label>
              <input
                type="text"
                placeholder="smtp.gmail.com"
                className="w-full px-4 py-2 rounded-lg border border-[var(--border)] focus:outline-none focus:border-[var(--primary)]"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">SMTP Port</label>
              <input
                type="text"
                placeholder="587"
                className="w-full px-4 py-2 rounded-lg border border-[var(--border)] focus:outline-none focus:border-[var(--primary)]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2">From Email</label>
            <input
              type="email"
              placeholder="noreply@whatslead.com"
              className="w-full px-4 py-2 rounded-lg border border-[var(--border)] focus:outline-none focus:border-[var(--primary)]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-2">SMTP Username</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-[var(--border)] focus:outline-none focus:border-[var(--primary)]"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">SMTP Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 rounded-lg border border-[var(--border)] focus:outline-none focus:border-[var(--primary)]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Email Templates */}
      <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
        <h3 className="mb-4">Email Templates</h3>
        <div className="space-y-3">
          {[
            { name: 'Welcome Email', description: 'Sent when a new business signs up' },
            { name: 'Payment Confirmation', description: 'Sent after successful payment' },
            { name: 'Order Notification', description: 'Sent when a new order is placed' },
            { name: 'Password Reset', description: 'Sent for password reset requests' },
          ].map((template, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm">{template.name}</p>
                <p className="text-xs text-[var(--text-secondary)]">{template.description}</p>
              </div>
              <Button variant="secondary" size="sm">Edit Template</Button>
            </div>
          ))}
        </div>
      </div>

      {/* Data Backup */}
      <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
        <h3 className="mb-4">Data Backup & Security</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="text-sm">Auto-backup database</p>
              <p className="text-xs text-[var(--text-secondary)]">Daily at 3:00 AM IST</p>
            </div>
            <input type="checkbox" defaultChecked className="w-5 h-5 text-[var(--primary)]" />
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="text-sm">Last backup</p>
              <p className="text-xs text-[var(--text-secondary)]">12 Dec 2025, 3:00 AM</p>
            </div>
            <Button variant="secondary" size="sm">
              <Upload className="w-4 h-4 mr-2" />
              Backup Now
            </Button>
          </div>

          <div>
            <label className="block text-sm mb-2">Backup Retention (days)</label>
            <input
              type="number"
              defaultValue="30"
              className="w-full px-4 py-2 rounded-lg border border-[var(--border)] focus:outline-none focus:border-[var(--primary)]"
            />
          </div>
        </div>
      </div>

      {/* System Preferences */}
      <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
        <h3 className="mb-4">System Preferences</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="text-sm">Enable user registrations</p>
              <p className="text-xs text-[var(--text-secondary)]">Allow new businesses to sign up</p>
            </div>
            <input type="checkbox" defaultChecked className="w-5 h-5 text-[var(--primary)]" />
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="text-sm">Require email verification</p>
              <p className="text-xs text-[var(--text-secondary)]">New users must verify email</p>
            </div>
            <input type="checkbox" defaultChecked className="w-5 h-5 text-[var(--primary)]" />
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="text-sm">Enable maintenance mode</p>
              <p className="text-xs text-[var(--text-secondary)]">Show maintenance page to users</p>
            </div>
            <input type="checkbox" className="w-5 h-5 text-[var(--primary)]" />
          </div>

          <div>
            <label className="block text-sm mb-2">Maintenance Message</label>
            <textarea
              className="w-full px-4 py-3 rounded-lg border border-[var(--border)] resize-none focus:outline-none focus:border-[var(--primary)]"
              rows={3}
              placeholder="We are performing scheduled maintenance. We'll be back soon!"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <Button>
          <Save className="w-4 h-4 mr-2" />
          Save All Settings
        </Button>
        <Button variant="secondary">Reset to Default</Button>
      </div>
    </div>
  );
}
