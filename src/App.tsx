import { useState } from 'react';
import {
  Sparkles,
  MapPin,
  Phone,
  Clock,
  Star,
  Heart,
  Coffee,
  CheckCircle2,
  ChevronRight,
  Send,
  X,
  MessageSquare,
  ShieldCheck,
  Menu,
  ExternalLink,
  Award,
  Wine,
  Droplets,
  Feather,
  Gem,
  Sun,
  ArrowDown,
  Quote,
  Mail,
  MapPinned,
  ClipboardList,
  GlassWater,
  CircleDot,
  Verified
} from 'lucide-react';

interface Service {
  category: string;
  title: string;
  description: string;
  linkText: string;
  image: string;
  fullDetails: {
    duration: string;
    target: string;
    benefits: string[];
    descriptionLong: string;
  };
}

interface GalleryItem {
  id: number;
  model_name: string;
  details: string;
  likes: number;
  image: string;
  category: 'facial' | 'corporal' | 'injetaveis';
}

interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
}

const SERVICES_DATA: Service[] = [
  {
    category: "ESTÉTICA FACIAL",
    title: "Revitalização e Limpeza de Pele Profunda",
    description: "Limpeza de pele profunda, Peeling de diamante e Dermaplaning. Protocolos especializados para devolver o viço, luminosidade e a textura aveludada do seu rosto.",
    linkText: "Ver Detalhes do Protocolo",
    image: "https://images.pexels.com/photos/3985330/pexels-photo-3985330.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
    fullDetails: {
      duration: "90 minutos",
      target: "Indicado para remoção de impurezas, renovação celular e controle de oleosidade.",
      benefits: [
        "Extração manual segura sem marcas",
        "Peeling de Diamante para esfoliação física e microdermoabrasão",
        "Dermaplaning para remoção de células mortas e penugem facial",
        "Máscara calmante e hidratação profunda com ativos nobres"
      ],
      descriptionLong: "A nossa Estética Facial é focada no rejuvenescimento e purificação profunda. Através do Dermaplaning e do Peeling de Diamante, removemos a camada de células queratinizadas e pelos finos, estimulando o colágeno natural e melhorando a absorção de todos os dermocosméticos subsequentes."
    }
  },
  {
    category: "ESTÉTICA CORPORAL",
    title: "Massagens Modeladoras e Depilação a Laser",
    description: "Massagens relaxantes, drenagem linfática manual e depilação com aparelhos estéticos avançados. Conforto e eficácia extrema para esculpir e revigorar seu corpo.",
    linkText: "Ver Detalhes do Protocolo",
    image: "https://images.pexels.com/photos/9146378/pexels-photo-9146378.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
    fullDetails: {
      duration: "60 a 80 minutos",
      target: "Indicado para redução de medidas, combate à retenção de líquidos e eliminação de pelos indesejados.",
      benefits: [
        "Drenagem Linfática especializada pós-operatória ou estética",
        "Massagem Modeladora com ativos termogênicos de alta performance",
        "Tecnologia a laser confortável e segura para todos os fototipos",
        "Melhoria imediata na circulação e bem-estar geral"
      ],
      descriptionLong: "Tratamentos corporais que unem terapia manual clássica à tecnologia de ponta. A massagem modeladora e a drenagem linfática atuam na eliminação de toxinas e na modelagem da silhueta, enquanto nossa depilação a laser garante uma pele lisa de forma duradoura."
    }
  },
  {
    category: "INJETÁVEIS E AVANÇADOS",
    title: "Harmonização, Toxina Botulínica e Preenchedores",
    description: "Protocolos injetáveis personalizados com ativos de última geração. Bioestimuladores de colágeno, preenchimento labial e rejuvenescimento com naturalidade.",
    linkText: "Ver Detalhes do Protocolo",
    image: "https://images.pexels.com/photos/9335961/pexels-photo-9335961.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
    fullDetails: {
      duration: "45 a 90 minutos",
      target: "Indicado para rejuvenescimento facial, suavização de linhas de expressão e volumização harmônica.",
      benefits: [
        "Uso de Toxina Botulínica (Botox) para rugas dinâmicas",
        "Preenchimento labial e malar com Ácido Hialurônico de alta pureza",
        "Bioestimuladores de Colágeno (Sculptra/Radiesse) para flacidez",
        "Resultados sutis, elegantes e personalizados"
      ],
      descriptionLong: "Sob o olhar clínico apurado de Izadora Meireles, realizamos procedimentos injetáveis focados na beleza natural e harmonia facial. Cada aplicação segue um estudo anatômico rigoroso para realçar suas melhores características sem exageros."
    }
  }
];

const INITIAL_GALLERY_DATA: GalleryItem[] = [
  {
    id: 1,
    model_name: "Protocolo Renew Facial Premium",
    details: "Estética: Limpeza Profunda e Peeling | Temporada: Renovação",
    likes: 899,
    image: "https://images.pexels.com/photos/3985325/pexels-photo-3985325.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
    category: 'facial'
  },
  {
    id: 2,
    model_name: "Massagem Silhouette e Drenagem",
    details: "Estética: Redução Corporal | Temporada: Modelagem Perfeita",
    likes: 735,
    image: "https://images.pexels.com/photos/31234756/pexels-photo-31234756.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
    category: 'corporal'
  },
  {
    id: 3,
    model_name: "Harmonização e Glow Injetável",
    details: "Estética: Bioestimuladores e Botox | Temporada: Rejuvenescimento",
    likes: 896,
    image: "https://images.pexels.com/photos/6187287/pexels-photo-6187287.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
    category: 'injetaveis'
  }
];

const INITIAL_REVIEWS: Review[] = [
  {
    id: 1,
    author: "Gabriela Nascimento",
    rating: 5,
    text: "Estou tendo ótimos resultados, gostei do trabalho.",
    date: "1 semana atrás",
    verified: true
  },
  {
    id: 2,
    author: "Marcos Antônio",
    rating: 5,
    text: "Trabalho da Izadora é impecável, ambiente maravilhoso, amei o seu trabalho.",
    date: "2 semanas atrás",
    verified: true
  },
  {
    id: 3,
    author: "Amanda Cortez",
    rating: 5,
    text: "Que lugar incrível, atendimento impecável.",
    date: "3 semanas atrás",
    verified: true
  }
];

