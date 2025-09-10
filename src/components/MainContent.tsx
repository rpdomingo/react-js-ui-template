import React from 'react';

const MainContent: React.FC = () => {
  return (
    <main className="flex-1 p-6 bg-white overflow-auto">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back!</h2>
          <p className="text-gray-600">Here's what's happening with your projects today.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: 'Total Projects', value: '24', change: '+12%', icon: '📊' },
            { title: 'Active Tasks', value: '156', change: '+8%', icon: '✅' },
            { title: 'Team Members', value: '12', change: '+2%', icon: '👥' },
            { title: 'Completed', value: '89%', change: '+5%', icon: '🎯' },
          ].map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-green-600 mt-1">{stat.change}</p>
                </div>
                <div className="text-3xl">{stat.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Projects */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Recent Projects</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {[
                  { name: 'Website Redesign', status: 'In Progress', progress: 75 },
                  { name: 'Mobile App', status: 'Review', progress: 90 },
                  { name: 'API Integration', status: 'Planning', progress: 25 },
                ].map((project, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{project.name}</h4>
                      <p className="text-sm text-gray-600">{project.status}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-black h-2 rounded-full"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">{project.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'New Project', icon: '➕', color: 'bg-blue-500' },
                  { name: 'Add Team Member', icon: '👤', color: 'bg-green-500' },
                  { name: 'Generate Report', icon: '📄', color: 'bg-purple-500' },
                  { name: 'Schedule Meeting', icon: '📅', color: 'bg-orange-500' },
                ].map((action, index) => (
                  <button
                    key={index}
                    className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
                  >
                    <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center text-white text-xl mb-2`}>
                      {action.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-900">{action.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500">
          <p>&copy; 2025 React Navigation App. Built with React & Tailwind CSS.</p>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
