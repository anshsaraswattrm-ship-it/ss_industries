// import React, { useState } from 'react';

// function OurStores() {
//   const [openDoor, setOpenDoor] = useState({ left: false, right: false });
//   const [mobileOpen, setMobileOpen] = useState({ store1: true, store2: false });

//   // Physics-based smooth easing for heavy luxury doors
//   const doorTransition = 'transform 1.4s cubic-bezier(0.25, 1, 0.2, 1), box-shadow 1.4s ease';

//   const leftDoorStyle = {
//     transformOrigin: 'left center',
//     transform: openDoor.left ? 'rotateY(-120deg)' : 'rotateY(0deg)',
//     transition: doorTransition,
//     boxShadow: openDoor.left ? '20px 0 30px rgba(0,0,0,0.5)' : 'none',
//     zIndex: openDoor.left ? 10 : 20,
//   };

//   const rightDoorStyle = {
//     transformOrigin: 'right center',
//     transform: openDoor.right ? 'rotateY(120deg)' : 'rotateY(0deg)',
//     transition: doorTransition,
//     boxShadow: openDoor.right ? '-20px 0 30px rgba(0,0,0,0.5)' : 'none',
//     zIndex: openDoor.right ? 10 : 20,
//   };

//   return (
//     <section className="w-full py-16 md:py-24 bg-[#f5ebe0] font-sans overflow-hidden">
//       <div className="max-w-[1250px] mx-auto px-4 md:px-8">
        
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-5xl font-extrabold text-[#0a0a0a] inline-block border-b-4 border-[#13463f] pb-3 mb-4 tracking-tight">
//             Visit Our Showrooms
//           </h2>
//           <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base font-medium">
//             Open the doors to experience our world-class craftsmanship.
//           </p>
//         </div>

//         {/* =========================================
//             DESKTOP VIEW: ROYAL 3D WARDROBE
//             ========================================= */}
//         <div className="hidden lg:block relative w-full h-[600px] mx-auto rounded-lg shadow-2xl" style={{ perspective: '2000px' }}>
          
//           {/* Wardrobe Outer Frame (Wood Casing) */}
//           <div className="absolute -inset-4 bg-gradient-to-b from-[#0a241f] to-[#13463f] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-0 flex items-center justify-center">
//             {/* Inner Dark Shadow to give depth */}
//             <div className="w-[calc(100%-24px)] h-[calc(100%-24px)] bg-black/40 rounded-lg shadow-[inset_0_10px_30px_rgba(0,0,0,0.8)]"></div>
//           </div>

//           {/* Inside Wardrobe (The Stores Reveal) */}
//           <div className="absolute inset-0 flex bg-[#fafafa] overflow-hidden border-2 border-[#13463f]/20 z-10 rounded-sm">
            
//             {/* Store 1 (Left Side) */}
//             <div className="w-1/2 h-full p-10 flex flex-col border-r-2 border-gray-200/60 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] relative">
//               <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-0"></div>
//               <div className="relative z-10 flex flex-col h-full">
//                 <h3 className="text-3xl font-black text-[#13463f] mb-2 tracking-wide uppercase">Flagship Studio</h3>
//                 <div className="w-12 h-1 bg-[#d4af37] mb-4"></div>
//                 <p className="text-gray-700 text-sm mb-6 flex-grow-0 font-medium">
//                   123 Premium Furniture Avenue,<br />
//                   Malviya Nagar, Jaipur, Rajasthan 302017<br/>
//                   <span className="text-[#d4af37] font-bold mt-2 inline-block">📞 +91 98765 43210</span>
//                 </p>
//                 {/* Store 1 Map Container */}
//                 <div className="flex-grow w-full bg-gray-200 rounded-md overflow-hidden relative shadow-inner border border-gray-300">
//                   <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium bg-gray-100">
//                     {/* YAHA STORE 1 KA IFRAME PASTE KAREN */}
//                     [Paste Store 1 GMap Embed Here]
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Store 2 (Right Side) */}
//             <div className="w-1/2 h-full p-10 flex flex-col bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] relative">
//               <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-0"></div>
//               <div className="relative z-10 flex flex-col h-full">
//                 <h3 className="text-3xl font-black text-[#13463f] mb-2 tracking-wide uppercase">Heritage Outlet</h3>
//                 <div className="w-12 h-1 bg-[#d4af37] mb-4"></div>
//                 <p className="text-gray-700 text-sm mb-6 flex-grow-0 font-medium">
//                   45 Grand Woodworks Street,<br />
//                   Vaishali Nagar, Jaipur, Rajasthan 302021<br/>
//                   <span className="text-[#d4af37] font-bold mt-2 inline-block">📞 +91 98765 43211</span>
//                 </p>
//                 {/* Store 2 Map Container */}
//                 <div className="flex-grow w-full bg-gray-200 rounded-md overflow-hidden relative shadow-inner border border-gray-300">
//                   <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium bg-gray-100">
//                     {/* YAHA STORE 2 KA IFRAME PASTE KAREN */}
//                     [Paste Store 2 GMap Embed Here]
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Left Door (Premium Paneling) */}
//           <div 
//             className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-[#1a5a51] to-[#103630] border-r-2 border-black/40 flex items-center justify-end pr-8 cursor-pointer group"
//             style={leftDoorStyle}
//             onClick={() => setOpenDoor({ ...openDoor, left: !openDoor.left })}
//           >
//             {/* Detailed Paneling (Wainscoting effect) */}
//             <div className="absolute inset-5 border-[8px] border-[#0e2e29] rounded shadow-[inset_0_4px_15px_rgba(0,0,0,0.5),0_2px_5px_rgba(255,255,255,0.1)] pointer-events-none flex flex-col gap-4 p-4">
//                <div className="w-full h-1/3 border-[4px] border-[#13463f] shadow-[inset_0_4px_10px_rgba(0,0,0,0.4)] bg-[#154d45]"></div>
//                <div className="w-full h-2/3 border-[4px] border-[#13463f] shadow-[inset_0_4px_10px_rgba(0,0,0,0.4)] bg-[#154d45] flex items-center justify-center">
//                   <span className={`text-[#d4af37] font-bold tracking-[0.2em] uppercase text-sm transition-opacity duration-500 ${openDoor.left ? 'opacity-0' : 'opacity-100 group-hover:scale-110'}`}>
//                     Flagship Studio
//                   </span>
//                </div>
//             </div>
            
