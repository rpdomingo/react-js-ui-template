import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationRoutes } from '../routes';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const location = useLocation();

  // Mobile-specific handler to close sidebar on navigation
  const handleMobileNavigation = () => {
    // Only close on mobile (this will be called only from mobile links)
    onToggle();
  };

  return (
    <>
      {/* Desktop Sidebar - takes up space in flex layout */}
  <div className="hidden lg:flex lg:w-64 lg:flex-col bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 h-full">
        {/* Header */}
  <div className="border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between px-4 py-4 pb-[1.1rem]">
            {/* Dummy Logo SVG */}
            <span className="flex items-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="#2563EB"/>
                <text x="16" y="21" textAnchor="middle" fontSize="16" fill="white" fontFamily="Arial" fontWeight="bold">L</text>
              </svg>
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-gray-100">Logo</span>
            </span>
            <button
              onClick={onToggle}
              className="p-1 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Close sidebar"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-2 overflow-y-auto min-h-0">
          <ul className="space-y-1">
            {navigationRoutes.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  // No onClick handler for desktop - sidebar stays open
                  className={`w-full flex items-center space-x-3 px-0 py-3 rounded-lg transition-colors duration-200 group text-left ${
                    location.pathname === link.path
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200'
                  }`}
                >
                  <span className="text-xl ml-0">{link.icon}</span>
                  <span className={`font-medium ${
                    location.pathname === link.path
                      ? 'text-blue-700 dark:text-blue-300'
                      : 'group-hover:text-gray-900 dark:group-hover:text-gray-100'
                  }`}>
                    {link.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Footer - Fixed at bottom */}
        <div className="border-t border-gray-200 dark:border-gray-800 p-4 mt-auto">
          <div className="text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">Version 1.0.0</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">© 2025 MyApp</p>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
  <div className={`lg:hidden fixed inset-0 z-50 ${isOpen ? '' : 'pointer-events-none'}`}>
        {/* Backdrop */}
        <div 
          className={`fixed inset-0 bg-black transition-opacity ${
            isOpen ? 'opacity-50' : 'opacity-0'
          }`}
          onClick={onToggle}
        />
        
        {/* Sidebar Panel */}
        <div className={`fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-900 transform transition-transform flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          {/* Header */}
          <div className="border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between px-4 py-4 pb-6">
              {/* Dummy Logo SVG */}
              <span className="flex items-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="8" fill="#2563EB"/>
                  <text x="16" y="21" textAnchor="middle" fontSize="16" fill="white" fontFamily="Arial" fontWeight="bold">L</text>
                </svg>
                <span className="ml-2 text-xl font-bold text-gray-900 dark:text-gray-100">Logo</span>
              </span>
              <button
                onClick={onToggle}
                className="p-1 rounded-md hover:bg-gray-100 transition-colors"
                aria-label="Close sidebar"
              >
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-4 py-2 overflow-y-auto min-h-0">
            <ul className="space-y-1">
              {navigationRoutes.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    onClick={handleMobileNavigation} // Close mobile sidebar when navigating
                    className={`w-full flex items-center space-x-3 px-0 py-3 rounded-lg transition-colors duration-200 group text-left ${
                      location.pathname === link.path
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200'
                    }`}
                  >
                    <span className="text-xl ml-0">{link.icon}</span>
                    <span className={`font-medium ${
                      location.pathname === link.path
                        ? 'text-blue-700 dark:text-blue-300'
                        : 'group-hover:text-gray-900 dark:group-hover:text-gray-100'
                    }`}>
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Footer - Fixed at bottom */}
          <div className="border-t border-gray-200 dark:border-gray-800 p-4 mt-auto">
            <div className="text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400">Version 1.0.0</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">© 2025 MyApp</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
