import React from 'react';
import { Link } from 'react-router-dom';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';

// 1. Cloudinary Setup
const cld = new Cloudinary({
  cloud: {
    cloudName: 'zlqgwdom'
  }
});

function Careers() {
  // Cloudinary image for career/craftsmanship background hero
  const careerHeroImg = cld.image('ChatGPT_Image_Oct_2_2026_12_30_58_PM').format('auto').quality('auto:best');

  return (
    <div className="font-sans text-[#0a0a0a] bg-[#f5ebe0] min-h-screen">
      
      {/* 1. Hero Section - Height reduced using smaller padding */}
      <section className="relative w-full py-20 md:py-24 px-6 flex flex-col items-center justify-center overflow-hidden z-0">
        
        {/* Background Image - Clean and original visibility */}
        <div className="absolute inset-0 -z-10">
          <AdvancedImage cldImg={careerHeroImg} alt="Careers at SS Industries" className="w-full h-full object-cover" />
        </div>
        
        {/* Simple dark gradient at bottom just to make text readable, NO green */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent -z-10"></div>

        <div className="max-w-4xl mx-auto text-center z-10 pt-8">
          <span className="text-[#d4af37] uppercase tracking-[0.3em] text-xs md:text-sm font-bold mb-4 block drop-shadow-md">
            Join Our Legacy
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#f5ebe0] mb-6 tracking-tight drop-shadow-lg">
            Build Your Future <br className="hidden md:block"/> With <span className="text-[#d4af37]">Master Artisans</span>.
          </h1>
          <p className="text-[#d2bfa9] text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light drop-shadow">
            We are always looking for passionate craftsmen, designers, and sales professionals who share our uncompromising vision for luxury and quality.
          </p>
        </div>
      </section>

      {/* 2. Why Work With Us Section (Padding equal to 3rd section: py-20) */}
      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-[1350px] mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#13463f] uppercase tracking-[0.2em] text-xs font-bold mb-3 block">Work Culture</span>
          <h2 className="text-3xl md:text-5xl font-black text-[#0a0a0a] mb-4">Why Grow With S.S. Industries?</h2>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto mb-4"></div>
          <p className="text-[#0a0a0a]/70 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            At S.S. Industries, you aren't just an employee—you are a vital part of a growing heritage rooted in Jaipur's finest furniture manufacturing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl border border-[#d2bfa9] shadow-sm">
            <div className="w-12 h-12 bg-[#13463f] text-[#f5ebe0] rounded-full flex items-center justify-center font-bold text-xl mb-6">01</div>
            <h3 className="text-xl font-bold text-[#0a0a0a] mb-3">Craftsmanship First</h3>
            <p className="text-[#0a0a0a]/70 text-sm leading-relaxed">Learn and work alongside master artisans with decades of experience in woodwork, upholstery, and modern interior design.</p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-[#d2bfa9] shadow-sm">
            <div className="w-12 h-12 bg-[#13463f] text-[#f5ebe0] rounded-full flex items-center justify-center font-bold text-xl mb-6">02</div>
            <h3 className="text-xl font-bold text-[#0a0a0a] mb-3">Growth & Stability</h3>
            <p className="text-[#0a0a0a]/70 text-sm leading-relaxed">Be part of a rapidly expanding brand with dual studio and showroom operations across Jaipur, offering stable and rewarding career tracks.</p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-[#d2bfa9] shadow-sm">
            <div className="w-12 h-12 bg-[#13463f] text-[#f5ebe0] rounded-full flex items-center justify-center font-bold text-xl mb-6">03</div>
            <h3 className="text-xl font-bold text-[#0a0a0a] mb-3">Collaborative Environment</h3>
            <p className="text-[#0a0a0a]/70 text-sm leading-relaxed">An inclusive, family-led workspace where your creative inputs and operational ideas are valued directly by the directors.</p>
          </div>
        </div>
      </section>

      {/* 3. Direct Contact / Walk-In Information (Padding equal to 2nd section: py-20) */}
      <section className="bg-white py-20 px-6 md:px-12 lg:px-20 text-[#0a0a0a] border-t border-[#d2bfa9]/50 shadow-inner">
        <div className="max-w-[1000px] mx-auto text-center">
          
          <span className="text-[#13463f] uppercase tracking-[0.25em] text-xs font-bold mb-3 block">Get In Touch Directly</span>
          <h2 className="text-3xl md:text-5xl font-black text-[#0a0a0a] mb-6">Interested in Joining Our Team?</h2>
          <p className="text-[#0a0a0a]/70 max-w-xl mx-auto text-base md:text-lg mb-12 leading-relaxed">
            We prefer direct conversations over online forms. Feel free to call us, drop an email with your resume, or visit our showrooms directly.
          </p>

          {/* Contact Details Box */}
          <div className="bg-[#fdfaf6] p-8 md:p-12 rounded-3xl border border-[#d2bfa9] shadow-lg text-left grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Left: Call & Email */}
            <div className="space-y-6">
              <div>
                <p className="text-xs font-bold text-[#13463f] uppercase tracking-wider mb-1">Direct Phone Lines</p>
                <div className="flex flex-col gap-1">
                  <a href="tel:+919610774466" className="text-lg md:text-xl font-extrabold text-[#0a0a0a] hover:text-[#d4af37] transition-colors">+91 9610774466</a>
                  <a href="tel:+919057201868" className="text-lg md:text-xl font-extrabold text-[#0a0a0a] hover:text-[#d4af37] transition-colors">+91 9057201868</a>
                </div>
              </div>

              <div>
                <p className="text-xs font-bold text-[#13463f] uppercase tracking-wider mb-1">Email Resumes / Inquiries</p>
                <a href="mailto:ssindustries576@gmail.com" className="text-base md:text-lg font-bold text-[#0a0a0a] hover:text-[#d4af37] transition-colors">ssindustries576@gmail.com</a>
              </div>

              <div>
                <p className="text-xs font-bold text-[#13463f] uppercase tracking-wider mb-1">Working Hours</p>
                <p className="text-sm text-[#0a0a0a]/70">Every day between <span className="text-[#0a0a0a] font-bold">11:00 AM to 9:00 PM</span></p>
              </div>
            </div>

            {/* Right: Showroom / Office Addresses */}
            <div className="space-y-6 border-t md:border-t-0 md:border-l border-[#d2bfa9]/50 pt-6 md:pt-0 md:pl-8">
              <div>
                <p className="text-xs font-bold text-[#13463f] uppercase tracking-wider mb-2">Flagship Studio</p>
                <p className="text-sm text-[#0a0a0a]/80 leading-relaxed font-medium">
                  Suiwal Complex, Opp. Sanganer Police Station, Airport Circle, Tonk Rd, Sanganer, Jaipur, Rajasthan 302029
                </p>
              </div>

              <div>
                <p className="text-xs font-bold text-[#13463f] uppercase tracking-wider mb-2">Heritage Outlet</p>
                <p className="text-sm text-[#0a0a0a]/80 leading-relaxed font-medium">
                  Opp. Torrent CNG pump, near Raj Marriage Garden, Patrakar Colony, Sunder Nagar, Jaipur, Rajasthan 302020
                </p>
              </div>
            </div>

          </div>

          <div className="mt-12">
            <Link to="/contact-us" className="inline-block px-10 py-4 bg-[#13463f] text-[#f5ebe0] font-bold tracking-widest uppercase hover:bg-[#0a0a0a] hover:text-[#d4af37] transition-all duration-300 rounded-sm shadow-xl hover:shadow-2xl">
              Go to Contact Page
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Careers;