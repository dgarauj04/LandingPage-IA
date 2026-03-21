import type { LucideIcon } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bg: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
}
