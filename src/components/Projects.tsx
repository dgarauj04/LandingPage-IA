import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Brain, Workflow, Code, Lightbulb, Gauge, Settings } from "lucide-react";

/* ── Animated SVG Thumbnails ── */
const ThumbnailBrain = () => (
  <svg viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <radialGradient id="bg1" cx="50%" cy="50%" r="70%">
        <stop offset="0%" stopColor="#1c1c1c" />
        <stop offset="100%" stopColor="#0a0a0a" />
      </radialGradient>
      <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </radialGradient>
      <filter id="blur1">
        <feGaussianBlur stdDeviation="3" />
      </filter>
    </defs>
    <rect width="600" height="360" fill="url(#bg1)" />
    <ellipse cx="300" cy="180" rx="200" ry="130" fill="url(#glow1)" />
    {/* Neural nodes */}
    {[
      [300,180],[180,100],[420,100],[150,220],[450,220],[260,290],[340,290],
      [100,150],[500,150],[230,60],[370,60]
    ].map(([cx,cy], i) => (
      <g key={i}>
        <circle cx={cx} cy={cy} r="5" fill="#e4e4e7" opacity="0.9">
          <animate attributeName="opacity" values="0.9;0.4;0.9" dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" />
          <animate attributeName="r" values="5;7;5" dur={`${1.8 + i * 0.2}s`} repeatCount="indefinite" />
        </circle>
        <circle cx={cx} cy={cy} r="12" fill="#ffffff" opacity="0.05" filter="url(#blur1)">
          <animate attributeName="r" values="12;20;12" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
        </circle>
      </g>
    ))}
    {/* Connections */}
    {[
      [300,180,180,100],[300,180,420,100],[300,180,150,220],[300,180,450,220],
      [180,100,100,150],[420,100,500,150],[180,100,230,60],[420,100,370,60],
      [150,220,260,290],[450,220,340,290],[260,290,340,290]
    ].map(([x1,y1,x2,y2], i) => (
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#71717a" strokeWidth="1" opacity="0.4">
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur={`${2 + i * 0.25}s`} repeatCount="indefinite" />
      </line>
    ))}
    {/* Data pulse animations */}
    {[
      [300,180,180,100],[300,180,420,100],[300,180,150,220]
    ].map(([x1,y1,x2,y2], i) => (
      <circle key={i} r="3" fill="#ffffff" opacity="0.8">
        <animateMotion dur={`${1.5 + i * 0.5}s`} repeatCount="indefinite">
          <mpath href={`#path${i}`} />
        </animateMotion>
      </circle>
    ))}
    <text x="300" y="345" textAnchor="middle" fill="#52525b" fontSize="11" fontFamily="monospace" letterSpacing="4">NEURAL NETWORK • DEEP LEARNING</text>
  </svg>
);

const ThumbnailWorkflow = () => (
  <svg viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <radialGradient id="bg2" cx="30%" cy="50%" r="80%">
        <stop offset="0%" stopColor="#18181b" />
        <stop offset="100%" stopColor="#09090b" />
      </radialGradient>
      <filter id="blur2">
        <feGaussianBlur stdDeviation="4" />
      </filter>
    </defs>
    <rect width="600" height="360" fill="url(#bg2)" />
    {/* Workflow boxes */}
    {[
      { x: 40, y: 140, label: "INPUT", w: 100, h: 50 },
      { x: 200, y: 80, label: "PROCESS A", w: 120, h: 50 },
      { x: 200, y: 200, label: "PROCESS B", w: 120, h: 50 },
      { x: 390, y: 140, label: "OUTPUT", w: 100, h: 50 },
      { x: 200, y: 290, label: "LOG", w: 80, h: 40 },
    ].map((box, i) => (
      <g key={i}>
        <rect x={box.x} y={box.y} width={box.w} height={box.h} rx="8" fill="#27272a" stroke="#3f3f46" strokeWidth="1.5">
          <animate attributeName="stroke" values="#3f3f46;#71717a;#3f3f46" dur={`${2+i*0.4}s`} repeatCount="indefinite" />
        </rect>
        <text x={box.x + box.w/2} y={box.y + box.h/2 + 4} textAnchor="middle" fill="#a1a1aa" fontSize="9" fontFamily="monospace" letterSpacing="1">{box.label}</text>
      </g>
    ))}
    {/* Arrows */}
    {[
      [140,165,200,105],[140,165,200,225],[320,105,390,155],[320,225,390,165],[240,250,240,290]
    ].map(([x1,y1,x2,y2], i) => (
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#52525b" strokeWidth="1.5" markerEnd="url(#arrow)" opacity="0.7" />
    ))}
    <defs>
      <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
        <path d="M 0 0 L 6 3 L 0 6 z" fill="#52525b" />
      </marker>
    </defs>
    {/* Moving data packets */}
    <circle r="4" fill="#e4e4e7" opacity="0.9">
      <animateMotion dur="2.5s" repeatCount="indefinite" path="M140,165 L200,105 L320,105 L390,155" />
    </circle>
    <circle r="3" fill="#a1a1aa" opacity="0.7">
      <animateMotion dur="3s" repeatCount="indefinite" begin="1s" path="M140,165 L200,225 L320,225 L390,165" />
    </circle>
    {/* Scan line */}
    <rect x="0" y="0" width="600" height="2" fill="#ffffff" opacity="0.03">
      <animate attributeName="y" values="0;360;0" dur="4s" repeatCount="indefinite" />
    </rect>
    <text x="300" y="345" textAnchor="middle" fill="#52525b" fontSize="11" fontFamily="monospace" letterSpacing="4">AUTOMATION • WORKFLOW ENGINE</text>
  </svg>
);

