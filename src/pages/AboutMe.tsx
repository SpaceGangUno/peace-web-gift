
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

const AboutMe = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="section">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bookmania mb-6 text-center">
                Meet Your <span className="gold-text">Therapist</span>
              </h1>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-12">
                <div>
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold rounded-lg"></div>
                    <img 
                      src="/lovable-uploads/6904b9af-099b-4179-b02a-e40033d77351.png" 
                      alt="Kaiane Thompson - Therapist Portrait" 
                      className="rounded-lg w-full h-auto object-cover shadow-lg"
                    />
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl md:text-3xl font-bookmania mb-4 text-emerald-green">
                    Meet Kaiane Thompson, <span className="text-gold">LCSW</span>
                  </h2>
                  
                  <p className="text-wasabi mb-4">
                    Kaiane is a compassionate and dedicated therapist with a passion for helping individuals overcome 
                    the effects of trauma, depression, anxiety, and challenging family dynamics. With her expertise, 
                    she empowers clients to unpack their emotional baggage and embark on a transformative journey 
                    towards a more fulfilling life.
                  </p>
                  
                  <p className="text-wasabi mb-4">
                    Her areas of specialty include trauma recovery, anxiety management, couples counseling, 
                    and family therapy. She believes in creating a safe, non-judgmental space where clients 
                    can explore their thoughts and feelings freely.
                  </p>
                  
                  <p className="text-wasabi mb-4">
                    With a Master's degree in Social Work and as a Licensed Clinical Social Worker, 
                    Kaiane's approach combines evidence-based therapeutic techniques, 
                    mindfulness practices, and emotion-focused strategies tailored to each client's unique needs.
                  </p>
                  
                  <h3 className="text-xl font-bookmania mt-6 mb-3 text-emerald-green">
                    Professional Memberships
                  </h3>
                  
                  <ul className="list-disc pl-5 text-wasabi mb-6">
                    <li>National Association of Social Workers (NASW)</li>
                    <li>American Association for Marriage and Family Therapy (AAMFT)</li>
                    <li>International Association of Trauma Professionals</li>
                  </ul>
                  
                  <Link to="/books">
                    <Button className="btn-secondary mt-2">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Recommended Reading
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutMe;
