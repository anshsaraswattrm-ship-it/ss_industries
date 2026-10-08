import React from 'react';
import { Link } from 'react-router-dom';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';

// Global Cloudinary Setup
const cld = new Cloudinary({
  cloud: {
    cloudName: 'zlqgwdom'
  }
});

function ShopByRooms() {
  const rooms = [
    {
      title: "Living Room",
      link: "/products",
      imageId: "4bec2baeac32b5a4870057abec4fee24"
    },
    {
      title: "Master Bedroom",
      link: "/products",
      imageId: "0dd8fbdc6deca9cfee40314bb16f98c9"
    },
    {
      title: "Home Office",
      link: "/products",
      imageId: "8bd054c64659e20a007fdd05117910e6"
    },
    {
      title: "Dining Space",
      link: "/products",
      imageId: "88e81b1cbf1170baab139afc707b6896"
    },
    {
      title: "Modular Kitchen",
      link: "/products",
      imageId: "103bf3403dc1d7a807891320305ca8bf"
    },
    {
      title: "Study & Workspaces",
      link: "/products",
      imageId: "73c820c1cdd8d7fdccef51f0bc004d8c"
    }
  ];

  return (
    <section className="bg-[#fdfaf6] py-12 md:py-16 px-4 md:px-8 lg:px-12 font-sans">
      <div className="max-w-[1350px] mx-auto">
        
        {/* Added flex-col & items-center/start so the green decorative line stays perfectly centered under the text on mobile */}
        <div className="mb-8 md:mb-10 text-center md:text-left flex flex-col items-center md:items-start">
          {/* Scaled text gracefully for smaller viewports */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-2 sm:mb-3">
            <span className="text-[#d4af37] italic mr-2">Shop</span>
            <span className="text-[#13463f]">by rooms</span>
          </h2>
          <div className="h-1 w-16 sm:w-20 bg-[#13463f] mt-1 sm:mt-2 rounded"></div>
        </div>

        {/* Rooms Grid Layout - Added smaller gap-3 for mobile to prevent cramping */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
          {rooms.map((room, index) => {
            // Generate optimized image on the fly
            const optimizedImg = cld.image(room.imageId).format('auto').quality('auto');

            return (
              <Link 
                key={index} 
                to={room.link}
                className="flex flex-col items-center group cursor-pointer"
              >
                {/* Image Box with AdvancedImage */}
                <div className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-white shadow-sm border border-gray-200 group-hover:shadow-md group-hover:border-[#13463f] transition-all duration-300 mb-2 sm:mb-3 relative">
                  <AdvancedImage 
                    cldImg={optimizedImg} 
                    alt={room.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                
                {/* Room Title */}
                {/* Scaled text slightly down to 12px/13px on mobile so long titles like "Study & Workspaces" don't break into messy lines on a narrow grid */}
                <span className="text-[#0a0a0a] text-[12px] sm:text-[13px] md:text-base font-semibold text-center group-hover:text-[#13463f] transition-colors duration-300 px-1">
                  {room.title}
                </span>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default ShopByRooms;