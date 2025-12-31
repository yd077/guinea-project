import React, { useState, useEffect } from 'react';
import { 
  Car, Calendar, Search, Wrench, Zap, Activity,
  Camera, Check, ChevronRight, ChevronLeft, Upload, Info, 
  MapPin, Phone, Mail, MessageSquare, ShieldCheck, Fuel,
  Thermometer, MoveVertical, Wind, Settings, Gauge, Lightbulb, User,
  ArrowLeft, CreditCard, Lock, DollarSign
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input, Textarea } from '../components/ui/Input';

// --- Mock Data & Config ---

const BRANDS = [
  { name: 'Toyota', color: 'bg-red-50 text-red-700 border-red-200' },
  { name: 'Hyundai', color: 'bg-blue-50 text-blue-700 border-blue-200' },
  { name: 'Mercedes', color: 'bg-slate-50 text-slate-700 border-slate-200' },
  { name: 'BMW', color: 'bg-sky-50 text-sky-700 border-sky-200' },
  { name: 'Nissan', color: 'bg-gray-50 text-gray-700 border-gray-200' },
  { name: 'Honda', color: 'bg-red-50 text-red-700 border-red-200' },
  { name: 'Kia', color: 'bg-red-50 text-red-700 border-red-200' },
  { name: 'Ford', color: 'bg-blue-50 text-blue-700 border-blue-200' },
  { name: 'Renault', color: 'bg-yellow-50 text-yellow-700 border-yellow-200' },
  { name: 'Peugeot', color: 'bg-blue-50 text-blue-700 border-blue-200' },
];

const MODELS: Record<string, string[]> = {
  'Toyota': ['Corolla', 'RAV4', 'Land Cruiser', 'Yaris', 'Camry', 'Hilux', 'Prado', 'Highlander'],
  'Hyundai': ['Tucson', 'Santa Fe', 'Elantra', 'Sonata', 'Accent', 'Kona'],
  'Mercedes': ['Classe C', 'Classe E', 'GLC', 'GLE', 'Classe A', 'Classe S'],
  'BMW': ['Série 3', 'Série 5', 'X3', 'X5', 'X6', 'Série 1'],
};

const CATEGORIES = [
  { id: 'moteur', label: 'Moteur', icon: Wrench, color: 'bg-orange-50 text-orange-600', border: 'border-orange-200', needsPosition: false },
  { id: 'freinage', label: 'Freinage', icon: Activity, color: 'bg-red-50 text-red-600', border: 'border-red-200', needsPosition: true },
  { id: 'refroidissement', label: 'Refroidissement', icon: Thermometer, color: 'bg-blue-50 text-blue-600', border: 'border-blue-200', needsPosition: false },
  { id: 'suspension', label: 'Suspension', icon: MoveVertical, color: 'bg-indigo-50 text-indigo-600', border: 'border-indigo-200', needsPosition: true },
  { id: 'electricite', label: 'Électricité', icon: Zap, color: 'bg-yellow-50 text-yellow-600', border: 'border-yellow-200', needsPosition: false },
  { id: 'carrosserie', label: 'Carrosserie', icon: Car, color: 'bg-slate-50 text-slate-600', border: 'border-slate-200', needsPosition: true },
  { id: 'echappement', label: 'Échappement', icon: Wind, color: 'bg-gray-50 text-gray-600', border: 'border-gray-200', needsPosition: false },
  { id: 'transmission', label: 'Transmission', icon: Settings, color: 'bg-purple-50 text-purple-600', border: 'border-purple-200', needsPosition: true },
  { id: 'tableau', label: 'Habitacle', icon: Gauge, color: 'bg-emerald-50 text-emerald-600', border: 'border-emerald-200', needsPosition: false },
  { id: 'eclairage', label: 'Éclairage', icon: Lightbulb, color: 'bg-amber-50 text-amber-600', border: 'border-amber-200', needsPosition: true },
];

