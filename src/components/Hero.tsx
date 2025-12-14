import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-[60vh] flex items-center justify-center py-16 bg-background">
      <div className="container-custom text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-8 animate-fade-in">
          PREFABRICADOS EN CONCRETO
        </h1>
        <Button 
          size="lg" 
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-full px-10 py-6 text-lg animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          Obtener Cotización
        </Button>
      </div>
    </section>
  );
};

export default Hero;
