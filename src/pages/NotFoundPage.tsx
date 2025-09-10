import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center p-8">
        <div className="text-6xl mb-4">404</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Page Not Found</h1>
        <p className="text-gray-600 mb-6">
          Sorry, the page you are looking for doesn't exist.
        </p>
        <Link
          to="/dashboard"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors inline-flex items-center"
        >
          <span className="mr-2">🏠</span>
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
