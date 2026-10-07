import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'zlqgwdom'
  }
});

// Added mobileImageId for you to insert your Cloudinary mobile banner names
const slides = [
  { imageId: 'hero-0', mobileImageId: '01', hasOverlayText: false },
  { imageId: 'hero-2', mobileImageId: '02', hasOverlayText: false },
  { imageId: 'hero-3_1', mobileImageId: '03', hasOverlayText: false },
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="w-full flex flex-col font-sans bg-white">
      {/* 
        Adjusted aspect ratios: 
        - iPad Portrait (md) now gets a taller [16/9] frame to perfectly house the mobile banner without chopping off the top/bottom.
        - Desktop / iPad Landscape (lg) inherits the wide [21/9] and [10/3] ratios.
      */}
      <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] xl:aspect-[10/3] bg-gray-100 overflow-hidden group">
        
        {slides.map((slide, index) => {
          // Generate optimized images for both desktop and mobile
          const desktopImg = cld.image(slide.imageId).format('auto').quality('auto');
          const mobileImg = cld.image(slide.mobileImageId).format('auto').quality('auto');

          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Desktop / iPad Landscape Image (Visible on lg screens 1024px and up) */}
              <AdvancedImage
                cldImg={desktopImg}
                alt={`Banner ${index + 1}`}
                className="hidden lg:block w-full h-full object-cover"
              />

              {/* Mobile / iPad Portrait Image (Visible on all screens under 1024px) */}
              <AdvancedImage
                cldImg={mobileImg}
                alt={`Banner ${index + 1} Mobile`}
                className="block lg:hidden w-full h-full object-cover"
              />

              {/* Made the overlay text layer responsive just in case you enable `hasOverlayText: true` later */}
              {slide.hasOverlayText && (
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 md:from-black/40 via-black/20 md:via-black/10 to-transparent flex flex-col justify-center">
                  <div className="w-full max-w-[1350px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 flex flex-col items-start">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white drop-shadow-md leading-tight mb-3 sm:mb-4 w-full">
                      {slide.title}
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-50 drop-shadow-md w-full max-w-[280px] sm:max-w-[300px] md:max-w-[380px] lg:max-w-[420px] mb-6 sm:mb-8 leading-relaxed text-justify">
                      {slide.subtitle}
                    </p>
                    <Link 
                      to={slide.link}
                      className="bg-[#2c2c2c] hover:bg-[#0a0a0a] text-white text-[10px] sm:text-[11px] md:text-sm font-semibold tracking-wider px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3.5 rounded-full transition-all shadow-lg hover:shadow-xl border border-white/10 text-center"
                    >
                      SHOP THE COLLECTIONS
                    </Link>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* 
          CRITICAL MOBILE FIX: Arrows are now permanently visible on mobile (`opacity-100`) because touch screens do not have a cursor to trigger a "hover" state. 
          At `md:` (tablet/desktop) they revert to your original `opacity-0 md:group-hover:opacity-100` behavior. 
        */}
        <button 
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/90 md:text-white/80 hover:text-[#d4af37] p-1.5 sm:p-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 drop-shadow-md z-20 cursor-pointer bg-black/20 md:bg-transparent rounded-full md:rounded-none"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/90 md:text-white/80 hover:text-[#d4af37] p-1.5 sm:p-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 drop-shadow-md z-20 cursor-pointer bg-black/20 md:bg-transparent rounded-full md:rounded-none"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </button>

        {/* Scaled dot indicators slightly for better touch targets on mobile */}
        <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-2.5 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 sm:h-2.5 rounded-full transition-all shadow-sm ${
                index === currentIndex ? 'bg-[#d4af37] w-5 sm:w-6' : 'bg-white/60 hover:bg-white w-2 sm:w-2.5'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;