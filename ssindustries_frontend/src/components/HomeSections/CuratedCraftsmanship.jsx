import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CuratedCraftsmanship() {
  // Active tab state
  const [activeTab, setActiveTab] = useState('sofas');

  // Categories data with unique names and customized sub-items
  const categoryData = {
    sofas: {
      title: "Sofas & Lounges",
      items: [
        { name: "L-Shaped Sectionals", image: "https://images.unsplash.com/photo-1540574163026-643ea20d25b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", link: "/catalog/l-shape-sofa" },
        { name: "Leatherette Executive Sofas", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", link: "/catalog/leatherette-sofa" },
        { name: "Plush 3-Seater Sofas", image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", link: "/catalog/3-seater-sofa" },
        { name: "Convertible Sofa Beds", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", link: "/catalog/sofa-cum-bed" },
        { name: "Luxury Recliners", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", link: "/catalog/recliners" },
      ]
    },
    beds: {
      title: "Signature Beds",
      items: [
        { name: "King Size Storage Beds", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", link: "/catalog/king-beds" },
        { name: "Upholstered Designer Beds", image: "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", link: "/catalog/upholstered-beds" },
        { name: "Hydraulic Storage Frames", image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", link: "/catalog/hydraulic-beds" },
      ]
    },
    sheesham: {
      title: "Sheesham Heritage",
      items: [
        { name: "Solid Wood Dining Sets", image: "https://images.unsplash.com/photo-1617806118233-18e1c0e3f014?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", link: "/catalog/sheesham-dining" },
        { name: "Classic Storage Cabinets", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", link: "/catalog/sheesham-cabinets" },
        { name: "Heritage Bookshelves", image: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", link: "/catalog/bookshelves" },
      ]
    },
    engineered: {
      title: "Modern Engineered",
      items: [
        { name: "Minimalist TV Media Units", image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", link: "/catalog/tv-units" },
        { name: "Contemporary Work Desks", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", link: "/catalog/work-desks" },
        { name: "Modular Wardrobes", image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", link: "/catalog/wardrobes" },
      ]
    },
    tables: {
      title: "Tables & Accents",
      items: [
        { name: "Marble Top Coffee Tables", image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", link: "/catalog/coffee-tables" },
        { name: "Nested Accent Tables", image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", link: "/catalog/accent-tables" },
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
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            <span className="text-[#d4af37] italic mr-2">Curated</span>
            <span className="text-[#13463f]">Craftsmanship</span>
          </h2>
          <div className="h-1 w-20 bg-[#13463f] mt-2 rounded"></div>
          <p className="text-gray-600 text-sm md:text-base mt-1">
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
          {categoryData[activeTab].items.map((item, index) => (
            <Link 
              key={index} 
              to={item.link}
              className="group flex flex-col bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Image Box */}
              <div className="w-full aspect-[4/3] bg-gray-100 overflow-hidden relative">
                <img 
                  src={item.image} 
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
          ))}
        </div>

      </div>
    </section>
  );
}

export default CuratedCraftsmanship;