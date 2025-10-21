import { motion } from 'motion/react';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';

const stats = [
  {
    icon: Users,
    number: '50,000+',
    label: 'Активных пользователей',
    description: 'Присоединились к YUP за последний год'
  },
  {
    icon: TrendingUp,
    number: '300%',
    label: 'Рост эффективности',
    description: 'Средний прирост навыков у пользователей'
  },
  {
    icon: Award,
    number: '95%',
    label: 'Достижение целей',
    description: 'Пользователей достигают поставленных целей'
  },
  {
    icon: Clock,
    number: '24/7',
    label: 'Поддержка AI',
    description: 'Доступность персонального наставника'
  }
];

export function Stats() {
  return (
    <section className="py-20 bg-moss text-oat relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            YUP в цифрах
          </h2>
          <p className="text-xl text-blush max-w-3xl mx-auto">
            Результаты, которые говорят сами за себя. Наша платформа помогает тысячам людей 
            достигать своих целей и трансформировать жизнь.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative">
                <div className="inline-flex p-6 bg-olive/20 backdrop-blur-sm rounded-2xl mb-6 group-hover:bg-olive/30 transition-all duration-300 group-hover:scale-110">
                  <stat.icon className="w-12 h-12 text-oat" />
                </div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  <div className="text-4xl lg:text-5xl font-bold mb-2">
                    {stat.number}
                  </div>
                  
                  <div className="text-xl font-semibold text-blush">
                    {stat.label}
                  </div>
                  
                  <div className="text-oat/80 leading-relaxed">
                    {stat.description}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-olive/20 backdrop-blur-md rounded-2xl border border-olive/30">
            <h3 className="text-2xl font-bold">Станьте частью сообщества YUP</h3>
            <p className="text-blush max-w-md">
              Присоединяйтесь к тысячам людей, которые уже изменили свою жизнь с помощью ИИ
            </p>
            <button className="bg-oat text-moss px-8 py-3 rounded-xl font-semibold hover:bg-blush transition-colors">
              Начать бесплатно
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}