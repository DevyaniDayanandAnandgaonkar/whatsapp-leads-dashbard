import { useState } from 'react';
import { Button } from '../../components/Button';
import { Bot, Plus, Trash2, Save } from 'lucide-react';

const categories = [
  { name: 'Electronics', keywords: 'phone, laptop, headphones, charger' },
  { name: 'Fashion', keywords: 'shirt, dress, shoes, accessories' },
  { name: 'Home & Kitchen', keywords: 'furniture, appliances, utensils' },
];

export function BusinessAISettings() {
  const [greetingMessage, setGreetingMessage] = useState(
    "Hello! 👋 Welcome to our store. I'm your AI assistant. How can I help you today?"
  );

  const [trainingPhrases, setTrainingPhrases] = useState([
    { intent: 'Product Inquiry', phrases: ['show me products', 'what do you have', 'product catalog'] },
    { intent: 'Price Check', phrases: ['how much', 'what is the price', 'cost'] },
    { intent: 'Order Status', phrases: ['track order', 'where is my order', 'delivery status'] },
  ]);

  return (
    <div className="space-y-6">
      <div>
        <h1>AI Chat Settings</h1>
        <p className="text-[var(--text-secondary)] mt-1">Configure your AI chatbot behavior and responses</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Configuration */}
        <div className="lg:col-span-2 space-y-6">
          {/* Greeting Message */}
          <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
            <h4 className="mb-4">Greeting Message</h4>
            <textarea
              value={greetingMessage}
              onChange={(e) => setGreetingMessage(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-[var(--border)] resize-none focus:outline-none focus:border-[var(--primary)]"
              rows={3}
              placeholder="Enter your greeting message..."
            />
            <p className="text-xs text-[var(--text-secondary)] mt-2">
              This message will be sent when a customer first contacts you
            </p>
          </div>

          {/* Training Phrases */}
          <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
            <div className="flex items-center justify-between mb-4">
              <h4>Training Phrases</h4>
              <Button size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Intent
              </Button>
            </div>

            <div className="space-y-4">
              {trainingPhrases.map((item, idx) => (
                <div key={idx} className="border border-[var(--border)] rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <input
                      type="text"
                      value={item.intent}
                      className="text-sm px-3 py-1 rounded border border-[var(--border)] focus:outline-none focus:border-[var(--primary)]"
                    />
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Trash2 className="w-4 h-4 text-[var(--danger)]" />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.phrases.map((phrase, pIdx) => (
                      <span
                        key={pIdx}
                        className="bg-blue-50 text-[var(--primary)] px-3 py-1 rounded-full text-xs"
                      >
                        {phrase}
                      </span>
                    ))}
                    <button className="text-[var(--primary)] text-xs px-3 py-1 hover:bg-blue-50 rounded-full">
                      + Add phrase
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category Mapping */}
          <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
            <div className="flex items-center justify-between mb-4">
              <h4>Product Category Mapping</h4>
              <Button size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Category
              </Button>
            </div>

            <div className="space-y-3">
              {categories.map((category, idx) => (
                <div key={idx} className="border border-[var(--border)] rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm">{category.name}</h4>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Trash2 className="w-4 h-4 text-[var(--danger)]" />
                    </button>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] mb-2">Keywords:</p>
                  <input
                    type="text"
                    value={category.keywords}
                    className="w-full px-3 py-2 rounded-lg border border-[var(--border)] text-sm focus:outline-none focus:border-[var(--primary)]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Auto Responses */}
          <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
            <h4 className="mb-4">Auto Response Settings</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm">Send product recommendations</p>
                  <p className="text-xs text-[var(--text-secondary)]">AI suggests products based on conversation</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 text-[var(--primary)]" />
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm">Auto-reply to FAQs</p>
                  <p className="text-xs text-[var(--text-secondary)]">Respond to common questions automatically</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 text-[var(--primary)]" />
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm">Send order confirmations</p>
                  <p className="text-xs text-[var(--text-secondary)]">Auto-send order status updates</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 text-[var(--primary)]" />
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button>
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
            <Button variant="secondary">Reset to Default</Button>
          </div>
        </div>

        {/* Preview */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl border border-[var(--border)] p-4 sticky top-8">
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-[var(--border)]">
              <Bot className="w-5 h-5 text-[var(--primary)]" />
              <h4>Preview</h4>
            </div>

            <div className="space-y-3">
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm">{greetingMessage}</p>
                <p className="text-xs text-[var(--text-secondary)] mt-2">AI Bot • Just now</p>
              </div>

              <div className="bg-blue-50 rounded-lg p-3 ml-8">
                <p className="text-sm">Show me headphones</p>
                <p className="text-xs text-[var(--text-secondary)] mt-2">Customer • Just now</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm">Great! I found these headphones for you:</p>
                <div className="mt-2 p-2 bg-white rounded border border-[var(--border)]">
                  <div className="flex gap-2">
                    <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                      🎧
                    </div>
                    <div>
                      <p className="text-sm">Wireless Headphones</p>
                      <p className="text-xs text-[var(--primary)]">₹2,499</p>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-[var(--text-secondary)] mt-2">AI Bot • Just now</p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-[var(--border)]">
              <p className="text-xs text-[var(--text-secondary)]">
                This is a sample conversation preview. Actual responses may vary based on your settings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
