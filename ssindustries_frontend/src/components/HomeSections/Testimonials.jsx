import React, { useState } from 'react';

function Testimonials() {
  const [activeId, setActiveId] = useState(0);

  const testimonials = [
    {
      id: 0,
      name: "Avinash",
      role: "Automotive Engineer",
      quote: "S.S. Industries sofa is not only a piece of furniture, it is part of your life, supporting you in all aspects of your life. I say that this furniture is a part of our life.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoBadge: "Happy Home Stories"
    },
    {
      id: 1,
      name: "Prashanth",
      role: "Filmmaker",
      quote: "The custom wardrobe and bookshelf brought both my wife's and my choices together. Even though we still have different wardrobes for our clothes, we have one bookshelf where both our books come together.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoBadge: "Client Experience"
    },
    {
      id: 2,
      name: "Ananya Sharma",
      role: "Interior Designer",
      location: "Vaishali Nagar, Jaipur",
      quote: "Working with S.S. Industries for my clients has been a dream. The finish, the wood quality, and the attention to detail are at par with top international brands.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoBadge: "Design Partner"
    }
  ];

  const activeTestimonial = testimonials[activeId];

  return (
    <section className="w-full py-20 bg-[#0a0a0a] font-sans text-white">
      <div className="max-w-[1350px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white inline-block border-b-2 border-[#d4af37] pb-2">
            Customer Testimonials
          </h2>
        </div>

        {/* Main Grid Layout (Matching the reference layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Large Active Story Showcase (8 Cols) */}
          <div className="lg:col-span-8 bg-gradient-to-br from-[#13463f]/40 via-[#0a0a0a] to-[#0a0a0a] border border-[#13463f] rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-2xl">
            
            <div className="flex flex-col md:flex-row gap-6 items-center">
              
              {/* Image / Video Thumbnail with Play Button */}
              <div className="relative w-full md:w-[380px] aspect-[16/10] rounded-xl overflow-hidden shadow-lg flex-shrink-0 border border-white/10 group cursor-pointer">
                <img 
                  src={activeTestimonial.image} 
                  alt={activeTestimonial.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#13463f] border border-[#d4af37] text-[#d4af37] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  </div>
                </div>
                {/* Floating Badge */}
                <div className="absolute top-3 left-3 bg-[#0a0a0a]/80 backdrop-blur-md border border-[#d4af37]/40 px-3 py-1 rounded-md text-[10px] tracking-widest uppercase text-[#d4af37] font-bold">
                  {activeTestimonial.videoBadge}
                </div>
              </div>

              {/* Text Info */}
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

          {/* Right Side: Playlist / Thumbnails Selection (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {testimonials.map((item, index) => {
              const isSelected = activeId === index;
              return (
                <div 
                  key={item.id}
                  onClick={() => setActiveId(index)}
                  className={`flex items-center gap-4 p-3.5 rounded-xl cursor-pointer transition-all duration-300 border ${
                    isSelected 
                      ? 'bg-[#13463f]/30 border-[#d4af37] shadow-lg' 
                      : 'bg-white/5 border-white/10 hover:border-[#13463f]'
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="w-24 h-16 rounded-lg overflow-hidden relative flex-shrink-0 border border-white/10">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-7 h-7 rounded-full bg-[#13463f] text-[#d4af37] flex items-center justify-center text-xs">
                        ▶
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="overflow-hidden">
                    <h4 className="text-sm font-bold text-white truncate">{item.name}</h4>
                    <p className="text-xs text-[#d4af37] font-medium truncate">{item.role}</p>
                    <p className="text-[11px] text-gray-400 truncate mt-0.5">Real Conversations</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;