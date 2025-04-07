
import { CheckCircle } from "lucide-react";

const EvidenceBased = () => {
  const practices = [
    {
      name: "Cognitive Behavioral Therapy (CBT)",
      description: "A structured approach that helps identify and change negative thought patterns and behaviors."
    },
    {
      name: "Dialectical Behavior Therapy (DBT)",
      description: "Combines cognitive behavioral techniques with mindfulness practices to build emotional regulation skills."
    },
    {
      name: "Eye Movement Desensitization and Reprocessing (EMDR)",
      description: "A specialized approach for processing traumatic memories and reducing their emotional impact."
    },
    {
      name: "Acceptance and Commitment Therapy (ACT)",
      description: "Focuses on accepting difficult feelings while committing to behaviors that improve and enrich life."
    },
    {
      name: "Mindfulness-Based Cognitive Therapy",
      description: "Combines cognitive therapy with mindfulness strategies to help break negative thought patterns."
    }
  ];

  return (
    <section id="evidence-based" className="section bg-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bookmania mb-4">
              Evidence-Based <span className="gold-text">Practices</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We utilize therapeutic approaches backed by scientific research to provide the most 
              effective treatment for your specific needs.
            </p>
          </div>

          <div className="space-y-6">
            {practices.map((practice, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-sm p-6 border border-border hover:border-gold/50 transition-all"
              >
                <div className="flex items-start">
                  <CheckCircle className="text-gold mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bookmania text-xl mb-2">{practice.name}</h3>
                    <p className="text-muted-foreground">{practice.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-muted/30 rounded-lg">
            <h3 className="font-bookmania text-xl mb-3 text-center">Our Commitment to Quality Care</h3>
            <p className="text-center max-w-3xl mx-auto">
              We continuously stay updated on the latest research and best practices 
              in mental health treatment. Our therapeutic approaches are tailored to your 
              individual needs while being grounded in methods proven to be effective.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvidenceBased;
