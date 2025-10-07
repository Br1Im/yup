import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle, Award, Users, Zap } from 'lucide-react';

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
    <section id="about" className="py-20 bg-oat">
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
              <h2 className="text-4xl lg:text-5xl font-bold">
                <span className="text-moss">
                  О платформе YUP
                </span>
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                YUP — это революционная AI-платформа, которая меняет подход к саморазвитию. 
                Мы объединили достижения искусственного интеллекта, нейронауки и психологии, 
                чтобы создать персонального наставника для каждого пользователя.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Наша миссия — сделать развитие естественной частью жизни, а не отдельной задачей. 
                YUP адаптируется под ваш ритм жизни, цели и способности, создавая уникальный 
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
                  className="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <achievement.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
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
                src="https://images.unsplash.com/photo-1758600588015-4785b34c537f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBsZWFybmluZyUyMGdyb3d0aCUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc1OTUyMDE4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="People Learning and Growing"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-moss/20 rounded-2xl"></div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Почему выбирают YUP?
              </h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
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