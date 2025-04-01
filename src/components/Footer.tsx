
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-netfibra-gray py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-white">Net</span>
              <span className="text-netfibra-orange">Fibra</span>
              <span className="text-white ml-1">Empresas</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Soluções completas em conectividade e infraestrutura de TI para negócios.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-netfibra-orange transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-netfibra-orange transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-netfibra-orange transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-netfibra-orange transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-netfibra-orange transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#diferenciais" className="text-gray-400 hover:text-netfibra-orange transition-colors">Diferenciais</a>
              </li>
              <li>
                <a href="#solucoes" className="text-gray-400 hover:text-netfibra-orange transition-colors">Soluções</a>
              </li>
              <li>
                <a href="#processo" className="text-gray-400 hover:text-netfibra-orange transition-colors">Processo</a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-netfibra-orange transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Soluções</h4>
            <ul className="space-y-3">
              <li>
                <a href="#solucoes" className="text-gray-400 hover:text-netfibra-orange transition-colors">Internet Corporativa</a>
              </li>
              <li>
                <a href="#solucoes" className="text-gray-400 hover:text-netfibra-orange transition-colors">PABX Virtual</a>
              </li>
              <li>
                <a href="#solucoes" className="text-gray-400 hover:text-netfibra-orange transition-colors">Wi-Fi Empresarial</a>
              </li>
              <li>
                <a href="#solucoes" className="text-gray-400 hover:text-netfibra-orange transition-colors">Locação de Equipamentos</a>
              </li>
              <li>
                <a href="#solucoes" className="text-gray-400 hover:text-netfibra-orange transition-colors">Suporte Técnico</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-netfibra-orange mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:netfibraempresas@gmail.com" className="text-gray-400 hover:text-netfibra-orange transition-colors">
                  netfibraempresas@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-netfibra-orange mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="https://wa.me/552137062984" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-netfibra-orange transition-colors">
                  (21) 3706-2984
                </a>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-netfibra-orange mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span className="text-gray-400">
                  netfibraempresas.com.br
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <p className="text-center text-gray-500">
            © 2025 Net Fibra Empresas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
