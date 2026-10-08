import React from 'react';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <div className="font-sans text-[#0a0a0a] bg-[#f5ebe0] min-h-screen">
      
      {/* 1. Hero Section */}
      {/* Scaled vertical padding for mobile, locked original py-32 to lg: */}
      <section className="relative w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 flex flex-col items-center justify-center bg-[#13463f] z-0">
        <div className="max-w-4xl mx-auto text-center z-10">
          <span className="text-[#d4af37] uppercase tracking-[0.3em] text-[10px] sm:text-xs md:text-sm font-bold mb-3 sm:mb-4 block">
            Data Protection & Trust
          </span>
          {/* Scaled typography to prevent overflow on mobile, locking 6xl to lg: */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#f5ebe0] mb-4 sm:mb-6 tracking-tight">
            Privacy <span className="text-[#d4af37]">Policy</span>
          </h1>
          <p className="text-[#d2bfa9] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed font-light px-2">
            At S.S. Industries, we respect your privacy and are committed to protecting your personal information when you interact with our brand.
          </p>
        </div>
      </section>

      {/* 2. Main Content Section */}
      {/* Scaled padding for mobile so text isn't squeezed, locking original py-20 to lg: */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-20 max-w-[1000px] mx-auto">
        
        {/* Adjusted inner padding (p-6 to p-14) and spacing (space-y-8 to space-y-10) */}
        <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-14 rounded-2xl sm:rounded-3xl border border-[#d2bfa9] shadow-lg space-y-8 lg:space-y-10 leading-relaxed text-[#0a0a0a]/80">
          
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[#0a0a0a] mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
              <span className="text-[#d4af37]">01.</span> Information We Collect
            </h2>
            <p className="text-sm sm:text-base">
              When you visit our studios, browse our digital catalog, request custom furniture consultations, or reach out via phone, email, or WhatsApp, we may collect personal details such as your name, phone number, email address, delivery address, and specific interior design preferences.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[#0a0a0a] mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
              <span className="text-[#d4af37]">02.</span> How We Use Your Information
            </h2>
            <p className="text-sm sm:text-base">
              The information we gather is used strictly to fulfill your orders, provide accurate quotes for custom furniture, coordinate smooth pan-India dispatches, and offer customer support. We may also use your contact details to communicate regarding order updates or exclusive collection launches if opted-in.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[#0a0a0a] mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
              <span className="text-[#d4af37]">03.</span> Data Security & Protection
            </h2>
            <p className="text-sm sm:text-base">
              We implement appropriate administrative, technical, and physical security measures to safeguard your personal data from unauthorized access, disclosure, or misuse. Your information remains confidential and is never sold, traded, or shared with external third-party marketing entities.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[#0a0a0a] mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
              <span className="text-[#d4af37]">04.</span> Third-Party Links
            </h2>
            <p className="text-sm sm:text-base">
              Our website or communications may contain links to external platforms such as social media channels (Instagram, Facebook, Pinterest, WhatsApp). This Privacy Policy applies solely to S.S. Industries; we encourage you to review the privacy policies of any external platforms you visit.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[#0a0a0a] mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
              <span className="text-[#d4af37]">05.</span> Contact Us Regarding Privacy
            </h2>
            <p className="text-sm sm:text-base">
              If you have any questions, concerns, or requests regarding how your personal information is handled, please feel free to connect with us directly:
            </p>
            {/* Adjusted contact block padding and added break-all for email to prevent mobile overflow */}
            <div className="mt-4 p-4 sm:p-6 bg-[#f5ebe0] rounded-xl border border-[#d2bfa9] text-xs sm:text-sm space-y-2">
              <p><strong>Phone:</strong> +91 9610774466 | +91 9057201868</p>
              <p className="break-all sm:break-normal"><strong>Email:</strong> ssindustries576@gmail.com</p>
              <p><strong>Flagship Studio:</strong> Suiwal Complex, Opp. Sanganer Police Station, Airport Circle, Tonk Rd, Sanganer, Jaipur, Rajasthan 302029</p>
            </div>
          </div>

        </div>

        <div className="mt-10 sm:mt-12 text-center">
          {/* Added active:scale-95 for touch feedback and scaled text/padding for mobile */}
          <Link to="/" className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-[#13463f] text-[#f5ebe0] font-semibold tracking-wide uppercase text-xs sm:text-sm hover:bg-[#0a0a0a] hover:text-[#d4af37] active:scale-95 transition-all duration-300 rounded-sm shadow-md">
            Return to Home
          </Link>
        </div>
      </section>

    </div>
  );
}

export default PrivacyPolicy;