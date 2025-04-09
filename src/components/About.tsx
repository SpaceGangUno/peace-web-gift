
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
              find their path to increased self awareness and emotional stability.
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
              Core Principles
            </h3>
            
            <div className="grid grid-cols-1 gap-4 mb-8">
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gold-gradient flex items-center justify-center text-white mr-3 mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="font-bookmania text-emerald-green">Emotional Safety</h4>
                  <p className="text-wasabi text-sm">A safe, non-judgmental space where you can feel comfortable sharing your thoughts and emotions</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gold-gradient flex items-center justify-center text-white mr-3 mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="font-bookmania text-emerald-green">Holistic Approach</h4>
                  <p className="text-wasabi text-sm">We consider all aspects of your life – emotional, mental, physical, and social – to provide well-rounded and comprehensive care</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gold-gradient flex items-center justify-center text-white mr-3 mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="font-bookmania text-emerald-green">Transparency</h4>
                  <p className="text-wasabi text-sm">This is key to fostering trust, openness and authentic collaboration between client and therapist</p>
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
                src="/lovable-uploads/570ec2c5-d6af-40ce-b389-5b6e1a03f448.png"
                alt="The Gift of Peace - Group meditation"
                className="rounded-lg w-full h-auto object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
