import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Stats from '@/components/Stats';
import Products from '@/components/Products';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <Products />
        <Projects />
        <Services />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
