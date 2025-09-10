import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import { useSidebar } from '../hooks/useSidebar';

const Layout: React.FC = () => {
  const { isOpen, toggle } = useSidebar();

  return (
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
        <main className="flex-1 overflow-auto bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
