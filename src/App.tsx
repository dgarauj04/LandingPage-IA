import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { AIChatModal } from "./components/AIChatModal";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const openChat = () => setIsChatOpen(true);
  const closeChat = () => setIsChatOpen(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-zinc-700 selection:text-white">
      {/* ── Animated Background Layer ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Primary animated orb - top left */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [-20, 20, -20],
            y: [-10, 15, -10],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-15%] left-[-10%] w-[55%] h-[55%] bg-zinc-600/25 blur-[150px] rounded-full"
        />

        {/* Secondary orb - bottom right */}
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.18, 0.1],
            x: [15, -15, 15],
            y: [10, -10, 10],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] bg-zinc-500/20 blur-[160px] rounded-full"
        />

        {/* Accent orb - center */}
        <motion.div
          animate={{
            scale: [0.9, 1.1, 0.9],
            opacity: [0.04, 0.1, 0.04],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[30%] left-[35%] w-[30%] h-[30%] bg-zinc-400/15 blur-[120px] rounded-full"
        />

        {/* Floating micro-orbs */}
        {[
          { className: "top-[10%] right-[25%] w-[15%] h-[15%]", delay: 1 },
          { className: "bottom-[25%] left-[15%] w-[12%] h-[12%]", delay: 5 },
          { className: "top-[55%] right-[5%] w-[10%] h-[10%]", delay: 8 },
        ].map((orb, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.03, 0.08, 0.03], scale: [1, 1.3, 1] }}
            transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut", delay: orb.delay }}
            className={`absolute ${orb.className} bg-zinc-300/10 blur-[80px] rounded-full`}
          />
        ))}

        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: "128px 128px",
          }}
        />
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10">
        <Navbar onOpenChat={openChat} />
        <Hero onOpenChat={openChat} />
        <Services />
        <Projects />
        <About />
        <Contact onOpenChat={openChat} />
        <CTA onOpenChat={openChat} />
        <Footer />
      </div>

      <AIChatModal isOpen={isChatOpen} onClose={closeChat} />

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 150 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-400 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 z-50 transition-colors"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute inset-0 rounded-full animate-ping border-2 border-green-400 opacity-30" />
      </motion.a>
    </div>
  );
}
