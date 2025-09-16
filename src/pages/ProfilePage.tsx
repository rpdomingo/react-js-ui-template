import React from 'react';

const ProfilePage: React.FC = () => {
  const userStats = [
    { label: 'Projects Completed', value: 12, icon: '✅' },
    { label: 'Tasks in Progress', value: 8, icon: '⏳' },
    { label: 'Team Collaborations', value: 25, icon: '🤝' },
    { label: 'Hours Logged', value: 156, icon: '⏰' },
  ];

  const recentActivity = [
    { action: 'Updated project "E-commerce Website"', time: '2 hours ago', type: 'project' },
    { action: 'Commented on task "API Documentation"', time: '4 hours ago', type: 'comment' },
    { action: 'Completed task "Database Migration"', time: '1 day ago', type: 'complete' },
    { action: 'Joined team "Frontend Development"', time: '2 days ago', type: 'team' },
    { action: 'Created new project "Mobile App"', time: '3 days ago', type: 'project' },
  ];

  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'UI/UX Design', level: 60 },
    { name: 'Project Management', level: 80 },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'project': return '📁';
      case 'comment': return '💬';
      case 'complete': return '✅';
      case 'team': return '👥';
      default: return '📌';
    }
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm mb-8">
          {/* Profile Header */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-3xl font-bold text-gray-700 dark:text-gray-100">
                JD
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">John Doe</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-2">Senior Frontend Developer</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">john.doe@company.com</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Joined March 2024</p>
              </div>
              <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200 transition-colors">
                Edit Profile
              </button>
            </div>
          </div>

          {/* Bio */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">About</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Passionate frontend developer with 5+ years of experience in building scalable web applications. 
              Specializes in React, TypeScript, and modern CSS frameworks. Enjoys collaborating with 
              cross-functional teams to deliver exceptional user experiences.
            </p>
          </div>

          {/* Contact Info */}
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                <p className="text-gray-900 dark:text-gray-100">john.doe@company.com</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                <p className="text-gray-900 dark:text-gray-100">+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                <p className="text-gray-900 dark:text-gray-100">San Francisco, CA</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Time Zone</p>
                <p className="text-gray-900 dark:text-gray-100">PST (UTC-8)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {userStats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm text-center">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Skills */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Skills</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{skill.name}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-black dark:bg-blue-400 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Recent Activity</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="text-xl">{getActivityIcon(activity.type)}</div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 dark:text-gray-100">{activity.action}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
