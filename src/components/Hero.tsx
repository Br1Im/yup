import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-oat overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-olive rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-moss rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blush rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 bg-olive rounded-full opacity-20 animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blush rounded-full">
              <Sparkles className="w-4 h-4 text-moss" />
              <span className="text-sm font-medium text-moss">
                AI-платформа нового поколения
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-moss">YUP</span>
                <br />
                Плавное саморазвитие
                <br />
                <span className="text-olive text-3xl lg:text-4xl">
                  с искусственным интеллектом
                </span>
              </h1>
              
              <p className="text-xl text-olive max-w-lg">
                Персональный AI-наставник, который помогает развиваться во всех сферах жизни — от навыков до привычек.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-moss hover:bg-olive text-oat text-lg px-8 transition-all duration-300"
              >
                Начать развитие
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 border-2 border-olive text-moss hover:bg-blush transition-all duration-300"
              >
                Узнать больше
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="group transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-2xl font-bold text-moss">24/7</div>
                <div className="text-sm text-olive">AI-поддержка</div>
              </div>
              <div className="group transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-2xl font-bold text-olive">∞</div>
                <div className="text-sm text-olive">Возможности роста</div>
              </div>
              <div className="group transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-2xl font-bold text-blush">🎯</div>
                <div className="text-sm text-olive">Персонализация</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fadeIn animation-delay-300">
            <div className="relative z-10 overflow-hidden rounded-2xl group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1753513291124-4f615bf1f6de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwQUklMjB0ZWNobm9sb2d5JTIwYnJhaW58ZW58MXx8fHwxNzU5NTE5Njk3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="AI Technology Brain"
                className="w-full h-auto max-w-lg mx-auto rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-moss/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Плавающие элементы */}
            <div className="absolute -top-4 -right-4 bg-moss text-oat p-3 rounded-xl shadow-lg animate-float">
              <span className="text-sm font-medium">AI анализирует...</span>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-olive text-oat p-3 rounded-xl shadow-lg animate-float animation-delay-1000">
              <span className="text-sm font-medium">Путь готов! 🚀</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}