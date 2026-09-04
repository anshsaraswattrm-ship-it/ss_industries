import React from 'react';
import { Link } from 'react-router-dom';

function ShopByRooms() {
  // Reordered items and replaced "Kids" with "Office" to keep it unique and tailored for S.S. Industries
  const rooms = [
    {
      title: "Living Room",
      link: "/room/living",
      image: "https://images.unsplash.com/photo-1540574163026-643ea20d25b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Master Bedroom",
      link: "/room/bedroom",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Home Office",
      link: "/room/office",
      image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Dining Space",
      link: "/room/dining",
      image: "https://images.unsplash.com/photo-1617806118233-18e1c0e3f014?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Study & Workspaces",
      link: "/room/study",
      image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Modular Kitchen",
      link: "/room/kitchen",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
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
          {rooms.map((room, index) => (
            <Link 
              key={index} 
              to={room.link}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Image Box with rounded corners and subtle shadow */}
              <div className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-white shadow-sm border border-gray-200 group-hover:shadow-md group-hover:border-[#13463f] transition-all duration-300 mb-3 relative">
                <img 
                  src={room.image} 
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
          ))}
        </div>

      </div>
    </section>
  );
}

export default ShopByRooms;