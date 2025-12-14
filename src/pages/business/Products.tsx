import { useState } from 'react';
import { DataTable } from '../../components/DataTable';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { Plus, Filter, Upload, Trash2, Edit, Package, AlertTriangle, Tag, DollarSign } from 'lucide-react';
import { motion } from 'motion/react';

const products = [
  { 
    id: 'P001', 
    name: 'Wireless Headphones', 
    category: 'Electronics', 
    price: '₹2,499', 
    stock: 45,
    image: '🎧',
    variants: 'Black, White, Blue'
  },
  { 
    id: 'P002', 
    name: 'Cotton T-Shirt', 
    category: 'Fashion', 
    price: '₹599', 
    stock: 120,
    image: '👕',
    variants: 'S, M, L, XL'
  },
  { 
    id: 'P003', 
    name: 'Smart Watch', 
    category: 'Electronics', 
    price: '₹4,999', 
    stock: 28,
    image: '⌚',
    variants: 'Black, Silver'
  },
  { 
    id: 'P004', 
    name: 'Yoga Mat', 
    category: 'Sports', 
    price: '₹899', 
    stock: 65,
    image: '🧘',
    variants: 'Blue, Purple, Green'
  },
  { 
    id: 'P005', 
    name: 'Coffee Maker', 
    category: 'Home & Kitchen', 
    price: '₹3,499', 
    stock: 15,
    image: '☕',
    variants: 'Standard'
  },
];

