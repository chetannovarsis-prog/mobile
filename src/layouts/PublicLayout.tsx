import { Outlet, Link } from 'react-router-dom';
import { Shield, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/utils/cn';

export default function PublicLayout() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-3" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="">
              <img src="/logo.png" className='h-15' alt="" />
            </div>
            <span className="text-xl font-bold tracking-tight flex gap-2">
              Mobi Service <span className="text-primary">Plus</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8 font-bold text-sm">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <a href="/#how-it-works" className="hover:text-primary transition-colors whitespace-nowrap">How It Works</a>
            <a href="/#benefits" className="hover:text-primary transition-colors">Benefits</a>
            <a href="/#pricing" className="hover:text-primary transition-colors">Pricing</a>
            <a href="/#support" className="hover:text-primary transition-colors">Support</a>
            <Link to="/login" className="px-8 py-3 bg-emerald-600 text-white rounded-full hover:opacity-90 transition-all shadow-lg shadow-emerald-600/20 flex items-center gap-2">
              Get Started
            </Link>
            <button className="p-3 bg-foreground/5 rounded-full hover:bg-foreground/10 transition-all">
              <Menu className="w-5 h-5" />
            </button>
          </div>


        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer className="bg-card border-t border-border pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-sm">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div >
                <img src="/logo.png" className='h-15' alt="" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Mobi Service <span className="text-primary">Plus</span>
              </span>
            </Link>
            <p className="text-foreground/60 leading-relaxed">
              Premium smartphone protection and instant claim solutions. Your device's best friend.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-foreground/60">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><Link to="/login" className="hover:text-primary">Login</Link></li>
              <li><Link to="/register" className="hover:text-primary">Register</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-foreground/60">
              <li><Link to="#" className="hover:text-primary">FAQs</Link></li>
              <li><Link to="#" className="hover:text-primary">Contact Us</Link></li>
              <li><Link to="#" className="hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <p className="text-foreground/60 mb-2">support@mobiserviceplus.care</p>
            <p className="text-foreground/60">+1 (555) 000-0000</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-border text-center text-foreground/40 text-xs">
          © 2024 Mobi Service Plus Care. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
