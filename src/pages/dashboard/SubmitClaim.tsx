import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Smartphone, 
  AlertCircle, 
  Camera, 
  Upload, 
  ChevronRight, 
  CheckCircle,
  Shield
} from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAppStore } from '@/store/useAppStore';
import { cn } from '@/utils/cn';

export default function SubmitClaim() {
  const [searchParams] = useSearchParams();
  const deviceId = searchParams.get('deviceId');
  const devices = useAppStore(state => state.devices);
  const addClaim = useAppStore(state => state.addClaim);
  const navigate = useNavigate();

  const selectedDevice = devices.find(d => d.id === deviceId) || devices[0];

  const [formData, setFormData] = useState({
    type: 'Screen Damage',
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDevice) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      addClaim({
        deviceId: selectedDevice.id,
        deviceName: `${selectedDevice.brand} ${selectedDevice.model}`,
        type: formData.type,
        description: formData.description,
      });
      setIsSubmitting(false);
      navigate('/dashboard/claims/track');
    }, 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 pb-20">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-2">Submit a Claim</h1>
        <p className="text-foreground/50">Tell us what happened to your device.</p>
      </div>

      {!selectedDevice ? (
        <div className="bg-card border border-border p-10 rounded-[2.5rem] text-center">
          <AlertCircle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
          <p className="font-bold">No device selected.</p>
          <button onClick={() => navigate('/dashboard/devices')} className="mt-4 text-primary font-bold">Select a device first</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-card border border-border p-8 rounded-[2.5rem] shadow-xl">
            <div className="flex items-center gap-6 p-4 bg-foreground/5 rounded-2xl mb-8">
              <img src={selectedDevice.image} className="w-16 h-16 rounded-xl object-cover" />
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40">Claiming for</p>
                <h3 className="font-bold">{selectedDevice.brand} {selectedDevice.model}</h3>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-foreground/40 ml-1">Damage Type</label>
                <select 
                  className="w-full bg-foreground/5 border border-border rounded-xl py-4 px-4 font-bold"
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                >
                  <option>Screen Damage</option>
                  <option>Liquid Damage</option>
                  <option>Physical Damage</option>
                  <option>Hardware Failure</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-foreground/40 ml-1">Describe Incident</label>
                <textarea 
                  required
                  placeholder="How did the damage occur?"
                  className="w-full bg-foreground/5 border border-border rounded-xl py-4 px-4 font-medium h-32"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-foreground/40 ml-1">Upload Photos of Damage</label>
                <div className="border-2 border-dashed border-border rounded-2xl p-8 text-center bg-foreground/5 group hover:border-primary/50 transition-all cursor-pointer">
                  <Camera className="w-10 h-10 text-foreground/20 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-bold">Click to upload photos</p>
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:opacity-90 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
          >
            {isSubmitting ? (
              <div className="w-6 h-6 border-3 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
            ) : (
              <>Submit Claim Request <ChevronRight className="w-6 h-6" /></>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
