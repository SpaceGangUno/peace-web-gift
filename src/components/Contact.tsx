
"use client";

import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

const Contact = () => {
  return (
    <section id="contact" className="section bg-emerald-green text-white py-12 sm:py-16 md:py-24">
      <div className="container-custom px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bookmania mb-3 sm:mb-4">
              Get in <span className="gold-text">Touch</span>
            </h2>
            {/* Removed the previous text */}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10">
            <div className="lg:col-span-2 order-2 lg:order-1">
              <ContactForm />
              
              {/* Contact information for mobile view */}
              <ContactInfo variant="mobile" />
            </div>
            
            {/* Contact information for desktop view */}
            <ContactInfo variant="desktop" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
