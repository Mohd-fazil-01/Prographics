import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, Sparkles } from 'lucide-react';

interface Message {
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

const KNOWLEDGE_BASE = [
  {
    keywords: ['sign', 'board', 'led', '3d', 'letter', 'acrylic', 'neon', 'lightbox', 'pylon', 'totem', 'fascia', 'hoarding'],
    response: "We fabricate custom architectural signage! Our capabilities include 3D illuminated letters, SS (stainless steel) luxury letters, acrylic signs, LED lightboxes, freestanding pylons/totems, and construction site hoardings. All are custom-made in our Musaffah workshop."
  },
  {
    keywords: ['uv', 'print', 'flatbed', 'acrylic print', 'substrate', 'rigid', 'direct'],
    response: "Our state-of-the-art UV flatbed printing prints directly onto rigid substrates like acrylic, aluminum composite (ACM), foam board, wood, tiles, and glass. High-resolution, scratch-resistant, and weather-proof."
  },
  {
    keywords: ['safety', 'compliance', 'fire', 'exit', 'warning', 'hazard', 'smoking', 'floor plan', 'civil defense', 'regulatory'],
    response: "We fabricate UAE Civil Defense-compliant safety signs, exit signs, fire assembly maps, hazard warnings, restricted access placards, and custom SS door plaques. We ensure full compliance with municipal building codes."
  },
  {
    keywords: ['wayfinding', 'direction', 'arrow', 'map', 'directory', 'parking', 'lift', 'staircase', 'navigation'],
    response: "Our wayfinding systems guide traffic smoothly through offices, malls, campuses, and parking lots. We print site directories, suspended direction arrows, lift lobby graphics, and color-coded parking routing boards."
  },
  {
    keywords: ['kiosk', 'booth', 'stand', 'exhibition', 'retail', 'display'],
    response: "We design and custom-build retail kiosks, digital display stands, visitor registration points, and modular exhibition booths. We integrate branding, metal alloys, and digital screens."
  },
  {
    keywords: ['wrap', 'vehicle', 'fleet', 'car', 'van', 'truck', 'sticker', 'window', 'frosting', 'mural', 'wall'],
    response: "Transform your vehicles into mobile ads! We apply premium 3M/Avery Dennison cast wraps on single cars or entire commercial fleets. We also install office window frosting, decorative vinyl decals, and wall murals."
  },
  {
    keywords: ['location', 'address', 'where', 'city', 'dubai', 'abu dhabi', 'musaffah', 'sharjah', 'ajman', 'workshop'],
    response: "Our main workshop and headquarters are located at 04 Al Hayyal Street, Musaffah Industrial Area, Abu Dhabi, UAE. We deliver and install signs across all emirates including Abu Dhabi, Dubai, Sharjah, and Ajman."
  },
  {
    keywords: ['price', 'cost', 'quote', 'aed', 'estimation', 'rate', 'budget'],
    response: "To get an accurate price quote, please click the 'Request a Quote' button or visit the Contact page to send us your dimensions and requirements. Our project managers will send you an official quotation within 24 hours."
  },
  {
    keywords: ['material', 'metal', 'steel', 'aluminum', 'gold', 'brass'],
    response: "We use premium, weather-resistant materials: 316-grade marine stainless steel, brushed aluminum, acrylics, and UV-protective coatings. They are engineered to withstand the extreme UAE heat and dust."
  },
  {
    keywords: ['time', 'day', 'duration', 'long', 'week', 'lead'],
    response: "Standard sign fabrication and installation takes 3 to 7 working days once design drafts and municipality permits (if required) are approved. Large-scale wraps or structural pylons may take slightly longer."
  },
  {
    keywords: ['hi', 'hello', 'hey', 'start', 'greet'],
    response: "Hello! Welcome to Pro Graphics. I am your virtual assistant. How can I help you today? You can ask about our signage products, vehicle wrapping, safety codes, or workshop location!"
  }
];

const DEFAULT_RESPONSE = "I'm here to help with any questions about Pro Graphics signage, printing, and maintenance services! For custom orders, price quotes, or urgent details, you can chat directly with our Musaffah project engineers on WhatsApp at +91 9528871265.";

const SUGGESTIONS = [
  "Do you make 3D signage?",
  "What is your workshop address?",
  "How can I request a quote?",
  "What materials do you use?"
];

export default function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: "Hello! I am the Pro Graphics Virtual Assistant. Ask me anything about our signage, printing, wrapping, and maintenance services!",
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg: Message = {
      sender: 'user',
      text,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const normalizedInput = text.toLowerCase();
      let matchedResponse = '';

      // Match keywords
      for (const item of KNOWLEDGE_BASE) {
        if (item.keywords.some(keyword => normalizedInput.includes(keyword))) {
          matchedResponse = item.response;
          break;
        }
      }

      if (!matchedResponse) {
        matchedResponse = DEFAULT_RESPONSE;
      }

      const botMsg: Message = {
        sender: 'bot',
        text: matchedResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Floating Buttons Group */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3 select-none">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/+971547369746"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95 duration-200 cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.449 5.428 0 9.847-4.401 9.851-9.813.002-2.622-1.018-5.086-2.87-6.941C16.39 1.993 13.93 1.01 11.31 1.01 5.926 1.01 1.543 5.393 1.54 10.781c-.001 1.562.415 3.09 1.202 4.424l-.992 3.628 3.734-.979z"/>
            <path d="M17.472 14.382c-.3-.149-1.778-.878-2.054-.978-.276-.1-.476-.149-.676.15-.2.3-.778.978-.952 1.178-.176.2-.351.224-.651.075-1.04-.522-1.803-1.024-2.529-2.28-.19-.328.19-.305.543-.997.099-.199.049-.374-.025-.524-.075-.15-.676-1.63-.926-2.235-.244-.589-.493-.51-.676-.519-.173-.009-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.778-.727 2.028-1.43.25-.702.25-1.3.176-1.43-.076-.13-.277-.229-.578-.379z"/>
          </svg>
        </a>

        {/* Chatbot Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95 duration-200 cursor-pointer ${
            isOpen ? 'bg-brand-rust text-white' : 'bg-brand-orange text-white'
          }`}
          aria-label="Toggle chatbot"
        >
          {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
        </button>
      </div>

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="fixed bottom-22 right-6 w-[340px] sm:w-[380px] h-[500px] bg-brand-surface border border-brand-light-gray rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col transition-all duration-300 transform scale-100 origin-bottom-right">
          {/* Header */}
          <div className="bg-brand-dark border-b border-brand-light-gray p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-brand-orange/10 border border-brand-orange/20 rounded-lg flex items-center justify-center text-brand-orange">
                <Bot size={18} />
              </div>
              <div>
                <h4 className="font-headline text-sm font-bold text-brand-primary flex items-center gap-1.5 leading-none">
                  Assistant Desk
                  <span className="inline-flex items-center gap-1 bg-brand-orange/15 text-[9px] font-black text-brand-orange tracking-widest px-1.5 py-0.5 rounded-full uppercase scale-90">
                    <Sparkles size={8} /> AI
                  </span>
                </h4>
                <span className="text-[10px] text-brand-gray font-sans mt-0.5 block">Musaffah Support Loop</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-brand-gray hover:text-brand-orange transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-brand-dark/5 text-xs font-sans">
            {messages.map((msg, index) => {
              const isUser = msg.sender === 'user';
              return (
                <div
                  key={index}
                  className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-xl p-3.5 leading-relaxed shadow-sm border ${
                      isUser
                        ? 'bg-brand-orange border-brand-orange text-white rounded-br-none'
                        : 'bg-brand-surface border-brand-light-gray text-brand-primary rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-brand-surface border border-brand-light-gray rounded-xl rounded-bl-none p-3.5 shadow-sm flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-brand-gray rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-brand-gray rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-brand-gray rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Prompts Slat */}
          {messages.length === 1 && (
            <div className="px-4 py-2 bg-brand-dark/10 border-t border-brand-light-gray flex flex-wrap gap-1.5">
              {SUGGESTIONS.map((sug, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(sug)}
                  className="bg-brand-surface border border-brand-light-gray hover:border-brand-orange hover:text-brand-orange text-[10px] text-brand-gray px-2.5 py-1.5 rounded-full transition-all text-left cursor-pointer"
                >
                  {sug}
                </button>
              ))}
            </div>
          )}

          {/* Form Input Slat */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputText);
            }}
            className="p-3 bg-brand-surface border-t border-brand-light-gray flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about signage, wraps, quotes..."
              className="flex-grow bg-brand-dark/10 border border-brand-light-gray rounded-lg py-2.5 px-3.5 text-brand-primary text-xs focus:outline-none focus:border-brand-orange placeholder-brand-gray/65"
            />
            <button
              type="submit"
              className="w-9 h-9 bg-brand-orange hover:bg-brand-rust text-white rounded-lg flex items-center justify-center transition-colors shrink-0 cursor-pointer"
              aria-label="Send message"
            >
              <Send size={14} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
