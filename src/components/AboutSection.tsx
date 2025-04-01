
import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Clock, Users, Zap } from 'lucide-react';

const AboutSection = () => {
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

  return (
    <section id="sobre" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-netfibra-blue mb-6">
              Quem <span className="text-netfibra-orange">Somos</span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-8">
              A Net Fibra Empresas é uma empresa de tecnologia especializada em soluções para o setor corporativo. Nosso compromisso é fornecer infraestrutura tecnológica de ponta que impulsione o crescimento e a eficiência dos nossos clientes, com serviços personalizados e suporte técnico especializado.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <Zap className="w-10 h-10 text-netfibra-orange mb-3" />,
                  title: "Conectividade de Alta Performance",
                  description: "Oferecemos internet de alta velocidade e estabilidade para seu negócio."
                },
                {
                  icon: <ShieldCheck className="w-10 h-10 text-netfibra-orange mb-3" />,
                  title: "Suporte Técnico Especializado",
                  description: "Equipe técnica qualificada disponível para solucionar problemas rapidamente."
                },
                {
                  icon: <Users className="w-10 h-10 text-netfibra-orange mb-3" />,
                  title: "Soluções Personalizadas",
                  description: "Serviços adaptados às necessidades específicas da sua empresa."
                },
                {
                  icon: <Clock className="w-10 h-10 text-netfibra-orange mb-3" />,
                  title: "Infraestrutura Completa",
                  description: "Equipamentos modernos e suporte para toda sua estrutura de TI."
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="hover-card p-4 rounded-lg bg-gray-50"
                >
                  {item.icon}
                  <h3 className="text-lg font-semibold text-netfibra-blue mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=1469&auto=format&fit=crop" 
                alt="Ambiente corporativo com tecnologia" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-netfibra-blue/30"></div>
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-netfibra-blue to-transparent h-1/3"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-2xl font-bold">Conectando seu negócio ao futuro</h3>
                <p className="text-white/90">Tecnologia que transforma empresas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
