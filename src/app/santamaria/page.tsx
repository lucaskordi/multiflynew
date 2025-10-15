'use client';

import { useState, useEffect } from 'react';

export default function SantaMaria() {
  const [activeTab, setActiveTab] = useState('events');
  const [showDressCodeModal, setShowDressCodeModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  const dressCodeImages = [
    '/DC01.jpg',
    '/DC02.jpg',
    '/DC03.jpg',
    '/DC04.jpg',
    '/DC05.jpg',
    '/DC06.jpg',
    '/DC07.jpg',
    '/DC08.jpg'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % dressCodeImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + dressCodeImages.length) % dressCodeImages.length);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.05, rootMargin: '50px' }
    );

    const sections = document.querySelectorAll('section[id], div[id]');
    sections.forEach((section) => {
      if (section.id) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.id) {
          observer.unobserve(section);
        }
      });
    };
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-slate-900 text-white font-montserrat">
      {/* Header */}
      <header className="sticky top-0 z-50">
        <div className="px-8 py-6 bg-slate-900/40 backdrop-blur-lg">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <img 
              src="/LOGOMARISTA.svg" 
              alt="Colégios Maristas" 
              className="h-12 w-auto"
            />
            </div>
          
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#eventos" onClick={() => setActiveTab('events')} className="text-sm text-slate-300 hover:text-yellow-400 transition-all duration-300 hover:scale-110">Eventos</a>
            <a href="#programacao" onClick={() => setActiveTab('events')} className="text-sm text-slate-300 hover:text-yellow-400 transition-all duration-300 hover:scale-110">Programação</a>
            <a href="#vestimenta" onClick={() => setActiveTab('events')} className="text-sm text-slate-300 hover:text-yellow-400 transition-all duration-300 hover:scale-110">Vestimenta</a>
            <a href="#informacoes" onClick={() => setActiveTab('events')} className="text-sm text-slate-300 hover:text-yellow-400 transition-all duration-300 hover:scale-110">Informações</a>
            <a href="#servicos" onClick={() => setActiveTab('events')} className="text-sm text-slate-300 hover:text-yellow-400 transition-all duration-300 hover:scale-110">Serviços</a>
            <a href="#faq" onClick={() => setActiveTab('faq')} className="text-sm text-slate-300 hover:text-yellow-400 transition-all duration-300 hover:scale-110">FAQ</a>
            <a href="#contato" onClick={() => setActiveTab('events')} className="text-sm text-slate-300 hover:text-yellow-400 transition-all duration-300 hover:scale-110">Contato</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white hover:text-yellow-400 transition-colors"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            <img 
              src="/MUTLIFLY.svg" 
              alt="Multifly" 
              className="h-10 w-auto"
            />
          </div>
        </div>
        </div>
        
        <div className="relative w-full h-px max-w-7xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        </div>
      </header>

      {/* Mobile Menu */}
      <nav 
        className={`lg:hidden fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-2xl shadow-2xl flex items-center justify-center transition-all duration-500 ${
          mobileMenuOpen ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 -translate-x-full pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-8 right-8 text-white hover:text-yellow-400 transition-all duration-300 hover:scale-110 z-10"
          aria-label="Fechar menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div 
          className="flex flex-col w-full max-w-md px-4 py-8 justify-between h-full"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex-1 flex flex-col justify-center">
            <a 
              href="#eventos" 
              onClick={() => { setActiveTab('events'); setMobileMenuOpen(false); }}
              className="text-lg text-center text-slate-300 hover:text-yellow-400 hover:bg-slate-700/30 px-6 py-4 transition-all duration-300 hover:scale-105"
            >
              Eventos
            </a>
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mx-4"></div>
            
            <a 
              href="#programacao" 
              onClick={() => { setActiveTab('events'); setMobileMenuOpen(false); }}
              className="text-lg text-center text-slate-300 hover:text-yellow-400 hover:bg-slate-700/30 px-6 py-4 transition-all duration-300 hover:scale-105"
            >
              Programação
            </a>
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mx-4"></div>
            
            <a 
              href="#vestimenta" 
              onClick={() => { setActiveTab('events'); setMobileMenuOpen(false); }}
              className="text-lg text-center text-slate-300 hover:text-yellow-400 hover:bg-slate-700/30 px-6 py-4 transition-all duration-300 hover:scale-105"
            >
              Vestimenta
            </a>
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mx-4"></div>
            
            <a 
              href="#informacoes" 
              onClick={() => { setActiveTab('events'); setMobileMenuOpen(false); }}
              className="text-lg text-center text-slate-300 hover:text-yellow-400 hover:bg-slate-700/30 px-6 py-4 transition-all duration-300 hover:scale-105"
            >
              Informações
            </a>
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mx-4"></div>
            
            <a 
              href="#servicos" 
              onClick={() => { setActiveTab('events'); setMobileMenuOpen(false); }}
              className="text-lg text-center text-slate-300 hover:text-yellow-400 hover:bg-slate-700/30 px-6 py-4 transition-all duration-300 hover:scale-105"
            >
              Serviços
            </a>
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mx-4"></div>
            
            <a 
              href="#faq" 
              onClick={() => { setActiveTab('faq'); setMobileMenuOpen(false); }}
              className="text-lg text-center text-slate-300 hover:text-yellow-400 hover:bg-slate-700/30 px-6 py-4 transition-all duration-300 hover:scale-105"
            >
              FAQ
            </a>
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mx-4"></div>
            
            <a 
              href="#contato" 
              onClick={() => { setActiveTab('events'); setMobileMenuOpen(false); }}
              className="text-lg text-center text-slate-300 hover:text-yellow-400 hover:bg-slate-700/30 px-6 py-4 transition-all duration-300 hover:scale-105"
            >
              Contato
            </a>
        </div>
          
          <div className="flex justify-center mt-8">
            <img 
              src="/MUTLIFLY.svg" 
              alt="Multifly" 
              className="h-10 w-auto opacity-80 relative z-10"
            />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Formatura Terceirão
        </h1>
        <h2 className="text-5xl md:text-7xl font-bold mb-8">
          Santa Maria 2025
        </h2>
        <p className="text-slate-300 text-lg md:text-xl max-w-4xl mx-auto mb-12">
          Neste material contemplamos as respostas das principais dúvidas das famílias em relação à Formatura do Terceirão Santa Maria 2025.
        </p>
        
        {/* Botões */}
        <div className="flex justify-center gap-6">
          <button
          onClick={() => setActiveTab('events')}
          className={`px-8 py-4 rounded-full font-medium transition-all duration-300 transform origin-center backdrop-blur-lg ${
            activeTab === 'events'
              ? 'bg-slate-800/40 border-2 border-yellow-400 text-white shadow-lg shadow-yellow-400/25 scale-105 hover:bg-yellow-400 hover:text-slate-900 hover:scale-110'
              : 'bg-slate-800/40 border border-slate-600/50 text-white hover:bg-yellow-400 hover:text-slate-900 hover:scale-110 hover:shadow-lg hover:shadow-yellow-400/25'
          }`}
        >
          Ver Eventos
          </button>
          <button
            onClick={() => setActiveTab('faq')}
          className={`px-8 py-4 rounded-full font-medium transition-all duration-300 transform origin-center backdrop-blur-lg ${
              activeTab === 'faq'
              ? 'bg-slate-800/40 border-2 border-yellow-400 text-white shadow-lg shadow-yellow-400/25 scale-105 hover:bg-yellow-400 hover:text-slate-900 hover:scale-110'
              : 'bg-slate-800/40 border border-slate-600/50 text-white hover:bg-yellow-400 hover:text-slate-900 hover:scale-110 hover:shadow-lg hover:shadow-yellow-400/25'
            }`}
          >
          Perguntas Frequentes
          </button>
              </div>
      </section>

      {/* Seção de Eventos */}
      {activeTab === 'events' && (
      <section id="eventos" className={`py-20 px-6 scroll-mt-24 transition-all duration-1000 ${visibleSections.has('eventos') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Eventos da Formatura</h2>
            <div className="grid md:grid-cols-2 gap-8">
          {/* Colação de Grau */}
            <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50 shadow-xl">
            <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
              </div>
              <h3 className="text-xl font-bold">Colação de Grau</h3>
              </div>
            <div className="space-y-3">
                  <p className="text-slate-300 text-sm">Cerimônia oficial de formatura</p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p><span className="font-semibold">Data:</span> 04 de Dezembro de 2025 - Quinta-feira</p>
              </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
              <p><span className="font-semibold">Horário:</span> 19h30</p>
              </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
              <p><span className="font-semibold">Local:</span> Ópera de Arame</p>
              </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
              <p><span className="font-semibold">Endereço:</span> Rua João Gava, 920 - Abranches - Curitiba</p>
              </div>
              </div>
                  <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-3 mt-4 border border-slate-600/30">
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                        </svg>
                        <p><span className="font-semibold text-yellow-400">Convites:</span> 6 convites por formando</p>
              </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <p><span className="font-semibold text-yellow-400">Traje:</span> Esporte Fino</p>
              </div>
            </div>
          </div>
        </div>
            </div>

              {/* Baile de Formatura */}
          <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50 shadow-xl">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
          </div>
              <h3 className="text-xl font-bold">Baile de Formatura</h3>
            </div>
            <div className="space-y-3">
              <p className="text-slate-300 text-sm">Festa de celebração da formatura</p>
              <div className="space-y-3">
            <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p><span className="font-semibold">Data:</span> 19 de Dezembro de 2025 - Sexta-feira</p>
          </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p><span className="font-semibold">Horário:</span> 20h00</p>
          </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <p><span className="font-semibold">Local:</span> Viasoft Experience</p>
        </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p><span className="font-semibold">Endereço:</span> Prof. Pedro Viriato Parigot de Souza, 5300 - Cidade Industrial - Curitiba</p>
          </div>
        </div>
              <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-3 mt-4 border border-slate-600/30">
                <div className="space-y-3">
              <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <p><span className="font-semibold text-yellow-400">Mesas:</span> Mesas de 4, 6, 8 ou 10 lugares</p>
          </div>
              <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <p><span className="font-semibold text-yellow-400">Traje:</span> Passeio Completo</p>
        </div>
        </div>
            </div>
            </div>
            </div>
            </div>

          {/* Programação da Colação */}
          <div id="programacao" className={`w-full mt-24 scroll-mt-24 transition-all duration-1000 ${visibleSections.has('programacao') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ background: 'radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.25) 0%, rgba(30, 58, 138, 0.12) 20%, rgba(30, 58, 138, 0.05) 35%, rgba(30, 58, 138, 0.01) 45%, transparent 55%)' }}>
            <div className="max-w-6xl mx-auto pt-20 pb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Programação da Colação de Grau</h2>
            
            <div className="relative">
              {/* Linha vertical */}
              <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 via-blue-500 to-yellow-400 rounded-full"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {/* Item 1 */}
                <div className="relative flex items-center">
                  <div className="hidden md:block md:w-1/2 pr-12 text-right">
                    <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50 shadow-xl hover:scale-105 transition-all duration-300">
                      <div className="flex items-center justify-end gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-yellow-400">15h00</h3>
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
          </div>
                      <p className="text-slate-300">Chegada dos alunos ao local do evento</p>
        </div>
        </div>
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-400 rounded-full border-4 border-slate-900 z-10 hover:scale-125 transition-all duration-300"></div>
                  <div className="w-full md:w-1/2 pl-16 md:pl-12">
                    <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50 shadow-xl hover:scale-105 transition-all duration-300 md:hidden">
                      <div className="flex items-center gap-3 mb-2">
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <h3 className="text-2xl font-bold text-yellow-400">15h00</h3>
        </div>
                      <p className="text-slate-300">Chegada dos alunos ao local do evento</p>
        </div>
          </div>
          </div>

                {/* Item 2 */}
                <div className="relative flex items-center">
                  <div className="hidden md:block md:w-1/2 pr-12"></div>
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-slate-900 z-10 hover:scale-125 transition-all duration-300"></div>
                  <div className="w-full md:w-1/2 pl-16 md:pl-12">
                    <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50 shadow-xl hover:scale-105 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <h3 className="text-2xl font-bold text-yellow-400">15h00 - 17h20</h3>
          </div>
                      <p className="text-slate-300">Circuito de fotos individuais no Ópera de Arame</p>
          </div>
        </div>
          </div>

                {/* Item 3 */}
                <div className="relative flex items-center">
                  <div className="hidden md:block md:w-1/2 pr-12 text-right">
                    <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50 shadow-xl hover:scale-105 transition-all duration-300">
                      <div className="flex items-center justify-end gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-yellow-400">17h20</h3>
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
        </div>
                      <p className="text-slate-300">Bate-papo com os alunos e passagem final da cerimônia</p>
        </div>
        </div>
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-400 rounded-full border-4 border-slate-900 z-10 hover:scale-125 transition-all duration-300"></div>
                  <div className="w-full md:w-1/2 pl-16 md:pl-12">
                    <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50 shadow-xl hover:scale-105 transition-all duration-300 md:hidden">
                      <div className="flex items-center gap-3 mb-2">
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        <h3 className="text-2xl font-bold text-yellow-400">17h20</h3>
          </div>
                      <p className="text-slate-300">Bate-papo com os alunos e passagem final da cerimônia</p>
          </div>
          </div>
        </div>

                {/* Item 4 */}
                <div className="relative flex items-center">
                  <div className="hidden md:block md:w-1/2 pr-12"></div>
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-slate-900 z-10 hover:scale-125 transition-all duration-300"></div>
                  <div className="w-full md:w-1/2 pl-16 md:pl-12">
                    <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50 shadow-xl hover:scale-105 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                        </svg>
                        <h3 className="text-2xl font-bold text-yellow-400">18h15</h3>
          </div>
                      <p className="text-slate-300">Abertura da portaria e liberação dos estúdios de foto</p>
        </div>
          </div>
          </div>

                {/* Item 5 */}
                <div className="relative flex items-center">
                  <div className="hidden md:block md:w-1/2 pr-12 text-right">
                    <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50 shadow-xl hover:scale-105 transition-all duration-300">
                      <div className="flex items-center justify-end gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-yellow-400">19h20</h3>
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                        </svg>
        </div>
                      <p className="text-slate-300">Avisos gerais</p>
          </div>
        </div>
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-400 rounded-full border-4 border-slate-900 z-10 hover:scale-125 transition-all duration-300"></div>
                  <div className="w-full md:w-1/2 pl-16 md:pl-12">
                    <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50 shadow-xl hover:scale-105 transition-all duration-300 md:hidden">
                      <div className="flex items-center gap-3 mb-2">
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                        </svg>
                        <h3 className="text-2xl font-bold text-yellow-400">19h20</h3>
            </div>
                      <p className="text-slate-300">Avisos gerais</p>
          </div>
        </div>
        </div>

                {/* Item 6 */}
                <div className="relative flex items-center">
                  <div className="hidden md:block md:w-1/2 pr-12"></div>
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-blue-500 rounded-full border-4 border-slate-900 z-10 hover:scale-125 transition-all duration-300 shadow-lg shadow-yellow-400/50"></div>
                  <div className="w-full md:w-1/2 pl-16 md:pl-12">
                    <div className="bg-gradient-to-br from-slate-800/60 to-slate-800/40 backdrop-blur-lg rounded-xl p-6 border-2 border-yellow-400/50 shadow-xl hover:scale-105 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                        <h3 className="text-2xl font-bold text-yellow-400">19h30</h3>
        </div>
                      <p className="text-slate-300 font-semibold">Início da Solenidade</p>
              </div>
            </div>
            </div>
          </div>
              </div>
            </div>
          
          {/* Info Box */}
          <div className="max-w-6xl mx-auto mt-12">
            <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl p-6 border border-yellow-400/50 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
            </div>
                <p className="text-slate-300 text-lg">
                  <span className="font-semibold text-yellow-400">Atenção:</span> Kits individuais de alimentação serão disponibilizados para os formandos
          </p>
        </div>
          </div>
          </div>
        </div>

          {/* Código de Vestimenta */}
          <div id="vestimenta" className={`w-full mt-24 scroll-mt-24 transition-all duration-1000 ${visibleSections.has('vestimenta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ background: 'radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.25) 0%, rgba(30, 58, 138, 0.12) 20%, rgba(30, 58, 138, 0.05) 35%, rgba(30, 58, 138, 0.01) 45%, transparent 55%)' }}>
            <div className="max-w-6xl mx-auto pt-20 pb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Código de Vestimenta</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Colação de Grau */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
              </div>
              <div>
                    <h3 className="text-2xl font-bold">Colação de Grau</h3>
                    <p className="text-yellow-400 font-semibold">Esporte Fino</p>
            </div>
          </div>

                <div className="space-y-6">
                  {/* Formandas */}
              <div>
                    <h4 className="font-bold text-lg text-yellow-400 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 320 512">
                        <path d="M160 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM88 384H70.2c-10.9 0-18.6-10.7-15.2-21.1L93.3 248.1 59.4 304.5c-9.1 15.1-28.2 20-43.3 10.9s-20-28.2-10.9-43.3l53.6-89.2c20.3-33.7 56.7-54.3 96-54.3h11.6c39.3 0 75.7 20.6 96 54.3l53.6 89.2c9.1 15.1 4.2 34.8-10.9 43.3s-34.8 4.2-43.3-10.9l-33.9-56.3L265 362.9c3.5 10.4-4.3 21.1-15.2 21.1H232v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384H152v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z"/>
                      </svg>
                      Formandas
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Esporte Fino nas cores <span className="font-semibold text-white">azul marinho, off white ou preto</span>. Evitem vestidos curtos ou fendas acentuadas, considerando que estarão em praticável elevado com ampla visibilidade.
              </p>
              </div>

                  {/* Formandos */}
              <div>
                    <h4 className="font-bold text-lg text-blue-400 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 320 512">
                        <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.2 20-43.3 10.9s-20-28.2-10.9-43.3l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.3s-34.8 4.2-43.3-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z"/>
                      </svg>
                      Formandos
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Esporte Fino com camisa social <span className="font-semibold text-white">azul claro, branca ou azul marinho</span> e calça <span className="font-semibold text-white">bege, preta ou azul marinho</span>.
            </p>
          </div>

                  {/* Pais e Convidados */}
                  <div>
                    <h4 className="font-bold text-lg text-slate-400 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Pais e Convidados
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Esporte Fino. <span className="italic">Sugerimos evitar tons de azul marinho e azul claro para que o destaque visual permaneça nos formandos.</span>
            </p>
          </div>
        </div>
          </div>

              {/* Baile de Formatura */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
        </div>
            <div>
                    <h3 className="text-2xl font-bold">Baile de Formatura</h3>
                    <p className="text-yellow-400 font-semibold">Passeio Completo</p>
            </div>
                </div>

                <div className="space-y-6">
                  {/* Formandas */}
                  <div>
                    <h4 className="font-bold text-lg text-yellow-400 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 320 512">
                        <path d="M160 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM88 384H70.2c-10.9 0-18.6-10.7-15.2-21.1L93.3 248.1 59.4 304.5c-9.1 15.1-28.2 20-43.3 10.9s-20-28.2-10.9-43.3l53.6-89.2c20.3-33.7 56.7-54.3 96-54.3h11.6c39.3 0 75.7 20.6 96 54.3l53.6 89.2c9.1 15.1 4.2 34.8-10.9 43.3s-34.8 4.2-43.3-10.9l-33.9-56.3L265 362.9c3.5 10.4-4.3 21.1-15.2 21.1H232v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384H152v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z"/>
                      </svg>
                      Formandas
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed font-semibold">
                      Passeio Completo
          </p>
        </div>

                  {/* Formandos */}
                  <div>
                    <h4 className="font-bold text-lg text-blue-400 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 320 512">
                        <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.2 20-43.3 10.9s-20-28.2-10.9-43.3l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.3s-34.8 4.2-43.3-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z"/>
                      </svg>
                      Formandos
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      <span className="font-semibold text-white">Smoking ou Terno</span>
                    </p>
              </div>

                  {/* Pais e Convidados */}
                  <div>
                    <h4 className="font-bold text-lg text-slate-400 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Pais e Convidados
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed font-semibold">
                      Passeio Completo
          </p>
        </div>
          </div>

                {/* Aviso Importante */}
                <div className="mt-6 bg-red-900/20 backdrop-blur-md rounded-lg p-4 border border-red-500/50">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
              </div>
                    <p className="text-slate-300 text-sm">
                      <span className="font-bold text-red-400">Importante:</span> Não será liberada entrada de convidados fora do dress code determinado.
          </p>
        </div>
          </div>

          </div>
          </div>
          </div>

          {/* Botão Ver Referências - Abaixo dos cards */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowDressCodeModal(true)}
              className="bg-slate-800/40 backdrop-blur-lg border border-slate-600/50 text-white py-3 px-8 rounded-full font-medium transition-all duration-300 transform origin-center hover:bg-yellow-400 hover:text-slate-900 hover:scale-110 hover:shadow-lg hover:shadow-yellow-400/25 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Ver Referências de Vestimenta
            </button>
        </div>
        </div>

          {/* Informações Detalhadas */}
          <div id="informacoes" className={`w-full mt-24 scroll-mt-24 transition-all duration-1000 ${visibleSections.has('informacoes') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ background: 'radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.25) 0%, rgba(30, 58, 138, 0.12) 20%, rgba(30, 58, 138, 0.05) 35%, rgba(30, 58, 138, 0.01) 45%, transparent 55%)' }}>
            <div className="max-w-6xl mx-auto pt-20 pb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Informações Importantes</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Card 1: Política para Crianças */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center p-2">
                    <img src="/baby.svg" alt="Crianças" className="w-full h-full" />
          </div>
                  <h3 className="text-xl font-bold">Política para Crianças (Baile)</h3>
        </div>
                
        <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">0 a 2 anos:</h4>
                    <p className="text-slate-300 text-sm">Não é necessário convite, mas não terão cadeira.</p>
            </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">3 a 7 anos:</h4>
                    <p className="text-slate-300 text-sm mb-2">Precisam de convite, terão cadeira e são contabilizadas como convidados. Reembolso de R$60,00 via PIX em até 15 dias úteis após o evento.</p>
          </div>
                  
                  <div className="bg-yellow-900/20 backdrop-blur-md rounded-lg p-3 border border-yellow-500/30">
                    <p className="text-yellow-400 text-sm flex items-start gap-2">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Convites para menores de 7 anos não podem ser usados por maiores de 7 anos. Haverá conferência na entrada.</span>
            </p>
          </div>
        </div>
          </div>

              {/* Card 2: Política de Rolha */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center p-2">
                    <img src="/rolha.svg" alt="Rolha" className="w-full h-full" />
            </div>
                  <h3 className="text-xl font-bold">Política de Rolha (Baile)</h3>
          </div>
                
        <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-400 mb-2 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Permitido (4 garrafas máx. 1L cada):
                    </h4>
                    <p className="text-slate-300 text-sm">Whisky, gin, vodka, vinho e espumante</p>
        </div>
                  
                  <div>
                    <h4 className="font-semibold text-red-400 mb-2 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Proibido:
                    </h4>
                    <p className="text-slate-300 text-sm">Cerveja, energéticos, xaropes e especiarias para gin</p>
            </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">Disponível para compra:</h4>
                    <p className="text-slate-300 text-sm">Drinks clássicos e autorais, cerveja, energéticos, espumantes, balde de gelo</p>
          </div>
                  
                  <div className="bg-red-900/20 backdrop-blur-md rounded-lg p-3 border border-red-500/30">
                    <p className="text-red-400 text-sm flex items-start gap-2">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                        <circle cx="12" cy="12" r="9" strokeWidth={2} />
                      </svg>
                      <span>Proibido consumo de álcool para menores de 18 anos. Maiores assinarão termo de responsabilidade.</span>
          </p>
        </div>
            </div>
          </div>

              {/* Card 3: Detalhes da Fotografia */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Detalhes da Fotografia</h3>
              </div>
                
        <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-yellow-400 mb-2">Incluído no pacote:</h4>
                    <p className="text-slate-300 text-sm">Book digital com fotos de todos os formandos (link geral em até 120 dias)</p>
          </div>

            <div>
                    <h4 className="font-semibold text-yellow-400 mb-2">Estúdios fotográficos:</h4>
                    <p className="text-slate-300 text-sm">Funcionamento das 20h00 às 01h00. Famílias devem se dirigir aos locais designados.</p>
            </div>
                  
            <div>
                    <h4 className="font-semibold text-yellow-400 mb-2">Importante:</h4>
                    <p className="text-slate-300 text-sm">Entrada dos formandos registrada apenas em vídeo. Valsa fotografada de forma posada, não durante a apresentação.</p>
                  </div>
                  
                  <div className="bg-blue-900/20 backdrop-blur-md rounded-lg p-3 border border-blue-500/30">
                    <p className="text-blue-400 text-sm flex items-start gap-2">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <span>Pulseira LED será fornecida e deve ser mantida no pulso durante todo o evento.</span>
          </p>
        </div>
                </div>
                </div>

              {/* Card 4: Itens Proibidos */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                </div>
                  <h3 className="text-xl font-bold">Itens Proibidos</h3>
              </div>
                
        <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-red-400 mb-3">Não será permitido:</h4>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Balões, infláveis, faixas, totens</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Buzinas, apitos, emissores sonoros</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Sky paper, sinalizadores, fogos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Objetos cortantes ou ilícitos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Câmeras semi/profissionais</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Fumantes, vaporizadores</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Pulseiras com fluído neon</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Aerossóis, líquidos, vidros</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Alimentos/bebidas como presentes</span>
                      </li>
                    </ul>
          </div>
                  
                  <div className="bg-green-900/20 backdrop-blur-md rounded-lg p-3 border border-green-500/30">
                    <p className="text-green-400 text-sm flex items-start gap-2">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Permitido:</strong> Buquês (sem barulho ou papel picado)</span>
            </p>
          </div>
          </div>
        </div>
            </div>
          </div>
          </div>

          {/* Serviços e Facilidades */}
          <div id="servicos" className={`w-full mt-24 scroll-mt-24 transition-all duration-1000 ${visibleSections.has('servicos') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ background: 'radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.2) 0%, rgba(30, 58, 138, 0.08) 15%, rgba(30, 58, 138, 0.03) 25%, rgba(30, 58, 138, 0.01) 35%, transparent 45%)' }}>
            <div className="max-w-6xl mx-auto pt-20 pb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Serviços e Facilidades</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1: Segurança */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50 shadow-xl hover:scale-105 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Segurança</h3>
                  <p className="text-slate-300 text-sm">Equipe especializada em pontos estratégicos com triagem de entrada</p>
                </div>
              </div>

              {/* Card 2: Fotografia */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50 shadow-xl hover:scale-105 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Fotografia</h3>
                  <p className="text-slate-300 text-sm">Equipe profissional e book digital incluído (120 dias)</p>
                </div>
              </div>

              {/* Card 3: Alimentação */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50 shadow-xl hover:scale-105 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4 p-3">
                    <img src="/alimentacao.svg" alt="Alimentação" className="w-full h-full" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Alimentação</h3>
                  <p className="text-slate-300 text-sm">100% Open Food até 4h com antepastos, ilhas gastronômicas e sobremesas</p>
                </div>
              </div>

              {/* Card 4: Acessibilidade */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50 shadow-xl hover:scale-105 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4 p-3">
                    <img src="/Accessibility_logo.svg" alt="Acessibilidade" className="w-full h-full" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Acessibilidade</h3>
                  <p className="text-slate-300 text-sm">Rampas e elevadores para mobilidade reduzida com equipe de apoio</p>
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Informações Adicionais */}
          <div id="info-adicionais" className={`w-full mt-24 transition-all duration-1000 ${visibleSections.has('info-adicionais') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ background: 'radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.2) 0%, rgba(30, 58, 138, 0.08) 15%, rgba(30, 58, 138, 0.03) 25%, rgba(30, 58, 138, 0.01) 35%, transparent 45%)' }}>
            <div className="max-w-6xl mx-auto pt-20 pb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Informações Adicionais</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1: Valsa */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50 shadow-xl hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Valsa</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Aproximadamente às <span className="font-semibold text-white">23h00</span>. Formandos escolhem uma pessoa para dançar. Música única definida pela comissão de formatura.
                </p>
              </div>

              {/* Card 2: Cronograma */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50 shadow-xl hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Cronograma</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  O cronograma oficial do evento será disponibilizado <span className="font-semibold text-white">30 dias antes do evento</span>, após análise com a comissão de formatura.
            </p>
          </div>

              {/* Card 3: Alterações */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50 shadow-xl hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
        </div>
                  <h3 className="text-xl font-bold">Alterações</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Possível ampliar plano até <span className="font-semibold text-white">10 pessoas por mesa até 26 de setembro</span>. Não é permitido adicionar lugar avulso.
            </p>
          </div>
        </div>
          </div>
          </div>

          {/* Avisos Importantes */}
          <div id="avisos" className={`w-full mt-24 transition-all duration-1000 ${visibleSections.has('avisos') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ background: 'radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.25) 0%, rgba(30, 58, 138, 0.12) 20%, rgba(30, 58, 138, 0.05) 35%, rgba(30, 58, 138, 0.01) 45%, transparent 55%)' }}>
            <div className="max-w-6xl mx-auto pt-20 pb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Avisos Importantes</h2>
            
            <div className="space-y-6">
              {/* Aviso 1: Responsabilidade Legal */}
              <div className="bg-red-900/20 backdrop-blur-lg rounded-xl p-6 border border-red-500/50 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-red-400 mb-3">Responsabilidade Legal - Bebidas Alcoólicas</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Fica expressamente vedado o fornecimento, disponibilização ou incentivo ao consumo de bebidas alcoólicas por crianças e adolescentes, nos termos do <span className="font-semibold text-white">Estatuto da Criança e do Adolescente (Lei n° 8.069/1990)</span>. Caso algum pai, mãe ou responsável legal opte por trazer bebidas alcoólicas para o evento, este assumirá integral e exclusiva responsabilidade civil, administrativa e, se for o caso, criminal pelo consumo das referidas bebidas por seus convidados, inclusive por eventuais consequências decorrentes do acesso indevido de menores ao álcool, isentando os organizadores do evento de qualquer responsabilização.
                    </p>
          </div>
                </div>
              </div>

              {/* Aviso 2: Qualidade das Fotos */}
              <div className="bg-yellow-900/20 backdrop-blur-lg rounded-xl p-6 border border-yellow-500/50 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-yellow-400 mb-3">Qualidade das Fotos</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Em razão das particularidades que envolvem os serviços contratados, o fato de alguém ter sido fotografado não significa que estas imagens estarão com qualidade suficiente e <span className="font-semibold text-white">somente serão disponibilizadas as imagens que se adequarem à qualidade técnica definida pela empresa</span>. É comum alguns formandos possuírem mais fotos do que outros, visto que cada formando interage de maneira diferente e específica com o evento e com a equipe.
            </p>
          </div>
        </div>
              </div>

              {/* Aviso 3: Entrega de Convites */}
              <div className="bg-blue-900/20 backdrop-blur-lg rounded-xl p-6 border border-blue-500/50 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-400 mb-3">Entrega de Convites</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Todos os ingressos serão <span className="font-semibold text-white">entregues antecipadamente</span>, conforme o calendário a ser divulgado, não havendo nenhuma forma de retirá-los no momento do baile. É <span className="font-semibold text-white">imprescindível a apresentação do convite</span> para entrada em ambos os eventos.
            </p>
          </div>
        </div>
              </div>
            </div>
          </div>
          </div>

          {/* Seção de Contato */}
          <div id="contato" className={`w-full mt-24 scroll-mt-24 transition-all duration-1000 ${visibleSections.has('contato') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ background: 'radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.25) 0%, rgba(30, 58, 138, 0.12) 20%, rgba(30, 58, 138, 0.05) 35%, rgba(30, 58, 138, 0.01) 45%, transparent 55%)' }}>
            <div className="max-w-6xl mx-auto pt-20 pb-24">
            <h2 className="text-3xl font-bold text-center mb-12">Entre em Contato</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Card 1: Multifly Eventos */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl p-8 border border-slate-700/50 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center p-2">
                    <img src="/Y.svg" alt="Multifly" className="w-full h-full" />
                  </div>
                  <h3 className="text-2xl font-bold">Multifly Eventos</h3>
                </div>
                
        <div className="space-y-4">
                  <a href="tel:+554130148108" className="flex items-center gap-3 hover:text-yellow-400 transition-colors">
                    <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p className="text-slate-300">(41) 3014-8108</p>
                  </a>
                  
                  <a href="mailto:contato@multifly.com.br" className="flex items-center gap-3 hover:text-yellow-400 transition-colors">
                    <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="text-slate-300">contato@multifly.com.br</p>
                  </a>
                  
                  <div className="bg-yellow-400/10 backdrop-blur-md rounded-lg p-4 border border-yellow-400/30 mt-6">
                    <h4 className="font-bold text-yellow-400 mb-3">Atendimento Personalizado</h4>
                    <p className="text-white font-semibold mb-3">Amanda - Diretora de Atendimento</p>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        <p className="text-slate-300 font-semibold">(41) 99866-8055</p>
            </div>
                      <a href="https://wa.me/5541998668055" target="_blank" rel="noopener noreferrer" className="bg-green-500/20 backdrop-blur-md border border-green-500/50 text-green-400 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 hover:bg-green-500 hover:text-white hover:scale-105 whitespace-nowrap">
                        Clique para entrar em contato
                      </a>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Vasta experiência em formaturas para acompanhar qualquer etapa da jornada
            </p>
          </div>
        </div>
        </div>

              {/* Card 2: Fotografia */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl p-8 border border-slate-700/50 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Fotografia - Produtos Adicionais</h3>
                </div>
                
        <div className="space-y-4">
                  <a href="tel:+554196054862" className="flex items-center gap-3 hover:text-yellow-400 transition-colors">
                    <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p className="text-slate-300">(41) 99605-4862</p>
                  </a>
                  
                  <a href="tel:+554198438863" className="flex items-center gap-3 hover:text-yellow-400 transition-colors">
                    <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p className="text-slate-300">(41) 99843-8863</p>
                  </a>
                  
                  <div className="bg-blue-900/20 backdrop-blur-md rounded-lg p-4 border border-blue-500/30 mt-6">
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Para álbuns e outros produtos fotográficos disponíveis no Family Day
            </p>
        </div>
        </div>
            </div>
          </div>
        </div>
          </div>
        </div>
      </section>
      )}

      {/* Modal de Carrossel */}
      {showDressCodeModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-2 md:p-4"
          onClick={() => setShowDressCodeModal(false)}
        >
          <div 
            className="relative w-full h-full md:max-w-5xl md:h-auto flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão Fechar */}
            <button
              onClick={() => setShowDressCodeModal(false)}
              className="absolute top-4 right-4 md:-top-12 md:right-0 z-10 w-12 h-12 md:w-10 md:h-10 bg-slate-800/80 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-red-500/80 transition-all border border-slate-600/50"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
        </button>

            {/* Carrossel */}
            <div className="relative w-full h-full md:aspect-video bg-slate-800/20 backdrop-blur-xl md:rounded-2xl border-0 md:border border-slate-600/30 shadow-2xl overflow-hidden flex items-center justify-center">
              <img
                src={dressCodeImages[currentImageIndex]}
                alt={`Referência ${currentImageIndex + 1}`}
                className="w-full h-full object-cover md:object-contain"
              />

              {/* Botão Anterior */}
          <button
                onClick={prevImage}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-slate-800/80 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-yellow-400/80 hover:text-slate-900 transition-all border border-slate-600/50 hover:scale-110 active:scale-95"
              >
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
          </button>

              {/* Botão Próximo */}
          <button
                onClick={nextImage}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-slate-800/80 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-yellow-400/80 hover:text-slate-900 transition-all border border-slate-600/50 hover:scale-110 active:scale-95"
              >
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
          </button>

              {/* Indicadores */}
              <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-slate-800/80 backdrop-blur-lg px-4 py-2 md:py-3 rounded-full border border-slate-600/50">
                {dressCodeImages.map((_, index) => (
          <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 md:h-2.5 rounded-full transition-all ${
                      index === currentImageIndex
                        ? 'bg-yellow-400 w-8 md:w-10'
                        : 'bg-slate-500 w-2 md:w-2.5 hover:bg-slate-400 active:bg-slate-300'
                    }`}
                  />
                ))}
        </div>
            </div>
          </div>
        </div>
      )}

      {/* Seção FAQ */}
      {activeTab === 'faq' && (
      <section id="faq" className={`py-16 px-6 scroll-mt-24 transition-all duration-1000 ${visibleSections.has('faq') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
            <div className="space-y-4">
              {/* FAQ 1 */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl border border-slate-700/50 shadow-xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-700/30 transition-all"
                >
                  <span className="font-semibold text-lg">Qual a data e local da formatura do terceirão 2025?</span>
                  <svg 
                    className={`w-6 h-6 text-yellow-400 transform transition-transform duration-300 ${openFaq === 1 ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
          </button>
                {openFaq === 1 && (
                  <div className="px-6 pb-6 space-y-4 animate-fadeIn">
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30">
                      <h4 className="font-bold text-yellow-400 mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                        Colação de Grau Terceirão Santa Maria 2025
                      </h4>
                      <div className="space-y-2 text-sm text-slate-300">
                        <p><span className="font-semibold text-white">Data e Horário:</span> 04/12/2025 - Quinta-Feira - 19h30</p>
                        <p><span className="font-semibold text-white">Local:</span> Ópera de Arame</p>
                        <p className="text-slate-400">Rua João Gava, 920 - Abranches - Curitiba</p>
        </div>
            </div>
                    
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30">
                      <h4 className="font-bold text-yellow-400 mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                        </svg>
                        Baile de Formatura Terceirão Santa Maria 2025
                      </h4>
                      <div className="space-y-2 text-sm text-slate-300">
                        <p><span className="font-semibold text-white">Data e Horário:</span> 19/12/2025 - Sexta-Feira - 20h00</p>
                        <p><span className="font-semibold text-white">Local:</span> Viasoft Experience</p>
                        <p className="text-slate-400">Prof. Pedro Viriato Parigot de Souza, 5300 - Cidade Industrial - Curitiba</p>
              </div>
            </div>
            </div>
                )}
          </div>

              {/* FAQ 2 */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl border border-slate-700/50 shadow-xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-700/30 transition-all"
                >
                  <span className="font-semibold text-lg">Qual a programação para o dia?</span>
                  <svg 
                    className={`w-6 h-6 text-yellow-400 transform transition-transform duration-300 ${openFaq === 2 ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === 2 && (
                  <div className="px-6 pb-6 space-y-3 animate-fadeIn">
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30">
                      <ul className="space-y-3 text-sm text-slate-300">
                        <li className="flex items-start gap-3">
                          <span className="font-bold text-yellow-400 min-w-[60px]">15h00</span>
                          <span>Chegada dos alunos ao local do evento</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="font-bold text-yellow-400 min-w-[60px]">15h00 - 17h20</span>
                          <span>Circuito de fotos individuais no Ópera de Arame</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="font-bold text-yellow-400 min-w-[60px]">17h20</span>
                          <span>Bate-papo com os alunos e passagem final da cerimônia</span>
                        </li>
                        <li className="bg-blue-900/20 backdrop-blur-md rounded-lg p-3 border border-blue-500/30">
                          <p className="text-blue-400 text-sm flex items-start gap-2">
                            <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Serão disponibilizados kits individuais de alimentação para os formandos</span>
                          </p>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="font-bold text-yellow-400 min-w-[60px]">18h15</span>
                          <span>Abertura da portaria e liberação dos estúdios de foto</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="font-bold text-yellow-400 min-w-[60px]">19h20</span>
                          <span>Avisos gerais</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="font-bold text-yellow-400 min-w-[60px]">19h30</span>
                          <span className="font-semibold text-white">Início da Solenidade</span>
                        </li>
                      </ul>
              </div>
            </div>
                )}
            </div>

              {/* FAQ 3 */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl border border-slate-700/50 shadow-xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-700/30 transition-all"
                >
                  <span className="font-semibold text-lg">Qual o traje para a colação?</span>
                  <svg 
                    className={`w-6 h-6 text-yellow-400 transform transition-transform duration-300 ${openFaq === 3 ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
            </button>
                {openFaq === 3 && (
                  <div className="px-6 pb-6 space-y-3 animate-fadeIn">
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30 space-y-4">
                      <div>
                        <h4 className="font-bold text-yellow-400 mb-2 flex items-center gap-2">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 320 512">
                            <path d="M160 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM88 384H70.2c-10.9 0-18.6-10.7-15.2-21.1L93.3 248.1 59.4 304.5c-9.1 15.1-28.2 20-43.3 10.9s-20-28.2-10.9-43.3l53.6-89.2c20.3-33.7 56.7-54.3 96-54.3h11.6c39.3 0 75.7 20.6 96 54.3l53.6 89.2c9.1 15.1 4.2 34.8-10.9 43.3s-34.8 4.2-43.3-10.9l-33.9-56.3L265 362.9c3.5 10.4-4.3 21.1-15.2 21.1H232v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384H152v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z"/>
                          </svg>
                          Formandas
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          Esporte Fino, nas cores <span className="font-semibold text-white">azul marinho, off white ou preto</span>. Recomendamos que evitem vestidos curtos ou fendas acentuadas, considerando que estarão posicionadas em um praticável, em nível acima da plateia, com ampla visibilidade.
                        </p>
          </div>

                      <div>
                        <h4 className="font-bold text-blue-400 mb-2 flex items-center gap-2">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 320 512">
                            <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.2 20-43.3 10.9s-20-28.2-10.9-43.3l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.3s-34.8 4.2-43.3-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z"/>
                          </svg>
                          Formandos
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          Esporte Fino, com camisa social <span className="font-semibold text-white">azul claro, branca ou azul marinho</span> e calça <span className="font-semibold text-white">bege, preta ou azul marinho</span>.
                        </p>
        </div>

                      <div>
                        <h4 className="font-bold text-slate-400 mb-2 flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          Pais e Convidados
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          Esporte Fino. <span className="italic">(Sugerimos evitar tons de azul marinho e azul claro, para que o destaque visual permaneça nos formandos.)</span>
                        </p>
            </div>
            </div>
            </div>
                )}
            </div>

              {/* FAQ 4 */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl border border-slate-700/50 shadow-xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-700/30 transition-all"
                >
                  <span className="font-semibold text-lg">O local do evento oferece estacionamento?</span>
                  <svg 
                    className={`w-6 h-6 text-yellow-400 transform transition-transform duration-300 ${openFaq === 4 ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === 4 && (
                  <div className="px-6 pb-6 animate-fadeIn">
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        O local não conta com estacionamento próprio, mas há opções de estacionamentos terceirizados nas proximidades para maior comodidade.
                      </p>
          </div>
                  </div>
                )}
              </div>

              {/* FAQ 5 */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl border border-slate-700/50 shadow-xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-700/30 transition-all"
                >
                  <span className="font-semibold text-lg">Haverá segurança durante o evento?</span>
                  <svg 
                    className={`w-6 h-6 text-yellow-400 transform transition-transform duration-300 ${openFaq === 5 ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === 5 && (
                  <div className="px-6 pb-6 space-y-3 animate-fadeIn">
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30">
                      <p className="text-slate-300 text-sm leading-relaxed mb-4">
                        Sim. O evento contará com equipe de segurança especializada, posicionada em pontos estratégicos para garantir a tranquilidade de todos os presentes, desde a recepção até o encerramento. Além disso, será realizada triagem de entrada e conferência rigorosa dos convites.
                      </p>
                      <div className="bg-red-900/20 backdrop-blur-md rounded-lg p-3 border border-red-500/30">
                        <p className="text-red-400 text-sm leading-relaxed">
                          <span className="font-bold">Não será permitido o ingresso de:</span> balões, infláveis e similares, faixas, totens, buzinas, apitos ou outros emissores sonoros, sky paper, sinalizadores, fogos de qualquer natureza, objetos cortantes ou ilícitos, câmeras semiprofissionais e profissionais.
              </p>
            </div>
          </div>
        </div>
                )}
              </div>

              {/* FAQ 6 */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl border border-slate-700/50 shadow-xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === 6 ? null : 6)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-700/30 transition-all"
                >
                  <span className="font-semibold text-lg">Quantos convites o formando receberá para a colação?</span>
                  <svg 
                    className={`w-6 h-6 text-yellow-400 transform transition-transform duration-300 ${openFaq === 6 ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === 6 && (
                  <div className="px-6 pb-6 animate-fadeIn">
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Cada formando terá direito a <span className="font-semibold text-white">06 convites</span>. É imprescindível a apresentação do convite. Em caso de perda ou esquecimento do ingresso, não será permitida a entrada no evento. O formando não precisa apresentar convite para o dia.
                      </p>
              </div>
              </div>
                )}
              </div>

              {/* FAQ 7 */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl border border-slate-700/50 shadow-xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === 7 ? null : 7)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-700/30 transition-all"
                >
                  <span className="font-semibold text-lg">O local do evento oferece boa acessibilidade?</span>
                  <svg 
                    className={`w-6 h-6 text-yellow-400 transform transition-transform duration-300 ${openFaq === 7 ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === 7 && (
                  <div className="px-6 pb-6 animate-fadeIn">
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Sim, o local do evento oferece boa acessibilidade para todos os convidados. O espaço conta com rampas de acesso e elevadores que facilitam a locomoção de pessoas com mobilidade reduzida, garantindo conforto e segurança durante todo o evento. Nossa equipe também estará à disposição para oferecer o suporte necessário, caso surja qualquer necessidade especial.
                  </p>
                </div>
              </div>
                )}
            </div>

              {/* FAQ 8 */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl border border-slate-700/50 shadow-xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === 8 ? null : 8)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-700/30 transition-all"
                >
                  <span className="font-semibold text-lg">Quantos convites o formando receberá para o baile?</span>
                  <svg 
                    className={`w-6 h-6 text-yellow-400 transform transition-transform duration-300 ${openFaq === 8 ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === 8 && (
                  <div className="px-6 pb-6 animate-fadeIn">
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30 space-y-3">
                      <p className="text-slate-300 text-sm font-semibold mb-3">Conforme as opções adquiridas:</p>
                      <ul className="space-y-2 text-sm text-slate-300">
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-400">•</span>
                          <span>Formando + 3 Convidados - Mesa Individual de 4 Lugares</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-400">•</span>
                          <span>Formando + 5 Convidados - Mesa Individual de 6 Lugares</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-400">•</span>
                          <span>Formando + 7 Convidados - Mesa Individual de 8 Lugares</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-400">•</span>
                          <span>Formando + 9 Convidados - Mesa Individual de 10 Lugares</span>
                        </li>
                      </ul>
                      <p className="text-slate-400 text-sm italic leading-relaxed mt-3">
                        A aquisição de uma mesa extra está sujeita à disponibilidade e só é possível após o encerramento das fases regulares de adesão. Neste momento, é gerada automaticamente uma lista, organizada conforme a ordem de adesão.
                      </p>
                    </div>
                  </div>
                )}
          </div>

              {/* FAQ 9 */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl border border-slate-700/50 shadow-xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === 9 ? null : 9)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-700/30 transition-all"
                >
                  <span className="font-semibold text-lg">Qual a política para crianças?</span>
                  <svg 
                    className={`w-6 h-6 text-yellow-400 transform transition-transform duration-300 ${openFaq === 9 ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === 9 && (
                  <div className="px-6 pb-6 space-y-3 animate-fadeIn">
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30 space-y-4">
              <div>
                        <h4 className="font-semibold text-blue-400 mb-2">Crianças de 0 a 2 anos:</h4>
                        <p className="text-slate-300 text-sm">Não é necessário convite, mas elas não terão cadeira.</p>
              </div>
              <div>
                        <h4 className="font-semibold text-blue-400 mb-2">Crianças de 3 a 7 anos:</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          Precisam de convite, terão uma cadeira e serão contabilizadas como convidados no pacote de adesão. Nesse caso, será feito um <span className="font-semibold text-white">reembolso de R$60,00</span> dos convites retirados para essa faixa etária. O reembolso se dará mediante PIX em até 15 (quinze) dias úteis após evento.
                        </p>
              </div>
                      <div className="bg-yellow-900/20 backdrop-blur-md rounded-lg p-3 border border-yellow-500/30">
                        <p className="text-yellow-400 text-sm leading-relaxed">
                          <span className="font-bold">Importante:</span> Os convites para menores de 7 anos não podem ser usados por maiores de 7 anos e será feita uma conferência na entrada do evento. Todos os ingressos serão entregues antecipadamente, conforme o calendário a ser divulgado.
                  </p>
                </div>
              </div>
            </div>
                )}
          </div>

              {/* FAQ 10 */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl border border-slate-700/50 shadow-xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === 10 ? null : 10)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-700/30 transition-all"
                >
                  <span className="font-semibold text-lg">Quem precisa apresentar convite?</span>
                  <svg 
                    className={`w-6 h-6 text-yellow-400 transform transition-transform duration-300 ${openFaq === 10 ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === 10 && (
                  <div className="px-6 pb-6 animate-fadeIn">
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        <span className="font-semibold text-white">Todos, formandos e convidados.</span> É imprescindível a apresentação do convite. Em caso de perda ou esquecimento do ingresso, não será permitida a entrada no evento.
                      </p>
              </div>
            </div>
                )}
              </div>

              {/* FAQ 11 */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl border border-slate-700/50 shadow-xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === 11 ? null : 11)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-700/30 transition-all"
                >
                  <span className="font-semibold text-lg">É permitido entrar e sair durante o evento?</span>
                  <svg 
                    className={`w-6 h-6 text-yellow-400 transform transition-transform duration-300 ${openFaq === 11 ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === 11 && (
                  <div className="px-6 pb-6 animate-fadeIn">
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Por motivos de segurança e organização, <span className="font-semibold text-white">não será permitido o retorno ou acesso aos veículos durante o baile</span>. É fundamental planejar suas necessidades antes de entrar, evitando saídas desnecessárias.
                </p>
              </div>
            </div>
                )}
          </div>

              {/* FAQ 12 */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl border border-slate-700/50 shadow-xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === 12 ? null : 12)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-700/30 transition-all"
                >
                  <span className="font-semibold text-lg">O local do baile oferece boa acessibilidade?</span>
                  <svg 
                    className={`w-6 h-6 text-yellow-400 transform transition-transform duration-300 ${openFaq === 12 ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === 12 && (
                  <div className="px-6 pb-6 animate-fadeIn">
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Sim, o local do evento oferece boa acessibilidade para todos os convidados. O espaço é térreo e conta com rampas de acesso a locomoção de pessoas com mobilidade reduzida, garantindo conforto e segurança durante todo o evento. Nossa equipe também estará à disposição para oferecer o suporte necessário, caso surja qualquer necessidade especial.
                      </p>
              </div>
            </div>
                )}
              </div>

              {/* FAQ 13 */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl border border-slate-700/50 shadow-xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === 13 ? null : 13)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-700/30 transition-all"
                >
                  <span className="font-semibold text-lg">Se eu comprar mais ingressos terei direito a mais cadeiras?</span>
                  <svg 
                    className={`w-6 h-6 text-yellow-400 transform transition-transform duration-300 ${openFaq === 13 ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === 13 && (
                  <div className="px-6 pb-6 animate-fadeIn">
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        <span className="font-semibold text-white">Não.</span> As mesas e cadeiras deverão respeitar o plano adquirido pelo respectivo formando e não poderão, em hipótese alguma, sofrerem trocas de posicionamento, mesmo que sejam para mesas próximas.
                </p>
              </div>
            </div>
                )}
          </div>

              {/* FAQ 14 */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl border border-slate-700/50 shadow-xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === 14 ? null : 14)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-700/30 transition-all"
                >
                  <span className="font-semibold text-lg">Qual o traje para o baile?</span>
                  <svg 
                    className={`w-6 h-6 text-yellow-400 transform transition-transform duration-300 ${openFaq === 14 ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === 14 && (
                  <div className="px-6 pb-6 space-y-3 animate-fadeIn">
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30 space-y-3">
                      <div>
                        <h4 className="font-bold text-yellow-400 mb-2">Formandas:</h4>
                        <p className="text-slate-300 text-sm">Passeio Completo</p>
              </div>
                      <div>
                        <h4 className="font-bold text-blue-400 mb-2">Formandos:</h4>
                        <p className="text-slate-300 text-sm">Smoking ou Terno</p>
            </div>
                      <div>
                        <h4 className="font-bold text-slate-400 mb-2">Pais e Convidados:</h4>
                        <p className="text-slate-300 text-sm">Passeio Completo</p>
                      </div>
                      <div className="bg-red-900/20 backdrop-blur-md rounded-lg p-3 border border-red-500/30">
                        <p className="text-red-400 text-sm">
                          <span className="font-bold">Importante:</span> Não será liberada entrada de convidados fora do dress code determinado.
                </p>
              </div>
            </div>
                  </div>
                )}
          </div>

              {/* FAQ 15 */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl border border-slate-700/50 shadow-xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === 15 ? null : 15)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-700/30 transition-all"
                >
                  <span className="font-semibold text-lg">Com quanto tempo de antecedência devo chegar?</span>
                  <svg 
                    className={`w-6 h-6 text-yellow-400 transform transition-transform duration-300 ${openFaq === 15 ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === 15 && (
                  <div className="px-6 pb-6 animate-fadeIn">
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Formandos e convidados podem chegar a partir das <span className="font-semibold text-white">20h00</span> para o circuito fotográfico.
                      </p>
              </div>
            </div>
                )}
              </div>

              {/* FAQ 16 */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl border border-slate-700/50 shadow-xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === 16 ? null : 16)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-700/30 transition-all"
                >
                  <span className="font-semibold text-lg">O evento contará com equipe de fotografia?</span>
                  <svg 
                    className={`w-6 h-6 text-yellow-400 transform transition-transform duration-300 ${openFaq === 16 ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === 16 && (
                  <div className="px-6 pb-6 space-y-3 animate-fadeIn">
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30 space-y-3">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Haverá equipe de fotógrafos e cinegrafistas. Está incluso no pacote o book digital com as fotos dos alunos sem separação por aluno. Será enviado 01 (um) link geral com todas as fotos do evento, de todos os formandos em até <span className="font-semibold text-white">120 dias após o baile</span>, para os e-mails cadastrados no ato da adesão.
                      </p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        As fotos dos eventos que antecedem a formatura, como os pré-eventos (quando realizados), serão compartilhadas gradualmente, por meio de um link enviado à medida que as atividades forem acontecendo.
                      </p>
                      <div className="bg-blue-900/20 backdrop-blur-md rounded-lg p-3 border border-blue-500/30">
                        <p className="text-blue-400 text-sm leading-relaxed">
                          Se a família desejar adquirir outros produtos fotográficos como álbuns, os mesmos serão disponibilizados e oferecidos no evento Family Day e/ou outro evento oportuno. Para mais informações: <span className="font-semibold text-white">(41) 99605-4862 | 41 99843-8863</span>
                </p>
              </div>
            </div>
          </div>
                )}
        </div>

              {/* FAQ 17 */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl border border-slate-700/50 shadow-xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === 17 ? null : 17)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-700/30 transition-all"
                >
                  <span className="font-semibold text-lg">Em que momento farei as fotos com familiares?</span>
                  <svg 
                    className={`w-6 h-6 text-yellow-400 transform transition-transform duration-300 ${openFaq === 17 ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === 17 && (
                  <div className="px-6 pb-6 animate-fadeIn">
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Na chegada e durante o evento, nos estúdios e pontos de fotos determinados pela organização. Após o protocolo, os estúdios ficarão abertos até às <span className="font-semibold text-white">01h00</span>.
            </p>
          </div>
            </div>
                )}
          </div>

              {/* FAQ 18 */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl border border-slate-700/50 shadow-xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === 18 ? null : 18)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-700/30 transition-all"
                >
                  <span className="font-semibold text-lg">Como será o serviço de alimentação do baile?</span>
                  <svg 
                    className={`w-6 h-6 text-yellow-400 transform transition-transform duration-300 ${openFaq === 18 ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === 18 && (
                  <div className="px-6 pb-6 animate-fadeIn">
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30 space-y-3">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        O evento será <span className="font-semibold text-white">100% Open Food, até às 4h00</span> com:
                      </p>
                      <ul className="space-y-2 text-sm text-slate-300">
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-400">•</span>
                          <span>Mesa de Antepastos</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-400">•</span>
                          <span>Ilhas Gastronômicas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-400">•</span>
                          <span>Lanche da Madrugada</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-400">•</span>
                          <span>Sobremesas</span>
                        </li>
                      </ul>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        Cardápio Soft: água com e sem gás, refrigerante normal e zero e 2 sabores de suco.
            </p>
          </div>
            </div>
                )}
              </div>

              {/* FAQ 19 */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl border border-slate-700/50 shadow-xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === 19 ? null : 19)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-700/30 transition-all"
                >
                  <span className="font-semibold text-lg">Para o baile, haverá rolha?</span>
                  <svg 
                    className={`w-6 h-6 text-yellow-400 transform transition-transform duration-300 ${openFaq === 19 ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === 19 && (
                  <div className="px-6 pb-6 animate-fadeIn">
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30 space-y-3">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Sim, serão permitidas <span className="font-semibold text-white">4 rolhas somente destilados e vinhos</span>. As garrafas podem ser de no máximo, 1 (um) litro. A logística da Rolha será divulgada em até 30 dias antecedentes ao evento.
                      </p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        O serviço de copos será padrão, não havendo distinção para cada tipo de bebida da rolha. Não será necessário levar saca-rolhas, pois os garçons estarão equipados para esse serviço.
            </p>
          </div>
            </div>
                )}
              </div>

              {/* FAQ 20 */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl border border-slate-700/50 shadow-xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === 20 ? null : 20)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-700/30 transition-all"
                >
                  <span className="font-semibold text-lg">Quais tipos de bebidas posso levar na rolha?</span>
                  <svg 
                    className={`w-6 h-6 text-yellow-400 transform transition-transform duration-300 ${openFaq === 20 ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === 20 && (
                  <div className="px-6 pb-6 space-y-3 animate-fadeIn">
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30 space-y-4">
                      <div>
                        <h4 className="font-semibold text-green-400 mb-2">Permitido:</h4>
                        <p className="text-slate-300 text-sm">Whisky, gin, vodka, vinho e espumante.</p>
                        <p className="text-slate-400 text-sm mt-2 italic">Caso haja a necessidade de gelar as bebidas, os responsáveis poderão efetuar a compra de baldes de gelo para uso na mesa.</p>
            </div>
                      <div>
                        <h4 className="font-semibold text-red-400 mb-2">Proibido levar:</h4>
                        <p className="text-slate-300 text-sm">Cerveja, energéticos, xaropes e especiarias para o gin.</p>
          </div>
                      <div>
                        <h4 className="font-semibold text-blue-400 mb-2">Disponível para compra:</h4>
                        <p className="text-slate-300 text-sm">Drinks Clássicos e Autorais, Cerveja, Energéticos, Espumantes, Balde de Gelo, entre outros.</p>
                        <p className="text-slate-400 text-sm mt-2 italic">O cardápio completo de bebidas será divulgado em até 30 dias antecedentes ao evento.</p>
            </div>
                      <div className="bg-red-900/20 backdrop-blur-md rounded-lg p-3 border border-red-500/30">
                        <p className="text-red-400 text-sm leading-relaxed">
                          <span className="font-bold">Importante:</span> É proibido o consumo e a compra de bebidas alcoólicas para menores de 18 anos. Maiores serão identificados pela nossa equipe e precisarão assinar um Termo de Responsabilidade.
            </p>
          </div>
        </div>
          </div>
                )}
        </div>

              {/* FAQ 21 */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl border border-slate-700/50 shadow-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === 21 ? null : 21)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-700/30 transition-all"
                >
                  <span className="font-semibold text-lg">O que não posso levar ao baile?</span>
                  <svg 
                    className={`w-6 h-6 text-yellow-400 transform transition-transform duration-300 ${openFaq === 21 ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === 21 && (
                  <div className="px-6 pb-6 animate-fadeIn">
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30 space-y-3">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Não será permitido levar alimentos ou bebidas para presentear os formandos no dia do baile, como caixas com chocolates ou balões, por questões de segurança.
                      </p>
                      <div className="bg-green-900/20 backdrop-blur-md rounded-lg p-3 border border-green-500/30">
                        <p className="text-green-400 text-sm">
                          <span className="font-bold">Permitido:</span> Buquê (sem barulho ou papel picado)
                        </p>
            </div>
                      <div className="bg-red-900/20 backdrop-blur-md rounded-lg p-3 border border-red-500/30">
                        <p className="text-red-400 text-sm leading-relaxed mb-2">
                          <span className="font-bold">Itens proibidos:</span>
                        </p>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          Balões, infláveis e similares, faixas, totens, buzinas, apitos ou outros emissores sonoros, sky paper, sinalizadores, fogos de qualquer natureza, objetos cortantes ou ilícitos, fumos, vaporizadores ou afins, pulseiras com fluído neon, câmeras digitais, semiprofissionais e profissionais, aerossóis, líquidos, vidros, entre outros.
            </p>
          </div>
            </div>
                  </div>
                )}
              </div>

              {/* FAQ 22 */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl border border-slate-700/50 shadow-xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === 22 ? null : 22)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-700/30 transition-all"
                >
                  <span className="font-semibold text-lg">Qual o horário da valsa?</span>
                  <svg 
                    className={`w-6 h-6 text-yellow-400 transform transition-transform duration-300 ${openFaq === 22 ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === 22 && (
                  <div className="px-6 pb-6 animate-fadeIn">
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Aproximadamente às <span className="font-semibold text-white">23h00</span>, formandos e formandas podem escolher uma pessoa para dançar a valsa. A música será única para todos os formandos e definida pela comissão de formatura.
            </p>
          </div>
            </div>
                )}
              </div>

              {/* FAQ 23 */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl border border-slate-700/50 shadow-xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === 23 ? null : 23)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-700/30 transition-all"
                >
                  <span className="font-semibold text-lg">Como funcionará a logística de estúdios de fotos?</span>
                  <svg 
                    className={`w-6 h-6 text-yellow-400 transform transition-transform duration-300 ${openFaq === 23 ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === 23 && (
                  <div className="px-6 pb-6 space-y-3 animate-fadeIn">
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30 space-y-3">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        As famílias estão cientes de que é de sua total responsabilidade dirigir-se aos locais de captação de imagens disponibilizados durante o evento. Os estúdios fotográficos estarão disponíveis das <span className="font-semibold text-white">20h00 às 01h00</span>.
                      </p>
                      <div className="bg-yellow-900/20 backdrop-blur-md rounded-lg p-3 border border-yellow-500/30 space-y-2">
                        <p className="text-yellow-400 text-sm">
                          <span className="font-bold">Importante:</span>
                        </p>
                        <ul className="space-y-2 text-sm text-slate-300">
                          <li>• Entrada dos formandos registrada apenas em vídeo</li>
                          <li>• Valsa fotografada de forma posada, não durante apresentação</li>
                          <li>• Fotos garantidas são apenas nos estúdios</li>
                          <li>• Não são permitidas câmeras profissionais/semi-profissionais, drones, flashes e ringlights</li>
                          <li>• Será entregue pulseira de LED para identificação</li>
                        </ul>
          </div>
        </div>
                </div>
                )}
                </div>

              {/* FAQ 24 */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl border border-slate-700/50 shadow-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === 24 ? null : 24)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-700/30 transition-all"
                >
                  <span className="font-semibold text-lg">Qual a atração do evento?</span>
                  <svg 
                    className={`w-6 h-6 text-yellow-400 transform transition-transform duration-300 ${openFaq === 24 ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === 24 && (
                  <div className="px-6 pb-6 animate-fadeIn">
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        As atrações serão definidas pela <span className="font-semibold text-white">comissão de formatura</span> junto com a equipe de produção musical da Multifly.
              </p>
            </div>
          </div>
                )}
        </div>

              {/* FAQ 25 */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl border border-slate-700/50 shadow-xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === 25 ? null : 25)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-700/30 transition-all"
                >
                  <span className="font-semibold text-lg">Qual o cronograma do evento?</span>
                  <svg 
                    className={`w-6 h-6 text-yellow-400 transform transition-transform duration-300 ${openFaq === 25 ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === 25 && (
                  <div className="px-6 pb-6 animate-fadeIn">
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        O cronograma oficial do evento será disponibilizado com até <span className="font-semibold text-white">30 dias de antecedência</span>. Diversas possibilidades estão sendo cuidadosamente analisadas e debatidas em conjunto com a comissão de formatura, garantindo que cada detalhe reflita os desejos e expectativas dos formandos.
                      </p>
              </div>
                  </div>
                )}
              </div>

              {/* FAQ 26 */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl border border-slate-700/50 shadow-xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === 26 ? null : 26)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-700/30 transition-all"
                >
                  <span className="font-semibold text-lg">Posso trocar meu plano ou alterar convidados?</span>
                  <svg 
                    className={`w-6 h-6 text-yellow-400 transform transition-transform duration-300 ${openFaq === 26 ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === 26 && (
                  <div className="px-6 pb-6 animate-fadeIn">
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Sim, é possível ampliar seu plano até o limite de <span className="font-semibold text-white">10 pessoas por mesa</span>, de acordo com as opções disponíveis, até o dia <span className="font-semibold text-white">26 de setembro</span>. No entanto, não é permitido adicionar apenas um lugar avulso. Qualquer alteração deve respeitar a estrutura dos pacotes oferecidos (4, 6, 8 ou 10 lugares).
                      </p>
          </div>
            </div>
                )}
              </div>

              {/* FAQ 27 */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl border border-slate-700/50 shadow-xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === 27 ? null : 27)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-700/30 transition-all"
                >
                  <span className="font-semibold text-lg">Quais os contatos da empresa de formatura?</span>
                  <svg 
                    className={`w-6 h-6 text-yellow-400 transform transition-transform duration-300 ${openFaq === 27 ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === 27 && (
                  <div className="px-6 pb-6 animate-fadeIn">
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30 space-y-3">
                      <div className="space-y-2">
              <p className="text-slate-300 text-sm">
                          <span className="font-semibold text-white">Telefone:</span> (41) 3014-8108
                        </p>
                        <p className="text-slate-300 text-sm">
                          <span className="font-semibold text-white">E-mail:</span> contato@multifly.com.br
              </p>
              <p className="text-slate-300 text-sm">
                          <span className="font-semibold text-white">WhatsApp Amanda (Diretora de Atendimento):</span> 41 99866-8055
              </p>
            </div>
                      <p className="text-slate-400 text-sm italic leading-relaxed">
                        Amanda tem vasta experiência em formaturas e poderá acompanhar qualquer etapa da jornada, resolvendo qualquer situação e tirando dúvidas.
                      </p>
                </div>
                </div>
                )}
                </div>
              </div>

            {/* Seção de Contato - FAQ */}
            <div className="max-w-6xl mx-auto mt-16">
              <h2 className="text-3xl font-bold text-center mb-12">Entre em Contato</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Card 1: Multifly Eventos */}
                <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl p-8 border border-slate-700/50 shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                      <svg className="w-7 h-7 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
            </div>
                    <h3 className="text-2xl font-bold">Multifly Eventos</h3>
          </div>
                  
                  <div className="space-y-4">
                    <a href="tel:+554130148108" className="flex items-center gap-3 hover:text-yellow-400 transition-colors">
                      <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <p className="text-slate-300">(41) 3014-8108</p>
                    </a>
                    
                    <a href="mailto:contato@multifly.com.br" className="flex items-center gap-3 hover:text-yellow-400 transition-colors">
                      <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <p className="text-slate-300">contato@multifly.com.br</p>
                    </a>
                    
                  <div className="bg-yellow-400/10 backdrop-blur-md rounded-lg p-4 border border-yellow-400/30 mt-6">
                    <h4 className="font-bold text-yellow-400 mb-3">Atendimento Personalizado</h4>
                    <p className="text-white font-semibold mb-3">Amanda - Diretora de Atendimento</p>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        <p className="text-slate-300 font-semibold">(41) 99866-8055</p>
              </div>
                      <a href="https://wa.me/5541998668055" target="_blank" rel="noopener noreferrer" className="bg-green-500/20 backdrop-blur-md border border-green-500/50 text-green-400 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 hover:bg-green-500 hover:text-white hover:scale-105 whitespace-nowrap">
                        Clique para entrar em contato
                      </a>
            </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Vasta experiência em formaturas para acompanhar qualquer etapa da jornada
            </p>
          </div>
              </div>
          </div>

                {/* Card 2: Fotografia */}
                <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl p-8 border border-slate-700/50 shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
              </div>
                    <h3 className="text-2xl font-bold">Fotografia - Produtos Adicionais</h3>
            </div>
                  
                  <div className="space-y-4">
                    <a href="tel:+554196054862" className="flex items-center gap-3 hover:text-yellow-400 transition-colors">
                      <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <p className="text-slate-300">(41) 99605-4862</p>
                    </a>
                    
                    <a href="tel:+554198438863" className="flex items-center gap-3 hover:text-yellow-400 transition-colors">
                      <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <p className="text-slate-300">(41) 99843-8863</p>
                    </a>
                    
                    <div className="bg-blue-900/20 backdrop-blur-md rounded-lg p-4 border border-blue-500/30 mt-6">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Para álbuns e outros produtos fotográficos disponíveis no Family Day
            </p>
          </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
      )}

      {/* Botão Voltar ao Topo */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-40 w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center text-slate-900 hover:bg-yellow-500 hover:scale-110 transition-all duration-500 shadow-lg shadow-yellow-400/50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
        }`}
        aria-label="Voltar ao topo"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      {/* Rodapé */}
      <footer className="w-full bg-slate-900/40 backdrop-blur-lg border-t border-slate-700/50 mt-24">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo Marista */}
            <div className="flex items-center gap-4">
              <img 
                src="/LOGOMARISTA.svg" 
                alt="Colégios Maristas" 
                className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
              <div className="hidden md:block h-12 w-px bg-slate-600"></div>
          </div>
            
            {/* Texto Central */}
            <div className="text-center">
              <p className="text-slate-400 text-sm">
                Formatura Terceirão Santa Maria 2025
              </p>
              <p className="text-slate-500 text-xs mt-1">
                © 2025 Todos os direitos reservados
              </p>
            </div>
            
            {/* Logo Multifly */}
            <div className="flex items-center gap-4">
              <div className="hidden md:block h-12 w-px bg-slate-600"></div>
              <img 
                src="/MUTLIFLY.svg" 
                alt="Multifly Eventos" 
                className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}