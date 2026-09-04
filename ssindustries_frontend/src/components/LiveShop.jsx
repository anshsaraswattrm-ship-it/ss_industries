import React, { useState, useEffect } from 'react';

function VirtualTourPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  // Thodi der baad automatically open hone ke liye (e.g., 5 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      
      {/* Minimized Bubble State */}
      {isMinimized ? (
        <button 
          onClick={() => setIsMinimized(false)}
          className="bg-[#d4af37] text-[#080808] p-4 rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center justify-center animate-bounce"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="23 7 16 12 23 17 23 7"></polygon>
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
          </svg>
        </button>
      ) : (
        
        {/* Expanded Premium Form State */}
        <div className="bg-[#080808] w-80 shadow-2xl border border-[#d4af37]/30 rounded-sm relative overflow-hidden">
          
          {/* Close Button */}
          <button 
            onClick={() => setIsMinimized(true)}
            className="absolute top-3 right-3 text-[#d2bfa9] hover:text-[#d4af37] transition-colors z-10"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>

          {/* Header Image/Pattern Area */}
          <div className="h-24 bg-[#13463f] flex items-center justify-center border-b border-[#d4af37]/20 relative">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 text-center px-4">
              <h3 className="text-[#d4af37] font-bold tracking-widest uppercase text-xs">Live Showroom Tour</h3>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-6">
            <p className="text-[#d2bfa9] text-xs leading-relaxed mb-5 text-center">
              Connect directly with our design experts for a 1-on-1 virtual tour of our premium furniture collection.
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-transparent border-b border-[#d2bfa9]/30 py-2 text-sm text-[#d2bfa9] placeholder-[#d2bfa9]/50 focus:outline-none focus:border-[#d4af37] transition-colors"
                  required
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="+91 Mobile Number" 
                  className="w-full bg-transparent border-b border-[#d2bfa9]/30 py-2 text-sm text-[#d2bfa9] placeholder-[#d2bfa9]/50 focus:outline-none focus:border-[#d4af37] transition-colors"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-[#d4af37] text-[#080808] font-bold uppercase tracking-widest text-xs py-3 mt-2 hover:bg-[#eadd94] transition-colors"
              >
                Request Video Call
              </button>
            </form>
          </div>

        </div>
      )}
    </div>
  );
}

export default VirtualTourPopup;