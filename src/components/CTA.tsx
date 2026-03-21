import { motion } from "framer-motion";

export const CTA = ({ onOpenChat }: { onOpenChat: () => void }) => {
  return (
    <section className="py-24 px-6 bg-yellow-200">
      <div className="max-w-5xl mx-auto rounded-[3rem] bg-amber-600 p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-amber-600/30">
        <div className="absolute top-0 left-0 w-full h-full bg-yellow-600 opacity-50" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">Vamos criar algo incrível?</h2>
          <p className="text-white/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Estou pronto para ajudar você a implementar as melhores soluções de IA para seu projeto ou empresa.
          </p>
          <button 
            onClick={onOpenChat}
            className="inline-block px-10 py-5 bg-white text-amber-700 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl cursor-pointer"
          >
            Entrar em Contato
          </button>
        </motion.div>
      </div>
    </section>
  );
};
