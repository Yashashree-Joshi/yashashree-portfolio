import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { timeline } from "../data/timeline";

export function Journey() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null); // For mobile

  const orbitAngles = [325, 30, 85, 140, 200, 255, 290]; // degrees
  const orbitRadius = 340; // px, for desktop

  return (
    <section id="journey" className="relative min-h-screen pt-8 pb-24 overflow-hidden flex flex-col items-center justify-center -mt-[2vh]">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-center mb-12 z-10 relative"
      >
        <h2 className="section-heading text-4xl md:text-5xl font-serif mb-4">Journey</h2>
        <div className="w-12 h-1 bg-[#468A9A] mx-auto rounded-full" />
      </motion.div>

      {/* Orbital system — desktop */}
      <div className="hidden lg:block relative w-[900px] h-[900px] mx-auto">
        {/* Central globe */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-64 h-64"
          >
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-[#468A9A]/10 blur-2xl animate-pulse" />
            {/* Globe surface */}
            <div className="absolute inset-0 rounded-full border border-[#468A9A]/30" style={{background: 'radial-gradient(circle at 35% 35%, rgba(70,138,154,0.2), rgba(15,14,14,0.8))'}} />
            {/* Grid lines (SVG wireframe globe feel) */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 256 256" style={{opacity:0.4}}>
              <ellipse cx="128" cy="128" rx="127" ry="127" stroke="#468A9A" strokeWidth="0.5" fill="none" />
              <ellipse cx="128" cy="128" rx="80" ry="127" stroke="#468A9A" strokeWidth="0.5" fill="none" />
              <ellipse cx="128" cy="128" rx="127" ry="46" stroke="#468A9A" strokeWidth="0.5" fill="none" />
              <ellipse cx="128" cy="128" rx="127" ry="93" stroke="#468A9A" strokeWidth="0.5" fill="none" />
              <line x1="128" y1="1" x2="128" y2="255" stroke="#468A9A" strokeWidth="0.5" />
              <line x1="1" y1="128" x2="255" y2="128" stroke="#468A9A" strokeWidth="0.5" />
              
              {timeline.map((entry) => {
                const gx = 128 + 90 * Math.cos((entry.angle * Math.PI) / 180);
                const gy = 128 - 90 * entry.tilt; // negative because SVG y increases downward
                const isActive = activeId === entry.id;
                return (
                  <g key={entry.id}>
                    {/* Glow halo */}
                    <circle cx={gx} cy={gy} r={isActive ? 5 : 3} fill={entry.color} opacity={0.2} />
                    {/* Main dot */}
                    <circle cx={gx} cy={gy} r={isActive ? 2.5 : 1.8}
                      fill={entry.color}
                      opacity={isActive ? 1 : 0.7}
                      style={{ cursor: 'pointer' }}
                      onClick={() => setActiveId(isActive ? null : entry.id)}
                    />
                  </g>
                );
              })}
            </svg>
            {/* Center label */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-[#468A9A] font-mono text-xs text-center leading-tight opacity-60">THE<br/>UNIVERSE</span>
            </div>
          </motion.div>
        </div>

        {/* SVG orbital paths and connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 900 900">
          {/* Orbit ring */}
          <ellipse cx="450" cy="450" rx={orbitRadius} ry={orbitRadius} stroke="#468A9A" strokeWidth="0.5" strokeDasharray="4 8" fill="none" opacity="0.1" />
          
          {/* Lines from globe center OUT to where the card appears (only for active milestone) */}
          {timeline.map((m, i) => {
            const angle = (orbitAngles[i] * Math.PI) / 180;
            const x2 = 450 + orbitRadius * Math.cos(angle);
            const y2 = 450 + orbitRadius * Math.sin(angle);
            return (
              <motion.line key={m.id}
                x1="450" y1="450" x2={x2} y2={y2}
                stroke="#468A9A"
                strokeWidth={1.5}
                opacity={activeId === m.id ? 0.7 : 0}
                animate={{ opacity: activeId === m.id ? 0.7 : 0 }}
                transition={{ duration: 0.4 }}
              />
            );
          })}
        </svg>

        {/* Milestone nodes */}
        {timeline.map((entry, i) => {
          const angle = (orbitAngles[i] * Math.PI) / 180;
          const x = 450 + orbitRadius * Math.cos(angle);
          const y = 450 + orbitRadius * Math.sin(angle);
          const isActive = activeId === entry.id;
          // Card positioning: push outward from center
          const cardOffsetX = Math.cos(angle) > 0 ? 16 : -280;
          const cardOffsetY = Math.sin(angle) > 0 ? 16 : -160;

          return (
            <motion.div key={entry.id}
              style={{ position: 'absolute', left: x, top: y, transform: 'translate(-50%,-50%)' }}
              className="z-20"
            >
              {/* Node */}
              <motion.button
                onClick={() => setActiveId(isActive ? null : entry.id)}
                animate={{ scale: isActive ? 1.4 : 1, boxShadow: isActive ? '0 0 24px rgba(84,18,18,0.6)' : '0 0 12px rgba(70,138,154,0.3)' }}
                whileHover={{ scale: 1.3 }}
                className="w-4 h-4 rounded-full relative block"
                style={{ background: isActive ? '#541212' : '#EEEEEE', boxShadow: isActive ? '0 0 24px rgba(84,18,18,0.5)' : '0 0 10px rgba(238,238,238,0.3)' }}
                aria-label={entry.title}
              />
              
              {/* Floating date label near node */}
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-mono text-[#468A9A] whitespace-nowrap pointer-events-none">
                {entry.date}
              </span>

              {/* Expanded glass card — positioned away from center */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    style={{ position: 'absolute', left: cardOffsetX, top: cardOffsetY, zIndex: 30 }}
                    className="w-64 glass-card p-4 border border-[#541212]/30 shadow-[0_0_30px_rgba(84,18,18,0.15)]"
                  >
                    <div className="text-[#468A9A] font-mono text-xs mb-1">{entry.date}</div>
                    <h3 className="text-[#EEEEEE] font-medium text-sm mb-1">{entry.title}</h3>
                    <p className="text-[#EEEEEE]/50 text-xs mb-2">{entry.icon}</p>
                    <p className="text-[#EEEEEE]/70 text-xs leading-relaxed">{entry.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}

        {/* Final milestone "Still Being Written" */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 translate-y-8 text-[#EEEEEE]/40 font-mono text-xs flex items-center gap-1">
          Still Being Written
          <motion.span animate={{ opacity: [1,0,1] }} transition={{ repeat:Infinity, duration:1 }} className="w-1.5 h-3.5 bg-[#468A9A] inline-block" />
        </div>
      </div>

      {/* Mobile fallback — vertical timeline, keep existing mobile layout */}
      <div className="lg:hidden w-full max-w-xl mx-auto px-6">
        <div className="relative border-l border-[#468A9A]/40 ml-4">
          {timeline.map((entry, index) => {
            const isExpanded = expandedId === entry.id;
            
            return (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative mb-12 flex items-center justify-start w-full"
              >
                {/* Node */}
                <div className={`absolute left-[-5px] top-4 w-3 h-3 rounded-full transition-all duration-300 ${isExpanded ? 'bg-[#541212] shadow-[0_0_20px_rgba(84,18,18,0.5)]' : 'bg-[#EEEEEE] group-hover:bg-[#468A9A]'} z-10`} />

                {/* Card */}
                <div 
                  className="pl-8 w-full"
                  onClick={() => setExpandedId(isExpanded ? null : entry.id)}
                >
                  <motion.div 
                    layout
                    className="cursor-pointer glass-card p-6 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#468A9A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <motion.div layout className="relative z-10">
                      <span className="text-[#468A9A]/80 font-mono text-sm block mb-2">{entry.date}</span>
                      <h3 className="text-xl font-medium text-[#EEEEEE] group-hover:text-[#468A9A] transition-colors">{entry.title}</h3>
                      <p className="text-[#EEEEEE]/50 text-sm mt-1">{entry.icon}</p>
                    </motion.div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="relative z-10 overflow-hidden"
                        >
                          <p className="mt-4 text-[#EEEEEE]/70 text-sm leading-relaxed border-t border-white/10 pt-4">
                            {entry.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}

          {/* Final Milestone */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-start w-full mt-20"
          >
            <div className="absolute left-[-5px] top-1 w-3 h-3 rounded-full bg-[#468A9A] z-10" />
            <div className="pl-8 mt-[-4px] text-[#EEEEEE]/50 font-mono text-sm tracking-widest flex items-center gap-1">
              Still Being Written
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-2 h-4 bg-[#468A9A] block"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
