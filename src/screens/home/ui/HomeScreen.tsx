import { Hero } from "@/blocks/HeroBlock";
import { About } from "@/blocks/AboutBlock";
import { HowItWorks } from "@/blocks/HowItWorksBlock";
import { Testimonials } from "@/blocks/TestimonialsBlock";
import { FAQ } from "@/blocks/FAQBlock";
import { Stats } from "@/blocks/StatsBlock";
import { Features } from "@/blocks/FeaturesBlock";
import { Header } from "@/layout/header";
import { Footer } from "@/layout/footer";
import { StarField } from "@/shared/ui/StarField";


export function HomeScreen() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Звёздное поле на фоне */}
      <StarField count={5000} clusterCount={80} />
      
      {/* Контент поверх звёзд */}
      <div className="relative z-10">
        <Header />
        <main>
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
    </div>
  );
}