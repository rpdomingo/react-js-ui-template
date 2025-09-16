import React, { useState } from 'react';

interface DataRow {
  id: number;
  name: string;
  email: string;
  role: string;
}

const initialData: DataRow[] = [
  { id: 1, name: 'Alice Smith', email: 'alice@example.com', role: 'Admin' },
  { id: 2, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
  { id: 3, name: 'Charlie Lee', email: 'charlie@example.com', role: 'User' },
  { id: 4, name: 'Diana King', email: 'diana@example.com', role: 'Manager' },
  { id: 5, name: 'Evan Wright', email: 'evan@example.com', role: 'User' },
  { id: 6, name: 'Fiona Adams', email: 'fiona@example.com', role: 'Admin' },
  { id: 7, name: 'George Brown', email: 'george@example.com', role: 'User' },
  { id: 8, name: 'Hannah Clark', email: 'hannah@example.com', role: 'User' },
  { id: 9, name: 'Ian Davis', email: 'ian@example.com', role: 'Manager' },
  { id: 10, name: 'Julia Evans', email: 'julia@example.com', role: 'User' },
];

const PAGE_SIZE_OPTIONS = [10, 20, 50, 100];

const DataTablePage: React.FC = () => {

  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZE_OPTIONS[0]);
  const [data, setData] = useState<DataRow[]>(initialData);

  const filteredData = data.filter(row =>
    row.name.toLowerCase().includes(search.toLowerCase()) ||
    row.email.toLowerCase().includes(search.toLowerCase()) ||
    row.role.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / pageSize);
  const paginatedData = filteredData.slice((page - 1) * pageSize, page * pageSize);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPageSize(Number(e.target.value));
    setPage(1);
  };

  const handleEdit = (row: DataRow) => {
    alert(`Edit action for ${row.name}`);
  };

  const handleDelete = (row: DataRow) => {
    if (window.confirm(`Are you sure you want to delete ${row.name}?`)) {
      setData(prev => prev.filter(r => r.id !== row.id));
    }
  };

  return (
  <div className="p-6 bg-white dark:bg-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <h1 className="text-2xl font-bold mb-4">Data Table (Tailwind CSS)</h1>
  <div className="mb-4 flex flex-col md:flex-row md:justify-between md:items-center gap-2">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearch}
          className="border border-gray-300 dark:border-gray-700 rounded px-3 py-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        />
        <div className="flex items-center gap-2">
          <label htmlFor="pageSize" className="text-sm text-gray-700 dark:text-gray-200">Rows per page:</label>
          <select
            id="pageSize"
            value={pageSize}
            onChange={handlePageSizeChange}
            className="border border-gray-300 dark:border-gray-700 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          >
            {PAGE_SIZE_OPTIONS.map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 overflow-x-auto border border-gray-200 dark:border-gray-700">
        <table className="min-w-full bg-white dark:bg-gray-800">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b text-left dark:border-gray-700">ID</th>
              <th className="px-4 py-2 border-b text-left dark:border-gray-700">Name</th>
              <th className="px-4 py-2 border-b text-left dark:border-gray-700">Email</th>
              <th className="px-4 py-2 border-b text-left dark:border-gray-700">Role</th>
              <th className="px-4 py-2 border-b text-left dark:border-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-4 text-gray-500 dark:text-gray-400">No data found.</td>
              </tr>
            ) : (
              paginatedData.map(row => (
                <tr key={row.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-4 py-2 border-b dark:border-gray-700">{row.id}</td>
                  <td className="px-4 py-2 border-b dark:border-gray-700">{row.name}</td>
                  <td className="px-4 py-2 border-b dark:border-gray-700">{row.email}</td>
                  <td className="px-4 py-2 border-b dark:border-gray-700">{row.role}</td>
                  <td className="px-4 py-2 border-b dark:border-gray-700">
                    <button
                      onClick={() => handleEdit(row)}
                      className="mr-2 p-2 rounded-full bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 transition"
                      title="Edit"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 13l6.536-6.536a2 2 0 112.828 2.828L11.828 15.828a2 2 0 01-1.414.586H7v-3a2 2 0 01.586-1.414z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleDelete(row)}
                      className="p-2 rounded-full bg-red-100 dark:bg-red-900 hover:bg-red-200 dark:hover:bg-red-800 transition"
                      title="Delete"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-600 dark:text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-4 gap-2">
        <span className="text-sm text-gray-600 dark:text-gray-300">Showing {paginatedData.length} of {filteredData.length} results</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="flex items-center px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium shadow-sm hover:bg-blue-50 dark:hover:bg-blue-900 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            Previous
          </button>
          <span className="px-2 py-1 text-gray-700 dark:text-gray-300">Page {page} of {totalPages}</span>
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages || totalPages === 0}
            className="flex items-center px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium shadow-sm hover:bg-blue-50 dark:hover:bg-blue-900 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Next
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTablePage;
