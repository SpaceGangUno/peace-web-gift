
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

const BookingCalendar = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Individual Therapy",
    message: "",
  });

  // Available time slots
  const availableTimes = [
    "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", 
  ];

  // Weekend check for calendar
  const isWeekend = (date: Date) => {
    const day = date.getDay();
    // Highlight Sundays (0) as available, disable all other weekends
    return day === 6; // Only Saturday (6) is disabled
  };

  const handleDateChange = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    setTime(""); // Reset time when date changes
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
    
    // Here you would typically handle form submission to a server
    console.log("Form data submitted:", { ...formData, date, time });
    
    toast({
      title: "Consultation Scheduled",
      description: `Your consultation is set for ${format(date, 'MMMM d, yyyy')} at ${time}.`,
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
    setDate(undefined);
    setTime("");
  };

  return (
    <section className="section bg-background">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bookmania mb-4">
              Schedule a <span className="gold-text">Consultation</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Take the first step toward healing by scheduling a consultation. 
              Sundays between 10am-2pm are currently available for new client consultations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6 border border-border">
                <h2 className="font-bookmania text-2xl mb-6">Select a Date & Time</h2>
                
                <div className="mb-8">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={handleDateChange}
                    disabled={(date) => 
                      date < new Date() || // Disable past dates
                      isWeekend(date) // Disable weekends except Sunday
                    }
                    className="rounded-md border"
                  />
                </div>
                
                {date && (
                  <div className="mt-6">
                    <h3 className="font-bookmania text-lg mb-3">Available Times for {format(date, 'MMMM d, yyyy')}</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {availableTimes.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          className={`py-2 px-4 rounded-md text-center transition-all ${
                            time === slot
                              ? "bg-gold-gradient text-noir-vigne"
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

            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-md p-6 border border-border">
                <h2 className="font-bookmania text-2xl mb-6">Your Information</h2>
                
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
                        className="w-full px-4 py-3 rounded-md border border-input focus:border-gold focus:outline-none"
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
                        className="w-full px-4 py-3 rounded-md border border-input focus:border-gold focus:outline-none"
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
                        className="w-full px-4 py-3 rounded-md border border-input focus:border-gold focus:outline-none"
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
                        className="w-full px-4 py-3 rounded-md border border-input focus:border-gold focus:outline-none"
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
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-md border border-input focus:border-gold focus:outline-none"
                    ></textarea>
                  </div>

                  <div className="flex items-center bg-muted/30 p-4 rounded-md">
                    <div className="ml-3">
                      <h4 className="font-medium text-sm">Your selected time:</h4>
                      <p className="text-sm text-muted-foreground">
                        {date ? format(date, 'MMMM d, yyyy') : "No date selected"} {time ? `at ${time}` : ""}
                      </p>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary w-full"
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
