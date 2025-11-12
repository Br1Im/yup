import { Menu } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import logoYUP from '@/components/image/logo_YUP.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="absolute inset-0 bg-olive rounded-lg animate-pulse"></div>
            <img src={logoYUP} alt="logo" className="relative w-8 h-8 z-10 rounded-xl" />
          </div>
          <div 
            className="relative w-24 h-8 flex items-center justify-start cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative overflow-hidden w-full">
              <span 
                className={`text-xl font-bold text-white inline-block whitespace-nowrap ${
                  isHovered ? 'yup-fade-out' : 'yup-return-in'
                }`}
                style={{ 
                  animationFillMode: 'forwards',
                  fontFamily: '"Press Start 2P", monospace'
                }}
              >
                YUP
              </span>
              <span 
                className={`text-xl font-bold text-cyan-500 absolute top-0 left-0 inline-block whitespace-nowrap ${
                  isHovered ? 'yup-fade-in' : 'yup-return-out'
                }`}
                style={{ 
                  animationFillMode: 'forwards',
                  fontFamily: '"Press Start 2P", monospace'
                }}
              >
                YourUP
              </span>
            </div>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-white/70 hover:text-white transition-colors text-sm">
            О платформе
          </a>
          <a href="#features" className="text-white/70 hover:text-white transition-colors text-sm">
            Возможности
          </a>
          <a href="#how-it-works" className="text-white/70 hover:text-white transition-colors text-sm">
            Как работает
          </a>
          <a href="#testimonials" className="text-white/70 hover:text-white transition-colors text-sm">
            Отзывы
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            className="text-white hover:text-cyan-500 text-sm"
            onClick={() => navigate('/auth')}
          >
            Войти
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden text-white">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}