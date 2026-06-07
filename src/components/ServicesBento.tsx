import { ChevronRight } from 'lucide-react';
import { STATIC_SERVICE_CATEGORIES } from '../data';
import { ActiveTab } from '../types';

interface ServicesBentoProps {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  onSelectorClick: (tab: ActiveTab, defaultInquiryText: string) => void;
}

export default function ServicesBento({
  selectedCategory,
  setSelectedCategory,
  onSelectorClick
}: ServicesBentoProps) {


  const handleCategorySelect = (id: string | null) => {
    setSelectedCategory(id);
    const element = document.getElementById('services-top');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const steps = [
    { num: '1', title: 'Consultation', desc: 'Analyzing physical site layout restrictions, municipality codes, and visual identity goals.' },
    { num: '2', title: 'Design Drafting', desc: 'Crafting high-fidelity mockups, structural weights calculations, and technical schematics.' },
    { num: '3', title: 'Precision Fabrication', desc: 'Laser formatting, CNC metal shaping, and manual acrylic welding inside Abu Dhabi Facility.' },
    { num: '4', title: 'Engineering Mounts', desc: 'On-site structural drill fittings, electronic wire harnesses layout, and safety signoff.' },
    { num: '5', title: 'Maintenance Audit', desc: 'Long-term clean support loops, LED bulb tests, and wind-gust load reassessments.' }
  ];

  const activeCategory = STATIC_SERVICE_CATEGORIES.find(c => c.id === selectedCategory);

  return (
    <div className="space-y-24 bg-brand-dark py-16 text-brand-primary">
      {/* Scroll anchor */}
      <div id="services-top" className="scroll-mt-24" />

      {/* Services Grid Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        {!activeCategory ? (
          /* Category Grid View */
          <div>
            <div className="max-w-2xl mb-12">
              <p className="font-headline text-xs font-bold text-brand-orange uppercase tracking-wider mb-2">Our Capabilities</p>
              <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight">Our Service Categories</h2>
              <p className="font-sans text-brand-gray mt-2 text-base leading-relaxed">
                Click any category to explore our complete range of specialized signage and building maintenance services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {STATIC_SERVICE_CATEGORIES.map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => handleCategorySelect(cat.id)}
                  className="bg-brand-surface border border-brand-light-gray p-8 rounded-xl shadow-md border-t-4 border-t-brand-orange hover:border-brand-orange/40 hover:shadow-[0_12px_40px_rgba(220,38,38,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div className="space-y-5">
                    {/* Category Image if available */}
                    {cat.image && (
                      <div className="w-full h-44 rounded-lg overflow-hidden border border-brand-light-gray bg-brand-dark relative">
                        <img
                          src={cat.image}
                          alt={cat.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}

                    <div className="flex items-center gap-3">
                      <span className="text-3xl filter drop-shadow">{cat.icon}</span>
                      <h3 className="font-headline text-xl font-bold text-brand-primary group-hover:text-brand-orange transition-colors">
                        {cat.title}
                      </h3>
                    </div>

                    <p className="font-sans text-sm text-brand-gray leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-brand-light-gray/45 mt-4 flex items-center justify-between">
                    <span className="text-xs text-brand-orange font-bold uppercase tracking-wider">
                      {cat.items.length} Services
                    </span>
                    <span className="text-brand-orange group-hover:translate-x-1.5 transition-transform duration-200 font-bold">
                      →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Category Detail View */
          <div>
            {/* Breadcrumb Navigation */}
            <div className="mb-8 flex items-center gap-2 text-xs font-headline tracking-wider uppercase text-brand-gray">
              <button
                onClick={() => handleCategorySelect(null)}
                className="hover:text-brand-orange transition-colors cursor-pointer"
              >
                Services
              </button>
              <span>/</span>
              <span className="text-brand-orange">{activeCategory.title}</span>
            </div>

            {/* Top Categories Tab Selector Bar */}
            <div className="flex flex-wrap gap-2.5 mb-10 pb-4 border-b border-brand-light-gray/40">
              <button
                onClick={() => handleCategorySelect(null)}
                className="px-4 py-2 rounded-full text-xs font-headline font-bold uppercase tracking-wider border border-brand-light-gray hover:border-brand-orange hover:text-brand-orange transition-all duration-200 cursor-pointer"
              >
                All Categories
              </button>
              {STATIC_SERVICE_CATEGORIES.map((cat) => {
                const isCurrent = cat.id === selectedCategory;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategorySelect(cat.id)}
                    className={`px-4 py-2 rounded-full text-xs font-headline font-bold uppercase tracking-wider border transition-all duration-200 cursor-pointer ${
                      isCurrent
                        ? 'bg-brand-orange border-brand-orange text-white'
                        : 'border-brand-light-gray hover:border-brand-orange hover:text-brand-orange'
                    }`}
                  >
                    {cat.title}
                  </button>
                );
              })}
            </div>

            {/* Category Title Header */}
            <div className="max-w-3xl mb-12">
              <h2 className="font-headline text-3xl md:text-4.5xl font-extrabold text-brand-primary tracking-tight mb-4">
                {activeCategory.title}
              </h2>
              <p className="font-sans text-brand-gray text-base leading-relaxed">
                {activeCategory.desc}
              </p>
            </div>

            {/* Sub-services Grid list */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeCategory.items
                .filter((item) => !!item.image)
                .map((item, index) => (
                  <div
                    key={index}
                    className="bg-brand-surface border border-brand-light-gray p-6 rounded-xl hover:border-brand-orange/45 hover:shadow-[0_8px_30px_rgba(220,38,38,0.05)] transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div className="space-y-4">
                      {/* Sub-service Image Cover */}
                      {item.image && (
                        <div className="w-full h-40 rounded-lg overflow-hidden border border-brand-light-gray bg-brand-dark relative">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      )}

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-brand-dark rounded-lg flex items-center justify-center border border-brand-light-gray group-hover:scale-105 transition-transform duration-200 text-xl shrink-0">
                          {item.icon}
                        </div>
                        <h4 className="font-headline text-base font-bold text-brand-primary group-hover:text-brand-orange transition-colors">
                          {item.title}
                        </h4>
                      </div>
                      <p className="font-sans text-xs text-brand-gray leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-5 mt-4 border-t border-brand-light-gray/30">
                      <button
                        onClick={() => {
                          const prefilled = `Hello! I would like to request an official surveyor scheduled consultation and quote details for "${item.title}" under the category "${activeCategory.title}".`;
                          onSelectorClick('contact', prefilled);
                        }}
                        className="font-headline text-[10px] font-bold uppercase tracking-widest text-brand-rust hover:text-brand-orange flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        Request Quotation <ChevronRight size={12} />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
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


    </div>
  );
}
