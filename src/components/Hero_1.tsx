import { useState, useEffect } from 'react';

export function Hero_1() {
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowParticles(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-oat overflow-hidden">
        <div className="absolute flex items-center justify-center z-30 -translate-y-20" style={{ width: '80%', gap: '100px' }}>
          <div className="h-8 relative" style={{ backgroundColor: '#424123', width: '150px', clipPath: 'polygon(0% 0%, 75% 0%, 82% 15%, 88% 30%, 95% 45%, 85% 60%, 92% 80%, 78% 100%, 0% 100%)' }}>
            <div className="absolute right-0 top-1 w-4 h-2" style={{ backgroundColor: '#2d2d17' }}></div>
            <div className="absolute right-1 bottom-1 w-5 h-2" style={{ backgroundColor: '#2d2d17' }}></div>
            <div className="absolute right-2 top-3 w-3 h-1" style={{ backgroundColor: '#2d2d17' }}></div>
            <div className="absolute right-0 top-5 w-2 h-3" style={{ backgroundColor: '#2d2d17' }}></div>
          </div>
          
          <div className="h-8 relative" style={{ backgroundColor: '#424123', width: '150px', clipPath: 'polygon(22% 0%, 100% 0%, 100% 100%, 5% 100%, 8% 85%, 15% 70%, 3% 55%, 12% 40%, 18% 25%, 10% 10%)' }}>
            <div className="absolute left-0 top-2 w-4 h-2" style={{ backgroundColor: '#2d2d17' }}></div>
            <div className="absolute left-2 bottom-1 w-5 h-2" style={{ backgroundColor: '#2d2d17' }}></div>
            <div className="absolute left-1 top-4 w-3 h-1" style={{ backgroundColor: '#2d2d17' }}></div>
            <div className="absolute left-0 bottom-3 w-2 h-2" style={{ backgroundColor: '#2d2d17' }}></div>
          </div>
        </div>
        
        {/* Левые осколки */}
        <div className={`absolute z-40 transition-all duration-1000 ${showParticles ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`} style={{ left: '40%', top: '40%' }}>
          <div className="shadow-lg" style={{ 
            width: '22px', 
            height: '10px', 
            backgroundColor: '#4a3d2e', 
            clipPath: 'polygon(0% 40%, 25% 0%, 75% 10%, 100% 50%, 80% 100%, 20% 90%)',
            boxShadow: '2px 2px 4px rgba(0,0,0,0.4)'
          }}></div>
        </div>
        <div className={`absolute z-40 transition-all duration-1000 delay-400 ${showParticles ? 'opacity-100 translate-y-2' : 'opacity-0 -translate-y-2'}`} style={{ left: '42%', top: '44%' }}>
          <div className="shadow-lg" style={{ 
            width: '12px', 
            height: '16px', 
            backgroundColor: '#5d4e3f', 
            clipPath: 'polygon(20% 0%, 80% 15%, 100% 60%, 75% 100%, 0% 85%, 10% 45%)',
            boxShadow: '2px 2px 4px rgba(0,0,0,0.4)'
          }}></div>
        </div>
        
        {/* Правые осколки */}
        <div className={`absolute z-40 transition-all duration-1000 delay-800 ${showParticles ? 'opacity-100 translate-y-3' : 'opacity-0 -translate-y-1'}`} style={{ left: '58%', top: '43%' }}>
          <div className="shadow-lg" style={{ 
            width: '16px', 
            height: '14px', 
            backgroundColor: '#6a5a4b', 
            clipPath: 'polygon(0% 30%, 40% 0%, 100% 20%, 90% 70%, 60% 100%, 10% 80%)',
            boxShadow: '2px 2px 4px rgba(0,0,0,0.4)'
          }}></div>
        </div>
        <div className={`absolute z-35 transition-all duration-800 delay-600 ${showParticles ? 'opacity-100 translate-y-1' : 'opacity-0 -translate-y-2'}`} style={{ left: '55%', top: '47%' }}>
          <div className="shadow-md" style={{ 
            width: '8px', 
            height: '6px', 
            backgroundColor: '#5a4a3a', 
            clipPath: 'polygon(0% 40%, 60% 0%, 100% 70%, 40% 100%)',
            boxShadow: '1px 1px 2px rgba(0,0,0,0.3)'
          }}></div>
        </div>
      <div
        className="relative z-20 rotate-90"
      >
        <svg width="400" height="400" viewBox="0 0 1024 1024" fill="#424123" transform='rotate(250)'>
          <path d="M925.9 804l-24-199.2c-.8-6.6-8.9-9.4-13.6-4.7L829 659.5 557.7 388.3c-6.3-6.2-16.4-6.2-22.6 0L433.3 490 156.6 213.3a8.03 8.03 0 0 0-11.3 0l-45 45.2a8.03 8.03 0 0 0 0 11.3L422 591.7c6.2 6.3 16.4 6.3 22.6 0L546.4 490l226.1 226-59.3 59.3a8.01 8.01 0 0 0 4.7 13.6l199.2 24c5.1.7 9.5-3.7 8.8-8.9z"/>
        </svg>
      </div>
    </section>
  );
}