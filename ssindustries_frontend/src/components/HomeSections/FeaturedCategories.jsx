import React from 'react';
import { Link } from 'react-router-dom';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';

// 1. Cloudinary Setup
const cld = new Cloudinary({
  cloud: {
    cloudName: 'zlqgwdom'
  }
});

function ShopByCategories() {
  // 2. URLs ki jagah imageId placeholders laga diye hain
  const categories = [
    { title: "Sofas & Lounges", link: "/category/sofas", imageId: "2426239ff80e95586e39df9c07466692" },
    { title: "Signature Beds", link: "/category/beds", imageId: "photo-1505693416388-ac5ce068fe85" },
    { title: "Dining Ensembles", link: "/category/dining", imageId: "dc285b733572550499b01a835a37f275" },
    { title: "Custom Interiors", link: "/category/custom", imageId: "a56f3e465d3ce9ae536727c57f0f60af" },
    { title: "Chairs & Seating", link: "/category/chairs", imageId: "bd7c111aa444f97427736a32d7f82617" },
    { title: "Wardrobes & Storage", link: "/category/wardrobes", imageId: "d6f2bf295ad94443754c5f53a17e82e1" },
    { title: "Premium Mattresses", link: "/category/mattresses", imageId: "2fbaf3f247b0e88c8dae86def88e6150" },
    { title: "TV & Media Units", link: "/category/tv-units", imageId: "138c51f5ecb061cc5ddf525a8d5c5582" },
    { title: "Coffee & Accent Tables", link: "/category/tables", imageId: "4d2135bbcdbd6fb481bfc2c01a961c2c" },
    { title: "Bookshelves & Cabinets", link: "/category/cabinets", imageId: "7c310cb9d9231fa1ae8a30b2d7c17597" },
    { title: "Decor & Soft Furnishings", link: "/category/decor", imageId: "21b54b43cb5f077411e2cfb98b8f2c89" },
    { title: "Kids & Study Spaces", link: "/category/study", imageId: "97302adaf19516671041a03d6bbed1d4" }
  ];

  const shopLetters = ["S", "H", "O", "P"];

  // 3. Right side wali background image optimize ki
  const bgImage = cld.image('photo-1555041469-a586c61ea9bc').format('auto').quality('auto');

  return (
    <section className="bg-[#fafafa] py-16 px-4 md:px-8 lg:px-12 font-sans">
      <div className="max-w-[1350px] mx-auto">

        {/* Solid 3D Extrusion Block Animation & Synchronized Lamp/Image Reveal */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes blockPopUp {
            0%, 56% { transform: translate(0, 0); text-shadow: -1px 1px 0 #ea580c, -2px 2px 0 #c2410c; }
            64%, 92% { transform: translate(14px, -14px); text-shadow: -1px 1px 0 #ea580c, -2px 2px 0 #ea580c, -3px 3px 0 #ea580c, -4px 4px 0 #ea580c, -5px 5px 0 #ea580c, -6px 6px 0 #ea580c, -7px 7px 0 #ea580c, -8px 8px 0 #ea580c, -9px 9px 0 #ea580c, -10px 10px 0 #ea580c, -11px 11px 0 #ea580c, -12px 12px 0 #ea580c, -13px 13px 0 #ea580c, -14px 14px 0 #c2410c, -14px 20px 20px rgba(0, 0, 0, 0.4); }
            100% { transform: translate(0, 0); text-shadow: -1px 1px 0 #ea580c, -2px 2px 0 #c2410c; }
          }
          .animated-3d-shop-letter { display: inline-block; color: #ffffff; position: relative; animation-name: blockPopUp; animation-duration: 3.6s; animation-timing-function: cubic-bezier(0.45, 0.05, 0.55, 0.95); animation-iteration-count: infinite; will-change: transform, text-shadow; }

          @keyframes sparkleTwinkle {
            0%, 56% { opacity: 0; transform: scale(0.2) rotate(0deg); }
            60% { opacity: 1; transform: scale(1) rotate(20deg); }
            68% { opacity: 0.6; transform: scale(0.7) rotate(0deg); }
            76% { opacity: 1; transform: scale(1.1) rotate(-15deg); }
            84% { opacity: 0.6; transform: scale(0.7) rotate(0deg); }
            92% { opacity: 1; transform: scale(1) rotate(10deg); }
            96%, 100% { opacity: 0; transform: scale(0.2) rotate(0deg); }
          }
          .shop-sparkle { position: absolute; z-index: 20; color: #ffd98a; pointer-events: none; animation-name: sparkleTwinkle; animation-duration: 3.6s; animation-timing-function: ease-in-out; animation-iteration-count: infinite; }

          @keyframes lampGlow { 0% { filter: drop-shadow(0 0 0px rgba(255, 255, 255, 0)); fill: #262626; } 10%, 65% { filter: drop-shadow(0 0 35px rgba(255, 255, 255, 1)); fill: #ffffff; } 75%, 100% { filter: drop-shadow(0 0 0px rgba(255, 255, 255, 0)); fill: #262626; } }
          .lamp-bulb { animation: lampGlow 6s ease-in-out infinite; }

          @keyframes auraPulse { 0% { opacity: 0; transform: scale(0.8); } 10%, 65% { opacity: 1; transform: scale(1.4); } 75%, 100% { opacity: 0; transform: scale(0.8); } }
          .lamp-aura { animation: auraPulse 6s ease-in-out infinite; }

          @keyframes imageReveal { 0% { opacity: 0.05; } 10%, 65% { opacity: 0.85; } 75%, 100% { opacity: 0.05; } }
          .sofa-reveal { animation: imageReveal 6s ease-in-out infinite; will-change: opacity; }
        `}} />

        {/* --- HEADING AREA --- */}
        <div className="relative mb-12 bg-[#121212] rounded-3xl p-6 md:p-10 overflow-hidden flex flex-col md:flex-row items-center justify-between border border-[#232323] shadow-2xl">

          {/* Left Typography */}
          <div className="relative z-20 w-full md:w-3/5 flex flex-col items-start">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white flex items-center gap-3.5 tracking-tight">
              <span className="relative inline-flex select-none">
                
                {/* Sparkles */}
                <span className="shop-sparkle" style={{ top: '-14px', right: '-8px', fontSize: '14px', animationDelay: '0s' }}>✦</span>
                <span className="shop-sparkle" style={{ top: '10px', right: '-18px', fontSize: '10px', animationDelay: '0.3s' }}>✦</span>
                <span className="shop-sparkle" style={{ bottom: '-10px', left: '30%', fontSize: '11px', animationDelay: '0.15s' }}>✦</span>

                {shopLetters.map((letter, i) => (
                  <span
                    key={i}
                    className="animated-3d-shop-letter font-black"
                    style={{ 
                      animationDelay: `${i * 0.05}s`,
                      zIndex: 10 - i 
                    }} 
                  >
                    {letter}
                  </span>
                ))}
              </span>
              <span className="text-[#f5f5f5] font-extrabold ml-1 z-0 relative">By Categories</span>
            </h2>
            <p className="text-[#a3a3a3] mt-3 text-xs md:text-sm max-w-md leading-relaxed font-normal">
              Explore our curated collections of exquisite furniture, crafted for modern luxury living.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 md:w-[26rem] lg:w-[30rem] h-48 md:h-56 pointer-events-none hidden md:block overflow-hidden">
            <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#121212] via-[#121212]/10 to-[#121212]/20" />
            <div className="absolute inset-0 z-20 bg-gradient-to-b from-[#121212] via-transparent to-[#121212]/40" />

            {/* --- THE GLOWING LAMP (WHITE GLOW) --- */}
            <div className="absolute bottom-[5%] left-[2%] z-30 flex flex-col items-center">
              <div className="lamp-aura absolute top-[-10px] w-48 h-48 bg-white/20 rounded-full blur-[40px] pointer-events-none" />
              <svg width="60" height="200" viewBox="0 0 50 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
                <rect x="23" y="40" width="4" height="155" fill="#1f1f1f"/>
                <path d="M10 195 L40 195 A 3 3 0 0 1 43 198 L43 200 L7 200 L7 198 A 3 3 0 0 1 10 195 Z" fill="#121212"/>
                <path d="M18 10 L32 10 L45 40 L5 40 Z" fill="#1a1a1a"/>
                <path d="M15 40 L35 40 L25 48 Z" className="lamp-bulb"/>
              </svg>
            </div>

            {/* 4. Optimized Background Image */}
            <AdvancedImage
              cldImg={bgImage}
              alt="Category Decor"
              className="w-full h-full object-cover scale-100 relative z-0 sofa-reveal"
            />
          </div>

        </div>

        {/* Categories Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 lg:gap-6">
          {categories.map((cat, index) => {
            // 5. Har category image yahan optimize ho rahi hai loop ke andar
            const catImg = cld.image(cat.imageId).format('auto').quality('auto');

            return (
              <Link key={index} to={cat.link} className="flex flex-col items-center group cursor-pointer">
                <div className="w-full aspect-square rounded-2xl overflow-hidden bg-white shadow-sm border border-stone-200 group-hover:shadow-md transition-all duration-300 mb-3 relative z-10">
                  <AdvancedImage 
                    cldImg={catImg} 
                    alt={cat.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-[#d4af37]/0 group-hover:bg-[#d4af37]/10 transition-colors duration-300"></div>
                </div>
                <span className="text-[#1c1917] text-sm md:text-base font-medium text-center group-hover:text-[#b45309] transition-colors duration-300 px-2 mt-1">
                  {cat.title}
                </span>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default ShopByCategories;