import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 relative">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="35" cy="50" r="30" fill="none" stroke="hsl(var(--secondary))" strokeWidth="6"/>
                  <circle cx="65" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="6"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">PREFABRICADOS</span>
                <span className="text-secondary font-semibold text-sm">COLOMBIA</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Fabricamos y suministramos prefabricados en concreto de la más alta calidad para proyectos de construcción e infraestructura.
            </p>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <div className="space-y-3">
              <a href="mailto:contacto@prefabricadoscolombia.com" className="flex items-center gap-2 text-primary-foreground/80 hover:text-secondary transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">contacto@prefabricadoscolombia.com</span>
              </a>
              <a href="tel:3192448834" className="flex items-center gap-2 text-primary-foreground/80 hover:text-secondary transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">3192448834 – 3247560925</span>
              </a>
              <div className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span className="text-sm">Colombia</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <div className="space-y-2">
              <a href="#inicio" className="block text-primary-foreground/80 hover:text-secondary transition-colors text-sm">Inicio</a>
              <a href="#nosotros" className="block text-primary-foreground/80 hover:text-secondary transition-colors text-sm">Nosotros</a>
              <a href="#productos" className="block text-primary-foreground/80 hover:text-secondary transition-colors text-sm">Productos</a>
              <a href="#" className="block text-primary-foreground/80 hover:text-secondary transition-colors text-sm">Contacto</a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>© 2024 Prefabricados Colombia Comercial SAS. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
