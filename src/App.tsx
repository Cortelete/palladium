import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Info, Instagram, Smartphone, MessageCircle, MapPin, 
  Star, ShoppingBag, Utensils, MessageSquare, Globe, Send, Map
} from 'lucide-react';
import { CoinLogo } from './components/CoinLogo';
import { LinkButton } from './components/LinkButton';
import { Modal } from './components/Modal';

const IconButton = ({ icon, onClick, href, ariaLabel }: any) => {
  const content = (
    <motion.div
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.9 }}
      className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/70 hover:bg-white/95 backdrop-blur-md border border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.2)] text-blue-700 transition-all duration-300 relative overflow-hidden group"
      aria-label={ariaLabel}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
      <div className="relative z-10">
        {icon}
      </div>
    </motion.div>
  );
  return href ? <a href={href} target="_blank" rel="noopener noreferrer">{content}</a> : <button onClick={onClick}>{content}</button>;
};

export default function App() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  
  // Contato Form State
  const [contatoNome, setContatoNome] = useState('');
  const [contatoIdade, setContatoIdade] = useState('');
  const [contatoMotivo, setContatoMotivo] = useState('');

  // Avaliação State
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  // Developer Modal State
  const [devNome, setDevNome] = useState('');

  const handleContatoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Meu nome é ${contatoNome}, tenho ${contatoIdade} anos. Motivo do contato: ${contatoMotivo}`;
    const whatsappUrl = `https://wa.me/5542999999999?text=${encodeURIComponent(message)}`; // Replace with actual number if provided
    window.open(whatsappUrl, '_blank');
    setActiveModal(null);
  };

  const handleAvaliacao = (stars: number) => {
    setRating(stars);
    if (stars === 5) {
      window.open('https://search.google.com/local/writereview?placeid=ChIJkXWL2UUa6JQRTvlJP5wXMrI', '_blank');
      setActiveModal(null);
    } else {
      setActiveModal('feedback');
    }
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would use formsubmit.co
    alert('Obrigado pelo seu feedback! Ele foi enviado com sucesso.');
    setActiveModal(null);
  };

  const handleDevSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá, meu nome é ${devNome}, vi o link do Shopping Palladium Ponta Grossa e quero um site igual!`;
    const whatsappUrl = `https://wa.me/5541988710303?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setActiveModal(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/40 to-slate-100 animate-gradient-xy flex items-center justify-center p-2 sm:p-4 md:p-6 font-sans">
      {/* Animated Background Overlay */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-300/20 blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-[60%] -right-[10%] w-[60%] h-[60%] rounded-full bg-blue-400/10 blur-[120px] animate-pulse" style={{ animationDuration: '12s' }} />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-[340px] sm:max-w-sm bg-white/60 backdrop-blur-xl border border-white/50 shadow-2xl rounded-[2rem] p-3 sm:p-5 overflow-hidden mx-auto"
      >
        {/* Card Inner Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-1.5"
          >
            <CoinLogo src="/logo.png" alt="Shopping Palladium Ponta Grossa" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg sm:text-xl font-display font-bold text-center text-gray-900 mb-0.5 animate-text-gradient bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 text-transparent bg-clip-text leading-tight flex flex-col items-center"
          >
            Shopping Palladium
            <span className="text-sm sm:text-base font-medium text-blue-800/80 mt-0.5">Ponta Grossa</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[10px] sm:text-xs text-gray-600 font-medium mb-3 text-center tracking-wide"
          >
            Pensou Shopping, Pensou Palladium
          </motion.p>

          <div className="w-full space-y-1">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
              <LinkButton icon={<MapPin className="w-5 h-5" />} onClick={() => setActiveModal('localizacao')}>
                Localização
              </LinkButton>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
              <LinkButton icon={<Smartphone className="w-5 h-5" />} href="https://www.podiapp.com.br/">
                App Podi
              </LinkButton>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
              <LinkButton icon={<ShoppingBag className="w-5 h-5" />} onClick={() => setActiveModal('lojas')}>
                Lojas
              </LinkButton>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>
              <LinkButton icon={<Utensils className="w-5 h-5" />} onClick={() => setActiveModal('alimentacao')}>
                Praça de Alimentação
              </LinkButton>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}>
              <LinkButton icon={<Globe className="w-5 h-5" />} href="https://palladiumpontagrossa.com.br/">
                Site Oficial
              </LinkButton>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 1.0 }}
            className="flex justify-center gap-2.5 mt-1 mb-1"
          >
            <IconButton icon={<Info className="w-4 h-4" />} onClick={() => setActiveModal('sobre')} ariaLabel="Sobre Nós" />
            <IconButton icon={<Instagram className="w-4 h-4" />} href="https://www.instagram.com/shoppingpalladiumpg/" ariaLabel="Instagram" />
            <IconButton icon={<Star className="w-4 h-4" />} onClick={() => setActiveModal('avaliacao')} ariaLabel="Avaliação" />
            <IconButton icon={<MessageCircle className="w-4 h-4" />} onClick={() => setActiveModal('contato')} ariaLabel="Contato" />
          </motion.div>

          <motion.footer 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="mt-2 text-center"
          >
            <button 
              onClick={() => setActiveModal('developer')}
              className="text-[10px] sm:text-xs text-gray-500 hover:text-blue-700 transition-colors flex items-center justify-center gap-1 mx-auto"
            >
              Desenvolvido por InteligenciArte.IA ✨
            </button>
          </motion.footer>
        </div>
      </motion.div>

      {/* Modals */}
      <Modal isOpen={activeModal === 'lojas'} onClose={() => setActiveModal(null)} title="Nossas Lojas">
        <div className="space-y-4 py-2">
          <p className="text-gray-600 text-center text-sm sm:text-base mb-4">
            Encontre o que você precisa ou fale diretamente com nossos lojistas.
          </p>
          <LinkButton icon={<MessageSquare className="w-5 h-5" />} href="https://linktr.ee/palladiumpg">
            Converse com nossas lojas
          </LinkButton>
          <LinkButton icon={<ShoppingBag className="w-5 h-5" />} href="https://linktr.ee/deliverylojaspalladiumpg">
            Lojas com Delivery
          </LinkButton>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'alimentacao'} onClose={() => setActiveModal(null)} title="Praça de Alimentação">
        <div className="space-y-6 py-2 text-center">
          <div className="bg-blue-50/50 p-6 rounded-3xl border border-blue-100">
            <Utensils className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-display font-bold text-gray-900 mb-2">Bateu aquela fome? 🍔🍕</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-6">
              De um lanche rápido a um jantar especial, nossa Praça de Alimentação tem opções deliciosas para todos os gostos! 
              Que tal pedir no conforto da sua casa agora mesmo?
            </p>
            <LinkButton icon={<Utensils className="w-5 h-5" />} href="https://linktr.ee/DeliveryAlimentacaoPalladiumPG">
              Delivery Alimentação
            </LinkButton>
          </div>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'sobre'} onClose={() => setActiveModal(null)} title="Quem somos nós?">
        <div className="space-y-6 text-gray-700 leading-relaxed font-sans">
          <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100">
            <p className="text-base sm:text-lg font-medium text-gray-900">
              O Shopping Palladium Ponta Grossa é muito mais que um shopping — é um dos principais pontos de encontro dos Campos Gerais 💥
            </p>
          </div>
          
          <p className="text-sm sm:text-base">
            Inaugurado em 2003, ele nasceu com a proposta de trazer uma experiência completa de compras, lazer e serviços para a região. 
            Com o sucesso, passou por uma grande expansão em 2011, ficando ainda mais moderno, amplo e cheio de opções.
          </p>
          
          <p className="text-sm sm:text-base font-medium text-blue-800">
            Hoje, é referência regional, conectando dezenas de cidades ao redor de Ponta Grossa.
          </p>

          <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-3">Aqui você encontra tudo em um só lugar:</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li className="flex items-center gap-2">🛍️ <span>Lojas para todos os estilos</span></li>
              <li className="flex items-center gap-2">🍔 <span>Praça de alimentação completa</span></li>
              <li className="flex items-center gap-2">🎬 <span>Cinema multiplex (com salas 3D)</span></li>
              <li className="flex items-center gap-2">🎮 <span>Espaços de diversão para toda a família</span></li>
              <li className="flex items-center gap-2">💇 <span>Serviços e bem-estar</span></li>
            </ul>
          </div>

          <div className="flex items-start gap-3 p-4 bg-blue-50/50 rounded-2xl border border-blue-100">
            <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <p className="text-sm sm:text-base text-blue-900">
              Localizado no coração da cidade, com acesso rápido de qualquer bairro.
            </p>
          </div>

          <p className="text-center font-medium text-gray-900 italic pt-2">
            ✨ Seja pra comprar, passear ou viver bons momentos… o Palladium faz parte da sua rotina.
          </p>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'contato'} onClose={() => setActiveModal(null)} title="Fale Conosco">
        <form onSubmit={handleContatoSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
            <input 
              type="text" 
              required 
              value={contatoNome}
              onChange={(e) => setContatoNome(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white"
              placeholder="Seu nome completo"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Idade</label>
            <input 
              type="number" 
              required 
              value={contatoIdade}
              onChange={(e) => setContatoIdade(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white"
              placeholder="Sua idade"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Motivo do Contato</label>
            <textarea 
              required 
              value={contatoMotivo}
              onChange={(e) => setContatoMotivo(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white resize-none"
              placeholder="Como podemos ajudar?"
            />
          </div>
          <button 
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            Enviar para WhatsApp
          </button>
        </form>
      </Modal>

      <Modal isOpen={activeModal === 'localizacao'} onClose={() => setActiveModal(null)} title="Nossa Localização">
        <div className="space-y-4">
          <p className="text-gray-600 text-center text-sm sm:text-base">
            Rua Ermelino de Leão, 703 - Olarias, Ponta Grossa - PR, 84035-000
          </p>
          <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-gray-200 shadow-inner">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.2122370477355!2d-50.15459322462154!3d-25.094675977777072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e81a45d98b7591%3A0xb232179c3f49f94e!2sPalladium%20Shopping%20Center%20Ponta%20Grossa!5e0!3m2!1spt-BR!2sbr!4v1775066221078!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a 
            href="https://maps.app.goo.gl/YqYqYqYqYqYqYqYq9" // Replace with actual shortlink if available
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-gray-900 hover:bg-black text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
          >
            <Map className="w-4 h-4" />
            Abrir no Google Maps
          </a>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'avaliacao'} onClose={() => setActiveModal(null)} title="Avalie sua experiência">
        <div className="flex flex-col items-center py-8">
          <p className="text-gray-600 mb-8 text-center text-sm sm:text-base">
            Como foi sua experiência no Shopping Palladium Ponta Grossa?
          </p>
          <div className="flex gap-2 sm:gap-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => handleAvaliacao(star)}
                className="text-gray-300 hover:text-blue-500 hover:scale-110 transition-all"
              >
                <Star className="w-10 h-10 sm:w-12 sm:h-12 fill-current" />
              </button>
            ))}
          </div>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'feedback'} onClose={() => setActiveModal(null)} title="Como podemos melhorar?">
        <form onSubmit={handleFeedbackSubmit} className="space-y-4">
          <p className="text-gray-600 text-sm sm:text-base mb-4">
            Sentimos muito que sua experiência não tenha sido 5 estrelas. Por favor, nos conte o que houve para que possamos melhorar.
          </p>
          <textarea 
            required 
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={5}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white resize-none"
            placeholder="Deixe seu comentário ou sugestão..."
          />
          <button 
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Enviar Feedback
          </button>
        </form>
      </Modal>

      <Modal isOpen={activeModal === 'developer'} onClose={() => setActiveModal(null)} title="Sobre o Desenvolvedor">
        <div className="space-y-6">
          <div className="text-center">
            <a 
              href="https://www.instagram.com/inteligenciarte.ia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-4 text-lg"
            >
              <Instagram className="w-5 h-5" />
              @inteligenciarte.ia
            </a>
            <p className="text-gray-600 text-sm sm:text-base">
              Gostou deste projeto? Envie uma mensagem diretamente para o desenvolvedor e solicite um orçamento!
            </p>
          </div>
          
          <form onSubmit={handleDevSubmit} className="space-y-4 bg-gray-50 p-5 rounded-2xl border border-gray-100">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Seu Nome</label>
              <input 
                type="text" 
                required 
                value={devNome}
                onChange={(e) => setDevNome(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                placeholder="Como devemos te chamar?"
              />
            </div>
            <button 
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-black hover:to-gray-900 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Quer um site incrível como esse? Fale comigo! 🚀
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
}
