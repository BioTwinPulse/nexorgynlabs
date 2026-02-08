
import React from 'react';
import { Shield, Lock, FileText, CheckCircle, Database, AlertCircle, Key, EyeOff, Activity } from 'lucide-react';

const SecurityHub: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 glass border border-red-500/30 rounded font-mono text-xs font-bold text-red-500 uppercase tracking-widest mb-4">
          <Lock size={14} /> Security Status: Optimal
        </div>
        <h1 className="font-heading font-bold text-5xl md:text-7xl text-white uppercase tracking-tighter">Digital Vault</h1>
        <p className="text-slate-400 text-lg">
          NexOrgyn’s security posture is built on zero-trust principles and deterministic defense. 
          Every bit of data is protected by sovereign encryption and institutional governance.
        </p>
      </div>

      {/* CORE STATS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Encryption', value: 'AES-256-GCM', icon: <Key size={20} /> },
          { label: 'Governance', value: '100% Deterministic', icon: <Shield size={20} /> },
          { label: 'Monitoring', value: '24/7/365 Real-time', icon: <Activity size={20} /> },
          { label: 'Breach History', value: 'Zero Incidents', icon: <AlertCircle size={20} /> },
        ].map((stat) => (
          <div key={stat.label} className="p-6 glass border border-slate-800 text-center">
            <div className="flex justify-center mb-4 text-cyan-400">{stat.icon}</div>
            <div className="text-[10px] text-slate-500 font-mono uppercase tracking-[0.2em] mb-1">{stat.label}</div>
            <div className="text-white font-heading font-bold text-lg">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* COMPLIANCE COLUMN */}
        <div className="lg:col-span-2 space-y-8">
          <div className="glass border border-slate-800 p-10 rounded-xl space-y-8">
            <div className="flex items-center justify-between border-b border-slate-800 pb-6">
              <h2 className="font-heading font-bold text-2xl text-white uppercase tracking-widest flex items-center gap-3">
                <FileText className="text-cyan-400" /> Compliance Frameworks
              </h2>
              <button className="text-xs font-mono text-cyan-400 hover:text-white transition-colors">Download Full Audit Report</button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { name: 'GDPR / DPA', desc: 'Sovereign data storage with jurisdictional sharding.' },
                { name: 'EU AI ACT', desc: 'Full transparency and risk management for high-impact AI.' },
                { name: 'SOC2 TYPE II', desc: 'Independently audited controls for security, availability, and privacy.' },
                { name: 'ISO/IEC 27001', desc: 'World-class information security management systems.' }
              ].map((c) => (
                <div key={c.name} className="flex gap-4 p-6 rounded bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors">
                  <CheckCircle className="text-green-500 shrink-0 mt-1" size={18} />
                  <div className="space-y-2">
                    <h4 className="text-white font-bold text-sm font-heading">{c.name}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="glass border border-slate-800 p-8 space-y-6">
                <h3 className="font-heading font-bold text-lg text-white uppercase tracking-widest flex items-center gap-2">
                  <Database size={20} className="text-purple-400" /> Data Privacy
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Data never leaves your jurisdiction. We employ local sovereign clusters to ensure that inference and training stay within regulated borders.
                </p>
                <a href="#" className="text-xs font-mono text-purple-400 uppercase tracking-widest block">Read Privacy Charter →</a>
             </div>
             <div className="glass border border-slate-800 p-8 space-y-6">
                <h3 className="font-heading font-bold text-lg text-white uppercase tracking-widest flex items-center gap-2">
                  <EyeOff size={20} className="text-cyan-400" /> ZKP Inference
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Proprietary Zero-Knowledge Proof architecture allows institutional intelligence verification without exposing sensitive training weights.
                </p>
                <a href="#" className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">View ZKP Specs →</a>
             </div>
          </div>
        </div>

        {/* ACCESS HUB COLUMN */}
        <div className="glass border border-slate-800 p-8 rounded-xl h-fit sticky top-32">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="text-white" size={24} />
            </div>
            <h3 className="font-heading font-bold text-xl text-white">Institutional Access</h3>
            <p className="text-xs text-slate-500 mt-2 font-mono uppercase tracking-widest">Client Portal Login</p>
          </div>
          
          <div className="space-y-4">
             <div className="space-y-1">
               <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Sovereign Key ID</label>
               <input type="text" className="w-full bg-slate-900 border border-slate-800 p-3 text-white focus:border-cyan-500 outline-none font-mono text-sm" placeholder="SK-XXXX-XXXX" />
             </div>
             <div className="space-y-1">
               <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Passphrase</label>
               <input type="password" className="w-full bg-slate-900 border border-slate-800 p-3 text-white focus:border-cyan-500 outline-none font-mono text-sm" placeholder="••••••••" />
             </div>
             <button className="w-full py-4 bg-cyan-500 text-black font-heading font-bold uppercase tracking-widest text-xs hover:bg-white transition-all mt-4">
               Decrypt & Access
             </button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-800 text-center">
            <p className="text-[10px] text-slate-500 leading-relaxed">
              Forgotten keys require on-site manual reset via verified physical biometric verification.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityHub;