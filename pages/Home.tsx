
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PLATFORMS, CONTACT_EMAIL } from '../constants';
import OrbitalSystem from '../components/OrbitalSystem';
import { ArrowRight, Database, LayoutGrid, Mail, Network } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 300]);
  const yParallaxReverse = useTransform(scrollY, [0, 1000], [0, -150]);

  return (
    <div className="relative space-y-32 pb-40">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen flex flex-col items-center pt-[32vh] px-6 overflow-hidden hero-3d-scene">
        {/* Professional 3D Background Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[5%] left-[-5%] w-[50%] h-[50%] bg-cyan-500/5 blur-[250px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-slate-500/5 blur-[250px] rounded-full" />
          
          {/* Parallax Monolith Grid */}
          <motion.div style={{ y: yParallax }} className="monolith-grid">
             {[...Array(24)].map((_, i) => (
               <div 
                 key={i} 
                 className="monolith-item" 
                 style={{ 
                   opacity: 0.1, 
                   animation: `float ${12 + Math.random() * 8}s ease-in-out infinite`,
                   animationDelay: `${i * -0.6}s` 
                 }} 
               />
             ))}
          </motion.div>

          <div className="absolute inset-0 neural-grid" />
          <div className="absolute inset-0 circuit-pattern" />
        </div>

        <div className="relative z-10 max-w-[1920px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center px-10 md:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            <div className="space-y-8">
               <h1 className="font-heading font-bold text-7xl md:text-[9.5rem] text-white tracking-tighter leading-[0.75] uppercase">
                <span className="sovereign-grey-text">Sovereign</span> <br />
                <span className="sovereign-gradient-text">Intelligence.</span>
              </h1>
              <p className="text-slate-400 text-xl md:text-3xl leading-relaxed font-light tracking-wide max-w-xl opacity-80">
                The terminal layer for civilization-scale systems. Engineering deterministic infrastructure for global strategic intelligence.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-8 pt-6">
              <button 
                onClick={() => navigate('/platforms')}
                className="group relative px-14 py-8 bg-white text-black font-heading font-bold rounded-sm hover:bg-cyan-400 transition-all flex items-center gap-4 uppercase tracking-tighter text-xl overflow-hidden premium-glow-cyan"
              >
                Access Registry <LayoutGrid size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href={`mailto:${CONTACT_EMAIL}?subject=Institutional Vetting Request`}
                className="px-14 py-8 glass border border-white/10 text-white font-heading font-bold rounded-sm hover:border-slate-500/50 transition-all flex items-center gap-4 uppercase tracking-tighter text-xl group"
              >
                Vetting Protocol <Mail size={22} className="opacity-40 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </motion.div>

          {/* ISOMETRIC 3D CORE ILLUSTRATION */}
          <div className="relative h-[800px] hidden lg:flex items-center justify-center isometric-parent">
            <motion.div
              style={{ y: yParallaxReverse }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2.5, ease: "easeOut" }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {/* Central Floating Node */}
              <div className="absolute w-[450px] h-[450px] glass border-slate-500/20 rounded-[4rem] rotate-[45deg] flex items-center justify-center bg-white/[0.02] shadow-[0_0_200px_rgba(255,255,255,0.03)] float-animation z-20">
                <div className="absolute inset-8 border border-white/5 rounded-[3rem] animate-pulse" />
                <div className="-rotate-[45deg] flex flex-col items-center gap-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white blur-3xl opacity-5 animate-pulse" />
                    <Network size={140} className="text-white relative z-10 opacity-60" />
                  </div>
                  <span className="font-mono text-[12px] text-slate-500 tracking-[1em] font-bold uppercase ml-[1em]">Root infrastructure</span>
                </div>
              </div>

              {/* Orbital 3D Blocks */}
              {[...Array(8)].map((_, i) => {
                const angle = (i / 8) * 2 * Math.PI;
                const r = 440;
                const x = Math.cos(angle) * r;
                const y = Math.sin(angle) * r;
                return (
                  <motion.div
                    key={i}
                    animate={{ 
                      y: [y, y - 40, y],
                      opacity: [0.1, 0.4, 0.1],
                      rotateY: [0, 360],
                    }}
                    transition={{ 
                      y: { duration: 10 + i, repeat: Infinity, ease: "easeInOut" },
                      rotateY: { duration: 25, repeat: Infinity, ease: "linear" },
                      delay: i * 0.5 
                    }}
                    className="absolute w-24 h-24 glass border-white/5 rounded-2xl shadow-2xl flex items-center justify-center text-slate-500"
                    style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
                  >
                    <Database size={28} className="opacity-30" />
                  </motion.div>
                );
              })}

              {/* Structural Beams */}
              <div className="absolute w-[1200px] h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 pointer-events-none" />
              <div className="absolute w-[1200px] h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent -rotate-45 pointer-events-none" />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 opacity-30">
          <span className="text-[10px] font-mono uppercase tracking-[1em] text-white font-bold">Scanning Sub-Layers</span>
          <div className="w-[1px] h-32 bg-gradient-to-b from-white/20 via-white/5 to-transparent" />
        </div>
      </section>

      {/* SECTION 2: THE REGISTRY */}
      <section className="relative px-6 py-20 bg-slate-950/40 border-y border-white/5">
        <div className="max-w-[1920px] mx-auto px-10 md:px-20 space-y-24">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 border-b border-white/5 pb-16">
            <div className="space-y-6 max-w-4xl">
              <h2 className="font-heading font-bold text-5xl md:text-8xl text-white uppercase tracking-tighter leading-tight">
                Registry of <span className="sovereign-grey-text italic">Certainty.</span>
              </h2>
              <p className="text-slate-500 text-2xl font-light leading-relaxed max-w-3xl">
                Seven specialized operating environments governed by deterministic proof. 
                Engineering the unshakeable foundation for institutional stability.
              </p>
            </div>
            <div className="flex gap-4">
              <button onClick={() => navigate('/platforms')} className="px-10 py-5 glass border border-white/10 text-white font-mono text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all">Full Registry Specs</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {PLATFORMS.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                onClick={() => navigate(`/platforms/${p.id}`)}
                className="p-12 glass border border-slate-900 rounded-[2.5rem] space-y-10 hover:border-slate-500/30 transition-all group cursor-pointer bg-slate-950/20 relative overflow-hidden h-full flex flex-col shadow-inner"
              >
                 <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:opacity-10 transition-opacity">
                    {p.icon}
                 </div>
                 
                 <div className="w-16 h-16 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                    {p.icon}
                 </div>

                 <div className="space-y-4 flex-1">
                   <div className="space-y-1">
                      <h3 className="font-heading font-bold text-4xl text-white uppercase tracking-tighter group-hover:text-slate-100 transition-colors">{p.name}</h3>
                      <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">{p.tagline}</p>
                   </div>
                   <p className="text-base text-slate-400 font-light leading-relaxed italic opacity-70">
                     "{p.summary.slice(0, 140)}..."
                   </p>
                 </div>

                 <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">Authorized node</span>
                    <div className="flex items-center gap-3 text-white text-[10px] font-mono font-bold uppercase tracking-[0.4em] opacity-30 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                       Deploy <ArrowRight size={14} />
                    </div>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative px-6 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-20">
          <div className="space-y-6 max-w-5xl">
            <div className="font-mono text-xs text-slate-500 uppercase tracking-[0.6em] font-bold">Strategic Core</div>
            <h2 className="font-heading font-bold text-6xl md:text-[7rem] text-white tracking-tight uppercase leading-[0.9]">
              The Architecture of <br /><span className="sovereign-grey-text italic">Inevitability.</span>
            </h2>
          </div>
          <OrbitalSystem />
          
          <div className="pt-10">
            <a href={`mailto:${CONTACT_EMAIL}`} className="px-14 py-8 glass border border-white/10 text-white font-mono text-sm tracking-[0.5em] uppercase hover:bg-white hover:text-black transition-all flex items-center gap-6 shadow-2xl">
              <Mail size={20} /> INITIATE CONTACT
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
