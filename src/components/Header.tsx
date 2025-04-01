
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
            <span className="text-netfibra-blue">Net</span>
            <span className="text-netfibra-orange">Fibra</span>
            <span className="text-netfibra-blue ml-1">Empresas</span>
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#sobre" 
            className="text-netfibra-blue hover:text-netfibra-orange transition-colors duration-200"
          >
            Sobre
          </a>
          <a 
            href="#diferenciais" 
            className="text-netfibra-blue hover:text-netfibra-orange transition-colors duration-200"
          >
            Diferenciais
          </a>
          <a 
            href="#solucoes" 
            className="text-netfibra-blue hover:text-netfibra-orange transition-colors duration-200"
          >
            Soluções
          </a>
          <a 
            href="#processo" 
            className="text-netfibra-blue hover:text-netfibra-orange transition-colors duration-200"
          >
            Processo
          </a>
          <a 
            href="#contato" 
            className="text-netfibra-blue hover:text-netfibra-orange transition-colors duration-200"
          >
            Contato
          </a>
        </nav>

        <Button 
          className="cta-button hidden md:block"
          onClick={sendWhatsApp}
        >
          Solicitar Proposta
        </Button>
      </div>
    </header>
  );
};

export default Header;
