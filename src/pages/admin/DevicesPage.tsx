import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Smartphone, 
  User, 
  Calendar, 
  Shield, 
  CheckCircle, 
  XCircle,
  MoreVertical,
  Eye,
  IndianRupee
} from 'lucide-react';
import { cn } from '@/utils/cn';

const devicesData = [
  { id: 'DEV-101', customer: 'Rahul Sharma', brand: 'Apple', model: 'iPhone 15 Pro', imei: '358762109845321', status: 'Approved', date: '2024-05-10', price: '₹1,34,900' },
  { id: 'DEV-102', customer: 'Priya Patel', brand: 'Samsung', model: 'S24 Ultra', imei: '352210984532167', status: 'Pending', date: '2024-05-12', price: '₹1,29,999' },
  { id: 'DEV-103', customer: 'Amit Kumar', brand: 'Google', model: 'Pixel 8', imei: '359987453210123', status: 'Approved', date: '2024-05-08', price: '₹75,999' },
  { id: 'DEV-104', customer: 'Sneha Reddy', brand: 'OnePlus', model: '12', imei: '354432109845321', status: 'Rejected', date: '2024-05-05', price: '₹64,999' },
  { id: 'DEV-105', customer: 'Vikram Singh', brand: 'Apple', model: 'iPhone 14', imei: '351112223334445', status: 'Approved', date: '2024-05-01', price: '₹69,900' },
];

export default function AdminDevicesPage() {
  return (
    <div className="p-10 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-extrabold mb-2">Device Inventory</h1>
          <p className="text-foreground/50 font-medium">Manage all registered and protected devices on the platform.</p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-[2.5rem] overflow-hidden shadow-xl">
        <div className="p-8 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30" />
            <input 
              type="text" 
              placeholder="Search by IMEI, model or customer..." 
              className="w-full bg-foreground/5 border border-border rounded-xl py-3 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium text-sm"
            />
          </div>
          <div className="flex gap-4">
            <button className="px-5 py-3 border border-border rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-foreground/5 transition-all">
              <Filter className="w-4 h-4" />
              Filter Brand
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-foreground/5 border-b border-border">
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-foreground/40">Device Details</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-foreground/40">Customer</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-foreground/40">IMEI</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-foreground/40">Value</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-foreground/40">Status</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-foreground/40 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {devicesData.map((device) => (
                <tr key={device.id} className="hover:bg-foreground/5 transition-all group cursor-pointer">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-foreground/5 rounded-xl text-primary">
                        <Smartphone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-sm">{device.brand} {device.model}</p>
                        <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40">ID: {device.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-black text-primary">{device.customer[0]}</div>
                      <span className="font-bold text-sm">{device.customer}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 font-medium text-xs text-foreground/60">{device.imei}</td>
                  <td className="px-8 py-6 font-black text-sm">{device.price}</td>
                  <td className="px-8 py-6">
                    <div className={cn(
                      "inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                      device.status === 'Approved' ? "bg-emerald-500/10 text-emerald-500" :
                      device.status === 'Pending' ? "bg-amber-500/10 text-amber-500" : "bg-red-500/10 text-red-500"
                    )}>
                      {device.status}
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-emerald-500/10 text-emerald-500 rounded-lg"><CheckCircle className="w-4 h-4" /></button>
                      <button className="p-2 hover:bg-red-500/10 text-red-500 rounded-lg"><XCircle className="w-4 h-4" /></button>
                      <button className="p-2 hover:bg-foreground/10 rounded-lg"><MoreVertical className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
