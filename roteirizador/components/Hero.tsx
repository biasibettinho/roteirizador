
import React from 'react';
import LeadForm from './LeadForm';
import heroVideo from '../assets/hero-video.mp4'; 

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Video Background - Alta qualidade: Caminhão em estrada sinuosa */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-via-dark/75 z-10"></div>
                <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          {/* AQUI: Usamos a variável {heroVideo} que importamos lá em cima */}
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      
      <div className="container mx-auto px-6 relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6 text-white fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Roteirização inteligente para uma logística mais eficiente
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-medium">
              Planeje, organize e otimize suas rotas com tecnologia desenvolvida para a realidade da sua operação.
            </p>
            <p className="text-lg text-blue-100/80 leading-relaxed max-w-xl">
              O Roteirizador da VIA Group é uma solução digital que transforma dados operacionais em rotas eficientes, reduzindo custos, quilômetros rodados e aumentando o controle da sua frota.
            </p>
          </div>
          
          <div className="lg:w-1/2 w-full max-w-xl mx-auto lg:mx-0 fade-in" style={{ animationDelay: '0.2s' }}>
            <div id="conversion-form" className="scroll-mt-32">
              <LeadForm isHeroVariant={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
