import React from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage, AdvancedVideo } from '@cloudinary/react';

// 1. Global Cloudinary Setup
const cld = new Cloudinary({
  cloud: {
    cloudName: 'zlqgwdom'
  }
});

const Gallery = () => {
  // 2. Setup Optimized Video Instance
  const brandVideo = cld.video('ss-industries/gallery/brand-film').format('auto').quality('auto');

  // Column 1: Luxury Living & Sofas
  const col1Images = [
    { imageId: "9915f251eb307f5b5f713901a8ee69d5", alt: "Emerald Velvet Sofa" },
    { imageId: "bd7c111aa444f97427736a32d7f82617", alt: "Minimalist Accent Armchair" },
    { imageId: "2426239ff80e95586e39df9c07466692", alt: "Luxury Living Room Suite" },
    { imageId: "5af7e1667d65231bc08a7fb3dd7de377", alt: "Premium Bed Frame" },
    { imageId: "88e81b1cbf1170baab139afc707b6896", alt: "Teak Dining Setup" },
  ];

  // Column 2: Modern Bedrooms & Mattresses 
  const col2Images = [
    { imageId: "b6fe37d289ec1965516bc6ad0c9e8dcb", alt: "Bespoke Royal Bed" },
    { imageId: "138c51f5ecb061cc5ddf525a8d5c5582", alt: "Artisan Craftsmanship" },
    { imageId: "2fbaf3f247b0e88c8dae86def88e6150", alt: "Orthopedic Luxury Mattress" },
    { imageId: "unnamed_4", alt: "Handmade Wooden Lounge" },
    { imageId: "photo-1524758631624-e2822e304c36", alt: "Designer Studio Finish" },
  ];

  // Column 3: Dining & Detail Craftsmanship 
  const col3Images = [
    { imageId: "33706f5082e4698b0bd37f3181ad71d3", alt: "Sculptural Lounge Chair" },
    { imageId: "photo-1618221195710-dd6b41faaea6", alt: "Architectural Interior Design" },
    { imageId: "photo-1538688525198-9b88f6f53126", alt: "Nordic Comfort Seating" },
    { imageId: "0dd8fbdc6deca9cfee40314bb16f98c9", alt: "Master Bedroom Suite" },
    { imageId: "unnamed_3", alt: "Premium Finishes" },
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
            
            <div className="absolute top-4 left-4 z-20 pointer-events-none">
              <span className="bg-black/60 backdrop-blur-md border border-[#d4af37]/40 text-[#d4af37] text-[10px] tracking-widest uppercase font-bold px-3.5 py-1.5 rounded-full shadow-md">
                Brand Film
              </span>
            </div>

            {/* Cloudinary Optimized Video */}
            <AdvancedVideo 
              cldVid={brandVideo}
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover brightness-95 contrast-105"
            />
          </div>

          {/* Scrolling Grid */}
          <div className="w-full lg:w-[55%] h-[480px] sm:h-[540px] lg:h-full grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-3 md:gap-4">
              <div className="flex flex-col gap-3 md:gap-4 animate-scroll-up hover:[animation-play-state:paused]">
                {[...col1Images, ...col1Images].map((img, i) => {
                  const optimizedImg = cld.image(img.imageId).format('auto').quality('auto');
                  
                  return (
                    <div key={`col1-${i}`} className="w-full h-44 sm:h-52 md:h-60 rounded-xl overflow-hidden shadow-lg border border-white/10 flex-shrink-0 group relative cursor-pointer">
                      <AdvancedImage 
                        cldImg={optimizedImg} 
                        alt={img.alt} 
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                        <span className="text-white text-xs tracking-wider font-medium drop-shadow-md">{img.alt}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3 md:gap-4">
              <div className="flex flex-col gap-3 md:gap-4 animate-scroll-down hover:[animation-play-state:paused]">
                {[...col2Images, ...col2Images].map((img, i) => {
                  const optimizedImg = cld.image(img.imageId).format('auto').quality('auto');

                  return (
                    <div key={`col2-${i}`} className="w-full h-44 sm:h-52 md:h-60 rounded-xl overflow-hidden shadow-lg border border-white/10 flex-shrink-0 group relative cursor-pointer">
                      <AdvancedImage 
                        cldImg={optimizedImg} 
                        alt={img.alt} 
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                        <span className="text-white text-xs tracking-wider font-medium drop-shadow-md">{img.alt}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Column 3 */}
            <div className="hidden md:flex flex-col gap-4">
              <div className="flex flex-col gap-4 animate-scroll-up hover:[animation-play-state:paused]">
                {[...col3Images, ...col3Images].map((img, i) => {
                  const optimizedImg = cld.image(img.imageId).format('auto').quality('auto');

                  return (
                    <div key={`col3-${i}`} className="w-full h-60 rounded-xl overflow-hidden shadow-lg border border-white/10 flex-shrink-0 group relative cursor-pointer">
                      <AdvancedImage 
                        cldImg={optimizedImg} 
                        alt={img.alt} 
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                        <span className="text-white text-xs tracking-wider font-medium drop-shadow-md">{img.alt}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;