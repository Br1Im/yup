import { motion } from 'motion/react';
import { Card } from '@/shared/ui/card';
import { Button } from '@/shared/ui/button';
import { 
  Brain, 
  Target, 
  TrendingUp,
  Users,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Персональный AI-наставник',
    description: 'Умный алгоритм анализирует ваши цели и создает индивидуальный план развития.',
    color: 'moss',
    bgColor: 'oat'
  },
  {
    icon: Target,
    title: 'Адаптивные цели',
    description: 'Система автоматически корректирует задачи в зависимости от вашего прогресса.',
    color: 'olive',
    bgColor: 'blush'
  },
  {
    icon: TrendingUp,
    title: 'Отслеживание прогресса',
    description: 'Детальная аналитика и визуализация вашего роста в реальном времени.',
    color: 'moss',
    bgColor: 'oat'
  },
  {
    icon: Users,
    title: 'Сообщество единомышленников',
    description: 'Общайтесь с людьми, которые идут по похожему пути развития.',
    color: 'olive',
    bgColor: 'blush'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-500 rounded-lg mb-6">
            <Sparkles className="w-4 h-4 text-cyan-500" />
            <span className="text-xs text-cyan-500">Возможности платформы</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Все для вашего развития
          </h2>
          <p className="text-base text-white/80 max-w-3xl mx-auto leading-relaxed">
            <span style={{ fontFamily: '"Press Start 2P", monospace' }}>YUP</span> объединяет передовые AI-технологии с проверенными методиками личностного роста
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-base font-semibold text-white">{feature.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
                  <a href="#" className="inline-flex items-center text-cyan-500 hover:text-white transition-colors text-xs">
                    Узнать больше
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-cyan-500 text-black p-8 rounded-2xl max-w-4xl mx-auto border border-black">
            <h3 className="text-xl font-bold mb-4 text-black">
              Готовы начать свое путешествие?
            </h3>
            <p className="text-black/80 mb-6 text-sm">
              Присоединяйтесь к тысячам людей, которые уже меняют свою жизнь с <span style={{ fontFamily: '"Press Start 2P", monospace' }}>YUP</span>
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-black hover:text-white border border-black text-sm">
              Начать бесплатно
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}