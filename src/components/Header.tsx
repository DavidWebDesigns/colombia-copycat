import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isFerreteriaOpen, setIsFerreteriaOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', href: '#inicio', active: true },
    { label: 'Nosotros', href: '#nosotros' },
    { 
      label: 'Productos', 
      href: '#productos',
      hasDropdown: true,
      dropdown: [
        'Sardineles',
        'Cárcamos y Rejillas',
        'Topellantas',
        'Adoquines',
        'Cañuelas',
        'Bancas',
        'Losetas',
        'Sumideros',
        'Postes'
      ]
    },
    { 
      label: 'Ferretería', 
      href: '#ferreteria',
      hasDropdown: true,
      dropdown: [
        'Materiales de construcción',
        'Herramientas',
        'Cemento',
        'Arena y Grava'
      ]
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      {/* Top bar */}
      <div className="bg-primary py-2">
        <div className="container-custom flex justify-between items-center text-primary-foreground text-sm">
          <a href="mailto:contacto@prefabricadoscolombia.com" className="hover:underline">
            contacto@prefabricadoscolombia.com
          </a>
          <div className="hidden sm:flex gap-4">
            <span>3192448834 – 3247560925</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2">
            <div className="w-16 h-16 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="35" cy="50" r="30" fill="none" stroke="hsl(var(--secondary))" strokeWidth="6"/>
                <circle cx="65" cy="50" r="30" fill="none" stroke="hsl(var(--primary))" strokeWidth="6"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-primary font-bold text-lg leading-tight">PREFABRICADOS</span>
              <span className="text-secondary font-semibold text-sm">COLOMBIA</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <a
                  href={item.href}
                  className={`flex items-center gap-1 font-medium transition-colors ${
                    item.active 
                      ? 'bg-secondary text-secondary-foreground px-4 py-2 rounded-full' 
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 mt-2 bg-card shadow-lg rounded-lg py-2 min-w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.dropdown?.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-4 py-2 text-foreground hover:bg-muted hover:text-primary transition-colors"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-full px-6">
              Contacto
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <a
                    href={item.href}
                    className={`block font-medium ${
                      item.active ? 'text-secondary' : 'text-foreground'
                    }`}
                    onClick={() => !item.hasDropdown && setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </div>
              ))}
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-full w-full">
                Contacto
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
