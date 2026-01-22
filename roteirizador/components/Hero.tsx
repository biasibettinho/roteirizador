
import React from 'react';

const Hero: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('conversion-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-via-light opacity-50 rounded-bl-[100px] hidden lg:block"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6 fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-via-dark leading-tight">
              Roteirização inteligente para uma logística mais eficiente
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-medium">
              Planeje, organize e otimize suas rotas com tecnologia desenvolvida para a realidade da sua operação.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
              O Roteirizador da VIA Group é uma solução digital que transforma dados operacionais em rotas eficientes, reduzindo custos, quilômetros rodados e aumentando o controle da sua frota.
            </p>
            <div className="pt-4">
              <button 
                onClick={scrollToForm}
                className="bg-via-blue text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-via-dark hover:scale-105 transition-all duration-300 shadow-lg shadow-via-blue/20"
              >
                Tenho interesse
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="assets/roteirizador.png"
              />
              <div className="absolute inset-0 bg-via-blue/10 mix-blend-multiply"></div>
            </div>
            {/* Floating elements for visual interest */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 hidden md:flex items-center gap-4 border border-slate-100">
               <div className="bg-green-100 text-green-600 p-2 rounded-lg">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
               </div>
               <div>
                 <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Eficiência</p>
                 <p className="text-lg font-bold text-slate-800">+25% de economia</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
