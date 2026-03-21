import { 
  Brain, 
  Sparkles, 
  Image as ImageIcon, 
  Video, 
  Palette, 
  Bot, 
  Github, 
  Linkedin, 
  ExternalLink 
} from "lucide-react";
import type { Service, SocialLink, Project } from "./types";

export const services: Service[] = [
  {
    title: "Criação de IA",
    description: "Desenvolvimento de modelos e soluções personalizadas de inteligência artificial para o seu negócio.",
    icon: Brain,
    color: "text-amber-600",
    bg: "bg-linear-to-br from-amber-100 to-amber-200/50"
  },
  {
    title: "Engenharia de Prompt",
    description: "Otimização de comandos para extrair o máximo potencial de LLMs como GPT-4, Claude e Gemini.",
    icon: Sparkles,
    color: "text-yellow-600",
    bg: "bg-linear-to-br from-yellow-100 to-yellow-200/50"
  },
  {
    title: "Criação de Imagem",
    description: "Geração de artes, ilustrações e fotos realistas utilizando Midjourney, DALL-E e Stable Diffusion.",
    icon: ImageIcon,
    color: "text-orange-600",
    bg: "bg-linear-to-br from-orange-100 to-orange-200/50"
  },
  {
    title: "Criação de Vídeo",
    description: "Produção de vídeos cinematográficos e animações geradas por IA para marketing e conteúdo.",
    icon: Video,
    color: "text-amber-700",
    bg: "bg-linear-to-br from-amber-100 to-amber-200/50"
  },
  {
    title: "Design de Logos",
    description: "Identidade visual moderna e logos conceituais criados com auxílio de algoritmos generativos.",
    icon: Palette,
    color: "text-yellow-700",
    bg: "bg-linear-to-br from-yellow-100 to-yellow-200/50"
  },
  {
    title: "Chatbots com IA",
    description: "Agentes inteligentes e chatbots conversacionais integrados com as APIs mais avançadas do mercado.",
    icon: Bot,
    color: "text-orange-700",
    bg: "bg-linear-to-br from-orange-100 to-orange-200/50"
  }
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/dgarauj04", icon: Github },
  { name: "LinkedIn", url: "https://linkedin.com/in/douglasaraujo-daraujodb-dev", icon: Linkedin },
  { name: "Portfólio", url: "https://daraujodb-dev.vercel.app/", icon: ExternalLink }
];

export const projects: Project[] = [
  {
    title: "EcoChat AI",
    category: "Chatbots",
    description: "Sistema de atendimento automatizado para e-commerce com integração de estoque em tempo real.",
    image: "https://picsum.photos/seed/project1/600/400"
  },
  {
    title: "PromptMaster Pro",
    category: "Engenharia de Prompt",
    description: "Framework de otimização de prompts que reduziu custos de API em 40% para uma fintech.",
    image: "https://picsum.photos/seed/project2/600/400"
  },
  {
    title: "VisionGen Studio",
    category: "Criação de Imagem",
    description: "Pipeline de geração de assets para jogos utilizando Stable Diffusion e ControlNet.",
    image: "https://picsum.photos/seed/project3/600/400"
  }
];