export function BusinessProducts() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
    cod: true,
  });

  const columns = [
    { 
      header: 'Product', 
      accessor: 'name',
      render: (name: string, row: any) => (
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl relative overflow-hidden group"
            style={{ background: 'var(--gradient-card)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative z-10">{row.image}</span>
          </div>
          <div>
            <div className="text-[var(--text-primary)]">{name}</div>
            <div className="text-xs text-[var(--text-tertiary)]">{row.id}</div>
          </div>
        </div>
      )
    },
    { 
      header: 'Category', 
      accessor: 'category',
      render: (category: string) => (
        <span className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10 border border-[var(--primary)]/20 text-xs text-[var(--primary)]">
          {category}
        </span>
      )
    },
    { 
      header: 'Price', 
      accessor: 'price',
      render: (price: string) => (
        <span className="gradient-text">{price}</span>
      )
    },
    { 
      header: 'Stock', 
      accessor: 'stock',
      render: (stock: number) => (
        <span className={`px-3 py-1.5 rounded-xl text-xs ${
          stock < 20 
            ? 'bg-[var(--danger)]/10 text-[var(--danger)] border border-[var(--danger)]/20' 
            : 'bg-[var(--success)]/10 text-[var(--success)] border border-[var(--success)]/20'
        }`}>
          {stock} units
        </span>
      )
    },
    { header: 'Variants', accessor: 'variants' },
    { 
      header: 'Actions', 
      accessor: 'id',
      render: () => (
        <div className="flex gap-2">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-xl hover:bg-[var(--primary)]/10 transition-all group"
          >
            <Edit className="w-4 h-4 text-[var(--primary)] group-hover:scale-110 transition-transform" />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-xl hover:bg-[var(--danger)]/10 transition-all group"
          >
            <Trash2 className="w-4 h-4 text-[var(--danger)] group-hover:scale-110 transition-transform" />
          </motion.button>
        </div>
      )
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div 
        className="flex items-center justify-between"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div>
          <h1 className="gradient-text">Product Management</h1>
          <p className="text-[var(--text-secondary)] mt-2">Manage your product catalog with AI-powered insights</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" icon={<Filter className="w-4 h-4" />}>
            Filters
          </Button>
          <Button onClick={() => setIsAddModalOpen(true)} icon={<Plus className="w-4 h-4" />}>
            Add Product
          </Button>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6 relative overflow-hidden group cursor-pointer"
          whileHover={{ y: -5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-start justify-between relative z-10">
            <div>
              <p className="text-[var(--text-tertiary)] text-sm mb-2">Total Products</p>
              <h3 className="text-3xl gradient-text">273</h3>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--primary)]/20 to-[var(--primary)]/10 flex items-center justify-center">
              <Package className="w-6 h-6 text-[var(--primary)]" />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 relative overflow-hidden group cursor-pointer"
          whileHover={{ y: -5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--danger)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-start justify-between relative z-10">
            <div>
              <p className="text-[var(--text-tertiary)] text-sm mb-2">Low Stock</p>
              <h3 className="text-3xl text-[var(--danger)]">12</h3>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--danger)]/20 to-[var(--danger)]/10 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-[var(--danger)]" />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-6 relative overflow-hidden group cursor-pointer"
          whileHover={{ y: -5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-start justify-between relative z-10">
            <div>
              <p className="text-[var(--text-tertiary)] text-sm mb-2">Categories</p>
              <h3 className="text-3xl gradient-text">8</h3>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--secondary)]/20 to-[var(--secondary)]/10 flex items-center justify-center">
              <Tag className="w-6 h-6 text-[var(--secondary)]" />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-6 relative overflow-hidden group cursor-pointer"
          whileHover={{ y: -5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--success)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-start justify-between relative z-10">
            <div>
              <p className="text-[var(--text-tertiary)] text-sm mb-2">Total Value</p>
              <h3 className="text-3xl text-[var(--success)]">₹12.5L</h3>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--success)]/20 to-[var(--success)]/10 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-[var(--success)]" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Products Table */}
      <DataTable columns={columns} data={products} />

      {/* Add Product Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add New Product"
      >
        <div className="space-y-6">
          {/* Image Upload */}
          <div>
            <label className="block text-sm text-[var(--text-secondary)] mb-3">Product Images</label>
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="glass-card border-2 border-dashed border-[var(--card-border)] rounded-2xl p-10 text-center cursor-pointer group hover:border-[var(--primary)] transition-all"
            >
              <div className="relative">
                <Upload className="w-12 h-12 mx-auto text-[var(--text-tertiary)] mb-3 group-hover:text-[var(--primary)] transition-colors" />
                <p className="text-sm text-[var(--text-primary)]">Click to upload or drag and drop</p>
                <p className="text-xs text-[var(--text-tertiary)] mt-2">PNG, JPG up to 10MB</p>
              </div>
            </motion.div>
          </div>

          {/* Product Name */}
          <Input
            label="Product Name"
            type="text"
            placeholder="Enter product name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          {/* Category and Price */}
          <div className="grid grid-cols-2 gap-4">
            <Select
              label="Category"
              options={[
                { value: '', label: 'Select category' },
                { value: 'electronics', label: 'Electronics' },
                { value: 'fashion', label: 'Fashion' },
                { value: 'home', label: 'Home & Kitchen' },
                { value: 'sports', label: 'Sports' },
              ]}
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            />

            <Input
              label="Price (₹)"
              type="number"
              placeholder="0"
              icon={<DollarSign className="w-4 h-4" />}
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            />
          </div>

          {/* Stock Quantity */}
          <Input
            label="Stock Quantity"
            type="number"
            placeholder="0"
            icon={<Package className="w-4 h-4" />}
            value={formData.stock}
            onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
          />

          {/* Variants */}
          <Input
            label="Variants"
            type="text"
            placeholder="e.g., S, M, L or Black, White"
          />

          {/* COD Toggle */}
          <motion.div 
            className="flex items-center gap-3 p-4 rounded-2xl glass-card"
            whileHover={{ scale: 1.01 }}
          >
            <input
              type="checkbox"
              id="cod"
              checked={formData.cod}
              onChange={(e) => setFormData({ ...formData, cod: e.target.checked })}
              className="w-5 h-5 rounded-lg accent-[var(--primary)] cursor-pointer"
            />
            <label htmlFor="cod" className="text-sm text-[var(--text-primary)] cursor-pointer flex-1">
              Enable Cash on Delivery (COD)
            </label>
          </motion.div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button className="flex-1">Save Product</Button>
            <Button variant="secondary" onClick={() => setIsAddModalOpen(false)}>Cancel</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