//             {/* Luxury Gold Handle */}
//             <div className="w-4 h-48 bg-gradient-to-b from-[#f9f2cc] via-[#d4af37] to-[#8a7322] rounded-sm shadow-[4px_0_10px_rgba(0,0,0,0.6)] z-10 border-l border-white/40"></div>
//           </div>

//           {/* Right Door (Premium Paneling) */}
//           <div 
//             className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#1a5a51] to-[#103630] border-l-2 border-white/10 flex items-center justify-start pl-8 cursor-pointer group"
//             style={rightDoorStyle}
//             onClick={() => setOpenDoor({ ...openDoor, right: !openDoor.right })}
//           >
//             {/* Detailed Paneling (Wainscoting effect) */}
//             <div className="absolute inset-5 border-[8px] border-[#0e2e29] rounded shadow-[inset_0_4px_15px_rgba(0,0,0,0.5),0_2px_5px_rgba(255,255,255,0.1)] pointer-events-none flex flex-col gap-4 p-4">
//                <div className="w-full h-1/3 border-[4px] border-[#13463f] shadow-[inset_0_4px_10px_rgba(0,0,0,0.4)] bg-[#154d45]"></div>
//                <div className="w-full h-2/3 border-[4px] border-[#13463f] shadow-[inset_0_4px_10px_rgba(0,0,0,0.4)] bg-[#154d45] flex items-center justify-center">
//                   <span className={`text-[#d4af37] font-bold tracking-[0.2em] uppercase text-sm transition-opacity duration-500 ${openDoor.right ? 'opacity-0' : 'opacity-100 group-hover:scale-110'}`}>
//                     Heritage Outlet
//                   </span>
//                </div>
//             </div>
            
//             {/* Luxury Gold Handle */}
//             <div className="w-4 h-48 bg-gradient-to-b from-[#f9f2cc] via-[#d4af37] to-[#8a7322] rounded-sm shadow-[-4px_0_10px_rgba(0,0,0,0.6)] z-10 border-r border-white/40"></div>
//           </div>
          
//         </div>

//         {/* =========================================
//             MOBILE VIEW: ELEGANT DRAWERS
//             ========================================= */}
//         <div className="block lg:hidden space-y-5">
          
//           {/* Store 1 Drawer */}
//           <div className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-[#13463f]">
//             <button 
//               className="w-full p-5 flex justify-between items-center bg-gradient-to-r from-[#13463f] to-[#0f3832] text-white"
//               onClick={() => setMobileOpen({ ...mobileOpen, store1: !mobileOpen.store1 })}
//             >
//               <span className="font-bold tracking-widest uppercase text-sm text-[#d4af37]">Flagship Studio</span>
//               <span className="text-[#d4af37] text-2xl font-light">{mobileOpen.store1 ? '−' : '+'}</span>
//             </button>
            
