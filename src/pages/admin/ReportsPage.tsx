import React from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  Calendar, 
  BarChart3, 
  PieChart as PieChartIcon, 
  TrendingUp, 
  Smartphone, 
  IndianRupee, 
  FileText,
  ChevronDown
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line,
  AreaChart,
  Area,
  Cell,
  PieChart,
  Pie,
  Legend
} from 'recharts';
import { cn } from '@/utils/cn';

const monthlyData = [
  { month: 'Jan', revenue: 4500000, claims: 120, registrations: 450 },
  { month: 'Feb', revenue: 5200000, claims: 145, registrations: 520 },
  { month: 'Mar', revenue: 4800000, claims: 110, registrations: 480 },
  { month: 'Apr', revenue: 6100000, claims: 190, registrations: 650 },
  { month: 'May', revenue: 7500000, claims: 210, registrations: 820 },
  { month: 'Jun', revenue: 8200000, claims: 240, registrations: 950 },
];

const brandPopularity = [
  { name: 'Apple', value: 3500 },
  { name: 'Samsung', value: 2800 },
  { name: 'Oppo', value: 1200 },
  { name: 'Vivo', value: 1100 },
  { name: 'OnePlus', value: 950 },
  { name: 'Others', value: 1500 },
];

const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#8b5cf6', '#ec4899', '#6b7280'];

export default function AdminReportsPage() {
  return (
    <div className="p-10 space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-extrabold mb-2">Analytics & Reports</h1>
          <p className="text-foreground/50 font-medium">In-depth insights into platform performance and growth.</p>
        </div>
        <div className="flex gap-4">
          <button className="px-5 py-3 border border-border rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-foreground/5 transition-all">
            <Calendar className="w-4 h-4" />
            Last 6 Months
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="px-5 py-3 bg-primary text-primary-foreground rounded-xl font-bold text-sm flex items-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-primary/20">
            <Download className="w-4 h-4" />
            Download Full PDF
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-card border border-border p-8 rounded-[2.5rem] space-y-4">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-2xl">
              <IndianRupee className="w-6 h-6" />
            </div>
            <div className="text-emerald-500 text-xs font-black bg-emerald-500/10 px-2 py-1 rounded-lg">+18.5%</div>
          </div>
          <h3 className="text-3xl font-black">₹4.2Cr</h3>
          <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest">Total Estimated Revenue</p>
        </div>
        <div className="bg-card border border-border p-8 rounded-[2.5rem] space-y-4">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-blue-500/10 text-blue-500 rounded-2xl">
              <Smartphone className="w-6 h-6" />
            </div>
            <div className="text-blue-500 text-xs font-black bg-blue-500/10 px-2 py-1 rounded-lg">+24.2%</div>
          </div>
          <h3 className="text-3xl font-black">45,200</h3>
          <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest">Active Device Protections</p>
        </div>
        <div className="bg-card border border-border p-8 rounded-[2.5rem] space-y-4">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-amber-500/10 text-amber-500 rounded-2xl">
              <FileText className="w-6 h-6" />
            </div>
            <div className="text-amber-500 text-xs font-black bg-amber-500/10 px-2 py-1 rounded-lg">-2.1%</div>
          </div>
          <h3 className="text-3xl font-black">842</h3>
          <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest">Total Claims Handled</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Revenue Chart */}
        <div className="bg-card border border-border rounded-[3rem] p-10">
          <div className="flex items-center gap-3 mb-10">
            <TrendingUp className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-bold">Revenue Trends</h3>
          </div>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 700, fill: '#9ca3af'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 700, fill: '#9ca3af'}} />
                <Tooltip 
                  cursor={{fill: '#f3f4f6'}}
                  contentStyle={{ border: 'none', borderRadius: '16px', boxShadow: '0 20px 40px -5px rgba(0,0,0,0.1)' }}
                />
                <Bar dataKey="revenue" fill="#10b981" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Claim Frequency Chart */}
        <div className="bg-card border border-border rounded-[3rem] p-10">
          <div className="flex items-center gap-3 mb-10">
            <BarChart3 className="w-6 h-6 text-blue-500" />
            <h3 className="text-xl font-bold">Claim Frequency</h3>
          </div>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 700, fill: '#9ca3af'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 700, fill: '#9ca3af'}} />
                <Tooltip contentStyle={{ border: 'none', borderRadius: '16px', boxShadow: '0 20px 40px -5px rgba(0,0,0,0.1)' }} />
                <Line type="monotone" dataKey="claims" stroke="#3b82f6" strokeWidth={4} dot={{ r: 6, fill: '#3b82f6', strokeWidth: 3, stroke: '#fff' }} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Brand Popularity */}
        <div className="bg-card border border-border rounded-[3rem] p-10">
          <div className="flex items-center gap-3 mb-10">
            <PieChartIcon className="w-6 h-6 text-purple-500" />
            <h3 className="text-xl font-bold">Market Share (Protected Devices)</h3>
          </div>
          <div className="h-[400px] w-full flex flex-col items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={brandPopularity}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={8}
                  dataKey="value"
                >
                  {brandPopularity.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Registration Growth */}
        <div className="bg-card border border-border rounded-[3rem] p-10">
          <div className="flex items-center gap-3 mb-10">
            <TrendingUp className="w-6 h-6 text-emerald-500" />
            <h3 className="text-xl font-bold">New User Growth</h3>
          </div>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyData}>
                <defs>
                  <linearGradient id="colorReg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 700, fill: '#9ca3af'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 700, fill: '#9ca3af'}} />
                <Tooltip />
                <Area type="monotone" dataKey="registrations" stroke="#8b5cf6" strokeWidth={4} fillOpacity={1} fill="url(#colorReg)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
