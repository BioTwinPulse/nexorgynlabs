
import React, { useState, useEffect } from 'react';
import { Cpu, Atom, Terminal, Network, Zap, Microscope, History, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ROADMAP_DATA, RESEARCH_LABS } from '../constants';

const ResearchOffice: React.FC<{ activeTab?: string }> = ({ activeTab = 'labs' }) => {
  const [currentTab, setCurrentTab] = useState(activeTab);

  useEffect(() => {
    setCurrentTab(activeTab);
  }, [activeTab]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">
      <div className="flex border-b border-slate-800">
        {[
          { id: 'labs', label: 'Innovation Labs', icon: <Microscope size={16} /> },
          { id: 'roadmap', label: '2026-2030 Roadmap', icon: <History size={16} /> },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setCurrentTab(tab.id)}
            className={`px-8 py-6 text-[10px] font-mono font-bold uppercase tracking-[0.3em] flex items-center gap-3 transition-all relative ${
              currentTab === tab.id ? 'text-purple-400 bg-purple-500/5' : 'text-slate-500 hover:text-white'
            }`}
          >
            {tab.icon} {tab.label}
            {currentTab === tab.id && <motion.div layoutId="tab-research-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400" />}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {currentTab === 'labs' ? (
          <motion.div key="labs" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-32">
             <div className="flex flex-col lg:flex-row gap-20 items-center">
                <div className="w-full lg:w-1/2 space-y-10">
                   <div className="inline-flex items-center gap-2 px-4 py-2 glass border border-purple-500/30 rounded text-[10px] font-mono font-bold text-purple-400 uppercase tracking-widest">
                     <Microscope size={14} /> Office of Systems Architecture
                   </div>
                   <h1 className="font-heading font-bold text-6xl text-white uppercase tracking-tighter leading-none">The <span className="text-purple-400 italic">Research</span> Directive</h1>
                   <p className="text-xl text-slate-400 font-light leading-relaxed">
                     Pioneering symbolic-causal reasoning to replace stochastic variance. Codifying global institutional laws into executable kernels.
                   </p>
                </div>
                <div className="w-full lg:w-1/2 relative aspect-square glass border border-slate-900 rounded-3xl flex items-center justify-center overflow-hidden carbon-overlay">
                   <Atom className="text-purple-400 animate-pulse" size={120} />
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {RESEARCH_LABS.map((lab, i) => (
                  <div key={lab.title} className="p-10 glass border border-slate-800 text-center space-y-6 hover:border-purple-500/30 transition-all group">
                    <div className="text-purple-400 mx-auto group-hover:scale-110 transition-transform">{lab.icon}</div>
                    <h4 className="font-heading font-bold text-white uppercase tracking-tight text-xl">{lab.title}</h4>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">{lab.desc}</p>
                  </div>
                ))}
             </div>
          </motion.div>
        ) : (
          <motion.div key="roadmap" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-12">
             <div className="flex justify-between items-end">
                <h2 className="font-heading font-bold text-5xl text-white uppercase tracking-tight">Systemic <span className="text-purple-400">Evolution</span></h2>
                <span className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.5em]">Vision Horizon: 2030</span>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative pt-12">
                <div className="absolute top-[6.5rem] left-0 w-full h-[1px] bg-slate-800 hidden md:block" />
                {ROADMAP_DATA.map(phase => (
                  <div key={phase.year} className="relative z-10 p-10 glass border border-slate-800 space-y-6 bg-slate-950 group hover:border-purple-500/30 transition-all">
                     <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-purple-400 font-heading font-bold mb-4 shadow-[0_0_15px_rgba(157,0,255,0.2)] group-hover:bg-purple-500 group-hover:text-black transition-all">
                       {phase.year.slice(2)}
                     </div>
                     <div className="space-y-2">
                       <h3 className="text-white font-heading font-bold text-2xl tracking-tighter uppercase">{phase.year} <span className="text-purple-400 italic">Phase</span></h3>
                       <h4 className="text-purple-400 font-mono font-bold uppercase text-[10px] tracking-[0.3em]">{phase.focus}</h4>
                     </div>
                     <p className="text-sm text-slate-500 leading-relaxed font-light">{phase.desc}</p>
                     <div className="pt-4 flex items-center gap-2 text-[9px] font-mono text-slate-600 uppercase tracking-widest">
                       Protocol Intel <ChevronRight size={12} />
                     </div>
                  </div>
                ))}
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResearchOffice;
