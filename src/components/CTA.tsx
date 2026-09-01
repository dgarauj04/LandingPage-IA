import { motion } from "framer-motion";

export const CTA = ({ onOpenChat }: { onOpenChat: () => void }) => {
  return (
    <section className="py-24 px-6 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto rounded-[3rem] bg-zinc-900 border border-zinc-800 p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-black/50">
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-zinc-800/30 to-transparent pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-zinc-100">Vamos criar algo incrível?</h2>
          <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Estou pronto para ajudar você a implementar as melhores soluções de IA para seu projeto ou empresa.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={onOpenChat}
              className="px-10 py-5 bg-zinc-100 text-zinc-950 rounded-full font-bold text-lg hover:bg-white hover:scale-105 transition-all shadow-xl cursor-pointer"
            >
              Falar com IA
            </button>
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-zinc-950 text-zinc-100 border border-zinc-700 rounded-full font-bold text-lg hover:bg-zinc-800 hover:scale-105 transition-all shadow-xl cursor-pointer"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
