import React from 'react';

function LiveVideoBanner() {
  const handleBannerClick = () => {
    // Yahan apna VDC modal open karne ka function ya navigation laga dena
    console.log("Live Video Consultation banner clicked!");
  };

  return (
    <section className="w-full py-8 md:py-12 bg-[#fdfaf6] px-4 md:px-8">
      <div className="max-w-[1350px] mx-auto">
        
        {/* Banner Container */}
        <div 
          onClick={handleBannerClick}
          className="relative w-full rounded-2xl overflow-hidden cursor-pointer shadow-lg group transition-transform duration-300 hover:scale-[1.01]"
          style={{
            background: 'linear-gradient(135deg, #13463f 0%, #0a241f 100%)',
          }}
        >
          {/* Background Decorative Glow Elements */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#d4af37]/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute left-1/3 -bottom-20 w-60 h-60 bg-[#1a5f55]/40 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-6 sm:p-10 md:p-12 gap-6">
            
            {/* Left Content */}
            <div className="text-center md:text-left flex flex-col items-center md:items-start max-w-xl">
              
              {/* LIVE STORE Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1 rounded-full mb-4 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
                <span className="text-white text-xs font-bold tracking-widest uppercase">LIVE STORE</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3 leading-tight">
                Shop <span className="text-[#d4af37] italic">LIVE</span> on a <br className="hidden sm:block"/>
                video call through S.S. Industries
              </h3>

              <p className="text-gray-200 text-xs sm:text-sm font-light mb-6">
                Connect with our furniture experts from the comfort of your home and experience real-time walkthroughs.
              </p>

              {/* Action Button */}
              <button className="bg-[#d4af37] hover:bg-[#c29d31] text-[#0a0a0a] font-bold text-xs sm:text-sm px-6 py-3 rounded-full tracking-wider uppercase shadow-md transition-all duration-300 flex items-center gap-2 group-hover:gap-3">
                <span>Start Video Consultation</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>

            </div>

            {/* Right Graphic / Preview Box */}
            <div className="w-full md:w-[420px] aspect-[16/9] rounded-xl bg-black/30 border border-white/15 overflow-hidden relative shadow-2xl flex items-center justify-center group-hover:border-[#d4af37]/50 transition-colors">
              
              {/* Dummy Image or Video Call UI mockup */}
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Live Video Shopping Preview" 
                className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Play / Live Overlay Icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#d4af37] text-[#0a0a0a] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default LiveVideoBanner;