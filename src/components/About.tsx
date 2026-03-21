import { motion } from "framer-motion";
import { socialLinks } from "../constants";

export const About = () => {
  return (
    <section id="sobre" className="py-24 px-6 bg-yellow-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-zinc-900">
            Conectando Tecnologia e <br /> Criatividade Humana
          </h2>
          <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
            Olá, eu sou o Douglas Araujo. Minha missão é simplificar a complexidade da IA e torná-la uma ferramenta poderosa para criadores e empresas. Com foco em engenharia de prompt e automação, ajudo a transformar ideias em realidade digital.
          </p>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-zinc-200 hover:border-amber-300 hover:bg-amber-50/50 transition-all text-sm font-medium text-zinc-700 shadow-sm"
              >
                <link.icon className="w-4 h-4 text-amber-600" />
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square rounded-3xl overflow-hidden border border-zinc-200 shadow-2xl shadow-amber-500/10"
        >
          <img 
            src="https://picsum.photos/seed/ai-tech/800/800" 
            alt="AI Technology Visualization" 
            className="object-cover w-full h-full opacity-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-t from-white/80 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-amber-100 shadow-lg">
            <p className="text-sm italic text-zinc-800">
              "A inteligência artificial não substitui a criatividade, ela a amplifica."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
