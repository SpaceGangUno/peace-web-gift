
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EvidenceBased = () => {
  const practices = [
    {
      name: "Psychodynamic Therapy",
      description:
        "Psychodynamic therapy is based on the idea that our past experiences, especially those from our early childhood, have a significant impact on our present behavior, thoughts, and emotional patterns. In simpler terms, psychodynamic therapy helps people dig deep into their past to better understand why they think and act the way they do today to work through any emotional issues and improve their overall mental health.",
      image: "/lovable-uploads/3d4db493-ae96-4b9b-8c69-1f2d8da78c89.png",
    },
    {
      name: "Cognitive Behavioral Therapy",
      description:
        "CBT focuses on identifying negative thinking patterns and teaching practical skills to cope with everyday challenges more effectively. The goal is to help individuals develop healthier thinking habits, improve emotional regulation, and engage in more constructive behaviors, leading to a better overall quality of life.",
      image: "/lovable-uploads/10b860a6-a737-466f-a1aa-1ff1f9c5429b.png",
    },
    {
      name: "Emotion Focused Therapy",
      description:
        "EFT is based on the idea that unprocessed or unresolved emotions can lead to mental and emotional distress. EFT involves identifying emotional patterns, understanding their origins, and learning how to transform negative emotions into more adaptive ones. This therapeutic approach is particularly useful for individuals dealing with issues such as depression, anxiety, and relationship problems.",
      image: "/lovable-uploads/217a179e-6020-4251-bd91-348812ee99b2.png",
    },
    {
      name: "Mindfulness Techniques",
      description:
        "Mindfulness combines various therapeutic approaches that emphasize cultivating present-moment awareness, non-judgmental acceptance, and self-compassion. These practices help individuals develop a deeper understanding of their thoughts, emotions, and physical sensations, and teach them to respond to life's challenges with a more balanced and focused mindset.",
      image: "/lovable-uploads/af4f5b72-1ce8-4ee0-85f6-94ba223d8166.png",
    },
  ];

  return (
    <section id="evidence-based" className="section py-20 bg-[#f8fbf2]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-gold-dark text-sm uppercase tracking-wider font-medium mb-2 block">Our Approach</span>
          <h2 className="text-3xl md:text-4xl font-bookmania mb-4">
            Evidence-Based <span className="gold-text">Practices</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-light to-gold mx-auto mb-6"></div>
          <p className="text-wasabi max-w-2xl mx-auto">
            Our therapeutic techniques are rooted in scientifically validated approaches to mental wellness and personal growth.
          </p>
        </div>

        <div className="max-w-5xl mx-auto my-12 evidence-carousel">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {practices.map((practice, index) => (
                <CarouselItem key={index} className="md:basis-4/5">
                  <div className="p-1">
                    <Card className="border-wasabi/30 shadow-md overflow-hidden h-full group hover:border-gold transition-all duration-300">
                      <div className="grid md:grid-cols-5 h-full">
                        <div className="md:col-span-2 bg-emerald-green/5 flex items-center justify-center p-4">
                          <img 
                            src={practice.image} 
                            alt={practice.name} 
                            className="w-24 h-24 md:w-32 md:h-32 object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
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
              <CarouselPrevious 
                className="relative static translate-y-0 bg-gold/80 hover:bg-gold text-noir-vigne border-none h-10 w-10"
              />
              <CarouselNext 
                className="relative static translate-y-0 bg-gold/80 hover:bg-gold text-noir-vigne border-none h-10 w-10" 
              />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default EvidenceBased;
