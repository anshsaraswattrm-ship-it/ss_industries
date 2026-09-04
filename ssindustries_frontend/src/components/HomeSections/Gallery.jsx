import React from 'react';

const Gallery = () => {
  // Column 1: Luxury Living & Sofas (Scroll UPWARD)
  const col1Images = [
    { url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80", alt: "Emerald Velvet Sofa" },
    { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80", alt: "Minimalist Accent Armchair" },
    { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80", alt: "Luxury Living Room Suite" },
    { url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80", alt: "Premium Bed Frame" },
    { url: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80", alt: "Teak Dining Setup" },
  ];

  // Column 2: Modern Bedrooms & Mattresses (Scroll DOWNWARD)
  const col2Images = [
    { url: "https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=800&q=80", alt: "Bespoke Royal Bed" },
    { url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80", alt: "Artisan Craftsmanship" },
    { url: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80", alt: "Orthopedic Luxury Mattress" },
    { url: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=800&q=80", alt: "Handmade Wooden Lounge" },
    { url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80", alt: "Designer Studio Finish" },
  ];

  // Column 3: Dining & Detail Craftsmanship (Scroll UPWARD)
  const col3Images = [
    { url: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80", alt: "Sculptural Lounge Chair" },
    { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", alt: "Architectural Interior Design" },
    { url: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80", alt: "Nordic Comfort Seating" },
    { url: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=800&q=80", alt: "Master Bedroom Suite" },
    { url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80", alt: "Premium Finishes" },
  ];

  return (
    <section 
      className="py-14 md:py-20 font-sans relative overflow-hidden text-white"
      style={{ background: 'linear-gradient(135deg, #0d2e29 0%, #061815 100%)' }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollUp {
          0% { transform: translateY(0%); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0%); }
        }
        .animate-scroll-up {
          animation: scrollUp 32s linear infinite;
        }
        .animate-scroll-down {
          animation: scrollDown 32s linear infinite;
        }
      `}} />

      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14 relative z-10">
          <span className="text-[#d4af37] text-[11px] md:text-xs tracking-[0.3em] uppercase font-semibold block mb-2">
            The Atelier Experience
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight inline-block">
            Our <span className="font-light italic text-[#d4af37]">Gallery</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4"></div>
          <p className="text-gray-300 max-w-lg mx-auto text-xs md:text-sm mt-3 font-normal">
            A glimpse into our bespoke craftsmanship, hand-finished silhouettes, and enduring comfort.
          </p>
        </div>

        {/* Outer Layout wrapper */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-stretch h-auto lg:h-[620px]">
          
          {/* Showcase Video Container */}
          <div className="w-full lg:w-[45%] h-[300px] sm:h-[400px] md:h-[460px] lg:h-full rounded-2xl overflow-hidden shadow-2xl border border-[#d4af37]/30 relative group bg-[#0a0a0a]">
            
            {/* Subtle luxury badge overlay */}
            <div className="absolute top-4 left-4 z-20 pointer-events-none">
              <span className="bg-black/60 backdrop-blur-md border border-[#d4af37]/40 text-[#d4af37] text-[10px] tracking-widest uppercase font-bold px-3.5 py-1.5 rounded-full shadow-md">
                Brand Film
              </span>
            </div>

            <video 
              className="w-full h-full object-cover brightness-95 contrast-105"
              controls 
              autoPlay 
              muted 
              loop 
              playsInline
              preload="metadata"
            >
              {/* Replace with your brand video URL */}
              <source src="https://assets.mixkit.co/videos/preview/mixkit-living-room-with-modern-furniture-41481-large.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Scrolling Grid */}
          <div className="w-full lg:w-[55%] h-[480px] sm:h-[540px] lg:h-full grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-3 md:gap-4">
              <div className="flex flex-col gap-3 md:gap-4 animate-scroll-up hover:[animation-play-state:paused]">
                {[...col1Images, ...col1Images].map((img, i) => (
                  <div key={`col1-${i}`} className="w-full h-44 sm:h-52 md:h-60 rounded-xl overflow-hidden shadow-lg border border-white/10 flex-shrink-0 group relative cursor-pointer">
                    <img 
                      src={img.url} 
                      alt={img.alt} 
                      loading="lazy" 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                      <span className="text-white text-xs tracking-wider font-medium drop-shadow-md">{img.alt}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3 md:gap-4">
              <div className="flex flex-col gap-3 md:gap-4 animate-scroll-down hover:[animation-play-state:paused]">
                {[...col2Images, ...col2Images].map((img, i) => (
                  <div key={`col2-${i}`} className="w-full h-44 sm:h-52 md:h-60 rounded-xl overflow-hidden shadow-lg border border-white/10 flex-shrink-0 group relative cursor-pointer">
                    <img 
                      src={img.url} 
                      alt={img.alt} 
                      loading="lazy" 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                      <span className="text-white text-xs tracking-wider font-medium drop-shadow-md">{img.alt}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3 - Displayed from MD (768px) and up */}
            <div className="hidden md:flex flex-col gap-4">
              <div className="flex flex-col gap-4 animate-scroll-up hover:[animation-play-state:paused]">
                {[...col3Images, ...col3Images].map((img, i) => (
                  <div key={`col3-${i}`} className="w-full h-60 rounded-xl overflow-hidden shadow-lg border border-white/10 flex-shrink-0 group relative cursor-pointer">
                    <img 
                      src={img.url} 
                      alt={img.alt} 
                      loading="lazy" 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                      <span className="text-white text-xs tracking-wider font-medium drop-shadow-md">{img.alt}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Gallery;