export default function App() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(INITIAL_GALLERY_DATA);
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [selectedWelcomeDrink, setSelectedWelcomeDrink] = useState<string>('Café Gourmet Nespresso');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'facial' | 'corporal' | 'injetaveis'>('all');
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [newReviewAuthor, setNewReviewAuthor] = useState('');
  const [newReviewText, setNewReviewText] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [reviewSubmitSuccess, setReviewSubmitSuccess] = useState(false);

  const [bookingName, setBookingName] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [bookingService, setBookingService] = useState('Estética Facial Premium (Limpeza + Peeling)');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [bookingNotes, setBookingNotes] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleLike = (id: number) => {
    setGalleryItems(prev => prev.map(item => {
      if (item.id === id) {
        triggerToast(`Você curtiu o procedimento: ${item.model_name}`);
        return { ...item, likes: item.likes + 1 };
      }
      return item;
    }));
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewAuthor.trim() || !newReviewText.trim()) {
      triggerToast("Por favor, preencha todos os campos da avaliação.");
      return;
    }
    const brandNewReview: Review = {
      id: Date.now(),
      author: newReviewAuthor,
      rating: newReviewRating,
      text: newReviewText,
      date: "Agora mesmo",
      verified: true
    };
    setReviews([brandNewReview, ...reviews]);
    setNewReviewAuthor('');
    setNewReviewText('');
    setNewReviewRating(5);
    setReviewSubmitSuccess(true);
    triggerToast("Obrigado por avaliar! Sua opinião é muito valiosa.");
    setTimeout(() => setReviewSubmitSuccess(false), 5000);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) {
      triggerToast("Por favor, insira um e-mail válido.");
      return;
    }
    setNewsletterSuccess(true);
    triggerToast("Inscrição efetuada com sucesso! Você receberá nossas novidades.");
    setNewsletterEmail('');
    setTimeout(() => setNewsletterSuccess(false), 5000);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingName.trim() || !bookingPhone.trim() || !bookingDate || !bookingTime) {
      triggerToast("Por favor, preencha as informações obrigatórias para agendamento.");
      return;
    }
    setBookingSuccess(true);
    triggerToast("Agendamento pré-registrado! Direcionando ao WhatsApp...");
    const phoneNumber = "5562993666495";
    const formattedText = `Olá Izadora Meireles Estética! Gostaria de agendar uma consulta de avaliação:\n*Nome:* ${bookingName}\n*Telefone:* ${bookingPhone}\n*Procedimento Desejado:* ${bookingService}\n*Data Preferencial:* ${bookingDate}\n*Horário:* ${bookingTime}\n*Bebida de Boas-vindas:* ${selectedWelcomeDrink}\n*Observações:* ${bookingNotes || 'Nenhuma'}\n\nSolicitado através do site oficial da clínica.`;
    const encodedText = encodeURIComponent(formattedText);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setBookingSuccess(false);
    }, 1500);
  };

  const handleQuickBook = (serviceName: string) => {
    setBookingService(serviceName);
    setSelectedService(null);
    const element = document.getElementById('agendamento');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    triggerToast(`Selecionado: ${serviceName} no formulário de agendamento`);
  };

  const openWhatsApp = (msg?: string) => {
    const text = msg || "Olá Izadora Meireles Estética! Gostaria de saber mais sobre os tratamentos de estética avançada facial e corporal.";
    window.open(`https://wa.me/5562993666495?text=${encodeURIComponent(text)}`, '_blank');
  };

  const drinkOptions = [
    { value: 'Café Gourmet Nespresso', label: 'Café Gourmet Nespresso', icon: Coffee },
    { value: 'Chá Aromatizado de Capim-limão', label: 'Chá Aromatizado de Capim-limão', icon: GlassWater },
    { value: 'Espumante Brut Gelada', label: 'Espumante Brut Gelada', icon: Wine },
    { value: 'Suco Funcional Detox', label: 'Suco Funcional Detox', icon: Droplets },
    { value: 'Água Aromatizada com Hortelã', label: 'Água Aromatizada com Hortelã', icon: Droplets }
  ];

  const selectedDrinkIcon = drinkOptions.find(d => d.value === selectedWelcomeDrink)?.icon || Coffee;
  const DrinkIcon = selectedDrinkIcon;

  return (
    <div className="min-h-screen text-stone-800 bg-[#FAF7F2] font-body selection:bg-[#D98026] selection:text-white overflow-x-hidden">

      {/* Alerta flutuante - Sem Emojis */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 flex items-center gap-3 px-5 py-4 bg-white text-stone-800 border-l-4 border-[#D98026] rounded-lg shadow-xl animate-fade-in">
          <CircleDot className="w-5 h-5 text-[#D98026]" />
          <span className="text-sm font-medium tracking-wide">{toastMessage}</span>
        </div>
      )}

      {/* Faixa Superior Informativa */}
      <div className="bg-[#F3EDE4] text-stone-700 text-[11px] py-2.5 px-4 border-b border-[#E8DFC1]/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span className="font-medium tracking-wider">Aberto agora - Atendimento até às 20:00</span>
          </div>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <div className="flex text-[#D98026]">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
            </div>
            <span className="font-bold text-stone-800 tracking-wider">5,0 de 5,0</span>
            <span className="text-stone-500 hidden sm:inline">Excelente pontuação no Google em Goiânia</span>
          </div>
          <div className="hidden lg:flex items-center gap-4 text-stone-600">
            <a href="tel:62993666495" className="hover:text-[#D98026] transition flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-[#D98026]" /> (62) 99366-6495
            </a>
            <span className="text-[#E0D7C3]">|</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#D98026]" /> Jardim das Aroeiras, Goiânia
            </span>
          </div>
        </div>
      </div>

      {/* Menu de Navegação Superior */}
      <nav className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EBE3D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            
            {/* Logo de Iniciais IM */}
            <div className="flex-shrink-0 flex items-center gap-3 md:gap-4">
              <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#F3EDE4] border border-[#D98026]/40 flex items-center justify-center shadow-inner group">
                <span className="logo-im text-[#B8620D] text-xl md:text-2xl font-black">IM</span>
                <div className="absolute inset-0 rounded-full border border-[#D98026]/10 group-hover:border-[#D98026]/40 transition-all duration-300"></div>
              </div>
              <div>
                <span className="text-lg md:text-xl lg:text-2xl font-heading font-bold text-stone-900 block leading-tight">
                  Izadora Meireles
                </span>
                <span className="text-[9px] md:text-[10px] tracking-[0.25em] text-[#B8620D] uppercase font-semibold block font-body">
                  ESTÉTICA AVANÇADA & INJETÁVEIS
                </span>
              </div>
            </div>

            {/* Menu Desktop */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a href="#inicio" className="text-xs lg:text-sm font-medium tracking-wider text-stone-600 hover:text-[#B8620D] transition-colors">Início</a>
              <a href="#sobre" className="text-xs lg:text-sm font-medium tracking-wider text-stone-600 hover:text-[#B8620D] transition-colors">Sobre Nós</a>
              <a href="#servicos" className="text-xs lg:text-sm font-medium tracking-wider text-stone-600 hover:text-[#B8620D] transition-colors">Serviços</a>
              <a href="#modelos" className="text-xs lg:text-sm font-medium tracking-wider text-stone-600 hover:text-[#B8620D] transition-colors">Resultados</a>
              <a href="#depoimentos" className="text-xs lg:text-sm font-medium tracking-wider text-stone-600 hover:text-[#B8620D] transition-colors">Depoimentos</a>
              <a href="#agendamento" className="px-5 py-3 bg-gradient-to-r from-[#D98026] to-[#b56517] hover:from-[#e5923c] hover:to-[#D98026] text-white font-bold rounded text-[10px] lg:text-xs tracking-[0.15em] transition duration-300 shadow-sm uppercase">
                Agendar Consulta
              </a>
            </div>

            {/* Botão de Menu Mobile */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-stone-600 hover:text-[#B8620D] focus:outline-none p-2"
                aria-label="Abrir menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Dropdown Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#FAF7F2] border-b border-[#EBE3D5] shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {[
                { href: '#inicio', label: 'Início' },
                { href: '#sobre', label: 'Sobre Nós' },
                { href: '#servicos', label: 'Serviços de Estética' },
                { href: '#modelos', label: 'Galeria de Resultados' },
                { href: '#depoimentos', label: 'Depoimentos de Clientes' }
              ].map((item) => (
                <a 
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded text-sm font-medium text-stone-700 hover:text-[#B8620D] hover:bg-[#F3EDE4] transition tracking-wider"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 px-4">
                <a 
                  href="#agendamento" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full py-3 bg-gradient-to-r from-[#D98026] to-[#b56517] text-white font-bold text-xs tracking-[0.2em] rounded text-center uppercase shadow"
                >
                  Agendar Consulta
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Seção Principal / Hero */}
      <section id="inicio" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#FAF6F0]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3985325/pexels-photo-3985325.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000" 
            alt="Tratamento facial na clínica de estética" 
            className="w-full h-full object-cover object-center opacity-25 filter sepia-[0.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-12">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F3EDE4] border border-[#D98026]/30 mb-6">
            <Award className="w-3.5 h-3.5 text-[#B8620D]" />
            <span className="text-[10px] lg:text-xs uppercase tracking-[0.2em] text-[#B8620D] font-bold font-body">
              Clínica de Saúde e Beleza de Alta Performance
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-stone-900 mb-6 leading-[1.15]">
            Mudanças que <br />
            <span className="gold-text-gradient font-cosmetic">Valorizam a Sua Beleza!</span>
          </h1>

          <p className="text-stone-700 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-light font-body">
            Especializada em estética facial, corporal e injetáveis. Combinamos o uso de aparelhos avançados e protocolos exclusivos para entregar os melhores tratamentos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
            <a 
              href="#servicos" 
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#D98026] to-[#b56517] text-white font-bold tracking-[0.15em] rounded shadow-md transition transform hover:-translate-y-0.5 text-center uppercase text-xs"
            >
              Show More Detail / Ver Detalhes
            </a>
            <a 
              href="#agendamento" 
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-stone-800 font-semibold rounded border border-[#E0D7C3] hover:border-[#D98026] transition text-center uppercase text-xs tracking-[0.1em] shadow-sm"
            >
              Agendar Avaliação
            </a>
          </div>

          {/* Selo Google Real */}
          <div className="mt-12 md:mt-16 inline-flex items-center gap-4 md:gap-6 py-4 px-5 md:px-7 rounded-xl bg-white border border-[#EBE3D5] text-left shadow-sm">
            <div className="flex flex-col justify-center border-r border-[#E0D7C3] pr-4 md:pr-6">
              <div className="flex items-center gap-1.5">
                <span className="text-xl md:text-2xl font-bold text-stone-900 logo-im">5.0</span>
                <div className="flex text-[#D98026]">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                </div>
              </div>
              <span className="text-[9px] text-stone-500 font-semibold tracking-[0.15em] font-body uppercase">Avaliações no Google</span>
            </div>
            <div>
              <p className="text-xs md:text-sm text-stone-700 font-cosmetic max-w-xs leading-relaxed">
                "Trabalho da Izadora é impecável, ambiente maravilhoso, amei o seu trabalho."
              </p>
              <span className="text-[9px] text-stone-400 font-semibold block mt-1 font-body">
                - Avaliação Real no Google de Goiânia, GO
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1">
          <ArrowDown className="w-4 h-4 text-[#B8620D] animate-bounce" />
        </div>
      </section>

      {/* Seção Sobre Nós */}
      <section id="sobre" className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-[#D98026] rounded-tl-lg pointer-events-none"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-[#D98026] rounded-br-lg pointer-events-none"></div>
              
              <div className="rounded-lg overflow-hidden border border-[#EBE3D5] shadow-lg relative">
                <img 
                  src="https://images.pexels.com/photos/9335961/pexels-photo-9335961.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700" 
                  alt="Dra Izadora Meireles Estética" 
                  className="w-full object-cover aspect-[3/4] img-hover-zoom"
                />
                <div className="absolute bottom-0 inset-x-0 p-4 md:p-6 bg-gradient-to-t from-stone-900 via-stone-900/80 to-transparent text-white">
                  <span className="text-[9px] text-[#D98026] font-bold tracking-[0.2em] uppercase block mb-1 font-body">Especialista Responsável</span>
                  <p className="text-lg md:text-xl font-heading font-bold">Izadora Meireles</p>
                  <p className="text-xs text-stone-300 font-light font-body">Centro de Saúde e Beleza em Goiânia, Goiás</p>
                </div>
              </div>

              <div className="absolute -right-4 top-10 bg-[#FAF7F2] border border-[#D98026]/30 p-4 rounded-lg shadow-md max-w-[170px]">
                <div className="flex items-center gap-1.5 mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B8620D]" />
                  <span className="text-[10px] font-bold text-stone-900 tracking-wider font-body">Segurança</span>
                </div>
                <p className="text-[10px] text-stone-600 font-light leading-tight">
                  Uso de aparelhos estéticos avançados devidamente higienizados e aprovados.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#B8620D] font-bold block font-body">Sobre a Estética Izadora Meireles</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-stone-900 tracking-tight leading-tight">
                  Protocolos Especializados e Individualizados para Cada Cliente
                </h2>
                <div className="w-16 h-0.5 bg-[#D98026] mt-3"></div>
              </div>

              <p className="text-stone-700 text-sm md:text-base leading-relaxed font-light font-body">
                Sempre em busca dos melhores tratamentos, nosso espaço é inteiramente voltado para o rejuvenescimento e harmonização, unindo o melhor da ciência cosmética a um atendimento acolhedor.
              </p>

              <div className="p-4 rounded-lg bg-[#FAF7F2] border-l-4 border-[#D98026] font-cosmetic text-stone-700 text-sm leading-relaxed">
                "Especializada em estética facial e corporal. Massagem, limpeza de pele profunda, peeling de diamante, dermaplaning, depilação a laser. Protocolo especializado para cada cliente, mais o uso de aparelhos estéticos avançados, sempre em busca dos melhores tratamentos. Também trabalhamos com todos os Injetáveis."
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  { icon: Gem, title: "Injetáveis de Ponta", desc: "Toxina botulínica, preenchimento e bioestimuladores." },
                  { icon: Feather, title: "Estética Avançada", desc: "Peelings químicos, mecânicos e dermaplaning." },
                  { icon: ClipboardList, title: "Diagnóstico Individual", desc: "Ficha clínica de anamnese para indicação precisa." },
                  { icon: Sun, title: "Experiência Completa", desc: "Ambiente tranquilo com atendimento focado no bem-estar." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#F3EDE4] flex items-center justify-center text-[#B8620D] border border-[#E0D7C3]/50">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs md:text-sm font-bold text-stone-900 tracking-wider font-body">{item.title}</h4>
                      <p className="text-[11px] text-stone-500 font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a 
                  href="#agendamento" 
                  className="px-6 py-3 bg-[#D98026] text-white font-bold text-xs tracking-[0.15em] rounded hover:bg-[#e5923c] transition uppercase font-body shadow-sm"
                >
                  Para Informações e Orçamentos
                </a>
                <a 
                  href="tel:62993666495"
                  className="px-5 py-3 bg-[#FAF7F2] border border-[#E0D7C3] text-stone-700 font-semibold text-xs rounded hover:border-[#D98026] transition uppercase flex items-center gap-2 font-body"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B8620D]" /> (62) 99366-6495
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Serviços */}
      <section id="servicos" className="py-16 md:py-24 bg-[#FAF6F0] border-t border-[#EBE3D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-3">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#B8620D] font-bold block font-body">Nosso Menu de Protocolos</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold tracking-tight text-stone-900 leading-tight">
              Procedimentos de Beleza e Cuidados Estéticos
            </h2>
            <div className="w-20 h-0.5 bg-[#D98026] mx-auto rounded-full"></div>
            <p className="text-stone-600 text-xs md:text-sm font-light font-body max-w-lg mx-auto">
              Clique para expandir os detalhes e conhecer os benefícios imediatos, duração estimada e recuperação de cada tratamento da clínica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SERVICES_DATA.map((service, index) => (
              <div 
                key={index} 
                className="group flex flex-col h-full bg-white border border-[#EBE3D5] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#D98026]/40"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover img-hover-zoom"
                  />
                  <div className="absolute top-3 left-3 bg-[#F3EDE4] text-[#B8620D] border border-[#D98026]/30 font-bold text-[9px] md:text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 rounded font-body">
                    {service.category}
                  </div>
                </div>

                <div className="p-5 md:p-6 flex flex-col flex-grow space-y-3">
                  <h3 className="text-base md:text-lg lg:text-xl font-heading font-bold text-stone-900 group-hover:text-[#B8620D] transition-colors leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs md:text-sm text-stone-600 leading-relaxed font-light flex-grow font-body">
                    {service.description}
                  </p>
                  
                  <div className="pt-4 border-t border-[#F3EDE4] flex items-center justify-between">
                    <button 
                      onClick={() => setSelectedService(service)}
                      className="text-[10px] md:text-xs font-bold tracking-[0.1em] text-[#B8620D] hover:text-[#e5923c] flex items-center gap-1 transition font-body uppercase"
                    >
                      Show More Detail / Ver Detalhes <ChevronRight className="w-3 h-3" />
                    </button>
                    <button 
                      onClick={() => handleQuickBook(service.title)}
                      className="px-3 py-1.5 bg-[#FAF7F2] hover:bg-[#F3EDE4] text-[9px] md:text-[10px] text-stone-700 border border-[#E0D7C3] hover:border-[#D98026] rounded transition font-bold tracking-wider uppercase font-body"
                    >
                      Selecionar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-5 md:p-6 rounded-lg bg-white border border-[#EBE3D5] flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#F3EDE4] rounded-full text-[#B8620D]">
                <MessageSquare className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div>
                <p className="text-xs md:text-sm font-bold text-stone-900 font-body">Ficou com alguma dúvida sobre o tratamento ideal para sua pele?</p>
                <p className="text-[11px] text-stone-500 font-light font-body">Nossa equipe está disponível para tirar suas dúvidas e criar protocolos personalizados.</p>
              </div>
            </div>
            <button
              onClick={() => openWhatsApp("Olá Izadora, gostaria de tirar uma dúvida sobre qual o procedimento ideal para as minhas queixas estéticas.")}
              className="w-full md:w-auto px-5 py-2.5 bg-white hover:bg-[#FAF7F2] text-[#B8620D] border border-[#D98026] rounded text-xs font-bold transition flex items-center justify-center gap-2 font-body tracking-wider uppercase"
            >
              Conversar por WhatsApp <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Modal Detalhado de Serviços */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-900/65 backdrop-blur-sm" 
             onClick={() => setSelectedService(null)}
        >
          <div 
            className="bg-white border border-[#EBE3D5] rounded-lg w-full max-w-lg mx-auto overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col text-stone-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-44 sm:h-52 flex-shrink-0">
              <img 
                src={selectedService.image} 
                alt={selectedService.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-3 right-3 bg-white/80 hover:bg-white text-stone-800 p-1.5 rounded-full shadow transition z-10"
                aria-label="Fechar"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-3 left-4 right-4">
                <span className="text-[9px] bg-[#B8620D] text-white font-bold uppercase px-2 py-0.5 rounded font-body tracking-wider">
                  {selectedService.category}
                </span>
                <h3 className="text-base sm:text-lg md:text-xl font-heading font-bold text-stone-900 mt-1 leading-tight">{selectedService.title}</h3>
              </div>
            </div>

            <div className="p-5 space-y-4 overflow-y-auto flex-1">
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed font-light font-body">
                {selectedService.fullDetails.descriptionLong}
              </p>

              <div className="p-3 bg-[#FAF7F2] rounded border border-[#EBE3D5]">
                <p className="text-[9px] md:text-[10px] font-bold text-[#B8620D] uppercase tracking-[0.15em] mb-1 font-body">Duração Estimada</p>
                <p className="text-xs md:text-sm text-stone-900 font-semibold font-body">{selectedService.fullDetails.duration}</p>
                <p className="text-[9px] md:text-[10px] font-bold text-[#B8620D] uppercase tracking-[0.15em] mt-3 mb-1 font-body">Indicação Principal</p>
                <p className="text-xs md:text-sm text-stone-700 font-light font-body">{selectedService.fullDetails.target}</p>
              </div>

              <div>
                <p className="text-[9px] md:text-[10px] font-bold text-[#B8620D] uppercase tracking-[0.15em] mb-2 font-body">Benefícios e Etapas do Tratamento</p>
                <ul className="space-y-1.5">
                  {selectedService.fullDetails.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-stone-600 font-light">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D98026] mt-0.5 flex-shrink-0" />
                      <span className="font-body">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-3 md:p-4 bg-[#FAF7F2] border-t border-[#EBE3D5] flex flex-col sm:flex-row items-center justify-end gap-2 flex-shrink-0">
              <button 
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-stone-500 hover:text-stone-800 transition font-body"
              >
                Fechar Janela
              </button>
              <button 
                onClick={() => handleQuickBook(selectedService.title)}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#D98026] text-white font-bold text-[10px] md:text-xs tracking-[0.1em] rounded uppercase transition font-body"
              >
                Reservar Horário para este Procedimento
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Seção Como Funciona */}
      <section className="py-16 md:py-24 bg-white relative border-t border-[#EBE3D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#B8620D] font-bold block font-body">Etapas do Atendimento</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold tracking-tight text-stone-900 leading-tight">
              Como funciona o nosso atendimento?
            </h2>
            <div className="w-20 h-0.5 bg-[#D98026] mx-auto rounded-full"></div>
            <p className="text-stone-600 text-xs md:text-sm font-light font-body max-w-lg mx-auto">
              Sua jornada de autocuidado e beleza é cuidadosamente planejada para aliar os melhores resultados a um conforto inigualável.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
            
            {/* Etapa 1 */}
            <div className="bg-[#FAF7F2] border border-[#EBE3D5] hover:border-[#D98026]/40 p-5 md:p-8 rounded-lg relative group transition duration-300 shadow-sm">
              <div className="absolute top-3 right-3 text-[#E0D7C3] font-extrabold text-4xl select-none group-hover:text-[#D98026]/20 transition logo-im">01</div>
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#B8620D] mb-4 border border-[#E0D7C3]/60 shadow-sm">
                <Coffee className="w-5 h-5" />
              </div>
              <h3 className="text-sm md:text-base font-heading font-bold text-stone-900 uppercase tracking-wider mb-2">WELCOME DRINK / BEBIDA DE BOAS-VINDAS</h3>
              <p className="text-[11px] md:text-xs text-stone-600 leading-relaxed mb-4 font-body font-light">
                Desfrute de uma recepção exclusiva em nosso espaço. Selecione abaixo sua cortesia para ser servida logo na sua chegada:
              </p>

              <div className="space-y-2 pt-3 border-t border-[#EBE3D5]">
                <label className="text-[8px] md:text-[10px] uppercase text-stone-400 font-bold tracking-[0.15em] block font-body">Cortesia Selecionada:</label>
                <div className="flex items-center gap-2 mb-1.5">
                  <DrinkIcon className="w-3.5 h-3.5 text-[#B8620D]" />
                  <span className="text-[11px] text-[#B8620D] font-semibold font-body">{selectedWelcomeDrink}</span>
                </div>
                <select 
                  value={selectedWelcomeDrink} 
                  onChange={(e) => {
                    setSelectedWelcomeDrink(e.target.value);
                    triggerToast(`Você selecionou: ${e.target.value}`);
                  }}
                  className="w-full bg-white border border-[#EBE3D5] text-stone-700 text-[11px] py-2 px-3 rounded focus:outline-none focus:border-[#D98026] transition cursor-pointer font-body"
                >
                  {drinkOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <span className="text-[9px] italic text-stone-400 block mt-1 font-body">Essa escolha será anexada ao seu pedido de horário</span>
              </div>
            </div>

            {/* Etapa 2 - Em Destaque */}
            <div className="bg-[#F3EDE4] border-2 border-[#D98026] p-5 md:p-8 rounded-lg relative group transition duration-300 shadow-md md:-translate-y-2">
              <div className="absolute top-3 right-3 text-[#D98026]/30 font-extrabold text-4xl select-none logo-im">02</div>
              <div className="inline-flex px-2.5 py-0.5 bg-[#D98026] text-white font-extrabold text-[8px] md:text-[9px] tracking-[0.2em] uppercase rounded-full mb-3 font-body">Foco e Análise</div>
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black mb-4 shadow-sm border border-[#D98026]/30">
                <ClipboardList className="w-5 h-5 text-[#B8620D]" />
              </div>
              <h3 className="text-sm md:text-base font-heading font-bold text-stone-900 uppercase tracking-wider mb-2">CUSTOMER RECORD / AVALIAÇÃO CLÍNICA</h3>
              <p className="text-[11px] md:text-xs text-stone-700 leading-relaxed font-body font-light">
                Antes de iniciar qualquer procedimento, realizamos uma rigorosa anamnese e diagnóstico da saúde da sua pele e biotipo, garantindo a aplicação dos ativos e tecnologias corretas.
              </p>
              <div className="mt-3 pt-3 border-t border-[#D98026]/30">
                <p className="text-[9px] md:text-[10px] text-stone-500 font-body">
                  <ShieldCheck className="inline w-3.5 h-3.5 text-[#B8620D] mr-1" />
                  <strong className="text-stone-800">Segurança Total:</strong> Resultados duradouros com zero intercorrências.
                </p>
              </div>
            </div>

            {/* Etapa 3 */}
            <div className="bg-[#FAF7F2] border border-[#EBE3D5] hover:border-[#D98026]/40 p-5 md:p-8 rounded-lg relative group transition duration-300 shadow-sm">
              <div className="absolute top-3 right-3 text-[#E0D7C3] font-extrabold text-4xl select-none group-hover:text-[#D98026]/20 transition logo-im">03</div>
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#B8620D] mb-4 border border-[#E0D7C3]/60 shadow-sm">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-sm md:text-base font-heading font-bold text-stone-900 uppercase tracking-wider mb-2">INÍCIO DO TRATAMENTO</h3>
              <p className="text-[11px] md:text-xs text-stone-600 leading-relaxed font-body font-light">
                Utilização de equipamentos de última geração e acompanhamento imediato pós-procedimento. Você recebe todas as orientações home care para otimizar os benefícios na sua rotina diária.
              </p>
              <div className="mt-4 pt-3 border-t border-[#EBE3D5]">
                <a 
                  href="#agendamento" 
                  className="inline-flex items-center gap-1 text-[11px] text-[#B8620D] hover:text-[#e5923c] font-bold font-body uppercase"
                >
                  Solicitar Agendamento <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de Resultados */}
      <section id="modelos" className="py-16 md:py-24 bg-[#FAF6F0] relative border-t border-[#EBE3D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 space-y-3">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#B8620D] font-bold block font-body">Galeria de Beleza</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold tracking-tight text-stone-900 leading-tight">
              Nossos Modelos de Resultados e Cuidados
            </h2>
            <div className="w-20 h-0.5 bg-[#D98026] mx-auto rounded-full"></div>
            <p className="text-stone-600 text-xs md:text-sm font-light font-body">
              Acompanhe fotos conceituais inspiradoras dos nossos tratamentos estéticos. Clique no coração para registrar sua curtida.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-2 mb-8">
            {[
              { key: 'all', label: 'Todos os Tratamentos' },
              { key: 'facial', label: 'Estética Facial' },
              { key: 'corporal', label: 'Estética Corporal' },
              { key: 'injetaveis', label: 'Procedimentos Injetáveis' }
            ].map((filter) => (
              <button 
                key={filter.key}
                onClick={() => setGalleryFilter(filter.key as typeof galleryFilter)}
                className={`px-4 py-1.5 rounded text-[10px] md:text-xs font-bold tracking-wider uppercase transition font-body ${
                  galleryFilter === filter.key 
                    ? 'bg-[#D98026] text-white shadow-sm' 
                    : 'bg-white text-stone-600 border border-[#EBE3D5] hover:bg-[#FAF7F2]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryItems
              .filter(item => galleryFilter === 'all' || item.category === galleryFilter)
              .map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white border border-[#EBE3D5] rounded-lg overflow-hidden shadow-sm group hover:border-[#D98026]/40 transition duration-300"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img 
                      src={item.image} 
                      alt={item.model_name} 
                      className="w-full h-full object-cover img-hover-zoom"
                    />
                    <button 
                      onClick={() => handleLike(item.id)}
                      className="absolute top-3 right-3 bg-white/90 hover:bg-white text-[#B8620D] px-2.5 py-1 rounded-full flex items-center gap-1.5 text-xs font-bold transition hover:scale-105 active:scale-95 shadow-sm font-body border border-[#EBE3D5]"
                      title="Curtir procedimento"
                    >
                      <Heart className="w-3.5 h-3.5 fill-[#D98026] text-[#D98026]" />
                      <span>{item.likes}</span>
                    </button>
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm border border-[#EBE3D5] text-stone-800 text-[9px] px-2.5 py-0.5 rounded font-body font-semibold tracking-wider uppercase">
                      {item.category === 'facial' ? 'Facial' : item.category === 'corporal' ? 'Corporal' : 'Injetáveis'}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-sm md:text-base lg:text-lg font-heading font-bold text-stone-900 leading-tight">{item.model_name}</h3>
                    <p className="text-[11px] text-stone-500 leading-relaxed font-body font-light">{item.details}</p>
                    <div className="pt-3 border-t border-[#F3EDE4] flex justify-between items-center">
                      <span className="text-[9px] text-stone-400 font-semibold uppercase tracking-wider font-body">Clínica Izadora</span>
                      <button 
                        onClick={() => handleQuickBook(item.model_name)}
                        className="text-[10px] md:text-xs text-[#B8620D] hover:text-[#e5923c] font-bold tracking-wider uppercase font-body"
                      >
                        Tenho Interesse <ChevronRight className="inline w-3 h-3 ml-0.5" />
                      </button>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Depoimentos e Avaliações Reais */}
      <section id="depoimentos" className="py-16 md:py-24 bg-white border-t border-[#EBE3D5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:grid-cols-12 md:gap-12">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#B8620D] font-bold block font-body">Avaliações de Clientes em Goiânia</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold tracking-tight text-stone-900 leading-tight">
                  O que dizem sobre nós no Google Estética
                </h2>
                <div className="w-12 h-0.5 bg-[#D98026] rounded-full"></div>
              </div>

              <div className="bg-[#FAF7F2] border border-[#EBE3D5] p-5 md:p-6 rounded-lg flex flex-col sm:flex-row items-start justify-between gap-4 md:gap-6 shadow-inner">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl md:text-5xl font-extrabold text-stone-900 logo-im">5.0</span>
                    <span className="text-xs text-stone-400 font-body">/ 5.0</span>
                  </div>
                  <div className="flex text-[#D98026] mt-1.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                  </div>
                  <p className="text-[11px] text-stone-500 mt-2 font-body font-light">Classificação Impecável de 5 Estrelas</p>
                </div>

                <div className="flex flex-wrap gap-2 text-[10px] md:text-xs text-stone-700">
                  {['Limpeza profunda impecável', 'Atendimento maravilhoso', 'Ambiente incrível'].map((tag, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-white rounded border border-[#EBE3D5] flex items-center gap-1.5 font-medium font-body shadow-sm">
                      <Gem className="w-2.5 h-2.5 text-[#B8620D]" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3 max-h-[440px] overflow-y-auto pr-1">
                {reviews.map((rev) => (
                  <div key={rev.id} className="p-4 bg-[#FAF7F2]/50 border border-[#EBE3D5] rounded-lg space-y-2 hover:border-[#D98026]/40 transition">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xs md:text-sm font-bold text-stone-900 flex items-center gap-1.5 font-body">
                          {rev.author}
                          {rev.verified && (
                            <span className="text-[8px] md:text-[9px] bg-emerald-100 text-emerald-800 font-extrabold uppercase px-1.5 py-0.5 rounded tracking-wider font-body">
                              <Verified className="inline w-2.5 h-2.5 mr-0.5" />
                              Verificada
                            </span>
                          )}
                        </h4>
                        <span className="text-[9px] text-stone-400 font-body">{rev.date}</span>
                      </div>
                      <div className="flex text-[#D98026]">
                        {Array.from({ length: rev.rating }).map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs md:text-sm text-stone-700 italic font-cosmetic leading-relaxed">
                      <Quote className="inline w-3 h-3 text-[#D98026] mr-1 opacity-40" />
                      {rev.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#FAF7F2] border border-[#EBE3D5] p-5 md:p-6 lg:p-8 rounded-lg self-start shadow-sm">
              <h3 className="text-base md:text-lg font-heading font-bold text-stone-900 mb-1">Deixe seu depoimento</h3>
              <p className="text-[11px] text-stone-500 mb-4 leading-relaxed font-body">
                Sua opinião é de extrema relevância para nós! Conte como foi a sua experiência com os nossos tratamentos faciais, corporais ou injetáveis:
              </p>

              <form onSubmit={handleAddReview} className="space-y-3 md:space-y-4">
                <div>
                  <label className="text-[9px] md:text-[10px] uppercase text-stone-500 font-bold tracking-[0.15em] block mb-1 font-body">Seu Nome Completo</label>
                  <input 
                    type="text" 
                    value={newReviewAuthor}
                    onChange={(e) => setNewReviewAuthor(e.target.value)}
                    placeholder="Ex: Gabriela Nascimento"
                    className="w-full bg-white border border-[#EBE3D5] text-stone-800 placeholder-stone-400 text-xs py-2.5 px-3 rounded focus:outline-none focus:border-[#D98026] transition font-body shadow-sm"
                    required
                  />
                </div>

                <div>
                  <label className="text-[9px] md:text-[10px] uppercase text-stone-500 font-bold tracking-[0.15em] block mb-1 font-body">Nota para o Trabalho</label>
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewReviewRating(star)}
                        className="text-[#D98026] hover:scale-110 active:scale-95 transition"
                      >
                        <Star className={`w-5 h-5 md:w-6 md:h-6 ${newReviewRating >= star ? 'fill-current' : 'text-stone-300'}`} />
                      </button>
                    ))}
                    <span className="text-[11px] font-semibold text-stone-700 ml-2 font-body">{newReviewRating} estrelas</span>
                  </div>
                </div>

                <div>
                  <label className="text-[9px] md:text-[10px] uppercase text-stone-500 font-bold tracking-[0.15em] block mb-1 font-body">Sua Mensagem</label>
                  <textarea 
                    value={newReviewText}
                    onChange={(e) => setNewReviewText(e.target.value)}
                    placeholder="Escreva aqui sua experiência sobre a limpeza profunda, peeling ou preenchimento..."
                    rows={3}
                    className="w-full bg-white border border-[#EBE3D5] text-stone-800 placeholder-stone-400 text-xs py-2.5 px-3 rounded focus:outline-none focus:border-[#D98026] transition resize-none font-body shadow-sm"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-2.5 md:py-3 bg-[#D98026] text-white hover:bg-[#b56517] font-bold text-[10px] md:text-xs uppercase tracking-[0.15em] rounded transition font-body shadow-sm"
                >
                  Publicar Comentário no Site
                </button>

                {reviewSubmitSuccess && (
                  <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded text-emerald-800 text-xs text-center font-body">
                    Depoimento enviado com sucesso e inserido na listagem!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Agendamento (cta_appointment adaptado) */}
      <section id="agendamento" className="py-16 md:py-24 bg-[#FAF6F0] border-t border-[#EBE3D5] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-5 md:space-y-6">
              <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#B8620D] font-bold block font-body">Solicite seu Horário</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold tracking-tight text-stone-900 leading-tight">
                Just fill out the form of appointment
              </h2>
              <p className="text-[11px] md:text-xs text-[#B8620D] uppercase tracking-[0.15em] font-bold font-body">
                (Basta preencher o formulário de agendamento abaixo)
              </p>
              
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed font-light font-body">
                Preencha os campos com suas preferências de data e horário. Nossa equipe receberá a sua solicitação formatada em nosso WhatsApp para confirmar sua avaliação personalizada de estética.
              </p>

              <div className="p-3.5 bg-white rounded border border-[#EBE3D5] space-y-2 shadow-sm">
                <p className="text-[10px] text-[#B8620D] uppercase font-bold tracking-wider font-body flex items-center gap-1">
                  <Coffee className="w-3.5 h-3.5" />
                  Bebida Cortesia Reservada para sua Visita
                </p>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#FAF7F2] rounded text-[#B8620D] border border-[#E0D7C3]">
                    <DrinkIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-stone-900 font-body">{selectedWelcomeDrink}</p>
                    <p className="text-[9px] text-stone-400 font-body">Definida na seção anterior (Passo 1)</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-[#E0D7C3]/60">
                {[
                  { icon: MapPin, text: "Endereço: Av. das Aroeiras - Jardim das Aroeiras, Goiânia - GO, 74770-440" },
                  { icon: Phone, text: "Telefone: (62) 99366-6495", isLink: true, href: "tel:62993666495" },
                  { icon: Clock, text: "Horário de Funcionamento: Aberto até às 20:00" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-[11px] md:text-xs text-stone-600 font-body">
                    <item.icon className="w-3.5 h-3.5 text-[#B8620D] flex-shrink-0 mt-0.5" />
                    {item.isLink ? (
                      <a href={(item as any).href} className="text-[#B8620D] hover:underline font-semibold">{(item as any).text}</a>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 bg-white border border-[#EBE3D5] p-5 md:p-6 lg:p-8 rounded-lg relative shadow-sm">
              <div className="absolute top-0 right-4 md:right-10 transform -translate-y-1/2 px-4 py-1.5 bg-[#B8620D] text-white font-extrabold text-[8px] md:text-[9px] tracking-[0.2em] uppercase rounded font-body shadow-sm">
                Integração via WhatsApp
              </div>

              <h3 className="text-base md:text-lg font-heading font-bold text-stone-900 mb-4">Formulário Oficial de Agendamento</h3>
              
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[9px] md:text-[10px] uppercase text-stone-500 font-bold tracking-[0.15em] block mb-1 font-body">Seu Nome Completo *</label>
                    <input 
                      type="text" 
                      value={bookingName}
                      onChange={(e) => setBookingName(e.target.value)}
                      placeholder="Ex: Amanda Cortez"
                      className="w-full bg-[#FAF7F2] border border-[#EBE3D5] text-stone-800 placeholder-stone-400 text-xs py-2.5 px-3 rounded focus:outline-none focus:border-[#D98026] transition font-body shadow-inner"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[9px] md:text-[10px] uppercase text-stone-500 font-bold tracking-[0.15em] block mb-1 font-body">Seu Telefone com DDD *</label>
                    <input 
                      type="tel" 
                      value={bookingPhone}
                      onChange={(e) => setBookingPhone(e.target.value)}
                      placeholder="Ex: (62) 99366-6495"
                      className="w-full bg-[#FAF7F2] border border-[#EBE3D5] text-stone-800 placeholder-stone-400 text-xs py-2.5 px-3 rounded focus:outline-none focus:border-[#D98026] transition font-body shadow-inner"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="text-[9px] md:text-[10px] uppercase text-stone-500 font-bold tracking-[0.15em] block mb-1 font-body">Procedimento Escolhido</label>
                    <select 
                      value={bookingService}
                      onChange={(e) => setBookingService(e.target.value)}
                      className="w-full bg-[#FAF7F2] border border-[#EBE3D5] text-stone-700 text-xs font-medium py-2.5 px-3 rounded focus:outline-none focus:border-[#D98026] transition cursor-pointer font-body shadow-inner"
                    >
                      <option value="Estética Facial Premium (Limpeza de pele profunda)">Estética Facial (Limpeza profunda + Peeling + Dermaplaning)</option>
                      <option value="Massagem Corporal & Drenagem Linfática">Estética Corporal (Massagem Modeladora & Drenagem)</option>
                      <option value="Injetáveis Avançados (Botox & Preenchimento)">Procedimentos Injetáveis (Botox, Labial e Bioestimuladores)</option>
                      <option value="Depilação a Laser Cuidados Avançados">Depilação a Laser e Aparelhos Avançados</option>
                      <option value="Consulta Diagnóstica de Avaliação Geral">Consulta de Avaliação e Anamnese Geral</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-[9px] md:text-[10px] uppercase text-stone-500 font-bold tracking-[0.15em] block mb-1 font-body">Bebida Reservada</label>
                    <div className="w-full bg-white border border-[#EBE3D5] text-stone-500 text-[11px] py-2.5 px-3 rounded flex items-center gap-2 font-body truncate">
                      <DrinkIcon className="w-3.5 h-3.5 text-[#B8620D] flex-shrink-0" />
                      <span className="truncate">{selectedWelcomeDrink}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[9px] md:text-[10px] uppercase text-stone-500 font-bold tracking-[0.15em] block mb-1 font-body">Data de Preferência *</label>
                    <input 
                      type="date" 
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full bg-[#FAF7F2] border border-[#EBE3D5] text-stone-800 text-xs py-2.5 px-3 rounded focus:outline-none focus:border-[#D98026] transition font-body shadow-inner"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[9px] md:text-[10px] uppercase text-stone-500 font-bold tracking-[0.15em] block mb-1 font-body">Horário de Preferência *</label>
                    <input 
                      type="time" 
                      value={bookingTime}
                      onChange={(e) => setBookingTime(e.target.value)}
                      className="w-full bg-[#FAF7F2] border border-[#EBE3D5] text-stone-800 text-xs py-2.5 px-3 rounded focus:outline-none focus:border-[#D98026] transition font-body shadow-inner"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[9px] md:text-[10px] uppercase text-stone-500 font-bold tracking-[0.15em] block mb-1 font-body">Observações Importantes (Opcional)</label>
                  <textarea 
                    value={bookingNotes}
                    onChange={(e) => setBookingNotes(e.target.value)}
                    placeholder="Informe se possui alguma alergia ou restrição a medicamentos ou cosméticos..."
                    rows={2}
                    className="w-full bg-[#FAF7F2] border border-[#EBE3D5] text-stone-800 placeholder-stone-400 text-xs py-2.5 px-3 rounded focus:outline-none focus:border-[#D98026] transition resize-none font-body shadow-inner"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-[#D98026] to-[#b56517] text-white font-extrabold text-xs uppercase tracking-[0.15em] rounded transition flex items-center justify-center gap-2 shadow-md font-body"
                >
                  <Send className="w-3.5 h-3.5" />
                  RESERVAR AGORA / ENVIAR SOLICITAÇÃO
                </button>

                {bookingSuccess && (
                  <div className="p-2.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded text-center font-body">
                    Formatando mensagem profissional e redirecionando para o WhatsApp...
                  </div>
                )}

                <p className="text-[9px] text-stone-400 text-center mt-1 font-body">
                  * As informações acima preencherão automaticamente o texto de agendamento em seu aplicativo.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Mapa e Localização */}
      <section className="py-12 md:py-16 bg-white border-t border-[#EBE3D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-[10px] md:text-xs uppercase text-[#B8620D] font-bold tracking-[0.25em] font-body">Localização Fácil</span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-stone-900 leading-tight">Como chegar ao Jardim das Aroeiras</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed font-light font-body">
                Nossa clínica de estética está em uma localização de fácil acesso no Jardim das Aroeiras, em Goiânia, Goiás, contando com vagas de estacionamento seguras em frente à recepção.
              </p>
              <div className="p-4 bg-[#FAF7F2] border border-[#EBE3D5] rounded space-y-2 text-xs shadow-sm">
                <p className="text-stone-900 font-bold font-body">
                  <MapPinned className="inline w-3.5 h-3.5 text-[#B8620D] mr-1.5" />
                  Endereço Cadastrado:
                </p>
                <p className="text-stone-700 font-light font-body">Av. das Aroeiras - Jardim das Aroeiras, Goiânia - GO, 74770-440</p>
                <div className="pt-2 flex items-center gap-4">
                  <a 
                    href="https://maps.google.com/?q=Av.+das+Aroeiras+-+Jardim+das+Aroeiras,+Goiânia+-+GO,+74770-440" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-[#B8620D] hover:underline font-bold text-xs flex items-center gap-1 font-body"
                  >
                    Rotas no Google Maps GPS <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-[#EBE3D5] shadow-md h-56 sm:h-64 md:h-72 relative">
              <div className="absolute inset-0 bg-[#FAF6F0] flex flex-col items-center justify-center p-4 text-center space-y-3">
                <MapPin className="w-10 h-10 text-[#B8620D] animate-pulse" />
                <div>
                  <p className="text-xs md:text-sm font-bold text-stone-900 font-heading">Av. das Aroeiras, Jardim das Aroeiras</p>
                  <p className="text-[10px] text-stone-400 font-body">Goiânia - GO, CEP 74770-440</p>
                </div>
                <a 
                  href="https://maps.google.com/?q=Av.+das+Aroeiras+-+Jardim+das+Aroeiras,+Goiânia+-+GO,+74770-440" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-5 py-2 bg-[#D98026] text-white font-bold text-[10px] md:text-xs uppercase rounded transition hover:bg-[#e5923c] font-body tracking-wider"
                >
                  Visualizar Rotas no GPS
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé do Site em Português */}
      <footer className="bg-[#FAF7F2] text-stone-600 border-t border-[#EBE3D5] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 md:mb-12">
            
            {/* Coluna 1 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F3EDE4] border border-[#D98026]/40 flex items-center justify-center shadow-sm">
                  <span className="logo-im text-[#B8620D] text-base font-black">IM</span>
                </div>
                <span className="text-base font-heading font-bold text-stone-900">Izadora Meireles</span>
              </div>
              <p className="text-[11px] text-stone-500 leading-relaxed font-light font-body">
                Especializada em estética facial e corporal. Massagem, limpeza de pele profunda, peeling de diamante, dermaplaning, depilação a laser.
              </p>
              <div className="pt-1">
                <a 
                  href="#agendamento" 
                  className="px-4 py-2 bg-white border border-[#E0D7C3] text-[#B8620D] text-[10px] font-bold rounded hover:bg-[#D98026] hover:text-white transition uppercase block text-center font-body tracking-wider"
                >
                  Para Informações e Agendamento
                </a>
              </div>
            </div>

            {/* Coluna 2 */}
            <div className="space-y-4">
              <h4 className="text-stone-900 font-bold text-xs md:text-sm tracking-wider uppercase font-heading">Tratamentos Oferecidos</h4>
              <ul className="space-y-1.5 text-[11px] font-body">
                {['Limpeza de Pele Profunda', 'Peeling de Diamante', 'Dermaplaning Facial', 'Massagens Corporais e Drenagem', 'Todos os Injetáveis Avançados'].map((service, idx) => (
                  <li key={idx}>
                    <a href="#servicos" className="hover:text-[#B8620D] transition text-stone-500 font-light">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 3 */}
            <div className="space-y-4">
              <h4 className="text-stone-900 font-bold text-xs md:text-sm tracking-wider uppercase font-heading">Redes Sociais</h4>
              <div className="flex flex-col gap-2.5 text-[11px] font-body">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#B8620D] transition flex items-center gap-1.5 text-stone-600 hover:text-[#B8620D] font-light">
                  <svg className="w-4 h-4 text-[#B8620D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> Instagram Oficial
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#B8620D] transition flex items-center gap-1.5 text-stone-600 hover:text-[#B8620D] font-light">
                  <svg className="w-4 h-4 text-[#B8620D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> Facebook Oficial
                </a>
                <a href="https://wa.me/5562993666495" target="_blank" rel="noreferrer" className="hover:text-[#B8620D] transition flex items-center gap-1.5 text-stone-600 hover:text-[#B8620D] font-light">
                  <MessageSquare className="w-4 h-4 text-[#B8620D]" /> WhatsApp Comercial
                </a>
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="hover:text-[#B8620D] transition flex items-center gap-1.5 text-stone-600 hover:text-[#B8620D] font-light">
                  <MapPin className="w-4 h-4 text-[#B8620D]" /> Avaliações Google
                </a>
              </div>
            </div>

            {/* Coluna 4 */}
            <div className="space-y-4">
              <h4 className="text-stone-900 font-bold text-xs md:text-sm tracking-wider uppercase font-heading">Novidades e Informativos</h4>
              <p className="text-[11px] text-stone-500 font-light font-body">Inscreva seu e-mail para receber nossas dicas estéticas:</p>
              
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <input 
                  type="email" 
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Exemplo: jami@windowslive.com"
                  className="w-full bg-white border border-[#EBE3D5] text-stone-800 placeholder-stone-400 text-xs py-2 px-3 rounded focus:outline-none focus:border-[#D98026] transition font-body shadow-sm"
                  required
                />
                <button 
                  type="submit"
                  className="w-full py-2.5 bg-[#D98026] text-white font-bold text-[10px] md:text-xs uppercase tracking-wider rounded transition font-body flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Cadastrar E-mail
                </button>
              </form>

              {newsletterSuccess && (
                <p className="text-[10px] text-emerald-700 font-body font-medium">
                  Inscrição efetuada com sucesso!
                </p>
              )}
            </div>
          </div>

          <div className="pt-6 md:pt-8 border-t border-[#EBE3D5] flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-stone-400">
            <p className="font-body font-light text-center sm:text-left">
              © Todos os direitos reservados. Adaptado e Desenvolvido para Izadora Meireles Estética.
            </p>
            <div className="flex text-[#D98026] gap-1 justify-center items-center">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 fill-current" />)}
              <span className="text-[10px] text-stone-500 font-semibold ml-1 font-body">Nota máxima de 5,0 no Google</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}