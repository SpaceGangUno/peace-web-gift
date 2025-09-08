
"use client";

import ContactInfo from "@/components/contact/ContactInfo";

const Contact = () => {
  return (
    <section id="contact" className="section bg-emerald-green text-white py-12 sm:py-16 md:py-24">
      <div className="container-custom px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bookmania mb-3 sm:mb-4">
              Get in <span className="gold-text">Touch</span>
            </h2>
            <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto">
              Have a question? Reach out to us and we'll provide the support you need.
            </p>
          </div>

          {/* Contact information only, optimized for mobile and desktop */}
          <ContactInfo variant="mobile" />
          <ContactInfo variant="desktop" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
