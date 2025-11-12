import { motion } from 'motion/react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/shared/ui/accordion';

const faqs = [
  {
    question: 'Как YUP создает персональный план развития?',
    answer: 'YUP использует передовые алгоритмы машинного обучения для анализа ваших целей, способностей, стиля обучения и текущего уровня развития. Платформа проводит интерактивное интервью, анализирует ваши предпочтения и создает уникальный план, который постоянно адаптируется под ваш прогресс.'
  },
  {
    question: 'Сколько времени нужно уделять платформе ежедневно?',
    answer: 'YUP адаптируется под ваш график. Минимум — 10-15 минут в день для выполнения микро-заданий. Платформа интегрируется в вашу повседневную жизнь, предлагая упражнения во время коммутирования, обеденного перерыва или перед сном. Вы сами контролируете интенсивность обучения.'
  },
  {
    question: 'Что такое Digital Twin и как он работает?',
    answer: 'Digital Twin — это ваша цифровая модель, которая отражает прогресс в навыках, мышлении, привычках и общем развитии. AI анализирует ваши действия, результаты упражнений и обратную связь, создавая детальную картину вашего роста. Это помогает выявлять сильные стороны и области для улучшения.'
  },
  {
    question: 'Можно ли использовать YUP для развития специфических профессиональных навыков?',
    answer: 'Да! YUP поддерживает развитие как универсальных навыков (критическое мышление, коммуникация, лидерство), так и специализированных компетенций. Платформа адаптирует контент под вашу профессию и цели, предлагая релевантные упражнения и материалы.'
  },
  {
    question: 'Как AI-наставник отличается от обычных курсов?',
    answer: 'AI-наставник — это персональный коуч, доступный 24/7. Он не просто предоставляет информацию, а ведет диалог, задает вопросы, адаптирует подход под ваше настроение и состояние. Наставник помнит ваш прогресс, предлагает решения для реальных жизненных ситуаций и мотивирует в трудные моменты.'
  },
  {
    question: 'Безопасны ли мои данные на платформе?',
    answer: 'Безопасность данных — наш приоритет. Мы используем end-to-end шифрование, соблюдаем GDPR и не передаем персональные данные третьим лицам. Вся информация хранится на защищенных серверах, а алгоритмы AI работают с анонимизированными данными.'
  },
  {
    question: 'Можно ли отменить подписку в любое время?',
    answer: 'Конечно! Вы можете отменить подписку в любое время без дополнительных комиссий. При отмене сохранится доступ к платформе до конца оплаченного периода. Ваш прогресс и данные останутся доступными для скачивания в течение 30 дней после отмены.'
  },
  {
    question: 'Есть ли мобильное приложение?',
    answer: 'Да, YUP доступен как веб-платформа и мобильные приложения для iOS и Android. Все данные синхронизируются между устройствами, позволяя вам развиваться где угодно и когда угодно. Мобильное приложение поддерживает офлайн-режим для основных функций.'
  }
];

export function FAQ() {
  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500 text-cyan-500 text-sm font-[Pixel] rounded-lg mb-6">
            FAQ
          </span>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-[Pixel]">
            Ответы на вопросы
            <br />
            о платформе YUP
          </h2>
          
          <p className="text-xl text-white/80 font-[Pixel]">
            Не нашли ответ на свой вопрос? Напишите нам, и мы поможем!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem 
                  value={`item-${index}`} 
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 hover:border-cyan-500 transition-colors hover:shadow-lg"
                >
                  <AccordionTrigger className="text-left font-semibold text-white hover:text-cyan-500 py-6 font-[Pixel]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70 leading-relaxed pb-6 font-[Pixel]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-cyan-500 rounded-2xl p-8 text-black border border-black">
            <h3 className="text-2xl font-bold mb-4 font-[Pixel]">Остались вопросы?</h3>
            <p className="text-black/80 mb-6 max-w-2xl mx-auto font-[Pixel]">
              Наша команда поддержки готова помочь вам 24/7. Мы ответим на любые вопросы 
              о платформе, настройке и использовании YUP.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-black px-6 py-3 rounded-xl font-[Pixel] hover:bg-black hover:text-white transition-colors border border-black">
                Написать в поддержку
              </button>
              <button className="border-2 border-black text-black px-6 py-3 rounded-xl font-[Pixel] hover:bg-black hover:text-white transition-colors">
                Заказать демо
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}