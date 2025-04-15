"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import LinkCompat from "@/components/LinkCompat";
import { sendFormEmail } from "@/lib/sendFormEmail";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await sendFormEmail(formData, 'contact');
      
      toast({
        title: "Message Sent",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleScheduleClick = () => {
    localStorage.setItem('contactFormData', JSON.stringify(formData));
  };

  return (
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
  );
};

export default ContactForm;
