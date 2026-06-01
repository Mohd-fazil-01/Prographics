import { useState, useEffect, FormEvent } from 'react';
import { MapPin, Mail, Phone, Calendar, ArrowRight, MessageSquare, Check, Trash2, Clock } from 'lucide-react';
import { Inquiry } from '../types';

interface ContactFormAndMapProps {
  prefillDescription: string;
  setPrefillDescription: (val: string) => void;
}

export default function ContactFormAndMap({ prefillDescription, setPrefillDescription }: ContactFormAndMapProps) {
  // Floating Label States
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [serviceSelected, setServiceSelected] = useState('signage');
  const [details, setDetails] = useState('');

  // Local persistent inquiries list
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [showSuccessBanner, setShowSuccessBanner] = useState(false);

  // Load inquiries on mount
  useEffect(() => {
    const saved = localStorage.getItem('pro_graphics_inquiries');
    if (saved) {
      try {
        setInquiries(JSON.parse(saved));
      } catch (e) {
        console.error('Error loading local inquiries list', e);
      }
    }
  }, []);

  // Update details if prefill changes globally
  useEffect(() => {
    if (prefillDescription) {
      setDetails(prefillDescription);
      // Automatically pull interest service if standard prefill contains keywords
      if (prefillDescription.includes('Outdoor')) setServiceSelected('outdoor');
      if (prefillDescription.includes('LED')) setServiceSelected('led');
      if (prefillDescription.includes('3D')) setServiceSelected('3d-letters');
      if (prefillDescription.includes('Wayfinding')) setServiceSelected('wayfinding');
      if (prefillDescription.includes('Vehicle')) setServiceSelected('vehicle');
    }
  }, [prefillDescription]);

  // Handle Submit
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!fullName || !emailAddress || !details) return;

    const statuses: Inquiry['status'][] = [
      'In Review',
      'Drafting Blueprint',
      'Project Manager Assigned',
      'In Production'
    ];

    const newInquiry: Inquiry = {
      id: `inq-${Date.now()}`,
      fullName,
      emailAddress,
      serviceSelected,
      details,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: statuses[Math.floor(Math.random() * 2)] // Mixes Review or Drafting for feedback
    };

    const updated = [newInquiry, ...inquiries];
    setInquiries(updated);
    localStorage.setItem('pro_graphics_inquiries', JSON.stringify(updated));

    // Clear inputs
    setFullName('');
    setEmailAddress('');
    setDetails('');
    setPrefillDescription('');
    setShowSuccessBanner(true);

    // Timeout alert banner
    setTimeout(() => {
      setShowSuccessBanner(false);
    }, 6000);
  };

  // Remove individual Inquiry ticket
  const handleRemoveInquiry = (id: string) => {
    const updated = inquiries.filter(i => i.id !== id);
    setInquiries(updated);
    localStorage.setItem('pro_graphics_inquiries', JSON.stringify(updated));
  };

  const contactOptions = [
    {
      icon: <MapPin size={20} className="text-brand-orange" />,
      title: "Headquarters",
      text: "Musaffah Industrial Area, Abu Dhabi, UAE"
    },
    {
      icon: <Mail size={20} className="text-brand-orange" />,
      title: "Email Liaison",
      text: "info@prographics.ae"
    },
    {
      icon: <Phone size={20} className="text-brand-orange" />,
      title: "Call Direct",
      text: "+971 2 555 0000"
    },
    {
      icon: <Calendar size={20} className="text-brand-orange" />,
      title: "Operational Hours",
      text: "Mon - Fri: 8:00 AM - 6:00 PM (Abu Dhabi Zone)"
    }
  ];

  return (
    <div className="space-y-20 py-16">
      {/* Introduction Slat */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-xl">
          <p className="font-headline text-xs font-bold text-brand-orange uppercase tracking-wider mb-2">Abu Dhabi HQ Contact</p>
          <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight">Get in Touch</h2>
          <p className="font-sans text-brand-gray mt-2 text-sm leading-relaxed">
            Ready to establish a commanding physical branding signature? Send details of your corporate site blueprint, and we will dispatch a technician surveyor immediately.
          </p>
        </div>
      </section>

      {/* Main Grid Contact Pane */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left column details card & tickets inbox */}
        <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
          <div className="space-y-6">
            <h3 className="font-headline text-lg font-bold text-brand-primary border-b border-brand-light-gray pb-3">
              Direct Channels
            </h3>

             <div className="grid gap-6">
              {contactOptions.map((opt, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="w-12 h-12 p-1.5 rounded-lg bg-[#0C0C0C] border border-white/5 flex items-center justify-center shadow-sm group-hover:bg-brand-orange group-hover:text-black group-hover:border-brand-orange transition-all duration-300 animate-none">
                    {opt.icon}
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold text-brand-rust uppercase tracking-wider block font-headline">
                      {opt.title}
                    </span>
                    <p className="font-sans text-sm text-brand-primary font-semibold leading-normal">
                      {opt.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp Accent Trigger Button */}
            <div className="pt-4">
              <a
                href="https://wa.me/97125550000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25d366]/90 hover:bg-[#25d366] text-white font-headline text-xs font-extrabold uppercase tracking-wider px-8 py-4 rounded-full shadow-md active:scale-95 transition-all"
              >
                <MessageSquare size={16} />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* PERSISTENT LOCAL LIAISON INBOX TICKET VIEW */}
          {inquiries.length > 0 && (
            <div className="bg-[#0D0D0D] border border-white/5 p-6 rounded-xl space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-brand-primary uppercase tracking-wider font-headline">
                  Submitted Inquiries Tracker
                </span>
                <span className="bg-brand-orange text-black text-[10px] font-bold px-2.5 py-0.5 rounded-full font-headline">
                  {inquiries.length} Active Tickets
                </span>
              </div>

              <div className="space-y-3.5 max-h-[240px] overflow-y-auto pr-1">
                {inquiries.map((inq) => {
                  const resolvedServ = inq.serviceSelected === 'signage' ? 'Signage Solutions' :
                    inq.serviceSelected === 'outdoor' ? 'Outdoor Signage' :
                    inq.serviceSelected === 'led' ? 'LED Sign Boards' :
                    inq.serviceSelected === '3d-letters' ? '3D Letters Sign' :
                    inq.serviceSelected === 'wayfinding' ? 'Wayfinding Signage' : 'Vehicle wrap';
                  return (
                    <div key={inq.id} className="bg-[#121212] p-4 rounded-lg border border-white/5 shadow-sm relative group space-y-2">
                      <button
                        onClick={() => handleRemoveInquiry(inq.id)}
                        className="absolute right-3 top-3 text-slate-500 hover:text-rose-400 transition-colors"
                        title="Remove Inquiry Ticket"
                      >
                        <Trash2 size={13} />
                      </button>

                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                          <span className="text-[10px] font-bold text-brand-primary uppercase tracking-wide font-headline">
                            Ticket: {resolvedServ}
                          </span>
                        </div>
                        <p className="font-sans text-[11px] text-brand-gray line-clamp-1 italic">
                          "{inq.details}"
                        </p>
                      </div>

                      <div className="flex justify-between items-center pt-1 border-t border-white/5 text-[10px]">
                        <span className="text-slate-500 font-sans flex items-center gap-1">
                          <Clock size={10} /> {inq.timestamp}
                        </span>
                        <span className="text-brand-orange font-bold font-headline uppercase bg-brand-orange/10 px-1.5 py-0.5 border border-brand-orange/15 rounded text-[9px]">
                          {inq.status}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Right column - professional layout form */}
        <div className="lg:col-span-7 bg-[#0D0D0D] text-white rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden border border-white/5">
          {/* Subtle accent background blur */}
          <div className="absolute -top-32 -right-32 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

          <h3 className="font-headline text-xl font-bold tracking-tight mb-8">
            Send a Digital Blueprint
          </h3>

          {showSuccessBanner && (
            <div className="bg-emerald-950/80 border border-emerald-800 text-emerald-200 p-4 rounded-lg text-xs leading-relaxed mb-6 flex items-start gap-2 fader-active">
              <Check size={18} className="text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block uppercase mb-0.5 tracking-wider font-headline text-[10px]">Inquiry Logged Securely</span>
                A liaison officer from our Musaffah Production House has been assigned. Your docket layout has been added below. We will reach back via email within 2 business hours.
              </div>
            </div>
          )}

          <form onSubmit={handleFormSubmit} className="space-y-8 font-sans">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name Input */}
              <div className="relative pt-2">
                <input
                  type="text"
                  required
                  id="fullName"
                  placeholder="Your Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="floating-input peer w-full bg-transparent border-0 border-b border-white/10 text-white placeholder-transparent focus:outline-none focus:ring-0 focus:border-brand-orange pb-2 text-sm transition-colors"
                />
                <label
                  htmlFor="fullName"
                  className="floating-label absolute left-0 top-2 cursor-text transition-all duration-300 origin-left text-zinc-500 text-xs font-medium uppercase tracking-wider"
                >
                  Full Name
                </label>
              </div>

              {/* Email Input */}
              <div className="relative pt-2">
                <input
                  type="email"
                  required
                  id="emailAddress"
                  placeholder="Your Email"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  className="floating-input peer w-full bg-transparent border-0 border-b border-white/10 text-white placeholder-transparent focus:outline-none focus:ring-0 focus:border-brand-orange pb-2 text-sm transition-colors"
                />
                <label
                  htmlFor="emailAddress"
                  className="floating-label absolute left-0 top-2 cursor-text transition-all duration-300 origin-left text-zinc-500 text-xs font-medium uppercase tracking-wider"
                >
                  Email Address
                </label>
              </div>
            </div>

            {/* Service Dropdown */}
            <div className="space-y-1.5">
              <label className="block text-zinc-500 text-[10px] font-bold uppercase tracking-wider font-headline">
                Select Layout Service Category
              </label>
              <select
                value={serviceSelected}
                onChange={(e) => setServiceSelected(e.target.value)}
                className="w-full bg-transparent border-0 border-b border-white/10 text-white focus:outline-none focus:ring-0 focus:border-brand-orange pb-2 text-sm transition-colors cursor-pointer"
              >
                <option value="signage" className="text-white bg-zinc-950">Indoor Signage Solutions</option>
                <option value="outdoor" className="text-white bg-zinc-950">Outdoor Facades</option>
                <option value="led" className="text-white bg-zinc-950">LED Sign Boards</option>
                <option value="3d-letters" className="text-white bg-zinc-950">3D Letters Signage</option>
                <option value="wayfinding" className="text-white bg-zinc-950">Wayfinding Navigation</option>
                <option value="vehicle" className="text-white bg-zinc-950">Vehicle Fleet wrap</option>
              </select>
            </div>

            {/* Message Area */}
            <div className="relative pt-2">
              <textarea
                required
                id="details"
                rows={5}
                placeholder="Details of your request"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="floating-input peer w-full bg-transparent border-0 border-b border-white/10 text-white placeholder-transparent focus:outline-none focus:ring-0 focus:border-brand-orange pb-2 text-sm transition-colors resize-none"
              />
              <label
                htmlFor="details"
                className="floating-label absolute left-0 top-2 cursor-text transition-all duration-300 origin-left text-zinc-500 text-xs font-medium uppercase tracking-wider"
              >
                Project Details &amp; Requirements
              </label>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="w-full md:w-auto bg-brand-orange text-black font-headline text-xs font-bold uppercase tracking-wider px-10 py-4 rounded-full hover:bg-brand-rust hover:text-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                Submit Inquiry
                <ArrowRight size={14} />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Stylized map container strip */}
      <section className="w-full h-[450px] relative border-y border-white/5 overflow-hidden group select-none">
        {/* Subtle map aesthetic overlay */}
        <div className="absolute inset-0 z-10 bg-brand-primary/5 pointer-events-none group-hover:bg-transparent transition-colors duration-500" />
        
        <img
          alt="Technical Map of Abu Dhabi central sectors and Musaffah Facility"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-[1.02]"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa8H4DQpoGUPzG3ZZ6Mde6IgkpKY-i8ms9y_VAAmLVP89ZVpb2uta48PuxAKZTc_zido660CjWLsWdcJeBrlAQD6--EbtF9areOSQhRJlaHooGS82lI5ky5lfwRrU___OVVr-7Y-WM2mKUmnNr7YPH7dcYUbHmP9uxfJiC9JcNnzW2Of6PaOlBX5qQOsGZRGxn68RcLa5945-o5dpJouVYgIe3mv2gI39M2Y82Iz6z_0mkcfwleoShW33bDDFmqM8VylZOAsPlwe4"
        />

        {/* Map Float Details Overlay Card */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-12 z-20 bg-[#0D0D0D]/95 backdrop-blur-md p-6 shadow-2xl border border-white/10 rounded-xl max-w-sm w-[calc(100%-32px)]">
          <p className="font-headline text-[10px] font-bold uppercase tracking-widest text-brand-orange">Manufacturing Facility</p>
          <h4 className="font-headline text-lg font-bold text-brand-primary mt-1 mb-1">Abu Dhabi Facility</h4>
          <p className="font-sans text-xs text-brand-gray leading-relaxed mb-4">
            Our state-of-the-art production house works 24/7 catering for primary UAE developers and GCC cross-border signage rollouts.
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-brand-orange hover:text-brand-rust text-xs font-bold font-headline uppercase tracking-wider"
          >
            Get Directions <span className="ml-1 text-[10px]">↗</span>
          </a>
        </div>
      </section>
    </div>
  );
}
