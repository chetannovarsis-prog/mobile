import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Shield, Calendar, IndianRupee, MoreVertical, Plus, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppStore } from '@/store/useAppStore';
import { cn } from '@/utils/cn';

export default function MyDevices() {
  const devices = useAppStore(state => state.devices);

  return (
    <div className="p-10 space-y-10 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-extrabold mb-2">My Devices</h1>
          <p className="text-foreground/50 font-medium">Manage and monitor protection for all your registered devices.</p>
        </div>
        <Link to="/dashboard/devices/add" className="px-6 py-3 bg-primary text-primary-foreground rounded-2xl font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-primary/20">
          <Plus className="w-5 h-5" />
          Register New Device
        </Link>
      </div>

      {devices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {devices.map((device, i) => (
            <motion.div
              key={device.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-[2.5rem] overflow-hidden group hover:border-primary/50 transition-all shadow-lg hover:shadow-primary/5"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img src={device.image} alt={device.model} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-6 right-6">
                  <div className={cn(
                    "px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border backdrop-blur-md shadow-2xl",
                    device.status === 'Approved' ? "bg-emerald-500/20 text-emerald-500 border-emerald-500/30" : "bg-amber-500/20 text-amber-500 border-amber-500/30"
                  )}>
                    {device.status}
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{device.brand} {device.model}</h3>
                    <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest">{device.variant}</p>
                  </div>
                  <button className="p-2 hover:bg-foreground/5 rounded-xl transition-all">
                    <MoreVertical className="w-5 h-5 text-foreground/20" />
                  </button>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-foreground/5 flex items-center justify-center">
                      <Shield className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40">Protection Plan</p>
                      <p className="text-sm font-bold">Comprehensive Care</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-foreground/5 flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-foreground/60" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40">Purchase Date</p>
                      <p className="text-sm font-bold">{device.purchaseDate}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link to={`/dashboard/claims/new?deviceId=${device.id}`} className="flex-1 py-3 bg-primary text-primary-foreground rounded-xl font-bold text-xs text-center shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                    File a Claim
                  </Link>
                  <button className="flex-1 py-3 bg-foreground/5 border border-border rounded-xl font-bold text-xs hover:bg-foreground/10 transition-all">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-32 bg-card border border-dashed border-border rounded-[3rem]">
          <Smartphone className="w-20 h-20 text-foreground/10 mx-auto mb-6" />
          <h3 className="text-2xl font-bold mb-2">No Devices Registered</h3>
          <p className="text-foreground/50 mb-10 max-w-sm mx-auto">Protect your expensive smartphones with our premium coverage plans today.</p>
          <Link to="/dashboard/devices/add" className="px-10 py-4 bg-primary text-primary-foreground rounded-2xl font-black text-lg shadow-xl shadow-primary/20">
            Register Now
          </Link>
        </div>
      )}
    </div>
  );
}
