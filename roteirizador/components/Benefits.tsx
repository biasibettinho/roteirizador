
import React from 'react';
import { BenefitCardProps } from '../types';
import { ICONS } from '../constants';

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description, icon }) => (
  <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
    <div className="w-14 h-14 bg-white text-via-blue rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-white/5">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    <p className="text-blue-100 leading-relaxed">{description}</p>
  </div>
);

const Benefits: React.FC = () => {
  const benefits: BenefitCardProps[] = [
    {
      title: "Redução de custos operacionais",
      description: "Menos quilômetros rodados, melhor aproveitamento da frota e redução direta de custos com combustível e manutenção.",
      icon: ICONS.Cost
    },
    {
      title: "Planejamento inteligente de rotas",
      description: "Rotas criadas com base em dados reais, respeitando restrições operacionais e a realidade do dia a dia.",
      icon: ICONS.Route
    },
    {
      title: "Mais controle e previsibilidade",
      description: "Visualize, organize e padronize suas rotas, reduzindo improvisos e aumentando a confiabilidade da operação.",
      icon: ICONS.Control
    },
    {
      title: "Solução adaptável ao seu negócio",
      description: "O sistema se adapta a diferentes tipos de operação, volumes, regiões e regras específicas de cada cliente.",
      icon: ICONS.Adaptable
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-via-blue scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Principais benefícios para sua operação
          </h2>
          <div className="w-20 h-1 bg-white/30 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
