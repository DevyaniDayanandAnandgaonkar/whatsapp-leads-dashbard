import { useState } from 'react';
import { DataTable } from '../../components/DataTable';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import { Filter, Eye } from 'lucide-react';

const tickets = [
  {
    id: 'TKT001',
    business: 'Fashion Hub',
    subject: 'Payment gateway integration issue',
    priority: 'High',
    status: 'Open',
    assignee: 'Unassigned',
    created: '12 Dec 2025'
  },
  {
    id: 'TKT002',
    business: 'Tech Store',
    subject: 'Unable to upload product images',
    priority: 'Medium',
    status: 'In Progress',
    assignee: 'Rahul Kumar',
    created: '12 Dec 2025'
  },
  {
    id: 'TKT003',
    business: 'Home Essentials',
    subject: 'AI chatbot not responding',
    priority: 'High',
    status: 'In Progress',
    assignee: 'Priya Sharma',
    created: '11 Dec 2025'
  },
  {
    id: 'TKT004',
    business: 'Sports World',
    subject: 'Feature request: Bulk import',
    priority: 'Low',
    status: 'Open',
    assignee: 'Unassigned',
    created: '11 Dec 2025'
  },
  {
    id: 'TKT005',
    business: 'Food Delights',
    subject: 'Invoice download not working',
    priority: 'Medium',
    status: 'Closed',
    assignee: 'Amit Patel',
    created: '10 Dec 2025'
  },
];

const agents = ['Rahul Kumar', 'Priya Sharma', 'Amit Patel'];

export function AdminSupport() {
  const [selectedTicket, setSelectedTicket] = useState<any>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const columns = [
    { header: 'Ticket ID', accessor: 'id' },
    { 
      header: 'Business', 
      accessor: 'business',
      render: (business: string, row: any) => (
        <div>
          <div className="text-sm">{business}</div>
          <div className="text-xs text-[var(--text-secondary)]">{row.subject}</div>
        </div>
      )
    },
    { 
      header: 'Priority', 
      accessor: 'priority',
      render: (priority: string) => (
        <span className={`px-3 py-1 rounded-full text-xs ${
          priority === 'High' ? 'bg-red-100 text-red-700' :
          priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
          'bg-gray-100 text-gray-700'
        }`}>
          {priority}
        </span>
      )
    },
    { 
      header: 'Status', 
      accessor: 'status',
      render: (status: string) => (
        <span className={`px-3 py-1 rounded-full text-xs ${
          status === 'Open' ? 'bg-blue-100 text-blue-700' :
          status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' :
          'bg-green-100 text-green-700'
        }`}>
          {status}
        </span>
      )
    },
    { 
      header: 'Assignee', 
      accessor: 'assignee',
      render: (assignee: string, row: any) => (
        <select 
          className="px-3 py-1 rounded-lg border border-[var(--border)] text-sm"
          defaultValue={assignee}
        >
          <option value="Unassigned">Unassigned</option>
          {agents.map(agent => (
            <option key={agent} value={agent}>{agent}</option>
          ))}
        </select>
      )
    },
    { header: 'Created', accessor: 'created' },
    { 
      header: 'Actions', 
      accessor: 'id',
      render: (id: string, row: any) => (
        <button
          onClick={() => {
            setSelectedTicket(row);
            setIsDetailsOpen(true);
          }}
          className="p-1 hover:bg-gray-100 rounded"
        >
          <Eye className="w-4 h-4 text-[var(--primary)]" />
        </button>
      )
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Support Tickets</h1>
          <p className="text-[var(--text-secondary)] mt-1">Manage customer support requests</p>
        </div>
        <Button variant="secondary">
          <Filter className="w-4 h-4 mr-2" />
          Filters
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
          <p className="text-[var(--text-secondary)] text-sm">Total Tickets</p>
          <h3 className="mt-2">234</h3>
          <p className="text-xs text-[var(--text-secondary)] mt-2">All time</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
          <p className="text-[var(--text-secondary)] text-sm">Open Tickets</p>
          <h3 className="mt-2 text-[var(--danger)]">23</h3>
          <p className="text-xs text-[var(--text-secondary)] mt-2">Needs attention</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
          <p className="text-[var(--text-secondary)] text-sm">In Progress</p>
          <h3 className="mt-2 text-[var(--warning)]">45</h3>
          <p className="text-xs text-[var(--text-secondary)] mt-2">Being worked on</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-[var(--border)]">
          <p className="text-[var(--text-secondary)] text-sm">Avg Resolution Time</p>
          <h3 className="mt-2 text-[var(--success)]">4.2h</h3>
          <p className="text-xs text-[var(--text-secondary)] mt-2">Last 30 days</p>
        </div>
      </div>

      <div className="flex gap-2 bg-white rounded-lg p-1 border border-[var(--border)] w-fit">
        {['All', 'Open', 'In Progress', 'Closed'].map((status) => (
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

      <DataTable columns={columns} data={tickets} />

      {/* Ticket Details Modal */}
      <Modal
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        title={`Ticket Details - ${selectedTicket?.id}`}
        maxWidth="max-w-3xl"
      >
        {selectedTicket && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-[var(--text-secondary)] mb-1">Business</p>
                <p className="text-sm">{selectedTicket.business}</p>
              </div>
              <div>
                <p className="text-xs text-[var(--text-secondary)] mb-1">Created</p>
                <p className="text-sm">{selectedTicket.created}</p>
              </div>
              <div>
                <p className="text-xs text-[var(--text-secondary)] mb-1">Priority</p>
                <span className={`px-3 py-1 rounded-full text-xs ${
                  selectedTicket.priority === 'High' ? 'bg-red-100 text-red-700' :
                  selectedTicket.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {selectedTicket.priority}
                </span>
              </div>
              <div>
                <p className="text-xs text-[var(--text-secondary)] mb-1">Status</p>
                <select className="px-3 py-1 rounded-lg border border-[var(--border)] text-sm">
                  <option>{selectedTicket.status}</option>
                  <option>Open</option>
                  <option>In Progress</option>
                  <option>Closed</option>
                </select>
              </div>
            </div>

            <div>
              <p className="text-xs text-[var(--text-secondary)] mb-1">Subject</p>
              <p>{selectedTicket.subject}</p>
            </div>

            <div>
              <p className="text-xs text-[var(--text-secondary)] mb-2">Description</p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs text-[var(--text-secondary)] mb-2">Conversation</p>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-sm">Customer (Fashion Hub)</p>
                    <p className="text-xs text-[var(--text-secondary)]">12 Dec, 10:30 AM</p>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">
                    I'm having trouble integrating the payment gateway. It keeps showing an error.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-sm">Support Agent (Rahul Kumar)</p>
                    <p className="text-xs text-[var(--text-secondary)]">12 Dec, 10:45 AM</p>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Thank you for contacting us. Can you please share the error message you're seeing?
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs text-[var(--text-secondary)] mb-2">Add Reply</p>
              <textarea
                className="w-full px-4 py-3 rounded-lg border border-[var(--border)] resize-none focus:outline-none focus:border-[var(--primary)]"
                rows={4}
                placeholder="Type your response..."
              />
            </div>

            <div className="flex gap-3">
              <Button className="flex-1">Send Reply</Button>
              <Button variant="secondary">Close Ticket</Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
