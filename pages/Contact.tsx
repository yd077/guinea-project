import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, Clock } from 'lucide-react';
import { Input, Textarea } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="bg-[#050B14] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[700px]">
           
           {/* LEFT PANEL: INFO (Dark) */}
           <div className="lg:w-5/12 p-10 lg:p-16 relative overflow-hidden flex flex-col justify-between text-white">
              {/* Abstract Background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] pointer-events-none"></div>
              <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

              <div className="relative z-10">
                 <h1 className="text-4xl font-bold mb-6">Parlons de votre projet.</h1>
                 <p className="text-slate-400 text-lg leading-relaxed mb-12">
                   Besoin d'un moteur spécifique ? D'un devis pour un conteneur complet ? Nos experts à Montréal et Conakry sont connectés.
                 </p>

                 <div className="space-y-8">
                    <div className="flex items-start gap-5 group">
                       <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10 group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors">
                          <Phone size={20} className="text-white" />
                       </div>
                       <div>
                          <p className="text-sm text-slate-400 uppercase tracking-wider font-bold mb-1">WhatsApp & Appels</p>
                          <p className="font-medium text-lg">+1 (514) 000-0000 <span className="text-slate-500 text-sm">(Canada)</span></p>
                          <p className="font-medium text-lg">+224 600 00 00 00 <span className="text-slate-500 text-sm">(Guinée)</span></p>
                       </div>
                    </div>

                    <div className="flex items-start gap-5 group">
                       <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10 group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors">
                          <Mail size={20} className="text-white" />
                       </div>
                       <div>
                          <p className="text-sm text-slate-400 uppercase tracking-wider font-bold mb-1">Email Support</p>
                          <p className="font-medium text-lg">contact@autolink.com</p>
                          <p className="text-sm text-slate-500 mt-1">Réponse sous 24h</p>
                       </div>
                    </div>

                    <div className="flex items-start gap-5 group">
                       <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10 group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors">
                          <MapPin size={20} className="text-white" />
                       </div>
                       <div>
                          <p className="text-sm text-slate-400 uppercase tracking-wider font-bold mb-1">Nos Agences</p>
                          <p className="font-medium">Montréal-Nord, Québec</p>
                          <p className="font-medium">Kaloum, Centre-Ville, Conakry</p>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Decorative Map Abstract */}
              <div className="mt-12 pt-12 border-t border-white/10 flex items-center gap-4 text-sm text-slate-400">
                 <Clock size={16} />
                 <span>Ouvert Lun-Sam : 08h - 18h</span>
              </div>
           </div>

           {/* RIGHT PANEL: FORM (White) */}
           <div className="lg:w-7/12 bg-white p-10 lg:p-16 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Envoyez-nous un message</h2>
              
              <form className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input 
                       label="Prénom" 
                       placeholder="Jean" 
                       className="bg-gray-50 border-gray-100 focus:bg-white transition-colors"
                    />
                    <Input 
                       label="Nom" 
                       placeholder="Dupont" 
                       className="bg-gray-50 border-gray-100 focus:bg-white transition-colors"
                    />
                 </div>
                 
                 <Input 
                    label="Email ou Téléphone" 
                    placeholder="Pour vous recontacter" 
                    className="bg-gray-50 border-gray-100 focus:bg-white transition-colors"
                 />

                 <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-slate-700">Sujet</label>
                    <div className="flex flex-wrap gap-2">
                       {['Devis Moteur', 'Suivi Commande', 'Partenariat', 'Autre'].map(tag => (
                          <button key={tag} type="button" className="px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 hover:border-slate-900 hover:text-slate-900 focus:bg-slate-900 focus:text-white transition-all">
                             {tag}
                          </button>
                       ))}
                    </div>
                 </div>

                 <Textarea 
                    label="Votre message" 
                    rows={5} 
                    placeholder="Dites-nous ce que vous cherchez..." 
                    className="bg-gray-50 border-gray-100 focus:bg-white transition-colors"
                 />
                 
                 <div className="pt-4">
                    <Button size="lg" className="w-full h-14 text-lg shadow-xl shadow-slate-900/10 rounded-xl">
                       Envoyer ma demande <ArrowRight size={18} className="ml-2" />
                    </Button>
                 </div>
              </form>
           </div>

        </div>
      </div>
    </div>
  );
};