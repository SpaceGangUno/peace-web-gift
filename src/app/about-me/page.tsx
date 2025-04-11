
"use client";

import React from "react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import LinkCompat from "@/components/LinkCompat";
import { BookOpen, Calendar } from "lucide-react";

const AboutMePage = () => {
  return (
    <PageLayout>
      <section className="section">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bookmania mb-6 text-center">
              About <span className="gold-text">the Founder</span>
            </h1>
            
            <div className="max-w-3xl mx-auto mt-8 md:mt-12">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
                <div className="md:w-1/3">
                  <div className="relative">
                    <div className="absolute -top-2 -left-2 w-full h-full border-2 border-gold rounded-lg"></div>
                    <img 
                      src="/lovable-uploads/440e32be-6c35-4af0-b468-8eba9e5e5149.png"
                      alt="Kaiane Thompson, LCSW - Founder of The Gift of Peace"
                      className="rounded-lg w-full h-auto object-cover shadow-lg relative z-10"
                    />
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h2 className="text-2xl md:text-3xl font-bookmania mb-4 text-emerald-green">
                    Kaiane Thompson, <span className="text-gold">LCSW</span>
                  </h2>
                  
                  <p className="text-wasabi mb-4">
                    Kaiane holds a Bachelor's degree from North Carolina A&T State University and a Master's degree 
                    in Social Work from UNC Charlotte. Kaiane is a Licensed Clinical Social Worker in North Carolina, 
                    South Carolina, Virginia, and Washington, D.C.
                  </p>
                  
                  <p className="text-wasabi mb-4">
                    Kaiane has built a diverse clinical foundation through her work in child welfare, 
                    transitional living programs, and community mental health. These experiences have 
                    given her a well-rounded perspective on the many ways life can impact us. She works 
                    with adults (21+) in navigating emotional challenges through periods of growth, 
                    transition, and pain.
                  </p>
                  
                  <p className="text-wasabi mb-4">
                    Kaiane specializes in supporting individuals impacted by trauma, anxiety, depression, 
                    and disconnection. She believes healing begins with understanding how past experiences 
                    shape current emotions and relationships, and works to create a space where clients 
                    feel safe, seen, and supported.
                  </p>
                  
                  <p className="text-wasabi mb-4">
                    Her approach is compassionate, direct, and grounded in evidence-based practices. 
                    Beginning this fall, Kaiane will also be offering clinical supervision for LCSWAs.
                  </p>
                </div>
              </div>
              
              <h3 className="text-xl font-bookmania mt-8 mb-3 text-emerald-green">
                State Licenses
              </h3>
              
              <ul className="list-disc pl-5 text-wasabi mb-6">
                <li>South Carolina license #: 15570</li>
                <li>North Carolina license #: C014665</li>
                <li>D.C. license #: LC200003802</li>
                <li>Virginia license #: 0904017793</li>
              </ul>
              
              <div className="text-center mt-8 flex flex-wrap gap-4 justify-center">
                <LinkCompat href="/books">
                  <Button className="btn-secondary">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Recommended Reading
                  </Button>
                </LinkCompat>
                <LinkCompat href="/schedule">
                  <Button className="btn-primary">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Consultation
                  </Button>
                </LinkCompat>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutMePage;
