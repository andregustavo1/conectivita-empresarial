
import React, { useEffect, useRef } from 'react';
import { Activity, Headphones, Network, LineChart } from 'lucide-react';

const DifferentialsSection = () => {
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

  const differentials = [
    {
      icon: <Activity className="w-16 h-16 text-netfibra-orange" />,
      title: "Tecnologia de Ponta",
      description: "Equipamentos modernos e soluções avançadas para garantir performance e segurança."
    },
    {
      icon: <Headphones className="w-16 h-16 text-netfibra-orange" />,
      title: "Atendimento Exclusivo",
      description: "Equipe dedicada para atendimento personalizado e assistência imediata quando necessário."
    },
    {
      icon: <Network className="w-16 h-16 text-netfibra-orange" />,
      title: "Soluções Integradas",
      description: "Integramos diferentes tecnologias para criar um ecossistema digital completo para seu negócio."
    },
    {
      icon: <LineChart className="w-16 h-16 text-netfibra-orange" />,
      title: "Monitoramento Contínuo",
      description: "Acompanhamento em tempo real da sua infraestrutura, garantindo estabilidade e performance."
    }
  ];

  return (
    <section id="diferenciais" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-netfibra-blue mb-4">
            Nossos <span className="text-netfibra-orange">Diferenciais</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Por que escolher a Net Fibra Empresas para suas soluções de conectividade e TI
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => (
            <div 
              key={index} 
              className="hover-card bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center"
              style={{ 
                opacity: 0, 
                transform: 'translateY(20px)', 
                animation: 'fadeIn 0.5s ease forwards', 
                animationDelay: `${index * 0.1 + 0.2}s` 
              }}
            >
              <div className="mb-5 p-4 rounded-full bg-netfibra-blue/5">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-netfibra-blue mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
