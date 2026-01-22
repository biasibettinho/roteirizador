
import React, { useState, useEffect } from 'react';
import { LOGO_URL } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'O QUE É', id: 'concept' },
    { name: 'BENEFÍCIOS', id: 'benefits' },
    { name: 'COMO FUNCIONA', id: 'how-it-works' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo and Nav Menu Grouped for centralized feel */}
        <div className="flex items-center gap-10">
          <img 
            src={LOGO_URL} 
            alt="VIA Group" 
            className="h-10 md:h-12 w-auto cursor-pointer" 
            onClick={() => window.location.href = 'https://viagroup.com.br/'} 
          />
          
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-5 py-2 text-[#4a4a4a] text-[13px] font-bold tracking-wider rounded-full hover:bg-via-blue hover:text-white transition-all duration-300"
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>
        
        {/* Right side CTA */}
        <button 
          onClick={() => scrollToSection('conversion-form')}
          className="bg-white text-via-blue border border-via-blue/30 px-6 py-2 rounded-full font-bold text-[13px] tracking-wider hover:bg-via-blue hover:text-white transition-all duration-300 shadow-sm"
        >
          TENHO INTERESSE
        </button>
      </div>
    </header>
  );
};

export default Header;
