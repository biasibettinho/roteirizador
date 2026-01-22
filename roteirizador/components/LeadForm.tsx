
import React, { useState } from 'react';
import { FormData } from '../types';

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
    
    // Simulate API call
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

  if (isHeroVariant) {
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold text-via-dark mb-4">
          Quero saber mais
        </h2>
        <p className="text-slate-500 mb-8">
          Preencha os dados abaixo e nossa equipe entrará em contato.
        </p>
        
        {isSuccess ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <h3 className="text-xl font-bold text-via-dark">Mensagem enviada!</h3>
            <button onClick={() => setIsSuccess(false)} className="text-via-blue font-semibold hover:underline">Enviar outra</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              type="text" 
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Nome completo"
              className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-via-blue/20 focus:border-via-blue transition-all"
            />
            <input 
              type="text" 
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              placeholder="Empresa onde trabalha"
              className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-via-blue/20 focus:border-via-blue transition-all"
            />
            <input 
              type="tel" 
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="Telefone para contato"
              className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-via-blue/20 focus:border-via-blue transition-all"
            />
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-4 bg-via-blue text-white rounded-xl font-bold text-lg hover:bg-via-dark transition-all duration-300 shadow-lg shadow-via-blue/20"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
            </button>
          </form>
        )}
      </div>
    );
  }

  return (
    <section id="conversion-form" className="py-24 bg-via-gray scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-via-blue p-10 md:p-16 text-white flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Quero saber mais sobre o Roteirizador
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Preencha os dados abaixo e nossa equipe entrará em contato.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="bg-white/20 p-1 rounded-full"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg></div>
                Atendimento personalizado
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-white/20 p-1 rounded-full"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg></div>
                Diagnóstico de roteirização
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-white/20 p-1 rounded-full"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg></div>
                Demonstração do sistema
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 p-10 md:p-16">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 className="text-2xl font-bold text-via-dark">Mensagem enviada!</h3>
                <button onClick={() => setIsSuccess(false)} className="text-via-blue font-semibold hover:underline">Enviar outra</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Nome completo" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl" />
                <input type="text" name="company" required value={formData.company} onChange={handleChange} placeholder="Empresa" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl" />
                <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="Telefone" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl" />
                <button type="submit" className="w-full py-4 bg-via-blue text-white rounded-xl font-bold text-lg hover:bg-via-dark transition-all">
                  {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
