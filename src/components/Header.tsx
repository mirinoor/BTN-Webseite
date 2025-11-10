import { Phone, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
              <span className="text-white">BN</span>
            </div>
            <span className="text-lg">Bodentechnik Nord</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('kontakt')}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Kontakt
            </button>
            <Button
              className="bg-amber-600 hover:bg-amber-700 text-white"
              onClick={() => window.location.href = 'tel:+4915901837464'}
            >
              <Phone className="mr-2 h-4 w-4" />
              Anrufen
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }}
                className="text-gray-700 hover:text-amber-600 transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('kontakt')}
                className="text-gray-700 hover:text-amber-600 transition-colors text-left"
              >
                Kontakt
              </button>
              <Button
                className="bg-amber-600 hover:bg-amber-700 text-white w-full"
                onClick={() => window.location.href = 'tel:+4915901837464'}
              >
                <Phone className="mr-2 h-4 w-4" />
                Anrufen
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
