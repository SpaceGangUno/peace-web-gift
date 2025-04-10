
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
        <meta name="description" content="Explore our diverse collection of recommended books on mental health, wellness, and healing, including works focused on African American experiences, spirituality, mindfulness, and more." />
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
