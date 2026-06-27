import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Send, Bot } from "lucide-react";

const suggestions = [
  "Tell me about LunaOS",
  "Explain your IEEE paper",
  "Which project are you most proud of?",
  "What technologies do you work with?",
  "Tell me about your research",
  "Why should we hire you?"
];

export function AskMeAnything() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<{role: "user" | "ai", text: string}[]>([
   {
  role: "ai",
  text: "Hi! 👋 I'm Astra, Yashashree's AI portfolio assistant. I can tell you about her projects, research, technical skills, publications, and engineering journey. Try one of the suggested questions below."
}
  ]);

  const handleSubmit = (e: React.FormEvent, text?: string) => {
    e.preventDefault();
    const submitText = text || query;
    if (!submitText.trim()) return;

    setMessages(prev => [...prev, { role: "user", text: submitText }]);
    setQuery("");

    // Simulate AI response
    setTimeout(() => {
   let reply =
  "I'm currently being connected to Astra's knowledge base. Soon I'll be able to answer detailed questions about projects, research, and technical work.";

const q = submitText.toLowerCase();

if (q.includes("who") || q.includes("introduce") || q.includes("about you")) {
  reply =
    "Yashashree Joshi is an AI and Software Engineering student passionate about Operating Systems, Artificial Intelligence, Healthcare Technology, and Research. She enjoys building technology that solves real-world problems while continuously exploring systems programming, machine learning, and intelligent software architecture.";
}

else if (q.includes("project")) {
  reply =
    "Yashashree has built projects across multiple domains including Operating Systems (LunaOS), Healthcare AI (Guardian Intercept Dementia, MindCare AI), Explainable Medical AI, Full-Stack Web Development, and C++ software systems.";
}

else if (q.includes("research")) {
  reply =
    "Her research focuses on Healthcare AI, Explainable Artificial Intelligence, Operating System Architecture, Planetary Data Sonification, and Intelligent Disaster Response Systems. She has also published research through IEEE.";
}

else if (q.includes("ieee") || q.includes("paper") || q.includes("publication")) {
  reply =
    "Yashashree published her first IEEE conference paper at IEEE I2ITCON 2025. The research presents Guardian Intercept Dementia, an intelligent assistive system designed to improve dementia care through AI-powered reminders, geo-fencing, and caregiver support.";
}

else if (q.includes("skill") || q.includes("technology") || q.includes("tech") || q.includes("language")) {
  reply =
    "Her primary technologies include C++, Python, TypeScript, React, FastAPI, PyTorch, Ollama, PHP, MySQL, JavaScript, SQL, Git, Linux, and Operating System development.";
}

else if (q.includes("experience") || q.includes("internship")) {
  reply =
    "She has worked as an AI Research Trainee at Ingnious while actively contributing to research projects, healthcare AI solutions, and open-source learning initiatives.";
}

else if (q.includes("goal") || q.includes("future")) {
  reply =
    "Her long-term goal is to build intelligent systems that genuinely improve people's lives—from operating systems and healthcare AI to research-driven software engineering.";
}

else if (q.includes("hire")) {
  reply =
    "Yashashree combines software engineering, AI, research, and systems programming with a strong passion for solving meaningful real-world problems. She enjoys learning difficult concepts by building practical projects from scratch.";
}
      setMessages(prev => [...prev, { role: "ai", text: reply }]);
    }, 600);
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#468A9A] hover:shadow-[0_0_20px_rgba(70,138,154,0.4)] text-[#EEEEEE] flex items-center justify-center transition-all"
      >
        <Sparkles className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[350px] max-w-[calc(100vw-3rem)] rounded-2xl bg-[#0F0E0E]/92 backdrop-blur-2xl border border-[#468A9A]/20 shadow-2xl overflow-hidden flex flex-col h-[500px] max-h-[60vh]"
          >
            <div className="flex items-center justify-between p-4 border-b border-white/5 bg-[#0F0E0E]/50">
              <div className="flex items-center gap-2 text-[#EEEEEE] font-medium">
                <Bot className="w-5 h-5 text-[#468A9A]" />
                Ask Me Anything
              </div>
              <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-[#EEEEEE]">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.role === "user" ? "bg-[#468A9A] text-[#EEEEEE] rounded-tr-sm" : "bg-[#0F0E0E]/80 text-[#EEEEEE] rounded-tl-sm border border-white/5"}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 border-t border-white/5 bg-[#0F0E0E]/50">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none snap-x">
                {suggestions.map((sug, i) => (
                  <button
                    key={i}
                    onClick={(e) => handleSubmit(e, sug)}
                    className="whitespace-nowrap px-3 py-1.5 rounded-full bg-white/5 border border-[#468A9A]/30 text-xs text-[#EEEEEE]/70 hover:text-[#468A9A] hover:border-[#468A9A] transition-colors snap-start shrink-0"
                  >
                    {sug}
                  </button>
                ))}
              </div>
              <form onSubmit={handleSubmit} className="relative mt-2">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask a question..."
                  className="w-full bg-white/5 border border-white/10 rounded-full pl-4 pr-10 py-2.5 text-sm focus:outline-none focus:border-[#468A9A]/50 text-[#EEEEEE] placeholder:text-[#EEEEEE]/40"
                />
                <button
                  type="submit"
                  disabled={!query.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-[#468A9A] disabled:text-[#468A9A]/40 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
