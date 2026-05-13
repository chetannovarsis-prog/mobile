import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Smartphone, 
  FileText, 
  IndianRupee, 
  TrendingUp, 
  TrendingDown,
  ArrowUpRight,
  Clock,
  Activity,
  CheckCircle,
  XCircle,
  MoreVertical
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { cn } from '@/utils/cn';

const stats = [
  { label: 'Total Customers', value: '12,405', change: '+12.5%', trend: 'up', icon: Users, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { label: 'Registered Devices', value: '45,200', change: '+24.1%', trend: 'up', icon: Smartphone, color: 'text-purple-500', bg: 'bg-purple-500/10' },
  { label: 'Active Claims', value: '842', change: '-5.4%', trend: 'down', icon: FileText, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { label: 'Total Revenue', value: '₹4.2Cr', change: '+18.2%', trend: 'up', icon: IndianRupee, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
];

const revenueData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 2000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
  { name: 'Jul', value: 3490 },
];

const deviceData = [
  { name: 'Apple', value: 45 },
  { name: 'Samsung', value: 30 },
  { name: 'Oppo/Vivo', value: 15 },
  { name: 'Others', value: 10 },
];

const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#6b7280'];

export default function AdminDashboard() {
  return (
    <div className="p-10 space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-extrabold mb-2">Platform Overview</h1>
          <p className="text-foreground/50 font-medium">Real-time performance and operational metrics.</p>
        </div>
        <div className="flex gap-4">
          <button className="px-5 py-2.5 bg-card border border-border rounded-xl font-bold text-sm hover:bg-foreground/5 transition-all">
            Download Reports
          </button>
          <button className="px-5 py-2.5 bg-primary text-primary-foreground rounded-xl font-bold text-sm shadow-lg shadow-primary/20">
            System Settings
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border p-8 rounded-[2.5rem] relative overflow-hidden group hover:border-primary/50 transition-all"
          >
            <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110", stat.bg, stat.color)}>
              <stat.icon className="w-6 h-6" />
            </div>
            <p className="text-[10px] text-foreground/40 font-black uppercase tracking-widest mb-1">{stat.label}</p>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-black">{stat.value}</h3>
              <div className={cn(
                "flex items-center gap-1 text-[10px] font-black px-2 py-1 rounded-lg uppercase tracking-widest",
                stat.trend === 'up' ? "bg-emerald-500/10 text-emerald-500" : "bg-red-500/10 text-red-500"
              )}>
                {stat.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {stat.change}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-card border border-border rounded-[2.5rem] p-10">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-xl font-bold">Revenue Growth</h3>
            <select className="bg-foreground/5 border border-border rounded-xl px-4 py-2 text-xs font-bold focus:outline-none">
              <option>Last 7 Months</option>
              <option>Last Year</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 600, fill: '#9ca3af'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 600, fill: '#9ca3af'}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px -5px rgba(0,0,0,0.1)' }}
                  itemStyle={{ fontWeight: 800, color: '#10b981' }}
                />
                <Area type="monotone" dataKey="value" stroke="#10b981" strokeWidth={4} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Device Analytics Pie */}
        <div className="bg-card border border-border rounded-[2.5rem] p-10 flex flex-col">
          <h3 className="text-xl font-bold mb-10">Brand Popularity</h3>
          <div className="h-[200px] w-full flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={deviceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {deviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-4 mt-8">
            {deviceData.map((item, i) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                  <span className="text-sm font-bold text-foreground/70">{item.name}</span>
                </div>
                <span className="text-sm font-black">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pb-10">
        {/* Recent Activity */}
        <div className="bg-card border border-border rounded-[2.5rem] p-10">
          <h3 className="text-xl font-bold mb-8">Live Feed</h3>
          <div className="space-y-8">
            {[
              { type: 'device', user: 'Amit K.', action: 'registered', item: 'iPhone 15 Pro', time: '2 mins ago', icon: Smartphone, color: 'text-purple-500' },
              { type: 'claim', user: 'Priya R.', action: 'submitted claim for', item: 'Samsung S24', time: '15 mins ago', icon: FileText, color: 'text-amber-500' },
              { type: 'payment', user: 'John D.', action: 'upgraded to', item: 'Platinum Plan', time: '1 hour ago', icon: IndianRupee, color: 'text-emerald-500' },
              { type: 'device', user: 'Sneha S.', action: 'registered', item: 'OnePlus 12', time: '3 hours ago', icon: Smartphone, color: 'text-purple-500' },
            ].map((activity, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className={cn("w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center shrink-0", activity.color)}>
                  <activity.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-black">{activity.user}</span> {activity.action} <span className="font-black">{activity.item}</span>
                  </p>
                  <p className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest mt-1 flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    {activity.time}
                  </p>
                </div>
                <button className="p-2 hover:bg-foreground/5 rounded-lg transition-all">
                  <MoreVertical className="w-4 h-4 text-foreground/20" />
                </button>
              </div>
            ))}
          </div>
          <button className="w-full mt-10 py-3 bg-foreground/5 hover:bg-foreground/10 rounded-xl font-bold text-xs transition-all uppercase tracking-widest">
            View All Activity
          </button>
        </div>

        {/* Claim Stats */}
        <div className="bg-card border border-border rounded-[2.5rem] p-10">
          <h3 className="text-xl font-bold mb-8">Claim Status Breakdown</h3>
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: 'Approved', value: '450', color: 'bg-emerald-500' },
              { label: 'Pending', value: '128', color: 'bg-amber-500' },
              { label: 'In Repair', value: '215', color: 'bg-blue-500' },
              { label: 'Rejected', value: '49', color: 'bg-red-500' },
            ].map((item) => (
              <div key={item.label} className="p-6 bg-foreground/5 rounded-[2rem] border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className={cn("w-2 h-2 rounded-full", item.color)} />
                  <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40">{item.label}</span>
                </div>
                <h4 className="text-2xl font-black">{item.value}</h4>
                <div className="mt-4 w-full h-1 bg-foreground/10 rounded-full overflow-hidden">
                  <div className={cn("h-full", item.color)} style={{ width: `${(parseInt(item.value)/8.42).toFixed(0)}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
