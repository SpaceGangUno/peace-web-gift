
"use client";

import LinkCompat from "@/components/LinkCompat";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-[60vh] flex items-center pt-12 pb-6"
      style={{
        background: "linear-gradient to bottom, rgba(139, 144, 120, 0.9), rgba(38, 65, 57, 0.8))"
      }}
    >
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1536623975707-c4b3b2af565d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      ></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center px-4">
          <div className="mb-3 sm:mb-4 flex justify-center">
            <img 
              src="/lovable-uploads/ac8805ec-0a56-4cb7-834d-44a0d1bde1fa.png" 
              alt="The Gift of Peace Logo" 
              className="h-16 sm:h-20 md:h-28 animate-fade-in"
            />
          </div>
          
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bookmania font-light text-creased-khaki mb-2 sm:mb-3 animate-fade-in">
            Find Your Path to Inner Peace
          </h1>
          
          <p className="text-sm sm:text-base text-white/90 mb-4 sm:mb-5 animate-fade-in-slow">
            Compassionate therapy services guiding you toward wellness, 
            emotional balance, and personal growth in a nurturing environment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-2 justify-center animate-fade-in-slow">
            <a href="#services" className="btn-primary rounded-full text-sm">
              Explore Services
            </a>
            <LinkCompat href="/schedule" className="btn-secondary rounded-full border-creased-khaki text-creased-khaki hover:bg-creased-khaki/10 text-sm">
              Schedule Consultation
            </LinkCompat>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-2 left-0 right-0 flex justify-center animate-bounce">
        <a href="#services" className="text-white/70 hover:text-white">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
