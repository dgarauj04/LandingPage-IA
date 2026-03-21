import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, User, Loader2, CheckCircle2 } from "lucide-react";
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: "user" | "bot";
  content: string;
}

interface UserData {
  name: string;
  need: string;
  subject: string;
  details: string;
  email: string;
}

interface AIChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ChatStep = "NAME" | "NEED" | "DETAILS" | "EMAIL" | "SUMMARY" | "CONFIRMED";

export function AIChatModal({ isOpen, onClose }: AIChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Olá! Sou a assistente de IA do Douglas. Para começarmos, como posso te chamar?" }
  ]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState<ChatStep>("NAME");
  const [userData, setUserData] = useState<UserData>({
    name: "",
    need: "",
    subject: "",
    details: "",
    email: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const generateAISubject = async (need: string) => {
    setIsLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `O usuário disse que precisa de: "${need}". 
        Crie um assunto curto e profissional (máximo 10 palavras) e uma breve implementação ou ideia de como a IA pode ajudar nesse caso (máximo 2 frases). 
        Responda em português de forma amigável e direta.`,
      });
      
      const aiResponse = response.text || "Entendido! Vamos trabalhar nisso.";
      setUserData(prev => ({ ...prev, subject: aiResponse }));
      setMessages(prev => [...prev, { role: "bot", content: aiResponse }]);
      setMessages(prev => [...prev, { role: "bot", content: "Poderia me dar mais detalhes sobre o que você deseja (sua mensagem principal)?" }]);
      setStep("DETAILS");
    } catch (error) {
      console.error("Erro na IA:", error);
      setMessages(prev => [...prev, { role: "bot", content: "Interessante! Vamos prosseguir. Me conte mais detalhes sobre o que você deseja?" }]);
      setStep("DETAILS");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setInput("");

    if (step === "NAME") {
      setUserData(prev => ({ ...prev, name: userMessage }));
      setMessages(prev => [...prev, { role: "bot", content: `Prazer em te conhecer, ${userMessage}! O que você está precisando hoje?` }]);
      setStep("NEED");
    } else if (step === "NEED") {
      setUserData(prev => ({ ...prev, need: userMessage }));
      await generateAISubject(userMessage);
    } else if (step === "DETAILS") {
      setUserData(prev => ({ ...prev, details: userMessage }));
      setMessages(prev => [...prev, { role: "bot", content: "Ótimo. Por fim, qual o seu melhor e-mail para contato?" }]);
      setStep("EMAIL");
    } else if (step === "EMAIL") {
      setUserData(prev => ({ ...prev, email: userMessage }));
      setStep("SUMMARY");
      const summary = `Aqui está o resumo do que conversamos:
      
👤 **Nome:** ${userData.name}
📧 **E-mail:** ${userMessage}
💡 **Assunto:** ${userData.subject}
📝 **Mensagem:** ${userData.details}

Está tudo correto ou deseja alterar algo?`;
      setMessages(prev => [...prev, { role: "bot", content: summary }]);
    } else if (step === "SUMMARY") {
      if (userMessage.toLowerCase().includes("sim") || userMessage.toLowerCase().includes("ok") || userMessage.toLowerCase().includes("certo") || userMessage.toLowerCase().includes("tudo")) {
        setMessages(prev => [...prev, { role: "bot", content: "Perfeito! Seus dados foram coletados e logo o Douglas entrará em contato com você por e-mail. Obrigado!" }]);
        setStep("CONFIRMED");
        console.log("Dados finais para envio:", { ...userData, email: userData.email || userMessage });
      } else {
        setMessages(prev => [...prev, { role: "bot", content: "Sem problemas! O que você gostaria de mudar? (Nome, E-mail, Assunto ou Mensagem?)" }]);
        setMessages(prev => [...prev, { role: "bot", content: "Vamos recomeçar para garantir que tudo fique perfeito. Qual o seu nome?" }]);
        setStep("NAME");
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col h-[600px] border border-amber-100"
          >
            <div className="p-6 bg-amber-500/80 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold">I.R.I.S</h3>
                  <p className="text-xs text-white/80">Online agora</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-4 bg-yellow-100/50"
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === "user" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`flex gap-3 max-w-[85%] ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      msg.role === "user" ? "bg-amber-600" : "bg-white border border-zinc-200"
                    }`}>
                      {msg.role === "user" ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-amber-600" />}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user" 
                        ? "bg-amber-600 text-white rounded-tr-none" 
                        : "bg-white text-zinc-800 border border-zinc-100 shadow-sm rounded-tl-none"
                    }`}>
                      <div className="whitespace-pre-wrap">{msg.content}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-amber-600" />
                    </div>
                    <div className="p-4 rounded-2xl bg-white border border-zinc-100 shadow-sm rounded-tl-none">
                      <Loader2 className="w-4 h-4 animate-spin text-amber-600" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 bg-mist-500 border-t border-zinc-100">
              {step === "CONFIRMED" ? (
                <div className="flex items-center justify-center gap-2 text-emerald-600 font-medium py-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Mensagem enviada com sucesso!
                </div>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Digite sua mensagem..."
                    disabled={isLoading}
                    className="flex-1 px-6 py-3 rounded-full bg-zinc-100 border border-transparent focus:border-amber-500 focus:bg-white outline-none transition-all text-sm"
                  />
                  <button
                    onClick={handleSend}
                    disabled={isLoading || !input.trim()}
                    className="w-12 h-12 rounded-full bg-amber-600 text-white flex items-center justify-center hover:bg-amber-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-amber-600/20"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
