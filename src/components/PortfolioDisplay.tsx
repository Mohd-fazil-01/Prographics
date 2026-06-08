import { useState, useEffect, useRef } from 'react';
import { Eye, X } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Import portfolio images
import p1 from '../../assets/portfolio images/WhatsApp Image 2026-06-02 at 11.39.34 PM.jpeg';
import p2 from '../../assets/portfolio images/WhatsApp Image 2026-06-02 at 11.45.04 PM.jpeg';
import p3 from '../../assets/portfolio images/WhatsApp Image 2026-06-02 at 11.48.37 PM.jpeg';
import p4 from '../../assets/portfolio images/WhatsApp Image 2026-06-02 at 11.49.25 PM.jpeg';
import p5 from '../../assets/portfolio images/WhatsApp Image 2026-06-02 at 11.54.33 PM.jpeg';
import pAldar from '../../assets/portfolio images/project-aldar.jpeg';
import pCleveland from '../../assets/portfolio images/project-cleveland.jpeg';
import pGalleria from '../../assets/portfolio images/project-galleria.jpeg';
import pUaeu from '../../assets/portfolio images/project-uaeu.jpeg';
import pYas from '../../assets/portfolio images/project-yas.jpeg';
import p3dLetters from '../../assets/portfolio images/service-3d-letters.jpeg';
import pIndoor from '../../assets/portfolio images/service-indoor.jpeg';
import pLed from '../../assets/portfolio images/service-led.jpeg';
import pOutdoor from '../../assets/portfolio images/service-outdoor.jpeg';
import pVehicle from '../../assets/portfolio images/service-vehicle.jpeg';
import pWayfinding from '../../assets/portfolio images/service-wayfinding.jpeg';
import pPrecision from '../../assets/portfolio images/about-precision.jpeg';
import pHeroBg from '../../assets/portfolio images/hero-bg.jpeg';
import pSectorCorp from '../../assets/portfolio images/sector-corporate.jpeg';
import pSectorRetail from '../../assets/portfolio images/sector-retail.jpeg';

const PORTFOLIO_IMAGES = [
  p1, p2, p3, p4, p5,
  pAldar, pCleveland, pGalleria, pUaeu, pYas,
  p3dLetters, pIndoor, pLed, pOutdoor, pVehicle, pWayfinding,
  pPrecision, pHeroBg, pSectorCorp, pSectorRetail
];

export default function PortfolioDisplay() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.scroll-portfolio-card',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.scroll-portfolio-grid',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="space-y-24 bg-brand-dark py-16 text-brand-primary overflow-hidden">
      {/* Portfolio Showcase Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="font-headline text-xs font-bold text-brand-orange uppercase tracking-wider mb-2">Our Physical Assets</p>
          <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight">Our Completed Projects</h2>
          <p className="font-sans text-brand-gray mt-2 text-sm">
            A visual showcase of premium signage installations, vehicle fleet wraps, custom brandings, and property maintenance works completed by our team.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 scroll-portfolio-grid">
          {PORTFOLIO_IMAGES.map((imgUrl, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(imgUrl)}
              className="group aspect-[4/3] rounded-xl overflow-hidden border border-brand-light-gray bg-brand-surface shadow-sm hover:border-brand-orange/50 transition-all duration-300 cursor-pointer relative scroll-portfolio-card"
            >
              <img
                src={imgUrl}
                alt={`Pro Graphics Portfolio Work ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Eye Overlay */}
              <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-brand-orange text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <Eye size={18} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-10 select-none backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 bg-brand-dark/80 hover:bg-brand-orange text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-2xl z-50 text-xl font-bold border border-white/10 cursor-pointer"
          >
            <X size={24} />
          </button>

          {/* Image Frame */}
          <div
            className="relative max-w-full max-h-[85vh] overflow-hidden rounded-xl border border-white/10 shadow-2xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Pro Graphics Portfolio Showcase"
              className="w-auto h-auto max-w-full max-h-[85vh] object-contain"
            />
            {/* Overlay Slat */}
            <div className="absolute bottom-4 left-4 bg-brand-orange/95 backdrop-blur-sm border border-brand-orange px-4 py-2 rounded-lg text-white text-[10px] font-headline font-bold uppercase tracking-widest shadow-md">
              Completed Project • UAE
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
