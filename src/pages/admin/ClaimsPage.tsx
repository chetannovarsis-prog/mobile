import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  MoreVertical, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Truck, 
  Wrench, 
  Eye,
  AlertCircle,
  Smartphone,
  Calendar,
  User,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/utils/cn';

const claimsData = [
  { id: 'CLM-9041', customer: 'Rahul Sharma', device: 'iPhone 15 Pro', damage: 'Screen Damage', status: 'Pending', date: '2024-05-12', amount: '₹4,500' },
  { id: 'CLM-9040', customer: 'Priya Patel', device: 'Samsung S24 Ultra', damage: 'Water Damage', status: 'Approved', date: '2024-05-10', amount: '₹12,000' },
  { id: 'CLM-9039', customer: 'Amit Kumar', device: 'Google Pixel 8', damage: 'Battery Issue', status: 'Completed', date: '2024-05-08', amount: '₹2,800' },
  { id: 'CLM-9038', customer: 'Sneha Reddy', device: 'OnePlus 12', damage: 'Physical Damage', status: 'Rejected', date: '2024-05-05', amount: '₹0' },
  { id: 'CLM-9037', customer: 'Vikram Singh', device: 'iPhone 14', damage: 'Camera Issue', status: 'Repairing', date: '2024-05-01', amount: '₹5,200' },
  { id: 'CLM-9036', customer: 'Anjali Gupta', device: 'Find X6 Pro', damage: 'Screen Damage', status: 'Pickup Scheduled', date: '2024-04-28', amount: '₹6,800' },
];

export default function AdminClaimsPage() {
  const [selectedClaim, setSelectedClaim] = useState<any>(null);

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Pending': return 'bg-amber-500/10 text-amber-600';
      case 'Approved': return 'bg-emerald-500/10 text-emerald-600';
      case 'Rejected': return 'bg-red-500/10 text-red-600';
      case 'Completed': return 'bg-primary/10 text-primary';
      case 'Repairing': return 'bg-blue-500/10 text-blue-600';
      case 'Pickup Scheduled': return 'bg-purple-500/10 text-purple-600';
      default: return 'bg-foreground/5 text-foreground/40';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Pending': return <Clock className="w-3.5 h-3.5" />;
      case 'Approved': return <CheckCircle className="w-3.5 h-3.5" />;
      case 'Rejected': return <XCircle className="w-3.5 h-3.5" />;
      case 'Completed': return <CheckCircle className="w-3.5 h-3.5" />;
      case 'Repairing': return <Wrench className="w-3.5 h-3.5" />;
      case 'Pickup Scheduled': return <Truck className="w-3.5 h-3.5" />;
      default: return null;
    }
  };

  return (
    <div className="p-10 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-extrabold mb-2">Claim Management</h1>
          <p className="text-foreground/50 font-medium">Review and process insurance claims from customers.</p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-[2.5rem] overflow-hidden shadow-xl">
        <div className="p-8 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30" />
            <input 
              type="text" 
              placeholder="Search by claim ID or customer..." 
              className="w-full bg-foreground/5 border border-border rounded-xl py-3 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium text-sm"
            />
          </div>
          <div className="flex gap-4">
            <button className="px-5 py-3 border border-border rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-foreground/5 transition-all">
              <Filter className="w-4 h-4" />
              Filter Status
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-foreground/5 border-b border-border">
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-foreground/40">Claim ID</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-foreground/40">Customer</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-foreground/40">Device & Damage</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-foreground/40">Amount</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-foreground/40">Status</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-foreground/40 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {claimsData.map((claim) => (
                <tr 
                  key={claim.id} 
                  className="hover:bg-foreground/5 transition-all group cursor-pointer"
                  onClick={() => setSelectedClaim(claim)}
                >
                  <td className="px-8 py-6 font-black text-sm">{claim.id}</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-foreground/5 flex items-center justify-center font-bold text-xs">{claim.customer[0]}</div>
                      <div className="font-bold text-sm">{claim.customer}</div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="space-y-1">
                      <div className="text-sm font-bold">{claim.device}</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-amber-500">{claim.damage}</div>
                    </div>
                  </td>
                  <td className="px-8 py-6 font-black text-sm">{claim.amount}</td>
                  <td className="px-8 py-6">
                    <div className={cn(
                      "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest",
                      getStatusStyle(claim.status)
                    )}>
                      {getStatusIcon(claim.status)}
                      {claim.status}
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="p-2 hover:bg-primary/10 hover:text-primary rounded-xl transition-all">
                      <Eye className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Claim Detail Modal */}
      <AnimatePresence>
        {selectedClaim && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card border border-border w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden"
            >
              <div className="p-8 border-b border-border flex items-center justify-between bg-foreground/5">
                <div className="flex items-center gap-4">
                  <div className={cn("p-3 rounded-2xl", getStatusStyle(selectedClaim.status))}>
                    {getStatusIcon(selectedClaim.status)}
                  </div>
                  <div>
                    <h3 className="text-xl font-black">Claim #{selectedClaim.id}</h3>
                    <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest">Submitted on {selectedClaim.date}</p>
                  </div>
                </div>
                <button onClick={() => setSelectedClaim(null)} className="p-2 hover:bg-foreground/10 rounded-xl">
                  <XCircle className="w-6 h-6 text-foreground/20" />
                </button>
              </div>

              <div className="p-10 space-y-8">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <User className="w-4 h-4 text-primary" />
                      <span className="text-xs font-black uppercase tracking-widest text-foreground/40">Customer</span>
                    </div>
                    <p className="font-bold text-lg">{selectedClaim.customer}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Smartphone className="w-4 h-4 text-primary" />
                      <span className="text-xs font-black uppercase tracking-widest text-foreground/40">Device</span>
                    </div>
                    <p className="font-bold text-lg">{selectedClaim.device}</p>
                  </div>
                </div>

                <div className="p-6 bg-foreground/5 rounded-[2rem] border border-border">
                  <div className="flex items-center gap-3 mb-4 text-amber-500">
                    <AlertCircle className="w-5 h-5" />
                    <span className="text-xs font-black uppercase tracking-widest">Damage Reported</span>
                  </div>
                  <p className="font-bold text-sm mb-2">{selectedClaim.damage}</p>
                  <p className="text-sm text-foreground/50 leading-relaxed">
                    Customer reported that the device fell from a table and the screen is completely shattered with black spots on the display.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 py-4 bg-emerald-500 text-white rounded-2xl font-black hover:bg-emerald-600 transition-all flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Approve Claim
                  </button>
                  <button className="flex-1 py-4 bg-red-500 text-white rounded-2xl font-black hover:bg-red-600 transition-all flex items-center justify-center gap-2">
                    <XCircle className="w-5 h-5" />
                    Reject Claim
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