const PARTS: Record<string, string[]> = {
  'freinage': ['Plaquettes', 'Disques', 'Étrier', 'Maître cylindre', 'Capteur ABS', 'Kit complet'],
  'moteur': ['Alternateur', 'Démarreur', 'Turbo', 'Injecteur', 'Culasse', 'Pompe à eau', 'Courroie'],
  'suspension': ['Amortisseur', 'Ressort', 'Triangle', 'Rotule', 'Silent bloc'],
  'eclairage': ['Phare avant', 'Feu arrière', 'Clignotant', 'Ampoules', 'Antibrouillard'],
  'carrosserie': ['Pare-choc', 'Aile', 'Capot', 'Portière', 'Rétroviseur', 'Calandre'],
};

const PROBLEMS = [
  { id: 'bruit', label: 'Bruit anormal' },
  { id: 'fuite', label: 'Fuite visible' },
  { id: 'voyant', label: 'Voyant allumé' },
  { id: 'puissance', label: 'Perte de puissance' },
  { id: 'demarrage', label: 'Ne démarre pas' },
  { id: 'accident', label: 'Casse suite accident' },
  { id: 'entretien', label: 'Entretien périodique' },
];

const GUINEA_CITIES = ['Conakry', 'Kindia', 'Labé', 'Kankan', 'Boké', 'Mamou', 'Faranah', 'N\'Zérékoré'];

// --- Types ---

interface FormData {
  brand: string;
  model: string;
  year: string;
  fuel: string;
  category: string;
  partName: string;
  positionFR: string;
  positionLR: string;
  reference: string;
  description: string;
  photos: string[];
  problems: string[];
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  contactPref: string;
  city: string;
}

const INITIAL_DATA: FormData = {
  brand: '', model: '', year: '', fuel: '',
  category: '', partName: '',
  positionFR: '', positionLR: '', reference: '', description: '',
  photos: [], problems: [],
  firstName: '', lastName: '', phone: '', email: '', contactPref: 'whatsapp', city: ''
};

// --- Main Component ---

