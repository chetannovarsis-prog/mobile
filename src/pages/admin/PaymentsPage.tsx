import React from 'react';
import { motion } from 'framer-motion';
import { 
  IndianRupee, 
  Search, 
  Filter, 
  Download, 
  ArrowUpRight, 
  CheckCircle, 
  Clock, 
  XCircle,
  MoreVertical,
  BarChart3
} from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { cn } from '@/utils/cn';

const transactions = [
  { id: 'TXN-901', user: 'Rahul Sharma', plan: 'Gold Protection', amount: '₹1,499', method: 'UPI', date: '2024-05-12', status: 'Success' },
  { id: 'TXN-902', user: 'Priya Patel', plan: 'Silver Protection', amount: '₹999', method: 'Card', date: '2024-05-11', status: 'Success' },
  { id: 'TXN-903', user: 'Amit Kumar', plan: 'Platinum Care', amount: '₹2,499', method: 'Net Banking', date: '2024-05-10', status: 'Failed' },
  { id: 'TXN-904', user: 'Sneha Reddy', plan: 'Gold Protection', amount: '₹1,499', method: 'UPI', date: '2024-05-10', status: 'Success' },
  { id: 'TXN-905', user: 'Vikram Singh', plan: 'Basic Protection', amount: '₹499', method: 'UPI', date: '2024-05-09', status: 'Success' },
];

const chartData = [
  { day: 'Mon', amount: 12000 },
  { day: 'Tue', amount: 15000 },
  { day: 'Wed', amount: 11000 },
  { day: 'Thu', amount: 18000 },
  { day: 'Fri', amount: 22000 },
  { day: 'Sat', amount: 25000 },
  { day: 'Sun', amount: 21000 },
];

export default function AdminPaymentsPage() {
  return (
    <div className="p-10 space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-extrabold mb-2">Payment Analytics</h1>
          <p className="text-foreground/50 font-medium">Monitor revenue and transaction health across the platform.</p>
        </div>
        <div className="flex gap-4">
          <button className="px-5 py-3 border border-border rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-foreground/5 transition-all">
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 bg-card border border-border rounded-[3rem] p-10">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <BarChart3 className="w-6 h-6 text-emerald-500" />
              <h3 className="text-xl font-bold">Weekly Revenue</h3>
            </div>
            <div className="text-emerald-500 font-black flex items-center gap-1">
              <ArrowUpRight className="w-4 h-4" />
              +15.4%
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 700, fill: '#9ca3af'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 700, fill: '#9ca3af'}} />
                <Tooltip 
                  contentStyle={{ border: 'none', borderRadius: '16px', boxShadow: '0 20px 40px -5px rgba(0,0,0,0.1)' }}
                />
                <Line type="monotone" dataKey="amount" stroke="#10b981" strokeWidth={4} dot={{ r: 6, fill: '#10b981', strokeWidth: 3, stroke: '#fff' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-emerald-500 text-white rounded-[3rem] p-10 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20" />
          <div>
            <div className="p-3 bg-white/20 rounded-2xl w-fit mb-6">
              <IndianRupee className="w-6 h-6" />
            </div>
            <p className="text-xs font-black uppercase tracking-widest opacity-60 mb-2">Available Balance</p>
            <h3 className="text-5xl font-black">₹45.2L</h3>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm font-bold border-t border-white/10 pt-4">
              <span>Settlements</span>
              <span>Next: Tomorrow</span>
            </div>
            <button className="w-full py-4 bg-white text-emerald-500 rounded-2xl font-black text-sm shadow-xl shadow-emerald-900/20 hover:scale-105 transition-all">
              Withdraw Funds
            </button>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-[2.5rem] overflow-hidden shadow-xl">
        <div className="p-8 border-b border-border">
          <h3 className="text-xl font-bold">Recent Transactions</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-foreground/5 border-b border-border">
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-foreground/40">Transaction ID</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-foreground/40">User</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-foreground/40">Plan</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-foreground/40">Method</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-foreground/40">Amount</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-foreground/40">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {transactions.map((txn) => (
                <tr key={txn.id} className="hover:bg-foreground/5 transition-all">
                  <td className="px-8 py-6 font-bold text-sm">{txn.id}</td>
                  <td className="px-8 py-6 font-bold text-sm">{txn.user}</td>
                  <td className="px-8 py-6 text-sm font-medium">{txn.plan}</td>
                  <td className="px-8 py-6 text-xs font-black text-foreground/40 uppercase tracking-widest">{txn.method}</td>
                  <td className="px-8 py-6 font-black text-sm text-emerald-500">{txn.amount}</td>
                  <td className="px-8 py-6">
                    <div className={cn(
                      "inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                      txn.status === 'Success' ? "bg-emerald-500/10 text-emerald-500" : "bg-red-500/10 text-red-500"
                    )}>
                      {txn.status === 'Success' ? <CheckCircle className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                      {txn.status}
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
