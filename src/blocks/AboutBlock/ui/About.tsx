import { motion } from 'motion/react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { CheckCircle, Award, Users, Zap } from 'lucide-react';
import heroImage2 from '@/shared/images/hero_image_2.png';

const achievements = [
  {
    icon: Users,
    number: '50,000+',
    text: 'Активных пользователей'
  },
  {
    icon: Award,
    number: '95%',
    text: 'Достигают целей'
  },
  {
    icon: Zap,
    number: '2.5x',
    text: 'Быстрее развитие'
  },
  {
    icon: CheckCircle,
    number: '24/7',
    text: 'Поддержка AI'
  }
];

const benefits = [
  'Персонализированный подход к каждому пользователю',
  'Научно обоснованные методики развития',
  'Интеграция с повседневной жизнью',
  'Постоянная адаптация под ваш прогресс',
  'Комплексное развитие всех сфер жизни',
  'Мотивация и поддержка на каждом шаге'
];

export function About() {
  return (
    <section id="about" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                <span className="text-white">
                  О платформе <span style={{ fontFamily: '"Press Start 2P", monospace' }}>YUP</span>
                </span>
              </h2>
              
              <p className="text-base text-white/80 leading-relaxed">
                <span style={{ fontFamily: '"Press Start 2P", monospace' }}>YUP</span> — это революционная AI-платформа, которая меняет подход к саморазвитию. 
                Мы объединили достижения искусственного интеллекта, нейронауки и психологии, 
                чтобы создать персонального наставника для каждого пользователя.
              </p>
              
              <p className="text-sm text-white/70 leading-relaxed">
                Наша миссия — сделать развитие естественной частью жизни, а не отдельной задачей. 
                <span style={{ fontFamily: '"Press Start 2P", monospace' }}>YUP</span> адаптируется под ваш ритм жизни, цели и способности, создавая уникальный 
                путь роста для каждого человека.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <achievement.icon className="w-8 h-8 text-cyan-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1" style={{ fontFamily: '"Press Start 2P", monospace' }}>
                    {achievement.number}
                  </div>
                  <div className="text-xs text-white/70">
                    {achievement.text}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative">
              <ImageWithFallback
                src={heroImage2}
                alt="YUP Platform"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">
                Почему выбирают <span style={{ fontFamily: '"Press Start 2P", monospace' }}>YUP</span>?
              </h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-1" />
                    <span className="text-white/80 text-sm leading-relaxed">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}