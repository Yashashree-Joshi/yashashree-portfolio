import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { achievementCategories, AchievementCategory, AchievementItem } from "../data/achievements";

// Generate star positions within a cluster (relative to cluster center, in SVG % units)
function getClusterStarPositions(count: number): { dx: number; dy: number }[] {
  // Deterministic positions based on count — artistic scatter
  const patterns: Record<number, { dx: number; dy: number }[]> = {
    2: [{ dx: -3, dy: -2 }, { dx: 3, dy: 2 }],
    3: [{ dx: 0, dy: -4 }, { dx: -3, dy: 3 }, { dx: 4, dy: 2 }],
    4: [{ dx: -2, dy: -4 }, { dx: 4, dy: -1 }, { dx: 2, dy: 4 }, { dx: -4, dy: 2 }],
    5: [{ dx: 0, dy: -5 }, { dx: 4, dy: -2 }, { dx: 3, dy: 4 }, { dx: -3, dy: 3 }, { dx: -4, dy: -2 }],
  };
  return patterns[count] ?? patterns[3];
}

export function Achievements() {
  const [hoveredStar, setHoveredStar] = useState<{ catId: string; itemId: string } | null>(null);
  const [modalStar, setModalStar] = useState<{ cat: AchievementCategory; item: AchievementItem } | null>(null);

  return (
    <section id="achievements" className="relative overflow-hidden" style={{ minHeight: '120vh' }}>
      {/* Ambient deep space glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-[#468A9A]/5 blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#541212]/4 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-16 pb-24">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="section-heading text-4xl md:text-5xl font-serif mb-4">Achievements</h2>
          <p className="text-[#468A9A] font-mono text-sm tracking-widest">— CONSTELLATION ARCHIVE —</p>
        </motion.div>

        {/* Category legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {achievementCategories.map(cat => (
            <div key={cat.id} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ background: cat.color, boxShadow: `0 0 6px ${cat.color}` }} />
              <span className="text-xs font-mono text-[#EEEEEE]/50">{cat.label}</span>
            </div>
          ))}
        </div>

        {/* Desktop — multi-constellation SVG canvas */}
        <div className="hidden md:block relative w-full" style={{ height: '70vh', minHeight: 600 }}>
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 80" preserveAspectRatio="xMidYMid meet">
            {/* Tiny background twinkling stars */}
            {[{x:5,y:5},{x:92,y:12},{x:55,y:8},{x:85,y:45},{x:10,y:55},{x:95,y:72},{x:35,y:78},{x:72,y:75}].map((s,i)=>(
              <motion.circle key={i} cx={s.x} cy={s.y} r={0.2} fill="#EEEEEE"
                animate={{ opacity: [0.1, 0.5, 0.1] }}
                transition={{ duration: 2+i*0.6, repeat: Infinity, delay: i*0.4 }}
              />
            ))}

            {/* Render each constellation cluster */}
            {achievementCategories.map((cat) => {
              const catStarPositions = getClusterStarPositions(cat.items.length);
              const isCatHovered = hoveredStar?.catId === cat.id;
              const otherCatHovered = hoveredStar !== null && hoveredStar.catId !== cat.id;

              return (
                <g key={cat.id}>
                  {/* Cluster label */}
                  <text
                    x={cat.cx} y={cat.cy - 7}
                    textAnchor="middle"
                    fontSize="2"
                    fill={cat.color}
                    opacity={otherCatHovered ? 0.1 : 0.6}
                    fontFamily="monospace"
                    style={{ transition: 'opacity 0.4s' }}
                  >
                    {cat.label.toUpperCase()}
                  </text>

                  {/* Inter-cluster lines (connecting stars within cluster) */}
                  {cat.items.map((item, i) => {
                    if (i === 0) return null;
                    const from = catStarPositions[i - 1];
                    const to = catStarPositions[i];
                    return (
                      <motion.line key={item.id + "-line"}
                        x1={cat.cx + from.dx} y1={cat.cy + from.dy}
                        x2={cat.cx + to.dx} y2={cat.cy + to.dy}
                        stroke={cat.color}
                        strokeWidth={0.25}
                        animate={{ opacity: otherCatHovered ? 0.02 : isCatHovered ? 0.8 : 0.2 }}
                        transition={{ duration: 0.4 }}
                      />
                    );
                  })}

                  {/* Star nodes */}
                  {cat.items.map((item, i) => {
                    const sp = catStarPositions[i % catStarPositions.length];
                    const sx = cat.cx + sp.dx;
                    const sy = cat.cy + sp.dy;
                    const isStarHovered = hoveredStar?.itemId === item.id;

                    return (
                      <g key={item.id}>
                        {/* Glow ring */}
                        <circle cx={sx} cy={sy} r={isStarHovered ? 1.5 : 0.8}
                          fill="none" stroke={cat.color} strokeWidth={0.2}
                          opacity={otherCatHovered ? 0.02 : isStarHovered ? 0.9 : 0.25}
                          style={{ transition: 'all 0.35s' }}
                        />
                        {/* Main star */}
                        <circle cx={sx} cy={sy} r={isStarHovered ? 0.8 : 0.5}
                          fill={isStarHovered ? '#EEEEEE' : cat.color}
                          opacity={otherCatHovered ? 0.05 : 1}
                          style={{ cursor: 'pointer', transition: 'all 0.35s',
                            filter: isStarHovered ? `drop-shadow(0 0 2px ${cat.color})` : 'none'
                          }}
                          onMouseEnter={() => setHoveredStar({ catId: cat.id, itemId: item.id })}
                          onMouseLeave={() => setHoveredStar(null)}
                          onClick={() => setModalStar({ cat, item })}
                        />
                      </g>
                    );
                  })}
                </g>
              );
            })}
          </svg>

          {/* Hover tooltip */}
          {hoveredStar && (() => {
            const cat = achievementCategories.find(c => c.id === hoveredStar.catId)!;
            const item = cat.items.find(it => it.id === hoveredStar.itemId)!;
            const starIdx = cat.items.findIndex(it => it.id === hoveredStar.itemId);
            const sp = getClusterStarPositions(cat.items.length)[starIdx];
            const lx = cat.cx + sp.dx;
            const ly = cat.cy + sp.dy;
            const flipX = lx > 55;
            const flipY = ly > 55;
            return (
              <motion.div
                key={hoveredStar.itemId}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  position: 'absolute',
                  left: `${lx}%`,
                  top: `${(ly / 80) * 100}%`,
                  transform: `translate(${flipX ? '-110%' : '16px'}, ${flipY ? '-110%' : '16px'})`,
                  pointerEvents: 'none', zIndex: 20,
                  borderColor: cat.color + '33'
                }}
                className="w-52 glass-card p-4 border"
              >
                <div className="text-xs font-mono mb-1" style={{ color: cat.color }}>{cat.label} · {item.date}</div>
                <h4 className="text-[#EEEEEE] text-sm font-medium mb-1">{item.title}</h4>
                <p className="text-[#EEEEEE]/60 text-xs">{item.description}</p>
                <p className="mt-1 text-[10px] text-[#EEEEEE]/30 font-mono">click for details →</p>
              </motion.div>
            );
          })()}
        </div>

        {/* Mobile — grid by category */}
        <div className="md:hidden space-y-8">
          {achievementCategories.map(cat => (
            <div key={cat.id}>
              <h3 className="font-mono text-xs tracking-widest mb-4 flex items-center gap-2"
                style={{ color: cat.color }}>
                <span className="w-8 h-px inline-block" style={{ background: cat.color }} />
                {cat.label.toUpperCase()}
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {cat.items.map(item => (
                  <motion.div key={item.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-4 cursor-pointer"
                    onClick={() => setModalStar({ cat, item })}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-[#EEEEEE] text-sm font-medium">{item.title}</h4>
                      <span className="text-xs font-mono bg-[#468A9A]/10 text-[#468A9A] px-2 py-0.5 rounded">{item.date}</span>
                    </div>
                    <p className="text-[#EEEEEE]/60 text-xs">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalStar && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)' }}
            onClick={() => setModalStar(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              onClick={e => e.stopPropagation()}
              className="glass-card max-w-md w-full p-8"
              style={{ border: `1px solid ${modalStar.cat.color}33` }}
            >
              <div className="text-xs font-mono mb-2" style={{ color: modalStar.cat.color }}>
                {modalStar.cat.label} · {modalStar.item.date}
              </div>
              <h3 className="text-[#EEEEEE] text-2xl font-serif mb-4">{modalStar.item.title}</h3>
              <p className="text-[#EEEEEE]/70 text-sm leading-relaxed">{modalStar.item.description}</p>
              <button onClick={() => setModalStar(null)} className="mt-6 text-xs font-mono text-[#EEEEEE]/30 hover:text-[#468A9A] transition-colors">
                [ close ]
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
