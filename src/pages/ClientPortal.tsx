
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const ClientPortal = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This would normally connect to an authentication service
    // For now, just show a toast
    toast({
      title: "Portal Login",
      description: "This is a placeholder. Client portal functionality would be implemented with a secure backend.",
    });
    
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="section bg-background">
          <div className="container-custom">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bookmania mb-4">
                  Client <span className="gold-text">Portal</span>
                </h1>
                <p className="text-muted-foreground">
                  Access your secure client portal to view appointments, 
                  access resources, and communicate with your therapist.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-border">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block font-bookmania mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-md border border-input focus:border-gold focus:outline-none"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="block font-bookmania mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 rounded-md border border-input focus:border-gold focus:outline-none"
                      required
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <a href="#" className="text-sm text-gold hover:text-egyptian-earth">
                      Forgot password?
                    </a>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    Log In
                  </button>
                </form>
                
                <div className="mt-6 pt-6 border-t border-border text-center">
                  <p className="text-sm text-muted-foreground">
                    New clients please contact the office to receive your portal credentials.
                  </p>
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

export default ClientPortal;
