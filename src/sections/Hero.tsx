import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { ChevronDown } from "lucide-react";
import * as THREE from "three";

function Globe({ mouseRef }: { mouseRef: React.RefObject<{ x: number; y: number }> }) {
  const groupRef = useRef<THREE.Group>(null);
  const targetRotation = useRef({ x: 0, y: 0 });
  
  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    
    // Idle slow rotation on Y
    targetRotation.current.y += 0.004;
    
    // Mouse influence — spring-like lerp
    const mx = (mouseRef.current?.x ?? 0) * 0.25;
    const my = (mouseRef.current?.y ?? 0) * 0.2;
    
    // Smooth lerp toward target
    groupRef.current.rotation.y += (targetRotation.current.y + mx - groupRef.current.rotation.y) * 0.04;
    groupRef.current.rotation.x += (my - groupRef.current.rotation.x) * 0.05;
    
    // Gentle vertical float
    groupRef.current.position.y = Math.sin(t * 0.6) * 0.12;
    
    // Breathing scale
    const breathScale = 1 + Math.sin(t * 0.4) * 0.018;
    groupRef.current.scale.setScalar(breathScale);
  });

  return (
    <group ref={groupRef}>
      {/* Inner dense point sphere */}
      <points>
        <sphereGeometry args={[2.5, 64, 64]} />
        <pointsMaterial color="#468A9A" size={0.015} transparent opacity={0.5} sizeAttenuation />
      </points>
      {/* Wireframe overlay */}
      <mesh>
        <sphereGeometry args={[2.4, 24, 24]} />
        <meshBasicMaterial color="#468A9A" wireframe transparent opacity={0.06} />
      </mesh>
      {/* Outer soft glow sphere */}
      <mesh>
        <sphereGeometry args={[2.6, 16, 16]} />
        <meshBasicMaterial color="#468A9A" transparent opacity={0.02} side={THREE.BackSide} />
      </mesh>
      {/* Ambient point light at center — creates surface glow */}
      <pointLight color="#468A9A" intensity={0.8} distance={6} decay={2} />
      {/* Subtle burgundy light from one side */}
      <pointLight color="#541212" intensity={0.3} distance={8} position={[3, 2, -2]} />
    </group>
  );
}

export function Hero() {
  const [bootSequenceComplete, setBootSequenceComplete] = useState(false);
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });

  // Raw transforms
  const globeScaleRaw = useTransform(scrollYProgress, [0, 0.7], [1, 2.6]);
  const heroTextOpacityRaw = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroTextYRaw = useTransform(scrollYProgress, [0, 0.35], [0, -60]);
  const globeOpacityRaw = useTransform(scrollYProgress, [0, 0.55, 0.88, 1], [1, 1, 0.6, 0]);
  const atmosScaleRaw = useTransform(scrollYProgress, [0, 0.8], [1, 1.4]);

  // Spring-smoothed outputs — removes jank, keeps motion physically weighted
  const springConfig = { stiffness: 80, damping: 22, mass: 0.4 };
  const globeScale = useSpring(globeScaleRaw, springConfig);
  const heroTextOpacity = useSpring(heroTextOpacityRaw, { stiffness: 120, damping: 28 });
  const heroTextY = useSpring(heroTextYRaw, springConfig);
  const globeOpacity = useSpring(globeOpacityRaw, { stiffness: 100, damping: 30 });
  const atmosScale = useSpring(atmosScaleRaw, springConfig);
  
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  const lines = [
    "> Initializing Neural Interface...",
    "> Loading Research Archive...",
    "> Loading Project Repository...",
    "> Loading Mission Control...",
    "> Rendering Digital Universe...",
    "> Welcome, Explorer."
  ];

  useEffect(() => {
    if (textIndex < lines.length) {
      const timer = setTimeout(() => {
        setTextIndex(prev => prev + 1);
        setProgress((prev) => prev + (100 / lines.length));
      }, 800 + Math.random() * 400);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setBootSequenceComplete(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [textIndex]);

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      setShowScrollIndicator(v < 0.05);
    });
    return () => unsub();
  }, [scrollYProgress]);

  const mouseRef = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    mouseRef.current.y = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
  };

  const particleCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = particleCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
    }));
    
    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mx = (mouseRef.current.x * 0.5 + 0.5) * canvas.width;
      const my = (-mouseRef.current.y * 0.5 + 0.5) * canvas.height;
      
      particles.forEach(p => {
        // Gentle attraction toward mouse — very subtle
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          p.vx += (dx / dist) * 0.015;
          p.vy += (dy / dist) * 0.015;
        }
        
        // Damping
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.x += p.vx;
        p.y += p.vy;
        
        // Wrap
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(70, 138, 154, ${p.opacity})`;
        ctx.fill();
      });
      
      animId = requestAnimationFrame(animate);
    };
    
    animate();
    return () => cancelAnimationFrame(animId);
  }, [bootSequenceComplete]);

  if (!bootSequenceComplete) {
    return (
      <div className="fixed inset-0 bg-[#0F0E0E] z-50 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-2xl text-left font-mono space-y-2">
          {lines.slice(0, textIndex).map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[#EEEEEE] text-sm md:text-base"
            >
              <span className="text-[#468A9A] mr-2">{line.split(' ')[0]}</span>
              {line.split(' ').slice(1).join(' ')}
            </motion.div>
          ))}
          {textIndex < lines.length && (
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-3 h-5 bg-[#468A9A] inline-block align-middle ml-2"
            />
          )}
          
          <div className="mt-8 w-full h-1 bg-white/10 rounded overflow-hidden">
            <motion.div 
              className="h-full bg-[#468A9A]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <section ref={sectionRef} className="relative min-h-[150vh] overflow-hidden" onMouseMove={handleMouseMove}>
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: globeScale, opacity: globeOpacity }} className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
            <Globe mouseRef={mouseRef} />
          </Canvas>
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0E0E]/10 via-[#0F0E0E]/50 to-[#0F0E0E] z-0 pointer-events-none" />
        
        {/* Background Atmosphere */}
        <motion.div style={{ scale: atmosScale }} className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
          <div className="absolute w-[800px] h-[800px] bg-[#468A9A] rounded-full mix-blend-screen opacity-[0.06] blur-[100px]" />
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#541212] rounded-full mix-blend-screen opacity-[0.04] blur-[120px]" />
        </motion.div>

        <canvas 
          ref={particleCanvasRef} 
          className="absolute inset-0 w-full h-full z-1 pointer-events-none"
        />

        <motion.div 
          style={{ opacity: heroTextOpacity, y: heroTextY }}
          className="relative z-10 text-center px-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative inline-block"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif tracking-tight text-[#EEEEEE] mb-6 relative z-10 drop-shadow-2xl">
              Yashashree
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl text-[#EEEEEE]/70 font-light mb-12 max-w-2xl mx-auto"
          >
            Every great system begins with curiosity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <button 
              onClick={() => {
                const el = document.getElementById("journey");
                if (el) window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
              }}
              className="group relative px-8 py-4 bg-[#468A9A] border border-white/10 rounded-full overflow-hidden text-[#EEEEEE] font-medium tracking-wide backdrop-blur-sm transition-all hover:bg-[#468A9A]/90 hover:shadow-[0_0_30px_rgba(70,138,154,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore My Universe 
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </span>
            </button>
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {showScrollIndicator && (
            <motion.div 
              className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <ChevronDown className="w-6 h-6 opacity-50 text-[#EEEEEE]" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute bottom-0 left-0 right-0 h-64 z-1 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, #0F0E0E)' }}
        />
      </div>
    </section>
  );
}
