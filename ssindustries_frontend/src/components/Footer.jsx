import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  // Function to smoothly scroll to the top
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="w-full bg-[#0a241f] text-white font-sans pt-12 lg:pt-16 pb-6 lg:pb-8 border-t-4 border-[#d4af37]">
      <div className="max-w-[1350px] mx-auto px-4 md:px-8">
        
        {/* =========================================
            TOP SECTION: 4-COLUMN BALANCED LAYOUT
            ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-10 pb-10 lg:pb-12 border-b border-white/10">
          
          {/* Column 1: Logo, Collections & Policies & Social Media Icons */}
          <div>
            {/* Brand Logo - Explicitly Centered on Mobile, Left on Desktop */}
            <div className="mb-6 lg:mb-8 w-full flex justify-center md:justify-start">
              <Link to="/" onClick={handleScrollToTop} className="inline-block">
                <img 
                  src="/S.S Logo.svg" 
                  alt="S.S. Industries Logo" 
                  className="h-16 lg:h-20 w-auto object-contain"
                />
              </Link>
            </div>

            <h3 className="text-[#d4af37] font-bold text-sm tracking-widest uppercase mb-4 lg:mb-5">Collections & Policies</h3>
            <ul className="space-y-3 text-sm text-gray-300 mb-8 md:mb-6">
              <li><Link to="/products" onClick={handleScrollToTop} className="hover:text-white transition-colors flex items-center gap-2"><span>›</span> All Products</Link></li>
              <li><Link to="/faqs" onClick={handleScrollToTop} className="hover:text-white transition-colors flex items-center gap-2"><span>›</span> FAQs</Link></li>
              <li><Link to="/terms-of-service" onClick={handleScrollToTop} className="hover:text-white transition-colors flex items-center gap-2"><span>›</span> Terms Of Service</Link></li>
              <li><Link to="/privacy-policy" onClick={handleScrollToTop} className="hover:text-white transition-colors flex items-center gap-2"><span>›</span> Privacy Policy</Link></li>
            </ul>

            {/* Social Media & WhatsApp Icons */}
            <div className="w-full">
              <p className="text-[11px] lg:text-xs font-semibold text-[#d4af37] uppercase tracking-wider mb-3">Connect With Us</p>
              <div className="flex items-center gap-3">
                {/* Instagram */}
                <a href="https://www.instagram.com/ss_industries_jaipur?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 lg:w-9 lg:h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-colors" title="Instagram">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                {/* Facebook */}
                <a href="https://www.facebook.com/ssindustriess" target="_blank" rel="noopener noreferrer" className="w-10 h-10 lg:w-9 lg:h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-colors" title="Facebook">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.37 14.5 5 15.5 5H18V0h-3.808C10.59 0 9 1.588 9 4.708V8z"/></svg>
                </a>
                {/* Pinterest */}
                <a href="https://in.pinterest.com/ssindustries576/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 lg:w-9 lg:h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-colors" title="Pinterest">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.331 1.363-.053.225-.172.273-.396.164-1.478-.688-2.403-2.85-2.403-4.586 0-3.735 2.715-7.162 7.83-7.162 4.11 0 7.308 2.932 7.308 6.852 0 4.088-2.583 7.377-6.166 7.377-1.203 0-2.335-.625-2.721-1.362l-.74 2.822c-.268 1.025-1.001 2.308-1.492 3.091 1.12.345 2.311.531 3.543.531 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
                </a>
                {/* WhatsApp */}
                <a href="https://wa.me/919610774466?text=Hello,%20i%20m%20interesed%20in%20your%20products." target="_blank" rel="noopener noreferrer" className="w-10 h-10 lg:w-9 lg:h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-colors" title="WhatsApp">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-[#d4af37] font-bold text-sm tracking-widest uppercase mb-4 lg:mb-5 mt-2 md:mt-0">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-300 mb-8 md:mb-6">
              <li><Link to="/video-call" onClick={handleScrollToTop} className="hover:text-[#d4af37] transition-colors">Live Video Call</Link></li>
              <li><Link to="/about-us" onClick={handleScrollToTop} className="hover:text-[#d4af37] transition-colors">About Us</Link></li>
              <li><Link to="/products" onClick={handleScrollToTop} className="hover:text-[#d4af37] transition-colors">Products</Link></li>
              <li><Link to="/custom-furniture" onClick={handleScrollToTop} className="hover:text-[#d4af37] transition-colors">Custom Furniture</Link></li>
              <li><Link to="/careers" onClick={handleScrollToTop} className="hover:text-[#d4af37] transition-colors">Careers</Link></li>
              <li><Link to="/contact-us" onClick={handleScrollToTop} className="hover:text-[#d4af37] transition-colors">Contact Us</Link></li>
              <li><Link to="/get-a-quote" onClick={handleScrollToTop} className="hover:text-[#d4af37] transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          {/* Column 3: Why S.S. Industries */}
          <div>
            <h3 className="text-[#d4af37] font-bold text-sm tracking-widest uppercase mb-4 lg:mb-5">Why S.S. Industries</h3>
            <ul className="space-y-3 text-sm text-gray-300 mb-8 md:mb-0">
              <li className="flex items-start gap-2">
                <span className="text-[#d4af37]">✓</span> 
                <span>Bespoke Luxury Woodcraft & Custom Sizing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#d4af37]">✓</span> 
                <span>Live Video Consultations with Expert Artisans</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#d4af37]">✓</span> 
                <span>Pan-India Commercial & Residential Dispatch</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#d4af37]">✓</span> 
                <span>Comprehensive Manufacturer Warranties</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Help & Support */}
          <div>
            <h3 className="text-[#d4af37] font-bold text-sm tracking-widest uppercase mb-4 lg:mb-5 mt-2 md:mt-0">Help & Support</h3>
            
            <div className="bg-white/5 p-4 lg:p-3.5 rounded-xl border border-white/10 mb-4 space-y-4 md:space-y-3 w-full">
              
              {/* Phone Support */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-9 md:h-9 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37] flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <p className="text-[11px] text-gray-300 font-medium mb-1 md:mb-0.5">Call Us</p>
                  <div className="flex flex-wrap items-center gap-1">
                    <a href="tel:+919610774466" className="text-sm font-bold text-white hover:text-[#d4af37] transition-colors">+91 9610774466</a>
                    <span className="text-gray-500 mx-0.5 text-xs">|</span>
                    <a href="tel:+919057201868" className="text-sm font-bold text-white hover:text-[#d4af37] transition-colors">+91 9057201868</a>
                  </div>
                </div>
              </div>

              {/* Email Support */}
              <div className="flex items-center gap-3 pt-4 md:pt-3 lg:pt-2 border-t border-white/10">
                <div className="w-10 h-10 md:w-9 md:h-9 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37] flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <p className="text-[11px] text-gray-300 font-medium mb-1 md:mb-0.5">Email Us</p>
                  <a href="mailto:ssindustries576@gmail.com" className="text-sm font-bold text-white hover:text-[#d4af37] transition-colors">ssindustries576@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="text-[11px] lg:text-[10px] text-gray-300 space-y-2 mb-4 leading-relaxed border-t border-white/10 pt-3">
              <p className="font-semibold text-[#d4af37] text-xs lg:text-[10px]">Registered Offices & Showrooms:</p>
              <p><strong className="text-white">Flagship Studio:</strong> Suiwal Complex, Opp. Sanganer Police Station, Airport Circle, Tonk Rd, Sanganer, Jaipur, Rajasthan 302029</p>
              <p className="mt-2"><strong className="text-white">Heritage Outlet:</strong> Opp. Torrent CNG pump, near Raj Marriage Garden, Patrakar Colony, Sunder Nagar, Jaipur, Rajasthan 302020</p>
            </div>

            <div className="bg-[#13463f]/40 p-3 lg:p-2.5 rounded-lg border border-[#d4af37]/30 text-center">
              <p className="text-[11px] text-gray-200">
                We are here to help you every day between <br className="block sm:hidden" />
                <span className="text-[#d4af37] font-semibold">11:00 AM to 9:00 PM</span>
              </p>
            </div>
          </div>

        </div>

        {/* =========================================
            MIDDLE ROW: EXPLORE SPACES (ROUTED TO PRODUCTS)
            ========================================= */}
        <div className="py-6 lg:py-8 border-b border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 text-xs text-gray-300">
          
          {/* Shop By Rooms */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-3 lg:mb-2">Explore Spaces By Rooms</h4>
            <div className="flex flex-wrap gap-x-2 gap-y-2 lg:gap-y-1.5 text-gray-400 items-center leading-relaxed">
              <Link to="/products" onClick={handleScrollToTop} className="hover:text-[#d4af37]">Living Room</Link> <span className="text-[#d4af37]">|</span>
              <Link to="/products" onClick={handleScrollToTop} className="hover:text-[#d4af37]">Master Bedroom</Link> <span className="text-[#d4af37]">|</span>
              <Link to="/products" onClick={handleScrollToTop} className="hover:text-[#d4af37]">Home Office</Link> <span className="text-[#d4af37]">|</span>
              <Link to="/products" onClick={handleScrollToTop} className="hover:text-[#d4af37]">Dining Space</Link> <span className="text-[#d4af37]">|</span>
              <Link to="/products" onClick={handleScrollToTop} className="hover:text-[#d4af37]">Study Workspaces</Link> <span className="text-[#d4af37]">|</span>
              <Link to="/products" onClick={handleScrollToTop} className="hover:text-[#d4af37]">Modular Kitchen</Link>
            </div>
          </div>

          {/* Shop By Categories */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-3 lg:mb-2">Explore Spaces By Categories</h4>
            <div className="flex flex-wrap gap-x-2 gap-y-2 lg:gap-y-1.5 text-gray-400 items-center leading-relaxed">
              <Link to="/products" onClick={handleScrollToTop} className="hover:text-[#d4af37]">Sofas & Lounges</Link> <span className="text-[#d4af37]">|</span>
              <Link to="/products" onClick={handleScrollToTop} className="hover:text-[#d4af37]">Signature Beds</Link> <span className="text-[#d4af37]">|</span>
              <Link to="/products" onClick={handleScrollToTop} className="hover:text-[#d4af37]">Dining Ensembles</Link> <span className="text-[#d4af37]">|</span>
              <Link to="/products" onClick={handleScrollToTop} className="hover:text-[#d4af37]">Chairs & Seating</Link> <span className="text-[#d4af37]">|</span>
              <Link to="/products" onClick={handleScrollToTop} className="hover:text-[#d4af37]">Wardrobes</Link> <span className="text-[#d4af37]">|</span>
              <Link to="/products" onClick={handleScrollToTop} className="hover:text-[#d4af37]">Mattresses</Link> <span className="text-[#d4af37]">|</span>
              <Link to="/products" onClick={handleScrollToTop} className="hover:text-[#d4af37]">Coffee Tables</Link>
            </div>
          </div>

        </div>

        {/* =========================================
            BOTTOM COPYRIGHT & BRANDING SECTION
            ========================================= */}
        <div className="pt-6 lg:pt-8 text-center text-[11px] sm:text-xs text-gray-400 flex flex-col sm:flex-row items-center justify-center gap-2">
          <p>© 2026 S.S. Industries. All Rights Reserved.</p>
          <span className="hidden sm:inline text-[#d4af37]">|</span>
          <p>
            Made with <span className="text-red-500">❤️</span> by <a href="https://theraptormarketing.com" target="_blank" rel="noopener noreferrer" className="text-[#d4af37] font-semibold hover:underline">The Raptor Marketing</a>
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;