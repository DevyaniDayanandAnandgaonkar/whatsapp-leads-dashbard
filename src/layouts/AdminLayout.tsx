import { Outlet } from 'react-router';
import { Sidebar } from '../components/Sidebar';
import { TopBar } from '../components/TopBar';
import { 
  Users, 
  CreditCard, 
  BarChart3, 
  Bot, 
  LifeBuoy, 
  Package, 
  Settings 
} from 'lucide-react';

const menuItems = [
  { icon: Users, label: 'Business Users', path: '/admin' },
  { icon: CreditCard, label: 'Subscription Plans', path: '/admin/subscriptions' },
  { icon: BarChart3, label: 'Analytics', path: '/admin/analytics' },
  { icon: Bot, label: 'AI & Templates', path: '/admin/ai-config' },
  { icon: LifeBuoy, label: 'Support Tickets', path: '/admin/support' },
  { icon: Package, label: 'Order Logs', path: '/admin/order-logs' },
  { icon: Settings, label: 'System Settings', path: '/admin/settings' },
];

export function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-[var(--background)] transition-colors duration-300">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--primary)] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--secondary)] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-[0.02] rounded-full blur-3xl"></div>
      </div>
      
      <Sidebar items={menuItems} logo="WhatsLead Admin" />
      <div className="flex-1 ml-72 relative z-10">
        <TopBar />
        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
