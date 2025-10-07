import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import logoYUP from './image/logo_YUP.png';
import { useState } from 'react';

export function Header() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
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
                className={`text-xl font-bold text-moss inline-block whitespace-nowrap ${
                  isHovered ? 'yup-fade-out' : 'yup-return-in'
                }`}
                style={{ animationFillMode: 'forwards' }}
              >
                YUP
              </span>
              <span 
                className={`text-xl font-bold text-moss absolute top-0 left-0 inline-block whitespace-nowrap ${
                  isHovered ? 'yup-fade-in' : 'yup-return-out'
                }`}
                style={{ animationFillMode: 'forwards' }}
              >
                YourUP
              </span>
            </div>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            О платформе
          </a>
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Возможности
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            Как работает
          </a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
            Отзывы
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-moss hover:text-olive">
            Войти
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}