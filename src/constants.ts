import { 
  Brain, 
  Settings, 
  Workflow,
  Lightbulb, 
  Code,
  Gauge,
  Github, 
  Linkedin, 
  ExternalLink 
} from "lucide-react";
import type { Service, SocialLink, Project } from "./types";

export const services: Service[] = [
  {
    title: "Criação",
    description: "Desenvolvimento de modelos e soluções personalizadas de inteligência artificial para o seu negócio.",
    icon: Brain,
    color: "text-zinc-800",
    bg: "bg-linear-to-br from-zinc-200 to-zinc-300/50"
  },
  {
    title: "Automação",
    description: "Workflows inteligentes e automação de processos para escalar a operação de sua empresa com máxima eficiência.",
    icon: Workflow,
    color: "text-zinc-700",
    bg: "bg-linear-to-br from-zinc-100 to-zinc-200/50"
  },
  {
    title: "Implementação",
    description: "Integração contínua de APIs e sistemas avançados de IA dentro da sua arquitetura atual de software.",
    icon: Code,
    color: "text-slate-800",
    bg: "bg-linear-to-br from-slate-200 to-slate-300/50"
  },
  {
    title: "Consultoria",
    description: "Direcionamento estratégico para adoção de Inteligência Artificial e transformação digital corporativa.",
    icon: Lightbulb,
    color: "text-gray-800",
    bg: "bg-linear-to-br from-gray-200 to-gray-300/50"
  },
  {
    title: "Otimização",
    description: "Engenharia de prompt e fine-tuning para extrair o máximo potencial de LLMs reduzindo custos computacionais.",
    icon: Gauge,
    color: "text-neutral-700",
    bg: "bg-linear-to-br from-neutral-200 to-neutral-300/50"
  },
  {
    title: "Treinamento",
    description: "Capacitação de equipes para utilização de ferramentas generativas no dia a dia da operação.",
    icon: Settings,
    color: "text-zinc-800",
    bg: "bg-linear-to-br from-zinc-100 to-zinc-200/50"
  }
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/dgarauj04", icon: Github },
  { name: "LinkedIn", url: "https://linkedin.com/in/douglasaraujo-daraujodb-dev", icon: Linkedin },
  { name: "Portfólio", url: "https://daraujodb-dev.vercel.app/", icon: ExternalLink }
];

export const projects: Project[] = [
  {
    title: "Plataforma Core AI",
    category: "Implementação",
    description: "Sistema unificado de atendimento automatizado com integração de dados em tempo real.",
    image: "https://picsum.photos/seed/project1black/600/400?grayscale"
  },
  {
    title: "Automação de Backoffice",
    category: "Automação",
    description: "Framework de automação de processos que reduziu custos operacionais em 40%.",
    image: "https://picsum.photos/seed/project2black/600/400?grayscale"
  },
  {
    title: "Estratégia Digital Cloud",
    category: "Consultoria",
    description: "Projeto de reestruturação de arquitetura na nuvem focado em alta disponibilidade e IA.",
    image: "https://picsum.photos/seed/project3black/600/400?grayscale"
  }
];
