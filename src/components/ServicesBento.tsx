import { useState } from 'react';
import { Building, Signpost, Zap, Maximize2, Compass, Truck, Calculator, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { STATIC_SERVICES } from '../data';
import { ServiceItem, ActiveTab } from '../types';

interface ServicesBentoProps {
  onSelectorClick: (tab: ActiveTab, defaultInquiryText: string) => void;
}

export default function ServicesBento({ onSelectorClick }: ServicesBentoProps) {
  // Calculator States
  const [calcService, setCalcService] = useState<string>('indoor');
  const [calcWidth, setCalcWidth] = useState<number>(3);
  const [calcHeight, setCalcHeight] = useState<number>(1.5);
  const [withLed, setWithLed] = useState<boolean>(true);
  const [withGoldMetal, setWithGoldMetal] = useState<boolean>(false);
  const [withUvCoat, setWithUvCoat] = useState<boolean>(true);

  // Helper to resolve icon components from strings
  const renderItemIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building':
        return <Building size={24} className="text-brand-orange" />;
      case 'Signpost':
        return <Signpost size={24} className="text-brand-orange" />;
      case 'Zap':
        return <Zap size={24} className="text-brand-orange" />;
      case 'Maximize2':
        return <Maximize2 size={24} className="text-brand-orange" />;
      case 'Compass':
        return <Compass size={24} className="text-brand-orange" />;
      case 'Truck':
        return <Truck size={24} className="text-brand-orange" />;
      default:
        return <Building size={24} className="text-brand-orange" />;
    }
  };

  // Pricing calculations
  const calculateEstimate = () => {
    let baseRatePerSqm = 650; // AED standard
    if (calcService === 'outdoor') baseRatePerSqm = 950;
    if (calcService === 'led') baseRatePerSqm = 1250;
    if (calcService === '3d-letters') baseRatePerSqm = 1100;
    if (calcService === 'wayfinding') baseRatePerSqm = 750;
    if (calcService === 'vehicle') baseRatePerSqm = 500;

    const area = calcWidth * calcHeight;
    let basePrice = area * baseRatePerSqm;

    if (withLed) basePrice += area * 250;
    if (withGoldMetal) basePrice += area * 350;
    if (withUvCoat) basePrice += area * 125;

    // Minimum order check
    return Math.max(1200, Math.round(basePrice));
  };

  const handleInquiryIntegration = () => {
    const serviceObj = STATIC_SERVICES.find(s => s.id === calcService);
    const textBlueprint = `I would like to request an official quotation for brand-new "${serviceObj?.title}" installations. 

Project Blueprint Specifications:
- Selected Layout: ${serviceObj?.title}
- Physical Size Target: ${calcWidth}m Width x ${calcHeight}m Height
- Combined Surface Area: ${(calcWidth * calcHeight).toFixed(2)} sq. meters
- Custom LED Halo Backlighting: ${withLed ? 'Required' : 'Not Required'}
- Mirror Gold Metal Alloys: ${withGoldMetal ? 'Yes, Premium Finish' : 'Standard Finish'}
- Extended UV Marine Protection Coat: ${withUvCoat ? 'Enabled (Gulf Extreme Protect)' : 'None'}

Estimated Budget Projection: AED ${calculateEstimate()} (Subject to final surveyor measurements). Please assign a liaison for Musaffah blueprint review.`;

    onSelectorClick('contact', textBlueprint);
  };

  const steps = [
    { num: '1', title: 'Consultation', desc: 'Analyzing physical site layout restrictions, municipality codes, and visual identity goals.' },
    { num: '2', title: 'Design Drafting', desc: 'Crafting high-fidelity mockups, structural weights calculations, and technical schematics.' },
    { num: '3', title: 'Precision Fabrication', desc: 'Laser formatting, CNC metal shaping, and manual acrylic welding inside Abu Dhabi Facility.' },
    { num: '4', title: 'Engineering Mounts', desc: 'On-site structural drill fittings, electronic wire harnesses layout, and safety signoff.' },
    { num: '5', title: 'Maintenance Audit', desc: 'Long-term clean support loops, LED bulb tests, and wind-gust load reassessments.' }
  ];

  return (
    <div className="space-y-24 bg-brand-dark py-16 text-brand-primary">
      {/* Services Grid Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-12">
          <p className="font-headline text-xs font-bold text-brand-orange uppercase tracking-wider mb-2">Our Capabilities</p>
          <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight">Our Expertise</h2>
          <p className="font-sans text-brand-gray mt-2 text-base leading-relaxed">
            Precision engineering meets creative marketing vision. We format durable, premium installations designed specifically to emphasize corporate confidence and capture consumer sights across Abu Dhabi district zones.
          </p>
        </div>

        {/* Bento Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STATIC_SERVICES.map((item) => (
            <div
              key={item.id}
              className="bg-brand-surface border border-brand-light-gray p-8 rounded-xl shadow-md hover:border-brand-orange/30 hover:shadow-[0_12px_40px_rgba(220,38,38,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-5">
                {/* Service Work Image */}
                {item.image && (
                  <div className="w-full h-44 rounded-lg overflow-hidden border border-brand-light-gray bg-brand-dark relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                {/* Icon Circle */}
                <div className="w-12 h-12 bg-brand-dark rounded-lg flex items-center justify-center border border-brand-light-gray transition-transform duration-305 group-hover:scale-110">
                  {renderItemIcon(item.iconName)}
                </div>

                <div className="space-y-2">
                  <h3 className="font-headline text-lg font-bold text-brand-primary group-hover:text-brand-orange transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-brand-gray leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bullets lists */}
                <ul className="space-y-2.5 pt-2 border-t border-brand-light-gray">
                  {item.bulletPoints.map((bp, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs text-brand-gray">
                      <CheckCircle2 size={14} className="text-brand-orange mt-0.5 shrink-0" />
                      <span className="leading-tight font-sans">{bp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Hook */}
              <div className="pt-6">
                <button
                  onClick={() => {
                    const prefilled = `Hello! I want to request custom information and surveyor scheduling regarding "${item.title}". Please send catalog details.`;
                    onSelectorClick('contact', prefilled);
                  }}
                  className="font-headline text-xs font-bold uppercase tracking-wider text-brand-rust hover:text-brand-orange flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  Request Technical Blueprint <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Workflow Process */}
      <section className="bg-brand-surface py-20 border-y border-brand-light-gray">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-xl mx-auto mb-16">
            <p className="font-headline text-xs font-bold text-brand-orange uppercase tracking-wider mb-2">How We Collaborate</p>
            <h3 className="font-headline text-2.5xl md:text-3.5xl font-extrabold text-brand-primary">Our Production Workflow</h3>
            <p className="font-sans text-sm text-brand-gray mt-1">Our certified engineering processes ensure your physical assets represent pure durability.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            <div className="hidden md:block absolute top-[40px] left-[3%] w-[94%] h-[1px] bg-brand-light-gray -z-1" />

            {steps.map((st) => (
              <div key={st.num} className="bg-brand-dark p-6 rounded-xl border border-brand-light-gray shadow-md hover:shadow-lg transition-shadow relative z-10 flex flex-col gap-4 text-center md:text-left">
                <div className="w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center font-headline text-lg font-extrabold shadow-md shrink-0 border border-brand-orange mx-auto md:mx-0">
                  {st.num}
                </div>
                <div className="space-y-1">
                  <h4 className="font-headline text-base font-bold text-brand-primary">{st.title}</h4>
                  <p className="font-sans text-xs text-brand-gray leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Quotation Calculator & Spec Builder Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-brand-surface rounded-2xl overflow-hidden shadow-2xl border border-brand-light-gray">
          <div className="grid lg:grid-cols-12">
            {/* Input Form Fields (Left Tab Panel) */}
            <div className="lg:col-span-7 p-8 md:p-12 space-y-8">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 bg-brand-dark border border-brand-light-gray px-3 py-1 rounded text-xs font-bold text-brand-orange tracking-wide uppercase">
                  <Calculator size={14} />
                  Dynamic Estimation Desk
                </div>
                <h3 className="font-headline text-2xl md:text-3xl font-extrabold tracking-tight text-brand-primary">
                  Signage Budget Calculator
                </h3>
                <p className="text-brand-gray font-sans text-xs">
                  Estimate raw project costs in municipal currency and bundle custom options instantly before briefing our technicians.
                </p>
              </div>

              {/* Calculator Settings */}
              <div className="space-y-6">
                {/* Signage Type */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-gray">
                    1. Select Signage Specification
                  </label>
                  <select
                    value={calcService}
                    onChange={(e) => setCalcService(e.target.value)}
                    className="w-full bg-brand-dark border border-brand-light-gray rounded-lg py-3 px-4 text-brand-primary text-sm focus:outline-none focus:border-brand-orange cursor-pointer"
                  >
                    {STATIC_SERVICES.map(s => (
                      <option key={s.id} value={s.id} className="bg-brand-surface text-brand-primary">{s.title}</option>
                    ))}
                  </select>
                </div>

                {/* Dimensions Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-gray">
                      Width (Meters)
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="20"
                      step="0.5"
                      value={calcWidth}
                      onChange={(e) => setCalcWidth(parseFloat(e.target.value) || 1)}
                      className="w-full bg-brand-dark border border-brand-light-gray rounded-lg py-3 px-4 text-brand-primary text-sm focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-gray">
                      Height (Meters)
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="15"
                      step="0.5"
                      value={calcHeight}
                      onChange={(e) => setCalcHeight(parseFloat(e.target.value) || 1)}
                      className="w-full bg-brand-dark border border-brand-light-gray rounded-lg py-3 px-4 text-brand-primary text-sm focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                </div>

                {/* Combined Specifications Addons */}
                <div className="space-y-3">
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-gray">
                    2. Choose Premium Addons &amp; Formats
                  </label>

                  <div className="grid gap-3">
                    <label className="flex items-center justify-between p-4 bg-brand-dark border border-brand-light-gray rounded-lg cursor-pointer hover:border-brand-orange transition-colors">
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-brand-primary">LED Halo Illumination</span>
                        <span className="text-[11px] text-brand-gray font-sans">Low-voltage backlit diffused halo (Adds 250 AED / m²)</span>
                      </div>
                      <input
                        type="checkbox"
                        checked={withLed}
                        onChange={(e) => setWithLed(e.target.checked)}
                        className="w-5 h-5 accent-brand-orange rounded"
                      />
                    </label>

                    <label className="flex items-center justify-between p-4 bg-brand-dark border border-brand-light-gray rounded-lg cursor-pointer hover:border-brand-orange transition-colors">
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-brand-primary">Mirror Gold Metal Alloys</span>
                        <span className="text-[11px] text-brand-gray font-sans">Electroplated titanium alloy coat (Adds 350 AED / m²)</span>
                      </div>
                      <input
                        type="checkbox"
                        checked={withGoldMetal}
                        onChange={(e) => setWithGoldMetal(e.target.checked)}
                        className="w-5 h-5 accent-brand-orange rounded"
                      />
                    </label>

                    <label className="flex items-center justify-between p-4 bg-brand-dark border border-brand-light-gray rounded-lg cursor-pointer hover:border-brand-orange transition-colors">
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-brand-primary">Gulf-Spec UV Protective Laminate</span>
                        <span className="text-[11px] text-brand-gray font-sans">Extended thermal &amp; dust shield film (Adds 125 AED / m²)</span>
                      </div>
                      <input
                        type="checkbox"
                        checked={withUvCoat}
                        onChange={(e) => setWithUvCoat(e.target.checked)}
                        className="w-5 h-5 accent-brand-orange rounded"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Pricing Summary Block (Right Panel) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-brand-surface to-brand-dark p-8 md:p-12 flex flex-col justify-between border-l border-brand-light-gray">
              <div className="space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block">
                  INQUIRY BLUEPRINT PREVIEW
                </span>

                <div className="space-y-4 border-b border-brand-light-gray pb-6 text-brand-primary">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-brand-gray">Sign Format:</span>
                    <span className="font-semibold">{STATIC_SERVICES.find(s => s.id === calcService)?.title}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-brand-gray">Total Dimensions:</span>
                    <span className="font-semibold">{calcWidth}m × {calcHeight}m</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-brand-gray">Surface Area:</span>
                    <span className="font-semibold">{(calcWidth * calcHeight).toFixed(2)} m²</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs text-brand-gray font-sans">ESTIMATED PROJECTION:</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-headline font-black text-brand-primary">AED {calculateEstimate()}</span>
                    <span className="text-brand-gray text-sm font-bold">*</span>
                  </div>
                  <p className="text-[11px] text-brand-gray leading-tight font-sans">
                    * Estimated raw blueprint price includes material cutting &amp; standard fitting. Subject to Musaffah surveyor evaluation and Abu Dhabi municipality permit checks.
                  </p>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={handleInquiryIntegration}
                  className="w-full bg-brand-orange text-white font-headline text-xs font-bold uppercase tracking-wider py-4 rounded shadow-lg hover:bg-brand-rust active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Prefill &amp; Customize Inquiry
                  <ArrowRight size={14} />
                </button>
                <span className="block text-[10px] text-brand-gray/60 text-center mt-3 font-sans">
                  Instantly populates contact database with technical specifications
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
