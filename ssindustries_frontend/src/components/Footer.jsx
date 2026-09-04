import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="w-full bg-[#0a241f] text-white font-sans pt-16 pb-8 border-t-4 border-[#d4af37]">
      <div className="max-w-[1350px] mx-auto px-4 md:px-8">
        
        {/* =========================================
            TOP SECTION: 4-COLUMN BALANCED LAYOUT
            ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Logo, Collections & Policies & Social Media Icons */}
          <div>
            {/* Brand Logo (Actual <img> tag added) */}
            <div className="mb-6">
              <Link to="/" className="inline-block">
                <img 
                  src="/S.S Logo.svg" 
                  alt="S.S. Industries Logo" 
                  className="h-18 w-auto object-contain"
                />
              </Link>
            </div>

            <h3 className="text-[#d4af37] font-bold text-sm tracking-widest uppercase mb-5">Collections & Policies</h3>
            <ul className="space-y-3 text-sm text-gray-300 mb-6">
              <li><Link to="/all-products" className="hover:text-white transition-colors flex items-center gap-2"><span>›</span> All Products</Link></li>
              <li><Link to="/faqs" className="hover:text-white transition-colors flex items-center gap-2"><span>›</span> FAQs</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors flex items-center gap-2"><span>›</span> Terms Of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors flex items-center gap-2"><span>›</span> Privacy Policy</Link></li>
            </ul>

            {/* Social Media Icons */}
            <div>
              <p className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider mb-3">Connect With Us</p>
              <div className="flex items-center gap-3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-colors">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-colors">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.37 14.5 5 15.5 5H18V0h-3.808C10.59 0 9 1.588 9 4.708V8z"/></svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-colors">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-colors">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                </a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-colors">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.331 1.363-.053.225-.172.273-.396.164-1.478-.688-2.403-2.85-2.403-4.586 0-3.735 2.715-7.162 7.83-7.162 4.11 0 7.308 2.932 7.308 6.852 0 4.088-2.583 7.377-6.166 7.377-1.203 0-2.335-.625-2.721-1.362l-.74 2.822c-.268 1.025-1.001 2.308-1.492 3.091 1.12.345 2.311.531 3.543.531 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-[#d4af37] font-bold text-sm tracking-widest uppercase mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-300 mb-6">
              <li><Link to="/about" className="hover:text-[#d4af37] transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-[#d4af37] transition-colors">Products</Link></li>
              <li><Link to="/custom-furniture" className="hover:text-[#d4af37] transition-colors">Custom Furniture</Link></li>
              <li><Link to="/portfolio" className="hover:text-[#d4af37] transition-colors">Portfolio</Link></li>
              <li><Link to="/careers" className="hover:text-[#d4af37] transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Column 3: Why S.S. Industries */}
          <div>
            <h3 className="text-[#d4af37] font-bold text-sm tracking-widest uppercase mb-5">Why S.S. Industries</h3>
            <ul className="space-y-3 text-sm text-gray-300">
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

          {/* Column 4: Help & Support with Unique Structured Design */}
          <div>
            <h3 className="text-[#d4af37] font-bold text-sm tracking-widest uppercase mb-5">Help & Support</h3>
            
            {/* Phone Support Box */}
            <div className="bg-white/5 p-3.5 rounded-xl border border-white/10 mb-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37] flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <p className="text-[11px] text-gray-300 font-medium">Contact us at</p>
                <a href="tel:+919883333123" className="text-sm font-bold text-white hover:text-[#d4af37] transition-colors">+91 9883333123</a>
              </div>
            </div>

            {/* Dual Studio / Office Locations */}
            <div className="text-[10px] text-gray-300 space-y-2 mb-4 leading-relaxed border-t border-white/10 pt-3">
              <p className="font-semibold text-[#d4af37]">Registered Offices & Showrooms:</p>
              <p><strong className="text-white">Studio 1:</strong> 2nd & 4th Floor, Umiya Emporium, Hosur Road, Bangalore 560029, India</p>
              <p><strong className="text-white">Studio 2:</strong> C-Scheme, Near Ashok Marg, Jaipur, Rajasthan 302001, India</p>
            </div>

            {/* Timings at the Bottom */}
            <div className="bg-[#13463f]/40 p-2.5 rounded-lg border border-[#d4af37]/30 text-center">
              <p className="text-[11px] text-gray-200">
                We are here to help you every day between <span className="text-[#d4af37] font-semibold">11:00 AM to 9:00 PM</span>
              </p>
            </div>
          </div>

        </div>

        {/* =========================================
            MIDDLE ROW: EXPLORE SPACES (ROOMS & CATEGORIES)
            ========================================= */}
        <div className="py-8 border-b border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-gray-300">
          
          {/* Shop By Rooms */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-2">Explore Spaces By Rooms</h4>
            <div className="flex flex-wrap gap-x-2 gap-y-1.5 text-gray-400 items-center">
              <Link to="/room/living" className="hover:text-[#d4af37]">Living Room</Link> <span className="text-[#d4af37]">|</span>
              <Link to="/room/bedroom" className="hover:text-[#d4af37]">Master Bedroom</Link> <span className="text-[#d4af37]">|</span>
              <Link to="/room/office" className="hover:text-[#d4af37]">Home Office</Link> <span className="text-[#d4af37]">|</span>
              <Link to="/room/dining" className="hover:text-[#d4af37]">Dining Space</Link> <span className="text-[#d4af37]">|</span>
              <Link to="/room/study" className="hover:text-[#d4af37]">Study Workspaces</Link> <span className="text-[#d4af37]">|</span>
              <Link to="/room/kitchen" className="hover:text-[#d4af37]">Modular Kitchen</Link>
            </div>
          </div>

          {/* Shop By Categories */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-2">Explore Spaces By Categories</h4>
            <div className="flex flex-wrap gap-x-2 gap-y-1.5 text-gray-400 items-center">
              <Link to="/category/sofas" className="hover:text-[#d4af37]">Sofas & Lounges</Link> <span className="text-[#d4af37]">|</span>
              <Link to="/category/beds" className="hover:text-[#d4af37]">Signature Beds</Link> <span className="text-[#d4af37]">|</span>
              <Link to="/category/dining" className="hover:text-[#d4af37]">Dining Ensembles</Link> <span className="text-[#d4af37]">|</span>
              <Link to="/category/chairs" className="hover:text-[#d4af37]">Chairs & Seating</Link> <span className="text-[#d4af37]">|</span>
              <Link to="/category/wardrobes" className="hover:text-[#d4af37]">Wardrobes</Link> <span className="text-[#d4af37]">|</span>
              <Link to="/category/mattresses" className="hover:text-[#d4af37]">Mattresses</Link> <span className="text-[#d4af37]">|</span>
              <Link to="/category/tables" className="hover:text-[#d4af37]">Coffee Tables</Link>
            </div>
          </div>

        </div>

        {/* =========================================
            BOTTOM COPYRIGHT & BRANDING SECTION
            ========================================= */}
        <div className="pt-8 text-center text-xs text-gray-400 flex flex-col sm:flex-row items-center justify-center gap-2">
          <p>© 2026 S.S. Industries. All Rights Reserved.</p>
          <span className="hidden sm:inline text-[#d4af37]">|</span>
          <p>
            Made with <span className="text-red-500">❤️</span> by <span className="text-[#d4af37] font-semibold">The Raptor Marketing</span>
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;