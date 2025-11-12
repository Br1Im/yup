import { Brain, Mail, MessageCircle, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black/60 backdrop-blur-md text-white border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Brain className="w-8 h-8 text-cyan-500" />
              <span 
                className="text-xl font-bold text-white"
                style={{ fontFamily: '"Press Start 2P", monospace' }}
              >
                YUP
              </span>
            </div>
            <p className="text-white/70 leading-relaxed font-[Pixel]">
              <span style={{ fontFamily: '"Press Start 2P", monospace' }}>YUP</span> — AI-платформа для плавного саморазвития. Трансформируйте свою жизнь с персональным искусственным интеллектом.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center hover:bg-white hover:text-black cursor-pointer transition-colors border border-black">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center hover:bg-white hover:text-black cursor-pointer transition-colors border border-black">
                <Mail className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center hover:bg-white hover:text-black cursor-pointer transition-colors border border-black">
                <Globe className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm text-white font-PixelEn">Platform</h4>
            <ul className="space-y-2 text-white/70 font-PixelEn text-xs">
              <li><a href="#" className="hover:text-cyan-500 transition-colors">AI Mentor</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Personal Plans</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Challenges</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Digital Twin</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm text-white font-PixelEn">Company</h4>
            <ul className="space-y-2 text-white/70 font-PixelEn text-xs">
              <li><a href="#" className="hover:text-cyan-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm text-white font-PixelEn">Support</h4>
            <ul className="space-y-2 text-white/70 font-PixelEn text-xs">
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Help</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Terms of Use</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 font-PixelEn text-xs">
            © 2024 <span style={{ fontFamily: '"Press Start 2P", monospace' }}>YUP</span>. All rights reserved.
          </p>
          <p className="text-white/70 mt-4 md:mt-0 font-PixelEn text-xs">
            Made with ❤️ for your growth
          </p>
        </div>
      </div>
    </footer>
  );
}