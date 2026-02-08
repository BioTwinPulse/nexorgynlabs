
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PLATFORMS, CONTACT_EMAIL } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ArrowRight, CheckCircle2, Cpu, ExternalLink, Box, Terminal, Layers, Zap, Network, Workflow, Fingerprint, Lock, Activity, Database, Rocket, Palette, PenTool, Building2, HeartPulse, Mail } from 'lucide-react';

const Platforms: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activePlatform, setActivePlatform] = useState(
    PLATFORMS.find(p => p.id === id) || PLATFORMS[0]
  );

  useEffect(() => {
    const found = PLATFORMS.find(p => p.id === id);
    if (found) setActivePlatform(found);
    else if (!id) setActivePlatform(PLATFORMS[0]);
  }, [id]);

  const handlePlatformSelect = (p: any) => {
    setActivePlatform(p);
    navigate(`/platforms/${p.id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* LEFT: COMMAND SELECTOR */}
      <div className="w-full lg:w-1/4 border-r border-slate-900 bg-slate-950 px-8 py-12 lg:sticky lg:top-0 h-fit lg:h-screen overflow-y-auto pt-32 carbon-overlay z-[60]">
        <div className="space-y-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 glass border border-cyan-500/20 rounded-sm text-[10px] font-mono text-cyan-500 uppercase tracking-[0.2em]">
              Sovereign Registry
            </div>
            <h2 className="font-heading font-bold text-4xl text-white uppercase tracking-tighter">The Seven Systems</h2>
          </div>

          <div className="space-y-2">
            {PLATFORMS.map((platform) => (
              <button
                key={platform.id}
                onClick={() => handlePlatformSelect(platform)}
                className={`w-full text-left p-6 flex items-center gap-5 border transition-all relative overflow-hidden group rounded-sm ${
                  activePlatform.id === platform.id 
                    ? 'glass border-cyan-500/40 bg-cyan-500/5 shadow-[0_0_30px_rgba(6,182,212,0.15)]' 
                    : 'border-slate-900/50 hover:border-slate-700 bg-transparent'
                }`}
              >
                {activePlatform.id === platform.id && (
                  <motion.div 
                    layoutId="active-indicator" 
                    className="absolute inset-y-0 left-0 w-1 bg-cyan-500 z-10 shadow-[0_0_15px_#06b6d4]" 
                  />
                )}
                <div className={`p-3 rounded transition-colors ${
                  activePlatform.id === platform.id ? 'text-cyan-400' : 'text-slate-600'
                }`}>
                  {platform.icon}
                </div>
                <div className="flex-1">
                  <h4 className={`font-heading font-bold text-lg uppercase tracking-tight ${
                    activePlatform.id === platform.id ? 'text-white' : 'text-slate-500'
                  }`}>
                    {platform.name}
                  </h4>
                  <p className="text-[9px] text-slate-700 uppercase font-mono mt-0.5 tracking-widest font-bold">{platform.tagline}</p>
                </div>
              </button>
            ))}
          </div>
          
          <div className="pt-10 border-t border-white/5">
            <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 text-cyan-500 text-[10px] font-mono uppercase tracking-widest hover:text-white transition-all font-bold">
               <Mail size={14} /> {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT: PLATFORM LANDING PAGE */}
      <div className="w-full lg:w-3/4 bg-slate-950 relative overflow-hidden min-h-screen pt-32 lg:pt-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePlatform.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <section className="relative min-h-screen flex flex-col items-center justify-center px-12 lg:px-24 overflow-hidden">
               <div className="absolute inset-0 z-0 pointer-events-none">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] bg-[radial-gradient(circle_at_center,rgba(0,209,255,0.08)_0%,transparent_70%)] blur-[120px]" />
                 <div className="absolute inset-0 neural-grid opacity-[0.08]" />
                 <div className="absolute inset-0 circuit-pattern" />
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center w-full max-w-[1500px] relative z-10">
                  <div className="space-y-12 text-left">
                     <div className="space-y-6">
                        <div className="flex items-center gap-4 text-cyan-400">
                           <div className="w-12 h-12 glass border border-cyan-500/30 rounded flex items-center justify-center">
                             {activePlatform.icon}
                           </div>
                           <span className="font-heading font-bold text-2xl uppercase tracking-[0.4em] text-white">NexOrgyn Labs</span>
                        </div>
                        <h1 className="font-heading font-bold text-6xl md:text-9xl text-white tracking-tighter leading-[0.8] uppercase">
                          <span className="sovereign-gradient-text">{activePlatform.name}.</span><br />
                          {activePlatform.headline}
                        </h1>
                        <p className="font-mono text-xs uppercase tracking-[0.5em] text-slate-500 font-bold">{activePlatform.subTagline}</p>
                     </div>

                     <div className="space-y-12 pt-6">
                        <p className="text-slate-400 text-2xl font-light leading-relaxed max-w-2xl border-l-2 border-white/5 pl-10 italic">
                          "{activePlatform.summary}"
                        </p>
                        <div className="flex flex-wrap gap-8">
                           <button onClick={() => window.location.href = `mailto:${CONTACT_EMAIL}?subject=Inquiry: ${activePlatform.name}`} className="px-14 py-8 bg-white text-black font-heading font-bold uppercase tracking-widest text-sm hover:bg-cyan-400 transition-all flex items-center gap-5 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                             Initialize Kernel <ArrowRight size={22} />
                           </button>
                           <button onClick={() => navigate('/resources')} className="px-14 py-8 glass border border-slate-800 text-white font-heading font-bold uppercase tracking-widest text-sm hover:bg-slate-900 transition-all">
                             Technical Briefing
                           </button>
                        </div>
                     </div>
                  </div>

                  <div className="relative aspect-square flex items-center justify-center scale-110">
                     <div className="relative w-full h-full isometric-parent">
                        <motion.div 
                           animate={{ 
                             rotateY: 360,
                             y: [0, -20, 0]
                           }}
                           transition={{ 
                             rotateY: { duration: 30, repeat: Infinity, ease: "linear" },
                             y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                           }}
                           className="absolute inset-0 flex items-center justify-center z-10"
                        >
                           <div className="w-80 h-80 glass border border-cyan-500/30 rounded-[3rem] rotate-45 flex items-center justify-center bg-cyan-500/5 shadow-[0_0_150px_rgba(6,182,212,0.2)] relative">
                              <div className="absolute inset-6 border border-white/10 rounded-[2rem] animate-pulse" />
                              <div className="text-white transform -rotate-45">
                                 {React.cloneElement(activePlatform.icon as React.ReactElement<any>, { size: 96, className: "text-cyan-400" })}
                              </div>
                           </div>
                        </motion.div>
                     </div>
                  </div>
               </div>

               <div className="absolute bottom-16 w-full max-w-7xl border-t border-white/5 pt-10 flex justify-between items-center opacity-40">
                  <div className="flex gap-12">
                     <div className="space-y-1">
                        <div className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">Protocol Shard</div>
                        <div className="text-[10px] font-mono text-white font-bold uppercase tracking-widest">Global-Prime</div>
                     </div>
                     <div className="space-y-1">
                        <div className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">Latency</div>
                        <div className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-widest">08ms // HSM-Ready</div>
                     </div>
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.5em] font-bold">Authorized Execution Only</div>
               </div>
            </section>

            <section className="relative py-40 px-12 lg:px-24 bg-slate-950 border-y border-white/5">
               <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-24">
                  <div className="space-y-16">
                     <div className="space-y-6">
                        <h4 className="font-mono text-xs font-bold uppercase tracking-[0.5em] text-orange-500">The Problem Vector</h4>
                        <p className="text-3xl text-white font-heading font-bold uppercase tracking-tighter leading-tight">
                           {activePlatform.problem}
                        </p>
                     </div>
                     <div className="h-px w-full bg-white/5" />
                     <div className="space-y-6">
                        <h4 className="font-mono text-xs font-bold uppercase tracking-[0.5em] text-cyan-500">The System Architecture</h4>
                        <div className="p-10 glass border border-slate-900 rounded-2xl space-y-4 shadow-2xl">
                           <Workflow size={32} className="text-cyan-400" />
                           <p className="text-sm font-mono text-slate-400 leading-relaxed uppercase tracking-[0.2em] font-bold">
                              {activePlatform.architecture}
                           </p>
                        </div>
                     </div>
                  </div>

                  <div className="lg:col-span-2 space-y-24">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {activePlatform.capabilities.map((cap, i) => (
                          <div key={i} className="p-12 glass border border-white/5 hover:border-cyan-500/20 transition-all rounded-[2rem] group bg-slate-950/50">
                             <div className="w-16 h-16 rounded-xl bg-slate-900 flex items-center justify-center text-cyan-400 border border-slate-800 group-hover:bg-cyan-500 group-hover:text-black transition-all mb-8 shadow-inner">
                                <CheckCircle2 size={28} />
                             </div>
                             <h4 className="text-2xl font-heading font-bold text-white uppercase tracking-tighter mb-4">{cap}</h4>
                             <p className="text-slate-500 font-light leading-relaxed italic">"Enabling deterministic outcomes through high-authority reasoning nodes."</p>
                          </div>
                        ))}
                     </div>
                  </div>
               </div>
            </section>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Platforms;
