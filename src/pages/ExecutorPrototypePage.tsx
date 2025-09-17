import React from 'react';
import CreateRequestForm from '../components/CreateRequestForm';
import CompletionForm from '../components/CompletionForm';
import { UserContext } from '../context/UserContext';

// Temporary page to demo the dashboard as an Executor
const ExecutorPrototypePage: React.FC = () => {
  const executorUser = {
    id: '888',
    name: 'Prototype Executor',
    role: 'executor' as import('../context/UserContext').UserRole,
  };
  const setUser = (_user: typeof executorUser) => {};
  const allRequests = [
    {
      referenceNo: 'REF-101',
      department: 'Production',
      typeOfChange: 'Install New Conveyor System',
      proposedDate: '2025-10-10',
      permTemp: 'Permanent',
      existingSystem: 'Old conveyor',
      proposedChange: 'Automated conveyor',
      benefits: 'Efficiency',
      evaluation: [],
      status: 'For Execution',
      executorId: '888',
      approverId: '999',
      reviewerId: '2',
      requestorId: '3',
    },
    {
      referenceNo: 'REF-102',
      department: 'IT',
      typeOfChange: 'Deploy New Security Patch',
      proposedDate: '2025-10-15',
      permTemp: 'Permanent',
      existingSystem: 'Unpatched',
      proposedChange: 'Patched',
      benefits: 'Security',
      evaluation: [],
      status: 'For Execution',
      executorId: '888',
      approverId: '999',
      reviewerId: '2',
      requestorId: '4',
    },
    {
      referenceNo: 'REF-103',
      department: 'Facilities',
      typeOfChange: 'Renovate Meeting Rooms',
      proposedDate: '2025-10-20',
      permTemp: 'Temporary',
      existingSystem: 'Old rooms',
      proposedChange: 'Modern rooms',
      benefits: 'Comfort',
      evaluation: [],
      status: 'Completed',
      executorId: '888',
      approverId: '999',
      reviewerId: '2',
      requestorId: '5',
    },
    // ...add more as needed
  ];
  // Filtering state for table
  const [search, setSearch] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState('All');
  const statusOptions = ['All', ...Array.from(new Set(allRequests.map(r => r.status)))]

  // Modal state for viewing details
  const [showDetailModal, setShowDetailModal] = React.useState(false);
  const [selectedRequest, setSelectedRequest] = React.useState<any | null>(null);
  // Modal state for completion form
  const [showCompletionForm, setShowCompletionForm] = React.useState(false);
  const [completionRequest, setCompletionRequest] = React.useState<any | null>(null);

  // Filtered requests for table
  const executorRequests = allRequests.filter(r =>
    r.executorId === executorUser.id &&
    (statusFilter === 'All' ? true : r.status === statusFilter) &&
    (r.typeOfChange || '').toLowerCase().includes(search.toLowerCase())
  );

  const ExecutorRequestTable: React.FC = () => (
    <div className="overflow-x-auto">
      <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">Requests Assigned for Execution</h4>
      {/* Search and Filter Controls */}
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
      </div>
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Reference No.</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Department</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Type</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Proposed Date</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          {executorRequests.map((req, idx) => (
            <tr key={idx}>
              <td className="px-4 py-2 whitespace-nowrap text-blue-700 dark:text-blue-300 underline cursor-pointer hover:text-blue-900 dark:hover:text-blue-400"
                onClick={() => {
                  setSelectedRequest(req);
                  setShowDetailModal(true);
                }}
                title="View Details"
              >
                {req.referenceNo}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-gray-900 dark:text-gray-100">{req.department}</td>
              <td className="px-4 py-2 whitespace-nowrap text-gray-900 dark:text-gray-100">{req.typeOfChange}</td>
              <td className="px-4 py-2 whitespace-nowrap text-gray-900 dark:text-gray-100">{req.proposedDate}</td>
              <td className="px-4 py-2 whitespace-nowrap text-gray-900 dark:text-gray-100">{req.status || 'For Execution'}</td>
              <td className="px-4 py-2 whitespace-nowrap flex gap-2">
                <button
                  className="inline-flex items-center justify-center p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
                  title="Create Action"
                  aria-label="Create Action"
                  onClick={() => {
                    setCompletionRequest(req);
                    setShowCompletionForm(true);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showDetailModal && selectedRequest && (
        <CreateRequestForm
          onClose={() => {
            setShowDetailModal(false);
            setSelectedRequest(null);
          }}
          onSubmit={() => {}}
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
          readOnly={true}
        />
      )}
      {showCompletionForm && completionRequest && (
        <CompletionForm
          referenceNo={completionRequest.referenceNo}
          documents={completionRequest.documents || []}
          createdBy={completionRequest.createdBy || 'Unknown'}
          departmentManager={completionRequest.departmentManager || 'Unknown'}
          onClose={() => {
            setShowCompletionForm(false);
            setCompletionRequest(null);
          }}
        />
      )}
    </div>
  );

  return (
    <UserContext.Provider value={{ user: executorUser, setUser }}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-300 p-4 sm:p-8">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-600 text-white font-semibold text-sm shadow dark:bg-blue-500">Executor View</span>
            <h1 className="text-2xl font-bold text-blue-900 dark:text-blue-200">Dashboard</h1>
          </div>
          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { title: 'Total Requests', value: '8', change: '+1 this week', color: 'bg-blue-500', icon: '📝' },
              { title: 'For Execution', value: '4', change: '+1', color: 'bg-yellow-500', icon: '⚙️' },
              { title: 'Completed', value: '3', change: '+1', color: 'bg-green-500', icon: '✅' },
              { title: 'Submitted', value: '1', change: '0', color: 'bg-red-500', icon: '⏰' },
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
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-300">
            <ExecutorRequestTable />
          </div>
          <div className="mt-8 text-gray-500 dark:text-gray-400 text-sm text-center">
            (This is a prototype view for the <span className="font-semibold text-blue-700 dark:text-blue-300">Executor</span> role.<br className="hidden sm:inline" /> Only requests assigned to you for execution are shown. You can mark them as completed.)
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default ExecutorPrototypePage;
