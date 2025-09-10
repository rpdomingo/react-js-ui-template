import React from 'react';

const ProjectsPage: React.FC = () => {
  const projects = [
    {
      id: 1,
      name: 'E-commerce Website',
      description: 'Modern React-based e-commerce platform',
      status: 'In Progress',
      progress: 75,
      team: ['John', 'Sarah', 'Mike'],
      dueDate: '2025-10-15'
    },
    {
      id: 2,
      name: 'Mobile App Development',
      description: 'Cross-platform mobile application using React Native',
      status: 'Planning',
      progress: 25,
      team: ['Anna', 'David'],
      dueDate: '2025-12-01'
    },
    {
      id: 3,
      name: 'API Integration',
      description: 'REST API integration and documentation',
      status: 'Review',
      progress: 90,
      team: ['Tom', 'Lisa', 'James'],
      dueDate: '2025-09-30'
    },
    {
      id: 4,
      name: 'Database Migration',
      description: 'Migrate legacy database to new infrastructure',
      status: 'Completed',
      progress: 100,
      team: ['Chris', 'Emma'],
      dueDate: '2025-09-01'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Planning': return 'bg-yellow-100 text-yellow-800';
      case 'Review': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            + New Project
          </button>
        </div>

        <div className="grid gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-3">{project.description}</p>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <span className="text-sm text-gray-500">Due: {project.dueDate}</span>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-600">Progress</span>
                        <span className="text-sm text-gray-600">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-black h-2 rounded-full transition-all duration-300"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">Team:</span>
                      <div className="flex -space-x-2">
                        {project.team.map((member, index) => (
                          <div
                            key={index}
                            className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-xs font-bold text-gray-700 border-2 border-white"
                            title={member}
                          >
                            {member[0]}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
