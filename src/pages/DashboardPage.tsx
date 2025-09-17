import React, { useState } from 'react';
import CreateRequestForm from '../components/CreateRequestForm';
import RequestTable from '../components/RequestTable';
import { useUser } from '../context/UserContext';

const DashboardPage: React.FC = () => {
  // Data for the table
  const initialRequests = [
    {
      referenceNo: 'REF-001',
      department: 'Operations',
      typeOfChange: 'Change of Turbine Room Structure',
      proposedDate: '2025-09-20',
      permTemp: 'Permanent',
      existingSystem: 'Old turbine room layout',
      proposedChange: 'New structure for better airflow',
      benefits: 'Improved efficiency',
      evaluation: [],
      status: 'Pending',
      approverId: '1',
      reviewerId: '2',
      requestorId: '3',
    },
    {
      referenceNo: 'REF-002',
      department: 'Safety',
      typeOfChange: 'Upgrade Safety Gear to Class IV',
      proposedDate: '2025-09-22',
      permTemp: 'Permanent',
      existingSystem: 'Class III gear',
      proposedChange: 'Switch to Class IV',
      benefits: 'Better protection',
      evaluation: [],
      status: 'Approved',
      approverId: '1',
      reviewerId: '2',
      requestorId: '4',
    },
    {
      referenceNo: 'REF-003',
      department: 'Maintenance',
      typeOfChange: 'Install New Fire Suppression System',
      proposedDate: '2025-09-25',
      permTemp: 'Temporary',
      existingSystem: 'Old system',
      proposedChange: 'Modern suppression system',
      benefits: 'Increased safety',
      evaluation: [],
      status: 'Pending',
      approverId: '1',
      reviewerId: '2',
      requestorId: '5',
    },
    {
      referenceNo: 'REF-004',
      department: 'IT',
      typeOfChange: 'Upgrade Network Switches',
      proposedDate: '2025-10-01',
      permTemp: 'Permanent',
      existingSystem: '10Gbps switches',
      proposedChange: '40Gbps switches',
      benefits: 'Faster network',
      evaluation: [],
      status: 'Pending',
      approverId: '2',
      reviewerId: '3',
      requestorId: '6',
    },
    {
      referenceNo: 'REF-005',
      department: 'HR',
      typeOfChange: 'Implement Remote Work Policy',
      proposedDate: '2025-10-05',
      permTemp: 'Permanent',
      existingSystem: 'Onsite only',
      proposedChange: 'Hybrid work',
      benefits: 'Employee satisfaction',
      evaluation: [],
      status: 'Approved',
      approverId: '3',
      reviewerId: '4',
      requestorId: '7',
    },
    {
      referenceNo: 'REF-006',
      department: 'Finance',
      typeOfChange: 'Switch Accounting Software',
      proposedDate: '2025-10-10',
      permTemp: 'Permanent',
      existingSystem: 'Legacy system',
      proposedChange: 'Modern SaaS',
      benefits: 'Efficiency',
      evaluation: [],
      status: 'Rejected',
      approverId: '4',
      reviewerId: '5',
      requestorId: '8',
    },
    {
      referenceNo: 'REF-007',
      department: 'Logistics',
      typeOfChange: 'Add New Delivery Route',
      proposedDate: '2025-10-12',
      permTemp: 'Temporary',
      existingSystem: 'Current routes',
      proposedChange: 'Add express route',
      benefits: 'Faster delivery',
      evaluation: [],
      status: 'Pending',
      approverId: '5',
      reviewerId: '6',
      requestorId: '9',
    },
    {
      referenceNo: 'REF-008',
      department: 'Production',
      typeOfChange: 'Upgrade Conveyor Belts',
      proposedDate: '2025-10-15',
      permTemp: 'Permanent',
      existingSystem: 'Old belts',
      proposedChange: 'Automated belts',
      benefits: 'Higher throughput',
      evaluation: [],
      status: 'Approved',
      approverId: '6',
      reviewerId: '7',
      requestorId: '10',
    },
    {
      referenceNo: 'REF-009',
      department: 'R&D',
      typeOfChange: 'Test New Material',
      proposedDate: '2025-10-18',
      permTemp: 'Temporary',
      existingSystem: 'Standard material',
      proposedChange: 'Experimental material',
      benefits: 'Innovation',
      evaluation: [],
      status: 'Pending',
      approverId: '7',
      reviewerId: '8',
      requestorId: '11',
    },
    {
      referenceNo: 'REF-010',
      department: 'Admin',
      typeOfChange: 'Change Office Layout',
      proposedDate: '2025-10-20',
      permTemp: 'Permanent',
      existingSystem: 'Cubicles',
      proposedChange: 'Open space',
      benefits: 'Collaboration',
      evaluation: [],
      status: 'Approved',
      approverId: '8',
      reviewerId: '9',
      requestorId: '12',
    },
    {
      referenceNo: 'REF-011',
      department: 'Security',
      typeOfChange: 'Install CCTV Cameras',
      proposedDate: '2025-10-22',
      permTemp: 'Permanent',
      existingSystem: 'No cameras',
      proposedChange: 'Full coverage',
      benefits: 'Safety',
      evaluation: [],
      status: 'Pending',
      approverId: '9',
      reviewerId: '10',
      requestorId: '13',
    },
    {
      referenceNo: 'REF-012',
      department: 'Legal',
      typeOfChange: 'Update Compliance Policy',
      proposedDate: '2025-10-25',
      permTemp: 'Permanent',
      existingSystem: 'Old policy',
      proposedChange: 'New standards',
      benefits: 'Regulatory compliance',
      evaluation: [],
      status: 'Approved',
      approverId: '10',
      reviewerId: '11',
      requestorId: '14',
    },
    {
      referenceNo: 'REF-013',
      department: 'Procurement',
      typeOfChange: 'Change Supplier',
      proposedDate: '2025-10-28',
      permTemp: 'Permanent',
      existingSystem: 'Supplier A',
      proposedChange: 'Supplier B',
      benefits: 'Cost savings',
      evaluation: [],
      status: 'Rejected',
      approverId: '11',
      reviewerId: '12',
      requestorId: '15',
    },
    {
      referenceNo: 'REF-014',
      department: 'QA',
      typeOfChange: 'Implement Automated Testing',
      proposedDate: '2025-11-01',
      permTemp: 'Permanent',
      existingSystem: 'Manual testing',
      proposedChange: 'Automated tools',
      benefits: 'Faster releases',
      evaluation: [],
      status: 'Pending',
      approverId: '12',
      reviewerId: '13',
      requestorId: '16',
    },
    {
      referenceNo: 'REF-015',
      department: 'Support',
      typeOfChange: 'Extend Helpdesk Hours',
      proposedDate: '2025-11-03',
      permTemp: 'Temporary',
      existingSystem: '9-5',
      proposedChange: '24/7',
      benefits: 'Better support',
      evaluation: [],
      status: 'Approved',
      approverId: '13',
      reviewerId: '14',
      requestorId: '17',
    },
    {
      referenceNo: 'REF-016',
      department: 'Facilities',
      typeOfChange: 'Renovate Restrooms',
      proposedDate: '2025-11-05',
      permTemp: 'Permanent',
      existingSystem: 'Old restrooms',
      proposedChange: 'Modern restrooms',
      benefits: 'Hygiene',
      evaluation: [],
      status: 'Pending',
      approverId: '14',
      reviewerId: '15',
      requestorId: '18',
    },
    {
      referenceNo: 'REF-017',
      department: 'Marketing',
      typeOfChange: 'Launch New Campaign',
      proposedDate: '2025-11-08',
      permTemp: 'Temporary',
      existingSystem: 'Current campaign',
      proposedChange: 'Social media focus',
      benefits: 'Brand awareness',
      evaluation: [],
      status: 'Approved',
      approverId: '15',
      reviewerId: '16',
      requestorId: '19',
    },
    {
      referenceNo: 'REF-018',
      department: 'Sales',
      typeOfChange: 'Change Commission Structure',
      proposedDate: '2025-11-10',
      permTemp: 'Permanent',
      existingSystem: 'Flat rate',
      proposedChange: 'Tiered commission',
      benefits: 'Motivation',
      evaluation: [],
      status: 'Pending',
      approverId: '16',
      reviewerId: '17',
      requestorId: '20',
    },
    {
      referenceNo: 'REF-019',
      department: 'Engineering',
      typeOfChange: 'Adopt Agile Methodology',
      proposedDate: '2025-11-12',
      permTemp: 'Permanent',
      existingSystem: 'Waterfall',
      proposedChange: 'Agile',
      benefits: 'Faster delivery',
      evaluation: [],
      status: 'Approved',
      approverId: '17',
      reviewerId: '18',
      requestorId: '21',
    },
    {
      referenceNo: 'REF-020',
      department: 'Design',
      typeOfChange: 'Update Brand Guidelines',
      proposedDate: '2025-11-15',
      permTemp: 'Permanent',
      existingSystem: 'Old guidelines',
      proposedChange: 'Modern look',
      benefits: 'Consistency',
      evaluation: [],
      status: 'Pending',
      approverId: '18',
      reviewerId: '19',
      requestorId: '22',
    },
    {
      referenceNo: 'REF-021',
      department: 'Operations',
      typeOfChange: 'Add Backup Generator',
      proposedDate: '2025-11-18',
      permTemp: 'Permanent',
      existingSystem: 'No backup',
      proposedChange: 'Diesel generator',
      benefits: 'Business continuity',
      evaluation: [],
      status: 'Approved',
      approverId: '19',
      reviewerId: '20',
      requestorId: '23',
    },
    {
      referenceNo: 'REF-022',
      department: 'Safety',
      typeOfChange: 'Conduct Fire Drill',
      proposedDate: '2025-11-20',
      permTemp: 'Temporary',
      existingSystem: 'Annual drill',
      proposedChange: 'Quarterly drill',
      benefits: 'Preparedness',
      evaluation: [],
      status: 'Pending',
      approverId: '20',
      reviewerId: '21',
      requestorId: '24',
    },
  ];

  const [requestData, setRequestData] = useState(initialRequests);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState<any | null>(null);


  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [pageSize, setPageSize] = useState(5);
  const [page, setPage] = useState(1);

  const { user } = useUser();
  const statusOptions = ['All', ...Array.from(new Set(requestData.map(r => r.status)))];

  const filteredRequests = requestData.filter(row => {
  const matchesSearch = (row.typeOfChange || '').toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'All' ? true : row.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredRequests.length / pageSize) || 1;
  const paginatedRequests = filteredRequests.slice((page - 1) * pageSize, page * pageSize);

  // Reset to page 1 if search, pageSize, or statusFilter changes
  React.useEffect(() => { setPage(1); }, [search, pageSize, statusFilter]);

  return (
    <div className="p-6 bg-white dark:bg-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Dashboard</h1> */}
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: 'Total Requests', value: '24', change: '+3 this week', color: 'bg-blue-500', icon: '📝' },
            { title: 'Pending Approvals', value: '5', change: '+1', color: 'bg-yellow-500', icon: '⏳' },
            { title: 'Approved Requests', value: '15', change: '+2', color: 'bg-green-500', icon: '✅' },
            { title: 'Rejected Requests', value: '4', change: '0', color: 'bg-red-500', icon: '❌' },
          ].map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">{stat.value}</p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">{stat.change}</p>
                </div>
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <span className="text-white text-xl">{stat.icon}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Requests Data Table */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Change Requests</h3>
            <button
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              type="button"
              onClick={() => setShowCreateModal(true)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
              Create New Request
            </button>
          </div>
          {showCreateModal && (
            <CreateRequestForm
              onClose={() => setShowCreateModal(false)}
              onSubmit={data => {
                setRequestData(prev => [data, ...prev]);
                setShowCreateModal(false);
              }}
            />
          )}
          {showEditModal && selectedRequest && (
            <CreateRequestForm
              onClose={() => {
                setShowEditModal(false);
                setSelectedRequest(null);
              }}
              onSubmit={data => {
                setRequestData(prev => prev.map(r => r === selectedRequest ? { ...r, ...data } : r));
                setShowEditModal(false);
                setSelectedRequest(null);
              }}
              initialData={{
                ...selectedRequest,
                evaluation:
                  selectedRequest.evaluation && selectedRequest.evaluation.length > 0
                    ? selectedRequest.evaluation
                    : [
                        { title: 'Is the change compliant with safety standards?', yes: null, no: null, completionDate: '' },
                        { title: 'Has the change been reviewed by management?', yes: null, no: null, completionDate: '' },
                        { title: 'Will the change impact plant operations?', yes: null, no: null, completionDate: '' },
                        { title: 'Is additional training required?', yes: null, no: null, completionDate: '' },
                      ],
              }}
            />
          )}
          {/* Search Filter & Page Size */}
          {/* Search, filter, and page size controls */}
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search request title..."
                className="w-full sm:w-64 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
              />
              <select
                value={statusFilter}
                onChange={e => setStatusFilter(e.target.value)}
                className="w-full sm:w-48 border border-gray-300 dark:border-gray-700 rounded-lg px-2 py-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
              >
                {statusOptions.map(option => (
                  <option key={option} value={option}>{option === 'All' ? 'All Statuses' : option}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2 sm:justify-end w-full sm:w-auto">
              <label htmlFor="pageSize" className="text-sm text-gray-700 dark:text-gray-200 whitespace-nowrap">Rows per page:</label>
              <select
                id="pageSize"
                value={pageSize}
                onChange={e => setPageSize(Number(e.target.value))}
                className="border border-gray-300 dark:border-gray-700 rounded-lg px-2 py-1 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
              >
                {[5, 10, 20, 50].map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Table */}
          <RequestTable
            requests={paginatedRequests}
            onEdit={req => {
              setSelectedRequest(req);
              setShowEditModal(true);
            }}
          />

          {/* Pagination Controls - moved outside table for proper alignment */}
          {filteredRequests.length > 0 && (
            <div className="flex flex-col sm:flex-row sm:items-center justify-end mt-4 gap-2 w-full">
              <span className="text-xs text-gray-700 dark:text-gray-200 sm:mr-auto">
                Showing {filteredRequests.length === 0 ? 0 : (page - 1) * pageSize + 1}
                -{Math.min(page * pageSize, filteredRequests.length)} of {filteredRequests.length}
              </span>
              <div className="flex items-center gap-2">
                {/* Rows per page dropdown (already present above, so hide here on large screens) */}
                <div className="flex items-center gap-1 sm:hidden">
                  <label htmlFor="pageSize-bottom" className="text-xs text-gray-700 dark:text-gray-200 whitespace-nowrap">Rows:</label>
                  <select
                    id="pageSize-bottom"
                    value={pageSize}
                    onChange={e => setPageSize(Number(e.target.value))}
                    className="border border-gray-300 dark:border-gray-700 rounded px-1 py-0.5 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-xs"
                  >
                    {[5, 10, 20, 50].map(size => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>
                <button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="flex items-center gap-1 px-2 py-1 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 text-xs font-medium shadow-sm transition-colors duration-150 hover:bg-blue-50 dark:hover:bg-blue-900 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Previous page"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                  Prev
                </button>
                <span className="text-xs text-gray-700 dark:text-gray-200">
                  Page {page} of {totalPages}
                </span>
                <button
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="flex items-center gap-1 px-2 py-1 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 text-xs font-medium shadow-sm transition-colors duration-150 hover:bg-blue-50 dark:hover:bg-blue-900 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Next page"
                >
                  Next
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
