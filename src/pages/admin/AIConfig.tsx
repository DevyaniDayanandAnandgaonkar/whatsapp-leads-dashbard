import { useState } from 'react';
import { Button } from '../../components/Button';
import { Plus, Trash2, Save, Play } from 'lucide-react';

const globalIntents = [
  { 
    id: 1,
    intent: 'Product Inquiry',
    phrases: ['show products', 'what do you sell', 'product catalog', 'browse items'],
    response: 'I can help you browse our products. What category are you interested in?',
    usageCount: 2345
  },
  { 
    id: 2,
    intent: 'Price Check',
    phrases: ['how much', 'price', 'cost', 'what is the rate'],
    response: 'Let me check the price for you.',
    usageCount: 1876
  },
  { 
    id: 3,
    intent: 'Order Status',
    phrases: ['track order', 'where is my order', 'delivery status', 'order update'],
    response: 'Please share your order ID and I will check the status for you.',
    usageCount: 1543
  },
];

export function AdminAIConfig() {
  const [selectedIntent, setSelectedIntent] = useState(globalIntents[0]);
  const [testMessage, setTestMessage] = useState('');

  return (
    <div className="space-y-6">
      <div>
        <h1>AI & Bot Configuration</h1>
        <p className="text-[var(--text-secondary)] mt-1">Manage global AI training data and bot behavior</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
          <p className="text-[var(--text-secondary)] text-sm">Total Intents</p>
          <h3 className="mt-2">23</h3>
        </div>
        <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
          <p className="text-[var(--text-secondary)] text-sm">Training Phrases</p>
          <h3 className="mt-2">456</h3>
        </div>
        <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
          <p className="text-[var(--text-secondary)] text-sm">Avg AI Accuracy</p>
          <h3 className="mt-2 text-[var(--success)]">94.2%</h3>
        </div>
        <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
          <p className="text-[var(--text-secondary)] text-sm">Messages Processed</p>
          <h3 className="mt-2">45.6K</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Intent List */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
            <div className="flex items-center justify-between mb-4">
              <h3>Global Intents</h3>
              <Button size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Intent
              </Button>
            </div>

            <div className="space-y-3">
              {globalIntents.map((intent) => (
                <div
                  key={intent.id}
                  onClick={() => setSelectedIntent(intent)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedIntent.id === intent.id
                      ? 'border-[var(--primary)] bg-blue-50'
                      : 'border-[var(--border)] hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm">{intent.intent}</h4>
                    <span className="text-xs text-[var(--text-secondary)]">
                      {intent.usageCount.toLocaleString()} uses
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {intent.phrases.slice(0, 3).map((phrase, idx) => (
                      <span key={idx} className="bg-gray-100 px-2 py-1 rounded text-xs">
                        {phrase}
                      </span>
                    ))}
                    {intent.phrases.length > 3 && (
                      <span className="text-xs text-[var(--text-secondary)]">
                        +{intent.phrases.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Edit Intent */}
          <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
            <div className="flex items-center justify-between mb-4">
              <h3>Edit Intent: {selectedIntent.intent}</h3>
              <button className="p-1 hover:bg-gray-100 rounded">
                <Trash2 className="w-4 h-4 text-[var(--danger)]" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2">Intent Name</label>
                <input
                  type="text"
                  value={selectedIntent.intent}
                  className="w-full px-4 py-2 rounded-lg border border-[var(--border)] focus:outline-none focus:border-[var(--primary)]"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Training Phrases</label>
                <div className="space-y-2">
                  {selectedIntent.phrases.map((phrase, idx) => (
                    <div key={idx} className="flex gap-2">
                      <input
                        type="text"
                        value={phrase}
                        className="flex-1 px-4 py-2 rounded-lg border border-[var(--border)] focus:outline-none focus:border-[var(--primary)]"
                      />
                      <button className="p-2 hover:bg-gray-100 rounded">
                        <Trash2 className="w-4 h-4 text-[var(--danger)]" />
                      </button>
                    </div>
                  ))}
                </div>
                <Button variant="secondary" size="sm" className="mt-2">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Phrase
                </Button>
              </div>

              <div>
                <label className="block text-sm mb-2">Default Response</label>
                <textarea
                  value={selectedIntent.response}
                  className="w-full px-4 py-3 rounded-lg border border-[var(--border)] resize-none focus:outline-none focus:border-[var(--primary)]"
                  rows={3}
                />
              </div>

              <Button>
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </div>

          {/* Global Settings */}
          <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
            <h3 className="mb-4">Global AI Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm">Enable AI for new businesses by default</p>
                  <p className="text-xs text-[var(--text-secondary)]">Auto-activate AI chatbot for new signups</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 text-[var(--primary)]" />
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm">Collect conversation analytics</p>
                  <p className="text-xs text-[var(--text-secondary)]">Track AI performance metrics</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 text-[var(--primary)]" />
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm">Auto-improve AI responses</p>
                  <p className="text-xs text-[var(--text-secondary)]">Learn from successful conversations</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 text-[var(--primary)]" />
              </div>

              <div>
                <label className="block text-sm mb-2">Confidence Threshold</label>
                <input
                  type="range"
                  min="50"
                  max="100"
                  defaultValue="75"
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-[var(--text-secondary)] mt-1">
                  <span>50% (More responses)</span>
                  <span>75%</span>
                  <span>100% (More accurate)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Flow Simulator */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl border border-[var(--border)] p-4 sticky top-8">
            <h4 className="mb-4">AI Flow Simulator</h4>

            <div className="bg-gray-50 rounded-lg p-4 mb-4 h-64 overflow-y-auto">
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <p className="text-sm">Hello! How can I help you today?</p>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">AI Bot • Just now</p>
                </div>

                {testMessage && (
                  <>
                    <div className="bg-blue-50 rounded-lg p-3 ml-8">
                      <p className="text-sm">{testMessage}</p>
                      <p className="text-xs text-[var(--text-secondary)] mt-1">Test User • Just now</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <p className="text-sm">{selectedIntent.response}</p>
                      <p className="text-xs text-[var(--text-secondary)] mt-1">AI Bot • Just now</p>
                      <div className="mt-2 p-2 bg-green-50 rounded text-xs">
                        <span className="text-[var(--success)]">✓ Matched: {selectedIntent.intent}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="space-y-3">
              <input
                type="text"
                value={testMessage}
                onChange={(e) => setTestMessage(e.target.value)}
                placeholder="Type a test message..."
                className="w-full px-4 py-2 rounded-lg border border-[var(--border)] focus:outline-none focus:border-[var(--primary)]"
              />
              <Button className="w-full">
                <Play className="w-4 h-4 mr-2" />
                Test AI Response
              </Button>

              <div className="border-t border-[var(--border)] pt-3">
                <p className="text-xs text-[var(--text-secondary)] mb-2">Quick Tests</p>
                <div className="space-y-1">
                  <button
                    onClick={() => setTestMessage('show me products')}
                    className="w-full text-left px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded text-xs"
                  >
                    "show me products"
                  </button>
                  <button
                    onClick={() => setTestMessage('how much is this')}
                    className="w-full text-left px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded text-xs"
                  >
                    "how much is this"
                  </button>
                  <button
                    onClick={() => setTestMessage('track my order')}
                    className="w-full text-left px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded text-xs"
                  >
                    "track my order"
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
