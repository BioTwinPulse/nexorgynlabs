import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PLATFORMS, CONTACT_EMAIL } from '../constants';
import OrbitalSystem from '../components/OrbitalSystem';
import { ArrowRight, Database, LayoutGrid, Mail, Network } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  /* ✅ Delay heavy animations until after first paint */
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 300);
    return () => clearTimeout(t);
  }, []);

  const { scrollY } = useScroll();

  const yParallax = ready
    ? useTransform(scrollY, [0, 1000], [0, 300])
    : 0;

  const yParallaxReverse = ready
    ? useTransform(scrollY, [0, 1000], [0, -150])
    : 0;

  return (
    <div className="relative space-y-32 pb-40">

      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen flex flex-col items-center pt-[32vh] px-6 overflow-hidden hero-3d-scene">

        {/* Background */}
        {ready && (
          <div className="absolute inset-0 z-0 pointer-events-none">

            <div className="absolute top-[5%] left-[-5%] w-[50%] h-[50%] bg-cyan-500/5 blur-[250px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-slate-500/5 blur-[250px] rounded-full" />

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
        )}

        {/* Content */}
        <div className="relative z-10 max-w-[1920px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center px-10 md:px-20">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="space-y-12"
          >
            <div className="space-y-8">

              <h1 className="font-heading font-bold text-7xl md:text-[9.5rem] text-white tracking-tighter leading-[0.75] uppercase">
                <span className="sovereign-grey-text">Sovereign</span><br />
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
                Access Registry
                <LayoutGrid size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Institutional Vetting Request`}
                className="px-14 py-8 glass border border-white/10 text-white font-heading font-bold rounded-sm hover:border-slate-500/50 transition-all flex items-center gap-4 uppercase tracking-tighter text-xl group"
              >
                Vetting Protocol
                <Mail size={22} className="opacity-40 group-hover:opacity-100 transition-opacity" />
              </a>

            </div>
          </motion.div>

          {/* 3D Illustration */}
          {ready && (
            <div className="relative h-[800px] hidden lg:flex items-center justify-center isometric-parent">

              <motion.div
                style={{ y: yParallaxReverse }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2 }}
                className="relative w-full h-full flex items-center justify-center"
              >

                <div className="absolute w-[450px] h-[450px] glass border-slate-500/20 rounded-[4rem] rotate-[45deg] flex items-center justify-center bg-white/[0.02] z-20">

                  <div className="-rotate-[45deg] flex flex-col items-center gap-6">

                    <Network size={140} className="text-white opacity-60" />

                    <span className="font-mono text-[12px] text-slate-500 tracking-[1em] font-bold uppercase ml-[1em]">
                      Root infrastructure
                    </span>

                  </div>
                </div>

                {[...Array(8)].map((_, i) => {
                  const angle = (i / 8) * 2 * Math.PI;
                  const r = 440;

                  return (
                    <motion.div
                      key={i}
                      animate={{
                        rotateY: [0, 360],
                      }}
                      transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute w-24 h-24 glass border-white/5 rounded-2xl flex items-center justify-center text-slate-500"
                      style={{
                        left: `calc(50% + ${Math.cos(angle) * r}px)`,
                        top: `calc(50% + ${Math.sin(angle) * r}px)`
                      }}
                    >
                      <Database size={28} className="opacity-30" />
                    </motion.div>
                  );
                })}

              </motion.div>

            </div>
          )}

        </div>
      </section>

      {/* Registry */}
      <section className="relative px-6 py-20 bg-slate-950/40 border-y border-white/5">

        <div className="max-w-[1920px] mx-auto px-10 md:px-20 space-y-24">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

            {PLATFORMS.map((p, i) => (

              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                onClick={() => navigate(`/platforms/${p.id}`)}
                className="p-12 glass border border-slate-900 rounded-[2.5rem] space-y-10 hover:border-slate-500/30 transition-all cursor-pointer"
              >

                <h3 className="font-heading font-bold text-3xl text-white uppercase">
                  {p.name}
                </h3>

                <p className="text-slate-400 italic opacity-70">
                  "{p.summary.slice(0, 140)}..."
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="relative px-6 py-20 overflow-hidden">

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-20">

          <OrbitalSystem />

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="px-14 py-8 glass border border-white/10 text-white font-mono text-sm tracking-[0.5em] uppercase hover:bg-white hover:text-black transition-all flex items-center gap-6 shadow-2xl"
          >
            <Mail size={20} /> INITIATE CONTACT
          </a>

        </div>

      </section>

    </div>
  );
};

export default Home;
