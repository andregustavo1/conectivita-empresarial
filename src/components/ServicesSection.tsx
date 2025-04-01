
import React, { useEffect, useRef } from 'react';
import { Wifi, Phone, Monitor, Server } from 'lucide-react';

// Custom HeadsetIcon component
const HeadsetIcon = ({ className }: { className?: string }) => (
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
    <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
  </svg>
);

const ServicesSection = () => {
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

  const services = [
    {
      icon: <Wifi size={48} className="text-netfibra-orange" />,
      title: "Internet Corporativa",
      description: "Conexão de alta velocidade e estabilidade com fibra óptica dedicada para sua empresa."
    },
    {
      icon: <Phone size={48} className="text-netfibra-orange" />,
      title: "Telefonia e PABX Virtual",
      description: "Sistema de telefonia totalmente digital com recursos avançados para comunicação eficiente."
    },
    {
      icon: <Server size={48} className="text-netfibra-orange" />,
      title: "Estrutura de Rede e Wi-Fi",
      description: "Infraestrutura completa de rede cabeada e sem fio para ambientes corporativos."
    },
    {
      icon: <Monitor size={48} className="text-netfibra-orange" />,
      title: "Locação de Equipamentos",
      description: "Computadores, servidores e equipamentos de rede fornecidos em regime de locação."
    },
    {
      icon: <HeadsetIcon className="w-12 h-12 text-netfibra-orange" />,
      title: "Suporte Técnico Especializado",
      description: "Equipe técnica qualificada disponível para resolver problemas com agilidade."
    }
  ];

  return (
    <section id="solucoes" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-netfibra-blue mb-4">
            Nossas <span className="text-netfibra-orange">Soluções</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Desenvolvemos soluções completas para atender às necessidades tecnológicas da sua empresa
          </p>
        </div>
        
        <div className="space-y-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="hover-card bg-gray-50 rounded-xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-center"
              style={{ 
                opacity: 0, 
                transform: 'translateY(20px)', 
                animation: 'fadeIn 0.5s ease forwards', 
                animationDelay: `${index * 0.15 + 0.2}s` 
              }}
            >
              <div className="flex-shrink-0 p-4 rounded-full bg-netfibra-blue/10">
                {service.icon}
              </div>
              
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-2xl font-semibold text-netfibra-blue mb-3">{service.title}</h3>
                <p className="text-gray-600 text-lg">{service.description}</p>
              </div>
              
              <div className="flex-shrink-0">
                <a 
                  href="https://wa.me/552137062984" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block cta-button-outlined"
                >
                  Saiba Mais
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
