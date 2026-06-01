import { Menu, X } from 'lucide-react';
import { ActiveTab } from '../types';
import { useState, useEffect } from 'react';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onRequestQuote: () => void;
}

export default function Header({ activeTab, setActiveTab, onRequestQuote }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; value: ActiveTab }[] = [
    { label: 'Services', value: 'services' },
    { label: 'Portfolio', value: 'portfolio' },
    { label: 'About Us', value: 'home' }, // 'About Us' section resides primarily on the Home page preview
    { label: 'Sectors', value: 'sectors' },
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
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/5 shadow-2xl py-4'
            : 'bg-[#0A0A0A]/80 backdrop-blur-sm border-b border-white/5 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="font-serif text-2xl font-semibold tracking-tight transition-colors duration-300 flex items-center gap-2 text-white"
          >
            Pro <span className="text-brand-orange font-headline text-sm font-bold uppercase tracking-wider select-none bg-brand-orange/10 px-2 py-1 rounded border border-brand-orange/20">Graphics</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => {
              const isActive = activeTab === item.value;
              return (
                <button
                  key={item.value}
                  onClick={() => handleNavClick(item.value)}
                  className={`font-headline text-[11px] font-bold tracking-widest uppercase transition-colors duration-205 relative py-1 hover:text-brand-orange ${
                    isActive
                      ? 'text-brand-orange'
                      : 'text-zinc-300'
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
              className="bg-brand-orange text-black font-headline text-[10px] font-bold uppercase tracking-wider px-6 py-3 rounded-full shadow-md hover:bg-brand-rust hover:text-white active:scale-95 transition-all duration-200"
            >
              Request a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded transition-colors text-white hover:bg-white/5"
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
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#0D0D0D] border-l border-white/5 text-white z-50 p-8 shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="space-y-8">
          <div className="flex justify-between items-center border-b border-slate-800 pb-5">
            <span className="font-headline text-xl font-bold">Pro Graphics</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-6">
            {navItems.map((item) => {
              const isActive = activeTab === item.value;
              return (
                <button
                  key={item.value}
                  onClick={() => handleNavClick(item.value)}
                  className={`font-headline text-left text-lg font-semibold tracking-wide uppercase transition-colors py-1 ${
                    isActive ? 'text-brand-orange' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="pt-6 border-t border-slate-850">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onRequestQuote();
            }}
            className="w-full bg-brand-orange text-white text-center font-headline font-bold uppercase tracking-wider py-4 rounded-lg shadow-lg hover:bg-brand-rust transition-colors duration-200"
          >
            Request a Quote
          </button>
          <p className="text-xs text-slate-500 text-center mt-4">Abu Dhabi, United Arab Emirates</p>
        </div>
      </div>
    </>
  );
}
