import { socialLinks } from "../constants";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-zinc-200 bg-mist-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-zinc-500 text-sm font-medium">
          © 2026 daraujodb<span className="text-amber-600">.dev</span> • Douglas Araujo
        </div>
        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.url} 
              target="_blank" 
              className="text-zinc-400 hover:text-amber-600 transition-colors"
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
