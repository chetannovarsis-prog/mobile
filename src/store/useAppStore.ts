import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Device {
  id: string;
  brand: string;
  model: string;
  variant: string;
  imei: string;
  purchaseDate: string;
  purchasePrice: string;
  condition: string;
  status: 'Pending' | 'Approved' | 'Rejected' | 'Expired';
  image?: string;
}

export interface Claim {
  id: string;
  deviceId: string;
  deviceName: string;
  type: string;
  description: string;
  status: 'Pending' | 'Approved' | 'Rejected' | 'Pickup Scheduled' | 'Repairing' | 'Completed';
  date: string;
  timeline: { status: string; date: string }[];
}

interface User {
  name: string;
  email: string;
  phone: string;
  isAdmin?: boolean;
}

interface AppState {
  user: User | null;
  devices: Device[];
  claims: Claim[];
  setUser: (user: User | null) => void;
  addDevice: (device: Omit<Device, 'id' | 'status'>) => void;
  updateDeviceStatus: (deviceId: string, status: Device['status']) => void;
  addClaim: (claim: Omit<Claim, 'id' | 'status' | 'date' | 'timeline'>) => void;
  updateClaimStatus: (claimId: string, status: Claim['status']) => void;
  logout: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      user: null,
      devices: [],
      claims: [],
      setUser: (user) => set({ user }),
      addDevice: (device) => set((state) => ({
        devices: [...state.devices, { 
          ...device, 
          id: `DEV-${Math.floor(Math.random() * 100000)}`, 
          status: 'Pending' 
        }]
      })),
      updateDeviceStatus: (deviceId, status) => set((state) => ({
        devices: state.devices.map(d => d.id === deviceId ? { ...d, status } : d)
      })),
      addClaim: (claim) => set((state) => {
        const newClaim: Claim = {
          ...claim,
          id: `CLM-${Math.floor(Math.random() * 100000)}`,
          status: 'Pending',
          date: new Date().toISOString().split('T')[0],
          timeline: [{ status: 'Pending', date: new Date().toISOString() }]
        };
        return { claims: [newClaim, ...state.claims] };
      }),
      updateClaimStatus: (claimId, status) => set((state) => ({
        claims: state.claims.map(c => c.id === claimId ? { 
          ...c, 
          status, 
          timeline: [...c.timeline, { status, date: new Date().toISOString() }] 
        } : c)
      })),
      logout: () => set({ user: null, devices: [], claims: [] }),
    }),
    {
      name: 'secure-mobile-storage',
    }
  )
);
