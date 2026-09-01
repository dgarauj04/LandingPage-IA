import { motion, type Variants } from "framer-motion";
import { services } from "../constants";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 60, damping: 18 }
  }
};

export const Services = () => {
  return (
    <section id="servicos" className="py-28 px-6 relative overflow-hidden bg-zinc-950 border-t border-zinc-900">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] opacity-[0.015]"
          style={{
            background: "conic-gradient(from 0deg, transparent 0deg, white 1deg, transparent 2deg)"
          }}
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-transparent via-zinc-900/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-zinc-900 border border-zinc-800 rounded-full text-zinc-500"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
            O que ofereço
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-5 text-zinc-100">
            Serviços Especializados
          </h2>
          <p className="text-zinc-400 max-w-xl text-lg leading-relaxed">
            Domínio completo das ferramentas de IA mais avançadas para entregar
            resultados excepcionais e soluções escaláveis.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="p-8 rounded-3xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-600 transition-all duration-400 group shadow-sm hover:shadow-2xl hover:shadow-black/60 relative overflow-hidden cursor-default"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-linear-to-br from-zinc-800/40 to-transparent" />
              </div>
              <div className="absolute top-6 right-6 text-4xl font-black text-zinc-800 group-hover:text-zinc-700 transition-colors select-none">
                {String(idx + 1).padStart(2, "0")}
              </div>

              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-6 shadow-sm`}
                >
                  <service.icon className={`w-7 h-7 ${service.color}`} />
                </motion.div>

                <h3 className="text-xl font-bold mb-3 text-zinc-100 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-500 leading-relaxed text-sm group-hover:text-zinc-400 transition-colors">
                  {service.description}
                </p>

                <div className="mt-6 h-px bg-zinc-800 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-linear-to-r from-zinc-600 to-transparent"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "60%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + idx * 0.1 }}
                  />
                </div>
              </div>

              <div className="absolute bottom-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="w-full h-full bg-linear-to-tl from-zinc-700/20 to-transparent rounded-tl-3xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
