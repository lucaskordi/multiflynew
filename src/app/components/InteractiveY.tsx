'use client';

import { useEffect, useRef, useState } from 'react';

export default function InteractiveY() {
  const imgRef = useRef<HTMLImageElement>(null);
  const [mouseRotation, setMouseRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.01;
      const baseRotateY = Math.sin(time) * 15;
      const baseRotateX = Math.cos(time * 0.7) * 10;
      
      const finalRotateY = baseRotateY + mouseRotation.y;
      const finalRotateX = baseRotateX + mouseRotation.x;
      
      img.style.transform = `perspective(1000px) rotateX(${finalRotateX}deg) rotateY(${finalRotateY}deg)`;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [mouseRotation]);

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateY = (mouseX / rect.width) * 30;
    const rotateX = -(mouseY / rect.height) * 30;
    
    setMouseRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setMouseRotation({ x: 0, y: 0 });
  };

  return (
    <img 
      ref={imgRef}
      src="/Y.svg" 
      alt="Y" 
      className="h-[600px] w-auto transition-transform duration-300 ease-out"
      style={{ 
        height: '600px',
        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    />
  );
}
