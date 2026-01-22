
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

  const scrollToForm = () => {
    document.getElementById('conversion-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <img src={LOGO_URL} alt="VIA Group" className="h-10 md:h-12 w-auto" />
        
        <button 
          onClick={scrollToForm}
          className="bg-white text-via-blue border border-via-blue/20 px-6 py-2 rounded-full font-semibold text-sm md:text-base hover:bg-via-blue hover:text-white transition-all duration-300 shadow-sm"
        >
          Tenho interesse
        </button>
      </div>
    </header>
  );
};

export default Header;
