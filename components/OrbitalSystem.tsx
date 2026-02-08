
import React from 'react';
import { motion } from 'framer-motion';
import { PLATFORMS } from '../constants';
import { ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OrbitalSystem: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-[600px] w-full max-w-4xl mx-auto flex items-center justify-center overflow-visible">
      {/* Central Core */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1], rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="relative z-20 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center shadow-[0_0_50px_rgba(0,209,255,0.4)] cursor-pointer"
        onClick={() => navigate('/')}
      >
        <ShieldCheck size={48} className="text-white" />
        <div className="absolute inset-[-10px] rounded-full border border-cyan-500/30 animate-pulse" />
        <div className="absolute inset-[-20px] rounded-full border border-purple-500/20 animate-ping" />
      </motion.div>

      {/* Orbit Paths */}
      <div className="absolute w-[350px] h-[350px] rounded-full border border-slate-800/50 z-10" />
      <div className="absolute w-[500px] h-[500px] rounded-full border border-slate-800/30 z-10" />

      {/* Platforms */}
      {PLATFORMS.map((platform, index) => {
        const angle = (index / PLATFORMS.length) * 2 * Math.PI;
        const radius = index % 2 === 0 ? 175 : 250;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <motion.div
            key={platform.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x,
              y
            }}
            whileHover={{ scale: 1.2 }}
            className="absolute z-30 cursor-pointer group"
            onClick={() => navigate(`/platforms/${platform.id}`)}
          >
            <div className="relative">
              <div className="w-14 h-14 glass rounded-xl flex items-center justify-center border border-white/10 group-hover:border-cyan-400 transition-colors shadow-xl">
                <div className="text-white group-hover:text-cyan-400 transition-colors">
                  {platform.icon}
                </div>
              </div>
              
              {/* Tooltip-like Info */}
              <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap text-center">
                <div className="font-heading font-bold text-sm text-white">{platform.name}</div>
                <div className="text-[10px] font-mono uppercase text-cyan-400 tracking-widest">{platform.tagline}</div>
              </div>

              {/* Orbital Lines */}
              <div className="absolute top-1/2 left-1/2 w-[1px] h-[50px] bg-gradient-to-t from-cyan-500/40 to-transparent -translate-x-1/2 -translate-y-full origin-bottom" style={{ transform: `rotate(${angle + Math.PI/2}rad) translateX(-50%)` }} />
            </div>
          </motion.div>
        );
      })}

      {/* Background Rings Decoration */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-full h-full border-[1px] border-cyan-500/20 rounded-full scale-[1.2] animate-[spin_60s_linear_infinite]" />
        <div className="absolute w-full h-full border-[1px] border-purple-500/20 rounded-full scale-[1.5] animate-[spin_90s_linear_infinite_reverse]" />
      </div>
    </div>
  );
};

export default OrbitalSystem;
