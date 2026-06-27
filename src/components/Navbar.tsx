import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Journey", id: "journey" },
  { name: "Projects", id: "projects" },
  { name: "Research", id: "research" },
  { name: "Achievements", id: "achievements" },
  { name: "Connect", id: "connect" }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = links.map(l => document.getElementById(l.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActive(links[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-[rgba(15,14,14,0.85)] backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-white/8'
          : 'bg-[rgba(15,14,14,0.5)] backdrop-blur-xl border border-white/5'
      } px-6 py-3 rounded-2xl w-auto flex items-center gap-6`}
    >
      <div className="font-serif text-xl font-bold tracking-wider text-[#EEEEEE]">
        Y<span className="text-[#468A9A]">.</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-1 relative">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            className="relative px-4 py-2 text-sm font-medium transition-colors group"
          >
            {active === link.id && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 rounded-full"
                style={{ background: 'rgba(70,138,154,0.12)', border: '1px solid rgba(70,138,154,0.25)', boxShadow: '0 0 16px rgba(70,138,154,0.15)' }}
                transition={{ type: 'spring', stiffness: 400, damping: 35 }}
              />
            )}
            <span className={`relative z-10 ${active === link.id ? 'text-[#EEEEEE]' : 'text-[#EEEEEE]/50 group-hover:text-[#468A9A]'} transition-colors duration-200`}>
              {link.name}
            </span>
          </button>
        ))}
      </div>
      
      <div className="md:hidden text-muted-foreground text-sm font-mono">
        [MENU]
      </div>
    </motion.nav>
  );
}
