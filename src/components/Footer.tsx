import { Globe, Mail, MapPin } from 'lucide-react';
import { ActiveTab } from '../types';
import logoImg from '../../assets/logo 4.jpeg';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const handleLinkClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-surface text-brand-primary border-t border-brand-light-gray">
      {/* Primary Footer Slat */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Pro Graphics Logo" className="h-16 w-auto rounded object-contain border border-brand-light-gray shadow-sm bg-white" />
          </div>
          <p className="font-sans text-sm text-brand-gray leading-relaxed max-w-xs">
            Premium architectural branding, signage configurations, and buildings maintenance solutions engineered for visionary UAE enterprises.
          </p>
          <div className="flex gap-3 mt-2">
            <span className="w-10 h-10 rounded bg-brand-surface border border-brand-light-gray flex items-center justify-center text-brand-gray hover:text-brand-orange hover:border-brand-orange transition-all duration-305 pointer-events-none">
              <Globe size={18} />
            </span>
            <span className="w-10 h-10 rounded bg-brand-surface border border-brand-light-gray flex items-center justify-center text-brand-gray hover:text-brand-orange hover:border-brand-orange transition-all duration-305 pointer-events-none">
              <Mail size={18} />
            </span>
          </div>
        </div>

        {/* Column 2: Services Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-headline text-xs font-semibold tracking-wider text-brand-primary uppercase">
            Services
          </h4>
          <ul className="flex flex-col gap-3 font-sans text-sm text-brand-gray">
            <li>
              <button
                onClick={() => handleLinkClick('services')}
                className="hover:text-brand-orange transition-colors text-left cursor-pointer"
              >
                Signage Solutions
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick('services')}
                className="hover:text-brand-orange transition-colors text-left cursor-pointer"
              >
                Vehicle Fleet Branding
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick('services')}
                className="hover:text-brand-orange transition-colors text-left cursor-pointer"
              >
                Exhibition Custom Stands
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div className="flex flex-col gap-4">
          <h4 className="font-headline text-xs font-semibold tracking-wider text-brand-primary uppercase">
            Company
          </h4>
          <ul className="flex flex-col gap-3 font-sans text-sm text-brand-gray">
            <li>
              <button
                onClick={() => handleLinkClick('services')}
                className="hover:text-brand-orange transition-colors text-left cursor-pointer"
              >
                Large Format Printing
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick('services')}
                className="hover:text-brand-orange transition-colors text-left cursor-pointer"
              >
                Maintenance & Restoration
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick('contact')}
                className="hover:text-brand-orange transition-colors text-left cursor-pointer"
              >
                Work with Us / Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Location Info */}
        <div className="flex flex-col gap-4">
          <h4 className="font-headline text-xs font-semibold tracking-wider text-brand-primary uppercase">
            Headquarters
          </h4>
          <div className="flex items-start gap-3 font-sans text-sm text-brand-gray">
            <MapPin size={18} className="text-brand-orange shrink-0 mt-0.5" />
            <p>
              Musaffah Industrial Area<br />
              Abu Dhabi, United Arab Emirates
            </p>
          </div>
          <div className="flex items-center gap-3 font-sans text-sm text-brand-gray">
            <Mail size={16} className="text-brand-orange shrink-0" />
            <a href="mailto:info@prographics.ae" className="hover:text-brand-orange transition-colors">
              info@prographics.ae
            </a>
          </div>
        </div>
      </div>

      {/* Sub Footer Border */}
      <div className="border-t border-brand-light-gray py-8 text-center px-6">
        <p className="font-sans text-xs text-brand-gray/65">
          © 2026 Pro Graphics Buildings Maintenance. All rights reserved. Registered under Trade License Abu Dhabi, UAE.
        </p>
      </div>
    </footer>
  );
}
