import { motion } from 'motion/react';
import { Card } from '@/shared/ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Анна Петрова',
    role: 'Маркетинг-директор',
    content: 'YUP полностью изменил мой подход к саморазвитию. За 3 месяца я освоила новый язык программирования и значительно улучшила навыки управления командой. AI-наставник понимает меня лучше, чем я сама!',
    rating: 5,
    avatar: '👩‍💼'
  },
  {
    name: 'Михаил Иванов',
    role: 'Студент университета',
    content: 'Благодаря YUP я научился эффективно планировать время и развил критическое мышление. Платформа адаптировалась под мой график учебы и помогла найти баланс между учебой и личным развитием.',
    rating: 5,
    avatar: '👨‍🎓'
  },
  {
    name: 'Елена Смирнова',
    role: 'Предприниматель',
    content: 'Как основатель стартапа, я ценю каждую минуту. YUP интегрировался в мою повседневную жизнь так естественно, что развитие стало происходить само собой. Особенно впечатляют персонализированные челленджи.',
    rating: 5,
    avatar: '👩‍💻'
  },
  {
    name: 'Дмитрий Козлов',
    role: 'Врач',
    content: 'YUP помог мне развить эмоциональный интеллект и коммуникативные навыки, что критически важно в моей профессии. Digital Twin показывает мой прогресс в реальном времени — это невероятно мотивирует.',
    rating: 5,
    avatar: '👨‍⚕️'
  },
  {
    name: 'Ольга Николаева',
    role: 'Дизайнер',
    content: 'Платформа помогла мне структурировать процесс изучения новых дизайн-инструментов и развития креативности. AI-наставник предлагает упражнения, которые идеально подходят под мой стиль обучения.',
    rating: 5,
    avatar: '👩‍🎨'
  },
  {
    name: 'Алексей Попов',
    role: 'IT-специалист',
    content: 'YUP научил меня не просто изучать новые технологии, но и развивать мета-навыки обучения. Теперь я адаптируюсь к изменениям в IT гораздо быстрее и увереннее.',
    rating: 5,
    avatar: '👨‍💻'
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-oat relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blush text-moss text-sm font-semibold rounded-full mb-6">
            Отзывы
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-moss mb-6">
            Истории успеха
            <br />
            наших пользователей
          </h2>
          
          <p className="text-xl text-olive max-w-3xl mx-auto">
            Тысячи людей уже трансформировали свою жизнь с помощью YUP. 
            Читайте их реальные истории развития и достижений.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="h-full p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-olive/30 relative overflow-hidden bg-white/80 backdrop-blur-sm">
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-12 h-12 text-olive" />
                </div>
                
                <div className="relative z-10 space-y-6">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-olive text-olive" />
                    ))}
                  </div>
                  
                  <p className="text-moss/80 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-4 pt-4 border-t border-olive/20">
                    <div className="w-12 h-12 bg-olive rounded-full flex items-center justify-center text-xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-moss">{testimonial.name}</div>
                      <div className="text-sm text-olive">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 p-6 bg-blush rounded-2xl">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-olive text-olive" />
                ))}
              </div>
              <span className="text-2xl font-bold text-moss">4.9</span>
            </div>
            <div className="text-lg text-moss/80">
              Средняя оценка от <span className="font-semibold text-moss">10,000+</span> пользователей
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}