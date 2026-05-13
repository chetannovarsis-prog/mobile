import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Smartphone, ArrowRight, CheckCircle, Phone, User, Mail } from 'lucide-react';
import { useAppStore } from '@/store/useAppStore';
import { cn } from '@/utils/cn';

export default function RegisterPage() {
  const [step, setStep] = useState<'details' | 'otp'>('details');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  
  const router = useNavigate();
  const setUser = useAppStore(state => state.setUser);

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep('otp');
    }, 1500);
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setUser({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        isAdmin: false
      });
      setIsLoading(false);
      setShowSuccess(true);
      
      setTimeout(() => {
        router('/dashboard');
      }, 1500);
    }, 1500);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden bg-background">
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
            <h1 className="text-3xl font-black mb-2">Join SecureMobile</h1>
            <p className="text-foreground/50 font-medium text-sm tracking-tight">Create your protection account</p>
          </div>

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
                <h2 className="text-3xl font-black mb-4">Account Created!</h2>
                <p className="text-foreground/50 font-medium tracking-tight">Setting up your dashboard...</p>
              </motion.div>
            ) : step === 'details' ? (
              <motion.form
                key="details"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleDetailsSubmit}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-foreground/40 ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/20" />
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-foreground/5 border border-border rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-bold text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-foreground/40 ml-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/20" />
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-foreground/5 border border-border rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-bold text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-foreground/40 ml-1">Mobile Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/20" />
                    <span className="absolute left-12 top-1/2 -translate-y-1/2 text-sm font-bold border-r border-border pr-3">+91</span>
                    <input
                      type="tel"
                      required
                      placeholder="98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-foreground/5 border border-border rounded-2xl py-4 pl-24 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-bold text-sm tracking-widest"
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
                    <>Verify Mobile <ArrowRight className="w-6 h-6" /></>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.form
                key="otp"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                onSubmit={handleOtpSubmit}
                className="space-y-8"
              >
                <div className="text-center">
                  <p className="text-sm font-medium text-foreground/50 mb-2">OTP sent to your mobile</p>
                  <p className="font-black text-primary">+91 {formData.phone}</p>
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
                    <>Complete Signup <ArrowRight className="w-6 h-6" /></>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
        
        {!showSuccess && (
          <p className="text-center mt-10 text-sm text-foreground/40 font-medium">
            Already have an account? <Link to="/login" className="text-primary font-black hover:underline">Login Now</Link>
          </p>
        )}
      </motion.div>
    </div>
  );
}
