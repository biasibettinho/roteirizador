
import React from 'react';

const Concept: React.FC = () => {
  return (
    <section id="concept" className="py-24 bg-via-gray border-y border-slate-100 scroll-mt-20">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-via-dark mb-10">
          O que é o Roteirizador VIA Group?
        </h2>
        <div className="space-y-6 text-lg text-slate-600 leading-relaxed text-justify md:text-center">
          <p>
            O Roteirizador VIA Group é uma plataforma tecnológica desenvolvida para planejar, organizar e otimizar rotas logísticas de forma inteligente.
          </p>
          <p>
            Ele analisa dados reais da operação, como distâncias, pontos de coleta ou entrega, capacidade dos veículos, horários e regras específicas do negócio, e transforma essas informações em rotas mais eficientes, seguras e econômicas.
          </p>
          <p className="font-medium text-slate-800 italic">
            Diferente de roteiros feitos manualmente, o Roteirizador utiliza lógica operacional e inteligência de dados para apoiar a tomada de decisão, reduzir desperdícios e trazer previsibilidade à logística.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Concept;
