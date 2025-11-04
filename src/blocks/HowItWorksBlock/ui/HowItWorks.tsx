import { motion } from 'motion/react';
import { Card } from '@/shared/ui/card';
import { UserPlus, Brain, Target, TrendingUp } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: UserPlus,
    title: 'Знакомство с вами',
    description: 'AI анализирует ваши цели, интересы, стиль обучения и текущий уровень развития через интерактивное интервью.',
    color: 'moss'
  },
  {
    step: '02',
    icon: Brain,
    title: 'Создание личного плана',
    description: 'На основе анализа создается уникальный план развития с учетом ваших особенностей и желаемых результатов.',
    color: 'olive'
  },
  {
    step: '03',
    icon: Target,
    title: 'Ежедневная практика',
    description: 'Получайте персонализированные задания, упражнения и челленджи, интегрированные в вашу повседневную жизнь.',
    color: 'blush'
  },
  {
    step: '04',
    icon: TrendingUp,
    title: 'Отслеживание прогресса',
    description: 'AI постоянно анализирует ваш прогресс и адаптирует план, чтобы обеспечить максимальную эффективность развития.',
    color: 'olive'
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-oat">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blush text-moss text-sm font-semibold rounded-full mb-6">
            Как это работает
          </span>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-moss mb-6">
            Простой путь к развитию
            <br />
            с помощью ИИ
          </h2>
          
          <p className="text-xl text-olive max-w-3xl mx-auto">
            Всего четыре шага отделяют вас от персонального плана развития, 
            созданного искусственным интеллектом специально для вас.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="h-full p-8 text-center hover:shadow-2xl transition-all duration-300 border-2 hover:border-olive/30 bg-white/80 backdrop-blur-sm group">
                <div className="relative mb-6">
                  <div className={`w-20 h-20 bg-${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-10 h-10 text-oat" />
                  </div>
                  
                  <div className={`absolute -top-2 -right-2 w-8 h-8 bg-${step.color} rounded-full flex items-center justify-center`}>
                    <span className="text-sm font-bold text-oat">{step.step}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-moss mb-4">{step.title}</h3>
                <p className="text-moss/80 leading-relaxed">{step.description}</p>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-olive/30 transform -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-moss rounded-2xl p-8 text-oat max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Готовы начать свое развитие?</h3>
            <p className="text-blush text-lg mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к тысячам людей, которые уже трансформируют свою жизнь 
              с помощью персонального AI-наставника YUP.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-oat text-moss px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blush transition-all duration-300 transform hover:scale-105 shadow-lg">
                Начать бесплатно
              </button>
              <button className="border-2 border-oat text-oat px-8 py-4 rounded-xl font-semibold text-lg hover:bg-oat hover:text-moss transition-all duration-300">
                Посмотреть демо
              </button>
            </div>
            
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-blush">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-olive rounded-full"></div>
                <span>Бесплатный пробный период</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-olive rounded-full"></div>
                <span>Без обязательств</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-olive rounded-full"></div>
                <span>Отмена в любое время</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}