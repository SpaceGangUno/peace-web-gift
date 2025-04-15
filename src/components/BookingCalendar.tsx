
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import WaitingList from "./WaitingList";

const BookingCalendar = () => {
  const [date] = useState<Date | undefined>(undefined);

  return (
    <section className="section bg-background py-8 sm:py-12 md:py-16">
      <div className="container-custom px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bookmania mb-3 sm:mb-4">
              Schedule a <span className="gold-text">Consultation</span>
            </h1>
            <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mb-8 max-w-3xl mx-auto">
              <p className="text-amber-800 text-sm sm:text-base">
                We are currently not accepting new patients but expect to open our calendar again soon. 
                Please join our waiting list below to be notified when we start accepting new patients.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-start mb-12">
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="bg-white/50 rounded-lg shadow-md p-4 sm:p-6 border border-border relative">
                <div className="absolute inset-0 bg-gray-200/70 backdrop-blur-[1px] rounded-lg z-10"></div>
                <h2 className="font-bookmania text-xl sm:text-2xl mb-4 sm:mb-6 text-gray-400">Select a Date & Time</h2>
                <div className="mb-6 sm:mb-8 opacity-50">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={() => {}}
                    className="rounded-md border mx-auto pointer-events-none"
                    disabled={(date) => true}
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 order-1 lg:order-2">
              <WaitingList />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCalendar;
