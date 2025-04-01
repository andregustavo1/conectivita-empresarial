
import React, { useEffect } from 'react';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import DifferentialsSection from '@/components/DifferentialsSection';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import ContactSection from '@/components/ContactSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  useEffect(() => {
    // Set document language to Portuguese
    document.documentElement.lang = 'pt-BR';
    
    // Handle scroll animations
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-fade-in');
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersection, { 
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });
    
    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });
    
    return () => {
      document.querySelectorAll('section').forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <DifferentialsSection />
        <ServicesSection />
        <ProcessSection />
        <ContactSection />
        <CtaSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
