import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from './ui/Button';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check if we are on the home page to handle transparent header logic
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Dynamic text color based on scroll and page
  const textColorClass = isHomePage && !isScrolled && !isMobileMenuOpen ? 'text-white' : 'text-slate-900';
  const navLinkClass = isHomePage && !isScrolled && !isMobileMenuOpen ? 'text-white/80 hover:text-white' : 'text-slate-600 hover:text-slate-900';

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled || isMobileMenuOpen 
            ? 'bg-white/95 backdrop-blur-md border-slate-200/50 shadow-sm py-2' 
            : 'bg-transparent border-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo Premium Automotive */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className={`relative w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${isHomePage && !isScrolled ? 'text-white' : 'text-slate-900'}`}>
                {/* Custom SVG Logo: Stylized Grille/Shield */}
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M20 4L4 10V20C4 28.5 10.5 35 20 38C29.5 35 36 28.5 36 20V10L20 4Z" fill="currentColor" fillOpacity="0.1"/>
                  <path d="M20 6L6 11V20C6 27.5 11.5 33 20 36C28.5 33 34 27.5 34 20V11L20 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 11V26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M13 16L20 20L27 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13 22L20 26L27 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex flex-col justify-center -space-y-1">
                <span className={`font-black text-xl tracking-tighter uppercase ${textColorClass}`}>
                  Auto<span className="font-light">Link</span>
                </span>
                <span className={`text-[0.6rem] font-bold tracking-[0.3em] uppercase opacity-70 ${textColorClass}`}>
                  Canada • Guinée
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className={`text-sm font-medium transition-colors ${navLinkClass}`}>Accueil</Link>
              <Link to="/tracking" className={`text-sm font-medium transition-colors ${navLinkClass}`}>Suivi</Link>
              <Link to="/about" className={`text-sm font-medium transition-colors ${navLinkClass}`}>À propos</Link>
              <Link to="/contact" className={`text-sm font-medium transition-colors ${navLinkClass}`}>Contact</Link>
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Link to="/request">
                <Button 
                  size="sm" 
                  className="rounded-full font-bold"
                  variant={isHomePage && !isScrolled ? "white" : "primary"}
                >
                  Demander une pièce <ChevronRight size={16} className="ml-1" />
                </Button>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 ${textColorClass}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute w-full bg-white border-b border-slate-200 shadow-xl animate-in slide-in-from-top-5 duration-200">
            <div className="px-4 py-6 space-y-4 flex flex-col">
              <Link to="/" className="text-lg font-medium text-slate-900">Accueil</Link>
              <Link to="/tracking" className="text-lg font-medium text-slate-900">Suivi de commande</Link>
              <Link to="/about" className="text-lg font-medium text-slate-900">À propos</Link>
              <Link to="/contact" className="text-lg font-medium text-slate-900">Contact</Link>
              <div className="pt-4 border-t border-slate-100">
                <Link to="/request" className="w-full">
                  <Button className="w-full justify-center">Demander une pièce</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              {/* Footer Logo */}
              <div className="flex items-center gap-2">
                 <div className="w-8 h-8 text-slate-900">
                    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                       <path d="M20 4L4 10V20C4 28.5 10.5 35 20 38C29.5 35 36 28.5 36 20V10L20 4Z" fill="currentColor" fillOpacity="0.1"/>
                       <path d="M20 6L6 11V20C6 27.5 11.5 33 20 36C28.5 33 34 27.5 34 20V11L20 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                 </div>
                 <span className="font-bold text-lg text-slate-900 tracking-tight uppercase">AutoLink</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Le pont de confiance entre le Canada et la Guinée pour vos pièces automobiles. Qualité garantie, logistique maîtrisée.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Services</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li><Link to="/request" className="hover:text-brand-600 transition-colors">Achat de pièces</Link></li>
                <li><Link to="/tracking" className="hover:text-brand-600 transition-colors">Suivi logistique</Link></li>
                <li><a href="#" className="hover:text-brand-600 transition-colors">Expédition véhicule</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Entreprise</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li><Link to="/about" className="hover:text-brand-600 transition-colors">À propos</Link></li>
                <li><Link to="/contact" className="hover:text-brand-600 transition-colors">Carrières</Link></li>
                <li><a href="#" className="hover:text-brand-600 transition-colors">Partenaires</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Contact</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>Montréal, QC, Canada</li>
                <li>Conakry, Guinée</li>
                <li>support@autolink.com</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">© 2024 AutoLink. Tous droits réservés.</p>
            <div className="flex gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-slate-600">Conditions</a>
              <a href="#" className="hover:text-slate-600">Confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};