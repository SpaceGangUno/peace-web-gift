
import WaitingList from "./WaitingList";

const BookingCalendar = () => {
  return (
    <section className="section bg-background py-8 sm:py-12 md:py-16">
      <div className="container-custom px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bookmania mb-3 sm:mb-4">
              Schedule a <span className="gold-text">Consultation</span>
            </h1>
          </div>

          {/* Waiting list form only */}
          <div className="flex justify-center">
            <WaitingList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCalendar;
