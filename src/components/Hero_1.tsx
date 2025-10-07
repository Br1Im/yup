import Fall_SVG from './image/Fall_SVG.svg';
import { useEffect, useState } from 'react';

export function Hero_1() {
  const [rotation, setRotation] = useState(45);
  
  // Добавляем анимацию вращения
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-oat overflow-hidden">
      <div className="relative w-64 h-64 transform transition-all duration-700 hover:scale-110">
        {/* Используем SVG напрямую вместо img для лучшего контроля */}
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 1024 1024" 
          xmlns="http://www.w3.org/2000/svg"
          style={{ 
            transform: `rotate(${rotation}deg)`,
            transition: 'transform 0.2s ease-in-out'
          }}
          fill="#424123" // Moss цвет
        >
          <path d="M925.9 804l-24-199.2c-.8-6.6-8.9-9.4-13.6-4.7L829 659.5 557.7 388.3c-6.3-6.2-16.4-6.2-22.6 0L433.3 490 156.6 213.3a8.03 8.03 0 0 0-11.3 0l-45 45.2a8.03 8.03 0 0 0 0 11.3L422 591.7c6.2 6.3 16.4 6.3 22.6 0L546.4 490l226.1 226-59.3 59.3a8.01 8.01 0 0 0 4.7 13.6l199.2 24c5.1.7 9.5-3.7 8.8-8.9z"/>
        </svg>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-oat">YUP</span>
        </div>
      </div>
    </section>
  );
}