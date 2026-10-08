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
          /* 
            - Scaled screen spacing: bottom-4/right-4 on mobile so it doesn't block thumb scrolling, bottom-6/right-6 on tablets, locking your original bottom-8/right-8 on desktop (lg:).
            - Adjusted padding: p-3 on mobile/tablet, locking your original p-4 on desktop (lg:).
            - Touch interaction fix: Changed hover:-translate-y-2 to md:hover so the button doesn't get "stuck" floated up on mobile taps. Added active:scale-95 for touch feedback.
          */
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 z-[999] p-3 lg:p-4 bg-[#d4af37] text-[#0a0a0a] rounded-full shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:bg-[#13463f] hover:text-[#f5ebe0] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all duration-300 transform md:hover:-translate-y-2 active:scale-95 focus:outline-none"
          aria-label="Back to top"
        >
          {/* Up Arrow Icon - Scaled SVG slightly for mobile vs tablet/desktop */}
          <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </button>
      )}
    </>
  );
}

export default BackToTop;