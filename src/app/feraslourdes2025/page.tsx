'use client';

import { useState, useEffect } from 'react';

export default function FerasLourdes2025() {
  const [activeTab, setActiveTab] = useState('events');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());


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
            </div>
          
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#eventos" onClick={() => setActiveTab('events')} className="text-sm text-slate-300 hover:text-yellow-400 transition-all duration-300 hover:scale-110">Eventos</a>
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
      <section className="text-center py-12 px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Formatura Terceirão
        </h1>
        <h2 className="text-5xl md:text-7xl font-bold mb-8">
          FERAS BOM JESUS LOURDES 2025
        </h2>
        <p className="text-slate-300 text-lg md:text-xl max-w-4xl mx-auto mb-12">
          Neste material contemplamos as respostas das principais dúvidas das famílias em relação à Formatura do Terceirão Feras Bom Jesus Lourdes 2025.
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
      <section id="eventos" className={`py-12 px-6 scroll-mt-12 transition-all duration-1000 ${visibleSections.has('eventos') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Evento da Formatura</h2>
            <div className="flex justify-center">
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
                  <p><span className="font-semibold">Data:</span> 05 de Dezembro de 2025 - Sexta-feira</p>
          </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p><span className="font-semibold">Horário:</span> Início: 19h30 | Término: 05h00</p>
          </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <p><span className="font-semibold">Local:</span> Espaço Torres Paraná Clube</p>
        </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p><span className="font-semibold">Endereço:</span> Avenida Presidente Kennedy, 2377 - Guaíra - Curitiba</p>
          </div>
        </div>
              <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-3 mt-4 border border-slate-600/30">
                <div className="space-y-3">
              <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <p><span className="font-semibold text-yellow-400">Mesas:</span> Mesas de 4, 6 ou 8 lugares</p>
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

          {/* Código de Vestimenta */}
          <div id="vestimenta" className={`w-full mt-12 scroll-mt-12 transition-all duration-1000 ${visibleSections.has('vestimenta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ background: 'radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.25) 0%, rgba(30, 58, 138, 0.12) 20%, rgba(30, 58, 138, 0.05) 35%, rgba(30, 58, 138, 0.01) 45%, transparent 55%)' }}>
            <div className="max-w-6xl mx-auto pt-12 pb-12">
            <h2 className="text-3xl font-bold text-center mb-12">Código de Vestimenta</h2>
            
            <div className="flex justify-center">
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
                  {/* Formandos e Formandas */}
                  <div>
                    <h4 className="font-bold text-lg text-yellow-400 mb-3 flex items-center gap-2">
                      <img src="/cap.svg" alt="Cap" className="w-5 h-5" />
                      Formandos e Formandas
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      <span className="font-semibold text-white">Vestido Social Longo ou Smoking (Gravata Preta)</span>
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
                      <span className="font-semibold text-white">Passeio Completo (terno completo com camisa social e gravata ou vestido longo ou midi)</span>
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
                      <span className="font-bold text-red-400">Importante:</span> Não será liberada entrada de convidados fora do dress code determinado. Mesmo para os convidados após às 23h59.
          </p>
        </div>
          </div>

          </div>
          </div>
          </div>

        </div>
        </div>

          {/* Seção Locação de Trajes */}
          <div id="locacao" className={`w-full mt-12 scroll-mt-12 transition-all duration-1000 ${visibleSections.has('locacao') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ background: 'radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.25) 0%, rgba(30, 58, 138, 0.12) 20%, rgba(30, 58, 138, 0.05) 35%, rgba(30, 58, 138, 0.01) 45%, transparent 55%)' }}>
            <div className="max-w-6xl mx-auto pt-12 pb-12">
              <h2 className="text-3xl font-bold text-center mb-12">Locação de Trajes</h2>
              
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl p-8 border border-slate-700/50 shadow-xl">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Logo da London */}
                  <div className="flex-shrink-0">
                    <img src="/london.png" alt="London Noiva e Noivo" className="h-24 w-auto" />
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="flex-1 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-yellow-400 mb-4">Parceria Exclusiva Multifly</h3>
                      <p className="text-slate-300 text-lg leading-relaxed">
                        A Multifly tem uma parceria especial com a empresa de locação de trajes 
                        <span className="font-semibold text-white"> London Noiva e Noivo</span>, 
                        oferecendo condições exclusivas para nossos clientes.
                      </p>
                    </div>
                    
                    {/* Modelos de Smoking */}
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-6 border border-slate-600/30">
                      <h4 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Modelos de Smoking disponíveis:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-slate-600/30 rounded-lg p-4 border border-slate-500/30">
                          <h5 className="font-semibold text-white mb-2">Modelo Windson</h5>
                          <p className="text-2xl font-bold text-green-400">R$ 360</p>
                        </div>
                        <div className="bg-slate-600/30 rounded-lg p-4 border border-slate-500/30">
                          <h5 className="font-semibold text-white mb-2">Modelo Max-000</h5>
                          <p className="text-2xl font-bold text-green-400">R$ 420</p>
                        </div>
                        <div className="bg-slate-600/30 rounded-lg p-4 border border-slate-500/30">
                          <h5 className="font-semibold text-white mb-2">Modelo Adam</h5>
                          <p className="text-2xl font-bold text-green-400">R$ 590</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Itens inclusos */}
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-6 border border-slate-600/30">
                      <h4 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Itens inclusos na locação:
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="flex items-center gap-2 text-slate-300">
                          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Paletó
                        </div>
                        <div className="flex items-center gap-2 text-slate-300">
                          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Calça
                        </div>
                        <div className="flex items-center gap-2 text-slate-300">
                          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Camisa com abotoaduras
                        </div>
                        <div className="flex items-center gap-2 text-slate-300">
                          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Faixa
                        </div>
                        <div className="flex items-center gap-2 text-slate-300">
                          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Gravata borboleta preta
                        </div>
                        <div className="flex items-center gap-2 text-slate-300">
                          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Ajustes
                        </div>
                        <div className="flex items-center gap-2 text-slate-300">
                          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Lavanderia
                        </div>
                      </div>
                    </div>
                    
                    {/* Descontos especiais */}
                    <div className="bg-yellow-900/20 backdrop-blur-md rounded-lg p-6 border border-yellow-500/30">
                      <h4 className="text-xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                        Descontos especiais para pais e convidados:
                      </h4>
                      <p className="text-slate-300 text-lg">
                        De <span className="font-bold text-yellow-400">20% a 50%</span> na locação de ternos.
                      </p>
                    </div>
                    
                    {/* Informações importantes */}
                    <div className="bg-red-900/20 backdrop-blur-md rounded-lg p-6 border border-red-500/30">
                      <h4 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        Importante:
                      </h4>
                      <p className="text-slate-300 text-lg">
                        Para garantir os valores promocionais, é necessário informar na recepção da loja 
                        que foi <span className="font-bold text-white">indicado pela Multifly</span>.
                      </p>
                    </div>
                    
                    {/* Contato */}
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-6 border border-slate-600/30">
                      <h4 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Contato:
                      </h4>
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <p className="text-slate-300">R. Amintas de Barros, 1058 - Alto da XV</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <p className="text-slate-300">(41) 99816-0008</p>
                        </div>
                      </div>
                      <div className="flex justify-center pt-2">
                        <a 
                          href="https://wa.me/5541998160008?text=Olá! Fui indicado pela Multifly para locação de trajes."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-green-600 hover:bg-green-700 text-white font-semibold text-sm py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 flex items-center justify-center gap-2"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297a11.162 11.162 0 00-8.413-3.3c-6.627 0-12.01 5.383-12.01 12.01 0 2.15.56 4.16 1.55 5.91l-1.58 5.76 5.91-1.55a11.92 11.92 0 005.91 1.55c6.627 0 12.01-5.383 12.01-12.01 0-3.18-1.24-6.17-3.5-8.42"/>
                          </svg>
                          Fale com a London
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Informações Detalhadas */}
          <div id="informacoes" className={`w-full mt-12 scroll-mt-12 transition-all duration-1000 ${visibleSections.has('informacoes') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ background: 'radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.25) 0%, rgba(30, 58, 138, 0.12) 20%, rgba(30, 58, 138, 0.05) 35%, rgba(30, 58, 138, 0.01) 45%, transparent 55%)' }}>
            <div className="max-w-6xl mx-auto pt-12 pb-12">
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
                    <p className="text-slate-300 text-sm mb-2">Precisam de convite, terão cadeira e são contabilizadas como convidados.</p>
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
                      <span className="text-lg font-bold">$</span>
                      Custos:
                    </h4>
                    <p className="text-slate-300 text-sm">R$80,00 por garrafa ou 3 (três) garrafas por R$150,00</p>
        </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-400 mb-2 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Permitido (máx. 1L cada):
                    </h4>
                    <p className="text-slate-300 text-sm">Destilados e vinhos</p>
        </div>
                  
                  <div>
                    <h4 className="font-semibold text-red-400 mb-2 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Proibido:
                    </h4>
                    <p className="text-slate-300 text-sm">Energéticos, xaropes e especiarias para gin</p>
                    <p className="text-slate-400 text-xs mt-1">Não é permitido trazer cerveja nem espumante, pois essas bebidas já estarão disponíveis para compra no local, na temperatura adequada ao consumo.</p>
            </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">Horário de entrada:</h4>
                    <p className="text-slate-300 text-sm">Apenas entre 19h30 e 22h00 (após esse horário não é permitida a entrada de bebidas)</p>
          </div>
                  
                  <div className="bg-yellow-900/20 backdrop-blur-md rounded-lg p-3 border border-yellow-500/30">
                    <p className="text-yellow-400 text-sm flex items-start gap-2">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>O serviço de copos será padrão, não havendo distinção para cada tipo de bebida da rolha. Não será necessário levar saca-rolhas, pois os garçons estarão equipados para esse serviço.</span>
          </p>
        </div>
                  
                  <div className="bg-yellow-900/20 backdrop-blur-md rounded-lg p-3 border border-yellow-500/30">
                    <p className="text-yellow-400 text-sm flex items-start gap-2">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>É importante que todas as garrafas sejam levadas ao evento de uma só vez. Após essa entrada, não será possível trazer novas garrafas, mesmo que o limite de 3 ainda não tenha sido alcançado.</span>
          </p>
        </div>
                  
                  <div className="bg-red-900/20 backdrop-blur-md rounded-lg p-3 border border-red-500/30">
                    <p className="text-red-400 text-sm flex items-start gap-2">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                        <circle cx="12" cy="12" r="9" strokeWidth={2} />
                      </svg>
                      <span>Proibido consumo de álcool para menores de 18 anos. Maiores serão identificados pelo buffet com pulseira e assinarão um termo de responsabilidade.</span>
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
                    <h4 className="font-semibold text-yellow-400 mb-2">Empresa responsável:</h4>
                    <p className="text-slate-300 text-sm">Studio Myt, empresa parceira da Multifly, com equipe de fotógrafos.</p>
          </div>

                  <div>
                    <h4 className="font-semibold text-yellow-400 mb-2">Incluído no pacote:</h4>
                    <p className="text-slate-300 text-sm">Link individual e exclusivo com as fotos disponibilizado em até 120 dias úteis após o evento.</p>
          </div>

            <div>
                    <h4 className="font-semibold text-yellow-400 mb-2">Estúdios fotográficos:</h4>
                    <p className="text-slate-300 text-sm">Funcionamento das 19h30 às 01h00. Famílias devem se dirigir aos locais designados.</p>
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
          <div id="servicos" className={`w-full mt-12 scroll-mt-12 transition-all duration-1000 ${visibleSections.has('servicos') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ background: 'radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.2) 0%, rgba(30, 58, 138, 0.08) 15%, rgba(30, 58, 138, 0.03) 25%, rgba(30, 58, 138, 0.01) 35%, transparent 45%)' }}>
            <div className="max-w-6xl mx-auto pt-12 pb-12">
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
                  <p className="text-slate-300 text-sm">100% Open Food até 4h com Mesa de Antepastos, Ilhas Gastronômicas e de Sobremesas conforme cronograma de alimentação do evento</p>
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
          <div id="info-adicionais" className={`w-full mt-12 transition-all duration-1000 ${visibleSections.has('info-adicionais') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ background: 'radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.2) 0%, rgba(30, 58, 138, 0.08) 15%, rgba(30, 58, 138, 0.03) 25%, rgba(30, 58, 138, 0.01) 35%, transparent 45%)' }}>
            <div className="max-w-6xl mx-auto pt-12 pb-12">
            <h2 className="text-3xl font-bold text-center mb-12">Informações Adicionais</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
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
                  Aproximadamente às <span className="font-semibold text-white">00h00</span>. Formandos escolhem uma pessoa para dançar. Música única definida pela Comissão de Formatura.
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
                  O cronograma oficial do evento será disponibilizado <span className="font-semibold text-white">na semana do evento</span>, após análise com a Comissão de Formatura.
            </p>
          </div>

        </div>
          </div>
          </div>

          {/* Avisos Importantes */}
          <div id="avisos" className={`w-full mt-12 transition-all duration-1000 ${visibleSections.has('avisos') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ background: 'radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.25) 0%, rgba(30, 58, 138, 0.12) 20%, rgba(30, 58, 138, 0.05) 35%, rgba(30, 58, 138, 0.01) 45%, transparent 55%)' }}>
            <div className="max-w-6xl mx-auto pt-12 pb-12">
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
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-blue-400 mb-3">Entrega de Convites</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-slate-300 text-sm leading-relaxed mb-4">
                          A entrega dos Ingressos será realizada de modo presencial, na sede da Multifly, durante os dias: <span className="font-semibold text-white">05/11 a 15/11</span>.
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <p className="text-slate-300 text-sm">Acyr Santos, 92 - Vila Izabel - Curitiba</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div className="text-slate-300 text-sm">
                              <p>Segunda à Sexta das 1h às 18h</p>
                              <p>Sábados: 09h às 11h</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full">
                        <iframe
                          src="https://www.google.com/maps?q=Acyr+Santos+92,+Vila+Izabel,+Curitiba&output=embed"
                          width="100%"
                          height="200"
                          style={{ border: 0, borderRadius: '8px' }}
                          allowFullScreen={true}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          className="rounded-lg"
                        />
                      </div>
                    </div>
          </div>
        </div>
              </div>
            </div>
          </div>
          </div>

          {/* Seção de Contato */}
          <div id="contato" className={`w-full mt-12 scroll-mt-12 transition-all duration-1000 ${visibleSections.has('contato') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ background: 'radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.25) 0%, rgba(30, 58, 138, 0.12) 20%, rgba(30, 58, 138, 0.05) 35%, rgba(30, 58, 138, 0.01) 45%, transparent 55%)' }}>
            <div className="max-w-6xl mx-auto pt-20 pb-24">
            <h2 className="text-3xl font-bold text-center mb-12">Entre em Contato</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Card 1: Multifly Eventos */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl p-8 border border-slate-700/50 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center p-2">
                    <img src="/Y.svg" alt="Multifly" className="w-full h-full" />
                  </div>
                  <h3 className="text-2xl font-bold">Multifly</h3>
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
                    <p className="text-white font-semibold mb-3">SAC Multifly</p>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        <p className="text-slate-300 font-semibold">(41) 99539-9895</p>
            </div>
                      <a href="https://wa.me/5541995399895" target="_blank" rel="noopener noreferrer" className="bg-green-500/20 backdrop-blur-md border border-green-500/50 text-green-400 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 hover:bg-green-500 hover:text-white hover:scale-105 whitespace-nowrap">
                        Clique para entrar em contato
                      </a>
                    </div>
          </div>
        </div>
        </div>

              {/* Card 2: Fotografia */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl p-8 border border-slate-700/50 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center p-2">
                    <img src="/Logo Myt.svg" alt="Studio MYT" className="w-full h-full" />
                  </div>
                  <h3 className="text-2xl font-bold">Studio MYT</h3>
                </div>
                
        <div className="space-y-4">
                  <a href="tel:+554199010937" className="flex items-center gap-3 hover:text-yellow-400 transition-colors">
                    <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p className="text-slate-300">(41) 99901-0937</p>
                  </a>
                  
                  <a href="mailto:atendimento@studiomyt.com.br" className="flex items-center gap-3 hover:text-yellow-400 transition-colors">
                    <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="text-slate-300">atendimento@studiomyt.com.br</p>
                  </a>
                  
                  <div className="bg-blue-900/20 backdrop-blur-md rounded-lg p-4 border border-blue-500/30 mt-6">
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Para álbuns e outros produtos fotográficos disponíveis no Family Day
                    </p>
                    <p className="text-slate-400 text-xs mt-2 italic">
                      Entre em contato para mais informações sobre produtos e serviços fotográficos.
                    </p>
                  </div>

                  <div className="bg-yellow-400/10 backdrop-blur-md rounded-lg p-4 border border-yellow-400/30 mt-6">
                    <h4 className="font-bold text-yellow-400 mb-3">Atendimento Studio MYT</h4>
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        <p className="text-slate-300 font-semibold">(41) 99901-0937</p>
                      </div>
                      <a href="https://wa.me/5541999010937" target="_blank" rel="noopener noreferrer" className="bg-green-500/20 backdrop-blur-md border border-green-500/50 text-green-400 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 hover:bg-green-500 hover:text-white hover:scale-105 whitespace-nowrap">
                        Clique para entrar em contato
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}


      {/* Seção FAQ */}
      {activeTab === 'faq' && (
      <section id="faq" className={`py-12 px-6 scroll-mt-12 transition-all duration-1000 ${visibleSections.has('faq') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Perguntas frequentes</h2>
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
                  <div className="px-6 pb-6 animate-fadeIn">
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30 space-y-3">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        <span className="font-semibold text-white">Baile de Formatura:</span> 05/12/2025 – Sexta-feira – 19h30 às 05h00
                      </p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        <span className="font-semibold text-white">Local do Evento:</span> Espaço Torres Paraná Clube – Avenida Presidente Kennedy, 2377 – Guaíra – Curitiba.
                      </p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        A abertura oficial do evento está programada para às 19h30.
                      </p>
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
                  <span className="font-semibold text-lg">Consigo separar meu plano em duas mesas?</span>
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
                  <div className="px-6 pb-6 animate-fadeIn">
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Não será possível.
                      </p>
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
                  <span className="font-semibold text-lg">Qual a política para crianças?</span>
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
                  <div className="px-6 pb-6 animate-fadeIn">
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30 space-y-4">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        A política para crianças é a seguinte:
                      </p>
                      <div>
                        <p className="text-slate-300 text-sm leading-relaxed mb-2">
                          <span className="text-yellow-400">●</span> Crianças de 0 a 2 anos: não é necessário convite, mas elas não terão cadeira.
                        </p>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          <span className="text-yellow-400">●</span> Crianças de 03 a 07 anos: precisam de convite, terão uma cadeira e serão contabilizadas como convidados no pacote de adesão.
                        </p>
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        É importante observar que os convites para menores de 07 anos não podem ser usados por maiores de 07 anos e será feita uma conferência na entrada do evento. Todos os ingressos serão entregues antecipadamente, conforme o calendário a ser divulgado, não havendo nenhuma forma de retirá-los no momento do baile.
                      </p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        No momento da retirada, é necessário informar que o convite é destinado a uma criança. Caso essa informação não seja repassada, o sistema considerará automaticamente como um convite adulto. Pedimos atenção, pois não será possível realizar reembolso ou troca posteriormente.
                      </p>
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
                  <span className="font-semibold text-lg">Quem precisa apresentar convite?</span>
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
                        Formandos e Convidados (Todos): Imprescindível a apresentação do convite. Em caso de perda ou esquecimento do ingresso, não será permitida a entrada no evento.
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
                  <span className="font-semibold text-lg">É permitido entrar e sair durante o evento?</span>
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
                  <div className="px-6 pb-6 animate-fadeIn">
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Não será permitido o acesso aos veículos durante o baile, e qualquer saída após o início do evento será rigorosamente controlada. Caso precise ir ao seu veículo, você não poderá reingressar ao evento, então é fundamental planejar suas necessidades antes de entrar, evitando saídas desnecessárias.
                      </p>
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
                  <span className="font-semibold text-lg">O local do evento oferece boa acessibilidade?</span>
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
                        Sim, rampas e elevadores.
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
                  <span className="font-semibold text-lg">Precisarei de mais convites extras somente para o baile, como faço?</span>
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
                        Ingressos extras são válidos somente para o baile, com convites para entrada a partir das 23h59. Não serão feitas exceções.
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
                  <span className="font-semibold text-lg">Se eu comprar mais ingressos (de outro formando) terei direito a mais cadeiras?</span>
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
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Não. As mesas e cadeiras deverão respeitar o plano adquirido pelo respectivo formando e não poderão, em hipótese alguma, sofrerem trocas de posicionamento, mesmo que sejam para mesas próximas.
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
                  <span className="font-semibold text-lg">Qual o traje para baile?</span>
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
                  <div className="px-6 pb-6 animate-fadeIn">
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30 space-y-3">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        <span className="text-yellow-400">●</span> Formandos e Formandas: Vestido Social Longo ou Smoking (gravata preta).
                      </p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        <span className="text-yellow-400">●</span> Pais e Convidados: Passeio Completo (terno completo com camisa social e gravata ou vestido longo ou midi).
                      </p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Não será liberada entrada de convidados fora do dress code determinado. Mesmo para os convidados após às 23h59.
                      </p>
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
                  <span className="font-semibold text-lg">Existe alguma parceria com loja de trajes?</span>
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
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30 space-y-4">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Sim. A Multifly tem uma parceria especial com a empresa de locação de trajes London Noiva e Noivo, oferecendo condições exclusivas para nossos clientes.
                      </p>
                      <div>
                        <h4 className="font-semibold text-blue-400 mb-2">Modelos de Smoking disponíveis:</h4>
                        <ul className="space-y-1 text-sm text-slate-300">
                          <li>• Modelo Windson: R$ 360</li>
                          <li>• Modelo Max-000: R$ 420</li>
                          <li>• Modelo Adam: R$ 590</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-400 mb-2">Itens inclusos na locação:</h4>
                        <ul className="space-y-1 text-sm text-slate-300">
                          <li>• Paletó</li>
                          <li>• Calça</li>
                          <li>• Camisa com abotoaduras</li>
                          <li>• Faixa</li>
                          <li>• Gravata borboleta preta</li>
                          <li>• Ajustes</li>
                          <li>• Lavanderia</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-400 mb-2">Descontos especiais para pais e convidados:</h4>
                        <p className="text-slate-300 text-sm">De 20% a 50% na locação de ternos.</p>
                      </div>
                      <div className="bg-yellow-900/20 backdrop-blur-md rounded-lg p-3 border border-yellow-500/30">
                        <p className="text-yellow-400 text-sm leading-relaxed">
                          <span className="font-bold">Importante:</span> Para garantir os valores promocionais, é necessário informar na recepção da loja que foi indicado pela Multifly.
                        </p>
                        <p className="text-slate-300 text-sm mt-2">
                          <span className="font-semibold">Endereço:</span> R. Amintas de Barros, 1058 - Alto da XV<br/>
                          <span className="font-semibold">Telefone:</span> (41) 99816-0008
                        </p>
                      </div>
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
                  <span className="font-semibold text-lg">Com quanto tempo de antecedência o formando(a) deve chegar ao local do evento:</span>
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
                        Não há necessidade do formando chegar antes no evento.
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
                  <span className="font-semibold text-lg">O evento contará com equipe de fotografia ou devo contratar à parte?</span>
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
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30 space-y-3">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Haverá equipe de fotógrafos. Está incluso no pacote o book digital com as fotos dos alunos sem separação por aluno. Será enviado 01 (um) link geral com todas as fotos do evento, de todos os formandos em até 120 dias após o baile, para os e-mails cadastrados no ato da adesão. As fotos dos eventos que antecedem a formatura, como os pré-eventos, já estão sendo compartilhadas pela empresa à Comissão de Formatura através de um link.
                      </p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Caso a família deseje adquirir outros produtos fotográficos, como álbuns ou placas de homenagem, essas opções estarão disponíveis para compra durante o Family Day e/ou em outros momentos oportunos pela equipe comercial do Studio Myt.
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
                  <span className="font-semibold text-lg">Em que momento farei as fotos com familiares e amigos?</span>
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
                        Na chegada e durante o evento, nos estúdios e pontos de fotos determinados pela organização. Será disponibilizado um cronograma na semana do evento do evento, com o detalhamento completo com um manual de como você poderá aproveitar ainda mais o fluxo de todas as ocasiões para potencializar ainda mais o resultado fotográfico, via Instagram Oficial da Empresa (<span className="font-semibold text-white">@mutifly.ag</span>).
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
                  <span className="font-semibold text-lg">Como será ofertado o serviço de alimentação do baile?</span>
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
                  <div className="px-6 pb-6 animate-fadeIn">
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30 space-y-3">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        O evento será 100% Open Food, até às 4h00, de acordo com o cronograma de alimentação definido pela Comissão de Formatura, que inclui: Mesa de Antepastos; Ilhas Gastronômicas; Lanche da Madrugada; e Mesa de Sobremesas.
                      </p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        O evento será 100% Open Bar de água, refrigerante e suco.
                      </p>
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
                  <span className="font-semibold text-lg">Em caso de restrições alimentares?</span>
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
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30 space-y-3">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Para pessoas com alguma restrição alimentar, por exemplo, celíaca, deverá entrar em contato com a empresa pelo e-mail: <span className="font-semibold text-white">cuidadosalimentares@multifly.com.br</span> em até 20 dias antes do evento. É indispensável que o e-mail inclua o laudo médico de até 60 dias comprovando a restrição alimentar, pois o documento tem que ser apresentado ao buffet para validação do reembolso.
                      </p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Por prezarmos pela saúde e segurança dos nossos clientes, informamos que não oferecemos cardápio sem glúten em nossos eventos. Como a cozinha do Buffet é única, há risco de contaminação cruzada, mesmo com alimentos naturalmente sem glúten. Por isso, optamos por devolver o valor referente à alimentação ao formando e/ou convidado que tenha essa necessidade, em até 15 dias úteis, para que possa escolher um restaurante ou fornecedor de sua confiança. Essa medida visa garantir liberdade, segurança e respeito às restrições alimentares.
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
                  <span className="font-semibold text-lg">Para o baile, haverá rolha?</span>
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
                  <div className="px-6 pb-6 animate-fadeIn">
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30 space-y-3">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Sim, o custo da rolha é de R$80,00 por garrafa ou 3 (três) garrafas por R$150,00 e serão permitidos somente destilados e vinhos. As garrafas podem ser de no máximo, 1 (um) litro. O valor deverá ser pago diretamente na chegada do evento.
                      </p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        As rolhas só poderão ser entregues pelo responsável que assinou o contrato, com entrada das bebidas apenas entre 19h30 e 22h00. É importante que todas as garrafas sejam levadas ao evento de uma só vez. Após essa entrada, não será possível trazer novas garrafas, mesmo que o limite de 3 ainda não tenha sido alcançado.
                      </p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        O serviço de copos será padrão, não havendo distinção para cada tipo de bebida da rolha. Energéticos e xaropes não serão aceitos como parte da rolha, e especiarias para o gin também não poderão ser levadas, pois o evento contará com um bar especializado em drinks elaborados para venda. Por fim, não será necessário levar saca-rolhas, pois os garçons estarão equipados para esse serviço.
                      </p>
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
                  <span className="font-semibold text-lg">Quais tipos de bebidas posso levar na rolha?</span>
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
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30 space-y-3">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Na modalidade rolha, é permitido levar bebidas destiladas (como whisky, vodka, gin, entre outros) e vinhos.
                      </p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Não é permitido trazer cerveja nem espumante, pois essas bebidas já estarão disponíveis para compra no local, na temperatura adequada ao consumo.
                      </p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Lembramos que é proibido o consumo e a compra de bebidas alcoólicas por menores de 18 anos. Todos os maiores de idade serão identificados pela nossa equipe e deverão assinar um termo de responsabilidade referente ao consumo de álcool.
                      </p>
                      <div className="bg-red-900/20 backdrop-blur-md rounded-lg p-3 border border-red-500/30">
                        <p className="text-red-400 text-sm leading-relaxed">
                          Fica expressamente vedado o fornecimento, disponibilização ou incentivo ao consumo de bebidas alcoólicas por crianças e adolescentes, nos termos do Estatuto da Criança e do Adolescente (Lei nº 8.069/1990). Caso algum pai, mãe ou responsável legal opte por trazer bebidas alcoólicas para o evento, este assumirá integral e exclusiva responsabilidade civil, administrativa e, se for o caso, criminal pelo consumo das referidas bebidas por seus convidados, inclusive por eventuais consequências decorrentes do acesso indevido de menores ao álcool, isentando os organizadores do evento de qualquer responsabilidade.
                        </p>
                      </div>
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
                  <span className="font-semibold text-lg">O que não posso levar ao baile?</span>
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
                        Não será permitido levar alimentos ou bebidas para presentear os formandos no dia do baile, como caixas com chocolates ou balões, por questões de segurança.
                      </p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Será permitido levar um buquê para o formando, mas é importante destacar que não será permitido nenhum objeto ou material que faça barulho ou espalhe papel picado pelo salão, para não atrapalhar a entrada de outros formandos.
                      </p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Não será permitido o ingresso de itens como balões, infláveis e similares, faixas, totens, buzinas, apitos ou outros emissores sonoros, sky paper, sinalizadores, fogos de qualquer natureza, objetos cortantes ou ilícitos, fumos, vaporizadores ou afins, pulseiras com fluído neon, câmeras digitais semiprofissionais e profissionais, aerossóis, líquidos, vidros, entre outros.
                      </p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Caso a embalagem não permita a visualização do conteúdo, poderá ser solicitada a abertura para conferência na entrada do evento pela equipe de segurança
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
                  <span className="font-semibold text-lg">Qual o horário da valsa?</span>
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
                        Aproximadamente às <span className="font-semibold text-white">00h00</span>. O formando(a) poderá escolher uma pessoa para dançar a valsa. A música será única para todos os formandos e definida pela Comissão de Formatura.
                      </p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Se o formando optar por dançar com mais de um par, é importante que se organize previamente em relação ao tempo da música, pois não haverá pausas para trocas durante a apresentação.
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
                  <span className="font-semibold text-lg">Como funcionará a logística de estúdios de fotos no baile?</span>
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
                  <div className="px-6 pb-6 animate-fadeIn">
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30 space-y-3">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Uma publicação no Instagram Oficial da Empresa (<span className="font-semibold text-white">@multifly.ag</span>) será divulgada na semana do evento, orientando como aproveitar melhor a estrutura de fotos, porém seguem todas as informações necessárias para se planejarem adequadamente.
                      </p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Não haverá garantia de fotos da entrada dos formandos, pois esse momento será registrado exclusivamente em vídeo. Da mesma forma, o momento da valsa será feito no circuito de fotos de forma posada. A valsa, no evento, será registrada apenas em vídeo, em plano aberto, com foco na composição geral do salão. Por esse motivo, não é possível garantir o enquadramento individual dos pares durante a gravação e não serão feitas fotos durante a apresentação.
                      </p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        As famílias estão cientes de que é de sua total responsabilidade, assim como a de seus convidados, dirigir-se aos locais de captação de imagens disponibilizados durante o evento. A orientação para que a família e convidados compareçam a esses locais é exclusivamente do formando e/ou seus responsáveis. Além disso, o formando deve estar ciente de que deve se dirigir aos estúdios fotográficos dentro do horário disponível: das 19h30 às 01h00.
                      </p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Em razão das particularidades que envolvem os serviços contratados, o fato de alguém ter sido fotografado não significa que estas imagens estarão com qualidade suficiente e somente serão disponibilizadas as imagens que se adequarem à qualidade técnica definida pela empresa.
                      </p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        É bastante comum alguns formandos possuírem mais fotos do que outros, visto que cada formando interage de maneira diferente e específica com o evento e com a equipe, principalmente, porém não somente, no que tange à disposição e interesse de permanência e frequência nos estúdios e pontos de foto.
                      </p>
                      <div className="bg-yellow-900/20 backdrop-blur-md rounded-lg p-3 border border-yellow-500/30">
                        <p className="text-yellow-400 text-sm font-bold mb-2">Importante:</p>
                        <p className="text-slate-300 text-sm leading-relaxed mb-2">
                          Serão feitas fotos em momentos diversos do baile, porém as fotos garantidas são somente as fotos nos estúdios. As fotos no baile dependem da interação e disponibilidade dos formandos.
                        </p>
                        <p className="text-slate-300 text-sm leading-relaxed mb-2">
                          Não são permitidas máquinas profissionais e semi profissionais, drones, flashes e ringlights. Não são permitidas fotos, mesmo que de smartphones, nos estúdios. Durante o evento, haverá organização da fila para garantir que os convidados se acomodem adequadamente, com uma equipe dedicada para isso. Os fotógrafos, que estarão com crachá do Studio Myt para fácil identificação, não ficarão disponíveis nas mesas, pois as fotos serão realizadas nos estúdios fotográficos.
                        </p>
                        <p className="text-slate-300 text-sm leading-relaxed mb-2">
                          Ao chegar no salão, não será tirada uma foto de entrada, solicita-se aos formandos e convidados que se dirijam aos estúdios. Será entregue uma pulseira de LED, garantindo que todos os formandos sejam corretamente identificados. É importante que essa pulseira mantenha-se no pulso e ligada durante todo o período do evento.
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
                  <span className="font-semibold text-lg">Qual a atração do evento?</span>
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
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        As atrações serão definidas pela Comissão de Formatura junto com o produtor musical da Multifly.
                      </p>
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
                  <span className="font-semibold text-lg">Quais os contatos da empresa de formatura?</span>
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
                    <div className="bg-slate-700/30 backdrop-blur-md rounded-lg p-4 border border-slate-600/30 space-y-3">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Você pode entrar em contato com a Multilfly pelo (41) 3014-8108 ou pelo e-mail contato@multifly.com.br. O SAC Multifly também está disponível via WhatsApp (41) 99539-9895 com uma equipe pronta para te atender.
                      </p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Em caso de dificuldade você pode contatar diretamente a Multifly pelos contatos indicados.
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
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center p-2">
                      <img src="/Y.svg" alt="Multifly" className="w-full h-full" />
                    </div>
                    <h3 className="text-2xl font-bold">Multifly</h3>
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
                    <p className="text-white font-semibold mb-3">SAC Multifly</p>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        <p className="text-slate-300 font-semibold">(41) 99539-9895</p>
            </div>
                      <a href="https://wa.me/5541995399895" target="_blank" rel="noopener noreferrer" className="bg-green-500/20 backdrop-blur-md border border-green-500/50 text-green-400 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 hover:bg-green-500 hover:text-white hover:scale-105 whitespace-nowrap">
                        Clique para entrar em contato
                      </a>
                    </div>
          </div>
        </div>
        </div>

              {/* Card 2: Studio MYT */}
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl p-8 border border-slate-700/50 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center p-2">
                    <img src="/Logo Myt.svg" alt="Studio MYT" className="w-full h-full" />
                  </div>
                  <h3 className="text-2xl font-bold">Studio MYT</h3>
                </div>
                
        <div className="space-y-4">
                  <a href="tel:+554199010937" className="flex items-center gap-3 hover:text-yellow-400 transition-colors">
                    <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p className="text-slate-300">(41) 99901-0937</p>
                  </a>
                  
                  <a href="mailto:atendimento@studiomyt.com.br" className="flex items-center gap-3 hover:text-yellow-400 transition-colors">
                    <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="text-slate-300">atendimento@studiomyt.com.br</p>
                  </a>
                  
                  <div className="bg-blue-900/20 backdrop-blur-md rounded-lg p-4 border border-blue-500/30 mt-6">
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Para álbuns e outros produtos fotográficos disponíveis no Family Day
                    </p>
                    <p className="text-slate-400 text-xs mt-2 italic">
                      Entre em contato para mais informações sobre produtos e serviços fotográficos.
                    </p>
                  </div>

                  <div className="bg-yellow-400/10 backdrop-blur-md rounded-lg p-4 border border-yellow-400/30 mt-6">
                    <h4 className="font-bold text-yellow-400 mb-3">Atendimento Studio MYT</h4>
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        <p className="text-slate-300 font-semibold">(41) 99901-0937</p>
                      </div>
                      <a href="https://wa.me/5541999010937" target="_blank" rel="noopener noreferrer" className="bg-green-500/20 backdrop-blur-md border border-green-500/50 text-green-400 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 hover:bg-green-500 hover:text-white hover:scale-105 whitespace-nowrap">
                        Clique para entrar em contato
                      </a>
                    </div>
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
      <footer className="w-full bg-slate-900/40 backdrop-blur-lg border-t border-slate-700/50 mt-12">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            
            {/* Texto Central */}
            <div className="text-center">
              <p className="text-slate-400 text-sm">
                Formatura Terceirão Feras Bom Jesus Lourdes 2025
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