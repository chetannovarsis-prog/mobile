import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  ChevronRight, 
  ChevronLeft, 
  Upload, 
  Camera, 
  FileText, 
  Shield, 
  CheckCircle,
  X,
  Plus
} from 'lucide-react';
import { brands, variants, conditions } from '@/data/mockData';
import { useAppStore } from '@/store/useAppStore';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/utils/cn';

export default function AddDevice() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    variant: '',
    imei: '',
    purchaseDate: '',
    purchasePrice: '',
    condition: 'Excellent (Minor signs of use)',
  });
  const [files, setFiles] = useState<{ invoice?: File; device?: File }>({});
  const [previews, setPreviews] = useState<{ invoice?: string; device?: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const navigate = useNavigate();
  const addDevice = useAppStore(state => state.addDevice);

  const availableModels = useMemo(() => {
    const brandData = brands.find(b => b.name === formData.brand);
    return brandData ? brandData.models : [];
  }, [formData.brand]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      // Reset model if brand changes
      ...(name === 'brand' ? { model: '' } : {})
    }));
  };

  const handleFileChange = (type: 'invoice' | 'device', e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFiles(prev => ({ ...prev, [type]: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviews(prev => ({ ...prev, [type]: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      addDevice({
        ...formData,
        image: previews.device || 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1000&auto=format&fit=crop',
      });
      setIsLoading(false);
      setShowSuccess(true);
      setTimeout(() => navigate('/dashboard/devices'), 2000);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 pb-20">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-2">Register Your Device</h1>
        <p className="text-foreground/50">Follow the steps to get instant protection.</p>
      </div>

      {/* Progress Stepper */}
      <div className="flex items-center justify-between mb-12 relative">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={cn(
              "relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all",
              step >= s ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "bg-card border border-border text-foreground/30"
            )}
          >
            {step > s ? <CheckCircle className="w-6 h-6" /> : s}
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-bold whitespace-nowrap uppercase tracking-widest">
              {s === 1 ? "Details" : s === 2 ? "Uploads" : "Confirm"}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-card border border-border rounded-[2.5rem] overflow-hidden shadow-xl">
        <form onSubmit={handleSubmit} className="p-10">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground/70 ml-1">Brand</label>
                    <select
                      name="brand"
                      required
                      value={formData.brand}
                      onChange={handleInputChange}
                      className="w-full bg-foreground/5 border border-border rounded-2xl py-4 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium appearance-none cursor-pointer"
                    >
                      <option value="">Select Brand</option>
                      {brands.map(b => <option key={b.name} value={b.name}>{b.name}</option>)}
                    </select>
                  </div>

                  <div className={cn("space-y-2 transition-all", !formData.brand && "opacity-50 grayscale")}>
                    <label className="text-sm font-bold text-foreground/70 ml-1">Model</label>
                    <select
                      name="model"
                      required
                      disabled={!formData.brand}
                      value={formData.model}
                      onChange={handleInputChange}
                      className="w-full bg-foreground/5 border border-border rounded-2xl py-4 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium appearance-none cursor-pointer"
                    >
                      <option value="">Select Model</option>
                      {availableModels.map(m => <option key={m} value={m}>{m}</option>)}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground/70 ml-1">Variant</label>
                    <select
                      name="variant"
                      required
                      value={formData.variant}
                      onChange={handleInputChange}
                      className="w-full bg-foreground/5 border border-border rounded-2xl py-4 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium appearance-none cursor-pointer"
                    >
                      <option value="">Select Variant</option>
                      {variants.map(v => <option key={v} value={v}>{v}</option>)}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground/70 ml-1">IMEI Number</label>
                    <input
                      name="imei"
                      type="text"
                      required
                      placeholder="15 digit IMEI"
                      value={formData.imei}
                      onChange={handleInputChange}
                      className="w-full bg-foreground/5 border border-border rounded-2xl py-4 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground/70 ml-1">Purchase Date</label>
                    <input
                      name="purchaseDate"
                      type="date"
                      required
                      value={formData.purchaseDate}
                      onChange={handleInputChange}
                      className="w-full bg-foreground/5 border border-border rounded-2xl py-4 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground/70 ml-1">Purchase Price (₹)</label>
                    <input
                      name="purchasePrice"
                      type="number"
                      required
                      placeholder="e.g. 79999"
                      value={formData.purchasePrice}
                      onChange={handleInputChange}
                      className="w-full bg-foreground/5 border border-border rounded-2xl py-4 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium"
                    />
                  </div>

                  <div className="col-span-1 md:col-span-2 space-y-2">
                    <label className="text-sm font-bold text-foreground/70 ml-1">Device Condition</label>
                    <select
                      name="condition"
                      required
                      value={formData.condition}
                      onChange={handleInputChange}
                      className="w-full bg-foreground/5 border border-border rounded-2xl py-4 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium appearance-none cursor-pointer"
                    >
                      {conditions.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                </div>
                <div className="flex justify-end pt-4">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-10 py-4 bg-primary text-primary-foreground rounded-2xl font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-primary/20"
                  >
                    Next Step <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="text-sm font-bold text-foreground/70 ml-1">Upload Invoice</label>
                    <div className="relative group aspect-video">
                      <input
                        type="file"
                        accept="image/*,application/pdf"
                        onChange={(e) => handleFileChange('invoice', e)}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      />
                      <div className="h-full border-2 border-dashed border-border group-hover:border-primary/50 rounded-3xl p-6 text-center transition-all bg-foreground/5 flex flex-col items-center justify-center">
                        {previews.invoice ? (
                          <div className="flex flex-col items-center gap-2">
                            <FileText className="w-10 h-10 text-primary" />
                            <p className="text-xs font-bold truncate max-w-[200px]">{files.invoice?.name}</p>
                          </div>
                        ) : (
                          <>
                            <Upload className="w-10 h-10 text-foreground/20 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                            <p className="text-sm font-bold">Upload Invoice</p>
                            <p className="text-[10px] text-foreground/40 mt-1 uppercase tracking-widest font-black">PDF or JPG (max 5MB)</p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-sm font-bold text-foreground/70 ml-1">Device Front Photo</label>
                    <div className="relative group aspect-video">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange('device', e)}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      />
                      <div className="h-full border-2 border-dashed border-border group-hover:border-primary/50 rounded-3xl p-2 text-center transition-all bg-foreground/5 flex flex-col items-center justify-center overflow-hidden">
                        {previews.device ? (
                          <img src={previews.device} alt="Device Preview" className="w-full h-full object-contain rounded-2xl" />
                        ) : (
                          <>
                            <Camera className="w-10 h-10 text-foreground/20 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                            <p className="text-sm font-bold">Take Photo</p>
                            <p className="text-[10px] text-foreground/40 mt-1 uppercase tracking-widest font-black">Screen must be clear</p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-8 py-4 bg-foreground/5 border border-border rounded-2xl font-bold flex items-center gap-2 hover:bg-foreground/10 transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" /> Back
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-10 py-4 bg-primary text-primary-foreground rounded-2xl font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-primary/20"
                  >
                    Next Step <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                {/* Dynamic Preview Card */}
                <div className="bg-foreground/5 p-8 rounded-[2rem] border border-border">
                  <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Review & Confirm
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    <div>
                      <p className="text-[10px] text-foreground/40 uppercase tracking-widest font-black mb-1">Brand</p>
                      <p className="font-bold">{formData.brand}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-foreground/40 uppercase tracking-widest font-black mb-1">Model</p>
                      <p className="font-bold">{formData.model}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-foreground/40 uppercase tracking-widest font-black mb-1">Variant</p>
                      <p className="font-bold">{formData.variant}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-foreground/40 uppercase tracking-widest font-black mb-1">IMEI</p>
                      <p className="font-bold">{formData.imei}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-foreground/40 uppercase tracking-widest font-black mb-1">Price</p>
                      <p className="font-bold text-primary">₹{formData.purchasePrice}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-foreground/40 uppercase tracking-widest font-black mb-1">Condition</p>
                      <p className="font-bold text-emerald-500">{formData.condition.split(' (')[0]}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-primary/5 border border-primary/20 rounded-2xl">
                  <input type="checkbox" required className="w-5 h-5 accent-primary cursor-pointer" />
                  <p className="text-xs font-medium text-primary/80">
                    I confirm that the device is in my possession and the information provided is correct.
                  </p>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-8 py-4 bg-foreground/5 border border-border rounded-2xl font-bold flex items-center gap-2 hover:bg-foreground/10 transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" /> Back
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-10 py-4 bg-primary text-primary-foreground rounded-2xl font-black text-lg flex items-center gap-2 hover:opacity-90 transition-all shadow-xl shadow-primary/20 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 border-3 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    ) : (
                      <>Complete Registration <CheckCircle className="w-6 h-6" /></>
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>

      {/* Success Animation */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center p-12 bg-card border border-border rounded-[3rem] shadow-2xl max-w-sm w-full"
            >
              <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-500 mx-auto mb-8 animate-bounce">
                <CheckCircle className="w-12 h-12" />
              </div>
              <h2 className="text-3xl font-black mb-4">Success!</h2>
              <p className="text-foreground/50 font-medium mb-8">Your device has been registered and is now under review.</p>
              <div className="px-6 py-2 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest inline-block">
                Redirecting...
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
