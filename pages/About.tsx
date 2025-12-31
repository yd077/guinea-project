import React from 'react';
import { Globe, Users, Award, ShieldCheck, TrendingUp, Anchor } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* --- HERO: DARK PREMIUM --- */}
      <div className="relative bg-[#050B14] text-white pt-32 pb-24 overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050B14] z-10"></div>
        
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-20 text-center">
           <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/10 text-xs font-bold uppercase tracking-widest text-blue-200 mb-6 backdrop-blur-md">
              Depuis 2018
           </span>
           <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter leading-tight">
              Le pont mécanique <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Canada — Guinée.</span>
           </h1>
           <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
             Nous avons supprimé les intermédiaires douteux pour créer un lien direct, sécurisé et professionnel entre les casses de Montréal et les garages de Conakry.
           </p>
        </div>
      </div>

      {/* --- STATS BAR --- */}
      <div className="bg-[#050B14] border-t border-white/5 py-12">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                  <p className="text-4xl font-bold text-white mb-1">5000+</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Pièces livrées</p>
              </div>
              <div>
                  <p className="text-4xl font-bold text-white mb-1">1200</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Moteurs testés</p>
              </div>
              <div>
                  <p className="text-4xl font-bold text-white mb-1">100%</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Garantie arrivée</p>
              </div>
              <div>
                  <p className="text-4xl font-bold text-white mb-1">24h</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Réponse devis</p>
              </div>
          </div>
      </div>

      {/* --- STORY SECTION --- */}
      <div className="py-24 bg-white relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="relative">
                   <div className="absolute -inset-4 bg-slate-100 rounded-[2.5rem] transform -rotate-2"></div>
                   <img 
                      src="https://images.unsplash.com/photo-1530046339160-7115b3e03eb6?q=80&w=1000&auto=format&fit=crop" 
                      alt="Mechanic working" 
                      className="relative rounded-[2rem] shadow-2xl z-10 w-full h-auto object-cover min-h-[500px]"
                   />
                   <div className="absolute bottom-8 right-8 z-20 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg max-w-xs border border-white">
                      <p className="text-slate-900 font-bold italic">"Nous ne vendons pas juste des pièces, nous vendons la tranquillité d'esprit sur la route."</p>
                      <p className="text-sm text-slate-500 mt-2">— L'équipe Technique</p>
                   </div>
                </div>

                <div className="space-y-8">
                   <h2 className="text-4xl font-bold text-slate-900 leading-tight">Né d'un constat simple : <br/>La qualité est introuvable.</h2>
                   <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                      <p>
                        Tout a commencé quand notre fondateur, basé à Montréal, a essayé d'aider son oncle à Conakry à trouver une transmission pour sa Toyota.
                      </p>
                      <p>
                        Le constat était amer : pièces chinoises de mauvaise qualité, prix exorbitants pour de l'occasion douteuse, et délais interminables.
                      </p>
                      <p>
                        AutoLink est la réponse. Nous utilisons notre présence physique au Canada pour sélectionner rigoureusement les pièces dans les meilleurs centres de recyclage, les tester, et les expédier nous-mêmes.
                      </p>
                   </div>
                   
                   <div className="flex gap-4 pt-4">
                      <div className="px-4 py-2 bg-slate-50 rounded-lg border border-slate-200 text-sm font-bold text-slate-700">Bureau Montréal</div>
                      <div className="px-4 py-2 bg-slate-50 rounded-lg border border-slate-200 text-sm font-bold text-slate-700">Agence Conakry</div>
                   </div>
                </div>
             </div>
         </div>
      </div>

      {/* --- VALUES GRID (Glassmorphism Dark) --- */}
      <div className="py-24 bg-[#0B1121] relative overflow-hidden">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-white">Nos piliers de confiance</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {/* Card 1 */}
               <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-3xl hover:bg-white/10 transition-colors group">
                  <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                     <Users size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Double Équipe</h3>
                  <p className="text-slate-400 leading-relaxed">
                     Des techniciens certifiés au Canada pour l'achat, et une équipe logistique en Guinée pour la remise en main propre. Vous avez un interlocuteur de chaque côté.
                  </p>
               </div>

               {/* Card 2 */}
               <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-3xl hover:bg-white/10 transition-colors group">
                  <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                     <ShieldCheck size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Zéro Contrefaçon</h3>
                  <p className="text-slate-400 leading-relaxed">
                     Nous ne touchons pas aux pièces "adaptables". Uniquement de l'origine constructeur (OEM) récupéré sur des véhicules canadiens entretenus.
                  </p>
               </div>

               {/* Card 3 */}
               <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-3xl hover:bg-white/10 transition-colors group">
                  <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                     <TrendingUp size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Transparence Totale</h3>
                  <p className="text-slate-400 leading-relaxed">
                     Prix affichés en clair, photos réelles de votre pièce avant achat, et numéro de tracking conteneur. Pas de frais cachés à l'arrivée.
                  </p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};