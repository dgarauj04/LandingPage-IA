import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export const Navbar = ({ onOpenChat }: { onOpenChat: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 40);
  });

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-xl shadow-lg shadow-black/30"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-bold tracking-tighter text-zinc-100"
        >
          daraujodb<span className="text-zinc-500">.dev</span>
        </motion.div>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          {[
            { href: "#servicos", label: "Serviços" },
            { href: "#servicos-destaque", label: "Destaque" },
            { href: "#sobre", label: "Sobre" },
            { href: "#contato", label: "Contato" },
          ].map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="hover:text-zinc-100 transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-zinc-400 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}

          <motion.button
            onClick={onOpenChat}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 150 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2.5 bg-zinc-100 text-zinc-950 rounded-full hover:bg-white transition-colors cursor-pointer font-bold shadow-md shadow-white/10 tracking-wide"
          >
            Falar com N.O.V.A
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};
