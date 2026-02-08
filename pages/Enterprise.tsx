
import React, { useState, useEffect } from 'react';
import { 
  ClipboardCheck, Database, UserPlus, ShieldCheck, Download, 
  ArrowRight, Landmark, Building2, Hospital, Briefcase, FileText, Search, Info, Mail
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTACT_EMAIL } from '../constants';

const Enterprise: React.FC<{ activeTab?: string }> = ({ activeTab = 'deployment' }) => {
  const [currentTab, setCurrentTab] = useState(activeTab);

  useEffect(() => {
    setCurrentTab(activeTab);
  }, [activeTab]);

  const tabs = [
    { id: 'deployment', label: 'Playbooks', icon: <ClipboardCheck size={16} /> },
    { id: 'resources', label: 'Vault', icon: <Database size={16} /> },
    { id: 'procurement', label: 'Procurement', icon: <UserPlus size={16} /> },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">
      <div className="flex flex-wrap border-b border-slate-800 pt-16">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setCurrentTab(tab.id)}
            className={`px-8 py-6 text-[10px] font-mono font-bold uppercase tracking-[0.3em] flex items-center gap-3 transition-all relative ${
              currentTab === tab.id ? 'text-cyan-400 bg-cyan-500/5' : 'text-slate-500 hover:text-white'
            }`}
          >
            {tab.icon} {tab.label}
            {currentTab === tab.id && <motion.div layoutId="tab-ent-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400" />}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentTab}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4 }}
          className="min-h-[600px]"
        >
          {currentTab === 'deployment' && (
            <div className="space-y-16">
               <div className="max-w-3xl space-y-6">
                  <h2 className="font-heading font-bold text-5xl text-white uppercase tracking-tight">Deployment <span className="text-cyan-400">Playbooks</span></h2>
                  <p className="text-slate-400 text-lg font-light leading-relaxed">
                    Formal architecture blueprints for regulated industry integration. Each playbook includes security diagrams, compliance mapping, and SLA templates.
                  </p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { title: 'Banking & FinServ', icon: <Landmark />, code: 'DOC-BFSI', spec: 'Tier-1 High-Frequency Guardrails' },
                    { title: 'Clinical MedTech', icon: <Hospital />, code: 'DOC-MED', spec: 'Sovereign Mesh Specs' },
                    { title: 'Gov Infrastructure', icon: <Building2 />, code: 'DOC-GOV', spec: 'Federal Defense-Grade Sharding' },
                    { title: 'Corporate Identity', icon: <Briefcase />, code: 'DOC-CORP', spec: 'Enterprise Reputation Governance' },
                  ].map(playbook => (
                    <div key={playbook.title} className="p-12 glass border border-slate-800 hover:border-cyan-500/40 transition-all group flex justify-between items-center relative overflow-hidden bg-slate-950/50">
                       <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                         {playbook.icon}
                       </div>
                       <div className="flex items-center gap-10">
                          <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-500 shadow-inner group-hover:scale-110 transition-transform">
                             {playbook.icon}
                          </div>
                          <div className="space-y-1">
                             <div className="text-[9px] font-mono text-cyan-400/60 uppercase tracking-[0.4em] font-bold">{playbook.code}</div>
                             <h4 className="text-white font-heading font-bold text-2xl uppercase tracking-tighter">{playbook.title}</h4>
                             <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{playbook.spec}</p>
                          </div>
                       </div>
                       <button className="p-5 rounded-full border border-slate-800 text-slate-500 hover:text-cyan-400 hover:border-cyan-400 transition-all relative z-10">
                          <Download size={24} />
                       </button>
                    </div>
                  ))}
               </div>
            </div>
          )}

          {currentTab === 'resources' && (
            <div className="space-y-16 py-12">
               <div className="max-w-3xl space-y-6">
                  <h2 className="font-heading font-bold text-5xl text-white uppercase tracking-tight">The Institutional <span className="text-purple-400">Vault</span></h2>
                  <p className="text-slate-400 text-lg font-light leading-relaxed">
                    A centralized repository of whitepapers, technical specifications, and security audits. 
                    Authorized for high-level technical stakeholders and procurement officers.
                  </p>
               </div>
               <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {[
                    { label: 'Technical Specs', file: 'NEX-TECH-SPEC.PDF', size: '24.2MB' },
                    { label: 'Security Audit', file: 'NEX-SOC2-REPORT.PDF', size: '12.8MB' },
                    { label: 'Platform SDK', file: 'NEX-SDK-ROOT.ZIP', size: '156.0MB' },
                  ].map(res => (
                    <div key={res.label} className="p-10 glass border border-white/5 rounded-2xl space-y-8 group hover:border-purple-400/30 transition-all">
                       <div className="w-12 h-12 rounded bg-slate-900 flex items-center justify-center text-purple-400">
                         <Database size={24} />
                       </div>
                       <div className="space-y-2">
                         <h4 className="text-white font-heading font-bold text-xl uppercase tracking-tighter">{res.label}</h4>
                         <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{res.file}</p>
                       </div>
                       <div className="flex justify-between items-center pt-4 border-t border-white/5">
                         <span className="text-[9px] font-mono text-slate-600 font-bold">{res.size}</span>
                         <button className="text-[9px] font-mono text-purple-400 uppercase tracking-widest font-bold hover:text-white transition-colors">Download</button>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          )}

          {currentTab === 'procurement' && (
            <div className="max-w-4xl mx-auto space-y-16 py-12">
               <div className="text-center space-y-6">
                  <h2 className="font-heading font-bold text-5xl text-white uppercase tracking-tight">Institutional <span className="text-cyan-400">Onboarding</span></h2>
                  <p className="text-slate-400 text-lg font-light leading-relaxed max-w-2xl mx-auto">
                    Secure channel for enterprise procurement teams to initiate vendor vetting and architectural review.
                  </p>
                  <div className="pt-4">
                    <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-3 px-10 py-5 glass border border-cyan-500/20 text-cyan-400 font-mono text-xs hover:bg-cyan-500 hover:text-black transition-all shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                      <Mail size={16} /> DIRECT CHANNEL: {CONTACT_EMAIL}
                    </a>
                  </div>
               </div>
               <div className="glass border border-slate-900 p-16 rounded-3xl space-y-10 bg-slate-950/50">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="space-y-2">
                        <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Entity Name</label>
                        <input type="text" className="w-full bg-slate-950 border border-slate-800 p-5 text-white focus:border-cyan-500 outline-none font-mono" placeholder="Fortune 500 Inc." />
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Industry Sector</label>
                        <select className="w-full bg-slate-950 border border-slate-800 p-5 text-white focus:border-cyan-500 outline-none font-mono appearance-none">
                           <option>Banking / BFSI</option>
                           <option>Healthcare / Clinical</option>
                           <option>Government / Defense</option>
                           <option>Global Retail / Brand</option>
                        </select>
                     </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Inquiry Brief</label>
                     <textarea className="w-full bg-slate-950 border border-slate-800 p-5 text-white focus:border-cyan-500 outline-none font-mono h-40" placeholder="Please describe your systemic requirements..."></textarea>
                  </div>
                  <button className="w-full py-8 bg-cyan-500 text-black font-heading font-bold uppercase tracking-widest text-xl hover:bg-white transition-all transform hover:scale-[1.01] active:scale-95 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                    Initialize Vetting Protocol
                  </button>
                  <div className="text-center">
                    <p className="text-[9px] font-mono text-slate-700 uppercase tracking-[0.2em]">All communications are sharded and encrypted via Post-Quantum GPG.</p>
                  </div>
               </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Enterprise;
