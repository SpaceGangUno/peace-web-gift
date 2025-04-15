
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { sendFormEmail } from "@/lib/sendFormEmail";

const WaitingList = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredContact: "email",
    concerns: "",
    insurance: "private_pay",
    hasInsurance: "yes",
    region: "North Carolina",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendFormEmail(formData, 'waiting-list');
      
      toast({
        title: "Added to Waiting List",
        description: "We'll contact you when we start accepting new patients.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        preferredContact: "email",
        concerns: "",
        insurance: "private_pay",
        hasInsurance: "yes",
        region: "North Carolina",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Unable to join the waiting list. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const insuranceOptions = [
    { value: "private_pay", label: "Private Pay" },
    { value: "quest", label: "Quest Behavioral Health" },
    { value: "carelon", label: "Carelon Behavioral Health" },
    { value: "kaiser", label: "Kaiser Permanente" },
    { value: "optum", label: "Optum" },
    { value: "aetna", label: "Aetna" },
    { value: "cigna", label: "Cigna" },
    { value: "anthem", label: "Anthem EAP" },
    { value: "uhc", label: "United Health Care" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-border max-w-xl mx-auto">
      <h2 className="font-bookmania text-2xl mb-4">Join Our Waiting List</h2>
      <p className="text-muted-foreground mb-6">
        We're currently at capacity but would love to work with you in the future. Join our waiting list to be notified when we start accepting new patients.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-bookmania mb-1 text-sm">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-input focus:border-gold focus:outline-none"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block font-bookmania mb-1 text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-input focus:border-gold focus:outline-none"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block font-bookmania mb-1 text-sm">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-input focus:border-gold focus:outline-none"
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div>
          <label htmlFor="region" className="block font-bookmania mb-1 text-sm">
            Region
          </label>
          <select
            id="region"
            name="region"
            value={formData.region}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-input focus:border-gold focus:outline-none"
            disabled={isSubmitting}
          >
            <option value="North Carolina">North Carolina</option>
            <option value="South Carolina">South Carolina</option>
            <option value="Washington DC">Washington DC</option>
            <option value="Virginia">Virginia</option>
          </select>
        </div>

        <div>
          <label htmlFor="insurance" className="block font-bookmania mb-1 text-sm">
            Insurance / Payment Method
          </label>
          <select
            id="insurance"
            name="insurance"
            value={formData.insurance}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-input focus:border-gold focus:outline-none"
            disabled={isSubmitting}
          >
            {insuranceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="preferredContact" className="block font-bookmania mb-1 text-sm">
            Preferred Contact Method
          </label>
          <select
            id="preferredContact"
            name="preferredContact"
            value={formData.preferredContact}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-input focus:border-gold focus:outline-none"
            disabled={isSubmitting}
          >
            <option value="email">Email</option>
            <option value="phone">Phone</option>
          </select>
        </div>

        <div>
          <label htmlFor="concerns" className="block font-bookmania mb-1 text-sm">
            Primary Concerns
          </label>
          <textarea
            id="concerns"
            name="concerns"
            value={formData.concerns}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 rounded-md border border-input focus:border-gold focus:outline-none"
            placeholder="Brief description of your primary concerns"
            disabled={isSubmitting}
          ></textarea>
        </div>

        <button
          type="submit"
          className={`btn-primary w-full py-2 flex justify-center items-center ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
              Submitting...
            </>
          ) : (
            "Join Waiting List"
          )}
        </button>
      </form>
    </div>
  );
};

export default WaitingList;
