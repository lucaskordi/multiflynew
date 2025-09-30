'use client';

import { useEffect, useState } from 'react';
import InteractiveY from './components/InteractiveY';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Create custom cursor
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
    <div className="min-h-screen bg-[#e7c135] flex items-center justify-center cursor-none">
      <div className="flex items-center w-full max-w-6xl gap-0">
        <div className="text-left flex-1">
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
            className={`h-32 md:h-48 w-auto transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              height: '16rem',
              transitionDelay: '0.2s'
            }}
          />
        </div>
        <p 
          className={`font-montserrat text-xl md:text-4xl font-extrabold leading-none transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            fontFamily: 'var(--font-montserrat), Arial, sans-serif', 
            letterSpacing: '-2px', 
            color: '#1e0f18', 
            marginTop: '0.2rem',
            transitionDelay: '0.4s'
          }}
        >
          somos uma plataforma <br />
          de concepções disruptivas <br />
          aplicadas ao seu evento.
        </p>
        <p 
          className={`text-xl md:text-4xl transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            fontFamily: 'var(--font-montserrat), Montserrat, Arial, sans-serif', 
            fontWeight: '800', 
            letterSpacing: '-1px', 
            color: '#1e0f18',
            marginTop: '1.5rem',
            transitionDelay: '0.6s'
          }}
        >
          We fly and multiply.
        </p>
        <div 
          className={`mt-8 inline-block transition-all duration-1000 ${
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
                  className="h-12 w-12"
                />
                <p className="ml-2 text-lg md:text-2xl" style={{fontFamily: 'var(--font-montserrat), Montserrat, Arial, sans-serif', fontWeight: '900', color: '#1e0f18'}}>
                  multifly.ag
                </p>
          </a>
        </div>
        </div>
        <div className="flex-1 flex justify-end" style={{marginLeft: '-200px'}}>
          <div 
            className={`transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
            style={{ 
              transform: isVisible ? 'scale(1)' : 'scale(0)',
              transitionDelay: '1s'
            }}
          >
            <InteractiveY />
          </div>
        </div>
      </div>
    </div>
  );
}
