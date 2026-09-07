import React, { useState } from 'react';

function PromotionalOffers() {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000); 
  };

  const offers = [
    {
      id: 1,
      title: "Flat 10% Off",
      desc: "Living room & seating setups.",
      code: "SSFLAT10",
      highlight: false
    },
    {
      id: 2,
      title: "Flat 15% Off",
      desc: "Premium bedroom collections.",
      code: "SSFLAT15",
      highlight: false
    },
    {
      id: 3,
      title: "Flat 20% Off",
      desc: "Bespoke & custom engineered.",
      code: "LUXE20",
      highlight: false
    },
    {
      id: 4,
      title: "Up to 60% Off",
      desc: "Mega clearance & surprises!*",
      code: "MEGA60",
      highlight: true
    }
  ];

  const scrollingOffers = [...offers, ...offers, ...offers];

  return (
    <section className="w-full py-5 md:py-6 bg-[#f5ebe0] font-sans border-b border-gray-200 overflow-hidden">
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.3333%); }
        }
        .animate-marquee-infinite {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee-infinite:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="w-full relative">
        
        {/* Whitish blur (gradient fade) hata diya gaya hai */}

        <div className="animate-marquee-infinite gap-4 md:gap-6 px-4 cursor-grab active:cursor-grabbing">
          {scrollingOffers.map((offer, index) => (
            <div 
              key={`${offer.id}-${index}`}
              className={`relative flex flex-row items-stretch w-[320px] md:w-[380px] h-[90px] md:h-[100px] rounded-xl transition-shadow duration-300 shadow-sm hover:shadow-md overflow-hidden flex-shrink-0 ${
                offer.highlight 
                  ? 'bg-[#13463f] text-white border border-[#1a5f55]' 
                  : 'bg-white text-[#0a0a0a] border border-gray-200'
              }`}
            >
              {offer.highlight && (
                <div className="absolute -top-10 -left-10 w-24 h-24 bg-[#d4af37]/20 rounded-full blur-xl pointer-events-none"></div>
              )}

              <div className="flex-grow p-4 flex flex-col justify-center z-10">
                <h3 className={`text-lg md:text-xl font-black tracking-tight mb-0.5 ${offer.highlight ? 'text-[#d4af37]' : 'text-[#13463f]'}`}>
                  {offer.title}
                </h3>
                <p className={`text-[10px] md:text-xs leading-snug truncate ${offer.highlight ? 'text-gray-300' : 'text-gray-500'}`}>
                  {offer.desc}
                </p>
              </div>

              {/* DALD VISIBILITY: Thickness and opacity increased */}
              <div className={`relative w-[2px] border-l-2 border-dashed my-1.5 z-10 ${offer.highlight ? 'border-white/50' : 'border-black/50'}`}>
                {/* Punch holes */}
                <div className="absolute -top-2.5 -left-[7px] w-3.5 h-3.5 rounded-full bg-[#f5ebe0]"></div>
                <div className="absolute -bottom-2.5 -left-[7px] w-3.5 h-3.5 rounded-full bg-[#f5ebe0]"></div>
              </div>

              <div className="w-[110px] md:w-[130px] p-3 flex flex-col items-center justify-center gap-1.5 z-10 bg-black/5">
                <span className={`font-mono font-bold tracking-widest text-xs md:text-sm ${offer.highlight ? 'text-white' : 'text-[#0a0a0a]'}`}>
                  {offer.code}
                </span>
                
                <button 
                  onClick={() => handleCopy(offer.code)}
                  className={`text-[9px] md:text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded transition-colors flex items-center gap-1 w-full justify-center ${
                    copiedCode === offer.code 
                      ? 'bg-green-500 text-white' 
                      : offer.highlight 
                        ? 'bg-[#d4af37] hover:bg-[#c29d31] text-black' 
                        : 'bg-[#13463f]/10 hover:bg-[#13463f] hover:text-white text-[#13463f]'
                  }`}
                >
                  {copiedCode === offer.code ? (
                    <>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      Copied
                    </>
                  ) : (
                    <>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                      Copy
                    </>
                  )}
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PromotionalOffers;