import React, { useState } from 'react';
import { Lock, CreditCard, Shield } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export const Payment: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl text-center border border-slate-100">
           <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="text-green-600 w-10 h-10" />
           </div>
           <h2 className="text-2xl font-bold text-slate-900 mb-2">Paiement Réussi</h2>
           <p className="text-slate-500 mb-8">Votre commande #8892 a été validée. Nous procédons à l'achat de la pièce.</p>
           <Button className="w-full" onClick={() => window.location.href = '/tracking'}>Voir ma commande</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Order Summary */}
        <div className="lg:col-span-1 space-y-6">
           <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4">Récapitulatif</h3>
              <div className="space-y-4 text-sm">
                 <div className="flex justify-between">
                    <span className="text-slate-500">Moteur V6 Toyota</span>
                    <span className="font-medium text-slate-900">1 200 $CA</span>
                 </div>
                 <div className="flex justify-between">
                    <span className="text-slate-500">Transport Maritime</span>
                    <span className="font-medium text-slate-900">350 $CA</span>
                 </div>
                 <div className="flex justify-between">
                    <span className="text-slate-500">Services & Frais</span>
                    <span className="font-medium text-slate-900">150 $CA</span>
                 </div>
                 <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                    <span className="font-bold text-slate-900">Total</span>
                    <span className="font-bold text-2xl text-slate-900">1 700 $CA</span>
                 </div>
              </div>
           </div>
           <div className="flex items-center gap-2 text-xs text-slate-400 justify-center">
              <Lock size={12} /> Paiement chiffré et sécurisé SSL
           </div>
        </div>

        {/* Payment Form */}
        <div className="lg:col-span-2">
           <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <div className="flex items-center justify-between mb-8">
                 <h2 className="text-xl font-bold text-slate-900">Détails du paiement</h2>
                 <div className="flex gap-2">
                    <div className="h-8 w-12 bg-slate-100 rounded flex items-center justify-center text-xs font-bold text-slate-400">VISA</div>
                    <div className="h-8 w-12 bg-slate-100 rounded flex items-center justify-center text-xs font-bold text-slate-400">MC</div>
                 </div>
              </div>

              <form onSubmit={handlePay} className="space-y-6">
                 <Input label="Titulaire de la carte" placeholder="Nom complet" required />
                 <Input label="Numéro de carte" placeholder="0000 0000 0000 0000" icon={<CreditCard />} required />
                 <div className="grid grid-cols-2 gap-6">
                    <Input label="Expiration" placeholder="MM/AA" required />
                    <Input label="CVC" placeholder="123" required />
                 </div>

                 <div className="pt-6">
                    <Button type="submit" className="w-full h-12 text-lg" isLoading={loading}>
                       Payer 1 700 $CA
                    </Button>
                 </div>
              </form>
           </div>
        </div>
      </div>
    </div>
  );
};