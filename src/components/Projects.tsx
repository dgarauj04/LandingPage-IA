import { motion } from "framer-motion";
import { projects } from "../constants";

export const Projects = () => {
  return (
    <section id="projetos" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-t from-orange-50/20 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-zinc-900">Projetos em Destaque</h2>
          <p className="text-zinc-600 max-w-xl">
            Uma seleção de trabalhos recentes onde a IA foi a protagonista na resolução de problemas reais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-white border border-zinc-100 shadow-sm hover:shadow-xl hover:shadow-amber-500/10 transition-all hover:border-amber-200"
            >
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-linear-to-t from-amber-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 relative">
                <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-2 text-zinc-900 group-hover:text-amber-700 transition-colors">{project.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
