
import { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

const BookingCalendar = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string>("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    state: "",
    insurance: "",
    referralSource: "",
    message: "",
  });

  useEffect(() => {
    const savedData = localStorage.getItem('contactFormData');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        
        if (parsedData.name) {
          const nameParts = parsedData.name.split(' ');
          if (nameParts.length > 0) setFormData(prev => ({ ...prev, firstName: nameParts[0] }));
          if (nameParts.length > 1) setFormData(prev => ({ ...prev, lastName: nameParts.slice(1).join(' ') }));
        }
        
        if (parsedData.email) setFormData(prev => ({ ...prev, email: parsedData.email }));
        if (parsedData.phone) setFormData(prev => ({ ...prev, phone: parsedData.phone }));
        
        if (parsedData.message) setFormData(prev => ({ ...prev, message: parsedData.message }));
        
        localStorage.removeItem('contactFormData');
      } catch (error) {
        console.error("Error parsing contact form data:", error);
      }
    }
  }, []);

  const availableTimes = [
    "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const stateOptions = ["North Carolina", "South Carolina", "Virginia", "Washington DC"];
  const insuranceOptions = [
    "Aetna", "Anthem", "BCBS", "Cigna", "Kaiser Permanente", 
    "Optum/UHC", "Quest Behavioral Health", "Carelon Behavioral Health",
    "Other", "Self-Pay"
  ];
  const referralOptions = [
    "Google Search", "Social Media", "Friend/Family", "Insurance Provider", 
    "Healthcare Provider", "Psychology Today", "Other"
  ];

  const isWeekend = (date: Date) => {
    const day = date.getDay();
    return day === 6;
  };

  const handleDateChange = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    setTime("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !time) {
      toast({
        title: "Missing Information",
        description: "Please select both a date and time for your consultation.",
        variant: "destructive",
      });
      return;
    }
    
    console.log("Form data submitted:", { ...formData, date, time });
    
    toast({
      title: "Consultation Scheduled",
      description: `Your consultation is set for ${format(date, 'MMMM d, yyyy')} at ${time}.`,
      variant: "default",
    });
    
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      state: "",
      insurance: "",
      referralSource: "",
      message: "",
    });
    setDate(undefined);
    setTime("");
  };

  return (
    <section className="section bg-background py-8 sm:py-12 md:py-16">
      <div className="container-custom px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bookmania mb-3 sm:mb-4">
              Schedule a <span className="gold-text">Consultation</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Take the first step toward healing by scheduling a consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-start">
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border border-border">
                <h2 className="font-bookmania text-xl sm:text-2xl mb-4 sm:mb-6">Select a Date & Time</h2>
                
                <div className="mb-6 sm:mb-8">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={handleDateChange}
                    disabled={(date) => 
                      date < new Date() || 
                      isWeekend(date)
                    }
                    className="rounded-md border mx-auto"
                    showOutsideDays={false}
                  />
                </div>
                
                {date && (
                  <div className="mt-4 sm:mt-6">
                    <h3 className="font-bookmania text-base sm:text-lg mb-2 sm:mb-3">
                      Available Times for {format(date, 'MMMM d, yyyy')}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {availableTimes.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          className={`py-2 px-3 sm:px-4 rounded-md text-center text-sm transition-all ${
                            time === slot
                              ? "bg-gold-gradient text-noir-vigne font-medium"
                              : "bg-muted hover:bg-muted/80"
                          }`}
                          onClick={() => setTime(slot)}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-3 order-1 lg:order-2 mb-6 lg:mb-0">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border border-border">
                <h2 className="font-bookmania text-xl sm:text-2xl mb-4 sm:mb-6">Your Information</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="firstName" className="block font-bookmania mb-1 text-sm sm:text-base">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-input focus:border-gold focus:outline-none text-sm"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block font-bookmania mb-1 text-sm sm:text-base">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-input focus:border-gold focus:outline-none text-sm"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-input focus:border-gold focus:outline-none text-sm"
                        required
                      />
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
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-input focus:border-gold focus:outline-none text-sm"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="state" className="block font-bookmania mb-1 text-sm sm:text-base">
                        State You Live In
                      </label>
                      <select
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-input focus:border-gold focus:outline-none text-sm"
                        required
                      >
                        <option value="">Select Your State</option>
                        {stateOptions.map((state) => (
                          <option key={state} value={state}>{state}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="insurance" className="block font-bookmania mb-1 text-sm sm:text-base">
                        Insurance
                      </label>
                      <select
                        id="insurance"
                        name="insurance"
                        value={formData.insurance}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-input focus:border-gold focus:outline-none text-sm"
                        required
                      >
                        <option value="">Select Your Insurance</option>
                        {insuranceOptions.map((insurance) => (
                          <option key={insurance} value={insurance}>{insurance}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="referralSource" className="block font-bookmania mb-1 text-sm sm:text-base">
                      How Did You Hear About Us?
                    </label>
                    <select
                      id="referralSource"
                      name="referralSource"
                      value={formData.referralSource}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-input focus:border-gold focus:outline-none text-sm"
                      required
                    >
                      <option value="">Select An Option</option>
                      {referralOptions.map((source) => (
                        <option key={source} value={source}>{source}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block font-bookmania mb-1 text-sm sm:text-base">
                      Primary Concerns and Availability Monday through Friday
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Tell us your primary concerns and availability Monday through Friday"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-input focus:border-gold focus:outline-none text-sm"
                      required
                    ></textarea>
                  </div>

                  {(date || time) && (
                    <div className="flex items-center bg-muted/30 p-3 sm:p-4 rounded-md">
                      <div className="ml-2 sm:ml-3">
                        <h4 className="font-medium text-xs sm:text-sm">Your selected time:</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {date ? format(date, 'MMMM d, yyyy') : "No date selected"} {time ? `at ${time}` : ""}
                        </p>
                      </div>
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    className="btn-primary w-full text-sm sm:text-base py-3"
                  >
                    Schedule Consultation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCalendar;
