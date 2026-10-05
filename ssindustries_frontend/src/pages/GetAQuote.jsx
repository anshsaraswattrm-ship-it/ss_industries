import React, { useState } from 'react';

function GetAQuote() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  
  const [status, setStatus] = useState({ loading: false, submitted: false, error: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, submitted: false, error: null });

    try {
      const response = await fetch('http://localhost:5000/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit quote request');
      }

      setStatus({ loading: false, submitted: true, error: null });
      
      setTimeout(() => {
        setStatus({ loading: false, submitted: false, error: null });
        setFormData({
          firstName: '', lastName: '', email: '', phone: '', projectType: '', message: ''
        });
      }, 4000);

    } catch (error) {
      setStatus({ loading: false, submitted: false, error: error.message });
    }
  };

  return (
    <div className="font-sans text-[#0a0a0a] bg-[#f5ebe0] min-h-screen">
      
      <section className="py-20 pt-28 px-6 md:px-12 lg:px-20 max-w-[1350px] mx-auto">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-[#d4af37] uppercase tracking-[0.3em] text-xs md:text-sm font-bold mb-3 block">
            Tailored Excellence
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0a0a0a] tracking-tight mb-4">
            Request a <span className="text-[#13463f]">Quote</span>.
          </h1>
          <p className="text-[#0a0a0a]/80 text-base leading-relaxed font-medium">
            Fill out the form below with your project details. Our master artisans and design consultants will review your requirements and get back to you with a customized estimate.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left: The Form */}
          <div className="w-full lg:w-3/5 bg-white p-8 md:p-12 rounded-3xl border border-[#d2bfa9] shadow-2xl relative overflow-hidden">
            
            {/* Success Overlay */}
            {status.submitted && (
              <div className="absolute inset-0 bg-white/95 z-20 flex flex-col items-center justify-center text-center p-8 backdrop-blur-sm transition-all duration-500">
                <div className="w-20 h-20 bg-[#13463f] text-[#d4af37] rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-[#0a0a0a] mb-3">Request Received!</h3>
                <p className="text-gray-600 text-lg">Thank you for choosing S.S. Industries. Our team will contact you shortly with your personalized quote.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              
              {status.error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm mb-4">
                  {status.error}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="firstName" className="text-xs font-bold text-[#13463f] uppercase tracking-wider mb-2">First Name *</label>
                  <input 
                    type="text" 
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-[#fdfaf6] border border-[#d2bfa9]/50 rounded-lg px-4 py-3 text-sm text-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all"
                    placeholder="Enter your first name"
                  />
                </div>
                
                <div className="flex flex-col">
                  <label htmlFor="lastName" className="text-xs font-bold text-[#13463f] uppercase tracking-wider mb-2">Last Name *</label>
                  <input 
                    type="text" 
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-[#fdfaf6] border border-[#d2bfa9]/50 rounded-lg px-4 py-3 text-sm text-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-xs font-bold text-[#13463f] uppercase tracking-wider mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#fdfaf6] border border-[#d2bfa9]/50 rounded-lg px-4 py-3 text-sm text-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all"
                    placeholder="you@company.com"
                  />
                </div>
                
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-xs font-bold text-[#13463f] uppercase tracking-wider mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#fdfaf6] border border-[#d2bfa9]/50 rounded-lg px-4 py-3 text-sm text-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all"
                    placeholder="+91 00000 00000"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="projectType" className="text-xs font-bold text-[#13463f] uppercase tracking-wider mb-2">Project Requirement *</label>
                <div className="relative">
                  <select 
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-[#fdfaf6] border border-[#d2bfa9]/50 rounded-lg px-4 py-3 text-sm text-[#0a0a0a] appearance-none focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all cursor-pointer"
                  >
                    <option value="" disabled>Select the type of inquiry</option>
                    <option value="Custom Residential Living">Custom Residential Living</option>
                    <option value="Corporate & Commercial">Corporate & Commercial</option>
                    <option value="Bulk Order">Bulk Order</option>
                    <option value="B2B">B2B (Business to Business)</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#13463f]">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-xs font-bold text-[#13463f] uppercase tracking-wider mb-2">Project Details & Dimensions</label>
                <textarea 
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#fdfaf6] border border-[#d2bfa9]/50 rounded-lg px-4 py-3 text-sm text-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all resize-y"
                  placeholder="Tell us about the space, preferred materials, dimensions, or any specific requirements..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status.loading}
                className="w-full bg-[#13463f] text-[#f5ebe0] font-bold text-sm tracking-widest uppercase py-4 rounded-lg hover:bg-[#0a0a0a] hover:text-[#d4af37] transition-all duration-300 shadow-md hover:shadow-lg mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status.loading ? 'Sending Request...' : 'Submit Request'}
              </button>

            </form>
          </div>

          {/* Right: Info Panel */}
          <div className="w-full lg:w-2/5 flex flex-col justify-center space-y-10">
            
            <div>
              <h3 className="text-2xl font-extrabold text-[#0a0a0a] mb-4">Why Request a Quote?</h3>
              <p className="text-[#0a0a0a]/70 text-sm leading-relaxed mb-4">
                Unlike off-the-shelf furniture, every piece at S.S. Industries is tailored to your exact specifications. A customized quote ensures you pay only for the materials, dimensions, and craftsmanship your unique space demands.
              </p>
            </div>

            <div className="space-y-6 border-t border-[#d2bfa9]/50 pt-8">
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#d4af37]/20 rounded-full flex items-center justify-center text-[#d4af37] flex-shrink-0 mt-1">
                  <span className="font-black text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#13463f] mb-1">Submit Your Details</h4>
                  <p className="text-[#0a0a0a]/70 text-xs leading-relaxed">Choose your project category and share your ideas or blueprints.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#d4af37]/20 rounded-full flex items-center justify-center text-[#d4af37] flex-shrink-0 mt-1">
                  <span className="font-black text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#13463f] mb-1">Expert Consultation</h4>
                  <p className="text-[#0a0a0a]/70 text-xs leading-relaxed">Our designers will contact you to discuss materials, finishes, and precise dimensions.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#d4af37]/20 rounded-full flex items-center justify-center text-[#d4af37] flex-shrink-0 mt-1">
                  <span className="font-black text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#13463f] mb-1">Receive Your Estimate</h4>
                  <p className="text-[#0a0a0a]/70 text-xs leading-relaxed">Get a transparent, itemized quote with clear production and delivery timelines.</p>
                </div>
              </div>

            </div>

            {/* Direct Contact Fallback */}
            <div className="bg-[#13463f] p-6 rounded-2xl text-white mt-4 shadow-xl">
              <p className="text-xs font-bold text-[#d4af37] uppercase tracking-wider mb-2">Need Immediate Assistance?</p>
              <p className="text-sm text-gray-300 mb-4">Skip the form and talk to our experts directly.</p>
              <div className="flex flex-col gap-2">
                <a href="tel:+919610774466" className="font-bold hover:text-[#d4af37] transition-colors">📞 +91 9610774466</a>
                <a href="mailto:ssindustries576@gmail.com" className="font-bold hover:text-[#d4af37] transition-colors">✉️ ssindustries576@gmail.com</a>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default GetAQuote;