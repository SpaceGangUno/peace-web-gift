import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

const EvidenceBased = () => {
  const isMobile = useIsMobile();
  const practices = [
    {
      name: "Internal Family Systems",
      description:
        "A type of therapy that sees a person's mind as made up of multiple parts. It's like having an inner family where each part has a job, such as protecting, managing, or soothing us. Some parts might carry pain or negative emotions, we focus on helping these parts feel safe and understood. The goal is to bring harmony within this inner family, enabling a person to feel more balanced and whole.",
      image: "/lovable-uploads/4e618c20-7362-4b98-8998-ecf6d28ab55d.png",
    },
    {
      name: "Cognitive Behavioral Therapy",
      description:
        "CBT focuses on identifying negative thinking patterns and teaching practical skills to cope with everyday challenges more effectively. The goal is to help individuals develop healthier thinking habits, improve emotional regulation, and engage in more constructive behaviors, leading to a better overall quality of life.",
      image: "/lovable-uploads/59111012-e723-4e7c-bc08-12c077ac06f0.png",
    },
    {
      name: "Emotion Focused Therapy",
      description:
        "EFT is based on the idea that unprocessed or unresolved emotions can lead to mental and emotional distress. EFT involves identifying emotional patterns, understanding their origins, and learning how to transform negative emotions into more adaptive ones. This therapeutic approach is particularly useful for individuals dealing with issues such as depression, anxiety, and relationship problems.",
      image: "/lovable-uploads/e8383484-0d57-46d7-a300-dc186b1ebf44.png",
    },
    {
      name: "Mindfulness Techniques",
      description:
        "Mindfulness combines various therapeutic approaches that emphasize cultivating present-moment awareness, non-judgmental acceptance, and self-compassion. These practices help individuals develop a deeper understanding of their thoughts, emotions, and physical sensations, and teach them to respond to life's challenges with a more balanced and focused mindset.",
      image: "/lovable-uploads/f89eb77c-d996-4f6a-8fbe-c03744c14b24.png",
    },
  ];

  return (
    <section id="evidence-based" className="section py-20 bg-emerald-green/10">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bookmania mb-4">
            Evidence-Based <span className="gold-text">Practices</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-light to-gold mx-auto mb-6"></div>
        </div>

        <div className="max-w-5xl mx-auto my-12 evidence-carousel">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full practices-carousel"
          >
            <CarouselContent>
              {practices.map((practice, index) => (
                <CarouselItem key={index} className="md:basis-4/5">
                  <div className="p-1">
                    <Card className="border-wasabi/30 shadow-md overflow-hidden h-full group hover:border-gold transition-all duration-300">
                      <div className="grid md:grid-cols-5 h-full">
                        <div className="md:col-span-2 bg-emerald-green/5 flex items-center justify-center p-0 h-full">
                          <img 
                            src={practice.image} 
                            alt={practice.name} 
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                          />
                        </div>
                        <div className="md:col-span-3 p-6">
                          <CardHeader className="pb-2 px-0 pt-0">
                            <CardTitle className="text-2xl md:text-2xl text-gold">
                              {practice.name}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="px-0 pb-0">
                            <p className="text-noir-vigne/90">{practice.description}</p>
                          </CardContent>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="relative static translate-y-0 translate-x-0 left-0 top-0 bg-gold/80 hover:bg-gold text-noir-vigne border-none" />
              <CarouselNext className="relative static translate-y-0 translate-x-0 right-0 top-0 bg-gold/80 hover:bg-gold text-noir-vigne border-none" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default EvidenceBased;
