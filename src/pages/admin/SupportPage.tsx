import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Search, 
  Filter, 
  MoreVertical, 
  MessageCircle, 
  CheckCircle, 
  Clock, 
  User, 
  Send,
  Phone,
  Mail,
  Shield
} from 'lucide-react';
import { cn } from '@/utils/cn';

const tickets = [
  { id: 'TKT-101', user: 'Rahul Sharma', subject: 'Claim Status Delay', status: 'Open', priority: 'High', date: '2024-05-12' },
  { id: 'TKT-102', user: 'Priya Patel', subject: 'Device Not Listing', status: 'In Progress', priority: 'Medium', date: '2024-05-11' },
  { id: 'TKT-103', user: 'Amit Kumar', subject: 'Payment Failed', status: 'Closed', priority: 'High', date: '2024-05-10' },
  { id: 'TKT-104', user: 'Sneha Reddy', subject: 'Plan Upgrade Query', status: 'Open', priority: 'Low', date: '2024-05-10' },
];

export default function AdminSupportPage() {
  const [selectedTicket, setSelectedTicket] = useState<any>(tickets[0]);

  return (
    <div className="h-[calc(100vh-80px)] flex">
      {/* Ticket List */}
      <div className="w-96 border-r border-border bg-card flex flex-col">
        <div className="p-6 border-b border-border">
          <h2 className="text-xl font-bold mb-4">Support Tickets</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/20" />
            <input 
              type="text" 
              placeholder="Search tickets..." 
              className="w-full bg-foreground/5 border border-border rounded-xl py-2.5 pl-10 pr-4 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {tickets.map((ticket) => (
            <button
              key={ticket.id}
              onClick={() => setSelectedTicket(ticket)}
              className={cn(
                "w-full p-6 text-left border-b border-border transition-all hover:bg-foreground/5",
                selectedTicket?.id === ticket.id ? "bg-primary/5 border-l-4 border-l-primary" : ""
              )}
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40">{ticket.id}</span>
                <span className={cn(
                  "px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest",
                  ticket.priority === 'High' ? "bg-red-500/10 text-red-500" : 
                  ticket.priority === 'Medium' ? "bg-amber-500/10 text-amber-500" : "bg-blue-500/10 text-blue-500"
                )}>
                  {ticket.priority}
                </span>
              </div>
              <h4 className="font-bold text-sm mb-1 truncate">{ticket.subject}</h4>
              <p className="text-xs font-medium text-foreground/50 mb-3">{ticket.user}</p>
              <div className="flex items-center gap-2">
                <div className={cn(
                  "w-1.5 h-1.5 rounded-full",
                  ticket.status === 'Open' ? "bg-emerald-500" : "bg-blue-500"
                )} />
                <span className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">{ticket.status}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-background">
        {selectedTicket ? (
          <>
            <div className="p-6 border-b border-border flex items-center justify-between bg-card">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black">
                  {selectedTicket.user[0]}
                </div>
                <div>
                  <h3 className="font-bold">{selectedTicket.user}</h3>
                  <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest">{selectedTicket.subject}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-2.5 hover:bg-foreground/5 rounded-xl transition-all border border-border">
                  <Phone className="w-4 h-4" />
                </button>
                <button className="p-2.5 hover:bg-foreground/5 rounded-xl transition-all border border-border">
                  <Mail className="w-4 h-4" />
                </button>
                <button className="px-4 py-2 bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Resolve
                </button>
              </div>
            </div>

            <div className="flex-1 p-10 overflow-y-auto space-y-8">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center text-[10px] font-black shrink-0">{selectedTicket.user[0]}</div>
                <div className="max-w-md">
                  <div className="bg-card border border-border p-5 rounded-2xl rounded-tl-none shadow-sm">
                    <p className="text-sm font-medium leading-relaxed">
                      Hello, I submitted my claim for iPhone 15 Pro screen damage 3 days ago but haven't received any update on pickup. Can you please check?
                    </p>
                  </div>
                  <p className="text-[10px] font-bold text-foreground/30 uppercase tracking-widest mt-2 ml-1">Today, 10:45 AM</p>
                </div>
              </div>

              <div className="flex gap-4 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-[10px] font-black shrink-0">A</div>
                <div className="max-w-md text-right">
                  <div className="bg-primary text-primary-foreground p-5 rounded-2xl rounded-tr-none shadow-xl shadow-primary/10">
                    <p className="text-sm font-medium leading-relaxed">
                      Hi Rahul, I apologize for the delay. I've checked your claim status and it was waiting for IMEI verification. I have approved it now and you should receive the pickup schedule within 2 hours.
                    </p>
                  </div>
                  <p className="text-[10px] font-bold text-foreground/30 uppercase tracking-widest mt-2 mr-1">Today, 11:05 AM</p>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-border bg-card">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Type your message..." 
                  className="w-full bg-foreground/5 border border-border rounded-2xl py-4 pl-6 pr-16 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium text-sm"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-primary-foreground rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center opacity-20">
            <MessageSquare className="w-20 h-20 mb-4" />
            <p className="font-bold">Select a ticket to start chatting</p>
          </div>
        )}
      </div>
    </div>
  );
}