const ThumbnailCode = () => (
  <svg viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <radialGradient id="bg3" cx="70%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#1c1c1c" />
        <stop offset="100%" stopColor="#09090b" />
      </radialGradient>
    </defs>
    <rect width="600" height="360" fill="url(#bg3)" />
    {/* Code window */}
    <rect x="60" y="40" width="480" height="280" rx="12" fill="#18181b" stroke="#27272a" strokeWidth="1.5" />
    {/* Window buttons */}
    <circle cx="88" cy="65" r="6" fill="#3f3f46" />
    <circle cx="108" cy="65" r="6" fill="#3f3f46" />
    <circle cx="128" cy="65" r="6" fill="#3f3f46" />
    <line x1="60" y1="82" x2="540" y2="82" stroke="#27272a" strokeWidth="1" />
    {/* Code lines */}
    {[
      { y: 108, w: 180, color: "#a1a1aa", indent: 0 },
      { y: 128, w: 140, color: "#71717a", indent: 20 },
      { y: 148, w: 220, color: "#d4d4d8", indent: 40 },
      { y: 168, w: 160, color: "#a1a1aa", indent: 40 },
      { y: 188, w: 240, color: "#71717a", indent: 40 },
      { y: 208, w: 130, color: "#d4d4d8", indent: 20 },
      { y: 228, w: 90, color: "#a1a1aa", indent: 0 },
      { y: 248, w: 200, color: "#52525b", indent: 0 },
      { y: 268, w: 150, color: "#71717a", indent: 20 },
      { y: 288, w: 110, color: "#3f3f46", indent: 0 },
    ].map((line, i) => (
      <rect key={i} x={88 + line.indent} y={line.y} width={line.w} height="8" rx="2" fill={line.color} opacity="0.6">
        <animate attributeName="opacity" values="0.6;1;0.6" dur={`${3 + i * 0.2}s`} repeatCount="indefinite" begin={`${i * 0.1}s`} />
      </rect>
    ))}
    {/* Cursor blink */}
    <rect x="88" y="308" width="2" height="12" fill="#e4e4e7" opacity="0.8">
      <animate attributeName="opacity" values="0.8;0;0.8" dur="1s" repeatCount="indefinite" />
    </rect>
    {/* Side decorations */}
    <rect x="520" y="100" width="20" height="3" rx="1.5" fill="#3f3f46">
      <animate attributeName="y" values="100;280;100" dur="5s" repeatCount="indefinite" />
    </rect>
    <text x="300" y="345" textAnchor="middle" fill="#52525b" fontSize="11" fontFamily="monospace" letterSpacing="4">API INTEGRATION • CODE</text>
  </svg>
);

