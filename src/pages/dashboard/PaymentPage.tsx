import React from 'react';
import { motion } from 'framer-motion';
import { IndianRupee, Shield, CheckCircle, Zap, ArrowRight, Smartphone } from 'lucide-react';
import { cn } from '@/utils/cn';

const plans = [
  { name: 'Basic', price: '499', period: 'Year', color: 'text-blue-500', bg: 'bg-blue-500/10', features: ['Screen Protection', 'Authorized Service', '1 Claim/Year'] },
  { name: 'Gold', price: '1499', period: 'Year', color: 'text-amber-500', bg: 'bg-amber-500/10', features: ['Full Accidental Coverage', 'Liquid Damage', '2 Claims/Year', 'Pickup & Drop'], popular: true },
  { name: 'Platinum', price: '2499', period: 'Year', color: 'text-primary', bg: 'bg-primary/10', features: ['Unlimited Claims', 'Theft Protection', 'International Warranty', '24/7 Priority Support'] },
];

export default function PaymentPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 pb-40">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-black mb-6">Choose Your Protection</h1>
        <p className="text-foreground/50 text-xl font-medium max-w-2xl mx-auto">Get peace of mind with our industry-leading smartphone insurance plans.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={cn(
              "bg-card border-2 p-10 rounded-[3rem] relative flex flex-col",
              plan.popular ? "border-primary shadow-2xl shadow-primary/10 scale-105 z-10" : "border-border"
            )}
          >
            {plan.popular && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">
                Most Popular
              </div>
            )}
            
            <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8", plan.bg, plan.color)}>
              <Shield className="w-8 h-8" />
            </div>
            
            <h3 className="text-2xl font-black mb-2">{plan.name} Care</h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-black">₹{plan.price}</span>
              <span className="text-foreground/40 font-bold uppercase tracking-widest text-[10px]">/ {plan.period}</span>
            </div>

            <ul className="space-y-4 mb-12 flex-1">
              {plan.features.map(f => (
                <li key={f} className="flex items-center gap-3 text-sm font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  {f}
                </li>
              ))}
            </ul>

            <button className={cn(
              "w-full py-4 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-2",
              plan.popular ? "bg-primary text-primary-foreground shadow-xl shadow-primary/20 hover:opacity-90" : "bg-foreground/5 hover:bg-foreground/10"
            )}>
              Buy Plan <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
