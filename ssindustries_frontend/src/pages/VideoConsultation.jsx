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
      <section className="w-full bg-[#0a0a0a] border-b-4 border-[#d4af37] relative min-h-[350px] md:min-h-[450px] flex items-center justify-center overflow-hidden z-0">
        
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
        
        <div className="relative z-10 text-center px-6 mt-10 max-w-3xl mx-auto">
          <span className="text-[#d4af37] uppercase tracking-[0.3em] text-xs md:text-sm font-bold mb-3 block drop-shadow-md">
            Experience Our Showroom From Home
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#f5ebe0] tracking-tight mb-6 drop-shadow-lg">
            Live Video <span className="text-[#d4af37]">Consultation</span>.
          </h1>
          <p className="text-[#d2bfa9] text-sm md:text-base leading-relaxed font-light drop-shadow">
            Can't visit our studios in Jaipur? Book a one-on-one virtual tour and connect live with our master artisans and design experts to explore our luxury collections.
          </p>
        </div>
      </section>

      {/* 2. Main Form & Info Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-[1350px] mx-auto">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* Left: Info Panel (How it works) */}
          <div className="w-full lg:w-2/5 flex flex-col space-y-10 lg:sticky lg:top-32">
            
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-[#0a0a0a] tracking-tight mb-4">
                How It Works?
              </h2>
              <p className="text-[#0a0a0a]/70 text-base leading-relaxed font-medium mb-6">
                Booking a virtual visit is simple. Just select your preferred date and time, and our team will handle the rest.
              </p>
            </div>

            <div className="space-y-8 border-t border-[#d2bfa9]/50 pt-8">
              
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-[#13463f] rounded-full flex items-center justify-center text-[#d4af37] flex-shrink-0 shadow-md">
                  <span className="font-black text-lg">1</span>
                </div>
                <div>
                  <h4 className="font-extrabold text-[#13463f] mb-1 text-lg">Book Your Slot</h4>
                  <p className="text-[#0a0a0a]/70 text-sm leading-relaxed">Fill out the form with your details, WhatsApp number, and the time that suits you best.</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-[#13463f] rounded-full flex items-center justify-center text-[#d4af37] flex-shrink-0 shadow-md">
                  <span className="font-black text-lg">2</span>
                </div>
                <div>
                  <h4 className="font-extrabold text-[#13463f] mb-1 text-lg">Get WhatsApp Details</h4>
                  <p className="text-[#0a0a0a]/70 text-sm leading-relaxed">Our team will reach out to you on WhatsApp to confirm the appointment and share the video call link.</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-[#13463f] rounded-full flex items-center justify-center text-[#d4af37] flex-shrink-0 shadow-md">
                  <span className="font-black text-lg">3</span>
                </div>
                <div>
                  <h4 className="font-extrabold text-[#13463f] mb-1 text-lg">Join the Live Tour</h4>
                  <p className="text-[#0a0a0a]/70 text-sm leading-relaxed">Connect with our experts online for a guided tour of our showroom or to discuss custom blueprints.</p>
                </div>
              </div>

            </div>

            {/* Quick Note */}
            <div className="bg-[#fdfaf6] border border-[#d4af37]/30 p-5 rounded-2xl shadow-sm">
              <p className="text-xs text-[#13463f] font-semibold flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#d4af37]"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                Please ensure your WhatsApp number is correct.
              </p>
            </div>

          </div>

          {/* Right: The Booking Form */}
          <div className="w-full lg:w-3/5 bg-white p-8 md:p-12 rounded-3xl border border-[#d2bfa9] shadow-2xl relative overflow-hidden">
            
            {/* Success Overlay */}
            {status.submitted && (
              <div className="absolute inset-0 bg-white/95 z-20 flex flex-col items-center justify-center text-center p-8 backdrop-blur-sm transition-all duration-500">
                <div className="w-20 h-20 bg-[#25D366] text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-[#0a0a0a] mb-3">Slot Requested!</h3>
                <p className="text-gray-600 text-lg">We have received your request. Our team will message you on WhatsApp shortly with your video call link and timing details.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              
              {status.error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm mb-4">
                  {status.error}
                </div>
              )}

              {/* Full Name */}
              <div className="flex flex-col">
                <label htmlFor="fullName" className="text-xs font-bold text-[#13463f] uppercase tracking-wider mb-2">Full Name *</label>
                <input 
                  type="text" 
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-[#fdfaf6] border border-[#d2bfa9]/50 rounded-lg px-4 py-3.5 text-sm text-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              {/* WhatsApp Number (Highlighted) */}
              <div className="flex flex-col">
                <label htmlFor="whatsappNumber" className="text-xs font-bold text-[#13463f] uppercase tracking-wider mb-2 flex items-center gap-2">
                  WhatsApp Number *
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">+91</span>
                  <input 
                    type="tel" 
                    id="whatsappNumber"
                    name="whatsappNumber"
                    required
                    value={formData.whatsappNumber}
                    onChange={handleChange}
                    className="w-full bg-[#fdfaf6] border border-[#25D366]/40 rounded-lg pl-12 pr-4 py-3.5 text-sm text-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-[#25D366] transition-all"
                    placeholder="00000 00000"
                  />
                </div>
                <p className="text-[10px] text-gray-500 mt-1.5 ml-1">We will send your consultation link to this number.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Preferred Date */}
                <div className="flex flex-col">
                  <label htmlFor="preferredDate" className="text-xs font-bold text-[#13463f] uppercase tracking-wider mb-2">Preferred Date *</label>
                  <input 
                    type="date" 
                    id="preferredDate"
                    name="preferredDate"
                    required
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full bg-[#fdfaf6] border border-[#d2bfa9]/50 rounded-lg px-4 py-3.5 text-sm text-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all"
                  />
                </div>
                
                {/* Time Slot Dropdown */}
                <div className="flex flex-col">
                  <label htmlFor="timeSlot" className="text-xs font-bold text-[#13463f] uppercase tracking-wider mb-2">Time Slot *</label>
                  <div className="relative">
                    <select 
                      id="timeSlot"
                      name="timeSlot"
                      required
                      value={formData.timeSlot}
                      onChange={handleChange}
                      className="w-full bg-[#fdfaf6] border border-[#d2bfa9]/50 rounded-lg px-4 py-3.5 text-sm text-[#0a0a0a] appearance-none focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all cursor-pointer"
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
                <label htmlFor="interest" className="text-xs font-bold text-[#13463f] uppercase tracking-wider mb-2">What are you looking for?</label>
                <textarea 
                  id="interest"
                  name="interest"
                  rows="3"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full bg-[#fdfaf6] border border-[#d2bfa9]/50 rounded-lg px-4 py-3.5 text-sm text-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all resize-y"
                  placeholder="E.g., I want to see the luxury sofa sets or need a custom wardrobe consultation..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={status.loading}
                className="w-full bg-[#13463f] text-[#f5ebe0] font-bold text-sm tracking-widest uppercase py-4.5 rounded-lg hover:bg-[#0a0a0a] hover:text-[#d4af37] transition-all duration-300 shadow-md hover:shadow-lg mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
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