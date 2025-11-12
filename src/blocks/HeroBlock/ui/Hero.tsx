import { Button } from '@/shared/ui/button';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { ArrowRight, Sparkles } from 'lucide-react';
import heroImage from '@/shared/images/hero_image.png';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-transparent overflow-hidden">


      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fadeIn lg:pl-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-500 rounded-lg">
              <Sparkles className="w-4 h-4 text-cyan-500" />
              <span className="text-xs text-cyan-500">
                AI-платформа нового поколения
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                <span 
                  className="text-white font-bold text-5xl lg:text-6xl"
                  style={{ fontFamily: '"Press Start 2P", monospace' }}
                >
                  YUP
                </span>
                <br />
                <span className="text-white text-3xl lg:text-4xl">Плавное саморазвитие</span>
                <br />
                <span className="text-cyan-500 text-2xl lg:text-3xl">
                  с искусственным интеллектом
                </span>
              </h1>
              
              <p className="text-base text-white/80 max-w-lg leading-relaxed">
                Персональный AI-наставник, который помогает развиваться во всех сферах жизни — от навыков до привычек.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-cyan-500 hover:bg-white hover:text-black text-white text-sm px-8 transition-all duration-300 border border-black"
              >
                Начать развитие
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-sm px-8 border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black transition-all duration-300 shadow-lg shadow-cyan-500/50"
              >
                Узнать больше
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="group transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-xl font-bold text-cyan-500 h-8 flex items-center" style={{ fontFamily: '"Press Start 2P", monospace' }}>24/7</div>
                <div className="text-xs text-white/70">AI-поддержка</div>
              </div>
              <div className="group transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-xl font-bold text-cyan-500 h-8 flex items-center" style={{ fontFamily: '"Press Start 2P", monospace' }}>100+</div>
                <div className="text-xs text-white/70">Возможности роста</div>
              </div>
              <div className="group transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-xl font-bold text-cyan-500 h-8 flex items-center" style={{ fontFamily: '"Press Start 2P", monospace' }}>AI</div>
                <div className="text-xs text-white/70">Персонализация</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fadeIn animation-delay-300">
            <div className="relative z-10 overflow-hidden rounded-2xl">
              <ImageWithFallback
                src={heroImage}
                alt="YUP Hero"
                className="w-full h-auto max-w-lg mx-auto rounded-2xl"
              />
            </div>
            
            {/* Плавающие элементы */}
            <div className="absolute -top-4 -right-4 bg-cyan-500 text-black p-3 rounded-xl shadow-lg animate-float border border-black">
              <span className="text-xs">AI анализирует...</span>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white text-black p-3 rounded-xl shadow-lg animate-float animation-delay-1000 border border-black">
              <span className="text-xs">Путь готов! 🚀</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}