const ThumbnailConsultoria = () => (
  <svg viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <radialGradient id="bg4" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stopColor="#1a1a1a" />
        <stop offset="100%" stopColor="#0a0a0a" />
      </radialGradient>
    </defs>
    <rect width="600" height="360" fill="url(#bg4)" />
    {/* Chart bars */}
    {[60, 90, 45, 110, 75, 130, 95, 140, 120].map((h, i) => (
      <g key={i}>
        <rect
          x={80 + i * 52}
          y={260 - h}
          width="36"
          height={h}
          rx="4"
          fill="#27272a"
          stroke="#3f3f46"
          strokeWidth="1"
        >
          <animate attributeName="height" values={`0;${h};${h}`} dur="1.5s" begin={`${i*0.15}s`} fill="freeze" />
          <animate attributeName="y" values={`260;${260-h};${260-h}`} dur="1.5s" begin={`${i*0.15}s`} fill="freeze" />
        </rect>
        <rect x={80 + i * 52} y={260 - h} width="36" height="4" rx="2" fill="#71717a" opacity="0.8">
          <animate attributeName="opacity" values="0.8;1;0.8" dur={`${2+i*0.2}s`} repeatCount="indefinite" />
        </rect>
      </g>
    ))}
    {/* Trend line */}
    <polyline
      points="98,220 150,190 202,235 254,170 306,205 358,150 410,175 462,140 514,155"
      fill="none"
      stroke="#a1a1aa"
      strokeWidth="2"
      strokeDasharray="4 4"
      opacity="0.6"
    />
    {/* X axis */}
    <line x1="70" y1="260" x2="540" y2="260" stroke="#27272a" strokeWidth="1.5" />
    <line x1="70" y1="100" x2="70" y2="260" stroke="#27272a" strokeWidth="1.5" />
    <text x="300" y="345" textAnchor="middle" fill="#52525b" fontSize="11" fontFamily="monospace" letterSpacing="4">STRATEGY • GROWTH ANALYTICS</text>
  </svg>
);

const ThumbnailOptimizacao = () => (
  <svg viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <radialGradient id="bg5" cx="50%" cy="50%" r="65%">
        <stop offset="0%" stopColor="#1c1c1c" />
        <stop offset="100%" stopColor="#080808" />
      </radialGradient>
    </defs>
    <rect width="600" height="360" fill="url(#bg5)" />
    {/* Concentric circles - performance rings */}
    {[120, 95, 70, 45, 20].map((r, i) => (
      <circle key={i} cx="200" cy="180" r={r} fill="none" stroke="#27272a" strokeWidth="1" opacity={0.8 - i * 0.1}>
        <animate attributeName="r" values={`${r};${r+3};${r}`} dur={`${2+i*0.5}s`} repeatCount="indefinite" />
      </circle>
    ))}
    {/* Gauge needle */}
    <line x1="200" y1="180" x2="200" y2="75" stroke="#d4d4d8" strokeWidth="2" strokeLinecap="round">
      <animateTransform attributeName="transform" type="rotate" from="-60 200 180" to="60 200 180" dur="3s" repeatCount="indefinite" direction="alternate" />
    </line>
    <circle cx="200" cy="180" r="8" fill="#3f3f46" stroke="#71717a" strokeWidth="1.5" />
    {/* Speed labels */}
    {["0", "25", "50", "75", "100"].map((label, i) => {
      const angle = (-90 + i * 45) * Math.PI / 180;
      return (
        <text key={i} x={200 + 135 * Math.cos(angle)} y={180 + 135 * Math.sin(angle) + 4}
          textAnchor="middle" fill="#52525b" fontSize="10" fontFamily="monospace">{label}</text>
      );
    })}
    {/* Stats on right */}
    {[
      { label: "LATENCY", val: "12ms", y: 80 },
      { label: "TOKENS/S", val: "4.2K", y: 120 },
      { label: "ACCURACY", val: "99.1%", y: 160 },
      { label: "COST", val: "-68%", y: 200 },
    ].map((stat, i) => (
      <g key={i}>
        <rect x="380" y={stat.y - 14} width="160" height="28" rx="6" fill="#18181b" stroke="#27272a" strokeWidth="1" />
        <text x="395" y={stat.y + 4} fill="#52525b" fontSize="8" fontFamily="monospace" letterSpacing="1">{stat.label}</text>
        <text x="520" y={stat.y + 4} textAnchor="end" fill="#d4d4d8" fontSize="11" fontFamily="monospace" fontWeight="bold">{stat.val}</text>
      </g>
    ))}
    <text x="300" y="345" textAnchor="middle" fill="#52525b" fontSize="11" fontFamily="monospace" letterSpacing="4">FINE-TUNING • PROMPT ENGINEERING</text>
  </svg>
);

