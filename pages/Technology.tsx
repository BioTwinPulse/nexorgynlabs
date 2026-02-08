
import React from 'react';
import { Cpu, Box, Link2, Monitor, Shield, Zap, RefreshCw, BarChart3 } from 'lucide-react';

const Technology: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">
      {/* HERO */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded text-[10px] font-mono font-bold text-purple-400 uppercase tracking-widest">
            Core Engine: NEX-KERNEL v2.4
          </div>
          <h1 className="font-heading font-bold text-6xl text-white uppercase tracking-tighter leading-none">
            Deterministic <br />
            <span className="text-purple-400 italic">Operating System</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            NexOrgyn Labs has replaced probabilistic "black-box" models with a symbolic-causal reasoning engine. 
            The result is an AI that can be mathematically proven and audited for every single decision it makes.
          </p>
        </div>
        <div className="relative aspect-square glass border border-slate-800 rounded-3xl overflow-hidden group">
           {/* Animated Tech Visual */}
           <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent" />
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 border-4 border-dashed border-slate-800 rounded-full animate-[spin_30s_linear_infinite]" />
              <div className="absolute w-48 h-48 border-2 border-purple-500/30 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
              <div className="absolute w-32 h-32 glass border border-purple-500 rounded-2xl flex items-center justify-center">
                <Cpu size={48} className="text-purple-400" />
              </div>
           </div>
        </div>
      </div>

      {/* THE STACK */}
      <div className="space-y-16">
        <div className="text-center space-y-4">
          <h2 className="font-heading font-bold text-4xl text-white uppercase tracking-widest">The Multi-Layer Stack</h2>
          <p className="text-slate-400">Institutional intelligence requires a convergence of Web3 provenance and AI determinism.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: 'Sovereign Sharding', 
              desc: 'Data and model weights are sharded across jurisdictional boundaries, ensuring strict compliance with local laws.', 
              icon: <Box /> 
            },
            { 
              title: 'Hexagonal Modules', 
              desc: 'Modular architecture allows for plug-and-play institutional tools without re-architecting the core kernel.', 
              icon: <Zap /> 
            },
            { 
              title: 'Causal Inference', 
              desc: 'Moving beyond pattern matching to causal understanding. No hallucinations, only logic-based reasoning.', 
              icon: <Link2 /> 
            },
            { 
              title: 'Bayesian Governance', 
              desc: 'Real-time probability updates with strict safety guardrails that prevent model drift and bias.', 
              icon: <RefreshCw /> 
            },
            { 
              title: 'Web3 Identity', 
              desc: 'Every actor and data point is cryptographically signed and stored on a permissioned institutional ledger.', 
              icon: <Shield /> 
            },
            { 
              title: 'Observability Matrix', 
              desc: 'Deep telemetry across the entire reasoning chain, from data ingestion to final execution.', 
              icon: <BarChart3 /> 
            }
          ].map((item, i) => (
            <div key={i} className="p-10 glass border border-slate-800 hover:border-purple-500/50 transition-all space-y-6">
              <div className="text-purple-400">{item.icon}</div>
              <h4 className="font-heading font-bold text-xl text-white uppercase tracking-widest">{item.title}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technology;
