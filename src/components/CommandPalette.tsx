import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Compass, FolderCode, BookOpen, Award, Link as LinkIcon, FileText, Github, Linkedin, Mail } from "lucide-react";

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const navigateTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }
  };

  const executeAction = (action: () => void) => {
    setOpen(false);
    action();
  };

  return (
    <AnimatePresence>
      {open && (
        <Command.Dialog
          open={open}
          onOpenChange={setOpen}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-xl overflow-hidden rounded-xl bg-[#0F0E0E]/95 backdrop-blur-2xl border border-[#468A9A]/20 shadow-2xl flex flex-col"
          >
            <div className="flex items-center px-4 py-3 border-b border-[#468A9A]/30">
              <Search className="w-5 h-5 text-muted-foreground mr-3" />
              <Command.Input
                placeholder="Search the universe..."
                className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <div className="text-xs text-muted-foreground font-mono bg-muted px-2 py-1 rounded">ESC</div>
            </div>

            <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-thin">
              <Command.Empty className="py-6 text-center text-muted-foreground">No results found.</Command.Empty>
              
              <Command.Group heading="Navigation" className="py-2 text-xs font-semibold text-muted-foreground px-2">
                <Command.Item onSelect={() => navigateTo("journey")} className="flex items-center px-3 py-2 mt-1 rounded-md cursor-pointer hover:bg-[#468A9A]/15 hover:text-[#468A9A] hover:border-l-2 hover:border-[#468A9A] data-[selected]:bg-[#468A9A]/15 data-[selected]:text-[#468A9A] data-[selected]:border-l-2 data-[selected]:border-[#468A9A] transition-colors text-sm text-foreground">
                  <Compass className="w-4 h-4 mr-3" /> Journey
                </Command.Item>
                <Command.Item onSelect={() => navigateTo("projects")} className="flex items-center px-3 py-2 mt-1 rounded-md cursor-pointer hover:bg-[#468A9A]/15 hover:text-[#468A9A] hover:border-l-2 hover:border-[#468A9A] data-[selected]:bg-[#468A9A]/15 data-[selected]:text-[#468A9A] data-[selected]:border-l-2 data-[selected]:border-[#468A9A] transition-colors text-sm text-foreground">
                  <FolderCode className="w-4 h-4 mr-3" /> Projects
                </Command.Item>
                <Command.Item onSelect={() => navigateTo("research")} className="flex items-center px-3 py-2 mt-1 rounded-md cursor-pointer hover:bg-[#468A9A]/15 hover:text-[#468A9A] hover:border-l-2 hover:border-[#468A9A] data-[selected]:bg-[#468A9A]/15 data-[selected]:text-[#468A9A] data-[selected]:border-l-2 data-[selected]:border-[#468A9A] transition-colors text-sm text-foreground">
                  <BookOpen className="w-4 h-4 mr-3" /> Research
                </Command.Item>
                <Command.Item onSelect={() => navigateTo("achievements")} className="flex items-center px-3 py-2 mt-1 rounded-md cursor-pointer hover:bg-[#468A9A]/15 hover:text-[#468A9A] hover:border-l-2 hover:border-[#468A9A] data-[selected]:bg-[#468A9A]/15 data-[selected]:text-[#468A9A] data-[selected]:border-l-2 data-[selected]:border-[#468A9A] transition-colors text-sm text-foreground">
                  <Award className="w-4 h-4 mr-3" /> Achievements
                </Command.Item>
              </Command.Group>

              <Command.Group heading="Actions" className="py-2 text-xs font-semibold text-muted-foreground px-2 border-t border-[#468A9A]/20 mt-2">
                <Command.Item onSelect={() => executeAction(() => console.log('Resume Download'))} className="flex items-center px-3 py-2 mt-1 rounded-md cursor-pointer hover:bg-[#468A9A]/15 hover:text-[#468A9A] hover:border-l-2 hover:border-[#468A9A] data-[selected]:bg-[#468A9A]/15 data-[selected]:text-[#468A9A] data-[selected]:border-l-2 data-[selected]:border-[#468A9A] transition-colors text-sm text-foreground">
                  <FileText className="w-4 h-4 mr-3" /> Download Resume
                </Command.Item>
                <Command.Item onSelect={() => executeAction(() => window.open('https://github.com', '_blank'))} className="flex items-center px-3 py-2 mt-1 rounded-md cursor-pointer hover:bg-[#468A9A]/15 hover:text-[#468A9A] hover:border-l-2 hover:border-[#468A9A] data-[selected]:bg-[#468A9A]/15 data-[selected]:text-[#468A9A] data-[selected]:border-l-2 data-[selected]:border-[#468A9A] transition-colors text-sm text-foreground">
                  <Github className="w-4 h-4 mr-3" /> Open GitHub
                </Command.Item>
                <Command.Item onSelect={() => executeAction(() => window.open('https://linkedin.com', '_blank'))} className="flex items-center px-3 py-2 mt-1 rounded-md cursor-pointer hover:bg-[#468A9A]/15 hover:text-[#468A9A] hover:border-l-2 hover:border-[#468A9A] data-[selected]:bg-[#468A9A]/15 data-[selected]:text-[#468A9A] data-[selected]:border-l-2 data-[selected]:border-[#468A9A] transition-colors text-sm text-foreground">
                  <Linkedin className="w-4 h-4 mr-3" /> Open LinkedIn
                </Command.Item>
                <Command.Item onSelect={() => navigateTo("connect")} className="flex items-center px-3 py-2 mt-1 rounded-md cursor-pointer hover:bg-[#468A9A]/15 hover:text-[#468A9A] hover:border-l-2 hover:border-[#468A9A] data-[selected]:bg-[#468A9A]/15 data-[selected]:text-[#468A9A] data-[selected]:border-l-2 data-[selected]:border-[#468A9A] transition-colors text-sm text-foreground">
                  <Mail className="w-4 h-4 mr-3" /> Contact
                </Command.Item>
              </Command.Group>
            </Command.List>
          </motion.div>
        </Command.Dialog>
      )}
    </AnimatePresence>
  );
}
