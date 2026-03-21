import { motion } from "framer-motion";
import { Mail, Phone, Send, Bot } from "lucide-react";

export const Contact = ({ onOpenChat }: { onOpenChat: () => void }) => {
  return (
    <section id="contato" className="py-24 px-6 relative bg-yellow-100/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-zinc-900">Vamos conversar?</h2>
            <p className="text-zinc-600 text-lg mb-12 leading-relaxed">
              Tem um projeto em mente ou quer saber como a IA pode ajudar seu negócio? Mande uma mensagem e responderei o mais breve possível.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-amber-200/60 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                  <Mail className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 uppercase font-bold tracking-widest">Email</p>
                  <p className="text-zinc-900 font-medium hover:text-amber-600 transition-colors cursor-pointer">douglasdab10@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-amber-200/60 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                  <Phone className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 uppercase font-bold tracking-widest">Localização</p>
                  <p className="text-zinc-900 font-medium">Remoto • Brasil</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl border border-amber-300 bg-amber-300/20">
              <h3 className="text-lg font-bold text-amber-900 mb-2 flex items-center gap-2">
                <Bot className="w-5 h-5" />
                Prefere falar com minha IA?
              </h3>
              <p className="text-amber-800/80 text-sm mb-6">
                Meu assistente inteligente pode ajudar você a estruturar sua ideia agora mesmo.
              </p>
              <button 
                onClick={onOpenChat}
                className="px-6 py-3 bg-amber-600 text-white rounded-xl font-bold text-sm hover:bg-amber-700 transition-all shadow-lg shadow-amber-600/20 cursor-pointer"
              >
                Abrir Chat com IA
              </button>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2.5rem] bg-amber-500/60 border border-zinc-100 shadow-2xl shadow-amber-500/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16" />
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="felx flex-col items-center justify-between space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-600 ml-1">Nome</label>
                  <input 
                    type="text" 
                    placeholder="Seu nome"
                    className="w-full px-6 py-4 rounded-2xl bg-zinc-50 border border-zinc-200 focus:border-amber-500 focus:bg-white outline-none transition-all text-zinc-900"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-600 ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="seu@email.com"
                    className="w-full px-6 py-4 rounded-2xl bg-zinc-50 border border-zinc-200 focus:border-amber-500 focus:bg-white outline-none transition-all text-zinc-900"
                  />
                </div>
                <div className="space-y-2 w-full">
                  <label className="text-sm font-medium text-zinc-600 ml-1">Assunto</label>
                  <input 
                    type="" 
                    placeholder="Assunto"
                    className="w-full px-6 py-4 rounded-2xl bg-zinc-50 border border-zinc-200 focus:border-amber-500 focus:bg-white outline-none transition-all text-zinc-900"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-600 ml-1">Mensagem</label>
                <textarea 
                  rows={4}
                  placeholder="Como posso ajudar?"
                  className="w-full px-6 py-4 rounded-2xl bg-zinc-50 border border-zinc-200 focus:border-amber-500 focus:bg-white outline-none transition-all text-zinc-900 resize-none"
                ></textarea>
              </div>
              <button className="w-full py-4 bg-zinc-500 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-green-600/40 transition-all shadow-lg shadow-amber-600/20 active:scale-[0.98]">
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
