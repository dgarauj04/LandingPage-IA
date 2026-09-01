import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { socialLinks } from "../constants";

export const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.96]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section id="sobre" ref={ref} className="py-28 px-6 bg-zinc-900 border-t border-zinc-800 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-zinc-800 border border-zinc-700 rounded-full text-zinc-500"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
            Quem sou
          </motion.span>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-zinc-100">
            Conectando Tecnologia
            <br />
            <span className="text-zinc-400"> e Criatividade Humana</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
            Olá, eu sou o Douglas Araujo. Minha missão é simplificar a
            complexidade da IA e torná-la uma ferramenta poderosa para criadores
            e empresas. Com foco em engenharia de prompt e automação, ajudo a
            transformar ideias em realidade digital.
          </p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-3 gap-4 mb-10"
          >
            {[
              { label: "Projetos", value: "40+" },
              { label: "Clientes", value: "25+" },
              { label: "Anos Exp.", value: "5+" },
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-2xl bg-zinc-800/50 border border-zinc-700 text-center">
                <div className="text-2xl font-black text-zinc-100 mb-0.5">{stat.value}</div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800 transition-all text-sm font-medium text-zinc-300 shadow-sm"
              >
                <link.icon className="w-4 h-4 text-zinc-400" />
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Image side with parallax */}
        <motion.div
          style={{ scale: imgScale }}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square rounded-3xl overflow-hidden border border-zinc-700 shadow-2xl shadow-black/60"
        >
          <motion.img
            style={{ y: imgY }}
            src="https://picsum.photos/seed/ai-tech-black/800/800?grayscale"
            alt="AI Technology Visualization"
            className="object-cover w-full h-full scale-110 opacity-70"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

          {/* Quote card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-zinc-950/85 backdrop-blur-md border border-zinc-800 shadow-xl"
          >
            <p className="text-sm italic text-zinc-300 leading-relaxed">
              "A inteligência artificial não substitui a criatividade, ela a amplifica."
            </p>
            <div className="mt-3 flex items-center gap-2">
              <div className="w-6 h-px bg-zinc-600" />
              <span className="text-xs text-zinc-600 tracking-wider">Douglas Araujo</span>
            </div>
          </motion.div>

          {/* N.O.V.A badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
            className="absolute top-6 right-6 px-3 py-1.5 bg-zinc-950/90 backdrop-blur border border-zinc-700 rounded-full text-xs text-zinc-400 font-mono tracking-widest"
          >
            N.O.V.A ✦
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
