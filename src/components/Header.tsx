import { Menu, X } from 'lucide-react';
import { ActiveTab } from '../types';
import { useState, useEffect } from 'react';
import logoImg from '../../assets/logo 4.jpeg';
import { STATIC_SERVICE_CATEGORIES } from '../data';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  selectedServiceCategory: string | null;
  setSelectedServiceCategory: (category: string | null) => void;
  onRequestQuote: () => void;
}

export default function Header({
  activeTab,
  setActiveTab,
  selectedServiceCategory,
  setSelectedServiceCategory,
  onRequestQuote
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; value: ActiveTab }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Services', value: 'services' },
    { label: 'Portfolio', value: 'portfolio' },
    { label: 'About', value: 'about' },
    { label: 'Contact', value: 'contact' }
  ];

  const handleNavClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-brand-surface/95 backdrop-blur-md border-b border-brand-light-gray shadow-lg py-4'
            : 'bg-brand-surface/80 backdrop-blur-sm border-b border-brand-light-gray/50 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 transition-colors duration-300 cursor-pointer text-brand-primary"
          >
            <img src={logoImg} alt="Pro Graphics Logo" className="h-14 w-auto rounded object-contain border border-brand-light-gray shadow-sm" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => {
              const isActive = activeTab === item.value;
              if (item.value === 'services') {
                return (
                  <div key={item.value} className="relative group py-4">
                    <button
                      onClick={() => {
                        setSelectedServiceCategory(null);
                        handleNavClick('services');
                      }}
                      className={`font-headline text-[11px] font-bold tracking-widest uppercase transition-colors duration-205 relative py-1 hover:text-brand-orange cursor-pointer flex items-center gap-1 ${
                        isActive ? 'text-brand-orange' : 'text-brand-gray'
                      }`}
                    >
                      {item.label} ▾
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-brand-orange transition-all duration-300" />
                      )}
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 bg-brand-surface/95 backdrop-blur-md border border-brand-light-gray border-t-2 border-t-brand-orange min-w-[280px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 -translate-y-2 transition-all duration-200 z-50 rounded-b-lg shadow-2xl py-2">
                      {STATIC_SERVICE_CATEGORIES.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => {
                            setSelectedServiceCategory(cat.id);
                            setActiveTab('services');
                            setMobileMenuOpen(false);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="w-full text-left flex items-center gap-3 px-5 py-3 text-xs uppercase tracking-wider font-headline font-semibold text-brand-gray hover:text-brand-orange hover:bg-brand-orange/10 hover:pl-7 transition-all duration-200 cursor-pointer border-b border-brand-light-gray/30 last:border-b-0"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                          {cat.title}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <button
                  key={item.value}
                  onClick={() => {
                    if (item.value === 'home') {
                      setSelectedServiceCategory(null);
                    }
                    handleNavClick(item.value);
                  }}
                  className={`font-headline text-[11px] font-bold tracking-widest uppercase transition-colors duration-205 relative py-1 hover:text-brand-orange cursor-pointer ${
                    isActive ? 'text-brand-orange' : 'text-brand-gray'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-brand-orange transition-all duration-300" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={onRequestQuote}
              className="bg-brand-orange text-white font-headline text-[10px] font-bold uppercase tracking-wider px-6 py-3 rounded-full shadow-md hover:bg-brand-rust active:scale-95 transition-all duration-205 cursor-pointer"
            >
              Request a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded transition-colors text-brand-primary hover:bg-brand-surface cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm md:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-brand-surface border-l border-brand-light-gray text-brand-primary z-50 p-8 shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="space-y-8">
          <div className="flex justify-between items-center border-b border-brand-light-gray pb-5">
            <div className="flex items-center gap-2">
              <img src={logoImg} alt="Pro Graphics Logo" className="h-12 w-auto rounded object-contain border border-brand-light-gray/80" />
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1 hover:bg-brand-dark rounded text-brand-gray hover:text-brand-primary transition-colors cursor-pointer"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-6">
            {navItems.map((item) => {
              const isActive = activeTab === item.value;
              if (item.value === 'services') {
                return (
                  <div key={item.value} className="flex flex-col gap-2">
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={`font-headline text-left text-lg font-semibold tracking-wide uppercase transition-colors py-1 cursor-pointer flex justify-between items-center w-full ${
                        isActive ? 'text-brand-orange' : 'text-brand-gray hover:text-brand-primary'
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className={`text-xs transform transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}>▼</span>
                    </button>
                    
                    {/* Collapsible Mobile List */}
                    <div className={`overflow-hidden transition-all duration-300 flex flex-col gap-2.5 pl-4 border-l border-brand-light-gray ${
                      mobileServicesOpen ? 'max-h-[350px] opacity-100 mt-2 mb-4' : 'max-h-0 opacity-0'
                    }`}>
                      <button
                        onClick={() => {
                          setSelectedServiceCategory(null);
                          handleNavClick('services');
                        }}
                        className="text-left text-sm font-sans font-medium text-brand-gray hover:text-brand-primary py-1 cursor-pointer"
                      >
                        All Services Overview
                      </button>
                      {STATIC_SERVICE_CATEGORIES.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => {
                            setSelectedServiceCategory(cat.id);
                            handleNavClick('services');
                          }}
                          className={`text-left text-sm font-sans font-medium py-1 cursor-pointer transition-colors ${
                            selectedServiceCategory === cat.id ? 'text-brand-orange font-semibold' : 'text-brand-gray hover:text-brand-primary'
                          }`}
                        >
                          • {cat.title}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <button
                  key={item.value}
                  onClick={() => {
                    if (item.value === 'home') {
                      setSelectedServiceCategory(null);
                    }
                    handleNavClick(item.value);
                  }}
                  className={`font-headline text-left text-lg font-semibold tracking-wide uppercase transition-colors py-1 cursor-pointer ${
                    isActive ? 'text-brand-orange' : 'text-brand-gray hover:text-brand-primary'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="pt-6 border-t border-brand-light-gray">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onRequestQuote();
            }}
            className="w-full bg-brand-orange text-white text-center font-headline font-bold uppercase tracking-wider py-4 rounded-lg shadow-lg hover:bg-brand-rust transition-all duration-200 cursor-pointer"
          >
            Request a Quote
          </button>
          <p className="text-xs text-brand-gray/60 text-center mt-4">Abu Dhabi, United Arab Emirates</p>
        </div>
      </div>
    </>
  );
}
