import { useState } from 'react';
import { STATIC_PROJECTS } from '../data';
import { Project } from '../types';
import { Sparkles, Eye, Info, RefreshCw } from 'lucide-react';

export default function PortfolioDisplay() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'corporate' | 'retail' | 'hospitality' | 'education'>('all');
  const [sliderPercent, setSliderPercent] = useState<number>(50);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs: { label: string; value: typeof activeFilter }[] = [
    { label: 'All Projects', value: 'all' },
    { label: 'Corporate', value: 'corporate' },
    { label: 'Retail Developments', value: 'retail' },
    { label: 'Hospitality Suites', value: 'hospitality' },
    { label: 'Education Centres', value: 'education' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? STATIC_PROJECTS
    : STATIC_PROJECTS.filter(p => p.category === activeFilter);

  return (
    <div className="space-y-24 bg-brand-dark py-16 text-brand-primary">
      {/* Portfolio Showcase Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="font-headline text-xs font-bold text-brand-orange uppercase tracking-wider mb-2">Our Physical Assets</p>
          <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight">Our Portfolio</h2>
          <p className="font-sans text-brand-gray mt-2 text-sm">
            Explore premium architectural projects formatting stability, visual prestige, and robust material design across standard-defining Abu Dhabi territories.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 pb-4 border-b border-brand-light-gray">
          {filterTabs.map(tab => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`px-5 py-2.5 rounded-full font-headline text-xs font-bold uppercase tracking-wider border transition-all duration-200 ${
                activeFilter === tab.value
                  ? 'bg-brand-orange text-white border-brand-orange shadow-lg'
                  : 'bg-brand-surface text-brand-gray border-brand-light-gray hover:bg-brand-dark hover:text-brand-primary cursor-pointer'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="group bg-brand-surface border border-brand-light-gray rounded-xl overflow-hidden shadow-sm hover:border-brand-orange/40 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Image Wrap */}
                <div className="aspect-[4/3] overflow-hidden relative bg-brand-dark">
                  <img
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={proj.image}
                  />
                  {/* Subtle Indicator Overlays */}
                  <div className="absolute top-4 right-4 bg-black/90 backdrop-blur-md px-3 py-1 rounded text-[10px] font-bold text-brand-orange uppercase tracking-widest border border-white/15">
                    {proj.sector}
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-brand-orange text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Eye size={20} />
                    </span>
                  </div>
                </div>

                {/* Core descriptions */}
                <div className="p-6 space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-brand-rust font-headline font-bold">
                    {proj.location}
                  </span>
                  <h3 className="font-headline text-base font-bold text-brand-primary group-hover:text-brand-orange transition-colors">
                    {proj.title}
                  </h3>
                  <p className="font-sans text-xs text-brand-gray leading-relaxed line-clamp-2">
                    {proj.description}
                  </p>
                </div>
              </div>

              {/* Specification Footer Slat */}
              <div className="mx-6 mb-6 pt-4 border-t border-brand-light-gray flex justify-between items-center text-[10px] font-medium text-brand-gray">
                <span className="font-sans text-[10px]">Specifications Summary</span>
                <span className="text-[10px] font-bold text-brand-primary text-right truncate max-w-[180px] font-headline">{proj.specifications.split('•')[0]}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BEFORE & AFTER INTERACTIVE COMPRESSOR SLIDER */}
      <section className="bg-brand-surface py-20 border-y border-brand-light-gray">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Descriptive Context left panel */}
            <div className="lg:col-span-4 space-y-6">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 bg-brand-dark border border-brand-light-gray text-xs font-bold text-brand-orange uppercase tracking-wide px-3 py-1 rounded-full">
                  <RefreshCw size={12} className="animate-spin" />
                  Preserving Physical Integrity
                </span>
                <h3 className="font-headline text-2.5xl md:text-3.5xl font-extrabold text-brand-primary tracking-tight">
                  Maintenance &amp; Restoration
                </h3>
              </div>
              <p className="font-sans text-sm text-brand-gray leading-relaxed">
                Aggressive direct gulf sunlight, sandy coastal mist, and extreme heat ranges will gradually fade commercial sign faceboards, decay internal neon cables, and structural frames. 
              </p>
              <p className="font-sans text-sm text-brand-gray leading-relaxed">
                Drag the interactive slider handle panel to watch our Abu Dhabi technician teams completely restore faded aluminum board lettering into ultra-vibrant, illuminated orange custom neon arrays.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-gray shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-brand-primary">Sun-Degraded Signboards (Before):</span>
                    <p className="font-sans text-xs text-brand-gray">Weather-beaten materials, dusty faded paint, and short-circuited electric setups during years of neglect.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-orange shrink-0 animate-pulse" />
                  <div>
                    <span className="text-xs font-bold text-brand-primary">Pristine Refitted Luminous LED (After):</span>
                    <p className="font-sans text-xs text-brand-gray">Completed high-efficiency orange neon backlights, titanium alloy reinforcement, and dynamic marine-spec UV shield layers.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Visual Canvas (Right Panel) */}
            <div className="lg:col-span-8 space-y-4">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-brand-light-gray select-none bg-brand-dark group">
                
                {/* BEFORE IMAGE (Full Background) */}
                <img
                  alt="Weather-beaten signage before restoration work"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXrLf6BUbWHAETBSAu398x-IEzLgU-gec4vQZ3faagnQlsWBSky7V6k0Fcrw13Vyxv50eR341hb2Zq1u9bNJSWulDIdxuMljHjydwsmDhLyl_IwvvOL4LIFzchAUb_5Pu_lg95wtVQHZztWZuRzfM29Aabdb7ItnueSOQC_rweo3ge6tONIDebIzz4Va2NcgbmvHWY1lSoRKiJeYPS3O-imhFYqV-FP5ASHvsMSrB4Y3nmG3K4dV1aPEXBfEXG5vd_weTxBIopM4Q"
                />
                {/* Before Slat Badge */}
                <div className="absolute bottom-4 left-4 bg-black/80 text-white font-headline text-xs font-extrabold px-3 py-1.5 rounded border border-white/20 select-none z-20">
                  WEATHER-BEATEN BEFORE
                </div>

                {/* AFTER IMAGE (Clipped Foreground Overlay) */}
                <div
                  className="absolute inset-y-0 left-0 h-full overflow-hidden z-10 pointer-events-none"
                  style={{ width: `${sliderPercent}%` }}
                >
                  {/* Must maintain full width inside clipped layout */}
                  <img
                    alt="Pristine luminous orange sign after restoration work"
                    referrerPolicy="no-referrer"
                    className="absolute inset-y-0 left-0 h-full w-full object-cover max-w-none"
                    style={{ width: '100%', height: '100%' }}
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHFJMLqZPBQ97IKAVwykNMCI2r22VS5xBXbdQkCf7AjDTlSoMLwWy_H4F1BpgbegsY2RdgBSobRet5LpyAxu6gnOdhVbCNX9VMoUtLY1HiI_U_nUbrynsW4yzr0sMn4kvv5mzEaafHCY7GRVQLKj9kjQmWjNWDs-GzXqXyR_zupvHegglzG_txyl7YrUbml74SMmQ3NT1vge2YEIVJ-di1KJyvprO_zTnLEY1ALh_3S3-2jVjapZkFjd5NnUB5SAJWcEu3Hg7VIms"
                  />
                  {/* After Slat Badge inside clipped div */}
                  <div className="absolute bottom-4 left-4 bg-brand-orange text-white font-headline text-xs font-extrabold px-3 py-1.5 rounded shadow-lg select-none whitespace-nowrap z-20">
                    RESTORED PREMIUM AFTER
                  </div>
                </div>

                {/* SLIDER BAR HANDLE STRIP */}
                <div
                  className="absolute inset-y-0 w-1 bg-brand-orange shadow-[0_0_15px_#fe6b00] z-20 pointer-events-none flex items-center justify-center"
                  style={{ left: `${sliderPercent}%` }}
                >
                  {/* Draggable Circle Icon */}
                  <div className="w-10 h-10 rounded-full bg-brand-orange text-white border-2 border-white flex items-center justify-center shadow-2xl -translate-x-1/2 pointer-events-none select-none">
                    <span className="text-xs font-bold font-sans tracking-wide">⇄</span>
                  </div>
                </div>

                {/* VISUAL DRAG RANGE CONTROLLER INVISIBLE TARGET */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPercent}
                  onChange={(e) => setSliderPercent(parseFloat(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize z-30 pointer-events-auto"
                />
              </div>
              <div className="text-center font-sans text-xs text-brand-gray">
                👈 Adjust slider to compare weathering restoration (Total Abu Dhabi Facility Services) 👉
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO DETAILED POPUP OVERLAY */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 backdrop-blur-md flex items-center justify-center p-6" onClick={() => setSelectedProject(null)}>
          <div className="bg-brand-surface rounded-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-brand-light-gray shadow-2xl text-brand-primary" onClick={e => e.stopPropagation()}>
            <div className="aspect-video relative bg-brand-dark">
              <img
                alt={selectedProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                src={selectedProject.image}
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-brand-dark hover:bg-brand-surface text-brand-primary hover:text-brand-orange w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-lg font-headline font-bold text-lg cursor-pointer"
              >
                ×
              </button>
            </div>
            <div className="p-8 space-y-6">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-brand-dark border border-brand-light-gray text-brand-orange px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider font-headline">
                    {selectedProject.sector}
                  </span>
                  <span className="bg-brand-orange/10 text-brand-orange px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider font-headline border border-brand-orange/15">
                    {selectedProject.location}
                  </span>
                </div>
                <h3 className="font-headline text-2xl font-bold text-brand-primary">
                  {selectedProject.title}
                </h3>
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <h4 className="text-xs font-bold uppercase tracking-wide text-brand-primary font-headline">Project Overview:</h4>
                  <p className="font-sans text-sm text-brand-gray leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="bg-brand-dark p-4 rounded-lg border border-brand-light-gray space-y-2">
                  <div className="flex gap-2">
                    <Info size={16} className="text-brand-orange shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] font-bold text-brand-primary uppercase tracking-wide font-headline">Material Specs &amp; Technical Fittings:</span>
                      <p className="font-sans text-xs text-brand-gray mt-1 leading-relaxed">
                        {selectedProject.specifications}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="bg-brand-orange text-white font-headline text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full hover:bg-brand-rust active:scale-95 transition-all cursor-pointer"
                >
                  Close Showcase
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
