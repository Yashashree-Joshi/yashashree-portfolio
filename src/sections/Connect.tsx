import { motion } from "framer-motion";
import { Mail, Github, Linkedin, FileText, Code, Network } from "lucide-react";

const links = [
  { id: "email", icon: Mail, label: "Email", handle: "hello@yashashree.ai", url: "mailto:hello@example.com" },
  { id: "github", icon: Github, label: "GitHub", handle: "@yashashree", url: "https://github.com" },
  { id: "linkedin", icon: Linkedin, label: "LinkedIn", handle: "/in/yashashree", url: "https://linkedin.com" },
  { id: "resume", icon: FileText, label: "Resume", handle: "View PDF", url: "#" },
  { id: "leetcode", icon: Code, label: "LeetCode", handle: "@yashashree_codes", url: "https://leetcode.com" },
  { id: "kaggle", icon: Network, label: "Kaggle", handle: "@yashashree_ml", url: "https://kaggle.com" },
];

export function Connect() {
  return (
    <section id="connect" className="relative py-24 mb-20">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading text-4xl md:text-5xl font-serif mb-4">Mission Control</h2>
          <div className="w-12 h-1 bg-[#468A9A] mx-auto rounded-full mb-6" />
          <p className="text-[#EEEEEE]/70 max-w-2xl mx-auto">
            Ready to initiate a new sequence. Establish a secure connection through any of the channels below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {links.map((link, i) => (
            <motion.a
              key={link.id}
              href={link.url}
              target={link.url.startsWith('http') ? "_blank" : "_self"}
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group flex items-center p-6 glass-card transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-4 group-hover:bg-[#468A9A]/20 transition-colors">
                <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-[#468A9A] transition-colors" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-[#EEEEEE]/70 group-hover:text-[#EEEEEE] transition-colors">{link.label}</h3>
                <p className="text-sm font-mono text-[#EEEEEE]/50 group-hover:text-[#468A9A]/80 transition-colors mt-1">{link.handle}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
