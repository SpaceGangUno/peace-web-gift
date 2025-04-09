
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
                      src="/lovable-uploads/6cae21e5-5080-4d29-b814-f502644d67e4.png" 
                      alt="Therapist Portrait" 
                      className="rounded-lg w-full h-auto object-cover shadow-lg"
                    />
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl md:text-3xl font-bookmania mb-4 text-emerald-green">
                    Jane Doe, <span className="text-gold">LCSW</span>
                  </h2>
                  
                  <p className="text-wasabi mb-4">
                    With over 15 years of experience in mental health counseling, I specialize in helping 
                    clients navigate through life's challenges using evidence-based therapeutic approaches.
                  </p>
                  
                  <p className="text-wasabi mb-4">
                    My areas of specialty include trauma recovery, anxiety management, couples counseling, 
                    and family therapy. I believe in creating a safe, non-judgmental space where clients 
                    can explore their thoughts and feelings freely.
                  </p>
                  
                  <p className="text-wasabi mb-4">
                    I hold a Master's degree in Social Work from the University of North Carolina 
                    and am a Licensed Clinical Social Worker. My approach combines cognitive-behavioral therapy, 
                    mindfulness practices, and emotion-focused techniques tailored to each client's unique needs.
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
