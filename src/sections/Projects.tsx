import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import { X, Github, ExternalLink, Code2 } from "lucide-react";
import { Project } from "../types";

export function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "AI", "Research", "Systems", "Web"];
  
  const filteredProjects = projects.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <section id="projects" className="relative min-h-screen py-24">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
        >
          <div>
            <h2 className="section-heading text-4xl md:text-5xl font-serif mb-4">Projects</h2>
            <div className="w-12 h-1 bg-[#468A9A] rounded-full" />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-[#468A9A] text-[#EEEEEE] border border-[#468A9A] shadow-[0_0_10px_rgba(70,138,154,0.4)]"
                    : "bg-white/5 text-[#EEEEEE]/60 border border-[#468A9A]/30 hover:text-[#EEEEEE] hover:border-[#468A9A]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative glass-card p-6 flex flex-col h-full overflow-hidden cursor-pointer hover:-translate-y-2 transition-all"
                onClick={() => setSelectedProject(project)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#468A9A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <span className="text-xs font-mono text-[#468A9A] bg-[#468A9A]/10 px-2 py-1 rounded">
                    {project.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#468A9A]/20 transition-colors">
                    <Code2 className="w-4 h-4 text-muted-foreground group-hover:text-[#468A9A] transition-colors" />
                  </div>
                </div>

                <h3 className="text-xl font-medium text-[#EEEEEE] mb-3 relative z-10">{project.title}</h3>
                <p className="text-[#EEEEEE]/70 text-sm mb-6 flex-grow relative z-10 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto relative z-10 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs text-[#468A9A] bg-[#468A9A]/10 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-xs text-[#468A9A] bg-[#468A9A]/10 px-2 py-1 rounded">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#0F0E0E]/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-[#0F0E0E]/96 border border-[#468A9A] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col z-10"
            >
              <div className="flex justify-between items-center p-6 border-b border-white/5 bg-[#0F0E0E]/50">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-[#468A9A] bg-[#468A9A]/10 px-2 py-1 rounded">
                    {selectedProject.category}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded border ${
                    selectedProject.status === "Completed" ? "border-white/50 text-[#EEEEEE]" :
                    selectedProject.status === "Active" ? "bg-[#468A9A]/20 border-[#468A9A]/20 text-[#468A9A]" :
                    selectedProject.status === "In Progress" ? "bg-[#468A9A] text-[#EEEEEE] border-transparent" :
                    selectedProject.status === "Research" ? "bg-[#541212]/20 border-transparent text-[#541212]" :
                    "border-[#541212] text-[#541212]" /* Experimental */
                  }`}>
                    {selectedProject.status}
                  </span>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full hover:bg-white/5 text-muted-foreground hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto scrollbar-thin">
                <div className="flex items-center justify-between mb-4 text-xs text-[#EEEEEE]/50 font-mono">
  <span>↑ ↓ Navigate Projects</span>
  <span>✕ Press the close button to exit</span>
</div>
                <h2 className="text-3xl font-serif text-[#EEEEEE] mb-4">{selectedProject.title}</h2>
                <p className="text-lg text-[#EEEEEE]/70 mb-8 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="space-y-8">
                  {selectedProject.problemStatement && (
                    <div>
                      <h4 className="text-sm font-mono text-[#468A9A] mb-2 tracking-wider">01. PROBLEM</h4>
                      <p className="text-[#EEEEEE]/70 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">{selectedProject.problemStatement}</p>
                    </div>
                  )}

                  {selectedProject.architecture && (
                    <div>
                      <h4 className="text-sm font-mono text-[#541212] mb-2 tracking-wider">02. ARCHITECTURE</h4>
                      <p className="text-[#EEEEEE]/70 leading-relaxed">{selectedProject.architecture}</p>
                    </div>
                  )}

                  <div>
                    <h4 className="text-sm font-mono text-[#EEEEEE]/70 mb-3 tracking-wider">KEY FEATURES</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#EEEEEE]/70">
                          <span className="text-[#468A9A] mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {(selectedProject.challenges || selectedProject.learnings) && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/5">
                      {selectedProject.challenges && (
                        <div>
                          <h4 className="text-sm font-semibold text-[#EEEEEE] mb-2">Challenges</h4>
                          <p className="text-sm text-[#EEEEEE]/70">{selectedProject.challenges}</p>
                        </div>
                      )}
                      {selectedProject.learnings && (
                        <div>
                          <h4 className="text-sm font-semibold text-[#EEEEEE] mb-2">Learnings</h4>
                          <p className="text-sm text-[#EEEEEE]/70">{selectedProject.learnings}</p>
                        </div>
                      )}
                    </div>
                  )}

                  <div>
                    <h4 className="text-sm font-mono text-[#EEEEEE]/70 mb-3 tracking-wider">TECH STACK</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map(tech => (
                         <span key={tech} className="px-3 py-1.5 bg-[#468A9A]/10 rounded-full text-sm text-[#468A9A] border border-[#468A9A]/20">
                           {tech}
                         </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-white/5 bg-[#0F0E0E]/50 flex gap-4">
                {selectedProject.github && (
                  <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 flex-1 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-[#EEEEEE] transition-colors border border-white/10 glass-card">
                    <Github className="w-4 h-4" /> View Source
                  </a>
                )}
                {selectedProject.demo && (
                  <a href={selectedProject.demo} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 flex-1 py-3 rounded-xl bg-[#468A9A] hover:bg-[#468A9A]/80 text-[#EEEEEE] transition-colors border border-[#468A9A] shadow-lg">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
