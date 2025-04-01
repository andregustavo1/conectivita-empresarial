
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { WifiIcon, ServerIcon } from 'lucide-react';

// Custom NetworkIcon component
const NetworkIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 2h6v3H9z"/>
    <path d="M5 5h14v14H5z"/>
    <path d="M11 9h2v6h-2z"/>
    <path d="M7 19h10"/>
    <path d="M12 21v-2"/>
  </svg>
);

const HeroSection = () => {
  const sendWhatsApp = () => {
    window.open('https://wa.me/552137062984', '_blank');
  };

  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const hero = heroRef.current;
    if (hero) {
      hero.style.opacity = '1';
      hero.style.transform = 'translateY(0)';
    }
  }, []);

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-24 bg-gradient"
      style={{ 
        opacity: 0, 
        transform: 'translateY(20px)', 
        transition: 'opacity 0.8s ease, transform 0.8s ease' 
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 text-netfibra-blue/5">
          <WifiIcon size={120} className="animate-pulse" />
        </div>
        <div className="absolute top-2/3 right-1/4 text-netfibra-blue/5">
          <ServerIcon size={80} className="animate-pulse" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 text-netfibra-blue/5">
          <NetworkIcon className="w-24 h-24 animate-pulse" />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl mb-6">
            Soluções Completas em <span className="text-netfibra-orange">Conectividade Empresarial</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8">
            Internet de alta velocidade, PABX virtual e infraestrutura de TI para seu negócio crescer com segurança e eficiência
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="cta-button text-lg"
              onClick={sendWhatsApp}
            >
              Solicite uma Proposta
            </Button>
            
            <a 
              href="#solucoes" 
              className="border-2 border-white text-white hover:bg-white hover:text-netfibra-blue text-center text-lg px-6 py-3 rounded-lg transition-all duration-300"
            >
              Conheça Nossas Soluções
            </a>
          </div>
        </div>
      </div>
      
      {/* Hero Decorative Element */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default HeroSection;
