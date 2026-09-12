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
      title: "Pro Graphics Buildings Maintenance | Signage & Building Maintenance Abu Dhabi",
      description: "Pro Graphics Buildings Maintenance is Abu Dhabi's trusted signage company. We specialise in architectural signage, 3D letter fabrication, wayfinding systems, vehicle fleet branding, and commercial building maintenance across the UAE.",
      keywords: "signage company Abu Dhabi, architectural signage Abu Dhabi, building maintenance Abu Dhabi, signage fabrication Abu Dhabi, 3D signage Abu Dhabi, wayfinding signage Abu Dhabi, vehicle fleet branding Abu Dhabi, UV printing Abu Dhabi",
      path: "/",
      schema: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://prographicsbuildings.com/#website",
        "name": "Pro Graphics Buildings Maintenance",
        "url": "https://prographicsbuildings.com",
        "description": "Abu Dhabi's trusted signage company — architectural signage, 3D letters, wayfinding systems, vehicle fleet branding, and commercial building maintenance across the UAE.",
        "publisher": {
          "@id": "https://prographicsbuildings.com/#organization"
        },
        "inLanguage": "en"
      }
    },
    services: {
      title: "Signage & Building Maintenance Services | Pro Graphics Abu Dhabi",
      description: "Explore our full range of signage and building maintenance services in Abu Dhabi — custom 3D signage, UV printing, safety compliance signs, outdoor signage, wayfinding systems, vehicle fleet branding, exhibition kiosks, and large format printing.",
      keywords: "signage services Abu Dhabi, custom signage Abu Dhabi, commercial signage Abu Dhabi, wayfinding signage Abu Dhabi, vehicle branding Abu Dhabi, UV printing Abu Dhabi, outdoor signage Abu Dhabi, safety signage Abu Dhabi, building maintenance Abu Dhabi",
      path: "/services",
      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Signage & Building Maintenance Services Abu Dhabi",
        "serviceType": [
          "Architectural Signage",
          "3D Signage Fabrication",
          "Wayfinding Systems",
          "Vehicle Fleet Branding",
          "UV Printing",
          "Safety & Compliance Signage",
          "Outdoor Signage",
          "Kiosk Solutions",
          "Building Maintenance"
        ],
        "provider": {
          "@id": "https://prographicsbuildings.com/#organization"
        },
        "areaServed": [
          { "@type": "City", "name": "Abu Dhabi" },
          { "@type": "Country", "name": "United Arab Emirates" }
        ],
        "description": "Full range of professional signage fabrication, architectural branding, wayfinding systems, vehicle fleet wrapping, UV printing, and commercial building maintenance services in Abu Dhabi, UAE.",
        "url": "https://prographicsbuildings.com/services"
      }
    },
    portfolio: {
      title: "Signage & Branding Portfolio | Pro Graphics Buildings Maintenance Abu Dhabi",
      description: "Browse completed signage installations, vehicle fleet wraps, 3D metal letters, wayfinding systems, and architectural branding projects by Pro Graphics Buildings Maintenance across Abu Dhabi and the UAE.",
      keywords: "signage portfolio Abu Dhabi, completed signage projects UAE, architectural signage projects Abu Dhabi, vehicle fleet wrapping portfolio UAE, 3D metal letters Abu Dhabi, wayfinding signage portfolio",
      path: "/portfolio",
      schema: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Signage & Branding Portfolio — Pro Graphics Buildings Maintenance",
        "description": "Showcase of completed architectural signage installations, vehicle fleet wraps, 3D metal letter fabrication, wayfinding systems, and building maintenance projects across Abu Dhabi and the UAE.",
        "url": "https://prographicsbuildings.com/portfolio",
        "publisher": {
          "@id": "https://prographicsbuildings.com/#organization"
        }
      }
    },
    about: {
      title: "About Pro Graphics Buildings Maintenance | Signage Company Abu Dhabi",
      description: "Learn about Pro Graphics Buildings Maintenance — Abu Dhabi's signage fabrication company based in Musaffah. We deliver architectural signage, wayfinding systems, vehicle fleet wrapping, and commercial building maintenance across the UAE.",
      keywords: "Pro Graphics Buildings Maintenance Abu Dhabi, signage company Abu Dhabi, signage fabrication Musaffah, architectural signage Abu Dhabi, wayfinding systems UAE, building maintenance company Abu Dhabi, signage installation Abu Dhabi",
      path: "/about",
      schema: {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Pro Graphics Buildings Maintenance",
        "description": "Abu Dhabi's trusted signage fabrication company in Musaffah — delivering architectural signage, wayfinding systems, vehicle fleet branding, and commercial building maintenance services across the UAE.",
        "url": "https://prographicsbuildings.com/about",
        "publisher": {
          "@id": "https://prographicsbuildings.com/#organization"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://prographicsbuildings.com/" },
            { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://prographicsbuildings.com/about" }
          ]
        }
      }
    },
    contact: {
      title: "Contact Us | Pro Graphics Buildings Maintenance Abu Dhabi",
      description: "Get in touch with Pro Graphics Buildings Maintenance in Abu Dhabi. Request a quote for architectural signage, wayfinding systems, vehicle fleet branding, UV printing, or commercial building maintenance services across the UAE.",
      keywords: "contact Pro Graphics Abu Dhabi, signage quote Abu Dhabi, building maintenance quote UAE, signage company contact Abu Dhabi, request signage survey Abu Dhabi",
      path: "/contact",
      schema: {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Pro Graphics Buildings Maintenance",
        "description": "Request official signage surveys, wayfinding consultations, vehicle branding quotes, and project proposals in Abu Dhabi, UAE.",
        "url": "https://prographicsbuildings.com/contact",
        "publisher": {
          "@id": "https://prographicsbuildings.com/#organization"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://prographicsbuildings.com/" },
            { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://prographicsbuildings.com/contact" }
          ]
        }
      }
    }
  };

  // Per-service category SEO title/description map for richer keyword targeting
  const serviceSeoMap: Record<string, { title: string; description: string; keywords: string }> = {
    signage: {
      title: "Custom Signage Solutions in Abu Dhabi | Pro Graphics Buildings Maintenance",
      description: "Pro Graphics delivers custom signage solutions in Abu Dhabi — 3D letters, LED sign boards, acrylic signs, stainless steel letters, and architectural signage fabrication for commercial and corporate clients.",
      keywords: "custom signage Abu Dhabi, 3D signage Abu Dhabi, LED sign boards Abu Dhabi, architectural signage Abu Dhabi, signage fabrication Abu Dhabi, commercial signage Abu Dhabi"
    },
    uv: {
      title: "UV Printing Services Abu Dhabi | Pro Graphics Buildings Maintenance",
      description: "High-resolution UV flatbed printing in Abu Dhabi — direct printing on acrylic, aluminum composite, foam board, and custom substrates. Scratch-resistant, weather-proof, and vibrant for retail, exhibitions, and outdoor use.",
      keywords: "UV printing Abu Dhabi, UV flatbed printing Abu Dhabi, acrylic UV prints Abu Dhabi, aluminum composite printing UAE, UV printing services Abu Dhabi"
    },
    safety: {
      title: "Safety & Compliance Signage Abu Dhabi | Pro Graphics Buildings Maintenance",
      description: "UAE Civil Defense compliant safety and compliance signage in Abu Dhabi — fire exit signs, fire safety packages, hazard warning signs, emergency evacuation floor plans, and full regulatory building signage.",
      keywords: "safety signage Abu Dhabi, compliance signage Abu Dhabi, fire safety signs Abu Dhabi, UAE Civil Defense compliant signage, emergency evacuation signs Abu Dhabi"
    },
    outdoor: {
      title: "Outdoor Signage Abu Dhabi | Pro Graphics Buildings Maintenance",
      description: "Durable outdoor signage solutions in Abu Dhabi built for the UAE climate — pylon and totem signs, building fascia signs, backlit outdoor signs, hoarding boards, and roadside advertising panels.",
      keywords: "outdoor signage Abu Dhabi, pylon signs Abu Dhabi, building fascia signs Abu Dhabi, hoarding boards Abu Dhabi, outdoor advertising signs UAE"
    },
    wayfinding: {
      title: "Wayfinding & Directional Signage Abu Dhabi | Pro Graphics Buildings Maintenance",
      description: "Comprehensive wayfinding and directional signage systems in Abu Dhabi — directional arrow signs, building maps, parking signage, lift and staircase signs, and complete campus navigation systems for malls, hospitals, and offices.",
      keywords: "wayfinding signage Abu Dhabi, directional signage Abu Dhabi, wayfinding systems Abu Dhabi, building navigation signs Abu Dhabi, wayfinding and direction signs UAE"
    },
    kiosk: {
      title: "Custom Kiosk Solutions Abu Dhabi | Pro Graphics Buildings Maintenance",
      description: "Custom-designed and fabricated kiosk solutions in Abu Dhabi — digital display kiosks, exhibition kiosks, retail kiosks, and reception information kiosks built to exact specifications with integrated branding.",
      keywords: "kiosk solutions Abu Dhabi, custom kiosk Abu Dhabi, digital display kiosks Abu Dhabi, exhibition kiosks Abu Dhabi, retail kiosk fabrication UAE"
    },
    branding: {
      title: "Vehicle Fleet Branding & Wrapping Abu Dhabi | Pro Graphics Buildings Maintenance",
      description: "Professional vehicle fleet branding and wrapping solutions in Abu Dhabi — full vehicle wraps, partial wraps, sticker branding, window graphics, and wall murals using premium 3M and Avery Dennison materials.",
      keywords: "vehicle fleet branding Abu Dhabi, vehicle wrapping Abu Dhabi, commercial vehicle wraps Abu Dhabi, fleet graphics Abu Dhabi, vehicle branding UAE"
    }
  };

  const getSeoConfig = () => {
    const baseConfig = seoConfig[activeTab];
    if (activeTab === 'services' && selectedServiceCategory) {
      const category = STATIC_SERVICE_CATEGORIES.find(c => c.id === selectedServiceCategory);
      if (category) {
        const customSeo = serviceSeoMap[category.id];
        return {
          title: customSeo?.title || `${category.title} in Abu Dhabi | Pro Graphics Buildings Maintenance`,
          description: customSeo?.description || category.desc,
          keywords: customSeo?.keywords || `${category.title} Abu Dhabi, ${category.title} UAE, signage company Abu Dhabi, Pro Graphics`,
          path: `/services/${category.id}`,
          schema: {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "name": customSeo?.title?.split('|')[0].trim() || `${category.title} Abu Dhabi`,
                "serviceType": category.title,
                "provider": {
                  "@id": "https://prographicsbuildings.com/#organization"
                },
                "areaServed": [
                  { "@type": "City", "name": "Abu Dhabi" },
                  { "@type": "Country", "name": "United Arab Emirates" }
                ],
                "description": customSeo?.description || category.desc,
                "url": `https://prographicsbuildings.com/services/${category.id}`
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://prographicsbuildings.com/" },
                  { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://prographicsbuildings.com/services" },
                  { "@type": "ListItem", "position": 3, "name": category.breadcrumb, "item": `https://prographicsbuildings.com/services/${category.id}` }
                ]
              }
            ]
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
