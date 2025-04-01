
import React, { useEffect, useRef } from 'react';
import { FileQuestion, Lightbulb, Workflow, BarChart3 } from 'lucide-react';

const ProcessSection = () => {
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

  const steps = [
    {
      icon: <FileQuestion className="w-12 h-12 text-white" />,
      title: "Levantamento de Necessidades",
      description: "Avaliamos as demandas e desafios do seu negócio para identificar as melhores soluções."
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-white" />,
      title: "Projeto Personalizado",
      description: "Desenvolvemos um projeto sob medida, considerando aspectos técnicos e orçamentários."
    },
    {
      icon: <Workflow className="w-12 h-12 text-white" />,
      title: "Implementação da Solução",
      description: "Nossa equipe implementa as soluções com mínimo impacto na operação do seu negócio."
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-white" />,
      title: "Monitoramento e Suporte",
      description: "Garantimos o funcionamento contínuo com monitoramento e suporte técnico especializado."
    }
  ];

  return (
    <section id="processo" ref={sectionRef} className="py-20 bg-netfibra-blue">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Como <span className="text-netfibra-orange">Trabalhamos</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Um processo estruturado para garantir o sucesso da implementação das nossas soluções
          </p>
        </div>
        
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block connection-line"></div>
          
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="card-with-line"
                style={{ 
                  opacity: 0, 
                  transform: 'translateY(20px)', 
                  animation: 'fadeIn 0.5s ease forwards', 
                  animationDelay: `${index * 0.15 + 0.2}s` 
                }}
              >
                <div className="bg-netfibra-blue border border-netfibra-orange/30 rounded-xl p-6 hover-card h-full flex flex-col items-center text-center">
                  <div className="mb-5 p-3 rounded-full bg-netfibra-orange">
                    {step.icon}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-netfibra-orange text-white flex items-center justify-center font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-white/80">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
