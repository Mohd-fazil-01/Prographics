import { Target, Eye, ShieldCheck, Gem, Drill, Users, Award, MapPin, Wrench, CheckCircle } from 'lucide-react';
import aboutPrecisionImg from '../../assets/portfolio images/about-precision.jpeg';
import workshopImg from '../../assets/portfolio images/project-aldar.jpeg';
import teamImg from '../../assets/portfolio images/service-3d-letters.jpeg';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutDisplay() {
  const values = [
    {
      icon: <ShieldCheck className="text-brand-orange" size={24} />,
      title: "UAE Code Compliance",
      desc: "All signages and material configurations are engineered in strict accordance with UAE Civil Defense regulations and Abu Dhabi Municipality safety standards."
    },
    {
      icon: <Gem className="text-brand-orange" size={24} />,
      title: "Architectural Precision",
      desc: "We utilize high-grade 316 marine stainless steel, anodized aluminum alloys, and custom cast vinyls to guarantee lifetime durability against high humidity and thermal exposure."
    },
    {
      icon: <Wrench className="text-brand-orange" size={24} />,
      title: "State-of-the-Art Production",
      desc: "From CNC router cutting and laser formatting to specialized metal bending and painting, every step is coordinated within our Musaffah workshop."
    },
    {
      icon: <CheckCircle className="text-brand-orange" size={24} />,
      title: "Absolute Accountability",
      desc: "We provide comprehensive end-to-end support—handling site surveys, engineering blueprints, municipality approvals, expert fabrication, and final installations."
    }
  ];

  const teamRoles = [
    {
      role: "Managing Director",
      desc: "Guides strategic operations and client relations, ensuring our solutions align with the vision of corporate developers and regional authorities.",
      specialty: "Strategy & Regional Partnerships"
    },
    {
      role: "Senior Project Engineer",
      desc: "Directs workshop fabrication, metal alloy calculations, and structural safety audits for high-elevation signage setups.",
      specialty: "Structural Signage & Fabrication"
    },
    {
      role: "Wayfinding Estimator & Surveyor",
      desc: "Conducts precision site measurements and maps optimal pedestrian/vehicle flow routes for malls, campuses, and hospitals.",
      specialty: "Estimations, Surveys & Traffic Maps"
    },
    {
      role: "Master Sign Installer",
      desc: "Supervises high-elevation facade installations, rigging, and electrical wiring. Ensures strict adherence to UAE HSE regulations.",
      specialty: "HSE Supervision & Elite Rigging"
    }
  ];

  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero loading animation timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo('.about-hero-bg', { scale: 1.1, opacity: 0 }, { scale: 1, opacity: 0.35, duration: 1.5 });
      tl.fromTo('.about-hero-badge', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=1.0');
      tl.fromTo('.about-hero-title', { y: 35, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.6');
      tl.fromTo('.about-hero-text', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.5');

      // 2. Story scroll animations (making text more visible as you scroll)
      gsap.fromTo('.about-story-text',
        { y: 30, opacity: 0.2 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.about-story-text',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.about-story-metric',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.about-story-metric-container',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.about-story-img',
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-story-img',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // 3. Pillars & Values scroll animations
      gsap.fromTo('.about-pillar',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.about-pillar-container',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.about-value',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.about-value-container',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // 4. Infrastructure scroll animations
      gsap.fromTo('.about-infra-img',
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-infra-img',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.about-infra-text',
        { y: 30, opacity: 0.2 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.about-infra-text',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // 5. Team card scroll animations
      gsap.fromTo('.about-team-card',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.about-team-container',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // 6. CTA scroll animations
      gsap.fromTo('.about-cta',
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.about-cta',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-brand-dark min-h-screen overflow-hidden">
      {/* 1. Hero Slat Section */}
      <section className="relative min-h-[360px] md:min-h-[440px] flex items-center select-none overflow-hidden bg-brand-primary border-b border-brand-light-gray">
        <div className="absolute inset-0 z-0">
          <img
            alt="Pro Graphics Signage Workshop and Architectural Fabrication"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-35 about-hero-bg"
            src={aboutPrecisionImg}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/95 via-brand-primary/80 to-transparent" />
        </div>

        <div className="relative z-10 w-full px-6 md:px-12 max-w-7xl mx-auto text-white space-y-4 py-12">
          <div className="inline-flex items-center gap-1.5 bg-brand-orange text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg border border-white/10 about-hero-badge">
            <Award size={11} />
            Since 2021 in Abu Dhabi
          </div>
          <h1 className="font-headline text-3.5xl sm:text-5xl font-extrabold tracking-tight leading-tight max-w-3xl about-hero-title">
            Engineering Visual Landmarks and Structural Integrity
          </h1>
          <p className="font-sans text-sm sm:text-base text-zinc-300 leading-normal max-w-xl about-hero-text">
            Get to know Pro Graphics Buildings Maintenance—our engineering standards, premium materials, and the expert team driving architectural signage across the UAE.
          </p>
        </div>
      </section>

      {/* 2. Brand Story & Metrics */}
      <section className="py-20 px-6 md:px-12 border-b border-brand-light-gray">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6 about-story-text">
            <div className="space-y-2">
              <span className="font-headline text-xs font-bold text-brand-orange uppercase tracking-wider">Our Story</span>
              <h2 className="font-headline text-3xl font-extrabold text-brand-primary tracking-tight">
                Architectural Branding Rooted in Professionalism
              </h2>
            </div>
            <p className="font-sans text-sm text-brand-gray leading-relaxed">
              Established in Abu Dhabi, Pro Graphics Buildings Maintenance has grown from a specialized workshop into one of the UAE's most trusted coordinators for commercial building maintenance, wayfinding systems, and premium architectural signage. 
            </p>
            <p className="font-sans text-sm text-brand-gray leading-relaxed">
              We operate on a simple principle: **precision in every detail**. Whether fabricating luxury stainless steel letters, wrapping a commercial fleet of vans, or installing fire safety maps under strict civil defense guidelines, our team guarantees structural durability, material authenticity, and code compliance.
            </p>

            {/* Metrics Panel */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 about-story-metric-container">
              <div className="bg-brand-surface border border-brand-light-gray p-4 rounded-xl shadow-sm text-center about-story-metric">
                <div className="font-headline text-3.5xl font-black text-brand-primary">5+</div>
                <div className="font-headline text-[9px] font-bold text-brand-gray uppercase tracking-widest mt-1">Years Experience</div>
              </div>
              <div className="bg-brand-surface border border-brand-light-gray p-4 rounded-xl shadow-sm text-center about-story-metric">
                <div className="font-headline text-3.5xl font-black text-brand-primary">50+</div>
                <div className="font-headline text-[9px] font-bold text-brand-gray uppercase tracking-widest mt-1">Projects Completed</div>
              </div>
              <div className="bg-brand-surface border border-brand-light-gray p-4 rounded-xl shadow-sm text-center about-story-metric">
                <div className="font-headline text-3.5xl font-black text-brand-primary">20+</div>
                <div className="font-headline text-[9px] font-bold text-brand-gray uppercase tracking-widest mt-1 font-sans">Master Artisans</div>
              </div>
              <div className="bg-brand-surface border border-brand-light-gray p-4 rounded-xl shadow-sm text-center about-story-metric">
                <div className="font-headline text-3.5xl font-black text-brand-primary">100%</div>
                <div className="font-headline text-[9px] font-bold text-brand-gray uppercase tracking-widest mt-1">Code Compliant</div>
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative h-[320px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl border border-brand-light-gray about-story-img">
              <img
                alt="Pro Graphics team engineering dimensional signage layout"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                src={teamImg}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-brand-surface/90 backdrop-blur-sm p-3 rounded-lg border border-brand-light-gray/60 text-xs">
                <span className="font-headline font-bold text-brand-orange uppercase block">Abu Dhabi Workshop</span>
                <span className="font-sans text-brand-gray block mt-0.5">Fabricating 3D metal layouts using CNC router guides.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Pillars (Mission, Vision, Values) */}
      <section className="py-20 px-6 md:px-12 bg-brand-surface border-b border-brand-light-gray">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Mission and Vision Grid */}
          <div className="grid md:grid-cols-2 gap-8 about-pillar-container">
            <div className="bg-brand-dark border border-brand-light-gray p-8 rounded-2xl shadow-sm space-y-4 about-pillar">
              <div className="w-12 h-12 bg-brand-orange/10 border border-brand-orange/20 rounded-xl flex items-center justify-center text-brand-orange shadow-sm">
                <Target size={22} />
              </div>
              <h3 className="font-headline text-xl font-bold text-brand-primary">Our Mission</h3>
              <p className="font-sans text-sm text-brand-gray leading-relaxed">
                To elevate corporate and commercial facilities across the UAE with premium branding, signage, and building maintenance solutions that merge structural excellence with creative vision, ensuring maximum visual impact and structural longevity.
              </p>
            </div>

            <div className="bg-brand-dark border border-brand-light-gray p-8 rounded-2xl shadow-sm space-y-4 about-pillar">
              <div className="w-12 h-12 bg-brand-orange/10 border border-brand-orange/20 rounded-xl flex items-center justify-center text-brand-orange shadow-sm">
                <Eye size={22} />
              </div>
              <h3 className="font-headline text-xl font-bold text-brand-primary">Our Vision</h3>
              <p className="font-sans text-sm text-brand-gray leading-relaxed">
                To stand as the absolute benchmark for wayfinding engineering and architectural styling in the GCC region, known for our technical reliability, innovative material applications, and adherence to security and regulatory standards.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="space-y-8 pt-8">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="font-headline text-xs font-bold text-brand-orange uppercase tracking-wider">Our Core Pillars</span>
              <h3 className="font-headline text-2.5xl font-extrabold text-brand-primary tracking-tight">
                Quality Guided by Engineering
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 about-value-container">
              {values.map((val, idx) => (
                <div key={idx} className="bg-brand-dark border border-brand-light-gray p-6 rounded-xl shadow-sm hover:border-brand-orange hover:shadow-md transition-all duration-305 space-y-3 about-value">
                  <div className="w-10 h-10 bg-brand-surface border border-brand-light-gray rounded-lg flex items-center justify-center shadow-sm">
                    {val.icon}
                  </div>
                  <h4 className="font-headline text-sm font-bold text-brand-primary">{val.title}</h4>
                  <p className="font-sans text-xs text-brand-gray leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Infrastructure & Workshop Capabilities */}
      <section className="py-20 px-6 md:px-12 border-b border-brand-light-gray">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 order-last md:order-first">
            <div className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl border border-brand-light-gray about-infra-img">
              <img
                alt="Pro Graphics warehouse fabrication facilities in Musaffah Abu Dhabi"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                src={workshopImg}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-brand-surface/90 backdrop-blur-sm p-3 rounded-lg border border-brand-light-gray/60 text-xs flex items-center gap-2">
                <MapPin size={14} className="text-brand-orange shrink-0" />
                <span className="font-sans text-brand-gray">04 Al Hayyal Street, Musaffah Industrial Area, Abu Dhabi</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-6 about-infra-text">
            <div className="space-y-2">
              <span className="font-headline text-xs font-bold text-brand-orange uppercase tracking-wider">Industrial Strength</span>
              <h3 className="font-headline text-3xl font-extrabold text-brand-primary tracking-tight">
                State-of-the-Art Musaffah Production Hub
              </h3>
            </div>
            <p className="font-sans text-sm text-brand-gray leading-relaxed">
              Our centralized facility in Musaffah, Abu Dhabi, forms the core of our operations. By maintaining full in-house capabilities, we bypass third-party delays and secure strict quality control over every signage and maintenance order.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex gap-3">
                <div className="w-9 h-9 shrink-0 bg-brand-surface border border-brand-light-gray rounded flex items-center justify-center text-brand-orange">
                  <Drill size={16} />
                </div>
                <div>
                  <h4 className="font-headline text-xs font-bold text-brand-primary">Precision CNC &amp; Lasers</h4>
                  <p className="font-sans text-[11px] text-brand-gray mt-0.5">Heavy-duty cutting of acrylics, brass, and composite alloys.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-9 h-9 shrink-0 bg-brand-surface border border-brand-light-gray rounded flex items-center justify-center text-brand-orange">
                  <Users size={16} />
                </div>
                <div>
                  <h4 className="font-headline text-xs font-bold text-brand-primary">Certified Wrapping Bays</h4>
                  <p className="font-sans text-[11px] text-brand-gray mt-0.5">3M and Avery Dennison dust-free bays for vehicle fleet graphics.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-9 h-9 shrink-0 bg-brand-surface border border-brand-light-gray rounded flex items-center justify-center text-brand-orange">
                  <Wrench size={16} />
                </div>
                <div>
                  <h4 className="font-headline text-xs font-bold text-brand-primary">Welding &amp; Metal Bending</h4>
                  <p className="font-sans text-[11px] text-brand-gray mt-0.5">Structural frameworks for monumental pylons and lightboxes.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-9 h-9 shrink-0 bg-brand-surface border border-brand-light-gray rounded flex items-center justify-center text-brand-orange">
                  <Award size={16} />
                </div>
                <div>
                  <h4 className="font-headline text-xs font-bold text-brand-primary">Powder Coating &amp; Finish</h4>
                  <p className="font-sans text-[11px] text-brand-gray mt-0.5">High-resistance paint finishes resilient against sand and UV exposure.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Leadership & Team */}
      <section className="py-20 px-6 md:px-12 bg-brand-surface border-b border-brand-light-gray">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="font-headline text-xs font-bold text-brand-orange uppercase tracking-wider">Our Team</span>
            <h3 className="font-headline text-2.5xl font-extrabold text-brand-primary tracking-tight">
              Expert Hands, Proven Supervision
            </h3>
            <p className="font-sans text-sm text-brand-gray">
              Every project is managed and executed by qualified experts keeping active safety and fabrication certifications.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 about-team-container">
            {teamRoles.map((member, idx) => (
              <div key={idx} className="bg-brand-dark border border-brand-light-gray p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full about-team-card">
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-brand-orange/5 border border-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange">
                    <Users size={18} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-headline text-base font-bold text-brand-primary leading-tight">{member.role}</h4>
                    <span className="inline-block text-[10px] font-headline font-bold text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {member.specialty}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-brand-gray leading-relaxed">
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Block */}
      <section className="bg-brand-dark py-20 px-6 about-cta">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h3 className="font-headline text-3xl md:text-4.5xl font-extrabold text-brand-primary tracking-tight leading-tight">
            Ready to Partner with Our Musaffah Engineers?
          </h3>
          <p className="font-sans text-sm sm:text-base text-brand-gray max-w-xl mx-auto leading-relaxed">
            Schedule a site visit with our wayfinding and signage surveyors today. We analyze visibility, map structural load requirements, and draft official municipality blueprints.
          </p>
          <div>
            <a
              href="https://wa.me/919528871265"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-brand-orange text-white hover:bg-brand-rust font-headline text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full shadow-lg transition-all active:scale-95 duration-200 cursor-pointer"
            >
              Consult an Engineer on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
