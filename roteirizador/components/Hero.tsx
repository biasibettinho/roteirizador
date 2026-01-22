import React from 'react';
// Importação atualizada com o nome exato do arquivo
import heroVideo from '../assets/hero-video (1).mp4'; 

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Camada do Vídeo de Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video 
          className="w-full h-full object-cover" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          {/* A variável importada 'heroVideo' contém o caminho processado corretamente pelo Vite */}
          <source src={heroVideo} type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </video>
        
        {/* Overlay escuro (50% de opacidade) para garantir leitura do texto */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
      </div>

      {/* Conteúdo da Hero */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Roteirização inteligente para uma logística mais eficiente
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl">
          Planeje, organize e otimize suas rotas com tecnologia desenvolvida para a realidade da sua operação.
        </p>

        <p className="text-lg mb-8 max-w-3xl">
          O Roteirizador da VIA Group é uma solução digital que transforma dados operacionais em rotas eficientes, reduzindo custos, quilômetros rodados e aumentando o controle da sua frota.
        </p>
        
        <button 
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            onClick={() => document.getElementById('conversion-form')?.scrollIntoView({ behavior: 'smooth' })}
        >
            Solicitar Demonstração Gratuita
        </button>
      </div>
    </div>
  );
};

export default Hero;
