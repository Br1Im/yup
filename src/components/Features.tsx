import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { ScrollArea } from './ui/scroll-area';
import { useState } from 'react';
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
  const [goalIntensity, setGoalIntensity] = useState([50]);
  const [dailyTime, setDailyTime] = useState([30]);

  return (
    <section id="features" className="py-20 bg-oat">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blush rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-moss" />
            <span className="text-sm font-medium text-moss">Возможности платформы</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-moss">
            Все для вашего развития
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            YUP объединяет передовые AI-технологии с проверенными методиками личностного роста
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
              <Card className={`p-6 h-full bg-${feature.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                <div className="space-y-4">
                  <div className={`w-12 h-12 bg-${feature.color} rounded-lg flex items-center justify-center`}>
                    <feature.icon className="w-6 h-6 text-oat" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                  <a href="#" className="inline-flex items-center text-moss hover:text-olive transition-colors">
                    Узнать больше
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Демонстрация слайдеров и скроллбара */}
        <div className="mb-16">
          <div className="bg-blush p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-moss text-center">
              Настройте свои цели
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="block text-moss font-medium">
                  Интенсивность целей: {goalIntensity[0]}%
                </label>
                <Slider
                  value={goalIntensity}
                  onValueChange={setGoalIntensity}
                  max={100}
                  step={1}
                  className="w-full"
                />
                <p className="text-sm text-olive">
                  Определите, насколько амбициозными должны быть ваши цели
                </p>
              </div>
              
              <div className="space-y-4">
                <label className="block text-moss font-medium">
                  Время в день: {dailyTime[0]} минут
                </label>
                <Slider
                  value={dailyTime}
                  onValueChange={setDailyTime}
                  max={120}
                  min={10}
                  step={5}
                  className="w-full"
                />
                <p className="text-sm text-olive">
                  Сколько времени вы готовы уделять развитию ежедневно
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-moss mb-4">Рекомендации для вас:</h4>
              <ScrollArea className="h-32 w-full rounded-lg bg-oat p-4">
                <div className="space-y-2">
                  <p className="text-sm text-moss">• Начните с медитации 10 минут в день</p>
                  <p className="text-sm text-moss">• Читайте развивающую литературу 15 минут</p>
                  <p className="text-sm text-moss">• Ведите дневник благодарности</p>
                  <p className="text-sm text-moss">• Изучайте новый навык 20 минут</p>
                  <p className="text-sm text-moss">• Занимайтесь физическими упражнениями</p>
                  <p className="text-sm text-moss">• Практикуйте осознанность в течение дня</p>
                  <p className="text-sm text-moss">• Общайтесь с наставником или коучем</p>
                  <p className="text-sm text-moss">• Анализируйте свой прогресс еженедельно</p>
                  <p className="text-sm text-moss">• Ставьте краткосрочные и долгосрочные цели</p>
                  <p className="text-sm text-moss">• Развивайте эмоциональный интеллект</p>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-moss text-oat p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-oat">
              Готовы начать свое путешествие?
            </h3>
            <p className="text-blush mb-6">
              Присоединяйтесь к тысячам людей, которые уже меняют свою жизнь с YUP
            </p>
            <Button size="lg" className="bg-oat text-moss hover:bg-blush">
              Начать бесплатно
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}