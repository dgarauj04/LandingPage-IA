import { motion } from "framer-motion";
import { services } from "../constants";

export const Services = () => {
  return (
    <section id="servicos" className="py-24 px-6 relative overflow-hidden bg-yellow-200">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-amber-50/30 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-zinc-900">Serviços Especializados</h2>
          <p className="text-zinc-600 max-w-xl">
            Domínio completo das ferramentas de IA mais avançadas para entregar resultados excepcionais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-white border border-zinc-100 hover:border-amber-300 transition-all group shadow-sm hover:shadow-xl hover:shadow-amber-500/5 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-br from-transparent to-amber-50/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm`}>
                  <service.icon className={`w-7 h-7 ${service.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-zinc-900">{service.title}</h3>
                <p className="text-zinc-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
