import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Bell, 
  Lock, 
  Shield, 
  CreditCard, 
  ChevronRight,
  Smartphone,
  LogOut
} from 'lucide-react';
import { cn } from '@/utils/cn';

const settings = [
  { icon: User, label: 'Profile Settings', desc: 'Update your personal information.' },
  { icon: Shield, label: 'My Subscriptions', desc: 'Manage your active protection plans.' },
  { icon: Bell, label: 'Notifications', desc: 'Change how you receive updates.' },
  { icon: Lock, label: 'Security', desc: 'Update password and login security.' },
];

export default function UserSettingsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 pb-20">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-2">Account Settings</h1>
        <p className="text-foreground/50">Manage your profile and protection preferences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card border border-border rounded-[2.5rem] overflow-hidden shadow-lg">
            {settings.map((item, idx) => (
              <button 
                key={item.label}
                className={cn(
                  "w-full flex items-center justify-between p-8 hover:bg-foreground/5 transition-all text-left group",
                  idx !== settings.length - 1 && "border-b border-border"
                )}
              >
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-primary/10 text-primary rounded-2xl group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.label}</h4>
                    <p className="text-sm text-foreground/50 font-medium">{item.desc}</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-foreground/20 group-hover:text-primary transition-colors" />
              </button>
            ))}
          </div>

          <button className="w-full py-6 bg-red-500/5 text-red-500 rounded-[2rem] font-bold border border-red-500/10 hover:bg-red-500/10 transition-all flex items-center justify-center gap-2">
            <LogOut className="w-5 h-5" />
            Sign Out Account
          </button>
        </div>

        <div className="space-y-8">
          <div className="bg-primary text-primary-foreground p-8 rounded-[2.5rem] relative overflow-hidden group shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16" />
            <h3 className="text-xl font-black mb-4">Pro Member</h3>
            <p className="text-primary-foreground/70 text-sm font-medium mb-8">You are currently on the Gold Plan with 2 active devices.</p>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-white/20 w-fit rounded-full">
              Renews June 2024
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
