import { STATIC_SECTORS } from '../data';
import { Building, Sparkles, Hotel, Compass, ShieldAlert, CheckCircle } from 'lucide-react';

export default function SectorsOfWork() {
  const renderSectorIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building':
        return <Building size={22} className="text-brand-orange" />;
      case 'Sparkles':
        return <Sparkles size={22} className="text-brand-orange" />;
      case 'Hotel':
        return <Hotel size={22} className="text-brand-orange" />;
      default:
        return <Compass size={22} className="text-brand-orange" />;
    }
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-brand-dark">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Title Context Slat */}
        <div className="text-center max-w-xl mx-auto">
          <p className="font-headline text-xs font-bold text-brand-orange uppercase tracking-wider mb-2">Abu Dhabi Operational Focus</p>
          <h2 className="font-headline text-3xl md:text-3.5xl font-extrabold text-brand-primary tracking-tight">Sectors of Excellence</h2>
          <p className="font-sans text-xs text-brand-gray mt-1 leading-relaxed">
            Different spaces pose distinct architectural constraints. We collaborate with developers, hoteliers, and government coordinators to deliver standard-defining branding alignments.
          </p>
        </div>

        {/* Sectors list */}
        <div className="space-y-16">
          {STATIC_SECTORS.map((sector, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={sector.id}
                className={`flex flex-col ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center pb-12 border-b border-brand-light-gray last:border-0 last:pb-0`}
              >
                {/* Visual Image Slat */}
                <div className="w-full lg:w-1/2">
                  <div className="relative h-[340px] rounded-xl overflow-hidden shadow-lg border border-brand-light-gray">
                    <img
                       alt={sector.title}
                       referrerPolicy="no-referrer"
                       className="w-full h-full object-cover transition-transform duration-505 hover:scale-105"
                       src={sector.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Technical Descriptions column */}
                <div className="w-full lg:w-1/2 space-y-6">
                  {/* Title card Icon */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-surface rounded-lg flex items-center justify-center border border-brand-light-gray shadow-sm">
                      {renderSectorIcon(sector.highlightIcon)}
                    </div>
                    <h3 className="font-headline text-xl md:text-2xl font-bold text-brand-primary">
                      {sector.title}
                    </h3>
                  </div>

                  <p className="font-sans text-sm text-brand-gray leading-relaxed">
                    {sector.description}
                  </p>

                  {/* Challenge-Solution Grid */}
                  <div className="grid gap-4 pt-2">
                    {/* Challenge Block */}
                    <div className="bg-rose-950/15 border border-rose-900/30 p-4 rounded-xl flex gap-3">
                      <ShieldAlert size={20} className="text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[11px] font-bold text-rose-300 uppercase tracking-wider font-headline">Sector Dilemma / Rules:</span>
                        <p className="font-sans text-xs text-rose-200 mt-1 leading-relaxed">
                          {sector.challenge}
                        </p>
                      </div>
                    </div>

                    {/* Solution Block */}
                    <div className="bg-emerald-950/15 border border-emerald-900/30 p-4 rounded-xl flex gap-3">
                      <CheckCircle size={20} className="text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider font-headline">Engineered Signature Solution:</span>
                        <p className="font-sans text-xs text-emerald-200 mt-1 leading-relaxed">
                          {sector.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
