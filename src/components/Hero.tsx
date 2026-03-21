import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export const Hero = ({ onOpenChat }: { onOpenChat: () => void }) => {
  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-amber-50 border border-amber-100 rounded-full text-amber-700">
            Douglas Araujo • Especialista em IA
          </span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1] text-zinc-900">
            Transformando o futuro com <br />
            <span className="bg-linear-to-r from-amber-500 via-yellow-600 to-orange-500 bg-clip-text text-transparent">
              Inteligência Artificial
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-600 text-lg md:text-xl mb-12 leading-relaxed">
            Soluções personalizadas em engenharia de prompt, automação e criação generativa para elevar seu negócio ao próximo nível.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={onOpenChat}
              className="w-full sm:w-auto px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-full font-semibold flex items-center justify-center gap-2 transition-all group shadow-lg shadow-amber-600/20 cursor-pointer"
            >
              Entrar em Contato
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="#servicos" 
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-900 rounded-full font-semibold transition-all shadow-sm"
            >
              Ver Serviços
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
