
import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  hideText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className, size = 44, hideText = false }) => {
  return (
    <div className={`flex items-center gap-6 ${className} group cursor-pointer`}>
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        {/* Cinematic Volumetric Aura */}
        <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 w-full h-full drop-shadow-[0_0_20px_rgba(0,209,255,0.4)]"
        >
          {/* Sovereign Perimeter Ring */}
          <circle cx="50" cy="50" r="47" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
          <circle cx="50" cy="50" r="42" stroke="url(#logo_spectral_grad)" strokeWidth="3.5" strokeLinecap="round" />
          
          {/* Internal Governance Structure */}
          <path 
            d="M50 20L76 35V65L50 80L24 65V35L50 20Z" 
            stroke="white" 
            strokeWidth="0.75" 
            strokeOpacity="0.6" 
          />
          
          {/* Intelligence Core Node */}
          <rect x="42" y="42" width="16" height="16" rx="2" fill="url(#logo_spectral_grad)" />
          <path d="M50 32V42M50 58V68M32 50H42M58 50H68" stroke="white" strokeWidth="2" strokeLinecap="round" />
          
          <defs>
            <linearGradient id="logo_spectral_grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF8A00" />
              <stop offset="0.33" stopColor="#FACC15" />
              <stop offset="0.66" stopColor="#4ADE80" />
              <stop offset="1" stopColor="#22D3EE" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {!hideText && (
        <div className="flex flex-col justify-center py-1.5">
          <div className="font-heading font-bold text-[30px] tracking-[-0.04em] uppercase text-white flex items-baseline gap-0.5 leading-[1.2]">
            <span>NexOrgyn</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-cyan-500 font-extrabold">Labs</span>
          </div>
          <div className="font-mono text-[9px] font-bold uppercase tracking-[0.8em] text-slate-500 mt-2 block whitespace-nowrap opacity-70 group-hover:text-cyan-400 group-hover:opacity-100 transition-all duration-700 ease-out">
            Sovereign Infrastructure
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;
