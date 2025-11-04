import { Brain, Mail, MessageCircle, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Brain className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold text-moss">
                YUP
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              AI-платформа для плавного саморазвития. Трансформируйте свою жизнь с персональным искусственным интеллектом.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 cursor-pointer transition-colors">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center hover:bg-purple-700 cursor-pointer transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-700 cursor-pointer transition-colors">
                <Globe className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Платформа</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">AI-наставник</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Персональные планы</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Челленджи</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Digital Twin</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Компания</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Пресса</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Поддержка</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Условия использования</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © 2024 YUP. Все права защищены.
          </p>
          <p className="text-gray-400 mt-4 md:mt-0">
            Создано с ❤️ для вашего развития
          </p>
        </div>
      </div>
    </footer>
  );
}