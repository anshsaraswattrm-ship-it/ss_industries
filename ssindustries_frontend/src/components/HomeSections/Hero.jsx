import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'zlqgwdom'
  }
});

const slides = [
  { imageId: 'hero-0', hasOverlayText: false },
  { imageId: 'hero-2', hasOverlayText: false },
  { imageId: 'hero-3_1', hasOverlayText: false },
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
              <AdvancedImage
                cldImg={slideImg}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-cover"
              />

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
    </section>
  );
}

export default Hero;