export const RequestPart: React.FC = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(INITIAL_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

  // Helper to scroll to top
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // --- Navigation Logic ---

  const totalSteps = 13; // Added step 13 for Payment

  const handleNext = () => {
    let nextStep = step + 1;
    
    // Logic to skip steps
    if (nextStep === 2 && data.brand === 'Autre') {
      // Step 2 is model selection, if brand is unknown we might just let them type model, 
      // but current logic allows typing in step 2 regardless. 
    }
    
    // Skip Step 7 (Position) if category doesn't need it
    if (nextStep === 7) {
       const cat = CATEGORIES.find(c => c.id === data.category);
       if (!cat?.needsPosition) {
         nextStep++; 
       }
    }

    setDirection('forward');
    setStep(nextStep);
    scrollToTop();
  };

  const handleBack = () => {
    let prevStep = step - 1;

    // Skip Step 7 (Position) backwards if category doesn't need it
    if (prevStep === 7) {
      const cat = CATEGORIES.find(c => c.id === data.category);
      if (!cat?.needsPosition) {
        prevStep--; 
      }
    }

    setDirection('backward');
    setStep(prevStep);
    scrollToTop();
  };

  const updateData = (field: keyof FormData, value: any) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const selectAndNext = (field: keyof FormData, value: any) => {
    updateData(field, value);
    setTimeout(() => {
      handleNext();
    }, 250); 
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      scrollToTop();
    }, 3000);
  };

  // --- Steps Content ---

  const renderStep1_Brand = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold text-slate-900">Marque du véhicule</h2>
        <p className="text-slate-500 text-lg">Sélectionnez la marque de votre voiture.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {BRANDS.map((brand) => (
          <button
            key={brand.name}
            onClick={() => {
              updateData('model', ''); 
              selectAndNext('brand', brand.name);
            }}
            className={`
              relative p-6 rounded-2xl border flex flex-col items-center justify-center gap-4 transition-all duration-200 group
              ${data.brand === brand.name 
                ? 'border-slate-900 bg-slate-900 text-white shadow-xl scale-[1.02] z-10 ring-4 ring-slate-100' 
                : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg hover:-translate-y-1'}
            `}
          >
            <div className={`
              w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold transition-colors shadow-sm
              ${data.brand === brand.name ? 'bg-white/20 text-white' : brand.color}
            `}>
              {brand.name.charAt(0)}
            </div>
            <span className="font-bold text-base">{brand.name}</span>
          </button>
        ))}
        <button
          onClick={() => selectAndNext('brand', 'Autre')}
          className="p-6 rounded-2xl border border-dashed border-slate-300 flex flex-col items-center justify-center gap-4 text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-colors hover:border-slate-400"
        >
          <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center text-xl font-bold">?</div>
          <span className="font-medium text-base">Autre</span>
        </button>
      </div>
    </div>
  );

  const renderStep2_Model = () => (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold text-slate-900">Modèle</h2>
        <p className="text-slate-500 text-lg">Marque : <span className="font-semibold text-slate-900">{data.brand}</span></p>
      </div>

      {data.brand !== 'Autre' && MODELS[data.brand] ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {MODELS[data.brand].map((model) => (
            <button
              key={model}
              onClick={() => selectAndNext('model', model)}
              className={`
                px-6 py-5 rounded-xl border text-left font-semibold text-lg transition-all
                ${data.model === model
                  ? 'border-slate-900 bg-slate-900 text-white shadow-lg ring-4 ring-slate-100'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'}
              `}
            >
              <div className="flex justify-between items-center">
                {model}
                {data.model === model && <Check size={20} />}
              </div>
            </button>
          ))}
          <button
            onClick={() => { updateData('model', ''); handleNext(); }}
             className="px-6 py-5 rounded-xl border border-dashed border-slate-300 text-slate-500 hover:bg-slate-50 text-left font-medium"
          >
            Je ne vois pas mon modèle...
          </button>
        </div>
      ) : (
        <div className="max-w-md mx-auto space-y-6">
          <Input 
            label="Nom du modèle" 
            placeholder="Ex: Ranger, Civic, ..." 
            value={data.model}
            onChange={(e) => updateData('model', e.target.value)}
            autoFocus
          />
          <Button onClick={handleNext} disabled={!data.model} className="w-full h-12">Suivant</Button>
        </div>
      )}
    </div>
  );

  const renderStep3_Year = () => (
    <div className="space-y-8 max-w-2xl mx-auto">
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold text-slate-900">Année</h2>
        <p className="text-slate-500 text-lg">L'année de fabrication du véhicule.</p>
      </div>
      
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
        {Array.from({ length: 20 }, (_, i) => 2024 - i).map(year => (
          <button
            key={year}
            onClick={() => selectAndNext('year', year.toString())}
            className={`
              py-4 rounded-xl border font-bold text-lg transition-all
              ${data.year === year.toString()
                ? 'bg-slate-900 text-white border-slate-900 shadow-lg scale-105 ring-2 ring-slate-100'
                : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:shadow-sm'}
            `}
          >
            {year}
          </button>
        ))}
      </div>
      
      <div className="flex justify-center">
        <button 
           onClick={() => selectAndNext('year', 'Inconnue')}
           className="text-slate-400 text-sm hover:text-slate-900 underline py-2"
        >
          Je ne connais pas l'année exacte
        </button>
      </div>
    </div>
  );

  const renderStep4_Fuel = () => (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold text-slate-900">Motorisation</h2>
        <p className="text-slate-500 text-lg">Quel type de moteur ?</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {[
          { id: 'essence', label: 'Essence', icon: Fuel, color: 'text-green-600 bg-green-50' },
          { id: 'diesel', label: 'Diesel', icon: Fuel, color: 'text-yellow-600 bg-yellow-50' },
          { id: 'hybrid', label: 'Hybride', icon: Zap, color: 'text-blue-600 bg-blue-50' },
          { id: 'electric', label: 'Électrique', icon: Zap, color: 'text-purple-600 bg-purple-50' },
        ].map((fuel) => (
          <button
            key={fuel.id}
            onClick={() => selectAndNext('fuel', fuel.id)}
            className={`
              p-6 rounded-2xl border flex flex-col items-center gap-4 transition-all duration-200
              ${data.fuel === fuel.id
                ? 'border-slate-900 bg-slate-900 text-white shadow-xl scale-[1.02] ring-4 ring-slate-100'
                : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'}
            `}
          >
            <div className={`p-4 rounded-full ${data.fuel === fuel.id ? 'bg-white/20' : fuel.color}`}>
              <fuel.icon size={28} />
            </div>
            <span className="font-bold text-lg">{fuel.label}</span>
          </button>
        ))}
      </div>
    </div>
  );

  const renderStep5_Category = () => (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold text-slate-900">Catégorie</h2>
        <p className="text-slate-500 text-lg">De quel système provient la pièce ?</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              updateData('partName', ''); 
              selectAndNext('category', cat.id);
            }}
            className={`
              p-4 rounded-2xl border flex flex-col items-center gap-3 text-center transition-all duration-200
              ${data.category === cat.id
                ? 'border-slate-900 bg-slate-900 text-white shadow-lg scale-[1.05] z-10 ring-2 ring-slate-100'
                : `bg-white hover:shadow-lg ${cat.border} border-opacity-40 hover:border-opacity-100 hover:-translate-y-1`}
            `}
          >
            <div className={`p-3 rounded-full ${data.category === cat.id ? 'bg-white/20 text-white' : cat.color}`}>
              <cat.icon size={26} />
            </div>
            <span className={`text-sm font-bold ${data.category === cat.id ? 'text-white' : 'text-slate-700'}`}>
              {cat.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );

  const renderStep6_PartName = () => {
    const categoryLabel = CATEGORIES.find(c => c.id === data.category)?.label || 'pièce';
    const suggestions = PARTS[data.category] || ['Kit complet', 'Capteur', 'Câble', 'Support', 'Filtre'];

    return (
      <div className="space-y-8 max-w-2xl mx-auto">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold text-slate-900">La Pièce</h2>
          <p className="text-slate-500 text-lg">Quelle pièce {categoryLabel.toLowerCase()} recherchez-vous ?</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {suggestions.map((part) => (
            <button
              key={part}
              onClick={() => selectAndNext('partName', part)}
              className={`
                px-4 py-4 rounded-xl border font-semibold text-sm transition-all
                ${data.partName === part
                  ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-slate-100'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'}
              `}
            >
              {part}
            </button>
          ))}
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-gray-50 text-slate-500 font-medium">Ou tapez le nom</span>
          </div>
        </div>

        <div className="flex gap-3">
          <Input 
            placeholder="Nom précis de la pièce..." 
            value={data.partName}
            onChange={(e) => updateData('partName', e.target.value)}
            className="h-12"
          />
          <Button onClick={handleNext} disabled={!data.partName} className="h-full px-8">OK</Button>
        </div>
      </div>
    );
  };

  const renderStep7_Position = () => (
    <div className="space-y-10 max-w-3xl mx-auto">
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold text-slate-900">Position</h2>
        <p className="text-slate-500 text-lg">Précisez l'emplacement pour éviter les erreurs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="font-bold text-slate-900 text-center uppercase tracking-wide text-sm">Avant / Arrière</h3>
          <div className="grid grid-cols-2 gap-3">
            {['Avant', 'Arrière'].map(pos => (
              <button
                key={pos}
                onClick={() => updateData('positionFR', pos)}
                className={`
                  py-4 rounded-xl border font-bold transition-all
                  ${data.positionFR === pos
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-slate-100'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'}
                `}
              >
                {pos}
              </button>
            ))}
            <button
               onClick={() => updateData('positionFR', 'Les deux')}
               className={`col-span-2 py-3 rounded-xl border text-sm font-medium ${data.positionFR === 'Les deux' ? 'bg-slate-100 border-slate-400 text-slate-900' : 'border-transparent bg-white/50 text-slate-400 hover:bg-white'}`}
            >
               Non concerné / Les deux
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-slate-900 text-center uppercase tracking-wide text-sm">Gauche / Droite</h3>
          <div className="grid grid-cols-2 gap-3">
            {['Gauche', 'Droit'].map(pos => (
              <button
                key={pos}
                onClick={() => updateData('positionLR', pos)}
                className={`
                  py-4 rounded-xl border font-bold transition-all
                  ${data.positionLR === pos
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-slate-100'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'}
                `}
              >
                {pos}
              </button>
            ))}
             <button
               onClick={() => updateData('positionLR', 'Les deux')}
               className={`col-span-2 py-3 rounded-xl border text-sm font-medium ${data.positionLR === 'Les deux' ? 'bg-slate-100 border-slate-400 text-slate-900' : 'border-transparent bg-white/50 text-slate-400 hover:bg-white'}`}
            >
               Non concerné / Les deux
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center pt-6">
        <Button onClick={handleNext} size="lg" className="w-full sm:w-auto px-12">Valider la position</Button>
      </div>
    </div>
  );

  const renderStep8_Reference = () => (
    <div className="space-y-8 max-w-2xl mx-auto">
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold text-slate-900">Détails techniques</h2>
        <p className="text-slate-500 text-lg">Référence ou description.</p>
      </div>

      <div className="bg-blue-50 p-6 rounded-2xl flex gap-4 text-blue-800 text-sm border border-blue-100">
        <Info className="shrink-0 mt-0.5" size={20} />
        <p className="leading-relaxed"><strong>Astuce Pro :</strong> Si vous avez la référence gravée sur la pièce (numéro OEM), c'est la garantie d'une pièce 100% compatible.</p>
      </div>

      <div className="space-y-6">
        <Input 
          label="Référence (Facultatif)"
          placeholder="Ex: 8K0615301M"
          value={data.reference}
          onChange={(e) => updateData('reference', e.target.value)}
          icon={<Search size={18} />}
        />

        <Textarea 
          label="Description du problème ou de la pièce"
          placeholder="Ex: Mon amortisseur fuit, je cherche le modèle sport..."
          value={data.description}
          onChange={(e) => updateData('description', e.target.value)}
          rows={5}
        />
      </div>

      <div className="flex justify-end pt-4">
        <Button onClick={handleNext} size="lg">Continuer</Button>
      </div>
    </div>
  );

  const renderStep9_Photos = () => (
    <div className="space-y-8 text-center max-w-2xl mx-auto">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold text-slate-900">Photos</h2>
        <p className="text-slate-500 text-lg">Une image vaut 1000 mots.</p>
      </div>

      <div 
        onClick={() => updateData('photos', ['mock.jpg'])}
        className="border-3 border-dashed border-slate-300 rounded-3xl p-12 hover:bg-white hover:border-slate-500 hover:shadow-lg transition-all cursor-pointer group bg-white/50"
      >
        <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-sm">
          <Camera size={48} />
        </div>
        <h3 className="font-bold text-xl text-slate-900 mb-2">Ajouter des photos</h3>
        <p className="text-slate-500">JPG, PNG (Max 5Mo)</p>
      </div>

      {data.photos.length > 0 && (
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-100 text-green-700 rounded-full font-medium animate-in fade-in shadow-sm">
          <Check size={20} /> Photo ajoutée avec succès
        </div>
      )}

      <div className="flex justify-between items-center pt-8 border-t border-slate-200/50">
        <button onClick={handleNext} className="text-slate-400 hover:text-slate-700 font-medium transition-colors">Je n'ai pas de photo</button>
        <Button onClick={handleNext} size="lg">Continuer</Button>
      </div>
    </div>
  );

  const renderStep10_Problems = () => (
    <div className="space-y-8 max-w-2xl mx-auto">
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold text-slate-900">Diagnostic</h2>
        <p className="text-slate-500 text-lg">Quel est le problème constaté ?</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {PROBLEMS.map((prob) => {
          const active = data.problems.includes(prob.id);
          return (
            <button
              key={prob.id}
              onClick={() => {
                 const newProbs = active ? data.problems.filter(p => p !== prob.id) : [...data.problems, prob.id];
                 updateData('problems', newProbs);
              }}
              className={`
                p-5 rounded-xl border flex items-center gap-4 transition-all text-left
                ${active
                  ? 'border-slate-900 bg-slate-900 text-white shadow-lg transform scale-[1.02] ring-2 ring-slate-100'
                  : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:border-slate-300'}
              `}
            >
              <div className={`w-6 h-6 rounded flex items-center justify-center border ${active ? 'bg-white border-white text-slate-900' : 'bg-slate-100 border-slate-300'}`}>
                {active && <Check size={16} />}
              </div>
              <span className="font-bold">{prob.label}</span>
            </button>
          );
        })}
      </div>

      <div className="flex justify-end pt-6">
        <Button onClick={handleNext} size="lg">Valider</Button>
      </div>
    </div>
  );

  const renderStep11_Contact = () => (
    <div className="space-y-8 max-w-2xl mx-auto">
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold text-slate-900">Vos coordonnées</h2>
        <p className="text-slate-500 text-lg">Pour vous envoyer le devis (sans spam).</p>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input label="Prénom" placeholder="Jean" value={data.firstName} onChange={e => updateData('firstName', e.target.value)} icon={<User size={18}/>} />
          <Input label="Nom" placeholder="Dupont" value={data.lastName} onChange={e => updateData('lastName', e.target.value)} icon={<User size={18}/>} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input label="Téléphone (WhatsApp)" placeholder="+224 ..." value={data.phone} onChange={e => updateData('phone', e.target.value)} icon={<Phone size={18}/>} />
          <Input label="Email" placeholder="email@..." value={data.email} onChange={e => updateData('email', e.target.value)} icon={<Mail size={18}/>} />
        </div>
        
        <div className="space-y-3 pt-2">
           <label className="text-sm font-medium text-slate-700 block">Ville de livraison</label>
           <div className="flex flex-wrap gap-2">
              {GUINEA_CITIES.map(c => (
                 <button 
                    key={c} 
                    onClick={() => updateData('city', c)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${data.city === c ? 'bg-slate-900 text-white border-slate-900 shadow-md' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'}`}
                 >
                    {c}
                 </button>
              ))}
           </div>
        </div>
      </div>
      
      <div className="flex justify-end">
         <Button onClick={handleNext} disabled={!data.phone || !data.firstName} size="lg" className="w-full sm:w-auto px-10">Voir le récapitulatif</Button>
      </div>
    </div>
  );

  const renderStep12_Summary = () => (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold text-slate-900">Vérification</h2>
        <p className="text-slate-500 text-lg">Tout est correct ?</p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden divide-y divide-slate-100">
         {/* Vehicle Header */}
         <div className="bg-slate-900 p-8 text-white flex justify-between items-center">
            <div className="flex items-center gap-5">
               <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm"><Car size={32}/></div>
               <div>
                  <h3 className="font-bold text-xl">{data.brand} {data.model}</h3>
                  <div className="flex gap-3 text-slate-300 text-sm mt-1">
                    <span className="bg-white/10 px-2 py-0.5 rounded">{data.year}</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded capitalize">{data.fuel}</span>
                  </div>
               </div>
            </div>
            <button onClick={() => setStep(1)} className="text-xs font-bold bg-white text-slate-900 px-4 py-2 rounded-full hover:bg-slate-100 transition-colors">Modifier</button>
         </div>

         {/* Part Details */}
         <div className="p-8 space-y-6">
            <div className="flex justify-between items-start">
               <div>
                 <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Pièce demandée</span>
                 <h4 className="font-bold text-2xl text-slate-900 mt-1 flex items-center gap-2">{data.partName}</h4>
               </div>
               <button onClick={() => setStep(6)} className="text-sm font-medium text-slate-500 underline hover:text-slate-900">Modifier</button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                    <span className="text-xs text-slate-400 font-bold uppercase">Catégorie</span>
                    <p className="font-semibold text-slate-900">{CATEGORIES.find(c => c.id === data.category)?.label}</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                    <span className="text-xs text-slate-400 font-bold uppercase">Position</span>
                    <p className="font-semibold text-slate-900">{data.positionFR || '-'} / {data.positionLR || '-'}</p>
                </div>
            </div>
            
            {data.description && (
                <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 text-blue-900 text-sm">
                    <span className="font-bold block mb-1">Note :</span>
                    "{data.description}"
                </div>
            )}
         </div>

         {/* Contact */}
         <div className="p-8 bg-slate-50/80">
             <div className="flex justify-between items-start mb-4">
               <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Contact</span>
                  <h4 className="font-bold text-lg text-slate-900 mt-1 flex items-center gap-2">{data.firstName} {data.lastName}</h4>
               </div>
               <button onClick={() => setStep(11)} className="text-sm font-medium text-slate-500 underline hover:text-slate-900">Modifier</button>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-center gap-3 text-slate-600">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-slate-200"><Phone size={14}/></div>
                    {data.phone}
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-slate-200"><MapPin size={14}/></div>
                    {data.city}
                </div>
            </div>
         </div>
      </div>
      
      <div className="flex flex-col gap-6 pt-6">
         <Button size="lg" className="w-full text-lg h-16 shadow-2xl shadow-slate-900/20 rounded-2xl" onClick={handleNext}>
            Procéder au paiement (Simulation)
         </Button>
         <p className="text-center text-xs text-slate-400 flex items-center justify-center gap-2">
            <ShieldCheck size={14} className="text-green-500"/> Vos données sont chiffrées et ne seront pas partagées.
         </p>
      </div>
    </div>
  );

  // --- NEW STEP 13: PAYMENT ---
  const renderStep13_Payment = () => (
    <div className="space-y-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-right-8 duration-500">
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold text-slate-900">Paiement</h2>
        <p className="text-slate-500 text-lg">Finalisez votre demande pour lancer la recherche.</p>
      </div>

      <div className="grid md:grid-cols-5 gap-8">
         {/* Order Summary Side */}
         <div className="md:col-span-2 bg-slate-50 p-6 rounded-3xl border border-slate-200 h-fit">
            <h3 className="font-bold text-slate-900 mb-4">Votre Commande</h3>
            <div className="space-y-3 text-sm border-b border-slate-200 pb-4 mb-4">
               <div className="flex justify-between">
                  <span className="text-slate-500">{data.partName}</span>
                  <span className="font-medium text-slate-900">~150 $CA</span>
               </div>
               <div className="flex justify-between">
                  <span className="text-slate-500">Frais de dossier</span>
                  <span className="font-medium text-slate-900">25 $CA</span>
               </div>
            </div>
            <div className="flex justify-between items-center">
               <span className="font-bold text-slate-900">Total estimé</span>
               <span className="font-bold text-xl text-slate-900">175 $CA</span>
            </div>
            <p className="text-xs text-slate-400 mt-4 leading-relaxed">
               *Ceci est une empreinte bancaire. Vous ne serez débité qu'après validation du devis final par nos experts.
            </p>
         </div>

         {/* Card Form Side */}
         <div className="md:col-span-3 bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
            <div className="flex items-center justify-between mb-6">
               <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                  <CreditCard size={20}/> Carte Bancaire
               </h3>
               <div className="flex gap-2">
                  <div className="h-6 w-10 bg-slate-100 rounded flex items-center justify-center text-[10px] font-bold text-slate-400">VISA</div>
                  <div className="h-6 w-10 bg-slate-100 rounded flex items-center justify-center text-[10px] font-bold text-slate-400">MC</div>
               </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
               <Input label="Titulaire de la carte" placeholder="M. Jean Dupont" />
               <Input label="Numéro de carte" placeholder="0000 0000 0000 0000" icon={<Lock size={16}/>} />
               <div className="grid grid-cols-2 gap-4">
                  <Input label="Expiration" placeholder="MM/AA" />
                  <Input label="CVC" placeholder="123" />
               </div>

               <div className="pt-4">
                  <Button 
                     type="submit" 
                     className="w-full h-14 text-lg rounded-xl shadow-lg shadow-brand-500/20" 
                     isLoading={isSubmitting}
                  >
                     Payer & Envoyer la demande
                  </Button>
               </div>
               <div className="flex justify-center items-center gap-2 text-xs text-slate-400">
                  <Lock size={12}/> Paiement sécurisé SSL 256-bit
               </div>
            </form>
         </div>
      </div>
    </div>
  );

  if (isSuccess) {
     return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
           <div className="max-w-md w-full bg-white p-12 rounded-[2rem] shadow-2xl text-center animate-in zoom-in duration-300 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-emerald-600"></div>
              <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
                 <Check size={48} strokeWidth={3} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Demande Envoyée !</h2>
              <p className="text-slate-500 mb-10 text-lg leading-relaxed">
                 Merci {data.firstName}. Votre pré-autorisation de paiement est validée. Nos experts à Montréal traitent votre demande et vous contacteront sous 24h.
              </p>
              <Button size="lg" className="w-full h-14 text-lg rounded-xl" onClick={() => window.location.href = '/'}>Retour à l'accueil</Button>
           </div>
        </div>
     );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans pb-32">
      
      {/* --- PROGRESS BAR (Inline now) --- */}
      <div className="max-w-3xl mx-auto w-full pt-28 pb-6 px-6">
         <div className="flex justify-between items-end mb-2">
            <div className="flex flex-col">
               <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Étape {step} / {totalSteps}</span>
            </div>
            <span className="text-xs font-bold text-slate-900">{Math.round((step / totalSteps) * 100)}%</span>
         </div>
         <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
            <div 
               className="h-full bg-slate-900 transition-all duration-500 ease-out rounded-full" 
               style={{ width: `${(step / totalSteps) * 100}%` }}
            ></div>
         </div>
      </div>

      {/* Content */}
      <main className="flex-grow px-4 sm:px-6">
         <div className="max-w-3xl mx-auto">
            <div className={`transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-${direction === 'forward' ? 'right' : 'left'}-8`}>
               {step === 1 && renderStep1_Brand()}
               {step === 2 && renderStep2_Model()}
               {step === 3 && renderStep3_Year()}
               {step === 4 && renderStep4_Fuel()}
               {step === 5 && renderStep5_Category()}
               {step === 6 && renderStep6_PartName()}
               {step === 7 && renderStep7_Position()}
               {step === 8 && renderStep8_Reference()}
               {step === 9 && renderStep9_Photos()}
               {step === 10 && renderStep10_Problems()}
               {step === 11 && renderStep11_Contact()}
               {step === 12 && renderStep12_Summary()}
               {step === 13 && renderStep13_Payment()}
            </div>
         </div>
      </main>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-md border-t border-slate-200 p-4 z-50">
         <div className="max-w-3xl mx-auto flex items-center justify-between px-2">
               <Button 
                  variant="ghost"
                  onClick={handleBack}
                  disabled={step === 1}
                  className={`text-slate-500 font-bold hover:bg-slate-50 hover:text-slate-900 transition-all px-6 h-12 rounded-xl ${step === 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
               >
                  <ArrowLeft size={20} className="mr-2"/> Précédent
               </Button>
               
               {/* Invisible spacer or Next button placeholder if we ever want it here */}
               <div className="w-10"></div>
         </div>
      </div>
    </div>
  );
};