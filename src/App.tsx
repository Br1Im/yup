import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Stats } from './components/Stats';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import {Hero_1} from './components/Hero_1';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero_1 />
        <Hero />
        <About />
        <Features />
        <HowItWorks />
        <Stats />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}