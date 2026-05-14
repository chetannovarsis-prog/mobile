import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Smartphone, ArrowRight, CheckCircle, Info, Lock, Mail, Phone, Hash } from 'lucide-react';
import { useAppStore } from '@/store/useAppStore';
import { cn } from '@/utils/cn';

export default function LoginPage() {
  const [loginType, setLoginType] = useState<'user' | 'admin'>('user');
  const [step, setStep] = useState<'number' | 'otp'>('number');
  
  // User Login State
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  
  // Admin Login State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const router = useNavigate();
  const setUser = useAppStore(state => state.setUser);

  const handleUserSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 'number') {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setStep('otp');
      }, 1500);
    } else {
      handleFinalLogin();
    }
  };

  const handleAdminSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleFinalLogin();
  };

  const handleFinalLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setUser({
        name: loginType === 'admin' ? 'System Admin' : 'Demo User',
        email: email || 'demo@example.com',
        phone: phone || '+91 98765 43210',
        isAdmin: loginType === 'admin'
      });
      setIsLoading(false);
      setShowSuccess(true);
      
      setTimeout(() => {
        router(loginType === 'admin' ? '/admin' : '/dashboard');
      }, 1500);
    }, 1500);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus next
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full relative z-10"
      >
        <div className="bg-card border border-border p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
          {/* Brand Logo */}
          <div className="text-center mb-10">
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6 shadow-lg shadow-primary/5"
            >
              <Shield className="w-8 h-8" />
            </motion.div>
            <h1 className="text-3xl font-black mb-2">Mobi Service Plus</h1>
            <p className="text-foreground/50 font-medium text-sm tracking-tight">Protect. Repair. Replace.</p>
          </div>

          {/* Login Type Switcher */}
          {!showSuccess && (
            <div className="flex p-1.5 bg-foreground/5 rounded-[1.5rem] mb-8">
              <button
                onClick={() => { setLoginType('user'); setStep('number'); }}
                className={cn(
                  "flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
                  loginType === 'user' ? "bg-white dark:bg-zinc-800 shadow-xl text-primary" : "text-foreground/40"
                )}
              >
                User Login
              </button>
              <button
                onClick={() => setLoginType('admin')}
                className={cn(
                  "flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
                  loginType === 'admin' ? "bg-white dark:bg-zinc-800 shadow-xl text-primary" : "text-foreground/40"
                )}
              >
                Admin Panel
              </button>
            </div>
          )}

          <AnimatePresence mode="wait">
            {showSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-500 mx-auto mb-8 animate-bounce">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-black mb-4">Welcome back!</h2>
                <p className="text-foreground/50 font-medium tracking-tight">Redirecting to your dashboard...</p>
              </motion.div>
            ) : loginType === 'user' ? (
              <motion.div
                key="user-login"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                {step === 'number' ? (
                  <form onSubmit={handleUserSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-foreground/40 ml-1">Mobile Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/20" />
                        <span className="absolute left-12 top-1/2 -translate-y-1/2 text-sm font-bold border-r border-border pr-3">+91</span>
                        <input
                          type="tel"
                          required
                          placeholder="98765 43210"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-foreground/5 border border-border rounded-2xl py-4 pl-24 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-bold text-sm tracking-widest"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading || phone.length < 10}
                      className="w-full bg-primary text-primary-foreground py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:opacity-90 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                    >
                      {isLoading ? (
                        <div className="w-6 h-6 border-3 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      ) : (
                        <>Send OTP <ArrowRight className="w-6 h-6" /></>
                      )}
                    </button>
                  </form>
                ) : (
                  <form onSubmit={handleUserSubmit} className="space-y-8">
                    <div className="text-center">
                      <p className="text-sm font-medium text-foreground/50 mb-2">Verification code sent to</p>
                      <p className="font-black text-primary">+91 {phone}</p>
                      <button onClick={() => setStep('number')} className="text-[10px] font-black text-primary uppercase tracking-widest mt-2 hover:underline">Change Number</button>
                    </div>

                    <div className="flex justify-between gap-3">
                      {otp.map((digit, i) => (
                        <input
                          key={i}
                          id={`otp-${i}`}
                          type="text"
                          inputMode="numeric"
                          maxLength={1}
                          value={digit}
                          onChange={(e) => handleOtpChange(i, e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Backspace' && !digit && i > 0) {
                              document.getElementById(`otp-${i-1}`)?.focus();
                            }
                          }}
                          className="w-12 h-14 bg-foreground/5 border border-border rounded-xl text-center text-xl font-black focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        />
                      ))}
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading || otp.some(d => !d)}
                      className="w-full bg-primary text-primary-foreground py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:opacity-90 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                    >
                      {isLoading ? (
                        <div className="w-6 h-6 border-3 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      ) : (
                        <>Verify & Login <ArrowRight className="w-6 h-6" /></>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            ) : (
              <motion.form
                key="admin-login"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleAdminSubmit}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-foreground/40 ml-1">Admin Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/20" />
                    <input
                      type="email"
                      required
                      placeholder="admin@MobiServicePlus.care"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-foreground/5 border border-border rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-bold text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-foreground/40 ml-1">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/20" />
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-foreground/5 border border-border rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-bold text-sm"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary text-primary-foreground py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:opacity-90 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-3 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  ) : (
                    <>Admin Access <ArrowRight className="w-6 h-6" /></>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
        
        {!showSuccess && (
          <p className="text-center mt-10 text-sm text-foreground/40 font-medium">
            New to Mobi Service Plus? <Link to="/register" className="text-primary font-black hover:underline">Create Account</Link>
          </p>
        )}
      </motion.div>
    </div>
  );
}
