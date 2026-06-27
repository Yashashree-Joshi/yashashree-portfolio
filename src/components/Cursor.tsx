import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useMousePosition } from "../hooks/useMousePosition";

type Star = {
  id: number;
  x: number;
  y: number;
  createdAt: number;
  isBurgundy: boolean;
};

export function Cursor() {
  const [stars, setStars] = useState<Star[]>([]);
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    cursorX.set(x - 7);
    cursorY.set(y - 7);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (window.getComputedStyle(target).cursor === 'pointer' || target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button') {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    
    // Create trail
    if (x !== 0 && y !== 0 && !isHovering) {
      if (Math.random() > 0.3) {
        const newStar = { id: Date.now(), x, y, createdAt: Date.now(), isBurgundy: Math.random() < 0.2 };
        setStars((prev) => [...prev.slice(-7), newStar]);
      }
    }

    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [x, y, cursorX, cursorY, isHovering]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStars((prev) => prev.filter((star) => Date.now() - star.createdAt < 800));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Hide on mobile or reduced motion
  if (typeof window !== "undefined") {
    if (window.innerWidth < 768 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return null;
    }
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-50 pointer-events-none mix-blend-screen"
        style={{ x: cursorXSpring, y: cursorYSpring }}
      >
        <div className={`w-[14px] h-[14px] rounded-full border border-[#468A9A]/50 flex items-center justify-center transition-all duration-300 ${isHovering ? 'scale-150 bg-[#468A9A]/20 backdrop-blur-sm' : 'scale-100'}`}>
          <div className="w-1 h-1 bg-[#468A9A] rounded-full shadow-[0_0_10px_3px_rgba(70,138,154,0.8)]" />
        </div>
      </motion.div>

      {stars.map((star) => (
        <motion.div
          key={star.id}
          className={`fixed top-0 left-0 w-1 h-1 ${star.isBurgundy ? 'bg-[#541212]' : 'bg-[#468A9A]/40'} rounded-full pointer-events-none z-40`}
          initial={{ x: star.x - 2, y: star.y - 2, opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={star.isBurgundy ? { boxShadow: '0 0 4px rgba(84,18,18,0.6)' } : {}}
        />
      ))}
    </>
  );
}
