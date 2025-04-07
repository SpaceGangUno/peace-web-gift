
const About = () => {
  return (
    <section id="about" className="section">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bookmania mb-6 text-emerald-green">
              About <span className="gold-text">The Gift of Peace</span>
            </h2>
            
            <p className="text-wasabi mb-4">
              Founded with a vision to provide a sanctuary for healing and growth, 
              The Gift of Peace is dedicated to helping individuals, couples, and families 
              find their path to mental and emotional wellbeing.
            </p>
            
            <p className="text-wasabi mb-6">
              Our approach integrates evidence-based therapeutic techniques with 
              mindfulness practices, creating a holistic treatment experience 
              tailored to your unique needs and goals.
            </p>
            
            <div className="border-l-4 border-gold pl-6 mb-8">
              <p className="text-emerald-green italic font-bookmania text-lg">
                "We believe that peace is not merely the absence of conflict, 
                but the presence of understanding, acceptance, and harmony within ourselves 
                and our relationships."
              </p>
            </div>
            
            <h3 className="font-bookmania text-xl text-emerald-green mb-4">
              Our Values
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gold-gradient flex items-center justify-center text-white mr-3 mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="font-bookmania text-emerald-green">Compassion</h4>
                  <p className="text-wasabi text-sm">Approaching each person with empathy and understanding</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gold-gradient flex items-center justify-center text-white mr-3 mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="font-bookmania text-emerald-green">Respect</h4>
                  <p className="text-wasabi text-sm">Honoring your unique journey and perspective</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gold-gradient flex items-center justify-center text-white mr-3 mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="font-bookmania text-emerald-green">Growth</h4>
                  <p className="text-wasabi text-sm">Supporting continuous personal development</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gold-gradient flex items-center justify-center text-white mr-3 mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="font-bookmania text-emerald-green">Integrity</h4>
                  <p className="text-wasabi text-sm">Maintaining the highest ethical standards</p>
                </div>
              </div>
            </div>
            
            <a href="#contact" className="btn-primary inline-block">
              Connect With Us
            </a>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold rounded-lg"></div>
              <img
                src="/lovable-uploads/6cae21e5-5080-4d29-b814-f502644d67e4.png"
                alt="Therapy environment"
                className="rounded-lg w-full h-auto object-cover shadow-lg"
                style={{ maxHeight: "600px" }}
              />
              <div className="absolute -bottom-6 -right-6 bg-gold-gradient p-4 rounded-lg shadow-lg">
                <p className="font-bookmania text-noir-vigne text-lg">
                  15+ Years of Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