//             <div className={`transition-all duration-500 ease-in-out ${mobileOpen.store1 ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
//               <div className="p-5 bg-gray-50">
//                 <p className="text-gray-700 text-sm mb-4 font-medium">
//                   123 Premium Furniture Avenue, Malviya Nagar, Jaipur 302017
//                 </p>
//                 <div className="w-full h-56 bg-gray-200 rounded-md relative overflow-hidden shadow-inner border border-gray-300">
//                    {/* YAHA STORE 1 KA IFRAME PASTE KAREN */}
//                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-xs font-bold bg-white">
//                      [Paste Store 1 GMap Embed Here]
//                    </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Store 2 Drawer */}
//           <div className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-[#13463f]">
//             <button 
//               className="w-full p-5 flex justify-between items-center bg-gradient-to-r from-[#13463f] to-[#0f3832] text-white"
//               onClick={() => setMobileOpen({ ...mobileOpen, store2: !mobileOpen.store2 })}
//             >
//               <span className="font-bold tracking-widest uppercase text-sm text-[#d4af37]">Heritage Outlet</span>
//               <span className="text-[#d4af37] text-2xl font-light">{mobileOpen.store2 ? '−' : '+'}</span>
//             </button>
            
//             <div className={`transition-all duration-500 ease-in-out ${mobileOpen.store2 ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
//               <div className="p-5 bg-gray-50">
//                 <p className="text-gray-700 text-sm mb-4 font-medium">
//                   45 Grand Woodworks Street, Vaishali Nagar, Jaipur 302021
//                 </p>
//                 <div className="w-full h-56 bg-gray-200 rounded-md relative overflow-hidden shadow-inner border border-gray-300">
//                    {/* YAHA STORE 2 KA IFRAME PASTE KAREN */}
//                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-xs font-bold bg-white">
//                      [Paste Store 2 GMap Embed Here]
//                    </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

// export default OurStores;



















import React, { useState } from 'react';

