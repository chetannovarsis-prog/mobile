import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import PublicLayout from '@/layouts/PublicLayout';
import DashboardLayout from '@/layouts/DashboardLayout';
import AdminLayout from '@/layouts/AdminLayout';

// Public Pages
import HomePage from '@/pages/public/HomePage';
import LoginPage from '@/pages/public/LoginPage';
import RegisterPage from '@/pages/public/RegisterPage';

// User Dashboard Pages
import UserDashboard from '@/pages/dashboard/UserDashboard';
import AddDevice from '@/pages/dashboard/AddDevice';
import MyDevices from '@/pages/dashboard/MyDevices';
import SubmitClaim from '@/pages/dashboard/SubmitClaim';
import TrackClaim from '@/pages/dashboard/TrackClaim';
import PaymentPage from '@/pages/dashboard/PaymentPage';

// Admin Pages
import AdminDashboard from '@/pages/admin/AdminDashboard';
import CustomersPage from '@/pages/admin/CustomersPage';
import AdminDevicesPage from '@/pages/admin/DevicesPage';
import AdminClaimsPage from '@/pages/admin/ClaimsPage';
import AdminPaymentsPage from '@/pages/admin/PaymentsPage';
import AdminReportsPage from '@/pages/admin/ReportsPage';
import AdminSupportPage from '@/pages/admin/SupportPage';
import AdminSettingsPage from '@/pages/admin/SettingsPage';
import UserSettingsPage from '@/pages/dashboard/SettingsPage';

import { useAppStore } from '@/store/useAppStore';

const ProtectedRoute = ({ children, adminOnly = false }: { children: React.ReactNode, adminOnly?: boolean }) => {
  const user = useAppStore(state => state.user);
  if (!user) return <Navigate to="/login" replace />;
  if (adminOnly && !user.isAdmin) return <Navigate to="/dashboard" replace />;
  return <>{children}</>;
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
    ]
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <UserDashboard /> },
      { path: 'devices', element: <MyDevices /> },
      { path: 'devices/add', element: <AddDevice /> },
      { path: 'claims/new', element: <SubmitClaim /> },
      { path: 'claims/track', element: <TrackClaim /> },
      { path: 'payments', element: <PaymentPage /> },
      { path: 'settings', element: <UserSettingsPage /> },
    ]
  },

  {
    path: '/admin',
    element: (
      <ProtectedRoute adminOnly>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <AdminDashboard /> },
      { path: 'customers', element: <CustomersPage /> },
      { path: 'devices', element: <AdminDevicesPage /> },
      { path: 'claims', element: <AdminClaimsPage /> },
      { path: 'payments', element: <AdminPaymentsPage /> },
      { path: 'reports', element: <AdminReportsPage /> },
      { path: 'support', element: <AdminSupportPage /> },
      { path: 'settings', element: <AdminSettingsPage /> },
    ]
  }
]);

