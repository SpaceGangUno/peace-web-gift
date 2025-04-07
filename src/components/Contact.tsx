
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Individual Therapy",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically handle form submission to a server
    // This is just a placeholder to show toast notification
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
      service: "Individual Therapy",
      message: "",
    });
  };

  return (
    <section id="contact" className="section bg-emerald-green text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bookmania mb-4">
              Get in <span className="gold-text">Touch</span>
            </h2>
            <p className="text-white/80">
              Ready to start your journey toward peace and wellbeing? 
              Reach out to schedule a consultation or learn more about our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-bookmania mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:border-gold focus:outline-none text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-bookmania mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:border-gold focus:outline-none text-white"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block font-bookmania mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:border-gold focus:outline-none text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block font-bookmania mb-1">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:border-gold focus:outline-none text-white"
                      style={{ WebkitAppearance: "menulist" }}
                    >
                      <option value="Individual Therapy">Individual Therapy</option>
                      <option value="Couples Counseling">Couples Counseling</option>
                      <option value="Family Therapy">Family Therapy</option>
                      <option value="Anxiety Management">Anxiety Management</option>
                      <option value="Trauma Recovery">Trauma Recovery</option>
                      <option value="Mindfulness Training">Mindfulness Training</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-bookmania mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:border-gold focus:outline-none text-white"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div>
              <div className="bg-wasabi/20 rounded-lg p-6 h-full">
                <h3 className="font-bookmania text-xl mb-6 gold-text">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-white/70 mb-1">Email</p>
                    <a href="mailto:contact@thegiftofpeace.com" className="text-white hover:text-gold">
                      contact@thegiftofpeace.com
                    </a>
                  </div>
                  
                  <div>
                    <p className="text-sm text-white/70 mb-1">Phone</p>
                    <a href="tel:+11234567890" className="text-white hover:text-gold">
                      (123) 456-7890
                    </a>
                  </div>
                  
                  <div>
                    <p className="text-sm text-white/70 mb-1">Office</p>
                    <address className="not-italic text-white">
                      123 Serenity Avenue<br />
                      Suite 101<br />
                      Peaceful City, PC 12345
                    </address>
                  </div>
                  
                  <div>
                    <p className="text-sm text-white/70 mb-1">Hours</p>
                    <p className="text-white">
                      Monday - Friday: 9am - 7pm<br />
                      Saturday: 10am - 2pm<br />
                      Sunday: Closed
                    </p>
                  </div>
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
