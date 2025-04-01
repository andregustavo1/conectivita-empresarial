
import React, { useEffect, useRef } from 'react';
import { MessageSquare, Mail, MapPin, Globe } from 'lucide-react';

const ContactSection = () => {
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
    <section id="contato" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-netfibra-blue mb-4">
            Fale <span className="text-netfibra-orange">Conosco</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos à disposição para tirar suas dúvidas e apresentar as melhores soluções para o seu negócio
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2 bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-semibold text-netfibra-blue mb-6">Informações de Contato</h3>
            
            <div className="space-y-6">
              <a 
                href="https://wa.me/552137062984" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="p-3 rounded-full bg-netfibra-orange/10">
                  <MessageSquare className="w-6 h-6 text-netfibra-orange" />
                </div>
                <div>
                  <p className="text-gray-600">WhatsApp</p>
                  <p className="text-netfibra-blue font-semibold">(21) 3706-2984</p>
                </div>
              </a>
              
              <a 
                href="mailto:netfibraempresas@gmail.com" 
                className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="p-3 rounded-full bg-netfibra-orange/10">
                  <Mail className="w-6 h-6 text-netfibra-orange" />
                </div>
                <div>
                  <p className="text-gray-600">E-mail</p>
                  <p className="text-netfibra-blue font-semibold">netfibraempresas@gmail.com</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="p-3 rounded-full bg-netfibra-orange/10">
                  <MapPin className="w-6 h-6 text-netfibra-orange" />
                </div>
                <div>
                  <p className="text-gray-600">Localização</p>
                  <p className="text-netfibra-blue font-semibold">Brasil</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="p-3 rounded-full bg-netfibra-orange/10">
                  <Globe className="w-6 h-6 text-netfibra-orange" />
                </div>
                <div>
                  <p className="text-gray-600">Website</p>
                  <p className="text-netfibra-blue font-semibold">netfibraempresas.com.br</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 bg-white rounded-xl shadow-md overflow-hidden h-80 md:h-auto">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15008360.52638911!2d-51.91669196054686!3d-14.396965958646254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c59c7ebcc28cf%3A0x295a1506f2293e63!2sBrasil!5e0!3m2!1spt-BR!2sbr!4v1655943295758!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
