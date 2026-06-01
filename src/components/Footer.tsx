import { Globe, Mail, MapPin } from 'lucide-react';
import { ActiveTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const handleLinkClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark text-white border-t border-white/5">
      {/* Primary Footer Slat */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <span className="font-headline text-2xl font-bold tracking-tight">
            Pro <span className="text-brand-orange">Graphics</span>
          </span>
          <p className="font-sans text-sm text-slate-400 leading-relaxed max-w-xs">
            Premium architectural branding, signage configurations, and buildings maintenance solutions engineered for visionary UAE enterprises.
          </p>
          <div className="flex gap-3 mt-2">
            <span className="w-10 h-10 rounded bg-[#0A0A0A] border border-white/5 flex items-center justify-center text-slate-400 hover:text-brand-orange hover:border-brand-orange transition-all duration-300 pointer-events-none">
              <Globe size={18} />
            </span>
            <span className="w-10 h-10 rounded bg-[#0A0A0A] border border-white/5 flex items-center justify-center text-slate-400 hover:text-brand-orange hover:border-brand-orange transition-all duration-300 pointer-events-none">
              <Mail size={18} />
            </span>
          </div>
        </div>

        {/* Column 2: Services Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-headline text-xs font-semibold tracking-wider text-slate-200 uppercase">
            Services
          </h4>
          <ul className="flex flex-col gap-3 font-sans text-sm text-slate-400">
            <li>
              <button
                onClick={() => handleLinkClick('services')}
                className="hover:text-brand-orange transition-colors text-left"
              >
                Signage Solutions
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick('services')}
                className="hover:text-brand-orange transition-colors text-left"
              >
                Vehicle Fleet Branding
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick('services')}
                className="hover:text-brand-orange transition-colors text-left"
              >
                Exhibition Custom Stands
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div className="flex flex-col gap-4">
          <h4 className="font-headline text-xs font-semibold tracking-wider text-slate-200 uppercase">
            Company
          </h4>
          <ul className="flex flex-col gap-3 font-sans text-sm text-slate-400">
            <li>
              <button
                onClick={() => handleLinkClick('services')}
                className="hover:text-brand-orange transition-colors text-left"
              >
                Large Format Printing
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick('services')}
                className="hover:text-brand-orange transition-colors text-left"
              >
                Maintenance & Restoration
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick('contact')}
                className="hover:text-brand-orange transition-colors text-left"
              >
                Work with Us / Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Location Info */}
        <div className="flex flex-col gap-4">
          <h4 className="font-headline text-xs font-semibold tracking-wider text-slate-200 uppercase">
            Headquarters
          </h4>
          <div className="flex items-start gap-3 font-sans text-sm text-slate-400">
            <MapPin size={18} className="text-brand-orange shrink-0 mt-0.5" />
            <p>
              Musaffah Industrial Area<br />
              Abu Dhabi, United Arab Emirates
            </p>
          </div>
          <div className="flex items-center gap-3 font-sans text-sm text-slate-400">
            <Mail size={16} className="text-brand-orange shrink-0" />
            <a href="mailto:info@prographics.ae" className="hover:text-brand-orange transition-colors">
              info@prographics.ae
            </a>
          </div>
        </div>
      </div>

      {/* Sub Footer Border */}
      <div className="border-t border-white/5 py-8 text-center px-6">
        <p className="font-sans text-xs text-slate-500">
          © 2026 Pro Graphics Buildings Maintenance. All rights reserved. Registered under Trade License Abu Dhabi, UAE.
        </p>
      </div>
    </footer>
  );
}
