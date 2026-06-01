import { Award, Drill, Users, ShieldCheck } from 'lucide-react';

interface AboutPreviewProps {
  onLearnMore: () => void;
}

export default function AboutPreview({ onLearnMore }: AboutPreviewProps) {
  const highlights = [
    {
      icon: <Drill size={22} className="text-brand-orange" />,
      title: "State-of-the-Art Workshop",
      desc: "Our high-precision CNC routers, premium laser cutters, and professional welding bays handle material formatting up to 10-meter spans."
    },
    {
      icon: <Users size={22} className="text-brand-orange" />,
      title: "Certified Master Installers",
      desc: "Every installer keeps up-to-date UAE certifications to safely complete high-elevation facade fittings and complex structural setups."
    },
    {
      icon: <ShieldCheck size={22} className="text-brand-orange" />,
      title: "Condition Resistant Materials",
      desc: "All raw metals are formatted from 316-grade marine stainless steel or anodized alloys resilient against salt-mist and high thermal ranges."
    }
  ];

  return (
    <section className="bg-[#0A0A0A] py-20 px-6 md:px-12 border-b border-brand-light-gray/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Narrative Content Column */}
          <div className="md:col-span-6 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-brand-surface border border-brand-light-gray px-3 py-1.5 rounded-full text-xs font-semibold text-brand-rust tracking-wide uppercase">
                <Award size={14} className="text-brand-orange" />
                Engineering Visual Excellence
              </div>
              <h2 className="font-headline text-3xl md:text-4.5xl font-extrabold text-brand-primary tracking-tight leading-tight">
                Architectural Integrity <br />
                &amp; Master Craftsmanship
              </h2>
            </div>

            <p className="font-sans text-base text-brand-gray leading-relaxed">
              With decades of combined experience, Pro Graphics Buildings Maintenance delivers architectural-grade signage, branding, and maintenance solutions that define the UAE's most iconic commercial landmarks. We merge high-grade structural engineering with pure creative fidelity to ensure every physical touchpoint exudes prestige.
            </p>

            {/* Metrics Blocks */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="border-l-4 border-brand-orange pl-4 bg-brand-surface/40 p-4 rounded-r-lg">
                <div className="font-headline text-4xl md:text-5xl font-black text-brand-primary tracking-tight">15+</div>
                <div className="font-headline text-xs font-bold text-brand-rust uppercase tracking-wider mt-1">Years Experience</div>
              </div>
              <div className="border-l-4 border-brand-orange pl-4 bg-brand-surface/40 p-4 rounded-r-lg">
                <div className="font-headline text-4xl md:text-5xl font-black text-brand-primary tracking-tight">500+</div>
                <div className="font-headline text-xs font-bold text-brand-rust uppercase tracking-wider mt-1 font-sans">Projects Completed</div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onLearnMore}
                className="inline-flex items-center gap-2 bg-transparent border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-black font-headline text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full shadow-md active:scale-95 transition-all duration-305"
              >
                Explore Specialized Services
              </button>
            </div>
          </div>

          {/* Craftsman Visual Column */}
          <div className="md:col-span-6 space-y-6">
            <div className="relative h-[480px] rounded-xl overflow-hidden shadow-2xl border border-brand-light-gray group">
              <img
                alt="Master craftsman installing high-end dimensional metal lettering"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNXJfBbPWmEvYPBqUyvWn6-VQLXkJ6GqL_8RSAP2TN_H7KeLbvx1D5Mv5m8oKSIIImI_Aan3-uy-yVlV_Iw2QWfyGDZQ8Th6Jxw0Su9bpNCN0eOwJdEc6upQniLat_R53AKvNd6ob8qGrEVLAMuhEdUe6mn01g64rDvUPSb1KxgMcPKD7_qEy_84a-gIkX_vXUZFz8P5qtti8k-xFg5UJINp048RA6q4xOYT9eQ0-apOiArFNmdExZ_OrChsYzc7KAXnA6lOeFSBg"
              />
              {/* Overlay with subtle shadow depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 bg-[#0D0D0D]/95 backdrop-blur-md p-4 rounded-lg shadow-lg border border-white/5">
                <p className="font-headline text-xs font-bold uppercase tracking-wider text-brand-orange">Precision Fitting</p>
                <p className="font-sans text-xs text-brand-gray mt-1">Abu Dhabi team completing hand-installation of dimensional brushed-metal signage.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Highlights Row */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 pt-16 border-t border-brand-light-gray/30">
          {highlights.map((hl, i) => (
            <div key={i} className="flex gap-4">
              <div className="w-12 h-12 shrink-0 bg-brand-surface border border-brand-light-gray/30 flex items-center justify-center rounded-lg shadow-sm">
                {hl.icon}
              </div>
              <div className="space-y-1">
                <h4 className="font-headline text-sm font-semibold text-brand-primary">{hl.title}</h4>
                <p className="font-sans text-sm text-brand-gray leading-relaxed">{hl.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
