
import { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import { format, addDays } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import { Loader2 } from "lucide-react";

const BookingCalendar = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string>("");
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    state: "",
    insurance: "",
    referralSource: "",
    otherReferralSource: "",
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

  const stateOptions = ["North Carolina", "South Carolina", "Virginia", "Washington DC"];
  const insuranceOptions = [
    "Aetna", "Anthem", "BCBS", "Cigna", "Kaiser Permanente", 
    "Optum/UHC", "Quest Behavioral Health", "Carelon Behavioral Health",
    "Other", "Self-Pay"
  ];
  
  const referralOptions = [
    "Psych Today",
    "Google Search",
    "Mental Health Match",
    "Good Therapy",
    "Zencare",
    "Linked In",
    "Instagram",
    "Word of Mouth",
    "Therapy 4 Black Girls",
    "Black Female Therapist",
    "Other"
  ];

  useEffect(() => {
    if (formData.referralSource === "Other") {
      setShowOtherInput(true);
    } else {
      setShowOtherInput(false);
    }
  }, [formData.referralSource]);

  const fetchAvailableSlots = async (selectedDate: Date) => {
    setIsLoading(true);
    setAvailableSlots([]);
    
    try {
      const formattedDate = format(selectedDate, 'yyyy-MM-dd');
      const response = await fetch(`https://rnlwovbygyomxzjzbqgv.supabase.co/functions/v1/available-slots?date=${formattedDate}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch available slots');
      }
      
      const data = await response.json();
      setAvailableSlots(data.slots || []);
    } catch (error) {
      console.error('Error fetching available slots:', error);
      toast({
        title: "Error",
        description: "Unable to fetch available slots. Please try again.",
        variant: "destructive",
      });
      setAvailableSlots([]);
    } finally {
      setIsLoading(false);
    }
  };

  const isWeekend = (date: Date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // 0 is Sunday, 6 is Saturday
  };

  const handleDateChange = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    setTime("");
    
    if (selectedDate) {
      fetchAvailableSlots(selectedDate);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !time) {
      toast({
        title: "Missing Information",
        description: "Please select both a date and time for your consultation.",
        variant: "destructive",
      });
      return;
    }
    
    const finalReferralSource = formData.referralSource === "Other" 
      ? formData.otherReferralSource 
      : formData.referralSource;
    
    setIsSubmitting(true);
    
    try {
      // Format the date and time for the API
      const formattedDate = format(date, 'yyyy-MM-dd');
      const appointmentDateTime = `${formattedDate}T${time.replace(/ (AM|PM)$/, '')}:00`;
      
      const response = await fetch('https://rnlwovbygyomxzjzbqgv.supabase.co/functions/v1/create-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          state: formData.state,
          insurance: formData.insurance,
          referralSource: finalReferralSource,
          message: formData.message,
          appointmentDateTime: appointmentDateTime,
          timeSlot: time
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to schedule consultation');
      }
      
      const result = await response.json();
      
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
        otherReferralSource: "",
        message: "",
      });
      setDate(undefined);
      setTime("");
      setShowOtherInput(false);
    } catch (error) {
      console.error('Error scheduling consultation:', error);
      toast({
        title: "Error",
        description: "Unable to schedule your consultation. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                      isWeekend(date) ||
                      date > addDays(new Date(), 60) // Only allow booking 60 days in advance
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
                    
                    {isLoading ? (
                      <div className="flex justify-center items-center py-8">
                        <Loader2 className="h-6 w-6 animate-spin text-gold" />
                        <span className="ml-2 text-sm text-muted-foreground">Loading available times...</span>
                      </div>
                    ) : availableSlots.length > 0 ? (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {availableSlots.map((slot) => (
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
                    ) : (
                      <div className="text-center py-4 text-muted-foreground">
                        <p>No available time slots for this date.</p>
                        <p className="text-sm mt-2">Please select another date.</p>
                      </div>
                    )}
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
                        disabled={isSubmitting}
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
                        disabled={isSubmitting}
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
                        disabled={isSubmitting}
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
                        disabled={isSubmitting}
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
                        disabled={isSubmitting}
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
                        disabled={isSubmitting}
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
                      disabled={isSubmitting}
                    >
                      <option value="">Select An Option</option>
                      {referralOptions.map((source) => (
                        <option key={source} value={source}>{source}</option>
                      ))}
                    </select>
                    
                    {showOtherInput && (
                      <div className="mt-3">
                        <label htmlFor="otherReferralSource" className="block font-bookmania mb-1 text-sm sm:text-base">
                          Please Specify
                        </label>
                        <input
                          type="text"
                          id="otherReferralSource"
                          name="otherReferralSource"
                          value={formData.otherReferralSource}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-input focus:border-gold focus:outline-none text-sm"
                          required={showOtherInput}
                          placeholder="Please specify how you heard about us"
                          disabled={isSubmitting}
                        />
                      </div>
                    )}
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
                      disabled={isSubmitting}
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
                    className={`btn-primary w-full text-sm sm:text-base py-3 flex justify-center items-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                        Scheduling...
                      </>
                    ) : (
                      "Schedule Consultation"
                    )}
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
