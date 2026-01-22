
import React from 'react';
import { LOGO_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <img src={LOGO_URL} alt="VIA Group" className="h-12 w-auto" />
            <p className="text-slate-500 max-w-xs text-center md:text-left leading-relaxed">
              VIA Group – Soluções logísticas com tecnologia, eficiência e inteligência operacional.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end space-y-6">
            <a 
              href="https://viagroup.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-via-blue font-semibold hover:text-via-dark transition-colors flex items-center gap-2"
            >
              Visitar site oficial
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </a>
            <div className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} VIA Group. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
