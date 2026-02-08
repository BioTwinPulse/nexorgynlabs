
import React, { useState, useEffect } from 'react';
import { Globe, Server, Activity, ShieldAlert, Cpu, Database, MapPin, Search, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Operations: React.FC<{ activeTab?: 'map' | 'status' }> = ({ activeTab = 'map' }) => {
  const [currentView, setCurrentView] = useState(activeTab);

  useEffect(() => {
    setCurrentView(activeTab);
  }, [activeTab]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">
      <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 glass border border-cyan-500/20 rounded text-[10px] font-mono text-cyan-500 uppercase tracking-widest font-bold">
            <Globe size={14} /> Global Command Center
          </div>
          <h1 className="font-heading font-bold text-6xl text-white uppercase tracking-tighter">Sovereign <span className="text-slate-500 italic">Operations</span></h1>
          <p className="text-slate-400 max-w-2xl text-lg font-light leading-relaxed">
            Real-time visualization of NexOrgyn global sharding infrastructure. Physically isolated cores governing institutional intelligence across 5 continents.
          </p>
        </div>
        
        <div className="flex glass border border-slate-800 p-1 rounded-sm overflow-hidden">
           <button 
             onClick={() => setCurrentView('map')}
             className={`px-8 py-4 text-[10px] font-mono font-bold uppercase tracking-widest transition-all ${currentView === 'map' ? 'bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.3)]' : 'text-slate-500 hover:text-white'}`}
           >
             Infrastructure Map
           </button>
           <button 
             onClick={() => setCurrentView('status')}
             className={`px-8 py-4 text-[10px] font-mono font-bold uppercase tracking-widest transition-all ${currentView === 'status' ? 'bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.3)]' : 'text-slate-500 hover:text-white'}`}
           >
             System Telemetry
           </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {currentView === 'map' ? (
          <motion.div 
            key="map"
            initial={{ opacity: 0, scale: 0.98 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[21/9] glass border border-slate-800 rounded-3xl overflow-hidden carbon-overlay group shadow-2xl"
          >
             {/* MAP GRID */}
             <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
             
             {/* NODE POINTS */}
             {[
               { name: 'EU-SHARD (FRANKFURT)', top: '30%', left: '48%', status: 'NOMINAL', latency: '12ms' },
               { name: 'US-CITADEL (VIRGINIA)', top: '35%', left: '20%', status: 'NOMINAL', latency: '08ms' },
               { name: 'IND-CORE (MUMBAI)', top: '55%', left: '72%', status: 'ACTIVE', latency: '04ms', highlight: true },
               { name: 'APAC-GATE (SINGAPORE)', top: '65%', left: '82%', status: 'NOMINAL', latency: '21ms' },
               { name: 'ME-CITADEL (DUBAI)', top: '48%', left: '60%', status: 'NOMINAL', latency: '18ms' },
               { name: 'LATAM-NODE (SÃO PAULO)', top: '75%', left: '35%', status: 'NOMINAL', latency: '42ms' },
             ].map(node => (
               <div key={node.name} className="absolute group cursor-help transition-all" style={{ top: node.top, left: node.left }}>
                  <div className={`w-4 h-4 rounded-full ${node.highlight ? 'bg-orange-500 shadow-[0_0_20px_#f97316]' : 'bg-cyan-500 shadow-[0_0_15px_#06b6d4]'} animate-pulse`} />
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap z-50 transform translate-y-4 group-hover:translate-y-0">
                     <div className="glass border border-slate-800 p-5 rounded-xl text-center space-y-2 bg-slate-950/95 shadow-2xl">
                        <div className="text-[10px] font-mono font-bold text-white uppercase tracking-[0.2em]">{node.name}</div>
                        <div className="flex justify-between items-center gap-6">
                           <span className="text-[8px] font-mono text-green-400 uppercase tracking-widest font-bold">STATUS: {node.status}</span>
                           <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">LATENCY: {node.latency}</span>
                        </div>
                        <div className="pt-2 border-t border-slate-900 flex justify-between gap-4">
                           <span className="text-[7px] font-mono text-slate-600 uppercase">Shards: 24</span>
                           <span className="text-[7px] font-mono text-slate-600 uppercase">HSM v4.1</span>
                        </div>
                     </div>
                  </div>
               </div>
             ))}

             {/* MAP OVERLAY TEXT */}
             <div className="absolute bottom-10 left-10 space-y-4 max-w-sm glass border border-slate-800 p-8 rounded-2xl bg-slate-950/50">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-[0.5em] font-bold">Sovereignty Coverage</div>
                <div className="space-y-4">
                   <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]" />
                      <span className="text-[10px] font-mono text-white uppercase tracking-[0.2em]">Institutional Shards Active</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316]" />
                      <span className="text-[10px] font-mono text-white uppercase tracking-[0.2em]">Global Origins Hub (India)</span>
                   </div>
                </div>
                <p className="text-[9px] text-slate-500 font-mono leading-relaxed mt-4 uppercase tracking-widest">
                   Infrastructure verified under GDPR Section 44 / SOC2 Type II Privacy Shield.
                </p>
             </div>
          </motion.div>
        ) : (
          <motion.div 
            key="status"
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: 'Platform Uptime', val: '100%', icon: <Activity className="text-green-500" />, detail: 'Global Network Reliability' },
                  { label: 'Threat Mitigation', val: '0', icon: <ShieldAlert className="text-cyan-400" />, detail: 'Security Incidents 24h' },
                  { label: 'Inference Score', val: '99.99%', icon: <Cpu className="text-purple-400" />, detail: 'Deterministic Precision' },
                ].map(stat => (
                  <div key={stat.label} className="p-10 glass border border-slate-800 rounded-2xl flex flex-col justify-between hover:border-cyan-500/30 transition-all group relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">{stat.icon}</div>
                     <div className="space-y-1">
                        <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">{stat.label}</div>
                        <div className="text-4xl font-heading font-bold text-white tracking-tighter">{stat.val}</div>
                     </div>
                     <div className="mt-8 text-[9px] font-mono text-slate-600 uppercase tracking-widest">{stat.detail}</div>
                  </div>
                ))}
             </div>

             <div className="glass border border-slate-900 rounded-3xl overflow-hidden shadow-2xl">
                <div className="bg-slate-900/50 p-8 border-b border-slate-800 flex flex-col md:row justify-between items-center gap-6">
                   <div className="flex items-center gap-4">
                      <h3 className="text-xs font-mono font-bold text-white uppercase tracking-[0.4em]">Node Registry Telemetry</h3>
                      <div className="w-px h-6 bg-slate-800" />
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[9px] font-mono text-green-500 uppercase tracking-widest font-bold">ALL SYSTEMS NOMINAL</span>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <button className="px-4 py-2 border border-slate-800 text-[10px] font-mono text-slate-500 hover:text-white transition-all uppercase tracking-widest">History</button>
                      <button className="px-4 py-2 bg-white text-black text-[10px] font-mono font-bold hover:bg-cyan-500 transition-all uppercase tracking-widest">Refresh Stream</button>
                   </div>
                </div>
                <div className="p-0">
                   {[
                     { p: 'NARRATIVE OS', s: 'Operational', l: '14ms', nodes: '12', load: '12%' },
                     { p: 'ASTRAPILOT', s: 'Operational', l: '08ms', nodes: '24', load: '45%' },
                     { p: 'GROWTH OS', s: 'Operational', l: '32ms', nodes: '18', load: '67%' },
                     { p: 'OMNIS-RE', s: 'Maintenance Scheduled', l: '21ms', nodes: '14', load: '05%' },
                     { p: 'BIOTWIN', s: 'Operational', l: '45ms', nodes: '08', load: '18%' },
                     { p: 'ADTHINK', s: 'Operational', l: '05ms', nodes: '32', load: '89%' },
                     { p: 'FREEZA', s: 'Deep Cold (Secure)', l: 'N/A', nodes: '04', load: '01%' },
                   ].map((item, i) => (
                     <div key={item.p} className={`flex flex-col md:flex-row items-center justify-between px-10 py-8 border-b border-slate-900 last:border-0 hover:bg-white/5 transition-all group ${i % 2 === 0 ? 'bg-slate-950/20' : ''}`}>
                        <div className="flex items-center gap-8 w-full md:w-1/3">
                           <div className={`w-2 h-2 rounded-full ${item.s.includes('Operational') ? 'bg-green-500 shadow-[0_0_8px_#22c55e]' : 'bg-orange-500'} animate-pulse`} />
                           <div>
                              <span className="text-sm font-heading font-bold text-white uppercase tracking-[0.2em] group-hover:text-cyan-400 transition-colors">{item.p}</span>
                              <div className="text-[8px] font-mono text-slate-600 uppercase tracking-widest mt-1">Status: {item.s}</div>
                           </div>
                        </div>
                        <div className="flex items-center justify-between gap-12 w-full md:w-auto mt-6 md:mt-0">
                           <div className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Latency <br/><span className="text-cyan-400 font-bold">{item.l}</span></div>
                           <div className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Shards <br/><span className="text-white font-bold">{item.nodes}</span></div>
                           <div className="text-[9px] font-mono text-slate-500 uppercase tracking-widest w-20">Load <br/><div className="w-full bg-slate-900 h-1 mt-1 rounded-full"><div className="bg-purple-500 h-full rounded-full" style={{width: item.load}}></div></div></div>
                           <ChevronRight size={16} className="text-slate-800 group-hover:text-white group-hover:translate-x-1 transition-all" />
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Operations;
