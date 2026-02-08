
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, CONTACT_EMAIL } from '../constants';
import { Menu, X, Lock, ChevronDown, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="relative min-h-screen selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      {/* Cinematic Aura Layers */}
      <div className="fixed inset-0 z-[-2] bg-slate-950" />
      <div className="fixed inset-0 z-[-1] neural-grid opacity-[0.12] pointer-events-none" />
      <div className="fixed top-[-10%] left-[-5%] w-[50%] h-[50%] rounded-full bg-cyan-500/5 blur-[150px] pointer-events-none" />
      
      {/* HEADER */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${scrolled ? 'glass py-4 border-b border-white/5 shadow-2xl' : 'bg-transparent py-7'}`}>
        <div className="max-w-[1920px] mx-auto px-12 md:px-20 flex justify-between items-center">
          <Link to="/" className="hover:opacity-80 transition-opacity flex items-center">
            <Logo size={42} />
          </Link>

          <div className="hidden lg:flex items-center gap-14">
            {NAV_LINKS.map((link) => (
              <div 
                key={link.label} 
                className="relative group py-2"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-2.5 text-[10px] font-mono font-bold tracking-[0.35em] uppercase text-slate-400 group-hover:text-white transition-all">
                  {link.label} 
                  <ChevronDown size={10} className={`transition-transform duration-500 ${activeDropdown === link.label ? 'rotate-180 text-cyan-400' : 'opacity-30'}`} />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.99 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.99 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-[-24px] w-80 glass border border-white/10 p-5 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.9)] rounded-sm space-y-1"
                    >
                      <div className="absolute top-[-6px] left-10 w-3 h-3 rotate-45 glass border-t border-l border-white/10" />
                      {link.sublinks.map(sub => (
                        <Link 
                          key={sub.path} 
                          to={sub.path} 
                          className="flex items-center gap-4 px-4 py-3 text-[10px] font-mono uppercase tracking-[0.25em] text-slate-500 hover:text-cyan-400 hover:bg-white/5 transition-all group/sub rounded-sm"
                        >
                          <span className="opacity-0 group-hover/sub:opacity-100 transition-all text-cyan-400 transform -translate-x-1 group-hover/sub:translate-x-0">{sub.icon}</span>
                          {sub.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            
            <div className="h-5 w-px bg-white/10 mx-2" />
            
            <Link to="/portal" className="px-8 py-3.5 glass border border-white/10 text-white text-[10px] font-mono font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all flex items-center gap-3 shadow-xl group">
              <Lock size={12} className="group-hover:scale-110 transition-transform" /> Institutional Portal
            </Link>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white p-2">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/98 backdrop-blur-2xl flex flex-col p-12 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-20">
              <Logo size={40} />
              <button onClick={() => setIsMenuOpen(false)} className="text-white p-2 border border-white/10 rounded-full">
                <X size={28} />
              </button>
            </div>
            
            <div className="space-y-16">
              {NAV_LINKS.map(group => (
                <div key={group.label} className="space-y-6">
                  <h3 className="text-[11px] font-mono text-cyan-500/60 uppercase tracking-[0.5em] font-bold">{group.label}</h3>
                  <div className="flex flex-col gap-6">
                    {group.sublinks.map(link => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="text-4xl font-heading font-bold uppercase text-white hover:text-cyan-400 transition-all tracking-tighter"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-0 min-h-screen">
        {children}
      </main>

      <footer className="relative bg-slate-950 border-t border-white/5 pt-40 pb-20 px-12 md:px-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24">
          <div className="space-y-12">
            <Logo size={40} />
            <p className="text-slate-500 text-base leading-relaxed max-w-sm font-light italic opacity-60">
              "Architecting civilization-scale systems with absolute cryptographic certainty. The unshakeable foundation for global strategic intelligence."
            </p>
            <div className="space-y-4">
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.4em] font-bold">Inquiries</div>
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 text-white font-mono text-xs hover:text-cyan-400 transition-colors">
                <Mail size={14} /> {CONTACT_EMAIL}
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-mono font-bold text-white uppercase text-[11px] tracking-[0.5em] mb-12 opacity-30">Registry</h4>
            <ul className="space-y-6">
              {['NarrativeOS', 'AstraPilot', 'GrowthOS', 'Omnis-RE', 'BioTwin', 'AdThink', 'Freeza'].map(p => (
                <li key={p}><Link to={`/platforms/${p.toLowerCase().replace('-re', 're')}`} className="text-slate-500 hover:text-white transition-all text-[11px] font-mono uppercase tracking-[0.3em]">{p}</Link></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono font-bold text-white uppercase text-[11px] tracking-[0.5em] mb-12 opacity-30">Institutional</h4>
            <ul className="space-y-6">
              <li><Link to="/governance" className="text-slate-500 hover:text-white transition-all text-[11px] font-mono uppercase tracking-[0.3em]">Governance Protocol</Link></li>
              <li><Link to="/transparency" className="text-slate-500 hover:text-white transition-all text-[11px] font-mono uppercase tracking-[0.3em]">Transparency Hub</Link></li>
              <li><Link to="/manifesto" className="text-slate-500 hover:text-white transition-all text-[11px] font-mono uppercase tracking-[0.3em]">Manifesto</Link></li>
              <li><Link to="/operations" className="text-slate-500 hover:text-white transition-all text-[11px] font-mono uppercase tracking-[0.3em]">Global Operations</Link></li>
              <li><Link to="/procurement" className="text-slate-500 hover:text-white transition-all text-[11px] font-mono uppercase tracking-[0.3em]">Procurement</Link></li>
            </ul>
          </div>

          <div className="space-y-12">
            <h4 className="font-mono font-bold text-white uppercase text-[11px] tracking-[0.5em] mb-12 opacity-30">Infrastructure</h4>
            <ul className="space-y-6">
              <li><Link to="/security" className="text-slate-500 hover:text-white transition-all text-[11px] font-mono uppercase tracking-[0.3em]">Security Vault</Link></li>
              <li><Link to="/technology" className="text-slate-500 hover:text-white transition-all text-[11px] font-mono uppercase tracking-[0.3em]">Architecture</Link></li>
              <li><Link to="/status" className="text-slate-500 hover:text-white transition-all text-[11px] font-mono uppercase tracking-[0.3em]">System Status</Link></li>
              <li><Link to="/research" className="text-slate-500 hover:text-white transition-all text-[11px] font-mono uppercase tracking-[0.3em]">Innovation Labs</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-[1920px] mx-auto mt-40 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-[10px] font-mono text-slate-700 uppercase tracking-[0.6em] font-bold">
            © 2025 NEXORGYN LABS GLOBAL. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-16 text-[10px] font-mono text-slate-700 uppercase tracking-[0.3em] font-bold">
            <Link to="/security" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/security" className="hover:text-white transition-colors">Compliance</Link>
            <Link to="/security" className="hover:text-white transition-colors">Security</Link>
            <span className="text-white/10">|</span>
            <span className="text-slate-500">Global Cluster: Mumbai / Frankfurt</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
