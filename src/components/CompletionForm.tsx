import React from 'react';

interface CompletionFormProps {
  referenceNo: string;
  documents: { name: string; url?: string }[];
  createdBy: string;
  departmentManager: string;
  onClose: () => void;
}


const CompletionForm: React.FC<CompletionFormProps> = ({
  referenceNo,
  documents,
  createdBy,
  departmentManager,
  onClose,
}) => {
  // Demo: If no documents/data provided, use dummy values for preview
  const demoDocuments = [
    { name: 'Completion_Report.pdf', url: '#' },
    { name: 'Inspection_Photos.zip', url: '#' },
    { name: 'SignOff_Sheet.docx', url: '#' },
  ];
  // Always use demo values for preview
  const docs = demoDocuments;
  const demoCreatedBy = 'Juan Dela Cruz';
  const demoDeptManager = 'Maria Santos';
  const demoReferenceNo = referenceNo || 'REF-101';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 w-full max-w-lg relative">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          onClick={onClose}
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl font-bold mb-6 text-blue-900 dark:text-blue-200">Completion Form</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Reference Number</label>
            <div className="mt-1 text-gray-900 dark:text-gray-100 font-semibold">{demoReferenceNo}</div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Created By</label>
            <div className="mt-1 text-gray-900 dark:text-gray-100">{demoCreatedBy}</div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Department Manager Approved</label>
            <div className="mt-1 text-gray-900 dark:text-gray-100">{demoDeptManager}</div>
          </div>
        </div>
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Documents Attached</label>
          <div className="flex items-center gap-4 mb-2">
            <button
              className="inline-flex items-center px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="button"
              onClick={() => alert('Upload functionality coming soon!')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Upload Document
            </button>
          </div>
          <ul className="list-disc pl-5 mt-1">
            {docs.length > 0 ? (
              docs.map((doc, idx) => (
                <li key={idx} className="text-gray-900 dark:text-gray-100">
                  {doc.url ? (
                    <a href={doc.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-300 underline hover:text-blue-800 dark:hover:text-blue-400">{doc.name}</a>
                  ) : (
                    doc.name
                  )}
                </li>
              ))
            ) : (
              <li className="text-gray-500 dark:text-gray-400">No documents attached.</li>
            )}
          </ul>
        </div>
        <div className="flex justify-end gap-4 mt-8">
          <button
            className="py-2 px-4 bg-gray-300 hover:bg-gray-400 text-gray-900 font-semibold rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-gray-400"
            onClick={onClose}
            type="button"
          >
            Close
          </button>
          <button
            className="py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => alert('Submitted!')}
            type="button"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompletionForm;
