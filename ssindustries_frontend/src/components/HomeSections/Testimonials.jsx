import React, { useState } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'zlqgwdom'
  }
});

function Testimonials() {
  const [activeId, setActiveId] = useState(0);

  const testimonials = [
    {
      id: 0,
      name: "Avinash",
      role: "Automotive Engineer",
      quote: "S.S. Industries sofa is not only a piece of furniture, it is part of your life, supporting you in all aspects of your life. I say that this furniture is a part of our life.",
      imageId: "ChatGPT_Image_Oct_1_2026_12_04_22_PM",
      badgeText: "Happy Home Stories",
      imageAlign: "object-top"
    },
    {
      id: 1,
      name: "Prashanth",
      role: "Filmmaker",
      quote: "The custom wardrobe and bookshelf brought both my wife's and my choices together. Even though we still have different wardrobes for our clothes, we have one bookshelf where both our books come together.",
      imageId: "ChatGPT_Image_Oct_1_2026_12_05_38_PM",
      badgeText: "Client Experience",
      imageAlign: "object-top" 
    },
    {
      id: 2,
      name: "Ananya Sharma",
      role: "Interior Designer",
      location: "Vaishali Nagar, Jaipur",
      quote: "Working with S.S. Industries for my clients has been a dream. The finish, the wood quality, and the attention to detail are at par with top international brands.",
      imageId: "ChatGPT_Image_Oct_1_2026_12_06_54_PM",
      badgeText: "Design Partner",
      imageAlign: "object-top" 
    }
  ];

  const activeTestimonial = testimonials[activeId];
  const activeImg = cld.image(activeTestimonial.imageId).format('auto').quality('auto');

  // Trust Strip Icons Moved Here
  const icon1 = cld.image('hero1').format('auto').quality('auto');
  const icon2 = cld.image('hero2').format('auto').quality('auto');
  const icon3 = cld.image('hero3').format('auto').quality('auto');
  const icon4 = cld.image('hero4').format('auto').quality('auto');

  return (
    <>
      {/* 1. TESTIMONIALS SECTION */}
      <section className="w-full py-20 bg-[#0a0a0a] font-sans text-white">
        <div className="max-w-[1350px] mx-auto px-4 md:px-8">
          
          <div className="mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white inline-block border-b-2 border-[#d4af37] pb-2">
              Customer Testimonials
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-8 bg-gradient-to-br from-[#13463f]/40 via-[#0a0a0a] to-[#0a0a0a] border border-[#13463f] rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-2xl">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                
                <div className="relative w-full md:w-[380px] aspect-[16/10] rounded-xl overflow-hidden shadow-lg flex-shrink-0 border border-white/10 group cursor-pointer">
                  <AdvancedImage 
                    cldImg={activeImg} 
                    alt={activeTestimonial.name} 
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 ${activeTestimonial.imageAlign}`}
                  />
                  <div className="absolute top-3 left-3 bg-[#0a0a0a]/80 backdrop-blur-md border border-[#d4af37]/40 px-3 py-1 rounded-md text-[10px] tracking-widest uppercase text-[#d4af37] font-bold">
                    {activeTestimonial.badgeText}
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    {activeTestimonial.name} <span className="text-gray-400 font-normal text-base">| {activeTestimonial.role}</span>
                  </h3>
                  <div className="w-10 h-0.5 bg-[#d4af37] my-3"></div>
                  <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed italic">
                    "{activeTestimonial.quote}"
                  </p>
                </div>

              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4">
              {testimonials.map((item, index) => {
                const isSelected = activeId === index;
                const thumbImg = cld.image(item.imageId).format('auto').quality('auto');
                
                return (
                  <div 
                    key={item.id}
                    onClick={() => setActiveId(index)}
                    className={`flex items-center gap-4 p-3.5 rounded-xl cursor-pointer transition-all duration-300 border ${
                      isSelected ? 'bg-[#13463f]/30 border-[#d4af37] shadow-lg' : 'bg-white/5 border-white/10 hover:border-[#13463f]'
                    }`}
                  >
                    <div className="w-24 h-16 rounded-lg overflow-hidden relative flex-shrink-0 border border-white/10 group">
                      <AdvancedImage 
                        cldImg={thumbImg} 
                        alt={item.name} 
                        className={`w-full h-full object-cover transition-transform duration-300 ${isSelected ? 'scale-105' : 'group-hover:scale-105'} ${item.imageAlign}`} 
                      />
                      {!isSelected && <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>}
                    </div>

                    <div className="overflow-hidden">
                      <h4 className="text-sm font-bold text-white truncate">{item.name}</h4>
                      <p className="text-xs text-[#d4af37] font-medium truncate">{item.role}</p>
                      <p className="text-[11px] text-gray-400 truncate mt-0.5">Customer Story</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP (Moved from Hero)
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
      </div> */}
    </>
  );
}

export default Testimonials;