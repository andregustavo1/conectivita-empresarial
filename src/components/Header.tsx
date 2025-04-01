
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sendWhatsApp = () => {
    window.open('https://wa.me/552137062984', '_blank');
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 animate-fade-in ${
        scrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <div className="flex items-center">
          <a href="#hero" className="text-2xl font-bold">
            <span className={scrolled ? "text-netfibra-blue" : "text-white"}>Net</span>
            <span className="text-netfibra-orange">Fibra</span>
            <span className={scrolled ? "text-netfibra-blue ml-1" : "text-white ml-1"}>Empresas</span>
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#sobre" 
            className={`hover:text-netfibra-orange transition-colors duration-200 ${
              scrolled ? 'text-netfibra-blue' : 'text-white'
            }`}
          >
            Sobre
          </a>
          <a 
            href="#diferenciais" 
            className={`hover:text-netfibra-orange transition-colors duration-200 ${
              scrolled ? 'text-netfibra-blue' : 'text-white'
            }`}
          >
            Diferenciais
          </a>
          <a 
            href="#solucoes" 
            className={`hover:text-netfibra-orange transition-colors duration-200 ${
              scrolled ? 'text-netfibra-blue' : 'text-white'
            }`}
          >
            Soluções
          </a>
          <a 
            href="#processo" 
            className={`hover:text-netfibra-orange transition-colors duration-200 ${
              scrolled ? 'text-netfibra-blue' : 'text-white'
            }`}
          >
            Processo
          </a>
          <a 
            href="#contato" 
            className={`hover:text-netfibra-orange transition-colors duration-200 ${
              scrolled ? 'text-netfibra-blue' : 'text-white'
            }`}
          >
            Contato
          </a>
        </nav>

        <Button 
          className={`hidden md:block ${
            scrolled 
            ? 'cta-button' 
            : 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-netfibra-blue'
          }`}
          onClick={sendWhatsApp}
        >
          Solicitar Proposta
        </Button>
      </div>
    </header>
  );
};

export default Header;
