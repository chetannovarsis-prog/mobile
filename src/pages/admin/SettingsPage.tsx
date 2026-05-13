import React from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, 
  User, 
  Bell, 
  Lock, 
  Shield, 
  CreditCard, 
  Globe, 
  Smartphone,
  ChevronRight,
  LogOut
} from 'lucide-react';
import { cn } from '@/utils/cn';

const sections = [
  {
    title: 'Account Settings',
    items: [
      { icon: User, label: 'Profile Information', desc: 'Update your name, email, and profile photo.' },
      { icon: Lock, label: 'Security & Password', desc: 'Change your password and enable 2FA.' },
      { icon: Bell, label: 'Notifications', desc: 'Manage your email and push notification preferences.' },
    ]
  },
  {
    title: 'Platform Management',
    items: [
      { icon: Shield, label: 'Insurance Policies', desc: 'Configure global coverage rules and limits.' },
      { icon: Smartphone, label: 'Device Database', desc: 'Sync with GSMA and update model lists.' },
      { icon: CreditCard, label: 'Payment Gateways', desc: 'Manage Stripe, Razorpay, and PayPal keys.' },
    ]
  },
  {
    title: 'Preferences',
    items: [
      { icon: Globe, label: 'Language & Region', desc: 'Set default language and currency formats.' },
    ]
  }
];

export default function SettingsPage() {
  return (
    <div className="p-10 space-y-10 pb-20">
      <div>
        <h1 className="text-3xl font-extrabold mb-2">System Settings</h1>
        <p className="text-foreground/50 font-medium">Configure and manage your platform preferences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          {sections.map((section) => (
            <div key={section.title} className="space-y-6">
              <h3 className="text-xs font-black uppercase tracking-widest text-foreground/40 ml-4">{section.title}</h3>
              <div className="bg-card border border-border rounded-[2.5rem] overflow-hidden shadow-lg">
                {section.items.map((item, idx) => (
                  <button 
                    key={item.label}
                    className={cn(
                      "w-full flex items-center justify-between p-8 hover:bg-foreground/5 transition-all text-left group",
                      idx !== section.items.length - 1 && "border-b border-border"
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
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <div className="bg-card border border-border rounded-[2.5rem] p-10 shadow-lg text-center">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6 border-4 border-background">
              <User className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold">Admin User</h3>
            <p className="text-xs font-black uppercase tracking-widest text-primary mt-1 mb-8">Super Administrator</p>
            <button className="w-full py-4 bg-foreground/5 border border-border rounded-2xl font-bold text-sm hover:bg-red-500/10 hover:text-red-500 hover:border-red-500/20 transition-all flex items-center justify-center gap-2">
              <LogOut className="w-4 h-4" />
              Sign Out Account
            </button>
          </div>

          <div className="bg-primary text-primary-foreground rounded-[2.5rem] p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
            <h3 className="text-xl font-black mb-4">Version 2.4.0-Demo</h3>
            <p className="text-primary-foreground/70 text-sm font-medium mb-8">Your system is up to date with the latest security patches.</p>
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest">
              <div className="w-2 h-2 bg-white rounded-full animate-ping" />
              Connected to Cloud
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
