import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';

// Global Cloudinary Setup
const cld = new Cloudinary({
  cloud: {
    cloudName: 'zlqgwdom'
  }
});

function CuratedCraftsmanship() {
  const [activeTab, setActiveTab] = useState('sofas');

  // Replaced external URLs with Cloudinary imageIds
  const categoryData = {
    sofas: {
      title: "Sofas & Lounges",
      items: [
        { name: "L-Shaped Sectionals", imageId: "a289c54bec7635d772a74476e2cf2292", link: "/products" },
        { name: "Leatherette Executive Sofas", imageId: "cdfc7b5891dd6bed02c6ad47409fcce9", link: "/products" },
        { name: "Plush 3-Seater Sofas", imageId: "674d0f17d31a9a92bb56e9ebe3b393a7", link: "/products" },
        { name: "Convertible Sofa Beds", imageId: "87c1a5be4216c203e8c893b94ee4cba4", link: "/products" },
        { name: "Luxury Recliners", imageId: "0adb19a0ee3992ba453eb038b2fa4ef0", link: "/products" },
      ]
    },
    beds: {
      title: "Signature Beds",
      items: [
        { name: "King Size Storage Beds", imageId: "0be7c0f5e6cd5004fbebefab529b517e", link: "/products" },
        { name: "Upholstered Designer Beds", imageId: "c026438f92eca77cc89aa0bc9f37dd49", link: "/products" },
        { name: "Hydraulic Storage Frames", imageId: "7422d06109f83fbe26ff9c431f960cdc", link: "/products" },
      ]
    },
    sheesham: {
      title: "Sheesham Heritage",
      items: [
        { name: "Solid Wood Dining Sets", imageId: "c9c7fed693b892072f7950dee1ecff9f", link: "/products" },
        { name: "Classic Storage Cabinets", imageId: "824efee59392136bf9e70ee89798d92a", link: "/products" },
        { name: "Heritage Bookshelves", imageId: "52a384ead9856205e6ca017a5cce0c9d", link: "/products" },
      ]
    },
    engineered: {
      title: "Modern Engineered",
      items: [
        { name: "Minimalist TV Media Units", imageId: "487184374813b70c57c383794cf58091", link: "/products" },
        { name: "Contemporary Work Desks", imageId: "739353ade2796728b1b6f57a9923c5f9", link: "/products" },
        { name: "Modular Wardrobes", imageId: "fd0b5ea5e3b99da583d3f05e375ca79c", link: "/products" },
      ]
    },
    tables: {
      title: "Tables & Accents",
      items: [
        { name: "Marble Top Coffee Tables", imageId: "275d02c33eeb3d38fa0050fbc7d34a09", link: "/products" },
        { name: "Nested Accent Tables", imageId: "aad1d871c4dd4fa95fa82619ca0182d2", link: "/products" },
      ]
    }
  };

  const tabs = [
    { id: 'sofas', label: 'Sofas & Seating' },
    { id: 'beds', label: 'Beds & Sleep' },
    { id: 'sheesham', label: 'Sheesham Heritage' },
    { id: 'engineered', label: 'Engineered Wood' },
    { id: 'tables', label: 'Coffee & Tables' }
  ];

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-12 bg-[#fdfaf6] font-sans">
      <div className="max-w-[1350px] mx-auto">
        
        {/* Section Heading */}
        <div className="mb-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            <span className="text-[#d4af37] italic mr-2">Curated</span>
            <span className="text-[#13463f]">Craftsmanship</span>
          </h2>
          <div className="h-1 w-20 bg-[#13463f] mt-2 rounded"></div>
          <p className="text-gray-600 text-sm md:text-base mt-2">
            Explore meticulously designed furniture built to redefine your spaces.
          </p>
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex items-center gap-3 overflow-x-auto py-3 px-2 mb-10 no-scrollbar" style={{ scrollbarWidth: 'none' }}>
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 border shadow-sm relative z-10 ${
                  isActive 
                    ? 'bg-[#13463f] text-white border-[#13463f] shadow-md scale-105' 
                    : 'bg-white text-gray-700 border-gray-200 hover:border-[#13463f] hover:text-[#13463f]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Sub-Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
          {categoryData[activeTab].items.map((item, index) => {
            // Generate optimized image on the fly
            const optimizedImg = cld.image(item.imageId).format('auto').quality('auto');

            return (
              <Link 
                key={index} 
                to={item.link}
                className="group flex flex-col bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                {/* Image Box */}
                <div className="w-full aspect-[4/3] bg-gray-100 overflow-hidden relative">
                  <AdvancedImage 
                    cldImg={optimizedImg} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                </div>

                {/* Title & Action */}
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <h3 className="text-[#0a0a0a] text-sm md:text-base font-bold group-hover:text-[#13463f] transition-colors leading-snug">
                    {item.name}
                  </h3>
                  <span className="text-xs font-semibold text-[#d4af37] mt-3 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Explore Collection →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default CuratedCraftsmanship;