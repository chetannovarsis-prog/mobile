import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Smartphone, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Wrench, 
  Globe,
  Lock,
  IndianRupee,
  Activity,
  Heart,
  Play,
  Check,
  Headphones
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';

const stats = [
  { icon: Shield, label: 'Devices Protected', value: '1.2M+', color: 'bg-emerald-500/10 text-emerald-500' },
  { icon: Smartphone, label: 'Claims Completed', value: '850K+', color: 'bg-indigo-500/10 text-indigo-500' },
  { label: 'Customer Rating', value: '4.9/5', rating: true, color: 'bg-amber-500/10 text-amber-500' },
  { icon: CheckCircle, label: 'Claims Approved', value: '99.8%', color: 'bg-pink-500/10 text-pink-500' },
];

const brandLogos = [
  { name: 'Oppo', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/OPPO_Logo.svg/1200px-OPPO_Logo.svg.png' },
  { name: 'Vivo', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Vivo_logo.svg/1200px-Vivo_logo.svg.png' },
  { name: 'Apple', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png' },
  { name: 'Samsung', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1200px-Samsung_Logo.svg.png' },
  { name: 'OnePlus', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/OnePlus_Logo.svg/1200px-OnePlus_Logo.svg.png' },
  { name: 'Xiaomi', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/1200px-Xiaomi_logo_%282021-%29.svg.png' },
  { name: 'Realme', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Realme_logo.svg/1200px-Realme_logo.svg.png' },
];

const benefits = [
  { 
    icon: Shield, 
    title: "Full Protection", 
    desc: "Coverage for liquid damage, accidental physical damage, and motherboard failures.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  { 
    icon: Zap, 
    title: "Instant Approval", 
    desc: "Our AI system verifies your claim documents in minutes, not days.",
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  { 
    icon: Wrench, 
    title: "Genuine Parts", 
    desc: "We only use authorized service centers with 100% original manufacturer parts.",
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
];

const plans = [
  { 
    name: 'Basic Care', 
    price: '499', 
    desc: 'For budget devices',
    features: ['Screen Protection', 'Authorized Service', '1 Claim/Year', 'Email Support'],
    color: 'text-blue-500', 
    bg: 'bg-blue-500/10' 
  },
  { 
    name: 'Gold Care', 
    price: '1499', 
    desc: 'Our most popular plan',
    features: ['Full Accidental Coverage', 'Liquid Damage', '2 Claims/Year', 'Pickup & Drop', 'Priority Support'],
    color: 'text-amber-500', 
    bg: 'bg-amber-500/10', 
    popular: true 
  },
  { 
    name: 'Platinum Care', 
    price: '2499', 
    desc: 'Ultimate peace of mind',
    features: ['Unlimited Claims', 'Theft Protection', 'International Warranty', '24/7 Dedicated Manager', 'Next-Day Replacement'],
    color: 'text-primary', 
    bg: 'bg-primary/10' 
  },
];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden bg-[#FFFFFF]">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] pt-32 pb-20 px-6 overflow-hidden flex flex-col items-center">
        {/* Subtle Background Elements */}
        <div className="absolute top-1/4 left-0 w-full h-full -z-10 opacity-50 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[150px] -mr-96" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] -ml-64" />
        </div>

        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="z-20 text-left lg:pr-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/5 border border-emerald-500/10 rounded-full mb-10">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">New: iPhone 15 Pro Support Live</span>
              </div>
              
              <h1 className="text-[75px] md:text-[100px] lg:text-[115px] font-black leading-[0.82] tracking-tight mb-10">
                Protect.<br />
                <span className="text-[#10B981]">Repair.</span><br />
                Replace.
              </h1>
              
              <p className="text-xl text-[#1A1F25]/50 font-medium max-w-lg mb-10 leading-relaxed">
                Complete protection for your smartphone with instant claims and expert care.
              </p>

              <div className="flex flex-wrap gap-10 mb-14">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-emerald-500/5 rounded-xl text-emerald-500 border border-emerald-500/10">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-black uppercase tracking-widest leading-tight">
                    100%<br /><span className="text-[#1A1F25]/30 text-[9px]">Secure</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-emerald-500/5 rounded-xl text-emerald-500 border border-emerald-500/10">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-black uppercase tracking-widest leading-tight">
                    Instant<br /><span className="text-[#1A1F25]/30 text-[9px]">Claims</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-emerald-500/5 rounded-xl text-emerald-500 border border-emerald-500/10">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-black uppercase tracking-widest leading-tight">
                    24/7<br /><span className="text-[#1A1F25]/30 text-[9px]">Support</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5">
                <Link to="/login" className="px-10 py-5 bg-[#00A36C] text-white rounded-[1.5rem] font-black text-lg shadow-2xl shadow-emerald-600/30 hover:scale-105 transition-all flex items-center justify-center gap-3">
                  Protect My Device <ArrowRight className="w-6 h-6" />
                </Link>
                <button className="px-10 py-5 bg-white border border-[#E5E7EB] rounded-[1.5rem] font-black text-lg shadow-xl shadow-foreground/5 hover:bg-foreground/5 transition-all flex items-center justify-center gap-3 group">
                  How It Works <Play className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* Right Visual Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative flex items-center justify-center"
            >
              {/* Product Visual Container */}
              <div className="relative z-10 w-full max-w-[650px] lg:translate-x-10">
                <img 
                  src="/hero_phones_new.png" 
                  alt="Premium Devices" 
                  className="w-full h-auto drop-shadow-[0_50px_80px_rgba(16,185,129,0.15)] mix-blend-multiply"
                />
              </div>

              {/* Badges - Exact Positioning */}
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute top-[5%] right-[5%] z-30 bg-white/90 backdrop-blur-xl p-5 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-white flex gap-4 items-center"
              >
                <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-600 border border-emerald-500/20">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#1A1F25]/40 mb-1">Approved Claims</p>
                  <p className="text-xl font-black">99.8%</p>
                  <p className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest">Success Rate</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="absolute bottom-[35%] left-0 z-30 bg-white/90 backdrop-blur-xl p-5 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-white flex gap-4 items-center"
              >
                <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-600 border border-emerald-500/20">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#1A1F25]/40 mb-1">Response Time</p>
                  <p className="text-xl font-black">&lt; 4 Hours</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="absolute bottom-[10%] right-[10%] z-30 bg-white/90 backdrop-blur-xl p-5 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-white flex gap-5 items-center"
              >
                <div className="flex -space-x-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-[#F3F4F6] flex items-center justify-center overflow-hidden">
                       <User size={20} className="text-gray-400" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-4 border-white bg-[#10B981] flex items-center justify-center text-white text-[12px] font-black tracking-tighter">+</div>
                </div>
                <div>
                  <p className="text-xl font-black">1.2M+</p>
                  <p className="text-[9px] font-bold text-[#1A1F25]/40 uppercase tracking-widest">Happy Customers</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats Bar - Exactly as Image */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-28 bg-[#1A1F25] rounded-[3rem] p-12 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-20"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-6 border-r border-white/10 last:border-0 pr-12 last:pr-0">
                <div className={cn("w-16 h-16 rounded-[1.25rem] flex items-center justify-center shrink-0", stat.color)}>
                  {stat.icon ? <stat.icon className="w-7 h-7" /> : <Star className="w-7 h-7 fill-current" />}
                </div>
                <div>
                  <h3 className="text-3xl font-black text-white leading-none mb-2">{stat.value}</h3>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/30 whitespace-nowrap">{stat.label}</p>
                  {stat.rating && (
                    <div className="flex gap-1 mt-1.5">
                      {[1, 2, 3, 4, 5].map(j => <Star key={j} className="w-3 h-3 fill-amber-500 text-amber-500" />)}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Trustlogos */}
          <div className="mt-24 text-center">
            <p className="text-[11px] font-black uppercase tracking-widest text-[#1A1F25]/30 mb-12">Trusted by 1.2M+ users across India</p>
            <div className="flex flex-wrap justify-center items-center gap-16 grayscale opacity-20 hover:opacity-40 transition-opacity duration-500">
              {brandLogos.map(logo => (
                <img key={logo.name} src={logo.url} alt={logo.name} className="h-7 object-contain" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-32 px-6 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Why Choose SecureMobile?</h2>
            <p className="text-foreground/50 text-xl font-medium max-w-2xl mx-auto">We've built the world's most advanced protection ecosystem for your expensive devices.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-card border border-border p-10 rounded-[3rem] group hover:border-primary/50 transition-all shadow-lg hover:shadow-primary/5"
              >
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform", benefit.bg, benefit.color)}>
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-foreground/50 font-medium leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Simple Pricing Plans</h2>
            <p className="text-foreground/50 text-xl font-medium max-w-2xl mx-auto">Choose the level of protection that suits your lifestyle.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={cn(
                  "bg-card border-2 p-12 rounded-[3.5rem] flex flex-col relative",
                  plan.popular ? "border-emerald-500 shadow-2xl shadow-emerald-500/20 scale-105 z-10" : "border-border shadow-lg"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                    Most Popular
                  </div>
                )}
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-8", plan.bg, plan.color)}>
                  <Shield className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black mb-2">{plan.name}</h3>
                <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest mb-6">{plan.desc}</p>
                <div className="flex items-baseline gap-1 mb-10">
                  <span className="text-5xl font-black">₹{plan.price}</span>
                  <span className="text-foreground/40 font-bold uppercase tracking-widest text-[10px]">/ Year</span>
                </div>
                <ul className="space-y-4 mb-12 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/login" className={cn(
                  "w-full py-4 rounded-2xl font-black text-lg text-center transition-all flex items-center justify-center gap-2",
                  plan.popular ? "bg-emerald-500 text-white shadow-xl shadow-emerald-500/20 hover:opacity-90" : "bg-foreground/5 hover:bg-foreground/10"
                )}>
                  Choose Plan <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto bg-[#00A36C] text-white rounded-[4rem] p-16 md:p-24 text-center relative overflow-hidden group shadow-2xl shadow-emerald-600/40">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-1000" />
          <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10 leading-tight">Ready to protect your device?</h2>
          <p className="text-white/70 text-xl font-medium mb-12 max-w-2xl mx-auto relative z-10">
            Registration takes less than 2 minutes. Get instant protection and never worry about your phone again.
          </p>
          <Link to="/login" className="bg-white text-emerald-600 px-12 py-6 rounded-3xl font-black text-2xl shadow-2xl relative z-10 hover:scale-105 transition-all inline-flex items-center gap-3">
            Start Registration <ArrowRight className="w-7 h-7" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function User(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  );
}
