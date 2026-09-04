import React from 'react';

function NewArrivals() {
  // Dummy data representing the new arrival products
  const products = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "S.S. Signature L Shape Sofa Set (3 Seater + Right Aligned Chaise)",
      price: "74,999",
      originalPrice: "1,15,383",
      discount: "35% OFF",
      tags: ["2 Set Type Launched", "+5 Set Options Launched"]
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Premium Velvet Lounge Sofa Set (3 Seater + Left Aligned Chaise)",
      price: "82,499",
      originalPrice: "1,25,000",
      discount: "34% OFF",
      tags: ["3 Set Type Launched", "Custom Colors Available"]
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Royal Teak Wood Bed Frame with Upholstered Headboard",
      price: "54,999",
      originalPrice: "85,000",
      discount: "35% OFF",
      tags: ["King & Queen Sizes", "Storage Options Available"]
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1617806118233-18e1c0e3f014?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Minimalist Marble Top Dining Table (6 Seater)",
      price: "95,000",
      originalPrice: "1,45,000",
      discount: "34% OFF",
      tags: ["New Arrival", "Premium Material"]
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Ergonomic Mid-Century Modern Accent Chair",
      price: "24,999",
      originalPrice: "38,500",
      discount: "35% OFF",
      tags: ["4 Colors Available", "Top Rated Design"]
    }
  ];

  return (
    <section className="w-full py-16 md:py-20 bg-[#fdfaf6] font-sans">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            <span className="text-[#d4af37] italic mr-2">New</span>
            <span className="text-[#13463f]">Arrivals</span>
          </h2>
          <div className="h-1 w-20 bg-[#13463f] mt-2 rounded"></div>
          <p className="text-gray-600 text-sm md:text-base mt-1">
            Be the first to explore our newest furniture and hone essentials, crafted for modern homes.
          </p>
        </div>

        {/* Products Horizontal Scroll Container (Mimics Slider) */}
        <div className="relative w-full">
          <div className="flex overflow-x-auto gap-5 pb-8 pt-2 snap-x snap-mandatory scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            
            {/* Custom CSS to hide webkit scrollbar */}
            <style>{`
              div::-webkit-scrollbar { display: none; }
            `}</style>

            {products.map((product) => (
              <div 
                key={product.id} 
                className="snap-start flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px] bg-white rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] transition-shadow duration-300 border border-gray-100 flex flex-col group cursor-pointer"
              >
                {/* Product Image */}
                <div className="w-full aspect-[4/3] bg-gray-100 overflow-hidden rounded-t-xl relative">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle Top Overlay */}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>

                {/* Product Details */}
                <div className="p-5 flex flex-col flex-grow">
                  
                  {/* Title */}
                  <h3 className="text-[#0a0a0a] text-[13px] md:text-[14px] font-medium leading-snug line-clamp-2 mb-3 h-[40px]">
                    {product.title}
                  </h3>
                  
                  {/* Pricing */}
                  <div className="flex items-end gap-2 mb-4">
                    <span className="text-lg md:text-xl font-bold text-[#0a0a0a]">₹{product.price}</span>
                    <span className="text-xs md:text-sm text-gray-400 line-through mb-0.5">₹{product.originalPrice}</span>
                    <span className="text-xs md:text-sm font-bold text-[#2a8754] mb-0.5">({product.discount})</span>
                  </div>
                  
                  {/* Spacer to push tags to bottom */}
                  <div className="flex-grow"></div>

                  {/* Tags */}
                  <div className="space-y-2 border-t border-gray-100 pt-3">
                    {product.tags.map((tag, index) => (
                      <div key={index} className="flex items-center gap-2">
                        {/* Custom Gold Bullet Icon */}
                        <div className="w-4 h-4 rounded-full bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></div>
                        </div>
                        <span className="text-[11px] md:text-xs text-gray-500 font-medium">{tag}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Centered View All Button */}
        <div className="mt-4 flex justify-center">
          <button className="bg-[#13463f] hover:bg-[#0f3832] text-white px-8 py-3 rounded-full text-sm font-semibold tracking-wide transition-colors shadow-md flex items-center gap-2">
            View all Products
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>

      </div>
    </section>
  );
}

export default NewArrivals;