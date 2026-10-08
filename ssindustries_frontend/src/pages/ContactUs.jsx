import React, { useState } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';

// 1. Cloudinary Setup
const cld = new Cloudinary({
  cloud: {
    cloudName: 'zlqgwdom'
  }
});

function ContactUs() {
  // Cloudinary image for hero banner
  const contactHeroBg = cld.image('Contact_Us_SSI_banner2').format('auto').quality('auto:best');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch('https://ss-industries.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); 
      
      setTimeout(() => setStatus({ loading: false, success: false, error: null }), 4000);
    } catch (error) {
      setStatus({ loading: false, success: false, error: error.message });
    }
  };

  return (
    <div className="font-sans text-[#0a0a0a] min-h-screen">
      
      {/* 1. Hero Image Section */}
      <section className="w-full bg-[#0a0a0a] border-b-2 sm:border-b-4 border-[#d4af37]">
        {/* FIX: Added specific heights for mobile & tablet (h-[160px] md:h-[240px]) with object-cover and object-left so text never crops. Restored to h-auto on desktop (lg:). */}
        <AdvancedImage 
          cldImg={contactHeroBg} 
          alt="Contact S.S. Industries" 
          className="w-full h-[160px] md:h-[240px] lg:h-auto object-cover object-left lg:object-center block" 
        />
      </section>

      {/* 2. Contact Information & Direct Channels Section (White Background) */}
      {/* Responsive Section Padding */}
      <section className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-[1350px] mx-auto">
          
          {/* Header directly above the cards */}
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0a0a0a] tracking-tight px-2">
              Let's Craft Your <br className="block sm:hidden" /> <span className="text-[#13463f]">Dream Space Together</span>.
            </h2>
          </div>

          {/* Adjusted Grid Gaps for smaller viewports */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
            
            {/* Card 1: Direct Phone Lines -> Opens Phone Dialer */}
            <a 
              href="tel:+919610774466" 
              className="block bg-[#fdfdfd] p-6 sm:p-8 lg:p-10 rounded-2xl lg:rounded-3xl border border-[#d2bfa9] shadow-xl flex flex-col items-center text-center group hover:border-[#13463f] md:hover:-translate-y-2 hover:shadow-2xl active:scale-[0.98] transition-all duration-300"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#13463f] text-[#d4af37] rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-md group-hover:bg-[#d4af37] group-hover:text-[#0a0a0a] transition-colors duration-300">
                <svg width="24" height="24" className="sm:w-[28px] sm:h-[28px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#0a0a0a] mb-2 sm:mb-3 group-hover:text-[#13463f] transition-colors">Call Our Lines</h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6">Available every day between 11:00 AM to 9:00 PM.</p>
              <div className="flex flex-col gap-1">
                <span className="text-sm sm:text-base font-bold text-[#13463f] group-hover:text-[#d4af37] transition-colors">+91 9610774466</span>
                <span className="text-sm sm:text-base font-bold text-[#13463f] group-hover:text-[#d4af37] transition-colors">+91 9057201868</span>
              </div>
            </a>

            {/* Card 2: Email Inquiries -> Opens DIRECTLY in Gmail Compose Tab */}
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ssindustries576@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block bg-[#fdfdfd] p-6 sm:p-8 lg:p-10 rounded-2xl lg:rounded-3xl border border-[#d2bfa9] shadow-xl flex flex-col items-center text-center group hover:border-[#13463f] md:hover:-translate-y-2 hover:shadow-2xl active:scale-[0.98] transition-all duration-300"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#13463f] text-[#d4af37] rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-md group-hover:bg-[#d4af37] group-hover:text-[#0a0a0a] transition-colors duration-300">
                <svg width="24" height="24" className="sm:w-[28px] sm:h-[28px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#0a0a0a] mb-2 sm:mb-3 group-hover:text-[#13463f] transition-colors">Drop An Email</h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6">Send us your project details, blueprints, or queries anytime.</p>
              {/* Added break-all for mobile so long email addresses don't break the layout */}
              <span className="text-sm sm:text-base font-bold text-[#13463f] group-hover:text-[#d4af37] transition-colors break-all sm:break-normal">
                ssindustries576@gmail.com
              </span>
            </a>

            {/* Card 3: WhatsApp Direct -> Opens WhatsApp */}
            <a 
              href="https://wa.me/919610774466?text=Hello,%20i%20m%20interesed%20in%20your%20products." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block bg-[#fdfdfd] p-6 sm:p-8 lg:p-10 rounded-2xl lg:rounded-3xl border border-[#d2bfa9] shadow-xl flex flex-col items-center text-center group hover:border-[#13463f] md:hover:-translate-y-2 hover:shadow-2xl active:scale-[0.98] transition-all duration-300"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#13463f] text-[#d4af37] rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-md group-hover:bg-[#d4af37] group-hover:text-[#0a0a0a] transition-colors duration-300">
                <svg width="24" height="24" className="sm:w-[28px] sm:h-[28px]" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#0a0a0a] mb-2 sm:mb-3 group-hover:text-[#13463f] transition-colors">Chat on WhatsApp</h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6">Quick response for product catalogs and quick inquiries.</p>
              <span className="px-5 py-2 sm:px-6 sm:py-2.5 bg-[#13463f] text-[#f5ebe0] font-semibold text-xs sm:text-sm rounded-full group-hover:bg-[#d4af37] group-hover:text-[#0a0a0a] transition-colors">
                Start Chat
              </span>
            </a>

          </div>
        </div>
      </section>

      {/* NEW: Contact Form Section */}
      <section className="bg-white pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-[900px] mx-auto bg-[#fdfdfd] p-6 sm:p-8 md:p-12 rounded-2xl lg:rounded-3xl border border-[#d2bfa9] shadow-xl relative">
          
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0a0a0a] tracking-tight">
              Send Us a <span className="text-[#13463f]">Message</span>
            </h2>
            <p className="text-gray-600 mt-2 sm:mt-3 text-xs sm:text-sm md:text-base px-2">
              Fill out the form below and our team will get back to you shortly.
            </p>
          </div>
          
          <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-bold text-[#0a0a0a] mb-1.5 sm:mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-[#d2bfa9] bg-white text-base md:text-sm focus:outline-none focus:ring-2 focus:ring-[#13463f]/20 focus:border-[#13463f] transition-colors" 
                  placeholder="John Doe" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-bold text-[#0a0a0a] mb-1.5 sm:mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-[#d2bfa9] bg-white text-base md:text-sm focus:outline-none focus:ring-2 focus:ring-[#13463f]/20 focus:border-[#13463f] transition-colors" 
                  placeholder="john@example.com" 
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="phone" className="block text-xs sm:text-sm font-bold text-[#0a0a0a] mb-1.5 sm:mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-[#d2bfa9] bg-white text-base md:text-sm focus:outline-none focus:ring-2 focus:ring-[#13463f]/20 focus:border-[#13463f] transition-colors" 
                  placeholder="+91 9876543210" 
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs sm:text-sm font-bold text-[#0a0a0a] mb-1.5 sm:mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-[#d2bfa9] bg-white text-base md:text-sm focus:outline-none focus:ring-2 focus:ring-[#13463f]/20 focus:border-[#13463f] transition-colors" 
                  placeholder="How can we help you?" 
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-xs sm:text-sm font-bold text-[#0a0a0a] mb-1.5 sm:mb-2">Your Message</label>
              <textarea 
                id="message" 
                name="message"
                rows="4" 
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 sm:px-5 py-3 rounded-xl border border-[#d2bfa9] bg-white text-base md:text-sm focus:outline-none focus:ring-2 focus:ring-[#13463f]/20 focus:border-[#13463f] transition-colors resize-none" 
                placeholder="Tell us about your project or inquiry..."
              ></textarea>
            </div>

            {status.error && <p className="text-red-500 text-xs sm:text-sm text-center font-semibold">{status.error}</p>}
            {status.success && <p className="text-green-600 text-xs sm:text-sm text-center font-semibold">Message sent successfully! We will contact you soon.</p>}
            
            <div className="text-center pt-2 sm:pt-4">
              <button 
                type="submit" 
                disabled={status.loading}
                className="px-8 py-3.5 sm:px-10 sm:py-4 bg-[#13463f] text-[#f5ebe0] font-bold text-base sm:text-lg rounded-full hover:bg-[#d4af37] hover:text-[#0a0a0a] active:scale-95 transition-all duration-300 shadow-md hover:shadow-xl w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status.loading ? 'Submitting...' : 'Submit Message'}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 3. Direct Showroom Addresses Section (Light Beige Background) */}
      <section className="bg-[#f5ebe0] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-20 border-t border-[#d2bfa9]/50">
        <div className="max-w-[1350px] mx-auto">
          
          <div className="text-center mb-10 sm:mb-12 relative z-10">
            <span className="text-[#d4af37] uppercase tracking-[0.2em] text-[10px] sm:text-xs font-bold mb-2 sm:mb-3 block">Visit Our Studios</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a0a0a] inline-block pb-1 mb-2 tracking-tight">
              Our <span className="font-light italic text-[#13463f]">Stores</span>
            </h2>
            <p className="text-[#0a0a0a]/70 max-w-xl mx-auto text-xs sm:text-sm font-medium">
              Immerse yourself in our world of luxury.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
            
            {/* Flagship Studio Card */}
            <div className="bg-[#0a241f] p-6 sm:p-8 lg:p-10 rounded-2xl lg:rounded-3xl border border-[#13463f] shadow-2xl flex flex-col h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-1.5 tracking-tight">Flagship Studio</h3>
                <p className="text-[#d4af37] font-medium tracking-wide uppercase text-[10px] sm:text-xs mb-3 sm:mb-4">Premium Collection</p>
                
                <p className="text-gray-300 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
                  Suiwal Complex, Opp. Sanganer Police Station, Airport Circle, Tonk Rd, Sanganer, Jaipur, Rajasthan 302029<br/>
                  <span className="text-[#d4af37] font-bold mt-1.5 sm:mt-2 inline-block">📞 +91 9610774466</span>
                </p>
                
                <div className="flex-grow w-full bg-white/5 rounded-xl overflow-hidden relative shadow-inner border border-white/10 min-h-[200px] sm:min-h-[250px] lg:min-h-[300px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.643447079183!2d75.79363437609207!3d26.819479464089735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dca05ecacadc5%3A0x15ab99be592b04ea!2sSS%20INDUSTRIES%20FURNITURE!5e0!3m2!1sen!2sin!4v1788515149680!5m2!1sen!2sin" 
                    className="w-full h-full absolute inset-0 border-0" 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Heritage Outlet Card */}
            <div className="bg-[#0a241f] p-6 sm:p-8 lg:p-10 rounded-2xl lg:rounded-3xl border border-[#13463f] shadow-2xl flex flex-col h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-1.5 tracking-tight">Heritage Outlet</h3>
                <p className="text-[#d4af37] font-medium tracking-wide uppercase text-[10px] sm:text-xs mb-3 sm:mb-4">Classic Exclusives</p>
                
                <p className="text-gray-300 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
                  Opp. Torrent CNG pump, near Raj Marriage Garden, Patrakar Colony, Sunder Nagar, Jaipur, Rajasthan 302020<br/>
                  <span className="text-[#d4af37] font-bold mt-1.5 sm:mt-2 inline-block">📞 +91 9057201868</span>
                </p>
                
                <div className="flex-grow w-full bg-white/5 rounded-xl overflow-hidden relative shadow-inner border border-white/10 min-h-[200px] sm:min-h-[250px] lg:min-h-[300px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.727822047592!2d75.75030257609272!3d26.848607962841406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db528c02d7199%3A0xc9fd4380daea72d6!2sSS%20Industries(FURNITURE)!5e0!3m2!1sen!2sin!4v1788515182526!5m2!1sen!2sin" 
                    className="w-full h-full absolute inset-0 border-0" 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default ContactUs;