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
      link: "/room/living",
      imageId: "4bec2baeac32b5a4870057abec4fee24"
    },
    {
      title: "Master Bedroom",
      link: "/room/bedroom",
      imageId: "0dd8fbdc6deca9cfee40314bb16f98c9"
    },
    {
      title: "Home Office",
      link: "/room/office",
      imageId: "8bd054c64659e20a007fdd05117910e6"
    },
    {
      title: "Dining Space",
      link: "/room/dining",
      imageId: "88e81b1cbf1170baab139afc707b6896"
    },
    {
      title: "Modular Kitchen",
      link: "/room/kitchen",
      imageId: "103bf3403dc1d7a807891320305ca8bf"
    },
    {
      title: "Study & Workspaces",
      link: "/room/study",
      imageId: "73c820c1cdd8d7fdccef51f0bc004d8c"
    }
  ];

  return (
    <section className="bg-[#fdfaf6] py-16 px-4 md:px-8 lg:px-12 font-sans">
      <div className="max-w-[1350px] mx-auto">
        
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            <span className="text-[#d4af37] italic mr-2">Shop</span>
            <span className="text-[#13463f]">by rooms</span>
          </h2>
          <div className="h-1 w-20 bg-[#13463f] mt-2 rounded"></div>
        </div>

        {/* Rooms Grid Layout - Responsive grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
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
                <div className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-white shadow-sm border border-gray-200 group-hover:shadow-md group-hover:border-[#13463f] transition-all duration-300 mb-3 relative">
                  <AdvancedImage 
                    cldImg={optimizedImg} 
                    alt={room.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                
                {/* Room Title */}
                <span className="text-[#0a0a0a] text-sm md:text-base font-semibold text-center group-hover:text-[#13463f] transition-colors duration-300 px-1">
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