
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookList from "@/components/BookList";
import { Helmet } from "react-helmet";

const Books = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Recommended Books | The Gift of Peace Counseling</title>
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-24">
        <BookList />
      </main>
      <Footer />
    </div>
  );
};

export default Books;
