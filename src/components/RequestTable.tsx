import React from 'react';
import { useUser } from '../context/UserContext';

interface Request {
  referenceNo?: string;
  department: string;
  typeOfChange: string;
  proposedDate: string;
  permTemp: string;
  existingSystem: string;
  proposedChange: string;
  benefits: string;
  evaluation: any[];
  approverId?: string;
  reviewerId?: string;
  status?: string;
}

interface RequestTableProps {
  requests: Request[];
  title?: string;
  onEdit?: (request: Request) => void;
}

const RequestTable: React.FC<RequestTableProps> = ({ requests, title, onEdit }) => {
  if (!requests.length) return <div className="text-gray-500 dark:text-gray-400 p-4">No requests found.</div>;
  return (
    <div className="overflow-x-auto">
      {title && <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">{title}</h4>}
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead>
          <tr>
            {requests[0]?.referenceNo && (
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Reference No.</th>
            )}
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Department</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Type</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Proposed Date</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          {requests.map((req, idx) => (
            <tr key={idx}>
              {req.referenceNo && (
                <td className="px-4 py-2 whitespace-nowrap text-gray-900 dark:text-gray-100">{req.referenceNo}</td>
              )}
              <td className="px-4 py-2 whitespace-nowrap text-gray-900 dark:text-gray-100">{req.department}</td>
              <td className="px-4 py-2 whitespace-nowrap text-gray-900 dark:text-gray-100">{req.typeOfChange}</td>
              <td className="px-4 py-2 whitespace-nowrap text-gray-900 dark:text-gray-100">{req.proposedDate}</td>
              <td className="px-4 py-2 whitespace-nowrap text-gray-900 dark:text-gray-100">{req.status || 'Pending'}</td>
              <td className="px-4 py-2 whitespace-nowrap">
                <button
                  className="inline-flex items-center justify-center p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onClick={() => onEdit && onEdit(req)}
                  title="Edit"
                  aria-label="Edit"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 13l6.768-6.768a2 2 0 112.828 2.828L11.828 15.828a2 2 0 01-1.414.586H7v-3.414a2 2 0 01.586-1.414z" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestTable;
