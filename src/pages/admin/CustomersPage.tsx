import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Download, 
  MoreVertical, 
  Mail, 
  Phone, 
  ChevronRight, 
  ArrowUpRight,
  UserPlus
} from 'lucide-react';
import { cn } from '@/utils/cn';

const customers = [
  { id: 1, name: 'Rahul Sharma', email: 'rahul@example.com', phone: '+91 98765 43210', devices: 3, claims: 1, date: '2024-01-15', status: 'Active' },
  { id: 2, name: 'Priya Patel', email: 'priya@example.com', phone: '+91 87654 32109', devices: 1, claims: 0, date: '2024-02-10', status: 'Active' },
  { id: 3, name: 'Amit Kumar', email: 'amit@example.com', phone: '+91 76543 21098', devices: 2, claims: 2, date: '2023-12-05', status: 'Inactive' },
  { id: 4, name: 'Sneha Reddy', email: 'sneha@example.com', phone: '+91 65432 10987', devices: 4, claims: 0, date: '2024-03-01', status: 'Active' },
  { id: 5, name: 'Vikram Singh', email: 'vikram@example.com', phone: '+91 54321 09876', devices: 1, claims: 1, date: '2024-02-28', status: 'Active' },
  { id: 6, name: 'Anjali Gupta', email: 'anjali@example.com', phone: '+91 43210 98765', devices: 2, claims: 0, date: '2024-04-12', status: 'Active' },
];

export default function CustomersPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="p-10 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-extrabold mb-2">Customer Management</h1>
          <p className="text-foreground/50 font-medium">View and manage all registered users on the platform.</p>
        </div>
        <button className="px-6 py-3 bg-primary text-primary-foreground rounded-2xl font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-primary/20">
          <UserPlus className="w-5 h-5" />
          Add New Customer
        </button>
      </div>

      <div className="bg-card border border-border rounded-[2.5rem] overflow-hidden shadow-xl">
        {/* Table Controls */}
        <div className="p-8 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30" />
            <input 
              type="text" 
              placeholder="Search by name, email or phone..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-foreground/5 border border-border rounded-xl py-3 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium text-sm"
            />
          </div>
          <div className="flex gap-4">
            <button className="px-5 py-3 border border-border rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-foreground/5 transition-all">
              <Filter className="w-4 h-4" />
              Filters
            </button>
            <button className="px-5 py-3 border border-border rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-foreground/5 transition-all">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-foreground/5 border-b border-border">
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-foreground/40">Customer</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-foreground/40">Contact Info</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-foreground/40">Devices</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-foreground/40">Claims</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-foreground/40">Joined Date</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-foreground/40">Status</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-foreground/40 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-foreground/5 transition-all group cursor-pointer">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black border border-primary/10">
                        {customer.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="font-bold">{customer.name}</div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs font-medium text-foreground/60">
                        <Mail className="w-3 h-3" />
                        {customer.email}
                      </div>
                      <div className="flex items-center gap-2 text-xs font-medium text-foreground/60">
                        <Phone className="w-3 h-3" />
                        {customer.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 text-purple-600 rounded-lg text-xs font-black">
                      {customer.devices} Devices
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className={cn(
                      "inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-black",
                      customer.claims > 0 ? "bg-amber-500/10 text-amber-600" : "bg-foreground/5 text-foreground/40"
                    )}>
                      {customer.claims} Claims
                    </div>
                  </td>
                  <td className="px-8 py-6 font-bold text-sm">{customer.date}</td>
                  <td className="px-8 py-6">
                    <div className={cn(
                      "inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                      customer.status === 'Active' ? "bg-emerald-500/10 text-emerald-500" : "bg-red-500/10 text-red-500"
                    )}>
                      <div className={cn("w-1.5 h-1.5 rounded-full", customer.status === 'Active' ? "bg-emerald-500" : "bg-red-500")} />
                      {customer.status}
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="p-2 hover:bg-foreground/10 rounded-xl transition-all">
                      <MoreVertical className="w-5 h-5 text-foreground/20" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-8 bg-foreground/5 border-t border-border flex items-center justify-between">
          <p className="text-xs font-bold text-foreground/40">Showing 1-6 of 1,240 customers</p>
          <div className="flex gap-2">
            <button className="p-2 border border-border rounded-lg disabled:opacity-50" disabled><ChevronRight className="w-4 h-4 rotate-180" /></button>
            {[1, 2, 3, '...', 10].map((p, i) => (
              <button key={i} className={cn(
                "w-8 h-8 rounded-lg text-xs font-bold transition-all",
                p === 1 ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "hover:bg-foreground/10"
              )}>
                {p}
              </button>
            ))}
            <button className="p-2 border border-border rounded-lg hover:bg-foreground/10 transition-all"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
