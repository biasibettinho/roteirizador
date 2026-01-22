
import React from 'react';

const Credibility: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-via-dark rounded-[40px] p-10 md:p-16 text-center text-white relative overflow-hidden">
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
          
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Tecnologia aplicada à logística real
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-blue-100 opacity-90 leading-relaxed">
              <p>
                O Roteirizador VIA Group foi desenvolvido a partir da experiência prática em operações logísticas reais, atendendo diferentes cenários e desafios do transporte.
              </p>
              <p className="font-semibold text-white">
                É uma solução pensada para quem precisa de resultado, eficiência e decisão baseada em dados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credibility;