function OurStores() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState({ store1: true, store2: false });

  const sofaImageUrl = "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80";
  const slideTransition = 'transform 1.2s cubic-bezier(0.76, 0, 0.24, 1)';

  return (
    <section 
      className="w-full py-10 md:py-14 font-sans overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #13463f 0%, #0a241f 100%)' }}
    >
      {/* Container width slightly increased */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white inline-block pb-1 mb-2 tracking-tight">
            Our <span className="font-light italic text-[#d4af37]">Stores</span>
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto text-xs md:text-sm font-medium">
            Immerse yourself in our world of luxury.
          </p>
        </div>

        {/* =========================================
            DESKTOP VIEW: CINEMATIC SPLITTING SOFA
            (Width increased to max-w-[1300px])
            ========================================= */}
        <div className="hidden lg:block relative w-full max-w-[1300px] h-[560px] mx-auto rounded-2xl shadow-2xl overflow-hidden bg-[#0a0a0a] border border-[#d4af37]/30">
          
          {/* --- THE INSIDE REVEAL (STORES & MAPS) --- */}
          <div className="absolute inset-0 flex z-0">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsRevealed(false)}
              className={`absolute top-4 left-1/2 -translate-x-1/2 z-30 bg-[#d4af37] text-[#0a0a0a] px-5 py-1.5 rounded-full text-xs tracking-widest uppercase font-bold shadow-lg hover:bg-white transition-all duration-700 delay-500 cursor-pointer ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8 pointer-events-none'}`}
            >
              Close Doors ✕
            </button>

            {/* Store 1 (Left Side) */}
            <div className="w-1/2 h-full p-8 md:p-10 flex flex-col bg-[#0a241f] border-r border-white/10 relative">
              <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-3xl font-extrabold text-white mb-1.5 tracking-tight">Flagship Studio</h3>
                <p className="text-[#d4af37] font-medium tracking-wide uppercase text-xs mb-4">Premium Collection</p>
                
                <p className="text-gray-300 text-xs md:text-sm mb-4 leading-relaxed">
                  123 Premium Furniture Avenue,<br />
                  Malviya Nagar, Jaipur, Rajasthan 302017<br/>
                  <span className="text-[#d4af37] font-bold mt-1.5 inline-block">📞 +91 98765 43210</span>
                </p>
                
                <div className="flex-grow w-full bg-white/5 rounded-xl overflow-hidden relative shadow-inner border border-white/10 min-h-[160px]">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium text-xs md:text-sm">
                    [Paste Store 1 GMap Embed Here]
                  </div>
                </div>
              </div>
            </div>

            {/* Store 2 (Right Side) */}
            <div className="w-1/2 h-full p-8 md:p-10 flex flex-col bg-[#0a241f] relative">
              <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-3xl font-extrabold text-white mb-1.5 tracking-tight">Heritage Outlet</h3>
                <p className="text-[#d4af37] font-medium tracking-wide uppercase text-xs mb-4">Classic Exclusives</p>
                
                <p className="text-gray-300 text-xs md:text-sm mb-4 leading-relaxed">
                  45 Grand Woodworks Street,<br />
                  Vaishali Nagar, Jaipur, Rajasthan 302021<br/>
                  <span className="text-[#d4af37] font-bold mt-1.5 inline-block">📞 +91 98765 43211</span>
                </p>
                
                <div className="flex-grow w-full bg-white/5 rounded-xl overflow-hidden relative shadow-inner border border-white/10 min-h-[160px]">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium text-xs md:text-sm">
                    [Paste Store 2 GMap Embed Here]
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- THE OUTSIDE (SPLITTING SOFA DOORS) --- */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-500 ${isRevealed ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'}`}>
            <button 
              onClick={() => setIsRevealed(true)}
              className="bg-black/40 backdrop-blur-md border border-[#d4af37]/50 text-white px-8 py-3.5 tracking-[0.2em] uppercase font-bold text-xs shadow-[0_0_40px_rgba(0,0,0,0.5)] hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-colors duration-500 flex flex-col items-center gap-1.5 cursor-pointer"
            >
              <span>Step Inside</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
            </button>
          </div>

          {/* Left Sofa Panel */}
          <div 
            className="absolute top-0 left-0 w-1/2 h-full z-20 border-r-2 border-[#d4af37]/40 shadow-[5px_0_20px_rgba(0,0,0,0.5)]"
            style={{
              backgroundImage: `url(${sofaImageUrl})`,
              backgroundSize: '200% 100%',
              backgroundPosition: 'left center',
              transition: slideTransition,
              transform: isRevealed ? 'translateX(-100%)' : 'translateX(0)'
            }}
          >
            <div className="absolute inset-0 bg-[#0a241f]/30 hover:bg-transparent transition-colors duration-700 mix-blend-multiply"></div>
          </div>

          {/* Right Sofa Panel */}
          <div 
            className="absolute top-0 right-0 w-1/2 h-full z-20 border-l-2 border-[#d4af37]/40 shadow-[-5px_0_20px_rgba(0,0,0,0.5)]"
            style={{
              backgroundImage: `url(${sofaImageUrl})`,
              backgroundSize: '200% 100%',
              backgroundPosition: 'right center',
              transition: slideTransition,
              transform: isRevealed ? 'translateX(100%)' : 'translateX(0)'
            }}
          >
            <div className="absolute inset-0 bg-[#0a241f]/30 hover:bg-transparent transition-colors duration-700 mix-blend-multiply"></div>
          </div>

        </div>

        {/* Mobile View */}
        <div className="block lg:hidden space-y-3">
          <div className="bg-[#0a241f] rounded-xl shadow-lg overflow-hidden border border-white/10">
            <button 
              className="w-full p-4 flex justify-between items-center bg-white/5 border-b border-white/10"
              onClick={() => setMobileOpen({ ...mobileOpen, store1: !mobileOpen.store1 })}
            >
              <span className="font-extrabold tracking-wide text-base text-white">Flagship Studio</span>
              <div className={`w-7 h-7 rounded-full border border-[#d4af37] flex items-center justify-center text-[#d4af37] text-sm transition-transform duration-300 ${mobileOpen.store1 ? 'rotate-180 bg-[#d4af37] text-[#0a241f]' : ''}`}>
                ↓
              </div>
            </button>
            <div className={`transition-all duration-500 ease-in-out ${mobileOpen.store1 ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="p-4">
                <p className="text-gray-300 text-xs mb-3 leading-relaxed">
                  123 Premium Furniture Avenue, Malviya Nagar, Jaipur 302017
                </p>
                <div className="w-full h-48 bg-white/5 rounded-lg relative overflow-hidden border border-white/10">
                   <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs font-bold">
                     [Paste Store 1 GMap Embed Here]
                   </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0a241f] rounded-xl shadow-lg overflow-hidden border border-white/10">
            <button 
              className="w-full p-4 flex justify-between items-center bg-white/5 border-b border-white/10"
              onClick={() => setMobileOpen({ ...mobileOpen, store2: !mobileOpen.store2 })}
            >
              <span className="font-extrabold tracking-wide text-base text-white">Heritage Outlet</span>
              <div className={`w-7 h-7 rounded-full border border-[#d4af37] flex items-center justify-center text-[#d4af37] text-sm transition-transform duration-300 ${mobileOpen.store2 ? 'rotate-180 bg-[#d4af37] text-[#0a241f]' : ''}`}>
                ↓
              </div>
            </button>
            <div className={`transition-all duration-500 ease-in-out ${mobileOpen.store2 ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="p-4">
                <p className="text-gray-300 text-xs mb-3 leading-relaxed">
                  45 Grand Woodworks Street, Vaishali Nagar, Jaipur 302021
                </p>
                <div className="w-full h-48 bg-white/5 rounded-lg relative overflow-hidden border border-white/10">
                   <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs font-bold">
                     [Paste Store 2 GMap Embed Here]
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default OurStores;