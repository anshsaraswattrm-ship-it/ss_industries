import React from 'react';

function BulkOrderBanner() {
  const handleBulkOrderClick = () => {
    // Yahan apna bulk order form modal open karne ka ya quote page par redirect karne ka logic lagana
    console.log("Place Bulk Order clicked!");
  };

  return (
    <section className="w-full py-8 md:py-12 bg-[#fdfaf6] px-4 md:px-8">
      <div className="max-w-[1350px] mx-auto">
        
        {/* Banner Container */}
        <div 
          className="relative w-full rounded-2xl overflow-hidden shadow-xl"
          style={{
            background: 'linear-gradient(135deg, #13463f 0%, #0a241f 100%)',
          }}
        >
          {/* Background Decorative Glow Elements */}
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-[#d4af37]/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute right-10 -bottom-20 w-72 h-72 bg-[#1a5f55]/30 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-6 sm:p-10 md:p-12 gap-8">
            
            {/* Left Content */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start max-w-xl">
              
              {/* Commercial Domains Tags */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4 text-xs font-semibold tracking-wider text-[#d4af37] uppercase">
                <span>Hotels</span>
                <span>•</span>
                <span>Corporate Offices</span>
                <span>•</span>
                <span>Resorts</span>
                <span>•</span>
                <span>Large Scale Projects</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3 leading-tight">
                S.S. Industries <span className="text-[#d4af37] italic font-light">for Business</span>
              </h3>

              <p className="text-gray-200 text-xs sm:text-sm font-light mb-6 leading-relaxed">
                Unlock exclusive trade pricing, custom furniture manufacturing, and end-to-end commercial solutions tailored for your architectural and interior spaces.
              </p>

              {/* Action Button */}
              <button 
                onClick={handleBulkOrderClick}
                className="bg-[#d4af37] hover:bg-[#c29d31] text-[#0a0a0a] font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full tracking-wider uppercase shadow-md transition-all duration-300 flex items-center gap-2 hover:gap-3"
              >
                <span>Place Bulk / B2B Order</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>

            </div>

            {/* Right Graphic / Mockup Illustration Style */}
            <div className="w-full lg:w-[450px] bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 relative shadow-2xl flex items-center justify-center">
              
              <div className="flex items-center justify-between w-full gap-4 text-white">
                
                {/* Feature 1 */}
                <div className="flex flex-col items-center text-center p-3 bg-white/5 rounded-lg border border-white/10 flex-1">
                  <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37] mb-2 font-bold">📦</div>
                  <span className="text-xs font-semibold mb-1">Custom Sizing</span>
                  <span className="text-[10px] text-gray-300">Built to blueprint specs</span>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col items-center text-center p-3 bg-white/5 rounded-lg border border-white/10 flex-1">
                  <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37] mb-2 font-bold">💼</div>
                  <span className="text-xs font-semibold mb-1">Trade Pricing</span>
                  <span className="text-[10px] text-gray-300">Special volume discounts</span>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col items-center text-center p-3 bg-white/5 rounded-lg border border-white/10 flex-1">
                  <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37] mb-2 font-bold">🚚</div>
                  <span className="text-xs font-semibold mb-1">Priority Delivery</span>
                  <span className="text-[10px] text-gray-300">Pan-India site dispatch</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default BulkOrderBanner;