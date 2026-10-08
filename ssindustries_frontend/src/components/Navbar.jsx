import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  // State to manage the expandable search bar
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  // State to manage the mobile hamburger menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to smoothly scroll to the top
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    // Also close mobile menu if it's open when a link is clicked
    setIsMobileMenuOpen(false);
  };

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMobileMenuOpen]);

  return (
    <header className="w-full font-sans shadow-md sticky top-0 z-50">
      
      {/* Main Navbar */}
      {/* Fluid padding: px-4 on phones, smoothly stepping up to your original px-16 on md/lg screens */}
      <div className="bg-[#0a0a0a] text-[#d2bfa9] px-4 sm:px-8 md:px-16 py-3 sm:py-4 flex items-center justify-between gap-4 sm:gap-6 relative z-50">
        
        {/* LEFT SECTION: Logo */}
        <div className="flex justify-start flex-1">
          <Link to="/" onClick={handleScrollToTop} className="flex items-center hover:opacity-90 transition-opacity">
            {/* Logo scaling: h-10 on small phones, h-12 on tablets, locking to your original h-20 on lg screens */}
            <img 
              src="/S.S Logo.svg" 
              alt="SS Industries Logo" 
              className="h-10 sm:h-12 lg:h-20 w-auto object-contain" 
            />
          </Link>
        </div>

        {/* RIGHT SECTION: Links, Search, Contact, & CTA */}
        <div className="flex items-center justify-end gap-3 sm:gap-5 lg:gap-8">
          
          {/* Navigation Links (Hidden on Tablet/Mobile, Visible on XL) */}
          <div className="hidden xl:flex items-center gap-8 text-[15px] font-medium whitespace-nowrap">
            <Link to="/about-us" onClick={handleScrollToTop} className="hover:text-[#d4af37] transition">About Us</Link>
            <Link to="/products" onClick={handleScrollToTop} className="hover:text-[#d4af37] transition">Products</Link>
            <Link to="/custom-furniture" onClick={handleScrollToTop} className="hover:text-[#d4af37] transition">Custom Furniture</Link>
            <Link to="/careers" onClick={handleScrollToTop} className="hover:text-[#d4af37] transition">Careers</Link>
          </div>

          {/* Search Icon & Expandable Input */}
          <div className="relative flex items-center">
            {isSearchOpen && (
              <input 
                type="text" 
                placeholder="Search..." 
                autoFocus
                onBlur={(e) => {
                  // Prevent closing immediately if clicking inside the input
                  if (!e.relatedTarget?.classList.contains('search-btn')) {
                    setIsSearchOpen(false);
                  }
                }}
                /* 
                  MOBILE FIX: text-base (16px) is required on mobile to stop iOS Safari from auto-zooming.
                  Width adjusted to fit nicely on narrow phone screens without overlapping the logo.
                */
                className="absolute right-8 sm:right-10 w-[180px] sm:w-48 lg:w-64 py-1.5 sm:py-2 px-3 sm:px-4 rounded-sm text-base md:text-[14px] text-[#0a0a0a] bg-[#d2bfa9] placeholder-[#0a0a0a]/70 focus:outline-none focus:ring-2 focus:ring-[#d4af37] transition-all shadow-lg"
              />
            )}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="search-btn p-1.5 sm:p-2 hover:text-[#d4af37] active:scale-90 transition flex-none" 
              aria-label="Search"
            >
              <svg className="h-5 w-5 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Contact Icon - Routed to /contact-us (Hidden on mobile phones, visible on sm and up) */}
          <Link to="/contact-us" onClick={handleScrollToTop} className="hidden sm:block p-2 hover:text-[#d4af37] active:scale-90 transition" aria-label="Contact">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </Link>

          {/* Get a Quote Button (Hidden on mobile phones, visible on sm and up) */}
          <Link to="/get-a-quote" onClick={handleScrollToTop} className="hidden sm:flex text-[#0a0a0a] bg-[#d4af37] hover:bg-[#c29b2f] active:scale-95 px-5 py-2 lg:px-6 lg:py-2.5 rounded-sm font-bold text-sm lg:text-base tracking-wide transition-all whitespace-nowrap">
            Get a Quote
          </Link>

          {/* Mobile Hamburger Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="xl:hidden p-1.5 sm:p-2 hover:bg-[#13463f] active:scale-90 rounded-md transition flex-none" 
            aria-label="Menu"
          >
            <svg width="24" height="24" className="w-6 h-6 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

        </div>
      </div>

      {/* =========================================
          MOBILE SLIDE-IN MENU OVERLAY (xl:hidden)
          ========================================= */}
      <div 
        className={`fixed inset-0 bg-[#0a0a0a] z-[100] transition-transform duration-300 ease-in-out xl:hidden flex flex-col ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between px-4 sm:px-8 py-4 border-b border-white/10">
          <img src="/S.S Logo.svg" alt="SS Industries Logo" className="h-10 w-auto object-contain" />
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-[#d2bfa9] hover:text-[#d4af37] active:scale-90 rounded-full bg-white/5 transition"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        {/* Mobile Menu Links */}
        <div className="flex flex-col px-6 py-8 overflow-y-auto">
          <div className="flex flex-col gap-6 text-xl font-medium text-[#d2bfa9]">
            <Link to="/about-us" onClick={handleScrollToTop} className="hover:text-[#d4af37] transition">About Us</Link>
            <Link to="/products" onClick={handleScrollToTop} className="hover:text-[#d4af37] transition">Products</Link>
            <Link to="/custom-furniture" onClick={handleScrollToTop} className="hover:text-[#d4af37] transition">Custom Furniture</Link>
            <Link to="/careers" onClick={handleScrollToTop} className="hover:text-[#d4af37] transition">Careers</Link>
            
            <div className="h-px w-full bg-white/10 my-2"></div>
            
            {/* Added Contact & Quote options since they are hidden in the mobile header */}
            <Link to="/contact-us" onClick={handleScrollToTop} className="hover:text-[#d4af37] transition flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              Contact Us
            </Link>
          </div>

          <div className="mt-10">
            <Link 
              to="/get-a-quote" 
              onClick={handleScrollToTop} 
              className="flex justify-center items-center text-[#0a0a0a] bg-[#d4af37] active:bg-[#c29b2f] w-full py-4 rounded-sm font-bold text-lg tracking-wide transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

    </header>
  );
}

export default Navbar;