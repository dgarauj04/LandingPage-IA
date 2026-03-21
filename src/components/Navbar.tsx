import { motion } from "framer-motion";

export const Navbar = ({ onOpenChat }: { onOpenChat: () => void }) => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-zinc-200 bg-white/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter"
        >
          daraujodb<span className="text-amber-600">.dev</span>
        </motion.div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
          <a href="#servicos" className="hover:text-amber-600 transition-colors">Serviços</a>
          <a href="#projetos" className="hover:text-amber-600 transition-colors">Projetos</a>
          <a href="#sobre" className="hover:text-amber-600 transition-colors">Sobre</a>
          <button 
            onClick={onOpenChat}
            className="px-5 py-2 bg-zinc-900 text-white rounded-full hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            Contato
          </button>
        </div>
      </div>
    </nav>
  );
};
