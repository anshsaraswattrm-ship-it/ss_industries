import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';

// 1. Cloudinary Setup
const cld = new Cloudinary({
  cloud: {
    cloudName: 'zlqgwdom'
  }
});

function CustomFurniture() {
  const [activeTab, setActiveTab] = useState('residential');

  // Cloudinary Video & Images
  const heroVideoUrl = cld.video('Custom_SS').toURL(); 
  const residentialImg = cld.image('a56f3e465d3ce9ae536727c57f0f60af').format('auto').quality('auto:best');
  const corporateImg = cld.image('9bd195fc8d3461f4c556bff07a42e350').format('auto').quality('auto:best');

  return (
    <div className="font-sans text-[#0a0a0a] bg-[#f5ebe0] min-h-screen">
      
      {/* 1. Hero Section with Background Video */}
      <section className="relative w-full py-28 md:py-36 px-6 flex flex-col items-center justify-center overflow-hidden bg-[#13463f] z-0">
        
        {/* Background Video Element */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover -z-20"
        >
          <source src={heroVideoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-[#0a0a0a]/50 -z-10"></div>

        <div className="max-w-4xl mx-auto text-center z-10">
          <span className="text-[#d4af37] uppercase tracking-[0.3em] text-xs md:text-sm font-bold mb-4 block drop-shadow-md">
            Bespoke & Tailored
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#f5ebe0] mb-6 tracking-tight drop-shadow-lg">
            Custom Crafted <br className="hidden md:block"/> For <span className="text-[#d4af37]">Your Exact Vision</span>.
          </h1>
          <p className="text-[#d2bfa9] text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light drop-shadow">
            Whether it's a unique home sanctuary or a grand corporate workspace, we bring your architectural dreams to life with matchless precision and premium materials.
          </p>
        </div>
      </section>

      {/* 2. Interactive Selection: Residential vs Corporate */}
      <section className="py-24 px-6 md:px-12 lg:px-20 max-w-[1350px] mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[#13463f] uppercase tracking-[0.2em] text-xs font-bold mb-3">Our Expertise</span>
          <h2 className="text-3xl md:text-5xl font-black text-[#0a0a0a] mb-6">Designed For Every Space</h2>
          <div className="w-20 h-1 bg-[#d4af37] mb-8"></div>
          
          {/* Tabs Switcher */}
          <div className="flex bg-[#d2bfa9]/40 p-1.5 rounded-full border border-[#13463f]/20">
            <button 
              onClick={() => setActiveTab('residential')}
              className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'residential' ? 'bg-[#13463f] text-[#f5ebe0] shadow-lg' : 'text-[#0a0a0a] hover:text-[#13463f]'
              }`}
            >
              Residential Living
            </button>
            <button 
              onClick={() => setActiveTab('corporate')}
              className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'corporate' ? 'bg-[#13463f] text-[#f5ebe0] shadow-lg' : 'text-[#0a0a0a] hover:text-[#13463f]'
              }`}
            >
              Corporate & Commercial
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="flex flex-col lg:flex-row items-center gap-16 bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-[#d2bfa9] shadow-xl">
          
          <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <AdvancedImage 
              cldImg={activeTab === 'residential' ? residentialImg : corporateImg} 
              alt="Custom & Corporate Furniture" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <span className="text-[#d4af37] font-bold uppercase tracking-widest text-xs mb-2">
              {activeTab === 'residential' ? 'Bespoke Homes' : 'Commercial Excellence'}
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#0a0a0a] mb-6">
              {activeTab === 'residential' ? 'Crafting Personal Masterpieces' : 'Elevating Corporate Workspaces'}
            </h3>
            <p className="text-[#0a0a0a]/80 text-base md:text-lg leading-relaxed mb-6">
              {activeTab === 'residential' 
                ? 'Your home should tell your story. We design one-of-a-kind statement pieces tailored strictly to your room dimensions, aesthetic choices, and comfort requirements.' 
                : 'Make a powerful statement to your clients and boost team productivity. We engineer heavy-duty, ergonomic, and aesthetic executive desks, conference setups, and complete office interiors.'}
            </p>
            <ul className="space-y-3 mb-8 text-sm text-[#0a0a0a]/90 font-medium">
              {activeTab === 'residential' ? (
                <>
                  <li className="flex items-center gap-2">✦ Custom Wardrobes & Walk-in Closets</li>
                  <li className="flex items-center gap-2">✦ Personalized Luxury Sofa Dimensions</li>
                  <li className="flex items-center gap-2">✦ Architectural Dining Tables & Media Units</li>
                </>
              ) : (
                <>
                  <li className="flex items-center gap-2">✦ Executive Boardroom Tables & Seating</li>
                  <li className="flex items-center gap-2">✦ Modular Open-Plan Workstations</li>
                  <li className="flex items-center gap-2">✦ Reception Desks & Architectural Paneling</li>
                </>
              )}
            </ul>
            <Link to="/get-a-quote" className="px-8 py-4 bg-[#13463f] text-[#f5ebe0] font-semibold tracking-wide uppercase text-sm hover:bg-[#0a0a0a] hover:text-[#d4af37] transition-all duration-300 rounded-sm shadow-md">
              Request Custom Consultation
            </Link>
          </div>

        </div>
      </section>

      {/* 3. Process Steps */}
      <section className="bg-[#0a0a0a] py-24 px-6 md:px-12 lg:px-20 text-[#f5ebe0] border-t-4 border-[#d4af37]">
        <div className="max-w-[1350px] mx-auto text-center mb-16">
          <span className="text-[#d4af37] uppercase tracking-[0.2em] text-xs font-bold mb-3">Seamless Workflow</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Build Your Vision</h2>
          <p className="text-[#d2bfa9] max-w-xl mx-auto">From concept to final installation, experience transparent and masterclass craftsmanship.</p>
        </div>

        <div className="max-w-[1350px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="bg-[#121212] p-8 rounded-xl border border-[#13463f]">
            <span className="text-[#d4af37] font-black text-4xl mb-4 block">01</span>
            <h3 className="text-xl font-bold mb-2">Consultation</h3>
            <p className="text-[#d2bfa9]/80 text-sm leading-relaxed">Share your blueprints, ideas, or mood boards with our expert design consultants.</p>
          </div>

          <div className="bg-[#121212] p-8 rounded-xl border border-[#13463f]">
            <span className="text-[#d4af37] font-black text-4xl mb-4 block">02</span>
            <h3 className="text-xl font-bold mb-2">3D & Materializing</h3>
            <p className="text-[#d2bfa9]/80 text-sm leading-relaxed">We provide exact 3D renderings and let you handpick wood finishes, fabrics, and metals.</p>
          </div>

          <div className="bg-[#121212] p-8 rounded-xl border border-[#13463f]">
            <span className="text-[#d4af37] font-black text-4xl mb-4 block">03</span>
            <h3 className="text-xl font-bold mb-2">Precision Crafting</h3>
            <p className="text-[#d2bfa9]/80 text-sm leading-relaxed">Our master artisans build your furniture using state-of-the-art machinery and hand-detailing.</p>
          </div>

          <div className="bg-[#121212] p-8 rounded-xl border border-[#13463f]">
            <span className="text-[#d4af37] font-black text-4xl mb-4 block">04</span>
            <h3 className="text-xl font-bold mb-2">Delivery & Setup</h3>
            <p className="text-[#d2bfa9]/80 text-sm leading-relaxed">White-glove delivery and professional installation right at your site.</p>
          </div>

        </div>
      </section>

      {/* 4. Bottom Call to Action */}
      <section className="bg-[#f5ebe0] py-24 px-6 text-center border-t border-[#0a0a0a]/10">
        <h2 className="text-3xl md:text-5xl font-black text-[#0a0a0a] mb-6">Got a Custom Project in Mind?</h2>
        <p className="text-[#0a0a0a]/70 max-w-2xl mx-auto mb-10 text-lg">
          Let's discuss your requirements—residential or corporate, we are ready to build it to perfection.
        </p>
        <Link to="/contact-us" className="inline-block px-10 py-4 bg-[#0a0a0a] text-[#d4af37] font-bold tracking-widest uppercase hover:bg-[#13463f] hover:text-[#f5ebe0] transition-all duration-300 rounded-sm shadow-xl hover:shadow-2xl">
          Contact Us Now
        </Link>
      </section>

    </div>
  );
}

export default CustomFurniture;