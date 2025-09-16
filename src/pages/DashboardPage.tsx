import React from 'react';

const DashboardPage: React.FC = () => {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Dashboard</h1>
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: 'Total Users', value: '2,543', change: '+12%', color: 'bg-blue-500' },
            { title: 'Revenue', value: '$45,210', change: '+8%', color: 'bg-green-500' },
            { title: 'Orders', value: '1,234', change: '+5%', color: 'bg-purple-500' },
            { title: 'Growth', value: '23%', change: '+3%', color: 'bg-orange-500' },
          ].map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">{stat.value}</p>
                  <p className="text-sm text-green-600 mt-1">{stat.change}</p>
                </div>
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <span className="text-white text-xl">📊</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Chart placeholder */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Analytics Overview</h3>
          <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-300">Chart placeholder - Dashboard analytics would go here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
