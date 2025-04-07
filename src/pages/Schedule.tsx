
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingCalendar from "@/components/BookingCalendar";

const Schedule = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <BookingCalendar />
      </main>
      <Footer />
    </div>
  );
};

export default Schedule;
