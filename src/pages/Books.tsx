
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
        <meta name="description" content="Explore our diverse collection of recommended books on mental health, wellness, and healing, including works focused on African American experiences, spirituality, mindfulness, abuse recovery, and emotional intelligence." />
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container-custom mx-auto px-4 mb-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bookmania mb-4">
              <span className="gold-text">Inclusive</span> Book Recommendations
            </h1>
            <p className="text-muted-foreground">
              Our expanded library includes diverse perspectives on mental health and wellness, including works on spirituality, 
              mindfulness, emotional intelligence, abuse recovery, and specifically focused on African American experiences and other cultural contexts.
            </p>
          </div>
        </div>
        <BookList />
      </main>
      <Footer />
    </div>
  );
};

export default Books;
