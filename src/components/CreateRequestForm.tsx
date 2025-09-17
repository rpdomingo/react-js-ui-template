import React, { useState } from 'react';

interface EvaluationRow {
  title: string;
  yes: boolean | null;
  no: boolean | null;
  completionDate: string;
}

interface CreateRequestFormProps {
  onClose: () => void;
  onSubmit: (data: any) => void;
  initialData?: any;
  readOnly?: boolean;
}

const departments = ['Operations', 'Maintenance', 'Engineering', 'Safety', 'HR', 'Other'];
const permTempOptions = ['Permanent', 'Temporary'];
const defaultEvaluationRows: EvaluationRow[] = [
  { title: 'Is the change compliant with safety standards?', yes: null, no: null, completionDate: '' },
  { title: 'Has the change been reviewed by management?', yes: null, no: null, completionDate: '' },
  { title: 'Will the change impact plant operations?', yes: null, no: null, completionDate: '' },
  { title: 'Is additional training required?', yes: null, no: null, completionDate: '' },
];

const CreateRequestForm: React.FC<CreateRequestFormProps> = ({ onClose, onSubmit, initialData, readOnly }) => {
  const [department, setDepartment] = useState(initialData?.department || departments[0]);
  const [typeOfChange, setTypeOfChange] = useState(initialData?.typeOfChange || '');
  const [proposedDate, setProposedDate] = useState(initialData?.proposedDate || '');
  const [permTemp, setPermTemp] = useState(initialData?.permTemp || permTempOptions[0]);
  const [existingSystem, setExistingSystem] = useState(initialData?.existingSystem || '');
  const [proposedChange, setProposedChange] = useState(initialData?.proposedChange || '');
  const [benefits, setBenefits] = useState(initialData?.benefits || '');
  const [evaluation, setEvaluation] = useState<EvaluationRow[]>(initialData?.evaluation || defaultEvaluationRows);
  const [error, setError] = useState('');

  const handleEvalChange = (idx: number, field: 'yes' | 'no' | 'completionDate', value: any) => {
    setEvaluation(prev => prev.map((row, i) =>
      i === idx
        ? field === 'completionDate'
          ? { ...row, completionDate: value }
          : { ...row, yes: field === 'yes' ? value : false, no: field === 'no' ? value : false }
        : row
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!typeOfChange.trim() || !proposedDate || !existingSystem.trim() || !proposedChange.trim() || !benefits.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    onSubmit({
      department,
      typeOfChange,
      proposedDate,
      permTemp,
      existingSystem,
      proposedChange,
      benefits,
      evaluation,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div
  className="bg-white dark:bg-gray-900 rounded-lg shadow-lg w-full max-w-2xl p-6 relative my-8 max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-700 dark:scrollbar-track-gray-950"
  style={{ scrollbarColor: '#d1d5db #f3f4f6', scrollbarWidth: 'thin' }}
      >
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none"
          onClick={onClose}
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          {initialData ? (readOnly ? 'Request Details' : 'Edit Request') : 'Create New Request'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Department</label>
              <select
                className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={department}
                onChange={e => setDepartment(e.target.value)}
                disabled={readOnly}
              >
                {departments.map(dep => (
                  <option key={dep} value={dep}>{dep}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Type of Change</label>
              <input
                type="text"
                className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={typeOfChange}
                onChange={e => setTypeOfChange(e.target.value)}
                placeholder="Describe the type of change"
                required
                disabled={readOnly}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Proposed Change Date</label>
              <input
                type="date"
                className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={proposedDate}
                onChange={e => setProposedDate(e.target.value)}
                required
                disabled={readOnly}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Permanent or Temporary</label>
              <select
                className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={permTemp}
                onChange={e => setPermTemp(e.target.value)}
                disabled={readOnly}
              >
                {permTempOptions.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Existing System</label>
            <textarea
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={existingSystem}
              onChange={e => setExistingSystem(e.target.value)}
              placeholder="Describe the existing system"
              rows={2}
              required
              disabled={readOnly}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Proposed Change</label>
            <textarea
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={proposedChange}
              onChange={e => setProposedChange(e.target.value)}
              placeholder="Describe the proposed change"
              rows={2}
              required
              disabled={readOnly}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Benefits of Change</label>
            <textarea
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={benefits}
              onChange={e => setBenefits(e.target.value)}
              placeholder="Describe the benefits of the change"
              rows={2}
              required
              disabled={readOnly}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Evaluation Questionnaire</label>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 dark:border-gray-700 rounded-lg">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="px-2 py-1 text-xs font-semibold text-gray-700 dark:text-gray-200">Title</th>
                    <th className="px-2 py-1 text-xs font-semibold text-gray-700 dark:text-gray-200">Yes</th>
                    <th className="px-2 py-1 text-xs font-semibold text-gray-700 dark:text-gray-200">No</th>
                    <th className="px-2 py-1 text-xs font-semibold text-gray-700 dark:text-gray-200">Date of Completion (if Yes)</th>
                  </tr>
                </thead>
                <tbody>
                  {evaluation.map((row, idx) => (
                    <tr key={idx}>
                      <td className="px-2 py-1 text-sm text-gray-900 dark:text-gray-100">{row.title}</td>
                      <td className="px-2 py-1 text-center">
                        <input
                          type="radio"
                          name={`eval-yesno-${idx}`}
                          checked={row.yes === true}
                          onChange={() => handleEvalChange(idx, 'yes', true)}
                          disabled={readOnly}
                        />
                      </td>
                      <td className="px-2 py-1 text-center">
                        <input
                          type="radio"
                          name={`eval-yesno-${idx}`}
                          checked={row.no === true}
                          onChange={() => handleEvalChange(idx, 'no', true)}
                          disabled={readOnly}
                        />
                      </td>
                      <td className="px-2 py-1">
                        <input
                          type="date"
                          className="w-full border border-gray-300 dark:border-gray-700 rounded px-2 py-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-xs"
                          value={row.completionDate}
                          onChange={e => handleEvalChange(idx, 'completionDate', e.target.value)}
                          disabled={readOnly || row.yes !== true}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <div className="flex justify-end gap-2">
            <button
              type="button"
              className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              onClick={onClose}
            >
              Close
            </button>
            {!readOnly && (
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
              >
                {initialData ? 'Save' : 'Create'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateRequestForm;
