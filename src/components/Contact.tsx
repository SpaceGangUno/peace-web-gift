
"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import LinkCompat from "@/components/LinkCompat";
import { CalendarClock, Mail, Phone } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically handle form submission to a server
    console.log("Form data submitted:", formData);
    
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
      variant: "default",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  // Store form data in localStorage when navigating to schedule page
  const handleScheduleClick = () => {
    localStorage.setItem('contactFormData', JSON.stringify(formData));
  };

  return (
    <section id="contact" className="section bg-emerald-green text-white py-12 sm:py-16 md:py-24">
      <div className="container-custom px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bookmania mb-3 sm:mb-4">
              Get in <span className="gold-text">Touch</span>
            </h2>
            <p className="text-white/80 text-sm sm:text-base">
              Ready to start your journey toward peace and wellbeing? 
              Reach out with any questions or to learn more about our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10">
            <div className="lg:col-span-2 order-2 lg:order-1">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block font-bookmania mb-1 text-sm sm:text-base">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md bg-white/10 border border-white/20 focus:border-gold focus:outline-none text-white text-sm sm:text-base"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-bookmania mb-1 text-sm sm:text-base">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md bg-white/10 border border-white/20 focus:border-gold focus:outline-none text-white text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block font-bookmania mb-1 text-sm sm:text-base">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md bg-white/10 border border-white/20 focus:border-gold focus:outline-none text-white text-sm sm:text-base"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-bookmania mb-1 text-sm sm:text-base">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md bg-white/10 border border-white/20 focus:border-gold focus:outline-none text-white text-sm sm:text-base"
                    required
                  ></textarea>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button
                    type="submit"
                    className="btn-primary w-full sm:w-auto text-sm sm:text-base py-2 sm:py-3"
                  >
                    Send Message
                  </button>
                  
                  <LinkCompat 
                    href="/schedule" 
                    className="btn-secondary w-full sm:w-auto text-center text-sm sm:text-base py-2 sm:py-3"
                    onClick={handleScheduleClick}
                  >
                    Schedule Consultation
                  </LinkCompat>
                </div>
              </form>
              
              {/* Contact information for mobile view */}
              <div className="block lg:hidden mt-8">
                <div className="bg-wasabi/20 rounded-lg p-4 sm:p-6">
                  <h3 className="font-bookmania text-lg mb-4 gold-text">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="text-gold mr-3 flex-shrink-0 h-5 w-5" />
                      <div>
                        <p className="text-xs sm:text-sm text-white/70 mb-1">Email</p>
                        <a href="mailto:admin@thegiftofpeace.org" className="text-white hover:text-gold text-sm sm:text-base break-all">
                          admin@thegiftofpeace.org
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="text-gold mr-3 flex-shrink-0 h-5 w-5" />
                      <div>
                        <p className="text-xs sm:text-sm text-white/70 mb-1">Phone</p>
                        <a href="tel:+19802166978" className="text-white hover:text-gold text-sm sm:text-base">
                          (980) 216-6978
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <CalendarClock className="text-gold mr-3 flex-shrink-0 h-5 w-5" />
                      <div>
                        <p className="text-xs sm:text-sm text-white/70 mb-1">Office Hours</p>
                        <p className="text-white text-sm sm:text-base">
                          Monday - Friday: 10am - 6pm
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-white/20">
                    <p className="text-white/70 mb-3 text-xs sm:text-sm">
                      For faster service:
                    </p>
                    <LinkCompat href="/schedule" className="btn-primary w-full justify-center flex items-center text-sm sm:text-base py-2 sm:py-3">
                      Book Online
                    </LinkCompat>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 mb-6 lg:mb-0 hidden lg:block">
              <div className="bg-wasabi/20 rounded-lg p-4 sm:p-6 h-full">
                <h3 className="font-bookmania text-lg sm:text-xl mb-4 sm:mb-6 gold-text">
                  Contact Information
                </h3>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start">
                    <Mail className="text-gold mr-3 flex-shrink-0 h-5 w-5" />
                    <div>
                      <p className="text-xs sm:text-sm text-white/70 mb-1">Email</p>
                      <a href="mailto:admin@thegiftofpeace.org" className="text-white hover:text-gold text-sm sm:text-base break-all">
                        admin@thegiftofpeace.org
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-gold mr-3 flex-shrink-0 h-5 w-5" />
                    <div>
                      <p className="text-xs sm:text-sm text-white/70 mb-1">Phone</p>
                      <a href="tel:+19802166978" className="text-white hover:text-gold text-sm sm:text-base">
                        (980) 216-6978
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CalendarClock className="text-gold mr-3 flex-shrink-0 h-5 w-5" />
                    <div>
                      <p className="text-xs sm:text-sm text-white/70 mb-1">Office Hours</p>
                      <p className="text-white text-sm sm:text-base">
                        Monday - Friday: 10am - 6pm
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/20">
                  <p className="text-white/70 mb-3 text-xs sm:text-sm">
                    For faster service:
                  </p>
                  <LinkCompat href="/schedule" className="btn-primary w-full justify-center flex items-center text-sm sm:text-base py-2 sm:py-3">
                    Book Online
                  </LinkCompat>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
