import React from 'react';
import { Link } from 'react-router-dom';

function TermsOfService() {
  return (
    <div className="font-sans text-[#0a0a0a] bg-[#f5ebe0] min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative w-full py-24 md:py-32 px-6 flex flex-col items-center justify-center bg-[#13463f] z-0">
        <div className="max-w-4xl mx-auto text-center z-10">
          <span className="text-[#d4af37] uppercase tracking-[0.3em] text-xs md:text-sm font-bold mb-4 block">
            Legal & Guidelines
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-[#f5ebe0] mb-6 tracking-tight">
            Terms Of <span className="text-[#d4af37]">Service</span>
          </h1>
          <p className="text-[#d2bfa9] text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Please read these terms carefully before purchasing, browsing, or utilizing custom furniture services from S.S. Industries.
          </p>
        </div>
      </section>

      {/* 2. Main Content Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-[1000px] mx-auto">
        <div className="bg-white p-8 md:p-14 rounded-3xl border border-[#d2bfa9] shadow-lg space-y-10 leading-relaxed text-[#0a0a0a]/80">
          
          <div>
            <h2 className="text-2xl font-black text-[#0a0a0a] mb-4 flex items-center gap-3">
              <span className="text-[#d4af37]">01.</span> Acceptance of Terms
            </h2>
            <p>
              By accessing our website, visiting our flagship studios or heritage outlets in Jaipur, or purchasing products from S.S. Industries, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must refrain from using our services or purchasing our items.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-[#0a0a0a] mb-4 flex items-center gap-3">
              <span className="text-[#d4af37]">02.</span> Products, Pricing & Customization
            </h2>
            <p>
              All products, specifications, and descriptions are subject to change without notice. Because handcrafted furniture relies on natural wood textures and individual fabrication, slight variations in color, finish, and dimensions may occur. For custom and bespoke furniture orders, specific design blueprints and advances agreed upon during consultation are final.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-[#0a0a0a] mb-4 flex items-center gap-3">
              <span className="text-[#d4af37]">03.</span> Orders, Payments & Dispatch
            </h2>
            <p>
              Orders are processed following confirmation and receipt of authorized payments. We offer pan-India commercial and residential dispatch. Delivery timelines provided during purchase are estimates and may vary based on location, customization requirements, and logistics.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-[#0a0a0a] mb-4 flex items-center gap-3">
              <span className="text-[#d4af37]">04.</span> Warranties & Liabilities
            </h2>
            <p>
              S.S. Industries provides manufacturer warranties on designated furniture lines covering structural integrity and craftsmanship defaults. Misuse, unauthorized alterations, or failure to follow maintenance guidelines will void the warranty. Our liability is strictly limited to the repair or replacement of the defective product.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-[#0a0a0a] mb-4 flex items-center gap-3">
              <span className="text-[#d4af37]">05.</span> Contact & Support
            </h2>
            <p>
              If you have any questions or require clarification regarding these terms, you can reach out to us directly through our official channels:
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

export default TermsOfService;