const ThumbnailTreinamento = () => (
  <svg viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <radialGradient id="bg6" cx="40%" cy="40%" r="70%">
        <stop offset="0%" stopColor="#1a1a1a" />
        <stop offset="100%" stopColor="#0a0a0a" />
      </radialGradient>
    </defs>
    <rect width="600" height="360" fill="url(#bg6)" />
    {/* People icons */}
    {[
      { x: 100, y: 120 }, { x: 200, y: 100 }, { x: 300, y: 120 },
      { x: 150, y: 200 }, { x: 250, y: 200 },
    ].map((pos, i) => (
      <g key={i}>
        <circle cx={pos.x} cy={pos.y} r="18" fill="#27272a" stroke="#3f3f46" strokeWidth="1.5">
          <animate attributeName="stroke" values="#3f3f46;#71717a;#3f3f46" dur={`${2+i*0.3}s`} repeatCount="indefinite" />
        </circle>
        <circle cx={pos.x} cy={pos.y - 6} r="7" fill="#3f3f46" />
        <ellipse cx={pos.x} cy={pos.y + 8} rx="10" ry="6" fill="#3f3f46" />
      </g>
    ))}
    {/* Connection to central AI */}
    {[
      [100,120],[200,100],[300,120],[150,200],[250,200]
    ].map(([x,y], i) => (
      <line key={i} x1={x} y1={y} x2="450" y2="160" stroke="#3f3f46" strokeWidth="1" strokeDasharray="4 4">
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur={`${1.5+i*0.3}s`} repeatCount="indefinite" />
      </line>
    ))}
    {/* Central AI node */}
    <circle cx="450" cy="160" r="50" fill="#18181b" stroke="#3f3f46" strokeWidth="2">
      <animate attributeName="stroke" values="#3f3f46;#71717a;#3f3f46" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="450" cy="160" r="40" fill="none" stroke="#27272a" strokeWidth="1" />
    <text x="450" y="155" textAnchor="middle" fill="#a1a1aa" fontSize="9" fontFamily="monospace" letterSpacing="1">NOVA</text>
    <text x="450" y="170" textAnchor="middle" fill="#52525b" fontSize="8" fontFamily="monospace">ENGINE</text>
    {/* Progress bars */}
    {[
      { label: "Python", pct: 85, y: 270 },
      { label: "Prompt Eng", pct: 92, y: 295 },
      { label: "LLM APIs", pct: 78, y: 320 },
    ].map((bar, i) => (
      <g key={i}>
        <text x="60" y={bar.y + 4} fill="#52525b" fontSize="9" fontFamily="monospace">{bar.label}</text>
        <rect x="160" y={bar.y - 5} width="220" height="8" rx="4" fill="#1c1c1c" />
        <rect x="160" y={bar.y - 5} width={220 * bar.pct / 100} height="8" rx="4" fill="#3f3f46">
          <animate attributeName="width" values={`0;${220 * bar.pct / 100}`} dur="2s" begin={`${i*0.3}s`} fill="freeze" />
        </rect>
        <text x="390" y={bar.y + 4} fill="#71717a" fontSize="9" fontFamily="monospace">{bar.pct}%</text>
      </g>
    ))}
    <text x="300" y="350" textAnchor="middle" fill="#52525b" fontSize="11" fontFamily="monospace" letterSpacing="4">CAPACITAÇÃO • AI LITERACY</text>
  </svg>
);

const FEATURED_SERVICES = [
  {
    title: "Criação de IA",
    category: "Desenvolvimento",
    description: "Desenvolvimento de modelos e soluções personalizadas de inteligência artificial para o seu negócio com arquitetura de ponta.",
    icon: Brain,
    Thumbnail: ThumbnailBrain,
    tag: "Deep Learning"
  },
  {
    title: "Automação de Processos",
    category: "Automação",
    description: "Workflows inteligentes e automação de processos para escalar a operação de sua empresa com máxima eficiência.",
    icon: Workflow,
    Thumbnail: ThumbnailWorkflow,
    tag: "Workflow Engine"
  },
  {
    title: "Implementação de APIs",
    category: "Integração",
    description: "Integração contínua de APIs e sistemas avançados de IA dentro da sua arquitetura atual de software.",
    icon: Code,
    Thumbnail: ThumbnailCode,
    tag: "Full-Stack AI"
  },
  {
    title: "Consultoria Estratégica",
    category: "Estratégia",
    description: "Direcionamento estratégico para adoção de IA e transformação digital corporativa com roadmap personalizado.",
    icon: Lightbulb,
    Thumbnail: ThumbnailConsultoria,
    tag: "Growth"
  },
  {
    title: "Otimização de LLMs",
    category: "Performance",
    description: "Fine-tuning e engenharia de prompt para extrair o máximo potencial de modelos reduzindo custos computacionais.",
    icon: Gauge,
    Thumbnail: ThumbnailOptimizacao,
    tag: "Fine-Tuning"
  },
  {
    title: "Treinamento de Equipes",
    category: "Capacitação",
    description: "Capacitação de equipes para utilização de ferramentas generativas e LLMs no dia a dia da operação.",
    icon: Settings,
    Thumbnail: ThumbnailTreinamento,
    tag: "AI Literacy"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 55, damping: 18 }
  }
};

