import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';

// 1. Cloudinary Setup
const cld = new Cloudinary({
  cloud: {
    cloudName: 'zlqgwdom'
  }
});

// 2. Yahan slides mein se text hata diya hai
const slides = [
  {
    imageId: 'hero-0', 
    hasOverlayText: false, 
  },
  {
    imageId: 'hero-2', 
    hasOverlayText: false, 
  },
  {
    imageId: 'hero-3',
    hasOverlayText: false,
  },
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // 5 seconds auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  // 3. Trust Strip ke GIFs/Icons
  const icon1 = cld.image('hero1').format('auto').quality('auto');
  const icon2 = cld.image('hero2').format('auto').quality('auto');
  const icon3 = cld.image('hero3').format('auto').quality('auto');
  const icon4 = cld.image('hero4').format('auto').quality('auto');

  return (
    <section className="w-full flex flex-col font-sans bg-white">
      
      {/* 1. MAIN BANNER SLIDER AREA */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[10/3] bg-gray-100 overflow-hidden group">
        
        {slides.map((slide, index) => {
          const slideImg = cld.image(slide.imageId).format('auto').quality('auto');

          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Optimized Main Banner Image */}
              <AdvancedImage
                cldImg={slideImg}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Yeh overlay aur text SIRF first image (hasOverlayText: true) pe dikhega */}
              {slide.hasOverlayText && (
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent flex flex-col justify-center">
                  <div className="w-full max-w-[1350px] mx-auto px-10 md:px-16 lg:px-24 flex flex-col items-start">
                    
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white drop-shadow-md leading-tight mb-4 w-full">
                      {slide.title}
                    </h1>
                    
                    <p className="text-sm md:text-base lg:text-lg text-gray-50 drop-shadow-md w-full max-w-[300px] md:max-w-[380px] lg:max-w-[420px] mb-8 leading-relaxed text-justify">
                      {slide.subtitle}
                    </p>
                    
                    <Link 
                      to={slide.link}
                      className="bg-[#2c2c2c] hover:bg-[#0a0a0a] text-white text-[11px] md:text-sm font-semibold tracking-wider px-6 py-3 md:px-8 md:py-3.5 rounded-full transition-all shadow-lg hover:shadow-xl border border-white/10 text-center"
                    >
                      SHOP THE COLLECTIONS
                    </Link>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Slider Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-[#d4af37] p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 drop-shadow-md z-20 cursor-pointer"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-[#d4af37] p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 drop-shadow-md z-20 cursor-pointer"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </button>

        {/* Slider Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all shadow-sm ${
                index === currentIndex ? 'bg-[#d4af37] w-6' : 'bg-white/60 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </div>

      {/* 2. REFINED TRUST STRIP WITH CREAM/MITTI BACKGROUND */}
      <div className="w-full py-4 md:py-5 relative z-10 bg-[#f5ebe0]">
        <div className="max-w-4xl mx-auto px-4">
          
          <div className="flex flex-col md:flex-row items-center justify-between bg-white border border-gray-100 rounded-xl shadow-sm px-6 py-5 md:px-10 md:py-5">
            
            <div className="mb-4 md:mb-0 flex-shrink-0 text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-800 italic leading-tight tracking-tight">
                Why <br className="hidden md:block" />
                <span className="text-gray-800">S.S. Industries?</span>
              </h2>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 w-full md:w-auto">
              
              <div className="flex flex-col items-center text-center group cursor-default">
                <div className="h-12 w-12 md:h-12 md:w-12 rounded-full border border-gray-100 flex items-center justify-center mb-2.5 group-hover:border-[#d4af37] transition-colors duration-300 overflow-hidden shadow-sm p-1">
                  <AdvancedImage cldImg={icon1} alt="20K+ Happy Customers" className="w-full h-full object-cover rounded-full" />
                </div>
                <span className="text-gray-700 text-[10px] md:text-[11px] uppercase tracking-wider font-medium group-hover:text-black transition-colors duration-300">20K+ Happy<br/>Customers</span>
              </div>
              
              <div className="flex flex-col items-center text-center group cursor-default">
                <div className="h-12 w-12 md:h-12 md:w-12 rounded-full border border-gray-100 flex items-center justify-center mb-2.5 group-hover:border-[#d4af37] transition-colors duration-300 overflow-hidden shadow-sm p-1">
                  <AdvancedImage cldImg={icon2} alt="Free Installation" className="w-full h-full object-cover rounded-full" />
                </div>
                <span className="text-gray-700 text-[10px] md:text-[11px] uppercase tracking-wider font-medium group-hover:text-black transition-colors duration-300">Free<br/>Installation</span>
              </div>
              
              <div className="flex flex-col items-center text-center group cursor-default">
                <div className="h-12 w-12 md:h-12 md:w-12 rounded-full border border-gray-100 flex items-center justify-center mb-2.5 group-hover:border-[#d4af37] transition-colors duration-300 overflow-hidden shadow-sm p-1">
                  <AdvancedImage cldImg={icon3} alt="Best Warranty" className="w-full h-full object-cover rounded-full" />
                </div>
                <span className="text-gray-700 text-[10px] md:text-[11px] uppercase tracking-wider font-medium group-hover:text-black transition-colors duration-300">Best<br/>Warranty</span>
              </div>

              <div className="flex flex-col items-center text-center group cursor-default">
                <div className="h-12 w-12 md:h-12 md:w-12 rounded-full border border-gray-100 flex items-center justify-center mb-2.5 group-hover:border-[#d4af37] transition-colors duration-300 overflow-hidden shadow-sm p-1">
                  <AdvancedImage cldImg={icon4} alt="Expert Consultations" className="w-full h-full object-cover rounded-full" />
                </div>
                <span className="text-gray-700 text-[10px] md:text-[11px] uppercase tracking-wider font-medium group-hover:text-black transition-colors duration-300">Expert<br/>Consultations</span>
              </div>

            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Hero;