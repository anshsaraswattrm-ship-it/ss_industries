import React, { useState } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';

// 1. Cloudinary Setup
const cld = new Cloudinary({
  cloud: {
    cloudName: 'zlqgwdom'
  }
});

function VideoConsultation() {
  // Setup Optimized Video URL instead of Image
  const videoHeroUrl = cld.video('video-call_1').toURL();

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    whatsappNumber: '',
    preferredDate: '',
    timeSlot: '',
    interest: ''
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
      const response = await fetch('https://ss-industries.onrender.com/api/video-consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong while booking the slot.');
      }

      // Success
      setStatus({ loading: false, submitted: true, error: null });
      
      // Reset form after 4 seconds
      setTimeout(() => {
        setStatus({ loading: false, submitted: false, error: null });
        setFormData({
          fullName: '', whatsappNumber: '', preferredDate: '', timeSlot: '', interest: ''
        });
      }, 4000);

    } catch (error) {
      setStatus({ loading: false, submitted: false, error: error.message });
    }
  };

  return (
    <div className="font-sans text-[#0a0a0a] bg-[#f5ebe0] min-h-screen">
      
      {/* 1. Hero Section with Video Background */}
      <section className="w-full bg-[#0a0a0a] border-b-2 sm:border-b-4 border-[#d4af37] relative min-h-[350px] md:min-h-[450px] flex items-center justify-center overflow-hidden z-0">
        
        {/* Background Video Element */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover -z-20 opacity-80"
        >
          <source src={videoHeroUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 -z-10"></div>
        
        {/* Adjusted vertical margins for better mobile centering */}
        <div className="relative z-10 text-center px-4 sm:px-6 mt-6 sm:mt-10 max-w-3xl mx-auto">
          <span className="text-[#d4af37] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs md:text-sm font-bold mb-2 sm:mb-3 block drop-shadow-md">
            Experience Our Showroom From Home
          </span>
          {/* Fluid typography down to 3xl on mobile, locking 6xl to lg: */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#f5ebe0] tracking-tight mb-3 sm:mb-6 drop-shadow-lg">
            Live Video <span className="text-[#d4af37]">Consultation</span>.
          </h1>
          <p className="text-[#d2bfa9] text-xs sm:text-sm md:text-base leading-relaxed font-light drop-shadow px-2">
            Can't visit our studios in Jaipur? Book a one-on-one virtual tour and connect live with our master artisans and design experts to explore our luxury collections.
          </p>
        </div>
      </section>

      {/* 2. Main Form & Info Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-20 max-w-[1350px] mx-auto">
        
        <div className="flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-20 items-start">
          
          {/* Left: Info Panel (How it works) */}
          {/* FIX: Reduced space-y-10 to space-y-6 so the gap before the line is significantly smaller */}
          <div className="w-full lg:w-2/5 flex flex-col space-y-6 sm:space-y-6 lg:sticky lg:top-32">
            
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0a0a0a] tracking-tight mb-3 sm:mb-4">
                How It Works?
              </h2>
              {/* FIX: Removed the mb-6 from this paragraph because it was double-stacking with the container's space-y */}
              <p className="text-[#0a0a0a]/70 text-sm sm:text-base leading-relaxed font-medium px-2 lg:px-0">
                Booking a virtual visit is simple. Just select your preferred date and time, and our team will handle the rest.
              </p>
            </div>

            {/* FIX: Also reduced pt-8 to pt-6 here so the space *after* the line is balanced with the space before it */}
            <div className="space-y-6 sm:space-y-8 border-t border-[#d2bfa9]/50 pt-5 sm:pt-6">
              
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#13463f] rounded-full flex items-center justify-center text-[#d4af37] flex-shrink-0 shadow-md">
                  <span className="font-black text-base sm:text-lg">1</span>
                </div>
                <div>
                  <h4 className="font-extrabold text-[#13463f] mb-1 text-base sm:text-lg">Book Your Slot</h4>
                  <p className="text-[#0a0a0a]/70 text-xs sm:text-sm leading-relaxed">Fill out the form with your details, WhatsApp number, and the time that suits you best.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#13463f] rounded-full flex items-center justify-center text-[#d4af37] flex-shrink-0 shadow-md">
                  <span className="font-black text-base sm:text-lg">2</span>
                </div>
                <div>
                  <h4 className="font-extrabold text-[#13463f] mb-1 text-base sm:text-lg">Get WhatsApp Details</h4>
                  <p className="text-[#0a0a0a]/70 text-xs sm:text-sm leading-relaxed">Our team will reach out to you on WhatsApp to confirm the appointment and share the video call link.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#13463f] rounded-full flex items-center justify-center text-[#d4af37] flex-shrink-0 shadow-md">
                  <span className="font-black text-base sm:text-lg">3</span>
                </div>
                <div>
                  <h4 className="font-extrabold text-[#13463f] mb-1 text-base sm:text-lg">Join the Live Tour</h4>
                  <p className="text-[#0a0a0a]/70 text-xs sm:text-sm leading-relaxed">Connect with our experts online for a guided tour of our showroom or to discuss custom blueprints.</p>
                </div>
              </div>

            </div>

            {/* Quick Note */}
            <div className="bg-[#fdfaf6] border border-[#d4af37]/30 p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-sm mt-2">
              <p className="text-[11px] sm:text-xs text-[#13463f] font-semibold flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#d4af37] flex-shrink-0"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                Please ensure your WhatsApp number is correct.
              </p>
            </div>

          </div>

          {/* Right: The Booking Form */}
          <div className="w-full lg:w-3/5 bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl lg:rounded-3xl border border-[#d2bfa9] shadow-2xl relative overflow-hidden">
            
            {/* Success Overlay */}
            {status.submitted && (
              <div className="absolute inset-0 bg-white/95 z-20 flex flex-col items-center justify-center text-center p-6 sm:p-8 backdrop-blur-sm transition-all duration-500">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#25D366] text-white rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                  <svg width="40" height="40" className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0a0a0a] mb-2 sm:mb-3">Slot Requested!</h3>
                <p className="text-gray-600 text-sm sm:text-lg">We have received your request. Our team will message you on WhatsApp shortly with your video call link and timing details.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 relative z-10">
              
              {status.error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-xs sm:text-sm mb-4">
                  {status.error}
                </div>
              )}

              {/* Full Name */}
              <div className="flex flex-col">
                <label htmlFor="fullName" className="text-[10px] sm:text-xs font-bold text-[#13463f] uppercase tracking-wider mb-1.5 sm:mb-2">Full Name *</label>
                <input 
                  type="text" 
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-[#fdfaf6] border border-[#d2bfa9]/50 rounded-lg px-4 sm:px-5 py-2.5 sm:py-3.5 text-base md:text-sm text-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              {/* WhatsApp Number (Highlighted) */}
              <div className="flex flex-col">
                <label htmlFor="whatsappNumber" className="text-[10px] sm:text-xs font-bold text-[#13463f] uppercase tracking-wider mb-1.5 sm:mb-2 flex items-center gap-2">
                  WhatsApp Number *
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium text-base md:text-sm">+91</span>
                  <input 
                    type="tel" 
                    id="whatsappNumber"
                    name="whatsappNumber"
                    required
                    value={formData.whatsappNumber}
                    onChange={handleChange}
                    className="w-full bg-[#fdfaf6] border border-[#25D366]/40 rounded-lg pl-12 pr-4 py-2.5 sm:py-3.5 text-base md:text-sm text-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-[#25D366] transition-all"
                    placeholder="00000 00000"
                  />
                </div>
                <p className="text-[9px] sm:text-[10px] text-gray-500 mt-1 sm:mt-1.5 ml-1">We will send your consultation link to this number.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* Preferred Date */}
                <div className="flex flex-col">
                  <label htmlFor="preferredDate" className="text-[10px] sm:text-xs font-bold text-[#13463f] uppercase tracking-wider mb-1.5 sm:mb-2">Preferred Date *</label>
                  <input 
                    type="date" 
                    id="preferredDate"
                    name="preferredDate"
                    required
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full bg-[#fdfaf6] border border-[#d2bfa9]/50 rounded-lg px-4 sm:px-5 py-2.5 sm:py-3.5 text-base md:text-sm text-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all"
                  />
                </div>
                
                {/* Time Slot Dropdown */}
                <div className="flex flex-col">
                  <label htmlFor="timeSlot" className="text-[10px] sm:text-xs font-bold text-[#13463f] uppercase tracking-wider mb-1.5 sm:mb-2">Time Slot *</label>
                  <div className="relative">
                    <select 
                      id="timeSlot"
                      name="timeSlot"
                      required
                      value={formData.timeSlot}
                      onChange={handleChange}
                      className="w-full bg-[#fdfaf6] border border-[#d2bfa9]/50 rounded-lg px-4 sm:px-5 py-2.5 sm:py-3.5 text-base md:text-sm text-[#0a0a0a] appearance-none focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all cursor-pointer"
                    >
                      <option value="" disabled>Select a time window</option>
                      <option value="Morning (11:00 AM - 1:00 PM)">Morning (11:00 AM - 1:00 PM)</option>
                      <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
                      <option value="Evening (6:00 PM - 9:00 PM)">Evening (6:00 PM - 9:00 PM)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#13463f]">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* What are you looking for? */}
              <div className="flex flex-col">
                <label htmlFor="interest" className="text-[10px] sm:text-xs font-bold text-[#13463f] uppercase tracking-wider mb-1.5 sm:mb-2">What are you looking for?</label>
                <textarea 
                  id="interest"
                  name="interest"
                  rows="3"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full bg-[#fdfaf6] border border-[#d2bfa9]/50 rounded-lg px-4 sm:px-5 py-3 sm:py-3.5 text-base md:text-sm text-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all resize-y"
                  placeholder="E.g., I want to see the luxury sofa sets or need a custom wardrobe consultation..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status.loading}
                className="w-full bg-[#13463f] text-[#f5ebe0] font-bold text-xs sm:text-sm tracking-widest uppercase py-3.5 sm:py-4.5 rounded-lg hover:bg-[#0a0a0a] hover:text-[#d4af37] active:scale-[0.98] transition-all duration-300 shadow-md hover:shadow-lg mt-2 sm:mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status.loading ? 'Requesting...' : 'Request Video Call'}
              </button>

            </form>
          </div>

        </div>
      </section>

    </div>
  );
}

export default VideoConsultation;