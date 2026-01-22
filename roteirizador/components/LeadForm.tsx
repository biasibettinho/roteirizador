import React, { useState } from 'react';
import { FormData } from './types'; // Ajuste o caminho se necessário (ex: './types' ou '../types')

interface LeadFormProps {
  isHeroVariant?: boolean;
}

const LeadForm: React.FC<LeadFormProps> = ({ isHeroVariant = false }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    phone: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulação de envio
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', company: '', phone: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Classes comuns para os inputs
  const inputClasses = "w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-colors duration-200";
  // Estilo dos inputs no fundo escuro: Fundo branco/claro, borda sutil, texto escuro
  const darkBgInputClasses = `${inputClasses} bg-white/10 border-white/20 text-white placeholder-white/60 focus:bg-white/20 focus:border-white focus:ring-white/30`;
  // Estilo padrão (fundo branco): Fundo cinza claro, texto escuro
  const lightBgInputClasses = `${inputClasses} bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:ring-blue-100`;

  if (isHeroVariant) {
    return (
      <div className="bg-[#0A497B] p-8 rounded-2xl shadow-2xl backdrop-blur-sm border border-white/10">
        <h3 className="text-2xl font-bold mb-2 text-white">
          Quero saber mais
        </h3>
        <p className="text-blue-100 mb-6 text-sm">
          Preencha os dados abaixo e nossa equipe entrará em contato.
        </p>

        {isSuccess ? (
          <div className="text-center py-8 bg-white/10 rounded-lg animate-fade-in">
            <div className="text-green-400 text-5xl mb-4">✓</div>
            <h4 className="text-xl font-bold text-white mb-2">Mensagem enviada!</h4>
            <p className="text-blue-100 mb-4">Em breve entraremos em contato.</p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="text-white hover:text-blue-200 underline font-medium"
            >
              Enviar outra solicitação
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-blue-100 mb-1 ml-1">
                Nome completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome"
                required
                className={darkBgInputClasses}
              />
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-blue-100 mb-1 ml-1">
                Empresa onde trabalha
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Nome da sua empresa"
                required
                className={darkBgInputClasses}
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-blue-100 mb-1 ml-1">
                Telefone para contato
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(00) 00000-0000"
                required
                className={darkBgInputClasses}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 rounded-lg font-bold text-lg text-[#0A497B] transition-all duration-300 transform hover:-translate-y-1 shadow-lg
                ${isSubmitting 
                  ? 'bg-gray-300 cursor-not-allowed' 
                  : 'bg-white hover:bg-gray-100 hover:shadow-xl'
                }`}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
            </button>
          </form>
        )}
      </div>
    );
  }

  // Versão padrão (Seção de Contato - Layout Azul Grande)
  return (
    <div className="bg-[#0A497B] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
      {/* Lado Esquerdo - Texto */}
      <div className="p-8 md:p-12 md:w-5/12 text-white flex flex-col justify-center bg-[#083d66]">
        <h3 className="text-3xl font-bold mb-6 leading-tight">
          Quero saber mais sobre o Roteirizador
        </h3>
        <p className="text-blue-100 mb-8 text-lg">
          Preencha os dados abaixo e nossa equipe entrará em contato.
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-500/20 p-2 rounded-full">
              <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="font-medium text-blue-50">Atendimento personalizado</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-blue-500/20 p-2 rounded-full">
              <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="font-medium text-blue-50">Diagnóstico de roteirização</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-blue-500/20 p-2 rounded-full">
              <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="font-medium text-blue-50">Demonstração do sistema</span>
          </div>
        </div>
      </div>

      {/* Lado Direito - Formulário (Fundo Branco para contraste nesta versão, ou azul se preferir) */}
      <div className="p-8 md:p-12 md:w-7/12 bg-white">
        {isSuccess ? (
          <div className="h-full flex flex-col items-center justify-center text-center py-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-gray-800 mb-2">Solicitação Enviada!</h4>
            <p className="text-gray-600 mb-6">Recebemos seus dados e entraremos em contato em breve.</p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="text-[#0A497B] font-semibold hover:underline"
            >
              Enviar outra
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name-default" className="block text-sm font-semibold text-gray-700 mb-1 ml-1">
                Nome completo
              </label>
              <input
                type="text"
                id="name-default"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome"
                required
                className={lightBgInputClasses}
              />
            </div>
            
            <div>
              <label htmlFor="company-default" className="block text-sm font-semibold text-gray-700 mb-1 ml-1">
                Empresa onde trabalha
              </label>
              <input
                type="text"
                id="company-default"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Nome da sua empresa"
                required
                className={lightBgInputClasses}
              />
            </div>
            
            <div>
              <label htmlFor="phone-default" className="block text-sm font-semibold text-gray-700 mb-1 ml-1">
                Telefone para contato
              </label>
              <input
                type="tel"
                id="phone-default"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(00) 00000-0000"
                required
                className={lightBgInputClasses}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 rounded-lg font-bold text-lg text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg mt-4
                ${isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-[#0A497B] hover:bg-blue-800 hover:shadow-xl'
                }`}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LeadForm;
