import React from 'react';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <div className="font-sans text-[#0a0a0a] bg-[#f5ebe0] min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative w-full py-24 md:py-32 px-6 flex flex-col items-center justify-center bg-[#13463f] z-0">
        <div className="max-w-4xl mx-auto text-center z-10">
          <span className="text-[#d4af37] uppercase tracking-[0.3em] text-xs md:text-sm font-bold mb-4 block">
            Data Protection & Trust
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-[#f5ebe0] mb-6 tracking-tight">
            Privacy <span className="text-[#d4af37]">Policy</span>
          </h1>
          <p className="text-[#d2bfa9] text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            At S.S. Industries, we respect your privacy and are committed to protecting your personal information when you interact with our brand.
          </p>
        </div>
      </section>

      {/* 2. Main Content Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-[1000px] mx-auto">
        <div className="bg-white p-8 md:p-14 rounded-3xl border border-[#d2bfa9] shadow-lg space-y-10 leading-relaxed text-[#0a0a0a]/80">
          
          <div>
            <h2 className="text-2xl font-black text-[#0a0a0a] mb-4 flex items-center gap-3">
              <span className="text-[#d4af37]">01.</span> Information We Collect
            </h2>
            <p>
              When you visit our studios, browse our digital catalog, request custom furniture consultations, or reach out via phone, email, or WhatsApp, we may collect personal details such as your name, phone number, email address, delivery address, and specific interior design preferences.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-[#0a0a0a] mb-4 flex items-center gap-3">
              <span className="text-[#d4af37]">02.</span> How We Use Your Information
            </h2>
            <p>
              The information we gather is used strictly to fulfill your orders, provide accurate quotes for custom furniture, coordinate smooth pan-India dispatches, and offer customer support. We may also use your contact details to communicate regarding order updates or exclusive collection launches if opted-in.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-[#0a0a0a] mb-4 flex items-center gap-3">
              <span className="text-[#d4af37]">03.</span> Data Security & Protection
            </h2>
            <p>
              We implement appropriate administrative, technical, and physical security measures to safeguard your personal data from unauthorized access, disclosure, or misuse. Your information remains confidential and is never sold, traded, or shared with external third-party marketing entities.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-[#0a0a0a] mb-4 flex items-center gap-3">
              <span className="text-[#d4af37]">04.</span> Third-Party Links
            </h2>
            <p>
              Our website or communications may contain links to external platforms such as social media channels (Instagram, Facebook, Pinterest, WhatsApp). This Privacy Policy applies solely to S.S. Industries; we encourage you to review the privacy policies of any external platforms you visit.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-[#0a0a0a] mb-4 flex items-center gap-3">
              <span className="text-[#d4af37]">05.</span> Contact Us Regarding Privacy
            </h2>
            <p>
              If you have any questions, concerns, or requests regarding how your personal information is handled, please feel free to connect with us directly:
            </p>
            <div className="mt-4 p-6 bg-[#f5ebe0] rounded-xl border border-[#d2bfa9] text-sm space-y-2">
              <p><strong>Phone:</strong> +91 9610774466 | +91 9057201868</p>
              <p><strong>Email:</strong> ssindustries576@gmail.com</p>
              <p><strong>Flagship Studio:</strong> Suiwal Complex, Opp. Sanganer Police Station, Airport Circle, Tonk Rd, Sanganer, Jaipur, Rajasthan 302029</p>
            </div>
          </div>

        </div>

        <div className="mt-12 text-center">
          <Link to="/" className="inline-block px-8 py-4 bg-[#13463f] text-[#f5ebe0] font-semibold tracking-wide uppercase text-sm hover:bg-[#0a0a0a] hover:text-[#d4af37] transition-all duration-300 rounded-sm shadow-md">
            Return to Home
          </Link>
        </div>
      </section>

    </div>
  );
}

export default PrivacyPolicy;