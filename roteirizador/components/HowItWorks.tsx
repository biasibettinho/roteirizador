
import React from 'react';
import { StepProps } from '../types';

const Step: React.FC<StepProps> = ({ number, title, description }) => (
  <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10">
    <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-via-blue text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-bold shadow-lg shadow-via-blue/20">
      {number}
    </div>
    <div className="pt-2">
      <h3 className="text-xl md:text-2xl font-bold text-via-dark mb-3">{title}</h3>
      <p className="text-lg text-slate-500 leading-relaxed">{description}</p>
    </div>
  </div>
);

const HowItWorks: React.FC = () => {
  const steps: StepProps[] = [
    {
      number: "1",
      title: "Entrada de dados operacionais",
      description: "Informações como pontos de coleta, entregas, veículos, horários e regras do negócio."
    },
    {
      number: "2",
      title: "Processamento inteligente",
      description: "O sistema analisa os dados e gera rotas otimizadas com base em eficiência e viabilidade operacional."
    },
    {
      number: "3",
      title: "Aplicação na operação",
      description: "As rotas são utilizadas pela equipe, trazendo mais organização, economia e controle no dia a dia."
    }
  ];

  return (
    <section className="py-24 bg-via-gray overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-via-dark mb-12">
              Como o Roteirizador funciona na prática
            </h2>
            <div className="space-y-12 relative">
              {/* Connecting line for desktop */}
              <div className="absolute left-[31px] top-12 bottom-0 w-0.5 bg-via-blue/10 hidden md:block"></div>
              
              {steps.map((step, index) => (
                <Step key={index} {...step} />
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop" 
                alt="Operação logística" 
                className="w-full h-full object-cover aspect-video lg:aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-via-dark/60 to-transparent flex items-end p-8">
                <p className="text-white text-xl font-medium">Resultados reais para quem vive o dia a dia do transporte.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
