import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorBoundary from '../components/ErrorBoundary';

// Lazy load pages for better performance
const DashboardPage = lazy(() => import('../pages/DashboardPage'));
const ProjectsPage = lazy(() => import('../pages/ProjectsPage'));
const TeamPage = lazy(() => import('../pages/TeamPage'));
const AnalyticsPage = lazy(() => import('../pages/AnalyticsPage'));
const SettingsPage = lazy(() => import('../pages/SettingsPage'));
const HelpPage = lazy(() => import('../pages/HelpPage'));
const ProfilePage = lazy(() => import('../pages/ProfilePage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const DataTablePage = lazy(() => import('../pages/DataTablePage'));

// Wrapper component for lazy-loaded pages with error boundary
const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ErrorBoundary>
    <Suspense fallback={<LoadingSpinner />}>
      {children}
    </Suspense>
  </ErrorBoundary>
);

// Router configuration with best practices
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <PageWrapper><NotFoundPage /></PageWrapper>,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: 'dashboard',
        element: (
          <PageWrapper>
            <DashboardPage />
          </PageWrapper>
        ),
      },
      {
        path: 'projects',
        element: (
          <PageWrapper>
            <ProjectsPage />
          </PageWrapper>
        ),
      },
      {
        path: 'team',
        element: (
          <PageWrapper>
            <TeamPage />
          </PageWrapper>
        ),
      },
      {
        path: 'analytics',
        element: (
          <PageWrapper>
            <AnalyticsPage />
          </PageWrapper>
        ),
      },
      {
        path: 'settings',
        element: (
          <PageWrapper>
            <SettingsPage />
          </PageWrapper>
        ),
      },
      {
        path: 'help',
        element: (
          <PageWrapper>
            <HelpPage />
          </PageWrapper>
        ),
      },
      {
        path: 'profile',
        element: (
          <PageWrapper>
            <ProfilePage />
          </PageWrapper>
        ),
      },
      {
        path: 'datatable',
        element: (
          <PageWrapper>
            <DataTablePage />
          </PageWrapper>
        ),
      },
      {
        path: '*',
        element: (
          <PageWrapper>
            <NotFoundPage />
          </PageWrapper>
        ),
      },
    ],
  },
]);

// Navigation items configuration
export const navigationRoutes = [
  { name: 'Dashboard', path: '/dashboard', icon: '📊' },
  { name: 'Projects', path: '/projects', icon: '📁' },
  { name: 'Team', path: '/team', icon: '👥' },
  { name: 'Analytics', path: '/analytics', icon: '📈' },
  { name: 'Data Table', path: '/datatable', icon: '📋' },
  { name: 'Settings', path: '/settings', icon: '⚙️' },
  { name: 'Help', path: '/help', icon: '❓' },
  { name: 'Profile', path: '/profile', icon: '👤' },
] as const;
