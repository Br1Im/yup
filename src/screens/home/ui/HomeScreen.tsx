import { Hero_1, Hero } from "@/blocks/HeroBlock";
import { About } from "@/blocks/AboutBlock";
import { HowItWorks } from "@/blocks/HowItWorksBlock";
import { Testimonials } from "@/blocks/TestimonialsBlock";
import { FAQ } from "@/blocks/FAQBlock";
import { Stats } from "@/blocks/StatsBlock";
import { Features } from "@/blocks/FeaturesBlock";
import { Header } from "@/layout/header";
import { Footer } from "@/layout/footer";


export function HomeScreen() {
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