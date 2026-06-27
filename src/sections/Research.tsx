import { motion } from "framer-motion";
import { research } from "../data/research";
import { FileText, Github, MonitorPlay, Image as ImageIcon } from "lucide-react";

export function Research() {
  return (
    <section id="research" className="relative min-h-screen py-24 overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="section-heading text-4xl md:text-5xl font-serif mb-4">Research</h2>
          <div className="w-12 h-1 bg-[#468A9A] rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {research.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative glass-card p-6 md:p-8 hover:border-[#541212]/20"
              style={{ boxShadow: '0 0 60px rgba(84,18,18,0.05)' }}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="px-3 py-1 bg-[#541212]/20 text-[#EEEEEE] border border-[#541212]/20 rounded-full text-xs font-mono font-medium tracking-wide">
                      {item.conference}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-medium text-[#EEEEEE] group-hover:text-[#468A9A] transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-[#EEEEEE]/70 leading-relaxed text-sm md:text-base">
                    {item.abstract}
                  </p>
                </div>

                <div className="flex flex-row md:flex-col gap-3 shrink-0">
                  <ActionButton 
                    href={item.pdfUrl} 
                    icon={FileText} 
                    label="Paper PDF" 
                    active={!!item.pdfUrl} 
                  />
                  <ActionButton 
                    href={item.github} 
                    icon={Github} 
                    label="Code" 
                    active={!!item.github} 
                  />
                  <ActionButton 
                    href={item.presentation} 
                    icon={MonitorPlay} 
                    label="Slides" 
                    active={!!item.presentation} 
                  />
                  <ActionButton 
                    href={item.poster} 
                    icon={ImageIcon} 
                    label="Poster" 
                    active={!!item.poster} 
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ActionButton({ href, icon: Icon, label, active }: { href?: string, icon: any, label: string, active: boolean }) {
  if (!active) {
    return (
      <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-[#EEEEEE]/30 text-sm cursor-not-allowed border border-transparent">
        <Icon className="w-4 h-4" />
        <span className="hidden md:inline">{label}</span>
      </div>
    );
  }

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-[#468A9A]/10 text-[#EEEEEE]/70 hover:text-[#468A9A] transition-colors border border-[#468A9A] text-sm group/btn"
    >
      <Icon className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
      <span className="hidden md:inline">{label}</span>
    </a>
  );
}
