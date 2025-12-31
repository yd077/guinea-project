import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, Layers, Zap, PenTool, ShieldCheck, Package, Star, Shield } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Home: React.FC = () => {
  return (
    <div className="overflow-hidden bg-white font-sans selection:bg-blue-500 selection:text-white">
      
      {/* --- HERO SECTION: AUTOMOTIVE PREMIUM --- */}
      <section className="relative min-h-[100vh] flex items-center bg-[#050B14] text-white overflow-hidden pt-20">
        
        {/* Cinematic Automotive Background - Fixed Image */}
        <div className="absolute inset-0 z-0">
            {/* Dark overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#050B14] via-[#050B14]/80 to-transparent z-10"></div>
            {/* High quality dark luxury car image */}
            <img 
               src="https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=2070&auto=format&fit=crop" 
               alt="Luxury Car Dark" 
               className="w-full h-full object-cover opacity-60 object-center"
            />
        </div>

        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.05]" style={{ 
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
        }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-10 pb-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
              
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-blue-100 text-xs font-bold tracking-[0.2em] uppercase">Sourcing Canada Certifié</span>
              </div>
              
              {/* Main Title */}
              <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[1.05]">
                Votre auto mérite <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-100 to-white">
                  l'origine certifiée.
                </span>
              </h1>
              
              <p className="text-lg text-slate-300 max-w-xl leading-relaxed font-light border-l-2 border-blue-500 pl-6">
                Ne cherchez plus. Nous importons directement du Canada les moteurs, transmissions et pièces de carrosserie introuvables à Conakry.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/request" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-white text-blue-900 hover:bg-blue-50 font-bold text-lg px-8 h-14 rounded-full transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.15)] flex items-center justify-center">
                    Trouver ma pièce
                  </button>
                </Link>
                <Link to="/tracking" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-white/40 backdrop-blur-sm font-medium text-lg px-8 h-14 rounded-full transition-all duration-300 flex items-center justify-center gap-2 group">
                    Suivre un conteneur <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>

              {/* Stats / Trust */}
              <div className="pt-8 flex gap-8 border-t border-white/5">
                 <div>
                    <p className="text-3xl font-bold text-white">12+</p>
                    <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">Jours transit</p>
                 </div>
                 <div>
                    <p className="text-3xl font-bold text-white">100%</p>
                    <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">Pièces inspectées</p>
                 </div>
                 <div>
                    <p className="text-3xl font-bold text-white">2.4k</p>
                    <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">Clients satisfaits</p>
                 </div>
              </div>
            </div>

            {/* Visual Element: Floating Engine Card */}
            <div className="relative hidden lg:block animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
               
               {/* Glass Card Container */}
               <div className="relative z-10 bg-[#0F1623]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 shadow-2xl transform rotate-[-2deg] hover:rotate-0 transition-transform duration-700 ease-out group">
                  
                  {/* Header */}
                  <div className="flex justify-between items-center mb-6">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                           <Settings size={20} />
                        </div>
                        <div>
                           <p className="text-white font-bold text-sm">Inspection Technique</p>
                           <p className="text-xs text-slate-400">Montréal, QC</p>
                        </div>
                     </div>
                     <div className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-xs font-bold uppercase tracking-wide">
                        Conforme
                     </div>
                  </div>

                  {/* Main Image - Fixed Engine Image */}
                  <div className="relative h-64 rounded-xl overflow-hidden mb-6 border border-white/10 group-hover:border-blue-500/30 transition-colors">
                     <img 
                        src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop" 
                        alt="Clean Engine Block" 
                        className="w-full h-full object-cover opacity-90 scale-105 group-hover:scale-110 transition-transform duration-700"
                     />
                     {/* Scanning Effect Overlay */}
                     <div className="absolute top-0 left-0 w-full h-1 bg-blue-400/50 shadow-[0_0_15px_rgba(96,165,250,0.8)] animate-[scan_3s_ease-in-out_infinite]"></div>
                     
                     <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                        <p className="text-xs text-white font-mono">COMPRESSION: 175 PSI</p>
                     </div>
                  </div>

                  {/* Specs List */}
                  <div className="space-y-3">
                     <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                        <span className="text-slate-400">Pièce</span>
                        <span className="text-white font-medium">Moteur V6 3.5L</span>
                     </div>
                     <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                        <span className="text-slate-400">Véhicule</span>
                        <span className="text-white font-medium">Toyota Highlander '19</span>
                     </div>
                     <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-400">Kilométrage</span>
                        <span className="text-white font-medium">84,032 km</span>
                     </div>
                  </div>

                  {/* Buy Button inside card */}
                  <div className="mt-6">
                     <button className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-colors">
                        Voir le rapport complet
                     </button>
                  </div>
               </div>

               {/* Decorative Background Elements */}
               <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-600/20 rounded-full blur-[100px] -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BRANDS MARQUEE (Sleek) --- */}
      <div className="bg-[#0B1121] border-y border-white/5 overflow-hidden py-10">
         <div className="max-w-7xl mx-auto px-4 relative">
             <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0B1121] to-transparent z-10"></div>
             <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0B1121] to-transparent z-10"></div>
             
             <div className="flex justify-between items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 overflow-x-auto no-scrollbar">
                <span className="text-2xl font-serif text-white whitespace-nowrap">TOYOTA</span>
                <span className="text-2xl font-sans font-bold italic text-white whitespace-nowrap">HONDA</span>
                <span className="text-xl font-serif text-white whitespace-nowrap">Mercedes-Benz</span>
                <span className="text-2xl font-sans font-black tracking-tighter text-white whitespace-nowrap skew-x-[-10deg]">HYUNDAI</span>
                <span className="text-2xl font-mono font-bold text-white border-2 border-white/50 px-3 rounded whitespace-nowrap">Ford</span>
                <span className="text-2xl font-sans font-bold text-white whitespace-nowrap">NISSAN</span>
                <span className="text-2xl font-serif font-bold text-white whitespace-nowrap">MITSUBISHI</span>
             </div>
         </div>
      </div>

      {/* --- SHOWCASE: SPARE PARTS GALLERY (Fixed Images) --- */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
               <div className="max-w-2xl">
                  <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-2 block">Nos Spécialités</span>
                  <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Expertise mécanique & esthétique.</h2>
                  <p className="text-slate-500 mt-4 text-lg">Nous ne transportons pas que des cartons. Nous transportons des solutions techniques pour votre véhicule.</p>
               </div>
               <Link to="/request">
                  <span className="text-slate-900 font-bold border-b-2 border-slate-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors cursor-pointer flex items-center gap-2">
                     Voir tout le catalogue <ArrowRight size={16} />
                  </span>
               </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {/* Category 1: Engines - Fixed Image */}
               <div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
                  <img 
                     src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=800&auto=format&fit=crop" 
                     alt="Moteur" 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                     <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white mb-4 border border-white/20">
                           <Settings size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Moteurs & Boîtes</h3>
                        <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                           Blocs complets, testés et garantis. Toyota D4D, V6 Essence, transmissions automatiques.
                        </p>
                     </div>
                  </div>
               </div>

               {/* Category 2: Body Parts - Fixed Image */}
               <div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
                  <img 
                     src="https://images.unsplash.com/photo-1563720223523-491ff04651de?q=80&w=800&auto=format&fit=crop" 
                     alt="Carrosserie" 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                     <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white mb-4 border border-white/20">
                           <Layers size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Carrosserie</h3>
                        <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                           Portières, capots, pare-chocs d'origine. Pas de "chinois", que du solide canadien.
                        </p>
                     </div>
                  </div>
               </div>

               {/* Category 3: Lighting & Electronics - Fixed Image */}
               <div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
                  <img 
                     src="https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=800&auto=format&fit=crop" 
                     alt="Éclairage" 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                     <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white mb-4 border border-white/20">
                           <Zap size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Optiques & Électronique</h3>
                        <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                           Phares LED, calculateurs, tableaux de bord. Composants électroniques testés.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- VALUE PROPOSITION (Technical & Dark) --- */}
      <section className="py-24 bg-[#050B14] relative overflow-hidden">
         {/* Background pattern */}
         <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
               <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight mb-6">Logistique de précision.</h2>
               <p className="text-xl text-slate-400 leading-relaxed">De la casse certifiée au garage de Conakry, nous maîtrisons chaque kilomètre.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               
               {/* Feature 1 */}
               <div className="bg-[#0F1623] p-10 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-colors group">
                  <div className="w-16 h-16 bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-400 mb-8 group-hover:scale-110 transition-transform">
                     <PenTool size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Démontage Expert</h3>
                  <p className="text-slate-400 leading-relaxed">
                     Nos mécaniciens démontent les pièces proprement au Canada. Pas de câbles coupés à la pince, pas de supports cassés.
                  </p>
               </div>

               {/* Feature 2 */}
               <div className="bg-[#0F1623] p-10 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-colors group">
                  <div className="w-16 h-16 bg-emerald-900/20 rounded-2xl flex items-center justify-center text-emerald-400 mb-8 group-hover:scale-110 transition-transform">
                     <ShieldCheck size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Contrôle Qualité</h3>
                  <p className="text-slate-400 leading-relaxed">
                     Chaque moteur est tourné manuellement. Chaque boîte est vérifiée. Nous envoyons des vidéos avant l'expédition.
                  </p>
               </div>

               {/* Feature 3 */}
               <div className="bg-[#0F1623] p-10 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-colors group">
                  <div className="w-16 h-16 bg-purple-900/20 rounded-2xl flex items-center justify-center text-purple-400 mb-8 group-hover:scale-110 transition-transform">
                     <Package size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Emballage Renforcé</h3>
                  <p className="text-slate-400 leading-relaxed">
                     Caisses en bois sur mesure pour les moteurs. Film bulles pour la carrosserie. Zéro casse à l'arrivée.
                  </p>
               </div>

            </div>
         </div>
      </section>

      {/* --- HOW IT WORKS (Fixed Image) --- */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <div className="order-2 lg:order-1 relative group">
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 bg-slate-100">
                     <img 
                        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop" 
                        alt="Logistics Port" 
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 min-h-[500px]"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex items-end p-10">
                        <div className="text-white">
                           <div className="flex items-center gap-3 mb-2">
                              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                              <span className="font-mono text-xs uppercase tracking-widest text-green-400">En direct de l'entrepôt</span>
                           </div>
                           <p className="font-bold text-xl">Plateforme Montréal-Nord</p>
                           <p className="text-sm text-slate-300 mt-1">Départs hebdomadaires vers le port autonome de Conakry.</p>
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className="order-1 lg:order-2 space-y-12">
                  <div className="space-y-4">
                     <span className="text-blue-600 font-bold tracking-wider uppercase text-xs border border-blue-100 bg-blue-50 px-3 py-1 rounded-full">Processus 100% Transparent</span>
                     <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">Du Canada à votre capot.</h2>
                  </div>
                  
                  <div className="space-y-8">
                     {[
                        { step: "01", title: "Demande précise", desc: "Via notre formulaire, spécifiez le VIN ou envoyez une photo de votre pièce." },
                        { step: "02", title: "Recherche & Vérification", desc: "Nos experts localisent la pièce et vérifient son état (kilométrage, usure)." },
                        { step: "03", title: "Paiement sécurisé", desc: "Payez par virement ou Orange Money. Facture officielle fournie." },
                        { step: "04", title: "Livraison clé en main", desc: "Nous gérons la douane. Vous récupérez la pièce à notre agence de Kaloum." }
                     ].map((item, idx) => (
                        <div key={idx} className="flex gap-6 group">
                           <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-50 text-slate-400 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center font-bold font-mono text-lg transition-colors duration-300 border border-slate-200 group-hover:border-blue-600">
                              {item.step}
                           </div>
                           <div>
                              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                              <p className="text-slate-500 leading-relaxed max-w-md">{item.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
                  <div className="pt-4">
                     <Link to="/request">
                        <Button size="lg" className="rounded-full px-10 h-14 text-lg shadow-lg shadow-slate-900/10">Lancer une recherche</Button>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- TESTIMONIALS (Clean) --- */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-slate-900 mb-4">La confiance des pros.</h2>
               <p className="text-slate-500">Garagistes et particuliers témoignent.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
               {[
                  { 
                     text: "J'avais peur d'envoyer de l'argent pour un moteur. Avec AutoLink, j'ai eu des photos, un suivi, et un moteur impeccable à l'arrivée.",
                     author: "Mamadou D.",
                     role: "Particulier",
                     loc: "Conakry, Dixinn"
                  },
                  { 
                     text: "C'est la fin des pièces 'adaptables' chinoises qui lâchent après 1 mois. Ici c'est de l'origine Canada. Ça change tout pour mes clients.",
                     author: "Ibrahima S.",
                     role: "Garagiste",
                     loc: "Lambanyi"
                  },
                  { 
                     text: "Service client incroyable. Ils répondent sur WhatsApp en 10 minutes. On sent le professionnalisme et la rigueur canadienne.",
                     author: "Fatoumata C.",
                     role: "Particulier",
                     loc: "Kipe"
                  }
               ].map((t, i) => (
                  <div key={i} className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 text-left hover:shadow-lg transition-shadow duration-300">
                     <div className="flex gap-1 text-yellow-400 mb-6">
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                     </div>
                     <p className="text-slate-600 mb-8 leading-relaxed italic">"{t.text}"</p>
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500">
                           {t.author.charAt(0)}
                        </div>
                        <div>
                           <p className="font-bold text-slate-900">{t.author}</p>
                           <p className="text-xs text-slate-400 uppercase tracking-wide">{t.role} • {t.loc}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="py-24 bg-[#0B1121] text-white overflow-hidden relative">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none"></div>
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900/30 to-purple-900/30 pointer-events-none"></div>
         
         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Votre voiture mérite l'origine.</h2>
            <p className="text-xl text-blue-100/70 mb-12 max-w-2xl mx-auto leading-relaxed">
               Rejoignez les centaines de Guinéens qui ont choisi la fiabilité. Pas de surprise, juste de la qualité livrée à votre porte.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link to="/request">
                  <Button variant="white" size="lg" className="h-16 px-12 rounded-full text-lg font-bold w-full sm:w-auto shadow-xl shadow-white/10">
                     Demander un devis gratuit
                  </Button>
               </Link>
            </div>
            <p className="mt-8 text-sm text-slate-500 flex items-center justify-center gap-2">
               <Shield size={14} className="text-emerald-500" /> Garantie de compatibilité ou remboursé.
            </p>
         </div>
      </section>
    </div>
  );
};