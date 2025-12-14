import { Link } from 'react-router';
import { ArrowRight, Bot, ShoppingCart, BarChart3, MessageSquare, Zap, Shield } from 'lucide-react';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="border-b border-[var(--border)] bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h2 className="text-[var(--primary)]">WhatsLead</h2>
          <div className="flex gap-4">
            <Link to="/business">
              <button className="px-4 py-2 text-sm hover:bg-gray-100 rounded-lg transition-colors">
                Business Login
              </button>
            </Link>
            <Link to="/admin">
              <button className="px-4 py-2 bg-[var(--primary)] text-white text-sm rounded-lg hover:bg-[var(--primary-dark)] transition-colors">
                Admin Portal
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="inline-block px-4 py-2 bg-blue-100 text-[var(--primary)] rounded-full text-sm mb-6">
          🚀 AI-Powered WhatsApp Commerce
        </div>
        <h1 className="text-5xl mb-6">
          Transform WhatsApp Into Your
          <br />
          <span className="text-[var(--primary)]">Complete Commerce Platform</span>
        </h1>
        <p className="text-xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
          Manage products, orders, leads, and customer conversations with AI-powered automation.
          Built for modern small businesses in India.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/business">
            <button className="px-8 py-4 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary-dark)] transition-colors flex items-center gap-2">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
          <button className="px-8 py-4 bg-white border border-[var(--border)] rounded-lg hover:bg-gray-50 transition-colors">
            Watch Demo
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-center mb-12">Everything You Need to Grow Your Business</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 border border-[var(--border)] hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Bot className="w-6 h-6 text-[var(--primary)]" />
            </div>
            <h3 className="mb-3">AI Chatbot</h3>
            <p className="text-[var(--text-secondary)] text-sm">
              Automated responses, product recommendations, and 24/7 customer support powered by AI.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-[var(--border)] hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <ShoppingCart className="w-6 h-6 text-[var(--success)]" />
            </div>
            <h3 className="mb-3">Product Catalog</h3>
            <p className="text-[var(--text-secondary)] text-sm">
              Manage unlimited products with images, variants, pricing, and inventory tracking.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-[var(--border)] hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6" style={{ color: '#AF52DE' }} />
            </div>
            <h3 className="mb-3">Lead Management</h3>
            <p className="text-[var(--text-secondary)] text-sm">
              Convert WhatsApp chats into sales with built-in CRM and conversation tracking.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-[var(--border)] hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-[var(--warning)]" />
            </div>
            <h3 className="mb-3">Analytics</h3>
            <p className="text-[var(--text-secondary)] text-sm">
              Real-time insights on sales, customers, and AI performance to make better decisions.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-[var(--border)] hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-[var(--warning)]" />
            </div>
            <h3 className="mb-3">Fast Setup</h3>
            <p className="text-[var(--text-secondary)] text-sm">
              Get started in minutes. No technical knowledge required. We handle everything.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-[var(--border)] hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-[var(--danger)]" />
            </div>
            <h3 className="mb-3">Secure & Reliable</h3>
            <p className="text-[var(--text-secondary)] text-sm">
              Enterprise-grade security with 99.9% uptime. Your data is always safe with us.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-center mb-4">Simple, Transparent Pricing</h2>
        <p className="text-center text-[var(--text-secondary)] mb-12">Choose the plan that fits your business</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 border border-[var(--border)]">
            <h3 className="mb-2">Starter</h3>
            <div className="mb-6">
              <span className="text-4xl">₹999</span>
              <span className="text-[var(--text-secondary)]">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-sm">
                <span className="text-[var(--success)]">✓</span> 500 products
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-[var(--success)]">✓</span> 1,000 orders/month
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-[var(--success)]">✓</span> Basic AI chatbot
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-[var(--success)]">✓</span> Email support
              </li>
            </ul>
            <Link to="/business">
              <button className="w-full px-6 py-3 border border-[var(--border)] rounded-lg hover:bg-gray-50 transition-colors">
                Get Started
              </button>
            </Link>
          </div>

          <div className="bg-gradient-to-br from-[var(--primary)] to-blue-600 rounded-xl p-8 text-white relative">
            <div className="absolute top-4 right-4 bg-white/20 text-white text-xs px-3 py-1 rounded-full">
              Popular
            </div>
            <h3 className="mb-2 text-white">Professional</h3>
            <div className="mb-6">
              <span className="text-4xl">₹2,499</span>
              <span className="text-blue-100">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-sm">
                <span>✓</span> 5,000 products
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span>✓</span> Unlimited orders
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span>✓</span> Advanced AI chatbot
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span>✓</span> Priority support
              </li>
            </ul>
            <Link to="/business">
              <button className="w-full px-6 py-3 bg-white text-[var(--primary)] rounded-lg hover:bg-gray-100 transition-colors">
                Get Started
              </button>
            </Link>
          </div>

          <div className="bg-white rounded-xl p-8 border border-[var(--border)]">
            <h3 className="mb-2">Enterprise</h3>
            <div className="mb-6">
              <span className="text-4xl">₹9,999</span>
              <span className="text-[var(--text-secondary)]">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-sm">
                <span className="text-[var(--success)]">✓</span> Unlimited products
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-[var(--success)]">✓</span> Unlimited orders
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-[var(--success)]">✓</span> Custom AI training
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-[var(--success)]">✓</span> 24/7 dedicated support
              </li>
            </ul>
            <Link to="/business">
              <button className="w-full px-6 py-3 border border-[var(--border)] rounded-lg hover:bg-gray-50 transition-colors">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-[var(--primary)] to-blue-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Join 1,234+ businesses already using WhatsLead
          </p>
          <Link to="/business">
            <button className="px-8 py-4 bg-white text-[var(--primary)] rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
              Start Your Free Trial
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="mb-4">WhatsLead</h4>
              <p className="text-sm text-[var(--text-secondary)]">
                AI-powered WhatsApp commerce platform for modern businesses.
              </p>
            </div>
            <div>
              <h4 className="text-sm mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li><a href="#" className="hover:text-[var(--primary)]">Features</a></li>
                <li><a href="#" className="hover:text-[var(--primary)]">Pricing</a></li>
                <li><a href="#" className="hover:text-[var(--primary)]">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li><a href="#" className="hover:text-[var(--primary)]">About</a></li>
                <li><a href="#" className="hover:text-[var(--primary)]">Blog</a></li>
                <li><a href="#" className="hover:text-[var(--primary)]">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li><a href="#" className="hover:text-[var(--primary)]">Help Center</a></li>
                <li><a href="#" className="hover:text-[var(--primary)]">Contact</a></li>
                <li><a href="#" className="hover:text-[var(--primary)]">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[var(--border)] mt-8 pt-8 text-center text-sm text-[var(--text-secondary)]">
            © 2025 WhatsLead. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
