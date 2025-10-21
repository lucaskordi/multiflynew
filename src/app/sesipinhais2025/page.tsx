'use client';

import { useEffect, useState } from 'react';
import InteractiveY from '../components/InteractiveY';

export default function SesiPinhais2025() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const cursor = document.createElement('div');
      cursor.className = 'fixed w-12 h-12 rounded-full bg-white mix-blend-difference pointer-events-none z-50';
      cursor.style.filter = 'grayscale(1)';
      cursor.style.border = '2px solid black';
    cursor.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#e7c135] flex flex-col cursor-none">
      <div className="flex-1 flex items-center justify-center px-6 pt-20 md:pt-0">
        <div className="flex flex-col md:flex-row items-center w-full max-w-6xl gap-2 md:gap-0">
          <div className="text-left flex-1 w-full">
          <div className="relative">
            <img 
              src="/LOGO.svg" 
              alt="Logo" 
              className={`h-12 w-auto mb-4 transition-all duration-1000 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ 
                transform: isVisible ? 'rotateY(0deg)' : 'rotateY(270deg)',
                transition: 'all 2s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
              }}
            />
            <img 
              src="/MAISQUE.svg" 
              alt="MAIS QUE UMA AGÊNCIA" 
              className={`h-32 md:h-48 lg:h-64 w-auto transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: '0.2s'
              }}
            />
          </div>
          <p 
            className={`font-montserrat text-base md:text-2xl lg:text-4xl font-extrabold leading-tight md:leading-none transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              fontFamily: 'var(--font-montserrat), Arial, sans-serif', 
              letterSpacing: '-1px', 
              color: '#1e0f18', 
              marginTop: '0.5rem',
              transitionDelay: '0.4s'
            }}
          >
            somos uma plataforma <br />
            de concepções disruptivas <br />
            aplicadas ao seu evento.
          </p>
          <p 
            className={`text-base md:text-2xl lg:text-4xl transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              fontFamily: 'var(--font-montserrat), Montserrat, Arial, sans-serif', 
              fontWeight: '800', 
              letterSpacing: '-1px', 
              color: '#1e0f18',
              marginTop: '1rem',
              transitionDelay: '0.6s'
            }}
          >
            We fly and multiply.
          </p>
          <div 
            className={`mt-6 md:mt-8 inline-block transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              transform: isVisible ? 'rotateY(0deg)' : 'rotateY(270deg)',
              transition: 'all 2s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
              transitionDelay: '0.8s'
            }}
          >
            <a 
              href="https://www.instagram.com/multifly.ag" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 origin-center"
              style={{textDecoration: 'none'}}
            >
                  <img 
                    src="/ig.png" 
                    alt="Instagram" 
                    className="h-10 w-10 md:h-12 md:w-12"
                  />
                  <p className="ml-2 text-base md:text-xl lg:text-2xl" style={{fontFamily: 'var(--font-montserrat), Montserrat, Arial, sans-serif', fontWeight: '900', color: '#1e0f18'}}>
                    multifly.ag
                  </p>
            </a>
          </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end -mt-16 md:mt-0 md:-ml-32 lg:-ml-48">
            <div 
              className={`transition-all duration-1000 ease-out scale-75 md:scale-100 ${
                isVisible ? 'opacity-100 scale-75 md:scale-100' : 'opacity-0 scale-0'
              }`}
              style={{ 
                transitionDelay: '1s'
              }}
            >
              <InteractiveY />
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center py-6 px-6">
        <p 
          className="text-[10px] md:text-xs"
          style={{
            fontFamily: 'var(--font-montserrat), Montserrat, Arial, sans-serif',
            fontWeight: '500',
            color: '#1e0f18',
            lineHeight: '1.6'
          }}
        >
          WEMULTIPLY MARKETING E ENTRETENIMENTO<br />
          43.371.174/0001-29
        </p>
      </footer>
    </div>
  );
}

