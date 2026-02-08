
import React from 'react';
import { Shield, Scale, Users, CheckCircle2, FileText, Lock, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';

const Governance: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">
      {/* HEADER */}
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 glass border border-cyan-500/30 rounded text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest mb-4">
          <Scale size={14} /> Institutional Governance Protocol v1.0
        </div>
        <h1 className="font-heading font-bold text-6xl md:text-8xl text-white uppercase tracking-tighter leading-none">
          Sovereign <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Oversight</span>
        </h1>
        <p className="text-xl text-slate-400 font-light leading-relaxed">
          NexOrgyn Labs is built on a multi-layer governance framework designed to ensure 
          total accountability, mathematical transparency, and global regulatory alignment.
        </p>
      </div>

      {/* COMMITTEE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: 'Board of Oversight',
            desc: 'System-level strategic governance ensuring mission alignment and institutional stability.',
            icon: <Landmark size={32} className="text-cyan-400" />,
            list: ['Fiduciary Responsibility', 'Strategic Audit', 'Global Risk Assessment']
          },
          {
            title: 'AI Governance Council',
            desc: 'Continuous monitoring of deterministic kernels to prevent semantic drift and ensure model safety.',
            icon: <Shield size={32} className="text-purple-400" />,
            list: ['Model Integrity Audits', 'Hallucination Prevention', 'Ethical Guardrail Tuning']
          },
          {
            title: 'Compliance Supervisory Unit',
            desc: 'Direct oversight of jurisdictional sharding and international regulatory compliance (SOC2/MDR/GDPR).',
            icon: <CheckCircle2 size={32} className="text-green-400" />,
            list: ['Jurisdictional Mapping', 'Privacy Shield Enforcement', 'Regulatory Liaison']
          },
          {
            title: 'Risk Management Office',
            desc: 'Continuous threat assessment and post-quantum vulnerability analysis for institutional assets.',
            icon: <Lock size={32} className="text-red-400" />,
            list: ['Cyber-Physical Defense', 'System Uptime SLAs', 'Encrypted Asset Recovery']
          }
        ].map((c, i) => (
          <motion.div 
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-10 glass border border-slate-800 hover:border-cyan-500/30 transition-all group"
          >
            <div className="mb-8">{c.icon}</div>
            <h3 className="font-heading font-bold text-3xl text-white uppercase tracking-tight mb-4 group-hover:text-cyan-400 transition-colors">{c.title}</h3>
            <p className="text-slate-500 mb-8 leading-relaxed font-light">{c.desc}</p>
            <ul className="space-y-3">
               {c.list.map(item => (
                 <li key={item} className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50" /> {item}
                 </li>
               ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* GOVERNANCE DOCTRINE CTA */}
      <div className="glass border border-slate-900 p-16 rounded-3xl text-center space-y-10 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 pointer-events-none" />
         <div className="relative z-10 space-y-6">
            <h2 className="font-heading font-bold text-4xl text-white uppercase tracking-tighter">The Governance Charter</h2>
            <p className="text-slate-400 max-w-2xl mx-auto italic">
              "NexOrgyn Labs operates under the principle that intelligence must be governed by deterministic laws, not probabilistic chance."
            </p>
            <div className="pt-8">
               <button className="px-12 py-5 bg-white text-black font-heading font-bold uppercase tracking-widest hover:bg-cyan-400 transition-all flex items-center gap-4 mx-auto">
                 Download Governance Manifesto <FileText size={20} />
               </button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Governance;
