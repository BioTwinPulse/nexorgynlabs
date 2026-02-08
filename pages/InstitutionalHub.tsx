
import React, { useState, useEffect } from 'react';
import { 
  FileText, BarChart3, ShieldCheck, Download, PenTool, HeartPulse, 
  Building2, Globe2, Scale, Gavel, UserCheck, ShieldAlert, Target, Compass, BookOpen, Palette, Type, Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MISSION_VISION } from '../constants';
import Logo from '../components/Logo';

const InstitutionalHub: React.FC<{ activeTab?: string }> = ({ activeTab = 'manifesto' }) => {
  const [currentTab, setCurrentTab] = useState(activeTab);

  useEffect(() => {
    setCurrentTab(activeTab);
  }, [activeTab]);

  const tabs = [
    { id: 'manifesto', label: 'Doctrine', icon: <PenTool size={14} /> },
    { id: 'transparency', label: 'Transparency', icon: <BarChart3 size={14} /> },
    { id: 'esg', label: 'ESG Hub', icon: <HeartPulse size={14} /> },
    { id: 'corporate', label: 'Corporate', icon: <Building2 size={14} /> },
    { id: 'identity', label: 'Identity VIS', icon: <Palette size={14} /> },
    { id: 'policy', label: 'Policies', icon: <Globe2 size={14} /> },
  ];

  return (
    <div className="max-w-[1800px] mx-auto px-10 py-32 space-y-24">
      {/* HEADER UNIT */}
      <div className="space-y-6 max-w-4xl">
        <div className="inline-flex items-center gap-3 text-cyan-400 font-mono text-[10px] uppercase tracking-[0.4em] font-bold">
          <Layers size={14} /> Institutional Operating System // Root
        </div>
        <h1 className="text-7xl md:text-8xl font-heading font-bold text-white uppercase tracking-tighter leading-none">
          The Global <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Command</span> Hub
        </h1>
        <p className="text-xl text-slate-500 font-light leading-relaxed">
          Official repository for NexOrgyn Labs strategic, operational, and visual protocols. 
          Accessible for institutional auditors and system architects.
        </p>
      </div>

      <div className="flex flex-wrap border-b border-white/5">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setCurrentTab(tab.id)}
            className={`px-10 py-8 text-[10px] font-mono font-bold uppercase tracking-[0.3em] flex items-center gap-3 transition-all relative ${
              currentTab === tab.id ? 'text-cyan-400 bg-cyan-500/[0.03]' : 'text-slate-600 hover:text-white'
            }`}
          >
            {tab.icon} {tab.label}
            {currentTab === tab.id && <motion.div layoutId="tab-indicator" className="absolute bottom-0 left-0 right-0 h-1 bg-cyan-400" />}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="min-h-[800px]"
        >
          {currentTab === 'manifesto' && (
            <div className="space-y-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
                 <div className="space-y-16">
                    <h2 className="font-heading font-bold text-5xl text-white uppercase tracking-tight leading-tight">The Sovereign <br /> <span className="text-cyan-400 italic">Operating Doctrine</span></h2>
                    <div className="space-y-8 text-slate-400 text-xl font-light leading-relaxed">
                      <p>NexOrgyn Labs engineers at the intersection of absolute sovereignty and civilization-scale intelligence. We operate on a first-principles framework: intelligence must be deterministic, governed, and sharded.</p>
                      <p>The "Citadel" architecture ensures that institutional identity and strategic data remains localized, air-gapped from stochastic drift, and mathematically provable.</p>
                    </div>
                    <div className="flex gap-6">
                      <button className="px-12 py-6 bg-white text-black font-heading font-bold uppercase tracking-widest hover:bg-cyan-400 transition-all flex items-center gap-4">
                        <Download size={20} /> Download Manifesto PDF
                      </button>
                    </div>
                 </div>
                 <div className="p-16 glass border border-white/5 rounded-3xl space-y-12 bg-slate-950/40 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none">
                      <Scale size={300} />
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-white uppercase tracking-widest border-b border-white/5 pb-8 flex items-center gap-4">
                      <Gavel className="text-cyan-400" size={24} /> Fiduciary Integrity
                    </h3>
                    <div className="space-y-10">
                       {[
                         { t: 'Mathematical Certitude', d: 'Intelligence kernels are synthesized from symbolic logic, not probabilistic chance.' },
                         { t: 'Tactile Sovereignty', d: 'Hardware-backed isolation of sensitive strategic DNA and model weights.' },
                         { t: 'Jurisdictional Sharding', d: 'Automated data partitioning that respects local legal protocols across 14+ zones.' }
                       ].map(p => (
                         <div key={p.t} className="space-y-3">
                            <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-[0.3em]">{p.t}</h4>
                            <p className="text-base text-slate-400 leading-relaxed font-light">{p.d}</p>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>

              {/* MISSION & VISION */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="p-16 glass border border-cyan-500/20 rounded-[40px] space-y-10 bg-cyan-500/[0.01]">
                  <div className="flex items-center gap-4 text-cyan-400">
                    <Target size={32} />
                    <h4 className="font-heading font-bold uppercase tracking-[0.3em] text-2xl">{MISSION_VISION.vision.title}</h4>
                  </div>
                  <p className="text-slate-300 text-2xl font-light leading-relaxed italic border-l-2 border-cyan-500/20 pl-10">
                    "{MISSION_VISION.vision.statement}"
                  </p>
                  <div className="text-[10px] font-mono text-cyan-600 uppercase tracking-[0.5em] font-bold">{MISSION_VISION.vision.tagline}</div>
                </div>
                
                <div className="p-16 glass border border-purple-500/20 rounded-[40px] space-y-10 bg-purple-500/[0.01]">
                  <div className="flex items-center gap-4 text-purple-400">
                    <Compass size={32} />
                    <h4 className="font-heading font-bold uppercase tracking-[0.3em] text-2xl">{MISSION_VISION.mission.title}</h4>
                  </div>
                  <p className="text-slate-300 text-2xl font-light leading-relaxed italic border-l-2 border-purple-500/20 pl-10">
                    "{MISSION_VISION.mission.statement}"
                  </p>
                  <div className="text-[10px] font-mono text-purple-600 uppercase tracking-[0.5em] font-bold">{MISSION_VISION.mission.tagline}</div>
                </div>
              </div>
            </div>
          )}

          {currentTab === 'identity' && (
            <div className="space-y-24">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <div className="space-y-10">
                     <h2 className="text-5xl font-heading font-bold text-white uppercase tracking-tight">Visual <br /> <span className="text-cyan-400 italic">Identity Matrix</span></h2>
                     <p className="text-slate-400 text-xl font-light leading-relaxed">
                       Our brand is an institutional signal of power, precision, and calm authority. 
                       The following specifications govern the global NexOrgyn aesthetic.
                     </p>
                     <div className="flex gap-4">
                        <button className="px-10 py-5 bg-white text-black font-heading font-bold uppercase text-xs tracking-widest flex items-center gap-3">
                          <Download size={18} /> Download VIS Kit (SVG/AI)
                        </button>
                     </div>
                  </div>
                  <div className="p-20 glass border border-white/5 rounded-3xl bg-slate-900/20 flex items-center justify-center relative overflow-hidden group">
                     <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                     <Logo size={200} hideText />
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="space-y-8 p-10 glass border border-white/5 rounded-2xl">
                     <div className="flex items-center gap-4 text-cyan-400">
                        <Palette size={24} />
                        <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-white">Chromatics</h4>
                     </div>
                     <div className="space-y-4">
                        {[
                          { name: 'Quantum Blue', hex: '#00D1FF', class: 'bg-[#00D1FF]' },
                          { name: 'Plasma Purple', hex: '#9D00FF', class: 'bg-[#9D00FF]' },
                          { name: 'Signal Green', hex: '#00FF94', class: 'bg-[#00FF94]' },
                          { name: 'Infra Red', hex: '#FF3B3B', class: 'bg-[#FF3B3B]' }
                        ].map(c => (
                          <div key={c.name} className="flex items-center justify-between p-3 border border-white/5 rounded">
                             <div className="flex items-center gap-3">
                                <div className={`w-6 h-6 rounded ${c.class}`} />
                                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">{c.name}</span>
                             </div>
                             <span className="text-[10px] font-mono text-slate-600">{c.hex}</span>
                          </div>
                        ))}
                     </div>
                  </div>

                  <div className="space-y-8 p-10 glass border border-white/5 rounded-2xl">
                     <div className="flex items-center gap-4 text-purple-400">
                        <Type size={24} />
                        <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-white">Typography</h4>
                     </div>
                     <div className="space-y-8">
                        <div>
                           <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest mb-2">Primary / Headings</p>
                           <p className="text-3xl font-heading font-bold text-white uppercase tracking-tighter">Space Grotesk</p>
                        </div>
                        <div>
                           <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest mb-2">Body / Narrative</p>
                           <p className="text-2xl font-light text-slate-400 leading-none">Inter Regular</p>
                        </div>
                        <div>
                           <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest mb-2">System / Readout</p>
                           <p className="text-xl font-mono font-bold text-cyan-400 uppercase tracking-[0.2em]">JetBrains Mono</p>
                        </div>
                     </div>
                  </div>

                  <div className="space-y-8 p-10 glass border border-white/5 rounded-2xl">
                     <div className="flex items-center gap-4 text-green-400">
                        <Layers size={24} />
                        <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-white">Aesthetic Logic</h4>
                     </div>
                     <div className="space-y-6 text-slate-500 text-xs font-mono uppercase tracking-widest leading-relaxed">
                        <p>• Soft Glassmorphism (8-12px Blur)</p>
                        <p>• Deep Carbon Fiber Textures</p>
                        <p>• Volumetric Neon Diffusions</p>
                        <p>• Strict Orthogonal Grids</p>
                        <p>• High-Fidelity Technical Aura</p>
                     </div>
                  </div>
               </div>
            </div>
          )}

          {currentTab === 'policy' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
               <div className="lg:col-span-2 space-y-20">
                  <div className="space-y-8">
                    <h2 className="text-5xl font-heading font-bold text-white uppercase tracking-tight">Institutional <br /> <span className="text-purple-400 italic">Policy Protocol</span></h2>
                    <p className="text-slate-400 text-xl font-light leading-relaxed max-w-2xl">
                      Official policy frameworks for global sovereign operations. All documents are finalized and compliant with international standards.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                     {[
                       { t: 'Responsible AI Framework', id: 'DOC-POL-AI-01', desc: 'Codified deterministic reasoning and bias-mitigation protocols.' },
                       { t: 'Sovereign Privacy Charter', id: 'DOC-POL-DPA-04', desc: 'Jurisdictional sharding and automated SCC/DPA alignment logic.' },
                       { t: 'Cyber-Physical Security', id: 'DOC-POL-SEC-09', desc: 'Requirements for HSM hardware and defense-grade air-gapped sharding.' },
                       { t: 'Model Integrity Protocol', id: 'DOC-POL-GOV-12', desc: 'Cryptographic versioning and audit-trail governance for model weights.' }
                     ].map(policy => (
                        <div key={policy.id} className="p-10 glass border border-white/5 rounded-2xl flex justify-between items-center group hover:bg-white/5 transition-all cursor-pointer">
                           <div className="space-y-3">
                              <div className="text-purple-400 font-mono text-[10px] uppercase tracking-widest font-bold">{policy.id}</div>
                              <h4 className="text-white font-heading font-bold text-2xl uppercase tracking-tighter">{policy.t}</h4>
                              <p className="text-sm text-slate-500 leading-relaxed font-light max-w-lg">{policy.desc}</p>
                           </div>
                           <button className="p-6 rounded-full border border-white/10 text-slate-600 group-hover:text-purple-400 group-hover:border-purple-400 transition-all">
                              <BookOpen size={24} />
                           </button>
                        </div>
                     ))}
                  </div>
               </div>
               
               <div className="space-y-10">
                  <div className="p-12 glass border border-white/5 rounded-[40px] bg-slate-950/60 flex flex-col items-center text-center space-y-10 sticky top-32">
                    <Globe2 size={100} className="text-purple-500 opacity-80" />
                    <div className="space-y-4">
                      <h3 className="text-white font-heading font-bold text-3xl uppercase tracking-tighter leading-tight">Regulatory <br /> Liaison Hub</h3>
                      <p className="text-[11px] text-slate-500 leading-relaxed font-mono uppercase tracking-widest italic px-6">
                        "Active engagement with the EU AI Office, NIST, and ME-Regulatory clusters."
                      </p>
                    </div>
                    <button className="w-full py-6 bg-purple-600 text-white font-heading font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(157,0,255,0.2)]">
                      Open Policy Channel
                    </button>
                    <div className="pt-6 border-t border-white/5 w-full">
                       <span className="text-[9px] font-mono text-slate-700 uppercase tracking-widest">Authorized Vetting Required</span>
                    </div>
                  </div>
               </div>
            </div>
          )}
          
          {/* Other tabs follow the same high-fidelity pattern... */}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default InstitutionalHub;
