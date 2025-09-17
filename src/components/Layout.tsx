import React from 'react';
import { UserProvider } from '../context/UserContext';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import { useSidebar } from '../hooks/useSidebar';

const Layout: React.FC = () => {
  const { isOpen, toggle } = useSidebar();

  return (
    <UserProvider>
      <div className="flex h-screen">
        {/* Sidebar - only takes space when open on desktop */}
        {isOpen && (
          <div className="hidden lg:block">
            <Sidebar isOpen={isOpen} onToggle={toggle} />
          </div>
        )}
        {/* Mobile sidebar overlay */}
        <div className="lg:hidden">
          <Sidebar isOpen={isOpen} onToggle={toggle} />
        </div>
        {/* Main Content Area - fills remaining space */}
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Header */}
          <Header onToggleSidebar={toggle} />
          {/* Main Content */}
          <main className="flex-1 overflow-auto bg-white dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
            <Outlet />
          </main>
        </div>
      </div>
    </UserProvider>
  );
};

export default Layout;
