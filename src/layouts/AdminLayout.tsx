import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  LayoutDashboard, 
  Users, 
  Smartphone, 
  FileText, 
  IndianRupee, 
  BarChart3, 
  MessageSquare, 
  Settings, 
  LogOut,
  Menu,
  X,
  Bell,
  Search
} from 'lucide-react';
import { useState } from 'react';
import { useAppStore } from '@/store/useAppStore';
import { cn } from '@/utils/cn';

const sidebarItems = [
  { label: 'Dashboard', icon: LayoutDashboard, path: '/admin' },
  { label: 'Customers', icon: Users, path: '/admin/customers' },
  { label: 'Devices', icon: Smartphone, path: '/admin/devices' },
  { label: 'Claims', icon: FileText, path: '/admin/claims' },
  { label: 'Payments', icon: IndianRupee, path: '/admin/payments' },
  { label: 'Reports', icon: BarChart3, path: '/admin/reports' },
  { label: 'Support', icon: MessageSquare, path: '/admin/support' },
  { label: 'Settings', icon: Settings, path: '/admin/settings' },
];

export default function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { pathname } = useLocation();
  const logout = useAppStore(state => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        className="fixed left-0 top-0 bottom-0 z-50 bg-card border-r border-border hidden lg:flex flex-col"
      >
        <div className="p-6 mb-8 flex items-center gap-3 overflow-hidden whitespace-nowrap">
          <div className="bg-primary p-2.5 rounded-xl shrink-0">
            <Shield className="w-6 h-6 text-primary-foreground" />
          </div>
          {isSidebarOpen && (
            <span className="text-xl font-bold tracking-tight">
              Secure<span className="text-primary">Admin</span>
            </span>
          )}
        </div>

        <nav className="flex-1 px-4 space-y-2 overflow-y-auto overflow-x-hidden">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                className={cn(
                  "flex items-center gap-4 p-4 rounded-2xl transition-all group relative",
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                    : "text-foreground/50 hover:bg-foreground/5 hover:text-foreground"
                )}
              >
                <item.icon className={cn("w-5 h-5 shrink-0 transition-transform group-hover:scale-110", isActive ? "" : "group-hover:text-primary")} />
                {isSidebarOpen && <span className="font-bold text-sm">{item.label}</span>}
                {!isSidebarOpen && (
                  <div className="absolute left-full ml-4 px-3 py-1 bg-foreground text-background rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-[60]">
                    {item.label}
                  </div>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 mt-auto">
          <button 
            onClick={handleLogout}
            className={cn(
              "w-full flex items-center gap-4 p-4 rounded-2xl text-red-500 hover:bg-red-500/5 transition-all group relative",
              !isSidebarOpen && "justify-center"
            )}
          >
            <LogOut className="w-5 h-5 shrink-0" />
            {isSidebarOpen && <span className="font-bold text-sm">Logout</span>}
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className={cn(
        "flex-1 flex flex-col transition-all duration-300",
        "lg:ml-[280px]",
        !isSidebarOpen && "lg:ml-[80px]"
      )}>
        {/* Header */}
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-foreground/5 rounded-xl transition-all hidden lg:block"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="relative hidden md:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-foreground/5 border border-border rounded-xl py-2.5 pl-12 pr-6 w-80 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium text-sm"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest hidden sm:block">
              Demo Mode
            </div>
            <button className="p-2.5 hover:bg-foreground/5 rounded-xl transition-all relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-background" />
            </button>
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black border border-primary/20">
              AD
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </main>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {!isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setIsSidebarOpen(true)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
