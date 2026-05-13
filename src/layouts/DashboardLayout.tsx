import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  LayoutDashboard, 
  Smartphone, 
  FileText, 
  IndianRupee, 
  Settings, 
  LogOut,
  Menu,
  X,
  Bell,
  Search,
  MessageCircle
} from 'lucide-react';
import { useState } from 'react';
import { useAppStore } from '@/store/useAppStore';
import { cn } from '@/utils/cn';

const menuItems = [
  { label: 'Overview', icon: LayoutDashboard, path: '/dashboard' },
  { label: 'My Devices', icon: Smartphone, path: '/dashboard/devices' },
  { label: 'My Claims', icon: FileText, path: '/dashboard/claims/track' },
  { label: 'Payments', icon: IndianRupee, path: '/dashboard/payments' },
  { label: 'Settings', icon: Settings, path: '/dashboard/settings' },
];

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { pathname } = useLocation();
  const user = useAppStore(state => state.user);
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
              Secure<span className="text-primary">Mobile</span>
            </span>
          )}
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {menuItems.map((item) => {
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
                <item.icon className="w-5 h-5 shrink-0" />
                {isSidebarOpen && <span className="font-bold text-sm">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 mt-auto space-y-2">
          <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10 mb-4 overflow-hidden">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black text-xs shrink-0">
                {user?.name?.[0]}
              </div>
              {isSidebarOpen && (
                <div className="truncate">
                  <p className="text-xs font-bold truncate">{user?.name}</p>
                  <p className="text-[10px] text-foreground/40 font-bold">Premium Plan</p>
                </div>
              )}
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className={cn(
              "w-full flex items-center gap-4 p-4 rounded-2xl text-red-500 hover:bg-red-500/5 transition-all group",
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
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border px-6 py-4 flex items-center justify-between">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-foreground/5 rounded-xl transition-all hidden lg:block"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-4">
            <button className="p-2.5 hover:bg-foreground/5 rounded-xl transition-all relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-background" />
            </button>
            <Link to="/dashboard/support" className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-xl text-xs font-bold hover:opacity-90 transition-all">
              <MessageCircle className="w-4 h-4" />
              Support
            </Link>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
