
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Shield, Activity, Users, Globe, Settings, Bell, ChevronRight, Terminal, Lock, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const data = [
  { name: '00:00', val: 400 },
  { name: '04:00', val: 300 },
  { name: '08:00', val: 600 },
  { name: '12:00', val: 800 },
  { name: '16:00', val: 500 },
  { name: '20:00', val: 900 },
  { name: '23:59', val: 1100 },
];

const Portal: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 p-6 lg:p-10 pt-32">
      <div className="max-w-[1600px] mx-auto space-y-12">
        {/* TOP COMMAND BAR */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center glass p-8 border-slate-800 border rounded-2xl bg-slate-900/40">
           <div className="flex items-center gap-8">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                <Shield size={32} />
              </div>
              <div>
                <h1 className="font-heading font-bold text-2xl text-white uppercase tracking-tight">Sovereign Command Center</h1>
                <p className="text-xs font-mono text-slate-500 uppercase tracking-[0.3em]">Node Cluster: <span className="text-cyan-400 font-bold">ALPHA-SHARD-GLOBAL</span></p>
              </div>
           </div>
           
           <div className="flex items-center gap-6">
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-[10px] font-mono font-bold tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" /> SYSTEM NOMINAL
              </div>
              <div className="h-8 w-px bg-slate-800" />
              <button className="p-3 text-slate-400 hover:text-white transition-colors relative">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-slate-950" />
              </button>
              <button className="p-3 text-slate-400 hover:text-white transition-colors"><Settings size={20} /></button>
              <div className="flex items-center gap-4 pl-4 border-l border-slate-800">
                <div className="text-right">
                  <div className="text-[10px] font-bold text-white uppercase">Institutional Admin</div>
                  <div className="text-[8px] font-mono text-slate-500 uppercase">Tier-5 Access</div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white shadow-xl">NX</div>
              </div>
           </div>
        </div>

        {/* STATS OVERVIEW */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { label: 'Active Inferences', val: '1.4M+', change: '+12.4%', icon: <Activity className="text-cyan-400" /> },
             { label: 'Deterministic Score', val: '99.99%', change: 'stable', icon: <Lock className="text-purple-400" /> },
             { label: 'Governed Nodes', val: '142', change: '+2 nodes', icon: <Globe className="text-green-400" /> },
             { label: 'Latency (ms)', val: '08.2', change: '-4%', icon: <Terminal className="text-yellow-400" /> },
           ].map((s, i) => (
             <motion.div 
               key={s.label} 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className="glass p-8 border border-slate-800 rounded-2xl space-y-6 hover:border-cyan-500/30 transition-all group"
             >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em] font-bold">{s.label}</span>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 group-hover:text-white transition-colors">
                    {s.icon}
                  </div>
                </div>
                <div className="flex items-end justify-between">
                   <h3 className="text-4xl font-heading font-bold text-white tracking-tighter">{s.val}</h3>
                   <span className={`text-[10px] font-mono font-bold ${s.change.includes('+') ? 'text-green-500' : s.change.includes('-') ? 'text-cyan-500' : 'text-slate-500'}`}>
                     {s.change}
                   </span>
                </div>
             </motion.div>
           ))}
        </div>

        {/* RECENT AUDIT LOGS */}
        <div className="glass border border-slate-800 p-10 rounded-2xl space-y-10 bg-slate-950/50 flex flex-col">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-xl text-white uppercase tracking-widest">Security Ledger</h3>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Institutional Audit Chain</p>
                </div>
                <Lock size={20} className="text-slate-700" />
              </div>
              <div className="space-y-6 overflow-y-auto flex-1 pr-4 custom-scrollbar">
                 {[
                   { id: '1024', event: 'Jurisdictional Shard Sync', status: 'Verified', time: '12m ago' },
                   { id: '1023', event: 'HSM Key Rotation', status: 'Success', time: '42m ago' },
                   { id: '1022', event: 'ZKP Inference Protocol', status: 'Active', time: '1h ago' },
                   { id: '1021', event: 'Audit Trail Export', status: 'Success', time: '3h ago' },
                 ].map((log) => (
                   <div key={log.id} className="flex items-center justify-between py-4 border-b border-slate-900 last:border-0 group cursor-pointer hover:bg-white/[0.02] -mx-4 px-4 transition-all">
                      <div className="space-y-1">
                        <div className="text-[11px] text-white font-bold uppercase tracking-tight group-hover:text-cyan-400 transition-colors">EV-{log.id}: {log.event}</div>
                        <div className="text-[8px] text-slate-600 font-mono uppercase tracking-widest">{log.time} // NODE: ALPHA-1</div>
                      </div>
                      <span className={`text-[8px] font-bold font-mono px-2 py-0.5 rounded border ${
                        log.status === 'Success' || log.status === 'Verified' ? 'bg-green-500/10 text-green-500 border-green-500/20' : 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20'
                      } uppercase tracking-widest`}>
                        {log.status}
                      </span>
                   </div>
                 ))}
              </div>
              <button className="w-full py-5 bg-slate-900 border border-slate-800 text-slate-500 text-[10px] font-mono font-bold uppercase tracking-[0.3em] hover:text-white hover:bg-slate-800 transition-all flex items-center justify-center gap-3 mt-8">
                Request Full Chain <Download size={14} />
              </button>
           </div>
      </div>
    </div>
  );
};

export default Portal;
