import React, { useState, useEffect } from 'react';

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Check karna ki user kitna niche scroll kar chuka hai
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Smoothly top par le jane wala function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[999] p-3 md:p-4 bg-[#d4af37] text-[#0a0a0a] rounded-full shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:bg-[#13463f] hover:text-[#f5ebe0] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all duration-300 transform hover:-translate-y-2 focus:outline-none"
          aria-label="Back to top"
        >
          {/* Up Arrow Icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </button>
      )}
    </>
  );
}

export default BackToTop;