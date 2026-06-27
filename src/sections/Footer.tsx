import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12 overflow-hidden">
      {/* Shooting Star */}
      <div className="absolute top-10 left-0 w-full h-full pointer-events-none opacity-50">
        <div className="absolute top-0 right-1/4 w-[150px] h-[1px] bg-gradient-to-r from-transparent via-[#468A9A] to-white rotate-[-45deg] animate-[shooting-star_5s_linear_infinite]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#EEEEEE]/70 text-lg mb-2 font-serif italic">"Thank you for exploring mine."</p>
          <p className="text-[#EEEEEE] text-xl md:text-2xl font-medium">Let's Build Something Meaningful Together.</p>
        </motion.div>

        <div className="flex justify-between items-end w-full mt-10">
          <div className="text-sm text-[#EEEEEE]/50 font-mono">
            &copy; {new Date().getFullYear()} ASTRA
          </div>

          <div className="group relative cursor-default">
            <span className="text-sm text-[#EEEEEE]/50 transition-opacity group-hover:opacity-0 block">
              Designed & Developed by Yashashree
            </span>
            <span className="text-sm text-[#468A9A] absolute top-0 right-0 opacity-0 transition-opacity group-hover:opacity-100 whitespace-nowrap">
              Made with curiosity ✨
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shooting-star {
          0% {
            transform: translateX(100vw) translateY(-100px) rotate(-45deg);
            opacity: 1;
          }
          10% {
            transform: translateX(-50vw) translateY(500px) rotate(-45deg);
            opacity: 0;
          }
          100% {
            transform: translateX(-50vw) translateY(500px) rotate(-45deg);
            opacity: 0;
          }
        }
      `}</style>
    </footer>
  );
}