export const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const smoothBgY = useSpring(bgY, { stiffness: 50, damping: 20 });

  return (
    <section
      ref={sectionRef}
      id="servicos-destaque"
      className="py-28 px-6 relative overflow-hidden bg-zinc-950"
    >
      {/* Animated parallax background grid */}
      <motion.div
        style={{ y: smoothBgY }}
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="featGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#featGrid)" />
        </svg>
      </motion.div>

      {/* Glowing orbs */}
      <motion.div style={{ opacity }}
        className="absolute pointer-events-none inset-0"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zinc-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-zinc-500/8 rounded-full blur-[120px]" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
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
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-pulse" />
            Powered by N.O.V.A
          </motion.span>

          <h2 className="text-4xl md:text-6xl font-bold mb-5 text-zinc-100 leading-tight">
            Serviços em{" "}
            <span className="bg-linear-to-r from-zinc-300 via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              Destaque
            </span>
          </h2>
          <p className="text-zinc-400 max-w-2xl text-lg leading-relaxed">
            Soluções de IA de ponta a ponta — da concepção estratégica à implementação técnica —
            cada serviço entregue com excelência e resultados mensuráveis.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FEATURED_SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="group relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-zinc-600 shadow-sm hover:shadow-2xl hover:shadow-black/60 transition-all duration-500 cursor-default"
            >
              {/* Thumbnail area */}
              <div className="relative aspect-video overflow-hidden bg-zinc-950">
                {/* Animated gradient overlay on hover */}
                <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-zinc-900/40 to-transparent z-10 group-hover:from-zinc-950/90 group-hover:via-zinc-900/20 transition-all duration-500" />

                {/* SVG Thumbnail */}
                <div className="w-full h-full scale-100 group-hover:scale-105 transition-transform duration-700">
                  <service.Thumbnail />
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 text-xs font-semibold tracking-widest uppercase bg-zinc-950/80 backdrop-blur-sm border border-zinc-700 rounded-full text-zinc-400 group-hover:border-zinc-500 group-hover:text-zinc-300 transition-colors">
                    {service.tag}
                  </span>
                </div>

                {/* Icon overlay */}
                <div className="absolute bottom-4 right-4 z-20">
                  <div className="w-10 h-10 rounded-2xl bg-zinc-950/80 backdrop-blur-sm border border-zinc-700 flex items-center justify-center group-hover:border-zinc-500 transition-colors">
                    <service.icon className="w-5 h-5 text-zinc-300" />
                  </div>
                </div>
              </div>

              {/* Card content */}
              <div className="p-6">
                <span className="text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-2 block group-hover:text-zinc-400 transition-colors">
                  {service.category}
                </span>
                <h3 className="text-xl font-bold mb-3 text-zinc-100 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">
                  {service.description}
                </p>

                {/* Animated bottom border */}
                <div className="mt-5 h-px bg-zinc-800 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 w-0 bg-linear-to-r from-transparent via-zinc-400 to-transparent"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                  />
                </div>
              </div>

              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500">
                <div className="absolute top-0 left-[-100%] w-1/3 h-full bg-linear-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:left-[150%] transition-all duration-1000" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-zinc-600 text-sm tracking-wider uppercase mb-4">
            Todos os serviços disponíveis para contratação imediata
          </p>
          <div className="flex items-center justify-center gap-3">
            {FEATURED_SERVICES.map((s, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, type: "spring", stiffness: 200 }}
                className="w-1.5 h-1.5 rounded-full bg-zinc-700"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
