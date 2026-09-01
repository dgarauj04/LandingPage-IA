import { motion } from "framer-motion";
import { Mail, Phone, Send, Bot, MessageCircle } from "lucide-react";

export const Contact = ({ onOpenChat }: { onOpenChat: () => void }) => {
  return (
    <section id="contato" className="py-24 px-6 relative bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-zinc-100">Vamos conversar?</h2>
            <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
              Tem um projeto em mente ou quer saber como a IA pode ajudar seu negócio? Mande uma mensagem e retornaremos o mais breve possível.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                  <Mail className="w-5 h-5 text-zinc-300" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest">Email</p>
                  <p className="text-zinc-300 font-medium hover:text-white transition-colors cursor-pointer">contato@techficticia.com.br</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                  <Phone className="w-5 h-5 text-zinc-300" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest">Localização</p>
                  <p className="text-zinc-300 font-medium">Av. Inovação Tecnológica, 1000 • São Paulo, SP</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.open('https://wa.me/5511999999999', '_blank')}>
                <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                  <MessageCircle className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="text-xs text-green-500/70 uppercase font-bold tracking-widest">WhatsApp</p>
                  <p className="text-green-500 font-medium">+55 11 99999-9999</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/50">
              <h3 className="text-lg font-bold text-zinc-100 mb-2 flex items-center gap-2">
                <Bot className="w-5 h-5" />
                Prefere falar com nossa IA?
              </h3>
              <p className="text-zinc-400 text-sm mb-6">
                Nosso assistente inteligente pode ajudar você a estruturar sua ideia agora mesmo.
              </p>
              <button 
                onClick={onOpenChat}
                className="px-6 py-3 bg-zinc-100 text-zinc-950 rounded-xl font-bold text-sm hover:bg-white transition-all shadow-lg shadow-white/10 cursor-pointer"
              >
                Abrir Chat com IA
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-[2.5rem] bg-zinc-900 border border-zinc-800 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-800/50 rounded-full blur-2xl -mr-16 -mt-16" />
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400 ml-1">Nome</label>
                  <input 
                    type="text" 
                    placeholder="Seu nome"
                    className="w-full px-6 py-4 rounded-2xl bg-zinc-950 border border-zinc-800 focus:border-zinc-500 focus:bg-zinc-900 outline-none transition-all text-zinc-100"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400 ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="seu@email.com"
                    className="w-full px-6 py-4 rounded-2xl bg-zinc-950 border border-zinc-800 focus:border-zinc-500 focus:bg-zinc-900 outline-none transition-all text-zinc-100"
                  />
                </div>
                <div className="space-y-2 w-full">
                  <label className="text-sm font-medium text-zinc-400 ml-1">Assunto</label>
                  <input 
                    type="text" 
                    placeholder="Assunto"
                    className="w-full px-6 py-4 rounded-2xl bg-zinc-950 border border-zinc-800 focus:border-zinc-500 focus:bg-zinc-900 outline-none transition-all text-zinc-100"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400 ml-1">Mensagem</label>
                <textarea 
                  rows={4}
                  placeholder="Como podemos ajudar?"
                  className="w-full px-6 py-4 rounded-2xl bg-zinc-950 border border-zinc-800 focus:border-zinc-500 focus:bg-zinc-900 outline-none transition-all text-zinc-100 resize-none"
                ></textarea>
              </div>
              <button className="w-full py-4 bg-zinc-100 text-zinc-950 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white transition-all shadow-lg shadow-white/10 active:scale-[0.98]">
                Enviar Mensagem
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
