
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookList from "@/components/BookList";

const Books = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <BookList />
      </main>
      <Footer />
    </div>
  );
};

export default Books;
