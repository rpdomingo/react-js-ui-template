import React from 'react';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Smith',
      role: 'Frontend Developer',
      email: 'john.smith@company.com',
      avatar: 'JS',
      status: 'online',
      projects: 3,
      skills: ['React', 'TypeScript', 'Tailwind CSS']
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Backend Developer',
      email: 'sarah.johnson@company.com',
      avatar: 'SJ',
      status: 'online',
      projects: 2,
      skills: ['Node.js', 'Python', 'PostgreSQL']
    },
    {
      id: 3,
      name: 'Mike Chen',
      role: 'UI/UX Designer',
      email: 'mike.chen@company.com',
      avatar: 'MC',
      status: 'away',
      projects: 4,
      skills: ['Figma', 'Adobe XD', 'Prototyping']
    },
    {
      id: 4,
      name: 'Anna Williams',
      role: 'Project Manager',
      email: 'anna.williams@company.com',
      avatar: 'AW',
      status: 'online',
      projects: 5,
      skills: ['Agile', 'Scrum', 'Leadership']
    },
    {
      id: 5,
      name: 'David Brown',
      role: 'DevOps Engineer',
      email: 'david.brown@company.com',
      avatar: 'DB',
      status: 'offline',
      projects: 2,
      skills: ['Docker', 'AWS', 'Kubernetes']
    },
    {
      id: 6,
      name: 'Emma Davis',
      role: 'QA Engineer',
      email: 'emma.davis@company.com',
      avatar: 'ED',
      status: 'online',
      projects: 3,
      skills: ['Testing', 'Automation', 'Selenium']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'away': return 'bg-yellow-500';
      case 'offline': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Team Members</h1>
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            + Invite Member
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-lg font-bold text-gray-700">
                    {member.avatar}
                  </div>
                  <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(member.status)} rounded-full border-2 border-white`} />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="text-sm text-gray-900">{member.email}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600">Active Projects</p>
                  <p className="text-sm text-gray-900">{member.projects} projects</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-2">Skills</p>
                  <div className="flex flex-wrap gap-1">
                    {member.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
