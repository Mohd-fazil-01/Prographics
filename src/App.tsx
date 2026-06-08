import { useState, useEffect, useRef } from 'react';
import { ActiveTab } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPreview from './components/AboutPreview';
import ServicesBento from './components/ServicesBento';
import PortfolioDisplay from './components/PortfolioDisplay';
import ContactFormAndMap from './components/ContactFormAndMap';
import SEOManager from './components/SEOManager';
import FloatingActions from './components/FloatingActions';
import AboutDisplay from './components/AboutDisplay';
import { Sparkles, Pin } from 'lucide-react';
import heroBgImg from '../assets/portfolio images/hero-bg.jpeg';
import { STATIC_SERVICE_CATEGORIES } from './data';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [prefillDescription, setPrefillDescription] = useState<string>('');
  const [selectedServiceCategory, setSelectedServiceCategory] = useState<string | null>(null);

  const homeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Refresh ScrollTrigger when activeTab changes to ensure accurate trigger positions
    ScrollTrigger.refresh();
  }, [activeTab]);

  useEffect(() => {
    if (activeTab === 'home') {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo('.hero-bg',
          { scale: 1.15, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.6 }
        );

        tl.fromTo('.hero-badge',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=1.2'
        );

        tl.fromTo('.hero-title',
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.7'
        );

        tl.fromTo('.hero-subtitle',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.6'
        );

        tl.fromTo('.hero-text',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.5'
        );

        tl.fromTo('.hero-cta',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 },
          '-=0.4'
        );

        tl.fromTo('.hero-pin',
          { x: 30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8 },
          '-=0.6'
        );
      }, homeRef);

      return () => {
        ctx.revert();
      };
    }
  }, [activeTab]);

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
    about: {
      title: "About Us | Pro Graphics Building Maintenance Abu Dhabi",
      description: "Learn about Pro Graphics' journey in Musaffah, our engineering standards, safety compliance, and the team delivering UAE's premium architectural signage.",
      keywords: "Pro Graphics Building Maintenance, Signage Company Abu Dhabi, Wayfinding Systems UAE, CNC formatting Musaffah",
      path: "/about",
      schema: {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Pro Graphics Building Maintenance",
        "description": "Premium commercial building maintenance, wayfinding signage installation, fleet wrap branding, and laser formatting services provider.",
        "publisher": {
          "@type": "LocalBusiness",
          "name": "Pro Graphics Building Maintenance"
        }
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

  const getSeoConfig = () => {
    const baseConfig = seoConfig[activeTab];
    if (activeTab === 'services' && selectedServiceCategory) {
      const category = STATIC_SERVICE_CATEGORIES.find(c => c.id === selectedServiceCategory);
      if (category) {
        return {
          title: `${category.title} | Pro Graphics Building Maintenance UAE`,
          description: category.desc,
          keywords: `${category.title}, ${category.title} UAE, ${category.title} Abu Dhabi, ${category.title} Dubai, Pro Graphics`,
          path: `/services/${category.id}`,
          schema: {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": category.title,
            "serviceType": category.title,
            "provider": {
              "@type": "LocalBusiness",
              "name": "Pro Graphics Building Maintenance"
            },
            "areaServed": ["Abu Dhabi", "Dubai", "Sharjah", "UAE"],
            "description": category.desc
          }
        };
      }
    }
    return baseConfig;
  };

  return (
    <div className="min-h-screen bg-brand-dark text-brand-primary flex flex-col justify-between font-sans selection:bg-brand-orange/35 selection:text-brand-primary">
      {/* Dynamic SEO Tag & Schema Injected in Browser Head */}
      <SEOManager {...getSeoConfig()} />

      {/* Top Header Navigation Block */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedServiceCategory={selectedServiceCategory}
        setSelectedServiceCategory={setSelectedServiceCategory}
        onRequestQuote={() => handleQuoteRedirect()}
      />

      {/* Main Body Routing Router */}
      <main className="flex-grow pt-20">
        {activeTab === 'home' && (
          <div ref={homeRef} className="space-y-0">
            {/* High-Impact Hero Slat Banner Section */}
            <section className="relative min-h-[480px] md:min-h-[580px] flex items-start pt-24 md:pt-36 select-none overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img
                  alt="A high-end corporate lobby showcasing premium dimensional sign installation with crisp morning lights casting sharp patterns"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-[8000ms] hover:scale-105 hero-bg"
                  src={heroBgImg}
                />
                <div className="absolute inset-0 hero-gradient" />
              </div>

              {/* Dynamic text pane */}
              <div className="relative z-10 w-full px-6 md:px-12 max-w-7xl mx-auto text-white space-y-8 py-6">
                <div className=" -mt-20 max-w-3xl space-y-6">
                  {/* Floating Micro Label */}
                  <div className="inline-flex items-center gap-1.5 bg-brand-orange text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg border border-white/10 hero-badge">
                    <Sparkles size={11} />
                    UAE's Premier Branding Coordinator
                  </div>

                  <h1 className="-mt-3 font-headline text-3.5xl sm:text-5xl lg:text-5.5xl font-extrabold tracking-tight leading-tight hero-title">
                    Pro Graphics Building Maintenance
                  </h1>
                  <span className="block font-headline text-xl sm:text-2xl lg:text-3xl font-bold text-brand-orange leading-tight hero-subtitle">
                    Transforming Spaces with Premium Signage &amp; Graphics
                  </span>
                  <p className="font-sans text-sm sm:text-base text-zinc-300 leading-normal max-w-xl hero-text">
                    Abu Dhabi's Trusted Partner for Architectural Signage, Wayfinding Systems, Vehicle Fleet Wraps, and Clean Structural Maintenance Services.
                  </p>
                </div>

                {/* Primary CTA Blocks */}
                <div className="flex flex-col sm:flex-row gap-4 max-w-md pt-2">
                  <button
                    onClick={() => handleQuoteRedirect()}
                    className="bg-brand-orange text-white hover:bg-brand-rust font-headline text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full shadow-lg transition-all active:scale-95 duration-200 cursor-pointer hero-cta"
                  >
                    Request a Quote
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab('portfolio');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="bg-transparent border border-white/20 text-white font-headline text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full hover:bg-white/10 transition-all active:scale-95 duration-200 cursor-pointer hero-cta"
                  >
                    View Portfolio
                  </button>
                </div>
              </div>

              {/* Location Indicator Label Slat */}
              <div className="absolute bottom-6 right-6 md:right-12 bg-black/85 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg text-white/95 text-[11px] font-sans z-10 flex items-center gap-2 max-w-[280px] hero-pin">
                <Pin size={12} className="text-brand-orange shrink-0" />
                <span className="truncate">Musaffah Industrial Hub • Abu Dhabi</span>
              </div>
            </section>

            {/* Metric Blocks / About Us Narrative on Home view */}
            <AboutPreview onLearnMore={() => setActiveTab('services')} />
          </div>
        )}

        {activeTab === 'services' && (
          <ServicesBento
            selectedCategory={selectedServiceCategory}
            setSelectedCategory={setSelectedServiceCategory}
            onSelectorClick={handleIntegrationSelection}
          />
        )}

        {activeTab === 'portfolio' && (
          <PortfolioDisplay />
        )}

        {activeTab === 'about' && (
          <AboutDisplay />
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

      {/* Floating WhatsApp and Chatbot Actions widget */}
      <FloatingActions />
    </div>
  );
}
