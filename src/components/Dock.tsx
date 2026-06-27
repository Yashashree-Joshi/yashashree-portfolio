import { useState } from "react";
import { motion } from "framer-motion";
import { Compass, FolderCode, BookOpen, Award, Link as LinkIcon } from "lucide-react";

const items = [
  { id: "journey", icon: Compass, label: "Journey" },
  { id: "projects", icon: FolderCode, label: "Projects" },
  { id: "research", icon: BookOpen, label: "Research" },
  { id: "achievements", icon: Award, label: "Achievements" },
  { id: "connect", icon: LinkIcon, label: "Connect" },
];

export function Dock() {
  const [hovered, setHovered] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden md:block">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex items-center gap-2 p-2 rounded-2xl bg-[#0F0E0E]/80 backdrop-blur-xl border border-white/5 shadow-2xl"
      >
        {items.map((item) => {
          const isHovered = hovered === item.id;
          
          return (
            <motion.button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              animate={{
                scale: isHovered ? 1.3 : 1,
                y: isHovered ? -10 : 0,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className={`relative p-3 rounded-xl bg-background/50 border border-white/5 transition-colors flex items-center justify-center group ${isHovered ? "text-[#468A9A]" : "text-[#EEEEEE]/50"}`}
            >
              <item.icon size={20} className={isHovered ? "drop-shadow-[0_0_8px_#468A9A]" : ""} />
              
              {isHovered && (
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-card border border-border rounded text-xs text-foreground whitespace-nowrap"
                >
                  {item.label}
                </motion.span>
              )}
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
}
