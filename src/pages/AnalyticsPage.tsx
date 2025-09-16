import React from 'react';

const AnalyticsPage: React.FC = () => {
  const analyticsData = [
    { metric: 'Page Views', value: '125,430', change: '+12.5%', trend: 'up' },
    { metric: 'Unique Visitors', value: '23,456', change: '+8.2%', trend: 'up' },
    { metric: 'Bounce Rate', value: '32.5%', change: '-2.1%', trend: 'down' },
    { metric: 'Avg Session Duration', value: '3m 42s', change: '+15.3%', trend: 'up' },
  ];

  const topPages = [
    { page: '/dashboard', views: 45230, percentage: 35 },
    { page: '/projects', views: 32180, percentage: 25 },
    { page: '/team', views: 28950, percentage: 22 },
    { page: '/analytics', views: 15640, percentage: 12 },
    { page: '/settings', views: 8200, percentage: 6 },
  ];

  const trafficSources = [
    { source: 'Direct', visitors: 12500, percentage: 45 },
    { source: 'Search Engines', visitors: 8750, percentage: 32 },
    { source: 'Social Media', visitors: 4200, percentage: 15 },
    { source: 'Referrals', visitors: 2180, percentage: 8 },
  ];

  return (
    <div className="p-6 bg-white dark:bg-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Analytics</h1>
          <div className="flex space-x-2">
            <select className="border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
            <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200 transition-colors text-sm">
              Export
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {analyticsData.map((data, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm text-gray-600 dark:text-gray-300">{data.metric}</h3>
                <span className={`text-sm ${
                  data.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {data.trend === 'up' ? '\u2197' : '\u2198'}
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">{data.value}</p>
              <p className={`text-sm ${
                data.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {data.change} vs last period
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Pages */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Top Pages</h3>
            <div className="space-y-4">
              {topPages.map((page, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{page.page}</p>
                    <div className="flex items-center mt-1">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-3">
                        <div
                          className="bg-black dark:bg-blue-500 h-2 rounded-full"
                          style={{ width: `${page.percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-300 min-w-0">
                        {page.views.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Traffic Sources</h3>
            <div className="space-y-4">
              {trafficSources.map((source, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{source.source}</p>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{source.percentage}%</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-3">
                        <div
                          className="bg-black dark:bg-blue-500 h-2 rounded-full"
                          style={{ width: `${source.percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-300 min-w-0">
                        {source.visitors.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chart Placeholder */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm mt-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Traffic Over Time</h3>
          <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-300">Chart placeholder - Traffic timeline would go here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
