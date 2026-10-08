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

function AboutUs() {
  const [activeFounder, setActiveFounder] = useState(0);

  // Auto-slide logic for 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFounder((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // 2. Initialize Cloudinary Assets
  const storyImg = cld.image('photo-1618220179428-22790b461013').format('auto').quality('auto:best');
  
  // Cloudinary Video URL generation (Replace 'hero_video_id' with your actual Cloudinary video public ID)
  const heroVideo = cld.video('about_us_ssindustries').toURL();

  const founders = [
    {
      id: 0,
      name: "Shubh Suiwal",
      role: "Founder & Director",
      message: "Leading the creative direction, he brings a meticulous eye for detail and a passion for sourcing the world's most exquisite materials. Every piece we create is a reflection of an uncompromising commitment to modern luxury.",
      img: cld.image('Shubh_01').format('auto').quality('auto:best'),
      imgClass: "w-full h-full object-cover transition-all duration-1000 ease-in-out"
    },
    {
      id: 1,
      name: "Akshat Suiwal",
      role: "Founder & Director",
      message: "Driving operations and manufacturing excellence, he ensures that the artisanal craftsmanship meets uncompromising structural standards. Our vision is to deliver furniture that stands the test of time, both in design and durability.",
      img: cld.image('Akshat_01').format('auto').quality('auto:best'),
      imgClass: "w-full h-full object-cover object-[50%_15%] scale-[1.10] transition-all duration-1000 ease-in-out"
    }
  ];

  return (
    <div className="font-sans text-[#0a0a0a] bg-[#f5ebe0] min-h-screen">
      
      {/* 1. Hero Section with Cloudinary Background Video */}
      {/* Scaled padding for mobile so text doesn't overflow, retaining py-36 for lg: */}
      <section className="relative w-full py-24 sm:py-28 lg:py-36 px-4 sm:px-6 flex flex-col items-center justify-center overflow-hidden z-0">
        
        {/* Background Video Element fetching directly from Cloudinary */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover -z-20"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay taaki text ache se read ho sake */}
        <div className="absolute inset-0 bg-[#0a0a0a]/60 -z-10"></div>

        {/* Decorative Background Glows */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 border-[1px] border-[#d4af37] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#d2bfa9] rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center z-10">
          <span className="text-[#d4af37] uppercase tracking-[0.3em] text-[10px] sm:text-xs md:text-sm font-bold mb-3 sm:mb-4 block drop-shadow-md">
            Our Heritage
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-[#f5ebe0] mb-4 sm:mb-6 tracking-tight drop-shadow-lg">
            Elevating Spaces <br className="hidden sm:block"/> With <span className="text-[#d4af37]">Curated Craftsmanship</span>.
          </h1>
          <p className="text-[#f5ebe0]/90 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed font-light drop-shadow px-2">
            We blend timeless design with modern luxury, creating pieces that transform a house into a home. Every curve, every stitch, and every finish is a testament to our dedication to quality.
          </p>
        </div>
      </section>

      {/* 2. Our Story Section */}
      {/* Reduced mobile padding & shifted layout shift to lg: to prevent awkward tablet squishing */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-20 max-w-[1350px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -inset-3 sm:-inset-4 bg-[#d2bfa9] rounded-2xl transform -rotate-2 -z-10"></div>
            
            <AdvancedImage 
              cldImg={storyImg} 
              alt="Craftsmanship in details" 
              className="w-full h-auto aspect-[4/5] object-cover rounded-2xl shadow-xl z-10 relative"
            />
            
            {/* Mobile Fix: Adjusted the absolute positioning to prevent the badge from triggering horizontal scrolling on tiny phones */}
            <div className="absolute -bottom-6 right-2 sm:-bottom-8 sm:-right-4 lg:-right-8 bg-[#0a0a0a] text-[#d4af37] p-4 sm:p-6 rounded-full w-24 h-24 sm:w-32 sm:h-32 flex flex-col items-center justify-center shadow-2xl border border-[#13463f] z-20">
              <span className="text-xl sm:text-2xl font-black">20+</span>
              <span className="text-[9px] sm:text-xs uppercase tracking-wider text-center">Years of<br/>Design</span>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-start mt-6 lg:mt-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0a0a0a] mb-5 sm:mb-6 relative">
              The Art of <br/> Uncompromising Quality.
              <span className="absolute -bottom-2 left-0 w-12 sm:w-16 h-1 bg-[#d4af37]"></span>
            </h2>
            <p className="text-[#0a0a0a]/80 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
              Founded on the belief that furniture should be both an aesthetic masterpiece and an enduring companion, we source only the finest materials. Our artisans bring decades of refined expertise to every project.
            </p>
            <p className="text-[#0a0a0a]/80 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 sm:mb-10">
              From the initial sketch to the final polish, our process is rooted in a deep respect for natural textures and innovative engineering. We don't just build furniture; we curate experiences for your everyday living.
            </p>
            <Link to="/products" className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-[#13463f] text-[#f5ebe0] font-semibold tracking-wide uppercase text-xs sm:text-sm hover:bg-[#0a0a0a] hover:text-[#d4af37] transition-colors duration-300 rounded-sm">
              Discover Our Collections
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="bg-[#0a0a0a] py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-20 relative border-t-4 border-[#d4af37]">
        <div className="max-w-[1350px] mx-auto text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#f5ebe0] mb-3 sm:mb-4">Our Core Pillars</h2>
          <p className="text-[#d2bfa9] text-sm sm:text-base max-w-xl mx-auto px-2">The principles that guide our design philosophy and manufacturing ethos.</p>
        </div>

        <div className="max-w-[1350px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          
          <div className="bg-[#121212] p-6 sm:p-8 lg:p-10 rounded-xl border border-[#13463f] hover:border-[#d4af37] transition-colors duration-500 group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#13463f] rounded-full flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-[#d4af37] transition-colors duration-500">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#f5ebe0] group-hover:text-[#0a0a0a] w-5 h-5 sm:w-6 sm:h-6">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h3 className="text-lg lg:text-xl font-bold text-[#f5ebe0] mb-2 sm:mb-3">Premium Materials</h3>
            <p className="text-[#d2bfa9]/80 text-xs sm:text-sm leading-relaxed">
              We ethically source hardwoods, premium metals, and luxury fabrics to ensure every piece stands the test of time.
            </p>
          </div>

          <div className="bg-[#121212] p-6 sm:p-8 lg:p-10 rounded-xl border border-[#13463f] hover:border-[#d4af37] transition-colors duration-500 group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#13463f] rounded-full flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-[#d4af37] transition-colors duration-500">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#f5ebe0] group-hover:text-[#0a0a0a] w-5 h-5 sm:w-6 sm:h-6">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 6v6l4 2"></path>
              </svg>
            </div>
            <h3 className="text-lg lg:text-xl font-bold text-[#f5ebe0] mb-2 sm:mb-3">Timeless Aesthetics</h3>
            <p className="text-[#d2bfa9]/80 text-xs sm:text-sm leading-relaxed">
              Rejecting fleeting trends, we focus on silhouettes and profiles that remain elegant across generations.
            </p>
          </div>

          {/* This one centers on sm breakpoints if there are 2 columns */}
          <div className="bg-[#121212] p-6 sm:p-8 lg:p-10 rounded-xl border border-[#13463f] hover:border-[#d4af37] transition-colors duration-500 group sm:col-span-2 md:col-span-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#13463f] rounded-full flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-[#d4af37] transition-colors duration-500">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#f5ebe0] group-hover:text-[#0a0a0a] w-5 h-5 sm:w-6 sm:h-6">
                <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z"></path>
                <line x1="16" y1="8" x2="2" y2="22"></line>
                <line x1="17.5" y1="15" x2="9" y2="6.5"></line>
              </svg>
            </div>
            <h3 className="text-lg lg:text-xl font-bold text-[#f5ebe0] mb-2 sm:mb-3">Masterful Craft</h3>
            <p className="text-[#d2bfa9]/80 text-xs sm:text-sm leading-relaxed">
              Precision engineering meets hand-finished detailing, ensuring flawless execution in every joint and seam.
            </p>
          </div>

        </div>
      </section>

      {/* 4. Founders & Directors Slider Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#f5ebe0]">
        <div className="max-w-[1100px] mx-auto">
          
          <div className="flex flex-col items-center text-center mb-10 sm:mb-16">
            <span className="text-[#13463f] uppercase tracking-[0.2em] text-[10px] sm:text-xs font-bold mb-2 sm:mb-3">The Visionaries</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a0a0a] mb-4 sm:mb-6">Meet the Founders</h2>
            <div className="w-16 sm:w-20 h-1 bg-[#d4af37] mb-4 sm:mb-6"></div>
          </div>

          <div className="relative bg-white/50 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden border border-[#13463f]/10">
            {/* Shifted flex direction layout split to lg: so iPads in portrait mode display a beautifully stacked layout */}
            <div className="flex flex-col lg:flex-row items-stretch min-h-auto lg:min-h-[600px]">
              
              {/* Left Side - Image Carousel */}
              {/* Added responsive explicit heights so images don't collapse on mobile */}
              <div className="relative w-full lg:w-1/2 h-[350px] sm:h-[450px] lg:h-auto overflow-hidden bg-[#d2bfa9]">
                {founders.map((founder, index) => (
                  <div 
                    key={founder.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      activeFounder === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    <AdvancedImage 
                      cldImg={founder.img} 
                      alt={founder.name} 
                      className={founder.imgClass}
                    />
                  </div>
                ))}
              </div>

              {/* Right Side - Content Carousel */}
              {/* Added explicit height on mobile so absolute positioned children don't overflow */}
              <div className="relative w-full lg:w-1/2 h-[380px] sm:h-[400px] lg:h-auto p-6 sm:p-10 lg:p-16 flex flex-col justify-center bg-transparent">
                {founders.map((founder, index) => (
                  <div 
                    key={`text-${founder.id}`}
                    className={`transition-all duration-1000 ease-in-out absolute inset-0 p-6 sm:p-10 lg:p-16 flex flex-col justify-center ${
                      activeFounder === index ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-8 z-0 pointer-events-none'
                    }`}
                  >
                    <p className="text-[#d4af37] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[10px] sm:text-xs font-bold mb-3 sm:mb-4">
                      Message from the Director
                    </p>
                    <h3 className="text-2xl sm:text-3xl lg:text-5xl font-black text-[#0a0a0a] mb-1 sm:mb-2">
                      {founder.name}
                    </h3>
                    <p className="text-[#13463f] font-bold uppercase tracking-widest text-[11px] sm:text-sm mb-4 sm:mb-8">
                      {founder.role}
                    </p>
                    
                    <div className="relative mt-2">
                      <span className="absolute -top-4 sm:-top-6 -left-3 sm:-left-4 text-4xl sm:text-6xl text-[#d4af37]/20 font-serif leading-none">"</span>
                      <p className="text-[#0a0a0a]/80 text-sm sm:text-base lg:text-lg leading-relaxed font-serif italic relative z-10 line-clamp-6 sm:line-clamp-none">
                        {founder.message}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Slider Controls / Dots */}
                <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-10 lg:left-16 flex gap-2 sm:gap-3 z-20">
                  {founders.map((_, index) => (
                    <button 
                      key={`dot-${index}`}
                      onClick={() => setActiveFounder(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeFounder === index ? 'w-10 sm:w-12 bg-[#13463f]' : 'w-6 sm:w-12 bg-[#13463f]/20 hover:bg-[#13463f]/50'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 5. Bottom Call to Action */}
      <section className="bg-[#d2bfa9] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 text-center border-t border-[#0a0a0a]/10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#0a0a0a] mb-4 sm:mb-6">Ready to Transform Your Space?</h2>
        <p className="text-[#0a0a0a]/70 max-w-2xl mx-auto mb-8 sm:mb-10 text-sm sm:text-base lg:text-lg px-2">
          Connect with our design consultants to bring your interior vision to life with our bespoke collections.
        </p>
        <Link to="/contact-us" className="inline-block px-8 py-3 sm:px-10 sm:py-4 bg-[#0a0a0a] text-[#d4af37] font-bold tracking-widest uppercase text-xs sm:text-sm hover:bg-[#13463f] hover:text-[#f5ebe0] active:scale-95 transition-all duration-300 rounded-sm shadow-xl hover:shadow-2xl">
          Get in Touch
        </Link>
      </section>

    </div>
  );
}

export default AboutUs;