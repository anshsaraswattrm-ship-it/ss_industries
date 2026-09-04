import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  // State to manage the expandable search bar
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="w-full font-sans shadow-md sticky top-0 z-50">
      
      {/* Main Navbar */}
      {/* Increased horizontal padding (px-10 md:px-16) to push logo and buttons inward */}
      <div className="bg-[#0a0a0a] text-[#d2bfa9] px-10 md:px-16 py-4 flex items-center justify-between gap-6">
        
        {/* LEFT SECTION: Logo */}
        <div className="flex justify-start flex-1">
          <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
            <img 
              src="/S.S Logo.svg" 
              alt="SS Industries Logo" 
              className="h-12 sm:h-20 w-auto object-contain" 
            />
          </Link>
        </div>

        {/* RIGHT SECTION: Links, Search, Contact, & CTA */}
        <div className="flex items-center justify-end gap-5 lg:gap-8">
          
          {/* Navigation Links - Added "About Us" */}
          <div className="hidden xl:flex items-center gap-8 text-[15px] font-medium whitespace-nowrap">
            <Link to="/about-us" className="hover:text-[#d4af37] transition">About Us</Link>
            <Link to="/products" className="hover:text-[#d4af37] transition">Products</Link>
            <Link to="/custom-furniture" className="hover:text-[#d4af37] transition">Custom Furniture</Link>
            <Link to="/portfolio" className="hover:text-[#d4af37] transition">Portfolio</Link>
            <Link to="/careers" className="hover:text-[#d4af37] transition">Careers</Link>
          </div>

          {/* Search Icon & Expandable Input */}
          <div className="relative flex items-center">
            {isSearchOpen && (
              <input 
                type="text" 
                placeholder="Search..." 
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
                className="absolute right-8 w-48 lg:w-64 py-1.5 px-4 rounded-sm text-[14px] text-[#0a0a0a] bg-[#d2bfa9] placeholder-[#0a0a0a]/70 focus:outline-none focus:ring-2 focus:ring-[#d4af37] transition-all shadow-lg"
              />
            )}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:text-[#d4af37] transition flex-none" 
              aria-label="Search"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Contact Icon */}
          <button className="hidden sm:block p-2 hover:text-[#d4af37] transition" aria-label="Contact">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </button>

          {/* Get a Quote Button */}
          <Link to="/get-quote" className="hidden sm:flex text-[#0a0a0a] bg-[#d4af37] hover:bg-[#c29b2f] px-6 py-2.5 rounded-sm font-bold tracking-wide transition-colors whitespace-nowrap">
            Get a Quote
          </Link>

          {/* Mobile Hamburger Menu */}
          <button className="xl:hidden p-2 hover:bg-[#13463f] rounded-md transition flex-none" aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

        </div>
      </div>
    </header>
  );
}

export default Navbar;