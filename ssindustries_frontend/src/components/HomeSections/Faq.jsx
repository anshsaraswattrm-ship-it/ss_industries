import React, { useState } from 'react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What makes S.S. Industries mattresses engineered for better sleep?",
      answer: "Every S.S. Industries mattress is crafted with everyday Indian comfort in mind. Whether you choose our gentle memory foam or firm orthopaedic alignment options, each mattress supports your body correctly, balancing comfort and function for all sleeping styles."
    },
    {
      question: "What types of sofas and seating arrangements are available?",
      answer: "Our collection includes compact 3-seater sofas for cozy living rooms, spacious L-shaped sectionals for larger corner setups, versatile sofa-cum-beds for space constraints, and plush recliners designed for your personal relaxation."
    },
    {
      question: "Are S.S. Industries furniture pieces suitable for compact Indian homes?",
      answer: "Yes! Every piece—from space-efficient wardrobes and sleek study tables to multi-functional beds and coffee tables—is meticulously designed to suit modern and traditional Indian spaces, maximizing storage without compromising on style."
    },
    {
      question: "Can I visit an S.S. Industries showroom near me?",
      answer: "Absolutely. Walking into our exclusive showrooms allows you to test, touch, and experience our mattresses, sofas, and room setups firsthand, making your home styling journey effortless and informed."
    },
    {
      question: "How does the delivery and customer care process work?",
      answer: "From cart to comfort, our process is entirely stress-free. We ensure clear communication, safe packaging, reliable timelines, and responsive customer support to assist you from selection right down to doorstep delivery."
    },
    {
      question: "Why choose S.S. Industries for home furnishings?",
      answer: "We focus on what genuinely works and lasts. Built with durable materials, backed by rigorous research, reliable warranties, and customer-first service, S.S. Industries brings everyday comfort and timeless design straight to your home."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 bg-[#fdfaf6] font-sans text-[#0a0a0a]">
      <div className="max-w-[900px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0a0a0a] mb-3">
            Frequently Asked <span className="text-[#13463f] italic font-light">Questions</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Everything you need to know about crafting your dream home with S.S. Industries.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'bg-white border-[#13463f] shadow-lg ring-1 ring-[#13463f]/20' 
                    : 'bg-white border-gray-200 hover:border-[#13463f]/50 shadow-sm'
                }`}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-semibold text-base md:text-lg text-[#0a0a0a]">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full border border-[#13463f]/30 flex items-center justify-center text-[#13463f] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#13463f] text-white border-[#13463f]' : ''}`}>
                    ↓
                  </div>
                </button>

                {/* Answer Content */}
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-6 pt-0 text-gray-700 text-sm md:text-base font-normal leading-relaxed border-t border-gray-100 mt-2">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default FAQ;