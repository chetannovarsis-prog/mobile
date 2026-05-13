import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  CheckCircle, 
  Truck, 
  Wrench, 
  FileText, 
  ChevronRight,
  Shield,
  Smartphone
} from 'lucide-react';
import { useAppStore } from '@/store/useAppStore';
import { cn } from '@/utils/cn';

export default function TrackClaim() {
  const claims = useAppStore(state => state.claims);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 pb-20">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-2">Track Your Claims</h1>
        <p className="text-foreground/50">Real-time updates on your device repair progress.</p>
      </div>

      {claims.length > 0 ? (
        <div className="space-y-10">
          {claims.map((claim, i) => (
            <motion.div
              key={claim.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-[2.5rem] overflow-hidden shadow-xl"
            >
              <div className="p-8 border-b border-border bg-foreground/5 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-2xl">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{claim.deviceName}</h3>
                    <p className="text-xs font-black uppercase tracking-widest text-foreground/40">Claim #{claim.id} • {claim.type}</p>
                  </div>
                </div>
                <div className={cn(
                  "px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border",
                  claim.status === 'Completed' ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" : "bg-amber-500/10 text-amber-500 border-amber-500/20"
                )}>
                  {claim.status}
                </div>
              </div>

              <div className="p-10">
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border z-0" />
                  
                  <div className="space-y-12">
                    {claim.timeline.map((step, idx) => (
                      <div key={idx} className="relative z-10 flex gap-8">
                        <div className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-lg",
                          idx === claim.timeline.length - 1 ? "bg-primary text-primary-foreground" : "bg-emerald-500 text-white"
                        )}>
                          <CheckCircle className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold">{step.status}</p>
                          <p className="text-xs text-foreground/40 font-bold uppercase tracking-widest mt-1">
                            {new Date(step.date).toLocaleDateString()} • {new Date(step.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>
                    ))}
                    
                    {claim.status === 'Pending' && (
                      <div className="relative z-10 flex gap-8 opacity-30">
                        <div className="w-8 h-8 rounded-full bg-border flex items-center justify-center shrink-0">
                          <Truck className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold">Pickup Scheduled</p>
                          <p className="text-xs font-bold uppercase tracking-widest mt-1">Waiting for approval</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-card border border-border rounded-[3rem]">
          <FileText className="w-16 h-16 text-foreground/10 mx-auto mb-4" />
          <p className="text-foreground/40 font-bold">You haven't filed any claims yet.</p>
        </div>
      )}
    </div>
  );
}
