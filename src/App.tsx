import { useState } from 'react';
import { ActiveTab } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPreview from './components/AboutPreview';
import ServicesBento from './components/ServicesBento';
import PortfolioDisplay from './components/PortfolioDisplay';
import SectorsOfWork from './components/SectorsOfWork';
import ContactFormAndMap from './components/ContactFormAndMap';
import SEOManager from './components/SEOManager';
import { Sparkles, Pin } from 'lucide-react';
import heroBgImg from '../assets/hero-bg.jpeg';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [prefillDescription, setPrefillDescription] = useState<string>('');

  // Handles quote request by routing directly to contact
  const handleQuoteRedirect = (serviceDescription?: string) => {
    if (serviceDescription) {
      setPrefillDescription(serviceDescription);
    } else {
      setPrefillDescription('I would like to request an official quotation for brand-new custom branding / maintenance projects. Please set up a surveyor consultation.');
    }
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigates and loads prefilled calculator specs from subcomponents
  const handleIntegrationSelection = (tab: ActiveTab, prefillContent: string) => {
    setPrefillDescription(prefillContent);
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dynamic Metadata & Structured Schema Strategy for React Tab Routing
  const seoConfig = {
    home: {
      title: "Pro Graphics Building Maintenance | Premium Signage & Facility Care UAE",
      description: "Pro Graphics Building Maintenance is UAE's premier coordinator for premium architectural signage, 3D letters signboards, vehicle fleet wraps, and buildings maintenance services.",
      keywords: "Pro Graphics Building Maintenance, Pro Graphics, Pro Graphics UAE, Building Maintenance UAE, Property Maintenance, Commercial Maintenance, Signage Company Abu Dhabi, Vehicle Branding",
      path: "",
      schema: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Pro Graphics Building Maintenance",
        "url": "https://prographics.onrender.com"
      }
    },
    services: {
      title: "Signage Installation & Building Maintenance Services | Pro Graphics",
      description: "Explore our expert branding and maintenance capabilities: indoor & outdoor signage solutions, custom LED boards, 3D letters fabrication, and vehicle wraps.",
      keywords: "Signage Installation, Signage Solutions, Digital Signage, Indoor Signage, Outdoor Signage, Printing Services, Vehicle Branding, Shop Branding, Corporate Branding",
      path: "/services",
      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Signage & Property Maintenance Services",
        "serviceType": "Signage Installation, Building Maintenance, Fleet Wrapping",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Pro Graphics Building Maintenance"
        },
        "areaServed": ["Abu Dhabi", "Dubai", "Sharjah", "UAE"],
        "description": "Premium commercial building maintenance, wayfinding signage installation, fleet wrap branding, and laser formatting services."
      }
    },
    portfolio: {
      title: "Branding Showcase & Maintenance Portfolio | Pro Graphics",
      description: "View our completed signage and building maintenance projects: illuminated neon signs, vehicle fleet wraps, and structural building restoration work in Abu Dhabi.",
      keywords: "Branding Solutions, Marketing Materials, Graphic Design Services, Wayfinding Signage, Abu Dhabi, Dubai, Signage Company UAE",
      path: "/portfolio",
      schema: {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": "Branding & Signage Projects Portfolio",
        "creator": {
          "@type": "LocalBusiness",
          "name": "Pro Graphics Building Maintenance"
        },
        "description": "Showcase of premium illuminated signs, vehicle branding, and structural building restoration work in Abu Dhabi."
      }
    },
    sectors: {
      title: "Corporate, Retail & Hospitality Signage Sectors | Pro Graphics",
      description: "Custom wayfinding systems and structural maintenance solutions tailored for corporate developers, retail shopping malls, and hospitality suites in Abu Dhabi.",
      keywords: "Corporate Branding, Retail Developments, Hospitality Suites, Abu Dhabi Operational Focus",
      path: "/sectors",
      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Specialized Sector Branding & Signage Solutions",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Pro Graphics Building Maintenance"
        },
        "description": "Targeted architectural branding integrations for corporate developers, retail hubs, and hospitality groups."
      }
    },
    contact: {
      title: "Contact Surveyor | Pro Graphics Building Maintenance Abu Dhabi",
      description: "Brief our Musaffah industrial hub engineers. Request corporate site signage surveys, maintenance consultations, and official project quotations.",
      keywords: "Building Maintenance UAE, Signage Company UAE, Marketing Agency UAE, Abu Dhabi HQ Contact",
      path: "/contact",
      schema: {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Pro Graphics Building Maintenance",
        "description": "Request official signage surveys, maintenance consultations, and project quotes in Abu Dhabi.",
        "url": "https://prographics.onrender.com/contact"
      }
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-brand-primary flex flex-col justify-between font-sans selection:bg-brand-orange/35 selection:text-brand-primary">
      {/* Dynamic SEO Tag & Schema Injected in Browser Head */}
      <SEOManager {...seoConfig[activeTab]} />

      {/* Top Header Navigation Block */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onRequestQuote={() => handleQuoteRedirect()}
      />

      {/* Main Body Routing Router */}
      <main className="flex-grow pt-20">
        {activeTab === 'home' && (
          <div className="space-y-0">
            {/* High-Impact Hero Slat Banner Section */}
            <section className="relative min-h-[480px] md:min-h-[580px] flex items-start pt-24 md:pt-36 select-none overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img
                  alt="A high-end corporate lobby showcasing premium dimensional sign installation with crisp morning lights casting sharp patterns"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-[8000ms] hover:scale-105"
                  src={heroBgImg}
                />
                <div className="absolute inset-0 hero-gradient" />
              </div>

              {/* Dynamic text pane */}
              <div className="relative z-10 w-full px-6 md:px-12 max-w-7xl mx-auto text-white space-y-8 py-6">
                <div className=" -mt-20 max-w-3xl space-y-6">
                  {/* Floating Micro Label */}
                  <div className="inline-flex items-center gap-1.5 bg-brand-orange text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg border border-white/10">
                    <Sparkles size={11} />
                    UAE's Premier Branding Coordinator
                  </div>

                  <h1 className="-mt-3 font-headline text-3.5xl sm:text-5xl lg:text-5.5xl font-extrabold tracking-tight leading-tight">
                    Pro Graphics Building Maintenance
                  </h1>
                  <span className="block font-headline text-xl sm:text-2xl lg:text-3xl font-bold text-brand-orange leading-tight">
                    Transforming Spaces with Premium Signage &amp; Graphics
                  </span>
                  <p className="font-sans text-sm sm:text-base text-zinc-300 leading-normal max-w-xl">
                    Abu Dhabi's Trusted Partner for Architectural Signage, Wayfinding Systems, Vehicle Fleet Wraps, and Clean Structural Maintenance Services.
                  </p>
                </div>

                {/* Primary CTA Blocks */}
                <div className="flex flex-col sm:flex-row gap-4 max-w-md pt-2">
                  <button
                    onClick={() => handleQuoteRedirect()}
                    className="bg-brand-orange text-white hover:bg-brand-rust font-headline text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full shadow-lg transition-all active:scale-95 duration-200 cursor-pointer"
                  >
                    Request a Quote
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab('portfolio');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="bg-transparent border border-white/20 text-white font-headline text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full hover:bg-white/10 transition-all active:scale-95 duration-200 cursor-pointer"
                  >
                    View Portfolio
                  </button>
                </div>
              </div>

              {/* Location Indicator Label Slat */}
              <div className="absolute bottom-6 right-6 md:right-12 bg-black/85 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg text-white/95 text-[11px] font-sans z-10 flex items-center gap-2 max-w-[280px]">
                <Pin size={12} className="text-brand-orange shrink-0" />
                <span className="truncate">Musaffah Industrial Hub • Abu Dhabi</span>
              </div>
            </section>

            {/* Metric Blocks / About Us Narrative on Home view */}
            <AboutPreview onLearnMore={() => setActiveTab('services')} />
          </div>
        )}

        {activeTab === 'services' && (
          <ServicesBento onSelectorClick={handleIntegrationSelection} />
        )}

        {activeTab === 'portfolio' && (
          <PortfolioDisplay />
        )}

        {activeTab === 'sectors' && (
          <SectorsOfWork />
        )}

        {activeTab === 'contact' && (
          <ContactFormAndMap
            prefillDescription={prefillDescription}
            setPrefillDescription={setPrefillDescription}
          />
        )}
      </main>

      {/* Global Comprehensive Footer Component */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
