
const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-24 pb-12"
      style={{
        background: "linear-gradient(to bottom, rgba(38, 65, 57, 0.9), rgba(17, 26, 24, 0.85))"
      }}
    >
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1536623975707-c4b3b2af565d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      ></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/ac8805ec-0a56-4cb7-834d-44a0d1bde1fa.png" 
              alt="The Gift of Peace Logo" 
              className="h-32 md:h-48 animate-fade-in"
            />
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bookmania font-light text-creased-khaki mb-6 animate-fade-in">
            Find Your Path to Inner Peace
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in-slow">
            Professional therapy services guiding you toward mental wellness, 
            emotional balance, and personal growth in a supportive environment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-slow">
            <a href="#services" className="btn-primary">
              Explore Services
            </a>
            <a href="#contact" className="btn-secondary">
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-0 right-0 flex justify-center animate-bounce">
        <a href="#services" className="text-white/70 hover:text-white">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="32" 
            height="32" 
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
