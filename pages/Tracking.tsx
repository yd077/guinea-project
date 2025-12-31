import React, { useState } from 'react';
import { Search, Package, Truck, CheckCircle2, Clock, Anchor } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { OrderStatus } from '../types';

export const Tracking: React.FC = () => {
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
  };

  const steps = [
    { status: OrderStatus.QUOTE_REQUESTED, date: "10 Oct", done: true, label: "Devis validé" },
    { status: OrderStatus.PAID, date: "12 Oct", done: true, label: "Paiement reçu" },
    { status: OrderStatus.PURCHASED, date: "14 Oct", done: true, label: "Pièce achetée (Montréal)" },
    { status: OrderStatus.IN_TRANSIT, date: "16 Oct", done: true, label: "Chargement Conteneur #MTL-99" },
    { status: OrderStatus.ARRIVED, date: "En cours", done: false, active: true, label: "Arrivée Port Conakry" },
    { status: OrderStatus.DELIVERED, date: "-", done: false, label: "Livraison Client" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* --- HERO HEADER --- */}
      <div className="bg-[#050B14] text-white pt-32 pb-32 relative overflow-hidden">
         {/* Background pattern */}
         <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl font-bold mb-4">Centre de Suivi Logistique</h1>
            <p className="text-slate-400 text-lg">Suivez votre conteneur ou votre pièce en temps réel.</p>
         </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-8 pb-20 relative z-20">
        
        {/* --- SEARCH BAR (Floating) --- */}
        <div className="bg-white p-2 rounded-2xl shadow-xl border border-slate-200 flex gap-2 mb-12 transform -translate-y-1/2">
          <div className="flex-grow">
             <input 
               type="text" 
               placeholder="Numéro de commande (ex: CMD-8832) ou Conteneur" 
               className="w-full h-14 px-6 rounded-xl outline-none text-slate-900 placeholder-slate-400 font-medium"
               defaultValue={hasSearched ? "CMD-2024-8892" : ""}
             />
          </div>
          <Button onClick={handleSearch} className="h-14 px-8 rounded-xl text-lg shadow-lg">
            <Search size={20} className="mr-2" /> Rechercher
          </Button>
        </div>

        {hasSearched && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            
            {/* --- DASHBOARD HEADER --- */}
            <div className="flex flex-col md:flex-row gap-6">
                {/* Order Summary Card */}
                <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 overflow-hidden flex-grow relative group">
                   <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Package size={120} />
                   </div>
                   <div className="p-8">
                      <div className="flex items-center gap-3 mb-6">
                         <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider">Commande</span>
                         <h2 className="text-2xl font-black text-slate-900">#CMD-8892</h2>
                      </div>
                      
                      <div className="space-y-4">
                         <div>
                            <p className="text-xs text-slate-400 uppercase font-bold mb-1">Article</p>
                            <p className="text-lg font-bold text-slate-900">Moteur V6 Toyota Camry</p>
                            <p className="text-sm text-slate-500">Ref: 882-99-A • Import Canada</p>
                         </div>
                         <div className="pt-4 border-t border-slate-100 flex gap-8">
                            <div>
                               <p className="text-xs text-slate-400 uppercase font-bold mb-1">Poids</p>
                               <p className="font-medium text-slate-900">185 kg</p>
                            </div>
                            <div>
                               <p className="text-xs text-slate-400 uppercase font-bold mb-1">Volume</p>
                               <p className="font-medium text-slate-900">1.2 m³</p>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Status Card (Blue) */}
                <div className="bg-[#0F1623] rounded-[2rem] shadow-xl border border-slate-800 p-8 md:w-5/12 text-white relative overflow-hidden flex flex-col justify-between">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-[40px]"></div>
                   
                   <div>
                      <div className="flex items-center gap-3 mb-6">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                          <span className="text-green-400 text-xs font-bold uppercase tracking-wider">En Transit</span>
                      </div>
                      <h3 className="text-3xl font-bold mb-2">3 Jours</h3>
                      <p className="text-slate-400 text-sm">Temps estimé avant arrivée au port.</p>
                   </div>

                   <div className="mt-8">
                      <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                         <div className="bg-blue-500 h-2 rounded-full w-[75%]"></div>
                      </div>
                      <div className="flex justify-between text-xs text-slate-500">
                         <span>Montréal</span>
                         <span>Conakry</span>
                      </div>
                   </div>
                </div>
            </div>

            {/* --- TIMELINE --- */}
            <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-200 p-10">
               <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-100">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400">
                     <Anchor size={24} />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-slate-900">Historique d'acheminement</h3>
                     <p className="text-slate-500 text-sm">Conteneur CA-GU-9920</p>
                  </div>
               </div>

               <div className="space-y-0 relative">
                  {/* Vertical Line */}
                  <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-slate-100"></div>

                  {steps.map((step, idx) => (
                     <div key={idx} className={`relative flex gap-8 pb-10 last:pb-0 group ${step.done || step.active ? 'opacity-100' : 'opacity-40'}`}>
                        {/* Icon Node */}
                        <div className={`
                           relative z-10 w-12 h-12 rounded-full border-4 border-white flex items-center justify-center shrink-0 shadow-sm transition-colors
                           ${step.done ? 'bg-slate-900 text-white' : step.active ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}
                        `}>
                           {step.done ? <CheckCircle2 size={18} /> : step.active ? <Truck size={18} className="animate-pulse" /> : <Clock size={18} />}
                        </div>

                        {/* Content */}
                        <div className="pt-2">
                           <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-1">
                              <h4 className={`font-bold text-lg ${step.active ? 'text-blue-600' : 'text-slate-900'}`}>{step.label}</h4>
                              {step.date !== '-' && (
                                 <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-50 text-slate-500 border border-slate-100">{step.date}</span>
                              )}
                           </div>
                           <p className="text-slate-500 text-sm">{step.status}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* --- ACTIONS --- */}
            <div className="flex justify-center gap-4 pt-4">
               <Button variant="outline" className="rounded-xl px-6 border-slate-300">Signaler un problème</Button>
               <Button className="rounded-xl px-6 shadow-lg shadow-slate-900/10">Télécharger le Bon de Livraison</Button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};