import React from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'zlqgwdom'
  }
});

function NewArrivals() {
  const products = [
    {
      id: 1,
      imageId: "77aad7ea093e4da3f88a21ad9460b7d9", 
      title: "S.S. Signature L Shape Sofa Set (3 Seater + Right Aligned Chaise)",
      price: "74,999",
      originalPrice: "1,15,383",
      discount: "35% OFF",
      tags: ["2 Set Type Launched", "+5 Set Options Launched"]
    },
    {
      id: 2,
      imageId: "9915f251eb307f5b5f713901a8ee69d5",
      title: "Premium Velvet Lounge Sofa Set (3 Seater + Left Aligned Chaise)",
      price: "82,499",
      originalPrice: "1,25,000",
      discount: "34% OFF",
      tags: ["3 Set Type Launched", "Custom Colors Available"]
    },
    {
      id: 3,
      imageId: "b6fe37d289ec1965516bc6ad0c9e8dcb",
      title: "Royal Teak Wood Bed Frame with Upholstered Headboard",
      price: "54,999",
      originalPrice: "85,000",
      discount: "35% OFF",
      tags: ["King & Queen Sizes", "Storage Options Available"]
    },
    {
      id: 4,
      imageId: "88e81b1cbf1170baab139afc707b6896",
      title: "Minimalist Marble Top Dining Table (6 Seater)",
      price: "95,000",
      originalPrice: "1,45,000",
      discount: "34% OFF",
      tags: ["New Arrival", "Premium Material"]
    }
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-[#fdfaf6] font-sans">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        {/* Added flex-col & items-center/start so the decorative green line stays perfectly centered under the text on mobile */}
        <div className="mb-8 md:mb-10 text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-2 sm:mb-3">
            <span className="text-[#d4af37] italic mr-2">New</span>
            <span className="text-[#13463f]">Arrivals</span>
          </h2>
          <div className="h-1 w-16 sm:w-20 bg-[#13463f] mt-1 sm:mt-2 rounded"></div>
          <p className="text-gray-600 text-[13px] sm:text-sm md:text-base mt-3 sm:mt-4 max-w-2xl px-2 md:px-0">
            Be the first to explore our newest furniture and home essentials, crafted for modern homes.
          </p>
        </div>

        {/* Products Horizontal Scroll Container */}
        <div className="relative w-full">
          {/* Adjusted mobile gaps slightly so elements aren't pushed too far apart on tiny screens */}
          <div className="flex overflow-x-auto gap-4 md:gap-5 pb-8 pt-2 snap-x snap-mandatory scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            
            <style>{`
              div::-webkit-scrollbar { display: none; }
            `}</style>

            {products.map((product) => {
              // Generate optimized image object on the fly
              const productImg = cld.image(product.imageId).format('auto').quality('auto');

              return (
                <div 
                  key={product.id} 
                  // Scaled starting width to w-[260px] so the second card is visible enough to prompt swiping on an iPhone SE/Mini
                  className="snap-start flex-shrink-0 w-[260px] sm:w-[280px] md:w-[320px] bg-white rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] transition-shadow duration-300 border border-gray-100 flex flex-col group cursor-pointer"
                >
                  {/* Product Image using AdvancedImage */}
                  <div className="w-full aspect-[4/3] bg-gray-100 overflow-hidden rounded-t-xl relative">
                    <AdvancedImage 
                      cldImg={productImg} 
                      alt={product.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300"></div>
                  </div>

                  {/* Product Details */}
                  {/* Reduced mobile padding slightly to maximize space */}
                  <div className="p-4 md:p-5 flex flex-col flex-grow">
                    <h3 className="text-[#0a0a0a] text-[13px] md:text-[14px] font-medium leading-snug line-clamp-2 mb-3 h-[40px]">
                      {product.title}
                    </h3>
                    
                    <div className="flex items-end gap-1.5 sm:gap-2 mb-4 flex-wrap">
                      <span className="text-base sm:text-lg md:text-xl font-bold text-[#0a0a0a]">₹{product.price}</span>
                      <span className="text-[11px] sm:text-xs md:text-sm text-gray-400 line-through mb-0.5">₹{product.originalPrice}</span>
                      <span className="text-[11px] sm:text-xs md:text-sm font-bold text-[#2a8754] mb-0.5">({product.discount})</span>
                    </div>
                    
                    <div className="flex-grow"></div>

                    {/* Tags */}
                    <div className="space-y-1.5 sm:space-y-2 border-t border-gray-100 pt-3">
                      {product.tags.map((tag, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0">
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#d4af37]"></div>
                          </div>
                          <span className="text-[10px] sm:text-[11px] md:text-xs text-gray-500 font-medium">{tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Centered View All Button */}
        <div className="mt-2 md:mt-4 flex justify-center">
          <button className="bg-[#13463f] hover:bg-[#0f3832] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-colors shadow-md flex items-center gap-2">
            View all Products
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>

      </div>
    </section>
  );
}

export default NewArrivals;