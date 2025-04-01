
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const sendWhatsApp = () => {
    window.open('https://wa.me/552137062984', '_blank');
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative py-20 bg-gradient"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Transforme a Conectividade da Sua Empresa
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 mb-10">
            Deixe-nos ajudar sua empresa a alcançar seu potencial máximo com nossa infraestrutura de telecomunicações de última geração e suporte técnico especializado.
          </p>
          
          <Button 
            onClick={sendWhatsApp}
            className="cta-button text-lg px-8 py-6 flex items-center gap-2 mx-auto"
          >
            <span>Solicite um Orçamento</span>
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 text-white/5">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none" className="animate-pulse" style={{ animationDuration: '4s' }}>
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="absolute bottom-1/4 right-1/4 text-white/5">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" className="animate-pulse" style={{ animationDuration: '5s' }}>
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path d="M8.5 8.5L15.5 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M15.5 8.5L8.5 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
