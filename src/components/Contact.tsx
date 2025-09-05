
"use client";

import ContactInfo from "@/components/contact/ContactInfo";

const Contact = () => {
  return (
    <section id="contact" className="section bg-emerald-green text-white py-12 sm:py-16 md:py-24">
      <div className="container-custom px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center">
            <ContactInfo variant="desktop" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
