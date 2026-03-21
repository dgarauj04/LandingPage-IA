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

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const openChat = () => setIsChatOpen(true);
  const closeChat = () => setIsChatOpen(false);

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-zinc-900 font-sans selection:bg-amber-200">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber-200/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-200/20 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-yellow-200/10 blur-[100px] rounded-full" />
      </div>

      <Navbar onOpenChat={openChat} />
      <Hero onOpenChat={openChat} />
      <Services />
      <Projects />
      <About />
      <Contact onOpenChat={openChat} />
      <CTA onOpenChat={openChat} />
      <Footer />

      <AIChatModal isOpen={isChatOpen} onClose={closeChat} />
    </div>
  );
}

