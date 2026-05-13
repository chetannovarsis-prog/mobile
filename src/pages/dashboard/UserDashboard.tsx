import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  FileText, 
  Shield, 
  Plus, 
  ArrowRight, 
  Activity, 
  Clock, 
  Zap,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppStore } from '@/store/useAppStore';
import { cn } from '@/utils/cn';

export default function UserDashboard() {
  const user = useAppStore(state => state.user);
  const devices = useAppStore(state => state.devices);
  const claims = useAppStore(state => state.claims);

  const stats = [
    { label: 'Protected Devices', value: devices.length, icon: Smartphone, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { label: 'Active Claims', value: claims.filter(c => c.status !== 'Completed' && c.status !== 'Rejected').length, icon: FileText, color: 'text-amber-500', bg: 'bg-amber-500/10' },
    { label: 'Protection Score', value: '98', icon: Shield, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  ];

  return (
    <div className="p-10 space-y-10 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-extrabold mb-2">Welcome back, {user?.name}!</h1>
          <p className="text-foreground/50 font-medium">Your devices are secured with premium protection.</p>
        </div>
        <Link to="/dashboard/devices/add" className="px-6 py-3 bg-primary text-primary-foreground rounded-2xl font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-primary/20">
          <Plus className="w-5 h-5" />
          Add New Device
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border p-8 rounded-[2.5rem] relative overflow-hidden group"
          >
            <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-6", stat.bg, stat.color)}>
              <stat.icon className="w-6 h-6" />
            </div>
            <p className="text-[10px] text-foreground/40 font-black uppercase tracking-widest mb-1">{stat.label}</p>
            <h3 className="text-3xl font-black">{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Active Devices List */}
        <div className="lg:col-span-2 bg-card border border-border rounded-[2.5rem] p-10">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold">Your Devices</h3>
            <Link to="/dashboard/devices" className="text-primary text-sm font-bold hover:underline">View All</Link>
          </div>
          
          <div className="space-y-6">
            {devices.length > 0 ? (
              devices.map((device) => (
                <div key={device.id} className="flex items-center gap-6 p-6 bg-foreground/5 border border-border rounded-[2rem] hover:border-primary/30 transition-all group">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-border">
                    <img src={device.image} alt={device.model} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold">{device.brand} {device.model}</h4>
                    <p className="text-xs text-foreground/40 font-bold uppercase tracking-widest mt-1">IMEI: {device.imei}</p>
                  </div>
                  <div className={cn(
                    "px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border",
                    device.status === 'Approved' ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" : "bg-amber-500/10 text-amber-500 border-amber-500/20"
                  )}>
                    {device.status}
                  </div>
                  <button className="p-2 hover:bg-foreground/10 rounded-xl transition-all">
                    <ChevronRight className="w-5 h-5 text-foreground/20" />
                  </button>
                </div>
              ))
            ) : (
              <div className="text-center py-20 bg-foreground/5 rounded-[2rem] border border-dashed border-border">
                <Smartphone className="w-12 h-12 text-foreground/20 mx-auto mb-4" />
                <p className="text-foreground/40 font-bold">No devices registered yet.</p>
                <Link to="/dashboard/devices/add" className="text-primary font-bold mt-4 inline-block hover:underline">Add one now</Link>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions / Activity */}
        <div className="space-y-8">
          <div className="bg-primary text-primary-foreground p-8 rounded-[2.5rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
            <h3 className="text-xl font-bold mb-4 relative z-10">Premium Support</h3>
            <p className="text-primary-foreground/70 text-sm mb-8 relative z-10 font-medium">Get priority assistance for your device claims anytime.</p>
            <button className="bg-white text-primary px-6 py-3 rounded-xl font-black text-sm relative z-10 hover:scale-105 transition-all">
              Chat with Expert
            </button>
          </div>

          <div className="bg-card border border-border p-8 rounded-[2.5rem]">
            <h3 className="text-xl font-bold mb-6">Recent Claims</h3>
            <div className="space-y-6">
              {claims.length > 0 ? (
                claims.map(claim => (
                  <div key={claim.id} className="flex gap-4 items-start pb-6 border-b border-border last:border-0 last:pb-0">
                    <div className="p-2 bg-amber-500/10 text-amber-500 rounded-lg">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">{claim.deviceName}</p>
                      <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40 mt-1">{claim.status}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <Activity className="w-8 h-8 text-foreground/10 mx-auto mb-2" />
                  <p className="text-xs font-bold text-foreground/40">No recent activities.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChevronRight(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
}
